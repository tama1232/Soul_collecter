import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import * as data from '../src/game-data.js';
import {normalRates,compassRates,rollRarity,rollCompassRarity,upgradeCost,bossTrialRewards} from '../src/config/economy.js';
import {rushCycle,rushCooldown,cycleMultiplier,hiddenBossChance,rollRelicChoices,stackedRelicEffects,resolveBonds,collectionBonds,bondMultiplier} from '../src/config/expansion.js';
import {weekStart,weekKey,applyWeeklyAward,claimCloudAwards} from '../src/systems/weekly.js';
import {closingWeek,settleWeekly} from '../functions/weekly.js';

test('normal and compass base probabilities exactly match locked and unlocked pools',()=>{
  assert.deepEqual(normalRates(false).slice(0,4),[[8,0],[7,.0003],[6,.003],[5,.03]]);
  assert.deepEqual(normalRates(true).slice(0,4),[[8,.00003],[7,.0003],[6,.003],[5,.03]]);
  assert.deepEqual(compassRates(false),[[7,.05],[6,.95]]);
  assert.deepEqual(compassRates(true),[[8,.001],[7,.05],[6,.949]]);
  for(const unlocked of [false,true]) {
    const counts={};
    for(let n=0;n<10000;n++){const rarity=rollCompassRarity(unlocked,()=> (n+.5)/10000);counts[rarity]=(counts[rarity]??0)+1;}
    assert.deepEqual(counts,unlocked?{6:9490,7:500,8:10}:{6:9500,7:500});
    let cursor=0;
    for(const [rarity,rate] of normalRates(unlocked)) {
      if(rate) assert.equal(rollRarity({},()=>cursor+rate/2,false,unlocked),rarity);
      cursor+=rate;
    }
  }
  assert.equal(rollRarity({since7:359},()=>0,false,true),8,'pity cannot replace a natural 8-star');
  const save=data.createSave();
  const pool={kind:'char',items:data.CHARACTER_LIST,eightUnlocked:false};
  assert.equal(data.data_Lr(pool,save.pity.char,()=>0,1)[0].rarity,7);
  pool.eightUnlocked=true;
  assert.equal(data.data_Lr(pool,save.pity.char,()=>0,1)[0].id,'anima');
});

test('all 55 existing heroes retain exact original combat data; only one 8-star is added',async()=>{
  const baseline=JSON.parse(await readFile(new URL('./fixtures/original-heroes.json',import.meta.url)));
  assert.equal(Object.keys(baseline).length,55);
  for(const [id,hash] of Object.entries(baseline)) assert.equal(createHash('sha256').update(JSON.stringify(data.CHARACTERS[id])).digest('hex'),hash,id);
  const eight=data.CHARACTER_LIST.filter(hero=>hero.rarity===8);
  assert.equal(eight.length,1); assert.equal(eight[0].crests.length,10);
  assert.ok(eight[0].combo.some(act=>act.ev.some(event=>event.k==='hit')));
  assert.ok(eight[0].combo.some(act=>act.ev.some(event=>event.k==='proj')));
  assert.ok(eight[0].ult);
});

test('relic rarity rolls stay 45/30/20/5, allow duplicate offers and scale one trigger safely',()=>{
  const counts={};
  for(let n=0;n<10000;n++) {
    let call=0;
    const [id]=rollRelicChoices(data.data_Ue,1,()=>call++?(0):(n+.5)/10000);
    const tier=data.data_s0[id].rarity;counts[tier]=(counts[tier]??0)+1;
  }
  assert.deepEqual(counts,{1:4500,2:3000,3:2000,4:500});
  const run=new data.RunState(data.createSave(),4);run.rng.next=()=>.01;
  const offers=run.rollRelics(3);assert.equal(new Set(offers).size,1);
  run.relics.push(...offers);assert.deepEqual(run.rollRelics(3),offers);
  const feather=data.data_s0.phoenix_feather;
  assert.equal(stackedRelicEffects(feather,20)[0].flags.revive,1);
  const trigger=data.data_Ue.find(relic=>relic.effects.some(effect=>effect.chance));
  const upgraded=stackedRelicEffects(trigger,100);
  assert.ok(upgraded.filter(effect=>effect.chance!==undefined).every(effect=>effect.chance<=1));
  assert.equal(upgraded.length,trigger.effects.length+1);
});

