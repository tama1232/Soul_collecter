/** Probabilities are fractions, never percentages. Server and client share this schema. */
export const DEFAULT_PROBABILITIES = Object.freeze({normal:{8:.00003,7:.0003,6:.003,5:.03,4:.14},compassLocked:{7:.05,6:.95},compassUnlocked:{8:.001,7:.05,6:.949},relic:{1:.45,2:.30,3:.20,4:.05},weaponPickup:.5});
export function canonical(value) {
  return JSON.stringify(value && typeof value==='object' ? Object.fromEntries(Object.keys(value).sort().map(key=>[key,JSON.parse(canonical(value[key]))])) : value);
}
export function validateProbabilities(value) {
  if(!value || typeof value!=='object') throw new Error('확률 설정이 없습니다');
  const clean={};
  for(const group of ['normal','compassLocked','compassUnlocked','relic']) {
    const keys=Object.keys(DEFAULT_PROBABILITIES[group]);clean[group]={};
    for(const key of keys) {const n=value[group]?.[key];if(typeof n!=='number'||!Number.isFinite(n)||n<0||n>1) throw new Error(group+' 확률은 0~1이어야 합니다');clean[group][key]=n;}
    const sum=Object.values(clean[group]).reduce((a,b)=>a+b,0);
    if(group==='normal'?sum>1:Math.abs(sum-1)>1e-9) throw new Error(group+' 확률 합계를 확인하세요');
  }
  if(typeof value.weaponPickup!=='number'||!Number.isFinite(value.weaponPickup)||value.weaponPickup<0||value.weaponPickup>1) throw new Error('무기 픽업 확률을 확인하세요');
  clean.weaponPickup=value.weaponPickup;return clean;
}
