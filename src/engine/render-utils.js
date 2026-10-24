export function pixelViewport(width, height, dpr = 1, logicalWidth = 480, logicalHeight = 270) {
  const density = Math.max(1, Math.min(3, dpr || 1));
  const fit = Math.min(width * density / logicalWidth, height * density / logicalHeight);
  const scale = Math.max(1, Math.floor(fit));
  const cssScale = fit < 1 ? Math.min(width / logicalWidth, height / logicalHeight) : scale / density;
  return { width: logicalWidth * scale, height: logicalHeight * scale, scale, cssWidth: logicalWidth * cssScale, cssHeight: logicalHeight * cssScale };
}
export function inView(entity, cameraX, cameraY, width = 480, height = 270, margin = 160) {
  const body = entity.b;
  if (!body) return true; // Large procedural effects retain their own bounds.
  return body.x + body.w >= cameraX - margin && body.x <= cameraX + width + margin && body.y + body.h >= cameraY - margin && body.y <= cameraY + height + margin;
}
export function compactAlive(array, alive) {
  let write = 0;
  for (let read = 0; read < array.length; read++) if (alive(array[read])) array[write++] = array[read];
  array.length = write;
  return array;
}
export function advancePose(player, hasHighResolution) {
  const pose = player.state === 'dead' && hasHighResolution(player.def.id) ? 'dead' : player.pose();
  if (pose !== player.hdPose) { player.hdPrev = player.hdPose; player.hdPose = pose; player.hdSince = 0; }
  else player.hdSince = (player.hdSince ?? 0) + 1;
}
