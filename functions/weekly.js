// Kept dependency-free so Sunday boundaries and retry behavior can be tested locally.
const KST=9*3600000, WEEK=7*86400000;
export function closingWeek(at) {
  const day=Math.floor((at+KST)/86400000), sunday=day-new Date(day*86400000).getUTCDay();
  return new Date(sunday*86400000-WEEK).toISOString().slice(0,10).replaceAll('-','');
}
export async function settleWeekly(db,at) {
  const week=closingWeek(at);
  for(const category of ['prog','endless','rush']) {
    const field=`w${week}_${category}`;
    // Read all positive entries so disqualified first places cannot hide legitimate winners.
    const snapshot=await db.collection('rankings').where(field,'>',0).orderBy(field,'desc').get();
    let winningScore=null;
    for(const row of snapshot.docs) {
      const data=row.data(), score=data[field];
      if(data.dbg===1 || data.rankBan===true) continue;
      const developer=await db.doc('developers/'+row.id).get();
      if(developer.exists) continue;
      const sanction=await db.doc('sanctions/'+row.id).get();
      if(sanction.exists && (sanction.data().rankBan || sanction.data().block)) continue;
      if(winningScore!==null && score<winningScore) break;
      winningScore=score;
      const ref=db.doc(`weeklyAwards/${row.id}/items/${week}_${category}`);
      await db.runTransaction(async tx=>{
        const existing=await tx.get(ref);
        if(!existing.exists) tx.create(ref,{uid:row.id,week,category,score,compass:2,awardedAt:at});
      });
    }
  }
  return week;
}
