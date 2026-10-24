import test from 'node:test';
import assert from 'node:assert/strict';

// Application-level smoke test with an inert DOM/Canvas interface. No layout,
// pixels, browser engine, network session, or visual fidelity is emulated.
function environment() {
  const nodes = new Map();
  const context = canvas => new Proxy({ canvas, getTransform: () => ({a:1,b:0,c:0,d:1,e:0,f:0}), measureText: text => ({ width: String(text).length * 5 }), getImageData: (x, y, width, height) => ({ data: new Uint8ClampedArray(Math.max(0, width * height * 4)), width, height }), createImageData: (width, height) => ({ data: new Uint8ClampedArray(width * height * 4), width, height }), createRadialGradient: () => ({ addColorStop() {} }), createLinearGradient: () => ({ addColorStop() {} }), createPattern: () => ({}) }, { get: (object, key) => key in object ? object[key] : () => {} });
  class Element {
    constructor(tag = 'div') { this.tagName = tag.toUpperCase(); this.style = { setProperty() {} }; this.dataset = {}; this.children = []; this.value = ''; this.width = 480; this.height = 270; this.classList = { add() {}, remove() {}, toggle() {} }; this.cache = new Map(); }
    set id(value) { this._id = value; nodes.set(value, this); } get id() { return this._id; }
    appendChild(node) { this.children.push(node); return node; } append(...nodes) { this.children.push(...nodes); } remove() {} replaceChildren(...nodes) { this.children = nodes; }
    setAttribute() {} removeAttribute() {} addEventListener() {} removeEventListener() {} focus() {} blur() {}
    getContext() { return this.context ??= context(this); }
    getBoundingClientRect() { return { x: 0, y: 0, left: 0, top: 0, width: 960, height: 540 }; }
    querySelector(selector) { if (!this.cache.has(selector)) this.cache.set(selector, new Element(selector.includes('input') ? 'input' : selector.includes('form') ? 'form' : 'div')); return this.cache.get(selector); }
    querySelectorAll() { return []; }
  }
  const canvas = new Element('canvas'); canvas.id = 'game';
  const document = { hidden: false, visibilityState: 'visible', body: new Element('body'), head: new Element('head'), documentElement: new Element('html'), createElement: tag => new Element(tag), createTextNode: text => ({ textContent: text }), getElementById: id => nodes.get(id) ?? null, addEventListener() {}, removeEventListener() {}, querySelector() { return null; }, querySelectorAll() { return []; } };
  const storage = () => { const map = new Map(); return { get length() { return map.size; }, key: index => [...map.keys()][index], getItem: key => map.get(key) ?? null, setItem: (key, value) => map.set(key, String(value)), removeItem: key => map.delete(key) }; };
  globalThis.window = globalThis; globalThis.document = document;
  globalThis.localStorage = storage(); globalThis.sessionStorage = storage();
  globalThis.location = { origin: 'https://test.invalid', href: 'https://test.invalid/', reload() {} };
  globalThis.innerWidth = 960; globalThis.innerHeight = 540; globalThis.devicePixelRatio = 1;
  globalThis.visualViewport = { width: 960, height: 540, addEventListener() {} };
  globalThis.addEventListener = () => {}; globalThis.removeEventListener = () => {};
  globalThis.matchMedia = () => ({ matches: false, addEventListener() {} });
  globalThis.requestAnimationFrame = () => 1; globalThis.cancelAnimationFrame = () => {};
  globalThis.Image = class { width = 160; height = 96; set src(value) { this.url = value; queueMicrotask(() => this.onload?.()); } };
  globalThis.fetch = async () => ({ ok: true, status: 200, json: async () => ({ id: 'soul-collecter-0.7.1' }), headers: new Headers() });
  const originalInterval = globalThis.setInterval;
  globalThis.setInterval = (...args) => { const timer = originalInterval(...args); timer.unref(); return timer; };
  globalThis.CONTRACT_CONFIG = { firebase: { apiKey: '', projectId: '' } };
  return { canvas };
}

