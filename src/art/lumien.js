// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const f = {
  sheet: new URL("../../assets/sprites/lumien-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 36,
      h: 51,
      ax: 20,
      ay: 51
    },
    idle1: {
      x: 37,
      y: 0,
      w: 30,
      h: 51,
      ax: 15,
      ay: 51
    },
    idle2: {
      x: 68,
      y: 0,
      w: 34,
      h: 51,
      ax: 17,
      ay: 51
    },
    idle3: {
      x: 103,
      y: 0,
      w: 32,
      h: 50,
      ax: 16,
      ay: 50
    },
    idle4: {
      x: 136,
      y: 0,
      w: 36,
      h: 51,
      ax: 18,
      ay: 51
    },
    run0: {
      x: 173,
      y: 0,
      w: 31,
      h: 48,
      ax: 19,
      ay: 48
    },
    run1: {
      x: 205,
      y: 0,
      w: 31,
      h: 49,
      ax: 19,
      ay: 49
    },
    run2: {
      x: 237,
      y: 0,
      w: 33,
      h: 48,
      ax: 20,
      ay: 48
    },
    run3: {
      x: 271,
      y: 0,
      w: 26,
      h: 46,
      ax: 15,
      ay: 49
    },
    run4: {
      x: 298,
      y: 0,
      w: 27,
      h: 49,
      ax: 16,
      ay: 48
    },
    attack0: {
      x: 326,
      y: 0,
      w: 35,
      h: 47,
      ax: 21,
      ay: 47
    },
    attack1: {
      x: 362,
      y: 0,
      w: 36,
      h: 47,
      ax: 18,
      ay: 47
    },
    attack2: {
      x: 399,
      y: 0,
      w: 33,
      h: 46,
      ax: 14,
      ay: 46
    },
    attack3: {
      x: 433,
      y: 0,
      w: 34,
      h: 46,
      ax: 23,
      ay: 46
    },
    attack4: {
      x: 468,
      y: 0,
      w: 24,
      h: 42,
      ax: 12,
      ay: 42
    },
    cast0: {
      x: 493,
      y: 0,
      w: 34,
      h: 49,
      ax: 22,
      ay: 49
    },
    hit0: {
      x: 528,
      y: 0,
      w: 31,
      h: 52,
      ax: 18,
      ay: 52
    },
    hit1: {
      x: 560,
      y: 0,
      w: 30,
      h: 53,
      ax: 18,
      ay: 53
    },
    hit2: {
      x: 591,
      y: 0,
      w: 35,
      h: 54,
      ax: 20,
      ay: 54
    },
    hit3: {
      x: 627,
      y: 0,
      w: 30,
      h: 51,
      ax: 17,
      ay: 51
    },
    hit4: {
      x: 658,
      y: 0,
      w: 30,
      h: 52,
      ax: 17,
      ay: 52
    },
    die0: {
      x: 689,
      y: 0,
      w: 32,
      h: 53,
      ax: 19,
      ay: 53
    },
    die1: {
      x: 722,
      y: 0,
      w: 38,
      h: 37,
      ax: 24,
      ay: 37
    },
    die2: {
      x: 761,
      y: 0,
      w: 48,
      h: 29,
      ax: 31,
      ay: 29
    },
    die3: {
      x: 810,
      y: 0,
      w: 51,
      h: 29,
      ax: 36,
      ay: 29
    },
    jump: {
      x: 862,
      y: 0,
      w: 30,
      h: 43,
      ax: 18,
      ay: 43
    },
    fall: {
      x: 893,
      y: 0,
      w: 27,
      h: 51,
      ax: 16,
      ay: 51
    },
    crouch: {
      x: 921,
      y: 0,
      w: 38,
      h: 45,
      ax: 21,
      ay: 45
    },
    dash: {
      x: 960,
      y: 0,
      w: 45,
      h: 48,
      ax: 31,
      ay: 48
    }
  },
  fxSheet: new URL("../../assets/sprites/lumien-fxSheet.png", import.meta.url).href,
  fx: {
    crystal: {
      w: 84,
      h: 116,
      add: !0,
      x: 0,
      y: 0
    },
    star: {
      w: 67,
      h: 95,
      add: !0,
      x: 85,
      y: 0
    },
    sigil: {
      w: 98,
      h: 109,
      add: !0,
      x: 153,
      y: 0
    },
    burst: {
      w: 79,
      h: 77,
      add: !0,
      x: 252,
      y: 0
    },
    streak: {
      w: 119,
      h: 86,
      add: !0,
      x: 332,
      y: 0
    },
    crescent: {
      w: 60,
      h: 105,
      add: !0,
      x: 452,
      y: 0
    },
    sword: {
      w: 74,
      h: 71,
      add: !1,
      x: 513,
      y: 0
    },
    emblem: {
      w: 37,
      h: 59,
      add: !0,
      x: 588,
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
    thrustWind: "attack1",
    thrust: "attack4",
    spin: "attack3",
    slamWind: "attack1",
    slam: "attack2",
    kick: "attack0",
    uppercut: "attack3",
    throw: "attack4",
    shootWind: "cast0",
    shoot: "attack4",
    cast: "cast0",
    castUp: "cast0",
    dead: "die3"
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
      frames: ["hit0", "hit1", "hit2", "hit3", "hit4"],
      tick: 4
    },
    dead: {
      frames: ["hit1", "die0", "die1", "die2", "die3"],
      tick: 6
    }
  }
};
export {f as LUMIEN};
