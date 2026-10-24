export const BASE_GROWTH_CAP=10,STORY_GROWTH_STEP=10,STORY_COUNT=28,BOOK_COUNT=4;
export const MAX_GROWTH_CAP=BASE_GROWTH_CAP+BOOK_COUNT*STORY_GROWTH_STEP;
export function growthCap(save) {
 return BASE_GROWTH_CAP+STORY_GROWTH_STEP*Array.from({length:BOOK_COUNT},(_,book)=>book).filter(book=>Array.from({length:7},(_,chapter)=>book*7+chapter+1).every(id=>save.storyClear?.[id]===true)).length;
}
export function growthNotice(save) {
 const cap=growthCap(save),old=save.growthNoticeCap??10;
 save.growthNoticeCap=cap;
 const refund=save.growthRefundPending??0;delete save.growthRefundPending;
 if(refund>0) return '성장 상한 조정: 영혼 결정 '+refund.toLocaleString()+' 환급 · 현재 최대 Lv.'+cap;
 return cap>old?'성장 상한 확장! 캐릭터·스킬·공용 강화 최대 '+old+' → '+cap:null;
}
export function migrateGrowth(save) {
 if(save.growthVersion===1) return;
 const cap=growthCap(save);let refund=0;
 for(const hero of Object.values(save.chars??{})) {
  const old=Math.min(20,Math.max(1,Math.floor(hero.lv??1)));
  if(old>cap){for(let level=cap;level<old;level++) refund+=Math.round((80+40*level+4*level*level)/10)*10;}
  hero.lv=Math.min(old,cap);
  if(Array.isArray(hero.sk)) hero.sk=hero.sk.map(value=>{
    const old=Math.min(50,Math.max(0,Math.floor(value??0)));
    for(let level=cap+1;level<=old;level++) refund+=Math.round((60+18*level+.9*level*level)/10)*10;
    return Math.min(old,cap);
  });
 }
 if(refund){save.crystals=(save.crystals??0)+refund;save.growthRefundPending=refund;}
 // A suspended run snapshots old stats. Restart it after refund rather than reusing refunded power.
 if(refund&&save.run){save.run=null;}
 save.growthVersion=1;
}
