import {getProbabilities} from './live-rules.js';
/** Soul collecter expansion rules. Rates are fractions (0.001% = 0.00001). */
export const EIGHT_HERO_ID = 'anima';
export const HIDDEN_BOSS_ID = 'soul_archon';
export const ALL_CRESTS = ['flame','blood','storm','shadow','ward','fury','swift','soul','venom','frost'];
export const RELIC_MAX_LEVEL = 5;
export const RELIC_RATES = Object.freeze([[1,.45],[2,.30],[3,.20],[4,.05]]);
export function rushCycle(chapter, length) { return Math.floor(Math.max(0, chapter - 1) / Math.max(1, length)); }
// Successive ratios grow: 1.45, 1.53, 1.61... Rewards use 1.55, 1.65, 1.75...
const cycleCache = [[1],[1]];
export function cycleMultiplier(cycle, reward = false) {
  const values=cycleCache[reward?1:0];
  while(values.length<=cycle) {const n=values.length-1; values.push(values.at(-1)*(reward?1.55+.10*n:1.45+.08*n));}
  return values[cycle];
}
export const rushCooldown = run => run?.bossRush ? rushCycle(run.chapter, run.rushList.length) * .5 : 0;
export const hiddenBossChance = cleared => Math.min(1, .00001 * (Math.max(0, cleared) + 1));
export function relicLevel(ids, id) { return ids.reduce((n, item) => n + (item === id ? 1 : 0), 0); }
export function rollRelicChoices(relics,count,random,owned=[]) {
  const eligible=relics.filter(relic=>relicLevel(owned,relic.id)<RELIC_MAX_LEVEL);
  if(!eligible.length) return [];
  const rates=Object.entries(getProbabilities().relic).map(([tier,rate])=>[Number(tier),rate]).filter(([tier])=>eligible.some(relic=>relic.rarity===tier));
  const total=rates.reduce((sum,[,rate])=>sum+rate,0);
  if(!total) return [];
  return Array.from({length:count},()=>{
    let value=random()*total,tier=rates.at(-1)[0];
    for(const [rarity,rate] of rates){if(value<rate){tier=rarity;break;}value-=rate;}
    const pool=eligible.filter(relic=>relic.rarity===tier);
    return pool[Math.min(pool.length-1,Math.floor(random()*pool.length))].id;
  });
}
export function capRelics(ids) {const counts={};return ids.filter(id=>{counts[id]=(counts[id]??0)+1;return counts[id]<=RELIC_MAX_LEVEL;});}
export function scaleEffects(effects, factor) {
  return effects.map(effect => {
    const scaled = structuredClone(effect);
    const stats = object => { for (const key of Object.keys(object ?? {})) if (typeof object[key] === 'number' && !(key === 'dmgTaken' && object[key] > 0)) object[key] *= factor; };
    stats(scaled.stats);
    if (typeof scaled.chance === 'number') scaled.chance = Math.min(1, scaled.chance * factor);
    for (const action of scaled.do ?? []) {
      stats(action.stats);
      if (typeof action.m === 'number') action.m *= factor;
      if (typeof action.v === 'number' && ['heal','shield','damage','gold','cdr','swapCd'].includes(action.k)) action.v *= factor;
    }
    // Timers, proc cooldowns, boolean flags and revive charges stay stable.
    return scaled;
  });
}
export function stackedRelicEffects(relic, level) {
  const effects = scaleEffects(relic.effects, 1 + .35 * (Math.min(RELIC_MAX_LEVEL,Math.max(1, level)) - 1));
  // Flag-only relics still grow; one revival remains one revival per run.
  level=Math.min(RELIC_MAX_LEVEL,level);
  if (level > 1) effects.push({stats:{allDmg: .005*(level-1), hpPct: .005*(level-1)}});
  return effects;
}
export function classifyRelics(relics) {
  const legendary = new Set(['phoenix_feather','magma_core','aegis_shard','heaven_hourglass','dragon_heart','star_heart','reaper_sand','hydra_fang','twin_shadow']);
  for (const relic of relics) {
    if (legendary.has(relic.id)) relic.rarity = 4;
    else if (relic.rarity === 3) relic.rarity = 3;
  }
  return relics;
}
export function bondMultiplier(bond, characters, owned) {
  const rarity = bond.heroes.reduce((sum,id) => sum + (characters[id]?.rarity ?? 3), 0) / bond.heroes.length;
  const awaken = bond.heroes.reduce((sum,id) => sum + (owned[id]?.aw ?? 0), 0) / bond.heroes.length;
  return (1 + (rarity - 3) * .2) * (1 + awaken * .12);
}
export function resolveBonds(definitions, party, characters, owned) {
  return definitions.filter(bond => bond.heroes.every(id => party.includes(id))).map(bond => {
    const multiplier = bondMultiplier(bond, characters, owned);
    return {...bond, multiplier, desc: bond.desc + ' · 효과 ×' + multiplier.toFixed(2), effects:scaleEffects(bond.effects, multiplier)};
  });
}
export function collectionBonds(definitions, characters, owned) {
  return definitions.filter(bond => bond.heroes.every(id => owned[id])).map(bond => {
    const multiplier = bondMultiplier(bond, characters, owned);
    // Collection bonuses are simple permanent stats, avoiding duplicate trigger chains.
    return {...bond, id:'collection:'+bond.id, name:'수집 · '+bond.name, desc:'상시 공격/체력/스킬 +' + (multiplier*.5).toFixed(2) + '%', effects:[{stats:{atk:multiplier*.005,hpPct:multiplier*.005,skillDmg:multiplier*.005}}]};
  });
}
export function makeEightHero(base, ranged) {
  const hero = structuredClone(base);
  Object.assign(hero, {id:EIGHT_HERO_ID,name:'타락한 신의 파편',title:'신성을 잃은 최초의 영혼',rarity:8,allElements:true,crests:ALL_CRESTS,
    lore:'신은 타락한 순간 수많은 영혼으로 부서졌다. 다섯 봉인 너머에서 돌아온 하나의 파편은 모든 속성과 죽음의 기억을 품는다. 신의 잔해만으로도 왕들의 역사는 무너진다.',atk:base.atk*8,hp:base.hp*10,fx:'#fff1b8'});
  Object.assign(hero.look,{body:'#241d34',trim:'#ffdd8a',hair:'#fff1c4',eye:'#ffe080',wcol:'#fff1b8',wcol2:'#aa6cff',cape:'#181522',glow:'#ffdc90'});
  hero.combo = [structuredClone(base.combo[0]), structuredClone(ranged.combo[0]), structuredClone(base.combo.at(-1))];
  const empower = act => { for (const event of act.ev ?? []) if (typeof event.m === 'number') event.m *= 5; return act; };
  hero.combo.forEach(empower); empower(hero.air); empower(hero.dashAtk);
  hero.skills.forEach((skill,index) => {skill.name = ['신벌 · 무너진 왕좌','타락 · 만상의 종말'][index]; skill.desc='압도적인 신성으로 전장을 쓸어버린다. 공격력 배율은 원형 스킬의 5배.'; skill.cd=Math.max(2,skill.cd*.55); empower(skill.act);});
  if (hero.ult) { hero.ult.name='신의 잔해 · 세계의 끝'; hero.ult.desc='타락한 신의 힘을 해방한다. 거대한 연속 신벌, 완전한 회복과 신성 보호막.';hero.ult.cd*=.6;empower(hero.ult.act);hero.ult.act.ev.push({t:0,k:'heal',v:1},{t:1,k:'shield',v:1}); }
  hero.passive = {name:'만상의 영혼',desc:'모든 문장 취급 · 공격 시 화상·출혈·감전·독·냉기를 순환 적용',effects:[{stats:{allDmg:1,skillDmg:2,bossDmg:1,lifesteal:.15,dmgTaken:-.6}},{on:'roomStart',do:[{k:'shield',v:.5}]}]};
  return hero;
}
export function makeHiddenBoss(base) {
  return {...structuredClone(base),id:HIDDEN_BOSS_ID,name:'영혼의 집정관',title:'다섯 봉인의 파수꾼',orb:true,flying:true,split:false,
    hp:Math.max(4000,base.hp*2),atk:Math.max(24,base.atk*1.3),chapter:1,w:40,h:52,mult:1.5,col:'#fff1b8',phases:[.8,.6,.4,.2],multi:[1,2,2,3,4],segBar:true,soulStones:0,
    patterns:[['diveBomb','radialBurst'],['swoop','laserCross','meteorShadow'],['spiralHell','splitArena'],['singularity','laserCross','diveBomb'],['spiralHell','singularity','meteorShadow','splitArena']]};
}
export const EXTRA_MILESTONES = [
  ['rush12','순환의 시작','보스러쉬 한 번에 12체 처치',s=>Math.max(0,...Object.values(s.rushBest??{}))>=12],
  ['rush50','왕들의 추격자','보스러쉬 한 번에 50체 처치',s=>Math.max(0,...Object.values(s.rushBest??{}))>=50],
  ['rush100','끝없는 왕좌','보스러쉬 한 번에 100체 처치',s=>Math.max(0,...Object.values(s.rushBest??{}))>=100],
  ['endless100','무한의 발자취','무한 모드 100층 도달',s=>Math.max(0,...Object.values(s.endlessBest??{}))>=100],
  ['endless300','경계 너머','무한 모드 300층 도달',s=>Math.max(0,...Object.values(s.endlessBest??{}))>=300],
  ['soul_gate','다섯 봉인의 열쇠','히든 보스 처치로 8성 계약 해금',s=>!!s.eightUnlocked],
  ['soul_collecter','Soul collecter','타락한 신의 파편 영입',s=>!!s.chars?.anima],
  ['soul_awaken','만상의 각성','타락한 신의 파편 5회 돌파',s=>(s.chars?.anima?.aw??0)>=5],
  ['growth100','멈추지 않는 성장','공용 체력/공격/스킬 중 100회 강화',s=>['hp','atk','skill'].some(id=>(s.upgrades?.[id]??0)>=100)],
  ['growth300','영혼의 대장장이','공용 체력/공격/스킬 중 300회 강화',s=>['hp','atk','skill'].some(id=>(s.upgrades?.[id]??0)>=300)],
  ['relic_master','유산의 완성자','한 유물 Lv5 달성',s=>(s.stats?.relicMax??0)>=5],
  ['weekly_star','이번 주의 별','주간 1위 보상 수령',s=>(s.stats?.weeklyWins??0)>0],
  ['collect40','영혼의 도서관','영웅 40명 보유',s=>Object.keys(s.chars??{}).length>=40],
  ['boss2000','천 왕의 종말','보스 누적 2,000체 처치',s=>Object.values(s.stats?.bossKills??{}).reduce((a,b)=>a+b,0)>=2000]
];
