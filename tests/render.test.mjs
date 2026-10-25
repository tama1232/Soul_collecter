import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { pixelViewport, inView, advancePose } from '../src/engine/render-utils.js';
import { FixedStepLoop } from '../src/engine/loop.js';
import { GameRenderer } from '../src/engine/renderer.js';
import { SPRITE_LAYOUT } from '../src/config/sprites.js';
import { resolveSpriteFrame } from '../src/engine/sprite-animation.js';
import { ELIN } from '../src/art/elin.js';

test('DPR1/2/3, desktop, portrait, and landscape use identical x/y pixel scale', () => {
  for (const dpr of [1, 2, 3]) for (const [width, height] of [[1920, 1080], [390, 844], [844, 390], [320, 568]]) {
    const viewport = pixelViewport(width, height, dpr);
    assert.equal(viewport.width / 480, viewport.height / 270); assert.ok(Number.isInteger(viewport.scale));
    assert.ok(viewport.cssWidth <= width + 0.01 && viewport.cssHeight <= height + 0.01);
  }
});

test('renderer avoids reallocating the same canvas on repeated resize', () => {
  let resets = 0, width = 960, height = 540;
  const display = { style: {}, get width() { return width; }, set width(value) { resets++; width = value; }, get height() { return height; }, set height(value) { resets++; height = value; } };
  const originalWindow = globalThis.window; const originalDpr = globalThis.devicePixelRatio;
  globalThis.window = { visualViewport: { width: 960, height: 540 } }; globalThis.devicePixelRatio = 1;
  try { const renderer = Object.create(GameRenderer.prototype); Object.assign(renderer, { display, d: {} }); renderer.resize(); renderer.resize(); assert.equal(resets, 0); assert.equal(renderer.d.imageSmoothingEnabled, false); } finally { globalThis.window = originalWindow; globalThis.devicePixelRatio = originalDpr; }
});

test('pose updates depend on simulation ticks, not render frequency', () => {
  const create = () => ({ state: 'normal', def: { id: 'test' }, hdPose: 'idle0', hdSince: 0, pose: () => 'run0' });
  const sixty = create(), highRefresh = create();
  for (let tick = 0; tick < 60; tick++) { advancePose(sixty, () => true); advancePose(highRefresh, () => true); for (let render = 0; render < 3; render++) void highRefresh.hdSince; }
  assert.equal(sixty.hdSince, highRefresh.hdSince); assert.equal(sixty.hdSince, 59);
  assert.equal(inView({ b: { x: 900, y: 900, w: 10, h: 10 } }, 0, 0), false);
});

test('idle animation uses every authored frame and keeps portraits static', () => {
  const cycle = ELIN.cycles.idle;
  for (let index = 0; index < cycle.frames.length * 2; index++) {
    // The global time and legacy idle aliases must not override the motion clock.
    assert.equal(resolveSpriteFrame(ELIN, index % 2 ? 'idle1' : 'idle0', {
      t: 403, cycleSince: index * cycle.tick, since: 0
    }), cycle.frames[index % cycle.frames.length]);
  }
  assert.equal(resolveSpriteFrame(ELIN, 'idle1'), ELIN.poses.idle1);
  assert.equal(resolveSpriteFrame(ELIN, 'jump', { since: 50 }), ELIN.poses.jump);
  assert.equal(resolveSpriteFrame({ ...ELIN, cycles: {} }, 'idle0', { t: 80 }), 'idle0');
});

test('running starts at frame zero, survives pose aliases, and resets after interruptions or swaps', () => {
  let pose = 'idle0';
  const player = { state: 'normal', def: { id: 'elin' }, pose: () => pose };
  advancePose(player, () => true);
  pose = 'run4'; // Movement can start at any point in the old global pose clock.
  for (let tick = 0; tick < 36; tick++) {
    pose = 'run' + Math.floor((tick + 20) / 5) % 6;
    advancePose(player, () => true);
    assert.equal(player.hdMotionSince, tick);
    assert.equal(resolveSpriteFrame(ELIN, pose, { t: 999, cycleSince: player.hdMotionSince }),
      ELIN.cycles.run.frames[Math.floor(tick / ELIN.cycles.run.tick) % ELIN.cycles.run.frames.length]);
  }
  pose = 'hurt'; advancePose(player, () => true);
  pose = 'run2'; advancePose(player, () => true);
  assert.equal(player.hdMotionSince, 0);
  advancePose(player, () => true); assert.equal(player.hdMotionSince, 1);
  player.def = { id: 'solen' }; advancePose(player, () => true);
  assert.equal(player.hdMotionSince, 0); assert.equal(player.hdSince, 0);
  assert.equal(player.hdPrev, undefined);
});

