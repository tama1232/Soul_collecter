// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const d = {
  sheet: new URL("../../assets/sprites/aurel-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 31,
      h: 51,
      ax: 17,
      ay: 51
    },
    idle1: {
      x: 32,
      y: 0,
      w: 28,
      h: 51,
      ax: 14,
      ay: 51
    },
    idle2: {
      x: 61,
      y: 0,
      w: 30,
      h: 51,
      ax: 16,
      ay: 51
    },
    idle3: {
      x: 92,
      y: 0,
      w: 32,
      h: 51,
      ax: 19,
      ay: 51
    },
    idle4: {
      x: 125,
      y: 0,
      w: 34,
      h: 51,
      ax: 18,
      ay: 51
    },
    run0: {
      x: 160,
      y: 0,
      w: 33,
      h: 49,
      ax: 22,
      ay: 49
    },
    run1: {
      x: 194,
      y: 0,
      w: 32,
      h: 49,
      ax: 18,
      ay: 50
    },
    run2: {
      x: 227,
      y: 0,
      w: 32,
      h: 50,
      ax: 20,
      ay: 49
    },
    run3: {
      x: 260,
      y: 0,
      w: 32,
      h: 50,
      ax: 22,
      ay: 50
    },
    run4: {
      x: 293,
      y: 0,
      w: 30,
      h: 49,
      ax: 20,
      ay: 49
    },
    attack0: {
      x: 324,
      y: 0,
      w: 40,
      h: 54,
      ax: 24,
      ay: 54
    },
    attack2: {
      x: 365,
      y: 0,
      w: 40,
      h: 53,
      ax: 25,
      ay: 53
    },
    cast0: {
      x: 406,
      y: 0,
      w: 36,
      h: 53,
      ax: 19,
      ay: 53
    },
    cast1: {
      x: 443,
      y: 0,
      w: 38,
      h: 52,
      ax: 26,
      ay: 52
    },
    hit0: {
      x: 482,
      y: 0,
      w: 32,
      h: 55,
      ax: 17,
      ay: 55
    },
    hit1: {
      x: 515,
      y: 0,
      w: 32,
      h: 55,
      ax: 18,
      ay: 55
    },
    hit2: {
      x: 548,
      y: 0,
      w: 32,
      h: 54,
      ax: 19,
      ay: 54
    },
    hit3: {
      x: 581,
      y: 0,
      w: 32,
      h: 54,
      ax: 19,
      ay: 54
    },
    hit4: {
      x: 614,
      y: 0,
      w: 32,
      h: 53,
      ax: 17,
      ay: 53
    },
    die0: {
      x: 647,
      y: 0,
      w: 32,
      h: 51,
      ax: 18,
      ay: 51
    },
    die1: {
      x: 680,
      y: 0,
      w: 57,
      h: 35,
      ax: 30,
      ay: 35
    },
    die2: {
      x: 738,
      y: 0,
      w: 59,
      h: 30,
      ax: 42,
      ay: 30
    },
    die3: {
      x: 798,
      y: 0,
      w: 62,
      h: 29,
      ax: 44,
      ay: 29
    },
    jump: {
      x: 861,
      y: 0,
      w: 32,
      h: 44,
      ax: 18,
      ay: 44
    },
    fall: {
      x: 894,
      y: 0,
      w: 30,
      h: 51,
      ax: 20,
      ay: 51
    },
    crouch: {
      x: 925,
      y: 0,
      w: 33,
      h: 45,
      ax: 18,
      ay: 45
    },
    dash: {
      x: 959,
      y: 0,
      w: 46,
      h: 50,
      ax: 31,
      ay: 50
    }
  },
  fxSheet: new URL("../../assets/sprites/aurel-fxSheet.png", import.meta.url).href,
  fx: {
    emblem: {
      w: 113,
      h: 113,
      add: !0,
      x: 0,
      y: 0
    },
    sun: {
      w: 125,
      h: 123,
      add: !0,
      x: 114,
      y: 0
    },
    star: {
      w: 82,
      h: 118,
      add: !0,
      x: 240,
      y: 0
    },
    spear: {
      w: 69,
      h: 65,
      add: !1,
      x: 323,
      y: 0
    },
    crest: {
      w: 53,
      h: 60,
      add: !0,
      x: 393,
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
    windHigh: "attack2",
    slashDown: "attack0",
    windLow: "attack2",
    slashUp: "attack0",
    thrustWind: "cast1",
    thrust: "cast0",
    spin: "attack0",
    slamWind: "attack2",
    slam: "attack0",
    kick: "cast0",
    uppercut: "attack2",
    throw: "cast0",
    shootWind: "cast1",
    shoot: "cast0",
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
export {d as AUREL};
