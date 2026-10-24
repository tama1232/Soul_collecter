import {randomBytes,createCipheriv,createDecipheriv,publicEncrypt,privateDecrypt,createHash,constants} from 'node:crypto';
import {gzipSync,gunzipSync} from 'node:zlib';
const oaep={padding:constants.RSA_PKCS1_OAEP_PADDING,oaepHash:'sha256'};
export function encryptArchive(records,publicKey) {
 const key=randomBytes(32),iv=randomBytes(12),cipher=createCipheriv('aes-256-gcm',key,iv);
 cipher.setAAD(Buffer.from('soul-archive-v1'));
 const ciphertext=Buffer.concat([cipher.update(gzipSync(Buffer.from(JSON.stringify(records)))),cipher.final()]);
 return JSON.stringify({version:1,algorithm:'RSA-OAEP-SHA256+AES-256-GCM',key:publicEncrypt({...oaep,key:publicKey},key).toString('base64'),iv:iv.toString('base64'),tag:cipher.getAuthTag().toString('base64'),data:ciphertext.toString('base64')});
}
export function decryptArchive(envelope,privateKey) {
 const data=JSON.parse(envelope);if(data.version!==1)throw new Error('지원하지 않는 보관 형식');
 const key=privateDecrypt({...oaep,key:privateKey},Buffer.from(data.key,'base64'));
 const decipher=createDecipheriv('aes-256-gcm',key,Buffer.from(data.iv,'base64'));
 decipher.setAAD(Buffer.from('soul-archive-v1'));decipher.setAuthTag(Buffer.from(data.tag,'base64'));
 return JSON.parse(gunzipSync(Buffer.concat([decipher.update(Buffer.from(data.data,'base64')),decipher.final()])));
}
export const archiveDigest=bytes=>createHash('sha256').update(bytes).digest('hex');
