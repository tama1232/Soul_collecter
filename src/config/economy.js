import {MAX_GROWTH_CAP} from './growth-limits.js';
import {getProbabilities} from './live-rules.js';
import {cycleMultiplier} from './expansion.js';
/** Shared deterministic prices and rewards. */
export const ECONOMY_VERSION = 5;
export const ECONOMY = Object.freeze({
  bossTrialLength: 6,
  bookFactors: [1, 1.5, 2.25, 3.375],
  shardsPerBoss: [8, 12, 16, 22],
  completionBonus: 0.25,
  shardBuy: 50,
  shardSell: 20,
  awakeningBase: { 3: 40, 4: 70, 5: 120, 6: 200, 7: 320, 8: 500 },
});
const round10 = value => Math.round(value / 10) * 10;
const bounded = (value, min, max) => Math.max(min, Math.min(max, Number.isFinite(value) ? Math.floor(value) : min));
const growthIncomeFactor=level=>ECONOMY.bookFactors[Math.min(3,Math.floor((level-1)/10))];
export const heroLevelCost = level => {level=bounded(level,1,MAX_GROWTH_CAP);return round10((80+40*level+4*level**2)*growthIncomeFactor(level));};
export const weaponEnhanceCost = next => round10(80 + 22 * bounded(next, 1, 50) + 1.2 * bounded(next, 1, 50) ** 2);
export const skillMasteryCost = next => {next=bounded(next,1,MAX_GROWTH_CAP);return round10((60+18*next+.9*next**2)*growthIncomeFactor(next));};
export const awakeningCost = (rarity, current = 0) => Math.ceil((ECONOMY.awakeningBase[rarity] ?? 320) * (1 + bounded(current, 0, 4) * 0.35));
export function permanentUpgrade(definition, expandedFactor = 3, effectFactor = 0.7) {
  const progressive = ['hp','atk','skill'].includes(definition.id);
  const uncapped=false;
  const max = progressive ? MAX_GROWTH_CAP : definition.max > 1 ? definition.max * expandedFactor : definition.max;
  const base = definition.max <= 1 ? 3000 : /revive|potion|relic/.test(definition.id) ? 600 : 300;
  return {...definition, max, uncapped, progressive, baseCost:base,
    cost: progressive ? [] : Array.from({length:max},(_,index)=>round10(base*1.17**index)),
    per: progressive ? definition.per : definition.max > 1 ? Math.round(definition.per*effectFactor*1000)/1000 : definition.per};
}
export function upgradeCost(definition, level) {
  // The ratio itself rises with level. Never allocate an unbounded cost array.
  return definition.progressive ? round10(definition.baseCost * Math.exp(level*Math.log(1.12) + .00045*level*level)) : definition.cost[level];
}
export function bossTrialRewards({book=1,bosses=0,cycleLength=6,curse=0,stoneBonus=0,crystalBonus=0}={}) {
  const tier = bounded(book,1,4)-1, count = Math.max(0,Math.floor(bosses));
  const factor = ECONOMY.bookFactors[tier]*(72+(tier+1)*7)/79, length = Math.max(1,cycleLength);
  let crystals=0,stones=0,awShards=0;
  for (let index=0; index<count; index++) {
    const cycle = Math.floor(index/length), position=index%length;
    const reward = cycleMultiplier(cycle,true);
    crystals += (300+30*position)*factor*reward;
    stones += (60+6*position)*factor*reward;
    awShards += ECONOMY.shardsPerBoss[0]*factor*reward;
  }
  const difficulty=1+bounded(curse,0,10)*.08, mats=[0,0,0,0];
  mats[tier]=Math.floor((count/2+Math.floor(count/length))*factor);
  return {stones:Math.round(stones*difficulty*(1+Math.max(0,stoneBonus))),crystals:Math.round(crystals*difficulty*(1+Math.max(0,crystalBonus))),awShards:Math.round(awShards),mats};
}
export function isBossTrialUnlocked(save, book, books) {
  const definition = books.find(entry => entry.id === book);
  return !!definition?.ready && !!save.storyClear?.[definition.stories[0]];
}
export function selectBossTrialRoute(route, save) {
  const cleared = route.filter(entry => save.storyClear?.[entry.story]);
  // Fixed order through cleared stories of the selected book; repeats without an end.
  return cleared;
}
export function craftCost(rarity) {
  return ({
    3: { crystals: 1000, mats: [2, 0, 0, 0] },
    4: { crystals: 3000, mats: [4, 2, 0, 0] },
    5: { crystals: 8000, mats: [6, 4, 2, 0] },
    6: { crystals: 18000, mats: [8, 6, 4, 4] },
  })[rarity] ?? null;
}

export const GACHA_BALANCE = Object.freeze({rate8:.00003,rate7:.0003,rate6:.003,rate5:.03,rate4:.14,pity5:60,pity6:120,pity7:360});
export const compassRates = unlocked => Object.entries(getProbabilities()[unlocked?'compassUnlocked':'compassLocked']).map(([rarity,rate])=>[Number(rarity),rate]).sort((a,b)=>b[0]-a[0]);
export function rollCompassRarity(unlocked, random=Math.random) {
  let value=random();
  for (const [rarity,rate] of compassRates(unlocked)) {if(value<rate) return rarity; value-=rate;}
  return 6;
}
export function normalRates(unlocked=false) {
  const config=getProbabilities().normal;
  const rates=[8,7,6,5,4].map(rarity=>[rarity,rarity===8&&!unlocked?0:config[rarity]]);
  return [...rates,[3,1-rates.reduce((sum,[,rate])=>sum+rate,0)]];
}
export function rollRarity(pity, random=Math.random, guaranteeFour=false, eightUnlocked=false) {
  let value=random(),rarity=3;
  for (const [level,rate] of normalRates(eightUnlocked)) {if(value<rate){rarity=level;break;}value-=rate;}
  if (rarity<7 && (pity.since7??0)+1>=GACHA_BALANCE.pity7) rarity=7;
  else if(rarity<6 && (pity.since6??0)+1>=GACHA_BALANCE.pity6) rarity=6;
  else if(rarity<5 && (pity.since5??0)+1>=GACHA_BALANCE.pity5) rarity=5;
  if(guaranteeFour && rarity<4) rarity=4;
  pity.total=(pity.total??0)+1;
  for(const level of [4,5,6,7]) pity[`since${level}`]=rarity>=level?0:(pity[`since${level}`]??0)+1;
  return rarity;
}
