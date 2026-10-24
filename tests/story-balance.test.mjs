import test from 'node:test';
import assert from 'node:assert/strict';
import {combatCap,effectiveUpgrades,upgradeLimit,referenceGrowth,encounterPower,bossBudget,phaseProgress} from '../src/config/story-balance.js';
import {createSave,PERMANENT_UPGRADES,CHARACTER_LIST,STORIES} from '../src/game-data.js';
import {bossTrialRewards} from '../src/config/economy.js';
test('growth caps and boss-rush sync never change the permanent account investment',()=>{
 const save=createSave();for(let id=1;id<=28;id++)save.storyClear[id]=true;
 save.upgrades={atk:50,hp:50,skill:50,guard:12};const before=structuredClone(save);
 assert.equal(combatCap(save),50);
 for(let book=1;book<=4;book++){const run={bossRush:true,book};assert.equal(combatCap(save,run),book*10);assert.deepEqual(effectiveUpgrades(save,run),{atk:book*10,hp:book*10,skill:book*10,guard:12});for(const id of ['atk','hp','skill'])assert.equal(upgradeLimit(PERMANENT_UPGRADES.find(def=>def.id===id),save,run),book*10);}
 assert.deepEqual(save,before);
});
test('four existing book finals grow slightly harder at capped median six-star reference power',()=>{
 assert.equal(STORIES.length,28);let previousSeconds=0;
 for(let book=1;book<=4;book++){
  const ref=referenceGrowth(book),power=encounterPower({story:book*7}),budget=bossBudget({chapter:book*70},power);
  assert.equal(ref.cap,book*10);assert.ok(budget.seconds>previousSeconds);assert.ok(budget.seconds<110);
  assert.ok(Math.abs(budget.hp/ref.dps-budget.seconds)<.01);
  const hits=ref.hp/(budget.atk*.685);assert.ok(hits>4.5&&hits<7);
  const entry=bossBudget({chapter:(book-1)*70+1},encounterPower({story:(book-1)*7+1}));assert.ok(entry.hp<budget.hp*.85);
  previousSeconds=budget.seconds;
 }
 assert.ok(CHARACTER_LIST.filter(hero=>hero.rarity===6).every(hero=>hero.ult?.act?.ev.length));
});
test('later rush books return 1.5x currency per reference combat second, with only rounding differences',()=>{
 let previous;
 for(let book=1;book<=4;book++){
  const reward=bossTrialRewards({book,bosses:42,cycleLength:42}),seconds=72+book*7;
  const efficiency=reward.crystals/seconds;if(previous)assert.ok(Math.abs(efficiency/previous-1.5)<.001);
  assert.ok(reward.mats[book-1]>0&&reward.awShards>0);previous=efficiency;
 }
});
test('uniform boss health phase display reports damage to the next threshold and final defeat',()=>{
 const boss={hp:1000,maxHp:1000,bd:{phases:[.8,.5,.2]}};
 assert.deepEqual(phaseProgress(boss),{ratio:1,next:.8,remaining:200,phase:1,total:4});
 boss.hp=800;assert.deepEqual(phaseProgress(boss),{ratio:.8,next:.5,remaining:300,phase:2,total:4});
 boss.hp=100;assert.deepEqual(phaseProgress(boss),{ratio:.1,next:0,remaining:100,phase:4,total:4});
});
