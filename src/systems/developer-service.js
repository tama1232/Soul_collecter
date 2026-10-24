import {createSparkService} from './spark-service.js';
import {applyProbabilities,getProbabilities,getRulesRevision} from '../config/live-rules.js';
import {canonical} from '../config/probability-rules.js';
import {unlockOwnerContent,setDeveloperCurrency,validateDeveloperCurrency} from '../config/developer-rules.js';
import {CHARACTERS,BOOKS} from '../game-data.js';
export async function sha256(text) {return [...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text)))].map(byte=>byte.toString(16).padStart(2,'0')).join('');}
export function firestoreValue(value) {
  if(value.mapValue) return Object.fromEntries(Object.entries(value.mapValue.fields??{}).map(([key,v])=>[key,firestoreValue(v)]));
  if(value.arrayValue) return (value.arrayValue.values??[]).map(firestoreValue);
  if(value.integerValue!==undefined) return Number(value.integerValue);
  if(value.doubleValue!==undefined) return value.doubleValue;
  if(value.booleanValue!==undefined) return value.booleanValue;
  return value.stringValue??null;
}
export function decodeDocument(doc) {return Object.fromEntries(Object.entries(doc.fields??{}).map(([key,value])=>[key,firestoreValue(value)]));}
let store,getGame,verified=null;
const config=()=>globalThis.CONTRACT_CONFIG??{};
export const developerService={
  attach(accountStore,game){store=accountStore;getGame=game;},
  clear(){verified=null;this.onClear?.();},
  get role(){return verified?.uid===store?.session?.uid&&verified?.expiresAt>Date.now()&&verified?.role?.enabled?verified.role:null;},
  get authorized(){return !!this.role;},
  async call(name,data={}) {
    if(config().functionsEnabled===false&&config().developerBackend!=='spark') throw new Error('개발자 서버가 아직 활성화되지 않았습니다');
    if(store?.session?.kind!=='firebase') throw new Error('전체 계정용 개발자 기능은 Firebase 온라인 계정과 서버 배포가 필요합니다');
    const auth=await store.authToken();if(!auth) throw new Error('다시 로그인하세요');
    const project=config().firebase?.projectId,region=config().functionsRegion??'asia-northeast3';
    if(config().developerBackend==='spark')return createSparkService({auth,projectId:project}).call(name,data);
    const response=await fetch(`https://${region}-${project}.cloudfunctions.net/${name}`,{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+auth.idToken},body:JSON.stringify({data})});
    const body=await response.json();if(!response.ok||body.error) throw new Error(body.error?.message??'개발 서버 요청에 실패했습니다');return body.result??body.data;
  },
  async document(path) {
    const auth=await store.authToken();if(!auth) return null;
    const response=await fetch(`https://firestore.googleapis.com/v1/projects/${config().firebase.projectId}/databases/(default)/documents/${path}`,{headers:{Authorization:'Bearer '+auth.idToken},cache:'no-store'});
    if(response.status===404) return null;if(!response.ok) throw new Error('서버 설정을 불러오지 못했습니다');return decodeDocument(await response.json());
  },
  async sync() {
    const uid=store?.session?.uid;
    if(store?.session?.kind!=='firebase'||config().functionsEnabled===false&&config().developerBackend!=='spark'){verified=null;return null;}
    const role=await this.call('developerStatus');
    if(store?.session?.uid!==uid) return null;verified={...role,expiresAt:Date.now()+90000};
    const game=getGame?.();if(game?.save){game.save.developerRole=role.role?.enabled?role.role.kind:null;if(role.role?.enabled){game.save.dbg=true;game.save.rankBan=true;unlockOwnerContent(game.save,role.role,CHARACTERS,BOOKS);}game.persist();}
    const settings=await this.document('runtimeConfig/probabilities');
    if(settings) {
      if(getRulesRevision()===settings.revision && await sha256(canonical(getProbabilities()))!==settings.hash) await this.call('reportIntegrity',{reason:'실행 중 확률 설정 불일치',expected:settings.hash,actual:await sha256(canonical(getProbabilities()))});
      const hash=await sha256(canonical(settings.rules));if(hash!==settings.hash) throw new Error('서버 설정 무결성 불일치');applyProbabilities(settings.rules,settings.revision);}
    return this.role;
  },
  async redeem(code){const result=await this.call('redeemDeveloperCode',{code});verified=result;await this.sync();return result;},
  async operation(action,payload={}){if(!this.authorized) throw new Error('개발자 코드 등록이 필요합니다');return this.call('developerOperation',{action,payload});},
  async setCurrency(currency,amount){
    validateDeveloperCurrency(currency,amount);
    const uid=store?.session?.uid,game=getGame?.(),save=game?.save;
    if(this.role?.kind!=='owner'||!save)throw new Error('메인 개발자만 재화를 직접 설정할 수 있습니다');
    await this.operation('setCurrency',{currency,amount});
    if(store?.session?.uid!==uid||getGame?.()?.save!==save||this.role?.kind!=='owner')throw new Error('계정이 변경되었습니다. 현재 계정에서 다시 시도하세요');
    setDeveloperCurrency(save,this.role,currency,amount);game.persist();
  },
  async inspectIntegrity() {
    const remote=await this.document('runtimeConfig/probabilities'),actual=await sha256(canonical(getProbabilities()));
    const result={revision:getRulesRevision(),expected:remote?.hash??null,actual,rulesMatch:!remote||remote.hash===actual,files:[],serverBaseline:false};
    const baseline=await this.document('runtimeConfig/build');
    if(baseline?.files){result.serverBaseline=true;for(const [path,expected] of Object.entries(baseline.files)) {const response=await fetch('./'+path,{cache:'no-store'});const bytes=await response.arrayBuffer();const hash=[...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(b=>b.toString(16).padStart(2,'0')).join('');if(!response.ok||hash!==expected) result.files.push(path);}}
    if(!result.rulesMatch||result.files.length) await this.call('reportIntegrity',{reason:'게임 설정 또는 배포 코드 불일치',expected:result.expected,actual,files:result.files});
    return result;
  }
};
