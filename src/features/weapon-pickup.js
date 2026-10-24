export function selectedWeapon(save,weapons) {
  const list=Object.values(weapons).filter(weapon=>weapon.rarity===7);
  return list.find(weapon=>weapon.id===save.weaponPickup)??list[0];
}
export function openWeaponPicker(game,weapons) {
  const root=document.createElement('section');root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');
  root.style.cssText='position:fixed;inset:0;z-index:40;background:#08050be8;display:grid;place-items:center;font:15px system-ui;color:white';
  root.innerHTML='<form style="padding:24px;background:#21172c;max-width:90vw"><h2>7성 무기 픽업 선택</h2><p>7성 등장 시 선택 무기 50% · 다른 7성 전체 50%</p><select aria-label="7성 픽업 무기" style="width:100%;padding:12px"></select><p><button>선택 저장</button> <button type="button" data-close>닫기</button></p></form>';
  const select=root.querySelector('select');
  for(const weapon of Object.values(weapons).filter(weapon=>weapon.rarity===7)) {const option=document.createElement('option');option.value=weapon.id;option.textContent=weapon.name;select.append(option);}
  select.value=selectedWeapon(game.save,weapons).id;
  const previous=game.loop.paused;game.loop.paused=true;
  const close=()=>{root.remove();game.loop.paused=previous;document.getElementById('game')?.focus();};
  root.querySelector('[data-close]').onclick=close;root.onkeydown=event=>{if(event.key==='Escape'){event.preventDefault();close();}};
  root.querySelector('form').onsubmit=event=>{event.preventDefault();game.save.weaponPickup=select.value;game.persist();close();};document.body.append(root);select.focus();
}
