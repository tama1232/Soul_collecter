import {encodeValue,decodeValue} from './spark-service.js';
/** Recent password authentication is supplied by AccountStore before this runs.
 * The server tombstone blocks stale devices from restoring a deleted account.
 * Every step is retryable; Authentication is removed only after data cleanup. */
export async function deleteCloudAccount({auth,projectId,apiKey,request=fetch,onProgress=()=>{},onStarted=()=>{}}){
 const root=`projects/${projectId}/databases/(default)/documents`,base='https://firestore.googleapis.com/v1/'+root,uid=auth.uid;
 const headers={'Content-Type':'application/json',Authorization:'Bearer '+auth.idToken};
 const api=async(path,body)=>{const response=await request(base+path,{method:body?'POST':'GET',headers,...body?{body:JSON.stringify(body)}:{}});if(response.status===404)return null;const result=await response.json();if(!response.ok)throw new Error(result.error?.message??'계정 데이터 삭제 실패. 같은 계정으로 다시 시도하세요.');return result;};
 const commit=writes=>writes.length?api(':commit',{writes}):Promise.resolve();
 const write=(path,data)=>({update:{name:root+'/'+path,fields:encodeValue(data).mapValue.fields}});
 await commit([write('accountDeletions/'+uid,{uid})]);onStarted();
 const query=async(collection,field,value)=>{const structuredQuery={from:[{collectionId:collection}],limit:200};if(field)structuredQuery.where={fieldFilter:{field:{fieldPath:field},op:'EQUAL',value:encodeValue(value)}};return (await api(':runQuery',{structuredQuery})).filter(row=>row.document).map(row=>row.document);};
 for(const [collection,field] of [['audit','uid'],['flags','uid'],['integrityReports','uid'],['developerAudit','uid'],['coupons','createdBy'],['developerCodes','usedBy'],['developerCodes','issuedBy']]){
  for(;;){const docs=await query(collection,field,uid);if(!docs.length)break;await commit(docs.map(doc=>({delete:doc.name})));onProgress(collection);}
 }
 // Nested award documents use the same owner rules as their parent UID.
 for(;;){const result=await api('/weeklyAwards/'+uid+'/items?pageSize=200'),docs=result?.documents??[];if(!docs.length)break;await commit(docs.map(doc=>({delete:doc.name})));}
 for(const collection of ['rankTitles','rankTitleSeasons']){
  // Title snapshots contain only public winner UIDs. Paginate without a cap so
  // a long-lived account cannot leave historical holder entries behind.
  let pageToken='';do{const result=await api('/'+collection+'?pageSize=200'+(pageToken?'&pageToken='+encodeURIComponent(pageToken):''));for(const doc of result?.documents??[]){const data=decodeValue({mapValue:{fields:doc.fields}});if(Object.values(data.holders??{}).some(list=>list.includes(uid))){data.holders=Object.fromEntries(Object.entries(data.holders).map(([key,list])=>[key,list.filter(value=>value!==uid)]));await commit([{...write(doc.name.slice(root.length+1),data),currentDocument:{updateTime:doc.updateTime}}]);}}pageToken=result?.nextPageToken??'';}while(pageToken);
 }
 // Remove private data last: developer status remains available while cleaning
 // the owner's logs. Only this signed-in UID is ever addressed.
 await commit(['saves','rankings','sanctions','developers'].map(collection=>({delete:root+'/'+collection+'/'+uid})));
 const response=await request('https://identitytoolkit.googleapis.com/v1/accounts:delete?key='+apiKey,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({idToken:auth.idToken})});
 if(!response.ok)throw new Error('게임 기록은 삭제되었습니다. 로그인 후 영구 삭제를 다시 눌러 인증 계정 삭제를 완료하세요.');
 return {deleted:true};
}
