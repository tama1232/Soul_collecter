import {DEVELOPER_CURRENCIES} from '../config/developer-rules.js';
import {getProbabilities,getRulesRevision,applyProbabilities} from '../config/live-rules.js';
/** Account-bound tools. Every privileged server action rechecks the server role. */
export function installDeveloperConsole({getGame,developer,characters,weapons}) {
  let root=null,previousPaused=false,players=[],cursor=null,active='probabilities';
  const element=(tag,text)=>{const node=document.createElement(tag);if(text!==undefined)node.textContent=String(text);return node;};
  const content=()=>root?.querySelector('[data-content]');
  const message=text=>{if(root)root.querySelector('[data-message]').textContent=text;};
  function close(){if(!root)return;root.remove();root=null;const game=getGame();game.loop.paused=previousPaused;for(const value of Object.values(game.input??{}))if(value instanceof Set||value instanceof Map)value.clear();document.getElementById('game')?.focus();}
  function button(label,handler,parent=content()){const node=element('button',label);node.type='button';node.onclick=async()=>{node.disabled=true;try{await handler();}catch(error){message(error.message);}finally{node.disabled=false;}};parent.append(node);return node;}
  function output(value,parent=content()){const node=element('pre',typeof value==='string'?value:JSON.stringify(value,null,2));parent.append(node);return node;}
  function field(form,label,name,value='',type='text'){const wrapper=element('label',label),input=element('input');input.name=name;input.type=type;input.value=value;if(type==='number'){input.step='any';input.min='0';}wrapper.append(input);form.append(wrapper);return input;}
  function accountSummary(entry){let save={};try{save=JSON.parse(entry.data??'{}');}catch{}return {uid:entry.uid,id:entry.id,save,heroes:Object.keys(save.chars??{}).length,runs:save.stats?.runs??0,story:Object.keys(save.storyClear??{}).length};}
  async function open(){
    if(root)return close();const game=getGame();previousPaused=game.loop.paused;game.loop.paused=true;
    root=element('section');root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.className='soul-developer';
    root.innerHTML=`<style>.soul-developer{position:fixed;inset:0;z-index:80;background:#06040ded;display:grid;place-items:center;padding:16px;font:14px/1.5 system-ui;color:#eee9f8;touch-action:pan-y;user-select:text}.soul-developer main{width:min(1080px,96vw);max-height:94dvh;overflow:auto;background:#181222;padding:22px;border:1px solid #87729c;border-radius:12px}.soul-developer header,.soul-developer nav{display:flex;gap:8px;flex-wrap:wrap;align-items:center;justify-content:space-between}.soul-developer h2{margin:0}.soul-developer nav{justify-content:flex-start;margin:16px 0}.soul-developer button{padding:9px 14px;border:1px solid #75608d;border-radius:6px;background:#30243f;color:#ffe1a0;cursor:pointer}.soul-developer button:disabled{opacity:.5}.soul-developer input,.soul-developer select{padding:9px;min-width:80px;color:white;background:#09070f;border:1px solid #574363;border-radius:5px}.soul-developer form{display:flex;gap:12px;flex-wrap:wrap;align-items:end;margin:14px 0}.soul-developer label{display:grid;gap:4px}.soul-developer label input{max-width:260px}.soul-developer table{border-collapse:collapse;width:100%;font-size:12px}.soul-developer th,.soul-developer td{padding:8px;border-bottom:1px solid #46334e;text-align:left}.soul-developer pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#0c0912;padding:12px;max-height:420px;overflow:auto;font-size:12px}.soul-developer [data-message]{color:#ffd98e;min-height:24px;margin:12px 0}.soul-developer .scroll{overflow:auto}.soul-developer .note{color:#b7a9c6}.soul-developer .danger{border-color:#d66578;color:#ff8f9f}</style><main><header><div><h2>Soul collecter · 개발자 도구</h2><span data-role></span></div><button data-close>닫기 ×</button></header><p class="note">코드가 등록된 현재 게임 계정에만 적용됩니다. 개발자 계정은 모든 랭킹과 주간 순위 보상에서 제외됩니다.</p><nav></nav><div data-content></div><div data-message role="status"></div></main>`;
    document.body.append(root);root.querySelector('[data-close]').onclick=close;
    message('서버에서 개발자 권한을 확인하고 있습니다…');
    try{await developer.sync();if(!root)return;if(!developer.authorized){message('설정 → 쿠폰 코드 입력에서 개발자 코드를 등록한 온라인 계정만 사용할 수 있습니다.');return;}
      root.querySelector('[data-role]').textContent=developer.role.kind==='owner'?'메인 개발자 · 전체 캐릭터/장 해금 · 재화 설정 · 쿠폰/코드 발급':'부개발자 · 쿠폰/개발자 코드 발급 및 계정 초기화 불가';
      const nav=root.querySelector('nav');for(const [key,label] of [['probabilities','실제 확률'],['players','계정·세부 기록'],...developer.role.kind==='owner'?[['coupons','쿠폰 만들기'],['codes','개발자 코드 발급']]:[],['audit','변경·무결성 기록'],['tools','플레이 테스트']])button(label,()=>render(key),nav);
      if(developer.role.kind!=='owner'&&['coupons','codes'].includes(active))active='probabilities';
      await render(active);message('서버 권한 확인 완료');
    }catch(error){message(error.message);}
  }
  async function render(tab){if(!root||!developer.authorized)return;active=tab;content().replaceChildren();
    if(tab==='probabilities'){
      content().append(element('p','단위는 %. 일반 계약의 3성은 나머지 확률입니다. 8성은 해금 후에만 포함됩니다. 확률 변경은 전체 이용자에게 적용되며 서버에 이전값·새값이 기록됩니다.'));
      const rules=getProbabilities(),revision=getRulesRevision(),form=element('form');content().append(form);const inputs=[];
      for(const [group,label] of [['normal','일반 계약'],['compassLocked','나침반 해금 전'],['compassUnlocked','나침반 해금 후'],['relic','유물']]){
        const section=element('fieldset');section.append(element('legend',label));form.append(section);
        for(const [tier,value] of Object.entries(rules[group]).sort((a,b)=>Number(b[0])-Number(a[0]))){const input=field(section,group==='relic'?({1:'일반',2:'희귀',3:'에픽',4:'전설'}[tier]):tier+'성',group+'_'+tier,+(value*100).toFixed(6),'number');inputs.push([group,tier,input]);}
      }
      const pickup=field(form,'7성 선택 무기 비중','pickup',rules.weaponPickup*100,'number');
      button('확률 저장',async()=>{const next=getProbabilities();for(const [group,tier,input] of inputs)next[group][tier]=Number(input.value)/100;next.weaponPickup=Number(pickup.value)/100;const result=await developer.operation('updateProbabilities',{rules:next,revision});applyProbabilities(result.rules,result.revision);await render(tab);message('전체 확률 설정을 저장했습니다. 다른 접속자는 다음 동기화 때 반영합니다.');},form);
      output({설정버전:revision,최대유물단계:5,보스러쉬순환쿨증가초:.5,히든보스출현:{최초처치시퍼센트:.001,처치당증가퍼센트포인트:.001}});return;
    }
    if(tab==='players'){
      const search=element('input');search.placeholder='아이디 또는 UID 검색';search.setAttribute('aria-label','계정 검색');content().append(search);
      const table=element('table'),scroll=element('div');scroll.className='scroll';scroll.append(table);content().append(scroll);
      const draw=()=>{table.replaceChildren();const head=element('tr');for(const text of ['아이디 / UID','영웅','출정','완료 스토리','확인'])head.append(element('th',text));table.append(head);
        for(const entry of players.map(accountSummary).filter(row=>(row.id+' '+row.uid).toLowerCase().includes(search.value.toLowerCase()))){const row=element('tr');for(const text of [entry.id+' / '+entry.uid,entry.heroes,entry.runs,entry.story])row.append(element('td',text));const tools=element('td');button('세부 기록',()=>detail(entry.uid),tools);row.append(tools);table.append(row);}}
      search.oninput=draw;
      const load=async append=>{const result=await developer.operation('listPlayers',{cursor:append?cursor:null});players=append?[...players,...result.players]:result.players;cursor=result.cursor;draw();message(cursor?'50개씩 조회합니다. 다음 페이지를 불러올 수 있습니다.':'목록 조회 완료');};
      button('새로고침',()=>load(false));button('다음 50개',()=>cursor?load(true):message('마지막 페이지입니다'));await load(false);return;
    }
    if(tab==='codes'){
      if(developer.role.kind!=='owner')throw new Error('최초 개발자만 발급할 수 있습니다');content().append(element('p','발급 코드는 한 계정에서 한 번만 사용할 수 있고 30일 뒤 만료됩니다. 부개발자는 쿠폰 제작·개발자 코드 발급·유저 초기화를 할 수 없습니다.'));
      button('보조 개발자 코드 발급',async()=>{const result=await developer.operation('issueCode');output(result);message('코드는 이 화면에 한 번 표시됩니다. 사용할 사람에게 전달하세요.');});return;
    }
    if(tab==='coupons'){
      if(developer.role.kind!=='owner')throw new Error('메인 개발자만 쿠폰을 만들 수 있습니다');
      const form=element('form');content().append(form);const code=field(form,'쿠폰 코드','code'),desc=field(form,'설명','desc'),until=field(form,'만료일(선택)','until','','date'),rewards={};for(const [key,label] of [['stones','영혼석'],['crystals','영혼 결정'],['compass','나침반'],['awShards','각성 파편']])rewards[key]=field(form,label,key,0,'number');
      button('쿠폰 발급',async()=>{const reward=Object.fromEntries(Object.entries(rewards).map(([key,input])=>[key,Number(input.value)]));const result=await developer.operation('createCoupon',{code:code.value,desc:desc.value,until:until.value,reward});message('쿠폰을 생성했습니다: '+result.code);},form);return;
    }
    if(tab==='audit'){
      button('현재 설정·코드 무결성 검사',async()=>{message('서버 기준과 설정/배포 파일을 대조합니다…');output(await developer.inspectIntegrity());message('검사를 완료했습니다. 불일치는 서버에 기록됩니다.');});
      button('변경 기록 새로고침',()=>render(tab));output(await developer.operation('audit'));content().append(element('p','무결성 검사는 서버 기준 설정·배포 파일과 클라이언트 저장 장부를 비교합니다. 브라우저를 완전히 장악한 공격자의 모든 메모리 변경을 입증하는 도구는 아닙니다.'));return;
    }
    if(tab==='tools'){
      content().append(element('p','테스트 도구는 현재 개발자 계정에만 적용됩니다. 무적·재화·방 이동은 디버그 모드를 켠 뒤 1~5 키로도 사용할 수 있습니다.'));
      const game=getGame();
      if(developer.role.kind==='owner'){
        content().append(element('p','메인 개발자는 모든 캐릭터와 현재 공개된 장이 자동 해금됩니다. 재화는 원하는 보유 수량으로 설정할 수 있습니다.'));
        const form=element('form'),label=element('label','재화 종류'),currency=element('select');
        currency.name='currency';for(const [key,name] of DEVELOPER_CURRENCIES){const option=element('option',name);option.value=key;currency.append(option);}currency.value='stones';label.append(currency);form.append(label);content().append(form);
        const amount=field(form,'설정할 보유 수량','amount',1000000,'number');amount.step='1';amount.max=String(Number.MAX_SAFE_INTEGER);
        button('입력한 수량으로 설정',async()=>{if(!amount.value.trim())throw new Error('보유 수량을 입력하세요');await developer.setCurrency(currency.value,Number(amount.value));message('재화 보유 수량을 '+Number(amount.value).toLocaleString()+'개로 설정했습니다.');},form);
      }
      const test=async(action,run)=>{await developer.operation('recordTestAction',{action});run();game.persist();message('테스트 적용: '+action);};
      button('디버그 켜기/끄기',()=>test('toggleDebug',()=>game.setDebug(!game.debug)));
      button('테스트 재화 +100만',()=>test('testCurrency',()=>{for(const key of ['stones','crystals','compass','awShards'])game.save[key]=(game.save[key]??0)+1e6;}));
      button('영웅·무기·스토리·8성 테스트 해금',()=>test('unlockContent',()=>{for(const hero of Object.values(characters))game.save.chars[hero.id]??={lv:1,aw:0,count:1};for(const weapon of Object.values(weapons))game.save.weapons[weapon.id]??={rf:1,count:1};game.save.storyMax=28;for(let id=1;id<=28;id++)game.save.storyClear[id]=true;game.save.eightUnlocked=true;}));
      button('현재 방 회복·쿨타임 초기화',()=>test('restoreRoom',()=>{const room=game.scene.room;if(room){room.heal(room.maxHp());room.player.skillCd=[0,0];room.player.ultCd=0;room.player.swapCd=0;}}));
      button('현재 방 상태 확인',()=>output({metrics:game.loop.metrics,run:game.scene.run,player:game.scene.room?{x:game.scene.room.player.b.x,y:game.scene.room.player.b.y,hp:game.scene.room.run.hp}:null}));return;
    }
  }
  async function detail(uid){const data=await developer.operation('playerDetail',{uid});content().replaceChildren();button('계정 목록으로',()=>render('players'));const summary=accountSummary({uid,...data.account});content().append(element('h3',(summary.id??uid)+' · 상세 기록'));output({uid,개발자:data.developer,영웅:summary.heroes,출정:summary.runs,완료스토리:summary.story,통계:summary.save.stats,재화:{영혼석:summary.save.stones,영혼결정:summary.save.crystals,나침반:summary.save.compass},강화:summary.save.upgrades,최고기록:{무한:summary.save.endlessBest,보스러쉬:summary.save.rushBest},영웅목록:summary.save.chars,무기목록:summary.save.weapons});
    const logs=element('details');logs.append(element('summary','저장 변동·외부 개입 의심 기록'));output({audit:data.audit,integrity:data.integrity},logs);content().append(logs);
    if(developer.role.kind==='owner') {const form=element('form');content().append(form);const input=field(form,'초기화하려면 해당 UID를 다시 입력','confirm');const action=button('이 계정 게임 데이터 초기화',async()=>{if(input.value!==uid)throw new Error('대상 UID가 일치하지 않습니다');await developer.operation('resetPlayer',{uid,reason:'개발자 콘솔 초기화'});message('초기화가 반영되었습니다. 접속 중인 계정은 최신 기록을 다시 불러와야 합니다.');},form);action.className='danger';}
  }
  window.addEventListener('keydown',event=>{if(event.ctrlKey&&event.shiftKey&&event.code==='F10'){if(event.repeat)return;event.preventDefault();event.stopImmediatePropagation();void open();}else if(root&&event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();close();}},true);
  developer.onClear=close;
  return {open,close};
}
