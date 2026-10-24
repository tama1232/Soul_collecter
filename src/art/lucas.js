// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const f = {
  sheet: new URL("../../assets/sprites/lucas-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 31,
      h: 51,
      ax: 16,
      ay: 51
    },
    idle1: {
      x: 32,
      y: 0,
      w: 32,
      h: 52,
      ax: 15,
      ay: 52
    },
    idle2: {
      x: 65,
      y: 0,
      w: 30,
      h: 50,
      ax: 16,
      ay: 50
    },
    idle3: {
      x: 96,
      y: 0,
      w: 29,
      h: 52,
      ax: 15,
      ay: 52
    },
    idle4: {
      x: 126,
      y: 0,
      w: 30,
      h: 51,
      ax: 15,
      ay: 51
    },
    walk0: {
      x: 157,
      y: 0,
      w: 32,
      h: 46,
      ax: 15,
      ay: 46
    },
    walk1: {
      x: 190,
      y: 0,
      w: 32,
      h: 51,
      ax: 18,
      ay: 51
    },
    walk2: {
      x: 223,
      y: 0,
      w: 29,
      h: 50,
      ax: 16,
      ay: 50
    },
    walk3: {
      x: 253,
      y: 0,
      w: 31,
      h: 50,
      ax: 16,
      ay: 50
    },
    walk4: {
      x: 285,
      y: 0,
      w: 31,
      h: 44,
      ax: 19,
      ay: 43
    },
    run0: {
      x: 317,
      y: 0,
      w: 34,
      h: 44,
      ax: 22,
      ay: 43
    },
    run1: {
      x: 352,
      y: 0,
      w: 35,
      h: 47,
      ax: 22,
      ay: 47
    },
    run2: {
      x: 388,
      y: 0,
      w: 34,
      h: 44,
      ax: 22,
      ay: 43
    },
    run3: {
      x: 423,
      y: 0,
      w: 29,
      h: 48,
      ax: 16,
      ay: 48
    },
    run4: {
      x: 453,
      y: 0,
      w: 30,
      h: 44,
      ax: 17,
      ay: 44
    },
    attack0: {
      x: 484,
      y: 0,
      w: 37,
      h: 56,
      ax: 23,
      ay: 56
    },
    attack1: {
      x: 522,
      y: 0,
      w: 73,
      h: 55,
      ax: 36,
      ay: 55
    },
    attack2: {
      x: 596,
      y: 0,
      w: 37,
      h: 54,
      ax: 16,
      ay: 54
    },
    attack3: {
      x: 634,
      y: 0,
      w: 47,
      h: 50,
      ax: 23,
      ay: 50
    },
    cast0: {
      x: 682,
      y: 0,
      w: 41,
      h: 54,
      ax: 21,
      ay: 54
    },
    cast1: {
      x: 724,
      y: 0,
      w: 44,
      h: 58,
      ax: 24,
      ay: 57
    },
    hit0: {
      x: 769,
      y: 0,
      w: 36,
      h: 48,
      ax: 19,
      ay: 48
    },
    hit1: {
      x: 806,
      y: 0,
      w: 36,
      h: 46,
      ax: 19,
      ay: 46
    },
    hit2: {
      x: 843,
      y: 0,
      w: 39,
      h: 48,
      ax: 21,
      ay: 48
    },
    hit3: {
      x: 883,
      y: 0,
      w: 35,
      h: 48,
      ax: 19,
      ay: 48
    },
    hit4: {
      x: 919,
      y: 0,
      w: 30,
      h: 43,
      ax: 15,
      ay: 43
    },
    die0: {
      x: 950,
      y: 0,
      w: 33,
      h: 46,
      ax: 18,
      ay: 46
    },
    die1: {
      x: 984,
      y: 0,
      w: 57,
      h: 38,
      ax: 34,
      ay: 38
    },
    die2: {
      x: 1042,
      y: 0,
      w: 52,
      h: 28,
      ax: 29,
      ay: 28
    },
    die3: {
      x: 1095,
      y: 0,
      w: 60,
      h: 27,
      ax: 41,
      ay: 27
    },
    jump: {
      x: 1156,
      y: 0,
      w: 34,
      h: 42,
      ax: 22,
      ay: 41
    },
    fall: {
      x: 1191,
      y: 0,
      w: 30,
      h: 45,
      ax: 17,
      ay: 45
    },
    crouch: {
      x: 1222,
      y: 0,
      w: 33,
      h: 45,
      ax: 16,
      ay: 45
    },
    dash: {
      x: 1256,
      y: 0,
      w: 47,
      h: 44,
      ax: 32,
      ay: 41
    }
  },
  fxSheet: new URL("../../assets/sprites/lucas-fxSheet.png", import.meta.url).href,
  fx: {
    compass: {
      w: 20,
      h: 38,
      add: !0,
      x: 0,
      y: 0
    },
    spark: {
      w: 34,
      h: 57,
      add: !0,
      x: 21,
      y: 0
    },
    whale: {
      w: 91,
      h: 75,
      add: !0,
      x: 56,
      y: 0
    },
    circle: {
      w: 74,
      h: 85,
      add: !0,
      x: 148,
      y: 0
    },
    bigstar: {
      w: 90,
      h: 98,
      add: !0,
      x: 223,
      y: 0
    },
    book: {
      w: 46,
      h: 51,
      add: !1,
      x: 314,
      y: 0
    },
    compass_w: {
      w: 35,
      h: 47,
      add: !1,
      x: 361,
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
    spin: "attack1",
    slamWind: "cast0",
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
export {f as LUCAS};
