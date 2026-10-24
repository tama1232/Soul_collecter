// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const a = {
  sheet: new URL("../../assets/sprites/enoch-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 37,
      h: 50,
      ax: 17,
      ay: 50
    },
    idle1: {
      x: 38,
      y: 0,
      w: 36,
      h: 52,
      ax: 19,
      ay: 52
    },
    idle2: {
      x: 75,
      y: 0,
      w: 38,
      h: 50,
      ax: 18,
      ay: 50
    },
    idle3: {
      x: 114,
      y: 0,
      w: 37,
      h: 51,
      ax: 18,
      ay: 51
    },
    idle4: {
      x: 152,
      y: 0,
      w: 39,
      h: 50,
      ax: 18,
      ay: 50
    },
    walk0: {
      x: 192,
      y: 0,
      w: 35,
      h: 51,
      ax: 16,
      ay: 50
    },
    walk1: {
      x: 228,
      y: 0,
      w: 35,
      h: 50,
      ax: 18,
      ay: 51
    },
    walk2: {
      x: 264,
      y: 0,
      w: 35,
      h: 51,
      ax: 18,
      ay: 50
    },
    walk3: {
      x: 300,
      y: 0,
      w: 38,
      h: 50,
      ax: 21,
      ay: 51
    },
    walk4: {
      x: 339,
      y: 0,
      w: 36,
      h: 50,
      ax: 20,
      ay: 50
    },
    run0: {
      x: 376,
      y: 0,
      w: 42,
      h: 49,
      ax: 23,
      ay: 49
    },
    run1: {
      x: 419,
      y: 0,
      w: 36,
      h: 49,
      ax: 23,
      ay: 50
    },
    run2: {
      x: 456,
      y: 0,
      w: 34,
      h: 43,
      ax: 21,
      ay: 49
    },
    run3: {
      x: 491,
      y: 0,
      w: 30,
      h: 47,
      ax: 17,
      ay: 50
    },
    run4: {
      x: 522,
      y: 0,
      w: 34,
      h: 49,
      ax: 20,
      ay: 49
    },
    attack0: {
      x: 557,
      y: 0,
      w: 65,
      h: 51,
      ax: 39,
      ay: 43
    },
    attack1: {
      x: 623,
      y: 0,
      w: 78,
      h: 56,
      ax: 48,
      ay: 56
    },
    attack2: {
      x: 702,
      y: 0,
      w: 45,
      h: 49,
      ax: 24,
      ay: 49
    },
    attack3: {
      x: 748,
      y: 0,
      w: 39,
      h: 48,
      ax: 17,
      ay: 48
    },
    cast0: {
      x: 788,
      y: 0,
      w: 41,
      h: 46,
      ax: 21,
      ay: 46
    },
    cast1: {
      x: 830,
      y: 0,
      w: 41,
      h: 47,
      ax: 23,
      ay: 47
    },
    hit0: {
      x: 872,
      y: 0,
      w: 34,
      h: 48,
      ax: 18,
      ay: 48
    },
    hit1: {
      x: 907,
      y: 0,
      w: 44,
      h: 46,
      ax: 19,
      ay: 46
    },
    hit2: {
      x: 952,
      y: 0,
      w: 38,
      h: 49,
      ax: 17,
      ay: 49
    },
    hit3: {
      x: 991,
      y: 0,
      w: 34,
      h: 50,
      ax: 18,
      ay: 50
    },
    hit4: {
      x: 1026,
      y: 0,
      w: 39,
      h: 48,
      ax: 18,
      ay: 48
    },
    die0: {
      x: 1066,
      y: 0,
      w: 43,
      h: 47,
      ax: 17,
      ay: 47
    },
    die1: {
      x: 1110,
      y: 0,
      w: 43,
      h: 40,
      ax: 15,
      ay: 40
    },
    die2: {
      x: 1154,
      y: 0,
      w: 60,
      h: 31,
      ax: 36,
      ay: 31
    },
    die3: {
      x: 1215,
      y: 0,
      w: 57,
      h: 31,
      ax: 37,
      ay: 31
    },
    jump: {
      x: 1273,
      y: 0,
      w: 36,
      h: 44,
      ax: 23,
      ay: 44
    },
    fall: {
      x: 1310,
      y: 0,
      w: 34,
      h: 50,
      ax: 20,
      ay: 50
    },
    crouch: {
      x: 1345,
      y: 0,
      w: 40,
      h: 45,
      ax: 19,
      ay: 45
    },
    dash: {
      x: 1386,
      y: 0,
      w: 45,
      h: 44,
      ax: 30,
      ay: 43
    }
  },
  fxSheet: new URL("../../assets/sprites/enoch-fxSheet.png", import.meta.url).href,
  fx: {
    arc: {
      w: 74,
      h: 102,
      add: !0,
      x: 0,
      y: 0
    },
    arc2: {
      w: 61,
      h: 90,
      add: !0,
      x: 75,
      y: 0
    },
    sigil: {
      w: 82,
      h: 99,
      add: !0,
      x: 137,
      y: 0
    },
    star: {
      w: 104,
      h: 98,
      add: !0,
      x: 220,
      y: 0
    },
    circle: {
      w: 105,
      h: 102,
      add: !0,
      x: 325,
      y: 0
    },
    orb: {
      w: 57,
      h: 60,
      add: !1,
      x: 431,
      y: 0
    },
    emblem: {
      w: 40,
      h: 58,
      add: !1,
      x: 489,
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
export {a as ENOCH};
