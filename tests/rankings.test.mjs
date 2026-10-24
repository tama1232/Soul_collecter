import test from 'node:test';
import assert from 'node:assert/strict';
import {memoryDb} from './helpers/memory-db.mjs';
import {rankingRow,sortRanking,updateRecord,WEEKLY_CATEGORIES} from '../src/config/ranking-rules.js';
import {settleWeekly} from '../functions/weekly.js';
import {weekKey,applyWeeklyAward} from '../src/systems/weekly.js';
import {setRankTitleSnapshot,canSelectTitle,fetchRankTitles} from '../src/systems/rank-titles.js';
import {eightContentVisible,hiddenAchievement} from '../src/config/expansion.js';
import {pixelViewport} from '../src/engine/render-utils.js';
import * as data from '../src/game-data.js';
const sunday=Date.parse('2026-10-24T15:00:00Z'),before=sunday-1000;
function score(value,curse,time){return {value,curse,time};}

test('story progress, boss rush and endless use progress > curse > clear time; full ties share rank',()=>{
 for(const category of ['prog','rush','endless','rush1','endless4']) {
  const rows=[{key:'fast',...score(50,1,1)},{key:'curse',...score(50,3,200)},{key:'curseFast',...score(50,3,100)},{key:'tie',...score(50,3,100)},{key:'progress',...score(51,0,999)}];
  assert.deepEqual(sortRanking(rows,category).map(row=>[row.key,row.rank]),[['progress',1],['curseFast',2],['tie',2],['curse',4],['fast',5]]);
 }
 assert.deepEqual(sortRanking([{key:'fast',...score(10,0,10)},{key:'curse',...score(200,5,200)}],'time1').map(row=>row.key),['curse','fast']);
 assert.deepEqual(sortRanking([{key:'a',...score(10,0,99)},{key:'b',...score(10,9,1)}],'crystals').map(row=>row.rank),[1,1]);
});

test('real score recording keeps each run metadata through migration and Sunday rollover',()=>{
 const save=data.createSave();save.storyClear[1]=true;save.storyMax=2;
 data.data_g0(save,{victory:true,story:1,curse:2,frames:6000},before);
 data.data_g0(save,{victory:true,story:1,curse:0,frames:600},before);
 assert.equal(save.storyTime[1],100);assert.equal(save.rankRecords.time1_curse,2);
 data.data_g0(save,{victory:true,story:1,curse:3,frames:12000},before);
 assert.equal(save.storyTime[1],200);assert.equal(save.rankRecords.time1_curse,3);
 data.data_g0(save,{bossRush:true,book:1,bosses:20,curse:4,frames:6000},before);
 data.data_g0(save,{bossRush:true,book:1,bosses:20,curse:0,frames:60},before);
 const migrated=data.normalizeSave(save);
 assert.equal(migrated.rankRecords.rush_curse,4);assert.equal(migrated.weekly.scores.rush_time,100);
 data.data_st(migrated,sunday);
 assert.equal(migrated.weekly.prev.key,'20261018');assert.equal(migrated.weekly.prev.scores.rush_curse,4);
 assert.equal(migrated.weekly.scores.rush,undefined);assert.equal(migrated.rankRecords.rush,20);
 const legacy=data.createSave();legacy.rushBest={1:100};data.data_g0(legacy,{bossRush:true,book:1,bosses:20,curse:5,frames:60},before);assert.equal(data.data_b0(legacy).rush,100);
 save.crystals=999;data.data_st(save,before);save.crystals=10;data.data_st(save,before);
 assert.equal(save.weekly.scores.crystals,999);assert.equal(data.data_b0(save).crystals,999);
});

