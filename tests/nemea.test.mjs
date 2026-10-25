import test from 'node:test';
import assert from 'node:assert/strict';
import {CHARACTERS,CHARACTER_LIST,WEAPONS,data_Ta,data_a0,createSave,normalizeSave} from '../src/game-data.js';
const hero=CHARACTERS.anima,weapon=WEAPONS.nemea_requiem;
const projectileDamage=act=>act.ev.filter(event=>event.k==='proj').reduce((total,event)=>total+event.m*(event.n??1),0);

test('Nemea keeps the requested 100 attack and 500 health with stronger eight-star effects',()=>{
 assert.equal(hero.atk,100);assert.equal(hero.hp,500);
 assert.ok(weapon.atk>=3*Math.max(...Object.values(WEAPONS).filter(item=>item.rarity<8).map(item=>item.atk)));
 const sevenStats=CHARACTER_LIST.filter(item=>item.rarity===7).flatMap(item=>item.passive.effects.map(effect=>effect.stats??{}));
 for(const stat of ['allDmg','skillDmg','bossDmg'])assert.ok(hero.passive.effects[0].stats[stat]>Math.max(...sevenStats.map(stats=>stats[stat]??0)),stat);
});

test('skill descriptions match shard counts, healing, shields and timed sanctuary damage',()=>{
 const [first,second]=hero.skills;
 const volleys=first.act.ev.filter(event=>event.k==='proj');
 assert.equal(volleys.reduce((n,event)=>n+event.n,0),12);
 assert.equal(projectileDamage(first.act),72);assert.ok(volleys.every(event=>event.m===6&&event.p.home>0&&event.p.pierce===3&&event.p.ghost));
 assert.deepEqual(new Set(volleys.map(event=>event.p.el)),new Set(['holy','shadow']));
 assert.match(first.desc,/12개/);assert.match(first.desc,/600%/);assert.match(first.desc,/7200%/);
 assert.ok(second.act.ev.some(event=>event.k==='heal'&&event.v===.4));
 assert.ok(second.act.ev.some(event=>event.k==='shield'&&event.v===.7));
 const buff=second.act.ev.find(event=>event.k==='buff'),field=second.act.ev.find(event=>event.k==='field').f;
 assert.deepEqual(buff.stats,{atk:.8,aspd:.5,dmgTaken:-.2});assert.equal(buff.dur,7);
 assert.equal(field.life/60,6);assert.equal(field.tick/60,.5);assert.equal(field.m,3);assert.equal(field.follow,true);
 assert.equal(second.act.ev.find(event=>event.k==='nova').m,8);
 const ult=hero.ult;
 assert.equal(projectileDamage(ult.act),256);
 assert.deepEqual(ult.act.ev.filter(event=>event.k==='screen').map(event=>event.m),[20,20,20,40]);
 assert.ok(ult.act.ev.some(event=>event.k==='heal'&&event.v===1));assert.ok(ult.act.ev.some(event=>event.k==='shield'&&event.v===1));
 for(const skill of [...hero.skills,hero.ult,hero.swap]){
  assert.equal(skill.act.inv[0],0);assert.ok(skill.act.inv[1]>=skill.act.dur,skill.name);
  assert.ok(skill.act.ev.every(event=>event.t>=0&&event.t<skill.act.dur),skill.name);
 }
});

test('grimoire refinement changes the displayed and applied proc damage together',()=>{
 const one=data_Ta(weapon,1),five=data_Ta(weapon,5);
 assert.equal(one[0].do[0].m,4);assert.equal(five[0].do[0].m,6.4);
 assert.equal(one[0].do[0].n,3);assert.equal(one[0].icd,.6);
 assert.match(data_a0(weapon,1),/400%/);assert.match(data_a0(weapon,5),/640%/);
 assert.ok(five[2].do.some(effect=>effect.k==='cdr'&&effect.v===.5));
 assert.ok(weapon.sigMods.some(mod=>mod.target==='ult'&&mod.cd===6&&mod.dmg===.8));
 assert.equal(weapon.effects[0].do[0].m,4,'refinement must not mutate base data');
 const oldNames=/성흔 결정창|천구 나침반|별의 심판|잔흔 베기|무너진 성역/;
 assert.doesNotMatch(JSON.stringify([hero.skills,hero.ult,hero.swap,hero.awaken,weapon]),oldNames);
});

test('existing Nemea ownership, levels and refinement survive the content update',()=>{
 const save=createSave();save.eightUnlocked=true;
 save.chars.anima={lv:10,aw:3,count:2,sk:[10,9,8,7]};save.weapons.nemea_requiem={rf:5,count:4};
 const restored=normalizeSave(save);
 assert.deepEqual(restored.chars.anima,save.chars.anima);assert.deepEqual(restored.weapons.nemea_requiem,save.weapons.nemea_requiem);
 assert.equal(restored.eightUnlocked,true);
});
