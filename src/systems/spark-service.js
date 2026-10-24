import {validateProbabilities,canonical,DEFAULT_PROBABILITIES} from '../config/probability-rules.js';
import {createSave} from '../game-data.js';
export const sparkHash=async value=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value)))].map(x=>x.toString(16).padStart(2,'0')).join('');
export function encodeValue(value){
 if(value===null)return {nullValue:null};
 if(typeof value==='string')return {stringValue:value};
 if(typeof value==='boolean')return {booleanValue:value};
 if(typeof value==='number')return Number.isSafeInteger(value)?{integerValue:String(value)}:{doubleValue:value};
 if(Array.isArray(value))return {arrayValue:{values:value.map(encodeValue)}};
 return {mapValue:{fields:Object.fromEntries(Object.entries(value).filter(([,v])=>v!==undefined).map(([k,v])=>[k,encodeValue(v)]))}};
}
export function decodeValue(value){if(value.mapValue)return Object.fromEntries(Object.entries(value.mapValue.fields??{}).map(([k,v])=>[k,decodeValue(v)]));if(value.arrayValue)return (value.arrayValue.values??[]).map(decodeValue);if(value.integerValue!==undefined)return Number(value.integerValue);return value.stringValue??value.doubleValue??value.booleanValue??null;}
export function createSparkService({auth,projectId,request=fetch,now=Date.now}){
 const root=`projects/${projectId}/databases/(default)/documents`,base='https://firestore.googleapis.com/v1/'+root;
 const uid=auth.uid;
 async function api(path,method='GET',body){const response=await request(base+path,{method,headers:{'Content-Type':'application/json',Authorization:'Bearer '+auth.idToken},...(body?{body:JSON.stringify(body)}:{})});const result=await response.json();if(response.status===404&&method==='GET')return null;if(!response.ok)throw new Error(response.status===403?'권한이 없거나 이미 사용한 코드입니다':result.error?.message??'서버 연결 오류');return result;}
 const decode=doc=>doc?{...decodeValue({mapValue:{fields:doc.fields??{}}}),_updateTime:doc.updateTime}:null;
 const get=async path=>decode(await api('/'+path));
 const write=(path,data,options={})=>({update:{name:root+'/'+path,fields:encodeValue(data).mapValue.fields},...options});
 const commit=async writes=>api(':commit','POST',{writes});
 const add=async(collection,data)=>{await commit([write(collection+'/'+crypto.randomUUID(),data,{currentDocument:{exists:false}})]);};
 const audit=async(action,detail={})=>add('developerAudit',{uid,action,at:now(),detail});
 const query=async(collection,fields={},order='at',limit=50,cursor)=>{
  const filters=Object.entries(fields).map(([field,value])=>({fieldFilter:{field:{fieldPath:field},op:'EQUAL',value:encodeValue(value)}}));
  const structuredQuery={from:[{collectionId:collection}],orderBy:[{field:{fieldPath:order},direction:order==='__name__'?'ASCENDING':'DESCENDING'}],limit};
  if(filters.length)structuredQuery.where=filters.length===1?filters[0]:{compositeFilter:{op:'AND',filters}};
  if(cursor)structuredQuery.startAt={values:[{referenceValue:root+'/'+collection+'/'+cursor}],before:false};
  return (await api(':runQuery','POST',{structuredQuery})).filter(row=>row.document).map(row=>({uid:row.document.name.split('/').at(-1),...decode(row.document)}));
 };
 const roleFor=async target=>{const role=await get('developers/'+target);if(role)delete role._updateTime;return role;};
 async function status(){return {uid,role:await roleFor(uid)};}
 async function redeem(raw){
  const existing=await roleFor(uid);if(existing?.enabled)return {uid,role:existing};
  const code=String(raw??'').trim().toUpperCase().replace(/\s+/g,'');if(!/^SC-DEV-[A-F0-9]{32}$/.test(code))throw new Error('올바른 개발자 코드를 입력하세요');
  const hash=await sparkHash(code),coupon=await get('developerCodes/'+hash);
  if(!coupon||coupon.usedBy||coupon.expiresAt&&coupon.expiresAt<now())throw new Error('사용했거나 만료된 개발자 코드입니다');
  const role={kind:coupon.kind,enabled:true,grantHash:hash,grantedAt:now(),issuedBy:coupon.issuedBy??'bootstrap'};
  const writes=[write('developers/'+uid,role,{currentDocument:{exists:false}}),write('developerCodes/'+hash,{usedBy:uid,usedAt:now()},{updateMask:{fieldPaths:['usedBy','usedAt']},currentDocument:{updateTime:coupon._updateTime}}),{delete:root+'/rankings/'+uid}];
  if(role.kind==='owner')writes.push(write('developerSystem/root',{uid,claimHash:hash,claimedAt:now()},{updateMask:{fieldPaths:['uid','claimHash','claimedAt']}}));
  await commit(writes);await audit('redeemDeveloperCode',{kind:role.kind});return {uid,role};
 }
 async function operation(action,payload={}){
  const role=await roleFor(uid);if(!role?.enabled||!['owner','helper'].includes(role.kind))throw new Error('개발자 권한이 없습니다');
  if(['issueCode','resetPlayer'].includes(action)&&role.kind!=='owner')throw new Error('최초 개발자만 사용할 수 있습니다');
  if(action==='issueCode'){
   const code='SC-DEV-'+[...crypto.getRandomValues(new Uint8Array(16))].map(x=>x.toString(16).padStart(2,'0')).join('').toUpperCase(),hash=await sparkHash(code),expiresAt=now()+30*86400000;
   await commit([write('developerCodes/'+hash,{kind:'helper',issuedBy:uid,at:now(),expiresAt},{currentDocument:{exists:false}})]);await audit(action,{kind:'helper'});return {code,kind:'helper',expiresAt};
  }
  if(action==='updateProbabilities'){
   const rules=validateProbabilities(payload.rules),old=await get('runtimeConfig/probabilities');if(payload.revision!==(old?.revision??0))throw new Error('다른 개발자가 설정을 변경했습니다. 새로고침하세요');
   const next={rules,revision:(old?.revision??0)+1,hash:await sparkHash(canonical(rules)),updatedBy:uid,updatedAt:now()};
   await commit([write('runtimeConfig/probabilities',next,{currentDocument:old?{updateTime:old._updateTime}:{exists:false}})]);await audit(action,{previous:old?.rules??DEFAULT_PROBABILITIES,next:rules});return next;
  }
  if(action==='createCoupon'){
   const code=String(payload.code??'').trim().toUpperCase();if(!/^[A-Z0-9_-]{4,32}$/.test(code)||code.startsWith('SC-DEV-'))throw new Error('쿠폰 코드 형식을 확인하세요');
   const reward={};for(const key of ['stones','crystals','compass','awShards']){const value=payload.reward?.[key]??0;if(!Number.isSafeInteger(value)||value<0||value>1e9)throw new Error('재화를 확인하세요');if(value)reward[key]=value;}
   if(!Object.keys(reward).length)throw new Error('재화를 하나 이상 입력하세요');const until=payload.until??'';if(until&&!/^\d{4}-\d{2}-\d{2}$/.test(until))throw new Error('만료일 형식이 잘못되었습니다');
   await commit([write('coupons/'+(await sparkHash('saja-coupon|'+code)).slice(0,24),{code,reward:JSON.stringify(reward),until,desc:String(payload.desc??'개발자 쿠폰').slice(0,100),createdBy:uid,at:now()},{currentDocument:{exists:false}})]);await audit(action,{code,reward});return {code};
  }
  if(action==='listPlayers'){const players=await query('saves',{},'__name__',50,payload.cursor);return {players,cursor:players.length===50?players.at(-1).uid:null};}
  if(action==='playerDetail'){const target=String(payload.uid??'');return {uid:target,account:await get('saves/'+target),developer:await roleFor(target),audit:await query('audit',{uid:target},'at',30),integrity:await query('integrityReports',{uid:target},'at',30)};}
  if(action==='audit')return query('developerAudit',{},'at',100);
  if(action==='recordTestAction'){await audit(action,{action:String(payload.action??'').slice(0,100)});return {recorded:true};}
  if(action==='resetPlayer'){
   const target=String(payload.uid??'');if(!/^[A-Za-z0-9_-]{1,128}$/.test(target))throw new Error('계정 UID를 확인하세요');
   const old=await get('saves/'+target);if(!old)throw new Error('저장 계정이 없습니다');const previous=JSON.parse(old.data),fresh=createSave(),at=now();
   fresh.settings=previous.settings??fresh.settings;fresh.usedCoupons=previous.usedCoupons??[];fresh.rankClaims=previous.rankClaims??{};fresh.sanctionN=at;
   await commit([write('saves/'+target,{id:old.id,data:JSON.stringify(fresh),rev:(old.rev??0)+1,updated:at,sid:'developer-reset'},{currentDocument:{updateTime:old._updateTime}}),write('sanctions/'+target,{n:at,at,acts:'all',reason:String(payload.reason??'개발자 초기화').slice(0,200),by:uid}),{delete:root+'/rankings/'+target}]);await audit(action,{target});return {uid:target,reset:true};
  }
  throw new Error('지원하지 않는 개발자 작업입니다');
 }
 async function call(name,data={}){if(name==='developerStatus')return status();if(name==='redeemDeveloperCode')return redeem(data.code);if(name==='developerOperation')return operation(data.action,data.payload);if(name==='reportIntegrity'){await add('integrityReports',{uid,at:now(),reason:String(data.reason??'설정 불일치').slice(0,300),expected:String(data.expected??''),actual:String(data.actual??''),files:(data.files??[]).slice(0,50)});return {recorded:true};}throw new Error('지원하지 않는 요청입니다');}
 return {call};
}
