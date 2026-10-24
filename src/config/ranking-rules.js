/** Shared client/server ranking order. Missing legacy metadata never invents a curse or time. */
export const WEEKLY_CATEGORIES = ['prog','rush','endless','crystals'];
export const ALL_TIME_CATEGORIES = [...WEEKLY_CATEGORIES,...[1,2,3,4].flatMap(id=>['endless'+id,'rush'+id]),'curse',...Array.from({length:28},(_,i)=>'time'+(i+1))];
export const UNKNOWN_TIME = 2147483647;
export const categoryOf = field => field.replace(/^w\d{8}_/,'');
export function rankingRow(data,field,key='') {
  return {key,id:String(data.id??key),value:Number(data[field]),curse:Math.max(0,Number(data[field+'_curse'])||0),time:Number(data[field+'_time'])>0?Number(data[field+'_time']):UNKNOWN_TIME,at:Number(data[field+'_at'])||0,title:data.title};
}
export function compareRecords(a,b,category) {
  if(category.startsWith('time')) return b.curse-a.curse || a.value-b.value;
  const score=b.value-a.value;
  return score || (category==='crystals'?0:b.curse-a.curse || a.time-b.time);
}
export function sortRanking(rows,field) {
  const category=categoryOf(field);
  return rows.filter(row=>Number.isFinite(row.value)&&(category==='curse'?row.value>=0:row.value>0)).sort((a,b)=>compareRecords(a,b,category)||a.key.localeCompare(b.key)).map((row)=>({...row})).map((row,index,list)=>{
    row.rank=index===0?1:compareRecords(row,list[index-1],category)===0?list[index-1].rank:index+1;
    return row;
  });
}
export function updateRecord(scores,category,value,details={}) {
  const next={value,curse:details.curse??0,time:details.time>0?details.time:UNKNOWN_TIME,at:details.at??0};
  if(!Number.isFinite(value)||value<0) return false;
  if(scores[category]!==undefined&&compareRecords(next,rankingRow(scores,category),category)>=0) return false;
  scores[category]=value;scores[category+'_curse']=next.curse;scores[category+'_time']=next.time;scores[category+'_at']=next.at;
  return true;
}
export const rankTitleId = category => 'rank_'+category;
export function makeRankTitles(categories) {
 const names={prog:'끝까지 간 자',rush:'보스 사냥의 정점',endless:'무한의 정점',crystals:'영혼 결정의 주인',curse:'저주를 지배한 자'};
 return categories.filter(category=>!category.key.startsWith('time')).map((category,index)=>({id:rankTitleId(category.key),no:200+index,name:names[category.key]??category.label+'의 정점',desc:'역대 '+category.label+' 1위 · 일요일 갱신',col:'#ffd060',rankCategory:category.key,cond:()=>false}));
}
