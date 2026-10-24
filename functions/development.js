import {createHash,randomBytes} from 'node:crypto';
import {DEFAULT_PROBABILITIES,validateProbabilities,canonical} from './probability-rules.js';
import {allowDeveloper,validateDeveloperCurrency} from './developer-rules.js';
export {allowDeveloper} from './developer-rules.js';
export const hashCode=code=>createHash('sha256').update(code.trim().toUpperCase().replace(/\s+/g,'')).digest('hex');
export const hashRules=rules=>createHash('sha256').update(canonical(rules)).digest('hex');
function denied(message='이 작업의 개발자 권한이 없습니다') {const error=new Error(message);error.code='permission-denied';throw error;}
export function createDeveloperHandlers({db,defaultSave,now=Date.now,newCode=()=> 'SC-DEV-'+randomBytes(16).toString('hex').toUpperCase()}) {
  const roleFor=async uid=>{const doc=await db.doc('developers/'+uid).get();return doc.exists?doc.data():null;};
  const audit=async (uid,action,detail)=>db.collection('developerAudit').add({uid,action,at:now(),detail});
  async function status(uid) {if(!uid) denied('로그인이 필요합니다');const role=await roleFor(uid);return {uid,role:role?.enabled?role:null};}
  async function redeem(uid,rawCode) {
    if(!uid) denied('로그인이 필요합니다');
    const existing=await roleFor(uid);if(existing?.enabled) return {uid,role:existing};
    const code=String(rawCode??'').trim().toUpperCase().replace(/\s+/g,'');
    if(!/^SC-DEV-[A-F0-9]{32}$/.test(code)) denied('올바른 개발자 코드를 입력하세요');
    const ref=db.doc('developerCodes/'+hashCode(code)),roleRef=db.doc('developers/'+uid),root=db.doc('developerSystem/root');
    const role=await db.runTransaction(async tx=>{
      const [coupon,account,rootState]=await Promise.all([tx.get(ref),tx.get(roleRef),tx.get(root)]);
      if(account.exists&&account.data().enabled) return account.data();
      const data=coupon.exists?coupon.data():null;
      if(!data) denied('서버에 등록되지 않은 개발자 코드입니다. 관리자 등록이 필요합니다');
      if(data.usedBy||data.expiresAt&&data.expiresAt<now()) denied('사용했거나 만료된 개발자 코드입니다');
      if(!['owner','helper'].includes(data.kind)) denied();
      if(data.kind==='owner'&&rootState.data()?.uid) denied('최초 개발자 계정이 이미 등록되었습니다');
      const granted={kind:data.kind,enabled:true,grantedAt:now(),issuedBy:data.issuedBy??'bootstrap'};
      tx.set(roleRef,granted);tx.update(ref,{usedBy:uid,usedAt:now()});
      if(data.kind==='owner') tx.set(root,{...rootState.data(),uid,claimedAt:now()});
      tx.delete(db.doc('rankings/'+uid));
      return granted;
    });
    await audit(uid,'redeemDeveloperCode',{kind:role.kind});return {uid,role};
  }
  async function operation(uid,action,payload={}) {
    if(!uid) denied('로그인이 필요합니다');const role=await roleFor(uid);if(!allowDeveloper(role,action)) denied();
    if(action==='setCurrency') {
      const change=validateDeveloperCurrency(payload.currency,payload.amount);
      await audit(uid,action,change);return change;
    }
    if(action==='issueCode') {
      const code=newCode(),hash=hashCode(code);
      await db.doc('developerCodes/'+hash).create({kind:'helper',issuedBy:uid,at:now(),expiresAt:now()+30*86400000});
      await audit(uid,action,{kind:'helper',hash});return {code,kind:'helper',expiresAt:now()+30*86400000};
    }
    if(action==='updateProbabilities') {
      const rules=validateProbabilities(payload.rules),ref=db.doc('runtimeConfig/probabilities');
      const result=await db.runTransaction(async tx=>{
        const old=await tx.get(ref),previous=old.exists?old.data():{rules:DEFAULT_PROBABILITIES,revision:0};
        if(payload.revision!==previous.revision) throw new Error('다른 개발자가 설정을 변경했습니다. 새로고침 후 다시 저장하세요');
        const next={rules,revision:previous.revision+1,hash:hashRules(rules),updatedBy:uid,updatedAt:now()};
        tx.set(ref,next);return {previous,next};
      });
      await audit(uid,action,result);return result.next;
    }
    if(action==='createCoupon') {
      const code=String(payload.code??'').trim().toUpperCase();if(!/^[A-Z0-9_-]{4,32}$/.test(code)||code.startsWith('SC-DEV-')) throw new Error('일반 쿠폰은 영문/숫자/_/- 4~32자');
      const rewards={};for(const name of ['stones','crystals','compass','awShards']) {const value=payload.reward?.[name]??0;if(!Number.isSafeInteger(value)||value<0||value>1e9) throw new Error('쿠폰 재화를 확인하세요');if(value) rewards[name]=value;}
      if(!Object.keys(rewards).length) throw new Error('재화를 하나 이상 입력하세요');
      const until=payload.until??'';if(until&&!/^\d{4}-\d{2}-\d{2}$/.test(until)) throw new Error('만료일은 YYYY-MM-DD');
      const hash=createHash('sha256').update('saja-coupon|'+code).digest('hex').slice(0,24);
      await db.doc('coupons/'+hash).create({code,reward:JSON.stringify(rewards),desc:String(payload.desc??'개발자 쿠폰').slice(0,100),until,at:now(),createdBy:uid});
      await audit(uid,action,{code,reward:rewards});return {code};
    }
    if(action==='resetPlayer') {
      const target=String(payload.uid??'');if(!/^[A-Za-z0-9_-]{1,128}$/.test(target)) throw new Error('계정 UID를 확인하세요');
      const ref=db.doc('saves/'+target),at=now();
      await db.runTransaction(async tx=>{
        const doc=await tx.get(ref);if(!doc.exists) throw new Error('저장 계정이 없습니다');const account=doc.data(),old=JSON.parse(account.data);
        const fresh=structuredClone(defaultSave);fresh.settings=old.settings??fresh.settings;fresh.usedCoupons=old.usedCoupons??[];fresh.rankClaims=old.rankClaims??{};fresh.sanctionN=at;
        tx.update(ref,{data:JSON.stringify(fresh),rev:(account.rev??0)+1,updated:at,sid:'developer-reset'});
        tx.set(db.doc('sanctions/'+target),{n:at,at,acts:'all',reason:String(payload.reason??'개발자 초기화').slice(0,200),by:uid},{merge:true});
        tx.delete(db.doc('rankings/'+target));
      });
      await audit(uid,action,{target,reason:payload.reason??''});return {uid:target,reset:true};
    }
    if(action==='listPlayers') {
      const query=db.collection('saves').orderBy('__name__').limit(50);const page=payload.cursor?query.startAfter(payload.cursor):query;
      const docs=await page.get();return {players:docs.docs.map(doc=>({uid:doc.id,...doc.data()})),cursor:docs.docs.length===50?docs.docs.at(-1).id:null};
    }
    if(action==='playerDetail') {
      const target=String(payload.uid??'');if(!/^[A-Za-z0-9_-]{1,128}$/.test(target)) throw new Error('계정 UID를 확인하세요');
      const [save,dev]=await Promise.all([db.doc('saves/'+target).get(),roleFor(target)]);
      const events=await db.collection('audit').where('uid','==',target).orderBy('at','desc').limit(30).get();
      const flags=await db.collection('integrityReports').where('uid','==',target).orderBy('at','desc').limit(30).get();
      return {uid:target,account:save.exists?save.data():null,developer:dev,audit:events.docs.map(doc=>doc.data()),integrity:flags.docs.map(doc=>doc.data())};
    }
    if(action==='recordTestAction') {await audit(uid,action,{action:String(payload.action??'').slice(0,100)});return {recorded:true};}
    if(action==='audit') {
      const docs=await db.collection('developerAudit').orderBy('at','desc').limit(100).get();return docs.docs.map(doc=>({id:doc.id,...doc.data()}));
    }
    denied('지원하지 않는 개발자 작업입니다');
  }
  async function integrity(uid,payload={}) {
    if(!uid) denied();const detail={reason:String(payload.reason??'설정 불일치').slice(0,300),expected:String(payload.expected??'').slice(0,80),actual:String(payload.actual??'').slice(0,80),files:(payload.files??[]).slice(0,50)};
    await db.collection('integrityReports').add({uid,at:now(),...detail});return {recorded:true};
  }
  return {status,redeem,operation,integrity};
}
