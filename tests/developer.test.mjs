import test from 'node:test';
import {randomBytes} from 'node:crypto';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createDeveloperHandlers,hashCode,hashRules,allowDeveloper} from '../functions/development.js';
import {DEFAULT_PROBABILITIES,validateProbabilities,canonical} from '../src/config/probability-rules.js';
import {applyProbabilities,getProbabilities} from '../src/config/live-rules.js';
import {normalRates} from '../src/config/economy.js';
import {RELIC_MAX_LEVEL,rollRelicChoices,stackedRelicEffects} from '../src/config/expansion.js';
import {CHARACTERS,createSave,data_Rr,data_s0,data_Ue,data_Lr,WEAPONS} from '../src/game-data.js';
import {selectedWeapon} from '../src/features/weapon-pickup.js';
import {settleWeekly} from '../functions/weekly.js';
function memoryDb(){
 const records=new Map();let nextId=0,queue=Promise.resolve();
 const snapshot=path=>({id:path.split('/').at(-1),exists:records.has(path),data:()=>structuredClone(records.get(path))});
 const db={records,doc:path=>({path,get:async()=>snapshot(path),create:async data=>{if(records.has(path))throw new Error('exists');records.set(path,structuredClone(data));},set:async data=>records.set(path,structuredClone(data))}),collection:path=>{
  const config={filters:[],order:'__name__',direction:'asc',max:Infinity,cursor:null};
  const query={where(field,op,value){config.filters.push([field,op,value]);return query;},orderBy(field,direction='asc'){config.order=field;config.direction=direction;return query;},limit(n){config.max=n;return query;},startAfter(cursor){config.cursor=cursor;return query;},async add(data){const id=String(++nextId).padStart(6,'0');records.set(path+'/'+id,structuredClone(data));return {id};},async get(){let entries=[...records].filter(([key])=>key.startsWith(path+'/')&&key.slice(path.length+1).split('/').length===1);for(const [field,op,value] of config.filters)entries=entries.filter(([,data])=>op==='=='?data[field]===value:data[field]>value);entries.sort((a,b)=>{const av=config.order==='__name__'?a[0].split('/').at(-1):a[1][config.order],bv=config.order==='__name__'?b[0].split('/').at(-1):b[1][config.order];return (av<bv?-1:av>bv?1:0)*(config.direction==='asc'?1:-1);});if(config.cursor)entries=entries.filter(([key])=>key.split('/').at(-1)>config.cursor);return {docs:entries.slice(0,config.max).map(([key])=>snapshot(key))};}};return query;
 },runTransaction:fn=>{const task=queue.then(async()=>{const writes=[];const result=await fn({get:async ref=>snapshot(ref.path),set:(ref,value,options)=>writes.push(()=>records.set(ref.path,options?.merge?{...records.get(ref.path),...structuredClone(value)}:structuredClone(value))),create:(ref,value)=>writes.push(()=>{assert.equal(records.has(ref.path),false);records.set(ref.path,structuredClone(value));}),update:(ref,value)=>writes.push(()=>records.set(ref.path,{...records.get(ref.path),...structuredClone(value)})),delete:ref=>writes.push(()=>records.delete(ref.path))});for(const write of writes)write();return result;});queue=task.catch(()=>{});return task;}};
 return db;
}
// Ephemeral fixtures exist only in this process and its in-memory fake database.
const fixtureCode=()=> 'SC-DEV-'+randomBytes(16).toString('hex').toUpperCase();
const ROOT=fixtureCode();

test('root code is globally single-use, helper code cannot issue codes or reset anyone',async()=>{
 const db=memoryDb(),defaultSave=createSave();db.records.set('developerSystem/root',{seedHash:hashCode(ROOT)});db.records.set('developerCodes/'+hashCode(ROOT),{kind:'owner'});db.records.set('rankings/owner',{id:'root',prog:999});
 const handlers=createDeveloperHandlers({db,defaultSave,now:()=>1000,newCode:fixtureCode});
 const results=await Promise.allSettled([handlers.redeem('owner',ROOT),handlers.redeem('second',ROOT)]);
 assert.equal(results.filter(r=>r.status==='fulfilled').length,1);assert.equal(db.records.get('developers/owner').kind,'owner');assert.equal(db.records.has('developers/second'),false);assert.equal(db.records.has('rankings/owner'),false);
 const issued=await handlers.operation('owner','issueCode');await handlers.redeem('helper',issued.code);
 await assert.rejects(()=>handlers.redeem('third',issued.code),/사용했거나/);
 assert.equal(allowDeveloper({enabled:true,kind:'helper'},'updateProbabilities'),true);
 for(const action of ['issueCode','resetPlayer'])await assert.rejects(()=>handlers.operation('helper',action,{uid:'victim',kind:'owner'}),/권한/);
 await assert.rejects(()=>handlers.operation('normal','createCoupon',{}),/권한/);
});

