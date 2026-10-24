import {readFile} from 'node:fs/promises';
import {createHash,randomBytes} from 'node:crypto';
import {initializeTestEnvironment,assertSucceeds,assertFails} from '@firebase/rules-unit-testing';
import {doc,getDoc,setDoc,updateDoc,deleteDoc,writeBatch,collection,getDocs,query,where} from 'firebase/firestore';
const env=await initializeTestEnvironment({projectId:'demo-soul',firestore:{rules:await readFile(new URL('../../firebase/firestore.rules',import.meta.url),'utf8')}});
const rootHash=createHash('sha256').update(randomBytes(32)).digest('hex'),helperHash=createHash('sha256').update(randomBytes(32)).digest('hex');
async function seed(path,data){await env.withSecurityRulesDisabled(ctx=>setDoc(doc(ctx.firestore(),path),data));}
const user=uid=>env.authenticatedContext(uid).firestore();
async function redeem(db,uid,hash,kind='owner',issuedBy='bootstrap'){
 const batch=writeBatch(db);batch.set(doc(db,'developers/'+uid),{kind,enabled:true,grantHash:hash,grantedAt:Date.now(),issuedBy});
 batch.update(doc(db,'developerCodes/'+hash),{usedBy:uid,usedAt:Date.now()});batch.delete(doc(db,'rankings/'+uid));
 if(kind==='owner')batch.update(doc(db,'developerSystem/root'),{uid,claimedAt:Date.now(),claimHash:hash});
 return batch.commit();
}
try {
 await seed('developerSystem/root',{seedHash:rootHash,createdAt:Date.now()});await seed('developerCodes/'+rootHash,{kind:'owner',issuedBy:'bootstrap',at:Date.now()});
 const alice=user('alice'),bob=user('bob');
 await assertFails(setDoc(doc(alice,'developers/alice'),{kind:'owner',enabled:true,grantHash:rootHash,grantedAt:1,issuedBy:'bootstrap'}));
 await assertFails(getDocs(collection(alice,'developerCodes')));await assertFails(getDoc(doc(alice,'developerSystem/root')));
 await assertFails(redeem(alice,'alice','f'.repeat(64)));
 await assertSucceeds(redeem(alice,'alice',rootHash));
 await assertFails(redeem(bob,'bob',rootHash));
 await assertFails(updateDoc(doc(alice,'developers/alice'),{kind:'helper'}));
 await assertFails(setDoc(doc(bob,'rankings/bob'),{id:'bob',dbg:1}));
 await assertFails(setDoc(doc(alice,'rankings/alice'),{id:'alice',dbg:0,prog:999}));
 await assertSucceeds(setDoc(doc(alice,'developerCodes/'+helperHash),{kind:'helper',issuedBy:'alice',at:Date.now(),expiresAt:Date.now()+86400000}));
 await assertSucceeds(redeem(bob,'bob',helperHash,'helper','alice'));
 await assertFails(setDoc(doc(bob,'developerCodes/'+('e'.repeat(64))),{kind:'helper',issuedBy:'bob',at:1,expiresAt:Date.now()+86400000}));
 await assertFails(setDoc(doc(alice,'developerCodes/'+('e'.repeat(64))),{kind:'owner',issuedBy:'alice',at:1,expiresAt:Date.now()+86400000}));
 const victim=user('victim');await assertSucceeds(setDoc(doc(victim,'saves/victim'),{id:'victim',data:'{}',rev:1,updated:1,sid:'test'}));
 await assertFails(getDoc(doc(user('other'),'saves/victim')));await assertSucceeds(getDoc(doc(bob,'saves/victim')));
 await assertFails(updateDoc(doc(bob,'saves/victim'),{data:'{}',rev:2}));await assertSucceeds(updateDoc(doc(alice,'saves/victim'),{data:'{}',rev:2}));
 await assertFails(setDoc(doc(victim,'weeklyAwards/victim/items/test'),{compass:2}));await assertFails(setDoc(doc(victim,'rankTitles/current'),{holders:{prog:['victim']}}));
 await assertFails(setDoc(doc(bob,'sanctions/victim'),{by:'bob',acts:'all'}));await assertSucceeds(setDoc(doc(alice,'sanctions/victim'),{by:'alice',acts:'all'}));
 await assertFails(setDoc(doc(victim,'developerAudit/fake'),{uid:'victim',at:1}));await assertSucceeds(setDoc(doc(bob,'developerAudit/real'),{uid:'bob',at:1}));
 await assertFails(setDoc(doc(bob,'runtimeConfig/probabilities'),{updatedBy:'alice',revision:1}));await assertSucceeds(setDoc(doc(bob,'runtimeConfig/probabilities'),{updatedBy:'bob',revision:1}));
 await assertFails(updateDoc(doc(bob,'runtimeConfig/probabilities'),{revision:1}));
 await assertFails(setDoc(doc(bob,'coupons/helper-coupon'),{code:'HELPER',reward:'{"stones":100}',createdBy:'bob'}));
 await assertFails(setDoc(doc(victim,'coupons/forged-coupon'),{code:'FORGED',reward:'{}',createdBy:'alice'}));
 await assertSucceeds(setDoc(doc(alice,'coupons/owner-coupon'),{code:'OWNER',reward:'{"stones":100}',createdBy:'alice'}));
 await assertSucceeds(getDoc(doc(victim,'coupons/owner-coupon')));
 await assertFails(deleteDoc(doc(alice,'developers/alice')));
 const gone=env.authenticatedContext('gone',{auth_time:Math.floor(Date.now()/1000)}).firestore(),other=user('other');
 await seed('saves/gone',{id:'gone',data:'{}',updated:1,rev:1,sid:'test'});
 await seed('rankings/gone',{id:'gone',prog:10,dbg:0});await seed('audit/gone-log',{uid:'gone',snap:'{}',at:1});await seed('audit/other-log',{uid:'other',snap:'{}',at:1});
 await seed('rankTitles/current',{week:'20261018',holders:{prog:['gone','other'],time1:['gone'],rush:['other']},updatedAt:1});
 await seed('rankTitleSeasons/20261011',{week:'20261011',holders:{prog:['gone','other']},updatedAt:1});
 await assertFails(deleteDoc(doc(gone,'saves/gone')));await assertFails(deleteDoc(doc(gone,'audit/gone-log')));
 await assertFails(setDoc(doc(env.authenticatedContext('stale',{auth_time:1}).firestore(),'accountDeletions/stale'),{uid:'stale'}));
 await assertFails(setDoc(doc(gone,'accountDeletions/other'),{uid:'other'}));
 await assertSucceeds(setDoc(doc(gone,'accountDeletions/gone'),{uid:'gone'}));
 await assertFails(setDoc(doc(gone,'rankings/gone'),{id:'gone',prog:99,dbg:0}));
 await assertFails(updateDoc(doc(gone,'saves/gone'),{data:'{}',rev:2}));
 await assertSucceeds(getDocs(query(collection(gone,'audit'),where('uid','==','gone'))));
 await assertFails(deleteDoc(doc(gone,'audit/other-log')));await assertSucceeds(deleteDoc(doc(gone,'audit/gone-log')));
 await assertFails(updateDoc(doc(gone,'rankTitles/current'),{holders:{prog:[],time1:[],rush:['other']}}));
 await assertFails(updateDoc(doc(gone,'rankTitles/current'),{holders:{prog:['other'],time1:[],rush:['gone','other']}}));
 await assertSucceeds(updateDoc(doc(gone,'rankTitles/current'),{holders:{prog:['other'],time1:[],rush:['other']}}));
 await assertSucceeds(updateDoc(doc(gone,'rankTitleSeasons/20261011'),{holders:{prog:['other']}}));
 await assertSucceeds(deleteDoc(doc(gone,'saves/gone')));await assertSucceeds(deleteDoc(doc(gone,'rankings/gone')));
 await assertFails(deleteDoc(doc(gone,'accountDeletions/gone')));
 // Self deletion of a developer must never give a helper access to another user.
 const bye=env.authenticatedContext('bob',{auth_time:Math.floor(Date.now()/1000)}).firestore();
 await assertSucceeds(setDoc(doc(bye,'accountDeletions/bob'),{uid:'bob'}));
 await assertSucceeds(getDocs(query(collection(bye,'developerCodes'),where('usedBy','==','bob'))));
 await assertSucceeds(deleteDoc(doc(bye,'developerCodes/'+helperHash)));
 await assertFails(deleteDoc(doc(bye,'developers/alice')));await assertSucceeds(deleteDoc(doc(bye,'developers/bob')));
 console.log('PASS: real Firestore rules, atomic root/helper activation, replay rejection, private saves, owner-only reset, immutable awards, owner-only coupon creation, recent-auth self deletion, own log cleanup, self-only title removal, stale-session restore rejection.');
} finally {await env.cleanup();}
