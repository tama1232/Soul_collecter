// Pixel silhouettes, shaded rims and highlights match the uploaded character sheets.
// This renderer changes drawing only; projectile motion and collision use the original definition.
const cache = new Map();
const supported = new Set(['arrow','spear','dagger','flask','bone','soul','shard','rock','wave','scythe','fireball','orb','blade','star','bolt','crescent','crystal','starsword','spore']);

function tint(hex, factor) {
  const rgb = /^#[a-f\d]{6}$/i.test(hex) ? hex.slice(1).match(/../g).map(value => parseInt(value,16)) : [180,200,255];
  return '#' + rgb.map(value => Math.round(factor < 0 ? value * (1+factor) : value + (255-value)*factor).toString(16).padStart(2,'0')).join('');
}

function projectileSprite(shape, color) {
  const key = shape + color;
  if (cache.has(key)) return cache.get(key);
  const canvas = document.createElement('canvas'); canvas.width = 48; canvas.height = 32;
  const context = canvas.getContext('2d'); context.imageSmoothingEnabled = false;
  const dark = tint(color,-.72), shadow=tint(color,-.35), light=tint(color,.55), white=tint(color,.9);
  const rect = (x,y,w,h,fill) => { context.fillStyle=fill;context.fillRect(x,y,w,h); };
  const diamond = (cx,cy,r,fill) => {for(let y=-r;y<=r;y++) { const width=r-Math.abs(y);rect(cx-width,cy+y,width*2+1,1,fill); }};
  if (['arrow','spear','dagger','bone','bolt'].includes(shape)) {
    rect(6,14,31,5,dark);rect(7,15,29,3,shadow);rect(9,15,28,1,light);
    diamond(37,16,7,dark);diamond(37,16,5,color);diamond(38,15,3,light);rect(39,15,3,1,white);
    if(shape==='arrow') {rect(6,11,8,3,dark);rect(6,19,8,3,dark);rect(7,12,6,2,light);rect(7,19,6,2,light);}
    if(shape==='dagger') {rect(12,9,3,14,dark);rect(13,10,1,12,light);}
  } else if (shape==='flask') {
    rect(20,3,8,7,dark);rect(22,4,4,6,light);rect(18,9,12,3,dark);
    rect(14,12,20,15,dark);rect(16,11,16,18,dark);rect(17,12,14,15,light);
    rect(17,17,14,10,color);rect(18,23,12,3,shadow);rect(18,13,3,7,white);rect(21,4,6,2,shadow);
  } else if (['crescent','blade','scythe','wave'].includes(shape)) {
    for(let y=-13;y<=13;y++) {
      const edge=Math.round(Math.sqrt(Math.max(0,169-y*y)));
      rect(22+edge-5,16+y,7,1,dark);rect(22+edge-4,16+y,5,1,color);rect(22+edge-1,16+y,2,1,light);
    }
    rect(13,15,18,3,shadow);rect(15,15,16,1,white);
  } else if (['star','shard','crystal','starsword'].includes(shape)) {
    diamond(25,16,13,dark);diamond(25,16,11,shadow);diamond(26,15,8,color);diamond(27,13,4,light);
    if(shape==='star') {rect(23,1,4,30,shadow);rect(9,14,32,4,shadow);rect(24,3,2,26,light);rect(11,15,28,2,light);}
    rect(25,10,2,10,white);rect(22,14,8,2,white);
  } else {
    const rows=[6,9,11,12,12,13,13,13,12,12,11,9,6];
    rows.forEach((half,index) => {const y=4+index*2;rect(25-half,y,half*2,2,dark);rect(27-half,y+1,half*2-4,1,shadow);});
    diamond(26,16,9,color);diamond(28,13,6,light);diamond(29,12,3,white);
    if(shape==='fireball'||shape==='soul'||shape==='spore') {rect(5,15,13,3,shadow);rect(8,13,12,3,color);rect(11,11,7,2,light);}
  }
  if (cache.size >= 256) cache.delete(cache.keys().next().value);
  cache.set(key,canvas);
  return canvas;
}

export function drawCharacterProjectile(context, projectile, cameraX, cameraY) {
  const definition = projectile.def;
  if (!projectile.artId || !supported.has(definition.spr) || typeof document === 'undefined') return false;
  const image = projectileSprite(definition.spr,definition.col ?? '#d8c8ff');
  const spinning = ['flask','scythe','rock','bone'].includes(definition.spr);
  const angle = spinning ? projectile.t * .22 : Math.atan2(projectile.vy,projectile.vx);
  const width = Math.max(10,Math.min(56, definition.pic?.w ?? (definition.spr==='spear'?26:definition.w*1.45)));
  const height = Math.max(7,Math.min(48, definition.h*1.4));
  context.save();
  context.translate(Math.round(projectile.x-cameraX),Math.round(projectile.y-cameraY));
  context.rotate(angle);context.imageSmoothingEnabled=false;
  // Two fading silhouettes follow the actual direction without changing the simulation.
  if(!spinning) {
    context.globalAlpha *= .16;
    context.drawImage(image,-width/2-6,-height/2,width,height);
    context.globalAlpha /= .16;
  }
  context.drawImage(image,-width/2,-height/2,width,height);
  context.restore();
  return true;
}
