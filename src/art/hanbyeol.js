// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const f = {
  sheet: new URL("../../assets/sprites/hanbyeol-sheet.png", import.meta.url).href,
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
      w: 34,
      h: 51,
      ax: 19,
      ay: 51
    },
    idle2: {
      x: 72,
      y: 0,
      w: 36,
      h: 51,
      ax: 20,
      ay: 51
    },
    idle3: {
      x: 109,
      y: 0,
      w: 36,
      h: 51,
      ax: 21,
      ay: 51
    },
    idle4: {
      x: 146,
      y: 0,
      w: 36,
      h: 52,
      ax: 20,
      ay: 52
    },
    walk0: {
      x: 183,
      y: 0,
      w: 35,
      h: 51,
      ax: 22,
      ay: 51
    },
    walk1: {
      x: 219,
      y: 0,
      w: 34,
      h: 51,
      ax: 21,
      ay: 51
    },
    walk2: {
      x: 254,
      y: 0,
      w: 33,
      h: 50,
      ax: 21,
      ay: 50
    },
    walk3: {
      x: 288,
      y: 0,
      w: 31,
      h: 51,
      ax: 19,
      ay: 51
    },
    walk4: {
      x: 320,
      y: 0,
      w: 37,
      h: 51,
      ax: 22,
      ay: 51
    },
    run0: {
      x: 358,
      y: 0,
      w: 37,
      h: 50,
      ax: 25,
      ay: 49
    },
    run1: {
      x: 396,
      y: 0,
      w: 34,
      h: 49,
      ax: 21,
      ay: 50
    },
    run2: {
      x: 431,
      y: 0,
      w: 37,
      h: 49,
      ax: 25,
      ay: 49
    },
    run3: {
      x: 469,
      y: 0,
      w: 29,
      h: 49,
      ax: 17,
      ay: 50
    },
    run4: {
      x: 499,
      y: 0,
      w: 33,
      h: 50,
      ax: 21,
      ay: 49
    },
    attack0: {
      x: 533,
      y: 0,
      w: 34,
      h: 50,
      ax: 22,
      ay: 50
    },
    attack1: {
      x: 568,
      y: 0,
      w: 38,
      h: 48,
      ax: 23,
      ay: 48
    },
    attack2: {
      x: 607,
      y: 0,
      w: 38,
      h: 57,
      ax: 21,
      ay: 57
    },
    attack3: {
      x: 646,
      y: 0,
      w: 35,
      h: 41,
      ax: 18,
      ay: 41
    },
    cast0: {
      x: 682,
      y: 0,
      w: 39,
      h: 53,
      ax: 18,
      ay: 53
    },
    hit0: {
      x: 722,
      y: 0,
      w: 42,
      h: 52,
      ax: 19,
      ay: 52
    },
    hit1: {
      x: 765,
      y: 0,
      w: 37,
      h: 53,
      ax: 21,
      ay: 53
    },
    hit2: {
      x: 803,
      y: 0,
      w: 35,
      h: 54,
      ax: 18,
      ay: 54
    },
    hit3: {
      x: 839,
      y: 0,
      w: 47,
      h: 37,
      ax: 26,
      ay: 37
    },
    hit4: {
      x: 887,
      y: 0,
      w: 46,
      h: 42,
      ax: 25,
      ay: 42
    },
    die0: {
      x: 934,
      y: 0,
      w: 39,
      h: 53,
      ax: 20,
      ay: 53
    },
    die1: {
      x: 974,
      y: 0,
      w: 53,
      h: 36,
      ax: 29,
      ay: 36
    },
    die2: {
      x: 1028,
      y: 0,
      w: 46,
      h: 24,
      ax: 26,
      ay: 24
    },
    jump: {
      x: 1075,
      y: 0,
      w: 33,
      h: 44,
      ax: 20,
      ay: 44
    },
    fall: {
      x: 1109,
      y: 0,
      w: 33,
      h: 52,
      ax: 21,
      ay: 52
    },
    crouch: {
      x: 1143,
      y: 0,
      w: 38,
      h: 45,
      ax: 22,
      ay: 45
    },
    dash: {
      x: 1182,
      y: 0,
      w: 50,
      h: 49,
      ax: 35,
      ay: 49
    }
  },
  fxSheet: new URL("../../assets/sprites/hanbyeol-fxSheet.png", import.meta.url).href,
  fx: {
    arrow: {
      w: 32,
      h: 62,
      add: !1,
      x: 0,
      y: 0
    },
    sparrow: {
      w: 35,
      h: 63,
      add: !1,
      x: 33,
      y: 0
    },
    bow: {
      w: 51,
      h: 69,
      add: !1,
      x: 69,
      y: 0
    },
    streak: {
      w: 335,
      h: 83,
      add: !0,
      x: 121,
      y: 0
    },
    crescent: {
      w: 148,
      h: 96,
      add: !0,
      x: 457,
      y: 0
    },
    star: {
      w: 103,
      h: 86,
      add: !0,
      x: 606,
      y: 0
    },
    pillar: {
      w: 84,
      h: 136,
      add: !0,
      x: 710,
      y: 0
    },
    swirl: {
      w: 207,
      h: 111,
      add: !0,
      x: 795,
      y: 0
    },
    burst: {
      w: 157,
      h: 112,
      add: !0,
      x: 1003,
      y: 0
    },
    shot: {
      w: 86,
      h: 94,
      add: !0,
      x: 1161,
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
    windLow: "attack2",
    slashUp: "attack3",
    thrustWind: "attack2",
    thrust: "attack3",
    spin: "attack2",
    slamWind: "attack0",
    slam: "attack1",
    kick: "attack3",
    uppercut: "attack2",
    throw: "attack3",
    shootWind: "attack2",
    shoot: "attack3",
    cast: "cast0",
    castUp: "cast0",
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
      frames: ["hit0", "hit1", "hit2", "hit3", "hit4"],
      tick: 4
    },
    dead: {
      frames: ["hit1", "die0", "die1", "die2"],
      tick: 6
    }
  }
};
export {f as HANBYEOL};
