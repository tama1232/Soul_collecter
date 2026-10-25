// Nemea's forgotten divinity is recorded in a gold-and-violet grimoire.
const GOLD = '#ffdf86', VIOLET = '#b58aff';
const shard = (shadow = false) => ({spr:'crystal',spd:6.8,life:100,w:12,h:12,home:.25,pierce:3,ghost:true,
  col:shadow?VIOLET:GOLD,el:shadow?'shadow':'holy',kb:.6,hs:0});
const volley = (t,n,m,shadow=false) => ({t,k:'proj',p:shard(shadow),n,m,spread:12,aim:true,dy:-8});

export function createNemea(base, crests) {
  const hero=structuredClone(base);
  Object.assign(hero,{
    id:'anima',name:'네메아',title:'타락한 신의 파편',rarity:8,type:'magic',
    allElements:true,crests:[...crests],atk:100,hp:500,speed:2.4,fx:GOLD,
    lore:'이름과 신성을 잃고 흩어진 신의 파편. 곁에 떠오르는 금빛 마도서에는 그녀조차 잊은 기억이 기록되어 있다. 책장을 펼칠 때마다 잃어버린 신성이 빛으로, 타락의 잔재가 심연의 파편으로 되살아난다.'
  });
  Object.assign(hero.look,{weapon:'orb',body:'#241d34',trim:'#ffdd8a',hair:'#fff1c4',eye:'#ffe080',
    wcol:'#fff1b8',wcol2:VIOLET,cape:'#181522',glow:'#ffdc90'});
  hero.combo=[
    {dur:13,cancel:9,pose:[[0,'shootWind'],[3,'shoot']],move:[[0,0]],ev:[{t:3,k:'sfx',s:'cast'},volley(4,2,1.8)]},
    {dur:15,cancel:10,pose:[[0,'cast'],[4,'shoot']],move:[[0,0]],ev:[{t:4,k:'sfx',s:'cast'},volley(5,3,2.2,true)]},
    {dur:23,cancel:17,pose:[[0,'castUp'],[6,'cast']],move:[[0,0]],ev:[
      {t:6,k:'sfx',s:'gem'},volley(7,4,3),
      {t:7,k:'hit',box:[-24,-30,76,56],m:4.5,el:'shadow',kb:2,hs:3,fin:true,fx:{arc:'circle',r:38,col:VIOLET}}
    ]}
  ];
  hero.air={dur:18,cancel:12,airOk:true,grav:.25,inv:[0,10],pose:[[0,'cast'],[4,'shoot']],
    move:[[0,0]],ev:[{t:3,k:'sfx',s:'cast'},volley(4,4,2.8,true)]};
  hero.dashAtk={dur:22,cancel:15,inv:[0,15],pose:[[0,'dash'],[5,'castUp']],move:[[0,3],[9,0]],ev:[
    {t:5,k:'sfx',s:'gem'},volley(6,5,3.2),{t:6,k:'nova',r:90,m:5,el:'holy',col:GOLD}
  ]};
  hero.skills=[
    {name:'만상의 파편',cd:5,
      desc:'마도서에서 신성·심연 유도 파편 12개를 두 차례로 방출한다. 각 공격력 600%(기본 합계 7200%), 적 3회 추가 관통·지형 관통. 시전 중 무적.',
      act:{dur:30,cancel:30,armor:true,inv:[0,30],pose:[[0,'cast'],[5,'shoot'],[13,'castUp']],move:[[0,0]],ev:[
        {t:0,k:'sfx',s:'cast'},volley(6,6,6),volley(14,6,6,true),{t:14,k:'shake',v:3}
      ]}},
    {name:'되찾은 성역',cd:9,
      desc:'주변에 800% 신성 폭발. 최대 체력 40% 회복·70% 보호막을 얻고, 7초간 공격력 +80%·공격 속도 +50%·받는 피해 -20%. 6초간 자신을 따르는 성역이 0.5초마다 300% 피해를 준다.',
      act:{dur:28,cancel:28,armor:true,inv:[0,28],pose:[[0,'cast'],[6,'castUp']],move:[[0,0]],ev:[
        {t:0,k:'sfx',s:'gem'},
        {t:6,k:'heal',v:.4},{t:6,k:'shield',v:.7},
        {t:6,k:'buff',id:'nemea_sanctuary',stats:{atk:.8,aspd:.5,dmgTaken:-.2},dur:7},
        {t:6,k:'nova',r:150,m:8,el:'holy',col:GOLD,up:0},
        {t:6,k:'field',f:{vis:'holy',w:300,h:180,life:360,tick:30,m:3,el:'holy',follow:true},dx:0},
        {t:6,k:'fx',fx:{arc:'circle',r:150,col:GOLD}},{t:6,k:'shake',v:4}
      ]}}
  ];
  hero.ult={name:'잊힌 신의 귀환',cd:24,
    desc:'마도서의 봉인을 풀어 최대 체력을 전부 회복하고 100% 보호막을 얻는다. 화면 안 모든 적에게 2000% 심판 3회와 4000% 종언을 가하고, 유도 파편 32개를 추가 방출한다(각 800%). 시전 중 무적.',
    act:{dur:84,cancel:84,armor:true,inv:[0,84],pose:[[0,'cast'],[8,'castUp']],move:[[0,0]],ev:[
      {t:0,k:'sfx',s:'cast'},{t:0,k:'heal',v:1},{t:0,k:'shield',v:1},
      ...[12,32,52].map((t,index)=>({t,k:'screen',m:20,el:index%2?'shadow':'holy',col:index%2?VIOLET:GOLD})),
      ...[18,30,42,54].map((t,index)=>volley(t,8,8,index%2===1)),
      {t:72,k:'screen',m:40,el:'holy',col:GOLD},{t:72,k:'shake',v:8},{t:72,k:'sfx',s:'explode'}
    ]}};
  hero.swap={name:'교대: 신성의 재림',
    desc:'주변에 공격력 2000%의 신성 폭발을 일으키고 최대 체력 20% 회복·40% 보호막을 얻는다. 시전 중 무적.',
    act:{dur:30,cancel:30,inv:[0,30],armor:true,pose:[[0,'cast'],[6,'castUp']],move:[[0,0]],ev:[
      {t:0,k:'sfx',s:'gem'},{t:6,k:'heal',v:.2},{t:6,k:'shield',v:.4},
      {t:8,k:'nova',r:160,m:20,el:'holy',col:GOLD,up:0},{t:8,k:'shake',v:5}
    ]}};
  hero.passive={name:'잊힌 신의 기록',
    desc:'모든 문장 취급. 모든 피해 +60%·스킬 피해 +80%·보스 피해 +60%, 받는 피해 -35%·흡혈 8%·스킬 쿨타임 -15%. 2.5초마다 240% 유도 파편 3개 발사. 직접 공격 적중 시 화상·출혈·감전·독·냉기를 순환 부여한다.',
    effects:[{stats:{allDmg:.6,skillDmg:.8,bossDmg:.6,dmgTaken:-.35,lifesteal:.08,cdr:.15}},
      {on:'interval',every:2.5,do:[{k:'proj',p:shard(),m:2.4,n:3}]}]};
  hero.awaken=[
    {desc:'만상의 파편 피해 +50%',mods:[{target:'skill1',dmg:.5}]},
    {desc:'되찾은 성역 쿨타임 -2초',mods:[{target:'skill2',cd:2}]},
    {desc:'최대 체력 +30%·모든 피해 +30%',effects:[{stats:{hpPct:.3,allDmg:.3}}]},
    {desc:'잊힌 신의 귀환 피해 +50%·쿨타임 -4초',mods:[{target:'ult',dmg:.5,cd:4}]},
    {desc:'모든 기술 피해 +50%·스킬 쿨타임 -10%·보스 피해 +40%',mods:[{target:'all',dmg:.5}],effects:[{stats:{cdr:.1,bossDmg:.4}}]}
  ];
  return hero;
}

