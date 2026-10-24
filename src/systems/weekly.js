/** Weekly competition closes Sunday 00:00 Asia/Seoul. */
export const WEEK_MS = 7*86400000;
const KST=9*3600000;
export const WEEKLY_CATEGORIES = ['prog','endless','rush'];
export function weekStart(at=Date.now()) {
  const local=at+KST,day=Math.floor(local/86400000);
  return (day-new Date(day*86400000).getUTCDay())*86400000-KST;
}
export function weekKey(at=Date.now()) {return new Date(weekStart(at)+KST).toISOString().slice(0,10).replaceAll('-','');}
export function awardId(week,category,uid) {return `${week}_${category}_${uid}`;}
export function applyWeeklyAward(save,week,category) {
  const key=week+':'+category;
  save.rankClaims??={};
  if(save.rankClaims[key] || !WEEKLY_CATEGORIES.includes(category)) return false;
  save.rankClaims[key]=true;
  save.compass=(save.compass??0)+2;
  save.stats.weeklyWins=(save.stats.weeklyWins??0)+1;
  return true;
}
export async function claimCloudAwards(save,auth,projectId,at=Date.now(),request=fetch) {
  const weeks=new Set(Array.from({length:8},(_,age)=>weekKey(weekStart(at)-(age+1)*WEEK_MS)));
  // One indexed read of this player's award mailbox, instead of 24 missing-document probes.
  const response=await request(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/weeklyAwards/${auth.uid}:runQuery`,{
    method:'POST',headers:{Authorization:'Bearer '+auth.idToken,'Content-Type':'application/json'},
    body:JSON.stringify({structuredQuery:{from:[{collectionId:'items'}],where:{fieldFilter:{field:{fieldPath:'awardedAt'},op:'GREATER_THAN_OR_EQUAL',value:{integerValue:String(weekStart(at)-8*WEEK_MS)}}},orderBy:[{field:{fieldPath:'awardedAt'},direction:'DESCENDING'}],limit:100}})
  });
  if(!response.ok) throw new Error('주간 보상 서버를 확인할 수 없습니다');
  const claimed=[];
  for(const row of await response.json()) {
    const fields=row.document?.fields,week=fields?.week?.stringValue,category=fields?.category?.stringValue;
    if(fields?.uid?.stringValue!==auth.uid || Number(fields?.compass?.integerValue)!==2 || !weeks.has(week)) continue;
    if(applyWeeklyAward(save,week,category)) claimed.push({week,cat:category,stones:0,compass:2});
  }
  return claimed;
}
