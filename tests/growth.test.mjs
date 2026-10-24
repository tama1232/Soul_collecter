import test from 'node:test';
import assert from 'node:assert/strict';
import {growthCap,growthNotice,migrateGrowth,MAX_GROWTH_CAP} from '../src/config/growth-limits.js';
import {heroLevelCost,skillMasteryCost} from '../src/config/economy.js';
import {createSave,normalizeSave,data__0} from '../src/game-data.js';
test('only complete seven-story books unlock +10, four books cap both systems at 50',()=>{
 const save=createSave();assert.equal(growthCap(save),10);
 for(let id=1;id<=28;id++){
  save.storyClear[id]=true;assert.equal(growthCap(save),10+10*Math.floor(id/7));
  const cap=growthCap(save);save.chars.kael.sk=[cap,cap,cap,cap];save.crystals=1e9;
  assert.equal(data__0(save,'kael',0),false);
 }
 save.storyClear[29]=true;save.storyMax=999;assert.equal(growthCap(save),MAX_GROWTH_CAP);
 delete save.storyClear[10];assert.equal(growthCap(save),40);
});
test('partial chapters, failed runs and repeated clears never increase the book cap',()=>{
 const save=createSave();save.storyMax=28;save.storyClear[7]=true;assert.equal(growthCap(save),10);
 for(let i=1;i<=7;i++)save.storyClear[i]=true;
 assert.match(growthNotice(save),/10 → 20/);assert.equal(growthNotice(save),null);
 save.storyClear[7]=true;assert.equal(growthNotice(save),null);
 for(let i=8;i<=14;i++)save.storyClear[i]=true;
 assert.match(growthNotice(save),/20 → 30/);
});
test('legacy over-cap investments are refunded once, suspended refunded power is discarded',()=>{
 const save=createSave();delete save.growthVersion;save.chars.kael={lv:20,aw:0,count:1,sk:[50,0,12,10]};save.run={data:{}};
 const before=save.crystals;let expected=0;
 for(let level=10;level<20;level++)expected+=Math.round((80+40*level+4*level**2)/10)*10;
 for(const old of [50,12])for(let level=11;level<=old;level++)expected+=Math.round((60+18*level+.9*level**2)/10)*10;
 const migrated=normalizeSave(save);assert.equal(migrated.chars.kael.lv,10);assert.deepEqual(migrated.chars.kael.sk,[10,0,10,10]);assert.equal(migrated.crystals,before+expected);assert.equal(migrated.run,null);
 const twice=normalizeSave(migrated);assert.equal(twice.crystals,migrated.crystals);assert.match(growthNotice(twice),/환급/);assert.equal(growthNotice(twice),null);
});
test('new upgrades stop at account cap and prices follow later-book income factors',()=>{
 const save=createSave();save.growthVersion=1;save.chars.kael.sk=[9,0,0,0];save.crystals=1e9;
 assert.equal(data__0(save,'kael',0),true);assert.equal(data__0(save,'kael',0),false);
 for(let id=1;id<=7;id++)save.storyClear[id]=true;
 const before=save.crystals;assert.equal(data__0(save,'kael',0),true);assert.equal(before-save.crystals,skillMasteryCost(11));
 for(const [level,factor] of [[10,1],[11,1.5],[21,2.25],[31,3.375],[41,3.375]]){
  assert.equal(heroLevelCost(level),Math.round((80+40*level+4*level**2)*factor/10)*10);
 }
});
