import {createRequire} from 'node:module';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {resolve} from 'node:path';
import {settleWeekly,closingWeek} from '../functions/weekly.js';
import {encryptArchive,archiveDigest} from './archive-codec.mjs';
import {shouldArchive,HISTORY_COLLECTIONS,oldRankFields,archiveThenPrune,archiveChunks} from './archive-policy.mjs';
const require=createRequire(new URL('../functions/package.json',import.meta.url));
const {initializeApp,applicationDefault}=require('firebase-admin/app'),{getFirestore,FieldValue}=require('firebase-admin/firestore');
const projectId=process.env.GOOGLE_CLOUD_PROJECT??'soul-collecter-c2ba0';
initializeApp({credential:applicationDefault(),projectId});const db=getFirestore();
const at=Date.now(),currentWeek=closingWeek(at+7*86400000),previousWeek=closingWeek(at);
const git=(...args)=>execFileSync('git',args,{encoding:'utf8',maxBuffer:24*1024*1024}).trim();
const archiveDir=resolve(process.env.ARCHIVE_DIR??'archive-data');
let writeBudget=1800,readBudget=6500;
async function storageBytes(){
 const token=await applicationDefault().getAccessToken();
 const url=new URL(`https://monitoring.googleapis.com/v3/projects/${projectId}/timeSeries`);
 url.search=new URLSearchParams({filter:'metric.type="firestore.googleapis.com/storage/data_and_index_storage_bytes" AND resource.type="firestore.googleapis.com/Database" AND resource.labels.database_id="(default)"','interval.startTime':new Date(at-24*3600000).toISOString(),'interval.endTime':new Date(at).toISOString(),'view':'FULL','pageSize':'100'});
 const response=await fetch(url,{headers:{Authorization:'Bearer '+token.access_token}});if(!response.ok)throw new Error('저장 용량 측정 실패. 보관/삭제하지 않습니다.');
 const series=(await response.json()).timeSeries??[];
 const points=series.flatMap(row=>row.points??[]).filter(point=>at-Date.parse(point.interval.endTime)<2*3600000);
 if(!points.length)throw new Error('최신 용량 지표 없음. 보관/삭제하지 않습니다.');
 return Math.max(...points.map(point=>Number(point.value.int64Value??point.value.doubleValue)));
}
function exportRecord(doc,action='delete',fields=[]){return {path:doc.ref.path,updateTime:doc.updateTime.toDate().toISOString(),seconds:doc.updateTime.seconds,nanoseconds:doc.updateTime.nanoseconds,data:doc.data(),action,fields};}
async function publish(sealed){
 const id=new Date().toISOString().replaceAll(':','-')+'-'+archiveDigest(sealed).slice(0,16),relative=`history/${id}.soul`;
 await mkdir(resolve(archiveDir,'history'),{recursive:true});await writeFile(resolve(archiveDir,relative),sealed,{flag:'wx'});
 git('-C',archiveDir,'add',relative);git('-C',archiveDir,'commit','-m','Archive encrypted historical game records');git('-C',archiveDir,'push','origin','HEAD:game-archive');
 // Read back from remote commit. No raw Firestore content or names enter Git/logs.
 git('-C',archiveDir,'fetch','origin','game-archive');
 const remote=execFileSync('git',['-C',archiveDir,'show','FETCH_HEAD:'+relative],{maxBuffer:24*1024*1024});
 return {verified:archiveDigest(remote)===archiveDigest(sealed)};
}
async function remove(record){
 if(writeBudget<=0)return false;
 const ref=db.doc(record.path);
 try{return await db.runTransaction(async tx=>{
   const current=await tx.get(ref);readBudget--;if(!current.exists||current.updateTime.seconds!==record.seconds||current.updateTime.nanoseconds!==record.nanoseconds)return false;
   if(record.action==='rank-fields')tx.update(ref,Object.fromEntries(record.fields.map(field=>[field,FieldValue.delete()])));
   else tx.delete(ref);
   writeBudget--;return true;
 });}catch(error){if(error.code===9||error.code===10)return false;throw error;}
}
async function archiveHistory(){
 const bytes=await storageBytes();console.log('Firestore data/index usage:',(bytes/1024**2).toFixed(1),'MiB');
 if(!shouldArchive(bytes))return {bytes,archived:0};
 const publicKey=process.env.ARCHIVE_PUBLIC_KEY;if(!publicKey)throw new Error('암호화 공개키가 없어 원본을 보존합니다.');
 let archived=0;
 for(const collection of HISTORY_COLLECTIONS){
  if(readBudget<1400||writeBudget<=0)break;
  const cursorRef=db.doc('maintenance/archive-'+collection),cursorDoc=await cursorRef.get();readBudget--;
  const cursor=cursorDoc.data();let query=db.collection(collection).orderBy('at','asc').orderBy('__name__','asc');
  if(cursor?.path)query=query.startAfter(cursor.at,db.doc(cursor.path));
  const docs=(await query.limit(400).get()).docs;readBudget-=docs.length;
  const latest=new Map(),records=[];
  for(const doc of docs){
   const uid=doc.data().uid;if(typeof uid!=='string'||!uid)continue;
   if(!latest.has(uid)){const found=await db.collection(collection).where('uid','==',uid).orderBy('at','desc').limit(1).get();readBudget--;latest.set(uid,found.docs[0]?.ref.path);}
   if(latest.get(uid)!==doc.ref.path&&records.length<writeBudget)records.push(exportRecord(doc));
  }
  // Small chunks keep both Firestore daily quotas and GitHub individual files bounded.
  for(const chunk of archiveChunks(records))archived+=await archiveThenPrune(chunk,{seal:r=>encryptArchive(r,publicKey),publish,remove});
  const last=docs.at(-1);await cursorRef.set(docs.length===400?{path:last.ref.path,at:last.data().at}:{path:null});
 }
 if(readBudget>1200&&writeBudget>0){
  const docs=(await db.collection('rankings').limit(Math.min(500,readBudget-700)).get()).docs;readBudget-=docs.length;
  const records=docs.map(doc=>exportRecord(doc,'rank-fields',oldRankFields(doc.data(),currentWeek,previousWeek))).filter(row=>row.fields.length).slice(0,writeBudget);
  for(const chunk of archiveChunks(records))archived+=await archiveThenPrune(chunk,{seal:r=>encryptArchive(r,publicKey),publish,remove});
 }
 if(readBudget>600&&writeBudget>0){
  const docs=(await db.collection('rankTitleSeasons').limit(500).get()).docs;readBudget-=docs.length;
  const records=docs.filter(doc=>doc.id<currentWeek).slice(0,writeBudget).map(doc=>exportRecord(doc));
  for(const chunk of archiveChunks(records))archived+=await archiveThenPrune(chunk,{seal:r=>encryptArchive(r,publicKey),publish,remove});
 }
 // Saves, all-time scores, developer grants, sanctions, coupons and unclaimed awards are never deleted.
 if(!archived)console.warn('75% 이상: 이번 조회 구간에 정리할 과거 기록이 없습니다. 최신 정보 보존, 다음 실행에서 계속 확인합니다.');
 return {bytes,archived};
}
try{
 const buildRef=db.doc('runtimeConfig/build'),active=await buildRef.get();
 if(!active.exists)throw new Error('최초 설정 스크립트를 먼저 실행하세요.');
 const manifest=JSON.parse(await readFile(new URL('../functions/build-manifest.json',import.meta.url),'utf8'));
 if(active.data().version!==manifest.version)await buildRef.set(manifest);
 // Run weekly settlement every day to retry delayed Sunday jobs. Existing receipts make it idempotent.
 // A small marker prevents repeated scans once this week is complete.
 const marker=db.doc('maintenance/weekly-'+currentWeek);
 if(!(await marker.get()).exists){await settleWeekly(db,at);await marker.set({at,week:currentWeek});}
 const status=await archiveHistory();
 await mkdir(archiveDir,{recursive:true});await writeFile(resolve(archiveDir,'status.json'),JSON.stringify({at:new Date().toISOString(),...status})+'\n');
 git('-C',archiveDir,'add','status.json');git('-C',archiveDir,'commit','-m','Update free maintenance status');git('-C',archiveDir,'push','origin','HEAD:game-archive');
 console.log('무료 정산 및 용량 확인 완료. 원본 사용자 정보는 출력하지 않습니다.');
}catch(error){console.error(error.message);process.exitCode=1;}
