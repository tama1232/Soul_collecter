import {initializeApp} from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';
import {onSchedule} from 'firebase-functions/v2/scheduler';
import {settleWeekly} from './weekly.js';
initializeApp();
export const weeklyLeaders = onSchedule({schedule:'0 0 * * 0',timeZone:'Asia/Seoul',region:'asia-northeast3',retryCount:3}, async event=>{
  // Retries always use the scheduled boundary, never a later wall-clock week.
  await settleWeekly(getFirestore(),new Date(event.scheduleTime).getTime());
});

import {onCall,HttpsError} from 'firebase-functions/v2/https';
import {readFileSync} from 'node:fs';
import {createDeveloperHandlers} from './development.js';
const developer=createDeveloperHandlers({db:getFirestore(),defaultSave:JSON.parse(readFileSync(new URL('./default-save.json',import.meta.url)))});
const callable=handler=>onCall({region:'asia-northeast3',maxInstances:10},async request=>{
  try {if(!request.auth) throw new HttpsError('unauthenticated','로그인이 필요합니다');return await handler(request.auth.uid,request.data??{});}
  catch(error){if(error instanceof HttpsError) throw error;throw new HttpsError(error.code==='permission-denied'?'permission-denied':'failed-precondition',error.message);}
});
export const developerStatus=callable((uid)=>developer.status(uid));
export const redeemDeveloperCode=callable((uid,data)=>developer.redeem(uid,data.code));
export const developerOperation=callable((uid,data)=>developer.operation(uid,data.action,data.payload));
export const reportIntegrity=callable((uid,data)=>developer.integrity(uid,data));