test('boss routes repeat forever, accelerate each cycle and pay faster growing rewards',()=>{
  const save=data.createSave();for(const story of data.STORIES) save.storyClear[story.id]=true;
  for(const book of data.BOOKS) {
    const run=new data.RunState(save,100);run.startBossRush(save,book.id);const length=run.rushList.length;
    assert.ok(length>6);
    for(let chapter=1;chapter<=length*3+1;chapter++) {
      run.newChapter(chapter,run.rushList[(chapter-1)%length].theme);
      assert.deepEqual(run.nextThemes(),[run.rushList[chapter%length].theme]);
      assert.equal(run.theme,run.rushList[(chapter-1)%length].theme);
      assert.equal(rushCooldown(run),Math.floor((chapter-1)/length)*.5);
    }
    assert.equal(rushCycle(length+1,length),1);
    const base=bossTrialRewards({bosses:length,cycleLength:length,book:book.id});
    const two=bossTrialRewards({bosses:length*2,cycleLength:length,book:book.id});
    assert.ok(two.crystals>base.crystals*2);
  }
  for(let cycle=1;cycle<20;cycle++) {
    const ratio=cycleMultiplier(cycle)/cycleMultiplier(cycle-1);
    assert.ok(ratio>=(cycle===1?1:cycleMultiplier(cycle-1)/cycleMultiplier(cycle-2)));
    assert.ok(cycleMultiplier(cycle,true)/cycleMultiplier(cycle-1,true)>ratio);
  }
  assert.equal(hiddenBossChance(0),.00001);assert.equal(hiddenBossChance(99),.001);assert.equal(hiddenBossChance(999999),1);
});

test('common upgrades have no gameplay cap and increasingly geometric prices; migration keeps them',()=>{
  const save=data.createSave();
  for(const id of ['hp','atk','skill']) {
    const def=data.PERMANENT_UPGRADES.find(upgrade=>upgrade.id===id);
    assert.equal(def.max,Infinity);assert.equal(def.cost.length,0);
    assert.ok(upgradeCost(def,300)>upgradeCost(def,100));
    assert.ok(upgradeCost(def,200)/upgradeCost(def,199)>upgradeCost(def,40)/upgradeCost(def,39));
    save.upgrades[id]=301;
    assert.equal(data.normalizeSave(save).upgrades[id],301);
    assert.equal(data.data_fe(save.upgrades,id),301*def.per);
  }
  const oldRun={v:1,data:{tower:true,nodes:[],party:[],cur:0},rngEntry:1,room:{}};
  save.run=oldRun;assert.equal(data.normalizeSave(save).run,null);
  assert.throws(()=>new data.RunState(save,4).startTower(),/제거/);
});

test('party and collection bonds scale with rarity and breakthroughs',()=>{
  const bond=data.data_Se[0], owned=Object.fromEntries(bond.heroes.map(id=>[id,{aw:0}]));
  const first=bondMultiplier(bond,data.CHARACTERS,owned);
  owned[bond.heroes[0]].aw=5;const second=bondMultiplier(bond,data.CHARACTERS,owned);
  assert.ok(second>first);
  const party=resolveBonds(data.data_Se,bond.heroes,data.CHARACTERS,owned);
  assert.equal(party[0].effects[0].stats.allDmg,bond.effects[0].stats.allDmg*second);
  assert.ok(collectionBonds(data.data_Se,data.CHARACTERS,owned).length>0);
  assert.equal(collectionBonds(data.data_Se,data.CHARACTERS,{}).length,0);
  const low=Object.fromEntries(bond.heroes.map(id=>[id,{rarity:3}])), high=Object.fromEntries(bond.heroes.map(id=>[id,{rarity:7}]));
  assert.ok(bondMultiplier(bond,high,owned)>bondMultiplier(bond,low,owned));
});

test('Sunday KST boundary, weekly score migration and client reward receipts agree',async()=>{
  const before=Date.parse('2026-10-24T14:59:59Z'),after=before+1000;
  assert.equal(weekKey(before),'20261018');assert.equal(weekKey(after),'20261025');assert.equal(weekStart(after),after);
  assert.equal(closingWeek(after),'20261018');
  const save=data.createSave();save.stats.weeklyWins=0;const compass=save.compass??0;
  assert.equal(applyWeeklyAward(save,'20261018','rush'),true);
  assert.equal(applyWeeklyAward(save,'20261018','rush'),false);assert.equal(save.compass-compass,2);
  assert.equal(applyWeeklyAward(save,'20261018','tower'),false);
  data.data_g0(save,{bossRush:true,book:1,bosses:50,frames:100},before);
  const migrated=data.normalizeSave(save);assert.equal(migrated.weekly.scores.rush,50);
  const fetchAward=async (url,options)=>{
    assert.ok(url.endsWith('/weeklyAwards/player:runQuery'));
    assert.equal(options.method,'POST');
    return {ok:true,status:200,json:async()=>[{document:{fields:{uid:{stringValue:'player'},compass:{integerValue:'2'},week:{stringValue:'20261018'},category:{stringValue:'prog'}}}}]};
  };
  assert.equal((await claimCloudAwards(save,{uid:'player',idToken:'test'},'test',after,fetchAward)).length,1);
  assert.equal((await claimCloudAwards(save,{uid:'player',idToken:'test'},'test',after,fetchAward)).length,0);
});