test('probability edits are validated, revision-checked, audited and affect the real roller',async()=>{
 const db=memoryDb();db.records.set('developers/helper',{kind:'helper',enabled:true});const handlers=createDeveloperHandlers({db,defaultSave:createSave()});
 const rules=structuredClone(DEFAULT_PROBABILITIES);rules.normal[7]=.001;
 const updated=await handlers.operation('helper','updateProbabilities',{rules,revision:0});
 assert.equal(updated.hash,hashRules(rules));assert.equal(updated.revision,1);
 await assert.rejects(()=>handlers.operation('helper','updateProbabilities',{rules,revision:0}),/다른 개발자/);
 assert.ok([...db.records].some(([key,data])=>key.startsWith('developerAudit/')&&data.detail.previous&&data.detail.next));
 applyProbabilities(updated.rules,updated.revision);assert.equal(normalRates(false).find(([rarity])=>rarity===7)[1],.001);
 applyProbabilities(DEFAULT_PROBABILITIES,0);
 const invalid=structuredClone(rules);invalid.compassUnlocked[6]=1;assert.throws(()=>validateProbabilities(invalid),/합계/);invalid.weaponPickup=NaN;assert.throws(()=>validateProbabilities(invalid));
 const schema=await readFile(new URL('../functions/probability-rules.js',import.meta.url),'utf8');assert.equal(schema,await readFile(new URL('../src/config/probability-rules.js',import.meta.url),'utf8'));
});

test('developer-created coupon hash matches actual in-game redemption; owner reset preserves receipts',async()=>{
 const db=memoryDb();db.records.set('developers/owner',{kind:'owner',enabled:true});db.records.set('developers/helper',{kind:'helper',enabled:true});const handlers=createDeveloperHandlers({db,defaultSave:createSave(),now:()=>123456});
 await handlers.operation('helper','createCoupon',{code:'PATCH_TEST',reward:{stones:100,compass:2},desc:'test'});
 const coupon=db.records.get('coupons/'+data_Rr('PATCH_TEST'));assert.equal(JSON.parse(coupon.reward).compass,2);
 const save=createSave();save.stones=999999;save.storyMax=28;save.rankClaims={previous:true};save.usedCoupons=['keep'];
 db.records.set('saves/player',{id:'player',data:JSON.stringify(save),rev:5,updated:1,sid:'old'});db.records.set('rankings/player',{prog:1000});
 await handlers.operation('owner','resetPlayer',{uid:'player'});const reset=db.records.get('saves/player'),fresh=JSON.parse(reset.data);
 assert.equal(reset.rev,6);assert.equal(fresh.storyMax,1);assert.equal(fresh.stones,createSave().stones);assert.deepEqual(fresh.rankClaims,{previous:true});assert.deepEqual(fresh.usedCoupons,['keep']);assert.equal(db.records.has('rankings/player'),false);
 assert.equal(db.records.get('sanctions/player').acts,'all');
});

test('developer server records exclude a disguised account from weekly rewards',async()=>{
 const db=memoryDb();db.records.set('rankings/dev',{id:'dev',w20261018_rush:999,dbg:0});db.records.set('rankings/player',{id:'player',w20261018_rush:20});db.records.set('developers/dev',{enabled:false,kind:'helper'});
 await settleWeekly(db,Date.parse('2026-10-24T15:00:00Z'));
 assert.equal(db.records.has('weeklyAwards/dev/items/20261018_rush'),false);assert.equal(db.records.get('weeklyAwards/player/items/20261018_rush').compass,2);
});

test('max-level relics vanish from all future offers, exhausted tiers renormalize, effects cap at five',()=>{
 assert.equal(RELIC_MAX_LEVEL,5);const owned=Array.from({length:5},()=>data_Ue[0].id);
 for(let n=0;n<100;n++) assert.ok(!rollRelicChoices(data_Ue,3,Math.random,owned).includes(data_Ue[0].id));
 const all=data_Ue.flatMap(relic=>Array(5).fill(relic.id));assert.deepEqual(rollRelicChoices(data_Ue,3,Math.random,all),[]);
 assert.deepEqual(stackedRelicEffects(data_s0.phoenix_feather,999),stackedRelicEffects(data_s0.phoenix_feather,5));
 const remaining=data_Ue.find(relic=>relic.rarity===4);const nearly=all.filter(id=>id!==remaining.id);
 assert.deepEqual(rollRelicChoices(data_Ue,3,()=>0,nearly),Array(3).fill(remaining.id));
});

