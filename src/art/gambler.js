// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const n = {
  sheet: new URL("../../assets/sprites/gambler-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 29,
      h: 52,
      ax: 17,
      ay: 52
    },
    idle1: {
      x: 30,
      y: 0,
      w: 31,
      h: 51,
      ax: 18,
      ay: 51
    },
    idle2: {
      x: 62,
      y: 0,
      w: 30,
      h: 52,
      ax: 17,
      ay: 52
    },
    idle3: {
      x: 93,
      y: 0,
      w: 33,
      h: 51,
      ax: 20,
      ay: 51
    },
    idle4: {
      x: 127,
      y: 0,
      w: 32,
      h: 51,
      ax: 19,
      ay: 51
    },
    run0: {
      x: 160,
      y: 0,
      w: 36,
      h: 47,
      ax: 22,
      ay: 49
    },
    run1: {
      x: 197,
      y: 0,
      w: 37,
      h: 50,
      ax: 22,
      ay: 50
    },
    run2: {
      x: 235,
      y: 0,
      w: 37,
      h: 51,
      ax: 22,
      ay: 49
    },
    run3: {
      x: 273,
      y: 0,
      w: 36,
      h: 49,
      ax: 20,
      ay: 50
    },
    run4: {
      x: 310,
      y: 0,
      w: 29,
      h: 48,
      ax: 16,
      ay: 49
    },
    attack0: {
      x: 340,
      y: 0,
      w: 35,
      h: 52,
      ax: 19,
      ay: 52
    },
    cast0: {
      x: 376,
      y: 0,
      w: 37,
      h: 52,
      ax: 17,
      ay: 52
    },
    cast1: {
      x: 414,
      y: 0,
      w: 35,
      h: 51,
      ax: 21,
      ay: 51
    },
    hit0: {
      x: 450,
      y: 0,
      w: 29,
      h: 53,
      ax: 14,
      ay: 53
    },
    hit1: {
      x: 480,
      y: 0,
      w: 31,
      h: 52,
      ax: 17,
      ay: 52
    },
    hit2: {
      x: 512,
      y: 0,
      w: 32,
      h: 53,
      ax: 18,
      ay: 53
    },
    hit3: {
      x: 545,
      y: 0,
      w: 31,
      h: 49,
      ax: 18,
      ay: 49
    },
    hit4: {
      x: 577,
      y: 0,
      w: 28,
      h: 47,
      ax: 15,
      ay: 47
    },
    die0: {
      x: 606,
      y: 0,
      w: 32,
      h: 51,
      ax: 17,
      ay: 51
    },
    die1: {
      x: 639,
      y: 0,
      w: 40,
      h: 42,
      ax: 26,
      ay: 42
    },
    die2: {
      x: 680,
      y: 0,
      w: 51,
      h: 30,
      ax: 32,
      ay: 30
    },
    die3: {
      x: 732,
      y: 0,
      w: 50,
      h: 30,
      ax: 31,
      ay: 30
    },
    jump: {
      x: 783,
      y: 0,
      w: 35,
      h: 45,
      ax: 20,
      ay: 45
    },
    fall: {
      x: 819,
      y: 0,
      w: 29,
      h: 49,
      ax: 16,
      ay: 49
    },
    crouch: {
      x: 849,
      y: 0,
      w: 30,
      h: 46,
      ax: 17,
      ay: 46
    },
    dash: {
      x: 880,
      y: 0,
      w: 51,
      h: 51,
      ax: 33,
      ay: 51
    }
  },
  fxSheet: new URL("../../assets/sprites/gambler-fxSheet.png", import.meta.url).href,
  fx: {
    wheel: {
      w: 134,
      h: 118,
      add: !1,
      x: 0,
      y: 0
    },
    card: {
      w: 19,
      h: 32,
      add: !1,
      x: 135,
      y: 0
    },
    burst: {
      w: 76,
      h: 80,
      add: !0,
      x: 155,
      y: 0
    },
    chip: {
      w: 52,
      h: 54,
      add: !0,
      x: 232,
      y: 0
    },
    arc: {
      w: 82,
      h: 72,
      add: !0,
      x: 285,
      y: 0
    },
    hat: {
      w: 58,
      h: 48,
      add: !1,
      x: 368,
      y: 0
    },
    wheelicon: {
      w: 69,
      h: 61,
      add: !1,
      x: 427,
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
    slashDown: "cast1",
    windLow: "cast0",
    slashUp: "attack0",
    thrustWind: "cast0",
    thrust: "cast1",
    spin: "attack0",
    slamWind: "cast0",
    slam: "cast1",
    kick: "attack0",
    uppercut: "attack0",
    throw: "cast1",
    shootWind: "cast0",
    shoot: "cast1",
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
export {n as GAMBLER};
