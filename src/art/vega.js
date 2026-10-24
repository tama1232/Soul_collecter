// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const f = {
  sheet: new URL("../../assets/sprites/vega-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 30,
      h: 52,
      ax: 16,
      ay: 52
    },
    idle1: {
      x: 31,
      y: 0,
      w: 28,
      h: 51,
      ax: 15,
      ay: 51
    },
    idle2: {
      x: 60,
      y: 0,
      w: 32,
      h: 51,
      ax: 16,
      ay: 51
    },
    idle3: {
      x: 93,
      y: 0,
      w: 31,
      h: 53,
      ax: 17,
      ay: 53
    },
    idle4: {
      x: 125,
      y: 0,
      w: 36,
      h: 49,
      ax: 18,
      ay: 49
    },
    run0: {
      x: 162,
      y: 0,
      w: 34,
      h: 51,
      ax: 23,
      ay: 51
    },
    run1: {
      x: 197,
      y: 0,
      w: 31,
      h: 48,
      ax: 19,
      ay: 52
    },
    run2: {
      x: 229,
      y: 0,
      w: 29,
      h: 51,
      ax: 17,
      ay: 51
    },
    run3: {
      x: 259,
      y: 0,
      w: 27,
      h: 51,
      ax: 15,
      ay: 52
    },
    run4: {
      x: 287,
      y: 0,
      w: 29,
      h: 51,
      ax: 18,
      ay: 51
    },
    attack0: {
      x: 317,
      y: 0,
      w: 34,
      h: 54,
      ax: 19,
      ay: 54
    },
    attack1: {
      x: 352,
      y: 0,
      w: 40,
      h: 56,
      ax: 19,
      ay: 56
    },
    cast0: {
      x: 393,
      y: 0,
      w: 34,
      h: 55,
      ax: 18,
      ay: 55
    },
    cast1: {
      x: 428,
      y: 0,
      w: 35,
      h: 54,
      ax: 19,
      ay: 54
    },
    hit0: {
      x: 464,
      y: 0,
      w: 31,
      h: 52,
      ax: 17,
      ay: 52
    },
    hit1: {
      x: 496,
      y: 0,
      w: 32,
      h: 49,
      ax: 19,
      ay: 49
    },
    hit2: {
      x: 529,
      y: 0,
      w: 30,
      h: 54,
      ax: 16,
      ay: 54
    },
    hit3: {
      x: 560,
      y: 0,
      w: 32,
      h: 53,
      ax: 18,
      ay: 53
    },
    hit4: {
      x: 593,
      y: 0,
      w: 29,
      h: 50,
      ax: 17,
      ay: 50
    },
    die0: {
      x: 623,
      y: 0,
      w: 31,
      h: 52,
      ax: 19,
      ay: 52
    },
    die1: {
      x: 655,
      y: 0,
      w: 42,
      h: 37,
      ax: 24,
      ay: 37
    },
    die2: {
      x: 698,
      y: 0,
      w: 54,
      h: 29,
      ax: 37,
      ay: 29
    },
    die3: {
      x: 753,
      y: 0,
      w: 49,
      h: 30,
      ax: 33,
      ay: 30
    },
    jump: {
      x: 803,
      y: 0,
      w: 29,
      h: 43,
      ax: 17,
      ay: 43
    },
    fall: {
      x: 833,
      y: 0,
      w: 31,
      h: 52,
      ax: 20,
      ay: 52
    },
    crouch: {
      x: 865,
      y: 0,
      w: 31,
      h: 47,
      ax: 16,
      ay: 47
    },
    dash: {
      x: 897,
      y: 0,
      w: 39,
      h: 51,
      ax: 25,
      ay: 51
    }
  },
  fxSheet: new URL("../../assets/sprites/vega-fxSheet.png", import.meta.url).href,
  fx: {
    orb: {
      w: 31,
      h: 36,
      add: !0,
      x: 0,
      y: 0
    },
    burst: {
      w: 87,
      h: 92,
      add: !0,
      x: 32,
      y: 0
    },
    comet: {
      w: 155,
      h: 105,
      add: !0,
      x: 120,
      y: 0
    },
    sigil: {
      w: 80,
      h: 97,
      add: !0,
      x: 276,
      y: 0
    },
    star: {
      w: 46,
      h: 60,
      add: !0,
      x: 357,
      y: 0
    },
    staff: {
      w: 61,
      h: 70,
      add: !1,
      x: 404,
      y: 0
    },
    sphere: {
      w: 50,
      h: 55,
      add: !0,
      x: 466,
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
    windHigh: "cast0",
    slashDown: "attack1",
    windLow: "cast0",
    slashUp: "attack0",
    thrustWind: "cast1",
    thrust: "attack1",
    spin: "attack0",
    slamWind: "cast1",
    slam: "attack1",
    kick: "attack0",
    uppercut: "attack0",
    throw: "attack1",
    shootWind: "cast1",
    shoot: "attack1",
    cast: "cast0",
    castUp: "attack0",
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
export {f as VEGA};
