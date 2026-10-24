// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const z = {
  sheet: new URL("../../assets/sprites/heukwol-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 37,
      h: 50,
      ax: 21,
      ay: 50
    },
    idle1: {
      x: 38,
      y: 0,
      w: 36,
      h: 51,
      ax: 21,
      ay: 51
    },
    idle2: {
      x: 75,
      y: 0,
      w: 35,
      h: 51,
      ax: 21,
      ay: 51
    },
    idle3: {
      x: 111,
      y: 0,
      w: 36,
      h: 51,
      ax: 22,
      ay: 51
    },
    idle4: {
      x: 148,
      y: 0,
      w: 39,
      h: 49,
      ax: 21,
      ay: 49
    },
    run0: {
      x: 188,
      y: 0,
      w: 34,
      h: 47,
      ax: 21,
      ay: 47
    },
    run1: {
      x: 223,
      y: 0,
      w: 31,
      h: 45,
      ax: 20,
      ay: 48
    },
    run2: {
      x: 255,
      y: 0,
      w: 33,
      h: 47,
      ax: 21,
      ay: 47
    },
    run3: {
      x: 289,
      y: 0,
      w: 32,
      h: 47,
      ax: 19,
      ay: 48
    },
    run4: {
      x: 322,
      y: 0,
      w: 31,
      h: 48,
      ax: 19,
      ay: 47
    },
    attack0: {
      x: 354,
      y: 0,
      w: 42,
      h: 48,
      ax: 23,
      ay: 48
    },
    attack1: {
      x: 397,
      y: 0,
      w: 42,
      h: 47,
      ax: 27,
      ay: 47
    },
    attack2: {
      x: 440,
      y: 0,
      w: 37,
      h: 41,
      ax: 21,
      ay: 41
    },
    attack3: {
      x: 478,
      y: 0,
      w: 39,
      h: 48,
      ax: 17,
      ay: 48
    },
    cast0: {
      x: 518,
      y: 0,
      w: 38,
      h: 48,
      ax: 22,
      ay: 48
    },
    cast1: {
      x: 557,
      y: 0,
      w: 32,
      h: 43,
      ax: 20,
      ay: 43
    },
    hit0: {
      x: 590,
      y: 0,
      w: 42,
      h: 50,
      ax: 24,
      ay: 50
    },
    hit1: {
      x: 633,
      y: 0,
      w: 40,
      h: 53,
      ax: 24,
      ay: 53
    },
    hit2: {
      x: 674,
      y: 0,
      w: 38,
      h: 50,
      ax: 22,
      ay: 50
    },
    hit3: {
      x: 713,
      y: 0,
      w: 37,
      h: 36,
      ax: 26,
      ay: 36
    },
    hit4: {
      x: 751,
      y: 0,
      w: 47,
      h: 28,
      ax: 29,
      ay: 28
    },
    die0: {
      x: 799,
      y: 0,
      w: 42,
      h: 51,
      ax: 25,
      ay: 51
    },
    die1: {
      x: 842,
      y: 0,
      w: 44,
      h: 24,
      ax: 24,
      ay: 24
    },
    die2: {
      x: 887,
      y: 0,
      w: 47,
      h: 23,
      ax: 26,
      ay: 23
    },
    jump: {
      x: 935,
      y: 0,
      w: 31,
      h: 41,
      ax: 20,
      ay: 41
    },
    fall: {
      x: 967,
      y: 0,
      w: 32,
      h: 50,
      ax: 20,
      ay: 50
    },
    crouch: {
      x: 1000,
      y: 0,
      w: 40,
      h: 45,
      ax: 23,
      ay: 45
    },
    dash: {
      x: 1041,
      y: 0,
      w: 44,
      h: 47,
      ax: 30,
      ay: 47
    }
  },
  fxSheet: new URL("../../assets/sprites/heukwol-fxSheet.png", import.meta.url).href,
  fx: {
    slash1: {
      w: 129,
      h: 100,
      add: !0,
      x: 0,
      y: 0
    },
    ring: {
      w: 170,
      h: 82,
      add: !0,
      x: 130,
      y: 0
    },
    slash3: {
      w: 286,
      h: 65,
      add: !0,
      x: 301,
      y: 0
    },
    pillar: {
      w: 88,
      h: 122,
      add: !0,
      x: 588,
      y: 0
    },
    crescent: {
      w: 127,
      h: 105,
      add: !0,
      x: 677,
      y: 0
    },
    crescent2: {
      w: 84,
      h: 114,
      add: !0,
      x: 805,
      y: 0
    },
    katana: {
      w: 74,
      h: 65,
      add: !1,
      x: 890,
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
    thrust: "attack3",
    spin: "attack2",
    slamWind: "attack1",
    slam: "attack2",
    kick: "attack3",
    uppercut: "attack3",
    throw: "attack3",
    shootWind: "cast0",
    shoot: "cast1",
    cast: "cast0",
    castUp: "cast1",
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
      frames: ["hit1", "hit3", "hit4", "die1", "die2"],
      tick: 6
    }
  }
};
export {z as HEUKWOL};
