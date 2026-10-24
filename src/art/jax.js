// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
const d = {
  sheet: new URL("../../assets/sprites/jax-sheet.png", import.meta.url).href,
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
      w: 32,
      h: 51,
      ax: 19,
      ay: 51
    },
    idle2: {
      x: 67,
      y: 0,
      w: 31,
      h: 54,
      ax: 18,
      ay: 54
    },
    idle3: {
      x: 99,
      y: 0,
      w: 31,
      h: 51,
      ax: 18,
      ay: 51
    },
    idle4: {
      x: 131,
      y: 0,
      w: 34,
      h: 51,
      ax: 18,
      ay: 51
    },
    run0: {
      x: 166,
      y: 0,
      w: 30,
      h: 48,
      ax: 18,
      ay: 48
    },
    run1: {
      x: 197,
      y: 0,
      w: 32,
      h: 46,
      ax: 19,
      ay: 49
    },
    run2: {
      x: 230,
      y: 0,
      w: 34,
      h: 47,
      ax: 21,
      ay: 48
    },
    run3: {
      x: 265,
      y: 0,
      w: 31,
      h: 48,
      ax: 19,
      ay: 49
    },
    run4: {
      x: 297,
      y: 0,
      w: 32,
      h: 48,
      ax: 19,
      ay: 48
    },
    attack0: {
      x: 330,
      y: 0,
      w: 38,
      h: 49,
      ax: 25,
      ay: 49
    },
    attack1: {
      x: 369,
      y: 0,
      w: 49,
      h: 49,
      ax: 25,
      ay: 49
    },
    attack3: {
      x: 419,
      y: 0,
      w: 37,
      h: 50,
      ax: 23,
      ay: 47
    },
    cast0: {
      x: 457,
      y: 0,
      w: 33,
      h: 48,
      ax: 21,
      ay: 48
    },
    cast1: {
      x: 491,
      y: 0,
      w: 45,
      h: 50,
      ax: 26,
      ay: 50
    },
    hit0: {
      x: 537,
      y: 0,
      w: 39,
      h: 51,
      ax: 19,
      ay: 51
    },
    hit1: {
      x: 577,
      y: 0,
      w: 35,
      h: 52,
      ax: 16,
      ay: 52
    },
    hit2: {
      x: 613,
      y: 0,
      w: 39,
      h: 52,
      ax: 17,
      ay: 52
    },
    hit3: {
      x: 653,
      y: 0,
      w: 37,
      h: 52,
      ax: 19,
      ay: 52
    },
    hit4: {
      x: 691,
      y: 0,
      w: 40,
      h: 46,
      ax: 16,
      ay: 46
    },
    die0: {
      x: 732,
      y: 0,
      w: 34,
      h: 52,
      ax: 18,
      ay: 52
    },
    die1: {
      x: 767,
      y: 0,
      w: 41,
      h: 34,
      ax: 23,
      ay: 34
    },
    die2: {
      x: 809,
      y: 0,
      w: 51,
      h: 28,
      ax: 32,
      ay: 28
    },
    die3: {
      x: 861,
      y: 0,
      w: 59,
      h: 28,
      ax: 36,
      ay: 28
    },
    jump: {
      x: 921,
      y: 0,
      w: 32,
      h: 42,
      ax: 19,
      ay: 42
    },
    fall: {
      x: 954,
      y: 0,
      w: 33,
      h: 51,
      ax: 20,
      ay: 51
    },
    crouch: {
      x: 988,
      y: 0,
      w: 34,
      h: 45,
      ax: 20,
      ay: 45
    },
    dash: {
      x: 1023,
      y: 0,
      w: 44,
      h: 47,
      ax: 29,
      ay: 47
    }
  },
  fxSheet: new URL("../../assets/sprites/jax-fxSheet.png", import.meta.url).href,
  fx: {
    pillar: {
      w: 99,
      h: 137,
      add: !0,
      x: 0,
      y: 0
    },
    sigil: {
      w: 112,
      h: 130,
      add: !0,
      x: 100,
      y: 0
    },
    mark: {
      w: 51,
      h: 49,
      add: !0,
      x: 213,
      y: 0
    },
    burst: {
      w: 71,
      h: 95,
      add: !0,
      x: 265,
      y: 0
    },
    punch: {
      w: 96,
      h: 100,
      add: !0,
      x: 337,
      y: 0
    },
    gauntlet: {
      w: 57,
      h: 62,
      add: !1,
      x: 434,
      y: 0
    },
    emblem: {
      w: 54,
      h: 60,
      add: !0,
      x: 492,
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
    slashDown: "attack3",
    windLow: "attack0",
    slashUp: "cast1",
    thrustWind: "attack1",
    thrust: "attack3",
    spin: "attack1",
    slamWind: "cast1",
    slam: "attack3",
    kick: "attack0",
    uppercut: "cast1",
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
export {d as JAX};
