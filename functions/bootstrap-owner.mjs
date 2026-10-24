/** Run only in the owner's trusted terminal with Application Default Credentials. */
import {initializeApp} from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';
import {readFileSync} from 'node:fs';
import {randomBytes} from 'node:crypto';
import {DEFAULT_PROBABILITIES} from './probability-rules.js';
import {hashRules,hashCode} from './development.js';
const projectId=process.argv[2];if(!projectId)throw new Error('Usage: node functions/bootstrap-owner.mjs FIREBASE_PROJECT_ID');
initializeApp({projectId});const db=getFirestore();
const manifest=JSON.parse(readFileSync(new URL('./build-manifest.json',import.meta.url)));
// Never bundle an activation code or its verifier in the public source.
const candidate='SC-DEV-'+randomBytes(16).toString('hex').toUpperCase();
const seedHash=hashCode(candidate);
const created=await db.runTransaction(async tx=>{
  const root=db.doc('developerSystem/root'),settings=db.doc('runtimeConfig/probabilities');
  const [state,config]=await Promise.all([tx.get(root),tx.get(settings)]);
  if(!state.exists){
    tx.create(root,{seedHash,createdAt:Date.now()});
    tx.create(db.doc('developerCodes/'+seedHash),{kind:'owner',issuedBy:'bootstrap',at:Date.now()});
  }
  if(!config.exists)tx.create(settings,{rules:DEFAULT_PROBABILITIES,revision:0,hash:hashRules(DEFAULT_PROBABILITIES),updatedBy:'bootstrap',updatedAt:Date.now()});
  tx.set(db.doc('runtimeConfig/build'),manifest);
  return !state.exists;
});
if(created){
 console.log('최초 개발자 코드를 발급했습니다. 이 터미널에 한 번만 표시되므로 안전하게 보관하고 온라인 게임의 쿠폰 창에서 사용하세요.');
 console.log(candidate);
}else console.log('기존 개발자 등록과 확률 설정은 보존하고 빌드 무결성 기준을 갱신했습니다. 신규 코드를 발급하지 않았습니다.');
