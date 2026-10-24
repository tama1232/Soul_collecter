// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const f = {
  sheet: new URL("../../assets/sprites/elin-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 35,
      h: 51,
      ax: 18,
      ay: 51
    },
    idle1: {
      x: 36,
      y: 0,
      w: 34,
      h: 51,
      ax: 16,
      ay: 51
    },
    idle2: {
      x: 71,
      y: 0,
      w: 33,
      h: 49,
      ax: 18,
      ay: 49
    },
    idle3: {
      x: 105,
      y: 0,
      w: 35,
      h: 50,
      ax: 18,
      ay: 50
    },
    idle4: {
      x: 141,
      y: 0,
      w: 34,
      h: 52,
      ax: 17,
      ay: 52
    },
    run0: {
      x: 176,
      y: 0,
      w: 39,
      h: 50,
      ax: 23,
      ay: 50
    },
    run1: {
      x: 216,
      y: 0,
      w: 36,
      h: 50,
      ax: 20,
      ay: 51
    },
    run2: {
      x: 253,
      y: 0,
      w: 33,
      h: 51,
      ax: 18,
      ay: 50
    },
    run3: {
      x: 287,
      y: 0,
      w: 34,
      h: 50,
      ax: 19,
      ay: 51
    },
    attack0: {
      x: 322,
      y: 0,
      w: 37,
      h: 52,
      ax: 22,
      ay: 52
    },
    attack1: {
      x: 360,
      y: 0,
      w: 41,
      h: 53,
      ax: 24,
      ay: 53
    },
    attack2: {
      x: 402,
      y: 0,
      w: 47,
      h: 50,
      ax: 25,
      ay: 50
    },
    attack3: {
      x: 450,
      y: 0,
      w: 48,
      h: 45,
      ax: 29,
      ay: 45
    },
    cast0: {
      x: 499,
      y: 0,
      w: 38,
      h: 54,
      ax: 21,
      ay: 54
    },
    cast1: {
      x: 538,
      y: 0,
      w: 38,
      h: 53,
      ax: 22,
      ay: 53
    },
    cast2: {
      x: 577,
      y: 0,
      w: 43,
      h: 54,
      ax: 20,
      ay: 54
    },
    hit0: {
      x: 621,
      y: 0,
      w: 44,
      h: 55,
      ax: 23,
      ay: 55
    },
    hit1: {
      x: 666,
      y: 0,
      w: 44,
      h: 54,
      ax: 26,
      ay: 54
    },
    die0: {
      x: 711,
      y: 0,
      w: 70,
      h: 36,
      ax: 35,
      ay: 36
    },
    die1: {
      x: 782,
      y: 0,
      w: 72,
      h: 29,
      ax: 30,
      ay: 29
    },
    die2: {
      x: 855,
      y: 0,
      w: 72,
      h: 23,
      ax: 22,
      ay: 23
    },
    jump: {
      x: 928,
      y: 0,
      w: 37,
      h: 45,
      ax: 20,
      ay: 45
    },
    fall: {
      x: 966,
      y: 0,
      w: 33,
      h: 52,
      ax: 19,
      ay: 52
    },
    crouch: {
      x: 1000,
      y: 0,
      w: 37,
      h: 45,
      ax: 20,
      ay: 45
    },
    dash: {
      x: 1038,
      y: 0,
      w: 39,
      h: 52,
      ax: 26,
      ay: 52
    }
  },
  fxSheet: new URL("../../assets/sprites/elin-fxSheet.png", import.meta.url).href,
  fx: {
    spear: {
      w: 230,
      h: 63,
      add: !0,
      x: 0,
      y: 0
    },
    field: {
      w: 237,
      h: 128,
      add: !0,
      x: 231,
      y: 0
    },
    burst: {
      w: 144,
      h: 169,
      add: !0,
      x: 469,
      y: 0
    },
    pillar: {
      w: 94,
      h: 206,
      add: !0,
      x: 614,
      y: 0
    },
    lance: {
      w: 66,
      h: 62,
      add: !1,
      x: 709,
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
    run4: "run0",
    run5: "run1",
    windHigh: "attack1",
    slashDown: "attack2",
    windLow: "attack0",
    slashUp: "attack3",
    thrustWind: "attack1",
    thrust: "attack2",
    spin: "attack3",
    slamWind: "cast1",
    slam: "attack3",
    kick: "attack0",
    uppercut: "attack3",
    throw: "attack2",
    shootWind: "cast0",
    shoot: "attack2",
    cast: "cast2",
    castUp: "cast1",
    dead: "die2"
  },
  cycles: {
    idle: {
      frames: ["idle0", "idle1", "idle2", "idle3", "idle4"],
      tick: 9
    },
    run: {
      frames: ["run0", "run1", "run2", "run3"],
      tick: 6
    },
    hurt: {
      frames: ["hit0", "hit1"],
      tick: 5
    },
    dead: {
      frames: ["hit1", "die0", "die1", "die2"],
      tick: 7
    }
  }
};
export {f as ELIN};
