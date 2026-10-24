import {WEEKLY_CATEGORIES,ALL_TIME_CATEGORIES,rankingRow,sortRanking} from './ranking-rules.js';
const KST=9*3600000, WEEK=7*86400000;
export function closingWeek(at) {
 const day=Math.floor((at+KST)/86400000), sunday=day-new Date(day*86400000).getUTCDay();
 return new Date(sunday*86400000-WEEK).toISOString().slice(0,10).replaceAll('-','');
}
export async function settleWeekly(db,at) {
 const week=closingWeek(at),currentWeek=closingWeek(at+WEEK),eligibility=new Map();
 async function eligible(row) {
   if(eligibility.has(row.id)) return eligibility.get(row.id);
   const data=row.data();
   const [developer,sanction]=await Promise.all([db.doc('developers/'+row.id).get(),db.doc('sanctions/'+row.id).get()]);
   const valid=data.dbg!==1&&!data.dev&&!data.rankBan&&!developer.exists&&!(sanction.exists&&(sanction.data().rankBan||sanction.data().block));
   eligibility.set(row.id,valid);return valid;
 }
 async function leaders(field) {
   // No early limit: exclusions or a large score tie must not hide the real winner.
   const snapshot=await db.collection('rankings').where(field,'>=',field==='curse'?0:1).orderBy(field,'desc').get();
   const rows=[];
   for(const row of snapshot.docs) if(await eligible(row)) rows.push(rankingRow(row.data(),field,row.id));
   return sortRanking(rows,field).filter(row=>row.rank===1);
 }
 for(const category of WEEKLY_CATEGORIES) for(const winner of await leaders(`w${week}_${category}`)) {
   const ref=db.doc(`weeklyAwards/${winner.key}/items/${week}_${category}`);
   await db.runTransaction(async tx=>{
     const existing=await tx.get(ref);
     if(!existing.exists) tx.create(ref,{uid:winner.key,week,category,score:winner.value,curse:winner.curse,time:winner.time,compass:2,awardedAt:at});
   });
 }
 const season=db.doc('rankTitleSeasons/'+currentWeek),current=db.doc('rankTitles/current');
 if(!(await season.get()).exists) {
   const holders={};
   for(const category of ALL_TIME_CATEGORIES.filter(key=>!key.startsWith('time'))) holders[category]=(await leaders(category)).map(row=>row.key);
   await db.runTransaction(async tx=>{
     const [old,active]=await Promise.all([tx.get(season),tx.get(current)]);
     if(old.exists) return;
     const snapshot={week:currentWeek,holders,updatedAt:at};
     tx.create(season,snapshot);
     // Late retries must never replace a newer Sunday's title holders.
     if(!active.exists||active.data().week<currentWeek) tx.set(current,snapshot);
   });
 }
 return week;
}
