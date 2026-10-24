import test from 'node:test';
import assert from 'node:assert/strict';
import {generateKeyPairSync} from 'node:crypto';
import {encryptArchive,decryptArchive} from '../scripts/archive-codec.mjs';
import {shouldArchive,FREE_STORAGE_BYTES,olderHistory,oldRankFields,archiveThenPrune,archiveChunks} from '../scripts/archive-policy.mjs';
const {publicKey,privateKey}=generateKeyPairSync('rsa',{modulusLength:2048});
test('75 percent means Firestore data plus indexes, unknown usage never triggers deletion',()=>{
 assert.equal(shouldArchive(FREE_STORAGE_BYTES*.75-1),false);assert.equal(shouldArchive(FREE_STORAGE_BYTES*.75),true);assert.throws(()=>shouldArchive(NaN));
});
test('encrypted archives round-trip and reject tampering or the wrong operator key',()=>{
 const records=[{path:'audit/private-user',data:{snap:'private-save'}}],sealed=encryptArchive(records,publicKey);
 assert.ok(!sealed.includes('private-user'));assert.deepEqual(decryptArchive(sealed,privateKey),records);
 const other=generateKeyPairSync('rsa',{modulusLength:2048});assert.throws(()=>decryptArchive(sealed,other.privateKey));
 const broken=JSON.parse(sealed);broken.tag=Buffer.alloc(16).toString('base64');assert.throws(()=>decryptArchive(JSON.stringify(broken),privateKey));
});
test('latest history and current/previous weekly scores stay in Firestore',()=>{
 const docs=[['a','latest-a'],['b','latest-b'],['a','old-a']].map(([uid,id])=>({id,data:()=>({uid})}));
 assert.deepEqual(olderHistory(docs).map(row=>row.id),['old-a']);
 assert.deepEqual(oldRankFields({prog:100,w20261025_prog:10,w20261018_prog:8,w20261011_prog:6,w20261011_prog_curse:5},'20261025','20261018'),['w20261011_prog','w20261011_prog_curse']);
});
test('remote archive must verify before pruning and deletion failures preserve retryable records',async()=>{
 const events=[],records=[{id:1},{id:2}],remove=async r=>{events.push('remove'+r.id);return r.id===1;};
 await assert.rejects(()=>archiveThenPrune(records,{seal:JSON.stringify,publish:async()=>({verified:false}),remove}),/원본/);assert.deepEqual(events,[]);
 const count=await archiveThenPrune(records,{seal:JSON.stringify,publish:async()=>{events.push('verified');return {verified:true};},remove});assert.equal(count,1);assert.deepEqual(events,['verified','remove1','remove2']);
});

test('archive chunks enforce byte and record limits before uploading',()=>{
 const records=Array.from({length:250},(_,id)=>({id,data:'x'.repeat(80)}));
 const chunks=archiveChunks(records,1000);assert.deepEqual(chunks.flat(),records);
 assert.ok(chunks.every(chunk=>Buffer.byteLength(JSON.stringify(chunk))<=1000&&chunk.length<=100));
 assert.throws(()=>archiveChunks([{data:'x'.repeat(2000)}],1000),/원본/);
});
