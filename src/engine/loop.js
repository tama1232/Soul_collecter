/** 60-Hz simulation with bounded catch-up and a 60-FPS render budget. */
export class FixedStepLoop {
  acc = 0; last = 0; running = false; fps = 60; fpsAcc = 0; fpsFrames = 0; raf = 0; lastRender = 0;
  paused = false;
  metrics = { updateMs: 0, renderMs: 0, droppedTicks: 0, frames: 0 };
  constructor(update, render, environment = globalThis) {
    this.update = update; this.render = render; this.env = environment;
    this.visibility = () => { this.acc = 0; this.last = this.env.performance.now(); this.lastRender = 0; };
    this.env.document?.addEventListener('visibilitychange', this.visibility);
  }
  start() {
    if (this.running) return;
    this.running = true; this.last = this.env.performance.now();
    const frame = now => {
      if (!this.running) return;
      const dt = Math.min(0.1, Math.max(0, (now - this.last) / 1000)); this.last = now;
      if (!this.env.document?.hidden && !this.paused) {
        this.acc += dt;
        const start = this.env.performance.now(); let ticks = 0;
        while (this.acc >= 1 / 60 && ticks < 6) { this.update(); this.acc -= 1 / 60; ticks++; }
        if (ticks === 6 && this.acc >= 1 / 60) { this.metrics.droppedTicks += Math.floor(this.acc * 60); this.acc %= 1 / 60; }
        this.metrics.updateMs = this.env.performance.now() - start;
        if (!this.lastRender || now - this.lastRender >= 1000 / 60 - 0.000001) {
          const renderStart = this.env.performance.now(); this.render();
          this.metrics.renderMs = this.env.performance.now() - renderStart;
          this.lastRender = this.lastRender
            ? this.lastRender + Math.max(1, Math.floor((now - this.lastRender + 0.000001) / (1000 / 60))) * (1000 / 60)
            : now;
          this.metrics.frames++; this.fpsFrames++;
        }
        this.fpsAcc += dt;
        if (this.fpsAcc >= 0.5) { this.fps = Math.round(this.fpsFrames / this.fpsAcc); this.fpsAcc = 0; this.fpsFrames = 0; }
      } else this.acc = 0;
      this.raf = this.env.requestAnimationFrame(frame);
    };
    this.raf = this.env.requestAnimationFrame(frame);
  }
  stop() { this.running = false; this.env.cancelAnimationFrame(this.raf); this.raf = 0; this.acc = 0; }
  destroy() { this.stop(); this.env.document?.removeEventListener('visibilitychange', this.visibility); }
}
