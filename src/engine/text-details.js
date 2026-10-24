let regions=[],popup=null,pinned=false;
export function resetTextDetails(){regions=[];}
export function fitReadableText(context,text,width){
 text=String(text);if(!width||context.measureText(text).width<=width)return text;
 let value=text;while(value.length&&context.measureText(value+'…').width>width)value=value.slice(0,-1);
 return value+'…';
}
export function textDetail(text,x,y,w,h,align='left'){
 if(!text)return;regions.push({text:String(text),x:x-(align==='right'?w:align==='center'?w/2:0),y,w,h});
}
function hide(){popup?.remove();popup=null;pinned=false;}
function show(region,event){
 if(!popup){popup=document.createElement('div');popup.setAttribute('role','tooltip');popup.style.cssText='position:fixed;z-index:120;background:#161020f5;color:#f4edf9;border:1px solid #d1b57b;border-radius:10px;padding:16px;box-shadow:0 8px 35px #0009;font:15px/1.65 system-ui;white-space:pre-wrap;max-width:min(460px,92vw);max-height:65vh;overflow:auto;pointer-events:none;touch-action:pan-y;user-select:text';document.body.append(popup);}
 popup.textContent=region.text;popup.style.left=Math.max(8,Math.min(innerWidth-470,event.clientX+12))+'px';popup.style.top=Math.max(8,Math.min(innerHeight-250,event.clientY+16))+'px';
}
if(typeof window!=='undefined'){
 const locate=event=>{const canvas=document.getElementById('game');if(event.target!==canvas)return null;const rect=canvas.getBoundingClientRect(),x=(event.clientX-rect.left)*480/rect.width,y=(event.clientY-rect.top)*270/rect.height;return [...regions].reverse().find(r=>x>=r.x&&x<r.x+r.w&&y>=r.y&&y<r.y+r.h);};
 window.addEventListener('pointermove',event=>{if(pinned)return;const region=locate(event);if(region)show(region,event);else hide();});
 window.addEventListener('pointerdown',event=>{const region=locate(event);if(region){show(region,event);pinned=true;if(popup)popup.style.pointerEvents='auto';}else if(!popup?.contains(event.target))hide();},true);
 window.addEventListener('keydown',event=>{if(event.key==='Escape')hide();});
}