test('selected seven-star weapon receives exactly half of the seven-star pool without changing base rarity',()=>{
 const save=createSave(),target=Object.values(WEAPONS).find(weapon=>weapon.rarity===7);save.weaponPickup=target.id;
 assert.equal(selectedWeapon(save,WEAPONS).id,target.id);
 const pool={kind:'weapon',items:Object.values(WEAPONS),feature7:[target.id]};
 for(const [roll,picked] of [[.499999,true],[.5,false],[.999999,false]]){
   const sequence=[0,roll,0];const result=data_Lr(pool,{},()=>sequence.shift()??0,1)[0];assert.equal(result.rarity,7);assert.equal(result.id===target.id,picked);
 }
 assert.equal(normalRates(false).find(([rarity])=>rarity===7)[1],.0003);
});

test('fallen divine fragment is overwhelmingly stronger than its seven-star prototype',()=>{
 const hero=CHARACTERS.anima,base=CHARACTERS.caelus;
 assert.equal(hero.name,'타락한 신의 파편');assert.equal(hero.rarity,8);assert.ok(hero.atk>=base.atk*8);assert.ok(hero.hp>=base.hp*10);
 assert.ok(hero.passive.effects[0].stats.dmgTaken<=-.6);assert.ok(hero.ult.act.ev.some(event=>event.k==='heal'&&event.v===1));assert.ok(hero.ult.act.ev.some(event=>event.k==='shield'&&event.v===1));
});

test('client developer tools bind to authenticated UID and report settings/file mismatches',async()=>{
 const {developerService,sha256}=await import('../src/systems/developer-service.js');
 const originalFetch=globalThis.fetch,originalConfig=globalThis.CONTRACT_CONFIG;
 const encode=value=>typeof value==='string'?{stringValue:value}:typeof value==='number'?{doubleValue:value}:typeof value==='boolean'?{booleanValue:value}:{mapValue:{fields:Object.fromEntries(Object.entries(value).map(([key,item])=>[key,encode(item)]))}};
 const fields=value=>({fields:Object.fromEntries(Object.entries(value).map(([key,item])=>[key,encode(item)]))});
 const rules=structuredClone(DEFAULT_PROBABILITIES),hash=await sha256(canonical(rules)),fileHash=await sha256('expected');
 const reported=[],game={save:createSave(),persist(){}};
 const store={session:{kind:'local',uid:'player'},authToken:async()=>({uid:store.session.uid,idToken:'test-only'})};
 developerService.attach(store,()=>game);globalThis.CONTRACT_CONFIG={firebase:{projectId:'unit-only'}};
 globalThis.fetch=async(url,options)=>{
  if(url.endsWith('/developerStatus'))return {ok:true,json:async()=>({result:{uid:store.session.uid,role:{kind:'helper',enabled:true}}})};
  if(url.endsWith('/reportIntegrity')){reported.push(JSON.parse(options.body).data);return {ok:true,json:async()=>({result:{recorded:true}})};}
  if(url.endsWith('/runtimeConfig/probabilities'))return {ok:true,json:async()=>fields({rules,hash,revision:0})};
  if(url.endsWith('/runtimeConfig/build'))return {ok:true,json:async()=>fields({files:{'src/unit.js':fileHash}})};
  return {ok:true,arrayBuffer:async()=>new TextEncoder().encode('changed').buffer};
 };
 try{
  game.save.developerRole='owner';assert.equal(developerService.authorized,false);
  await assert.rejects(()=>developerService.redeem(ROOT),/Firebase/);
  store.session.kind='firebase';await developerService.sync();assert.equal(developerService.role.kind,'helper');assert.equal(game.save.rankBan,true);assert.equal(game.save.dbg,true);
  store.session.uid='other';assert.equal(developerService.authorized,false);store.session.uid='player';
  const modified=getProbabilities();modified.normal[5]=.04;applyProbabilities(modified,0);
  const result=await developerService.inspectIntegrity();assert.equal(result.rulesMatch,false);assert.deepEqual(result.files,['src/unit.js']);assert.equal(reported.length,1);
  await developerService.sync();assert.equal(reported.length,2);assert.equal(getProbabilities().normal[5],.03);
 }finally{developerService.clear();globalThis.fetch=originalFetch;globalThis.CONTRACT_CONFIG=originalConfig;applyProbabilities(DEFAULT_PROBABILITIES,0);}
});
