// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const f = {
  sheet: new URL("../../assets/sprites/luciel-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 36,
      h: 51,
      ax: 17,
      ay: 51
    },
    idle1: {
      x: 37,
      y: 0,
      w: 37,
      h: 49,
      ax: 18,
      ay: 49
    },
    idle2: {
      x: 75,
      y: 0,
      w: 36,
      h: 52,
      ax: 17,
      ay: 52
    },
    idle3: {
      x: 112,
      y: 0,
      w: 40,
      h: 51,
      ax: 20,
      ay: 51
    },
    idle4: {
      x: 153,
      y: 0,
      w: 37,
      h: 47,
      ax: 19,
      ay: 47
    },
    walk0: {
      x: 191,
      y: 0,
      w: 37,
      h: 50,
      ax: 19,
      ay: 50
    },
    walk1: {
      x: 229,
      y: 0,
      w: 31,
      h: 50,
      ax: 16,
      ay: 51
    },
    walk2: {
      x: 261,
      y: 0,
      w: 38,
      h: 50,
      ax: 20,
      ay: 50
    },
    walk3: {
      x: 300,
      y: 0,
      w: 38,
      h: 49,
      ax: 19,
      ay: 51
    },
    walk4: {
      x: 339,
      y: 0,
      w: 34,
      h: 51,
      ax: 17,
      ay: 50
    },
    run0: {
      x: 374,
      y: 0,
      w: 44,
      h: 46,
      ax: 25,
      ay: 47
    },
    run1: {
      x: 419,
      y: 0,
      w: 41,
      h: 47,
      ax: 21,
      ay: 48
    },
    run2: {
      x: 461,
      y: 0,
      w: 35,
      h: 48,
      ax: 18,
      ay: 47
    },
    run3: {
      x: 497,
      y: 0,
      w: 30,
      h: 45,
      ax: 17,
      ay: 48
    },
    run4: {
      x: 528,
      y: 0,
      w: 41,
      h: 47,
      ax: 21,
      ay: 47
    },
    attack0: {
      x: 570,
      y: 0,
      w: 55,
      h: 51,
      ax: 28,
      ay: 50
    },
    attack1: {
      x: 626,
      y: 0,
      w: 79,
      h: 58,
      ax: 47,
      ay: 57
    },
    attack2: {
      x: 706,
      y: 0,
      w: 62,
      h: 56,
      ax: 32,
      ay: 56
    },
    attack3: {
      x: 769,
      y: 0,
      w: 77,
      h: 59,
      ax: 37,
      ay: 59
    },
    cast0: {
      x: 847,
      y: 0,
      w: 58,
      h: 57,
      ax: 33,
      ay: 56
    },
    cast1: {
      x: 906,
      y: 0,
      w: 38,
      h: 56,
      ax: 21,
      ay: 56
    },
    hit0: {
      x: 945,
      y: 0,
      w: 45,
      h: 52,
      ax: 23,
      ay: 52
    },
    hit1: {
      x: 991,
      y: 0,
      w: 42,
      h: 53,
      ax: 21,
      ay: 53
    },
    hit2: {
      x: 1034,
      y: 0,
      w: 40,
      h: 53,
      ax: 20,
      ay: 53
    },
    hit3: {
      x: 1075,
      y: 0,
      w: 34,
      h: 51,
      ax: 20,
      ay: 51
    },
    hit4: {
      x: 1110,
      y: 0,
      w: 39,
      h: 48,
      ax: 22,
      ay: 48
    },
    die0: {
      x: 1150,
      y: 0,
      w: 35,
      h: 51,
      ax: 21,
      ay: 51
    },
    die1: {
      x: 1186,
      y: 0,
      w: 44,
      h: 36,
      ax: 24,
      ay: 36
    },
    die2: {
      x: 1231,
      y: 0,
      w: 61,
      h: 30,
      ax: 37,
      ay: 29
    },
    die3: {
      x: 1293,
      y: 0,
      w: 70,
      h: 30,
      ax: 42,
      ay: 30
    },
    jump: {
      x: 1364,
      y: 0,
      w: 40,
      h: 43,
      ax: 20,
      ay: 43
    },
    fall: {
      x: 1405,
      y: 0,
      w: 41,
      h: 49,
      ax: 21,
      ay: 49
    },
    crouch: {
      x: 1447,
      y: 0,
      w: 39,
      h: 45,
      ax: 18,
      ay: 45
    },
    dash: {
      x: 1487,
      y: 0,
      w: 45,
      h: 48,
      ax: 27,
      ay: 48
    }
  },
  fxSheet: new URL("../../assets/sprites/luciel-fxSheet.png", import.meta.url).href,
  fx: {
    arc: {
      w: 69,
      h: 97,
      add: !0,
      x: 0,
      y: 0
    },
    arc2: {
      w: 43,
      h: 83,
      add: !0,
      x: 70,
      y: 0
    },
    arc3: {
      w: 74,
      h: 92,
      add: !0,
      x: 114,
      y: 0
    },
    pillar: {
      w: 66,
      h: 112,
      add: !0,
      x: 189,
      y: 0
    },
    burst: {
      w: 123,
      h: 124,
      add: !0,
      x: 256,
      y: 0
    },
    sword: {
      w: 54,
      h: 59,
      add: !1,
      x: 380,
      y: 0
    },
    emblem: {
      w: 55,
      h: 57,
      add: !1,
      x: 435,
      y: 0
    }
  },
  poses: {
    idle0: "idle0",
    idle1: "idle1",
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
    windHigh: "attack0",
    slashDown: "attack1",
    windLow: "attack0",
    slashUp: "attack2",
    thrustWind: "attack0",
    thrust: "attack3",
    spin: "attack2",
    slamWind: "attack0",
    slam: "attack1",
    kick: "attack3",
    uppercut: "attack2",
    throw: "attack3",
    shootWind: "cast0",
    shoot: "attack3",
    cast: "cast0",
    castUp: "cast1",
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
export {f as LUCIEL};