export function createNemeaWeapon() {
  return {id:'nemea_requiem',name:'망각의 서 「레퀴엠」',rarity:8,owner:'anima',crest:['soul','shadow','ward'],
    atk:72,icon:'book',col:GOLD,scale:.15,ref:{e:0,dm:true},
    desc:'공격 적중 시 유도 기록 3개 발사(각 {v}%, 발동 간격 0.6초). 모든 피해 +40%·스킬 피해 +60%·보스 피해 +40%·받는 피해 -15%. 스킬 사용 시 15% 보호막·두 스킬 쿨타임 0.5초 감소(발동 간격 1초).',
    effects:[
      {on:'hit',icd:.6,do:[{k:'proj',p:shard(true),m:4,n:3}]},
      {stats:{allDmg:.4,skillDmg:.6,bossDmg:.4,dmgTaken:-.15}},
      {on:'skill',icd:1,do:[{k:'shield',v:.15},{k:'cdr',v:.5}]}
    ],
    sig:[{stats:{atk:.4,allDmg:.3}}],
    sigMods:[{target:'skill1',dmg:.6},{target:'skill2',dmg:.6},{target:'ult',dmg:.8,cd:6}],
    sigDesc:'네메아 편성 시 공격력 +40%·모든 피해 +30%. 네메아의 만상의 파편·되찾은 성역 피해 +60%, 잊힌 신의 귀환 피해 +80%·쿨타임 -6초.'};
}
