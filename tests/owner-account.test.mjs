import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {unlockOwnerContent,setDeveloperCurrency,allowDeveloper} from '../src/config/developer-rules.js';
import {CHARACTERS,BOOKS,createSave,data_va,normalizeSave} from '../src/game-data.js';
import {createDeveloperHandlers} from '../functions/development.js';
import {memoryDb} from './helpers/memory-db.mjs';
const owner={kind:'owner',enabled:true},helper={kind:'helper',enabled:true};
test('owner automatically owns every current hero and can enter all released books without fabricating clears',()=>{
 const save=createSave();save.chars.kael.lv=8;save.chars.kael.sk=[3,0,0,0];save.storyClear[1]=true;
 assert.equal(unlockOwnerContent(save,owner,CHARACTERS,BOOKS),true);
 assert.deepEqual(Object.keys(save.chars).sort(),Object.keys(CHARACTERS).sort());assert.equal(save.storyMax,28);assert.equal(save.eightUnlocked,true);
 for(const book of BOOKS.filter(book=>book.ready))assert.equal(data_va(save,book.id),true);
 assert.equal(save.chars.kael.lv,8);assert.deepEqual(save.chars.kael.sk,[3,0,0,0]);assert.deepEqual(save.storyClear,{1:true});
 assert.equal(unlockOwnerContent(save,owner,CHARACTERS,BOOKS),false);
 const restored=normalizeSave(save);assert.equal(restored.storyMax,28);assert.equal(Object.keys(restored.chars).length,56);
 const future=[...BOOKS,{id:5,ready:false,stories:[29,30]}];unlockOwnerContent(save,owner,CHARACTERS,future);assert.equal(save.storyMax,28);
});
test('helper, disabled and forged local role do not receive owner automatic unlocks',()=>{
 for(const role of [helper,{kind:'owner',enabled:false},null]){
  const save=createSave();save.developerRole='owner';const before=JSON.stringify(save);assert.equal(unlockOwnerContent(save,role,CHARACTERS,BOOKS),false);assert.equal(JSON.stringify(save),before);
 }
});
test('owner can set exact balances including zero and materials; unsafe values and helper requests do not mutate saves',()=>{
 const save=createSave();
 for(const [key,value] of [['stones',0],['crystals',1234567890123],['compass',17],['awShards',42],['mat1',55],['mat4',99]])setDeveloperCurrency(save,owner,key,value);
 assert.equal(save.stones,0);assert.equal(save.crystals,1234567890123);assert.deepEqual(save.mats,[55,0,0,99]);
 const before=JSON.stringify(save);
 for(const amount of [-1,.5,NaN,Infinity,Number.MAX_SAFE_INTEGER+1,'100'])assert.throws(()=>setDeveloperCurrency(save,owner,'stones',amount));
 for(const key of ['uid','__proto__','mat5'])assert.throws(()=>setDeveloperCurrency(save,owner,key,1));
 assert.throws(()=>setDeveloperCurrency(save,helper,'stones',100));assert.equal(JSON.stringify(save),before);
});
test('both server implementations use identical owner permissions and audit authorized currency requests',async()=>{
 assert.equal(await readFile(new URL('../src/config/developer-rules.js',import.meta.url),'utf8'),await readFile(new URL('../functions/developer-rules.js',import.meta.url),'utf8'));
 assert.equal(allowDeveloper(helper,'createCoupon'),false);assert.equal(allowDeveloper(owner,'createCoupon'),true);
 const db=memoryDb();db.records.set('developers/main',owner);db.records.set('developers/sub',helper);
 const handlers=createDeveloperHandlers({db,defaultSave:createSave()});
 for(const action of ['createCoupon','setCurrency'])await assert.rejects(()=>handlers.operation('sub',action,{currency:'stones',amount:1}),/권한/);
 assert.deepEqual(await handlers.operation('main','setCurrency',{currency:'mat2',amount:999}),{currency:'mat2',amount:999});
 assert.ok([...db.records].some(([path,row])=>path.startsWith('developerAudit/')&&row.action==='setCurrency'&&row.detail.amount===999));
});

test('verified server owner role grants automatic content and exact currency; account switches cannot receive pending edits',async()=>{
 const {developerService}=await import('../src/systems/developer-service.js');
 const previousFetch=globalThis.fetch,previousConfig=globalThis.CONTRACT_CONFIG;
 const game={save:createSave(),persist(){this.writes=(this.writes??0)+1;}},store={session:{kind:'firebase',uid:'main'},authToken:async()=>({uid:store.session.uid,idToken:'fixture'})};
 let role=helper,switchAccount=false,operations=0;
 developerService.attach(store,()=>game);globalThis.CONTRACT_CONFIG={firebase:{projectId:'fixture'}};
 globalThis.fetch=async(url,options)=>{
  if(url.endsWith('/developerStatus'))return {ok:true,json:async()=>({result:{uid:store.session.uid,role}})};
  if(url.endsWith('/developerOperation')){operations++;if(switchAccount)store.session.uid='another-account';return {ok:true,json:async()=>({result:JSON.parse(options.body).data.payload})};}
  return {ok:false,status:404,json:async()=>({})};
 };
 try{
  game.save.developerRole='owner';await developerService.sync();assert.equal(Object.keys(game.save.chars).length,1);
  await assert.rejects(()=>developerService.setCurrency('stones',123),/메인 개발자/);assert.equal(operations,0);
  role=owner;await developerService.sync();assert.equal(Object.keys(game.save.chars).length,56);assert.equal(game.save.storyMax,28);assert.equal(game.save.rankBan,true);
  await developerService.setCurrency('stones',123);assert.equal(game.save.stones,123);assert.equal(operations,1);
  await developerService.setCurrency('mat3',456);assert.equal(game.save.mats[2],456);
  switchAccount=true;await assert.rejects(()=>developerService.setCurrency('stones',999),/계정이 변경/);assert.equal(game.save.stones,123);assert.equal(developerService.authorized,false);
 }finally{developerService.clear();globalThis.fetch=previousFetch;globalThis.CONTRACT_CONFIG=previousConfig;}
});