test('real game modules boot, create an independent local account, save and render without runtime exceptions', async () => {
  environment();
  const { app, accountStore } = await import('../src/game.js');
  await new Promise(resolve => setTimeout(resolve, 5));
  assert.equal(accountStore.backend, 'local');
  assert.ok(app.scene);
  app.scene.world(app.r.w); app.scene.ui(app.r.d);
  await accountStore.signUp('qatester', 'unit-test-only-123');
  const { createSave, RunState, CHARACTER_LIST, CHARACTERS } = await import('../src/game-data.js');
  let save = createSave(); app.login(save); save=app.save; app.persist();
  assert.equal(accountStore.readCache().save.stones, save.stones);
  save.chars[CHARACTER_LIST[1].id] = { lv: 1, aw: 0, count: 1 };
  save.loadout.chars[1] = CHARACTER_LIST[1].id;
  for (const [file, exported] of [['gacha', 'GachaScene'], ['growth', 'GrowthScene'], ['upgrades', 'UpgradeScene'], ['achievements', 'AchScene'], ['codex', 'CodexScene'], ['loadout', 'LoadoutScene']]) {
    const Scene = (await import(`../src/features/${file}.js`))[exported];
    const scene = new Scene(app.scene); scene.enter?.(); scene.world?.(app.r.w); scene.ui?.(app.r.d); scene.leave?.();
    if (file === 'growth') { for (const tab of [1, 2, 3]) { scene.tab = tab; scene.ui(app.r.d); } }
  }
  const { RunScene } = await import('../src/game.js');
  const run = new RunState(save, 123); const runScene = new RunScene(run); runScene.enter();
  // Real TileWorld regressions: final-position-only collision used to miss these tiles.
  const TileWorld=runScene.room.world.constructor;
  const body=(x,y,vx,vy)=>({x,y,w:12,h:12,vx,vy,onGround:false,dropTimer:10,hitWall:0});
  const horizontal=new TileWorld(20,20);for(let y=0;y<20;y++)horizontal.set(5,y,1);
  const right=body(20,30,140,0);horizontal.move(right);assert.equal(right.x,68);assert.equal(right.hitWall,1);assert.equal(right.dropTimer,9);
  const left=body(140,30,-120,0);horizontal.move(left);assert.equal(left.x,96);assert.equal(left.hitWall,-1);
  const vertical=new TileWorld(20,20);for(let x=0;x<20;x++)vertical.set(x,5,1);
  const down=body(30,20,0,140);vertical.move(down);assert.equal(down.y,68);assert.equal(down.onGround,true);
  const up=body(30,140,0,-120);vertical.move(up);assert.equal(up.y,96);assert.equal(up.vy,0);
  const {moveBodyTo}=await import('../src/engine/collision.js');
  const blink=body(20,30,0,0);moveBodyTo(horizontal,blink,160,30);assert.equal(blink.x,68);assert.equal(blink.dropTimer,10);
  const platform=new TileWorld(20,20);for(let x=0;x<20;x++)platform.set(x,5,2);
  const fall=body(30,20,0,140);fall.dropTimer=0;platform.move(fall);assert.equal(fall.y,68);
  const jump=body(30,140,0,-120);platform.move(jump);assert.ok(Math.abs(jump.y-20)<1e-9);
  const drop=body(30,20,0,140);platform.move(drop);assert.ok(Math.abs(drop.y-160)<1e-9);assert.equal(drop.dropTimer,9);
  for (let tick = 0; tick < 5; tick++) { app.input.poll(); runScene.update(); app.input.endStep(); }
  runScene.world(app.r.w); runScene.ui(app.r.d);
  const second = new RunState(save, 2); assert.equal(second.stats.kills, 0);
  // Exercise every new path using actual engine objects, not mock game rules.
  const data=await import('../src/game-data.js');
  const runtime=await import('../src/game.js');
  const {GachaScene}=await import('../src/features/gacha.js');
  const {AchScene}=await import('../src/features/achievements.js');
  const {UpgradeScene}=await import('../src/features/upgrades.js');
  const {CodexScene}=await import('../src/features/codex.js');
  const {LoadoutScene}=await import('../src/features/loadout.js');
  const upgrade=new UpgradeScene(app.scene);save.upgrades.atk=10;save.crystals=1e100;
  upgrade.sel=data.PERMANENT_UPGRADES.findIndex(def=>def.id==='atk');
  const menu=app.input.menu;app.input.menu=key=>key==='ok';upgrade.update();app.input.menu=menu;
  assert.equal(save.upgrades.atk,10);for(let id=1;id<=7;id++)save.storyClear[id]=true;app.input.menu=key=>key==='ok';upgrade.update();app.input.menu=menu;assert.equal(save.upgrades.atk,11);upgrade.ui(app.r.d);
  const achievements=new AchScene(app.scene);achievements.tab=1;achievements.tsel=data.data_ce.length-1;achievements.ui(app.r.d);
  assert.ok(achievements.titleTop>0);assert.equal(data.ACHIEVEMENTS.some(achievement=>achievement.id==='growth300'),false);
  for(const unlocked of [false,true]) {
    save.eightUnlocked=unlocked;save.compass=100;
    const pull=runtime.runtime_Fd(save,'six',1,false,()=>0);
    assert.equal(pull[0].rarity,unlocked?8:7);
    const normal=runtime.runtime_Fd(save,'pickup',1,false,()=>0);
    assert.equal(normal[0].rarity,unlocked?8:7);
    const weapon=runtime.runtime_Fd(save,'weapon',1,false,()=>0);
    assert.equal(weapon[0].rarity,unlocked?8:7);if(unlocked) assert.equal(weapon[0].id,'nemea_requiem');
    const secretCodex=new CodexScene(app.scene);
    assert.equal(secretCodex.characters.some(hero=>hero.id==='anima'),unlocked);
    assert.equal(secretCodex.weapons.some(weapon=>weapon.id==='nemea_requiem'),unlocked);
    const gacha=new GachaScene(app.scene);
    for(let banner=0;banner<4;banner++){gacha.banner=banner;gacha.ui(app.r.d);assert.ok(gacha.detailItems().length);assert.equal(gacha.detailItems().some(item=>item.rarity===8),unlocked);}
  }
  save.storyClear[1]=true;save.loadout.chars=['anima','kael'];save.upgrades={};
  const rush=new data.RunState(save,42);rush.startBossRush(save,1);
  const scene=new RunScene(rush);scene.enter();
  // Duplicate relic copies add stats, but retain a single trigger and crest identity.
  rush.relics=['magma_core'];scene.room.rebuild();const triggerCount=scene.room.build.triggers.get('finisher').length;
  const crestCount=scene.room.build.crests.find(crest=>crest.id==='flame').count;
  rush.relics.push('magma_core');scene.room.rebuild();
  assert.equal(scene.room.build.triggers.get('finisher').length,triggerCount);
  assert.equal(scene.room.build.crests.find(crest=>crest.id==='flame').count,crestCount);
  assert.ok(scene.room.build.base.allDmg>0);
  // Deterministic hidden encounter: threshold succeeds without altering the regular order.
  save.eightUnlocked=false;rush.eightUnlocked=false;rush.rng.next=()=>0;
  const regular=scene.room.boss.bd.id;
  scene.onBoss(regular);assert.equal(rush.hiddenPending,true);
  assert.ok(scene.room.props.some(prop=>prop.kind==='door'&&prop.nodeId===-1));
  scene.overlay=null;scene.transTarget=-1;scene.nextRoom();
  assert.equal(rush.chapter,1);assert.equal(scene.room.boss.bd.id,'soul_archon');
  const boss=scene.room.boss,room=scene.room;boss.intro=0;boss.state='idle';
  // All five real phase attacks execute without an undefined pattern or sprite.
  room.god=true;
  for(let phase=0;phase<5;phase++) {
    boss.phase=phase;boss.phaseT=0;boss.rm=room;boss.pickPattern();assert.ok(boss.pattern);
    for(const pattern of boss.bd.patterns[phase]) {
      boss.pattern=pattern;boss.pt=0;boss.subs=[];
      for(let tick=1;tick<=160;tick++){room.time++;boss.runPattern(room,pattern,tick);}
    }
    scene.world(app.r.w);scene.ui(app.r.d);
  }
  // Damage cannot skip any of the four transitions, even with massive damage.
  boss.phase=0;boss.hp=boss.maxHp;boss.phaseT=0;boss.pattern='';boss.subs=[];boss.state='idle';
  const hit={m:1e9,kind:'skill',el:'holy',kb:0,up:0,hs:0,dir:1};
  for(let phase=0;phase<4;phase++) {
    room.damageEnemy(boss,hit);
    assert.equal(boss.hp,Math.floor(boss.maxHp*boss.bd.phases[phase]));
    boss.ai(room);assert.equal(boss.phase,phase+1);assert.ok(boss.invulnerable);
    const hp=boss.hp;room.damageEnemy(boss,hit);assert.equal(boss.hp,hp);
    boss.phaseT=0;boss.state='idle';
  }
  // All elements include real status application on successful hero hits.
  for(let n=0;n<5;n++) room.damageEnemy(boss,{...hit,m:.001});
  assert.ok(boss.status.burn>0&&boss.status.bleed>0&&boss.status.shock>0&&boss.status.poison>0&&boss.status.chill>0);
  scene.onBoss('soul_archon');assert.equal(save.eightUnlocked,true);
  assert.equal(rush.stats.bosses.length,1);assert.equal(data.normalizeSave(save).eightUnlocked,true);
  const checkpoint=save.run;assert.equal(checkpoint.data.hiddenFight,true);
  const restored=data.restoreRun(save,checkpoint);assert.equal(restored.hiddenFight,true);
  scene.transTarget=-1;scene.nextRoom();assert.equal(rush.chapter,2);assert.equal(rush.hiddenFight,false);
  assert.equal(rush.theme,rush.rushList[1].theme);
  rush.newChapter(rush.rushList.length+1,rush.rushList[0].theme);scene.enterNode(0,true);
  const player=scene.room.player;player.state='normal';player.skillCd=[0,0];
  assert.equal(player.tryAction('skill1'),true);
  const expected=Math.max(1,(player.def.skills[0].cd-scene.room.build.modFor('skill1').cd)*(1-Math.min(.7,scene.room.stats.cdr??0)))+.5;
  assert.equal(player.skillCd[0],expected);assert.equal(player.skillMax[0],expected);
  player.state='normal';player.ultCd=0;player.tryAction('ult');assert.ok(player.ultMax>=.5);
  const codex=new CodexScene(app.scene);codex.comboList(app.r.d);codex.relicGrid(app.r.d);
  const loadout=new LoadoutScene(app.scene);loadout.rush=true;loadout.ui(app.r.d);
  assert.ok(!runtime.runtime_kt.regions?.some?.(region=>region.id==='lf:8'));
  // Dynamic imports must really resolve; a successful boot alone used to hide HD load failures.
  for(const id of ['caelus','elin','solen','lucas','astral','hanbyeol','enoch','ashen','luciel','arien','aurel','vega','flora','gambler','lumien','jax','baekya','heukwol']) {
    const asset=runtime.loadSpriteAsset(id);await asset.promise;assert.equal(asset.status,'ready',id);
  }
  // An imported save flag must never grant debug or operator capabilities.
  app.save.developerRole='owner';app.setDebug(true);assert.equal(app.debug,false);
  const {installDeveloperConsole}=await import('../src/features/developer-console.js');
  const fakeDeveloper={authorized:true,role:{kind:'owner',enabled:true},sync:async()=>{},operation:async action=>action==='listPlayers'?{players:[],cursor:null}:action==='audit'?[]:{}};
  const panel=installDeveloperConsole({getGame:()=>app,developer:fakeDeveloper,characters:data.CHARACTERS,weapons:data.WEAPONS});
  await panel.open();const panelRoot=document.body.children.at(-1),nav=panelRoot.querySelector('nav');assert.equal(nav.children.length,6);
  for(const button of nav.children) await button.onclick();
  panel.close();
  // Actual animation moves are [frame, vx, vy]. The former frame-as-vx bug
  // launched characters across a room late in a skill animation.
  player.startAction('skill1',{dur:100,move:[[0,2,0],[30,-1,-2]],ev:[]});
  assert.equal(player.b.vx,2*player.facing);player.actF=30;player.applyMoves();assert.equal(player.b.vx,-player.facing);assert.equal(player.b.vy,-2);
  player.startAction('swap',{dur:20,move:[[0,20,0]],ev:[]});assert.equal(player.b.vx,0);
  player.startAction('skill1',{dur:30,ev:[]});assert.equal(player.canDash(),false);assert.equal(player.canSwap(),false);player.endAct();
  // Every hero receives simultaneous attack/skill/swap/dash inputs in real rooms.
  for(const hero of data.CHARACTER_LIST){
    const stressSave=data.createSave();stressSave.chars[hero.id]={lv:10,aw:0,count:1,sk:[10,10,10,10]};stressSave.loadout.chars=[hero.id,'kael'];
    const stressScene=new RunScene(new data.RunState(stressSave,84));stressScene.enter();const stressRoom=stressScene.room;stressRoom.god=true;
    for(let tick=0;tick<180;tick++){stressRoom.time++;stressRoom.input={right:tick%60<30,left:tick%60>=30,atk:true,atkP:true,s1P:true,s2P:true,ultP:true,swapP:true,dashP:true,jumpP:tick%23===0};stressRoom.step();assert.ok(Number.isFinite(stressRoom.player.b.x)&&Number.isFinite(stressRoom.player.b.vx),hero.id);assert.ok(Math.abs(stressRoom.player.b.vx)<=12,hero.id);}
  }
  // Later books add a distinct, warned phase mechanic; all pulses finish.
  for(const book of [2,3,4]){room.run.book=book;room.run.story=book*7;room.run.bossRush=false;boss.startMemoryEcho(room);assert.ok(boss.memoryEcho);for(let tick=0;tick<225;tick++)if(boss.memoryEcho)boss.updateMemoryEcho(room);assert.equal(boss.memoryEcho,null);}
  // Permanent deletion of a disposable local test identity preserves the first account.
  await accountStore.signUp('deleteqa','test-pass-123');await accountStore.permanentlyDelete('test-pass-123');assert.equal(accountStore.localAccounts().deleteqa,undefined);assert.ok(accountStore.localAccounts().qatester);
  app.loop.stop();

});
