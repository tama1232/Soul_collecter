import {growthCap} from './growth-limits.js';
export const PROGRESSIVE_UPGRADES=['hp','atk','skill'];
export const bookLevelCap=book=>Math.max(1,Math.min(4,Math.floor(book)||1))*10;
export const combatCap=(save,run)=>run?.bossRush?Math.min(growthCap(save),bookLevelCap(run.book)):growthCap(save);
export const upgradeLimit=(definition,save,run)=>definition.progressive?combatCap(save,run):definition.max;
export function effectiveUpgrades(save,run){return Object.fromEntries(Object.entries(save.upgrades??{}).map(([key,value])=>[key,PROGRESSIVE_UPGRADES.includes(key)?Math.min(value,combatCap(save,run)):value]));}
export function referenceGrowth(book){
 const cap=bookLevelCap(book),mastery=Math.min(5,cap)*.06+Math.max(0,cap-5)*.02;
 const attack=(Math.round(68*(1+(cap-1)*.06))+65)*(1+cap*.04);
 const hp=Math.round((282*(1+(cap-1)*.04)+12*cap)*1.42);
 // Median six-star pair, no awakenings, enhanced six-star weapon, capped common upgrades.
 const dps=attack*1.725*(.85+1.05*(1+cap*.05)*(1+mastery))*1.18;
 return {cap,attack,hp,dps};
}
export function encounterPower({story=1,bossRush=false,book=Math.ceil(story/7),cycle=0}={}){
 const tier=Math.max(1,Math.min(4,book)),progress=bossRush?1:((story-1)%7)/6,final=referenceGrowth(tier),previous=referenceGrowth(Math.max(1,tier-1));
 const atkEntry=tier===1?.18:Math.min(1,previous.dps*1.05/final.dps),hpEntry=tier===1?.3:Math.min(1,previous.hp*1.05/final.hp);
 const ref={...final,dps:final.dps*(atkEntry+(1-atkEntry)*progress),hp:Math.round(final.hp*(hpEntry+(1-hpEntry)*progress))};
 return {hp:ref.dps/600*(.65+.35*progress),atk:ref.hp/1000*(.8+.2*progress),balance:{book:tier,progress,bossRush,cycle,ref}};
}
export function bossBudget(def,power){
 if(!power?.balance)return null;
 const {book,progress,bossRush,cycle,ref}=power.balance;
 const inBook=Math.max(0,Math.min(1,((def.chapter-1)%70)/69));
 const seconds=(72+book*7)*( .65+.22*progress+.13*inBook);
 const cycleFactor=Math.pow(1.38,cycle);
 return {hp:Math.round(ref.dps*seconds*(bossRush?.88:1)*cycleFactor),atk:Math.round(ref.hp*(.125+book*.009+progress*.025)/.685*cycleFactor),seconds:seconds*(bossRush?.88:1)};
}
export function phaseProgress(boss){
 const ratio=Math.max(0,Math.min(1,boss.hp/boss.maxHp)),thresholds=[...(boss.bd?.phases??[])].sort((a,b)=>b-a);
 const next=thresholds.find(value=>value<ratio-1e-6)??0;
 return {ratio,next,remaining:Math.max(0,Math.ceil(boss.hp-boss.maxHp*next)),phase:thresholds.filter(value=>ratio<=value).length+1,total:thresholds.length+1};
}
export function migrateCommonUpgrades(save){
 if(save.commonGrowthVersion===1)return;
 const cap=growthCap(save);let refund=0;
 for(const key of PROGRESSIVE_UPGRADES){const old=Math.max(0,Math.floor(save.upgrades?.[key]??0));if(old<=cap)continue;
  for(let level=cap;level<Math.min(old,1000);level++)refund=Math.min(1e15,refund+Math.round(300*Math.exp(level*Math.log(1.12)+.00045*level*level)/10)*10);
  save.upgrades[key]=cap;
 }
 if(refund){save.crystals=(save.crystals??0)+refund;save.growthRefundPending=(save.growthRefundPending??0)+refund;save.run=null;}
 save.commonGrowthVersion=1;
}
export function addMissingUltimates(characters){
 for(const hero of Object.values(characters))if(hero.rarity===6&&!hero.ult){
  const act=structuredClone(hero.skills[1].act);
  act.ev=act.ev.map(event=>{const next=structuredClone(event);if(typeof next.m==='number')next.m*=2.1;if(next.f?.m)next.f.m*=1.6;if(next.k==='heal')next.v=Math.min(.35,next.v*1.3);return next;});
  hero.ult={name:hero.id==='enoch'?'심연의 종언':'영원히 피는 정원',cd:42,desc:hero.id==='enoch'?'심연의 힘으로 연속 참격을 펼친다. 심연 돌파 대비 직접 피해 210%.':'만개의 정원을 완성한다. 직접 피해 210%, 정원 지속 피해 160%, 회복 강화.',act};
 }
}
