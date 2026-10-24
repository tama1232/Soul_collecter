export const FREE_STORAGE_BYTES=1024**3,ARCHIVE_THRESHOLD=.75;
export const HISTORY_COLLECTIONS=['audit','flags','integrityReports','developerAudit'];
export function shouldArchive(bytes){if(!Number.isFinite(bytes)||bytes<0)throw new Error('저장 용량을 확인하지 못했습니다. 원본을 보존합니다.');return bytes>=FREE_STORAGE_BYTES*ARCHIVE_THRESHOLD;}
// Input must be a complete window ordered newest first. First record for each UID is retained.
export function olderHistory(docs){const latest=new Set();return docs.filter(doc=>{const uid=doc.data().uid;if(typeof uid!=='string'||!uid)return false;if(latest.has(uid))return true;latest.add(uid);return false;});}
export function oldRankFields(data,currentWeek,previousWeek){return Object.keys(data).filter(key=>/^w\d{8}_/.test(key)&&!key.startsWith('w'+currentWeek+'_')&&!key.startsWith('w'+previousWeek+'_'));}
export async function archiveThenPrune(records,{seal,publish,remove}) {
 if(!records.length)return 0;
 const sealed=seal(records),receipt=await publish(sealed);
 if(!receipt?.verified)throw new Error('원격 암호화 보관본 검증 실패: 원본을 보존합니다.');
 let count=0;for(const record of records){if(await remove(record))count++;}return count;
}

export function archiveChunks(records,maxBytes=8*1024**2){
 const chunks=[];let chunk=[],bytes=2;
 for(const record of records){const size=Buffer.byteLength(JSON.stringify(record))+1;
  if(size>maxBytes)throw new Error('보관 단위가 너무 큽니다. 원본을 보존합니다.');
  if(chunk.length&&(bytes+size>maxBytes||chunk.length>=100)){chunks.push(chunk);chunk=[];bytes=2;}
  chunk.push(record);bytes+=size;
 }
 if(chunk.length)chunks.push(chunk);return chunks;
}
