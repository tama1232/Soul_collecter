export const OWNER_ACTIONS=['issueCode','resetPlayer','createCoupon','setCurrency'];
export const DEVELOPER_CURRENCIES=[
 ['stones','영혼석'],['crystals','영혼 결정'],['compass','별의 나침반'],['awShards','각성 파편'],
 ['mat1','1장 정수'],['mat2','2장 정수'],['mat3','3장 정수'],['mat4','4장 정수']
];
export function allowDeveloper(role,action){
 return role?.enabled===true&&['owner','helper'].includes(role.kind)&&(!OWNER_ACTIONS.includes(action)||role.kind==='owner');
}
export function validateDeveloperCurrency(currency,amount){
 if(!DEVELOPER_CURRENCIES.some(([key])=>key===currency)||!Number.isSafeInteger(amount)||amount<0)throw new Error('재화 종류와 0 이상의 안전한 정수를 입력하세요');
 return {currency,amount};
}
export function setDeveloperCurrency(save,role,currency,amount){
 if(!allowDeveloper(role,'setCurrency'))throw new Error('메인 개발자만 재화를 직접 설정할 수 있습니다');
 validateDeveloperCurrency(currency,amount);
 if(currency.startsWith('mat')){save.mats??=[0,0,0,0];save.mats[Number(currency.slice(3))-1]=amount;}
 else save[currency]=amount;
}
export function unlockOwnerContent(save,role,characters,books){
 if(role?.enabled!==true||role.kind!=='owner')return false;
 let changed=false;save.chars??={};
 for(const hero of Object.values(characters))if(!save.chars[hero.id]){save.chars[hero.id]={lv:1,aw:0,count:1};changed=true;}
 const released=books.filter(book=>book.ready).flatMap(book=>book.stories);
 const max=Math.max(1,...released);
 if((save.storyMax??1)<max){save.storyMax=max;changed=true;}
 if(!save.eightUnlocked){save.eightUnlocked=true;changed=true;}
 return changed;
}
