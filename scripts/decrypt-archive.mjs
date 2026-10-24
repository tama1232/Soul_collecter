import {readFile,writeFile} from 'node:fs/promises';
import {decryptArchive} from './archive-codec.mjs';
const [keyPath,archivePath,outputPath]=process.argv.slice(2);
if(!keyPath||!archivePath||!outputPath)throw new Error('사용: node scripts/decrypt-archive.mjs 비밀키.pem 보관파일.soul 출력.json');
await writeFile(outputPath,JSON.stringify(decryptArchive(await readFile(archivePath,'utf8'),await readFile(keyPath,'utf8')),null,2),{mode:0o600,flag:'wx'});
console.log('지정한 로컬 파일에 복호화했습니다. 공개 저장소에 올리지 마세요.');
