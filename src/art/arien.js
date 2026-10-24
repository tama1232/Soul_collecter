// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const z = {
  sheet: new URL("../../assets/sprites/arien-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 38,
      h: 52,
      ax: 19,
      ay: 52
    },
    idle1: {
      x: 39,
      y: 0,
      w: 38,
      h: 52,
      ax: 18,
      ay: 52
    },
    idle2: {
      x: 78,
      y: 0,
      w: 38,
      h: 51,
      ax: 16,
      ay: 51
    },
    idle3: {
      x: 117,
      y: 0,
      w: 36,
      h: 50,
      ax: 17,
      ay: 50
    },
    idle4: {
      x: 154,
      y: 0,
      w: 38,
      h: 51,
      ax: 19,
      ay: 51
    },
    walk0: {
      x: 193,
      y: 0,
      w: 38,
      h: 52,
      ax: 17,
      ay: 50
    },
    walk1: {
      x: 232,
      y: 0,
      w: 32,
      h: 48,
      ax: 16,
      ay: 51
    },
    walk2: {
      x: 265,
      y: 0,
      w: 35,
      h: 50,
      ax: 16,
      ay: 50
    },
    walk3: {
      x: 301,
      y: 0,
      w: 37,
      h: 50,
      ax: 17,
      ay: 51
    },
    walk4: {
      x: 339,
      y: 0,
      w: 34,
      h: 49,
      ax: 16,
      ay: 50
    },
    run0: {
      x: 374,
      y: 0,
      w: 41,
      h: 47,
      ax: 20,
      ay: 45
    },
    run1: {
      x: 416,
      y: 0,
      w: 39,
      h: 45,
      ax: 21,
      ay: 46
    },
    run2: {
      x: 456,
      y: 0,
      w: 36,
      h: 50,
      ax: 18,
      ay: 45
    },
    run3: {
      x: 493,
      y: 0,
      w: 34,
      h: 43,
      ax: 18,
      ay: 46
    },
    run4: {
      x: 528,
      y: 0,
      w: 33,
      h: 44,
      ax: 18,
      ay: 45
    },
    attack0: {
      x: 562,
      y: 0,
      w: 55,
      h: 57,
      ax: 23,
      ay: 57
    },
    attack1: {
      x: 618,
      y: 0,
      w: 49,
      h: 51,
      ax: 20,
      ay: 51
    },
    attack2: {
      x: 668,
      y: 0,
      w: 31,
      h: 55,
      ax: 18,
      ay: 55
    },
    attack3: {
      x: 700,
      y: 0,
      w: 44,
      h: 53,
      ax: 21,
      ay: 53
    },
    cast0: {
      x: 745,
      y: 0,
      w: 39,
      h: 52,
      ax: 19,
      ay: 52
    },
    cast1: {
      x: 785,
      y: 0,
      w: 48,
      h: 51,
      ax: 21,
      ay: 50
    },
    cast2: {
      x: 834,
      y: 0,
      w: 37,
      h: 44,
      ax: 18,
      ay: 44
    },
    hit0: {
      x: 872,
      y: 0,
      w: 54,
      h: 54,
      ax: 30,
      ay: 53
    },
    hit1: {
      x: 927,
      y: 0,
      w: 53,
      h: 52,
      ax: 21,
      ay: 52
    },
    hit2: {
      x: 981,
      y: 0,
      w: 49,
      h: 54,
      ax: 24,
      ay: 54
    },
    hit3: {
      x: 1031,
      y: 0,
      w: 45,
      h: 52,
      ax: 25,
      ay: 52
    },
    hit4: {
      x: 1077,
      y: 0,
      w: 35,
      h: 49,
      ax: 17,
      ay: 49
    },
    die0: {
      x: 1113,
      y: 0,
      w: 40,
      h: 51,
      ax: 21,
      ay: 51
    },
    die1: {
      x: 1154,
      y: 0,
      w: 51,
      h: 34,
      ax: 29,
      ay: 34
    },
    die2: {
      x: 1206,
      y: 0,
      w: 45,
      h: 30,
      ax: 29,
      ay: 30
    },
    die3: {
      x: 1252,
      y: 0,
      w: 54,
      h: 29,
      ax: 35,
      ay: 29
    },
    jump: {
      x: 1307,
      y: 0,
      w: 37,
      h: 41,
      ax: 19,
      ay: 41
    },
    fall: {
      x: 1345,
      y: 0,
      w: 33,
      h: 45,
      ax: 19,
      ay: 45
    },
    crouch: {
      x: 1379,
      y: 0,
      w: 40,
      h: 47,
      ax: 20,
      ay: 47
    },
    dash: {
      x: 1420,
      y: 0,
      w: 45,
      h: 51,
      ax: 26,
      ay: 51
    }
  },
  fxSheet: new URL("../../assets/sprites/arien-fxSheet.png", import.meta.url).href,
  fx: {
    arrow: {
      w: 64,
      h: 23,
      add: !0,
      x: 0,
      y: 0
    },
    sigil: {
      w: 46,
      h: 45,
      add: !0,
      x: 65,
      y: 0
    },
    volley: {
      w: 68,
      h: 108,
      add: !0,
      x: 112,
      y: 0
    },
    volley2: {
      w: 63,
      h: 74,
      add: !0,
      x: 181,
      y: 0
    },
    star: {
      w: 112,
      h: 120,
      add: !0,
      x: 245,
      y: 0
    },
    bow: {
      w: 61,
      h: 72,
      add: !1,
      x: 358,
      y: 0
    },
    bigarrow: {
      w: 53,
      h: 53,
      add: !1,
      x: 420,
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
    shootWind: "attack0",
    shoot: "attack1",
    cast: "cast0",
    castUp: "cast2",
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
export {z as ARIEN};
