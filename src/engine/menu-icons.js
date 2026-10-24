export function menuIcon(ctx,label,x,y,size){
 const gear=/설정/.test(label),keys=/조작|키 바꾸기/.test(label);if(!gear&&!keys)return;
 ctx.save();ctx.translate(x,y);ctx.strokeStyle='#d7c398';ctx.fillStyle='#d7c398';ctx.lineWidth=1;
 if(gear){ctx.beginPath();for(let i=0;i<24;i++){const angle=i*Math.PI/12,r=size*(i%3===0?.48:.36);const px=Math.cos(angle)*r,py=Math.sin(angle)*r;i?ctx.lineTo(px,py):ctx.moveTo(px,py);}ctx.closePath();ctx.stroke();ctx.beginPath();ctx.arc(0,0,size*.15,0,Math.PI*2);ctx.stroke();}
 else {ctx.strokeRect(-size*.48,-size*.30,size*.96,size*.60);for(let row=0;row<2;row++)for(let col=0;col<4;col++)ctx.fillRect(-size*.33+col*size*.2,-size*.17+row*size*.2,size*.1,size*.08);}
 ctx.restore();
}
