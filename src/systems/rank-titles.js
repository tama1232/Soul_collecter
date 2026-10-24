import {weekKey} from './weekly.js';
import {rankTitleId} from '../config/ranking-rules.js';
// Server-issued eligibility is held outside imported saves. It expires at the Sunday boundary.
const snapshots=new WeakMap();
export function setRankTitleSnapshot(save,snapshot,uid,at=Date.now()) {
 const ids=snapshot?.week===weekKey(at)&&!save.dbg&&!save.rankBan&&!save.developerRole
   ? Object.entries(snapshot.holders??{}).filter(([,users])=>Array.isArray(users)&&users.includes(uid)).map(([category])=>rankTitleId(category)):[];
 snapshots.set(save,{week:snapshot?.week,ids});
 if(save.title?.startsWith('rank_')&&!ids.includes(save.title)) save.title='newbie';
 return ids;
}
export function canSelectTitle(save,title,at=Date.now()) {
 if(!title) return false;
 if(!title.rankCategory) return save.titles?.includes(title.id)??false;
 const snapshot=snapshots.get(save);
 return !save.dbg&&!save.rankBan&&!save.developerRole&&snapshot?.week===weekKey(at)&&snapshot.ids.includes(title.id);
}
export async function fetchRankTitles(save,auth,projectId,at=Date.now(),request=fetch) {
 const response=await request(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/rankTitles/current`,{headers:{Authorization:'Bearer '+auth.idToken}});
 if(response.status===404) return setRankTitleSnapshot(save,null,auth.uid,at);
 if(!response.ok) throw new Error('역대 1위 칭호를 확인할 수 없습니다');
 const fields=(await response.json()).fields??{};
 const holders=Object.fromEntries(Object.entries(fields.holders?.mapValue?.fields??{}).map(([category,value])=>[category,(value.arrayValue?.values??[]).map(item=>item.stringValue)]));
 return setRankTitleSnapshot(save,{week:fields.week?.stringValue,holders},auth.uid,at);
}
