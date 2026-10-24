// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const f = {
  sheet: new URL("../../assets/sprites/flora-sheet.png", import.meta.url).href,
  frames: {
    idle0: {
      x: 0,
      y: 0,
      w: 33,
      h: 51,
      ax: 20,
      ay: 51
    },
    idle1: {
      x: 34,
      y: 0,
      w: 33,
      h: 49,
      ax: 19,
      ay: 49
    },
    idle2: {
      x: 68,
      y: 0,
      w: 35,
      h: 51,
      ax: 20,
      ay: 51
    },
    idle3: {
      x: 104,
      y: 0,
      w: 34,
      h: 52,
      ax: 17,
      ay: 52
    },
    idle4: {
      x: 139,
      y: 0,
      w: 33,
      h: 51,
      ax: 17,
      ay: 51
    },
    run0: {
      x: 173,
      y: 0,
      w: 36,
      h: 48,
      ax: 21,
      ay: 48
    },
    run1: {
      x: 210,
      y: 0,
      w: 35,
      h: 48,
      ax: 20,
      ay: 49
    },
    run2: {
      x: 246,
      y: 0,
      w: 35,
      h: 49,
      ax: 19,
      ay: 48
    },
    run3: {
      x: 282,
      y: 0,
      w: 29,
      h: 47,
      ax: 15,
      ay: 49
    },
    run4: {
      x: 312,
      y: 0,
      w: 32,
      h: 47,
      ax: 17,
      ay: 48
    },
    attack0: {
      x: 345,
      y: 0,
      w: 34,
      h: 53,
      ax: 19,
      ay: 53
    },
    attack1: {
      x: 380,
      y: 0,
      w: 32,
      h: 46,
      ax: 15,
      ay: 46
    },
    cast0: {
      x: 413,
      y: 0,
      w: 36,
      h: 51,
      ax: 23,
      ay: 51
    },
    cast1: {
      x: 450,
      y: 0,
      w: 37,
      h: 53,
      ax: 20,
      ay: 53
    },
    hit0: {
      x: 488,
      y: 0,
      w: 31,
      h: 52,
      ax: 16,
      ay: 52
    },
    hit1: {
      x: 520,
      y: 0,
      w: 33,
      h: 52,
      ax: 20,
      ay: 52
    },
    hit2: {
      x: 554,
      y: 0,
      w: 32,
      h: 52,
      ax: 17,
      ay: 52
    },
    hit3: {
      x: 587,
      y: 0,
      w: 32,
      h: 52,
      ax: 19,
      ay: 52
    },
    hit4: {
      x: 620,
      y: 0,
      w: 30,
      h: 51,
      ax: 18,
      ay: 51
    },
    die0: {
      x: 651,
      y: 0,
      w: 33,
      h: 54,
      ax: 19,
      ay: 54
    },
    die1: {
      x: 685,
      y: 0,
      w: 51,
      h: 40,
      ax: 28,
      ay: 40
    },
    die2: {
      x: 737,
      y: 0,
      w: 54,
      h: 27,
      ax: 31,
      ay: 27
    },
    die3: {
      x: 792,
      y: 0,
      w: 57,
      h: 30,
      ax: 38,
      ay: 30
    },
    jump: {
      x: 850,
      y: 0,
      w: 35,
      h: 43,
      ax: 20,
      ay: 42
    },
    fall: {
      x: 886,
      y: 0,
      w: 32,
      h: 48,
      ax: 17,
      ay: 48
    },
    crouch: {
      x: 919,
      y: 0,
      w: 34,
      h: 46,
      ax: 20,
      ay: 46
    },
    dash: {
      x: 954,
      y: 0,
      w: 42,
      h: 49,
      ax: 26,
      ay: 49
    }
  },
  fxSheet: new URL("../../assets/sprites/flora-fxSheet.png", import.meta.url).href,
  fx: {
    bloom: {
      w: 80,
      h: 136,
      add: !0,
      x: 0,
      y: 0
    },
    burst: {
      w: 90,
      h: 104,
      add: !0,
      x: 81,
      y: 0
    },
    sigil: {
      w: 53,
      h: 61,
      add: !0,
      x: 172,
      y: 0
    },
    lotus: {
      w: 117,
      h: 126,
      add: !0,
      x: 226,
      y: 0
    },
    orb: {
      w: 30,
      h: 50,
      add: !0,
      x: 344,
      y: 0
    },
    crescent: {
      w: 68,
      h: 104,
      add: !0,
      x: 375,
      y: 0
    },
    big: {
      w: 116,
      h: 112,
      add: !0,
      x: 444,
      y: 0
    },
    staff: {
      w: 71,
      h: 69,
      add: !1,
      x: 561,
      y: 0
    },
    petal: {
      w: 56,
      h: 58,
      add: !0,
      x: 633,
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
export {f as FLORA};
