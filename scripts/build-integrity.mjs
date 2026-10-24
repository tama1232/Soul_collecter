import {readdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve,relative} from 'node:path';
import {GAME_VERSION} from '../src/config/version.js';
export async function buildIntegrity(root){
 const files={};
 const walk=async dir=>{for(const entry of await readdir(dir,{withFileTypes:true})){const file=resolve(dir,entry.name);if(entry.isDirectory())await walk(file);else if(file.endsWith('.js')){const path=relative(resolve(root,'dist'),file).replaceAll('\\','/');files[path]=createHash('sha256').update(await readFile(file)).digest('hex');}}};
 await walk(resolve(root,'dist/src'));files['config.js']=createHash('sha256').update(await readFile(resolve(root,'dist/config.js'))).digest('hex');
 const result={version:GAME_VERSION,files:Object.fromEntries(Object.entries(files).sort(([a],[b])=>a.localeCompare(b)))};
 await writeFile(resolve(root,'dist/integrity-manifest.json'),JSON.stringify(result)+'\n');
 await writeFile(resolve(root,'functions/build-manifest.json'),JSON.stringify(result,null,2)+'\n');
}
