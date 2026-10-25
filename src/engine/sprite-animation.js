// Pose aliases within one motion share a clock, even when the fallback art changes.
export function spriteMotion(pose) {
  if (/^idle\d+$/.test(pose)) return 'idle';
  if (/^run\d+$/.test(pose)) return 'run';
  return pose;
}

export function resolveSpriteFrame(definition, pose, clock) {
  const fallback = definition.poses[pose] ?? 'idle0';
  if (!clock) return fallback; // Menus and portraits retain their requested pose.
  if (definition.imported && clock.kind === 'ult' && definition.frames.ultimate) return 'ultimate';

  const motion = spriteMotion(pose);
  const cycle = definition.cycles?.[motion];
  if (cycle?.frames.length && cycle.tick > 0) {
    const repeating = motion === 'idle' || motion === 'run';
    const elapsed = repeating ? clock.cycleSince ?? clock.t ?? 0 : clock.since ?? 0;
    const index = Math.floor(Math.max(0, elapsed) / cycle.tick);
    const loop = cycle.loop ?? repeating;
    const frame = cycle.frames[loop ? index % cycle.frames.length : Math.min(index, cycle.frames.length - 1)];
    return definition.frames[frame] ? frame : fallback;
  }

  // Use drawn in-between frames without delaying the combat pose or hit events.
  if (clock.prev && clock.since < 2) {
    const next = /^([a-z]+)(\d+)$/.exec(fallback);
    const previous = /^([a-z]+)(\d+)$/.exec(definition.poses[clock.prev] ?? '');
    if (next && previous && next[1] === previous[1] && +next[2] === +previous[2] + 1) {
      const between = previous[0] + '_' + next[2];
      if (definition.frames[between]) return between;
    }
  }
  return fallback;
}

// Registration stays in source pixels; only drawing applies the shared character scale.
export function spriteGeometry(definition, frame, outputWidth, anchorY = 88) {
  const scale = definition.scale ?? 1;
  const stretchY = frame.stretchY ?? 1;
  return {
    x: Math.round(outputWidth / 2 - frame.ax * scale),
    y: Math.round(anchorY - frame.ay * scale * stretchY),
    w: Math.round(frame.w * scale),
    h: Math.round(frame.h * scale * stretchY)
  };
}