test('Sunday server settlement awards exactly the four eligible leaders, supports full ties and retries',async()=>{
 const db=memoryDb();
 for(let n=0;n<80;n++) db.records.set('rankings/low'+n,{w20261018_prog:400,w20261018_prog_curse:0,w20261018_prog_time:1});
 db.records.set('rankings/champion',{w20261018_prog:400,w20261018_prog_curse:5,w20261018_prog_time:100,prog:400,prog_curse:5,prog_time:100,w20261018_crystals:500});
 db.records.set('rankings/slow',{w20261018_prog:400,w20261018_prog_curse:5,w20261018_prog_time:200});
 db.records.set('rankings/rush',{w20261018_rush:50,w20261018_rush_curse:3,w20261018_rush_time:40,rush:50});
 db.records.set('rankings/tie',{w20261018_rush:50,w20261018_rush_curse:3,w20261018_rush_time:40});
 db.records.set('rankings/endless',{w20261018_endless:100,endless:100});
 db.records.set('rankings/debug',{w20261018_prog:99999,dbg:1,prog:99999});
 db.records.set('rankings/developer',{w20261018_rush:99999,rush:99999});db.records.set('developers/developer',{enabled:false});
 db.records.set('rankings/banned',{w20261018_crystals:99999,crystals:99999});db.records.set('sanctions/banned',{rankBan:true});
 await settleWeekly(db,sunday);
 const awards=()=>[...db.records].filter(([path])=>path.startsWith('weeklyAwards/'));
 assert.equal(awards().length,5);assert.ok(awards().every(([,award])=>award.compass===2));
 assert.ok(db.records.has('weeklyAwards/champion/items/20261018_prog'));assert.ok(!db.records.has('weeklyAwards/slow/items/20261018_prog'));
 assert.deepEqual(db.records.get('rankTitles/current').holders.prog,['champion']);
 assert.deepEqual(db.records.get('rankTitles/current').holders.rush,['rush']);
 const original=structuredClone(db.records.get('rankTitles/current'));
 db.records.set('rankings/late',{prog:999999});
 await settleWeekly(db,sunday+3600000);assert.equal(awards().length,5);assert.deepEqual(db.records.get('rankTitles/current'),original);
 await settleWeekly(db,sunday+7*86400000);
 assert.deepEqual(db.records.get('rankTitles/current').holders.prog,['late']);
 await settleWeekly(db,sunday);assert.equal(db.records.get('rankTitles/current').week,'20261101');
 assert.deepEqual(WEEKLY_CATEGORIES,['prog','rush','endless','crystals']);
 const save=data.createSave();assert.equal(applyWeeklyAward(save,'20261018','crystals'),true);assert.equal(applyWeeklyAward(save,'20261018','crystals'),false);
});

test('exclusive titles transfer each Sunday, cannot be forged in saves, and expire offline',async()=>{
 const old=data.createSave(),next=data.createSave(),title=data.data_ce.find(title=>title.rankCategory==='prog');
 old.titles.push(title.id);old.title=title.id;
 assert.equal(canSelectTitle(old,title,sunday),false);
 const snapshot={week:weekKey(sunday),holders:{prog:['old']}};
 setRankTitleSnapshot(old,snapshot,'old',sunday);setRankTitleSnapshot(next,snapshot,'next',sunday);
 assert.equal(canSelectTitle(old,title,sunday),true);assert.equal(canSelectTitle(next,title,sunday),false);
 assert.equal(canSelectTitle(old,title,sunday+7*86400000),false);
 const updated={week:weekKey(sunday+7*86400000),holders:{prog:['next']}};
 setRankTitleSnapshot(old,updated,'old',sunday+7*86400000);setRankTitleSnapshot(next,updated,'next',sunday+7*86400000);
 assert.equal(old.title,'newbie');assert.equal(canSelectTitle(next,title,sunday+7*86400000),true);
 const response=async()=>({ok:true,json:async()=>({fields:{week:{stringValue:'20261025'},holders:{mapValue:{fields:{prog:{arrayValue:{values:[{stringValue:'next'}]}}}}}}})});
 await fetchRankTitles(next,{uid:'next',idToken:'token'},'test',sunday,response);assert.equal(canSelectTitle(next,title,sunday),true);
 next.dbg=true;assert.equal(canSelectTitle(next,title,sunday),false);
});

test('eight-star character and weapon unlock before ownership; secret achievement details stay hidden',()=>{
 const save=data.createSave();const hero=data.CHARACTERS.anima,weapon=data.WEAPONS.nemea_requiem;
 assert.equal(eightContentVisible(save,hero),false);assert.equal(eightContentVisible(save,weapon),false);
 assert.equal(hiddenAchievement(save,'soul_gate'),true);assert.equal(hiddenAchievement(save,'title_soul_collecter'),true);
 save.eightUnlocked=true;
 assert.equal(eightContentVisible(save,hero),true);assert.equal(eightContentVisible(save,weapon),true);assert.equal(hiddenAchievement(save,'soul_gate'),false);
 assert.equal(save.chars.anima,undefined);assert.equal(save.weapons.nemea_requiem,undefined);
});

test('iPad portrait and landscape fill the largest possible 16:9 area without clipping',()=>{
 for(const [width,height] of [[768,1024],[1024,768],[820,1180],[1180,820],[1366,1024]]) {
  const size=pixelViewport(width,height,2);
  assert.ok(Math.abs(size.cssWidth-width)<.01||Math.abs(size.cssHeight-height)<.01);
  assert.ok(size.cssWidth<=width+.01&&size.cssHeight<=height+.01);
 }
});
