import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';
const root = resolve(import.meta.dirname, '..');
async function list(path) { const result = []; for (const entry of await readdir(path, { withFileTypes: true })) { const full = resolve(path, entry.name); if (entry.isDirectory()) result.push(...await list(full)); else result.push(full); } return result; }
const files = (await list(resolve(root, 'src'))).filter(file => file.endsWith('.js'));
const sources = new Map(await Promise.all(files.map(async file => [file, await readFile(file, 'utf8')])));
const exports = new Map();
for (const [file, source] of sources) {
  const syntax = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (syntax.status) throw new Error(syntax.stderr);
  const names = new Set();
  for (const match of source.matchAll(/export\s*\{([^}]+)\}/g)) for (const entry of match[1].split(',')) names.add(entry.trim().split(/\s+as\s+/).at(-1));
  for (const match of source.matchAll(/export\s+(?:async\s+)?(?:const|let|function|class)\s+(\w+)/g)) names.add(match[1]);
  exports.set(file, names);
}
let edges = 0;
for (const [file, source] of sources) {
  for (const match of source.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g)) {
    if (!match[2].startsWith('.')) throw new Error('Unexpected external dependency: ' + match[2]);
    const target = resolve(dirname(file), match[2]); const names = exports.get(target);
    if (!names) throw new Error('Missing module: ' + target);
    for (const entry of match[1].split(',')) { const name = entry.trim().split(/\s+as\s+/)[0]; if (name && !names.has(name)) throw new Error(`Missing export ${name}: ${file} -> ${target}`); }
    edges++;
  }
  for (const match of source.matchAll(/import\(['"]([^'"]+)['"]\)/g)) { await stat(resolve(dirname(file), match[1])); edges++; }
  for (const match of source.matchAll(/new URL\(['"]([^'"]+\.(?:png|jpg|svg))['"],\s*import.meta.url\)/g)) {
    const target = resolve(dirname(file), match[1]).replace(resolve(root, 'assets'), resolve(root, 'public/assets'));
    await stat(target);
  }
  if (/_0x(?:3199|13d595|1e6b|2b11ba)\(/.test(source)) throw new Error('Unresolved decoder call: ' + file);
  if (/contract-d6cf3|AIzaSyANYHUCo7Z/.test(source)) throw new Error('Original production backend leaked: ' + file);
  if (/new Function\(["']debugger/.test(source)) throw new Error('Anti-debug loop remains: ' + file);
}
for(const name of ['index.js','ranking-rules.js','weekly.js','development.js','probability-rules.js','bootstrap-owner.mjs']) {
  const syntax=spawnSync(process.execPath,['--check',resolve(root,'functions',name)],{encoding:'utf8'});
  if(syntax.status) throw new Error(syntax.stderr);
}
console.log(`Checked ${files.length} client modules + 6 server modules; ${edges} import links.`);
