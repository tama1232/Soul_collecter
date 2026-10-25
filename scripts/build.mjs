import {buildIntegrity} from './build-integrity.mjs';
import {createSave} from '../src/game-data.js';
import {GAME_VERSION} from '../src/config/version.js';
import { cp, mkdir, rm, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
await rm(resolve(root, 'dist'), { recursive: true, force: true });
await mkdir(resolve(root, 'dist'), { recursive: true });
await cp(resolve(root, 'public'), resolve(root, 'dist'), { recursive: true });
await cp(resolve(root, 'src'), resolve(root, 'dist/src'), { recursive: true });
// A versioned module directory invalidates the entire import graph after a release.
// Keep src/ for already-open clients, diagnostics and existing integration URLs.
const runtimeDirectory = 'runtime-' + GAME_VERSION;
await cp(resolve(root, 'src'), resolve(root, 'dist', runtimeDirectory), { recursive: true });
const entry = await readFile(resolve(root, 'public/index.html'), 'utf8');
await writeFile(resolve(root, 'dist/index.html'), entry.replace("import('./src/game.js')", `import('./${runtimeDirectory}/game.js')`));
await writeFile(resolve(root, 'dist/version.json'), JSON.stringify({ id: GAME_VERSION }));
await writeFile(resolve(root,'functions/default-save.json'),JSON.stringify(createSave())+'\n');
await cp(resolve(root,'src/config/ranking-rules.js'),resolve(root,'functions/ranking-rules.js'));
await cp(resolve(root,'src/config/developer-rules.js'),resolve(root,'functions/developer-rules.js'));
await buildIntegrity(root);
console.log('Built dist/ — static deployment, no runtime dependencies.');
