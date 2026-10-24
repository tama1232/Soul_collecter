import test from 'node:test';
import assert from 'node:assert/strict';
import {randomBytes} from 'node:crypto';
import {createSparkService,encodeValue,decodeValue,sparkHash} from '../src/systems/spark-service.js';
const auth={uid:'player',idToken:'test-token'};
const response=(body,status=200)=>({ok:status<400,status,json:async()=>body});
test('Spark REST codec preserves nested settings, zero values, booleans and receipts',()=>{
 const value={n:0,bool:false,list:[1,'x',null],rules:{normal:{7:.0003}},receipt:true};assert.deepEqual(decodeValue(encodeValue(value)),value);
});
test('Spark activation uses atomic creation, code version precondition, private root claim and rank removal',async()=>{
 const code='SC-DEV-'+randomBytes(16).toString('hex').toUpperCase(),hash=await sparkHash(code);let writes;
 const request=async(url,options)=>{
  assert.equal(options.headers.Authorization,'Bearer test-token');
  if(url.endsWith('/developers/player'))return response({},404);
  if(url.endsWith('/developerCodes/'+hash))return response({fields:encodeValue({kind:'owner',issuedBy:'bootstrap'}).mapValue.fields,updateTime:'2026-10-24T00:00:00Z'});
  if(url.endsWith(':commit')){const batch=JSON.parse(options.body);if(batch.writes.length>1)writes=batch.writes;return response({});}
  throw new Error('unexpected '+url);
 };
 const service=createSparkService({auth,projectId:'demo',request,now:()=>1000});const result=await service.call('redeemDeveloperCode',{code});
 assert.equal(result.role.kind,'owner');assert.equal(writes.length,4);
 assert.equal(writes[0].currentDocument.exists,false);assert.equal(writes[1].currentDocument.updateTime,'2026-10-24T00:00:00Z');
 assert.ok(writes.some(write=>write.delete?.endsWith('/rankings/player')));assert.ok(writes.some(write=>write.update?.name.endsWith('/developerSystem/root')));
});
test('failed commits cannot report successful code activation or probability changes',async()=>{
 const code='SC-DEV-'+randomBytes(16).toString('hex').toUpperCase();
 const service=createSparkService({auth,projectId:'demo',request:async(url)=>url.includes('/developers/')?response({},404):url.includes('/developerCodes/')?response({fields:encodeValue({kind:'helper',issuedBy:'test'}).mapValue.fields,updateTime:'v1'}):response({error:{message:'not found'}},404)});
 await assert.rejects(()=>service.call('redeemDeveloperCode',{code}),/not found/);
});

test('Spark rejects helper coupon creation and custom currency authorization before any commit',async()=>{
 const requests=[];
 const service=createSparkService({auth,projectId:'demo',request:async(url,options)=>{requests.push(options.method);return response({fields:encodeValue({kind:'helper',enabled:true}).mapValue.fields});}});
 for(const action of ['createCoupon','setCurrency'])await assert.rejects(()=>service.call('developerOperation',{action,payload:{code:'NOPE',currency:'stones',amount:100}}),/메인 개발자/);
 assert.deepEqual(requests,['GET','GET']);
});
test('Spark owner custom currency authorization records exact amounts and rejects invalid requests',async()=>{
 const audits=[];
 const service=createSparkService({auth,projectId:'demo',request:async(url,options)=>{
  if(url.endsWith('/developers/player'))return response({fields:encodeValue({kind:'owner',enabled:true}).mapValue.fields});
  if(url.endsWith(':commit')){audits.push(JSON.parse(options.body).writes[0]);return response({});}
  throw new Error('unexpected '+url);
 }});
 assert.deepEqual(await service.call('developerOperation',{action:'setCurrency',payload:{currency:'crystals',amount:1234567890123}}),{currency:'crystals',amount:1234567890123});
 assert.equal(decodeValue({mapValue:{fields:audits[0].update.fields}}).detail.amount,1234567890123);
 await assert.rejects(()=>service.call('developerOperation',{action:'setCurrency',payload:{currency:'crystals',amount:-1}}));assert.equal(audits.length,1);
});
