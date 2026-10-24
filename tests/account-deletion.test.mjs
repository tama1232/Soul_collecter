import test from 'node:test';
import assert from 'node:assert/strict';
import {deleteCloudAccount} from '../src/systems/account-deletion.js';
import {encodeValue,decodeValue} from '../src/systems/spark-service.js';
function server(fail=false){
 const root='projects/test/databases/(default)/documents',docs=new Map(),calls=[];let authDeleted=false;
 const set=(path,data)=>docs.set(root+'/'+path,{name:root+'/'+path,fields:encodeValue(data).mapValue.fields,updateTime:'2026-10-24T00:00:00Z'});
 for(let i=0;i<501;i++)set('audit/own'+i,{uid:'me',snap:'old',at:i});set('audit/other',{uid:'other',snap:'keep',at:1});
 for(const collection of ['saves','rankings','sanctions','developers']){set(collection+'/me',{id:'me'});set(collection+'/other',{id:'other'});}
 set('rankTitles/current',{holders:{prog:['me','other'],rush:['other']},week:'20261018'});set('rankTitleSeasons/20261011',{holders:{rush:['me','other']}});set('weeklyAwards/me/items/win',{compass:1});
 set('developerCodes/used',{usedBy:'me',issuedBy:'bootstrap'});set('developerCodes/issued',{issuedBy:'me'});set('coupons/mine',{createdBy:'me'});
 const request=async(url,options={})=>{const body=options.body?JSON.parse(options.body):null;calls.push({url,body});const ok=data=>({ok:true,status:200,json:async()=>data});
  if(url.includes('accounts:delete')){authDeleted=true;return ok({});}
  if(url.endsWith(':commit')){if(fail&&body.writes.some(write=>write.delete?.includes('/audit/')))return {ok:false,status:403,json:async()=>({error:{message:'denied'}})};
   for(const write of body.writes){if(write.delete)docs.delete(write.delete);else docs.set(write.update.name,{...write.update,updateTime:'2026-10-24T00:00:00Z'});}return ok({});}
  if(url.endsWith(':runQuery')){const q=body.structuredQuery,filter=q.where?.fieldFilter,collection=q.from[0].collectionId;let list=[...docs.values()].filter(doc=>doc.name.startsWith(root+'/'+collection+'/'));if(filter)list=list.filter(doc=>decodeValue(doc.fields[filter.field.fieldPath]??{nullValue:null})===decodeValue(filter.value));return ok(list.slice(0,q.limit).map(document=>({document})));}
  const path=url.split('/documents/')[1]?.split('?')[0];return ok({documents:[...docs.values()].filter(doc=>doc.name.startsWith(root+'/'+path+'/'))});
 };
 return {docs,calls,request,get authDeleted(){return authDeleted;}};
}
test('permanent deletion cleans every own log page, ranking, title and award before Authentication; other players remain',async()=>{
 const state=server();await deleteCloudAccount({auth:{uid:'me',idToken:'test'},projectId:'test',apiKey:'public',request:state.request});
 assert.equal(state.authDeleted,true);assert.equal(state.calls.at(-1).url.includes('accounts:delete'),true);
 assert.ok([...state.docs.keys()].some(path=>path.endsWith('/audit/other')));assert.ok(![...state.docs.keys()].some(path=>/\/audit\/own/.test(path)));
 for(const collection of ['saves','rankings','sanctions','developers']){assert.ok(![...state.docs.keys()].some(path=>path.endsWith('/'+collection+'/me')));assert.ok([...state.docs.keys()].some(path=>path.endsWith('/'+collection+'/other')));}
 const titles=[...state.docs.values()].filter(doc=>/\/rankTitle/.test(doc.name));assert.ok(titles.every(doc=>!Object.values(decodeValue({mapValue:{fields:doc.fields}}).holders).flat().includes('me')));
 assert.ok([...state.docs.keys()].some(path=>path.endsWith('/accountDeletions/me')));
});
test('a cleanup error preserves the login account for retry and never reports complete',async()=>{
 const state=server(true);await assert.rejects(deleteCloudAccount({auth:{uid:'me',idToken:'test'},projectId:'test',apiKey:'public',request:state.request}),/denied/);assert.equal(state.authDeleted,false);
});
