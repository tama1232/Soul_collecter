import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {CHARACTER_ART} from '../src/config/character-art.js';
import {CHARACTERS,CHARACTER_LIST} from '../src/game-data.js';
import {resolveSpriteFrame,spriteGeometry} from '../src/engine/sprite-animation.js';

test('the complete roster maps uniquely, including Nemea and the four source7 rows', () => {
  assert.deepEqual(Object.keys(CHARACTER_ART).sort(),CHARACTER_LIST.map(hero=>hero.id).sort());
  assert.equal(new Set(Object.values(CHARACTER_ART).map(art=>art.source)).size,56);
  assert.equal(new Set(Object.values(CHARACTER_ART).map(art=>art.sheet)).size,53);
  for(const id of Object.keys(CHARACTER_ART)) assert.ok(CHARACTERS[id],id);
  assert.equal(CHARACTER_ART.anima.source,'source_01/source_01_character_01.png');
  const ids=['seres','drakan','astera','marionne'];
  for(const [index,id] of ids.entries()) {
    assert.equal(CHARACTER_ART[id].asset,'additional-four.png',id);
    assert.ok(CHARACTER_ART[id].source.endsWith('#row='+(index+1)),id);
    assert.equal(CHARACTER_ART[id].sha256,CHARACTER_ART.seres.sha256,id);
  }
});

test('uploaded pixels remain unchanged and all eight poses fit the drawing area', async () => {
  for(const [id,art] of Object.entries(CHARACTER_ART)) {
    const url = new URL(art.sheet);url.pathname=url.pathname.replace('/assets/','/public/assets/');
    const png=await readFile(url);
    assert.equal(createHash('sha256').update(png).digest('hex'),art.sha256,id);
    assert.equal(png.readUInt32BE(16),art.width,id);assert.equal(png.readUInt32BE(20),art.height,id);
    assert.ok(art.scale>0&&art.scale<=1,id);
    for(const [name,frame] of Object.entries(art.frames)) {
      assert.ok(frame.x>=0&&frame.y>=0&&frame.w>0&&frame.h>0&&frame.x+frame.w<=art.width&&frame.y+frame.h<=art.height,id+':'+name);
      assert.ok(frame.y>=art.sourceRegion[0]&&frame.y+frame.h<=art.sourceRegion[1],id+':'+name+':source row');
      const output=spriteGeometry(art,frame,160);
      assert.ok(output.x>=0&&output.y>=0&&output.x+output.w<=160&&output.y+output.h<=art.outputHeight,id+':'+name+':output');
    }
    const standing=spriteGeometry(art,art.frames.idle0,160);
    assert.ok(standing.h>=48&&standing.h<=65,id+':consistent size');
    for(const name of ['idle0','run0','run1','jump','dash','wind','attack','ultimate']) assert.ok(art.frames[name],id+':'+name);
    for(const name of Object.values(art.poses)) assert.ok(art.frames[name],id+':pose');
    assert.equal(resolveSpriteFrame(art,'cast',{kind:'ult'}),'ultimate');
    assert.equal(resolveSpriteFrame(art,'shoot',{kind:'combo'}),'attack');
  }
});
