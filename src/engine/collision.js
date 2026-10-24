/** Substeps inspect the entire path, so dashes/knockback cannot skip thin tiles. */
export function moveTileBody(world,body,ignoreOneWay=false){
 const vx=body.vx,vy=body.vy;
 const steps=Math.max(1,Math.ceil(Math.max(Math.abs(vx),Math.abs(vy))/8));
 const drop=body.dropTimer;let blockedX=false,blockedY=false,hitWall=0;
 for(let index=0;index<steps;index++){
  body.vx=blockedX?0:vx/steps;body.vy=blockedY?0:vy/steps;body.dropTimer=drop;
  world.moveStep(body,ignoreOneWay);
  if(body.hitWall){blockedX=true;hitWall=body.hitWall;}
  if(vy!==0&&body.vy===0)blockedY=true;
 }
 body.vx=blockedX?0:vx;body.vy=blockedY?0:vy;body.hitWall=hitWall;
 body.dropTimer=drop>0?drop-1:drop;
}
export function moveBodyTo(world,body,x,y){
 const vx=body.vx,vy=body.vy,drop=body.dropTimer;
 body.vx=x-body.x;body.vy=y-body.y;world.move(body);
 body.vx=vx;body.vy=vy;body.dropTimer=drop;
}
