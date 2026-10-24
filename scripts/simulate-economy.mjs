import {writeFile} from 'node:fs/promises';
import {heroLevelCost,weaponEnhanceCost,skillMasteryCost,awakeningCost,bossTrialRewards,upgradeCost,ECONOMY_VERSION} from '../src/config/economy.js';
import {BOOKS,getBossRoute,PERMANENT_UPGRADES} from '../src/game-data.js';
import {cycleMultiplier} from '../src/config/expansion.js';
const sum=(max,fn)=>Array.from({length:max},(_,i)=>fn(i+1)).reduce((a,b)=>a+b,0);
const totals={heroLevel1To50:sum(49,heroLevelCost),weapon0To50:sum(50,weaponEnhanceCost),oneSkill0To50:sum(50,skillMasteryCost),eightStarAwakening0To5:sum(5,next=>awakeningCost(8,next-1))};
const trials=BOOKS.flatMap(book=>{
 const cycleLength=getBossRoute(book.id).length;
 return [1,2,3].map(cycles=>({book:book.id,cycleLength,cycles,bosses:cycleLength*cycles,...bossTrialRewards({book:book.id,bosses:cycleLength*cycles,cycleLength})}));
});
const upgrade=PERMANENT_UPGRADES.find(def=>def.id==='atk');
const growthCaps=[10,20,30,40,50].map((cap,completedBooks)=>({completedBooks,cap,heroTotal:sum(cap-1,heroLevelCost),skillTotal:sum(cap,skillMasteryCost)}));
const result={growthCaps,economyVersion:ECONOMY_VERSION,assumptions:'All stories cleared, curse 0, no income bonuses; simulated currencies, not measured player time.',totals,trials,cycles:Array.from({length:8},(_,cycle)=>({cycle:cycle+1,enemy:cycleMultiplier(cycle),reward:cycleMultiplier(cycle,true),skillCooldown:cycle*.5})),commonPrices:[0,10,30,50,100,200,300].map(level=>({level,nextPrice:upgradeCost(upgrade,level)}))};
await writeFile(new URL('../docs/economy-simulation.json',import.meta.url),JSON.stringify(result,null,2)+'\n');
console.log('Economy v'+ECONOMY_VERSION+': simulated 4 books × 3 complete cycles and uncapped upgrade prices.');