test('hurt and death stop on the final frame and drawn attack transitions retain their timing', () => {
  for (const pose of ['hurt', 'dead']) {
    const cycle = ELIN.cycles[pose];
    for (const index of [0, 1, cycle.frames.length - 1, cycle.frames.length + 10]) {
      assert.equal(resolveSpriteFrame(ELIN, pose, { since: index * cycle.tick, t: 999 }),
        cycle.frames[Math.min(index, cycle.frames.length - 1)]);
    }
  }
  const definition = { frames: { attack9: {}, attack9_10: {}, attack10: {}, idle0: {} },
    poses: { windHigh: 'attack9', slashDown: 'attack10' }, cycles: {} };
  for (const since of [0, 1]) assert.equal(resolveSpriteFrame(definition, 'slashDown', { prev: 'windHigh', since }), 'attack9_10');
  assert.equal(resolveSpriteFrame(definition, 'slashDown', { prev: 'windHigh', since: 2 }), 'attack10');
  assert.equal(resolveSpriteFrame(definition, 'slashDown', { since: 0 }), 'attack10');
});

test('the game loop stops hidden catch-up and has equivalent simulation at 60/120/144Hz', () => {
  const results = [];
  for (const hz of [60, 120, 144]) {
    let now = 0, callback, updates = 0, renders = 0, canceled = 0;
    const document = { hidden: false, addEventListener() {}, removeEventListener() {} };
    const env = { document, performance: { now: () => now }, requestAnimationFrame(fn) { callback = fn; return 1; }, cancelAnimationFrame() { canceled++; } };
    const loop = new FixedStepLoop(() => updates++, () => renders++, env); loop.start();
    for (let index = 1; index <= hz * 2; index++) { now = index * 1000 / hz; callback(now); }
    results.push(updates); assert.ok(renders >= 118 && renders <= 121);
    document.hidden = true; now += 10000; callback(now); const before = updates;
    document.hidden = false; loop.visibility(); now += 16; callback(now); assert.ok(updates - before <= 1);
    loop.stop(); assert.ok(canceled); assert.equal(loop.running, false);
  }
  assert.ok(Math.max(...results) - Math.min(...results) <= 1);
});

test('all sprite frame rectangles, animation references, and anchors fit their PNG atlases', async () => {
  let frames = 0;
  for (const file of await readdir(new URL('../src/art/', import.meta.url))) {
    const atlas = Object.values(await import(new URL('../src/art/' + file, import.meta.url)))[0];
    const url = new URL(atlas.sheet); url.pathname = url.pathname.replace('/assets/', '/public/assets/');
    const png = await readFile(url); const width = png.readUInt32BE(16), height = png.readUInt32BE(20);
    const outputWidth = SPRITE_LAYOUT.fullWidth;
    for (const [name, frame] of Object.entries(atlas.frames)) {
      assert.ok(frame.w > 0 && frame.h > 0 && frame.x >= 0 && frame.y >= 0 && frame.x + frame.w <= width && frame.y + frame.h <= height, `${file}:${name}:source`);
      const dx = outputWidth / 2 - frame.ax, dy = 88 - frame.ay;
      assert.ok(dx >= 0 && dy >= 0 && dx + frame.w <= outputWidth && dy + frame.h <= 96, `${file}:${name}:anchor`); frames++;
    }
    for (const [motion, cycle] of Object.entries(atlas.cycles)) {
      assert.ok(cycle.tick > 0 && cycle.frames.length > 0);
      const pose = motion === 'idle' || motion === 'run' ? motion + '0' : motion;
      for (const [index, name] of cycle.frames.entries()) {
        assert.ok(atlas.frames[name], file + ':' + name);
        assert.equal(resolveSpriteFrame(atlas, pose, { cycleSince: index * cycle.tick, since: index * cycle.tick }), name, file + ':' + motion);
      }
    }
    for (const name of Object.values(atlas.poses)) assert.ok(atlas.frames[name], `${file}:pose:${name}`);
  }
  assert.ok(frames > 500);
});
