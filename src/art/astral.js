// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const v = {
  sheet: new URL("../../assets/sprites/astral-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 33,
      h: 52,
      ax: 16,
      ay: 52
    },
    idle1: {
      x: 34,
      y: 0,
      w: 34,
      h: 51,
      ax: 16,
      ay: 51
    },
    idle2: {
      x: 69,
      y: 0,
      w: 34,
      h: 52,
      ax: 17,
      ay: 52
    },
    idle3: {
      x: 104,
      y: 0,
      w: 36,
      h: 52,
      ax: 17,
      ay: 52
    },
    idle4: {
      x: 141,
      y: 0,
      w: 34,
      h: 52,
      ax: 15,
      ay: 52
    },
    walk0: {
      x: 176,
      y: 0,
      w: 30,
      h: 49,
      ax: 14,
      ay: 49
    },
    walk1: {
      x: 207,
      y: 0,
      w: 31,
      h: 49,
      ax: 16,
      ay: 49
    },
    walk2: {
      x: 239,
      y: 0,
      w: 30,
      h: 49,
      ax: 16,
      ay: 49
    },
    walk3: {
      x: 270,
      y: 0,
      w: 30,
      h: 49,
      ax: 15,
      ay: 49
    },
    walk4: {
      x: 301,
      y: 0,
      w: 30,
      h: 49,
      ax: 16,
      ay: 49
    },
    run0: {
      x: 332,
      y: 0,
      w: 35,
      h: 47,
      ax: 20,
      ay: 47
    },
    run1: {
      x: 368,
      y: 0,
      w: 36,
      h: 48,
      ax: 21,
      ay: 48
    },
    run2: {
      x: 405,
      y: 0,
      w: 38,
      h: 47,
      ax: 22,
      ay: 47
    },
    run3: {
      x: 444,
      y: 0,
      w: 36,
      h: 47,
      ax: 22,
      ay: 47
    },
    run4: {
      x: 481,
      y: 0,
      w: 33,
      h: 48,
      ax: 18,
      ay: 48
    },
    attack0: {
      x: 515,
      y: 0,
      w: 44,
      h: 48,
      ax: 18,
      ay: 48
    },
    attack1: {
      x: 560,
      y: 0,
      w: 46,
      h: 44,
      ax: 25,
      ay: 44
    },
    attack2: {
      x: 607,
      y: 0,
      w: 44,
      h: 48,
      ax: 26,
      ay: 48
    },
    attack3: {
      x: 652,
      y: 0,
      w: 50,
      h: 56,
      ax: 29,
      ay: 54
    },
    attack4: {
      x: 703,
      y: 0,
      w: 56,
      h: 46,
      ax: 35,
      ay: 46
    },
    cast0: {
      x: 760,
      y: 0,
      w: 33,
      h: 49,
      ax: 17,
      ay: 49
    },
    cast1: {
      x: 794,
      y: 0,
      w: 33,
      h: 46,
      ax: 18,
      ay: 46
    },
    hit0: {
      x: 828,
      y: 0,
      w: 38,
      h: 42,
      ax: 18,
      ay: 42
    },
    hit1: {
      x: 867,
      y: 0,
      w: 35,
      h: 45,
      ax: 16,
      ay: 45
    },
    hit2: {
      x: 903,
      y: 0,
      w: 41,
      h: 47,
      ax: 17,
      ay: 47
    },
    hit3: {
      x: 945,
      y: 0,
      w: 35,
      h: 44,
      ax: 17,
      ay: 44
    },
    hit4: {
      x: 981,
      y: 0,
      w: 31,
      h: 45,
      ax: 15,
      ay: 45
    },
    die0: {
      x: 1013,
      y: 0,
      w: 30,
      h: 43,
      ax: 13,
      ay: 43
    },
    die1: {
      x: 1044,
      y: 0,
      w: 51,
      h: 35,
      ax: 34,
      ay: 35
    },
    die2: {
      x: 1096,
      y: 0,
      w: 50,
      h: 32,
      ax: 34,
      ay: 32
    },
    die3: {
      x: 1147,
      y: 0,
      w: 56,
      h: 28,
      ax: 39,
      ay: 28
    },
    jump: {
      x: 1204,
      y: 0,
      w: 35,
      h: 44,
      ax: 20,
      ay: 44
    },
    fall: {
      x: 1240,
      y: 0,
      w: 34,
      h: 50,
      ax: 19,
      ay: 50
    },
    crouch: {
      x: 1275,
      y: 0,
      w: 34,
      h: 47,
      ax: 16,
      ay: 47
    },
    dash: {
      x: 1310,
      y: 0,
      w: 48,
      h: 47,
      ax: 30,
      ay: 46
    }
  },
  fxSheet: new URL("../../assets/sprites/astral-fxSheet.png", import.meta.url).href,
  fx: {
    sparkle: {
      w: 44,
      h: 53,
      add: !0,
      x: 0,
      y: 0
    },
    ring: {
      w: 49,
      h: 71,
      add: !0,
      x: 45,
      y: 0
    },
    compass: {
      w: 78,
      h: 85,
      add: !0,
      x: 95,
      y: 0
    },
    star: {
      w: 93,
      h: 91,
      add: !0,
      x: 174,
      y: 0
    },
    bigcircle: {
      w: 111,
      h: 119,
      add: !0,
      x: 268,
      y: 0
    },
    staff: {
      w: 59,
      h: 77,
      add: !1,
      x: 380,
      y: 0
    },
    compass_w: {
      w: 57,
      h: 63,
      add: !1,
      x: 440,
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
    thrust: "attack4",
    spin: "attack3",
    slamWind: "attack0",
    slam: "attack3",
    kick: "attack4",
    uppercut: "attack2",
    throw: "attack4",
    shootWind: "cast0",
    shoot: "attack4",
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
export {v as ASTRAL};
