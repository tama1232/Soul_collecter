// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const f = {
  sheet: new URL("../../assets/sprites/baekya-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 33,
      h: 53,
      ax: 20,
      ay: 53
    },
    idle1: {
      x: 34,
      y: 0,
      w: 33,
      h: 51,
      ax: 20,
      ay: 51
    },
    idle2: {
      x: 68,
      y: 0,
      w: 34,
      h: 51,
      ax: 19,
      ay: 51
    },
    idle3: {
      x: 103,
      y: 0,
      w: 33,
      h: 52,
      ax: 19,
      ay: 52
    },
    idle4: {
      x: 137,
      y: 0,
      w: 35,
      h: 50,
      ax: 21,
      ay: 50
    },
    run0: {
      x: 173,
      y: 0,
      w: 38,
      h: 48,
      ax: 25,
      ay: 49
    },
    run1: {
      x: 212,
      y: 0,
      w: 34,
      h: 50,
      ax: 22,
      ay: 50
    },
    run2: {
      x: 247,
      y: 0,
      w: 35,
      h: 49,
      ax: 23,
      ay: 49
    },
    run3: {
      x: 283,
      y: 0,
      w: 32,
      h: 44,
      ax: 20,
      ay: 50
    },
    run4: {
      x: 316,
      y: 0,
      w: 33,
      h: 51,
      ax: 20,
      ay: 49
    },
    attack0: {
      x: 350,
      y: 0,
      w: 32,
      h: 47,
      ax: 20,
      ay: 47
    },
    attack1: {
      x: 383,
      y: 0,
      w: 34,
      h: 45,
      ax: 20,
      ay: 45
    },
    attack2: {
      x: 418,
      y: 0,
      w: 33,
      h: 47,
      ax: 20,
      ay: 47
    },
    attack3: {
      x: 452,
      y: 0,
      w: 34,
      h: 48,
      ax: 24,
      ay: 48
    },
    attack4: {
      x: 487,
      y: 0,
      w: 31,
      h: 45,
      ax: 20,
      ay: 41
    },
    hit0: {
      x: 519,
      y: 0,
      w: 32,
      h: 47,
      ax: 17,
      ay: 47
    },
    hit1: {
      x: 552,
      y: 0,
      w: 36,
      h: 47,
      ax: 17,
      ay: 47
    },
    hit2: {
      x: 589,
      y: 0,
      w: 32,
      h: 49,
      ax: 18,
      ay: 49
    },
    hit3: {
      x: 622,
      y: 0,
      w: 39,
      h: 35,
      ax: 26,
      ay: 35
    },
    hit4: {
      x: 662,
      y: 0,
      w: 44,
      h: 26,
      ax: 27,
      ay: 26
    },
    die0: {
      x: 707,
      y: 0,
      w: 30,
      h: 49,
      ax: 17,
      ay: 49
    },
    die1: {
      x: 738,
      y: 0,
      w: 51,
      h: 34,
      ax: 28,
      ay: 34
    },
    die2: {
      x: 790,
      y: 0,
      w: 53,
      h: 27,
      ax: 31,
      ay: 27
    },
    jump: {
      x: 844,
      y: 0,
      w: 33,
      h: 44,
      ax: 21,
      ay: 44
    },
    fall: {
      x: 878,
      y: 0,
      w: 33,
      h: 52,
      ax: 20,
      ay: 52
    },
    crouch: {
      x: 912,
      y: 0,
      w: 35,
      h: 46,
      ax: 22,
      ay: 46
    },
    dash: {
      x: 948,
      y: 0,
      w: 46,
      h: 49,
      ax: 32,
      ay: 49
    }
  },
  fxSheet: new URL("../../assets/sprites/baekya-fxSheet.png", import.meta.url).href,
  fx: {
    slash1: {
      w: 140,
      h: 105,
      add: !0,
      x: 0,
      y: 0
    },
    star: {
      w: 94,
      h: 82,
      add: !0,
      x: 141,
      y: 0
    },
    slash2: {
      w: 142,
      h: 87,
      add: !0,
      x: 236,
      y: 0
    },
    slash3: {
      w: 215,
      h: 87,
      add: !0,
      x: 379,
      y: 0
    },
    spikes: {
      w: 82,
      h: 121,
      add: !0,
      x: 595,
      y: 0
    },
    moon: {
      w: 161,
      h: 92,
      add: !0,
      x: 678,
      y: 0
    },
    burst: {
      w: 160,
      h: 107,
      add: !0,
      x: 840,
      y: 0
    },
    dagger: {
      w: 46,
      h: 48,
      add: !1,
      x: 1001,
      y: 0
    }
  },
  poses: {
    idle0: "idle0",
    idle1: "idle0",
    crouch: "crouch",
    jump: "jump",
    fall: "fall",
    dash: "dash",
    hurt: "hit1",
    guard: "hit0",
    run0: "run0",
    run1: "run1",
    run2: "run2",
    run3: "run3",
    run4: "run4",
    run5: "run0",
    windHigh: "attack1",
    slashDown: "attack2",
    windLow: "attack0",
    slashUp: "attack3",
    thrustWind: "attack0",
    thrust: "attack4",
    spin: "attack3",
    slamWind: "attack1",
    slam: "attack2",
    kick: "attack4",
    uppercut: "attack3",
    throw: "attack4",
    shootWind: "attack0",
    shoot: "attack4",
    cast: "attack1",
    castUp: "attack3",
    dead: "die2"
  },
  cycles: {
    idle: {
      frames: ["idle0", "idle1", "idle2", "idle3", "idle4"],
      tick: 9
    },
    run: {
      frames: ["run0", "run1", "run2", "run3", "run4"],
      tick: 5
    },
    hurt: {
      frames: ["hit0", "hit1", "hit2"],
      tick: 5
    },
    dead: {
      frames: ["hit1", "hit3", "die1", "hit4", "die2"],
      tick: 6
    }
  }
};
export {f as BAEKYA};
