import {getProbabilities} from './config/live-rules.js';
import {EIGHT_HERO_ID, HIDDEN_BOSS_ID, ALL_CRESTS, rushCycle, cycleMultiplier, rollRelicChoices, capRelics, classifyRelics, makeEightHero, makeHiddenBoss, EXTRA_MILESTONES} from './config/expansion.js';
import {weekStart, weekKey} from './systems/weekly.js';
import {ECONOMY,ECONOMY_VERSION} from './config/economy.js';
import {rollRarity} from './config/economy.js';
import {heroLevelCost, weaponEnhanceCost, skillMasteryCost, awakeningCost, permanentUpgrade, craftCost, selectBossTrialRoute} from "./config/economy.js";
import {applyStoryContent} from "./config/content.js";
const _0x26c9b9 = {
  all: !1
};
const _0x1f277b = {
  left: "왼쪽",
  right: "오른쪽",
  up: "위",
  down: "아래",
  jump: "점프",
  attack: "기본 공격",
  dash: "대시",
  skill1: "스킬 1",
  skill2: "스킬 2",
  ult: "궁극기 (★6·★7)",
  swap: "교대",
  interact: "상호작용",
  item: "소모 아이템",
  build: "빌드 확인",
  pause: "일시정지"
};
const _0x53c4ac = {
  keys: ["KeyA"],
  pad: [14]
};
const _0x1dc594 = {
  keys: ["KeyD"],
  pad: [15]
};
const _0x5b55cc = {
  keys: ["KeyW"],
  pad: [12]
};
const _0x58ce98 = {
  keys: ["KeyS"],
  pad: [13]
};
const _0x5aa439 = {
  keys: ["KeyW", "Space"],
  pad: [0]
};
const _0x55dba9 = {
  keys: ["KeyJ"],
  pad: [2]
};
const _0x205b56 = {
  keys: ["ShiftLeft", "ShiftRight"],
  pad: [1, 7]
};
const _0x12dc87 = {
  keys: ["KeyE"],
  pad: [4]
};
const _0x2de4ae = {
  keys: ["KeyQ"],
  pad: [5]
};
const _0x304fac = {
  keys: ["KeyX"],
  pad: [10]
};
const _0x4196af = {
  keys: ["KeyG"],
  pad: [3]
};
const _0x323e40 = {
  keys: ["KeyF"],
  pad: [11]
};
const _0x111930 = {
  keys: ["KeyK"],
  pad: [6]
};
const _0x74167d = {
  keys: ["Tab"],
  pad: [8]
};
const _0x1ea333 = {
  keys: ["Escape"],
  pad: [9]
};
const _0x33356c = {
  left: _0x53c4ac,
  right: _0x1dc594,
  up: _0x5b55cc,
  down: _0x58ce98,
  jump: _0x5aa439,
  attack: _0x55dba9,
  dash: _0x205b56,
  skill1: _0x12dc87,
  skill2: _0x2de4ae,
  ult: _0x304fac,
  swap: _0x4196af,
  interact: _0x323e40,
  item: _0x111930,
  build: _0x74167d,
  pause: _0x1ea333
};
const _0x3f7792 = {
  keys: ["ArrowLeft"],
  pad: [14]
};
const _0x55d3aa = {
  keys: ["ArrowRight"],
  pad: [15]
};
const _0x4cc1cb = {
  keys: ["ArrowUp"],
  pad: [12]
};
const _0x5787bb = {
  keys: ["ArrowDown"],
  pad: [13]
};
const _0x1d3198 = {
  keys: ["KeyC", "Space"],
  pad: [0]
};
const _0x18f387 = {
  keys: ["KeyX"],
  pad: [2]
};
const _0x3bce02 = {
  keys: ["KeyZ", "ShiftLeft"],
  pad: [1, 7]
};
const _0x1c4406 = {
  keys: ["KeyA"],
  pad: [4]
};
const _0x5dacf9 = {
  keys: ["KeyS"],
  pad: [5]
};
const _0x41df65 = {
  keys: ["KeyV"],
  pad: [10]
};
const _0x4dcffa = {
  keys: ["KeyD"],
  pad: [3]
};
const _0xd7cba = {
  keys: ["KeyF"],
  pad: [11]
};
const _0x20f4ab = {
  keys: ["KeyQ"],
  pad: [6]
};
const _0x52ae4d = {
  keys: ["Tab"],
  pad: [8]
};
const _0x30e165 = {
  keys: ["Escape"],
  pad: [9]
};
const _0x417728 = {
  left: _0x3f7792,
  right: _0x55d3aa,
  up: _0x4cc1cb,
  down: _0x5787bb,
  jump: _0x1d3198,
  attack: _0x18f387,
  dash: _0x3bce02,
  skill1: _0x1c4406,
  skill2: _0x5dacf9,
  ult: _0x41df65,
  swap: _0x4dcffa,
  interact: _0xd7cba,
  item: _0x20f4ab,
  build: _0x52ae4d,
  pause: _0x30e165
};
const te = _0x26c9b9, ra = ["left", "right", "up", "down", "jump", "attack", "dash", "skill1", "skill2", "ult", "swap", "interact", "item", "build", "pause"], Or = _0x1f277b, F = _0x33356c, Fr = _0x417728;
function J(_0x351acc) {
  const _0x2ab995 = {};
  for (const _0x45a31b of ra) _0x2ab995[_0x45a31b] = {
    "keys": [..._0x351acc[_0x45a31b]?.keys ?? F[_0x45a31b].keys],
    "pad": [..._0x351acc[_0x45a31b]?.pad ?? F[_0x45a31b].pad]
  };
  return _0x2ab995;
}
const _0xf72424 = {
  ArrowLeft: "←",
  ArrowRight: "→",
  ArrowUp: "↑",
  ArrowDown: "↓",
  Space: "Space",
  Escape: "Esc",
  Tab: "Tab",
  Enter: "Enter",
  ShiftLeft: "Shift",
  ShiftRight: "R-Shift",
  ControlLeft: "L-Ctrl",
  ControlRight: "R-Ctrl",
  AltLeft: "L-Alt",
  AltRight: "R-Alt",
  Backspace: "Bksp",
  Comma: ",",
  Period: ".",
  Slash: "/",
  Semicolon: ";",
  Quote: "'",
  BracketLeft: "[",
  BracketRight: "]",
  Minus: "-",
  Equal: "=",
  Backquote: "`",
  Backslash: "\\"
};
const je = _0xf72424, oa = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "Back", "Start", "LS", "RS", "D↑", "D↓", "D←", "D→", "Home"];
function la(_0x1a1736) {
  const _0x4b1e75 = {
    vZnIP: function (_0x1e7ae2, _0x2a14b4) {
      return _0x1e7ae2 + _0x2a14b4;
    }
  };
  const _0x1e4832 = _0x4b1e75;
  return je[_0x1a1736] ? je[_0x1a1736] : _0x1a1736.startsWith("Key") ? _0x1a1736.slice(3) : _0x1a1736.startsWith("Digit") ? _0x1a1736.slice(5) : _0x1a1736.startsWith("Numpad") ? "Num" + _0x1a1736.slice(6) : _0x1a1736;
}
function ia(_0x5c0acd) {
  return oa[_0x5c0acd] ?? "B" + _0x5c0acd;
}
const _0xe7f723 = {
  keys: ["Enter", "NumpadEnter"],
  pad: [0]
};
const _0x2e23c8 = {
  keys: ["Escape", "Backspace"],
  pad: [1]
};
const _0x1047e2 = {
  keys: ["ArrowLeft"],
  pad: [14]
};
const _0x4f178a = {
  keys: ["ArrowRight"],
  pad: [15]
};
const _0x22e848 = {
  keys: ["ArrowUp"],
  pad: [12]
};
const _0xe9c7d7 = {
  keys: ["ArrowDown"],
  pad: [13]
};
const _0x1faa88 = {
  keys: ["PageUp"],
  pad: [4]
};
const _0x1ed5b1 = {
  keys: ["PageDown"],
  pad: [5]
};
const _0x3c2066 = {
  ok: _0xe7f723,
  back: _0x2e23c8,
  mleft: _0x1047e2,
  mright: _0x4f178a,
  mup: _0x22e848,
  mdown: _0xe9c7d7,
  tabL: _0x1faa88,
  tabR: _0x1ed5b1
};
const ca = _0x3c2066;
class Ur {
  bindings = J(F);
  keys = new Set();
  keyLatch = new Set();
  prevKeys = new Set();
  curKeys = new Set();
  padButtons = [];
  prevPad = [];
  axisX = 0;
  axisY = 0;
  prevAxisX = 0;
  prevAxisY = 0;
  lastDevice = "kb";
  captureHandler = null;
  repeatTimers = new Map();
  anyPressedFlag = !1;
  mouseClicked = !1;
  touch = new Set();
  touchTap = new Set();
  curTouch = new Set();
  prevTouch = new Set();
  wheel = 0;
  wheelAcc = 0;
  constructor(_0x55a03a) {
    const _0x542b5a = {
      "pPzOA": "ArrowDown",
      "UczLy": "ArrowLeft",
      "rCgPG": "ArrowRight",
      "FzZXK": function (_0x1eed24, _0xce72e3, _0x28dcc4) {
        return _0x1eed24(_0xce72e3, _0x28dcc4);
      },
      "XwiUl": "wheel",
      "yHzvl": "mousedown"
    }, _0x5e0cca = {};
    _0x5e0cca.passive = !1;
    (_0x55a03a.addEventListener(_0x542b5a.XwiUl, _0xad3756 => {
      (this.wheelAcc += Math.sign(_0xad3756.deltaY), _0xad3756.preventDefault());
    }, _0x5e0cca), window.addEventListener("keydown", _0x35fced => {
      const _0x586afd = _0x35fced.target;
      if (!(_0x586afd && (_0x586afd.tagName === "INPUT" || _0x586afd.tagName === "TEXTAREA"))) {
        if ((["Tab", "Space", "ArrowUp", _0x542b5a.pPzOA, _0x542b5a.UczLy, _0x542b5a.rCgPG, "Backquote"].includes(_0x35fced.code) && _0x35fced.preventDefault(), this.lastDevice = "kb", this.captureHandler)) {
          _0x35fced.preventDefault();
          const _0x40a76a = this.captureHandler;
          (this.captureHandler = null, _0x40a76a(_0x35fced.code, null));
          return;
        }
        (this.keys.has(_0x35fced.code) || this.keyLatch.add(_0x35fced.code), this.keys.add(_0x35fced.code));
      }
    }), window.addEventListener("keyup", _0x3be417 => {
      this.keys.delete(_0x3be417.code);
    }), window.addEventListener("blur", () => this.keys.clear()), _0x55a03a.addEventListener(_0x542b5a.yHzvl, () => {
      (this.mouseClicked = !0, _0x55a03a.focus());
    }));
  }
  poll() {
    const _0xcc8e59 = {
      qWznY: function (_0x419308, _0x85a06d) {
        return _0x419308 > _0x85a06d;
      },
      KsOxY: function (_0x11e32d, _0x4dd1cc) {
        return _0x11e32d < _0x4dd1cc;
      }
    };
    const _0x1d1022 = _0xcc8e59;
    (this.wheel = this.wheelAcc, this.wheelAcc = 0, this.curKeys = new Set([...this.keys, ...this.keyLatch]), this.keyLatch.clear(), this.curTouch = new Set([...this.touch, ...this.touchTap]), this.touchTap.clear());
    const _0x593271 = typeof navigator < "u" && navigator.getGamepads ? navigator.getGamepads() : [], _0x497d4f = [];
    let _0x230f1d = 0, _0x5b2eab = 0;
    for (const _0x224aad of _0x593271) _0x224aad && (_0x224aad.buttons.forEach((_0x46d616, _0x222e45) => {
      (_0x46d616.pressed || _0x46d616.value > 0.5) && (_0x497d4f[_0x222e45] = !0);
    }), Math.abs(_0x224aad.axes[0] ?? 0) > 0.45 && (_0x230f1d = Math.sign(_0x224aad.axes[0])), Math.abs(_0x224aad.axes[1] ?? 0) > 0.55 && (_0x5b2eab = Math.sign(_0x224aad.axes[1])));
    if (((_0x497d4f.some(_0x21c01f => _0x21c01f) || _0x230f1d || _0x5b2eab) && (this.lastDevice = "pad"), this.captureHandler)) {
      for (let _0x1c4e5c = 0; _0x1c4e5c < _0x497d4f.length; _0x1c4e5c++) if (_0x497d4f[_0x1c4e5c] && !this.padButtons[_0x1c4e5c]) {
        const _0x33cbcc = this.captureHandler;
        (this.captureHandler = null, _0x33cbcc(null, _0x1c4e5c));
        break;
      }
    }
    (this.prevPad = this.padButtons, this.padButtons = _0x497d4f, this.prevAxisX = this.axisX, this.prevAxisY = this.axisY, this.axisX = _0x230f1d, this.axisY = _0x5b2eab, this.anyPressedFlag = this.computeAnyPressed());
  }
  endStep() {
    (this.wheel = 0, this.prevKeys = new Set(this.curKeys), this.prevTouch = new Set(this.curTouch), this.mouseClicked = !1);
  }
  computeAnyPressed() {
    for (const _0x48e22e of this.curKeys) if (!this.prevKeys.has(_0x48e22e)) return !0;
    for (let _0x32f320 = 0; _0x32f320 < this.padButtons.length; _0x32f320++) if (this.padButtons[_0x32f320] && !this.prevPad[_0x32f320]) return !0;
    for (const _0x59ba94 of this.curTouch) if (!this.prevTouch.has(_0x59ba94)) return !0;
    return !1;
  }
  axisHeld(_0x38c7e1, _0x218936 = !1) {
    const _0x1bbfbc = {
      xYaPp: function (_0x59ecf7, _0x37eb9d) {
        return _0x59ecf7 === _0x37eb9d;
      },
      FsFrn: "down"
    };
    _0x1bbfbc.ySWxW = function (_0x35681d, _0x5483f6) {
      return _0x35681d > _0x5483f6;
    };
    const _0x23779d = _0x1bbfbc, _0xe4b537 = _0x218936 ? this.prevAxisX : this.axisX, _0x3e1b24 = _0x218936 ? this.prevAxisY : this.axisY;
    return _0x38c7e1 === "left" ? _0xe4b537 < 0 : _0x38c7e1 === "right" ? _0xe4b537 > 0 : _0x38c7e1 === "up" ? _0x3e1b24 < 0 : _0x38c7e1 === _0x23779d.FsFrn ? _0x23779d.ySWxW(_0x3e1b24, 0) : !1;
  }
  bindHeld(_0x908e85, _0x27f1c1) {
    const _0x5d49b3 = _0x27f1c1 ? this.prevKeys : this.curKeys, _0x438a86 = _0x27f1c1 ? this.prevPad : this.padButtons;
    for (const _0x4ddf34 of _0x908e85.keys) if (_0x5d49b3.has(_0x4ddf34)) return !0;
    for (const _0xdc2ada of _0x908e85.pad) if (_0x438a86[_0xdc2ada]) return !0;
    return !1;
  }
  act(_0x476513, _0xbf3956 = !1) {
    return this.bindHeld(this.bindings[_0x476513], _0xbf3956) || this.axisHeld(_0x476513, _0xbf3956) || (_0xbf3956 ? this.prevTouch : this.curTouch).has(_0x476513);
  }
  held(_0xe296e6) {
    return this.act(_0xe296e6);
  }
  pressed(_0x1a997c) {
    return this.act(_0x1a997c) && !this.act(_0x1a997c, !0);
  }
  released(_0x1fe633) {
    return !this.act(_0x1fe633) && this.act(_0x1fe633, !0);
  }
  raw(_0x314a22) {
    return this.curKeys.has(_0x314a22) && !this.prevKeys.has(_0x314a22);
  }
  rawHeld(_0x32b899) {
    return this.curKeys.has(_0x32b899);
  }
  menuHeld(_0x28d5c7, _0x5d654e = !1) {
    const _0x2d0e00 = {
      hHjWf: "right",
      szneb: function (_0xd1fd37, _0x11c03e) {
        return _0xd1fd37 === _0x11c03e;
      },
      ueGkf: "interact",
      aOagm: function (_0x3201a9, _0x112fcb) {
        return _0x3201a9 === _0x112fcb;
      },
      whkPC: "tabL",
      OnyDM: "tabR",
      xFMFB: "pause"
    };
    const _0x574bfa = _0x2d0e00;
    if (this.bindHeld(ca[_0x28d5c7], _0x5d654e)) return !0;
    const _0xb97142 = _0x5d654e ? this.prevAxisX : this.axisX, _0x5b9f17 = _0x5d654e ? this.prevAxisY : this.axisY, _0x575ff5 = _0x5d654e ? this.prevTouch : this.curTouch;
    if (_0x28d5c7 === "mleft") return _0xb97142 < 0 || this.bindHeld(this.bindings.left, _0x5d654e) || _0x575ff5.has("left");
    if (_0x28d5c7 === "mright") return _0xb97142 > 0 || this.bindHeld(this.bindings.right, _0x5d654e) || _0x575ff5.has(_0x574bfa.hHjWf);
    if (_0x28d5c7 === "mup") return _0x5b9f17 < 0 || this.bindHeld(this.bindings.up, _0x5d654e) || _0x575ff5.has("up");
    if (_0x28d5c7 === "mdown") return _0x5b9f17 > 0 || this.bindHeld(this.bindings.down, _0x5d654e) || _0x575ff5.has("down");
    if (_0x28d5c7 === "ok") {
      const _0x1b191e = new Set([...this.bindings.left.keys, ...this.bindings.right.keys, ...this.bindings.up.keys, ...this.bindings.down.keys]), _0x573eba = {
        "keys": this.bindings.jump.keys.filter(_0x5233e9 => !_0x1b191e.has(_0x5233e9)),
        "pad": this.bindings.jump.pad
      };
      return this.bindHeld(this.bindings.attack, _0x5d654e) || this.bindHeld(_0x573eba, _0x5d654e) || this.bindHeld(this.bindings.interact, _0x5d654e) || _0x575ff5.has("attack") || _0x575ff5.has("jump") || _0x575ff5.has(_0x574bfa.ueGkf);
    }
    return _0x28d5c7 === _0x574bfa.whkPC ? this.bindHeld(this.bindings.skill2, _0x5d654e) || _0x575ff5.has("skill2") : _0x28d5c7 === _0x574bfa.OnyDM ? this.bindHeld(this.bindings.skill1, _0x5d654e) || _0x575ff5.has("skill1") : _0x28d5c7 === "back" ? this.bindHeld(this.bindings.pause, _0x5d654e) || this.bindHeld({
      "keys": [],
      "pad": this.bindings.dash.pad
    }, _0x5d654e) || _0x575ff5.has(_0x574bfa.xFMFB) || _0x575ff5.has("dash") : !1;
  }
  menu(_0x3cbeeb) {
    const _0x23cf83 = {
      kHJXh: function (_0x1c966f, _0x41bc20) {
        return _0x1c966f === _0x41bc20;
      },
      UCHHW: "mup",
      SASPB: "mdown",
      cTPBn: function (_0x56bdc7, _0x2403ee) {
        return _0x56bdc7 - _0x2403ee;
      },
      zPJkm: function (_0x43fdc8, _0xa8765) {
        return _0x43fdc8 <= _0xa8765;
      }
    };
    const _0x45c82d = _0x23cf83;
    if (_0x3cbeeb === "mup" && this.wheel < 0 || _0x3cbeeb === "mdown" && this.wheel > 0) return !0;
    const _0x58e59d = this.menuHeld(_0x3cbeeb), _0x23e907 = this.menuHeld(_0x3cbeeb, !0);
    if (_0x58e59d && !_0x23e907) return (this.repeatTimers.set(_0x3cbeeb, 18), !0);
    if (_0x58e59d && (_0x3cbeeb === "mleft" || _0x3cbeeb === "mright" || _0x3cbeeb === _0x45c82d.UCHHW || _0x3cbeeb === _0x45c82d.SASPB)) {
      const _0xcab9c4 = (this.repeatTimers.get(_0x3cbeeb) ?? 18) - 1;
      if (_0xcab9c4 <= 0) return (this.repeatTimers.set(_0x3cbeeb, 5), !0);
      this.repeatTimers.set(_0x3cbeeb, _0xcab9c4);
    }
    return !1;
  }
  label(_0x40e13c) {
    const _0x38e056 = this.bindings[_0x40e13c];
    return this.lastDevice === "pad" && _0x38e056.pad.length ? ia(_0x38e056.pad[0]) : _0x38e056.keys.length ? la(_0x38e056.keys[0]) : "-";
  }
}
const _0x4673bc = {
  rate8: 0.00003,
  rate7: 0.0003,
  rate6: 0.003,
  rate5: 0.03,
  rate4: 0.14,
  hardPity: 60,
  pickupRate5: 0.5,
  weaponTheme7: 0.5,
  pickupRate4: 0.5,
  costSingle: 160,
  costTen: 1600,
  rotationMin: 30,
  sixRate7: 0.05
};
const _0x1fd542 = {
  name: "영웅의 부름",
  desc: "모든 영웅이 등장하는 상시 계약 배너"
};
const _0x48759f = {
  name: "사자의 무기고",
  desc: "모든 무기가 등장하는 상시 무기 배너"
};
const _0xca862c = {
  name: "별의 인도",
  desc: "픽업 영웅의 등장 확률 대폭 상승 · 30분마다 교체"
};
const _0x5919ab = {
  name: "별의 나침반",
  desc: "★6 이상 확정 · 해금 전 ★6 95% · ★7 5% / 해금 후 ★6 94.9% · ★7 5% · ★8 0.1% · 별의 나침반 1개로 1회"
};
const _0x4acd3d = {
  name: "테마 계약",
  desc: "★7이 나오면 테마 ★7, ★6이 나오면 테마 ★6 3명 중 하나 · 30분마다 교체"
};
const _0x35a137 = {
  char: _0x1fd542,
  weapon: _0x48759f,
  pickup: _0xca862c,
  six: _0x5919ab,
  theme: _0x4acd3d
};
const definition_starway = {
  id: "starway",
  name: "별의 항로",
  desc: "별을 따라 걷는 자들",
  r7: "caelus",
  r6: ["solen", "lucas", "vega"],
  col: "#a8c0ff"
};
const definition_sun = {
  id: "sun",
  name: "타오르는 태양",
  desc: "불꽃과 빛을 이어받은 자들",
  r7: "ashen",
  r6: ["aurel", "luciel", "jax"],
  col: "#ff8050"
};
const definition_abyss = {
  id: "abyss",
  name: "깊은 심연",
  desc: "그림자 속을 걷는 자들",
  r7: "baekya",
  r6: ["lumien", "enoch", "heukwol"],
  col: "#a080ff"
};
const definition_border = {
  id: "border",
  name: "별의 경계",
  desc: "경계 너머의 별빛",
  r7: "astral",
  r6: ["flora", "arien", "gambler"],
  col: "#c8b8ff"
};
const definition_taegeuk = {
  id: "taegeuk",
  name: "태극의 화살",
  desc: "별을 쫓아 시위를 당기는 자들",
  r7: "hanbyeol",
  r6: ["arien", "vega", "elin"],
  col: "#ff6070"
};
const M = _0x4673bc, X = {}, da = [[7, M.rate7], [6, M.rate6], [5, M.rate5], [4, M.rate4], [3, 1 - M.rate7 - M.rate6 - M.rate5 - M.rate4]], Pr = _0x35a137, zr = [definition_starway, definition_sun, definition_abyss, definition_border, definition_taegeuk], P = () => ({
  "since5": 0,
  "since4": 0,
  "guaranteed": !1,
  "total": 0
});
function na(pity, random, guaranteeFour = false, unlocked = false) {
  return rollRarity(pity, random, guaranteeFour, unlocked);
}
function fa(_0x53cec6, _0x3e0b85, _0x589609, _0x3ead53 = !1) {
  const _0x18c65f = {
    "DQXiS": "pickup",
    "ZqWBx": function (_0x5921bb, _0x3e486c) {
      return _0x5921bb === _0x3e486c;
    },
    "iRoWy": function (_0x472be3) {
      return _0x472be3();
    },
    "iFcBU": function (_0x95b615, _0x52995c) {
      return _0x95b615 === _0x52995c;
    }
  };
  const _0xfcef89 = _0x3e0b85.since5 + 1;
  let _0xb111f2 = na(_0x3e0b85, _0x589609, _0x3ead53, _0x53cec6.eightUnlocked === true);
  for (; _0xb111f2 > 3 && !_0x53cec6.items.some(_0xce29e5 => _0xce29e5.rarity === _0xb111f2); ) _0xb111f2 = _0xb111f2 - 1;
  let _0x1cd96c = _0x53cec6.items.filter(_0x145de8 => _0x145de8.rarity === _0xb111f2), _0x534417 = !1;
  if (_0x53cec6.kind === _0x18c65f.DQXiS && _0xb111f2 === 5 && _0x53cec6.pickup5?.length) {
    if (_0x589609() < M.pickupRate5) (_0x1cd96c = _0x1cd96c.filter(_0x2bc98e => _0x53cec6.pickup5.includes(_0x2bc98e.id)), _0x534417 = !0); else {
      const _0x308a6e = _0x1cd96c.filter(_0x31359d => !_0x53cec6.pickup5.includes(_0x31359d.id));
      _0x308a6e.length ? _0x1cd96c = _0x308a6e : _0x534417 = !0;
    }
  } else _0x53cec6.kind === "pickup" && _0xb111f2 === 4 && _0x53cec6.pickup4?.length && _0x589609() < M.pickupRate4 && (_0x1cd96c = _0x1cd96c.filter(_0x3e7259 => _0x53cec6.pickup4.includes(_0x3e7259.id)), _0x534417 = !0);
  if (_0x53cec6.kind === "theme" && (_0xb111f2 === 7 && _0x53cec6.theme7?.length || _0xb111f2 === 6 && _0x53cec6.theme6?.length)) {
    const _0x110198 = _0xb111f2 === 7 ? _0x53cec6.theme7 : _0x53cec6.theme6, _0x4e85d3 = _0x1cd96c.filter(_0x223dcb => _0x110198.includes(_0x223dcb.id));
    _0x4e85d3.length && (_0x1cd96c = _0x4e85d3, _0x534417 = !0);
  }
  if (_0x53cec6.kind === "weapon" && _0xb111f2 === 7 && _0x53cec6.feature7?.length) {
    const _0x2e535f = _0x1cd96c.filter(_0xdfe339 => _0x53cec6.feature7.includes(_0xdfe339.id)), _0x1a1a8d = _0x1cd96c.filter(_0x417e8f => !_0x53cec6.feature7.includes(_0x417e8f.id));
    _0x2e535f.length && (_0x589609() < getProbabilities().weaponPickup || !_0x1a1a8d.length) ? (_0x1cd96c = _0x2e535f, _0x534417 = !0) : _0x1a1a8d.length && (_0x1cd96c = _0x1a1a8d);
  }
  return (_0x1cd96c.length || (_0x1cd96c = _0x53cec6.items.filter(_0x1d8aa4 => _0x1d8aa4.rarity === _0xb111f2)), {
    "id": ma(_0x1cd96c, _0x589609).id,
    "rarity": _0xb111f2,
    "pickup": _0x534417,
    "pityAt": _0xfcef89
  });
}
function ma(_0x43207c, _0x145f3f) {
  const _0xe5dd8a = {
    vSTJG: function (_0x3e286d, _0x2e04ef) {
      return _0x3e286d * _0x2e04ef;
    },
    GDDEk: function (_0xcb59da, _0x37fc7c) {
      return _0xcb59da < _0x37fc7c;
    }
  };
  const _0x5d66ee = _0xe5dd8a, _0x2655c7 = _0x43207c.filter(_0x5c6922 => X[_0x5c6922.id] !== void 0), _0x4175b1 = _0x43207c.filter(_0x192de4 => X[_0x192de4.id] === void 0);
  if (!_0x2655c7.length || !_0x4175b1.length) return _0x43207c[Math.floor(_0x145f3f() * _0x43207c.length)];
  let _0x10c94b = _0x145f3f();
  for (const _0xf3dac6 of _0x2655c7) {
    if (_0x10c94b < X[_0xf3dac6.id]) return _0xf3dac6;
    _0x10c94b -= X[_0xf3dac6.id];
  }
  return _0x4175b1[Math.floor(_0x145f3f() * _0x4175b1.length)];
}
function Lr(_0x2caeae, _0x2aa376, _0x246cd5, _0x31c4a1, _0xf98b3 = !1) {
  const _0x33177d = {
    "ORxnz": function (_0x579602, _0x38ccc1, _0x44c7e7, _0x2c59c4, _0x2aeeb8) {
      return _0x579602(_0x38ccc1, _0x44c7e7, _0x2c59c4, _0x2aeeb8);
    }
  }, _0x2d91d3 = [];
  for (let _0x5ab715 = 0; _0x5ab715 < _0x31c4a1; _0x5ab715++) {
    const _0x4f61ec = _0xf98b3 && _0x5ab715 === _0x31c4a1 - 1 && !_0x2d91d3.some(_0x2f9029 => _0x2f9029.rarity >= 4);
    _0x2d91d3.push(fa(_0x2caeae, _0x2aa376, _0x246cd5, _0x4f61ec));
  }
  return _0x2d91d3;
}
function l(_0x11ee00) {
  const _0x931620 = {
    XRdzJ: function (_0x3807db, _0x42cc4d) {
      return _0x3807db - _0x42cc4d;
    }
  };
  const _0x34a5c4 = _0x931620;
  const _0x3378da = [{
    "t": Math.max(0, _0x11ee00.t - 2),
    "k": "sfx",
    "s": _0x11ee00.sfx ?? "swing"
  }, {
    "t": _0x11ee00.t,
    "k": "hit",
    "box": _0x11ee00.box,
    "m": _0x11ee00.m,
    "kb": _0x11ee00.kb,
    "up": _0x11ee00.up,
    "hs": _0x11ee00.hs,
    "el": _0x11ee00.el,
    "st": _0x11ee00.st,
    "stp": _0x11ee00.stp,
    "fin": _0x11ee00.fin,
    "fx": _0x11ee00.fx,
    "shake": _0x11ee00.shake
  }];
  return (_0x11ee00.extra && _0x3378da.push(..._0x11ee00.extra), {
    "dur": _0x11ee00.dur,
    "pose": [[0, _0x11ee00.w ?? "windHigh"], [Math.max(1, _0x11ee00.t - 2), _0x11ee00.s ?? "slashDown"]],
    "cancel": _0x11ee00.cancel ?? Math.min(_0x11ee00.dur - 2, _0x11ee00.t + 6),
    "move": _0x11ee00.lunge ? [[Math.max(0, _0x11ee00.t - 3), _0x11ee00.lunge], [_0x11ee00.t + 3, 0]] : [[0, 0]],
    "armor": _0x11ee00.armor,
    "grav": _0x11ee00.grav,
    "airOk": _0x11ee00.air,
    "inv": _0x11ee00.inv,
    "ev": _0x3378da
  });
}
function d(_0x5aa6c8) {
  const _0x5711b6 = {
    PujOL: "proj",
    nBRQM: function (_0xa12db3, _0x21e593) {
      return _0xa12db3 - _0x21e593;
    },
    ZuJOo: function (_0x6974de, _0x702a32) {
      return _0x6974de + _0x702a32;
    }
  };
  const _0x4fe747 = _0x5711b6, _0x2fb66c = {};
  (_0x2fb66c.t = _0x5aa6c8.t, _0x2fb66c.k = "sfx", _0x2fb66c.s = _0x5aa6c8.sfx ?? _0x4fe747.PujOL);
  const _0x3ed9e8 = {
    t: _0x5aa6c8.t,
    k: "proj",
    p: _0x5aa6c8.p,
    m: _0x5aa6c8.m
  };
  (_0x3ed9e8.n = _0x5aa6c8.n, _0x3ed9e8.spread = _0x5aa6c8.spread, _0x3ed9e8.ang = _0x5aa6c8.ang, _0x3ed9e8.dx = _0x5aa6c8.dx ?? 8, _0x3ed9e8.dy = _0x5aa6c8.dy ?? -4);
  const _0x25b376 = [_0x2fb66c, _0x3ed9e8];
  return (_0x5aa6c8.extra && _0x25b376.push(..._0x5aa6c8.extra), {
    "dur": _0x5aa6c8.dur,
    "pose": [[0, _0x5aa6c8.w ?? "shootWind"], [Math.max(1, _0x5aa6c8.t - 1), _0x5aa6c8.s ?? "shoot"]],
    "cancel": _0x5aa6c8.cancel ?? Math.min(_0x5aa6c8.dur - 2, _0x5aa6c8.t + 4),
    "move": _0x5aa6c8.move ?? [[0, 0]],
    "airOk": _0x5aa6c8.air,
    "grav": _0x5aa6c8.grav,
    "inv": _0x5aa6c8.inv,
    "ev": _0x25b376
  });
}
function C(_0x247ee6) {
  const _0x3394a1 = {
    nBBdu: function (_0x22d1a0, _0x339365) {
      return _0x22d1a0 - _0x339365;
    },
    EFenS: "sfx",
    PYhvj: function (_0x25f30d, _0x5bfc37) {
      return _0x25f30d !== _0x5bfc37;
    },
    VCkCO: function (_0x4bedf6, _0x37d67a) {
      return _0x4bedf6 !== _0x37d67a;
    }
  };
  _0x3394a1.KAJIo = function (_0x1aa7bc, _0x390fa0) {
    return _0x1aa7bc - _0x390fa0;
  };
  const _0x1db0d1 = _0x3394a1, _0x1524ed = [];
  return (_0x247ee6.times.forEach((_0xcea6dc, _0x1fc543) => {
    const _0xf73a31 = _0x1fc543 === _0x247ee6.times.length - 1;
    (_0x1524ed.push({
      "t": Math.max(0, _0xcea6dc - 1),
      "k": _0x1db0d1.EFenS,
      "s": _0x247ee6.sfx ?? "swing"
    }), _0x1524ed.push({
      "t": _0xcea6dc,
      "k": "hit",
      "box": _0x247ee6.box,
      "m": _0xf73a31 && _0x247ee6.lastM !== void 0 ? _0x247ee6.lastM : _0x247ee6.m,
      "kb": _0xf73a31 && _0x247ee6.lastKb !== void 0 ? _0x247ee6.lastKb : _0x247ee6.kb ?? 0.6,
      "up": _0xf73a31 && _0x247ee6.lastUp !== void 0 ? _0x247ee6.lastUp : _0x247ee6.up,
      "el": _0x247ee6.el,
      "st": _0x247ee6.st,
      "hs": _0x247ee6.hs ?? 2,
      "fx": _0x247ee6.fx,
      "fin": _0xf73a31 && _0x247ee6.fin,
      "g": _0x1fc543
    }));
  }), _0x247ee6.extra && _0x1524ed.push(..._0x247ee6.extra), {
    "dur": _0x247ee6.dur,
    "pose": _0x247ee6.pose,
    "move": _0x247ee6.move ?? [[0, 0]],
    "armor": _0x247ee6.armor,
    "airOk": _0x247ee6.air,
    "grav": _0x247ee6.grav,
    "inv": _0x247ee6.inv,
    "cancel": _0x247ee6.cancel ?? _0x1db0d1.KAJIo(_0x247ee6.dur, 2),
    "ev": _0x1524ed
  });
}
const _0x5c8796 = {
  arrow: (_0x41d3da = "#e8d8a0", _0x41bfce = {}) => ({
    "spr": "arrow",
    "spd": 7,
    "life": 60,
    "w": 12,
    "h": 4,
    "col": _0x41d3da,
    "kb": 1.5,
    ..._0x41bfce
  }),
  orb: (_0xe67cf5, _0x5cf874 = {}) => ({
    "spr": "orb",
    "spd": 4.5,
    "life": 70,
    "w": 8,
    "h": 8,
    "col": _0xe67cf5,
    "kb": 1,
    ..._0x5cf874
  }),
  star: (_0x4722a8 = "#ffe680", _0x25a169 = {}) => ({
    "spr": "star",
    "spd": 5,
    "life": 80,
    "w": 9,
    "h": 9,
    "col": _0x4722a8,
    "kb": 1,
    "home": 0.12,
    ..._0x25a169
  })
};
const _0x246277 = {
  skin: "#f4ecf0",
  hair: "#d8d8ec",
  hairStyle: "starhood",
  body: "#1c1a2c",
  trim: "#a8c4ff",
  legs: "#15131f",
  boots: "#c8c8dc",
  cape: "#16141f",
  eye: "#a070ff",
  weapon: "starblade",
  wcol: "#6a86ff",
  wcol2: "#26244a",
  build: "normal",
  glow: "#9a8aff",
  extra: "compass"
};
const _0x2a4dfa = {
  arc: "down",
  r: 28,
  col: "#a8c0ff"
};
const _0x2cbab5 = {
  dur: 12,
  t: 4,
  m: 0.75,
  box: [0, -16, 36, 22],
  w: "windHigh",
  s: "slashDown",
  fx: _0x2a4dfa,
  hs: 3,
  lunge: 2.5
};
const _0x328833 = {
  arc: "up",
  r: 28,
  col: "#b8a0ff"
};
const _0x5348d6 = {
  dur: 12,
  t: 4,
  m: 0.75,
  box: [0, -18, 36, 24],
  w: "windLow",
  s: "slashUp",
  fx: _0x328833,
  hs: 3,
  lunge: 2.5
};
const _0x429637 = {
  arc: "thrust",
  r: 36,
  col: "#c8e8ff"
};
const _0x541e5e = {
  dur: 14,
  t: 4,
  m: 0.9,
  box: [0, -10, 42, 14],
  w: "thrustWind",
  s: "thrust",
  fx: _0x429637,
  hs: 4,
  lunge: 3.5,
  el: "holy"
};
const _0xc718f7 = {
  t: 4,
  k: "sfx",
  s: "swing_heavy"
};
const _0x531e93 = {
  arc: "circle",
  r: 30,
  col: "#8a9aff"
};
const _0x3a5e63 = {
  t: 6,
  k: "hit",
  box: [-20, -20, 56, 32],
  m: 1.2,
  kb: 3,
  hs: 6,
  el: "holy",
  fx: _0x531e93,
  shake: 3
};
const _0x42d036 = {
  arc: "down",
  r: 36,
  col: "#c8e8ff"
};
const _0x47ab99 = {
  t: 14,
  k: "hit",
  box: [0, -18, 46, 26],
  m: 1.4,
  kb: 5,
  hs: 7,
  el: "holy",
  fx: _0x42d036,
  fin: !0
};
const _0x570036 = {
  spr: "crescent",
  spd: 5,
  life: 70,
  w: 30,
  h: 54,
  col: "#8a9aff",
  el: "holy",
  pierce: 99,
  home: 0.09
};
const _0xfeced6 = {
  t: 14,
  k: "proj",
  p: _0x570036,
  m: 2.1
};
const _0x575406 = {
  dur: 30,
  pose: [[0, "windHigh"], [6, "spin"], [14, "slashDown"]],
  cancel: 24,
  move: [[4, 3], [14, 0]],
  ev: [_0xc718f7, _0x3a5e63, _0x47ab99, _0xfeced6]
};
const _0x5e80bb = {
  arc: "down",
  r: 28,
  col: "#a8c0ff"
};
const _0x3d1115 = {
  spr: "crescent",
  spd: 5,
  life: 40,
  w: 20,
  h: 34,
  col: "#a8c0ff",
  el: "holy",
  pierce: 3,
  home: 0.09
};
const _0x24f9bb = {
  t: 4,
  k: "proj",
  p: _0x3d1115,
  m: 1.275,
  ang: 30
};
const _0x25b96b = {
  dur: 16,
  t: 4,
  m: 0.85,
  box: [0, -6, 34, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x5e80bb,
  air: !0,
  grav: 0.3,
  hs: 3,
  extra: [_0x24f9bb]
};
const _0x306909 = {
  arc: "h",
  r: 44,
  col: "#8a9aff"
};
const _0x53b41e = {
  dur: 20,
  t: 5,
  m: 1.5,
  box: [-10, -14, 56, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x306909,
  lunge: 8,
  hs: 5,
  el: "holy",
  inv: [0, 10]
};
const _0x5c1013 = {
  t: 8,
  k: "sfx",
  s: "cast"
};
const _0x10ab0d = {
  t: 8,
  k: "shake",
  v: 3
};
const _0x32d868 = {
  vis: "crystal",
  w: 22,
  h: 46,
  life: 22,
  tick: 8,
  m: 1.35,
  el: "holy"
};
const _0x207deb = {
  t: 8,
  k: "field",
  f: _0x32d868,
  dx: 28,
  ground: !0
};
const _0x576e32 = {
  vis: "crystal",
  w: 22,
  h: 52,
  life: 22,
  tick: 8,
  m: 1.35,
  el: "holy"
};
const _0x51f75e = {
  t: 11,
  k: "field",
  f: _0x576e32,
  dx: 54,
  ground: !0
};
const _0x52becc = {
  vis: "crystal",
  w: 22,
  h: 58,
  life: 22,
  tick: 8,
  m: 1.35,
  el: "holy"
};
const _0x14a5d6 = {
  t: 14,
  k: "field",
  f: _0x52becc,
  dx: 80,
  ground: !0
};
const _0x50201e = {
  vis: "crystal",
  w: 22,
  h: 64,
  life: 22,
  tick: 8,
  m: 1.35,
  el: "holy"
};
const _0x31ddb3 = {
  t: 17,
  k: "field",
  f: _0x50201e,
  dx: 106,
  ground: !0
};
const _0x574800 = {
  vis: "crystal",
  w: 26,
  h: 72,
  life: 22,
  tick: 8,
  m: 1.35,
  el: "holy"
};
const _0x21ed5a = {
  t: 20,
  k: "field",
  f: _0x574800,
  dx: 134,
  ground: !0
};
const _0x5363d4 = {
  spr: "crystal",
  spd: 5.5,
  life: 60,
  w: 12,
  h: 8,
  col: "#c8e8ff",
  el: "holy",
  pierce: 2
};
const _0x3041c9 = {
  t: 10,
  k: "proj",
  p: _0x5363d4,
  m: 0.9,
  n: 5,
  spread: 12,
  ang: -10
};
const _0x2c1250 = {
  dur: 30,
  pose: [[0, "cast"], [8, "castUp"]],
  ev: [_0x5c1013, _0x10ab0d, _0x207deb, _0x51f75e, _0x14a5d6, _0x31ddb3, _0x21ed5a, _0x3041c9]
};
const _0x236060 = {
  name: "성흔 결정창",
  desc: "별빛 결정 기둥이 앞으로 차례로 솟구치고(기둥마다 135% × 2회, 5개), 결정 파편 다섯 발을 흩뿌린다 (각 90%).",
  cd: 7,
  act: _0x2c1250
};
const _0x473c93 = {
  t: 6,
  k: "sfx",
  s: "gem"
};
const _0x3e785a = {
  t: 6,
  k: "pic",
  name: "card",
  dx: 10,
  dy: -14,
  s0: 22,
  s1: 34,
  life: 22
};
const _0x55fc2e = {
  aspd: 0.6,
  atk: 1
};
const _0x3ac1c6 = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x47bf2f = {
  t: 2,
  k: "timestop",
  dur: 1.2
};
const _0x2d1f44 = {
  t: 2,
  k: "pic",
  name: "circle",
  dx: 0,
  dy: -50,
  s0: 40,
  s1: 190,
  life: 56
};
const _0x3745aa = {
  t: 10,
  k: "meteor",
  n: 12,
  m: 2,
  spread: 320,
  el: "holy",
  spr: "starsword"
};
const _0x5663dd = {
  t: 44,
  k: "meteor",
  n: 1,
  m: 9,
  spread: 10,
  el: "holy",
  spr: "starsword",
  big: !0
};
const _0x2d124d = {
  t: 48,
  k: "shake",
  v: 10
};
const _0x5bc3b5 = {
  t: 48,
  k: "sfx",
  s: "explode"
};
const _0x560304 = {
  dur: 70,
  pose: [[0, "castUp"], [40, "slashDown"]],
  inv: [0, 70],
  armor: !0,
  ev: [_0x3ac1c6, _0x47bf2f, _0x2d1f44, _0x3745aa, _0x5663dd, _0x2d124d, _0x5bc3b5]
};
const _0x4be1ca = {
  name: "천구의 심판",
  desc: "하늘에 거대한 별의 나침반을 펼치고 시간을 멈춘 뒤, 별빛 장검 12자루를 화면 곳곳에 내리꽂고(각 200%) 마지막에 거대한 장검 한 자루를 떨어뜨린다 (900%). 시전 중 무적.",
  cd: 45,
  act: _0x560304
};
const _0x3c57cc = {
  t: 0,
  k: "tp",
  dx: 18,
  toEnemy: !0
};
const _0x1bf064 = {
  t: 4,
  k: "timestop",
  dur: 0.85
};
const _0x49934f = {
  t: 6,
  k: "pic",
  name: "card",
  dx: 12,
  dy: -16,
  s0: 26,
  s1: 40,
  life: 20
};
const _0x453ceb = {
  t: 6,
  k: "sfx",
  s: "cast"
};
const _0xfe0ab3 = {
  t: 20,
  k: "pic",
  name: "circle",
  dx: 0,
  dy: -6,
  s0: 40,
  s1: 190,
  life: 30
};
const _0x432d07 = {
  t: 24,
  k: "nova",
  r: 90,
  m: 4.5,
  el: "holy",
  up: -3,
  col: "#9a8aff"
};
const _0x1a9c4b = {
  t: 24,
  k: "shake",
  v: 8
};
const _0x3a3c26 = {
  t: 24,
  k: "sfx",
  s: "explode"
};
const _0x217212 = {
  dur: 40,
  pose: [[0, "dash"], [6, "castUp"], [24, "slashDown"]],
  inv: [0, 30],
  ev: [_0x3c57cc, _0x1bf064, _0x49934f, _0x453ceb, _0xfe0ab3, _0x432d07, _0x1a9c4b, _0x3a3c26]
};
const _0x443e87 = {
  name: "교대: 별의 심판",
  desc: "가장 가까운 적에게 순간이동해 시간을 멈추고, 거대한 별의 마법진을 터뜨린다 (공격력 450%).",
  act: _0x217212
};
const _0x4ca811 = {
  allDmg: 0.2,
  crit: 0.1
};
const _0x572928 = {
  stats: _0x4ca811
};
const _0x413d59 = {
  k: "meteor",
  m: 1.6,
  spr: "starsword"
};
const _0x402b5f = {
  on: "interval",
  every: 5,
  do: [_0x413d59]
};
const _0x1cf291 = {
  name: "성계의 가호",
  desc: "모든 피해 +20%, 치명타 확률 +10%. 5초마다 가장 가까운 적에게 별빛 장검을 내리꽂는다 (공격력 160%).",
  effects: [_0x572928, _0x402b5f]
};
const _0x51d873 = {
  target: "skill1",
  count: 4
};
const _0x3ba4f5 = {
  desc: "성흔 결정창 파편 +4",
  mods: [_0x51d873]
};
const _0x541c1f = {
  target: "skill2",
  cd: 3
};
const _0x580972 = {
  desc: "천구 나침반 쿨타임 -3초",
  mods: [_0x541c1f]
};
const _0x3e7062 = {
  critDmg: 0.4
};
const _0x1c457d = {
  stats: _0x3e7062
};
const _0x10a718 = {
  desc: "치명타 피해 +40%",
  effects: [_0x1c457d]
};
const _0x273b47 = {
  target: "swap",
  dmg: 0.6
};
const _0x2c7633 = {
  desc: "별의 심판 피해 +60%",
  mods: [_0x273b47]
};
const _0x89af5e = {
  target: "all",
  dmg: 0.4
};
const _0x246e5d = {
  cdr: 0.15
};
const _0x2be5d3 = {
  stats: _0x246e5d
};
const _0x325a1e = {
  desc: "모든 기술 피해 +40%, 스킬 쿨타임 -15%",
  mods: [_0x89af5e],
  effects: [_0x2be5d3]
};
const _0x5935c7 = {
  skin: "#f4ecf0",
  hair: "#c8c0e8",
  hairStyle: "starhood",
  body: "#1a1630",
  trim: "#a890ff",
  legs: "#12101e",
  boots: "#2a2440",
  cape: "#14122a",
  eye: "#a070ff",
  weapon: "staff",
  wcol: "#c8b8ff",
  wcol2: "#3a2a6a",
  build: "slim",
  glow: "#a890ff",
  extra: "compass"
};
const _0x49ca66 = {
  name: "astral:sparkle",
  w: 16,
  spin: 0.25
};
const _0x1f17d7 = {
  spr: "star",
  spd: 6.5,
  life: 50,
  w: 9,
  h: 9,
  col: "#c8b8ff",
  el: "holy",
  pic: _0x49ca66
};
const _0x592410 = {
  dur: 14,
  t: 4,
  m: 0.85,
  p: _0x1f17d7,
  w: "windHigh",
  s: "slashDown",
  sfx: "cast"
};
const _0x3b8fb2 = {
  name: "astral:sparkle",
  w: 14,
  spin: 0.25
};
const _0x16435d = {
  spr: "star",
  spd: 6.5,
  life: 50,
  w: 9,
  h: 9,
  col: "#c8b8ff",
  el: "holy",
  pic: _0x3b8fb2
};
const _0x3daa4a = {
  dur: 14,
  t: 4,
  m: 0.6,
  n: 2,
  spread: 10,
  p: _0x16435d,
  w: "windLow",
  s: "slashUp",
  sfx: "cast"
};
const _0x505939 = {
  name: "astral:ring",
  w: 26,
  spin: 0.15
};
const _0x525f0b = {
  spr: "orb",
  spd: 3.5,
  life: 70,
  w: 16,
  h: 16,
  col: "#a890ff",
  el: "holy",
  pierce: 3,
  pic: _0x505939
};
const _0x1cca70 = {
  dur: 18,
  t: 6,
  m: 1,
  p: _0x525f0b,
  w: "windHigh",
  s: "spin",
  sfx: "cast"
};
const _0x3ede8c = {
  t: 6,
  k: "sfx",
  s: "cast"
};
const _0x309c18 = {
  name: "astral:star",
  w: 30,
  spin: 0.25
};
const _0x293e31 = {
  spr: "shard",
  spd: 5.5,
  life: 70,
  w: 18,
  h: 18,
  col: "#c8b8ff",
  el: "holy",
  pierce: 99,
  home: 0.08,
  pic: _0x309c18
};
const _0x4a4410 = {
  t: 8,
  k: "proj",
  p: _0x293e31,
  m: 1.9
};
const _0x47dd15 = {
  dur: 26,
  pose: [[0, "thrustWind"], [7, "thrust"]],
  cancel: 20,
  ev: [_0x3ede8c, _0x4a4410]
};
const _0x25a0e1 = {
  name: "astral:sparkle",
  w: 16,
  spin: 0.25
};
const _0x5d631a = {
  spr: "star",
  spd: 6,
  life: 50,
  w: 9,
  h: 9,
  col: "#c8b8ff",
  el: "holy",
  pic: _0x25a0e1
};
const _0x51122c = {
  dur: 16,
  t: 4,
  m: 0.85,
  ang: 35,
  air: !0,
  grav: 0.35,
  p: _0x5d631a,
  w: "cast",
  s: "castUp"
};
const _0x5dece9 = {
  t: 6,
  k: "pic",
  name: "astral:ring",
  dx: 0,
  dy: -8,
  s0: 20,
  s1: 60,
  life: 16
};
const _0x156266 = {
  t: 6,
  k: "nova",
  r: 36,
  m: 1.1,
  el: "holy",
  col: "#a890ff"
};
const _0x1c6ae3 = {
  t: 6,
  k: "sfx",
  s: "cast"
};
const _0x348cac = {
  dur: 18,
  pose: [[0, "dash"], [6, "cast"]],
  move: [[0, 4], [10, 0]],
  inv: [0, 8],
  ev: [_0x5dece9, _0x156266, _0x1c6ae3]
};
const _0x32f203 = {
  t: 6,
  k: "sfx",
  s: "cast"
};
const _0x526467 = {
  t: 6,
  k: "pic",
  name: "astral:ring",
  dx: 16,
  dy: -22,
  s0: 16,
  s1: 34,
  life: 22
};
const _0xe65c2a = {
  r: 36,
  m: 1,
  el: "holy",
  col: "#a890ff"
};
const _0x43a59c = {
  name: "astral:star",
  w: 32,
  spin: 0.2
};
const _0x4a1db1 = {
  name: "astral:bigcircle",
  s0: 24,
  s1: 80,
  life: 18
};
const _0x3279b7 = {
  spr: "shard",
  spd: 7,
  life: 40,
  w: 16,
  h: 16,
  col: "#c8b8ff",
  el: "holy",
  boom: _0xe65c2a,
  pic: _0x43a59c,
  boomPic: _0x4a1db1
};
const _0xad0e1c = {
  t: 10,
  k: "proj",
  p: _0x3279b7,
  m: 1.7,
  ang: 90,
  dx: 50,
  dy: -64
};
const _0x100cdf = {
  r: 36,
  m: 1,
  el: "holy",
  col: "#a890ff"
};
const _0x4af804 = {
  name: "astral:star",
  w: 32,
  spin: 0.2
};
const _0x572f87 = {
  name: "astral:bigcircle",
  s0: 24,
  s1: 80,
  life: 18
};
const _0x1fe305 = {
  spr: "shard",
  spd: 7,
  life: 40,
  w: 16,
  h: 16,
  col: "#c8b8ff",
  el: "holy",
  boom: _0x100cdf,
  pic: _0x4af804,
  boomPic: _0x572f87
};
const _0x54065f = {
  t: 15,
  k: "proj",
  p: _0x1fe305,
  m: 1.7,
  ang: 90,
  dx: 90,
  dy: -64
};
const _0x2ea786 = {
  r: 36,
  m: 1,
  el: "holy",
  col: "#a890ff"
};
const _0x4a92cb = {
  name: "astral:star",
  w: 32,
  spin: 0.2
};
const _0x2effc6 = {
  name: "astral:bigcircle",
  s0: 24,
  s1: 80,
  life: 18
};
const _0x41e158 = {
  spr: "shard",
  spd: 7,
  life: 40,
  w: 16,
  h: 16,
  col: "#c8b8ff",
  el: "holy",
  boom: _0x2ea786,
  pic: _0x4a92cb,
  boomPic: _0x2effc6
};
const _0x414ddf = {
  t: 20,
  k: "proj",
  p: _0x41e158,
  m: 1.7,
  ang: 90,
  dx: 130,
  dy: -64
};
const _0x1f1d5e = {
  dur: 30,
  pose: [[0, "cast"], [8, "castUp"]],
  ev: [_0x32f203, _0x526467, _0xad0e1c, _0x54065f, _0x414ddf]
};
const _0x54f0ac = {
  name: "별의 낙하",
  desc: "앞쪽 하늘을 열어 거대한 별 세 개를 차례로 떨어뜨린다. 떨어진 자리마다 별빛 폭발 (각 공격력 170%, 범위).",
  cd: 8,
  act: _0x1f1d5e
};
const _0x247473 = {
  t: 6,
  k: "sfx",
  s: "gem"
};
const _0x4dfd15 = {
  name: "astral:bigcircle",
  mode: "stand",
  size: 70
};
const _0x416606 = {
  vis: "holy",
  w: 84,
  h: 52,
  life: 360,
  tick: 18,
  m: 0.6,
  el: "holy",
  follow: !0,
  pic: _0x4dfd15
};
const _0x218584 = {
  t: 8,
  k: "field",
  f: _0x416606,
  dx: 0,
  ground: !0
};
const _0x7b41e3 = {
  dmgTaken: -0.3
};
const definition_astral_ward = {
  t: 8,
  k: "buff",
  id: "astral_ward",
  stats: _0x7b41e3,
  dur: 6
};
const _0x451b12 = {
  dur: 22,
  pose: [[0, "cast"], [6, "castUp"]],
  ev: [_0x247473, _0x218584, definition_astral_ward]
};
const _0x50d0d6 = {
  name: "성역의 결계",
  desc: "몸 주위에 도는 별의 결계를 6초간 두른다. 닿는 적에게 지속 피해(공격력 60%/0.3초), 받는 피해 -30%.",
  cd: 15,
  act: _0x451b12
};
const _0x2608d9 = {
  t: 0,
  k: "sfx",
  s: "gem"
};
const _0x5445bf = {
  t: 2,
  k: "pic",
  name: "astral:bigcircle",
  dx: 0,
  dy: -16,
  s0: 60,
  s1: 220,
  life: 54
};
const _0x464eaa = {
  dmgTaken: -0.5
};
const definition_astral_ult = {
  t: 4,
  k: "buff",
  id: "astral_ult",
  stats: _0x464eaa,
  dur: 4
};
const _0x593649 = {
  t: 6,
  k: "screen",
  m: 1.5,
  el: "holy",
  st: "slow",
  col: "#c8b8ff"
};
const _0x249e7d = {
  t: 50,
  k: "pic",
  name: "astral:star",
  dx: 0,
  dy: -16,
  s0: 40,
  s1: 140,
  life: 16,
  spin: 0.05
};
const _0x31b389 = {
  t: 52,
  k: "screen",
  m: 14,
  pic: "astral:sparkle",
  picW: 36,
  el: "holy",
  col: "#c8b8ff"
};
const _0x1cd0b6 = {
  t: 52,
  k: "shake",
  v: 10
};
const _0x1b9f6e = {
  t: 52,
  k: "sfx",
  s: "explode"
};
const _0x2b806f = {
  dur: 64,
  pose: [[0, "cast"], [10, "castUp"]],
  inv: [0, 64],
  armor: !0,
  ev: [_0x2608d9, _0x5445bf, definition_astral_ult, _0x593649, _0x249e7d, _0x31b389, _0x1cd0b6, _0x1b9f6e]
};
const _0x3b7b6d = {
  name: "별의 경계 붕괴",
  desc: "화면 전체를 별의 결계로 덮어 모든 적을 둔화시키고(150%), 4초간 받는 피해 -50%. 잠시 뒤 결계가 깨지며 화면 안 모든 적에게 별빛 대폭발 (1400%).",
  cd: 45,
  act: _0x2b806f
};
const _0xe8f331 = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x1008c7 = {
  t: 4,
  k: "pic",
  name: "astral:bigcircle",
  dx: 0,
  dy: -10,
  s0: 40,
  s1: 200,
  life: 34
};
const _0x12929f = {
  t: 20,
  k: "nova",
  r: 100,
  m: 5,
  el: "holy",
  up: -3,
  pull: !0,
  col: "#a890ff"
};
const _0x380b25 = {
  t: 20,
  k: "shake",
  v: 8
};
const _0x52089b = {
  t: 20,
  k: "sfx",
  s: "explode"
};
const _0x15c82d = {
  dur: 34,
  pose: [[0, "castUp"], [20, "thrust"]],
  inv: [0, 26],
  ev: [_0xe8f331, _0x1008c7, _0x12929f, _0x380b25, _0x52089b]
};
const _0x2d9883 = {
  name: "교대: 별의 경계",
  desc: "등장과 함께 거대한 별의 마법진을 열어 주위의 적을 끌어당기고 터뜨린다 (공격력 500%).",
  act: _0x15c82d
};
const _0x46cc2d = {
  allDmg: 0.2,
  critDmg: 0.3
};
const _0x292fb5 = {
  stats: _0x46cc2d
};
const _0x47733b = {
  name: "astral:sparkle",
  w: 18,
  spin: 0.2
};
const _0x4a28d1 = {
  spr: "star",
  spd: 4.5,
  life: 90,
  w: 10,
  h: 10,
  col: "#c8b8ff",
  el: "holy",
  home: 0.14,
  pic: _0x47733b
};
const _0x5e31ba = {
  k: "proj",
  p: _0x4a28d1,
  m: 1.4,
  n: 3
};
const _0x2e85b2 = {
  on: "interval",
  every: 4,
  do: [_0x5e31ba]
};
const _0x121205 = {
  name: "아스트랄 공명",
  desc: "모든 피해 +20%, 치명타 피해 +30%. 4초마다 가까운 적에게 별빛 세 개가 날아간다 (각 공격력 140%, 유도).",
  effects: [_0x292fb5, _0x2e85b2]
};
const _0x18d506 = {
  target: "skill1",
  dmg: 0.4
};
const _0xa1b062 = {
  desc: "별의 낙하 피해 +40%",
  mods: [_0x18d506]
};
const _0x1800a6 = {
  target: "skill2",
  cd: 3
};
const _0x2d1992 = {
  desc: "성역의 결계 쿨타임 -3초",
  mods: [_0x1800a6]
};
const _0x2d23b1 = {
  critDmg: 0.4
};
const _0x207249 = {
  stats: _0x2d23b1
};
const _0x386044 = {
  desc: "치명타 피해 +40%",
  effects: [_0x207249]
};
const _0x19635f = {
  target: "swap",
  dmg: 0.6
};
const _0x38de04 = {
  desc: "별의 경계 피해 +60%",
  mods: [_0x19635f]
};
const _0x5cf3e2 = {
  target: "all",
  dmg: 0.4
};
const _0x45263f = {
  cdr: 0.15
};
const _0x473985 = {
  stats: _0x45263f
};
const _0x20fdf3 = {
  desc: "모든 기술 피해 +40%, 스킬 쿨타임 -15%",
  mods: [_0x5cf3e2],
  effects: [_0x473985]
};
const _0xdf805 = {
  skin: "#f4ecf0",
  hair: "#e0e0f0",
  hairStyle: "starhood",
  body: "#1a1a34",
  trim: "#9ab4ff",
  legs: "#14142a",
  boots: "#d0d0e0",
  cape: "#2a2a5a",
  eye: "#8ab0ff",
  weapon: "starblade",
  wcol: "#9ab4ff",
  wcol2: "#2a2a5a",
  build: "normal",
  glow: "#9ab4ff",
  extra: "compass"
};
const _0x4c3223 = {
  arc: "down",
  r: 28,
  col: "#b8c8ff"
};
const _0x150f39 = {
  dur: 12,
  t: 4,
  m: 0.8,
  box: [0, -16, 38, 24],
  w: "windHigh",
  s: "slashDown",
  fx: _0x4c3223,
  hs: 3,
  lunge: 2.5
};
const _0x190972 = {
  arc: "up",
  r: 28,
  col: "#9ab4ff"
};
const _0x412718 = {
  dur: 12,
  t: 4,
  m: 0.8,
  box: [0, -18, 38, 26],
  w: "windLow",
  s: "slashUp",
  fx: _0x190972,
  hs: 3,
  lunge: 2.5
};
const _0x206745 = {
  arc: "thrust",
  r: 36,
  col: "#c8d8ff"
};
const _0x33f1eb = {
  name: "solen:spark",
  w: 16,
  spin: 0.2
};
const _0x501834 = {
  spr: "star",
  spd: 5,
  life: 60,
  w: 9,
  h: 9,
  col: "#b8c8ff",
  el: "holy",
  home: 0.08,
  pic: _0x33f1eb
};
const _0x199009 = {
  t: 4,
  k: "proj",
  p: _0x501834,
  m: 0.6
};
const _0x37a786 = {
  dur: 14,
  t: 4,
  m: 0.95,
  box: [0, -10, 44, 16],
  w: "thrustWind",
  s: "thrust",
  fx: _0x206745,
  hs: 4,
  lunge: 3.5,
  el: "holy",
  extra: [_0x199009]
};
const _0x4810b3 = {
  t: 4,
  k: "sfx",
  s: "swing_heavy"
};
const _0x5b0ed8 = {
  arc: "circle",
  r: 30,
  col: "#9ab4ff"
};
const _0x47d9d9 = {
  t: 8,
  k: "hit",
  box: [-16, -20, 54, 32],
  m: 1.1,
  kb: 3,
  hs: 5,
  el: "holy",
  fx: _0x5b0ed8,
  shake: 3
};
const _0x46410c = {
  arc: "down",
  r: 38,
  col: "#c8d8ff"
};
const _0x1e949b = {
  t: 14,
  k: "hit",
  box: [0, -20, 50, 30],
  m: 1.4,
  kb: 5,
  hs: 7,
  el: "holy",
  fx: _0x46410c,
  fin: !0
};
const _0x442402 = {
  name: "solen:orb",
  w: 24,
  spin: 0.15
};
const _0x581954 = {
  spr: "orb",
  spd: 4.5,
  life: 60,
  w: 18,
  h: 18,
  col: "#9ab4ff",
  el: "holy",
  pierce: 99,
  home: 0.06,
  pic: _0x442402
};
const _0x210414 = {
  t: 14,
  k: "proj",
  p: _0x581954,
  m: 1.6
};
const _0x266ae6 = {
  dur: 30,
  pose: [[0, "slamWind"], [6, "kick"], [12, "slam"]],
  cancel: 24,
  move: [[4, 3], [14, 0]],
  ev: [_0x4810b3, _0x47d9d9, _0x1e949b, _0x210414]
};
const _0x19b13c = {
  arc: "down",
  r: 28,
  col: "#b8c8ff"
};
const _0x56032c = {
  dur: 16,
  t: 4,
  m: 0.85,
  box: [0, -6, 34, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x19b13c,
  air: !0,
  grav: 0.3,
  hs: 3
};
const _0x521cdd = {
  arc: "h",
  r: 42,
  col: "#9ab4ff"
};
const _0x4017bd = {
  dur: 20,
  t: 5,
  m: 1.4,
  box: [-10, -14, 54, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x521cdd,
  lunge: 8,
  hs: 5,
  el: "holy",
  inv: [0, 10]
};
const _0x33242b = {
  t: 2,
  k: "sfx",
  s: "swing_heavy"
};
const _0x253dc2 = {
  arc: "h",
  r: 30,
  col: "#c8d8ff"
};
const _0x2a5b82 = {
  t: 4,
  k: "hit",
  box: [-24, -16, 44, 24],
  m: 0.9,
  kb: 1,
  hs: 2,
  el: "holy",
  fx: _0x253dc2
};
const _0x53e04c = {
  t: 7,
  k: "hit",
  box: [-24, -16, 44, 24],
  m: 0.9,
  kb: 1,
  hs: 2,
  el: "holy"
};
const _0x40f642 = {
  t: 10,
  k: "hit",
  box: [-24, -16, 44, 24],
  m: 0.9,
  kb: 1,
  hs: 2,
  el: "holy"
};
const _0x1346ca = {
  t: 14,
  k: "pic",
  name: "solen:nova",
  dx: 8,
  dy: -8,
  s0: 24,
  s1: 80,
  life: 20
};
const _0x1812fc = {
  t: 14,
  k: "nova",
  r: 44,
  m: 1.2,
  el: "holy",
  col: "#9ab4ff"
};
const _0x573d0e = {
  t: 14,
  k: "sfx",
  s: "explode"
};
const _0xd2cac = {
  dur: 24,
  pose: [[0, "dash"], [4, "thrust"], [14, "slam"]],
  inv: [0, 16],
  move: [[2, 9], [13, 0]],
  ev: [_0x33242b, _0x2a5b82, _0x53e04c, _0x40f642, _0x1346ca, _0x1812fc, _0x573d0e]
};
const _0x3e234e = {
  name: "빛의 돌진",
  desc: "빛이 되어 앞으로 돌진하며 지나가는 적을 세 번 베고(각 공격력 90%), 끝에서 별빛이 터진다(120%). 돌진 중 무적.",
  cd: 6,
  act: _0xd2cac
};
const _0xf0040a = {
  t: 4,
  k: "sfx",
  s: "gem"
};
const _0x22a580 = {
  t: 4,
  k: "pic",
  name: "solen:constell",
  dx: 0,
  dy: -16,
  s0: 30,
  s1: 70,
  life: 26
};
const _0x3db258 = {
  t: 8,
  k: "pic",
  name: "solen:bigstar",
  dx: 0,
  dy: -10,
  s0: 40,
  s1: 110,
  life: 34,
  spin: 0.03
};
const _0x55d388 = {
  t: 10,
  k: "heal",
  v: 0.15
};
const _0x1f836d = {
  t: 10,
  k: "shield",
  v: 0.25
};
const _0x22412d = {
  atk: 0.2
};
const definition_solen_light = {
  t: 10,
  k: "buff",
  id: "solen_light",
  stats: _0x22412d,
  dur: 5
};
const _0x11449b = {
  dur: 26,
  pose: [[0, "cast"], [6, "castUp"]],
  ev: [_0xf0040a, _0x22a580, _0x3db258, _0x55d388, _0x1f836d, definition_solen_light]
};
const _0x408e39 = {
  name: "세계를 비추는 빛",
  desc: "별의 문장을 비춰 체력을 15% 회복하고 최대 체력 25%의 보호막을 얻는다. 5초간 공격력 +20%.",
  cd: 16,
  act: _0x11449b
};
const _0x1b8117 = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x2c642d = {
  t: 2,
  k: "pic",
  name: "solen:bigstar",
  dx: 0,
  dy: -46,
  s0: 24,
  s1: 80,
  life: 56,
  spin: 0.03
};
const _0x60bc72 = {
  t: 4,
  k: "shield",
  v: 0.3
};
const _0xdd9545 = {
  spr: "star",
  spd: 4.5,
  life: 100,
  w: 10,
  h: 10,
  col: "#b8c8ff",
  el: "holy",
  home: 0.12
};
const _0x33f5da = {
  t: 10,
  k: "proj",
  p: _0xdd9545,
  m: 0.8,
  n: 8,
  spread: 40,
  ang: -90,
  dy: -40
};
const _0x4bfc6c = {
  spr: "star",
  spd: 4.5,
  life: 100,
  w: 10,
  h: 10,
  col: "#b8c8ff",
  el: "holy",
  home: 0.12
};
const _0x2ea0da = {
  t: 22,
  k: "proj",
  p: _0x4bfc6c,
  m: 0.8,
  n: 8,
  spread: 40,
  ang: -90,
  dy: -40
};
const _0x199f57 = {
  spr: "star",
  spd: 4.5,
  life: 100,
  w: 10,
  h: 10,
  col: "#b8c8ff",
  el: "holy",
  home: 0.12
};
const _0x500028 = {
  t: 34,
  k: "proj",
  p: _0x199f57,
  m: 0.8,
  n: 8,
  spread: 40,
  ang: -90,
  dy: -40
};
const _0x144465 = {
  spr: "star",
  spd: 4.5,
  life: 100,
  w: 10,
  h: 10,
  col: "#b8c8ff",
  el: "holy",
  home: 0.12
};
const _0x5a73db = {
  t: 46,
  k: "proj",
  p: _0x144465,
  m: 0.8,
  n: 8,
  spread: 40,
  ang: -90,
  dy: -40
};
const _0x4d8497 = {
  t: 58,
  k: "pic",
  name: "solen:nova",
  dx: 0,
  dy: -10,
  s0: 40,
  s1: 130,
  life: 16,
  spin: 0.04
};
const _0x5ae8b2 = {
  t: 58,
  k: "nova",
  r: 110,
  m: 5,
  el: "holy",
  up: -3,
  col: "#b8c8ff"
};
const _0x4384ff = {
  t: 58,
  k: "shake",
  v: 8
};
const _0x2029f8 = {
  t: 58,
  k: "sfx",
  s: "explode"
};
const _0x1ce286 = {
  dur: 72,
  pose: [[0, "castUp"], [50, "cast"]],
  inv: [0, 30],
  armor: !0,
  ev: [_0x1b8117, _0x2c642d, _0x60bc72, _0x33f5da, _0x2ea0da, _0x500028, _0x5a73db, _0x4d8497, _0x5ae8b2, _0x4384ff, _0x2029f8]
};
const _0x3e91e4 = {
  name: "세계를 비추는 별",
  desc: "별의 구체를 하늘에 띄워 최대 체력 30% 보호막을 두르고, 유도 별빛 8발씩 네 번 쏟아붓는다 (각 80%). 마지막에 주위 별빛 폭발 (500%).",
  cd: 45,
  act: _0x1ce286
};
const _0x3bd817 = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x479c71 = {
  t: 2,
  k: "pic",
  name: "solen:constell",
  dx: 0,
  dy: -14,
  s0: 40,
  s1: 80,
  life: 20
};
const _0x280858 = {
  t: 14,
  k: "pic",
  name: "solen:starcircle",
  dx: 0,
  dy: -8,
  s0: 60,
  s1: 175,
  life: 26
};
const _0x87d75e = {
  t: 16,
  k: "nova",
  r: 85,
  m: 3.8,
  el: "holy",
  up: -3,
  col: "#9ab4ff"
};
const _0x1d2742 = {
  t: 16,
  k: "shake",
  v: 6
};
const _0x14bf28 = {
  t: 16,
  k: "sfx",
  s: "explode"
};
const _0x48b0eb = {
  dur: 32,
  pose: [[0, "castUp"], [16, "shoot"]],
  inv: [0, 20],
  ev: [_0x3bd817, _0x479c71, _0x280858, _0x87d75e, _0x1d2742, _0x14bf28]
};
const _0x535bfe = {
  name: "교대: 별자리 계승",
  desc: "별자리를 그려 이어받은 별빛을 한꺼번에 터뜨린다 (공격력 380%).",
  act: _0x48b0eb
};
const _0x577433 = {
  allDmg: 0.15
};
const _0x4b25d7 = {
  stats: _0x577433
};
const _0x12d67b = {
  name: "solen:spark",
  w: 16,
  spin: 0.2
};
const _0x49acaa = {
  spr: "star",
  spd: 4.5,
  life: 90,
  w: 9,
  h: 9,
  col: "#b8c8ff",
  el: "holy",
  home: 0.14,
  pic: _0x12d67b
};
const _0x297e8d = {
  k: "proj",
  p: _0x49acaa,
  m: 1.2,
  n: 2
};
const _0x434ee5 = {
  on: "interval",
  every: 4,
  do: [_0x297e8d]
};
const _0x23d2f8 = {
  name: "계승자의 빛",
  desc: "모든 피해 +15%. 4초마다 별의 구체가 가까운 적에게 별빛 두 개를 쏜다 (각 공격력 120%, 유도).",
  effects: [_0x4b25d7, _0x434ee5]
};
const _0x2048d2 = {
  target: "skill1",
  dmg: 0.4
};
const _0x8a8b18 = {
  desc: "빛의 돌진 피해 +40%",
  mods: [_0x2048d2]
};
const _0x24e845 = {
  target: "skill2",
  cd: 4
};
const _0x1491f1 = {
  desc: "세계를 비추는 빛 쿨타임 -4초",
  mods: [_0x24e845]
};
const _0x310046 = {
  crit: 0.15
};
const _0x4895dc = {
  stats: _0x310046
};
const _0x2c6575 = {
  desc: "치명타 확률 +15%",
  effects: [_0x4895dc]
};
const _0x6e7485 = {
  target: "swap",
  dmg: 0.6
};
const _0x30ab84 = {
  desc: "별자리 계승 피해 +60%",
  mods: [_0x6e7485]
};
const _0x135880 = {
  target: "all",
  dmg: 0.35
};
const _0x14455e = {
  cdr: 0.1
};
const _0x33cafe = {
  stats: _0x14455e
};
const _0x463bac = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x135880],
  effects: [_0x33cafe]
};
const _0x1af076 = {
  skin: "#f4ecf0",
  hair: "#d8d8f0",
  hairStyle: "starhood",
  body: "#1a1a3a",
  trim: "#7ab8ff",
  legs: "#14142e",
  boots: "#c8c8e0",
  cape: "#e0e0f0",
  eye: "#7ab8ff",
  weapon: "orb",
  wcol: "#7ab8ff",
  wcol2: "#2a2a5a",
  build: "slim",
  glow: "#7ab8ff",
  extra: "compass"
};
const _0x43c7bb = {
  name: "lucas:spark",
  w: 16,
  spin: 0.25
};
const _0x46e23c = {
  spr: "star",
  spd: 6,
  life: 55,
  w: 10,
  h: 10,
  col: "#9ac8ff",
  el: "holy",
  pic: _0x43c7bb
};
const _0x351d87 = {
  dur: 15,
  t: 5,
  m: 1.53,
  p: _0x46e23c,
  w: "windHigh",
  s: "slashDown",
  sfx: "cast"
};
const _0x385bcc = {
  name: "lucas:spark",
  w: 14,
  spin: 0.25
};
const _0x1d0d48 = {
  spr: "star",
  spd: 6,
  life: 55,
  w: 10,
  h: 10,
  col: "#9ac8ff",
  el: "holy",
  pic: _0x385bcc
};
const _0x52839c = {
  dur: 15,
  t: 5,
  m: 1.08,
  n: 2,
  spread: 14,
  p: _0x1d0d48,
  w: "windLow",
  s: "slashUp",
  sfx: "cast"
};
const _0x44dcf0 = {
  t: 5,
  k: "sfx",
  s: "cast"
};
const _0x456722 = {
  name: "lucas:compass",
  w: 22,
  spin: 0.2
};
const _0x475386 = {
  spr: "orb",
  spd: 5,
  life: 70,
  w: 16,
  h: 16,
  col: "#7ab8ff",
  el: "holy",
  pierce: 2,
  home: 0.1,
  pic: _0x456722
};
const _0x4da78a = {
  t: 7,
  k: "proj",
  p: _0x475386,
  m: 2.88
};
const _0x57bbb8 = {
  dur: 26,
  pose: [[0, "thrustWind"], [6, "thrust"]],
  cancel: 20,
  ev: [_0x44dcf0, _0x4da78a]
};
const _0x448ab3 = {
  name: "lucas:spark",
  w: 14,
  spin: 0.2
};
const _0x23f77e = {
  spr: "star",
  spd: 5,
  life: 60,
  w: 9,
  h: 9,
  col: "#9ac8ff",
  el: "holy",
  pic: _0x448ab3
};
const _0x45d330 = {
  dur: 16,
  t: 4,
  m: 1.44,
  ang: 35,
  air: !0,
  grav: 0.35,
  p: _0x23f77e,
  w: "cast",
  s: "castUp"
};
const _0x292db5 = {
  t: 6,
  k: "pic",
  name: "lucas:compass",
  dx: 0,
  dy: -8,
  s0: 20,
  s1: 50,
  life: 16
};
const _0x613f19 = {
  t: 6,
  k: "nova",
  r: 34,
  m: 1.8,
  el: "holy",
  col: "#7ab8ff"
};
const _0x68cf25 = {
  t: 6,
  k: "sfx",
  s: "cast"
};
const _0xb76879 = {
  dur: 18,
  pose: [[0, "dash"], [6, "cast"]],
  move: [[0, 4], [10, 0]],
  inv: [0, 8],
  ev: [_0x292db5, _0x613f19, _0x68cf25]
};
const _0x5c5ecf = {
  t: 8,
  k: "sfx",
  s: "cast"
};
const _0x30c541 = {
  name: "lucas:whale",
  w: 72,
  rot: 0
};
const _0x56a51b = {
  spr: "wave",
  spd: 3.2,
  life: 110,
  w: 56,
  h: 34,
  col: "#7ab8ff",
  el: "holy",
  pierce: 99,
  kb: 4,
  pic: _0x30c541
};
const _0x35a9a1 = {
  t: 10,
  k: "proj",
  p: _0x56a51b,
  m: 4.32,
  dx: 10,
  dy: -10
};
const _0x2988c3 = {
  dur: 28,
  pose: [[0, "cast"], [8, "castUp"]],
  ev: [_0x5c5ecf, _0x35a9a1]
};
const _0x36a24b = {
  name: "별바다의 고래",
  desc: "별의 책에서 고래를 불러 앞으로 헤엄치게 한다. 지나가는 모든 적을 밀어내며 공격력 432% 피해.",
  cd: 9,
  act: _0x2988c3
};
const _0x194138 = {
  t: 4,
  k: "sfx",
  s: "gem"
};
const _0x3dbdec = {
  t: 4,
  k: "pic",
  name: "lucas:circle",
  dx: 0,
  dy: -10,
  s0: 30,
  s1: 250,
  life: 26
};
const _0x5cb3c3 = {
  t: 16,
  k: "nova",
  r: 130,
  m: 3.24,
  el: "holy",
  st: "freeze",
  up: -1,
  col: "#7ab8ff"
};
const _0x593276 = {
  t: 16,
  k: "shake",
  v: 5
};
const _0xdf2a1b = {
  t: 16,
  k: "sfx",
  s: "timestop"
};
const _0x25ca6a = {
  dur: 30,
  pose: [[0, "cast"], [8, "castUp"]],
  inv: [6, 22],
  ev: [_0x194138, _0x3dbdec, _0x5cb3c3, _0x593276, _0xdf2a1b]
};
const _0x3de302 = {
  name: "별의 해도",
  desc: "별의 해도를 펼쳐 주위를 넓게 덮는다. 범위 안의 모든 적을 얼려 2초간 멈추게 하고(보스는 1초) 공격력 324% 피해.",
  cd: 14,
  act: _0x25ca6a
};
const _0x45e11d = {
  t: 0,
  k: "sfx",
  s: "timestop"
};
const _0x1c0330 = {
  t: 2,
  k: "timestop",
  dur: 3
};
const _0x2e5d02 = {
  t: 2,
  k: "pic",
  name: "lucas:circle",
  dx: 0,
  dy: -14,
  s0: 30,
  s1: 150,
  life: 36
};
const _0x357f39 = {
  name: "lucas:whale",
  w: 140,
  rot: 0
};
const _0x408d42 = {
  spr: "wave",
  spd: 6,
  life: 120,
  w: 110,
  h: 64,
  col: "#7ab8ff",
  el: "holy",
  pierce: 99,
  kb: 6,
  pic: _0x357f39
};
const _0x3b22a1 = {
  t: 16,
  k: "proj",
  p: _0x408d42,
  m: 12,
  dx: -30,
  dy: -20
};
const _0x2c359a = {
  t: 16,
  k: "shake",
  v: 8
};
const _0xbdb191 = {
  t: 16,
  k: "sfx",
  s: "explode"
};
const _0x41bbe1 = {
  dur: 50,
  pose: [[0, "cast"], [10, "castUp"]],
  inv: [0, 50],
  armor: !0,
  ev: [_0x45e11d, _0x1c0330, _0x2e5d02, _0x3b22a1, _0x2c359a, _0xbdb191]
};
const _0x431292 = {
  name: "별바다의 고래왕",
  desc: "별의 책을 활짝 펼쳐 3초간 시간을 멈추고, 화면을 가로지르는 거대한 별의 고래를 불러 모든 적을 휩쓴다 (1200%, 관통).",
  cd: 45,
  act: _0x41bbe1
};
const _0x14dab8 = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x34f7d8 = {
  t: 4,
  k: "pic",
  name: "lucas:bigstar",
  dx: 0,
  dy: -10,
  s0: 30,
  s1: 90,
  life: 18,
  spin: 0.03
};
const _0x4b5ef3 = {
  name: "lucas:whale",
  w: 72,
  rot: 0
};
const _0x36a843 = {
  spr: "wave",
  spd: 3.6,
  life: 100,
  w: 56,
  h: 34,
  col: "#7ab8ff",
  el: "holy",
  pierce: 99,
  kb: 4,
  pic: _0x4b5ef3
};
const _0x37ae93 = {
  t: 12,
  k: "proj",
  p: _0x36a843,
  m: 3.96,
  dx: 10,
  dy: -26
};
const _0x93c8b8 = {
  name: "lucas:whale",
  w: 72,
  rot: 0
};
const _0x5629b8 = {
  spr: "wave",
  spd: 3.6,
  life: 100,
  w: 56,
  h: 34,
  col: "#7ab8ff",
  el: "holy",
  pierce: 99,
  kb: 4,
  pic: _0x93c8b8
};
const _0x4bbb6d = {
  t: 16,
  k: "proj",
  p: _0x5629b8,
  m: 3.96,
  dx: 10,
  dy: 2
};
const _0x74a3a5 = {
  t: 12,
  k: "shake",
  v: 4
};
const _0x557a6 = {
  dur: 30,
  pose: [[0, "castUp"], [12, "cast"]],
  inv: [0, 20],
  ev: [_0x14dab8, _0x34f7d8, _0x37ae93, _0x4bbb6d, _0x74a3a5]
};
const _0x1e19ca = {
  name: "교대: 대항해",
  desc: "책장을 크게 넘겨 고래 두 마리를 위아래로 나란히 헤엄치게 한다 (각 공격력 396%, 관통).",
  act: _0x557a6
};
const _0x21fbe4 = {
  skillDmg: 0.25,
  cdr: 0.1
};
const _0xa406f = {
  stats: _0x21fbe4
};
const _0x2a8ce1 = {
  aspd: 0.15,
  mspd: 0.15
};
const definition_lucas_p = {
  k: "buff",
  id: "lucas_p",
  stats: _0x2a8ce1,
  dur: 3
};
const _0x4dec2c = {
  on: "skill",
  do: [definition_lucas_p]
};
const _0x4ad4d6 = {
  name: "항해자의 직감",
  desc: "스킬 피해 +25%, 스킬 쿨타임 -10%. 스킬을 쓰면 3초간 이동 속도·공격 속도 +15%.",
  effects: [_0xa406f, _0x4dec2c]
};
const _0x3686f0 = {
  target: "skill1",
  dmg: 0.4
};
const _0x27f732 = {
  desc: "별바다의 고래 피해 +40%",
  mods: [_0x3686f0]
};
const _0x54dbb5 = {
  target: "skill2",
  size: 0.3
};
const _0x362947 = {
  desc: "별의 해도 범위 +30%",
  mods: [_0x54dbb5]
};
const _0x3c98de = {
  skillDmg: 0.2
};
const _0x5059bc = {
  stats: _0x3c98de
};
const _0x2c83fb = {
  desc: "스킬 피해 +20%",
  effects: [_0x5059bc]
};
const _0x197a07 = {
  target: "swap",
  dmg: 0.6
};
const _0x40cba0 = {
  desc: "대항해 피해 +60%",
  mods: [_0x197a07]
};
const _0x4ce3e9 = {
  target: "all",
  dmg: 0.35
};
const _0x1a3231 = {
  cdr: 0.1
};
const _0x438e6c = {
  stats: _0x1a3231
};
const _0x54bda0 = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x4ce3e9],
  effects: [_0x438e6c]
};
const _0x3298dc = {
  skin: "#f0e8f0",
  hair: "#d8d8ec",
  hairStyle: "hood",
  body: "#14101e",
  trim: "#8a6aff",
  legs: "#100c18",
  boots: "#1e1a2a",
  cape: "#1a1428",
  eye: "#a080ff",
  weapon: "daggers",
  wcol: "#a080ff",
  wcol2: "#2a1e48",
  build: "slim",
  glow: "#8a6aff"
};
const _0x12e29c = {
  arc: "down",
  r: 24,
  col: "#a080ff"
};
const _0x215e54 = {
  dur: 9,
  t: 3,
  m: 0.94,
  box: [0, -16, 34, 22],
  w: "windHigh",
  s: "slashDown",
  fx: _0x12e29c,
  hs: 2,
  lunge: 2,
  el: "shadow"
};
const _0x304c13 = {
  arc: "up",
  r: 24,
  col: "#8a6aff"
};
const _0x534892 = {
  dur: 9,
  t: 3,
  m: 0.94,
  box: [0, -18, 34, 24],
  w: "windLow",
  s: "slashUp",
  fx: _0x304c13,
  hs: 2,
  lunge: 2,
  el: "shadow"
};
const _0x333a24 = {
  arc: "thrust",
  r: 32,
  col: "#c0a8ff"
};
const _0x38cfd2 = {
  dur: 9,
  t: 3,
  m: 1.02,
  box: [0, -10, 40, 16],
  w: "thrustWind",
  s: "thrust",
  fx: _0x333a24,
  hs: 2,
  lunge: 3,
  el: "shadow"
};
const _0x264e75 = {
  arc: "circle",
  r: 24,
  col: "#8a6aff"
};
const _0x417809 = {
  dur: 10,
  t: 3,
  m: 1.02,
  box: [-14, -18, 48, 28],
  w: "windHigh",
  s: "spin",
  fx: _0x264e75,
  hs: 2,
  el: "shadow"
};
const _0x4a76be = {
  t: 2,
  k: "sfx",
  s: "swing_heavy"
};
const _0x59c5b6 = {
  t: 4,
  k: "pic",
  name: "enoch:arc",
  dx: 20,
  dy: -12,
  s0: 40,
  s1: 56,
  life: 10
};
const _0x50afb7 = {
  t: 4,
  k: "hit",
  box: [0, -24, 50, 34],
  m: 1.53,
  kb: 2,
  hs: 4,
  el: "shadow"
};
const _0x3e57f4 = {
  t: 11,
  k: "pic",
  name: "enoch:arc2",
  dx: 24,
  dy: -10,
  s0: 40,
  s1: 60,
  life: 10
};
const _0x236290 = {
  t: 11,
  k: "hit",
  box: [0, -22, 56, 32],
  m: 2.04,
  kb: 5,
  hs: 6,
  el: "shadow",
  st: "bleed",
  fin: !0,
  shake: 2
};
const _0x13d5ed = {
  dur: 22,
  pose: [[0, "windHigh"], [3, "slashDown"], [10, "slashUp"]],
  cancel: 18,
  move: [[2, 3.5], [12, 0]],
  ev: [_0x4a76be, _0x59c5b6, _0x50afb7, _0x3e57f4, _0x236290]
};
const _0x59cd21 = {
  arc: "down",
  r: 24,
  col: "#a080ff"
};
const _0x159286 = {
  dur: 12,
  t: 3,
  m: 1.02,
  box: [0, -6, 32, 24],
  w: "windHigh",
  s: "slashDown",
  fx: _0x59cd21,
  air: !0,
  grav: 0.3,
  hs: 2,
  el: "shadow"
};
const _0x39e615 = {
  arc: "h",
  r: 38,
  col: "#8a6aff"
};
const _0x289ad8 = {
  dur: 16,
  t: 4,
  m: 2.04,
  box: [-10, -14, 50, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x39e615,
  lunge: 8,
  hs: 4,
  el: "shadow",
  inv: [0, 8]
};
const _0x37874f = {
  length: 35
};
const _0x4653b8 = {
  t: 0,
  k: "sfx",
  s: "dash"
};
const _0x60547f = {
  t: 1,
  k: "tp",
  dx: 14,
  toEnemy: !0,
  exact: !0
};
const _0x2d75da = {
  t: 2,
  k: "pic",
  name: "enoch:sigil",
  dx: 0,
  dy: -14,
  s0: 20,
  s1: 60,
  life: 18
};
const _0x479c90 = {
  t: 60,
  k: "tp",
  dx: 14,
  toEnemy: !0,
  exact: !0
};
const _0x50948c = {
  length: 35
};
const _0x16fa81 = {
  t: 120,
  k: "pic",
  name: "enoch:star",
  dx: 0,
  dy: -12,
  s0: 30,
  s1: 90,
  life: 18,
  spin: 0.05
};
const _0x6f5261 = {
  t: 120,
  k: "nova",
  r: 50,
  m: 2.55,
  el: "shadow",
  st: "bleed",
  col: "#8a6aff"
};
const _0x5042db = {
  t: 120,
  k: "shake",
  v: 4
};
const _0x3647d0 = {
  t: 120,
  k: "sfx",
  s: "explode"
};
const _0xd942f8 = {
  t: 1,
  k: "sfx",
  s: "swing_heavy"
};
const _0x354b3d = {
  t: 2,
  k: "pic",
  name: "enoch:arc2",
  dx: 6,
  dy: -12,
  s0: 36,
  s1: 50,
  life: 10
};
const _0x4388a7 = {
  arc: "h",
  r: 34,
  col: "#8a6aff"
};
const _0x28f161 = {
  t: 18,
  k: "pic",
  name: "enoch:sigil",
  dx: 4,
  dy: -12,
  s0: 30,
  s1: 64,
  life: 16
};
const _0x66e11 = {
  t: 18,
  k: "sfx",
  s: "explode"
};
const _0x1d4e16 = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x318db2 = {
  t: 2,
  k: "pic",
  name: "enoch:circle",
  dx: 0,
  dy: -10,
  s0: 40,
  s1: 150,
  life: 24
};
const _0x285b3d = {
  t: 4,
  k: "nova",
  r: 80,
  m: 0.68,
  el: "shadow",
  pull: !0,
  col: "#5a3aaa"
};
const _0x1d761b = {
  t: 14,
  k: "pic",
  name: "enoch:star",
  dx: 0,
  dy: -12,
  s0: 40,
  s1: 120,
  life: 20,
  spin: 0.05
};
const _0x58fadf = {
  t: 14,
  k: "nova",
  r: 70,
  m: 6.12,
  el: "shadow",
  up: -3,
  col: "#8a6aff"
};
const _0x4765cd = {
  t: 14,
  k: "shake",
  v: 5
};
const _0x40253a = {
  t: 14,
  k: "sfx",
  s: "explode"
};
const _0x21a851 = {
  dur: 30,
  pose: [[0, "castUp"], [14, "cast"]],
  inv: [0, 18],
  ev: [_0x1d4e16, _0x318db2, _0x285b3d, _0x1d761b, _0x58fadf, _0x4765cd, _0x40253a]
};
const _0x40b5eb = {
  name: "교대: 망각의 문장",
  desc: "별의 문장을 펼쳐 주변의 적을 심연으로 끌어당긴 뒤 터뜨린다 (공격력 612%).",
  act: _0x21a851
};
const _0x191681 = {
  aspd: 0.25,
  crit: 0.1
};
const _0x186c7d = {
  stats: _0x191681
};
const _0x9cf808 = {
  mspd: 0.2,
  aspd: 0.2
};
const definition_enoch_rush = {
  k: "buff",
  id: "enoch_rush",
  stats: _0x9cf808,
  dur: 2
};
const _0x37f7d5 = {
  on: "kill",
  do: [definition_enoch_rush]
};
const _0xf92fe4 = {
  name: "심연의 가속",
  desc: "공격 속도 +25%, 치명타 +10%. 처치 시 2초간 이동·공격 속도 +20%.",
  effects: [_0x186c7d, _0x37f7d5]
};
const _0x28fb13 = {
  target: "skill1",
  dmg: 0.4
};
const _0x294ea3 = {
  desc: "심연 난도질 피해 +40%",
  mods: [_0x28fb13]
};
const _0xbb782b = {
  target: "skill2",
  cd: 2
};
const _0x5a4631 = {
  desc: "심연 돌파 쿨타임 -2초",
  mods: [_0xbb782b]
};
const _0x535f59 = {
  critDmg: 0.3
};
const _0xa8418b = {
  stats: _0x535f59
};
const _0x3b6f03 = {
  desc: "치명타 피해 +30%",
  effects: [_0xa8418b]
};
const _0xf9443e = {
  target: "swap",
  dmg: 0.6
};
const _0xef11f3 = {
  desc: "망각의 문장 피해 +60%",
  mods: [_0xf9443e]
};
const _0x390fe5 = {
  target: "all",
  dmg: 0.35
};
const _0x124598 = {
  cdr: 0.1
};
const _0x2d431e = {
  stats: _0x124598
};
const _0x231ef0 = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x390fe5],
  effects: [_0x2d431e]
};
const _0x1cbec3 = {
  skin: "#f4e8ec",
  hair: "#e8e0e8",
  hairStyle: "hood",
  body: "#1a0a10",
  trim: "#ff3050",
  legs: "#140810",
  boots: "#c02040",
  cape: "#2a0a14",
  eye: "#ff3050",
  weapon: "orb",
  wcol: "#ff3050",
  wcol2: "#3a0a18",
  build: "slim",
  glow: "#ff3050"
};
const _0x5c5b45 = {
  name: "ashen:orb",
  w: 16,
  spin: 0.25
};
const _0x27ce0 = {
  spr: "orb",
  spd: 6.5,
  life: 55,
  w: 10,
  h: 10,
  col: "#ff3050",
  el: "fire",
  pic: _0x5c5b45
};
const _0x53e504 = {
  dur: 14,
  t: 5,
  m: 0.85,
  p: _0x27ce0,
  w: "windHigh",
  s: "slashDown",
  sfx: "cast"
};
const _0x29a1e9 = {
  name: "ashen:orb",
  w: 14,
  spin: 0.25
};
const _0x2951ad = {
  spr: "orb",
  spd: 6.5,
  life: 55,
  w: 10,
  h: 10,
  col: "#ff3050",
  el: "fire",
  pic: _0x29a1e9
};
const _0x18f072 = {
  dur: 14,
  t: 5,
  m: 0.6,
  n: 2,
  spread: 12,
  p: _0x2951ad,
  w: "windLow",
  s: "slashUp",
  sfx: "cast"
};
const _0xdf0271 = {
  t: 4,
  k: "sfx",
  s: "swing_heavy"
};
const _0x3cdfd7 = {
  name: "ashen:arc",
  w: 40
};
const _0x3b9ee3 = {
  spr: "crescent",
  spd: 6,
  life: 46,
  w: 24,
  h: 34,
  col: "#ff3050",
  el: "fire",
  st: "burn",
  pierce: 99,
  pic: _0x3cdfd7
};
const _0x374790 = {
  t: 6,
  k: "proj",
  p: _0x3b9ee3,
  m: 1.5,
  dx: 10,
  dy: -6
};
const _0x366548 = {
  dur: 26,
  pose: [[0, "windHigh"], [6, "slashDown"]],
  cancel: 20,
  ev: [_0xdf0271, _0x374790]
};
const _0x513e93 = {
  name: "ashen:orb",
  w: 16,
  spin: 0.25
};
const _0x2b0988 = {
  spr: "orb",
  spd: 6.5,
  life: 50,
  w: 10,
  h: 10,
  col: "#ff3050",
  el: "fire",
  pic: _0x513e93
};
const _0x128a96 = {
  dur: 16,
  t: 5,
  m: 0.8,
  p: _0x2b0988,
  w: "windHigh",
  s: "slashDown",
  sfx: "cast",
  air: !0
};
const _0x1eabba = {
  arc: "h",
  r: 40,
  col: "#ff3050"
};
const _0x28d840 = {
  dur: 20,
  t: 6,
  m: 1.3,
  box: [-6, -18, 50, 30],
  w: "thrustWind",
  s: "thrust",
  fx: _0x1eabba,
  lunge: 6,
  hs: 4,
  el: "fire",
  inv: [0, 10]
};
const _0x2ed564 = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x4d0018 = {
  length: 12
};
const _0x454b23 = {
  t: 8,
  k: "sfx",
  s: "throw"
};
const _0x4842ca = {
  t: 16,
  k: "sfx",
  s: "throw"
};
const _0xe7db8f = {
  t: 24,
  k: "sfx",
  s: "throw"
};
const _0x4437ed = {
  t: 4,
  k: "sfx",
  s: "gem"
};
const _0x512ce2 = {
  length: 5
};
const _0x1b1649 = {
  t: 6,
  k: "marks",
  n: 5,
  range: 260,
  r: 34,
  m: 2.6,
  delay: 40,
  pic: "ashen:sigil",
  boom: "ashen:burst",
  el: "fire",
  st: "burn",
  col: "#ff3050"
};
const _0x43c146 = {
  length: 5
};
const _0x158f86 = {
  t: 18,
  k: "sfx",
  s: "cast"
};
const _0x1f7059 = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x2fc408 = {
  t: 0,
  k: "shake",
  v: 2
};
const _0x3d3cd2 = {
  length: 16
};
const _0x33cdca = {
  length: 48
};
const _0xf92906 = {
  t: 60,
  k: "shake",
  v: 3
};
const _0x16eaf1 = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x798350 = {
  t: 2,
  k: "pic",
  name: "ashen:sigil",
  dx: 0,
  dy: -8,
  s0: 40,
  s1: 130,
  life: 22
};
const _0x9c8dfe = {
  t: 14,
  k: "pic",
  name: "ashen:burst",
  dx: 0,
  dy: -10,
  s0: 50,
  s1: 160,
  life: 20,
  spin: 0.03
};
const _0x3e73a0 = {
  t: 14,
  k: "nova",
  r: 80,
  m: 3.8,
  el: "fire",
  st: "burn",
  up: -3,
  col: "#ff3050"
};
const _0x4a4246 = {
  t: 14,
  k: "shake",
  v: 6
};
const _0x4ecab4 = {
  t: 14,
  k: "sfx",
  s: "explode"
};
const _0x3d8f3 = {
  dur: 30,
  pose: [[0, "castUp"], [14, "cast"]],
  inv: [0, 18],
  ev: [_0x16eaf1, _0x798350, _0x9c8dfe, _0x3e73a0, _0x4a4246, _0x4ecab4]
};
const _0x3f96b4 = {
  name: "교대: 잿더미의 계승",
  desc: "등장과 함께 성흔을 터뜨려 주변을 불태운다 (공격력 380%, 화상).",
  act: _0x3d8f3
};
const _0x129133 = {
  skillDmg: 0.25,
  vsBurn: 0.2
};
const _0x172081 = {
  stats: _0x129133
};
const _0xfc5191 = {
  k: "meteor",
  m: 2,
  spr: "spear"
};
const _0x551184 = {
  on: "interval",
  every: 5,
  do: [_0xfc5191]
};
const _0x1f533f = {
  name: "꺼지지 않는 불씨",
  desc: "스킬 피해 +25%, 화상 대상에게 주는 피해 +20%. 5초마다 가장 가까운 적에게 붉은 창이 떨어진다 (공격력 200%).",
  effects: [_0x172081, _0x551184]
};
const _0x57cf66 = {
  target: "skill1",
  dmg: 0.4
};
const _0x2dcbec = {
  desc: "잿불 창우 피해 +40%",
  mods: [_0x57cf66]
};
const _0x2a4eaa = {
  target: "skill2",
  size: 0.3
};
const _0x130022 = {
  desc: "성흔 폭쇄 범위 +30%",
  mods: [_0x2a4eaa]
};
const _0x58caaf = {
  target: "skill2",
  count: 2
};
const _0x4eaf8e = {
  desc: "성흔 폭쇄 표식 +2",
  mods: [_0x58caaf]
};
const _0x291011 = {
  target: "swap",
  dmg: 0.6
};
const _0x1526a1 = {
  desc: "잿더미의 계승 피해 +60%",
  mods: [_0x291011]
};
const _0x5b82fd = {
  target: "all",
  dmg: 0.4
};
const _0x1e1237 = {
  cdr: 0.1
};
const _0x23547a = {
  stats: _0x1e1237
};
const _0x3d3e94 = {
  desc: "모든 기술 피해 +40%, 스킬 쿨타임 -10%",
  mods: [_0x5b82fd],
  effects: [_0x23547a]
};
const _0xf77290 = {
  skin: "#f4ecf0",
  hair: "#e8e8f0",
  hairStyle: "hood",
  body: "#14141c",
  trim: "#ffd060",
  legs: "#101018",
  boots: "#2a2a34",
  cape: "#18181e",
  eye: "#ffc040",
  weapon: "greatsword",
  wcol: "#ffe8a0",
  wcol2: "#3a3020",
  build: "normal",
  glow: "#ffd060"
};
const _0x5a5e13 = {
  arc: "down",
  r: 30,
  col: "#ffd060"
};
const _0x2e0a6c = {
  dur: 13,
  t: 4,
  m: 0.85,
  box: [0, -18, 40, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x5a5e13,
  hs: 3,
  lunge: 2.5,
  el: "holy"
};
const _0x453dc1 = {
  arc: "up",
  r: 30,
  col: "#ffe8a0"
};
const _0x1bd4aa = {
  dur: 13,
  t: 4,
  m: 0.85,
  box: [0, -20, 40, 28],
  w: "windLow",
  s: "slashUp",
  fx: _0x453dc1,
  hs: 3,
  lunge: 2.5,
  el: "holy"
};
const _0x2e4bac = {
  arc: "thrust",
  r: 38,
  col: "#ffd060"
};
const _0x442591 = {
  dur: 15,
  t: 5,
  m: 1,
  box: [0, -12, 46, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x2e4bac,
  hs: 4,
  lunge: 3.5,
  el: "holy"
};
const _0x3b3bc8 = {
  t: 4,
  k: "sfx",
  s: "swing_heavy"
};
const _0x1c4a6c = {
  t: 7,
  k: "pic",
  name: "luciel:arc3",
  dx: 22,
  dy: -12,
  s0: 44,
  s1: 60,
  life: 10
};
const _0x3efe3e = {
  t: 7,
  k: "hit",
  box: [-6, -24, 56, 36],
  m: 1.5,
  kb: 5,
  hs: 7,
  el: "holy",
  fin: !0,
  shake: 3
};
const _0x5eefd1 = {
  name: "luciel:arc",
  w: 34
};
const _0x13fc2e = {
  spr: "crescent",
  spd: 6,
  life: 30,
  w: 20,
  h: 30,
  col: "#ffd060",
  el: "holy",
  pierce: 99,
  pic: _0x5eefd1
};
const _0x5c1146 = {
  t: 9,
  k: "proj",
  p: _0x13fc2e,
  m: 0.8,
  dx: 14,
  dy: -6
};
const _0x1a8d43 = {
  dur: 28,
  pose: [[0, "slamWind"], [6, "slam"]],
  cancel: 22,
  move: [[4, 3], [12, 0]],
  ev: [_0x3b3bc8, _0x1c4a6c, _0x3efe3e, _0x5c1146]
};
const _0x1103f1 = {
  arc: "down",
  r: 30,
  col: "#ffd060"
};
const _0xd83bc0 = {
  dur: 16,
  t: 4,
  m: 0.9,
  box: [0, -6, 36, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x1103f1,
  air: !0,
  grav: 0.3,
  hs: 3,
  el: "holy"
};
const _0x5723f5 = {
  arc: "h",
  r: 44,
  col: "#ffd060"
};
const _0x44e889 = {
  dur: 20,
  t: 5,
  m: 1.4,
  box: [-10, -14, 56, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x5723f5,
  lunge: 8,
  hs: 5,
  el: "holy",
  inv: [0, 10]
};
const _0x5983c8 = {
  t: 4,
  k: "sfx",
  s: "swing_heavy"
};
const _0x549ac9 = {
  arc: "down",
  r: 44,
  col: "#ffe8a0"
};
const _0x3a946e = {
  t: 7,
  k: "hit",
  box: [-4, -44, 46, 62],
  m: 1.8,
  kb: 4,
  up: -2,
  hs: 6,
  el: "holy",
  fx: _0x549ac9,
  shake: 4
};
const _0x56e47f = {
  length: 8
};
const _0x3381f4 = {
  t: 9,
  k: "sfx",
  s: "explode"
};
const _0xbb7659 = {
  length: 8
};
const _0x3e2507 = {
  length: 8
};
const _0x594768 = {
  t: 38,
  k: "sfx",
  s: "swing_heavy"
};
const _0x4e4c26 = {
  t: 38,
  k: "pic",
  name: "luciel:arc3",
  dx: 18,
  dy: -12,
  s0: 44,
  s1: 64,
  life: 10
};
const _0x394d01 = {
  name: "luciel:arc2",
  w: 32
};
const _0xb3e52a = {
  spr: "crescent",
  spd: 6.5,
  life: 70,
  w: 20,
  h: 30,
  col: "#ffd060",
  el: "holy",
  pierce: 99,
  home: 0.1,
  pic: _0x394d01
};
const _0x8f38d6 = {
  t: 38,
  k: "proj",
  n: 5,
  spread: 12,
  p: _0xb3e52a,
  m: 1.2,
  dx: 12,
  dy: -8
};
const _0x1fa23f = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x3e761e = {
  t: 2,
  k: "pic",
  name: "luciel:emblem",
  dx: 0,
  dy: -8,
  s0: 40,
  s1: 160,
  life: 46
};
const _0x4130ba = {
  crit: 1
};
const definition_luciel_ult = {
  t: 6,
  k: "buff",
  id: "luciel_ult",
  stats: _0x4130ba,
  dur: 6
};
const _0x25539b = {
  name: "luciel:pillar",
  w: 22
};
const _0xf1f81 = {
  name: "luciel:burst",
  s0: 12,
  s1: 46,
  life: 10
};
const _0x11da0b = {
  pic: _0x25539b,
  boomPic: _0xf1f81,
  r: 30,
  col: "#ffd060",
  gap: 4,
  scatter: !0
};
const _0x4d101d = {
  t: 14,
  k: "meteor",
  n: 10,
  m: 2.6,
  spread: 260,
  el: "holy",
  look: _0x11da0b
};
const _0x14afed = {
  t: 16,
  k: "shake",
  v: 5
};
const _0x3cabcb = {
  t: 30,
  k: "sfx",
  s: "explode"
};
const _0x6e0656 = {
  t: 52,
  k: "screen",
  m: 6,
  pic: "luciel:burst",
  picW: 40,
  el: "holy",
  col: "#ffd060"
};
const _0xd56208 = {
  t: 52,
  k: "shake",
  v: 6
};
const _0x46b5f3 = {
  dur: 60,
  pose: [[0, "slamWind"], [16, "slam"]],
  inv: [0, 40],
  armor: !0,
  ev: [_0x1fa23f, _0x3e761e, definition_luciel_ult, _0x4d101d, _0x14afed, _0x3cabcb, _0x6e0656, _0xd56208]
};
const _0x4ff45b = {
  name: "타락한 성역",
  desc: "발밑에 금빛 성역을 펼쳐 6초간 치명타 확률 +100%. 하늘에서 성흔의 검 10자루가 차례로 떨어지고(각 260%), 마지막에 화면 안 모든 적에게 성흔 폭발 (600%).",
  cd: 45,
  act: _0x46b5f3
};
const _0x450c52 = {
  t: 2,
  k: "pic",
  name: "luciel:emblem",
  dx: 0,
  dy: -12,
  s0: 30,
  s1: 100,
  life: 22
};
const _0xeaaae8 = {
  t: 12,
  k: "pic",
  name: "luciel:burst",
  dx: 0,
  dy: -10,
  s0: 50,
  s1: 150,
  life: 20,
  spin: 0.03
};
const _0xfe48fd = {
  t: 12,
  k: "nova",
  r: 74,
  m: 3.6,
  el: "holy",
  up: -3,
  col: "#ffd060"
};
const _0x3c2955 = {
  t: 12,
  k: "shake",
  v: 6
};
const _0x58d4ea = {
  t: 12,
  k: "sfx",
  s: "explode"
};
const _0x566d38 = {
  dur: 30,
  pose: [[0, "slamWind"], [12, "slam"]],
  inv: [0, 18],
  ev: [_0x450c52, _0xeaaae8, _0xfe48fd, _0x3c2955, _0x58d4ea]
};
const _0x4162d6 = {
  name: "교대: 신성의 문장",
  desc: "신성의 문장을 펼치며 내려와 주변을 금빛으로 폭발시킨다 (공격력 360%).",
  act: _0x566d38
};
const _0x118fd3 = {
  crit: 0.12,
  critDmg: 0.3
};
const _0x4c4481 = {
  stats: _0x118fd3
};
const _0x56757a = {
  k: "wave",
  m: 1
};
const _0x17a649 = {
  on: "finisher",
  do: [_0x56757a]
};
const _0x5e7480 = {
  name: "꺼지지 않은 신성",
  desc: "치명타 확률 +12%, 치명타 피해 +30%. 콤보 마지막 타격 시 충격파 (공격력 100%).",
  effects: [_0x4c4481, _0x17a649]
};
const _0x2538e9 = {
  target: "skill1",
  dmg: 0.4
};
const _0x470c0d = {
  desc: "성역 가르기 피해 +40%",
  mods: [_0x2538e9]
};
const _0x209eaf = {
  target: "skill2",
  cd: 2
};
const _0x121fce = {
  desc: "타락한 검무 쿨타임 -2초",
  mods: [_0x209eaf]
};
const _0x47b7a7 = {
  atk: 0.1
};
const _0x4e6b4c = {
  stats: _0x47b7a7
};
const _0x189d5c = {
  desc: "공격력 +10%",
  effects: [_0x4e6b4c]
};
const _0x1d7704 = {
  target: "swap",
  dmg: 0.6
};
const _0x4a6345 = {
  desc: "신성의 문장 피해 +60%",
  mods: [_0x1d7704]
};
const _0x949dce = {
  target: "all",
  dmg: 0.35
};
const _0x49ef42 = {
  cdr: 0.1
};
const _0x33b105 = {
  stats: _0x49ef42
};
const _0x503b57 = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x949dce],
  effects: [_0x33b105]
};
const _0x5dec7e = {
  skin: "#f4ecf0",
  hair: "#e8e8f0",
  hairStyle: "hood",
  body: "#f0ece8",
  trim: "#ffa040",
  legs: "#1a1418",
  boots: "#2a2024",
  cape: "#e8e0d8",
  eye: "#ffb040",
  weapon: "spear",
  wcol: "#ffe0a0",
  wcol2: "#5a3010",
  build: "normal",
  glow: "#ffa040"
};
const _0x399ddf = {
  arc: "down",
  r: 32,
  col: "#ffa040"
};
const _0x45a6b6 = {
  dur: 14,
  t: 4,
  m: 0.9,
  box: [0, -18, 44, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x399ddf,
  hs: 3,
  lunge: 2.5,
  el: "fire"
};
const _0x35dfcc = {
  arc: "thrust",
  r: 40,
  col: "#ffd080"
};
const _0x11a968 = {
  dur: 14,
  t: 4,
  m: 0.9,
  box: [0, -16, 46, 22],
  w: "thrustWind",
  s: "thrust",
  fx: _0x35dfcc,
  hs: 3,
  lunge: 3,
  el: "fire"
};
const _0x32085 = {
  t: 4,
  k: "sfx",
  s: "swing_heavy"
};
const _0x26347b = {
  t: 7,
  k: "pic",
  name: "aurel:star",
  dx: 26,
  dy: -12,
  s0: 30,
  s1: 48,
  life: 10
};
const _0x56ecbe = {
  arc: "circle",
  r: 34,
  col: "#ffa040"
};
const _0x5debf7 = {
  t: 7,
  k: "hit",
  box: [-6, -26, 58, 38],
  m: 1.7,
  kb: 6,
  hs: 7,
  el: "fire",
  st: "burn",
  fx: _0x56ecbe,
  fin: !0,
  shake: 3
};
const _0xeca5bf = {
  dur: 28,
  pose: [[0, "slamWind"], [6, "slam"]],
  move: [[4, 3], [12, 0]],
  ev: [_0x32085, _0x26347b, _0x5debf7]
};
const _0x362587 = {
  arc: "down",
  r: 30,
  col: "#ffa040"
};
const _0x53e9f6 = {
  dur: 16,
  t: 4,
  m: 0.9,
  box: [0, -6, 38, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x362587,
  air: !0,
  grav: 0.3,
  hs: 3,
  el: "fire"
};
const _0x148987 = {
  arc: "h",
  r: 46,
  col: "#ffa040"
};
const _0x17de77 = {
  dur: 20,
  t: 5,
  m: 1.4,
  box: [-10, -14, 58, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x148987,
  lunge: 8,
  hs: 5,
  el: "fire",
  inv: [0, 10]
};
const _0x4ec415 = {
  t: 0,
  k: "sfx",
  s: "dash"
};
const _0x24b130 = {
  t: 2,
  k: "tp",
  dx: 56,
  toEnemy: !0,
  range: 130,
  front: !0
};
const _0x5ecbec = {
  t: 4,
  k: "pic",
  name: "aurel:emblem",
  dx: 18,
  dy: -14,
  s0: 16,
  s1: 40,
  life: 10
};
const _0x3993fb = {
  t: 8,
  k: "sfx",
  s: "swing_heavy"
};
const _0x45fe91 = {
  arc: "down",
  r: 44,
  col: "#ffd080"
};
const _0x39c3d5 = {
  t: 9,
  k: "hit",
  box: [-4, -30, 56, 44],
  m: 3.2,
  kb: 14,
  up: -4,
  hs: 9,
  el: "fire",
  st: "burn",
  fx: _0x45fe91,
  shake: 6
};
const _0x4c04c5 = {
  t: 9,
  k: "pic",
  name: "aurel:sun",
  dx: 30,
  dy: -10,
  s0: 30,
  s1: 80,
  life: 16,
  spin: 0.05
};
const _0x875c71 = {
  t: 9,
  k: "sfx",
  s: "explode"
};
const _0x28357b = {
  dur: 34,
  pose: [[0, "slamWind"], [8, "slam"]],
  inv: [0, 16],
  armor: !0,
  ev: [_0x4ec415, _0x24b130, _0x5ecbec, _0x3993fb, _0x39c3d5, _0x4c04c5, _0x875c71]
};
const _0x25db66 = {
  name: "태양 강타",
  desc: "가까운 적(약 8칸 이내) 앞으로 순식간에 뛰어들어 태양의 창으로 내리쳐 멀리 날려 버린다 (320%, 강한 넉백). 적이 없으면 앞으로 짧게 돌진해 벤다.",
  cd: 7,
  act: _0x28357b
};
const _0x207904 = {
  t: 4,
  k: "sfx",
  s: "gem"
};
const _0x2d8c43 = {
  t: 4,
  k: "pic",
  name: "aurel:sun",
  dx: 0,
  dy: -14,
  s0: 20,
  s1: 70,
  life: 18,
  spin: 0.06
};
const _0x2102e6 = {
  atk: 0.5
};
const _0x1ac401 = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x4e3d23 = {
  t: 2,
  k: "pic",
  name: "aurel:emblem",
  dx: 0,
  dy: -36,
  s0: 24,
  s1: 76,
  life: 28
};
const _0x41389b = {
  name: "aurel:sun",
  w: 70,
  spin: 0.08
};
const _0x433f48 = {
  name: "aurel:sun",
  s0: 50,
  s1: 170,
  life: 18
};
const _0xf2b982 = {
  pic: _0x41389b,
  boomPic: _0x433f48,
  r: 90,
  col: "#ffa040"
};
const _0x49a73e = {
  t: 10,
  k: "meteor",
  n: 1,
  m: 15,
  spread: 40,
  el: "fire",
  st: "burn",
  big: !0,
  look: _0xf2b982
};
const _0x33f954 = {
  t: 34,
  k: "shake",
  v: 12
};
const _0x234d1c = {
  t: 34,
  k: "sfx",
  s: "explode"
};
const _0x2d1820 = {
  dur: 60,
  pose: [[0, "castUp"], [30, "slam"]],
  inv: [0, 40],
  armor: !0,
  ev: [_0x1ac401, _0x4e3d23, _0x49a73e, _0x33f954, _0x234d1c]
};
const _0x5a318e = {
  name: "정오의 태양창",
  desc: "태양의 창을 하늘로 던져 거대한 태양을 앞쪽에 떨어뜨린다. 넓은 범위 대폭발 (1500%, 화상).",
  cd: 45,
  act: _0x2d1820
};
const _0x367bb8 = {
  t: 2,
  k: "pic",
  name: "aurel:emblem",
  dx: 0,
  dy: -12,
  s0: 30,
  s1: 90,
  life: 22
};
const _0x251e55 = {
  t: 12,
  k: "pic",
  name: "aurel:sun",
  dx: 0,
  dy: -10,
  s0: 50,
  s1: 150,
  life: 20,
  spin: 0.03
};
const _0x28e660 = {
  t: 12,
  k: "nova",
  r: 74,
  m: 3.6,
  el: "fire",
  st: "burn",
  up: -3,
  col: "#ffa040"
};
const _0x25bb4f = {
  t: 12,
  k: "shake",
  v: 6
};
const _0x56c52d = {
  t: 12,
  k: "sfx",
  s: "explode"
};
const _0x506512 = {
  dur: 30,
  pose: [[0, "castUp"], [12, "slam"]],
  inv: [0, 18],
  ev: [_0x367bb8, _0x251e55, _0x28e660, _0x25bb4f, _0x56c52d]
};
const _0x4763f7 = {
  name: "교대: 일출",
  desc: "태양의 문장과 함께 내려와 주변을 불태운다 (공격력 360%, 화상).",
  act: _0x506512
};
const _0x43e8a4 = {
  atk: 0.1,
  vsBurn: 0.2
};
const _0x1abce5 = {
  stats: _0x43e8a4
};
const _0x37b4ae = {
  k: "wave",
  m: 1
};
const _0x52ee7b = {
  on: "finisher",
  do: [_0x37b4ae]
};
const _0x1d8129 = {
  name: "정오의 열기",
  desc: "공격력 +10%, 화상에 걸린 적에게 주는 피해 +20%. 콤보 마지막 타격 시 충격파 (공격력 100%).",
  effects: [_0x1abce5, _0x52ee7b]
};
const _0x2bbec2 = {
  target: "skill1",
  dmg: 0.4
};
const _0xde1567 = {
  desc: "태양 강타 피해 +40%",
  mods: [_0x2bbec2]
};
const _0x4802c2 = {
  target: "skill2",
  cd: 3
};
const _0x49edb2 = {
  desc: "태양의 문장 쿨타임 -3초",
  mods: [_0x4802c2]
};
const _0x32f2c9 = {
  atk: 0.1
};
const _0x54067b = {
  stats: _0x32f2c9
};
const _0x37d9c8 = {
  desc: "공격력 +10%",
  effects: [_0x54067b]
};
const _0x3aaebf = {
  target: "swap",
  dmg: 0.6
};
const _0x5ac8fc = {
  desc: "일출 피해 +60%",
  mods: [_0x3aaebf]
};
const _0x24f536 = {
  target: "all",
  dmg: 0.35
};
const _0x268350 = {
  cdr: 0.1
};
const _0x4595d6 = {
  stats: _0x268350
};
const _0x82e8ed = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x24f536],
  effects: [_0x4595d6]
};
const _0x697e66 = {
  skin: "#f4ecf0",
  hair: "#e8ecf4",
  hairStyle: "hood",
  body: "#141c30",
  trim: "#80ffc0",
  legs: "#f0f0f4",
  boots: "#1a1e2a",
  cape: "#1a2a48",
  eye: "#80e0ff",
  weapon: "staff",
  wcol: "#a0d8ff",
  wcol2: "#2a3a5a",
  build: "slim",
  glow: "#80c8ff"
};
const _0x17dc5e = {
  name: "vega:orb",
  w: 16,
  spin: 0.2
};
const _0x44ef2a = {
  spr: "orb",
  spd: 6.5,
  life: 55,
  w: 10,
  h: 10,
  col: "#80c8ff",
  el: "holy",
  pic: _0x17dc5e
};
const _0x3da82d = {
  dur: 14,
  t: 5,
  m: 0.85,
  p: _0x44ef2a,
  w: "windHigh",
  s: "slashDown",
  sfx: "cast"
};
const _0xeaffc2 = {
  name: "vega:orb",
  w: 16,
  spin: 0.2
};
const _0x22761f = {
  spr: "orb",
  spd: 6.5,
  life: 55,
  w: 10,
  h: 10,
  col: "#80c8ff",
  el: "holy",
  pic: _0xeaffc2
};
const _0x5ccd04 = {
  dur: 14,
  t: 5,
  m: 0.6,
  n: 2,
  spread: 12,
  p: _0x22761f,
  w: "windLow",
  s: "slashUp",
  sfx: "cast"
};
const _0x145e06 = {
  r: 20,
  m: 0.5,
  el: "holy",
  col: "#80c8ff"
};
const _0x36c97b = {
  name: "vega:burst",
  s0: 10,
  s1: 36,
  life: 10
};
const _0x43fde6 = {
  name: "vega:orb",
  w: 22,
  spin: 0.2
};
const _0x2665c9 = {
  spr: "orb",
  spd: 5.5,
  life: 60,
  w: 14,
  h: 14,
  col: "#a0ffd0",
  el: "holy",
  pierce: 2,
  boom: _0x145e06,
  boomPic: _0x36c97b,
  pic: _0x43fde6
};
const _0x5c5d87 = {
  dur: 20,
  t: 7,
  m: 1.2,
  p: _0x2665c9,
  w: "windHigh",
  s: "spin",
  sfx: "cast"
};
const _0x2063cd = {
  name: "vega:orb",
  w: 16,
  spin: 0.2
};
const _0x443110 = {
  spr: "orb",
  spd: 6.5,
  life: 50,
  w: 10,
  h: 10,
  col: "#80c8ff",
  el: "holy",
  pic: _0x2063cd
};
const _0x156cac = {
  dur: 16,
  t: 5,
  m: 0.8,
  p: _0x443110,
  w: "windHigh",
  s: "slashDown",
  sfx: "cast",
  air: !0
};
const _0x21c8bc = {
  name: "vega:orb",
  w: 20,
  spin: 0.2
};
const _0x4a486f = {
  spr: "orb",
  spd: 8,
  life: 50,
  w: 12,
  h: 12,
  col: "#a0ffd0",
  el: "holy",
  pierce: 3,
  pic: _0x21c8bc
};
const _0x2610e3 = {
  dur: 18,
  t: 6,
  m: 1.3,
  p: _0x4a486f,
  w: "thrustWind",
  s: "thrust",
  sfx: "cast"
};
const _0x21b006 = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x2512f7 = {
  t: 2,
  k: "pic",
  name: "vega:sigil",
  dx: 14,
  dy: -10,
  s0: 14,
  s1: 40,
  life: 16
};
const _0x320500 = {
  r: 46,
  m: 2.6,
  el: "holy",
  col: "#80c8ff"
};
const _0x17ae4d = {
  name: "vega:burst",
  s0: 20,
  s1: 96,
  life: 16
};
const _0x2db817 = {
  name: "vega:orb",
  w: 34,
  spin: 0.12
};
const _0x3990eb = {
  spr: "orb",
  spd: 3,
  life: 150,
  w: 22,
  h: 22,
  col: "#80c8ff",
  el: "holy",
  boom: _0x320500,
  boomPic: _0x17ae4d,
  pic: _0x2db817
};
const _0xa56f41 = {
  t: 8,
  k: "proj",
  dx: 16,
  dy: -8,
  m: 1.2,
  p: _0x3990eb
};
const _0x541880 = {
  t: 8,
  k: "sfx",
  s: "gem"
};
const _0x1b6241 = {
  dur: 26,
  pose: [[0, "castUp"], [8, "cast"]],
  ev: [_0x21b006, _0x2512f7, _0xa56f41, _0x541880]
};
const _0x36fa3d = {
  name: "예언의 별",
  desc: "커다란 별 구체를 쏜다. 구체는 앞으로 천천히 나아가다 적에게 닿으면 터진다 (닿을 때 120% + 폭발 260%, 넓은 범위).",
  cd: 7,
  act: _0x1b6241
};
const _0x28f4d5 = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x59d409 = {
  t: 2,
  k: "pic",
  name: "vega:sigil",
  dx: 0,
  dy: -46,
  s0: 20,
  s1: 80,
  life: 34
};
const _0xb666c0 = {
  t: 6,
  k: "pic",
  name: "vega:star",
  dx: 0,
  dy: -46,
  s0: 10,
  s1: 40,
  life: 26,
  spin: 0.1
};
const _0xb97365 = {
  name: "vega:comet",
  w: 40
};
const _0x32b526 = {
  name: "vega:burst",
  s0: 10,
  s1: 44,
  life: 10
};
const _0x11022c = {
  pic: _0xb97365,
  boomPic: _0x32b526,
  r: 26,
  col: "#80c8ff",
  gap: 3
};
const _0x50cafd = {
  t: 10,
  k: "meteor",
  n: 12,
  m: 1.1,
  spread: 150,
  el: "holy",
  look: _0x11022c
};
const _0x548e3b = {
  t: 10,
  k: "shake",
  v: 2
};
const _0x445638 = {
  t: 24,
  k: "sfx",
  s: "explode"
};
const _0x5bfcf1 = {
  dur: 40,
  pose: [[0, "cast"], [6, "castUp"]],
  armor: !0,
  ev: [_0x28f4d5, _0x59d409, _0xb666c0, _0x50cafd, _0x548e3b, _0x445638]
};
const _0x419afc = {
  name: "유성우",
  desc: "지팡이를 하늘로 들어 앞쪽에 유성 12개를 쏟아붓는다 (각 110% + 폭발 범위, 신성).",
  cd: 11,
  act: _0x5bfcf1
};
const _0x18b76e = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x56449e = {
  t: 2,
  k: "pic",
  name: "vega:sigil",
  dx: 0,
  dy: -50,
  s0: 30,
  s1: 130,
  life: 60
};
const _0xc527be = {
  name: "vega:comet",
  w: 42
};
const _0x3dd305 = {
  name: "vega:burst",
  s0: 14,
  s1: 50,
  life: 12
};
const _0x3df2ca = {
  pic: _0xc527be,
  boomPic: _0x3dd305,
  r: 40,
  col: "#80c8ff",
  gap: 6,
  scatter: !0
};
const _0x23635c = {
  t: 8,
  k: "meteor",
  n: 7,
  m: 3,
  spread: 260,
  el: "holy",
  look: _0x3df2ca
};
const _0x3dc2e7 = {
  name: "vega:orb",
  w: 56,
  spin: 0.1
};
const _0x4dfd91 = {
  name: "vega:burst",
  s0: 40,
  s1: 140,
  life: 18
};
const _0x17c720 = {
  pic: _0x3dc2e7,
  boomPic: _0x4dfd91,
  r: 80,
  col: "#80c8ff"
};
const _0x574acc = {
  t: 50,
  k: "meteor",
  n: 1,
  m: 10,
  spread: 20,
  el: "holy",
  big: !0,
  look: _0x17c720
};
const _0x2d4954 = {
  t: 60,
  k: "shake",
  v: 10
};
const _0x3eee0e = {
  t: 60,
  k: "sfx",
  s: "explode"
};
const _0x5e3a2f = {
  dur: 70,
  pose: [[0, "cast"], [6, "castUp"]],
  inv: [0, 40],
  armor: !0,
  ev: [_0x18b76e, _0x56449e, _0x23635c, _0x574acc, _0x2d4954, _0x3eee0e]
};
const _0x112b8a = {
  name: "예언된 종말",
  desc: "하늘에 예언의 마법진을 그려 커다란 유성 7개를 차례로 떨어뜨리고(각 300%), 마지막에 거대한 별 구체가 떨어진다 (1000%).",
  cd: 45,
  act: _0x5e3a2f
};
const _0x3fd5ba = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x423a65 = {
  t: 2,
  k: "pic",
  name: "vega:sigil",
  dx: 0,
  dy: -8,
  s0: 40,
  s1: 130,
  life: 22
};
const _0x10f271 = {
  t: 14,
  k: "pic",
  name: "vega:burst",
  dx: 0,
  dy: -10,
  s0: 50,
  s1: 150,
  life: 20,
  spin: 0.03
};
const _0x5b13fb = {
  t: 14,
  k: "nova",
  r: 74,
  m: 3.6,
  el: "holy",
  up: -3,
  col: "#80c8ff"
};
const _0x55abf8 = {
  t: 14,
  k: "shake",
  v: 6
};
const _0x4a11d7 = {
  t: 14,
  k: "sfx",
  s: "explode"
};
const _0x1688c1 = {
  dur: 30,
  pose: [[0, "castUp"], [14, "cast"]],
  inv: [0, 18],
  ev: [_0x3fd5ba, _0x423a65, _0x10f271, _0x5b13fb, _0x55abf8, _0x4a11d7]
};
const _0x267da2 = {
  name: "교대: 별의 계시",
  desc: "별의 마법진을 펼치며 등장해 주변에 별빛을 터뜨린다 (공격력 360%).",
  act: _0x1688c1
};
const _0x3669a3 = {
  skillDmg: 0.2,
  crit: 0.1
};
const _0x90d3c0 = {
  stats: _0x3669a3
};
const _0x2c3ffc = {
  k: "meteor",
  m: 1.8
};
const _0x526dd7 = {
  on: "interval",
  every: 6,
  do: [_0x2c3ffc]
};
const _0x3f273a = {
  name: "별의 인도",
  desc: "스킬 피해 +20%, 치명타 확률 +10%. 6초마다 가장 가까운 적에게 유성 하나가 떨어진다 (공격력 180%).",
  effects: [_0x90d3c0, _0x526dd7]
};
const _0x2611b9 = {
  target: "skill1",
  dmg: 0.4
};
const _0x4554f8 = {
  desc: "예언의 별 피해 +40%",
  mods: [_0x2611b9]
};
const _0x1783d5 = {
  target: "skill2",
  cd: 2
};
const _0xc0f44d = {
  desc: "유성우 쿨타임 -2초",
  mods: [_0x1783d5]
};
const _0x1f2e81 = {
  atk: 0.1
};
const _0x4f06a0 = {
  stats: _0x1f2e81
};
const _0x45a512 = {
  desc: "공격력 +10%",
  effects: [_0x4f06a0]
};
const _0x4f7926 = {
  target: "swap",
  dmg: 0.6
};
const _0x24f553 = {
  desc: "별의 계시 피해 +60%",
  mods: [_0x4f7926]
};
const _0x581a06 = {
  target: "all",
  dmg: 0.35
};
const _0x59546c = {
  cdr: 0.1
};
const _0xb1d44d = {
  stats: _0x59546c
};
const _0x2cdc8b = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x581a06],
  effects: [_0xb1d44d]
};
const _0x23cfe8 = {
  skin: "#f8eef2",
  hair: "#f8e0ec",
  hairStyle: "hood",
  body: "#f4e8ee",
  trim: "#ff80d0",
  legs: "#f4eef2",
  boots: "#f0e0e8",
  cape: "#f8eef4",
  eye: "#ff70c0",
  weapon: "staff",
  wcol: "#ffc0e8",
  wcol2: "#6a2050",
  build: "slim",
  glow: "#ff80d0"
};
const _0x3af66d = {
  name: "flora:orb",
  w: 16,
  spin: 0.2
};
const _0x28dbb2 = {
  spr: "orb",
  spd: 6.5,
  life: 55,
  w: 10,
  h: 10,
  col: "#ff80d0",
  el: "holy",
  pic: _0x3af66d
};
const _0x34b491 = {
  dur: 14,
  t: 5,
  m: 0.85,
  p: _0x28dbb2,
  w: "windHigh",
  s: "slashDown",
  sfx: "cast"
};
const _0x1ebdd6 = {
  name: "flora:orb",
  w: 16,
  spin: 0.2
};
const _0x2e851f = {
  spr: "orb",
  spd: 6.5,
  life: 55,
  w: 10,
  h: 10,
  col: "#ff80d0",
  el: "holy",
  pic: _0x1ebdd6
};
const _0x408a31 = {
  dur: 14,
  t: 5,
  m: 0.6,
  n: 2,
  spread: 12,
  p: _0x2e851f,
  w: "windLow",
  s: "slashUp",
  sfx: "cast"
};
const _0x43ff57 = {
  r: 20,
  m: 0.5,
  el: "holy",
  col: "#ff80d0"
};
const _0x13dd4b = {
  name: "flora:burst",
  s0: 10,
  s1: 36,
  life: 10
};
const _0x3810c9 = {
  name: "flora:orb",
  w: 22,
  spin: 0.2
};
const _0x31dc8c = {
  spr: "orb",
  spd: 5.5,
  life: 60,
  w: 14,
  h: 14,
  col: "#ffb0e0",
  el: "holy",
  pierce: 2,
  boom: _0x43ff57,
  boomPic: _0x13dd4b,
  pic: _0x3810c9
};
const _0x4d4795 = {
  dur: 20,
  t: 7,
  m: 1.2,
  p: _0x31dc8c,
  w: "windHigh",
  s: "spin",
  sfx: "cast"
};
const _0x335cc9 = {
  name: "flora:orb",
  w: 16,
  spin: 0.2
};
const _0x3e843c = {
  spr: "orb",
  spd: 6.5,
  life: 50,
  w: 10,
  h: 10,
  col: "#ff80d0",
  el: "holy",
  pic: _0x335cc9
};
const _0x155794 = {
  dur: 16,
  t: 5,
  m: 0.8,
  p: _0x3e843c,
  w: "windHigh",
  s: "slashDown",
  sfx: "cast",
  air: !0
};
const _0x3176de = {
  name: "flora:orb",
  w: 20,
  spin: 0.2
};
const _0x5e3ace = {
  spr: "orb",
  spd: 8,
  life: 50,
  w: 12,
  h: 12,
  col: "#ffb0e0",
  el: "holy",
  pierce: 3,
  pic: _0x3176de
};
const _0x9f7486 = {
  dur: 18,
  t: 6,
  m: 1.3,
  p: _0x5e3ace,
  w: "thrustWind",
  s: "thrust",
  sfx: "cast"
};
const _0x286359 = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x3a6c3e = {
  t: 2,
  k: "pic",
  name: "flora:sigil",
  dx: 0,
  dy: -10,
  s0: 16,
  s1: 46,
  life: 18
};
const _0x235d76 = {
  t: 6,
  k: "marks",
  n: 6,
  range: 230,
  r: 26,
  m: 2.4,
  delay: 16,
  pic: "flora:bloom",
  feet: 4,
  picW: 34,
  boom: "flora:burst",
  el: "holy",
  st: "poison",
  col: "#ff80d0"
};
const _0x4ed110 = {
  t: 22,
  k: "shake",
  v: 3
};
const _0x5e2e6c = {
  dur: 30,
  pose: [[0, "cast"], [8, "castUp"]],
  ev: [_0x286359, _0x3a6c3e, _0x235d76, _0x4ed110]
};
const _0x11e1b8 = {
  name: "피어나는 꽃",
  desc: "주변 적 최대 6명의 발밑에 마력의 꽃을 피워, 꽃이 피어나는 순간 터뜨린다 (각 240%, 중독).",
  cd: 8,
  act: _0x5e2e6c
};
const _0x3168a7 = {
  t: 2,
  k: "sfx",
  s: "gem"
};
const _0x93964e = {
  t: 2,
  k: "pic",
  name: "flora:lotus",
  dx: 0,
  dy: -12,
  s0: 20,
  s1: 90,
  life: 20
};
const _0x137811 = {
  t: 12,
  k: "nova",
  r: 60,
  m: 2.2,
  el: "holy",
  up: -2,
  col: "#ff80d0"
};
const _0x38042c = {
  t: 12,
  k: "pic",
  name: "flora:burst",
  dx: 0,
  dy: -12,
  s0: 40,
  s1: 120,
  life: 16,
  spin: 0.04
};
const _0xb06416 = {
  name: "flora:lotus",
  mode: "floor",
  size: 120
};
const _0x2b50e4 = {
  vis: "holy",
  w: 120,
  h: 30,
  life: 240,
  tick: 18,
  m: 0.45,
  el: "holy",
  pic: _0xb06416
};
const _0x196e4f = {
  t: 12,
  k: "field",
  f: _0x2b50e4,
  ground: !0
};
const _0x839239 = {
  t: 12,
  k: "heal",
  v: 0.08
};
const _0x57917f = {
  t: 12,
  k: "shake",
  v: 4
};
const _0x502e6b = {
  t: 12,
  k: "sfx",
  s: "explode"
};
const _0x30d484 = {
  dur: 30,
  pose: [[0, "castUp"], [12, "cast"]],
  inv: [0, 14],
  ev: [_0x3168a7, _0x93964e, _0x137811, _0x38042c, _0x196e4f, _0x839239, _0x57917f, _0x502e6b]
};
const _0x3fbeed = {
  name: "만개의 정원",
  desc: "발밑에 연꽃 마법진을 피워 주변을 터뜨리고 (220%), 4초 동안 정원이 남아 안의 적에게 지속 피해를 준다 (0.3초마다 45%). 펼칠 때 체력 8% 회복.",
  cd: 13,
  act: _0x30d484
};
const _0x50f276 = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x5aa4d6 = {
  t: 2,
  k: "pic",
  name: "flora:big",
  dx: 0,
  dy: -8,
  s0: 40,
  s1: 120,
  life: 22
};
const _0xdcbc43 = {
  t: 14,
  k: "pic",
  name: "flora:burst",
  dx: 0,
  dy: -10,
  s0: 50,
  s1: 150,
  life: 20,
  spin: 0.03
};
const _0x132376 = {
  t: 14,
  k: "nova",
  r: 74,
  m: 3.6,
  el: "holy",
  up: -3,
  col: "#ff80d0"
};
const _0x5bbf7b = {
  t: 14,
  k: "shake",
  v: 6
};
const _0x4db8be = {
  t: 14,
  k: "sfx",
  s: "explode"
};
const _0x4c6a93 = {
  dur: 30,
  pose: [[0, "castUp"], [14, "cast"]],
  inv: [0, 18],
  ev: [_0x50f276, _0x5aa4d6, _0xdcbc43, _0x132376, _0x5bbf7b, _0x4db8be]
};
const _0x2cf20d = {
  name: "교대: 봄의 개화",
  desc: "꽃잎 마법진을 펼치며 등장해 주변을 터뜨린다 (공격력 360%).",
  act: _0x4c6a93
};
const _0x418823 = {
  skillDmg: 0.2,
  vsPoison: 0.2
};
const _0x486ea9 = {
  stats: _0x418823
};
const _0x2fabe7 = {
  k: "heal",
  v: 0.01
};
const _0x21d8ef = {
  on: "kill",
  do: [_0x2fabe7]
};
const _0x57598c = {
  name: "살아 있는 꽃",
  desc: "스킬 피해 +20%, 중독된 적에게 주는 피해 +20%. 처치 시 체력 1% 회복.",
  effects: [_0x486ea9, _0x21d8ef]
};
const _0x34a988 = {
  target: "skill1",
  dmg: 0.4
};
const _0x468643 = {
  desc: "피어나는 꽃 피해 +40%",
  mods: [_0x34a988]
};
const _0x39211f = {
  target: "skill2",
  cd: 2
};
const _0x425029 = {
  desc: "만개의 정원 쿨타임 -2초",
  mods: [_0x39211f]
};
const _0x3251a1 = {
  atk: 0.1
};
const _0xcd4430 = {
  stats: _0x3251a1
};
const _0x34136d = {
  desc: "공격력 +10%",
  effects: [_0xcd4430]
};
const _0x2764d5 = {
  target: "swap",
  dmg: 0.6
};
const _0x5d6056 = {
  desc: "봄의 개화 피해 +60%",
  mods: [_0x2764d5]
};
const _0x3cb00a = {
  target: "all",
  dmg: 0.35
};
const _0x5e2b0d = {
  cdr: 0.1
};
const _0x29c1dd = {
  stats: _0x5e2b0d
};
const _0x3daa6e = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x3cb00a],
  effects: [_0x29c1dd]
};
const _0x575dbe = {
  skin: "#f4ecf0",
  hair: "#e8e8e8",
  hairStyle: "hood",
  body: "#141814",
  trim: "#d0c040",
  legs: "#101210",
  boots: "#1a1a14",
  cape: "#2a4a20",
  eye: "#a0ff60",
  weapon: "talisman",
  wcol: "#f0f0e0",
  wcol2: "#2a6a20",
  build: "slim",
  glow: "#a0ff60"
};
const _0x5cd840 = {
  name: "gambler:card",
  w: 8,
  spin: 0.35
};
const _0x289ab7 = {
  spr: "arrow",
  spd: 8,
  life: 50,
  w: 10,
  h: 8,
  col: "#e0ffc0",
  pic: _0x5cd840
};
const _0x586063 = {
  dur: 12,
  t: 4,
  m: 0.8,
  p: _0x289ab7,
  w: "shootWind",
  s: "shoot",
  sfx: "throw"
};
const _0x239e9e = {
  name: "gambler:card",
  w: 8,
  spin: 0.35
};
const _0x509c19 = {
  spr: "arrow",
  spd: 8,
  life: 50,
  w: 10,
  h: 8,
  col: "#e0ffc0",
  pic: _0x239e9e
};
const _0x2a9be7 = {
  dur: 12,
  t: 4,
  m: 0.55,
  n: 2,
  spread: 10,
  p: _0x509c19,
  w: "shootWind",
  s: "shoot",
  sfx: "throw"
};
const _0x5194ed = {
  name: "gambler:card",
  w: 8,
  spin: 0.35
};
const _0x4befe4 = {
  spr: "arrow",
  spd: 8,
  life: 60,
  w: 10,
  h: 8,
  col: "#a0ff60",
  pierce: 1,
  pic: _0x5194ed
};
const _0x523802 = {
  dur: 20,
  t: 7,
  m: 0.5,
  n: 3,
  spread: 12,
  p: _0x4befe4,
  w: "windHigh",
  s: "throw",
  sfx: "throw"
};
const _0x34b7ae = {
  name: "gambler:card",
  w: 8,
  spin: 0.35
};
const _0x1e4222 = {
  spr: "arrow",
  spd: 8,
  life: 50,
  w: 10,
  h: 8,
  col: "#e0ffc0",
  pic: _0x34b7ae
};
const _0x1aeeda = {
  dur: 14,
  t: 4,
  m: 0.8,
  p: _0x1e4222,
  w: "shootWind",
  s: "shoot",
  sfx: "throw",
  air: !0
};
const _0x34e062 = {
  name: "gambler:card",
  w: 8,
  spin: 0.35
};
const _0x2cab1d = {
  spr: "arrow",
  spd: 9,
  life: 50,
  w: 12,
  h: 8,
  col: "#a0ff60",
  pierce: 3,
  pic: _0x34e062
};
const _0x2fadfb = {
  dur: 18,
  t: 6,
  m: 1.2,
  p: _0x2cab1d,
  w: "shootWind",
  s: "shoot",
  sfx: "throw"
};
const _0x4c1f28 = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x6f7820 = {
  name: "gambler:card",
  w: 9,
  spin: 0.35
};
const _0x21d1e4 = {
  spr: "arrow",
  spd: 8.5,
  life: 70,
  w: 12,
  h: 8,
  col: "#ffe040",
  pierce: 1,
  pic: _0x6f7820
};
const _0x4c6fbf = {
  t: 2,
  k: "roulette",
  spin: 28,
  wheel: "gambler:wheel",
  m: 1,
  p: _0x21d1e4
};
const _0x16c890 = {
  dur: 44,
  pose: [[0, "castUp"], [30, "throw"]],
  armor: !0,
  ev: [_0x4c1f28, _0x4c6fbf]
};
const _0x3fc0c2 = {
  name: "운명의 룰렛",
  desc: "머리 위의 룰렛을 돌린다. 결과에 따라 카드의 배율과 장수가 정해진다 — ×30 잭팟 7장(7%) · ×12 대박 5장(10%) · ×1 3장(40%) · ×1/4 2장(23%) · ×1/7 1장(20%) (카드 1장 기본 100%, 가까운 적들에게 투척).",
  cd: 9,
  act: _0x16c890
};
const _0x25df05 = {
  boom: 1.7,
  r: 34,
  big: 30
};
const _0x4d5dfe = {
  name: "gambler:burst",
  s0: 16,
  s1: 70,
  life: 14
};
const _0x318647 = {
  name: "gambler:card",
  w: 11,
  spin: 0.3
};
const _0x57ff0f = {
  spr: "arrow",
  spd: 8,
  life: 70,
  w: 12,
  h: 10,
  col: "#a0ff60",
  gamble: _0x25df05,
  boomPic: _0x4d5dfe,
  pic: _0x318647
};
const _0x4d9485 = {
  t: 6,
  k: "proj",
  m: 1,
  dx: 10,
  dy: -6,
  p: _0x57ff0f
};
const _0xe218ec = {
  t: 6,
  k: "sfx",
  s: "throw"
};
const _0x31da8b = {
  dur: 18,
  pose: [[0, "shootWind"], [6, "throw"]],
  ev: [_0x4d9485, _0xe218ec]
};
const _0x15def0 = {
  name: "도박 카드",
  desc: "카드 한 장을 던진다. 맞는 순간 결과가 정해진다: 폭발 170%(45%) · 피해 10%(45%) · 대박 3000%(10%).",
  cd: 4,
  act: _0x31da8b
};
const _0x2dabe6 = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x1aa55c = {
  name: "gambler:card",
  w: 16,
  spin: 0.35
};
const _0x105a73 = {
  spr: "arrow",
  spd: 9,
  life: 80,
  w: 16,
  h: 10,
  col: "#ffe040",
  pierce: 99,
  pic: _0x1aa55c
};
const _0x1bdce4 = {
  t: 2,
  k: "roulette",
  spin: 40,
  wheel: "gambler:wheel",
  m: 5,
  p: _0x105a73
};
const _0x476520 = {
  t: 44,
  k: "shake",
  v: 6
};
const _0x5d1435 = {
  dur: 60,
  pose: [[0, "castUp"], [40, "throw"]],
  inv: [0, 40],
  armor: !0,
  ev: [_0x2dabe6, _0x1bdce4, _0x476520]
};
const _0x11d1eb = {
  name: "올인",
  desc: "거대한 룰렛을 돌려 전 재산을 건다. 결과 배율(×30 7% · ×12 10% · ×1 40% · ×1/4 23% · ×1/7 20%)만큼 강해진 황금 카드를 결과에 따라 1~7장 던진다 (카드 1장 기본 500%, 관통 — ×30 잭팟이면 장당 15000% × 7장).",
  cd: 40,
  act: _0x5d1435
};
const _0x247d92 = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x12377e = {
  t: 2,
  k: "pic",
  name: "gambler:wheel",
  dx: 0,
  dy: -10,
  s0: 30,
  s1: 90,
  life: 22,
  spin: 0.2
};
const _0x39a5a2 = {
  t: 14,
  k: "pic",
  name: "gambler:burst",
  dx: 0,
  dy: -10,
  s0: 50,
  s1: 140,
  life: 20
};
const _0x192cf8 = {
  t: 14,
  k: "nova",
  r: 74,
  m: 3.6,
  up: -3,
  col: "#a0ff60"
};
const _0x4a836a = {
  t: 14,
  k: "shake",
  v: 6
};
const _0x382815 = {
  t: 14,
  k: "sfx",
  s: "explode"
};
const _0x226cc2 = {
  dur: 30,
  pose: [[0, "castUp"], [14, "throw"]],
  inv: [0, 18],
  ev: [_0x247d92, _0x12377e, _0x39a5a2, _0x192cf8, _0x4a836a, _0x382815]
};
const _0xe0c2ea = {
  name: "교대: 올인",
  desc: "카드를 흩뿌리며 등장해 주변을 터뜨린다 (공격력 360%).",
  act: _0x226cc2
};
const _0x2748b8 = {
  crit: 0.15,
  critDmg: 0.4,
  aspd: 0.1
};
const _0x12b123 = {
  stats: _0x2748b8
};
const _0x54d352 = {
  name: "승부사의 감",
  desc: "치명타 확률 +15%, 치명타 피해 +40%, 공격 속도 +10%.",
  effects: [_0x12b123]
};
const _0x2de6bd = {
  target: "skill1",
  dmg: 0.4
};
const _0x37e263 = {
  desc: "운명의 룰렛 피해 +40%",
  mods: [_0x2de6bd]
};
const _0x89be9b = {
  target: "skill2",
  cd: 1
};
const _0x4a0598 = {
  desc: "도박 카드 쿨타임 -1초",
  mods: [_0x89be9b]
};
const _0x55017d = {
  atk: 0.1
};
const _0x299a18 = {
  stats: _0x55017d
};
const _0x1d047f = {
  desc: "공격력 +10%",
  effects: [_0x299a18]
};
const _0x5c6545 = {
  target: "swap",
  dmg: 0.6
};
const _0x5183f7 = {
  desc: "올인 피해 +60%",
  mods: [_0x5c6545]
};
const _0x18c7ce = {
  target: "all",
  dmg: 0.35
};
const _0xea5eb6 = {
  cdr: 0.1
};
const _0x5abe7e = {
  stats: _0xea5eb6
};
const _0x384d99 = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x18c7ce],
  effects: [_0x5abe7e]
};
const _0x11d2f6 = {
  skin: "#f4ecf0",
  hair: "#e8e8f4",
  hairStyle: "hood",
  body: "#141420",
  trim: "#d0b070",
  legs: "#101018",
  boots: "#1a1a24",
  cape: "#e8e8f4",
  eye: "#b0c0ff",
  weapon: "sword",
  wcol: "#d8d0ff",
  wcol2: "#3a3060",
  build: "normal",
  glow: "#b0a0ff"
};
const _0x4b0286 = {
  arc: "down",
  r: 30,
  col: "#b0a0ff"
};
const _0x1bdb5c = {
  dur: 12,
  t: 3,
  m: 0.8,
  box: [0, -18, 40, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x4b0286,
  hs: 3,
  lunge: 2.5
};
const _0x545512 = {
  arc: "up",
  r: 30,
  col: "#d8d0ff"
};
const _0x5bc95f = {
  dur: 12,
  t: 3,
  m: 0.8,
  box: [0, -20, 40, 28],
  w: "windLow",
  s: "slashUp",
  fx: _0x545512,
  hs: 3,
  lunge: 2.5
};
const _0x37eae1 = {
  arc: "thrust",
  r: 38,
  col: "#b0a0ff"
};
const _0x5a1fcb = {
  dur: 13,
  t: 4,
  m: 0.9,
  box: [0, -12, 46, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x37eae1,
  hs: 3,
  lunge: 3.5
};
const _0x280ef4 = {
  t: 4,
  k: "sfx",
  s: "swing_heavy"
};
const _0x576057 = {
  t: 7,
  k: "pic",
  name: "lumien:crescent",
  dx: 22,
  dy: -12,
  s0: 36,
  s1: 54,
  life: 10
};
const _0x6551cc = {
  t: 7,
  k: "hit",
  box: [-6, -24, 56, 36],
  m: 1.5,
  kb: 5,
  hs: 6,
  fin: !0,
  shake: 3
};
const _0x125f99 = {
  name: "lumien:streak",
  w: 40
};
const _0x7cfc59 = {
  spr: "crescent",
  spd: 6,
  life: 30,
  w: 20,
  h: 30,
  col: "#b0a0ff",
  pierce: 99,
  pic: _0x125f99
};
const _0x4ac4bd = {
  t: 9,
  k: "proj",
  p: _0x7cfc59,
  m: 0.8,
  dx: 14,
  dy: -6
};
const _0x58ab93 = {
  dur: 26,
  pose: [[0, "slamWind"], [6, "slam"]],
  move: [[4, 3], [12, 0]],
  ev: [_0x280ef4, _0x576057, _0x6551cc, _0x4ac4bd]
};
const _0xcb3a3a = {
  arc: "down",
  r: 28,
  col: "#b0a0ff"
};
const _0xcbef55 = {
  dur: 15,
  t: 4,
  m: 0.85,
  box: [0, -6, 36, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0xcb3a3a,
  air: !0,
  grav: 0.3,
  hs: 3
};
const _0x1f8795 = {
  arc: "h",
  r: 44,
  col: "#b0a0ff"
};
const _0x588339 = {
  dur: 18,
  t: 5,
  m: 1.3,
  box: [-10, -14, 56, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x1f8795,
  lunge: 8,
  hs: 5,
  inv: [0, 10]
};
const _0x2f9305 = {
  t: 1,
  k: "markPos"
};
const _0x125199 = {
  t: 2,
  k: "sfx",
  s: "dash"
};
const _0x27f575 = {
  arc: "h",
  r: 40,
  col: "#d8d0ff"
};
const _0xb7ea43 = {
  t: 4,
  k: "hit",
  box: [-30, -22, 60, 34],
  m: 1.1,
  kb: 1,
  hs: 2,
  fx: _0x27f575
};
const _0x28929a = {
  t: 10,
  k: "hit",
  box: [-30, -22, 60, 34],
  m: 1.1,
  kb: 1,
  hs: 2
};
const _0x347e3a = {
  vis: "star",
  w: 1,
  h: 40,
  life: 30,
  tick: 7,
  m: 1
};
const _0x3b0f99 = {
  pic: "lumien:crescent",
  every: 8,
  size: 30
};
const _0x13b18a = {
  t: 17,
  k: "field",
  f: _0x347e3a,
  trail: _0x3b0f99
};
const _0x53dabb = {
  t: 17,
  k: "sfx",
  s: "swing_heavy"
};
const _0x4fd884 = {
  dur: 30,
  pose: [[0, "thrustWind"], [3, "dash"], [17, "slashDown"]],
  inv: [0, 20],
  move: [[2, 10], [16, 0]],
  ev: [_0x2f9305, _0x125199, _0xb7ea43, _0x28929a, _0x13b18a, _0x53dabb]
};
const _0x1c2aa3 = {
  name: "광휘 질주",
  desc: "앞으로 길게 돌진하며 지나가는 적을 벤다 (110%). 지나온 경로에 0.5초 동안 빛의 잔참격이 남아 0.125초마다 공격력 100% 피해를 준다 (4회). 돌진 중 무적.",
  cd: 7,
  act: _0x4fd884
};
const _0xee21a5 = {
  t: 5,
  k: "sfx",
  s: "swing_heavy"
};
const _0x217349 = {
  arc: "down",
  r: 44,
  col: "#d8d0ff"
};
const _0x4232db = {
  t: 8,
  k: "hit",
  box: [-4, -44, 46, 62],
  m: 1.5,
  kb: 3,
  up: -2,
  hs: 6,
  fx: _0x217349,
  shake: 3
};
const _0x5c4333 = {
  t: 16,
  k: "shake",
  v: 4
};
const _0x445d36 = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0xf9c7ec = {
  t: 6,
  k: "sfx",
  s: "swing_heavy"
};
const _0x2a6f9e = {
  t: 8,
  k: "pic",
  name: "lumien:streak",
  dx: 70,
  dy: -10,
  s0: 80,
  s1: 200,
  life: 16
};
const _0x4ddd8f = {
  arc: "h",
  r: 90,
  col: "#d8d0ff"
};
const _0x53ed5f = {
  t: 8,
  k: "hit",
  box: [-10, -40, 220, 60],
  m: 3,
  kb: 3,
  hs: 8,
  fx: _0x4ddd8f,
  shake: 6
};
const _0x51317f = {
  vis: "star",
  w: 1,
  h: 56,
  life: 180,
  tick: 7,
  m: 1.7
};
const _0x3ebe26 = {
  pic: "lumien:crescent",
  every: 8,
  size: 32,
  span: 200
};
const _0x2a59ba = {
  t: 10,
  k: "field",
  f: _0x51317f,
  trail: _0x3ebe26
};
const _0xba35c6 = {
  t: 10,
  k: "sfx",
  s: "explode"
};
const _0x2a7d1d = {
  t: 10,
  k: "shake",
  v: 4
};
const _0x561d72 = {
  dur: 36,
  pose: [[0, "windHigh"], [8, "slashDown"], [16, "thrust"]],
  inv: [0, 20],
  armor: !0,
  ev: [_0x445d36, _0xf9c7ec, _0x2a6f9e, _0x53ed5f, _0x2a59ba, _0xba35c6, _0x2a7d1d]
};
const _0x5e3721 = {
  name: "광휘 일섬",
  desc: "정면을 크게 가로벤 뒤(300%), 벤 자리 앞쪽 200px에 빛의 잔참격이 3초 동안 남아 약 0.125초마다 공격력 170% 피해를 준다.",
  cd: 45,
  act: _0x561d72
};
const _0x20c6dd = {
  t: 2,
  k: "pic",
  name: "lumien:sigil",
  dx: 0,
  dy: -12,
  s0: 30,
  s1: 90,
  life: 20
};
const _0x5608d6 = {
  t: 10,
  k: "pic",
  name: "lumien:burst",
  dx: 0,
  dy: -10,
  s0: 50,
  s1: 140,
  life: 18
};
const _0x1ce3ad = {
  t: 10,
  k: "nova",
  r: 70,
  m: 3.6,
  up: -3,
  col: "#b0a0ff"
};
const _0x5373a6 = {
  t: 10,
  k: "shake",
  v: 6
};
const _0x567c93 = {
  t: 10,
  k: "sfx",
  s: "explode"
};
const _0x15de02 = {
  dur: 28,
  pose: [[0, "slamWind"], [10, "spin"]],
  inv: [0, 18],
  ev: [_0x20c6dd, _0x5608d6, _0x1ce3ad, _0x5373a6, _0x567c93]
};
const _0xcce87 = {
  name: "교대: 빛의 잔상",
  desc: "빛의 검기를 그으며 등장해 주변을 벤다 (공격력 360%).",
  act: _0x15de02
};
const _0x4d537e = {
  aspd: 0.15,
  crit: 0.12,
  dashDmg: 0.2
};
const _0x168e6f = {
  stats: _0x4d537e
};
const _0x2acece = {
  name: "꺼지지 않는 광휘",
  desc: "공격 속도 +15%, 치명타 확률 +12%, 대시 공격 피해 +20%.",
  effects: [_0x168e6f]
};
const _0x49de0e = {
  target: "skill1",
  dmg: 0.4
};
const _0x57a074 = {
  desc: "광휘 질주 피해 +40%",
  mods: [_0x49de0e]
};
const _0x7e7bae = {
  target: "skill2",
  cd: 2
};
const _0x1ef6b6 = {
  desc: "광휘의 문장 쿨타임 -2초",
  mods: [_0x7e7bae]
};
const _0x289b9b = {
  atk: 0.1
};
const _0x8de113 = {
  stats: _0x289b9b
};
const _0x23948d = {
  desc: "공격력 +10%",
  effects: [_0x8de113]
};
const _0x1d1e0d = {
  target: "swap",
  dmg: 0.6
};
const _0x3191d4 = {
  desc: "빛의 잔상 피해 +60%",
  mods: [_0x1d1e0d]
};
const _0x28d1bc = {
  target: "all",
  dmg: 0.35
};
const _0x13bb4 = {
  cdr: 0.1
};
const _0x3275ab = {
  stats: _0x13bb4
};
const _0x1ba2a7 = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x28d1bc],
  effects: [_0x3275ab]
};
const _0x3736c1 = {
  skin: "#f4ecf0",
  hair: "#e0e0e4",
  hairStyle: "spiky",
  body: "#141418",
  trim: "#e8c060",
  legs: "#101014",
  boots: "#e8e8ec",
  cape: "#f0f0f4",
  eye: "#ffc040",
  weapon: "fists",
  wcol: "#e8c060",
  wcol2: "#5a4010",
  build: "normal",
  glow: "#ffd070"
};
const _0xe4310f = {
  arc: "thrust",
  r: 26,
  col: "#ffd070"
};
const _0x32cb90 = {
  dur: 11,
  t: 3,
  m: 1.12,
  box: [0, -16, 34, 22],
  w: "thrustWind",
  s: "thrust",
  fx: _0xe4310f,
  hs: 3,
  lunge: 2.5
};
const _0x12f32d = {
  arc: "thrust",
  r: 26,
  col: "#fff0c0"
};
const _0x335227 = {
  dur: 11,
  t: 3,
  m: 1.12,
  box: [0, -16, 34, 22],
  w: "windLow",
  s: "thrust",
  fx: _0x12f32d,
  hs: 3,
  lunge: 2.5
};
const _0x1b1b42 = {
  arc: "up",
  r: 30,
  col: "#ffd070"
};
const _0x195df0 = {
  dur: 13,
  t: 4,
  m: 1.35,
  box: [0, -26, 36, 32],
  w: "windLow",
  s: "uppercut",
  fx: _0x1b1b42,
  hs: 4,
  lunge: 2,
  up: -3
};
const _0xbcf172 = {
  t: 5,
  k: "sfx",
  s: "swing_heavy"
};
const _0x171387 = {
  t: 8,
  k: "pic",
  name: "jax:punch",
  dx: 26,
  dy: -10,
  s0: 30,
  s1: 52,
  life: 10
};
const _0x207976 = {
  t: 8,
  k: "hit",
  box: [0, -22, 52, 32],
  m: 2.55,
  kb: 7,
  hs: 7,
  fin: !0,
  shake: 4
};
const _0x45d6ed = {
  dur: 26,
  pose: [[0, "thrustWind"], [7, "thrust"]],
  move: [[4, 4], [12, 0]],
  ev: [_0xbcf172, _0x171387, _0x207976]
};
const _0x3fd2ec = {
  arc: "down",
  r: 26,
  col: "#ffd070"
};
const _0x3da3b7 = {
  dur: 14,
  t: 4,
  m: 1.27,
  box: [0, -6, 32, 26],
  w: "windHigh",
  s: "slam",
  fx: _0x3fd2ec,
  air: !0,
  grav: 0.3,
  hs: 3
};
const _0x36b841 = {
  arc: "h",
  r: 40,
  col: "#ffd070"
};
const _0x19d723 = {
  dur: 18,
  t: 5,
  m: 1.95,
  box: [-8, -14, 50, 20],
  w: "thrustWind",
  s: "thrust",
  fx: _0x36b841,
  lunge: 8,
  hs: 5,
  inv: [0, 10]
};
const _0x5b890b = {
  t: 2,
  k: "sfx",
  s: "cast"
};
const _0x139023 = {
  t: 9,
  k: "sfx",
  s: "swing_heavy"
};
const _0x59cc1e = {
  t: 11,
  k: "nova",
  r: 150,
  m: 4.5,
  up: -3,
  col: "#ffd070",
  stun: 120
};
const _0x44fa28 = {
  t: 11,
  k: "shake",
  v: 8
};
const _0x265237 = {
  t: 11,
  k: "sfx",
  s: "explode"
};
const _0x26300d = {
  t: 2,
  k: "sfx",
  s: "gem"
};
const _0x4bfdf4 = {
  t: 4,
  k: "pic",
  name: "jax:sigil",
  dx: 0,
  dy: -18,
  s0: 20,
  s1: 80,
  life: 14
};
const _0x2eb5ba = {
  dmgTaken: -0.9
};
const _0x11da13 = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x451c9b = {
  t: 4,
  k: "pic",
  name: "jax:sigil",
  dx: 0,
  dy: -10,
  s0: 30,
  s1: 140,
  life: 28
};
const _0x5eaf4b = {
  t: 10,
  k: "pic",
  name: "jax:pillar",
  dx: 0,
  dy: -26,
  s0: 40,
  s1: 90,
  life: 22
};
const _0x15fd9e = {
  t: 10,
  k: "nova",
  r: 120,
  m: 12,
  el: "holy",
  up: -3,
  col: "#ffe8a0",
  stun: 90
};
const _0x3bc26c = {
  dmgTaken: -0.8
};
const definition_jax_ult = {
  t: 10,
  k: "buff",
  id: "jax_ult",
  stats: _0x3bc26c,
  dur: 5
};
const _0x332d34 = {
  t: 10,
  k: "counter",
  dur: 300,
  m: 3
};
const _0x4410ab = {
  t: 10,
  k: "shake",
  v: 8
};
const _0x184aa2 = {
  t: 10,
  k: "sfx",
  s: "explode"
};
const _0x40c59b = {
  dur: 40,
  pose: [[0, "slamWind"], [10, "slam"]],
  inv: [0, 24],
  armor: !0,
  ev: [_0x11da13, _0x451c9b, _0x5eaf4b, _0x15fd9e, definition_jax_ult, _0x332d34, _0x4410ab, _0x184aa2]
};
const _0xf4d170 = {
  name: "광명의 수호벽",
  desc: "건틀릿으로 땅을 내리쳐 빛의 기둥 결계를 세운다. 주변에 1200% 피해 + 기절, 5초간 받는 피해 -80%, 그동안 공격을 받으면 빛의 반격 (300%).",
  cd: 45,
  act: _0x40c59b
};
const _0x46bd95 = {
  t: 2,
  k: "pic",
  name: "jax:mark",
  dx: 0,
  dy: -12,
  s0: 30,
  s1: 90,
  life: 20
};
const _0xc7a370 = {
  name: "jax:pillar",
  mode: "rise",
  size: 90
};
const _0x37b321 = {
  vis: "holy",
  w: 1,
  h: 1,
  life: 24,
  tick: 999,
  m: 0,
  pic: _0xc7a370
};
const _0x1d2885 = {
  t: 12,
  k: "field",
  ground: !0,
  f: _0x37b321
};
const _0x21edf3 = {
  t: 12,
  k: "nova",
  r: 74,
  m: 5.4,
  up: -3,
  col: "#ffd070",
  stun: 60
};
const _0x17e8b1 = {
  t: 12,
  k: "shake",
  v: 6
};
const _0x294f92 = {
  t: 12,
  k: "sfx",
  s: "explode"
};
const _0x2542da = {
  dur: 30,
  pose: [[0, "slamWind"], [12, "slam"]],
  inv: [0, 18],
  ev: [_0x46bd95, _0x1d2885, _0x21edf3, _0x17e8b1, _0x294f92]
};
const _0x351267 = {
  name: "교대: 수호의 일격",
  desc: "빛의 기둥과 함께 내려와 주변을 강타한다 (공격력 540%, 1초 기절).",
  act: _0x2542da
};
const _0x223919 = {
  hpPct: 0.2,
  dmgTaken: -0.1
};
const _0x3bf66e = {
  stats: _0x223919
};
const _0x5182a3 = {
  name: "수호자의 긍지",
  desc: "최대 체력 +20%, 받는 피해 -10%. 잭스가 기절시킨 적은 기절 동안 받는 피해 +25%.",
  effects: [_0x3bf66e]
};
const _0x2acf4e = {
  target: "skill1",
  dmg: 0.4
};
const _0x1ae64e = {
  desc: "광명 강타 피해 +40%",
  mods: [_0x2acf4e]
};
const _0x5093b3 = {
  target: "skill2",
  cd: 2
};
const _0x50843e = {
  desc: "광명의 맹세 쿨타임 -2초",
  mods: [_0x5093b3]
};
const _0x1aef80 = {
  hpPct: 0.15
};
const _0x402e2d = {
  stats: _0x1aef80
};
const _0xb65ee = {
  desc: "최대 체력 +15%",
  effects: [_0x402e2d]
};
const _0x436c35 = {
  target: "swap",
  dmg: 0.6
};
const _0xe004a3 = {
  desc: "수호의 일격 피해 +60%",
  mods: [_0x436c35]
};
const _0x4285bf = {
  target: "all",
  dmg: 0.35
};
const _0x6305bf = {
  cdr: 0.1
};
const _0x23fbeb = {
  stats: _0x6305bf
};
const _0x3dfbc1 = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x4285bf],
  effects: [_0x23fbeb]
};
const _0x559a9e = {
  skin: "#f4f0f4",
  hair: "#f0f0f8",
  hairStyle: "hood",
  body: "#14141c",
  trim: "#c8d8ff",
  legs: "#f0f0f4",
  boots: "#f0f0f4",
  cape: "#f4f4f8",
  eye: "#a0b8ff",
  weapon: "daggers",
  wcol: "#d8e4ff",
  wcol2: "#3a4060",
  build: "slim",
  glow: "#c8d8ff"
};
const _0x68ef6 = {
  arc: "down",
  r: 24,
  col: "#c8d8ff"
};
const _0x4f91f5 = {
  dur: 9,
  t: 2,
  m: 0.99,
  box: [0, -18, 34, 24],
  w: "windHigh",
  s: "slashDown",
  fx: _0x68ef6,
  hs: 2,
  lunge: 2.5,
  el: "shadow"
};
const _0x573387 = {
  arc: "up",
  r: 24,
  col: "#e8f0ff"
};
const _0x2056ba = {
  dur: 9,
  t: 2,
  m: 0.99,
  box: [0, -18, 34, 24],
  w: "windLow",
  s: "slashUp",
  fx: _0x573387,
  hs: 2,
  lunge: 2.5,
  el: "shadow"
};
const _0x4287df = {
  arc: "thrust",
  r: 32,
  col: "#c8d8ff"
};
const _0x134ab0 = {
  dur: 10,
  t: 3,
  m: 1.17,
  box: [0, -14, 40, 20],
  w: "thrustWind",
  s: "thrust",
  fx: _0x4287df,
  hs: 2,
  lunge: 3,
  el: "shadow"
};
const _0x2670b9 = {
  arc: "x",
  r: 26,
  col: "#c8d8ff"
};
const _0x574b8a = {
  dur: 24,
  times: [3, 7, 11, 16],
  m: 0.81,
  lastM: 1.1,
  lastKb: 4,
  box: [-10, -20, 46, 30],
  pose: [[0, "spin"], [4, "slashDown"], [8, "slashUp"], [12, "spin"], [16, "thrust"]],
  fx: _0x2670b9,
  el: "shadow",
  st: "bleed",
  hs: 2,
  fin: !0
};
const _0x167ab3 = {
  arc: "down",
  r: 24,
  col: "#c8d8ff"
};
const _0x302d8b = {
  dur: 13,
  t: 3,
  m: 1.26,
  box: [0, -6, 32, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x167ab3,
  air: !0,
  grav: 0.3,
  hs: 2,
  el: "shadow"
};
const _0x22c806 = {
  arc: "h",
  r: 42,
  col: "#c8d8ff"
};
const _0x25d430 = {
  dur: 16,
  t: 4,
  m: 2.16,
  box: [-10, -14, 54, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x22c806,
  lunge: 9,
  hs: 4,
  el: "shadow",
  inv: [0, 10]
};
const _0x477b22 = {
  length: 35
};
const _0x878302 = {
  t: 0,
  k: "sfx",
  s: "dash"
};
const _0x18cf5b = {
  t: 1,
  k: "tp",
  dx: 14,
  toEnemy: !0,
  exact: !0
};
const _0x486bca = {
  t: 2,
  k: "pic",
  name: "baekya:star",
  dx: 0,
  dy: -14,
  s0: 16,
  s1: 50,
  life: 14,
  spin: 0.08
};
const _0x847333 = {
  t: 60,
  k: "tp",
  dx: 14,
  toEnemy: !0,
  exact: !0
};
const _0x545a73 = {
  length: 35
};
const _0x4d7c77 = {
  t: 120,
  k: "pic",
  name: "baekya:burst",
  dx: 0,
  dy: -12,
  s0: 30,
  s1: 90,
  life: 18,
  spin: 0.05
};
const _0x30dbc3 = {
  t: 120,
  k: "nova",
  r: 50,
  m: 2.7,
  el: "shadow",
  st: "bleed",
  col: "#c8d8ff"
};
const _0x2cdd63 = {
  t: 120,
  k: "shake",
  v: 4
};
const _0xb8a49b = {
  t: 120,
  k: "sfx",
  s: "explode"
};
const _0x1c406c = {
  length: 10
};
const _0x3ba45d = {
  length: 10
};
const _0x3c7527 = {
  length: 30
};
const _0x105a7d = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x1b6467 = {
  t: 0,
  k: "pic",
  name: "baekya:moon",
  dx: 0,
  dy: -20,
  s0: 30,
  s1: 90,
  life: 20
};
const _0x127a35 = {
  t: 4,
  k: "shake",
  v: 3
};
const _0x53b010 = {
  t: 6,
  k: "tp",
  dx: 14,
  toEnemy: !0,
  exact: !0
};
const _0x4dbeaa = {
  t: 8,
  k: "clones",
  hits: 40,
  every: 3,
  m: 1.08,
  finM: 5.4,
  pics: ["baekya:slash1", "baekya:slash2", "baekya:slash3", "baekya:star"],
  el: "shadow",
  st: "bleed",
  col: "#c8d8ff"
};
const _0x7e9ffc = {
  length: 30
};
const _0x34d730 = {
  length: 10
};
const _0x15c0b6 = {
  t: 128,
  k: "shake",
  v: 6
};
const _0x467090 = {
  t: 20,
  k: "pic",
  name: "baekya:burst",
  dx: 0,
  dy: -10,
  s0: 40,
  s1: 120,
  life: 18
};
const _0x563ee7 = {
  t: 20,
  k: "nova",
  r: 60,
  m: 3.6,
  el: "shadow",
  up: -2,
  col: "#c8d8ff"
};
const _0xc290f4 = {
  t: 20,
  k: "sfx",
  s: "explode"
};
const _0xc5e2d0 = {
  aspd: 0.2,
  crit: 0.15,
  vsBleed: 0.2
};
const _0x207c9c = {
  stats: _0xc5e2d0
};
const _0x42ac16 = {
  name: "하얀 밤의 발걸음",
  desc: "공격 속도 +20%, 치명타 확률 +15%, 출혈 대상에게 주는 피해 +20%.",
  effects: [_0x207c9c]
};
const _0x50f4ab = {
  target: "skill1",
  dmg: 0.4
};
const _0x5f0407 = {
  desc: "백야 난무 피해 +40%",
  mods: [_0x50f4ab]
};
const _0xb4e62 = {
  target: "skill2",
  cd: 2
};
const _0x163505 = {
  desc: "월광 참격 쿨타임 -2초",
  mods: [_0xb4e62]
};
const _0x4e7dd3 = {
  atk: 0.1
};
const _0x59e844 = {
  stats: _0x4e7dd3
};
const _0x52b49a = {
  desc: "공격력 +10%",
  effects: [_0x59e844]
};
const _0x5ac982 = {
  target: "ult",
  dmg: 0.4,
  cd: 8
};
const _0x4b6d34 = {
  desc: "백야의 연무 피해 +40%, 쿨타임 -8초",
  mods: [_0x5ac982]
};
const _0x431a3c = {
  target: "all",
  dmg: 0.35
};
const _0x3db2c0 = {
  cdr: 0.1
};
const _0x198063 = {
  stats: _0x3db2c0
};
const _0xd15de7 = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x431a3c],
  effects: [_0x198063]
};
const _0x34ddd0 = {
  skin: "#f4e8e8",
  hair: "#141418",
  hairStyle: "spiky",
  body: "#141418",
  trim: "#e0b060",
  legs: "#101014",
  boots: "#1a1a20",
  cape: "#1a1418",
  eye: "#ff3040",
  weapon: "sword",
  wcol: "#ff4050",
  wcol2: "#3a1010",
  build: "normal",
  glow: "#ff3040"
};
const _0xb9a7ee = {
  t: 3,
  k: "pic",
  name: "heukwol:slash1",
  dx: 28,
  dy: -12,
  s0: 34,
  s1: 50,
  life: 9,
  ang: 0.55
};
const _0x484551 = {
  dur: 12,
  t: 3,
  m: 0.85,
  box: [0, -18, 42, 26],
  w: "windHigh",
  s: "slashDown",
  hs: 3,
  lunge: 2.5,
  el: "blood",
  extra: [_0xb9a7ee]
};
const _0x22872d = {
  t: 3,
  k: "pic",
  name: "heukwol:slash1",
  dx: 30,
  dy: -14,
  s0: 34,
  s1: 50,
  life: 9,
  ang: -0.6
};
const _0x1cf0e5 = {
  dur: 12,
  t: 3,
  m: 0.85,
  box: [0, -20, 42, 28],
  w: "windLow",
  s: "slashUp",
  hs: 3,
  lunge: 2.5,
  el: "blood",
  extra: [_0x22872d]
};
const _0x34c7fe = {
  t: 4,
  k: "pic",
  name: "heukwol:slash3",
  dx: 30,
  dy: -8,
  s0: 44,
  s1: 66,
  life: 9
};
const _0x4e7e50 = {
  dur: 13,
  t: 4,
  m: 0.95,
  box: [0, -12, 48, 18],
  w: "thrustWind",
  s: "thrust",
  hs: 3,
  lunge: 3.5,
  el: "blood",
  extra: [_0x34c7fe]
};
const _0x5174de = {
  t: 5,
  k: "sfx",
  s: "swing_heavy"
};
const _0x1272a9 = {
  t: 8,
  k: "pic",
  name: "heukwol:crescent2",
  dx: 24,
  dy: -12,
  s0: 44,
  s1: 68,
  life: 12
};
const _0x4a4c8f = {
  t: 8,
  k: "pic",
  name: "heukwol:slash1",
  dx: 30,
  dy: -10,
  s0: 50,
  s1: 70,
  life: 10,
  ang: 0.35
};
const _0x1c23da = {
  t: 8,
  k: "hit",
  box: [-6, -26, 60, 38],
  m: 1.6,
  kb: 5,
  hs: 7,
  el: "blood",
  st: "bleed",
  fin: !0,
  shake: 3
};
const _0x3406c6 = {
  dur: 26,
  pose: [[0, "slamWind"], [7, "slam"]],
  move: [[4, 3], [12, 0]],
  ev: [_0x5174de, _0x1272a9, _0x4a4c8f, _0x1c23da]
};
const _0x55d4bc = {
  arc: "down",
  r: 30,
  col: "#ff3040"
};
const _0x119dc1 = {
  dur: 15,
  t: 4,
  m: 0.9,
  box: [0, -6, 38, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x55d4bc,
  air: !0,
  grav: 0.3,
  hs: 3,
  el: "blood"
};
const _0x27cbdf = {
  arc: "h",
  r: 46,
  col: "#ff3040"
};
const _0x4cedb9 = {
  dur: 18,
  t: 5,
  m: 1.4,
  box: [-10, -14, 58, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x27cbdf,
  lunge: 8,
  hs: 5,
  el: "blood",
  inv: [0, 10]
};
const _0x1170c9 = {
  t: 6,
  k: "sfx",
  s: "swing_heavy"
};
const _0x238014 = {
  t: 9,
  k: "pic",
  name: "heukwol:slash3",
  dx: 112,
  dy: -8,
  s0: 200,
  s1: 236,
  life: 16
};
const _0x108469 = {
  t: 9,
  k: "hit",
  box: [-4, -26, 224, 40],
  m: 5,
  kb: 3,
  hs: 7,
  el: "blood",
  st: "bleed",
  shake: 4
};
const _0x41adbb = {
  t: 9,
  k: "sfx",
  s: "explode"
};
const _0x5e2c4e = {
  dur: 30,
  pose: [[0, "thrustWind"], [8, "slashDown"], [16, "thrust"]],
  inv: [0, 12],
  ev: [_0x1170c9, _0x238014, _0x108469, _0x41adbb]
};
const _0xbfc90b = {
  name: "흑월 일문자",
  desc: "앞쪽으로 길게 가로벤다. 검로를 따라 붉은 참격이 한 줄로 남는다 (앞 220px, 500%, 출혈).",
  cd: 3,
  act: _0x5e2c4e
};
const _0x232ab5 = {
  t: 5,
  k: "sfx",
  s: "swing_heavy"
};
const _0x30a0f2 = {
  t: 8,
  k: "pic",
  name: "heukwol:ring",
  dx: 0,
  dy: -10,
  s0: 60,
  s1: 130,
  life: 16,
  spin: 0.15
};
const _0x1d8e6f = {
  arc: "circle",
  r: 60,
  col: "#ff3040"
};
const _0x1c06ce = {
  t: 8,
  k: "hit",
  box: [-66, -44, 132, 70],
  m: 5,
  kb: 4,
  up: -2,
  hs: 7,
  el: "blood",
  st: "bleed",
  fx: _0x1d8e6f,
  shake: 4
};
const _0x218e34 = {
  dur: 28,
  pose: [[0, "slamWind"], [6, "spin"], [14, "slashUp"], [20, "spin"]],
  inv: [0, 16],
  armor: !0,
  ev: [_0x232ab5, _0x30a0f2, _0x1c06ce]
};
const _0x14caed = {
  name: "혈월 선풍",
  desc: "제자리에서 크게 한 바퀴 돌며 주변 모든 방향을 벤다 (500%, 출혈).",
  cd: 3,
  act: _0x218e34
};
const _0x2c418c = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x29ee46 = {
  t: 0,
  k: "pic",
  name: "heukwol:ring",
  dx: 0,
  dy: -12,
  s0: 70,
  s1: 30,
  life: 24,
  spin: 0.2
};
const _0x326afc = {
  t: 12,
  k: "pic",
  name: "heukwol:pillar",
  dx: 0,
  dy: -20,
  s0: 30,
  s1: 70,
  life: 14
};
const _0x53090b = {
  t: 26,
  k: "sfx",
  s: "swing_heavy"
};
const _0x1b78ba = {
  t: 27,
  k: "pic",
  name: "heukwol:crescent",
  dx: 20,
  dy: -10,
  s0: 60,
  s1: 110,
  life: 12
};
const _0x2cadb4 = {
  t: 28,
  k: "screen",
  m: 10,
  pic: "heukwol:slash3",
  picW: 90,
  el: "blood",
  st: "bleed",
  col: "#ff3040"
};
const _0x22eeb8 = {
  t: 28,
  k: "shake",
  v: 8
};
const _0x1a15a1 = {
  t: 28,
  k: "sfx",
  s: "explode"
};
const _0x270e57 = {
  dur: 44,
  pose: [[0, "castUp"], [24, "thrustWind"], [27, "slashDown"], [34, "thrust"]],
  inv: [0, 40],
  armor: !0,
  move: [[0, 0]],
  ev: [_0x2c418c, _0x29ee46, _0x326afc, _0x53090b, _0x1b78ba, _0x2cadb4, _0x22eeb8, _0x1a15a1]
};
const _0x3e9c52 = {
  name: "흑월 참",
  desc: "0.4초간 정신을 집중한 뒤, 화면 안에 보이는 모든 적을 한꺼번에 벤다 (각 공격력 1000%, 출혈). 집중 중 무적.",
  cd: 10,
  act: _0x270e57
};
const _0x1bc6b4 = {
  t: 6,
  k: "sfx",
  s: "swing_heavy"
};
const _0x297d03 = {
  t: 8,
  k: "pic",
  name: "heukwol:crescent2",
  dx: 30,
  dy: -10,
  s0: 50,
  s1: 90,
  life: 14
};
const _0x46f594 = {
  t: 8,
  k: "hit",
  box: [-20, -34, 110, 52],
  m: 3.6,
  kb: 4,
  up: -2,
  hs: 8,
  el: "blood",
  st: "bleed",
  shake: 5
};
const _0x96b873 = {
  t: 8,
  k: "sfx",
  s: "explode"
};
const _0x49395e = {
  dur: 26,
  pose: [[0, "thrustWind"], [8, "slashDown"]],
  inv: [0, 18],
  ev: [_0x1bc6b4, _0x297d03, _0x46f594, _0x96b873]
};
const _0xb4b96e = {
  name: "교대: 발도",
  desc: "검을 뽑으며 나타나 앞쪽을 베어 가른다 (공격력 360%, 출혈).",
  act: _0x49395e
};
const _0x37aacb = {
  atk: 0.12,
  critDmg: 0.4,
  vsBleed: 0.2
};
const _0x1a3978 = {
  stats: _0x37aacb
};
const _0x4b479c = {
  name: "검성의 각오",
  desc: "공격력 +12%, 치명타 피해 +40%, 출혈 대상에게 주는 피해 +20%.",
  effects: [_0x1a3978]
};
const _0x40cf5e = {
  target: "skill1",
  dmg: 0.4
};
const _0x407d6d = {
  desc: "흑월 일문자 피해 +40%",
  mods: [_0x40cf5e]
};
const _0x24a9bd = {
  target: "skill2",
  cd: 2
};
const _0x45a6bf = {
  desc: "혈월 선풍 쿨타임 -2초",
  mods: [_0x24a9bd]
};
const _0x51a42b = {
  atk: 0.1
};
const _0x159318 = {
  stats: _0x51a42b
};
const _0x182481 = {
  desc: "공격력 +10%",
  effects: [_0x159318]
};
const _0x47dc46 = {
  target: "ult",
  dmg: 0.4,
  cd: 8
};
const _0x57fa8a = {
  desc: "흑월 참 피해 +40%, 쿨타임 -8초",
  mods: [_0x47dc46]
};
const _0x565e19 = {
  target: "all",
  dmg: 0.35
};
const _0x2341e3 = {
  cdr: 0.1
};
const _0x2cb6be = {
  stats: _0x2341e3
};
const _0x14e6ed = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x565e19],
  effects: [_0x2cb6be]
};
const _0x196637 = {
  skin: "#f4ecf0",
  hair: "#eef0f8",
  hairStyle: "long",
  body: "#1a1c3a",
  trim: "#ff3050",
  legs: "#14141e",
  boots: "#e8ecf4",
  cape: "#e8ecf8",
  eye: "#ff4060",
  weapon: "bow",
  wcol: "#ff3050",
  wcol2: "#3050ff",
  build: "slim",
  glow: "#6080ff"
};
const _0x16b490 = {
  name: "hanbyeol:arrow",
  w: 17,
  rot: -1.1
};
const _0x299651 = {
  spr: "arrow",
  spd: 8,
  life: 60,
  w: 9,
  h: 3,
  col: "#ff6080",
  pic: _0x16b490
};
const _0x3659d4 = {
  dur: 12,
  t: 4,
  m: 0.45,
  n: 2,
  spread: 4,
  p: _0x299651,
  w: "shootWind",
  s: "shoot",
  sfx: "arrow"
};
const _0x416987 = {
  name: "hanbyeol:arrow",
  w: 17,
  rot: -1.1
};
const _0xdc4544 = {
  spr: "arrow",
  spd: 8,
  life: 60,
  w: 9,
  h: 3,
  col: "#6080ff",
  pic: _0x416987
};
const _0x3fad76 = {
  dur: 12,
  t: 4,
  m: 0.45,
  n: 2,
  spread: 4,
  p: _0xdc4544,
  w: "shootWind",
  s: "shoot",
  sfx: "arrow"
};
const _0x157042 = {
  name: "hanbyeol:arrow",
  w: 17,
  rot: -1.1
};
const _0x44d365 = {
  spr: "arrow",
  spd: 8,
  life: 60,
  w: 9,
  h: 3,
  col: "#ff6080",
  pic: _0x157042
};
const _0x3dc12e = {
  dur: 14,
  t: 5,
  m: 0.35,
  n: 4,
  spread: 5,
  p: _0x44d365,
  w: "shootWind",
  s: "shoot",
  sfx: "arrow"
};
const _0x147b00 = {
  t: 6,
  k: "pic",
  name: "hanbyeol:streak",
  dx: 46,
  dy: -6,
  s0: 50,
  s1: 90,
  life: 10
};
const _0x1ae85b = {
  name: "hanbyeol:sparrow",
  w: 22,
  rot: -1.1
};
const _0x9f4771 = {
  spr: "arrow",
  spd: 10,
  life: 50,
  w: 11,
  h: 4,
  col: "#c0d0ff",
  pierce: 99,
  pic: _0x1ae85b
};
const _0x1984ff = {
  t: 8,
  k: "proj",
  p: _0x9f4771,
  m: 0.67,
  n: 3,
  spread: 4
};
const _0x16437e = {
  t: 8,
  k: "sfx",
  s: "arrow"
};
const _0x2d78c0 = {
  dur: 24,
  pose: [[0, "shootWind"], [8, "shoot"]],
  cancel: 18,
  ev: [_0x147b00, _0x1984ff, _0x16437e]
};
const _0x59486e = {
  name: "hanbyeol:arrow",
  w: 17,
  rot: -1.1
};
const _0x51138e = {
  spr: "arrow",
  spd: 8,
  life: 60,
  w: 9,
  h: 3,
  col: "#ff6080",
  pic: _0x59486e
};
const _0x51b23d = {
  dur: 14,
  t: 4,
  m: 0.45,
  n: 2,
  spread: 5,
  ang: 35,
  air: !0,
  grav: 0.35,
  p: _0x51138e,
  w: "shootWind",
  s: "shoot",
  sfx: "arrow"
};
const _0x278425 = {
  name: "hanbyeol:sparrow",
  w: 22,
  rot: -1.1
};
const _0x340f9c = {
  spr: "arrow",
  spd: 10,
  life: 50,
  w: 10,
  h: 3,
  col: "#c0d0ff",
  pierce: 3,
  pic: _0x278425
};
const _0x2a2910 = {
  dur: 18,
  t: 6,
  m: 0.47,
  n: 3,
  spread: 4,
  p: _0x340f9c,
  w: "shootWind",
  s: "shoot",
  sfx: "arrow"
};
const _0x138051 = {
  t: 4,
  k: "pic",
  name: "hanbyeol:pillar",
  dx: 6,
  dy: -20,
  s0: 24,
  s1: 60,
  life: 18
};
const _0x2ef449 = {
  t: 6,
  k: "sfx",
  s: "arrow"
};
const _0x2f75a8 = {
  name: "hanbyeol:arrow",
  w: 18,
  rot: -1.1
};
const _0x5483de = {
  name: "hanbyeol:star",
  s0: 4,
  s1: 14,
  life: 6
};
const _0x1233a2 = {
  pic: _0x2f75a8,
  boomPic: _0x5483de,
  r: 12,
  col: "#3448b0",
  gap: 1,
  scatter: !0
};
const _0x2e9006 = {
  t: 10,
  k: "meteor",
  n: 60,
  m: 0.9,
  spread: 400,
  look: _0x1233a2
};
const _0x57ad05 = {
  t: 10,
  k: "shake",
  v: 2
};
const _0x300a6b = {
  dur: 30,
  pose: [[0, "shootWind"], [8, "castUp"]],
  ev: [_0x138051, _0x2ef449, _0x2e9006, _0x57ad05]
};
const _0x47ad96 = {
  name: "신기전",
  desc: "하늘로 화살 묶음을 쏘아 올려, 앞쪽 아주 넓은 범위(약 화면 너비)에 작은 화살 60발이 비처럼 쏟아진다 (각 공격력 90%, 착탄 폭발).",
  cd: 10,
  act: _0x300a6b
};
const _0x22d2c2 = {
  length: 12
};
const _0x31cee1 = {
  t: 0,
  k: "pic",
  name: "hanbyeol:swirl",
  dx: 8,
  dy: -10,
  s0: 30,
  s1: 60,
  life: 56,
  spin: 0.05
};
const _0x2ef21f = {
  length: 24
};
const _0x169d7c = {
  name: "hanbyeol:star",
  s0: 6,
  s1: 20,
  life: 7
};
const _0x35471c = {
  name: "hanbyeol:sparrow",
  w: 22,
  rot: -1.1
};
const _0xee2e12 = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x28628a = {
  t: 0,
  k: "pic",
  name: "hanbyeol:swirl",
  dx: 0,
  dy: -14,
  s0: 30,
  s1: 110,
  life: 60,
  spin: 0.08
};
const _0xc9cd22 = {
  t: 16,
  k: "pic",
  name: "hanbyeol:pillar",
  dx: 0,
  dy: -24,
  s0: 30,
  s1: 70,
  life: 28
};
const _0x1da542 = {
  t: 40,
  k: "sfx",
  s: "gem"
};
const _0x2f389e = {
  t: 48,
  k: "screen",
  m: 6,
  pic: "hanbyeol:streak",
  picW: 90,
  el: "holy",
  col: "#ff4060"
};
const _0x7118a9 = {
  t: 48,
  k: "shake",
  v: 6
};
const _0x1e1bdf = {
  t: 58,
  k: "pic",
  name: "hanbyeol:crescent",
  dx: 26,
  dy: -8,
  s0: 60,
  s1: 120,
  life: 14
};
const _0x53e139 = {
  t: 60,
  k: "pic",
  name: "hanbyeol:streak",
  dx: 40,
  dy: -6,
  s0: 50,
  s1: 90,
  life: 10
};
const _0x5811b4 = {
  t: 60,
  k: "yaka",
  m: 3,
  life: 300,
  spd: 6.5,
  hitCd: 30,
  pic: "hanbyeol:sparrow",
  picW: 46,
  picRot: -1.1,
  col: "#ff4060"
};
const _0x1ce6d3 = {
  t: 60,
  k: "shake",
  v: 8
};
const _0x238581 = {
  t: 60,
  k: "sfx",
  s: "explode"
};
const _0x28f89a = {
  dur: 80,
  pose: [[0, "castUp"], [48, "shootWind"], [60, "shoot"]],
  inv: [0, 66],
  holdYaka: !0,
  armor: !0,
  move: [[0, 0]],
  ev: [_0xee2e12, _0x28628a, _0xc9cd22, _0x1da542, _0x2f389e, _0x7118a9, _0x1e1bdf, _0x53e139, _0x5811b4, _0x1ce6d3, _0x238581]
};
const _0x333772 = {
  name: "태극 천궁",
  desc: "1초간 하늘의 활시위를 당긴다(무적). 화면 안 모든 적에게 붉고 푸른 별빛 화살이 꽂히고(각 공격력 600%), 이어서 모든 적을 꿰뚫으며 쫓아가는 특수 화살 하나를 5초간 날린다 (적중마다 300%). 화살이 나는 동안 이동 불가.",
  cd: 45,
  act: _0x28f89a
};
const _0x4fcdcc = {
  name: "hanbyeol:arrow",
  w: 17,
  rot: -1.1
};
const _0x209437 = {
  spr: "arrow",
  spd: 8,
  life: 60,
  w: 9,
  h: 3,
  col: "#ff6080",
  pic: _0x4fcdcc
};
const _0x59841a = {
  t: 6,
  k: "proj",
  n: 14,
  spread: 5,
  p: _0x209437,
  m: 0.6
};
const _0x265b6f = {
  t: 6,
  k: "sfx",
  s: "arrow"
};
const _0xe710a4 = {
  t: 16,
  k: "pic",
  name: "hanbyeol:burst",
  dx: 0,
  dy: -10,
  s0: 30,
  s1: 110,
  life: 16
};
const _0x5c0569 = {
  t: 16,
  k: "nova",
  r: 80,
  m: 3.6,
  el: "holy",
  up: -3,
  col: "#ff4060"
};
const _0x59d340 = {
  t: 16,
  k: "shake",
  v: 5
};
const _0x4ebdf6 = {
  t: 16,
  k: "sfx",
  s: "explode"
};
const _0x3ed79a = {
  dur: 28,
  pose: [[0, "shootWind"], [6, "shoot"], [16, "castUp"]],
  inv: [0, 18],
  move: [[0, -4], [8, 0]],
  ev: [_0x59841a, _0x265b6f, _0xe710a4, _0x5c0569, _0x59d340, _0x4ebdf6]
};
const _0x5e371b = {
  name: "교대: 별의 귀환",
  desc: "뒤로 물러나며 작은 화살 14발을 부채꼴로 쏘고, 착지한 자리에 별빛 폭발을 일으킨다 (화살 각 60%, 폭발 360%).",
  act: _0x3ed79a
};
const _0x1cfe03 = {
  starMark: 6
};
const _0x2a12f4 = {
  flags: _0x1cfe03
};
const _0x3378c5 = {
  name: "별의 표식",
  desc: "화살에 맞은 적에게 별의 표식을 6초간 남긴다. 표식이 있는 적은 받는 피해가 2배가 되고, 표식이 있는 적끼리는 피해를 나눠 받는다 (한 명이 받은 피해를 다른 표식 대상도 똑같이 받음).",
  effects: [_0x2a12f4]
};
const _0x3d25ee = {
  target: "skill1",
  count: 20
};
const _0x54323f = {
  desc: "신기전 화살 +20발",
  mods: [_0x3d25ee]
};
const _0x4bfd72 = {
  target: "skill2",
  dmg: 0.4
};
const _0x33faa5 = {
  desc: "별을 쫓는 화살 피해 +40%",
  mods: [_0x4bfd72]
};
const _0xe66014 = {
  critDmg: 0.4
};
const _0x56487b = {
  stats: _0xe66014
};
const _0x24939d = {
  desc: "치명타 피해 +40%",
  effects: [_0x56487b]
};
const _0x5b1657 = {
  target: "ult",
  dmg: 0.4,
  cd: 10
};
const _0x217609 = {
  desc: "태극 천궁 피해 +40%, 쿨타임 -10초",
  mods: [_0x5b1657]
};
const _0x4be93b = {
  target: "all",
  dmg: 0.4
};
const _0x4ea975 = {
  cdr: 0.15
};
const _0x2c54ef = {
  stats: _0x4ea975
};
const _0x338dd0 = {
  desc: "모든 기술 피해 +40%, 스킬 쿨타임 -15%",
  mods: [_0x4be93b],
  effects: [_0x2c54ef]
};
const _0x3273fe = {
  skin: "#f4f0f4",
  hair: "#eef2fa",
  hairStyle: "long",
  body: "#e8eef8",
  trim: "#6aa8ff",
  legs: "#141a2a",
  boots: "#e0e6f0",
  cape: "#cfe4ff",
  eye: "#6ab0ff",
  weapon: "spear",
  wcol: "#a8dcff",
  wcol2: "#2a4a80",
  build: "slim",
  glow: "#9ad8ff"
};
const _0x5dfd76 = {
  arc: "thrust",
  r: 40,
  col: "#9ad8ff"
};
const _0x35fe6a = {
  dur: 12,
  t: 3,
  m: 0.8,
  box: [0, -12, 48, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x5dfd76,
  st: "freeze",
  stp: 0.07,
  hs: 3,
  lunge: 2.5
};
const _0x5587f5 = {
  arc: "up",
  r: 32,
  col: "#cfeaff"
};
const _0x1cc24b = {
  dur: 12,
  t: 3,
  m: 0.8,
  box: [0, -20, 42, 28],
  w: "windLow",
  s: "slashUp",
  fx: _0x5587f5,
  st: "freeze",
  stp: 0.07,
  hs: 3,
  lunge: 2
};
const _0x479b67 = {
  arc: "thrust",
  r: 44,
  col: "#9ad8ff"
};
const _0x611065 = {
  dur: 13,
  t: 4,
  m: 0.9,
  box: [0, -12, 52, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x479b67,
  st: "freeze",
  stp: 0.07,
  hs: 3,
  lunge: 3.5
};
const _0x3b9ea0 = {
  t: 4,
  k: "sfx",
  s: "swing_heavy"
};
const _0x1b5e9a = {
  arc: "thrust",
  r: 52,
  col: "#cfeaff"
};
const _0x591819 = {
  t: 7,
  k: "hit",
  box: [-4, -14, 60, 22],
  m: 1.4,
  kb: 5,
  hs: 6,
  fin: !0,
  st: "freeze",
  stp: 0.07,
  fx: _0x1b5e9a,
  shake: 3
};
const _0x57d7e4 = {
  name: "elin:spear",
  w: 52,
  rot: -0.27
};
const _0x497176 = {
  spr: "spear",
  spd: 7,
  life: 26,
  w: 26,
  h: 10,
  col: "#9ad8ff",
  pierce: 99,
  st: "freeze",
  stp: 0.07,
  pic: _0x57d7e4
};
const _0x2faa6a = {
  t: 8,
  k: "proj",
  p: _0x497176,
  m: 0.7,
  dx: 16,
  dy: -6
};
const _0x9ae583 = {
  dur: 26,
  pose: [[0, "thrustWind"], [6, "thrust"]],
  move: [[3, 4], [12, 0]],
  ev: [_0x3b9ea0, _0x591819, _0x2faa6a]
};
const _0x356b1a = {
  arc: "thrust",
  r: 34,
  col: "#9ad8ff"
};
const _0x593d8a = {
  dur: 15,
  t: 4,
  m: 0.85,
  box: [0, -6, 40, 22],
  w: "thrustWind",
  s: "thrust",
  fx: _0x356b1a,
  air: !0,
  grav: 0.3,
  hs: 3,
  st: "freeze",
  stp: 0.07
};
const _0x132970 = {
  arc: "h",
  r: 46,
  col: "#9ad8ff"
};
const _0x138e47 = {
  dur: 18,
  t: 5,
  m: 1.3,
  box: [-10, -14, 60, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x132970,
  lunge: 8,
  hs: 5,
  inv: [0, 10],
  st: "freeze",
  stp: 0.07
};
const _0x4d29c3 = {
  t: 6,
  k: "sfx",
  s: "throw"
};
const _0x3462b3 = {
  name: "elin:spear",
  w: 86,
  rot: -0.27
};
const _0x254fd5 = {
  r: 40,
  m: 2 / 2.8,
  el: "frost",
  st: "freeze",
  stp: 0.5,
  col: "#cfeaff"
};
const _0x2c1848 = {
  name: "elin:burst",
  s0: 30,
  s1: 70,
  life: 18
};
const _0x156089 = {
  spr: "spear",
  spd: 9,
  life: 34,
  w: 36,
  h: 12,
  col: "#9ad8ff",
  pierce: 99,
  st: "freeze",
  stp: 0.5,
  pic: _0x3462b3,
  boom: _0x254fd5,
  boomPic: _0x2c1848
};
const _0x5c79db = {
  t: 8,
  k: "proj",
  m: 2.8,
  dx: 14,
  dy: -8,
  p: _0x156089
};
const _0x5c36fe = {
  dur: 24,
  pose: [[0, "thrustWind"], [7, "throw"]],
  ev: [_0x4d29c3, _0x5c79db]
};
const _0x5ee8fc = {
  name: "빙결 투창",
  desc: "얼음 창을 앞으로 던진다. 창은 적을 모두 꿰뚫으며(공격력 280%) 날아가고, 끝에 닿은 자리에서 얼음 가시가 터진다 (공격력 200%). 창·가시 모두 50% 확률로 빙결.",
  cd: 6,
  act: _0x5c36fe
};
const _0x2b8660 = {
  t: 6,
  k: "sfx",
  s: "swing_heavy"
};
const _0x153d8e = {
  t: 9,
  k: "hit",
  box: [-6, -30, 50, 44],
  m: 1.2,
  kb: 2,
  hs: 5,
  st: "freeze",
  stp: 0.5,
  shake: 3
};
const _0x46c2ec = {
  name: "elin:field",
  mode: "floor",
  size: 170
};
const _0x32807c = {
  vis: "ice",
  w: 170,
  h: 30,
  life: 180,
  tick: 15,
  m: 0.7,
  el: "frost",
  st: "freeze",
  stp: 0.1,
  pic: _0x46c2ec
};
const _0x537283 = {
  t: 10,
  k: "field",
  dx: 80,
  ground: !0,
  f: _0x32807c
};
const _0x119dfa = {
  name: "elin:pillar",
  mode: "rise",
  size: 64
};
const _0x1a47ea = {
  vis: "ice",
  w: 38,
  h: 64,
  life: 26,
  tick: 30,
  m: 2.6,
  el: "frost",
  st: "freeze",
  stp: 0.5,
  oneShot: !1,
  pic: _0x119dfa
};
const _0xc755d6 = {
  t: 14,
  k: "shake",
  v: 4
};
const _0x366aa0 = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x2f5e06 = {
  t: 0,
  k: "pic",
  name: "elin:field",
  dx: 0,
  dy: 4,
  s0: 30,
  s1: 90,
  life: 32
};
const _0x2ac255 = {
  t: 12,
  k: "pic",
  name: "elin:burst",
  dx: -6,
  dy: -20,
  s0: 20,
  s1: 56,
  life: 22
};
const _0x45842d = {
  t: 30,
  k: "sfx",
  s: "swing_heavy"
};
const _0x289a23 = {
  v: 0.5,
  t: 480
};
const _0x37a83a = {
  name: "elin:spear",
  w: 170,
  rot: -0.27
};
const _0x12c201 = {
  spr: "spear",
  spd: 10,
  life: 80,
  w: 70,
  h: 40,
  col: "#9ad8ff",
  pierce: 99,
  kb: 9,
  up: -2,
  hs: 8,
  el: "frost",
  st: "freeze",
  ghost: !0,
  defDown: _0x289a23,
  pic: _0x37a83a
};
const _0x1b0dbe = {
  t: 32,
  k: "proj",
  m: 12,
  dx: 20,
  dy: -10,
  p: _0x12c201
};
const _0x3fd9ff = {
  t: 32,
  k: "pic",
  name: "elin:burst",
  dx: 26,
  dy: -12,
  s0: 30,
  s1: 70,
  life: 12
};
const _0x29f2a1 = {
  t: 32,
  k: "shake",
  v: 6
};
const _0x36db29 = {
  t: 33,
  k: "sfx",
  s: "explode"
};
const _0x5a8b1d = {
  dur: 48,
  armor: !0,
  inv: [0, 30],
  pose: [[0, "castUp"], [26, "thrustWind"], [32, "throw"]],
  move: [[0, 0]],
  ev: [_0x366aa0, _0x2f5e06, _0x2ac255, _0x45842d, _0x1b0dbe, _0x3fd9ff, _0x29f2a1, _0x36db29]
};
const _0x5de58d = {
  name: "빙하의 투창",
  desc: "0.5초 동안 창에 서리를 모은 뒤, 거대한 얼음 창을 앞으로 던진다. 창은 벽도 뚫고 약 800px을 날아가며 모든 적을 꿰뚫고 크게 밀쳐 낸다 (공격력 1200%). 맞은 적은 얼어붙고(빙결 2초, 보스 1초), 방어력이 있는 적은 8초 동안 방어력이 절반이 된다.",
  cd: 40,
  act: _0x5a8b1d
};
const _0x1597f5 = {
  t: 2,
  k: "pic",
  name: "elin:field",
  dx: 0,
  dy: 4,
  s0: 40,
  s1: 120,
  life: 22
};
const _0x4b678c = {
  t: 10,
  k: "pic",
  name: "elin:burst",
  dx: 0,
  dy: -18,
  s0: 50,
  s1: 120,
  life: 18
};
const _0x33aa5b = {
  t: 10,
  k: "nova",
  r: 70,
  m: 3.6,
  up: -3,
  el: "frost",
  st: "freeze",
  col: "#9ad8ff"
};
const _0x2037fe = {
  t: 10,
  k: "shake",
  v: 6
};
const _0x411e7e = {
  t: 10,
  k: "sfx",
  s: "explode"
};
const _0x1414c2 = {
  dur: 28,
  pose: [[0, "slamWind"], [10, "slam"]],
  inv: [0, 18],
  ev: [_0x1597f5, _0x4b678c, _0x33aa5b, _0x2037fe, _0x411e7e]
};
const _0x369961 = {
  name: "교대: 빙하의 강림",
  desc: "얼음 가시를 터뜨리며 등장해 주변을 얼린다 (공격력 360%, 빙결).",
  act: _0x1414c2
};
const _0x590eba = {
  vsFrozen: 0.25,
  skillDmg: 0.15,
  aspd: 0.1
};
const _0x10afd5 = {
  stats: _0x590eba
};
const _0x19fc2e = {
  name: "깨어난 서리",
  desc: "평타가 7% 확률로 적을 빙결시킨다. 빙결된 적에게 주는 피해 +25%, 스킬 피해 +15%, 공격 속도 +10%.",
  effects: [_0x10afd5]
};
const _0x2f3ccf = {
  target: "skill1",
  dmg: 0.4
};
const _0x44ea3b = {
  desc: "빙결 투창 피해 +40%",
  mods: [_0x2f3ccf]
};
const _0x44bd13 = {
  target: "skill2",
  cd: 2
};
const _0x2a846d = {
  desc: "서리 결계 쿨타임 -2초",
  mods: [_0x44bd13]
};
const _0xe6f519 = {
  atk: 0.1
};
const _0x4204fd = {
  stats: _0xe6f519
};
const _0x242a06 = {
  desc: "공격력 +10%",
  effects: [_0x4204fd]
};
const _0x4e6c2e = {
  target: "swap",
  dmg: 0.6
};
const _0x4fe2bf = {
  desc: "빙하의 강림 피해 +60%",
  mods: [_0x4e6c2e]
};
const _0x3e1b21 = {
  target: "all",
  dmg: 0.35
};
const _0x11c892 = {
  cdr: 0.1
};
const _0x20ab39 = {
  stats: _0x11c892
};
const _0x109ec7 = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x3e1b21],
  effects: [_0x20ab39]
};
const _0x535e34 = {
  skin: "#f4ecf0",
  hair: "#e8ecf0",
  hairStyle: "hood",
  body: "#1e2a1e",
  trim: "#a0ff80",
  legs: "#14141a",
  boots: "#e0e8e0",
  cape: "#2a3a24",
  eye: "#80ff80",
  weapon: "bow",
  wcol: "#d0e8c0",
  wcol2: "#3a5a30",
  build: "slim",
  glow: "#a0ff80"
};
const _0xb99583 = {
  name: "arien:arrow",
  w: 22
};
const _0x1c98b6 = {
  spr: "arrow",
  spd: 7,
  life: 70,
  w: 12,
  h: 4,
  col: "#c0ffa0",
  pic: _0xb99583
};
const _0x2c6715 = {
  dur: 13,
  t: 4,
  m: 1.6,
  p: _0x1c98b6,
  w: "shootWind",
  s: "shoot",
  sfx: "arrow"
};
const _0x59d7d5 = {
  name: "arien:arrow",
  w: 22
};
const _0x48de47 = {
  spr: "arrow",
  spd: 7,
  life: 70,
  w: 12,
  h: 4,
  col: "#c0ffa0",
  pic: _0x59d7d5
};
const _0x2669cc = {
  dur: 13,
  t: 4,
  m: 1.6,
  p: _0x48de47,
  w: "shootWind",
  s: "shoot",
  sfx: "arrow"
};
const _0x140e43 = {
  name: "arien:arrow",
  w: 22
};
const _0x587e3b = {
  spr: "arrow",
  spd: 7,
  life: 80,
  w: 12,
  h: 4,
  col: "#a0ff80",
  pierce: 1,
  pic: _0x140e43
};
const _0x5af891 = {
  dur: 22,
  t: 8,
  m: 1.2,
  n: 3,
  spread: 14,
  p: _0x587e3b,
  w: "shootWind",
  s: "shoot",
  sfx: "arrow"
};
const _0x44a75b = {
  name: "arien:arrow",
  w: 22
};
const _0x235c06 = {
  spr: "arrow",
  spd: 7,
  life: 70,
  w: 12,
  h: 4,
  col: "#c0ffa0",
  pic: _0x44a75b
};
const _0x1dc5a0 = {
  dur: 15,
  t: 4,
  m: 1.6,
  p: _0x235c06,
  w: "shootWind",
  s: "shoot",
  sfx: "arrow",
  air: !0
};
const _0x7edf39 = {
  name: "arien:arrow",
  w: 24
};
const _0x5368be = {
  spr: "arrow",
  spd: 9,
  life: 60,
  w: 14,
  h: 4,
  col: "#a0ff80",
  pierce: 3,
  pic: _0x7edf39
};
const _0x2822bc = {
  dur: 18,
  t: 6,
  m: 2.6,
  p: _0x5368be,
  w: "shootWind",
  s: "shoot",
  sfx: "arrow"
};
const _0x20f13e = {
  length: 12
};
const _0x1db771 = {
  t: 0,
  k: "pic",
  name: "arien:sigil",
  dx: 10,
  dy: -8,
  s0: 16,
  s1: 40,
  life: 60
};
const _0x3d642a = {
  length: 12
};
const _0x1fcce5 = {
  name: "arien:arrow",
  w: 22
};
const _0x52c0b1 = {
  spr: "arrow",
  spd: 7.5,
  life: 80,
  w: 12,
  h: 4,
  col: "#c0ffa0",
  pic: _0x1fcce5
};
const _0x4207bc = {
  t: 6,
  k: "pic",
  name: "arien:volley2",
  dx: 22,
  dy: -6,
  s0: 30,
  s1: 44,
  life: 10
};
const _0x27c0cc = {
  name: "arien:arrow",
  w: 24
};
const _0x54b14d = {
  spr: "arrow",
  spd: 7,
  life: 90,
  w: 12,
  h: 4,
  col: "#a0ff80",
  pierce: 1,
  pic: _0x27c0cc
};
const _0x39732c = {
  t: 8,
  k: "proj",
  n: 5,
  spread: 16,
  p: _0x54b14d,
  m: 2.4
};
const _0x45c783 = {
  t: 8,
  k: "sfx",
  s: "arrow"
};
const _0x17f0d6 = {
  dur: 26,
  pose: [[0, "shootWind"], [8, "shoot"]],
  ev: [_0x4207bc, _0x39732c, _0x45c783]
};
const _0x49e4e5 = {
  name: "바람 산탄",
  desc: "화살 5발을 부채꼴로 한꺼번에 쏜다 (각 240%, 1명 관통).",
  cd: 7,
  act: _0x17f0d6
};
const _0x1ef0d5 = {
  t: 0,
  k: "sfx",
  s: "cast"
};
const _0x194274 = {
  t: 0,
  k: "pic",
  name: "arien:sigil",
  dx: 0,
  dy: -14,
  s0: 20,
  s1: 70,
  life: 60
};
const _0xf6745b = {
  t: 20,
  k: "pic",
  name: "arien:star",
  dx: 0,
  dy: -14,
  s0: 10,
  s1: 60,
  life: 40,
  spin: 0.06
};
const _0x5ea32c = {
  t: 40,
  k: "sfx",
  s: "gem"
};
const _0x3cec91 = {
  t: 60,
  k: "pic",
  name: "arien:volley",
  dx: 18,
  dy: -6,
  s0: 30,
  s1: 50,
  life: 10
};
const _0x4d87e3 = {
  name: "arien:bigarrow",
  w: 30,
  rot: -0.9
};
const _0x4725cd = {
  spr: "arrow",
  spd: 11,
  life: 70,
  w: 22,
  h: 6,
  col: "#a0ff80",
  pierce: 99,
  kb: 4,
  hs: 8,
  pic: _0x4d87e3
};
const _0x1f0593 = {
  t: 60,
  k: "proj",
  p: _0x4725cd,
  m: 14
};
const _0x488e2a = {
  t: 60,
  k: "shake",
  v: 3
};
const _0x5da8c1 = {
  dur: 66,
  armor: !0,
  pose: [[0, "castUp"], [54, "shootWind"], [60, "shoot"]],
  move: [[0, 0]],
  ev: [_0x1ef0d5, _0x194274, _0xf6745b, _0x5ea32c, _0x3cec91, _0x1f0593, _0x488e2a]
};
const _0xdf9f35 = {
  name: "바람의 인도",
  desc: "1초 집중 후, 정면으로 모든 적을 꿰뚫는 큰 화살 한 발을 일직선으로 쏜다 (공격력 1400%).",
  cd: 40,
  act: _0x5da8c1
};
const _0x26d42b = {
  name: "arien:arrow",
  w: 22
};
const _0x46e8c0 = {
  spr: "arrow",
  spd: 7,
  life: 80,
  w: 12,
  h: 4,
  col: "#a0ff80",
  home: 0.14,
  pic: _0x26d42b
};
const _0x412187 = {
  t: 6,
  k: "proj",
  n: 5,
  spread: 14,
  p: _0x46e8c0,
  m: 2
};
const _0x515ea1 = {
  t: 6,
  k: "sfx",
  s: "arrow"
};
const _0xd23e1b = {
  dur: 24,
  pose: [[0, "shootWind"], [6, "shoot"]],
  inv: [0, 14],
  move: [[0, -4], [8, 0]],
  ev: [_0x412187, _0x515ea1]
};
const _0x590a6d = {
  name: "교대: 바람길",
  desc: "뒤로 물러나며 유도 화살 5발을 부채꼴로 쏜다 (각 200%).",
  act: _0xd23e1b
};
const _0x8f58aa = {
  aspd: 0.2,
  crit: 0.1
};
const _0x5d726f = {
  stats: _0x8f58aa
};
const _0x52593f = {
  name: "arien:arrow",
  w: 22
};
const _0x47560b = {
  spr: "arrow",
  spd: 6.5,
  life: 90,
  w: 12,
  h: 4,
  col: "#c0ffa0",
  home: 0.18,
  pic: _0x52593f
};
const _0x466991 = {
  k: "proj",
  p: _0x47560b,
  m: 2,
  n: 2
};
const _0x25c344 = {
  on: "interval",
  every: 4,
  do: [_0x466991]
};
const _0x121066 = {
  name: "바람의 숨결",
  desc: "공격 속도 +20%, 치명타 확률 +10%. 4초마다 가까운 적에게 유도 화살 2발이 날아간다 (각 200%).",
  effects: [_0x5d726f, _0x25c344]
};
const _0x12f421 = {
  target: "skill1",
  dmg: 0.4
};
const _0x4cfccd = {
  desc: "잎새 연사 피해 +40%",
  mods: [_0x12f421]
};
const _0x4cc733 = {
  target: "skill2",
  count: 2
};
const _0xbef90a = {
  desc: "바람 산탄 +2발",
  mods: [_0x4cc733]
};
const _0x346f78 = {
  critDmg: 0.3
};
const _0x3c4599 = {
  stats: _0x346f78
};
const _0x477a3f = {
  desc: "치명타 피해 +30%",
  effects: [_0x3c4599]
};
const _0x1092b6 = {
  target: "ult",
  dmg: 0.4,
  cd: 8
};
const _0x2cc18b = {
  desc: "바람의 인도 피해 +40%, 쿨타임 -8초",
  mods: [_0x1092b6]
};
const _0x3295d0 = {
  target: "all",
  dmg: 0.35
};
const _0x127b0f = {
  cdr: 0.1
};
const _0x3186f5 = {
  stats: _0x127b0f
};
const _0x8f8c2b = {
  desc: "모든 기술 피해 +35%, 스킬 쿨타임 -10%",
  mods: [_0x3295d0],
  effects: [_0x3186f5]
};
const _0x4e1170 = {
  skin: "#f8e8e8",
  hair: "#2a1a3a",
  hairStyle: "witch",
  body: "#5a1a4a",
  trim: "#ff80c0",
  legs: "#2a0a24",
  boots: "#1a0618",
  cape: "#3a0a30",
  eye: "#ff80c0",
  weapon: "strings",
  wcol: "#ffd0e8",
  wcol2: "#c0a040",
  build: "slim",
  glow: "#ff80c0",
  extra: "chains"
};
const _0x4025c6 = {
  arc: "thrust",
  r: 44,
  col: "#ffd0e8"
};
const _0x241e0c = {
  dur: 16,
  t: 5,
  m: 0.65,
  box: [0, -14, 48, 12],
  w: "castUp",
  s: "cast",
  fx: _0x4025c6,
  hs: 2,
  sfx: "swing"
};
const _0x3922e2 = {
  arc: "thrust",
  r: 44,
  col: "#ffd0e8"
};
const _0x34ecbe = {
  dur: 16,
  t: 5,
  m: 0.65,
  box: [0, -6, 48, 12],
  w: "castUp",
  s: "cast",
  fx: _0x3922e2,
  hs: 2,
  sfx: "swing"
};
const _0x2da8c2 = {
  arc: "thrust",
  r: 60,
  col: "#ff80c0"
};
const _0xb3d045 = {
  dur: 26,
  t: 9,
  m: 1.2,
  box: [0, -14, 64, 22],
  w: "castUp",
  s: "throw",
  fx: _0x2da8c2,
  kb: -5,
  up: -2,
  hs: 5,
  fin: !0,
  st: "bleed"
};
const _0x471df5 = {
  arc: "down",
  r: 24,
  col: "#ffd0e8"
};
const _0x4b0253 = {
  dur: 16,
  t: 4,
  m: 0.65,
  box: [-6, -4, 44, 24],
  w: "castUp",
  s: "cast",
  fx: _0x471df5,
  air: !0,
  grav: 0.35,
  hs: 2
};
const _0x3dea21 = {
  arc: "thrust",
  r: 52,
  col: "#ff80c0"
};
const _0xe5ac8f = {
  dur: 20,
  t: 5,
  m: 1,
  box: [0, -10, 56, 14],
  w: "dash",
  s: "cast",
  fx: _0x3dea21,
  lunge: 5,
  hs: 3
};
const _0x53bcaa = {
  t: 10,
  k: "sfx",
  s: "cast"
};
const _0x1435e0 = {
  kind: "puppet",
  life: 720,
  m: 0.7,
  max: 4
};
const _0x2a6d95 = {
  t: 10,
  k: "summon",
  s: _0x1435e0,
  n: 2
};
const _0x1f422f = {
  dur: 26,
  pose: [[0, "castUp"]],
  ev: [_0x53bcaa, _0x2a6d95]
};
const _0x3d5afe = {
  name: "꼭두각시 극단",
  desc: "실에 묶인 꼭두각시 2체를 불러 함께 싸운다. 꼭두각시의 공격은 출혈을 일으킨다 (최대 4체, 12초).",
  cd: 10,
  act: _0x1f422f
};
const _0x396aa2 = {
  t: 12,
  k: "sfx",
  s: "swing_heavy"
};
const _0x4cfb0c = {
  t: 12,
  k: "nova",
  r: 72,
  m: 1.8,
  el: "shadow",
  st: "bleed",
  up: -2
};
const _0x1a2c88 = {
  arc: "circle",
  r: 60,
  col: "#ff80c0"
};
const _0x5acbe1 = {
  t: 12,
  k: "fx",
  fx: _0x1a2c88
};
const _0x58d644 = {
  t: 12,
  k: "shake",
  v: 3
};
const _0x35fd18 = {
  dur: 30,
  pose: [[0, "castUp"], [12, "spin"]],
  ev: [_0x396aa2, _0x4cfb0c, _0x5acbe1, _0x58d644]
};
const _0x90c4a3 = {
  name: "실 끊기",
  desc: "무대의 실을 한꺼번에 끊어 주변 적을 베고 출혈을 일으킨다.",
  cd: 8,
  act: _0x35fd18
};
const _0x49c067 = {
  kind: "puppet",
  life: 600,
  m: 0.7,
  max: 4
};
const _0x557e2a = {
  t: 6,
  k: "summon",
  s: _0x49c067,
  n: 1
};
const _0x4d00ec = {
  t: 8,
  k: "nova",
  r: 56,
  m: 1.5,
  el: "shadow",
  st: "bleed",
  up: -2
};
const _0x2b8c53 = {
  t: 8,
  k: "sfx",
  s: "swap_hit"
};
const _0x59d7a4 = {
  dur: 24,
  pose: [[0, "castUp"], [8, "spin"]],
  inv: [0, 12],
  ev: [_0x557e2a, _0x4d00ec, _0x2b8c53]
};
const _0x1742c5 = {
  name: "교대: 막이 오르다",
  desc: "꼭두각시와 함께 무대에 오르며 주변을 휩쓴다.",
  act: _0x59d7a4
};
const _0x36f7d6 = {
  skillDmg: 0.15
};
const _0x5893f8 = {
  stats: _0x36f7d6
};
const _0x51a6f5 = {
  kind: "puppet",
  life: 480,
  m: 0.6,
  max: 4
};
const _0x294cbd = {
  k: "summon",
  s: _0x51a6f5
};
const _0x565c83 = {
  on: "swap",
  do: [_0x294cbd]
};
const _0x3b5f75 = {
  name: "조종자",
  desc: "교대로 등장할 때 꼭두각시 1체를 추가로 부른다. 스킬 피해 +15%",
  effects: [_0x5893f8, _0x565c83]
};
const _0x2f449b = {
  target: "skill1",
  count: 1
};
const _0x21f2ce = {
  desc: "꼭두각시 극단 소환 수 +1",
  mods: [_0x2f449b]
};
const _0x291295 = {
  target: "skill1",
  dmg: 0.4
};
const _0x3952fa = {
  desc: "꼭두각시 피해 +40%",
  mods: [_0x291295]
};
const _0x6ab78c = {
  target: "skill2",
  size: 0.3,
  cd: 2
};
const _0x31a719 = {
  desc: "실 끊기 범위 +30%, 쿨타임 -2초",
  mods: [_0x6ab78c]
};
const _0x341095 = {
  vsBleed: 0.25
};
const _0x17c622 = {
  stats: _0x341095
};
const _0x2a65e0 = {
  desc: "출혈 대상에게 주는 피해 +25%",
  effects: [_0x17c622]
};
const _0x4439d0 = {
  target: "all",
  dmg: 0.3
};
const _0x4dd3dc = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x4439d0]
};
const _0x521dfa = {
  skin: "#f0c8a0",
  hair: "#ff6a1a",
  hairStyle: "spiky",
  body: "#a03a1a",
  trim: "#ffd060",
  legs: "#5a1a0a",
  boots: "#3a1006",
  cape: "#ff7a2a",
  eye: "#ffe080",
  weapon: "sword",
  wcol: "#ffd080",
  wcol2: "#6a2a10",
  build: "normal",
  glow: "#ffa040",
  extra: "wings"
};
const _0x3a3e9c = {
  arc: "down",
  r: 26,
  col: "#ffb060"
};
const _0x347804 = {
  dur: 20,
  t: 7,
  m: 1,
  box: [-4, -18, 36, 30],
  w: "windHigh",
  s: "slashDown",
  fx: _0x3a3e9c,
  hs: 4,
  lunge: 2,
  el: "fire"
};
const _0x25d11c = {
  arc: "up",
  r: 26,
  col: "#ffb060"
};
const _0x5430ab = {
  dur: 20,
  t: 7,
  m: 1.05,
  box: [-4, -22, 36, 32],
  w: "windLow",
  s: "slashUp",
  fx: _0x25d11c,
  hs: 4,
  lunge: 2,
  el: "fire"
};
const _0x315b13 = {
  arc: "thrust",
  r: 38,
  col: "#ffb060"
};
const _0xa838a = {
  dur: 22,
  t: 8,
  m: 1.1,
  box: [0, -10, 42, 16],
  w: "thrustWind",
  s: "thrust",
  fx: _0x315b13,
  hs: 4,
  lunge: 3,
  el: "fire"
};
const _0x3f5315 = {
  arc: "slam",
  r: 34,
  col: "#ff7a2a"
};
const _0x335046 = {
  t: 13,
  k: "nova",
  r: 34,
  m: 0.8,
  el: "fire",
  st: "burn"
};
const _0x3cc0e3 = {
  dur: 34,
  t: 13,
  m: 1.9,
  box: [-10, -26, 54, 38],
  w: "slamWind",
  s: "slam",
  fx: _0x3f5315,
  kb: 5,
  up: -3,
  hs: 9,
  shake: 5,
  fin: !0,
  el: "fire",
  st: "burn",
  sfx: "swing_heavy",
  extra: [_0x335046]
};
const _0x2b904f = {
  t: 4,
  k: "plunge",
  vy: 8,
  m: 1.8,
  r: 40,
  el: "fire",
  st: "burn"
};
const _0x66690f = {
  dur: 70,
  pose: [[0, "slamWind"], [6, "slam"]],
  landEnd: !0,
  airOk: !0,
  ev: [_0x2b904f]
};
const _0x40311b = {
  arc: "thrust",
  r: 46,
  col: "#ff7a2a"
};
const _0x2b48b1 = {
  dur: 22,
  t: 5,
  m: 1.4,
  box: [-20, -12, 52, 22],
  w: "dash",
  s: "thrust",
  fx: _0x40311b,
  lunge: 7,
  hs: 5,
  el: "fire",
  st: "burn"
};
const _0x2d00fa = {
  t: 0,
  k: "sfx",
  s: "skill"
};
const _0x47608a = {
  t: 12,
  k: "plunge",
  vy: 10,
  m: 3.2,
  r: 58,
  el: "fire",
  st: "burn"
};
const _0x55ae48 = {
  dur: 90,
  pose: [[0, "castUp"], [12, "slam"]],
  move: [[0, 1.5, -7]],
  landEnd: !0,
  airOk: !0,
  inv: [0, 30],
  ev: [_0x2d00fa, _0x47608a]
};
const _0x58ce46 = {
  name: "불사조 강하",
  desc: "불꽃 날개로 솟구쳤다가 화염과 함께 내리꽂힌다.",
  cd: 9,
  act: _0x55ae48
};
const _0x4e7986 = {
  t: 2,
  k: "sfx",
  s: "dash"
};
const _0xb6f2d0 = {
  arc: "thrust",
  r: 60,
  col: "#ff7a2a"
};
const _0x4f915a = {
  t: 8,
  k: "hit",
  box: [-60, -16, 80, 28],
  m: 2.2,
  kb: 4,
  up: -2,
  hs: 8,
  el: "fire",
  st: "burn",
  fx: _0xb6f2d0
};
const _0x523cb1 = {
  vis: "fire",
  w: 120,
  h: 16,
  life: 150,
  tick: 15,
  m: 0.35,
  el: "fire",
  st: "burn"
};
const _0x423a6c = {
  t: 4,
  k: "field",
  f: _0x523cb1,
  dx: 50,
  ground: !0
};
const _0x2f04d2 = {
  dur: 28,
  pose: [[0, "dash"], [4, "thrust"]],
  move: [[2, 10], [14, 0]],
  inv: [0, 18],
  ev: [_0x4e7986, _0x4f915a, _0x423a6c]
};
const _0x4d8cec = {
  name: "재의 날개",
  desc: "불길이 되어 전방을 꿰뚫고, 지나간 자리에 화염을 남긴다. 돌진 중 무적.",
  cd: 11,
  act: _0x2f04d2
};
const _0x514dac = {
  t: 8,
  k: "sfx",
  s: "explode"
};
const _0x210392 = {
  t: 8,
  k: "nova",
  r: 62,
  m: 2,
  el: "fire",
  st: "burn",
  up: -3
};
const _0x440d77 = {
  t: 8,
  k: "shake",
  v: 5
};
const _0x31a8a4 = {
  dur: 24,
  pose: [[0, "castUp"], [8, "slam"]],
  inv: [0, 12],
  ev: [_0x514dac, _0x210392, _0x440d77]
};
const _0x53af6e = {
  name: "교대: 재림",
  desc: "불꽃 기둥과 함께 내려와 주변을 불태운다.",
  act: _0x31a8a4
};
const _0xd5be77 = {
  revive: 1
};
const _0x42a70b = {
  vsBurn: 0.15
};
const _0x4a7150 = {
  flags: _0xd5be77,
  stats: _0x42a70b
};
const _0x1769d7 = {
  name: "불사",
  desc: "런 중 1회 쓰러지면 불꽃과 함께 되살아난다(체력 40%). 화상 대상에게 주는 피해 +15%",
  effects: [_0x4a7150]
};
const _0x381bda = {
  target: "skill1",
  dmg: 0.35
};
const _0x5cb7c6 = {
  desc: "불사조 강하 피해 +35%",
  mods: [_0x381bda]
};
const _0x7201d5 = {
  maxHp: 40
};
const _0x5788fc = {
  stats: _0x7201d5
};
const _0x2a606b = {
  desc: "최대 체력 +40",
  effects: [_0x5788fc]
};
const _0x3ebad8 = {
  target: "skill2",
  cd: 3
};
const _0x4dd415 = {
  desc: "재의 날개 쿨타임 -3초",
  mods: [_0x3ebad8]
};
const _0x59ab0c = {
  burnSpread: 1.5
};
const _0x16204c = {
  flags: _0x59ab0c
};
const _0x546eeb = {
  desc: "화상 대상 처치 시 폭발",
  effects: [_0x16204c]
};
const _0x34dd02 = {
  target: "all",
  dmg: 0.3
};
const _0x24c0ad = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x34dd02]
};
const _0x5d85ae = {
  skin: "#f4ecf0",
  hair: "#e8f4ff",
  hairStyle: "pony",
  body: "#3a6a9a",
  trim: "#e0f8ff",
  legs: "#24405a",
  boots: "#e0f0ff",
  cape: "#a8e4ff",
  eye: "#80d0ff",
  weapon: "rapier",
  wcol: "#d8f4ff",
  wcol2: "#3a6a9a",
  build: "slim",
  glow: "#a8e4ff",
  extra: "scarf"
};
const _0x7fb31f = {
  arc: "thrust",
  r: 36,
  col: "#c8f0ff"
};
const _0x518009 = {
  dur: 13,
  t: 4,
  m: 0.75,
  box: [0, -12, 42, 14],
  w: "thrustWind",
  s: "thrust",
  fx: _0x7fb31f,
  hs: 3,
  lunge: 2.5,
  el: "frost"
};
const _0x3255cc = {
  arc: "down",
  r: 26,
  col: "#a8e4ff"
};
const _0x5a8044 = {
  dur: 13,
  t: 4,
  m: 0.75,
  box: [0, -16, 36, 22],
  w: "windHigh",
  s: "slashDown",
  fx: _0x3255cc,
  hs: 3,
  lunge: 2,
  el: "frost"
};
const _0x133075 = {
  arc: "thrust",
  r: 38,
  col: "#c8f0ff"
};
const _0x47119b = {
  dur: 13,
  t: 4,
  m: 0.8,
  box: [0, -12, 44, 14],
  w: "thrustWind",
  s: "thrust",
  fx: _0x133075,
  hs: 3,
  lunge: 3,
  el: "frost"
};
const _0x15144d = {
  arc: "thrust",
  r: 48,
  col: "#e0f8ff"
};
const _0x32d6b3 = {
  dur: 26,
  t: 9,
  m: 1.6,
  box: [0, -14, 52, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x15144d,
  kb: 5,
  hs: 7,
  lunge: 5,
  fin: !0,
  el: "frost",
  st: "chill",
  sfx: "swing_heavy"
};
const _0x4a0ccf = {
  arc: "down",
  r: 26,
  col: "#a8e4ff"
};
const _0x2e9183 = {
  dur: 16,
  t: 4,
  m: 0.8,
  box: [0, -6, 34, 24],
  w: "windHigh",
  s: "slashDown",
  fx: _0x4a0ccf,
  air: !0,
  grav: 0.3,
  hs: 3,
  el: "frost"
};
const _0x55a6ff = {
  arc: "thrust",
  r: 50,
  col: "#c8f0ff"
};
const _0x13f36f = {
  dur: 20,
  t: 5,
  m: 1.3,
  box: [-10, -12, 56, 16],
  w: "thrustWind",
  s: "thrust",
  fx: _0x55a6ff,
  lunge: 8,
  hs: 5,
  el: "frost",
  st: "chill"
};
const _0x4abbc2 = {
  arc: "thrust",
  r: 42,
  col: "#c8f0ff"
};
const _0x291619 = {
  dur: 34,
  times: [4, 8, 12, 16, 20, 25],
  m: 0.55,
  box: [0, -14, 50, 18],
  pose: [[0, "thrustWind"], [3, "thrust"], [7, "thrustWind"], [9, "thrust"], [15, "thrustWind"], [17, "thrust"], [24, "thrust"]],
  fx: _0x4abbc2,
  el: "frost",
  st: "chill",
  hs: 2,
  move: [[2, 1.5], [26, 0]],
  lastM: 1,
  fin: !0
};
const _0x1cced3 = {
  t: 8,
  k: "sfx",
  s: "freeze"
};
const _0x594499 = {
  vis: "ice",
  w: 130,
  h: 22,
  life: 360,
  tick: 24,
  m: 0.3,
  el: "frost",
  st: "chill",
  slow: !0
};
const _0x1a8312 = {
  t: 8,
  k: "field",
  f: _0x594499,
  ground: !0
};
const _0x4c7b10 = {
  t: 8,
  k: "nova",
  r: 44,
  m: 1.2,
  el: "frost",
  st: "chill"
};
const _0x1ec213 = {
  dur: 24,
  pose: [[0, "castUp"], [8, "cast"]],
  ev: [_0x1cced3, _0x1a8312, _0x4c7b10]
};
const _0x58b4c3 = {
  name: "서리 결정",
  desc: "발밑에 서리 결정밭을 펼쳐 적을 느리게 하고 지속 피해 (6초, 0.4초마다 30%, 냉기).",
  cd: 12,
  act: _0x1ec213
};
const _0x393a95 = {
  t: 6,
  k: "nova",
  r: 56,
  m: 1.8,
  el: "frost",
  st: "chill",
  up: -2
};
const _0x246d45 = {
  t: 6,
  k: "sfx",
  s: "freeze"
};
const _0x5db880 = {
  dur: 22,
  pose: [[0, "windHigh"], [6, "spin"]],
  inv: [0, 12],
  ev: [_0x393a95, _0x246d45]
};
const _0x223541 = {
  name: "교대: 여왕의 칙령",
  desc: "얼음 칼날을 휘둘러 주변을 얼린다 (공격력 180%, 냉기).",
  act: _0x5db880
};
const _0x1888dc = {
  vsFrozen: 0.35
};
const _0x1237d0 = {
  stats: _0x1888dc
};
const _0x1cdaea = {
  k: "status",
  s: "chill"
};
const _0x31bfb8 = {
  on: "crit",
  do: [_0x1cdaea]
};
const _0x421067 = {
  name: "얼어붙은 맹세",
  desc: "빙결 대상에게 주는 피해 +35%, 치명타 시 냉기 1중첩.",
  effects: [_0x1237d0, _0x31bfb8]
};
const _0x1b5499 = {
  target: "skill1",
  dmg: 0.35
};
const _0x25fbfc = {
  desc: "빙화 연찌르기 피해 +35%",
  mods: [_0x1b5499]
};
const _0x5b07ee = {
  mspd: 0.1
};
const _0x4968e5 = {
  stats: _0x5b07ee
};
const _0x31bbec = {
  desc: "이동 속도 +10%",
  effects: [_0x4968e5]
};
const _0x54ccb0 = {
  target: "skill2",
  size: 0.3
};
const _0x43b2fc = {
  desc: "서리 결정 범위 +30%",
  mods: [_0x54ccb0]
};
const _0x430916 = {
  freezeShatter: 1
};
const _0x2c0302 = {
  flags: _0x430916
};
const _0xe6ce77 = {
  desc: "빙결 대상 처치 시 얼음 파편 폭발",
  effects: [_0x2c0302]
};
const _0x2b21ba = {
  target: "all",
  dmg: 0.3
};
const _0x2c5c00 = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x2b21ba]
};
const _0x1b8f8e = {
  skin: "#d8a888",
  hair: "#3a3a4a",
  hairStyle: "short",
  body: "#4a4a5a",
  trim: "#7fd8ff",
  legs: "#2a2a34",
  boots: "#1a1a20",
  cape: "#2a3a5a",
  eye: "#a0e8ff",
  weapon: "hammer",
  wcol: "#8a9aaa",
  wcol2: "#5a3a20",
  build: "big",
  glow: "#7fd8ff",
  extra: "chains"
};
const _0x13cdc8 = {
  arc: "down",
  r: 30,
  col: "#a0e8ff"
};
const _0x1d7120 = {
  dur: 22,
  t: 8,
  m: 1.05,
  box: [-4, -20, 40, 32],
  w: "windHigh",
  s: "slashDown",
  fx: _0x13cdc8,
  hs: 5,
  lunge: 2,
  kb: 3
};
const _0x179401 = {
  arc: "up",
  r: 30,
  col: "#a0e8ff"
};
const _0x5add68 = {
  dur: 22,
  t: 8,
  m: 1.1,
  box: [-4, -24, 40, 34],
  w: "windLow",
  s: "slashUp",
  fx: _0x179401,
  hs: 5,
  lunge: 2,
  up: -3
};
const _0x1624fd = {
  arc: "slam",
  r: 38,
  col: "#7fd8ff"
};
const _0x5c08cd = {
  t: 14,
  k: "chain",
  n: 3,
  m: 0.6
};
const _0x5e9dc9 = {
  dur: 36,
  t: 14,
  m: 2,
  box: [-12, -26, 60, 40],
  w: "slamWind",
  s: "slam",
  fx: _0x1624fd,
  kb: 5,
  up: -3,
  hs: 10,
  shake: 6,
  fin: !0,
  el: "thunder",
  st: "shock",
  sfx: "swing_heavy",
  extra: [_0x5c08cd]
};
const _0x666295 = {
  t: 4,
  k: "plunge",
  vy: 9,
  m: 1.8,
  r: 44,
  el: "thunder",
  st: "shock"
};
const _0xabe2f8 = {
  dur: 70,
  pose: [[0, "slamWind"], [6, "slam"]],
  landEnd: !0,
  airOk: !0,
  ev: [_0x666295]
};
const _0x531dc5 = {
  arc: "slam",
  r: 34,
  col: "#7fd8ff"
};
const _0x108a7e = {
  dur: 24,
  t: 7,
  m: 1.5,
  box: [-10, -18, 52, 28],
  w: "slamWind",
  s: "slam",
  fx: _0x531dc5,
  lunge: 6,
  hs: 6,
  el: "thunder",
  st: "shock"
};
const _0x2260fb = {
  t: 10,
  k: "sfx",
  s: "thunder"
};
const _0x189ce7 = {
  arc: "slam",
  r: 44,
  col: "#c0f0ff"
};
const _0x54b2f7 = {
  t: 12,
  k: "hit",
  box: [-6, -40, 60, 56],
  m: 2.6,
  kb: 4,
  up: -3,
  hs: 9,
  el: "thunder",
  st: "shock",
  fx: _0x189ce7,
  shake: 6
};
const _0x30cb2e = {
  t: 12,
  k: "chain",
  n: 4,
  m: 0.9
};
const _0x43c3f8 = {
  dur: 34,
  pose: [[0, "slamWind"], [12, "slam"]],
  armor: !0,
  ev: [_0x2260fb, _0x54b2f7, _0x30cb2e]
};
const _0x114b2d = {
  name: "낙뢰 강타",
  desc: "망치를 내리쳐 앞쪽에 번개를 떨어뜨린다 (260%, 감전) + 주변 적 4명에게 연쇄 번개.",
  cd: 8,
  act: _0x43c3f8
};
const _0x301f6e = {
  t: 10,
  k: "sfx",
  s: "explode"
};
const _0x292ea8 = {
  vis: "thunder",
  w: 150,
  h: 20,
  life: 300,
  tick: 30,
  m: 0.4,
  el: "thunder",
  st: "shock"
};
const _0x1cc169 = {
  t: 10,
  k: "field",
  f: _0x292ea8,
  ground: !0
};
const _0x115dc6 = {
  t: 10,
  k: "shake",
  v: 5
};
const _0x38461e = {
  dur: 28,
  pose: [[0, "slamWind"], [10, "slam"]],
  ev: [_0x301f6e, _0x1cc169, _0x115dc6]
};
const _0x3afd3b = {
  name: "폭풍 모루",
  desc: "땅을 내리쳐 번개 장판을 넓게 깐다 (5초, 0.5초마다 40%, 감전).",
  cd: 13,
  act: _0x38461e
};
const _0x131cea = {
  t: 8,
  k: "nova",
  r: 60,
  m: 2,
  el: "thunder",
  st: "shock",
  up: -3
};
const _0x37192d = {
  t: 8,
  k: "shake",
  v: 6
};
const _0x36764d = {
  t: 8,
  k: "sfx",
  s: "thunder"
};
const _0x46631a = {
  dur: 26,
  pose: [[0, "slamWind"], [8, "slam"]],
  inv: [0, 12],
  ev: [_0x131cea, _0x37192d, _0x36764d]
};
const _0x2f79fe = {
  name: "교대: 천둥 낙하",
  desc: "번개와 함께 떨어지며 내리찍는다 (200%, 감전).",
  act: _0x46631a
};
const _0x1b03ee = {
  vsShock: 0.25
};
const _0x1ad2db = {
  shockSpread: 1
};
const _0x1d476d = {
  stats: _0x1b03ee,
  flags: _0x1ad2db
};
const _0xde5dac = {
  name: "번개를 품은 쇠",
  desc: "감전 대상에게 주는 피해 +25%. 감전 대상 처치 시 번개가 튄다.",
  effects: [_0x1d476d]
};
const _0x3f0590 = {
  target: "skill1",
  dmg: 0.35
};
const _0x20b274 = {
  desc: "낙뢰 강타 피해 +35%",
  mods: [_0x3f0590]
};
const _0x11d2d7 = {
  maxHp: 40
};
const _0x1bbccf = {
  stats: _0x11d2d7
};
const _0x22188e = {
  desc: "최대 체력 +40",
  effects: [_0x1bbccf]
};
const _0xa2a8ba = {
  target: "skill2",
  cd: 3
};
const _0xc7b3b = {
  desc: "폭풍 모루 쿨타임 -3초",
  mods: [_0xa2a8ba]
};
const _0x322cfc = {
  atk: 0.1
};
const _0x45511f = {
  stats: _0x322cfc
};
const _0x1cd7e0 = {
  desc: "공격력 +10%",
  effects: [_0x45511f]
};
const _0x213f82 = {
  target: "all",
  dmg: 0.3
};
const _0xce769e = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x213f82]
};
const _0x3342bf = {
  skin: "#f0e0c8",
  hair: "#a0e080",
  hairStyle: "long",
  body: "#3a6a3a",
  trim: "#c0ffc0",
  legs: "#2a4a2a",
  boots: "#4a3a24",
  cape: "#5a8a4a",
  eye: "#80ffb0",
  weapon: "bow",
  wcol: "#8a6a3a",
  wcol2: "#c0ffc0",
  build: "slim",
  glow: "#80ffb0",
  extra: "scarf"
};
const _0x3c19db = {
  pierce: 1
};
const _0x324734 = {
  pierce: 3,
  spd: 9
};
const _0x158e0b = {
  pierce: 99,
  spd: 10,
  w: 16,
  h: 5
};
const _0x47d857 = {
  t: 8,
  k: "sfx",
  s: "arrow"
};
const _0xd9729f = {
  t: 10,
  k: "meteor",
  n: 8,
  m: 1.1,
  spread: 120,
  spr: "arrow"
};
const _0x2a1678 = {
  dur: 30,
  pose: [[0, "shootWind"], [8, "castUp"]],
  ev: [_0x47d857, _0xd9729f]
};
const _0x1f59a7 = {
  name: "바람의 화살비",
  desc: "하늘로 화살을 쏘아 앞쪽 넓은 범위에 화살비를 내린다 (8발, 각 110%).",
  cd: 11,
  act: _0x2a1678
};
const _0xd80622 = {
  mspd: 0.25
};
const definition_silva_wind = {
  t: 6,
  k: "buff",
  id: "silva_wind",
  stats: _0xd80622,
  dur: 3
};
const _0x3ddd0c = {
  aspd: 0.15,
  mspd: 0.1
};
const _0x20a0c5 = {
  stats: _0x3ddd0c
};
const _0x3c1119 = {
  crit: 0.2
};
const definition_silva_dash = {
  k: "buff",
  id: "silva_dash",
  stats: _0x3c1119,
  dur: 2
};
const _0x480069 = {
  on: "dash",
  do: [definition_silva_dash]
};
const _0x1af80b = {
  name: "바람의 가호",
  desc: "공격 속도 +15%, 이동 속도 +10%. 대시 후 2초간 치명타 확률 +20%.",
  effects: [_0x20a0c5, _0x480069]
};
const _0x343001 = {
  target: "skill1",
  dmg: 0.35
};
const _0x3edb4f = {
  desc: "질풍 관통시 피해 +35%",
  mods: [_0x343001]
};
const _0x5b1589 = {
  critDmg: 0.25
};
const _0x1d9795 = {
  stats: _0x5b1589
};
const _0x9a1905 = {
  desc: "치명타 피해 +25%",
  effects: [_0x1d9795]
};
const _0x5cf180 = {
  target: "skill2",
  count: 3
};
const _0x19d0a6 = {
  desc: "화살비 +3발",
  mods: [_0x5cf180]
};
const _0x805df6 = {
  airDash: 1
};
const _0x49cc03 = {
  flags: _0x805df6
};
const _0x382718 = {
  desc: "공중 대시",
  effects: [_0x49cc03]
};
const _0x4d456f = {
  target: "all",
  dmg: 0.3
};
const _0x354fec = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x4d456f]
};
const _0x2c2784 = {
  skin: "#d0c8b8",
  hair: "#2a2a20",
  hairStyle: "witch",
  body: "#2a2a24",
  trim: "#8bdc3a",
  legs: "#1a1a14",
  boots: "#3a2a1a",
  cape: "#1a1a14",
  eye: "#c0ff60",
  weapon: "flask",
  wcol: "#8bdc3a",
  wcol2: "#4a5a30",
  build: "slim",
  glow: "#8bdc3a"
};
const _0x5e97be = {
  el: "poison",
  st: "poison"
};
const _0x5cd043 = {
  el: "poison",
  st: "poison"
};
const _0x29a7c6 = {
  r: 30,
  m: 0.8,
  el: "poison",
  st: "poison"
};
const _0x1a0ab1 = {
  spr: "flask",
  spd: 4.5,
  life: 60,
  w: 10,
  h: 10,
  col: "#8bdc3a",
  grav: 0.2,
  vy: -3,
  el: "poison",
  st: "poison",
  boom: _0x29a7c6
};
const _0x1a7fbf = {
  dur: 24,
  t: 9,
  m: 1,
  p: _0x1a0ab1,
  w: "windHigh",
  s: "throw",
  sfx: "throw"
};
const _0x3a8a23 = {
  el: "poison",
  st: "poison"
};
const _0x57c266 = {
  arc: "h",
  r: 36,
  col: "#8bdc3a"
};
const _0x5b1f8c = {
  dur: 20,
  t: 6,
  m: 1.1,
  box: [-6, -14, 46, 24],
  w: "dash",
  s: "cast",
  fx: _0x57c266,
  lunge: 6,
  hs: 4,
  el: "poison",
  st: "poison"
};
const _0x2558ac = {
  t: 6,
  k: "sfx",
  s: "throw"
};
const _0x57e072 = {
  vis: "poison",
  w: 54,
  h: 18,
  life: 240,
  tick: 30,
  m: 0.3,
  el: "poison",
  st: "poison"
};
const _0x23bf93 = {
  r: 30,
  m: 1.2,
  el: "poison",
  st: "poison",
  field: _0x57e072
};
const _0x39513c = {
  spr: "flask",
  spd: 4.5,
  life: 70,
  w: 10,
  h: 10,
  col: "#8bdc3a",
  grav: 0.22,
  vy: -3.5,
  el: "poison",
  st: "poison",
  boom: _0x23bf93
};
const _0x49675f = {
  t: 6,
  k: "proj",
  n: 3,
  spread: 14,
  p: _0x39513c,
  m: 1
};
const _0x325c25 = {
  dur: 26,
  pose: [[0, "windHigh"], [6, "throw"]],
  ev: [_0x2558ac, _0x49675f]
};
const _0x4b1148 = {
  name: "역병 플라스크",
  desc: "플라스크 3개를 던져 터진 자리에 독 웅덩이를 남긴다 (폭발 120% + 웅덩이 4초, 독).",
  cd: 8,
  act: _0x325c25
};
const _0xdb74fe = {
  t: 8,
  k: "sfx",
  s: "cast"
};
const _0x46a63f = {
  t: 8,
  k: "nova",
  r: 70,
  m: 1.8,
  el: "poison",
  st: "poison",
  col: "#5a8a2a"
};
const _0x5c8641 = {
  vis: "poison",
  w: 120,
  h: 40,
  life: 180,
  tick: 30,
  m: 0.25,
  el: "poison",
  st: "poison",
  follow: !0
};
const _0x355b6b = {
  t: 8,
  k: "field",
  f: _0x5c8641
};
const _0x4f5baa = {
  dur: 26,
  pose: [[0, "castUp"], [8, "cast"]],
  ev: [_0xdb74fe, _0x46a63f, _0x355b6b]
};
const _0x108b30 = {
  name: "검은 안개",
  desc: "주변에 독안개를 뿜어 적들에게 독 3중첩 (180%). 독 대상 처치 시 독구름이 퍼진다(8초).",
  cd: 12,
  act: _0x4f5baa
};
const _0xe180c8 = {
  t: 6,
  k: "nova",
  r: 54,
  m: 1.6,
  el: "poison",
  st: "poison",
  col: "#8bdc3a"
};
const _0x2d5bd8 = {
  t: 6,
  k: "sfx",
  s: "explode"
};
const _0x40d74e = {
  dur: 22,
  pose: [[0, "windHigh"], [6, "throw"]],
  inv: [0, 12],
  ev: [_0xe180c8, _0x2d5bd8]
};
const _0x14e12d = {
  name: "교대: 처방전",
  desc: "등장하며 독 플라스크를 터뜨린다 (160%, 독).",
  act: _0x40d74e
};
const _0x4ddde7 = {
  poisonMax: 3,
  poisonCloud: 1
};
const _0x3ebdb9 = {
  vsPoison: 0.15
};
const _0xdfa5b1 = {
  flags: _0x4ddde7,
  stats: _0x3ebdb9
};
const _0x3cc542 = {
  name: "전염",
  desc: "독 최대 중첩 +3, 독 대상 처치 시 독구름. 독 대상에게 주는 피해 +15%.",
  effects: [_0xdfa5b1]
};
const _0x216f64 = {
  target: "skill1",
  count: 1
};
const _0x1afb84 = {
  desc: "역병 플라스크 +1개",
  mods: [_0x216f64]
};
const _0x53e9ae = {
  maxHp: 30
};
const _0x19bafd = {
  stats: _0x53e9ae
};
const _0x329c03 = {
  desc: "최대 체력 +30",
  effects: [_0x19bafd]
};
const _0x2de9ed = {
  target: "skill2",
  size: 0.3
};
const _0x20768d = {
  desc: "검은 안개 범위 +30%",
  mods: [_0x2de9ed]
};
const _0x5324f0 = {
  cdr: 0.1
};
const _0x2f6f74 = {
  stats: _0x5324f0
};
const _0x32aca9 = {
  desc: "스킬 쿨타임 -10%",
  effects: [_0x2f6f74]
};
const _0x5a0722 = {
  target: "all",
  dmg: 0.3
};
const _0x462bf5 = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x5a0722]
};
const _0x3f631c = {
  skin: "#e8c0a0",
  hair: "#c88a40",
  hairStyle: "helm",
  body: "#7a7a8a",
  trim: "#ffd76a",
  legs: "#4a4a5a",
  boots: "#3a3a44",
  cape: "#8a2a2a",
  eye: "#ffe080",
  weapon: "mace",
  wcol: "#a0a0b0",
  wcol2: "#5a4030",
  shield: "#a0a8b8",
  build: "big",
  glow: "#ffd76a"
};
const _0x2b5ce6 = {
  arc: "down",
  r: 26,
  col: "#ffe8a0"
};
const _0x10092b = {
  dur: 20,
  t: 7,
  m: 1,
  box: [-4, -18, 38, 30],
  w: "windHigh",
  s: "slashDown",
  fx: _0x2b5ce6,
  hs: 5,
  lunge: 2,
  kb: 3,
  armor: !0
};
const _0x1c14a4 = {
  arc: "up",
  r: 26,
  col: "#ffe8a0"
};
const _0x25c309 = {
  dur: 20,
  t: 7,
  m: 1,
  box: [-4, -20, 38, 30],
  w: "windLow",
  s: "slashUp",
  fx: _0x1c14a4,
  hs: 5,
  lunge: 2,
  armor: !0
};
const _0x26d8bc = {
  arc: "slam",
  r: 32,
  col: "#ffd76a"
};
const _0xf8ba05 = {
  dur: 30,
  t: 11,
  m: 1.7,
  box: [-6, -22, 48, 34],
  w: "slamWind",
  s: "slam",
  fx: _0x26d8bc,
  kb: 6,
  up: -3,
  hs: 8,
  shake: 4,
  fin: !0,
  sfx: "swing_heavy",
  armor: !0
};
const _0x347c3f = {
  arc: "down",
  r: 26,
  col: "#ffe8a0"
};
const _0x29cb9f = {
  dur: 18,
  t: 5,
  m: 0.9,
  box: [0, -6, 34, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x347c3f,
  air: !0,
  grav: 0.35,
  hs: 4
};
const _0x588387 = {
  arc: "h",
  r: 34,
  col: "#ffd76a"
};
const _0x430ede = {
  dur: 24,
  t: 6,
  m: 1.4,
  box: [-6, -18, 46, 30],
  w: "guard",
  s: "kick",
  fx: _0x588387,
  lunge: 7,
  kb: 7,
  hs: 6,
  armor: !0
};
const _0x1065b2 = {
  t: 2,
  k: "sfx",
  s: "dash"
};
const _0x27d129 = {
  t: 6,
  k: "hit",
  box: [-20, -20, 44, 34],
  m: 1,
  kb: 6,
  hs: 3
};
const _0xc2f118 = {
  arc: "h",
  r: 36,
  col: "#ffd76a"
};
const _0x503689 = {
  t: 14,
  k: "hit",
  box: [0, -20, 44, 34],
  m: 2,
  kb: 8,
  up: -2,
  hs: 8,
  stn: 40,
  shake: 4,
  fx: _0xc2f118
};
const _0x307b3e = {
  dur: 26,
  pose: [[0, "guard"], [4, "dash"], [16, "kick"]],
  move: [[2, 8], [14, 0]],
  inv: [0, 16],
  ev: [_0x1065b2, _0x27d129, _0x503689]
};
const _0x123116 = {
  name: "방패 돌격",
  desc: "방패를 앞세우고 돌진해 길 위의 적을 밀쳐 낸다 (200%, 경직). 돌진 중 무적.",
  cd: 7,
  act: _0x307b3e
};
const _0x5616ab = {
  t: 2,
  k: "sfx",
  s: "gem"
};
const _0x62c4e = {
  t: 2,
  k: "shield",
  v: 0.3
};
const _0x3bc2cc = {
  dmgTaken: -0.3
};
const definition_helga_wall = {
  t: 2,
  k: "buff",
  id: "helga_wall",
  stats: _0x3bc2cc,
  dur: 5
};
const _0x12c536 = {
  t: 2,
  k: "counter",
  dur: 120,
  m: 3
};
const _0x53194b = {
  dur: 20,
  pose: [[0, "guard"]],
  ev: [_0x5616ab, _0x62c4e, definition_helga_wall, _0x12c536]
};
const _0x44d07f = {
  name: "불굴의 성벽",
  desc: "최대 체력 30% 보호막 + 5초간 받는 피해 -30%. 2초간 맞받아치기 (300%).",
  cd: 15,
  act: _0x53194b
};
const _0x343dfe = {
  t: 8,
  k: "nova",
  r: 54,
  m: 1.5,
  up: -3
};
const _0x52d900 = {
  t: 8,
  k: "shield",
  v: 0.1
};
const _0x3c5b44 = {
  t: 8,
  k: "shake",
  v: 4
};
const _0x1cb60f = {
  dur: 24,
  pose: [[0, "slamWind"], [8, "slam"]],
  inv: [0, 12],
  ev: [_0x343dfe, _0x52d900, _0x3c5b44]
};
const _0x1231dd = {
  name: "교대: 북문 수비",
  desc: "방패로 내려찍으며 등장해 주변 적을 밀쳐 내고 보호막 10%.",
  act: _0x1cb60f
};
const _0x29d7e9 = {
  dmgTaken: -0.15
};
const _0x19d062 = {
  hurtWave: 1
};
const _0x25305f = {
  stats: _0x29d7e9,
  flags: _0x19d062
};
const _0x39f89b = {
  k: "shield",
  v: 0.15
};
const _0x4caa48 = {
  on: "roomStart",
  do: [_0x39f89b]
};
const _0x3476df = {
  name: "무너지지 않는 자",
  desc: "받는 피해 -15%, 방에 들어설 때 최대 체력 15% 보호막. 피격 시 충격파.",
  effects: [_0x25305f, _0x4caa48]
};
const _0xf5b9ca = {
  target: "skill1",
  dmg: 0.35
};
const _0x493169 = {
  desc: "방패 돌격 피해 +35%",
  mods: [_0xf5b9ca]
};
const _0x5670a6 = {
  maxHp: 50
};
const _0x3dee5d = {
  stats: _0x5670a6
};
const _0x372c4b = {
  desc: "최대 체력 +50",
  effects: [_0x3dee5d]
};
const _0x12a9a4 = {
  target: "skill2",
  cd: 3
};
const _0x3f7cbb = {
  desc: "불굴의 성벽 쿨타임 -3초",
  mods: [_0x12a9a4]
};
const _0x16254b = {
  dmgTaken: -0.05
};
const _0x268b61 = {
  stats: _0x16254b
};
const _0x4dff2c = {
  desc: "받는 피해 -5%",
  effects: [_0x268b61]
};
const _0x14efe8 = {
  target: "all",
  dmg: 0.3
};
const _0x5a331f = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x14efe8]
};
const _0x56a481 = {
  skin: "#f0d8d8",
  hair: "#2a0a12",
  hairStyle: "long",
  body: "#3a0a14",
  trim: "#ff3a5a",
  legs: "#1a0408",
  boots: "#2a0a10",
  cape: "#5a0a1a",
  eye: "#ff3a5a",
  weapon: "scythe",
  wcol: "#d0c0c8",
  wcol2: "#3a0a14",
  build: "slim",
  glow: "#ff3a5a"
};
const _0x11fa1d = {
  arc: "down",
  r: 32,
  col: "#ff6a80"
};
const _0x5b7c12 = {
  dur: 15,
  t: 5,
  m: 0.8,
  box: [-6, -18, 44, 28],
  w: "windHigh",
  s: "slashDown",
  fx: _0x11fa1d,
  hs: 3,
  lunge: 2.5,
  el: "blood"
};
const _0x521b71 = {
  arc: "up",
  r: 32,
  col: "#ff6a80"
};
const _0x1ba75f = {
  dur: 15,
  t: 5,
  m: 0.8,
  box: [-6, -20, 44, 30],
  w: "windLow",
  s: "slashUp",
  fx: _0x521b71,
  hs: 3,
  lunge: 2.5,
  el: "blood"
};
const _0x4cde87 = {
  arc: "circle",
  r: 32,
  col: "#ff3a5a"
};
const _0x38e533 = {
  dur: 18,
  t: 6,
  m: 0.9,
  box: [-22, -20, 60, 30],
  w: "windHigh",
  s: "spin",
  fx: _0x4cde87,
  hs: 3,
  el: "blood",
  st: "bleed"
};
const _0x1543b3 = {
  arc: "down",
  r: 40,
  col: "#ff3a5a"
};
const _0x481915 = {
  dur: 26,
  t: 9,
  m: 1.6,
  box: [-4, -22, 52, 34],
  w: "slamWind",
  s: "slam",
  fx: _0x1543b3,
  kb: 5,
  hs: 7,
  fin: !0,
  el: "blood",
  st: "bleed",
  sfx: "swing_heavy"
};
const _0x12cc1d = {
  arc: "circle",
  r: 28,
  col: "#ff6a80"
};
const _0x57d2d3 = {
  dur: 16,
  t: 4,
  m: 0.85,
  box: [-8, -6, 40, 28],
  w: "windHigh",
  s: "spin",
  fx: _0x12cc1d,
  air: !0,
  grav: 0.3,
  hs: 3,
  el: "blood"
};
const _0x121ea = {
  arc: "h",
  r: 44,
  col: "#ff3a5a"
};
const _0x50c465 = {
  dur: 20,
  t: 5,
  m: 1.3,
  box: [-14, -16, 56, 24],
  w: "dash",
  s: "slashUp",
  fx: _0x121ea,
  lunge: 8,
  hs: 5,
  el: "blood",
  st: "bleed"
};
const _0x56b44b = {
  arc: "circle",
  r: 38,
  col: "#ff3a5a"
};
const _0x358dd8 = {
  dur: 36,
  times: [4, 10, 16, 22, 28],
  m: 0.6,
  box: [-36, -24, 72, 38],
  pose: [[0, "spin"], [6, "windHigh"], [8, "spin"], [14, "windHigh"], [16, "spin"], [22, "windHigh"], [24, "spin"]],
  fx: _0x56b44b,
  el: "blood",
  st: "bleed",
  hs: 2,
  inv: [0, 30],
  move: [[0, 1.2], [30, 0]],
  fin: !0
};
const _0x570c72 = {
  t: 6,
  k: "sfx",
  s: "throw"
};
const _0x29346f = {
  spr: "scythe",
  spd: 6,
  life: 80,
  w: 22,
  h: 22,
  col: "#ff3a5a",
  pierce: 99,
  ret: !0,
  el: "blood",
  st: "bleed"
};
const _0x1b7617 = {
  t: 6,
  k: "proj",
  p: _0x29346f,
  m: 2
};
const _0x4616b5 = {
  dur: 24,
  pose: [[0, "windHigh"], [6, "throw"]],
  ev: [_0x570c72, _0x1b7617]
};
const _0x52be00 = {
  name: "사냥꾼의 낫",
  desc: "낫을 던져 꿰뚫고 되돌아오게 한다 (가는 길·오는 길 각 200%, 출혈).",
  cd: 9,
  act: _0x4616b5
};
const _0x42475d = {
  t: 6,
  k: "nova",
  r: 58,
  m: 1.8,
  el: "blood",
  st: "bleed",
  up: -2
};
const _0x5b2b00 = {
  t: 6,
  k: "heal",
  v: 0.05
};
const _0x57a874 = {
  dur: 22,
  pose: [[0, "windHigh"], [6, "spin"]],
  inv: [0, 12],
  ev: [_0x42475d, _0x5b2b00]
};
const _0x9afe55 = {
  name: "교대: 피의 수확",
  desc: "등장하며 주변을 크게 벤다 (180%, 출혈). 피해의 일부만큼 회복.",
  act: _0x57a874
};
const _0x4628cf = {
  k: "heal",
  v: 0.03
};
const _0x30d6d1 = {
  on: "kill",
  do: [_0x4628cf]
};
const _0x51eac0 = {
  bleedRupture: 1
};
const _0x11a15f = {
  flags: _0x51eac0
};
const _0x267e5e = {
  name: "흡혈 사냥",
  desc: "처치 시 체력 3% 회복. 출혈 5중첩 시 파열 (공격력 100%).",
  effects: [_0x30d6d1, _0x11a15f]
};
const _0x1271ce = {
  target: "skill1",
  dmg: 0.35
};
const _0x585f30 = {
  desc: "혈풍 피해 +35%",
  mods: [_0x1271ce]
};
const _0x400103 = {
  crit: 0.1
};
const _0x38c512 = {
  stats: _0x400103
};
const _0x4a6639 = {
  desc: "치명타 확률 +10%",
  effects: [_0x38c512]
};
const _0x11715a = {
  target: "skill2",
  cd: 2
};
const _0x53f132 = {
  desc: "사냥꾼의 낫 쿨타임 -2초",
  mods: [_0x11715a]
};
const _0x8674e1 = {
  k: "heal",
  v: 0.02
};
const _0x32f97a = {
  on: "kill",
  do: [_0x8674e1]
};
const _0x174a7e = {
  desc: "처치 시 회복 +2%",
  effects: [_0x32f97a]
};
const _0x226939 = {
  target: "all",
  dmg: 0.3
};
const _0x34d401 = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x226939]
};
const _0x27ae79 = {
  skin: "#f0d0b0",
  hair: "#c87a3a",
  hairStyle: "spiky",
  body: "#6a4a2a",
  trim: "#80e0ff",
  legs: "#3a2a1a",
  boots: "#2a1a10",
  cape: "#5a5a6a",
  eye: "#80e0ff",
  weapon: "cannon",
  wcol: "#a08a5a",
  wcol2: "#5a4a3a",
  build: "slim",
  glow: "#80e0ff",
  extra: "compass"
};
const _0x78840f = {
  spr: "bolt",
  spd: 7,
  life: 50,
  w: 10,
  h: 6,
  col: "#80e0ff",
  el: "thunder"
};
const _0x35b8c5 = {
  dur: 14,
  t: 5,
  m: 0.75,
  p: _0x78840f,
  sfx: "arrow"
};
const _0x53e1dd = {
  spr: "bolt",
  spd: 7,
  life: 50,
  w: 10,
  h: 6,
  col: "#80e0ff",
  el: "thunder"
};
const _0x40a0b2 = {
  dur: 14,
  t: 5,
  m: 0.75,
  p: _0x53e1dd,
  sfx: "arrow"
};
const _0x33a9c9 = {
  r: 30,
  m: 0.6,
  el: "thunder",
  st: "shock"
};
const _0x16ad7a = {
  spr: "orb",
  spd: 5,
  life: 60,
  w: 12,
  h: 12,
  col: "#c0f0ff",
  el: "thunder",
  st: "shock",
  boom: _0x33a9c9
};
const _0x9cf2fe = {
  dur: 24,
  t: 9,
  m: 1.3,
  p: _0x16ad7a,
  sfx: "cast"
};
const _0x3dfaed = {
  spr: "bolt",
  spd: 7,
  life: 50,
  w: 10,
  h: 6,
  col: "#80e0ff",
  el: "thunder"
};
const _0x4f7b9e = {
  dur: 16,
  t: 5,
  m: 0.75,
  p: _0x3dfaed,
  sfx: "arrow",
  air: !0
};
const _0x5e9464 = {
  spr: "bolt",
  spd: 9,
  life: 50,
  w: 14,
  h: 6,
  col: "#c0f0ff",
  el: "thunder",
  st: "shock",
  pierce: 3
};
const _0x171c64 = {
  dur: 18,
  t: 6,
  m: 1.3,
  p: _0x5e9464,
  sfx: "arrow"
};
const _0x1ba9c6 = {
  t: 10,
  k: "sfx",
  s: "gem"
};
const _0x473030 = {
  kind: "turret",
  life: 600,
  m: 0.6,
  max: 3
};
const _0x4628fe = {
  t: 10,
  k: "summon",
  s: _0x473030,
  n: 2
};
const _0x4daac0 = {
  dur: 24,
  pose: [[0, "crouch"], [10, "cast"]],
  ev: [_0x1ba9c6, _0x4628fe]
};
const _0x4b038c = {
  name: "태엽 포탑",
  desc: "자동 포탑 2대를 설치한다 (10초, 최대 3대). 포탑은 가까운 적에게 번개탄을 쏜다.",
  cd: 10,
  act: _0x4daac0
};
const _0x47d251 = {
  t: 8,
  k: "sfx",
  s: "thunder"
};
const _0x4d2813 = {
  r: 26,
  m: 0.5,
  el: "thunder",
  st: "shock"
};
const _0x1decd1 = {
  spr: "orb",
  spd: 6,
  life: 60,
  w: 12,
  h: 12,
  col: "#c0f0ff",
  el: "thunder",
  st: "shock",
  boom: _0x4d2813
};
const _0x596ac9 = {
  t: 8,
  k: "proj",
  n: 3,
  spread: 10,
  p: _0x1decd1,
  m: 1.4
};
const _0x8d9cf7 = {
  t: 12,
  k: "chain",
  n: 3,
  m: 0.6
};
const _0x492c5d = {
  dur: 24,
  pose: [[0, "shootWind"], [8, "shoot"]],
  ev: [_0x47d251, _0x596ac9, _0x8d9cf7]
};
const _0x38fc68 = {
  name: "전류 그물",
  desc: "전류 그물탄 3발을 쏴 맞은 적과 주변을 감전시킨다 (각 140% + 연쇄 번개).",
  cd: 8,
  act: _0x492c5d
};
const _0x4bf5e0 = {
  kind: "turret",
  life: 480,
  m: 0.6,
  max: 3
};
const _0x53b1d1 = {
  t: 8,
  k: "summon",
  s: _0x4bf5e0,
  n: 1
};
const _0x4fb20a = {
  t: 8,
  k: "nova",
  r: 50,
  m: 1.5,
  el: "thunder",
  st: "shock"
};
const _0x379adb = {
  dur: 22,
  pose: [[0, "crouch"], [8, "cast"]],
  inv: [0, 12],
  ev: [_0x53b1d1, _0x4fb20a]
};
const _0x25bfeb = {
  name: "교대: 긴급 수리",
  desc: "포탑 1대를 설치하며 등장하고 주변에 전류를 터뜨린다 (150%, 감전).",
  act: _0x379adb
};
const _0x1a4d57 = {
  crit: 0.12,
  vsShock: 0.2
};
const _0x2bcf76 = {
  stats: _0x1a4d57
};
const _0x1b4528 = {
  name: "정밀 조준",
  desc: "치명타 확률 +12%, 감전 대상에게 주는 피해 +20%.",
  effects: [_0x2bcf76]
};
const _0x22e2e7 = {
  target: "skill1",
  dmg: 0.4
};
const _0x5a2bd8 = {
  desc: "포탑 피해 +40%",
  mods: [_0x22e2e7]
};
const _0x5dd35a = {
  aspd: 0.1
};
const _0x16d857 = {
  stats: _0x5dd35a
};
const _0x40fd82 = {
  desc: "공격 속도 +10%",
  effects: [_0x16d857]
};
const _0x299553 = {
  target: "skill2",
  count: 2
};
const _0x10e1cb = {
  desc: "전류 그물 +2발",
  mods: [_0x299553]
};
const _0xac2f6e = {
  shockSpread: 1
};
const _0x2d2aaa = {
  flags: _0xac2f6e
};
const _0x1ed34d = {
  desc: "감전 대상 처치 시 번개가 튐",
  effects: [_0x2d2aaa]
};
const _0x38c7e7 = {
  target: "all",
  dmg: 0.3
};
const _0x387e46 = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x38c7e7]
};
const _0x4b5e88 = {
  skin: "#f8ece0",
  hair: "#fff0c0",
  hairStyle: "veil",
  body: "#f0e8d8",
  trim: "#ffd060",
  legs: "#c8b898",
  boots: "#a08a68",
  cape: "#fff8e8",
  eye: "#ffd060",
  weapon: "staff",
  wcol: "#fff0a0",
  wcol2: "#a08a68",
  build: "slim",
  glow: "#fff0a0",
  extra: "halo"
};
const _0x2e96d9 = {
  el: "holy"
};
const _0x274374 = {
  el: "holy"
};
const _0x3b0fbc = {
  el: "holy"
};
const _0x4107ce = {
  el: "holy"
};
const _0x3aba1f = {
  arc: "h",
  r: 36,
  col: "#fff0a0"
};
const _0x517bfc = {
  dur: 20,
  t: 6,
  m: 1.1,
  box: [-6, -16, 46, 26],
  w: "dash",
  s: "cast",
  fx: _0x3aba1f,
  lunge: 6,
  hs: 4,
  el: "holy"
};
const _0x1393e6 = {
  t: 10,
  k: "sfx",
  s: "gem"
};
const _0x5558c3 = {
  vis: "holy",
  w: 40,
  h: 90,
  life: 240,
  tick: 20,
  m: 0.45,
  el: "holy"
};
const _0xa7e114 = {
  t: 10,
  k: "field",
  f: _0x5558c3,
  dx: 60,
  ground: !0
};
const _0x6d6c10 = {
  dur: 26,
  pose: [[0, "castUp"], [10, "cast"]],
  ev: [_0x1393e6, _0xa7e114]
};
const _0x465cac = {
  name: "새벽의 기둥",
  desc: "앞쪽에 빛의 기둥을 세워 지속 피해 (4초, 0.33초마다 45%, 신성).",
  cd: 9,
  act: _0x6d6c10
};
const _0x58f22c = {
  t: 8,
  k: "sfx",
  s: "gem"
};
const _0xfeb764 = {
  t: 8,
  k: "heal",
  v: 0.2
};
const _0x34af5f = {
  atk: 0.2,
  dmgTaken: -0.15
};
const definition_seraph_bless = {
  t: 8,
  k: "buff",
  id: "seraph_bless",
  stats: _0x34af5f,
  dur: 6
};
const _0x552fd3 = {
  dur: 30,
  pose: [[0, "cast"], [8, "castUp"]],
  ev: [_0x58f22c, _0xfeb764, definition_seraph_bless]
};
const _0x1d1e12 = {
  name: "축복의 기도",
  desc: "체력 20% 회복, 6초간 공격력 +20%·받는 피해 -15%.",
  cd: 16,
  act: _0x552fd3
};
const _0x3453a3 = {
  t: 8,
  k: "nova",
  r: 58,
  m: 1.7,
  el: "holy",
  up: -2
};
const _0x4a4855 = {
  t: 8,
  k: "heal",
  v: 0.08
};
const _0x5464a2 = {
  dur: 22,
  pose: [[0, "castUp"], [8, "cast"]],
  inv: [0, 12],
  ev: [_0x3453a3, _0x4a4855]
};
const _0x5e7b33 = {
  name: "교대: 새벽빛",
  desc: "빛과 함께 내려와 주변을 정화한다 (170%) + 체력 8% 회복.",
  act: _0x5464a2
};
const _0x418fa8 = {
  k: "heal",
  v: 0.08
};
const _0x33d729 = {
  on: "roomClear",
  do: [_0x418fa8]
};
const _0x587903 = {
  skillDmg: 0.15
};
const _0x18725b = {
  stats: _0x587903
};
const _0x2d957e = {
  name: "끊이지 않는 기도",
  desc: "방을 정화할 때마다 체력 8% 회복. 스킬 피해 +15%.",
  effects: [_0x33d729, _0x18725b]
};
const _0x3721b5 = {
  target: "skill1",
  dmg: 0.35
};
const _0x146a6d = {
  desc: "새벽의 기둥 피해 +35%",
  mods: [_0x3721b5]
};
const _0x5e8fee = {
  maxHp: 30
};
const _0x2fefb7 = {
  stats: _0x5e8fee
};
const _0xfc7564 = {
  desc: "최대 체력 +30",
  effects: [_0x2fefb7]
};
const _0x5c8e23 = {
  target: "skill2",
  cd: 4
};
const _0x4536ce = {
  desc: "축복의 기도 쿨타임 -4초",
  mods: [_0x5c8e23]
};
const _0x23c690 = {
  cdr: 0.1
};
const _0x375eba = {
  stats: _0x23c690
};
const _0x45e477 = {
  desc: "스킬 쿨타임 -10%",
  effects: [_0x375eba]
};
const _0x310697 = {
  target: "all",
  dmg: 0.3
};
const _0x4451fd = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x310697]
};
const _0x355060 = {
  skin: "#e8d0c0",
  hair: "#1a1424",
  hairStyle: "hood",
  body: "#1a1424",
  trim: "#9a6bff",
  legs: "#100c18",
  boots: "#0a0810",
  cape: "#2a1e3a",
  eye: "#c0a0ff",
  weapon: "daggers",
  wcol: "#c0c8d8",
  wcol2: "#2a1e3a",
  build: "slim",
  glow: "#9a6bff",
  extra: "scarf"
};
const _0x47fc78 = {
  arc: "down",
  r: 22,
  col: "#c0a0ff"
};
const _0x3c115c = {
  dur: 11,
  t: 3,
  m: 0.65,
  box: [0, -16, 34, 22],
  w: "windHigh",
  s: "slashDown",
  fx: _0x47fc78,
  hs: 2,
  lunge: 2,
  el: "shadow"
};
const _0xf78e48 = {
  arc: "up",
  r: 22,
  col: "#9a6bff"
};
const _0x2e77b3 = {
  dur: 11,
  t: 3,
  m: 0.65,
  box: [0, -18, 34, 24],
  w: "windLow",
  s: "slashUp",
  fx: _0xf78e48,
  hs: 2,
  lunge: 2,
  el: "shadow"
};
const _0x360674 = {
  arc: "x",
  r: 24,
  col: "#c0a0ff"
};
const _0x86ced0 = {
  dur: 11,
  t: 3,
  m: 0.7,
  box: [0, -10, 38, 16],
  w: "thrustWind",
  s: "thrust",
  fx: _0x360674,
  hs: 2,
  lunge: 2.5,
  el: "shadow"
};
const _0x2fb841 = {
  spr: "dagger",
  spd: 8,
  life: 40,
  w: 10,
  h: 5,
  col: "#c0c8d8",
  el: "shadow",
  pierce: 1
};
const _0x27c3f8 = {
  dur: 20,
  t: 7,
  m: 0.6,
  n: 3,
  spread: 8,
  p: _0x2fb841,
  w: "windHigh",
  s: "throw",
  sfx: "throw"
};
const _0x15a96b = {
  arc: "x",
  r: 22,
  col: "#c0a0ff"
};
const _0x3c2ec2 = {
  dur: 13,
  t: 3,
  m: 0.7,
  box: [0, -6, 32, 24],
  w: "windHigh",
  s: "slashDown",
  fx: _0x15a96b,
  air: !0,
  grav: 0.3,
  hs: 2,
  el: "shadow"
};
const _0x33eee7 = {
  arc: "h",
  r: 40,
  col: "#9a6bff"
};
const _0x4dac5c = {
  dur: 18,
  t: 4,
  m: 1.3,
  box: [-12, -14, 52, 18],
  w: "dash",
  s: "thrust",
  fx: _0x33eee7,
  lunge: 8,
  hs: 4,
  el: "shadow",
  inv: [0, 8]
};
const _0x3061ac = {
  t: 8,
  k: "sfx",
  s: "dash"
};
const _0x9dba48 = {
  kind: "clone",
  life: 600,
  m: 0.7,
  max: 3
};
const _0x22fe66 = {
  t: 8,
  k: "summon",
  s: _0x9dba48,
  n: 2
};
const _0x2ffadd = {
  dur: 20,
  pose: [[0, "crouch"], [8, "castUp"]],
  inv: [0, 10],
  ev: [_0x3061ac, _0x22fe66]
};
const _0x4e2050 = {
  name: "그림자 분신",
  desc: "그림자 분신 2체를 불러 함께 싸운다 (10초, 최대 3체).",
  cd: 11,
  act: _0x2ffadd
};
const _0x492689 = {
  t: 6,
  k: "sfx",
  s: "throw"
};
const _0x4701f8 = {
  spr: "dagger",
  spd: 7,
  life: 45,
  w: 10,
  h: 5,
  col: "#c0a0ff",
  el: "shadow",
  pierce: 2
};
const _0x4e632f = {
  t: 6,
  k: "proj",
  n: 8,
  spread: 45,
  ang: 0,
  p: _0x4701f8,
  m: 1.1
};
const _0x4a4db9 = {
  dur: 26,
  pose: [[0, "windHigh"], [6, "throw"], [12, "spin"]],
  inv: [0, 26],
  ev: [_0x492689, _0x4e632f]
};
const _0x58dbc7 = {
  name: "팔방 수리검",
  desc: "수리검 8개를 사방으로 흩뿌린다 (각 110%, 관통). 직후 1초간 무적.",
  cd: 8,
  act: _0x4a4db9
};
const _0x35f254 = {
  t: 1,
  k: "tp",
  dx: 20,
  toEnemy: !0
};
const _0x3ac9c5 = {
  arc: "x",
  r: 26,
  col: "#c0a0ff"
};
const _0x1695ca = {
  t: 6,
  k: "hit",
  box: [-10, -18, 40, 30],
  m: 2.2,
  hs: 6,
  el: "shadow",
  fx: _0x3ac9c5
};
const _0x39340b = {
  dur: 22,
  pose: [[0, "dash"], [6, "slashDown"]],
  inv: [0, 14],
  ev: [_0x35f254, _0x1695ca]
};
const _0x315bf3 = {
  name: "교대: 그림자 걸음",
  desc: "가장 가까운 적의 등 뒤로 나타나 벤다 (220%).",
  act: _0x39340b
};
const _0x5467ba = {
  aspd: 0.15,
  critDmg: 0.25
};
const _0x583430 = {
  stats: _0x5467ba
};
const _0x10ae5d = {
  atk: 0.2
};
const definition_kaz_dash = {
  k: "buff",
  id: "kaz_dash",
  stats: _0x10ae5d,
  dur: 2
};
const _0x363522 = {
  on: "dash",
  do: [definition_kaz_dash]
};
const _0x670fde = {
  name: "그림자의 박자",
  desc: "공격 속도 +15%, 치명타 피해 +25%. 대시 후 2초간 공격력 +20%.",
  effects: [_0x583430, _0x363522]
};
const _0x49d7f1 = {
  target: "skill1",
  dmg: 0.4
};
const _0x170865 = {
  desc: "분신 피해 +40%",
  mods: [_0x49d7f1]
};
const _0x20c94a = {
  crit: 0.1
};
const _0x4b3db6 = {
  stats: _0x20c94a
};
const _0x35b462 = {
  desc: "치명타 확률 +10%",
  effects: [_0x4b3db6]
};
const _0x25b68e = {
  target: "skill2",
  count: 4
};
const _0x237d89 = {
  desc: "팔방 수리검 +4개",
  mods: [_0x25b68e]
};
const _0x339846 = {
  dashCharges: 1
};
const _0x5bf3a2 = {
  flags: _0x339846
};
const _0x38b50b = {
  desc: "대시 2회",
  effects: [_0x5bf3a2]
};
const _0xa5a006 = {
  target: "all",
  dmg: 0.3
};
const _0x1307be = {
  desc: "모든 기술 피해 +30%",
  mods: [_0xa5a006]
};
const _0x52847a = {
  skin: "#b07050",
  hair: "#2a1a10",
  hairStyle: "bald",
  body: "#5a2a1a",
  trim: "#ff6a2a",
  legs: "#3a1a10",
  boots: "#2a1008",
  cape: "#7a2a10",
  eye: "#ffb040",
  weapon: "fists",
  wcol: "#ff6a2a",
  wcol2: "#3a1a10",
  build: "big",
  glow: "#ff6a2a"
};
const _0x361ba8 = {
  arc: "thrust",
  r: 24,
  col: "#ffb060"
};
const _0x3d3e66 = {
  dur: 13,
  t: 4,
  m: 0.8,
  box: [0, -14, 32, 20],
  w: "windHigh",
  s: "thrust",
  fx: _0x361ba8,
  hs: 4,
  lunge: 2.5,
  el: "fire"
};
const _0x32dfd6 = {
  arc: "thrust",
  r: 24,
  col: "#ffb060"
};
const _0x404f3d = {
  dur: 13,
  t: 4,
  m: 0.8,
  box: [0, -14, 32, 20],
  w: "windLow",
  s: "thrust",
  fx: _0x32dfd6,
  hs: 4,
  lunge: 2.5,
  el: "fire"
};
const _0x241177 = {
  arc: "h",
  r: 28,
  col: "#ff8a3a"
};
const _0x312493 = {
  dur: 16,
  t: 5,
  m: 0.9,
  box: [0, -10, 34, 22],
  w: "windLow",
  s: "kick",
  fx: _0x241177,
  hs: 4,
  lunge: 3,
  el: "fire"
};
const _0x4ebf06 = {
  arc: "up",
  r: 34,
  col: "#ff6a2a"
};
const _0x2cd148 = {
  dur: 28,
  t: 10,
  m: 1.9,
  box: [-4, -30, 40, 44],
  w: "slamWind",
  s: "uppercut",
  fx: _0x4ebf06,
  up: -7,
  kb: 3,
  hs: 9,
  shake: 5,
  fin: !0,
  el: "fire",
  st: "burn",
  sfx: "swing_heavy"
};
const _0x4a5612 = {
  t: 4,
  k: "plunge",
  vy: 9,
  m: 1.7,
  r: 40,
  el: "fire",
  st: "burn"
};
const _0x168b93 = {
  dur: 70,
  pose: [[0, "slamWind"], [6, "slam"]],
  landEnd: !0,
  airOk: !0,
  ev: [_0x4a5612]
};
const _0x4bb515 = {
  arc: "thrust",
  r: 40,
  col: "#ff6a2a"
};
const _0x2531e5 = {
  dur: 22,
  t: 6,
  m: 1.5,
  box: [-6, -16, 48, 24],
  w: "dash",
  s: "thrust",
  fx: _0x4bb515,
  lunge: 8,
  hs: 6,
  el: "fire",
  st: "burn"
};
const _0x81c781 = {
  arc: "thrust",
  r: 26,
  col: "#ffb060"
};
const _0x5c7dd2 = {
  dur: 44,
  times: [4, 8, 12, 16, 20, 24, 28, 34],
  m: 0.5,
  box: [0, -16, 40, 26],
  pose: [[0, "thrust"], [4, "windHigh"], [6, "thrust"], [10, "windLow"], [12, "thrust"], [18, "thrust"], [24, "thrust"], [31, "slamWind"], [33, "uppercut"]],
  fx: _0x81c781,
  el: "fire",
  hs: 2,
  armor: !0,
  lastM: 2.4,
  lastUp: -7,
  fin: !0
};
const _0xcb5993 = {
  t: 12,
  k: "sfx",
  s: "explode"
};
const _0x1583a2 = {
  t: 12,
  k: "nova",
  r: 66,
  m: 2.2,
  el: "fire",
  st: "burn",
  up: -4
};
const _0x59b83d = {
  vis: "fire",
  w: 120,
  h: 16,
  life: 240,
  tick: 20,
  m: 0.35,
  el: "fire",
  st: "burn"
};
const _0x4fcf1e = {
  t: 12,
  k: "field",
  f: _0x59b83d,
  ground: !0
};
const _0x2e2bf0 = {
  t: 12,
  k: "shake",
  v: 6
};
const _0x578e85 = {
  dur: 30,
  pose: [[0, "slamWind"], [12, "slam"]],
  armor: !0,
  ev: [_0xcb5993, _0x1583a2, _0x4fcf1e, _0x2e2bf0]
};
const _0x3784a1 = {
  name: "화산 강타",
  desc: "땅을 내리쳐 주변을 터뜨리고 용암 장판을 남긴다 (220% + 4초 장판, 화상).",
  cd: 12,
  act: _0x578e85
};
const _0x2821c9 = {
  t: 8,
  k: "nova",
  r: 58,
  m: 2,
  el: "fire",
  st: "burn",
  up: -3
};
const _0x51c86c = {
  t: 8,
  k: "shake",
  v: 5
};
const _0x29b760 = {
  dur: 24,
  pose: [[0, "slamWind"], [8, "slam"]],
  inv: [0, 12],
  ev: [_0x2821c9, _0x51c86c]
};
const _0x1336dc = {
  name: "교대: 챔피언 입장",
  desc: "뛰어들며 내려찍는다 (200%, 화상).",
  act: _0x29b760
};
const _0x362a01 = {
  atk: 0.05
};
const upgrade_bron_heat = {
  k: "buff",
  id: "bron_heat",
  stats: _0x362a01,
  dur: 5,
  max: 5
};
const _0x2f21ca = {
  on: "kill",
  do: [upgrade_bron_heat]
};
const _0x553e45 = {
  vsBurn: 0.15
};
const _0x3ef349 = {
  stats: _0x553e45
};
const _0x3dcbff = {
  name: "투기장의 열기",
  desc: "처치할 때마다 5초간 공격력 +5% (최대 5중첩). 화상 대상에게 주는 피해 +15%.",
  effects: [_0x2f21ca, _0x3ef349]
};
const _0x17cf73 = {
  target: "skill1",
  dmg: 0.35
};
const _0x5ce383 = {
  desc: "분화 연타 피해 +35%",
  mods: [_0x17cf73]
};
const _0x150d1a = {
  maxHp: 40
};
const _0x24fbac = {
  stats: _0x150d1a
};
const _0x3f2ce6 = {
  desc: "최대 체력 +40",
  effects: [_0x24fbac]
};
const _0x5bd554 = {
  target: "skill2",
  size: 0.3
};
const _0x48e43d = {
  desc: "화산 강타 범위 +30%",
  mods: [_0x5bd554]
};
const _0x1a2b8c = {
  aspd: 0.1
};
const _0x4560b0 = {
  stats: _0x1a2b8c
};
const _0x831c1e = {
  desc: "공격 속도 +10%",
  effects: [_0x4560b0]
};
const _0x5393d3 = {
  target: "all",
  dmg: 0.3
};
const _0xb75bf2 = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x5393d3]
};
const _0x49f28a = {
  skin: "#f4e8e0",
  hair: "#7a5aa0",
  hairStyle: "witch",
  body: "#3a2a5a",
  trim: "#ffe8a0",
  legs: "#24183a",
  boots: "#1a1028",
  cape: "#4a3a7a",
  eye: "#ffe8a0",
  weapon: "clock",
  wcol: "#ffe8a0",
  wcol2: "#3a2a5a",
  build: "slim",
  glow: "#ffe8a0",
  extra: "compass"
};
const _0x3994a3 = {
  el: "holy",
  spd: 5.5
};
const _0x5a3361 = {
  el: "holy",
  spd: 5.5
};
const _0x58c2fd = {
  el: "holy",
  w: 14,
  h: 14,
  pierce: 99,
  st: "slow"
};
const _0x23e34e = {
  el: "holy",
  spd: 5.5
};
const _0x192d49 = {
  arc: "h",
  r: 36,
  col: "#ffe8a0"
};
const _0x4cf91f = {
  dur: 20,
  t: 6,
  m: 1.1,
  box: [-6, -16, 46, 26],
  w: "dash",
  s: "cast",
  fx: _0x192d49,
  lunge: 6,
  hs: 4
};
const _0x4408e5 = {
  t: 8,
  k: "sfx",
  s: "timestop"
};
const _0xda1e21 = {
  t: 8,
  k: "timestop",
  dur: 1.5
};
const _0x5a2cd4 = {
  dur: 22,
  pose: [[0, "castUp"], [8, "cast"]],
  ev: [_0x4408e5, _0xda1e21]
};
const _0x9163f7 = {
  name: "멈춘 1초",
  desc: "1.5초간 모든 적의 시간을 멈춘다. 멈춘 동안 주는 피해는 그대로.",
  cd: 16,
  act: _0x5a2cd4
};
const _0x187cd5 = {
  t: 8,
  k: "sfx",
  s: "gem"
};
const _0x5b9dae = {
  vis: "time",
  w: 140,
  h: 24,
  life: 300,
  tick: 30,
  m: 0.35,
  el: "holy",
  st: "slow",
  slow: !0
};
const _0xed2826 = {
  t: 8,
  k: "field",
  f: _0x5b9dae,
  ground: !0
};
const _0x47cf56 = {
  dur: 24,
  pose: [[0, "cast"], [8, "castUp"]],
  ev: [_0x187cd5, _0xed2826]
};
const _0x3c37d3 = {
  name: "시계 장판",
  desc: "시간이 느려지는 장판을 펼친다 (5초, 적 둔화, 0.5초마다 35%).",
  cd: 10,
  act: _0x47cf56
};
const _0x340380 = {
  t: 8,
  k: "nova",
  r: 60,
  m: 1.5,
  el: "holy",
  st: "slow"
};
const _0x26eaaa = {
  t: 8,
  k: "heal",
  v: 0.06
};
const _0x5838fa = {
  dur: 22,
  pose: [[0, "castUp"], [8, "cast"]],
  inv: [0, 12],
  ev: [_0x340380, _0x26eaaa]
};
const _0x2805d1 = {
  name: "교대: 되감기",
  desc: "등장하며 주변 적을 느리게 하고 체력 6% 회복 (150%).",
  act: _0x5838fa
};
const _0x44569 = {
  cdr: 0.15,
  swapCdr: 0.2
};
const _0x1352ec = {
  stats: _0x44569
};
const _0x5a3dd4 = {
  name: "늘어난 시간",
  desc: "스킬 쿨타임 -15%, 교대 쿨타임 -20%.",
  effects: [_0x1352ec]
};
const _0xa09eaf = {
  target: "skill1",
  cd: 4
};
const _0x37d241 = {
  desc: "멈춘 1초 쿨타임 -4초",
  mods: [_0xa09eaf]
};
const _0x219f18 = {
  mspd: 0.1
};
const _0x337b77 = {
  stats: _0x219f18
};
const _0x542c6d = {
  desc: "이동 속도 +10%",
  effects: [_0x337b77]
};
const _0x1a18fe = {
  target: "skill2",
  cd: 3
};
const _0x27fbbd = {
  desc: "시계 장판 쿨타임 -3초",
  mods: [_0x1a18fe]
};
const _0x1aba05 = {
  target: "swap",
  dmg: 0.5
};
const _0x878be1 = {
  desc: "교대 피해 +50%",
  mods: [_0x1aba05]
};
const _0x55880f = {
  target: "all",
  dmg: 0.3
};
const _0x31152b = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x55880f]
};
const _0x2b893d = {
  skin: "#f8dcd0",
  hair: "#c01030",
  hairStyle: "pony",
  body: "#8a1030",
  trim: "#ffd060",
  legs: "#4a0818",
  boots: "#2a040c",
  cape: "#ff5070",
  eye: "#ff3050",
  weapon: "daggers",
  wcol: "#ffd0d8",
  wcol2: "#8a6a20",
  build: "slim",
  extra: "scarf"
};
const _0x2b09c1 = {
  arc: "down",
  r: 16,
  col: "#ff8090"
};
const _0x4e6f72 = {
  dur: 11,
  t: 3,
  m: 0.4,
  box: [-6, -14, 30, 22],
  w: "spin",
  s: "slashDown",
  fx: _0x2b09c1,
  hs: 2,
  lunge: 2
};
const _0x311c57 = {
  arc: "up",
  r: 16,
  col: "#ff8090"
};
const _0x4859df = {
  dur: 11,
  t: 3,
  m: 0.4,
  box: [-6, -14, 30, 22],
  w: "windLow",
  s: "slashUp",
  fx: _0x311c57,
  hs: 2,
  lunge: 2
};
const _0x6e85a0 = {
  arc: "spin",
  r: 18,
  col: "#ff8090"
};
const _0x4040b9 = {
  dur: 12,
  t: 4,
  m: 0.45,
  box: [-14, -14, 40, 22],
  w: "spin",
  s: "spin",
  fx: _0x6e85a0,
  hs: 2,
  lunge: 1
};
const _0x3dca53 = {
  arc: "thrust",
  r: 24,
  col: "#ff8090"
};
const _0x3cfcbd = {
  dur: 12,
  t: 4,
  m: 0.45,
  box: [0, -10, 30, 16],
  w: "thrustWind",
  s: "thrust",
  fx: _0x3dca53,
  hs: 2,
  lunge: 3
};
const _0xd750a8 = {
  arc: "spin",
  r: 22,
  col: "#ff5070"
};
const _0x5ba435 = {
  dur: 26,
  times: [6, 11, 16],
  m: 0.45,
  lastM: 0.9,
  lastKb: 4,
  box: [-16, -18, 44, 30],
  pose: [[0, "spin"], [6, "slashDown"], [11, "spin"], [16, "slashUp"]],
  fx: _0xd750a8,
  st: "bleed",
  hs: 3,
  fin: !0
};
const _0x28fb7b = {
  arc: "spin",
  r: 18,
  col: "#ff8090"
};
const _0x2587eb = {
  dur: 15,
  t: 4,
  m: 0.5,
  box: [-16, -16, 40, 30],
  w: "spin",
  s: "spin",
  fx: _0x28fb7b,
  air: !0,
  grav: 0.25,
  hs: 2
};
const _0x4bda39 = {
  arc: "x",
  r: 20,
  col: "#ff5070"
};
const _0x4b79dd = {
  dur: 20,
  t: 4,
  m: 0.9,
  box: [-28, -12, 48, 20],
  w: "dash",
  s: "slashDown",
  fx: _0x4bda39,
  lunge: 7,
  hs: 3,
  st: "bleed"
};
const _0x5458d0 = {
  arc: "spin",
  r: 28,
  col: "#ff5070"
};
const _0x267dd0 = {
  dur: 44,
  times: [4, 9, 14, 19, 24, 29, 34, 39],
  m: 0.38,
  lastM: 0.8,
  lastKb: 4,
  box: [-28, -20, 56, 32],
  pose: [[0, "spin"], [9, "slashUp"], [14, "spin"], [24, "slashDown"], [29, "spin"]],
  fx: _0x5458d0,
  st: "bleed",
  move: [[0, 1.6]],
  armor: !0
};
const _0x2fb66d = {
  t: 3,
  k: "sfx",
  s: "jump"
};
const _0x498c8f = {
  arc: "slam",
  r: 34,
  col: "#ff3050"
};
const _0x640d3e = {
  t: 16,
  k: "hit",
  box: [-10, -24, 54, 44],
  m: 2.3,
  kb: 3,
  up: -3,
  hs: 7,
  st: "bleed",
  shake: 4,
  fx: _0x498c8f
};
const _0xc93ef = {
  t: 16,
  k: "sfx",
  s: "swing_heavy"
};
const _0x38cfce = {
  dur: 34,
  pose: [[0, "crouch"], [4, "windHigh"], [14, "slashDown"]],
  move: [[3, 3, -6], [14, 4, 6], [24, 0]],
  airOk: !0,
  inv: [0, 16],
  ev: [_0x2fb66d, _0x640d3e, _0xc93ef]
};
const _0x44c020 = {
  name: "붉은 달",
  desc: "높이 뛰어올라 초승달 궤적으로 내리벤다.",
  cd: 9,
  act: _0x38cfce
};
const _0x102048 = {
  arc: "x",
  r: 18,
  col: "#ff5070"
};
const _0xdf3a26 = {
  t: 4,
  k: "hit",
  box: [-50, -14, 66, 24],
  m: 0.8,
  hs: 2,
  st: "bleed",
  fx: _0x102048
};
const _0x788702 = {
  arc: "x",
  r: 24,
  col: "#ff5070"
};
const _0x4666d8 = {
  t: 10,
  k: "hit",
  box: [-60, -14, 76, 24],
  m: 1.2,
  kb: 3,
  hs: 6,
  st: "bleed",
  fx: _0x788702
};
const _0x23f567 = {
  dur: 26,
  pose: [[0, "dash"], [6, "spin"], [12, "slashDown"]],
  move: [[0, 8], [12, 0]],
  inv: [0, 14],
  ev: [_0xdf3a26, _0x4666d8]
};
const _0x143a93 = {
  name: "교대: 무희의 등장",
  desc: "빠르게 미끄러지며 지나간 적들을 연속으로 벤다.",
  act: _0x23f567
};
const _0x3cc79a = {
  aspd: 0.03
};
const upgrade_seira_p = {
  k: "buff",
  id: "seira_p",
  stats: _0x3cc79a,
  dur: 3,
  max: 10
};
const _0x225014 = {
  on: "hit",
  do: [upgrade_seira_p]
};
const _0x51333c = {
  name: "검무",
  desc: "적중할 때마다 3초간 공격 속도 +3% (최대 10중첩)",
  effects: [_0x225014]
};
const _0x2bd983 = {
  target: "skill1",
  dmg: 0.3
};
const _0x258bce = {
  desc: "혈화선무 피해 +30%",
  mods: [_0x2bd983]
};
const _0x381e11 = {
  vsBleed: 0.15
};
const _0x22ab00 = {
  stats: _0x381e11
};
const _0x5de31f = {
  desc: "출혈 대상에게 주는 피해 +15%",
  effects: [_0x22ab00]
};
const _0xcd84e4 = {
  target: "skill2",
  cd: 2
};
const _0x301641 = {
  desc: "붉은 달 쿨타임 -2초",
  mods: [_0xcd84e4]
};
const _0x5912ff = {
  crit: 0.1
};
const _0x27db16 = {
  stats: _0x5912ff
};
const _0x4e4e0d = {
  desc: "치명타 확률 +10%",
  effects: [_0x27db16]
};
const _0x105032 = {
  target: "all",
  dmg: 0.2
};
const _0xbb78c2 = {
  desc: "모든 기술 피해 +20%",
  mods: [_0x105032]
};
const _0x3a49af = {
  skin: "#d8a880",
  hair: "#6a5a4a",
  hairStyle: "helm",
  body: "#5a5a62",
  trim: "#c08030",
  legs: "#3a3a42",
  boots: "#2a2a30",
  eye: "#ffd060",
  weapon: "cannon",
  wcol: "#5a5258",
  wcol2: "#c08030",
  build: "big"
};
const _0x225e27 = {
  r: 22,
  m: 0.8,
  el: "fire"
};
const _0x398ca2 = {
  spr: "fireball",
  spd: 6,
  life: 60,
  w: 9,
  h: 9,
  col: "#ffb060",
  kb: 2,
  boom: _0x225e27
};
const _0x50fa8b = {
  dur: 24,
  t: 8,
  m: 0.8,
  p: _0x398ca2,
  w: "shootWind",
  s: "shoot",
  sfx: "explode",
  move: [[8, -1.8], [14, 0]]
};
const _0x5d991 = {
  r: 22,
  m: 0.8,
  el: "fire"
};
const _0x3c8c0f = {
  spr: "fireball",
  spd: 6,
  life: 60,
  w: 9,
  h: 9,
  col: "#ffb060",
  kb: 2,
  boom: _0x5d991
};
const _0x5acddf = {
  dur: 24,
  t: 8,
  m: 0.8,
  p: _0x3c8c0f,
  w: "shootWind",
  s: "shoot",
  sfx: "explode",
  move: [[8, -1.8], [14, 0]]
};
const _0x13abcd = {
  r: 36,
  m: 1,
  el: "fire",
  st: "burn"
};
const _0x1e3633 = {
  spr: "fireball",
  spd: 7,
  life: 60,
  w: 14,
  h: 14,
  col: "#ff7a2a",
  kb: 4,
  boom: _0x13abcd
};
const _0xcf5db7 = {
  t: 12,
  k: "shake",
  v: 3
};
const _0x318e30 = {
  dur: 34,
  t: 12,
  m: 1.4,
  p: _0x1e3633,
  w: "shootWind",
  s: "shoot",
  sfx: "explode",
  move: [[12, -3], [20, 0]],
  extra: [_0xcf5db7]
};
const _0xd633b5 = {
  r: 24,
  m: 0.8,
  el: "fire"
};
const _0x2877c7 = {
  spr: "fireball",
  spd: 6,
  life: 50,
  w: 9,
  h: 9,
  col: "#ffb060",
  boom: _0xd633b5
};
const _0x23d433 = {
  dur: 20,
  t: 6,
  m: 0.9,
  ang: 60,
  air: !0,
  grav: 0.3,
  p: _0x2877c7,
  s: "shoot",
  sfx: "explode",
  move: [[6, -1, -3], [12, 0]]
};
const _0x4e8885 = {
  arc: "thrust",
  r: 18
};
const _0x460c8f = {
  dur: 24,
  t: 6,
  m: 1.1,
  box: [0, -14, 28, 26],
  w: "dash",
  s: "guard",
  fx: _0x4e8885,
  lunge: 6,
  kb: 6,
  hs: 5,
  armor: !0
};
const _0x136bce = {
  t: 6,
  k: "sfx",
  s: "explode"
};
const _0x29b46a = {
  t: 8,
  k: "meteor",
  n: 5,
  m: 1.1,
  spread: 110,
  el: "fire",
  st: "burn"
};
const _0x2f7d30 = {
  t: 6,
  k: "shake",
  v: 2
};
const _0xdd2161 = {
  dur: 30,
  pose: [[0, "castUp"]],
  ev: [_0x136bce, _0x29b46a, _0x2f7d30]
};
const _0xb21e8a = {
  name: "박격 포격",
  desc: "하늘로 포탄 다섯 발을 쏘아 올려 전방에 폭격을 퍼붓는다.",
  cd: 8,
  act: _0xdd2161
};
const _0x56cee6 = {
  spr: "orb",
  spd: 7,
  life: 22,
  w: 7,
  h: 7,
  col: "#ffd080",
  kb: 4,
  pierce: 1
};
const _0x490478 = {
  t: 8,
  k: "shake",
  v: 4
};
const _0x23a8a8 = {
  dur: 30,
  t: 8,
  m: 0.6,
  n: 7,
  spread: 9,
  p: _0x56cee6,
  w: "shootWind",
  s: "shoot",
  sfx: "explode",
  move: [[8, -5, -2], [18, 0]],
  extra: [_0x490478]
};
const _0x29c3d3 = {
  t: 8,
  k: "plunge",
  vy: 9,
  m: 2.2,
  r: 52,
  el: "fire",
  st: "burn"
};
const _0x4c20e5 = {
  dur: 60,
  pose: [[0, "slamWind"], [8, "slam"]],
  move: [[0, 2, -4]],
  landEnd: !0,
  airOk: !0,
  armor: !0,
  inv: [0, 20],
  ev: [_0x29c3d3]
};
const _0x1f6d74 = {
  name: "교대: 포격 착지",
  desc: "포탄처럼 떨어져 착지 지점을 폭파한다.",
  act: _0x4c20e5
};
const _0x42d13f = {
  dmgTaken: -0.1,
  finDmg: 0.2
};
const _0x530dbe = {
  stats: _0x42d13f
};
const _0x5c7789 = {
  name: "중장갑",
  desc: "받는 피해 -10%, 콤보 마지막 타격 피해 +20%",
  effects: [_0x530dbe]
};
const _0x1cc984 = {
  target: "skill1",
  count: 2
};
const _0x5661d6 = {
  desc: "박격 포격 포탄 +2",
  mods: [_0x1cc984]
};
const _0xe04811 = {
  atk: 0.08
};
const _0x2b5d63 = {
  stats: _0xe04811
};
const _0x15e2aa = {
  desc: "공격력 +8%",
  effects: [_0x2b5d63]
};
const _0x589eda = {
  target: "skill2",
  cd: 2
};
const _0x8bbb22 = {
  desc: "산탄 포격 쿨타임 -2초",
  mods: [_0x589eda]
};
const _0x466b84 = {
  maxHp: 30
};
const _0x2a8157 = {
  stats: _0x466b84
};
const _0x4134fc = {
  desc: "최대 체력 +30",
  effects: [_0x2a8157]
};
const _0x127592 = {
  target: "all",
  dmg: 0.2
};
const _0x390412 = {
  desc: "모든 기술 피해 +20%",
  mods: [_0x127592]
};
const _0x5b7425 = {
  skin: "#f8f0f0",
  hair: "#40c040",
  hairStyle: "spiky",
  body: "#8a2aa0",
  trim: "#ffe040",
  legs: "#2a8a40",
  boots: "#4a1a5a",
  cape: "#ffe040",
  eye: "#ff3030",
  weapon: "flask",
  wcol: "#c0ff60",
  wcol2: "#ffe040",
  build: "slim",
  extra: "scarf"
};
const _0x2ed144 = {
  r: 16,
  m: 0.8,
  el: "poison",
  st: "poison"
};
const _0x4cd20d = {
  spr: "orb",
  spd: 4,
  vy: -2.4,
  grav: 0.16,
  life: 70,
  w: 7,
  h: 7,
  col: "#c0ff60",
  boom: _0x2ed144
};
const _0x4501d1 = {
  dur: 16,
  t: 5,
  m: 0.6,
  p: _0x4cd20d,
  w: "throw",
  s: "shoot"
};
const _0x18e61b = {
  r: 16,
  m: 0.8,
  el: "poison",
  st: "poison"
};
const _0x53f25f = {
  spr: "orb",
  spd: 4,
  vy: -2.4,
  grav: 0.16,
  life: 70,
  w: 7,
  h: 7,
  col: "#ffe040",
  boom: _0x18e61b
};
const _0x48ce1b = {
  dur: 16,
  t: 5,
  m: 0.6,
  p: _0x53f25f,
  w: "throw",
  s: "shoot"
};
const _0x5258e6 = {
  r: 18,
  m: 0.8,
  el: "poison",
  st: "poison"
};
const _0x47200a = {
  spr: "orb",
  spd: 3.8,
  vy: -3,
  grav: 0.16,
  life: 80,
  w: 7,
  h: 7,
  col: "#ff60c0",
  boom: _0x5258e6
};
const _0x20dd25 = {
  dur: 26,
  t: 9,
  m: 0.5,
  n: 4,
  spread: 12,
  p: _0x47200a,
  w: "throw",
  s: "castUp"
};
const _0x16cb1c = {
  r: 16,
  m: 0.8,
  el: "poison",
  st: "poison"
};
const _0x279b50 = {
  spr: "orb",
  spd: 4,
  grav: 0.18,
  life: 60,
  w: 7,
  h: 7,
  col: "#c0ff60",
  boom: _0x16cb1c
};
const _0x42d7f2 = {
  dur: 16,
  t: 4,
  m: 0.6,
  ang: 55,
  air: !0,
  grav: 0.4,
  p: _0x279b50,
  w: "throw",
  s: "shoot"
};
const _0x2f6c63 = {
  t: 6,
  k: "nova",
  r: 30,
  m: 0.8,
  el: "poison",
  st: "poison"
};
const _0x293129 = {
  t: 6,
  k: "sfx",
  s: "poison"
};
const _0x2ae266 = {
  dur: 20,
  pose: [[0, "spin"], [8, "throw"]],
  move: [[0, 4], [10, 0]],
  inv: [0, 8],
  ev: [_0x2f6c63, _0x293129]
};
const _0x1e6427 = {
  t: 8,
  k: "sfx",
  s: "poison"
};
const _0x6638e0 = {
  vis: "poison",
  w: 90,
  h: 40,
  life: 220,
  tick: 15,
  m: 0.3,
  el: "poison",
  st: "poison"
};
const _0x439bd6 = {
  t: 8,
  k: "field",
  f: _0x6638e0,
  dx: 46,
  ground: !0
};
const _0xa0b7ae = {
  dur: 24,
  pose: [[0, "castUp"], [8, "throw"]],
  ev: [_0x1e6427, _0x439bd6]
};
const _0x4edafb = {
  name: "웃음 가스",
  desc: "전방에 오래 머무는 웃음 가스를 터뜨려 독을 쌓는다.",
  cd: 8,
  act: _0xa0b7ae
};
const _0x5f4969 = {
  r: 48,
  m: 2.6,
  el: "poison",
  st: "slow"
};
const _0x4899ea = {
  spr: "flask",
  spd: 3.6,
  vy: -3.4,
  grav: 0.18,
  life: 90,
  w: 12,
  h: 12,
  col: "#ff60c0",
  boom: _0x5f4969
};
const _0xe8bd83 = {
  t: 2,
  k: "sfx",
  s: "skill"
};
const _0x49cc27 = {
  dur: 28,
  t: 10,
  m: 1,
  p: _0x4899ea,
  w: "castUp",
  s: "throw",
  extra: [_0xe8bd83]
};
const _0x176458 = {
  t: 5,
  k: "sfx",
  s: "explode"
};
const _0x4852fd = {
  t: 5,
  k: "nova",
  r: 56,
  m: 1.4,
  el: "poison",
  st: "poison",
  up: -2
};
const _0x5704c9 = {
  t: 7,
  k: "nova",
  r: 56,
  m: 0,
  st: "poison"
};
const _0x4f1056 = {
  dur: 22,
  pose: [[0, "castUp"]],
  inv: [0, 10],
  ev: [_0x176458, _0x4852fd, _0x5704c9]
};
const _0x2c802b = {
  name: "교대: 짜잔!",
  desc: "색종이 폭발과 함께 등장해 주변 적에게 독을 퍼뜨린다.",
  act: _0x4f1056
};
const _0x1a0061 = {
  crit: 0.08
};
const _0x3a42fb = {
  stats: _0x1a0061
};
const _0x705233 = {
  k: "status",
  s: "poison"
};
const _0x243781 = {
  on: "hit",
  chance: 0.1,
  do: [_0x705233]
};
const _0x4dac5a = {
  name: "광기",
  desc: "치명타 확률 +8%. 공격 시 10% 확률로 독",
  effects: [_0x3a42fb, _0x243781]
};
const _0x37a693 = {
  target: "skill1",
  size: 0.4
};
const _0x561973 = {
  desc: "웃음 가스 크기 +40%",
  mods: [_0x37a693]
};
const _0x2ecd13 = {
  vsPoison: 0.2
};
const _0x464751 = {
  stats: _0x2ecd13
};
const _0xeb5c4c = {
  desc: "독 대상에게 주는 피해 +20%",
  effects: [_0x464751]
};
const _0x1b3694 = {
  target: "skill2",
  cd: 3
};
const _0x3e66e3 = {
  desc: "깜짝 상자 쿨타임 -3초",
  mods: [_0x1b3694]
};
const _0x1ef905 = {
  poisonMax: 3
};
const _0x512692 = {
  flags: _0x1ef905
};
const _0x1e9805 = {
  desc: "독 최대 중첩 +3",
  effects: [_0x512692]
};
const _0x160c80 = {
  target: "all",
  dmg: 0.2
};
const _0x2b4fef = {
  desc: "모든 기술 피해 +20%",
  mods: [_0x160c80]
};
const _0x2451ba = {
  skin: "#f0dcd0",
  hair: "#e8f4ff",
  hairStyle: "long",
  body: "#4a6a8a",
  trim: "#e8f4ff",
  legs: "#3a4a5a",
  boots: "#2a3240",
  cape: "#8aa0b8",
  eye: "#80e0ff",
  weapon: "claws",
  wcol: "#d0f4ff",
  wcol2: "#6a7a8a",
  build: "normal",
  extra: "scarf"
};
const _0x3f7a0b = {
  arc: "down",
  r: 16,
  col: "#d0f4ff"
};
const _0xb52299 = {
  dur: 13,
  t: 4,
  m: 0.5,
  box: [0, -14, 26, 22],
  w: "guard",
  s: "slashDown",
  fx: _0x3f7a0b,
  hs: 2,
  lunge: 2
};
const _0x466e8e = {
  arc: "up",
  r: 16,
  col: "#d0f4ff"
};
const _0x279101 = {
  dur: 13,
  t: 4,
  m: 0.5,
  box: [0, -14, 26, 22],
  w: "windLow",
  s: "slashUp",
  fx: _0x466e8e,
  hs: 2,
  lunge: 2
};
const _0x20ece6 = {
  arc: "x",
  r: 16,
  col: "#d0f4ff"
};
const _0x761dcf = {
  dur: 14,
  t: 4,
  m: 0.55,
  box: [0, -10, 28, 18],
  w: "thrustWind",
  s: "thrust",
  fx: _0x20ece6,
  hs: 2,
  lunge: 3
};
const _0x3b8c8b = {
  arc: "x",
  r: 26,
  col: "#a8e4ff"
};
const _0x2b8306 = {
  dur: 26,
  t: 9,
  m: 1.3,
  box: [-6, -20, 40, 30],
  w: "windHigh",
  s: "slashDown",
  fx: _0x3b8c8b,
  kb: 4,
  up: -2,
  hs: 6,
  fin: !0,
  el: "frost",
  st: "chill",
  lunge: 4
};
const _0x2a260a = {
  arc: "down",
  r: 18,
  col: "#d0f4ff"
};
const _0x27f6ce = {
  dur: 16,
  t: 4,
  m: 0.6,
  box: [-4, -6, 30, 26],
  w: "jump",
  s: "slashDown",
  fx: _0x2a260a,
  air: !0,
  grav: 0.3,
  hs: 2
};
const _0x29fc02 = {
  arc: "x",
  r: 20,
  col: "#a8e4ff"
};
const _0x395f19 = {
  dur: 20,
  t: 5,
  m: 1,
  box: [0, -12, 34, 20],
  w: "dash",
  s: "thrust",
  fx: _0x29fc02,
  lunge: 7,
  hs: 3,
  st: "chill"
};
const _0x4d94e3 = {
  t: 8,
  k: "sfx",
  s: "boss_roar"
};
const _0xcc17a0 = {
  aspd: 0.35,
  mspd: 0.25,
  atk: 0.2
};
const definition_freya_wolf = {
  t: 8,
  k: "buff",
  id: "freya_wolf",
  stats: _0xcc17a0,
  dur: 6
};
const _0x16ada6 = {
  t: 8,
  k: "nova",
  r: 50,
  m: 0.8,
  el: "frost",
  st: "chill"
};
const _0x419e84 = {
  dur: 26,
  pose: [[0, "crouch"], [8, "castUp"]],
  ev: [_0x4d94e3, definition_freya_wolf, _0x16ada6]
};
const _0x3f0c27 = {
  name: "늑대 변신",
  desc: "서리늑대의 혼을 깨워 6초간 공격 속도·이동 속도·공격력이 크게 오르고, 주변을 얼린다.",
  cd: 14,
  act: _0x419e84
};
const _0x2db95d = {
  arc: "x",
  r: 16,
  col: "#a8e4ff"
};
const _0x194283 = {
  dur: 30,
  times: [5, 9, 13, 17, 23],
  m: 0.4,
  lastM: 1,
  lastKb: 4,
  box: [0, -14, 34, 24],
  pose: [[0, "dash"], [5, "thrust"], [9, "slashDown"], [13, "thrust"], [17, "slashUp"], [23, "thrust"]],
  fx: _0x2db95d,
  st: "chill",
  move: [[0, 4], [20, 0]]
};
const _0xd0bcf1 = {
  t: 5,
  k: "sfx",
  s: "boss_roar"
};
const _0x2c19bb = {
  t: 5,
  k: "nova",
  r: 58,
  m: 1.3,
  el: "frost",
  st: "chill"
};
const _0x3c804b = {
  t: 7,
  k: "nova",
  r: 58,
  m: 0,
  st: "chill"
};
const _0x12a975 = {
  dur: 22,
  pose: [[0, "castUp"]],
  inv: [0, 10],
  ev: [_0xd0bcf1, _0x2c19bb, _0x3c804b]
};
const _0x45acba = {
  name: "교대: 포효",
  desc: "등장과 함께 포효해 주변 적을 얼리고 냉기를 두 번 쌓는다.",
  act: _0x12a975
};
const _0x545397 = {
  lifesteal: 0.04,
  aspd: 0.15
};
const _0xbdd262 = {
  cond: "lowHp",
  stats: _0x545397
};
const _0xd02255 = {
  name: "야성",
  desc: "체력 50% 이하일 때 흡혈 4%, 공격 속도 +15%",
  effects: [_0xbdd262]
};
const _0xc5602a = {
  target: "skill1",
  cd: 3
};
const _0x4f7772 = {
  desc: "늑대 변신 쿨타임 -3초",
  mods: [_0xc5602a]
};
const _0x314b20 = {
  vsFrozen: 0.25
};
const _0x2e97ac = {
  stats: _0x314b20
};
const _0x161514 = {
  desc: "빙결 대상에게 주는 피해 +25%",
  effects: [_0x2e97ac]
};
const _0x1eb30d = {
  target: "skill2",
  dmg: 0.3
};
const _0x157362 = {
  desc: "서리 송곳니 피해 +30%",
  mods: [_0x1eb30d]
};
const _0x1f2877 = {
  maxHp: 30
};
const _0x15ab44 = {
  stats: _0x1f2877
};
const _0x52d032 = {
  desc: "최대 체력 +30",
  effects: [_0x15ab44]
};
const _0x6333d1 = {
  target: "all",
  dmg: 0.2
};
const _0x33a390 = {
  desc: "모든 기술 피해 +20%",
  mods: [_0x6333d1]
};
const _0x2624dc = {
  skin: "#f8e0c8",
  hair: "#202028",
  hairStyle: "bun",
  body: "#e8e0d0",
  trim: "#c03030",
  legs: "#c03030",
  boots: "#2a2020",
  eye: "#202020",
  weapon: "talisman",
  wcol: "#fff0c0",
  wcol2: "#c03030",
  build: "slim"
};
const _0xdc1957 = {
  spr: "shard",
  spd: 6,
  life: 50,
  w: 9,
  h: 6,
  col: "#fff0c0",
  el: "holy",
  kb: 1
};
const _0x477deb = {
  dur: 16,
  t: 5,
  m: 0.6,
  p: _0xdc1957,
  w: "throw",
  s: "shoot"
};
const _0x465989 = {
  spr: "shard",
  spd: 6,
  life: 50,
  w: 9,
  h: 6,
  col: "#fff0c0",
  el: "holy",
  kb: 1
};
const _0x37e221 = {
  dur: 16,
  t: 5,
  m: 0.6,
  p: _0x465989,
  w: "throw",
  s: "shoot"
};
const _0x4bc9ea = {
  spr: "shard",
  spd: 6,
  life: 50,
  w: 9,
  h: 6,
  col: "#ffe080",
  el: "holy",
  kb: 2,
  pierce: 1
};
const _0x33699b = {
  dur: 24,
  t: 8,
  m: 0.55,
  n: 3,
  spread: 10,
  p: _0x4bc9ea,
  w: "castUp",
  s: "throw"
};
const _0x12ca25 = {
  spr: "shard",
  spd: 6,
  life: 50,
  w: 9,
  h: 6,
  col: "#fff0c0",
  el: "holy"
};
const _0x4f15b9 = {
  dur: 16,
  t: 4,
  m: 0.6,
  ang: 45,
  air: !0,
  grav: 0.35,
  p: _0x12ca25,
  s: "throw"
};
const _0x447d72 = {
  t: 6,
  k: "nova",
  r: 28,
  m: 0.7,
  el: "holy"
};
const _0x286c93 = {
  t: 6,
  k: "sfx",
  s: "shield"
};
const _0x336842 = {
  dur: 18,
  pose: [[0, "dash"], [6, "guard"]],
  move: [[0, 3], [10, 0]],
  ev: [_0x447d72, _0x286c93]
};
const _0x2ed288 = {
  t: 8,
  k: "sfx",
  s: "shield"
};
const _0x3e4cb7 = {
  t: 8,
  k: "shield",
  v: 0.12
};
const _0x3a3199 = {
  vis: "holy",
  w: 100,
  h: 50,
  life: 240,
  tick: 20,
  m: 0.3,
  el: "holy",
  slow: !0
};
const _0x5edb07 = {
  t: 8,
  k: "field",
  f: _0x3a3199,
  dx: 0,
  ground: !0
};
const _0x19a127 = {
  dur: 24,
  pose: [[0, "castUp"], [8, "guard"]],
  ev: [_0x2ed288, _0x3e4cb7, _0x5edb07]
};
const _0x2b8aa2 = {
  name: "결계",
  desc: "정화의 결계를 펼친다. 결계 안의 적은 둔화되고 피해를 입으며, 자신은 보호막을 얻는다.",
  cd: 9,
  act: _0x19a127
};
const _0x444910 = {
  t: 8,
  k: "sfx",
  s: "cast"
};
const _0xe9bf93 = {
  spr: "soul",
  spd: 4,
  life: 100,
  w: 8,
  h: 8,
  col: "#fff0a0",
  home: 0.3,
  el: "holy"
};
const _0x28e00a = {
  t: 8,
  k: "proj",
  p: _0xe9bf93,
  m: 0.95,
  n: 3,
  spread: 30,
  ang: -45
};
const _0x5cf344 = {
  dur: 24,
  pose: [[0, "castUp"], [8, "throw"]],
  ev: [_0x444910, _0x28e00a]
};
const _0x39fb33 = {
  name: "퇴마 부적",
  desc: "스스로 적을 쫓는 부적 세 장을 날린다.",
  cd: 7,
  act: _0x5cf344
};
const _0x102031 = {
  t: 5,
  k: "sfx",
  s: "heal"
};
const _0x334ad2 = {
  t: 5,
  k: "nova",
  r: 52,
  m: 1.1,
  el: "holy",
  up: -2
};
const _0x43ecfd = {
  t: 5,
  k: "heal",
  v: 0.05
};
const _0x57391e = {
  dur: 22,
  pose: [[0, "castUp"]],
  inv: [0, 10],
  ev: [_0x102031, _0x334ad2, _0x43ecfd]
};
const _0x3ef65a = {
  name: "교대: 정화",
  desc: "정화의 빛으로 주변 적을 밀어내고 체력을 조금 회복한다.",
  act: _0x57391e
};
const _0x8e2daa = {
  k: "shield",
  v: 0.1
};
const _0x553394 = {
  on: "roomStart",
  do: [_0x8e2daa]
};
const _0x390afb = {
  name: "수행",
  desc: "방 입장 시 최대 체력 10% 보호막",
  effects: [_0x553394]
};
const _0x367a1f = {
  target: "skill1",
  size: 0.3
};
const _0x736c6f = {
  desc: "결계 크기 +30%",
  mods: [_0x367a1f]
};
const _0x2f015f = {
  target: "skill2",
  count: 2
};
const _0x4a0a08 = {
  desc: "퇴마 부적 +2장",
  mods: [_0x2f015f]
};
const _0x5e2a7c = {
  dmgTaken: -0.08
};
const _0x40c072 = {
  stats: _0x5e2a7c
};
const _0x3b866a = {
  desc: "받는 피해 -8%",
  effects: [_0x40c072]
};
const _0x3fcb28 = {
  target: "skill1",
  cd: 2
};
const _0x44c4ee = {
  desc: "결계 쿨타임 -2초",
  mods: [_0x3fcb28]
};
const _0x5cc089 = {
  target: "all",
  dmg: 0.2
};
const _0x1e8c0a = {
  desc: "모든 기술 피해 +20%",
  mods: [_0x5cc089]
};
const _0xc887f9 = {
  skin: "#d8b090",
  hair: "#5a4030",
  hairStyle: "hood",
  body: "#6a5a40",
  trim: "#a08050",
  legs: "#4a4030",
  boots: "#2a2018",
  cape: "#4a3a28",
  eye: "#ffd060",
  weapon: "shovel",
  wcol: "#8a8a7a",
  wcol2: "#5a3a20",
  build: "normal"
};
const _0x128e95 = {
  arc: "down",
  r: 22,
  col: "#d0b080"
};
const _0x196e1d = {
  dur: 20,
  t: 7,
  m: 0.85,
  box: [-4, -18, 34, 28],
  w: "windHigh",
  s: "slashDown",
  fx: _0x128e95,
  hs: 4,
  lunge: 1.5,
  sfx: "swing_heavy"
};
const _0x48bc47 = {
  arc: "up",
  r: 22,
  col: "#d0b080"
};
const _0x35ae71 = {
  dur: 20,
  t: 7,
  m: 0.85,
  box: [-4, -18, 34, 28],
  w: "windLow",
  s: "slashUp",
  fx: _0x48bc47,
  hs: 4,
  lunge: 1.5
};
const _0x23f843 = {
  arc: "slam",
  r: 28,
  col: "#d0b080"
};
const _0x2e90d3 = {
  t: 12,
  k: "sfx",
  s: "crumble"
};
const _0x42b8b6 = {
  dur: 30,
  t: 12,
  m: 1.6,
  box: [-8, -24, 44, 36],
  w: "slamWind",
  s: "slam",
  fx: _0x23f843,
  up: -4,
  hs: 7,
  shake: 3,
  fin: !0,
  sfx: "swing_heavy",
  extra: [_0x2e90d3]
};
const _0x1a1f0f = {
  t: 4,
  k: "plunge",
  vy: 7,
  m: 1.4,
  r: 30
};
const _0x2c3fac = {
  dur: 60,
  pose: [[0, "slamWind"], [6, "slam"]],
  landEnd: !0,
  airOk: !0,
  ev: [_0x1a1f0f]
};
const _0x25afbd = {
  arc: "thrust",
  r: 30,
  col: "#d0b080"
};
const _0x56c0b6 = {
  dur: 22,
  t: 5,
  m: 1.1,
  box: [0, -10, 36, 16],
  w: "dash",
  s: "thrust",
  fx: _0x25afbd,
  lunge: 6,
  hs: 4
};
const _0x40f4b5 = {
  t: 10,
  k: "sfx",
  s: "crumble"
};
const _0x39f1fc = {
  vis: "trap",
  w: 18,
  h: 8,
  life: 600,
  tick: 1,
  m: 2.4,
  oneShot: !0
};
const _0x131574 = {
  t: 10,
  k: "field",
  f: _0x39f1fc,
  dx: 20,
  ground: !0
};
const _0x320ffa = {
  vis: "trap",
  w: 18,
  h: 8,
  life: 600,
  tick: 1,
  m: 2.4,
  oneShot: !0
};
const _0x4ad554 = {
  t: 10,
  k: "field",
  f: _0x320ffa,
  dx: 50,
  ground: !0
};
const _0x5a9781 = {
  dur: 26,
  pose: [[0, "slamWind"], [10, "slam"]],
  ev: [_0x40f4b5, _0x131574, _0x4ad554]
};
const _0x480781 = {
  name: "함정 파기",
  desc: "발밑에 구덩이 함정 두 개를 판다. 적이 밟으면 폭발한다.",
  cd: 8,
  act: _0x5a9781
};
const _0x577f6a = {
  spr: "rock",
  spd: 5,
  grav: 0.15,
  life: 50,
  w: 6,
  h: 6,
  col: "#8a6a4a",
  kb: 3
};
const _0x1a2e7c = {
  dur: 24,
  t: 8,
  m: 0.55,
  n: 5,
  spread: 12,
  ang: -15,
  p: _0x577f6a,
  w: "windLow",
  s: "slashUp",
  sfx: "crumble"
};
const _0x3735fb = {
  t: 8,
  k: "sfx",
  s: "crumble"
};
const _0x25d808 = {
  t: 8,
  k: "nova",
  r: 50,
  m: 1.5,
  up: -5
};
const _0xd45120 = {
  t: 8,
  k: "shake",
  v: 4
};
const _0x3278ea = {
  dur: 24,
  pose: [[0, "slamWind"], [8, "slam"]],
  inv: [0, 12],
  ev: [_0x3735fb, _0x25d808, _0xd45120]
};
const _0xb647ce = {
  name: "교대: 파묻기",
  desc: "땅을 내리쳐 주변 적을 공중으로 띄운다.",
  act: _0x3278ea
};
const _0x4f54d8 = {
  gold: 0.25
};
const _0x279921 = {
  stats: _0x4f54d8
};
const _0x2e362a = {
  k: "gold",
  v: 10
};
const _0x180555 = {
  on: "kill",
  chance: 0.1,
  do: [_0x2e362a]
};
const _0x41d26e = {
  name: "도굴",
  desc: "금화 획득 +25%. 처치 시 10% 확률로 금화 10",
  effects: [_0x279921, _0x180555]
};
const _0xb38bad = {
  target: "skill1",
  dmg: 0.4
};
const _0x5d4496 = {
  desc: "함정 피해 +40%",
  mods: [_0xb38bad]
};
const _0x3db1d3 = {
  atk: 0.08
};
const _0x31669d = {
  stats: _0x3db1d3
};
const _0x5171b5 = {
  desc: "공격력 +8%",
  effects: [_0x31669d]
};
const _0x10d7c5 = {
  target: "skill2",
  count: 3
};
const _0xfb1d22 = {
  desc: "흙 뿌리기 돌 +3",
  mods: [_0x10d7c5]
};
const _0xc10c53 = {
  maxHp: 25
};
const _0x1606bf = {
  stats: _0xc10c53
};
const _0x56f729 = {
  desc: "최대 체력 +25",
  effects: [_0x1606bf]
};
const _0xbe3189 = {
  target: "all",
  dmg: 0.2
};
const _0x1ed6a3 = {
  desc: "모든 기술 피해 +20%",
  mods: [_0xbe3189]
};
const _0x7d39fe = {
  skin: "#f8e0d0",
  hair: "#40a080",
  hairStyle: "long",
  body: "#2a6a5a",
  trim: "#e0c060",
  legs: "#3a3a4a",
  boots: "#2a2028",
  cape: "#a04060",
  eye: "#2a6a4a",
  weapon: "lute",
  wcol: "#c08040",
  wcol2: "#f0e0c0",
  build: "slim"
};
const _0x5308f9 = {
  spr: "wave",
  spd: 5,
  life: 36,
  w: 10,
  h: 14,
  col: "#80ffd0",
  pierce: 2,
  kb: 1
};
const _0xab2673 = {
  dur: 16,
  t: 5,
  m: 0.6,
  p: _0x5308f9,
  w: "guard",
  s: "shoot",
  sfx: "cast"
};
const _0x1ce69a = {
  spr: "wave",
  spd: 5,
  life: 36,
  w: 10,
  h: 14,
  col: "#80ffd0",
  pierce: 2,
  kb: 1
};
const _0x4acaa6 = {
  dur: 16,
  t: 5,
  m: 0.6,
  p: _0x1ce69a,
  w: "guard",
  s: "shoot",
  sfx: "cast"
};
const _0x1b8ac4 = {
  spr: "wave",
  spd: 5.5,
  life: 44,
  w: 14,
  h: 24,
  col: "#c0ffe8",
  pierce: 99,
  kb: 3
};
const _0x3506b5 = {
  dur: 24,
  t: 8,
  m: 1,
  p: _0x1b8ac4,
  w: "castUp",
  s: "shoot",
  sfx: "cast"
};
const _0x337957 = {
  spr: "wave",
  spd: 5,
  life: 36,
  w: 10,
  h: 14,
  col: "#80ffd0",
  pierce: 2
};
const _0xdd5cba = {
  dur: 16,
  t: 4,
  m: 0.6,
  ang: 40,
  air: !0,
  grav: 0.35,
  p: _0x337957,
  s: "shoot"
};
const _0x5477d8 = {
  t: 6,
  k: "nova",
  r: 30,
  m: 0.7
};
const _0x58803b = {
  t: 6,
  k: "sfx",
  s: "cast"
};
const _0xb4dedc = {
  dur: 18,
  pose: [[0, "dash"], [6, "guard"]],
  move: [[0, 4], [10, 0]],
  inv: [0, 8],
  ev: [_0x5477d8, _0x58803b]
};
const _0x300aaf = {
  t: 10,
  k: "sfx",
  s: "gem"
};
const _0x56b0df = {
  atk: 0.25,
  aspd: 0.15
};
const definition_lyra_song = {
  t: 10,
  k: "buff",
  id: "lyra_song",
  stats: _0x56b0df,
  dur: 8
};
const _0x29a8e6 = {
  arc: "circle",
  r: 40,
  col: "#80ffd0"
};
const _0x3042fa = {
  t: 10,
  k: "fx",
  fx: _0x29a8e6
};
const _0x23d926 = {
  dur: 30,
  pose: [[0, "guard"], [10, "castUp"]],
  ev: [_0x300aaf, definition_lyra_song, _0x3042fa]
};
const _0x503a5a = {
  name: "용맹의 노래",
  desc: "8초간 공격력 +25%, 공격 속도 +15%. 노래가 끝나기 전 교대해도 효과가 유지된다.",
  cd: 12,
  act: _0x23d926
};
const _0x4ab1ff = {
  t: 8,
  k: "sfx",
  s: "thunder"
};
const _0x295a17 = {
  t: 8,
  k: "nova",
  r: 64,
  m: 1.2,
  el: "thunder",
  st: "shock",
  up: -2
};
const _0x4bff2b = {
  dur: 24,
  pose: [[0, "guard"], [8, "castUp"]],
  ev: [_0x4ab1ff, _0x295a17]
};
const _0x5087d8 = {
  name: "불협화음",
  desc: "귀를 찢는 화음으로 주변 적을 감전시키고 밀어낸다.",
  cd: 7,
  act: _0x4bff2b
};
const _0x249673 = {
  t: 5,
  k: "heal",
  v: 0.08
};
const _0x25bcaa = {
  t: 5,
  k: "nova",
  r: 48,
  m: 1
};
const _0x55a9c2 = {
  t: 5,
  k: "sfx",
  s: "heal"
};
const _0x585c8e = {
  dur: 22,
  pose: [[0, "castUp"]],
  inv: [0, 10],
  ev: [_0x249673, _0x25bcaa, _0x55a9c2]
};
const _0x4d70ca = {
  name: "교대: 앙코르",
  desc: "등장하며 체력을 8% 회복하고 주변에 음파를 퍼뜨린다.",
  act: _0x585c8e
};
const _0x2c5400 = {
  swapCdr: 0.15
};
const _0x54f730 = {
  stats: _0x2c5400
};
const _0x2ae578 = {
  k: "heal",
  v: 0.02
};
const _0x277f14 = {
  on: "skill",
  do: [_0x2ae578]
};
const _0x4dc4ac = {
  name: "선율",
  desc: "스킬 사용 시 체력 2% 회복. 교대 쿨타임 -15%",
  effects: [_0x54f730, _0x277f14]
};
const _0x397624 = {
  target: "skill1",
  cd: 3
};
const _0x42c04e = {
  desc: "용맹의 노래 쿨타임 -3초",
  mods: [_0x397624]
};
const _0x25cee5 = {
  target: "skill2",
  size: 0.3
};
const _0x3dface = {
  desc: "불협화음 범위 +30%",
  mods: [_0x25cee5]
};
const _0x14f520 = {
  mspd: 0.1
};
const _0x2daa15 = {
  stats: _0x14f520
};
const _0x491380 = {
  desc: "이동 속도 +10%",
  effects: [_0x2daa15]
};
const _0x4a4c05 = {
  vsShock: 0.2
};
const _0x3997cf = {
  stats: _0x4a4c05
};
const _0x531396 = {
  desc: "감전 대상에게 주는 피해 +20%",
  effects: [_0x3997cf]
};
const _0x43beb1 = {
  target: "all",
  dmg: 0.2
};
const _0x31d5e8 = {
  desc: "모든 기술 피해 +20%",
  mods: [_0x43beb1]
};
const _0x1cca13 = {
  skin: "#c89070",
  hair: "#3a2a1a",
  hairStyle: "short",
  body: "#6a7a3a",
  trim: "#d0b060",
  legs: "#4a4030",
  boots: "#2a2018",
  cape: "#8a4a2a",
  eye: "#202020",
  weapon: "spear",
  wcol: "#d0c0a0",
  wcol2: "#6a4a2a",
  build: "normal",
  extra: "scarf"
};
const _0x308d05 = {
  spr: "spear",
  spd: 7,
  grav: 0.05,
  life: 60,
  w: 16,
  h: 4,
  col: "#d0c0a0",
  kb: 2,
  pierce: 1
};
const _0x2f7642 = {
  dur: 18,
  t: 6,
  m: 0.8,
  p: _0x308d05,
  w: "windHigh",
  s: "throw",
  sfx: "arrow"
};
const _0x5f1f1f = {
  spr: "spear",
  spd: 7,
  grav: 0.05,
  life: 60,
  w: 16,
  h: 4,
  col: "#d0c0a0",
  kb: 2,
  pierce: 1
};
const _0x56f24c = {
  dur: 18,
  t: 6,
  m: 0.8,
  p: _0x5f1f1f,
  w: "windHigh",
  s: "throw",
  sfx: "arrow"
};
const _0x5da2b9 = {
  spr: "spear",
  spd: 7.5,
  grav: 0.04,
  life: 60,
  w: 16,
  h: 4,
  col: "#f0e0b0",
  kb: 3,
  pierce: 2
};
const _0x358bdd = {
  dur: 26,
  t: 9,
  m: 0.65,
  n: 3,
  spread: 8,
  p: _0x5da2b9,
  w: "windHigh",
  s: "throw",
  sfx: "arrow"
};
const _0x31d734 = {
  spr: "spear",
  spd: 8,
  life: 50,
  w: 16,
  h: 4,
  col: "#d0c0a0",
  kb: 2
};
const _0x1961c5 = {
  dur: 18,
  t: 5,
  m: 0.9,
  ang: 50,
  air: !0,
  grav: 0.35,
  p: _0x31d734,
  w: "windHigh",
  s: "throw",
  sfx: "arrow"
};
const _0x3d6745 = {
  arc: "thrust",
  r: 40
};
const _0x36d734 = {
  dur: 22,
  t: 5,
  m: 1,
  box: [0, -8, 44, 14],
  w: "thrustWind",
  s: "thrust",
  fx: _0x3d6745,
  lunge: 6,
  hs: 3
};
const _0x3bdba4 = {
  t: 6,
  k: "sfx",
  s: "arrow"
};
const _0x477524 = {
  t: 8,
  k: "meteor",
  n: 6,
  m: 0.85,
  spread: 90,
  spr: "spear"
};
const _0x434288 = {
  dur: 26,
  pose: [[0, "windHigh"], [6, "castUp"]],
  ev: [_0x3bdba4, _0x477524]
};
const _0x204fa5 = {
  name: "창비",
  desc: "하늘로 창을 던져 전방에 창 여섯 자루를 쏟아붓는다.",
  cd: 8,
  act: _0x434288
};
const _0x254717 = {
  spr: "spear",
  spd: 10,
  life: 60,
  w: 22,
  h: 5,
  col: "#ffffa0",
  pierce: 99,
  kb: 4,
  el: "thunder",
  st: "shock",
  hs: 5
};
const _0x307607 = {
  t: 3,
  k: "sfx",
  s: "skill"
};
const _0x48a0aa = {
  dur: 30,
  t: 14,
  m: 2.2,
  p: _0x254717,
  w: "windHigh",
  s: "throw",
  sfx: "thunder",
  extra: [_0x307607]
};
const _0x2ece26 = {
  spr: "spear",
  spd: 8,
  life: 50,
  w: 16,
  h: 4,
  col: "#f0e0b0",
  kb: 3,
  pierce: 1
};
const _0x494404 = {
  dur: 26,
  t: 8,
  m: 0.9,
  n: 3,
  spread: 14,
  ang: 60,
  inv: [0, 14],
  air: !0,
  grav: 0.3,
  move: [[0, 1, -5], [10, 0]],
  p: _0x2ece26,
  w: "jump",
  s: "throw",
  sfx: "arrow"
};
const _0x48adfe = {
  crit: 0.08,
  airDmg: 0.2
};
const _0xc6d404 = {
  stats: _0x48adfe
};
const _0xd39750 = {
  name: "정조준",
  desc: "치명타 확률 +8%, 공중 공격 피해 +20%",
  effects: [_0xc6d404]
};
const _0x17123b = {
  target: "skill1",
  count: 3
};
const _0x16b8a9 = {
  desc: "창비 창 +3",
  mods: [_0x17123b]
};
const _0xb156bd = {
  target: "skill2",
  dmg: 0.35
};
const _0x1b4c4b = {
  desc: "관통 투창 피해 +35%",
  mods: [_0xb156bd]
};
const _0x5a0f16 = {
  critDmg: 0.25
};
const _0x1c7b28 = {
  stats: _0x5a0f16
};
const _0x266541 = {
  desc: "치명타 피해 +25%",
  effects: [_0x1c7b28]
};
const _0xa31d21 = {
  target: "combo",
  dmg: 0.25
};
const _0x19c3fe = {
  desc: "기본 공격 피해 +25%",
  mods: [_0xa31d21]
};
const _0x59c2f0 = {
  target: "all",
  dmg: 0.2
};
const _0x5e0ea1 = {
  desc: "모든 기술 피해 +20%",
  mods: [_0x59c2f0]
};
const _0x285f34 = {
  skin: "#e0b090",
  hair: "#a04020",
  hairStyle: "short",
  body: "#a03030",
  trim: "#2a2a2a",
  legs: "#3a3a5a",
  boots: "#3a2818",
  eye: "#202020",
  weapon: "axe",
  wcol: "#b0b8c0",
  wcol2: "#6a4a2a",
  build: "big"
};
const _0x5c7bb9 = {
  arc: "down",
  r: 26,
  col: "#ffc080"
};
const _0x41c3f4 = {
  dur: 24,
  t: 9,
  m: 1.1,
  box: [-4, -20, 40, 32],
  w: "windHigh",
  s: "slashDown",
  fx: _0x5c7bb9,
  hs: 5,
  lunge: 2,
  sfx: "swing_heavy"
};
const _0x1d6e92 = {
  arc: "h",
  r: 28,
  col: "#ffc080"
};
const _0x84932a = {
  dur: 24,
  t: 9,
  m: 1.15,
  box: [-10, -18, 48, 30],
  w: "windLow",
  s: "slashUp",
  fx: _0x1d6e92,
  hs: 5,
  lunge: 2,
  sfx: "swing_heavy"
};
const _0x1a2f8e = {
  arc: "slam",
  r: 32,
  col: "#ffa060"
};
const _0x1f4c92 = {
  dur: 36,
  t: 15,
  m: 2.1,
  box: [-6, -26, 48, 38],
  w: "slamWind",
  s: "slam",
  fx: _0x1a2f8e,
  kb: 5,
  up: -3,
  hs: 9,
  shake: 4,
  fin: !0,
  armor: !0,
  sfx: "swing_heavy"
};
const _0x396b12 = {
  t: 4,
  k: "plunge",
  vy: 8,
  m: 1.5,
  r: 32
};
const _0x3b609f = {
  dur: 60,
  pose: [[0, "slamWind"], [6, "slam"]],
  landEnd: !0,
  airOk: !0,
  ev: [_0x396b12]
};
const _0x4f8646 = {
  arc: "h",
  r: 26,
  col: "#ffc080"
};
const _0x1525b0 = {
  dur: 24,
  t: 6,
  m: 1.2,
  box: [0, -14, 36, 24],
  w: "dash",
  s: "slashDown",
  fx: _0x4f8646,
  lunge: 6,
  kb: 4,
  hs: 5
};
const _0x1754a6 = {
  arc: "spin",
  r: 32,
  col: "#ffc080"
};
const _0x6516ad = {
  dur: 40,
  times: [6, 13, 20, 27, 34],
  m: 0.6,
  lastM: 1.1,
  lastKb: 5,
  box: [-32, -20, 64, 32],
  pose: [[0, "spin"], [10, "slashUp"], [17, "spin"], [24, "slashDown"], [31, "spin"]],
  fx: _0x1754a6,
  move: [[0, 1.2]],
  armor: !0,
  sfx: "swing_heavy"
};
const _0x23f2f5 = {
  t: 4,
  k: "sfx",
  s: "skill"
};
const _0x5dabf2 = {
  arc: "slam",
  r: 40,
  col: "#ffe0a0"
};
const _0x253c30 = {
  t: 22,
  k: "hit",
  box: [-6, -34, 52, 46],
  m: 3.4,
  kb: 4,
  up: -4,
  hs: 12,
  shake: 7,
  fx: _0x5dabf2
};
const _0x43b239 = {
  t: 22,
  k: "sfx",
  s: "hit_power"
};
const _0x3fda4d = {
  dur: 46,
  pose: [[0, "slamWind"], [22, "slam"]],
  armor: !0,
  ev: [_0x23f2f5, _0x253c30, _0x43b239]
};
const _0x474585 = {
  name: "장작 쪼개기",
  desc: "긴 준비 끝에 도끼를 내리찍어 적을 쪼갠다. 시전 중 경직 무시.",
  cd: 10,
  act: _0x3fda4d
};
const _0x164a38 = {
  spr: "scythe",
  spd: 6,
  life: 70,
  w: 16,
  h: 16,
  col: "#b0b8c0",
  pierce: 99,
  ret: !0,
  kb: 3,
  hs: 4
};
const _0x118b3e = {
  dur: 22,
  t: 6,
  m: 1.3,
  inv: [0, 10],
  p: _0x164a38,
  w: "windHigh",
  s: "throw",
  sfx: "swing_heavy"
};
const _0x4906e6 = {
  maxHp: 20
};
const _0x11bca4 = {
  stats: _0x4906e6
};
const _0x5a512b = {
  k: "heal",
  v: 0.01
};
const _0x58ad48 = {
  on: "finisher",
  do: [_0x5a512b]
};
const _0x38fd06 = {
  name: "통나무 체력",
  desc: "최대 체력 +20. 콤보 마지막 타격 적중 시 체력 1% 회복",
  effects: [_0x11bca4, _0x58ad48]
};
const _0x4272cc = {
  target: "skill1",
  dmg: 0.3
};
const _0x239f90 = {
  desc: "벌목꾼의 회전 피해 +30%",
  mods: [_0x4272cc]
};
const _0x2b308e = {
  atk: 0.08
};
const _0x51f64a = {
  stats: _0x2b308e
};
const _0x15e380 = {
  desc: "공격력 +8%",
  effects: [_0x51f64a]
};
const _0x15d308 = {
  target: "skill2",
  cd: 2
};
const _0x883e8 = {
  desc: "장작 쪼개기 쿨타임 -2초",
  mods: [_0x15d308]
};
const _0x448fdd = {
  maxHp: 30
};
const _0x588574 = {
  stats: _0x448fdd
};
const _0x4bdde2 = {
  desc: "최대 체력 +30",
  effects: [_0x588574]
};
const _0x199f60 = {
  target: "all",
  dmg: 0.2
};
const _0x37ce10 = {
  desc: "모든 기술 피해 +20%",
  mods: [_0x199f60]
};
const _0x16a83a = {
  skin: "#a0a8b0",
  hair: "#6a7078",
  hairStyle: "helm",
  body: "#7a8088",
  trim: "#ffb040",
  legs: "#5a6068",
  boots: "#3a4048",
  eye: "#80e0ff",
  weapon: "hammer",
  wcol: "#c0c8d0",
  wcol2: "#ffb040",
  build: "big",
  glow: "#80e0ff"
};
const _0x298f5d = {
  arc: "down",
  r: 18,
  col: "#80e0ff"
};
const _0x5d4de6 = {
  dur: 18,
  t: 6,
  m: 0.7,
  box: [-2, -16, 30, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x298f5d,
  hs: 3,
  lunge: 1.5,
  sfx: "clang"
};
const _0x38a4ae = {
  arc: "up",
  r: 18,
  col: "#80e0ff"
};
const _0x539b66 = {
  dur: 18,
  t: 6,
  m: 0.7,
  box: [-2, -16, 30, 26],
  w: "windLow",
  s: "slashUp",
  fx: _0x38a4ae,
  hs: 3,
  lunge: 1.5,
  sfx: "clang"
};
const _0x4a9af8 = {
  arc: "slam",
  r: 26,
  col: "#80e0ff"
};
const _0x295868 = {
  dur: 28,
  t: 11,
  m: 1.4,
  box: [-8, -22, 42, 34],
  w: "slamWind",
  s: "slam",
  fx: _0x4a9af8,
  up: -3,
  hs: 6,
  shake: 3,
  fin: !0,
  el: "thunder",
  st: "shock",
  sfx: "thunder"
};
const _0x40849c = {
  t: 4,
  k: "plunge",
  vy: 7,
  m: 1.3,
  r: 30,
  el: "thunder",
  st: "shock"
};
const _0x568766 = {
  dur: 60,
  pose: [[0, "slamWind"], [6, "slam"]],
  landEnd: !0,
  airOk: !0,
  ev: [_0x40849c]
};
const _0x29b048 = {
  arc: "thrust",
  r: 14,
  col: "#80e0ff"
};
const _0x1737c4 = {
  dur: 24,
  t: 5,
  m: 1,
  box: [0, -14, 26, 26],
  w: "dash",
  s: "guard",
  fx: _0x29b048,
  lunge: 6,
  kb: 6,
  hs: 5,
  armor: !0
};
const _0x4b5dd5 = {
  t: 10,
  k: "sfx",
  s: "clang"
};
const _0x30968b = {
  kind: "turret",
  life: 600,
  m: 0.55,
  max: 2
};
const _0x3bd120 = {
  t: 10,
  k: "summon",
  s: _0x30968b
};
const _0x491791 = {
  dur: 26,
  pose: [[0, "crouch"], [10, "slam"]],
  ev: [_0x4b5dd5, _0x3bd120]
};
const _0x47e6db = {
  name: "포탑 설치",
  desc: "적을 자동으로 쏘는 전기 포탑을 설치한다 (최대 2기, 10초).",
  cd: 10,
  act: _0x491791
};
const _0x3b7044 = {
  t: 8,
  k: "sfx",
  s: "thunder"
};
const _0x1aaac4 = {
  t: 8,
  k: "nova",
  r: 56,
  m: 1.2,
  el: "thunder",
  st: "shock"
};
const _0x16bc6f = {
  t: 10,
  k: "chain",
  n: 4,
  m: 0.8
};
const _0x4d87d9 = {
  dur: 26,
  pose: [[0, "castUp"]],
  ev: [_0x3b7044, _0x1aaac4, _0x16bc6f]
};
const _0x379f9e = {
  name: "과부하 방전",
  desc: "몸에 쌓인 전기를 방출해 주변을 감전시키고 연쇄 번개를 일으킨다.",
  cd: 8,
  act: _0x4d87d9
};
const _0xd6cba7 = {
  t: 8,
  k: "plunge",
  vy: 9,
  m: 1.8,
  r: 46,
  el: "thunder",
  st: "shock"
};
const _0x382948 = {
  dur: 60,
  pose: [[0, "slamWind"], [8, "slam"]],
  move: [[0, 2, -4]],
  landEnd: !0,
  airOk: !0,
  armor: !0,
  inv: [0, 20],
  ev: [_0xd6cba7]
};
const _0x5119ee = {
  name: "교대: 비상 착륙",
  desc: "추진기로 날아와 착지하며 주변을 감전시킨다.",
  act: _0x382948
};
const _0x27fef4 = {
  dmgTaken: -0.05
};
const _0x140d4f = {
  stats: _0x27fef4
};
const _0x38fef0 = {
  k: "heal",
  v: 0.03
};
const _0x58bf5e = {
  on: "interval",
  every: 8,
  do: [_0x38fef0]
};
const _0x28839e = {
  name: "자가 수리",
  desc: "8초마다 체력 3% 회복. 받는 피해 -5%",
  effects: [_0x140d4f, _0x58bf5e]
};
const _0x2c3024 = {
  target: "skill1",
  dmg: 0.4
};
const _0x299650 = {
  desc: "포탑 공격력 +40%",
  mods: [_0x2c3024]
};
const _0xdb4980 = {
  maxHp: 30
};
const _0x2dcef3 = {
  stats: _0xdb4980
};
const _0x472474 = {
  desc: "최대 체력 +30",
  effects: [_0x2dcef3]
};
const _0x354ada = {
  target: "skill2",
  cd: 2
};
const _0x298144 = {
  desc: "과부하 방전 쿨타임 -2초",
  mods: [_0x354ada]
};
const _0x138331 = {
  target: "skill1",
  count: 1
};
const _0x33426b = {
  desc: "포탑 설치 수 +1",
  mods: [_0x138331]
};
const _0x1aeca7 = {
  target: "all",
  dmg: 0.2
};
const _0xb90356 = {
  desc: "모든 기술 피해 +20%",
  mods: [_0x1aeca7]
};
const _0x5b46a9 = {
  skin: "#f0c8a0",
  hair: "#6a4a3a",
  hairStyle: "short",
  body: "#4a6aa0",
  trim: "#c8b070",
  legs: "#3a3a52",
  boots: "#5a3a2a",
  cape: "#8a2a2a",
  eye: "#202020",
  weapon: "sword",
  wcol: "#d8e0f0",
  wcol2: "#8a6a3a",
  build: "normal",
  extra: "scarf"
};
const _0x412317 = {
  arc: "down",
  r: 20
};
const _0x5e7c21 = {
  dur: 19,
  t: 6,
  m: 0.8,
  box: [-2, -16, 28, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x412317,
  hs: 3,
  lunge: 1.5
};
const _0x7b8550 = {
  arc: "up",
  r: 20
};
const _0x5cc29e = {
  dur: 19,
  t: 6,
  m: 0.85,
  box: [-2, -16, 28, 26],
  w: "windLow",
  s: "slashUp",
  fx: _0x7b8550,
  hs: 3,
  lunge: 1.5
};
const _0x2b9596 = {
  arc: "thrust",
  r: 26
};
const _0x2469a0 = {
  dur: 21,
  t: 7,
  m: 0.9,
  box: [0, -8, 32, 12],
  w: "thrustWind",
  s: "thrust",
  fx: _0x2b9596,
  hs: 3,
  lunge: 3
};
const _0x8f1f2b = {
  arc: "slam",
  r: 26
};
const _0x3e31d7 = {
  dur: 32,
  t: 12,
  m: 1.7,
  box: [-4, -22, 36, 34],
  w: "slamWind",
  s: "slam",
  fx: _0x8f1f2b,
  kb: 4.5,
  up: -3,
  hs: 7,
  shake: 3,
  fin: !0,
  sfx: "swing_heavy",
  lunge: 2
};
const _0x16900e = {
  arc: "down",
  r: 20
};
const _0x3fd7e5 = {
  dur: 20,
  t: 5,
  m: 0.8,
  box: [-6, -18, 32, 32],
  w: "windHigh",
  s: "slashDown",
  fx: _0x16900e,
  air: !0,
  grav: 0.3,
  hs: 3
};
const _0x31b814 = {
  arc: "thrust",
  r: 30
};
const _0x40cf4d = {
  dur: 22,
  t: 5,
  m: 1.1,
  box: [0, -8, 36, 14],
  w: "thrustWind",
  s: "thrust",
  fx: _0x31b814,
  lunge: 5,
  kb: 3,
  hs: 4
};
const _0x4786b0 = {
  arc: "spin",
  r: 26
};
const _0x206d73 = {
  dur: 30,
  times: [6, 13, 20],
  m: 0.65,
  lastM: 0.9,
  lastUp: -4,
  box: [-26, -20, 52, 32],
  pose: [[0, "spin"], [10, "slashUp"], [17, "spin"]],
  fx: _0x4786b0,
  sfx: "swing_heavy",
  air: !0,
  grav: 0.2,
  hs: 3
};
const _0x3ead5f = {
  t: 3,
  k: "sfx",
  s: "dash"
};
const _0x3c9880 = {
  arc: "thrust",
  r: 34
};
const _0x4f1ea1 = {
  t: 6,
  k: "hit",
  box: [-30, -10, 46, 18],
  m: 1,
  kb: 1,
  hs: 2,
  fx: _0x3c9880
};
const _0x4a9592 = {
  arc: "x",
  r: 22
};
const _0x18900d = {
  t: 13,
  k: "hit",
  box: [-50, -12, 60, 22],
  m: 1.4,
  kb: 4,
  hs: 6,
  shake: 3,
  fx: _0x4a9592
};
const _0x16ae39 = {
  dur: 26,
  pose: [[0, "thrustWind"], [4, "thrust"]],
  move: [[3, 10], [13, 0]],
  inv: [0, 16],
  ev: [_0x3ead5f, _0x4f1ea1, _0x18900d]
};
const _0x2613ce = {
  name: "섬광 찌르기",
  desc: "눈 깜짝할 사이에 전방으로 돌진하며 꿰뚫는다. 돌진 중 무적.",
  cd: 8,
  act: _0x16ae39
};
const _0x1ea5b3 = {
  arc: "h",
  r: 32
};
const _0x5b2a78 = {
  dur: 26,
  t: 8,
  m: 2,
  box: [-6, -22, 50, 36],
  w: "windHigh",
  s: "slashDown",
  fx: _0x1ea5b3,
  lunge: 6,
  up: -3.5,
  kb: 3,
  hs: 8,
  shake: 4,
  inv: [0, 12],
  sfx: "swing_heavy"
};
const _0x276a5c = {
  atk: 0.15
};
const definition_kael_p = {
  k: "buff",
  id: "kael_p",
  stats: _0x276a5c,
  dur: 3
};
const _0xf8c3c3 = {
  on: "finisher",
  do: [definition_kael_p]
};
const _0x89ba53 = {
  name: "투지",
  desc: "콤보 마지막 타격 적중 시 3초간 공격력 +15%",
  effects: [_0xf8c3c3]
};
const _0x18ef1e = {
  target: "skill1",
  dmg: 0.3
};
const _0x2a97ce = {
  desc: "회오리 베기 피해 +30%",
  mods: [_0x18ef1e]
};
const _0x1873aa = {
  atk: 0.08
};
const _0x1fb98b = {
  stats: _0x1873aa
};
const _0x5974c2 = {
  desc: "공격력 +8%",
  effects: [_0x1fb98b]
};
const _0x47a3be = {
  target: "skill2",
  cd: 2
};
const _0x1b0c5c = {
  desc: "섬광 찌르기 쿨타임 -2초",
  mods: [_0x47a3be]
};
const _0xe097ba = {
  k: "wave",
  m: 0.6
};
const _0xd5991 = {
  on: "finisher",
  do: [_0xe097ba]
};
const _0x4119ca = {
  desc: "콤보 마지막 타격이 충격파를 일으킴",
  effects: [_0xd5991]
};
const _0x560738 = {
  target: "all",
  dmg: 0.2
};
const _0x1a5777 = {
  desc: "모든 기술 피해 +20%",
  mods: [_0x560738]
};
const _0x4dd692 = {
  skin: "#f0d0b0",
  hair: "#c88a3a",
  hairStyle: "pony",
  body: "#3a7a3a",
  trim: "#a0c060",
  legs: "#5a4a2a",
  boots: "#3a2a1a",
  cape: "#2a5a2a",
  eye: "#2a6a2a",
  weapon: "bow",
  wcol: "#a07040",
  wcol2: "#f0f0d0",
  build: "slim"
};
const _0xfe856b = {
  pierce: 1
};
const _0x2cba2f = {
  pierce: 3,
  spd: 9
};
const _0x2239ab = {
  spr: "arrow",
  spd: 10,
  life: 60,
  w: 18,
  h: 6,
  col: "#ffff80",
  pierce: 99,
  kb: 4,
  hs: 5
};
const _0x39cb73 = {
  t: 4,
  k: "sfx",
  s: "skill"
};
const _0xb60693 = {
  t: 16,
  k: "shake",
  v: 2
};
const _0xd2d233 = {
  dur: 30,
  t: 16,
  m: 2.4,
  p: _0x2239ab,
  sfx: "arrow",
  w: "shootWind",
  extra: [_0x39cb73, _0xb60693]
};
const _0xfd7cf8 = {
  vis: "trap",
  w: 18,
  h: 8,
  life: 600,
  tick: 1,
  m: 2.2,
  oneShot: !0,
  st: "bleed"
};
const _0x3fb550 = {
  t: 2,
  k: "field",
  f: _0xfd7cf8,
  dx: 0,
  ground: !0
};
const _0x14a1d7 = {
  t: 3,
  k: "sfx",
  s: "jump"
};
const _0x11ac02 = {
  dur: 26,
  pose: [[0, "crouch"], [4, "jump"]],
  move: [[3, -4.5, -4.2], [22, 0]],
  airOk: !0,
  inv: [0, 14],
  ev: [_0x3fb550, _0x14a1d7]
};
const _0x518024 = {
  name: "덫 깔고 도약",
  desc: "발밑에 폭발 덫을 남기고 뒤로 크게 도약한다. 덫은 적이 닿으면 폭발해 출혈을 일으킨다.",
  cd: 9,
  act: _0x11ac02
};
const _0x18a71a = {
  t: 6,
  k: "sfx",
  s: "arrow"
};
const _0x47e70e = {
  t: 8,
  k: "meteor",
  n: 8,
  m: 0.65,
  spread: 70,
  spr: "arrow"
};
const _0x2d2cac = {
  dur: 24,
  pose: [[0, "shootWind"], [6, "castUp"]],
  inv: [0, 10],
  ev: [_0x18a71a, _0x47e70e]
};
const _0x1217fb = {
  name: "교대: 화살비",
  desc: "하늘로 화살을 쏘아 전방에 화살비를 내린다.",
  act: _0x2d2cac
};
const _0x10bc72 = {
  crit: 0.1
};
const _0x4b60cc = {
  stats: _0x10bc72
};
const _0x2e33ca = {
  aspd: 0.12
};
const definition_rina_p = {
  k: "buff",
  id: "rina_p",
  stats: _0x2e33ca,
  dur: 2
};
const _0x263146 = {
  on: "crit",
  do: [definition_rina_p]
};
const _0x9ddb86 = {
  name: "사냥 본능",
  desc: "치명타 확률 +10%. 치명타 시 2초간 공격 속도 +12%",
  effects: [_0x4b60cc, _0x263146]
};
const _0x2c6c80 = {
  target: "skill1",
  dmg: 0.35
};
const _0x112faf = {
  desc: "관통 화살 피해 +35%",
  mods: [_0x2c6c80]
};
const _0x5d1fcd = {
  target: "swap",
  count: 4
};
const _0x55ca4d = {
  desc: "화살비 화살 +4발",
  mods: [_0x5d1fcd]
};
const _0x3cd4b2 = {
  critDmg: 0.25
};
const _0x4bca54 = {
  stats: _0x3cd4b2
};
const _0x43ad20 = {
  desc: "치명타 피해 +25%",
  effects: [_0x4bca54]
};
const _0x267040 = {
  target: "combo",
  dmg: 0.25
};
const _0x28e1c4 = {
  desc: "기본 공격 피해 +25%",
  mods: [_0x267040]
};
const _0x56beb5 = {
  target: "skill1",
  cd: 2
};
const _0x1779ea = {
  mspd: 0.1
};
const _0x5d429e = {
  stats: _0x1779ea
};
const _0x53cffa = {
  desc: "관통 화살 쿨타임 -2초, 이동 속도 +10%",
  mods: [_0x56beb5],
  effects: [_0x5d429e]
};
const _0x17c8a0 = {
  skin: "#d8a070",
  hair: "#202020",
  hairStyle: "bald",
  body: "#d08030",
  trim: "#f0e0a0",
  legs: "#a05a20",
  boots: "#5a3a1a",
  eye: "#101010",
  weapon: "fists",
  wcol: "#e0d0b0",
  wcol2: "#8a5a3a",
  build: "normal",
  extra: "chains"
};
const _0x3759bd = {
  arc: "thrust",
  r: 12
};
const _0x2490bf = {
  dur: 11,
  t: 3,
  m: 0.45,
  box: [0, -10, 20, 14],
  w: "guard",
  s: "thrust",
  fx: _0x3759bd,
  hs: 2,
  lunge: 1.5,
  sfx: "swing"
};
const _0x4acc1d = {
  arc: "thrust",
  r: 12
};
const _0x1ed586 = {
  dur: 11,
  t: 3,
  m: 0.45,
  box: [0, -10, 20, 14],
  w: "thrustWind",
  s: "thrust",
  fx: _0x4acc1d,
  hs: 2,
  lunge: 1.5
};
const _0x48cb6b = {
  arc: "h",
  r: 14
};
const _0x4c516d = {
  dur: 14,
  t: 4,
  m: 0.55,
  box: [0, -6, 22, 14],
  w: "guard",
  s: "kick",
  fx: _0x48cb6b,
  hs: 2,
  lunge: 2
};
const _0x44650f = {
  arc: "up",
  r: 16
};
const _0x53c079 = {
  dur: 16,
  t: 5,
  m: 0.6,
  box: [0, -20, 20, 24],
  w: "crouch",
  s: "uppercut",
  fx: _0x44650f,
  up: -4.5,
  hs: 3,
  lunge: 1
};
const _0x4cf31e = {
  arc: "spin",
  r: 20
};
const _0x1a38a7 = {
  dur: 24,
  t: 8,
  m: 1.2,
  box: [-4, -14, 30, 22],
  w: "spin",
  s: "kick",
  fx: _0x4cf31e,
  kb: 5.5,
  hs: 6,
  shake: 2,
  fin: !0,
  lunge: 3
};
const _0x3fa597 = {
  arc: "down",
  r: 14
};
const _0x1ffea0 = {
  dur: 16,
  t: 4,
  m: 0.6,
  box: [0, -6, 22, 18],
  w: "jump",
  s: "kick",
  fx: _0x3fa597,
  air: !0,
  grav: 0.3,
  hs: 2
};
const _0x4fa8a9 = {
  arc: "thrust",
  r: 18
};
const _0x5103e6 = {
  dur: 20,
  t: 5,
  m: 0.9,
  box: [0, -12, 26, 18],
  w: "dash",
  s: "kick",
  fx: _0x4fa8a9,
  lunge: 5.5,
  up: -2,
  hs: 3
};
const _0x41ecc9 = {
  arc: "up",
  r: 18
};
const _0x12deac = {
  dur: 26,
  times: [4, 9, 14],
  m: 0.6,
  lastM: 0.9,
  up: -5,
  box: [-4, -30, 26, 40],
  pose: [[0, "crouch"], [3, "uppercut"]],
  fx: _0x41ecc9,
  move: [[3, 1.5, -5.5], [16, 0]],
  air: !0,
  sfx: "swing"
};
const _0xa474dd = {
  arc: "thrust",
  r: 14
};
const _0x345bb7 = {
  dur: 40,
  times: [4, 7, 10, 13, 16, 19, 22, 25, 31],
  m: 0.3,
  lastM: 1.2,
  lastKb: 6,
  box: [0, -14, 28, 20],
  pose: [[0, "thrust"], [5, "guard"], [8, "thrust"], [11, "kick"], [14, "thrust"], [17, "guard"], [20, "thrust"], [23, "kick"], [28, "thrust"]],
  fx: _0xa474dd,
  armor: !0,
  hs: 1
};
const _0x1d6ee5 = {
  arc: "thrust",
  r: 26
};
const _0x188856 = {
  dur: 24,
  t: 6,
  m: 1.8,
  box: [-4, -14, 34, 22],
  w: "dash",
  s: "kick",
  fx: _0x1d6ee5,
  lunge: 8,
  kb: 7,
  hs: 7,
  shake: 3,
  inv: [0, 12]
};
const _0x5a1a27 = {
  aspd: 0.2,
  mspd: 0.1
};
const _0x5c7894 = {
  cond: "comboHigh",
  stats: _0x5a1a27
};
const _0x21e440 = {
  name: "연타의 극의",
  desc: "콤보 15 이상일 때 공격 속도 +20%, 이동 속도 +10%",
  effects: [_0x5c7894]
};
const _0x3af664 = {
  target: "skill1",
  dmg: 0.3
};
const _0x143ce1 = {
  desc: "승천권 피해 +30%",
  mods: [_0x3af664]
};
const _0x1fe1d3 = {
  aspd: 0.08
};
const _0x236399 = {
  stats: _0x1fe1d3
};
const _0x3ac208 = {
  desc: "공격 속도 +8%",
  effects: [_0x236399]
};
const _0x53f467 = {
  target: "skill2",
  cd: 2
};
const _0x3f48d5 = {
  desc: "백열권 쿨타임 -2초",
  mods: [_0x53f467]
};
const _0x5037ef = {
  target: "swap",
  dmg: 0.5
};
const _0x244273 = {
  desc: "교대 공격 피해 +50%",
  mods: [_0x5037ef]
};
const _0x52c744 = {
  target: "all",
  dmg: 0.2
};
const _0x5836ef = {
  crit: 0.05
};
const _0x29f340 = {
  stats: _0x5836ef
};
const _0x3576a0 = {
  desc: "모든 기술 피해 +20%, 치명타 +5%",
  mods: [_0x52c744],
  effects: [_0x29f340]
};
const _0x35f76e = {
  skin: "#f8d8c0",
  hair: "#e04020",
  hairStyle: "bun",
  body: "#6a3a8a",
  trim: "#f0a040",
  legs: "#3a2a4a",
  boots: "#2a1a2a",
  eye: "#3a1a0a",
  weapon: "flask",
  wcol: "#ff7a2a",
  wcol2: "#c0e0f0",
  build: "slim"
};
const _0x8405ce = {
  r: 18,
  m: 1,
  el: "fire",
  st: "burn"
};
const _0x468b56 = {
  spr: "flask",
  spd: 3.6,
  vy: -2.6,
  grav: 0.18,
  life: 80,
  w: 6,
  h: 6,
  col: "#ff7a2a",
  boom: _0x8405ce
};
const _0x554544 = {
  dur: 18,
  t: 6,
  m: 0.7,
  p: _0x468b56,
  w: "throw",
  s: "shoot",
  sfx: "proj"
};
const _0x1a2416 = {
  r: 18,
  m: 1,
  el: "fire",
  st: "burn"
};
const _0x1bc0da = {
  spr: "flask",
  spd: 3,
  vy: -3,
  grav: 0.18,
  life: 80,
  w: 6,
  h: 6,
  col: "#ff9a2a",
  boom: _0x1a2416
};
const _0x331b8a = {
  dur: 18,
  t: 6,
  m: 0.7,
  p: _0x1bc0da,
  w: "throw",
  s: "shoot",
  sfx: "proj"
};
const _0xfb7aa2 = {
  r: 20,
  m: 1,
  el: "fire",
  st: "burn"
};
const _0x1c6326 = {
  spr: "flask",
  spd: 3.4,
  vy: -2.8,
  grav: 0.18,
  life: 80,
  w: 6,
  h: 6,
  col: "#ffba2a",
  boom: _0xfb7aa2
};
const _0x4cbb49 = {
  dur: 26,
  t: 9,
  m: 0.6,
  n: 3,
  spread: 14,
  p: _0x1c6326,
  w: "throw",
  s: "castUp",
  sfx: "proj"
};
const _0x1490e7 = {
  r: 18,
  m: 1,
  el: "fire",
  st: "burn"
};
const _0x4dcf57 = {
  spr: "flask",
  spd: 3.5,
  grav: 0.2,
  life: 60,
  w: 6,
  h: 6,
  col: "#ff7a2a",
  boom: _0x1490e7
};
const _0x1e665c = {
  dur: 16,
  t: 4,
  m: 0.7,
  ang: 50,
  air: !0,
  grav: 0.4,
  p: _0x4dcf57,
  w: "throw",
  s: "shoot"
};
const _0x13dc56 = {
  vis: "fire",
  w: 40,
  h: 14,
  life: 120,
  tick: 15,
  m: 0.25,
  el: "fire",
  st: "burn"
};
const _0x16eb5f = {
  t: 2,
  k: "field",
  f: _0x13dc56,
  dx: -10,
  ground: !0
};
const _0x46305a = {
  t: 2,
  k: "sfx",
  s: "burn"
};
const _0x3ed9c8 = {
  dur: 18,
  pose: [[0, "dash"], [6, "throw"]],
  move: [[0, 3], [10, 0]],
  ev: [_0x16eb5f, _0x46305a]
};
const _0x238876 = {
  t: 8,
  k: "sfx",
  s: "burn"
};
const _0x3afc7b = {
  vis: "fire",
  w: 80,
  h: 22,
  life: 200,
  tick: 14,
  m: 0.32,
  el: "fire",
  st: "burn"
};
const _0x407bbf = {
  t: 8,
  k: "field",
  f: _0x3afc7b,
  dx: 40,
  ground: !0
};
const _0x2c0ed2 = {
  dur: 24,
  pose: [[0, "castUp"], [8, "cast"]],
  ev: [_0x238876, _0x407bbf]
};
const _0x1e1b99 = {
  name: "연소의 장",
  desc: "전방 바닥에 오래 타오르는 화염 지대를 만든다.",
  cd: 7,
  act: _0x2c0ed2
};
const _0x34bfc4 = {
  r: 50,
  m: 2.8,
  el: "fire",
  st: "burn"
};
const _0x435e76 = {
  spr: "flask",
  spd: 3.4,
  vy: -3.6,
  grav: 0.18,
  life: 90,
  w: 10,
  h: 10,
  col: "#ff3a1a",
  boom: _0x34bfc4
};
const _0x56781a = {
  t: 2,
  k: "sfx",
  s: "skill"
};
const _0x22e10b = {
  dur: 30,
  t: 12,
  m: 1,
  p: _0x435e76,
  w: "castUp",
  s: "throw",
  extra: [_0x56781a]
};
const _0x5c4a80 = {
  t: 6,
  k: "sfx",
  s: "explode"
};
const _0xd3a66b = {
  t: 6,
  k: "nova",
  r: 56,
  m: 1.6,
  el: "fire",
  st: "burn",
  up: -2
};
const _0x1ee557 = {
  t: 6,
  k: "shake",
  v: 3
};
const _0x44e303 = {
  dur: 24,
  pose: [[0, "castUp"], [8, "cast"]],
  inv: [0, 10],
  ev: [_0x5c4a80, _0xd3a66b, _0x1ee557]
};
const _0x2a8ac0 = {
  name: "교대: 화염 고리",
  desc: "등장하며 주변으로 불꽃 고리를 폭발시킨다.",
  act: _0x44e303
};
const _0x4becaf = {
  dotDmg: 0.3,
  vsBurn: 0.1
};
const _0x26a972 = {
  stats: _0x4becaf
};
const _0x1ae420 = {
  name: "연소 촉진",
  desc: "지속 피해 +30%, 화상 대상에게 주는 피해 +10%",
  effects: [_0x26a972]
};
const _0x42e1c7 = {
  target: "skill1",
  size: 0.4
};
const _0x50a0e0 = {
  desc: "연소의 장 크기 +40%",
  mods: [_0x42e1c7]
};
const _0x540c72 = {
  target: "skill2",
  dmg: 0.35
};
const _0x26095f = {
  desc: "대폭발 플라스크 피해 +35%",
  mods: [_0x540c72]
};
const _0x393306 = {
  burnMax: 2
};
const _0x37aaf8 = {
  flags: _0x393306
};
const _0x3b08a2 = {
  desc: "화상 최대 중첩 +2",
  effects: [_0x37aaf8]
};
const _0x40230d = {
  target: "combo",
  count: 1
};
const _0x4df527 = {
  desc: "기본 공격 플라스크 +1개",
  mods: [_0x40230d]
};
const _0x60193a = {
  cdr: 0.2
};
const _0x563fc0 = {
  stats: _0x60193a
};
const _0x18d28 = {
  desc: "스킬 쿨타임 -20%",
  effects: [_0x563fc0]
};
const _0xdd4199 = {
  skin: "#e8e0c8",
  hair: "#3a2a4a",
  hairStyle: "hood",
  body: "#2a2a3a",
  trim: "#7aff6a",
  legs: "#1a1a2a",
  boots: "#101018",
  cape: "#1a1a2a",
  eye: "#7aff6a",
  weapon: "staff",
  wcol: "#e8e0c8",
  wcol2: "#5a4a3a",
  build: "slim",
  glow: "#7aff6a"
};
const _0x33e62d = {
  arc: "down",
  r: 16,
  col: "#b0ff90"
};
const _0x130898 = {
  dur: 18,
  t: 6,
  m: 0.6,
  box: [-2, -14, 26, 22],
  w: "windHigh",
  s: "slashDown",
  fx: _0x33e62d,
  hs: 3
};
const _0x3b617e = {
  spr: "bone",
  spd: 5,
  life: 60,
  w: 10,
  h: 6,
  col: "#e8e0c8",
  pierce: 1,
  kb: 2
};
const _0x2abd84 = {
  dur: 18,
  t: 6,
  m: 0.75,
  p: _0x3b617e,
  s: "cast"
};
const _0x5e2c92 = {
  t: 8,
  k: "sfx",
  s: "crumble"
};
const _0x1531c4 = {
  arc: "up",
  r: 18,
  col: "#e8e0c8",
  dx: 32
};
const _0x35bb49 = {
  t: 10,
  k: "hit",
  box: [16, -24, 34, 34],
  m: 1.3,
  up: -4,
  hs: 5,
  fin: !0,
  fx: _0x1531c4
};
const _0x2f40d7 = {
  dur: 26,
  pose: [[0, "castUp"], [8, "cast"]],
  cancel: 18,
  ev: [_0x5e2c92, _0x35bb49]
};
const _0x2658db = {
  spr: "bone",
  spd: 5,
  life: 50,
  w: 10,
  h: 6,
  col: "#e8e0c8"
};
const _0x4a50fc = {
  dur: 16,
  t: 4,
  m: 0.7,
  ang: 40,
  air: !0,
  grav: 0.4,
  p: _0x2658db,
  s: "cast"
};
const _0x4dd3e7 = {
  t: 4,
  k: "nova",
  r: 28,
  m: 0.8,
  el: "shadow"
};
const _0x46a88f = {
  t: 4,
  k: "sfx",
  s: "crumble"
};
const _0xdcc496 = {
  dur: 18,
  pose: [[0, "dash"], [4, "cast"]],
  move: [[0, 3], [8, 0]],
  ev: [_0x4dd3e7, _0x46a88f]
};
const _0x4cbdd6 = {
  t: 10,
  k: "sfx",
  s: "cast"
};
const _0x11b289 = {
  kind: "skeleton",
  life: 600,
  m: 0.55,
  max: 4
};
const _0x19f4cd = {
  t: 10,
  k: "summon",
  s: _0x11b289,
  n: 2
};
const _0x577fa4 = {
  dur: 26,
  pose: [[0, "castUp"]],
  ev: [_0x4cbdd6, _0x19f4cd]
};
const _0xfb308 = {
  name: "사자 소환",
  desc: "해골 전사 2기를 소환해 함께 싸운다 (최대 4기, 10초).",
  cd: 9,
  act: _0x577fa4
};
const _0x25cf25 = {
  t: 10,
  k: "sfx",
  s: "explode"
};
const _0x3d6edc = {
  t: 10,
  k: "nova",
  r: 50,
  m: 1.2,
  el: "shadow"
};
const _0x162c20 = {
  spr: "soul",
  spd: 3.5,
  life: 100,
  w: 8,
  h: 8,
  home: 0.3,
  col: "#b0ff90",
  el: "shadow"
};
const _0x50f207 = {
  t: 10,
  k: "proj",
  p: _0x162c20,
  m: 0.6,
  n: 5,
  spread: 30,
  ang: -60
};
const _0x1d210b = {
  dur: 28,
  pose: [[0, "castUp"], [10, "cast"]],
  ev: [_0x25cf25, _0x3d6edc, _0x50f207]
};
const _0x5369c6 = {
  name: "영혼 폭발",
  desc: "주변에 영혼 폭발을 일으키고 추적하는 영혼탄 5발을 흩뿌린다.",
  cd: 8,
  act: _0x1d210b
};
const _0x239de5 = {
  t: 4,
  k: "sfx",
  s: "crumble"
};
const _0x53c5c3 = {
  vis: "void",
  w: 90,
  h: 30,
  life: 80,
  tick: 10,
  m: 0.35,
  pull: 0.7,
  el: "shadow"
};
const _0x5aa177 = {
  t: 4,
  k: "field",
  f: _0x53c5c3,
  dx: 30,
  ground: !0
};
const _0x5ac3d1 = {
  t: 4,
  k: "hit",
  box: [-10, -20, 80, 30],
  m: 1.2,
  up: -3,
  hs: 5
};
const _0xdc5d96 = {
  dur: 22,
  pose: [[0, "castUp"]],
  inv: [0, 10],
  ev: [_0x239de5, _0x5aa177, _0x5ac3d1]
};
const _0x5a58b6 = {
  name: "교대: 사자의 손",
  desc: "땅에서 사자의 손이 솟아 적을 끌어당기며 피해를 준다.",
  act: _0xdc5d96
};
const _0x5e06e3 = {
  kind: "skeleton",
  life: 480,
  m: 0.5,
  max: 4
};
const _0x4934c0 = {
  k: "summon",
  s: _0x5e06e3
};
const _0x377d42 = {
  on: "kill",
  chance: 0.2,
  do: [_0x4934c0]
};
const _0x108d84 = {
  name: "사자의 군세",
  desc: "처치 시 20% 확률로 해골 전사 소환 (최대 4기)",
  effects: [_0x377d42]
};
const _0x1381bf = {
  target: "skill1",
  count: 1
};
const _0x3360d2 = {
  desc: "사자 소환 수 +1",
  mods: [_0x1381bf]
};
const _0x3c17fa = {
  target: "skill2",
  count: 3
};
const _0x3e7795 = {
  desc: "영혼 폭발 영혼탄 +3",
  mods: [_0x3c17fa]
};
const _0x3275a1 = {
  cdr: 0.15
};
const _0x394202 = {
  stats: _0x3275a1
};
const _0x56b398 = {
  desc: "스킬 쿨타임 -15%",
  effects: [_0x394202]
};
const _0x534dfd = {
  target: "skill1",
  dmg: 0.4
};
const _0x1fa24b = {
  desc: "소환수 피해 +40%",
  mods: [_0x534dfd]
};
const _0x352e11 = {
  k: "heal",
  v: 0.01
};
const _0x1efbad = {
  on: "kill",
  do: [_0x352e11]
};
const _0x48337a = {
  target: "all",
  dmg: 0.2
};
const _0xcd068e = {
  desc: "처치 시 체력 1% 회복, 모든 기술 피해 +20%",
  effects: [_0x1efbad],
  mods: [_0x48337a]
};
const _0x2483c3 = {
  skin: "#f0d0b8",
  hair: "#f0f0ff",
  hairStyle: "spiky",
  body: "#2a4a8a",
  trim: "#80d8ff",
  legs: "#2a2a4a",
  boots: "#1a1a3a",
  cape: "#4a6aaa",
  eye: "#40a0ff",
  weapon: "spear",
  wcol: "#c0e8ff",
  wcol2: "#5a4a3a",
  build: "slim"
};
const _0x62b08e = {
  arc: "thrust",
  r: 38
};
const _0x37b816 = {
  dur: 17,
  t: 5,
  m: 0.7,
  box: [0, -8, 42, 12],
  w: "thrustWind",
  s: "thrust",
  fx: _0x62b08e,
  hs: 3,
  lunge: 2
};
const _0xb5e373 = {
  arc: "thrust",
  r: 38
};
const _0x51411d = {
  dur: 17,
  t: 5,
  m: 0.7,
  box: [0, -8, 42, 12],
  w: "thrustWind",
  s: "thrust",
  fx: _0xb5e373,
  hs: 3,
  lunge: 2
};
const _0x523cb6 = {
  arc: "up",
  r: 26
};
const _0x2fa471 = {
  dur: 20,
  t: 6,
  m: 0.8,
  box: [-6, -20, 40, 30],
  w: "windLow",
  s: "slashUp",
  fx: _0x523cb6,
  up: -3,
  hs: 3
};
const _0x1fd468 = {
  arc: "thrust",
  r: 44,
  col: "#c0f0ff"
};
const _0x165328 = {
  t: 10,
  k: "sfx",
  s: "thunder"
};
const _0x504365 = {
  dur: 28,
  t: 10,
  m: 1.3,
  box: [0, -8, 48, 14],
  w: "thrustWind",
  s: "thrust",
  fx: _0x1fd468,
  kb: 4,
  hs: 6,
  fin: !0,
  el: "thunder",
  st: "shock",
  lunge: 4,
  extra: [_0x165328]
};
const _0x4f56fb = {
  t: 2,
  k: "plunge",
  vy: 7,
  m: 1.2,
  r: 24,
  el: "thunder",
  st: "shock"
};
const _0x5e232b = {
  dur: 60,
  pose: [[0, "thrust"]],
  landEnd: !0,
  airOk: !0,
  ev: [_0x4f56fb]
};
const _0x204326 = {
  arc: "thrust",
  r: 46
};
const _0x1166e9 = {
  dur: 22,
  t: 5,
  m: 1.1,
  box: [0, -8, 50, 14],
  w: "thrustWind",
  s: "thrust",
  fx: _0x204326,
  lunge: 6,
  kb: 3,
  hs: 4
};
const _0x14234c = {
  t: 3,
  k: "sfx",
  s: "thunder"
};
const _0x41d3d6 = {
  arc: "thrust",
  r: 40,
  col: "#c0f0ff"
};
const _0x1ad50d = {
  t: 7,
  k: "hit",
  box: [-40, -12, 56, 22],
  m: 1.6,
  el: "thunder",
  st: "shock",
  kb: 2,
  hs: 4,
  fx: _0x41d3d6
};
const _0x4b370d = {
  vis: "thunder",
  w: 110,
  h: 16,
  life: 90,
  tick: 15,
  m: 0.25,
  el: "thunder",
  st: "shock"
};
const _0x475afb = {
  t: 4,
  k: "field",
  f: _0x4b370d,
  dx: 50,
  ground: !0
};
const _0x59c9f3 = {
  dur: 26,
  pose: [[0, "thrustWind"], [3, "thrust"]],
  move: [[3, 11], [13, 0]],
  inv: [0, 16],
  ev: [_0x14234c, _0x1ad50d, _0x475afb]
};
const _0x4c542e = {
  name: "뇌전 돌격",
  desc: "번개가 되어 전방을 관통한다. 지나간 자리에 전류가 흐른다.",
  cd: 7,
  act: _0x59c9f3
};
const _0x3f6a29 = {
  r: 34,
  m: 2.2,
  el: "thunder",
  st: "shock"
};
const _0x2713a6 = {
  spr: "spear",
  spd: 8,
  life: 50,
  w: 20,
  h: 4,
  col: "#c0e8ff",
  pierce: 99,
  kb: 3,
  boom: _0x3f6a29
};
const _0x5c8360 = {
  dur: 26,
  t: 10,
  m: 1.2,
  p: _0x2713a6,
  w: "windHigh",
  s: "throw",
  sfx: "swing_heavy"
};
const _0x3c8abd = {
  t: 6,
  k: "sfx",
  s: "thunder"
};
const _0x47cc74 = {
  t: 6,
  k: "nova",
  r: 44,
  m: 1.4,
  el: "thunder",
  st: "shock",
  up: -2
};
const _0x5c1268 = {
  t: 7,
  k: "chain",
  n: 5,
  m: 0.9
};
const _0x56b75e = {
  t: 6,
  k: "shake",
  v: 3
};
const _0x43c1c9 = {
  dur: 24,
  pose: [[0, "castUp"], [6, "slam"]],
  inv: [0, 10],
  ev: [_0x3c8abd, _0x47cc74, _0x5c1268, _0x56b75e]
};
const _0x4d4e75 = {
  name: "교대: 번개 강림",
  desc: "번개와 함께 내려와 주변 적에게 연쇄 번개를 퍼뜨린다.",
  act: _0x43c1c9
};
const _0x248df3 = {
  k: "status",
  s: "shock"
};
const _0x1cd390 = {
  on: "hit",
  chance: 0.1,
  do: [_0x248df3]
};
const _0x5287f9 = {
  vsShock: 0.1
};
const _0x5b5c38 = {
  stats: _0x5287f9
};
const _0x2569da = {
  name: "뇌전 체질",
  desc: "공격 시 10% 확률로 감전. 감전 대상에게 주는 피해 +10%",
  effects: [_0x1cd390, _0x5b5c38]
};
const _0x320935 = {
  target: "skill1",
  dmg: 0.3
};
const _0x33a705 = {
  desc: "뇌전 돌격 피해 +30%",
  mods: [_0x320935]
};
const _0x12f4ac = {
  k: "status",
  s: "shock"
};
const _0xad6f10 = {
  on: "hit",
  chance: 0.1,
  do: [_0x12f4ac]
};
const _0x12b560 = {
  desc: "감전 확률 강화: 공격 시 추가 10% 감전",
  effects: [_0xad6f10]
};
const _0x23a303 = {
  target: "skill2",
  cd: 2
};
const _0x49cc9b = {
  desc: "낙뢰창 쿨타임 -2초",
  mods: [_0x23a303]
};
const _0x1bdb6a = {
  k: "chain",
  n: 3,
  m: 0.6
};
const _0x5f44b7 = {
  on: "finisher",
  do: [_0x1bdb6a]
};
const _0x28d945 = {
  desc: "콤보 마지막 타격에 연쇄 번개",
  effects: [_0x5f44b7]
};
const _0x477c8d = {
  target: "all",
  dmg: 0.2
};
const _0x3fcb85 = {
  desc: "모든 기술 피해 +20%",
  mods: [_0x477c8d]
};
const _0xdcbada = {
  skin: "#d8b090",
  hair: "#505060",
  hairStyle: "helm",
  body: "#5a5a6a",
  trim: "#b08a3a",
  legs: "#3a3a4a",
  boots: "#2a2a32",
  cape: "#4a1a1a",
  eye: "#ff4a2a",
  weapon: "greatsword",
  wcol: "#c0c4d0",
  wcol2: "#6a3a2a",
  build: "big"
};
const _0x237640 = {
  arc: "h",
  r: 34
};
const _0x6891d5 = {
  dur: 32,
  t: 13,
  m: 1.5,
  box: [-6, -24, 50, 36],
  w: "windHigh",
  s: "slashDown",
  fx: _0x237640,
  hs: 6,
  kb: 3,
  armor: !0,
  sfx: "swing_heavy",
  lunge: 2,
  shake: 2
};
const _0x2d6775 = {
  arc: "slam",
  r: 32
};
const _0x4e9b98 = {
  dur: 34,
  t: 14,
  m: 1.7,
  box: [0, -30, 46, 42],
  w: "slamWind",
  s: "slam",
  fx: _0x2d6775,
  hs: 7,
  up: -2,
  armor: !0,
  sfx: "swing_heavy",
  lunge: 2,
  shake: 3
};
const _0x49d4dd = {
  arc: "spin",
  r: 40
};
const _0x239629 = {
  dur: 44,
  t: 18,
  m: 2.7,
  box: [-30, -28, 80, 42],
  w: "spin",
  s: "slashDown",
  fx: _0x49d4dd,
  hs: 10,
  kb: 6,
  up: -3,
  armor: !0,
  fin: !0,
  sfx: "swing_heavy",
  shake: 5,
  lunge: 3
};
const _0x227984 = {
  t: 4,
  k: "plunge",
  vy: 8,
  m: 1.8,
  r: 36
};
const _0x366ecc = {
  dur: 70,
  pose: [[0, "slamWind"], [6, "slam"]],
  landEnd: !0,
  airOk: !0,
  armor: !0,
  ev: [_0x227984]
};
const _0x254750 = {
  arc: "thrust",
  r: 20
};
const _0x2c6155 = {
  dur: 26,
  t: 6,
  m: 1.3,
  box: [0, -16, 34, 26],
  w: "dash",
  s: "guard",
  fx: _0x254750,
  lunge: 6,
  kb: 6,
  hs: 5,
  armor: !0
};
const _0x1e52c6 = {
  t: 12,
  k: "sfx",
  s: "swing_heavy"
};
const _0x50793c = {
  arc: "slam",
  r: 30
};
const _0x501d34 = {
  t: 14,
  k: "hit",
  box: [0, -20, 40, 32],
  m: 1.4,
  up: -3,
  hs: 6,
  shake: 4,
  fx: _0x50793c
};
const _0x263ea5 = {
  spr: "wave",
  spd: 4.5,
  life: 50,
  w: 16,
  h: 22,
  col: "#ffb080",
  pierce: 99,
  kb: 3,
  up: -3,
  ground: !0
};
const _0x4af634 = {
  t: 14,
  k: "proj",
  p: _0x263ea5,
  m: 1.6,
  dx: 20,
  dy: 0
};
const _0x244555 = {
  dur: 36,
  pose: [[0, "slamWind"], [14, "slam"]],
  armor: !0,
  ev: [_0x1e52c6, _0x501d34, _0x4af634]
};
const _0x2fb419 = {
  name: "대지 가르기",
  desc: "대검으로 땅을 내리쳐 전방으로 뻗어나가는 충격파를 일으킨다.",
  cd: 7,
  act: _0x244555
};
const _0xf563e3 = {
  t: 4,
  k: "sfx",
  s: "skill"
};
const _0x3e653b = {
  t: 24,
  k: "sfx",
  s: "swing_heavy"
};
const _0x839757 = {
  arc: "slam",
  r: 44,
  col: "#ffd0a0"
};
const _0x28271f = {
  t: 26,
  k: "hit",
  box: [-10, -40, 64, 52],
  m: 4.8,
  kb: 5,
  up: -5,
  hs: 14,
  shake: 8,
  fx: _0x839757
};
const _0x18af51 = {
  t: 26,
  k: "sfx",
  s: "explode"
};
const _0x32e337 = {
  dur: 52,
  pose: [[0, "slamWind"], [26, "slam"]],
  armor: !0,
  ev: [_0xf563e3, _0x3e653b, _0x28271f, _0x18af51]
};
const _0x31cd8f = {
  name: "처형",
  desc: "긴 준비 끝에 모든 것을 짓누르는 일격을 내리친다. 시전 중 경직 무시.",
  cd: 11,
  act: _0x32e337
};
const _0x31e5e7 = {
  t: 10,
  k: "plunge",
  vy: 9,
  m: 2.6,
  r: 46
};
const _0x5a08a0 = {
  dur: 60,
  pose: [[0, "slamWind"], [10, "slam"]],
  move: [[0, 2, -5]],
  landEnd: !0,
  airOk: !0,
  armor: !0,
  inv: [0, 20],
  ev: [_0x31e5e7]
};
const _0x49ed50 = {
  name: "교대: 대검 낙하",
  desc: "공중에서 대검과 함께 떨어져 착지 지점을 분쇄한다.",
  act: _0x5a08a0
};
const _0x416d66 = {
  atk: 0.25
};
const _0xa42c20 = {
  cond: "lowHp",
  stats: _0x416d66
};
const _0x3b952e = {
  name: "몰락의 분노",
  desc: "모든 공격이 경직되지 않는다. 체력 50% 이하일 때 공격력 +25%",
  effects: [_0xa42c20]
};
const _0x122f6c = {
  target: "skill1",
  dmg: 0.3
};
const _0x38c93f = {
  desc: "대지 가르기 피해 +30%",
  mods: [_0x122f6c]
};
const _0x121cbb = {
  maxHp: 30
};
const _0x1f9efa = {
  stats: _0x121cbb
};
const _0x2c780a = {
  desc: "최대 체력 +30",
  effects: [_0x1f9efa]
};
const _0x5b2d06 = {
  target: "skill2",
  cd: 3
};
const _0x456a55 = {
  desc: "처형 쿨타임 -3초",
  mods: [_0x5b2d06]
};
const _0x19624e = {
  aspd: 0.12
};
const _0x321b2d = {
  stats: _0x19624e
};
const _0x58d30a = {
  desc: "공격 속도 +12%",
  effects: [_0x321b2d]
};
const _0x267ef1 = {
  target: "all",
  dmg: 0.25
};
const _0x205820 = {
  desc: "모든 기술 피해 +25%",
  mods: [_0x267ef1]
};
const _0x32f539 = {
  skin: "#e8d0c8",
  hair: "#2a1a3a",
  hairStyle: "veil",
  body: "#2a2040",
  trim: "#9a6bff",
  legs: "#1a1428",
  boots: "#100c18",
  cape: "#3a2a5a",
  eye: "#c0a0ff",
  weapon: "daggers",
  wcol: "#d0d0e8",
  wcol2: "#4a3a5a",
  build: "slim",
  extra: "scarf"
};
const _0x2b800b = {
  arc: "down",
  r: 14
};
const _0x1de37a = {
  dur: 11,
  t: 3,
  m: 0.42,
  box: [0, -12, 24, 18],
  w: "guard",
  s: "slashDown",
  fx: _0x2b800b,
  hs: 2,
  lunge: 2
};
const _0x27cb19 = {
  arc: "up",
  r: 14
};
const _0x434a41 = {
  dur: 11,
  t: 3,
  m: 0.42,
  box: [0, -12, 24, 18],
  w: "windLow",
  s: "slashUp",
  fx: _0x27cb19,
  hs: 2,
  lunge: 2
};
const _0x14cd2d = {
  arc: "thrust",
  r: 18
};
const _0x3b8751 = {
  dur: 12,
  t: 4,
  m: 0.48,
  box: [0, -10, 26, 16],
  w: "thrustWind",
  s: "thrust",
  fx: _0x14cd2d,
  hs: 2,
  lunge: 2.5
};
const _0x17df62 = {
  arc: "spin",
  r: 18
};
const _0x5ac8f4 = {
  dur: 13,
  t: 4,
  m: 0.5,
  box: [-10, -14, 38, 22],
  w: "spin",
  s: "slashDown",
  fx: _0x17df62,
  hs: 2,
  lunge: 1
};
const _0x4e29b8 = {
  arc: "x",
  r: 20
};
const _0xb49a62 = {
  dur: 22,
  t: 7,
  m: 1.1,
  box: [-2, -16, 32, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x4e29b8,
  hs: 5,
  kb: 4,
  fin: !0,
  lunge: 4
};
const _0x12bd00 = {
  arc: "spin",
  r: 16
};
const _0x5beb49 = {
  dur: 15,
  t: 4,
  m: 0.55,
  box: [-14, -16, 36, 30],
  w: "spin",
  s: "spin",
  fx: _0x12bd00,
  air: !0,
  grav: 0.25,
  hs: 2
};
const _0x526cf6 = {
  arc: "thrust",
  r: 34
};
const _0x5953b7 = {
  dur: 20,
  t: 4,
  m: 0.95,
  box: [-30, -12, 50, 20],
  w: "dash",
  s: "thrust",
  fx: _0x526cf6,
  lunge: 7,
  hs: 3,
  inv: [0, 8]
};
const _0x46b44a = {
  t: 2,
  k: "sfx",
  s: "dash"
};
const _0x46b271 = {
  t: 3,
  k: "tp",
  dx: 30,
  toEnemy: !0
};
const _0x519f75 = {
  arc: "x",
  r: 22,
  col: "#c0a0ff"
};
const _0x44d24b = {
  t: 8,
  k: "hit",
  box: [-6, -16, 34, 28],
  m: 2.2,
  kb: 3,
  hs: 7,
  el: "shadow",
  fx: _0x519f75
};
const _0x36d714 = {
  dur: 24,
  pose: [[0, "dash"], [6, "slashDown"]],
  inv: [0, 14],
  ev: [_0x46b44a, _0x46b271, _0x44d24b]
};
const _0x2b18d7 = {
  name: "그림자 순보",
  desc: "가장 가까운 적의 등 뒤로 순간이동해 급소를 벤다.",
  cd: 6,
  act: _0x36d714
};
const _0x5687e4 = {
  spr: "dagger",
  spd: 7,
  life: 40,
  w: 8,
  h: 4,
  col: "#d0d0e8",
  st: "bleed",
  kb: 1
};
const _0x4ca3de = {
  dur: 20,
  t: 6,
  m: 0.65,
  n: 5,
  spread: 10,
  p: _0x5687e4,
  w: "windHigh",
  s: "throw",
  sfx: "swing"
};
const _0x4f5e49 = {
  t: 0,
  k: "sfx",
  s: "dash"
};
const _0x390faa = {
  arc: "x",
  r: 24,
  col: "#c0a0ff"
};
const _0x11ec5a = {
  t: 6,
  k: "hit",
  box: [-60, -14, 76, 24],
  m: 1.8,
  kb: 2,
  hs: 6,
  el: "shadow",
  fx: _0x390faa
};
const _0x39b633 = {
  dur: 24,
  pose: [[0, "dash"], [8, "slashDown"]],
  move: [[0, 10], [10, 0]],
  inv: [0, 14],
  ev: [_0x4f5e49, _0x11ec5a]
};
const _0x3b3acc = {
  name: "교대: 그림자 습격",
  desc: "그림자에서 튀어나와 전방의 적들을 관통하며 벤다.",
  act: _0x39b633
};
const _0x1994b8 = {
  dashCharges: 1
};
const _0x32e96b = {
  flags: _0x1994b8
};
const _0xf09799 = {
  crit: 0.25
};
const definition_sien_p = {
  k: "buff",
  id: "sien_p",
  stats: _0xf09799,
  dur: 2
};
const _0x220971 = {
  on: "dash",
  do: [definition_sien_p]
};
const _0x3bcfde = {
  name: "그림자 걸음",
  desc: "대시 2회 충전. 대시 후 2초간 치명타 확률 +25%",
  effects: [_0x32e96b, _0x220971]
};
const _0x2318dc = {
  target: "skill1",
  dmg: 0.35
};
const _0x465c32 = {
  desc: "그림자 순보 피해 +35%",
  mods: [_0x2318dc]
};
const _0xca113 = {
  target: "skill2",
  count: 3
};
const _0x2959e0 = {
  desc: "단검 부채 단검 +3",
  mods: [_0xca113]
};
const _0x56d086 = {
  critDmg: 0.3
};
const _0x5a4edd = {
  stats: _0x56d086
};
const _0x37e311 = {
  desc: "치명타 피해 +30%",
  effects: [_0x5a4edd]
};
const _0x126495 = {
  target: "skill1",
  cd: 2
};
const _0x445ec3 = {
  desc: "그림자 순보 쿨타임 -2초",
  mods: [_0x126495]
};
const _0xfed517 = {
  k: "echo",
  m: 1
};
const _0xde3d36 = {
  on: "kill",
  icd: 0.5,
  do: [_0xfed517]
};
const _0x443b1a = {
  target: "all",
  dmg: 0.2
};
const _0x45fae7 = {
  desc: "처치 시 그림자 분신 공격, 모든 기술 피해 +20%",
  effects: [_0xde3d36],
  mods: [_0x443b1a]
};
const _0x210d53 = {
  skin: "#c8c0c8",
  hair: "#101014",
  hairStyle: "hood",
  body: "#18141c",
  trim: "#c02040",
  legs: "#100c14",
  boots: "#08060a",
  cape: "#200c14",
  eye: "#ff3050",
  weapon: "scythe",
  wcol: "#d8d8e0",
  wcol2: "#3a2a2a",
  build: "normal",
  extra: "chains"
};
const _0x335b53 = {
  arc: "h",
  r: 28,
  col: "#ff8090"
};
const _0x12870c = {
  dur: 18,
  t: 6,
  m: 0.65,
  box: [-18, -18, 54, 28],
  w: "windHigh",
  s: "slashDown",
  fx: _0x335b53,
  hs: 3,
  lunge: 1.5
};
const _0x581916 = {
  arc: "up",
  r: 28,
  col: "#ff8090"
};
const _0x4c9315 = {
  dur: 18,
  t: 6,
  m: 0.65,
  box: [-18, -22, 54, 32],
  w: "windLow",
  s: "slashUp",
  fx: _0x581916,
  hs: 3,
  lunge: 1.5
};
const _0x81e476 = {
  arc: "spin",
  r: 28,
  col: "#ff8090"
};
const _0x5b3cd4 = {
  dur: 20,
  t: 7,
  m: 0.75,
  box: [-24, -20, 60, 30],
  w: "spin",
  s: "slashDown",
  fx: _0x81e476,
  hs: 3,
  lunge: 2
};
const _0x4f0d61 = {
  arc: "spin",
  r: 32,
  col: "#ff5070"
};
const _0x189fbe = {
  dur: 30,
  times: [8, 15],
  m: 0.85,
  lastM: 1,
  lastKb: 5,
  box: [-28, -24, 64, 36],
  pose: [[0, "spin"], [8, "slashDown"], [12, "spin"], [15, "slashUp"]],
  fx: _0x4f0d61,
  st: "bleed",
  hs: 5,
  fin: !0,
  sfx: "swing_heavy"
};
const _0x290f6e = {
  arc: "spin",
  r: 26,
  col: "#ff8090"
};
const _0x3579af = {
  dur: 18,
  t: 5,
  m: 0.6,
  box: [-22, -22, 52, 40],
  w: "spin",
  s: "spin",
  fx: _0x290f6e,
  air: !0,
  grav: 0.25,
  hs: 2
};
const _0x3a75fa = {
  arc: "h",
  r: 30,
  col: "#ff8090"
};
const _0x21ef32 = {
  dur: 22,
  t: 5,
  m: 0.95,
  box: [-10, -16, 50, 24],
  w: "dash",
  s: "slashDown",
  fx: _0x3a75fa,
  lunge: 6,
  hs: 3,
  st: "bleed"
};
const _0x2a6865 = {
  t: 6,
  k: "sfx",
  s: "swing"
};
const _0x30e245 = {
  arc: "thrust",
  r: 90,
  col: "#c0c0c8"
};
const _0xbd7bd4 = {
  t: 9,
  k: "hit",
  box: [0, -12, 100, 18],
  m: 1.1,
  kb: -7,
  up: -2,
  hs: 5,
  st: "bleed",
  fx: _0x30e245
};
const _0x348173 = {
  dur: 28,
  pose: [[0, "windHigh"], [6, "throw"]],
  ev: [_0x2a6865, _0xbd7bd4]
};
const _0x29f055 = {
  name: "사슬 갈고리",
  desc: "사슬낫을 길게 던져 맞힌 적을 눈앞으로 끌어당긴다.",
  cd: 7,
  act: _0x348173
};
const _0x2d0157 = {
  arc: "spin",
  r: 34,
  col: "#ff5070"
};
const _0x8043f5 = {
  dur: 44,
  times: [6, 12, 18, 24, 30, 36],
  m: 0.5,
  lastM: 0.9,
  lastKb: 5,
  box: [-34, -22, 68, 34],
  pose: [[0, "spin"], [6, "slashUp"], [12, "spin"], [18, "slashDown"], [24, "spin"], [30, "slashUp"], [36, "spin"]],
  fx: _0x2d0157,
  st: "bleed",
  move: [[0, 1.4]],
  armor: !0,
  sfx: "swing_heavy"
};
const _0x4ae826 = {
  spr: "scythe",
  spd: 6,
  life: 70,
  w: 18,
  h: 18,
  col: "#d8d8e0",
  pierce: 99,
  ret: !0,
  st: "bleed",
  kb: 2,
  hs: 4
};
const _0x29dab4 = {
  dur: 22,
  t: 6,
  m: 1.3,
  inv: [0, 10],
  p: _0x4ae826,
  w: "windHigh",
  s: "throw",
  sfx: "swing_heavy"
};
const _0x13f6a8 = {
  k: "status",
  s: "bleed"
};
const _0x4a9fd9 = {
  on: "hit",
  chance: 0.15,
  do: [_0x13f6a8]
};
const _0x1ce5b7 = {
  k: "heal",
  v: 0.03
};
const _0x234c49 = {
  on: "kill",
  need: "bleed",
  do: [_0x1ce5b7]
};
const _0x4598a4 = {
  name: "수확자",
  desc: "공격 시 15% 확률로 출혈. 출혈 대상 처치 시 체력 3% 회복",
  effects: [_0x4a9fd9, _0x234c49]
};
const _0x24f58c = {
  target: "skill2",
  dmg: 0.3
};
const _0x4f2870 = {
  desc: "피의 수확 피해 +30%",
  mods: [_0x24f58c]
};
const _0x408dbd = {
  vsBleed: 0.2
};
const _0x537d74 = {
  stats: _0x408dbd
};
const _0x363161 = {
  desc: "출혈 대상에게 주는 피해 +20%",
  effects: [_0x537d74]
};
const _0xdbe6e4 = {
  target: "skill1",
  cd: 2
};
const _0x2d9867 = {
  desc: "사슬 갈고리 쿨타임 -2초",
  mods: [_0xdbe6e4]
};
const _0x3d8833 = {
  lifesteal: 0.03
};
const _0x28d408 = {
  stats: _0x3d8833
};
const _0x5ed7a4 = {
  desc: "흡혈 3%",
  effects: [_0x28d408]
};
const _0x2424c7 = {
  bleedRupture: 1
};
const _0x5972b9 = {
  flags: _0x2424c7
};
const _0x5c355c = {
  target: "all",
  dmg: 0.2
};
const _0x1c4914 = {
  desc: "출혈 5중첩 시 파열 (공격력 100%), 모든 기술 피해 +20%",
  effects: [_0x5972b9],
  mods: [_0x5c355c]
};
const _0x580849 = {
  skin: "#f8e0c8",
  hair: "#f0d070",
  hairStyle: "long",
  body: "#d8d8e8",
  trim: "#e0b040",
  legs: "#8a8aa0",
  boots: "#6a6a80",
  cape: "#2a4aa0",
  eye: "#3a6ad0",
  weapon: "mace",
  wcol: "#e0e0f0",
  wcol2: "#c0a040",
  shield: "#e0b040",
  build: "normal",
  extra: "halo"
};
const _0x1449fa = {
  arc: "down",
  r: 18,
  col: "#fff0a0"
};
const _0x37d549 = {
  dur: 20,
  t: 7,
  m: 0.85,
  box: [-2, -16, 28, 26],
  w: "windHigh",
  s: "slashDown",
  fx: _0x1449fa,
  hs: 4,
  lunge: 1.5,
  sfx: "swing"
};
const _0x4d1f28 = {
  arc: "thrust",
  r: 16,
  col: "#fff0a0"
};
const _0x5dc95f = {
  dur: 20,
  t: 6,
  m: 0.8,
  box: [0, -14, 24, 24],
  w: "guard",
  s: "thrust",
  fx: _0x4d1f28,
  kb: 5,
  hs: 4,
  lunge: 3
};
const _0x416ebd = {
  arc: "slam",
  r: 26,
  col: "#fff0a0"
};
const _0x5e15ae = {
  t: 12,
  k: "nova",
  r: 30,
  m: 0.5,
  el: "holy"
};
const _0x59c7dd = {
  dur: 30,
  t: 12,
  m: 1.5,
  box: [-10, -24, 44, 36],
  w: "slamWind",
  s: "slam",
  fx: _0x416ebd,
  up: -3,
  hs: 7,
  shake: 3,
  fin: !0,
  el: "holy",
  sfx: "swing_heavy",
  extra: [_0x5e15ae]
};
const _0x9df8a0 = {
  t: 2,
  k: "plunge",
  vy: 7,
  m: 1.3,
  r: 28,
  el: "holy"
};
const _0x336be2 = {
  dur: 60,
  pose: [[0, "guard"]],
  landEnd: !0,
  airOk: !0,
  ev: [_0x9df8a0]
};
const _0x128bbe = {
  arc: "thrust",
  r: 14,
  col: "#fff0a0"
};
const _0x51890a = {
  dur: 24,
  t: 5,
  m: 1,
  box: [0, -14, 26, 26],
  w: "guard",
  s: "guard",
  fx: _0x128bbe,
  lunge: 6,
  kb: 6,
  hs: 5,
  armor: !0
};
const _0x1422ae = {
  t: 0,
  k: "sfx",
  s: "shield"
};
const _0x37d999 = {
  t: 0,
  k: "counter",
  dur: 36,
  m: 3.2
};
const _0x2bdcb6 = {
  dur: 40,
  pose: [[0, "guard"]],
  armor: !0,
  ev: [_0x1422ae, _0x37d999]
};
const _0x45f872 = {
  name: "심판의 반격",
  desc: "방패를 세워 공격을 받아낸다. 받아내면 피해를 무효화하고 신성한 반격을 가한다.",
  cd: 5,
  act: _0x2bdcb6
};
const _0x2ccf15 = {
  t: 10,
  k: "sfx",
  s: "shield"
};
const _0x3ee65a = {
  t: 10,
  k: "shield",
  v: 0.25
};
const _0x2b77b3 = {
  t: 10,
  k: "nova",
  r: 70,
  m: 1.3,
  el: "holy",
  up: -3
};
const _0x2cc9aa = {
  t: 10,
  k: "shake",
  v: 3
};
const _0x371c25 = {
  dur: 30,
  pose: [[0, "castUp"], [10, "guard"]],
  ev: [_0x2ccf15, _0x3ee65a, _0x2b77b3, _0x2cc9aa]
};
const _0x3c67ef = {
  name: "성광",
  desc: "보호막(최대 체력 25%)을 두르고 주변에 성스러운 빛을 폭발시킨다.",
  cd: 10,
  act: _0x371c25
};
const _0x18b0f1 = {
  t: 8,
  k: "sfx",
  s: "hit_guard"
};
const _0xfac958 = {
  t: 8,
  k: "shield",
  v: 0.12
};
const _0x1b030e = {
  t: 8,
  k: "nova",
  r: 50,
  m: 1.5,
  el: "holy",
  up: -4
};
const _0x317fdc = {
  t: 8,
  k: "shake",
  v: 4
};
const _0x2a6488 = {
  dur: 26,
  pose: [[0, "slamWind"], [8, "slam"]],
  inv: [0, 12],
  ev: [_0x18b0f1, _0xfac958, _0x1b030e, _0x317fdc]
};
const _0x4a7b90 = {
  name: "교대: 수호의 강림",
  desc: "보호막을 두르고 내려찍어 주변 적을 띄운다.",
  act: _0x2a6488
};
const _0x35bcc3 = {
  k: "shield",
  v: 0.15
};
const _0x12d9f7 = {
  on: "roomStart",
  do: [_0x35bcc3]
};
const _0x153aaf = {
  dmgTaken: -0.15
};
const _0x564dcc = {
  cond: "shielded",
  stats: _0x153aaf
};
const _0x389bd2 = {
  name: "성역",
  desc: "방 입장 시 보호막(최대 체력 15%). 보호막이 있을 때 받는 피해 -15%",
  effects: [_0x12d9f7, _0x564dcc]
};
const _0x9c4fd5 = {
  target: "skill1",
  dmg: 0.4
};
const _0x25aff7 = {
  desc: "반격 피해 +40%",
  mods: [_0x9c4fd5]
};
const _0xb46753 = {
  maxHp: 40
};
const _0x56c700 = {
  stats: _0xb46753
};
const _0x23c12c = {
  desc: "최대 체력 +40",
  effects: [_0x56c700]
};
const _0x434b32 = {
  target: "skill2",
  cd: 2
};
const _0x199f19 = {
  desc: "성광 쿨타임 -2초",
  mods: [_0x434b32]
};
const _0x1dcd1d = {
  allDmg: 0.2
};
const _0x43712f = {
  cond: "shielded",
  stats: _0x1dcd1d
};
const _0x43717e = {
  desc: "보호막이 있을 때 주는 피해 +20%",
  effects: [_0x43712f]
};
const _0x1a1aaf = {
  hurtWave: 1.5
};
const _0x3ea3c7 = {
  flags: _0x1a1aaf
};
const _0x8deb55 = {
  target: "all",
  dmg: 0.2
};
const _0x290b53 = {
  desc: "피격 시 신성 파동, 모든 기술 피해 +20%",
  effects: [_0x3ea3c7],
  mods: [_0x8deb55]
};
const _0x26beab = {
  skin: "#f0e8f0",
  hair: "#a0c8f0",
  hairStyle: "witch",
  body: "#3a4a8a",
  trim: "#a8e4ff",
  legs: "#2a2a5a",
  boots: "#1a1a3a",
  cape: "#5a6ab0",
  eye: "#80e0ff",
  weapon: "clock",
  wcol: "#e0d090",
  wcol2: "#6a5a8a",
  build: "slim",
  glow: "#a8e4ff"
};
const _0x1533a0 = {
  spr: "shard",
  spd: 6,
  st: "chill",
  el: "frost"
};
const _0x3526be = {
  spr: "shard",
  spd: 6,
  st: "chill",
  el: "frost"
};
const _0x310804 = {
  spr: "shard",
  spd: 6,
  st: "chill",
  el: "frost",
  pierce: 1
};
const _0x13778e = {
  spr: "shard",
  spd: 6,
  st: "chill",
  el: "frost"
};
const _0x296c50 = {
  t: 0,
  k: "tp",
  dx: 46
};
const _0x3f432a = {
  t: 1,
  k: "sfx",
  s: "freeze"
};
const _0x15c0c0 = {
  t: 1,
  k: "nova",
  r: 30,
  m: 0.6,
  el: "frost",
  st: "chill"
};
const _0x39a886 = {
  dur: 18,
  pose: [[0, "cast"]],
  inv: [0, 8],
  ev: [_0x296c50, _0x3f432a, _0x15c0c0]
};
const _0x16d2f9 = {
  t: 8,
  k: "sfx",
  s: "timestop"
};
const _0x3964d4 = {
  t: 8,
  k: "timestop",
  dur: 2.5
};
const _0x54dee7 = {
  dur: 30,
  pose: [[0, "castUp"]],
  ev: [_0x16d2f9, _0x3964d4]
};
const _0x22f29e = {
  name: "시간 정지",
  desc: "2.5초간 주변 모든 적과 투사체의 시간을 멈춘다. 멈춘 동안 받은 피해는 그대로 쌓인다.",
  cd: 15,
  act: _0x54dee7
};
const _0x2fe183 = {
  t: 8,
  k: "sfx",
  s: "cast"
};
const _0x30fbc0 = {
  vis: "time",
  w: 100,
  h: 60,
  life: 240,
  tick: 20,
  m: 0.25,
  el: "frost",
  st: "chill",
  slow: !0
};
const _0x52f057 = {
  t: 8,
  k: "field",
  f: _0x30fbc0,
  dx: 50,
  dy: -20
};
const _0x5e18d1 = {
  dur: 24,
  pose: [[0, "castUp"], [8, "cast"]],
  ev: [_0x2fe183, _0x52f057]
};
const _0x34dd39 = {
  name: "역행의 시계",
  desc: "전방에 느린 시간의 장을 펼쳐 적을 둔화시키고 냉기를 쌓는다.",
  cd: 9,
  act: _0x5e18d1
};
const _0x4d8514 = {
  t: 5,
  k: "sfx",
  s: "freeze"
};
const _0x382d3e = {
  t: 5,
  k: "nova",
  r: 60,
  m: 1.3,
  el: "frost",
  st: "chill"
};
const _0x52d42a = {
  t: 7,
  k: "nova",
  r: 60,
  m: 0,
  st: "chill"
};
const _0x529f75 = {
  dur: 22,
  pose: [[0, "castUp"]],
  inv: [0, 10],
  ev: [_0x4d8514, _0x382d3e, _0x52d42a]
};
const _0xc390b8 = {
  name: "교대: 서리 시계탑",
  desc: "주변을 순식간에 얼려 냉기를 두 번 쌓는다.",
  act: _0x529f75
};
const _0x4ba81c = {
  k: "status",
  s: "chill"
};
const _0x24cfc8 = {
  on: "hit",
  chance: 0.12,
  do: [_0x4ba81c]
};
const _0x3bcdd1 = {
  vsFrozen: 0.15
};
const _0x83b6e3 = {
  stats: _0x3bcdd1
};
const _0x278b3e = {
  name: "정지된 초침",
  desc: "공격 시 12% 확률로 냉기. 빙결 대상에게 주는 피해 +15%",
  effects: [_0x24cfc8, _0x83b6e3]
};
const _0x53c9ef = {
  target: "skill2",
  size: 0.4
};
const _0x151fc0 = {
  desc: "역행의 시계 크기 +40%",
  mods: [_0x53c9ef]
};
const _0xab13ff = {
  target: "skill1",
  cd: 3
};
const _0x16b6a9 = {
  desc: "시간 정지 쿨타임 -3초",
  mods: [_0xab13ff]
};
const _0x3f0e40 = {
  target: "combo",
  count: 1
};
const _0x44910c = {
  desc: "기본 공격 얼음 조각 +1",
  mods: [_0x3f0e40]
};
const _0x3090bd = {
  freezeShatter: 1.8
};
const _0x4ebc4f = {
  flags: _0x3090bd
};
const _0x1c1512 = {
  desc: "빙결 해제 시 얼음 폭발",
  effects: [_0x4ebc4f]
};
const _0x285754 = {
  cdr: 0.15
};
const _0x39aa58 = {
  stats: _0x285754
};
const _0x3be6d2 = {
  target: "all",
  dmg: 0.2
};
const _0x3b1ca0 = {
  desc: "스킬 쿨타임 -15%, 모든 기술 피해 +20%",
  effects: [_0x39aa58],
  mods: [_0x3be6d2]
};
const _0xf7123b = {
  skin: "#f8e8f0",
  hair: "#e8e8f8",
  hairStyle: "crown",
  body: "#4a1a4a",
  trim: "#ff80d0",
  legs: "#2a0a2a",
  boots: "#1a081a",
  cape: "#8a1a5a",
  eye: "#ff4ab0",
  weapon: "rapier",
  wcol: "#f0d0ff",
  wcol2: "#d0a040",
  build: "slim",
  glow: "#ff80d0",
  extra: "chains"
};
const _0x862cc0 = {
  arc: "thrust",
  r: 28,
  col: "#ffc0e8"
};
const _0x559c34 = {
  dur: 13,
  t: 4,
  m: 0.6,
  box: [0, -10, 34, 12],
  w: "thrustWind",
  s: "thrust",
  fx: _0x862cc0,
  hs: 3,
  lunge: 2
};
const _0x472df2 = {
  arc: "up",
  r: 18,
  col: "#ffc0e8"
};
const _0x468c11 = {
  dur: 13,
  t: 4,
  m: 0.6,
  box: [0, -16, 30, 20],
  w: "windLow",
  s: "slashUp",
  fx: _0x472df2,
  hs: 3,
  lunge: 2
};
const _0x32eb18 = {
  arc: "thrust",
  r: 28,
  col: "#ffc0e8"
};
const _0x47ca46 = {
  dur: 14,
  t: 4,
  m: 0.7,
  box: [0, -10, 34, 12],
  w: "thrustWind",
  s: "thrust",
  fx: _0x32eb18,
  hs: 3,
  lunge: 2.5
};
const _0x588a47 = {
  arc: "thrust",
  r: 30,
  col: "#ff80d0"
};
const _0x29143e = {
  spr: "blade",
  spd: 6,
  life: 40,
  w: 12,
  h: 6,
  col: "#ff80d0",
  el: "shadow",
  pierce: 2,
  st: "bleed"
};
const _0x374653 = {
  t: 18,
  k: "proj",
  p: _0x29143e,
  m: 0.8
};
const _0x5cf5d3 = {
  dur: 30,
  times: [5, 9, 13, 18],
  m: 0.5,
  lastM: 1.2,
  lastKb: 5,
  box: [0, -12, 38, 16],
  pose: [[0, "thrust"], [7, "thrustWind"], [9, "thrust"], [12, "thrustWind"], [14, "thrust"]],
  fx: _0x588a47,
  el: "shadow",
  fin: !0,
  extra: [_0x374653]
};
const _0x23f0d7 = {
  arc: "thrust",
  r: 24,
  col: "#ffc0e8"
};
const _0x200c73 = {
  t: 2,
  k: "sfx",
  s: "swing"
};
const _0x12252a = {
  dur: 16,
  t: 4,
  m: 0.7,
  box: [0, -4, 30, 22],
  w: "thrustWind",
  s: "thrust",
  fx: _0x23f0d7,
  air: !0,
  grav: 0.3,
  hs: 3,
  extra: [_0x200c73]
};
const _0x2b1460 = {
  arc: "thrust",
  r: 40,
  col: "#ff80d0"
};
const _0x4bc1f4 = {
  dur: 20,
  t: 5,
  m: 1.3,
  box: [0, -10, 44, 14],
  w: "thrustWind",
  s: "thrust",
  fx: _0x2b1460,
  lunge: 7,
  hs: 5,
  el: "shadow"
};
const _0xb5ea68 = {
  t: 0,
  k: "sfx",
  s: "swing"
};
const _0x45616d = {
  t: 0,
  k: "counter",
  dur: 22,
  m: 4.2
};
const _0x3e1e66 = {
  dur: 30,
  pose: [[0, "guard"]],
  ev: [_0xb5ea68, _0x45616d]
};
const _0xdae885 = {
  name: "왕가의 패리",
  desc: "짧은 순간 모든 공격을 흘려낸다. 성공 시 피해 무효 + 저주의 일섬(공격력 420%).",
  cd: 4,
  act: _0x3e1e66
};
const _0x207425 = {
  t: 10,
  k: "sfx",
  s: "cast"
};
const _0xdaaed9 = {
  spr: "blade",
  spd: 4,
  life: 100,
  w: 12,
  h: 6,
  col: "#ff80d0",
  home: 0.3,
  el: "shadow",
  st: "bleed"
};
const _0xd7a6e8 = {
  t: 10,
  k: "proj",
  p: _0xdaaed9,
  m: 0.75,
  n: 6,
  spread: 25,
  ang: -60
};
const _0x1b06ed = {
  vis: "blood",
  w: 80,
  h: 20,
  life: 180,
  tick: 15,
  m: 0.3,
  st: "bleed",
  el: "shadow"
};
const _0x522ac0 = {
  t: 10,
  k: "field",
  f: _0x1b06ed,
  dx: 30,
  ground: !0
};
const _0x1057cc = {
  dur: 28,
  pose: [[0, "castUp"], [10, "cast"]],
  ev: [_0x207425, _0xd7a6e8, _0x522ac0]
};
const _0x263cae = {
  name: "저주 낙인",
  desc: "추적하는 저주의 칼날 여섯 자루와 저주의 장을 펼친다.",
  cd: 9,
  act: _0x1057cc
};
const _0x3e3ae0 = {
  t: 0,
  k: "tp",
  dx: 20,
  toEnemy: !0
};
const _0x3358d9 = {
  arc: "x",
  r: 26,
  col: "#ff80d0"
};
const _0x48056a = {
  t: 6,
  k: "hit",
  box: [-10, -18, 40, 30],
  m: 1.6,
  hs: 6,
  el: "shadow",
  fx: _0x3358d9
};
const _0x1ad826 = {
  t: 14,
  k: "nova",
  r: 46,
  m: 1.8,
  el: "shadow",
  st: "bleed",
  up: -3
};
const _0x5d1229 = {
  t: 14,
  k: "sfx",
  s: "explode"
};
const _0x3dae99 = {
  dur: 28,
  pose: [[0, "dash"], [6, "slashDown"], [14, "slashUp"]],
  inv: [0, 18],
  ev: [_0x3e3ae0, _0x48056a, _0x1ad826, _0x5d1229]
};
const _0x2da759 = {
  name: "교대: 몰락한 왕관",
  desc: "가장 가까운 적에게 순간이동해 X자로 베고 저주를 폭발시킨다.",
  act: _0x3dae99
};
const _0x4c8c09 = {
  hurtWave: 1.2
};
const _0x253d16 = {
  flags: _0x4c8c09
};
const _0x2f6784 = {
  allDmg: 0.3
};
const definition_seres_p = {
  k: "buff",
  id: "seres_p",
  stats: _0x2f6784,
  dur: 5
};
const _0x39cd79 = {
  on: "parry",
  do: [definition_seres_p]
};
const _0x3c7ff6 = {
  name: "저주의 왕관",
  desc: "반격 성공 시 5초간 모든 피해 +30%. 피격 시 저주 파동(공격력 120%)",
  effects: [_0x253d16, _0x39cd79]
};
const _0x1fad02 = {
  target: "skill1",
  dmg: 0.4
};
const _0x39bb8a = {
  desc: "패리 반격 피해 +40%",
  mods: [_0x1fad02]
};
const _0x256cd1 = {
  target: "skill2",
  count: 4
};
const _0x1703a2 = {
  desc: "저주 낙인 칼날 +4",
  mods: [_0x256cd1]
};
const _0x32e0d6 = {
  crit: 0.12
};
const _0xf67348 = {
  stats: _0x32e0d6
};
const _0x35ddd1 = {
  desc: "치명타 확률 +12%",
  effects: [_0xf67348]
};
const _0x126f1d = {
  target: "swap",
  dmg: 0.6
};
const _0x7677c9 = {
  desc: "교대 공격 피해 +60%",
  mods: [_0x126f1d]
};
const _0x29bc53 = {
  target: "all",
  dmg: 0.3
};
const _0xc5e4b9 = {
  lifesteal: 0.03
};
const _0xf710b5 = {
  stats: _0xc5e4b9
};
const _0x5e3846 = {
  desc: "모든 기술 피해 +30%, 흡혈 3%",
  mods: [_0x29bc53],
  effects: [_0xf710b5]
};
const _0x5c2a70 = {
  skin: "#d0a080",
  hair: "#2a0a0a",
  hairStyle: "horned",
  body: "#3a1010",
  trim: "#ff6a2a",
  legs: "#2a0a0a",
  boots: "#1a0505",
  cape: "#5a0a0a",
  eye: "#ffb02a",
  weapon: "lance",
  wcol: "#ff9a4a",
  wcol2: "#3a1a1a",
  build: "big",
  glow: "#ff6a2a",
  extra: "wings"
};
const _0x5f0f5a = {
  arc: "thrust",
  r: 40,
  col: "#ffb080"
};
const _0xbd2f88 = {
  dur: 20,
  t: 7,
  m: 1,
  box: [0, -10, 46, 16],
  w: "thrustWind",
  s: "thrust",
  fx: _0x5f0f5a,
  hs: 4,
  lunge: 3
};
const _0x32ad86 = {
  arc: "h",
  r: 32,
  col: "#ffb080"
};
const _0x283ffb = {
  dur: 22,
  t: 8,
  m: 1.1,
  box: [-14, -24, 54, 34],
  w: "windHigh",
  s: "slashDown",
  fx: _0x32ad86,
  hs: 4,
  lunge: 2
};
const _0x4bbb6c = {
  arc: "thrust",
  r: 42,
  col: "#ffb080"
};
const _0x2a67c0 = {
  dur: 24,
  times: [6, 12],
  m: 0.75,
  box: [0, -10, 48, 16],
  pose: [[0, "thrustWind"], [5, "thrust"], [9, "thrustWind"], [11, "thrust"]],
  fx: _0x4bbb6c,
  hs: 3,
  move: [[4, 2], [14, 0]]
};
const _0x316a85 = {
  arc: "x",
  r: 32,
  col: "#ff6a2a"
};
const _0x3947fa = {
  r: 26,
  m: 1,
  el: "fire",
  st: "burn"
};
const _0x2772e5 = {
  spr: "fireball",
  spd: 6,
  life: 50,
  w: 12,
  h: 10,
  col: "#ff6a2a",
  el: "fire",
  st: "burn",
  boom: _0x3947fa
};
const _0x9e29cc = {
  t: 12,
  k: "proj",
  p: _0x2772e5,
  m: 1.2
};
const _0x656834 = {
  dur: 34,
  t: 12,
  m: 2.1,
  box: [-4, -24, 52, 36],
  w: "slamWind",
  s: "thrust",
  fx: _0x316a85,
  kb: 6,
  up: -3,
  hs: 9,
  shake: 5,
  fin: !0,
  el: "fire",
  st: "burn",
  sfx: "swing_heavy",
  extra: [_0x9e29cc]
};
const _0x1e03d3 = {
  t: 3,
  k: "plunge",
  vy: 9,
  m: 2,
  r: 42,
  el: "fire",
  st: "burn"
};
const _0x22bdb2 = {
  dur: 70,
  pose: [[0, "thrust"]],
  landEnd: !0,
  airOk: !0,
  armor: !0,
  ev: [_0x1e03d3]
};
const _0xa60712 = {
  arc: "thrust",
  r: 48,
  col: "#ff6a2a"
};
const _0x2c43e1 = {
  dur: 24,
  t: 6,
  m: 1.5,
  box: [0, -10, 52, 16],
  w: "thrustWind",
  s: "thrust",
  fx: _0xa60712,
  lunge: 8,
  kb: 5,
  hs: 6,
  el: "fire",
  st: "burn",
  armor: !0
};
const _0x476de9 = {
  t: 8,
  k: "sfx",
  s: "burn"
};
const _0x1d5774 = {
  spr: "fireball",
  spd: 5,
  life: 26,
  w: 12,
  h: 12,
  col: "#ff6a2a",
  el: "fire",
  st: "burn",
  pierce: 99,
  kb: 0.5
};
const _0x526e9a = {
  t: 20,
  k: "sfx",
  s: "burn"
};
const _0x55fd09 = {
  t: 32,
  k: "sfx",
  s: "burn"
};
const _0x4dbef1 = {
  t: 0,
  k: "sfx",
  s: "skill"
};
const _0x4172ce = {
  t: 14,
  k: "plunge",
  vy: 10,
  m: 4.2,
  r: 64,
  el: "fire",
  st: "burn"
};
const _0x3e4a07 = {
  dur: 90,
  pose: [[0, "castUp"], [14, "slam"]],
  move: [[0, 1.5, -8]],
  landEnd: !0,
  airOk: !0,
  armor: !0,
  inv: [0, 40],
  ev: [_0x4dbef1, _0x4172ce]
};
const _0x3ac3d9 = {
  name: "혼돈 강하",
  desc: "하늘 높이 날아올라 혼돈의 불꽃과 함께 내리꽂힌다.",
  cd: 12,
  act: _0x3e4a07
};
const _0x5500e9 = {
  t: 0,
  k: "sfx",
  s: "dash"
};
const _0x4a955d = {
  arc: "thrust",
  r: 50,
  col: "#ff6a2a"
};
const _0x15e183 = {
  t: 6,
  k: "hit",
  box: [-50, -16, 70, 28],
  m: 2.4,
  kb: 5,
  up: -2,
  hs: 8,
  el: "fire",
  st: "burn",
  shake: 4,
  fx: _0x4a955d
};
const _0x21df44 = {
  vis: "fire",
  w: 100,
  h: 16,
  life: 120,
  tick: 15,
  m: 0.3,
  el: "fire",
  st: "burn"
};
const _0x31a815 = {
  t: 3,
  k: "field",
  f: _0x21df44,
  dx: 40,
  ground: !0
};
const _0x23c5f6 = {
  dur: 26,
  pose: [[0, "dash"], [4, "thrust"]],
  move: [[0, 9], [14, 0]],
  inv: [0, 16],
  armor: !0,
  ev: [_0x5500e9, _0x15e183, _0x31a815]
};
const _0x5eff4f = {
  name: "교대: 용익 돌진",
  desc: "날개를 펼치고 화염과 함께 전방으로 돌진한다.",
  act: _0x23c5f6
};
const _0x4ef16f = {
  atk: 0.15,
  vsBurn: 0.15
};
const _0x2f5c2a = {
  extraJump: 1
};
const _0x2e1c46 = {
  stats: _0x4ef16f,
  flags: _0x2f5c2a
};
const _0xfac8f3 = {
  name: "용의 피",
  desc: "공격력 +15%, 추가 점프 +1. 화상 대상에게 주는 피해 +15%",
  effects: [_0x2e1c46]
};
const _0x2a16fc = {
  target: "skill1",
  dmg: 0.3
};
const _0x560302 = {
  desc: "용의 숨결 피해 +30%",
  mods: [_0x2a16fc]
};
const _0x526471 = {
  maxHp: 40
};
const _0x10c5fc = {
  stats: _0x526471
};
const _0x52c720 = {
  desc: "최대 체력 +40",
  effects: [_0x10c5fc]
};
const _0x3faace = {
  target: "skill2",
  cd: 3
};
const _0x5a0ef3 = {
  desc: "혼돈 강하 쿨타임 -3초",
  mods: [_0x3faace]
};
const _0x279c7f = {
  burnSpread: 1.4
};
const _0x559f45 = {
  flags: _0x279c7f
};
const _0x274929 = {
  desc: "화상 대상 처치 시 폭발",
  effects: [_0x559f45]
};
const _0x4a4c8a = {
  target: "all",
  dmg: 0.3
};
const _0x72c43a = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x4a4c8a]
};
const _0x4031c7 = {
  skin: "#f8e8d8",
  hair: "#3a3a8a",
  hairStyle: "long",
  body: "#1a1a4a",
  trim: "#ffe680",
  legs: "#14143a",
  boots: "#0a0a2a",
  cape: "#2a2a6a",
  eye: "#ffe680",
  weapon: "orb",
  wcol: "#ffe680",
  wcol2: "#a0a0ff",
  build: "slim",
  glow: "#ffe680",
  extra: "halo"
};
const _0x5b9cf0 = {
  home: 0
};
const _0x51236f = {
  home: 0
};
const _0x3030c6 = {
  pierce: 1
};
const _0xefc0b = {
  home: 0
};
const _0x322ec5 = {
  t: 6,
  k: "nova",
  r: 32,
  m: 0.9,
  el: "holy"
};
const _0x4f8b8b = {
  t: 6,
  k: "sfx",
  s: "cast"
};
const _0x2f9879 = {
  dur: 18,
  pose: [[0, "dash"], [6, "cast"]],
  move: [[0, 4], [10, 0]],
  inv: [0, 8],
  ev: [_0x322ec5, _0x4f8b8b]
};
const _0x4f1f16 = {
  t: 8,
  k: "sfx",
  s: "cast"
};
const _0x24401e = {
  t: 10,
  k: "meteor",
  n: 7,
  m: 1.1,
  spread: 110,
  el: "holy"
};
const _0x56de00 = {
  dur: 30,
  pose: [[0, "castUp"]],
  ev: [_0x4f1f16, _0x24401e]
};
const _0x296dd8 = {
  name: "유성우",
  desc: "전방 넓은 범위에 유성 일곱 개를 떨어뜨린다.",
  cd: 9,
  act: _0x56de00
};
const _0x2a5615 = {
  t: 8,
  k: "sfx",
  s: "gem"
};
const _0x39ea79 = {
  kind: "star",
  life: 480,
  m: 0.5,
  max: 6
};
const _0x546f4c = {
  t: 8,
  k: "summon",
  s: _0x39ea79,
  n: 3
};
const _0x7affe2 = {
  dur: 24,
  pose: [[0, "castUp"]],
  ev: [_0x2a5615, _0x546f4c]
};
const _0x10a137 = {
  name: "수호 위성",
  desc: "주위를 공전하며 적을 쏘는 별 위성 3개를 소환한다 (8초).",
  cd: 12,
  act: _0x7affe2
};
const _0xcc6365 = {
  t: 4,
  k: "sfx",
  s: "cast"
};
const _0x5d8093 = {
  t: 6,
  k: "meteor",
  n: 1,
  m: 4.2,
  spread: 0,
  el: "holy",
  big: !0
};
const _0x4bebc1 = {
  dur: 26,
  pose: [[0, "castUp"]],
  inv: [0, 12],
  ev: [_0xcc6365, _0x5d8093]
};
const _0x331711 = {
  name: "교대: 초신성",
  desc: "거대한 별을 떨어뜨려 넓은 범위를 폭파한다.",
  act: _0x4bebc1
};
const _0x4c6f03 = {
  skillDmg: 0.25
};
const _0x42d384 = {
  stats: _0x4c6f03
};
const _0x553b87 = {
  k: "meteor",
  m: 1.5
};
const _0x470433 = {
  on: "interval",
  every: 6,
  do: [_0x553b87]
};
const _0x29f444 = {
  name: "별자리",
  desc: "스킬 피해 +25%. 6초마다 가장 가까운 적에게 별 낙하 (공격력 150%)",
  effects: [_0x42d384, _0x470433]
};
const _0x45f694 = {
  target: "skill1",
  count: 3
};
const _0x329af4 = {
  desc: "유성우 유성 +3",
  mods: [_0x45f694]
};
const _0x4a01ad = {
  target: "skill2",
  count: 2
};
const _0x170bb2 = {
  desc: "수호 위성 +2",
  mods: [_0x4a01ad]
};
const _0x116567 = {
  cdr: 0.15
};
const _0x5d6eef = {
  stats: _0x116567
};
const _0x49b092 = {
  desc: "스킬 쿨타임 -15%",
  effects: [_0x5d6eef]
};
const _0x5b8a9a = {
  target: "swap",
  dmg: 0.5
};
const _0x36590a = {
  desc: "초신성 피해 +50%",
  mods: [_0x5b8a9a]
};
const _0x5c9904 = {
  target: "all",
  dmg: 0.3
};
const _0x42b4be = {
  desc: "모든 기술 피해 +30%",
  mods: [_0x5c9904]
};
const w = _0x5c8796, ha = "caelus_compass", pa = "aurel_sun", ua = "jax_oath", ka = [{
  "id": "caelus",
  "name": "카일루스",
  "title": "별의 나침반을 쥔 검사",
  "rarity": 7,
  "type": "speed",
  "crest": "soul",
  "lore": "하늘에서 떨어진 별의 나침반을 주운 검사. 나침반이 가리키는 곳마다 별빛이 칼날이 되어 내려앉는다.",
  "atk": 70,
  "hp": 300,
  "speed": 2.25,
  "fx": "#8a9aff",
  "look": _0x246277,
  "combo": [l(_0x2cbab5), l(_0x5348d6), l(_0x541e5e), _0x575406],
  "air": l(_0x25b96b),
  "dashAtk": l(_0x53b41e),
  "skills": [_0x236060, {
    "name": "천구 나침반",
    "desc": "발밑에 별의 나침반을 펼쳐 8초간 공격 속도 +60%, 공격력 2배(+100%).",
    "cd": 14,
    "act": {
      "dur": 24,
      "pose": [[0, "cast"], [6, "castUp"]],
      "ev": [_0x473c93, _0x3e785a, {
        "t": 8,
        "k": "buff",
        "id": ha,
        "stats": _0x55fc2e,
        "dur": 8
      }]
    }
  }],
  "ult": _0x4be1ca,
  "swap": _0x443e87,
  "passive": _0x1cf291,
  "awaken": [_0x3ba4f5, _0x580972, _0x10a718, _0x2c7633, _0x325a1e]
}, {
  "id": "astral",
  "name": "아스트랄 나이트",
  "title": "별의 경계에서, 너와 나",
  "rarity": 7,
  "type": "magic",
  "crest": "soul",
  "lore": "별과 별 사이의 경계를 지키는 기사. 별의 지팡이로 그은 자리마다 하늘이 열리고, 그 너머의 별빛이 쏟아진다.",
  "atk": 70,
  "hp": 300,
  "speed": 2.15,
  "fx": "#a890ff",
  "look": _0x5935c7,
  "combo": [d(_0x592410), d(_0x3daa4a), d(_0x1cca70), _0x47dd15],
  "air": d(_0x51122c),
  "dashAtk": _0x348cac,
  "skills": [_0x54f0ac, _0x50d0d6],
  "ult": _0x3b7b6d,
  "swap": _0x2d9883,
  "passive": _0x121205,
  "awaken": [_0xa1b062, _0x2d1992, _0x386044, _0x38de04, _0x20fdf3]
}, {
  "id": "solen",
  "name": "솔렌",
  "title": "세계를 비추는 별의 계승자",
  "rarity": 6,
  "type": "speed",
  "crest": "soul",
  "lore": "「…별은 사라지지 않아. 다만, 다른 세상으로 이어질 뿐.」 꺼져 가던 별의 빛을 이어받은 계승자. 곁에 떠도는 별의 구체가 그의 검을 비춘다.",
  "atk": 68,
  "hp": 282,
  "speed": 2.15,
  "fx": "#9ab4ff",
  "look": _0xdf805,
  "combo": [l(_0x150f39), l(_0x412718), l(_0x37a786), _0x266ae6],
  "air": l(_0x56032c),
  "dashAtk": l(_0x4017bd),
  "skills": [_0x3e234e, _0x408e39],
  "ult": _0x3e91e4,
  "swap": _0x535bfe,
  "passive": _0x23d2f8,
  "awaken": [_0x8a8b18, _0x1491f1, _0x2c6575, _0x30ab84, _0x463bac]
}, {
  "id": "lucas",
  "name": "루카스",
  "title": "별의 항해자",
  "rarity": 6,
  "type": "magic",
  "crest": "soul",
  "lore": "「…더 넓은 세상을, 함께 보자.」 별의 책에 적힌 항로를 따라 하늘을 항해하는 소년. 그가 책장을 넘기면 별의 바다에서 고래가 헤엄쳐 온다.",
  "atk": 68,
  "hp": 282,
  "speed": 2,
  "fx": "#7ab8ff",
  "look": _0x1af076,
  "combo": [d(_0x351d87), d(_0x52839c), _0x57bbb8],
  "air": d(_0x45d330),
  "dashAtk": _0xb76879,
  "skills": [_0x36a24b, _0x3de302],
  "ult": _0x431292,
  "swap": _0x1e19ca,
  "passive": _0x4ad4d6,
  "awaken": [_0x27f732, _0x362947, _0x2c83fb, _0x40cba0, _0x54bda0]
}, {
  "id": "enoch",
  "name": "에녹",
  "title": "잊혀진 심연의 학자",
  "rarity": 6,
  "type": "speed",
  "crest": "shadow",
  "lore": "「…모든 것은, 결국 어둠으로 돌아간다.」 금지된 심연의 서고에서 이름마저 지워진 학자. 곁을 맴도는 심연의 구체가 그의 칼날이 되어, 눈 깜짝할 사이에 적을 베어 낸다.",
  "atk": 68,
  "hp": 282,
  "speed": 2.3,
  "fx": "#8a6aff",
  "look": _0x3298dc,
  "combo": [l(_0x215e54), l(_0x534892), l(_0x38cfd2), l(_0x417809), _0x13d5ed],
  "air": l(_0x159286),
  "dashAtk": l(_0x289ad8),
  "skills": [{
    "name": "심연 난도질",
    "desc": "가까운 적의 정확한 위치로 순간이동해 2초간 35번 난도질한다 (35회 × 76% + 마무리 255%). 시전 내내 무적, 공중의 적에게 붙어도 떨어지지 않는다.",
    "cd": 9,
    "act": {
      "dur": 126,
      "grav": 0,
      "pose": [[0, "dash"], [3, "slashDown"], ...Array.from(_0x37874f, (_0x5f36d1, _0xe92b5) => [4 + Math.round(_0xe92b5 * 114 / 34), ["slashUp", "thrust", "spin", "slashDown"][_0xe92b5 % 4]]), [120, "slam"]],
      "inv": [0, 127],
      "move": [[0, 0]],
      "ev": [_0x4653b8, _0x60547f, _0x2d75da, _0x479c90, ...Array.from(_0x50948c, (_0x3845cd, _0x415e2) => {
        const _0x5168d8 = {
          YfwRE: function (_0x2f9fcc, _0x1fa9e6) {
            return _0x2f9fcc / _0x1fa9e6;
          },
          IDblS: "hit",
          Pifgx: "#8a6aff",
          GsyWo: "#c0a8ff",
          UKILt: function (_0x1be513, _0x313a4) {
            return _0x1be513 === _0x313a4;
          },
          mdWri: function (_0x5b4cf5, _0x476857) {
            return _0x5b4cf5 % _0x476857;
          },
          fNvAE: "sfx"
        };
        const _0x3494b4 = _0x5168d8, _0x317c35 = 4 + Math.round(_0x415e2 * 114 / 34), _0x4d9490 = ["down", "up", "x", "h"][_0x415e2 % 4], _0x24c95b = {};
        _0x24c95b.t = _0x317c35;
        _0x24c95b.k = _0x3494b4.IDblS;
        return (_0x24c95b.box = [-28, -26, 62, 40], _0x24c95b.m = 0.77, _0x24c95b.kb = 0, _0x24c95b.hs = 0, _0x24c95b.el = "shadow", _0x24c95b.fx = {}, _0x24c95b.fx.arc = _0x4d9490, _0x24c95b.fx.r = 26, _0x24c95b.fx.col = _0x415e2 % 2 ? _0x3494b4.Pifgx : _0x3494b4.GsyWo, [_0x24c95b, ..._0x415e2 % 4 === 0 ? [{
          "t": _0x317c35,
          "k": "pic",
          "name": _0x415e2 % 8 ? "enoch:arc2" : "enoch:arc",
          "dx": 10,
          "dy": -14,
          "s0": 30,
          "s1": 46,
          "life": 6
        }] : [], ..._0x415e2 % 3 === 0 ? [{
          "t": _0x317c35,
          "k": _0x3494b4.fNvAE,
          "s": "swing"
        }] : []]);
      }).flat(), _0x16fa81, _0x6f5261, _0x5042db, _0x3647d0]
    }
  }, {
    "name": "심연 돌파",
    "desc": "정면으로 길게 돌진하며 경로의 모든 적을 벤다 (5회 × 136%, 출혈). 돌진 중 무적.",
    "cd": 7,
    "act": {
      "dur": 26,
      "pose": [[0, "thrustWind"], [2, "dash"], [18, "thrust"]],
      "inv": [0, 20],
      "move": [[2, 12], [17, 0]],
      "ev": [_0xd942f8, _0x354b3d, ...[4, 7, 10, 13, 16].map(_0xa86740 => ({
        "t": _0xa86740,
        "k": "hit",
        "box": [-46, -18, 66, 30],
        "m": 1.36,
        "kb": 1,
        "hs": 1,
        "el": "shadow",
        "st": "bleed",
        "fx": _0x4388a7
      })), _0x28f161, _0x66e11]
    }
  }],
  "swap": _0x40b5eb,
  "passive": _0xf92fe4,
  "awaken": [_0x294ea3, _0x5a4631, _0x3b6f03, _0xef11f3, _0x231ef0]
}, {
  "id": "ashen",
  "name": "아셴",
  "title": "붉은 잿더미의 계승자",
  "rarity": 7,
  "type": "magic",
  "crest": "flame",
  "lore": "「…이 불꽃은, 이제 나의 것이다.」 모든 것이 타 버린 잿더미 위에서 마지막 불씨를 이어받은 계승자. 그가 손을 들면 하늘에서 붉은 창이 쏟아진다.",
  "atk": 70,
  "hp": 300,
  "speed": 2.15,
  "fx": "#ff3050",
  "look": _0x1cbec3,
  "combo": [d(_0x53e504), d(_0x18f072), _0x366548],
  "air": d(_0x128a96),
  "dashAtk": l(_0x28d840),
  "skills": [{
    "name": "잿불 창우",
    "desc": "머리 위 하늘에 성흔 구체 4개를 띄우고, 구체마다 붉은 창 3자루씩(모두 12자루)을 가까운 적들에게 대각선으로 사출한다 (각 110% + 폭발 60%, 화상).",
    "cd": 8,
    "act": {
      "dur": 44,
      "pose": [[0, "castUp"], [32, "cast"]],
      "inv": [0, 12],
      "ev": [_0x2ed564, ...[0, 1, 2, 3].map(_0x585953 => ({
        "t": 2 + _0x585953 * 2,
        "k": "pic",
        "name": "ashen:emblem",
        "dx": -44 + _0x585953 * 22,
        "dy": -70 - _0x585953 % 2 * 12,
        "s0": 10,
        "s1": 34,
        "life": 38 - _0x585953 * 2
      })), ...Array.from(_0x4d0018, (_0x376a78, _0x93df8) => {
        const _0x5d22ba = {
          vXnpR: function (_0x866a2c, _0x16f149) {
            return _0x866a2c + _0x16f149;
          }
        };
        (_0x5d22ba.SVOTr = function (_0x3c2b92, _0x2d3f85) {
          return _0x3c2b92 - _0x2d3f85;
        }, _0x5d22ba.TKLVX = "#ff3050", _0x5d22ba.dnLIG = "fire", _0x5d22ba.DhSke = "ashen:burst");
        const _0x32e891 = _0x5d22ba, _0x5b8240 = _0x93df8 % 4;
        const _0x21d0f8 = {
          r: 22,
          m: 0.6,
          el: "fire",
          col: "#ff3050"
        };
        const _0x198e8f = {};
        return (_0x198e8f.name = "ashen:spears", _0x198e8f.w = 26, _0x198e8f.rot = Math.PI / 2, {
          "t": 8 + _0x93df8 * 2,
          "k": "proj",
          "aim": !0,
          "dx": -44 + _0x5b8240 * 22,
          "dy": _0x32e891.SVOTr(-70, _0x5b8240 % 2 * 12),
          "m": 1.1,
          "p": {
            "spr": "spear",
            "spd": 8,
            "life": 70,
            "w": 12,
            "h": 12,
            "col": _0x32e891.TKLVX,
            "el": _0x32e891.dnLIG,
            "st": "burn",
            "pierce": 2,
            "boom": _0x21d0f8,
            "boomPic": {
              "name": _0x32e891.DhSke,
              "s0": 10,
              "s1": 44,
              "life": 12
            },
            "pic": _0x198e8f
          }
        });
      }), _0x454b23, _0x4842ca, _0xe7db8f]
    }
  }, {
    "name": "성흔 폭쇄",
    "desc": "붉은 성흔 구체 5개를 띄워 각각 적에게 날린다 (유도, 각 140% + 폭발 100%). 동시에 주변 적 최대 5명의 발밑에 마법진을 새겨 잠시 뒤 한꺼번에 터뜨린다 (각 260%, 화상).",
    "cd": 10,
    "act": {
      "dur": 34,
      "pose": [[0, "cast"], [10, "castUp"], [18, "cast"]],
      "ev": [_0x4437ed, ...Array.from(_0x512ce2, (_0x26b78f, _0x388d8b) => {
        const _0x202451 = {
          VjetW: function (_0x2c94e8, _0x441714) {
            return _0x2c94e8 + _0x441714;
          },
          QFqvf: function (_0xd1e0ae, _0x5895ed) {
            return _0xd1e0ae * _0x5895ed;
          }
        };
        _0x202451.VWaFR = function (_0x1e973a, _0x13ee57) {
          return _0x1e973a * _0x13ee57;
        };
        const _0x1d8e75 = _0x202451;
        const _0xb1b1e5 = -Math.PI / 2 + (_0x388d8b - 2) * 0.6;
        return {
          "t": 2 + _0x388d8b * 2,
          "k": "pic",
          "name": "ashen:orb",
          "dx": Math.round(Math.cos(_0xb1b1e5) * 26),
          "dy": Math.round(_0x1d8e75.VWaFR(Math.sin(_0xb1b1e5), 22)) - 8,
          "s0": 6,
          "s1": 18,
          "life": 20 - _0x388d8b * 2,
          "spin": 0.1
        };
      }), _0x1b1649, ...Array.from(_0x43c146, (_0x5c6a91, _0x2d2ebe) => {
        const _0x411bc6 = {
          BLutH: function (_0x49fb5d, _0x3e754d) {
            return _0x49fb5d * _0x3e754d;
          },
          JlpxN: function (_0x4d4d84, _0x184961) {
            return _0x4d4d84 - _0x184961;
          }
        };
        (_0x411bc6.DQjSe = "proj", _0x411bc6.QnHkW = function (_0x51282a, _0x15ce88) {
          return _0x51282a - _0x15ce88;
        }, _0x411bc6.FgXap = "#ff3050", _0x411bc6.TdImF = "burn", _0x411bc6.ELckl = "ashen:burst");
        const _0x11e44d = _0x411bc6, _0x1c0d12 = -Math.PI / 2 + (_0x2d2ebe - 2) * 0.6, _0x5dcf39 = {};
        (_0x5dcf39.r = 26, _0x5dcf39.m = 1, _0x5dcf39.el = "fire", _0x5dcf39.st = "burn", _0x5dcf39.col = "#ff3050");
        const _0x41d72a = {};
        return (_0x41d72a.name = "ashen:orb", _0x41d72a.w = 18, _0x41d72a.spin = 0.25, {
          "t": 18 + _0x2d2ebe * 3,
          "k": _0x11e44d.DQjSe,
          "aim": !0,
          "dx": Math.round(Math.cos(_0x1c0d12) * 26),
          "dy": _0x11e44d.QnHkW(Math.round(Math.sin(_0x1c0d12) * 22), 8),
          "m": 1.4,
          "p": {
            "spr": "orb",
            "spd": 5.5,
            "life": 80,
            "w": 12,
            "h": 12,
            "col": _0x11e44d.FgXap,
            "el": "fire",
            "st": _0x11e44d.TdImF,
            "home": 0.16,
            "boom": _0x5dcf39,
            "boomPic": {
              "name": _0x11e44d.ELckl,
              "s0": 10,
              "s1": 40,
              "life": 12
            },
            "pic": _0x41d72a
          }
        });
      }), _0x158f86]
    }
  }],
  "ult": {
    "name": "잿불 성흔우",
    "desc": "하늘 가득 성흔 구체 16개를 띄우고, 구체마다 붉은 창 3자루씩(모두 48자루)을 가까운 적들에게 사출한다 (각 110% + 폭발 60%, 화상). 시전 중 경직 무시.",
    "cd": 60,
    "act": {
      "dur": 76,
      "armor": !0,
      "inv": [0, 20],
      "pose": [[0, "castUp"], [64, "cast"]],
      "ev": [_0x1f7059, _0x2fc408, ...Array.from(_0x3d3cd2, (_0x159fc7, _0x576a27) => ({
        "t": 1 + (_0x576a27 >> 1),
        "k": "pic",
        "name": "ashen:emblem",
        "dx": -150 + _0x576a27 * 20,
        "dy": -74 - _0x576a27 % 2 * 16,
        "s0": 10,
        "s1": 30,
        "life": 70 - (_0x576a27 >> 1)
      })), ...Array.from(_0x33cdca, (_0x204782, _0x4f8c6d) => {
        const _0x3d296a = {
          FwlLq: function (_0x551abe, _0x102923) {
            return _0x551abe % _0x102923;
          }
        };
        (_0x3d296a.xauBi = function (_0xb23b0, _0x202e09) {
          return _0xb23b0 + _0x202e09;
        }, _0x3d296a.czBfj = function (_0x7f8073, _0x3caf6b) {
          return _0x7f8073 * _0x3caf6b;
        }, _0x3d296a.QDGdL = "#ff3050");
        (_0x3d296a.efntr = "ashen:burst", _0x3d296a.fCvWw = function (_0x4549a, _0x2a748f) {
          return _0x4549a / _0x2a748f;
        });
        const _0x3c16a5 = _0x3d296a, _0x39d97b = _0x4f8c6d * 5 % 16, _0x400456 = {};
        return (_0x400456.r = 22, _0x400456.m = 0.6, _0x400456.el = "fire", _0x400456.col = "#ff3050", {
          "t": 12 + _0x4f8c6d,
          "k": "proj",
          "aim": !0,
          "dx": _0x3c16a5.xauBi(-150, _0x3c16a5.czBfj(_0x39d97b, 20)),
          "dy": -74 - _0x39d97b % 2 * 16,
          "m": 1.1,
          "p": {
            "spr": "spear",
            "spd": 8,
            "life": 80,
            "w": 12,
            "h": 12,
            "col": _0x3c16a5.QDGdL,
            "el": "fire",
            "st": "burn",
            "pierce": 2,
            "boom": _0x400456,
            "boomPic": {
              "name": _0x3c16a5.efntr,
              "s0": 10,
              "s1": 44,
              "life": 12
            },
            "pic": {
              "name": "ashen:spears",
              "w": 26,
              "rot": _0x3c16a5.fCvWw(Math.PI, 2)
            }
          }
        });
      }), ...[12, 24, 36, 48].map(_0x5f3232 => ({
        "t": _0x5f3232,
        "k": "sfx",
        "s": "throw"
      })), _0xf92906]
    }
  },
  "swap": _0x3f96b4,
  "passive": _0x1f533f,
  "awaken": [_0x2dcbec, _0x130022, _0x4eaf8e, _0x1526a1, _0x3d3e94]
}, {
  "id": "luciel",
  "name": "루시엘",
  "title": "타락한 성역의 검",
  "rarity": 6,
  "type": "power",
  "crest": "fury",
  "lore": "「…신성은 여전히 남아 있다. 단지, 내 손에 있을 뿐.」 무너진 성역을 지키던 마지막 성기사. 빛을 잃은 성흔의 검은 이제 그의 뜻대로만 빛난다.",
  "atk": 80,
  "hp": 250,
  "speed": 2.05,
  "fx": "#ffd060",
  "look": _0xf77290,
  "combo": [l(_0x2e0a6c), l(_0x1bd4aa), l(_0x442591), _0x1a8d43],
  "air": l(_0xd83bc0),
  "dashAtk": l(_0x44e889),
  "skills": [{
    "name": "성역 가르기",
    "desc": "정면을 크게 내려 벤 뒤(180%), 땅을 따라 빛의 기둥이 길게 솟구치며 앞으로 뻗어 나간다 (기둥마다 100%).",
    "cd": 7,
    "act": {
      "dur": 34,
      "pose": [[0, "slamWind"], [6, "slam"]],
      "inv": [0, 10],
      "ev": [_0x5983c8, _0x3a946e, ...Array.from(_0x56e47f, (_0x4d1c71, _0x27eaf7) => [{
        "t": 9 + _0x27eaf7 * 2,
        "k": "pic",
        "name": "luciel:pillar",
        "dx": 38 + _0x27eaf7 * 26,
        "dy": -16,
        "s0": 40,
        "s1": 54,
        "life": 14
      }, {
        "t": 9 + _0x27eaf7 * 2,
        "k": "hit",
        "box": [24 + _0x27eaf7 * 26, -46, 28, 60],
        "m": 1,
        "kb": 1,
        "up": -2,
        "hs": 1,
        "el": "holy"
      }]).flat(), _0x3381f4]
    }
  }, {
    "name": "타락한 검무",
    "desc": "정면을 쉬지 않고 난도질한 뒤(8회, 각 130% = 평타의 150%), 금빛 검기 5개를 한꺼번에 날린다 (유도, 각 120%, 관통).",
    "cd": 9,
    "act": {
      "dur": 48,
      "pose": [[0, "windHigh"], ...Array.from(_0xbb7659, (_0x5c3d21, _0x1a3214) => [3 + _0x1a3214 * 4, ["slashDown", "slashUp", "thrust", "spin"][_0x1a3214 % 4]]), [36, "slam"]],
      "armor": !0,
      "inv": [0, 40],
      "ev": [...Array.from(_0x3e2507, (_0x53ee42, _0x4a9175) => ({
        "t": 4 + _0x4a9175 * 4,
        "k": "hit",
        "box": [0, -24, 52, 36],
        "m": 1.3,
        "kb": 0,
        "hs": 1,
        "el": "holy",
        "fx": {
          "arc": ["down", "up", "x", "h"][_0x4a9175 % 4],
          "r": 30,
          "col": _0x4a9175 % 2 ? "#ffd060" : "#fff0c0"
        }
      })), ...[4, 12, 20, 28].map(_0x5e3d53 => ({
        "t": _0x5e3d53,
        "k": "sfx",
        "s": "swing"
      })), _0x594768, _0x4e4c26, _0x8f38d6]
    }
  }],
  "ult": _0x4ff45b,
  "swap": _0x4162d6,
  "passive": _0x5e7480,
  "awaken": [_0x470c0d, _0x121fce, _0x189d5c, _0x4a6345, _0x503b57]
}, {
  "id": "aurel",
  "name": "아우렐",
  "title": "태양을 따르는 검",
  "rarity": 6,
  "type": "power",
  "crest": "flame",
  "lore": "「…빛이 있는 곳에, 언제나 내가 있지.」 저무는 태양을 끝까지 쫓는 기사. 머리 위에 태양의 문장이 떠오르면, 그의 창끝은 한낮처럼 타오른다.",
  "atk": 68,
  "hp": 282,
  "speed": 2,
  "fx": "#ffa040",
  "look": _0x5dec7e,
  "combo": [l(_0x45a6b6), l(_0x11a968), _0xeca5bf],
  "air": l(_0x53e9f6),
  "dashAtk": l(_0x17de77),
  "skills": [_0x25db66, {
    "name": "태양의 문장",
    "desc": "머리 위에 태양의 문장을 띄워 10초간 공격력 1.5배(+50%). 문장이 떠 있는 동안 표시된다.",
    "cd": 18,
    "act": {
      "dur": 24,
      "pose": [[0, "cast"], [6, "castUp"]],
      "ev": [_0x207904, _0x2d8c43, {
        "t": 8,
        "k": "buff",
        "id": pa,
        "stats": _0x2102e6,
        "dur": 10
      }]
    }
  }],
  "ult": _0x5a318e,
  "swap": _0x4763f7,
  "passive": _0x1d8129,
  "awaken": [_0xde1567, _0x49edb2, _0x37d9c8, _0x5ac8fc, _0x82e8ed]
}, {
  "id": "vega",
  "name": "베가",
  "title": "푸른 별의 예언자",
  "rarity": 6,
  "type": "magic",
  "crest": "soul",
  "lore": "「…별이 가리키는 곳에, 너의 운명이 있어.」 별의 움직임으로 앞날을 읽는 예언자. 그녀가 지팡이를 들면, 예언된 별이 하늘에서 떨어진다.",
  "atk": 68,
  "hp": 282,
  "speed": 2.05,
  "fx": "#80c8ff",
  "look": _0x697e66,
  "combo": [d(_0x3da82d), d(_0x5ccd04), d(_0x5c5d87)],
  "air": d(_0x156cac),
  "dashAtk": d(_0x2610e3),
  "skills": [_0x36fa3d, _0x419afc],
  "ult": _0x112b8a,
  "swap": _0x267da2,
  "passive": _0x3f273a,
  "awaken": [_0x4554f8, _0xc0f44d, _0x45a512, _0x24f553, _0x2cdc8b]
}, {
  "id": "flora",
  "name": "플로라",
  "title": "핑크 리빙 플라워",
  "rarity": 6,
  "type": "magic",
  "crest": "venom",
  "lore": "「…꽃이 피는 순간, 모든 것이 다시 시작돼요.」 마력으로 꽃을 피우는 정원의 마법사. 그녀가 지나간 자리에는, 싸움터에도 꽃이 핀다.",
  "atk": 68,
  "hp": 282,
  "speed": 2.05,
  "fx": "#ff80d0",
  "look": _0x23cfe8,
  "combo": [d(_0x34b491), d(_0x408a31), d(_0x4d4795)],
  "air": d(_0x155794),
  "dashAtk": d(_0x9f7486),
  "skills": [_0x11e1b8, _0x3fbeed],
  "swap": _0x2cf20d,
  "passive": _0x57598c,
  "awaken": [_0x468643, _0x425029, _0x34136d, _0x5d6056, _0x3daa6e]
}, {
  "id": "gambler",
  "name": "잭",
  "title": "행운의 도박사",
  "rarity": 6,
  "type": "ranged",
  "crest": "swift",
  "lore": "「…운은 준비된 자에게만 미소 짓지. 자, 판을 흔들어볼까?」 모든 것을 걸고 판을 뒤집는 도박사. 그의 카드는 언제나, 가장 중요한 순간에 뒤집힌다.",
  "atk": 68,
  "hp": 282,
  "speed": 2.15,
  "fx": "#a0ff60",
  "look": _0x575dbe,
  "combo": [d(_0x586063), d(_0x2a9be7), d(_0x523802)],
  "air": d(_0x1aeeda),
  "dashAtk": d(_0x2fadfb),
  "skills": [_0x3fc0c2, _0x15def0],
  "ult": _0x11d1eb,
  "swap": _0xe0c2ea,
  "passive": _0x54d352,
  "awaken": [_0x37e263, _0x4a0598, _0x1d047f, _0x5183f7, _0x384d99]
}, {
  "id": "lumien",
  "name": "루미엔",
  "title": "루미엔 블레이드",
  "rarity": 6,
  "type": "speed",
  "crest": "shadow",
  "lore": "「…검은 끝이 아니라, 나의 빛으로 너를 베겠다.」 어둠 속에서 빛의 검을 쥔 검사. 그가 지나간 자리에는 한동안 빛의 잔상이 남아 적을 벤다.",
  "atk": 96,
  "hp": 240,
  "speed": 2.2,
  "fx": "#b0a0ff",
  "look": _0x11d2f6,
  "combo": [l(_0x1bdb5c), l(_0x5bc95f), l(_0x5a1fcb), _0x58ab93],
  "air": l(_0xcbef55),
  "dashAtk": l(_0x588339),
  "skills": [_0x1c2aa3, {
    "name": "광휘의 문장",
    "desc": "정면을 크게 내리벤 뒤(150%), 앞쪽 넓은 범위에 별·마법진·폭발의 빛 문양 9개가 차례로 피어나 1초 동안 남는다. 문양에 닿은 적은 0.2초마다 공격력 200% 피해 (문양마다 최대 5회).",
    "cd": 9,
    "act": {
      "dur": 40,
      "pose": [[0, "slamWind"], [7, "slam"]],
      "inv": [0, 10],
      "ev": [_0xee21a5, _0x4232db, ...[36, 72, 108, 144, 180, 216].map((_0xc825a0, _0x4c54f2) => ({
        "t": 10 + _0x4c54f2 * 3,
        "k": "field",
        "dx": _0xc825a0,
        "ground": !0,
        "f": {
          "vis": "star",
          "w": 40,
          "h": 56,
          "life": 60,
          "tick": 12,
          "m": 2,
          "pic": {
            "name": ["lumien:star", "lumien:sigil", "lumien:burst"][_0x4c54f2 % 3],
            "mode": "stand",
            "size": 54,
            "spin": _0x4c54f2 % 3 === 1 ? 0.05 : 0
          }
        }
      })), ...[54, 126, 198].map((_0x27a734, _0x33ebbb) => ({
        "t": 13 + _0x33ebbb * 6,
        "k": "field",
        "dx": _0x27a734,
        "dy": -52,
        "f": {
          "vis": "star",
          "w": 40,
          "h": 50,
          "life": 60,
          "tick": 12,
          "m": 2,
          "pic": {
            "name": ["lumien:sigil", "lumien:burst", "lumien:star"][_0x33ebbb % 3],
            "mode": "stand",
            "size": 48,
            "spin": _0x33ebbb % 3 === 0 ? 0.05 : 0
          }
        }
      })), ...[10, 19, 28].map(_0x3b1049 => ({
        "t": _0x3b1049,
        "k": "sfx",
        "s": "explode"
      })), _0x5c4333]
    }
  }],
  "ult": _0x5e3721,
  "swap": _0xcce87,
  "passive": _0x2acece,
  "awaken": [_0x57a074, _0x1ef6b6, _0x23948d, _0x3191d4, _0x1ba2a7]
}, {
  "id": "jax",
  "name": "잭스",
  "title": "광명의 수호자",
  "rarity": 6,
  "type": "power",
  "crest": "ward",
  "lore": "「…약속했지. 네가 쓰러지지 않도록, 내가 지킬 거라고.」 황금 건틀릿으로 동료를 지키는 수호자. 그가 땅을 내려치면, 빛의 기둥이 적들의 발을 묶는다.",
  "atk": 68,
  "hp": 282,
  "speed": 2,
  "fx": "#ffd070",
  "look": _0x3736c1,
  "combo": [l(_0x32cb90), l(_0x335227), l(_0x195df0), _0x45d6ed],
  "air": l(_0x3da3b7),
  "dashAtk": l(_0x19d723),
  "skills": [{
    "name": "광명 강타",
    "desc": "건틀릿으로 땅을 내려찍어 주변 전체(반경 150)에 빛의 기둥을 솟구치게 한다. 맞은 적은 450% 피해를 입고 2초간 기절한다 (보스는 기절하지 않음).",
    "cd": 9,
    "act": {
      "dur": 34,
      "pose": [[0, "slamWind"], [10, "slam"]],
      "inv": [0, 14],
      "armor": !0,
      "move": [[0, 0]],
      "ev": [_0x5b890b, _0x139023, _0x59cc1e, ...[-120, -80, -40, 0, 40, 80, 120].map((_0x4e47c2, _0x2639da) => ({
        "t": 11 + Math.abs(_0x2639da - 3) * 2,
        "k": "field",
        "dx": _0x4e47c2,
        "ground": !0,
        "f": {
          "vis": "holy",
          "w": 1,
          "h": 1,
          "life": 26,
          "tick": 999,
          "m": 0,
          "pic": {
            "name": "jax:pillar",
            "mode": "rise",
            "size": _0x2639da === 3 ? 90 : 64
          }
        }
      })), _0x44fa28, _0x265237]
    }
  }, {
    "name": "광명의 맹세",
    "desc": "등 뒤에 광명의 문장을 띄우고 4초 동안 받는 모든 피해를 1/10로 줄인다.",
    "cd": 14,
    "act": {
      "dur": 22,
      "pose": [[0, "cast"], [6, "castUp"]],
      "ev": [_0x26300d, _0x4bfdf4, {
        "t": 6,
        "k": "buff",
        "id": ua,
        "stats": _0x2eb5ba,
        "dur": 4
      }]
    }
  }],
  "ult": _0xf4d170,
  "swap": _0x351267,
  "passive": _0x5182a3,
  "awaken": [_0x1ae64e, _0x50843e, _0xb65ee, _0xe004a3, _0x3dfbc1]
}, {
  "id": "baekya",
  "name": "노엘",
  "title": "백야의 그림자",
  "rarity": 7,
  "type": "speed",
  "crest": "shadow",
  "lore": "「…그저, 목표만 남기면 돼. 나머진 바람이 처리할 테니까.」 하얀 밤에만 움직이는 암살자. 그녀의 단검이 지나간 뒤에야, 적은 베였다는 걸 안다.",
  "atk": 70,
  "hp": 300,
  "speed": 2.3,
  "fx": "#c8d8ff",
  "look": _0x559a9e,
  "combo": [l(_0x4f91f5), l(_0x2056ba), l(_0x134ab0), C(_0x574b8a)],
  "air": l(_0x302d8b),
  "dashAtk": l(_0x25d430),
  "skills": [{
    "name": "백야 난무",
    "desc": "앞쪽 가장 가까운 적의 정확한 위치로 순간이동해 2초간 35번 벤다 (35회 × 81% + 마무리 270%, 출혈). 시전 내내 무적, 공중의 적에게 붙어도 떨어지지 않는다.",
    "cd": 9,
    "act": {
      "dur": 126,
      "grav": 0,
      "pose": [[0, "dash"], [3, "slashDown"], ...Array.from(_0x477b22, (_0x1d0b44, _0x173859) => [4 + Math.round(_0x173859 * 114 / 34), ["slashUp", "thrust", "spin", "slashDown"][_0x173859 % 4]]), [120, "slam"]],
      "inv": [0, 127],
      "move": [[0, 0]],
      "ev": [_0x878302, _0x18cf5b, _0x486bca, _0x847333, ...Array.from(_0x545a73, (_0x3a0d62, _0x7256c) => {
        const _0x2469b8 = {
          AFQJs: function (_0x186bb9, _0x1578de) {
            return _0x186bb9 % _0x1578de;
          },
          mwyLY: "bleed",
          VKShw: function (_0x12f1ab, _0x2b7000) {
            return _0x12f1ab === _0x2b7000;
          }
        };
        (_0x2469b8.xRXcr = "baekya:slash2", _0x2469b8.HDZlq = "baekya:slash3");
        (_0x2469b8.Ydhhg = "sfx", _0x2469b8.cyAtD = "swing");
        const _0x543bb5 = _0x2469b8, _0x46ae04 = 4 + Math.round(_0x7256c * 114 / 34), _0x1fa981 = ["down", "up", "x", "h"][_0x7256c % 4];
        return [{
          "t": _0x46ae04,
          "k": "hit",
          "box": [-28, -26, 62, 40],
          "m": 0.81,
          "kb": 0,
          "hs": 0,
          "el": "shadow",
          "st": _0x7256c % 8 === 0 ? _0x543bb5.mwyLY : void 0,
          "fx": {
            "arc": _0x1fa981,
            "r": 26,
            "col": _0x7256c % 2 ? "#a8c0ff" : "#e8f0ff"
          }
        }, ..._0x7256c % 4 === 0 ? [{
          "t": _0x46ae04,
          "k": "pic",
          "name": ["baekya:slash1", _0x543bb5.xRXcr, _0x543bb5.HDZlq][_0x7256c / 4 % 3],
          "dx": 10,
          "dy": -14,
          "s0": 30,
          "s1": 46,
          "life": 6
        }] : [], ..._0x7256c % 3 === 0 ? [{
          "t": _0x46ae04,
          "k": _0x543bb5.Ydhhg,
          "s": _0x543bb5.cyAtD
        }] : []];
      }).flat(), _0x4d7c77, _0x30dbc3, _0x2cdd63, _0xb8a49b]
    }
  }, {
    "name": "월광 참격",
    "desc": "정면을 빠르게 10번 난도질한 뒤(각 72%), 달빛 참격 5개를 연달아 날린다 (각 180%, 관통).",
    "cd": 7,
    "act": {
      "dur": 52,
      "pose": [[0, "windHigh"], ...Array.from(_0x1c406c, (_0x1bae10, _0x4c3bd7) => [3 + _0x4c3bd7 * 3, ["slashDown", "slashUp", "thrust", "spin"][_0x4c3bd7 % 4]]), [34, "thrustWind"], [36, "thrust"], [40, "slashDown"], [44, "slashUp"], [48, "thrust"]],
      "armor": !0,
      "inv": [0, 30],
      "ev": [...Array.from(_0x3ba45d, (_0x455a76, _0x828f34) => ({
        "t": 4 + _0x828f34 * 3,
        "k": "hit",
        "box": [0, -24, 48, 34],
        "m": 0.72,
        "kb": 0,
        "hs": 1,
        "el": "shadow",
        "fx": {
          "arc": ["down", "up", "x", "h"][_0x828f34 % 4],
          "r": 28,
          "col": _0x828f34 % 2 ? "#a8c0ff" : "#e8f0ff"
        }
      })), ...[4, 10, 16, 22, 28].map(_0x3454d0 => ({
        "t": _0x3454d0,
        "k": "sfx",
        "s": "swing"
      })), ...[36, 39, 42, 45, 48].map((_0x4a90f1, _0x5752e0) => ({
        "t": _0x4a90f1,
        "k": "proj",
        "dx": 12,
        "dy": -8 + (_0x5752e0 % 2 ? -6 : 4),
        "m": 1.8,
        "p": {
          "spr": "crescent",
          "spd": 7,
          "life": 45,
          "w": 18,
          "h": 28,
          "col": "#c8d8ff",
          "el": "shadow",
          "pierce": 99,
          "pic": {
            "name": _0x5752e0 % 2 ? "baekya:slash3" : "baekya:slash1",
            "w": 32
          }
        }
      })), ...[36, 42, 48].map(_0x3a43cd => ({
        "t": _0x3a43cd,
        "k": "sfx",
        "s": "swing_heavy"
      }))]
    }
  }],
  "ult": {
    "name": "백야의 연무",
    "desc": "분신들을 불러내 방 안의 모든 적에게 동시에 백야 난무의 강화판을 쓴다 — 적마다 2초간 40번 (각 108%) + 마무리 폭발 540%. 자신은 가장 가까운 적에게 순간이동, 시전 내내 무적.",
    "cd": 45,
    "act": {
      "dur": 130,
      "grav": 0,
      "pose": [[0, "castUp"], [6, "dash"], ...Array.from(_0x3c7527, (_0x1adf61, _0x503449) => [10 + _0x503449 * 4, ["slashUp", "thrust", "spin", "slashDown"][_0x503449 % 4]]), [124, "slam"]],
      "inv": [0, 131],
      "move": [[0, 0]],
      "ev": [_0x105a7d, _0x1b6467, _0x127a35, _0x53b010, _0x4dbeaa, ...Array.from(_0x7e9ffc, (_0x1a08d2, _0x264907) => ({
        "t": 10 + _0x264907 * 4,
        "k": "fx",
        "fx": {
          "arc": ["down", "up", "x", "h"][_0x264907 % 4],
          "r": 26,
          "col": _0x264907 % 2 ? "#a8c0ff" : "#e8f0ff"
        }
      })), ...Array.from(_0x34d730, (_0x4e00f3, _0x6c0d16) => ({
        "t": 10 + _0x6c0d16 * 12,
        "k": "sfx",
        "s": "swing"
      })), _0x15c0b6]
    }
  },
  "swap": {
    "name": "교대: 하얀 밤",
    "desc": "눈 깜짝할 사이 나타나 주변을 여섯 번 벤다 (각 108%) 후 참격 폭발 (공격력 360%).",
    "act": {
      "dur": 30,
      "pose": [[0, "spin"], [6, "slashDown"], [12, "slashUp"], [18, "spin"]],
      "inv": [0, 22],
      "ev": [...[2, 5, 8, 11, 14, 17].map((_0xe5b25, _0x1d8ce2) => ({
        "t": _0xe5b25,
        "k": "hit",
        "box": [-34, -24, 68, 36],
        "m": 1.08,
        "kb": 0,
        "hs": 1,
        "el": "shadow",
        "fx": {
          "arc": _0x1d8ce2 % 2 ? "x" : "circle",
          "r": 32,
          "col": "#c8d8ff"
        }
      })), _0x467090, _0x563ee7, _0xc290f4]
    }
  },
  "passive": _0x42ac16,
  "awaken": [_0x5f0407, _0x163505, _0x52b49a, _0x4b6d34, _0xd15de7]
}, {
  "id": "heukwol",
  "name": "시온",
  "title": "흑월의 검성",
  "rarity": 6,
  "type": "power",
  "crest": "blood",
  "lore": "「…검은, 내게 있어선 단순한 무기가 아니다. 이것은, 나의 숨어자, 나의 존재다.」 검은 달 아래에서만 칼을 뽑는다는 검성. 그의 검로는 베인 뒤에야 붉게 빛난다.",
  "atk": 68,
  "hp": 282,
  "speed": 2.1,
  "fx": "#ff3040",
  "look": _0x34ddd0,
  "combo": [l(_0x484551), l(_0x1cf0e5), l(_0x4e7e50), _0x3406c6],
  "air": l(_0x119dc1),
  "dashAtk": l(_0x4cedb9),
  "skills": [_0xbfc90b, _0x14caed],
  "ult": _0x3e9c52,
  "swap": _0xb4b96e,
  "passive": _0x4b479c,
  "awaken": [_0x407d6d, _0x45a6bf, _0x182481, _0x57fa8a, _0x14e6ed]
}, {
  "id": "hanbyeol",
  "name": "한별",
  "title": "별을 쫓는 화살",
  "rarity": 7,
  "type": "ranged",
  "crest": "swift",
  "lore": "「…하늘이 허락한 한, 나는 멈추지 않아. 그 끝에, 우리가 바라는 세상이 있으니까.」 붉은 별과 푸른 별을 함께 쫓는 궁수. 그녀가 하늘로 쏘아 올린 화살은 비가 되어 내린다.",
  "atk": 72,
  "hp": 230,
  "speed": 2.2,
  "fx": "#ff4060",
  "look": _0x196637,
  "combo": [d(_0x3659d4), d(_0x3fad76), d(_0x3dc12e), _0x2d78c0],
  "air": d(_0x51b23d),
  "dashAtk": d(_0x2a2910),
  "skills": [_0x47ad96, {
    "name": "별을 쫓는 화살",
    "desc": "작은 특수 화살 24발을 쉬지 않고 속사한다. 화살은 별빛 참격을 끌며 적을 끝까지 쫓아간다 (각 공격력 80%, 유도, 착탄 폭발). 시전 중 경직 무시.",
    "cd": 9,
    "act": {
      "dur": 62,
      "pose": [[0, "shootWind"], ...Array.from(_0x22d2c2, (_0x5e20b0, _0x5aa879) => [6 + _0x5aa879 * 4, _0x5aa879 % 2 ? "shootWind" : "shoot"]), [56, "shoot"]],
      "move": [[0, 0]],
      "armor": !0,
      "ev": [_0x31cee1, ...Array.from(_0x2ef21f, (_0x1b3ed0, _0x23322d) => [..._0x23322d % 2 === 0 ? [{
        "t": 6 + _0x23322d * 2,
        "k": "pic",
        "name": "hanbyeol:streak",
        "dx": 36,
        "dy": -6,
        "s0": 34,
        "s1": 54,
        "life": 8
      }] : [], {
        "t": 6 + _0x23322d * 2,
        "k": "proj",
        "p": {
          "spr": "arrow",
          "spd": 9,
          "life": 90,
          "w": 10,
          "h": 4,
          "col": _0x23322d % 2 ? "#6080ff" : "#ff4060",
          "home": 0.22,
          "boom": {
            "r": 12,
            "m": 0.4,
            "col": _0x23322d % 2 ? "#4a64e0" : "#d83a5a"
          },
          "boomPic": _0x169d7c,
          "pic": _0x35471c
        },
        "m": 0.8,
        "ang": (_0x23322d % 5 - 2) * 4
      }, ..._0x23322d % 4 === 0 ? [{
        "t": 6 + _0x23322d * 2,
        "k": "sfx",
        "s": "arrow"
      }] : []]).flat()]
    }
  }],
  "ult": _0x333772,
  "swap": _0x5e371b,
  "passive": _0x3378c5,
  "awaken": [_0x54323f, _0x33faa5, _0x24939d, _0x217609, _0x338dd0]
}, {
  "id": "elin",
  "name": "엘린",
  "title": "깨어난 빙결 창술사",
  "rarity": 6,
  "type": "speed",
  "crest": "frost",
  "lore": "「…아직, 끝나지 않았어. 이번엔 내가 지킬게.」 오래 얼어붙어 잠들어 있던 창술사. 깨어난 그녀의 창끝이 닿는 곳마다 서리가 피어나 적의 발을 묶는다.",
  "atk": 86,
  "hp": 238,
  "speed": 2.1,
  "fx": "#9ad8ff",
  "look": _0x3273fe,
  "combo": [l(_0x35fe6a), l(_0x1cc24b), l(_0x611065), _0x9ae583],
  "air": l(_0x593d8a),
  "dashAtk": l(_0x138e47),
  "skills": [_0x5ee8fc, {
    "name": "서리 결계",
    "desc": "창을 땅에 꽂아 앞쪽에 얼음 결계를 펼친다 (3초, 0.25초마다 공격력 70%, 틱마다 10% 확률로 빙결). 꽂는 일격과 결계 위로 차례로 솟는 얼음 기둥 3개(각 공격력 260%)는 50% 확률로 빙결.",
    "cd": 10,
    "act": {
      "dur": 40,
      "pose": [[0, "slamWind"], [8, "slam"]],
      "inv": [0, 12],
      "ev": [_0x2b8660, _0x153d8e, _0x537283, ...[40, 85, 130].map((_0x3bf01f, _0x3525d7) => ({
        "t": 14 + _0x3525d7 * 6,
        "k": "field",
        "dx": _0x3bf01f,
        "ground": !0,
        "f": _0x1a47ea
      })), ...[14, 20, 26].map(_0x1426aa => ({
        "t": _0x1426aa,
        "k": "sfx",
        "s": "explode"
      })), _0xc755d6]
    }
  }],
  "ult": _0x5de58d,
  "swap": _0x369961,
  "passive": _0x19fc2e,
  "awaken": [_0x44ea3b, _0x2a846d, _0x242a06, _0x4fe2bf, _0x109ec7]
}, {
  "id": "arien",
  "name": "아리엔",
  "title": "바람의 잎사귀를 짓는 자",
  "rarity": 6,
  "type": "ranged",
  "crest": "swift",
  "lore": "「…바람이 불어오는 곳에, 나는 언제나 있어.」 잎사귀로 화살을 짓는 숲의 궁수. 그녀가 놓은 화살은 바람을 타고 끝까지 표적을 쫓는다.",
  "atk": 68,
  "hp": 282,
  "speed": 2.15,
  "fx": "#a0ff80",
  "look": _0x535e34,
  "combo": [d(_0x2c6715), d(_0x2669cc), d(_0x5af891)],
  "air": d(_0x1dc5a0),
  "dashAtk": d(_0x2822bc),
  "skills": [{
    "name": "잎새 연사",
    "desc": "제자리에 멈춰 서서 정면으로 화살 12발을 쉬지 않고 쏜다 (각 110%). 시전 중 경직 무시.",
    "cd": 8,
    "act": {
      "dur": 66,
      "pose": [[0, "shootWind"], ...Array.from(_0x20f13e, (_0x1bf4a5, _0x49a782) => [5 + _0x49a782 * 5, _0x49a782 % 2 ? "shootWind" : "shoot"]), [64, "shoot"]],
      "move": [[0, 0]],
      "armor": !0,
      "ev": [_0x1db771, ...Array.from(_0x3d642a, (_0x5a925d, _0x2cf8b6) => [{
        "t": 6 + _0x2cf8b6 * 5,
        "k": "proj",
        "p": _0x52c0b1,
        "m": 1.1,
        "ang": (_0x2cf8b6 % 3 - 1) * 6
      }, ..._0x2cf8b6 % 2 === 0 ? [{
        "t": 6 + _0x2cf8b6 * 5,
        "k": "sfx",
        "s": "arrow"
      }] : []]).flat()]
    }
  }, _0x49e4e5],
  "ult": _0xdf9f35,
  "swap": _0x590a6d,
  "passive": _0x121066,
  "awaken": [_0x4cfccd, _0xbef90a, _0x477a3f, _0x2cc18b, _0x8f8c2b]
}, {
  "id": "marionne",
  "name": "마리오네",
  "title": "망각의 인형술사",
  "rarity": 5,
  "type": "magic",
  "crest": "soul",
  "lore": "왕국의 광대극을 이끌던 인형술사. 잊힌 자들의 혼을 인형에 깃들게 해, 그들이 다시 한 번 무대에 서게 한다.",
  "atk": 59.2,
  "hp": 229,
  "speed": 1.95,
  "fx": "#ff80c0",
  "look": _0x4e1170,
  "combo": [l(_0x241e0c), l(_0x34ecbe), l(_0xb3d045)],
  "air": l(_0x4b0253),
  "dashAtk": l(_0xe5ac8f),
  "skills": [_0x3d5afe, _0x90c4a3],
  "swap": _0x1742c5,
  "passive": _0x3b5f75,
  "awaken": [_0x21f2ce, _0x3952fa, _0x31a719, _0x2a65e0, _0x4dd3dc]
}, {
  "id": "ignia",
  "name": "이그니아",
  "title": "마지막 피닉스 기사",
  "rarity": 5,
  "type": "power",
  "crest": "flame",
  "lore": "불사조 기사단의 마지막 생존자. 재가 되어도 다시 타오르는 맹세로, 끝없는 왕에게 마지막 불꽃을 겨눈다.",
  "atk": 68.8,
  "hp": 299,
  "speed": 1.95,
  "fx": "#ffa040",
  "look": _0x521dfa,
  "combo": [l(_0x347804), l(_0x5430ab), l(_0xa838a), l(_0x3cc0e3)],
  "air": _0x66690f,
  "dashAtk": l(_0x2b48b1),
  "skills": [_0x58ce46, _0x4d8cec],
  "swap": _0x53af6e,
  "passive": _0x1769d7,
  "awaken": [_0x5cb7c6, _0x2a606b, _0x4dd415, _0x546eeb, _0x24c0ad]
}, {
  "id": "lea",
  "name": "레아",
  "title": "서리 여왕의 검",
  "rarity": 5,
  "type": "speed",
  "crest": "frost",
  "lore": "얼어붙은 북방 왕국의 마지막 근위 검사. 여왕이 남긴 얼음 세검은 찌를 때마다 상대의 피를 얼린다.",
  "atk": 62.4,
  "hp": 256,
  "speed": 2.2,
  "fx": "#a8e4ff",
  "look": _0x5d85ae,
  "combo": [l(_0x518009), l(_0x5a8044), l(_0x47119b), l(_0x32d6b3)],
  "air": l(_0x2e9183),
  "dashAtk": l(_0x13f36f),
  "skills": [{
    "name": "빙화 연찌르기",
    "desc": "눈 깜짝할 사이 정면을 6번 찌른다 (각 55%). 마지막 찌르기는 냉기 2중첩.",
    "cd": 7,
    "act": C(_0x291619)
  }, _0x58b4c3],
  "swap": _0x223541,
  "passive": _0x421067,
  "awaken": [_0x25fbfc, _0x31bbec, _0x43b2fc, _0xe6ce77, _0x2c5c00]
}, {
  "id": "garon",
  "name": "가론",
  "title": "천둥 망치",
  "rarity": 5,
  "type": "power",
  "crest": "storm",
  "lore": "폭풍 산맥의 대장장이. 번개를 맞고도 살아남은 날, 그의 망치는 천둥을 품게 되었다.",
  "atk": 73.6,
  "hp": 314,
  "speed": 1.9,
  "fx": "#7fd8ff",
  "look": _0x1b8f8e,
  "combo": [l(_0x1d7120), l(_0x5add68), l(_0x5e9dc9)],
  "air": _0xabe2f8,
  "dashAtk": l(_0x108a7e),
  "skills": [_0x114b2d, _0x3afd3b],
  "swap": _0x2f79fe,
  "passive": _0xde5dac,
  "awaken": [_0x20b274, _0x22188e, _0xc7b3b, _0x1cd7e0, _0xce769e]
}, {
  "id": "silva",
  "name": "실바",
  "title": "바람을 읽는 궁수",
  "rarity": 5,
  "type": "ranged",
  "crest": "swift",
  "lore": "숲의 바람과 대화하는 엘프 궁수. 바람이 길을 알려 주는 한, 그녀의 화살은 빗나가지 않는다.",
  "atk": 60.8,
  "hp": 234,
  "speed": 2.15,
  "fx": "#80ffb0",
  "look": _0x3342bf,
  "combo": [d({
    "dur": 14,
    "t": 5,
    "m": 0.8,
    "p": w.arrow("#c0ffc0"),
    "sfx": "arrow"
  }), d({
    "dur": 14,
    "t": 5,
    "m": 0.8,
    "p": w.arrow("#c0ffc0"),
    "sfx": "arrow"
  }), d({
    "dur": 22,
    "t": 9,
    "m": 0.65,
    "n": 3,
    "spread": 10,
    "p": w.arrow("#80ffb0", _0x3c19db),
    "sfx": "arrow"
  })],
  "air": d({
    "dur": 16,
    "t": 5,
    "m": 0.8,
    "p": w.arrow("#c0ffc0"),
    "sfx": "arrow",
    "air": !0
  }),
  "dashAtk": d({
    "dur": 18,
    "t": 6,
    "m": 1.4,
    "p": w.arrow("#80ffb0", _0x324734),
    "sfx": "arrow"
  }),
  "skills": [{
    "name": "질풍 관통시",
    "desc": "바람을 두른 화살 3발을 연달아 쏜다 — 모든 적을 꿰뚫는다 (각 150%).",
    "cd": 7,
    "act": {
      "dur": 30,
      "pose": [[0, "shootWind"], [6, "shoot"], [12, "shootWind"], [14, "shoot"], [20, "shootWind"], [22, "shoot"]],
      "ev": [6, 14, 22].flatMap(_0x498e37 => [{
        "t": _0x498e37,
        "k": "proj",
        "p": w.arrow("#e0fff0", _0x158e0b),
        "m": 1.5
      }, {
        "t": _0x498e37,
        "k": "sfx",
        "s": "arrow"
      }])
    }
  }, _0x1f59a7],
  "swap": {
    "name": "교대: 순풍",
    "desc": "뒤로 물러나며 화살 5발을 부채꼴로 쏜다 (각 90%). 3초간 이동 속도 +25%.",
    "act": {
      "dur": 22,
      "pose": [[0, "shootWind"], [6, "shoot"]],
      "inv": [0, 10],
      "move": [[0, -4], [8, 0]],
      "ev": [{
        "t": 6,
        "k": "proj",
        "n": 5,
        "spread": 12,
        "p": w.arrow("#c0ffc0"),
        "m": 0.9
      }, definition_silva_wind]
    }
  },
  "passive": _0x1af80b,
  "awaken": [_0x3edb4f, _0x9a1905, _0x19d0a6, _0x382718, _0x354fec]
}, {
  "id": "nigel",
  "name": "니겔",
  "title": "역병 의사",
  "rarity": 5,
  "type": "magic",
  "crest": "venom",
  "lore": "부리 가면을 쓴 떠돌이 의사. 병을 고치는 법보다 퍼뜨리는 법을 먼저 알게 된 사람.",
  "atk": 59.2,
  "hp": 240,
  "speed": 1.95,
  "fx": "#8bdc3a",
  "look": _0x2c2784,
  "combo": [d({
    "dur": 16,
    "t": 6,
    "m": 0.75,
    "p": w.orb("#8bdc3a", _0x5e97be),
    "sfx": "cast"
  }), d({
    "dur": 16,
    "t": 6,
    "m": 0.75,
    "p": w.orb("#8bdc3a", _0x5cd043),
    "sfx": "cast"
  }), d(_0x1a7fbf)],
  "air": d({
    "dur": 16,
    "t": 5,
    "m": 0.75,
    "p": w.orb("#8bdc3a", _0x3a8a23),
    "sfx": "cast",
    "air": !0
  }),
  "dashAtk": l(_0x5b1f8c),
  "skills": [_0x4b1148, _0x108b30],
  "swap": _0x14e12d,
  "passive": _0x3cc542,
  "awaken": [_0x1afb84, _0x329c03, _0x20768d, _0x32aca9, _0x462bf5]
}, {
  "id": "helga",
  "name": "헬가",
  "title": "강철 성벽",
  "rarity": 5,
  "type": "guard",
  "crest": "ward",
  "lore": "한 번도 무너지지 않은 북문 수비대장. 「내 뒤로는 아무도 못 지나간다.」",
  "atk": 64,
  "hp": 342,
  "speed": 1.85,
  "fx": "#ffd76a",
  "look": _0x3f631c,
  "combo": [l(_0x10092b), l(_0x25c309), l(_0xf8ba05)],
  "air": l(_0x29cb9f),
  "dashAtk": l(_0x430ede),
  "skills": [_0x123116, _0x44d07f],
  "swap": _0x1231dd,
  "passive": _0x3476df,
  "awaken": [_0x493169, _0x372c4b, _0x3f7cbb, _0x4dff2c, _0x5a331f]
}, {
  "id": "vella",
  "name": "벨라",
  "title": "핏빛 낫의 사냥꾼",
  "rarity": 5,
  "type": "speed",
  "crest": "blood",
  "lore": "흡혈귀만 골라 사냥하는 낫잡이. 사냥한 피를 마셔 버틴다는 소문을 굳이 부정하지 않는다.",
  "atk": 65.6,
  "hp": 253,
  "speed": 2.15,
  "fx": "#ff3a5a",
  "look": _0x56a481,
  "combo": [l(_0x5b7c12), l(_0x1ba75f), l(_0x38e533), l(_0x481915)],
  "air": l(_0x57d2d3),
  "dashAtk": l(_0x50c465),
  "skills": [{
    "name": "혈풍",
    "desc": "낫을 휘돌리며 주변을 5번 벤다 (각 60%, 출혈). 회전 중 무적.",
    "cd": 8,
    "act": C(_0x358dd8)
  }, _0x52be00],
  "swap": _0x9afe55,
  "passive": _0x267e5e,
  "awaken": [_0x585f30, _0x4a6639, _0x53f132, _0x174a7e, _0x34d401]
}, {
  "id": "orin",
  "name": "오린",
  "title": "태엽 기술자",
  "rarity": 5,
  "type": "ranged",
  "crest": "storm",
  "lore": "고장 난 것은 무엇이든 고쳐 내는 소년 기술자. 지금은 고친 것들로 싸우는 법을 배우는 중이다.",
  "atk": 57.6,
  "hp": 240,
  "speed": 2,
  "fx": "#80e0ff",
  "look": _0x27ae79,
  "combo": [d(_0x35b8c5), d(_0x40a0b2), d(_0x9cf2fe)],
  "air": d(_0x4f7b9e),
  "dashAtk": d(_0x171c64),
  "skills": [_0x4b038c, _0x38fc68],
  "swap": _0x25bfeb,
  "passive": _0x1b4528,
  "awaken": [_0x5a2bd8, _0x40fd82, _0x10e1cb, _0x1ed34d, _0x387e46]
}, {
  "id": "seraph",
  "name": "세라프",
  "title": "새벽의 사제",
  "rarity": 5,
  "type": "magic",
  "crest": "soul",
  "lore": "무너진 대성당에서 홀로 새벽 기도를 이어 가는 사제. 그녀의 기도는 아직 하늘에 닿는다.",
  "atk": 57.6,
  "hp": 253,
  "speed": 1.95,
  "fx": "#fff0a0",
  "look": _0x4b5e88,
  "combo": [d({
    "dur": 15,
    "t": 5,
    "m": 0.8,
    "p": w.star("#fff0a0", _0x2e96d9),
    "sfx": "cast"
  }), d({
    "dur": 15,
    "t": 5,
    "m": 0.8,
    "p": w.star("#fff0a0", _0x274374),
    "sfx": "cast"
  }), d({
    "dur": 24,
    "t": 9,
    "m": 0.6,
    "n": 3,
    "spread": 16,
    "p": w.star("#ffd060", _0x3b0fbc),
    "sfx": "cast"
  })],
  "air": d({
    "dur": 16,
    "t": 5,
    "m": 0.8,
    "p": w.star("#fff0a0", _0x4107ce),
    "sfx": "cast",
    "air": !0
  }),
  "dashAtk": l(_0x517bfc),
  "skills": [_0x465cac, _0x1d1e12],
  "swap": _0x5e7b33,
  "passive": _0x2d957e,
  "awaken": [_0x146a6d, _0xfc7564, _0x4536ce, _0x45e477, _0x4451fd]
}, {
  "id": "kaz",
  "name": "카즈",
  "title": "그림자 수리검",
  "rarity": 5,
  "type": "speed",
  "crest": "shadow",
  "lore": "이름 없는 암살자 집단의 마지막 인. 그의 그림자는 언제나 한 박자 먼저 움직인다.",
  "atk": 64,
  "hp": 237,
  "speed": 2.3,
  "fx": "#9a6bff",
  "look": _0x355060,
  "combo": [l(_0x3c115c), l(_0x2e77b3), l(_0x86ced0), d(_0x27c3f8)],
  "air": l(_0x3c2ec2),
  "dashAtk": l(_0x4dac5c),
  "skills": [_0x4e2050, _0x58dbc7],
  "swap": _0x315bf3,
  "passive": _0x670fde,
  "awaken": [_0x170865, _0x35b462, _0x237d89, _0x38b50b, _0x1307be]
}, {
  "id": "bron",
  "name": "브론",
  "title": "용암 주먹",
  "rarity": 5,
  "type": "power",
  "crest": "fury",
  "lore": "화산 투기장의 무패 챔피언. 맨주먹에 용암을 두르는 법을 스스로 터득했다.",
  "atk": 72,
  "hp": 320,
  "speed": 1.95,
  "fx": "#ff6a2a",
  "look": _0x52847a,
  "combo": [l(_0x3d3e66), l(_0x404f3d), l(_0x312493), l(_0x2cd148)],
  "air": _0x168b93,
  "dashAtk": l(_0x2531e5),
  "skills": [{
    "name": "분화 연타",
    "desc": "정면에 주먹 7연타 (각 50%) 후 용암 어퍼컷 (240%, 화상). 연타 중 경직 무시.",
    "cd": 8,
    "act": C(_0x5c7dd2)
  }, _0x3784a1],
  "swap": _0x1336dc,
  "passive": _0x3dcbff,
  "awaken": [_0x5ce383, _0x3f2ce6, _0x48e43d, _0x831c1e, _0xb75bf2]
}, {
  "id": "liora",
  "name": "리오라",
  "title": "시간을 감는 마녀",
  "rarity": 5,
  "type": "magic",
  "crest": "swift",
  "lore": "멈춘 시계탑에 사는 마녀. 1초를 늘이고 줄이는 법을 알지만, 잃어버린 시간만은 되돌리지 못한다.",
  "atk": 59.2,
  "hp": 234,
  "speed": 2,
  "fx": "#ffe8a0",
  "look": _0x49f28a,
  "combo": [d({
    "dur": 15,
    "t": 5,
    "m": 0.8,
    "p": w.orb("#ffe8a0", _0x3994a3),
    "sfx": "cast"
  }), d({
    "dur": 15,
    "t": 5,
    "m": 0.8,
    "p": w.orb("#ffe8a0", _0x5a3361),
    "sfx": "cast"
  }), d({
    "dur": 24,
    "t": 9,
    "m": 1.3,
    "p": w.orb("#ffffff", _0x58c2fd),
    "sfx": "cast"
  })],
  "air": d({
    "dur": 16,
    "t": 5,
    "m": 0.8,
    "p": w.orb("#ffe8a0", _0x23e34e),
    "sfx": "cast",
    "air": !0
  }),
  "dashAtk": l(_0x4cf91f),
  "skills": [_0x9163f7, _0x3c37d3],
  "swap": _0x2805d1,
  "passive": _0x5a3dd4,
  "awaken": [_0x37d241, _0x542c6d, _0x27fbbd, _0x878be1, _0x31152b]
}, {
  "id": "seira",
  "name": "세이라",
  "title": "피의 검무희",
  "rarity": 4,
  "type": "speed",
  "crest": "blood",
  "lore": "연회장에서 춤추던 무희. 왕궁이 피로 물든 밤, 그녀의 춤은 검무가 되었다. 박자가 이어질수록 칼끝이 빨라진다.",
  "atk": 46.4,
  "hp": 214,
  "speed": 2.3,
  "fx": "#ff5070",
  "look": _0x2b893d,
  "combo": [l(_0x4e6f72), l(_0x4859df), l(_0x4040b9), l(_0x3cfcbd), C(_0x5ba435)],
  "air": l(_0x2587eb),
  "dashAtk": l(_0x4b79dd),
  "skills": [{
    "name": "혈화선무",
    "desc": "피의 꽃잎처럼 회전하며 주변을 여덟 번 벤다. 회전 중 천천히 이동 가능.",
    "cd": 7,
    "act": C(_0x267dd0)
  }, _0x44c020],
  "swap": _0x143a93,
  "passive": _0x51333c,
  "awaken": [_0x258bce, _0x5de31f, _0x301641, _0x4e4e0d, _0xbb78c2]
}, {
  "id": "bram",
  "name": "브람",
  "title": "철갑 포병",
  "rarity": 4,
  "type": "ranged",
  "crest": "fury",
  "lore": "왕실 포병대의 마지막 생존자. 성벽이 무너질 때까지 포를 놓지 않았다. 포격의 반동조차 그의 걸음걸이가 되었다.",
  "atk": 57.6,
  "hp": 288,
  "speed": 1.6,
  "fx": "#ffb060",
  "look": _0x3a49af,
  "combo": [d(_0x50fa8b), d(_0x5acddf), d(_0x318e30)],
  "air": d(_0x23d433),
  "dashAtk": l(_0x460c8f),
  "skills": [_0xb21e8a, {
    "name": "산탄 포격",
    "desc": "근거리에 산탄을 퍼부어 적을 날려 버린다. 큰 반동으로 뒤로 밀려난다.",
    "cd": 7,
    "act": d(_0x23a8a8)
  }],
  "swap": _0x1f6d74,
  "passive": _0x5c7789,
  "awaken": [_0x5661d6, _0x15e2aa, _0x8bbb22, _0x4134fc, _0x390412]
}, {
  "id": "jolly",
  "name": "졸리",
  "title": "광기의 광대",
  "rarity": 4,
  "type": "magic",
  "crest": "venom",
  "lore": "왕의 연회에서 웃음을 팔던 광대. 웃음이 멈춘 왕궁에서 그는 혼자 웃었다. 지금도 웃고 있다. 아무도 따라 웃지 않는데도.",
  "atk": 48,
  "hp": 214,
  "speed": 2,
  "fx": "#c0ff60",
  "look": _0x5b7425,
  "combo": [d(_0x4501d1), d(_0x48ce1b), d(_0x20dd25)],
  "air": d(_0x42d7f2),
  "dashAtk": _0x2ae266,
  "skills": [_0x4edafb, {
    "name": "깜짝 상자",
    "desc": "튀어 오르는 상자를 던진다. 폭발하면 주변 적이 둔화되고 크게 다친다.",
    "cd": 10,
    "act": d(_0x49cc27)
  }],
  "swap": _0x2c802b,
  "passive": _0x4dac5a,
  "awaken": [_0x561973, _0xeb5c4c, _0x3e66e3, _0x1e9805, _0x2b4fef]
}, {
  "id": "freya",
  "name": "프레야",
  "title": "서리늑대 버서커",
  "rarity": 4,
  "type": "speed",
  "crest": "frost",
  "lore": "북방 설원에서 늑대에게 길러진 전사. 분노가 차오르면 서리늑대의 혼이 깨어나 그녀의 손톱이 얼음 송곳니가 된다.",
  "atk": 49.6,
  "hp": 266,
  "speed": 2.2,
  "fx": "#a8e4ff",
  "look": _0x2451ba,
  "combo": [l(_0xb52299), l(_0x279101), l(_0x761dcf), l(_0x2b8306)],
  "air": l(_0x27f6ce),
  "dashAtk": l(_0x395f19),
  "skills": [_0x3f0c27, {
    "name": "서리 송곳니",
    "desc": "앞으로 덮치며 다섯 번 물어뜯어 냉기를 쌓는다.",
    "cd": 7,
    "act": C(_0x194283)
  }],
  "swap": _0x45acba,
  "passive": _0xd02255,
  "awaken": [_0x4f7772, _0x161514, _0x157362, _0x52d032, _0x33a390]
}, {
  "id": "hawin",
  "name": "하윈",
  "title": "견습 퇴마사",
  "rarity": 3,
  "type": "guard",
  "crest": "ward",
  "lore": "사당에서 부적 쓰는 법을 배우던 견습생. 스승은 돌아오지 않았지만, 그가 남긴 결계술만은 아직 손에 남아 있다.",
  "atk": 36.8,
  "hp": 251,
  "speed": 1.9,
  "fx": "#fff0a0",
  "look": _0x2624dc,
  "combo": [d(_0x477deb), d(_0x37e221), d(_0x33699b)],
  "air": d(_0x4f15b9),
  "dashAtk": _0x336842,
  "skills": [_0x2b8aa2, _0x39fb33],
  "swap": _0x3ef65a,
  "passive": _0x390afb,
  "awaken": [_0x736c6f, _0x4a0a08, _0x3b866a, _0x44c4ee, _0x1e8c0a]
}, {
  "id": "dor",
  "name": "도르",
  "title": "무덤 도굴꾼",
  "rarity": 3,
  "type": "power",
  "crest": "soul",
  "lore": "묘소의 보물을 노리던 도굴꾼. 사자들이 깨어나자 삽을 들고 맞서 싸웠다. 함정 파는 솜씨만큼은 누구도 따라오지 못한다.",
  "atk": 46.4,
  "hp": 251,
  "speed": 1.85,
  "fx": "#d0b080",
  "look": _0xc887f9,
  "combo": [l(_0x196e1d), l(_0x35ae71), l(_0x42b8b6)],
  "air": _0x2c3fac,
  "dashAtk": l(_0x56c0b6),
  "skills": [_0x480781, {
    "name": "흙 뿌리기",
    "desc": "삽으로 흙과 돌을 퍼 올려 전방에 흩뿌린다.",
    "cd": 6,
    "act": d(_0x1a2e7c)
  }],
  "swap": _0xb647ce,
  "passive": _0x41d26e,
  "awaken": [_0x5d4496, _0x5171b5, _0xfb1d22, _0x56f729, _0x1ed6a3]
}, {
  "id": "lyra",
  "name": "리라",
  "title": "떠돌이 음유시인",
  "rarity": 3,
  "type": "magic",
  "crest": "swift",
  "lore": "왕국의 몰락을 노래하며 떠도는 시인. 그녀의 노래는 사자를 달래고, 살아있는 자에게 다시 싸울 용기를 준다.",
  "atk": 36.8,
  "hp": 214,
  "speed": 2,
  "fx": "#80ffd0",
  "look": _0x7d39fe,
  "combo": [d(_0xab2673), d(_0x4acaa6), d(_0x3506b5)],
  "air": d(_0xdd5cba),
  "dashAtk": _0xb4dedc,
  "skills": [_0x503a5a, _0x5087d8],
  "swap": _0x4d70ca,
  "passive": _0x4dc4ac,
  "awaken": [_0x42c04e, _0x3dface, _0x491380, _0x531396, _0x31d5e8]
}, {
  "id": "kai",
  "name": "카이",
  "title": "투창수",
  "rarity": 3,
  "type": "ranged",
  "crest": "storm",
  "lore": "변방 수비대의 투창수. 화살보다 무거운 창을 화살보다 멀리 던진다. 하늘에서 내리꽂는 창비는 그의 자랑이다.",
  "atk": 40,
  "hp": 229,
  "speed": 2,
  "fx": "#e0d0a0",
  "look": _0x1cca13,
  "combo": [d(_0x2f7642), d(_0x56f24c), d(_0x358bdd)],
  "air": d(_0x1961c5),
  "dashAtk": l(_0x36d734),
  "skills": [_0x204fa5, {
    "name": "관통 투창",
    "desc": "온 힘을 실은 창이 일직선상의 모든 적을 꿰뚫고 감전시킨다.",
    "cd": 7,
    "act": d(_0x48a0aa)
  }],
  "swap": {
    "name": "교대: 도약 투창",
    "desc": "높이 뛰어오르며 아래로 창 세 자루를 내리꽂는다.",
    "act": d(_0x494404)
  },
  "passive": _0xd39750,
  "awaken": [_0x16b8a9, _0x1b4c4b, _0x266541, _0x19c3fe, _0x5e0ea1]
}, {
  "id": "bern",
  "name": "베른",
  "title": "도끼 벌목꾼",
  "rarity": 3,
  "type": "power",
  "crest": "fury",
  "lore": "왕실 숲을 돌보던 벌목꾼. 망령에게 숲을 빼앗긴 뒤로는 나무 대신 해골을 벤다. 한 번 휘두르면 멈추지 않는다.",
  "atk": 49.6,
  "hp": 277,
  "speed": 1.8,
  "fx": "#ffc080",
  "look": _0x285f34,
  "combo": [l(_0x41c3f4), l(_0x84932a), l(_0x1f4c92)],
  "air": _0x3b609f,
  "dashAtk": l(_0x1525b0),
  "skills": [{
    "name": "벌목꾼의 회전",
    "desc": "도끼를 휘두르며 회전해 주변을 다섯 번 벤다. 회전 중 경직 무시.",
    "cd": 7,
    "act": C(_0x6516ad)
  }, _0x474585],
  "swap": {
    "name": "교대: 도끼 투척",
    "desc": "되돌아오는 도끼를 던져 경로상의 적을 두 번 벤다.",
    "act": d(_0x118b3e)
  },
  "passive": _0x38fd06,
  "awaken": [_0x239f90, _0x15e380, _0x883e8, _0x4bdde2, _0x37ce10]
}, {
  "id": "bolt",
  "name": "볼트",
  "title": "수리공 로봇",
  "rarity": 3,
  "type": "guard",
  "crest": "storm",
  "lore": "왕실 공방의 자동 수리 인형. 주인이 떠난 뒤에도 고장 난 것을 고치라는 명령을 따르고 있다. 지금 고칠 것은 이 왕국이다.",
  "atk": 38.4,
  "hp": 277,
  "speed": 1.75,
  "fx": "#80e0ff",
  "look": _0x16a83a,
  "combo": [l(_0x5d4de6), l(_0x539b66), l(_0x295868)],
  "air": _0x568766,
  "dashAtk": l(_0x1737c4),
  "skills": [_0x47e6db, _0x379f9e],
  "swap": _0x5119ee,
  "passive": _0x28839e,
  "awaken": [_0x299650, _0x472474, _0x298144, _0x33426b, _0xb90356]
}], re = [{
  "id": "kael",
  "name": "카엘",
  "title": "떠돌이 검사",
  "rarity": 3,
  "type": "power",
  "crest": "fury",
  "lore": "이름 없는 전장을 떠돌던 검사. 모든 것을 잃은 뒤에도 검만은 놓지 않았다. 계약자에게 가장 먼저 응답한 영혼.",
  "atk": 48,
  "hp": 251,
  "speed": 1.95,
  "fx": "#e8f0ff",
  "look": _0x5b46a9,
  "combo": [l(_0x5e7c21), l(_0x5cc29e), l(_0x2469a0), l(_0x3e31d7)],
  "air": l(_0x3fd7e5),
  "dashAtk": l(_0x40cf4d),
  "skills": [{
    "name": "회오리 베기",
    "desc": "몸을 회전시키며 주변을 세 번 벤다. 마지막 타격이 적을 띄운다.",
    "cd": 6,
    "act": C(_0x206d73)
  }, _0x2613ce],
  "swap": {
    "name": "교대: 결의의 일섬",
    "desc": "등장과 동시에 전방을 크게 베어 적을 띄운다.",
    "act": l(_0x5b2a78)
  },
  "passive": _0x89ba53,
  "awaken": [_0x2a97ce, _0x5974c2, _0x1b0c5c, _0x4119ca, _0x1a5777]
}, {
  "id": "rina",
  "name": "리나",
  "title": "숲의 사냥꾼",
  "rarity": 3,
  "type": "ranged",
  "crest": "swift",
  "lore": "망국의 숲을 지키던 사냥꾼. 화살 한 발로 두 마리의 늑대를 꿰뚫었다는 전설이 있다.",
  "atk": 40,
  "hp": 211,
  "speed": 2.05,
  "fx": "#b8f080",
  "look": _0x4dd692,
  "combo": [d({
    "dur": 15,
    "t": 5,
    "m": 0.7,
    "p": w.arrow(),
    "sfx": "arrow"
  }), d({
    "dur": 15,
    "t": 5,
    "m": 0.7,
    "p": w.arrow(),
    "sfx": "arrow"
  }), d({
    "dur": 24,
    "t": 8,
    "m": 0.6,
    "p": w.arrow("#f0f0a0", _0xfe856b),
    "n": 3,
    "spread": 9,
    "sfx": "arrow",
    "extra": []
  })],
  "air": d({
    "dur": 16,
    "t": 4,
    "m": 0.7,
    "p": w.arrow(),
    "ang": 35,
    "air": !0,
    "grav": 0.4,
    "sfx": "arrow"
  }),
  "dashAtk": d({
    "dur": 24,
    "t": 8,
    "m": 1.1,
    "p": w.arrow("#ffffa0", _0x2cba2f),
    "move": [[0, -4, -3], [10, 0]],
    "air": !0,
    "sfx": "arrow",
    "w": "jump",
    "s": "shoot"
  }),
  "skills": [{
    "name": "관통 화살",
    "desc": "힘껏 당긴 화살이 일직선상의 모든 적을 꿰뚫는다.",
    "cd": 6,
    "act": d(_0xd2d233)
  }, _0x518024],
  "swap": _0x1217fb,
  "passive": _0x9ddb86,
  "awaken": [_0x112faf, _0x55ca4d, _0x43ad20, _0x28e1c4, _0x53cffa]
}, {
  "id": "bor",
  "name": "보르",
  "title": "맨손 수도승",
  "rarity": 3,
  "type": "speed",
  "crest": "swift",
  "lore": "무너진 산사의 마지막 수도승. 무기를 거부하고 단련된 주먹 하나로 사자의 군세와 맞섰다.",
  "atk": 36.8,
  "hp": 240,
  "speed": 2.15,
  "fx": "#ffd080",
  "look": _0x17c8a0,
  "combo": [l(_0x2490bf), l(_0x1ed586), l(_0x4c516d), l(_0x53c079), l(_0x1a38a7)],
  "air": l(_0x1ffea0),
  "dashAtk": l(_0x5103e6),
  "skills": [{
    "name": "승천권",
    "desc": "솟구치는 어퍼컷 연타로 적을 공중으로 띄운다.",
    "cd": 5,
    "act": C(_0x12deac)
  }, {
    "name": "백열권",
    "desc": "눈에 보이지 않는 속도로 주먹을 퍼붓고 마지막 일격으로 날려 보낸다.",
    "cd": 8,
    "act": C(_0x345bb7)
  }],
  "swap": {
    "name": "교대: 비각",
    "desc": "날아드는 비행 발차기로 적을 멀리 날려 보낸다.",
    "act": l(_0x188856)
  },
  "passive": _0x21e440,
  "awaken": [_0x143ce1, _0x3ac208, _0x3f48d5, _0x244273, _0x3576a0]
}, {
  "id": "selin",
  "name": "셀린",
  "title": "불꽃 연금술사",
  "rarity": 3,
  "type": "magic",
  "crest": "flame",
  "lore": "왕실 연금술 학회의 낙제생. 폭발하는 플라스크만큼은 누구보다 잘 만든다. 본인은 의도한 것이라 주장한다.",
  "atk": 38.4,
  "hp": 203,
  "speed": 1.85,
  "fx": "#ff9a40",
  "look": _0x35f76e,
  "combo": [d(_0x554544), d(_0x331b8a), d(_0x4cbb49)],
  "air": d(_0x1e665c),
  "dashAtk": _0x3ed9c8,
  "skills": [_0x1e1b99, {
    "name": "대폭발 플라스크",
    "desc": "불안정한 대형 플라스크를 던져 넓은 범위를 폭파한다.",
    "cd": 10,
    "act": d(_0x22e10b)
  }],
  "swap": _0x2a8ac0,
  "passive": _0x1ae420,
  "awaken": [_0x50a0e0, _0x26095f, _0x3b08a2, _0x4df527, _0x18d28]
}, {
  "id": "nox",
  "name": "녹스",
  "title": "해골 강령술사",
  "rarity": 3,
  "type": "magic",
  "crest": "soul",
  "lore": "죽음을 연구하다 스스로 죽음이 된 마법사. 그가 부르는 해골들은 생전의 충성을 기억한다.",
  "atk": 36.8,
  "hp": 214,
  "speed": 1.8,
  "fx": "#b0ff90",
  "look": _0xdd4199,
  "combo": [l(_0x130898), d(_0x2abd84), _0x2f40d7],
  "air": d(_0x4a50fc),
  "dashAtk": _0xdcc496,
  "skills": [_0xfb308, _0x5369c6],
  "swap": _0x5a58b6,
  "passive": _0x108d84,
  "awaken": [_0x3360d2, _0x3e7795, _0x56b398, _0x1fa24b, _0xcd068e]
}, {
  "id": "raika",
  "name": "라이카",
  "title": "번개 창술사",
  "rarity": 3,
  "type": "ranged",
  "crest": "storm",
  "lore": "폭풍의 산에서 벼락을 맞고도 살아남은 창병. 그날 이후 그녀의 창끝에는 늘 번개가 깃든다.",
  "atk": 41.6,
  "hp": 229,
  "speed": 2,
  "fx": "#80d8ff",
  "look": _0x2483c3,
  "combo": [l(_0x37b816), l(_0x51411d), l(_0x2fa471), l(_0x504365)],
  "air": _0x5e232b,
  "dashAtk": l(_0x1166e9),
  "skills": [_0x4c542e, {
    "name": "낙뢰창",
    "desc": "창을 던져 꽂힌 자리에 낙뢰를 떨어뜨린다.",
    "cd": 9,
    "act": d(_0x5c8360)
  }],
  "swap": _0x4d4e75,
  "passive": _0x2569da,
  "awaken": [_0x33a705, _0x12b560, _0x49cc9b, _0x28d945, _0x3fcb85]
}, {
  "id": "balt",
  "name": "발트하르",
  "title": "몰락한 기사",
  "rarity": 4,
  "type": "power",
  "crest": "fury",
  "lore": "왕국 최강이라 불린 기사단장. 끝없는 왕의 배신에 쓰러졌으나, 그 원한은 대검보다 무겁다.",
  "atk": 65.6,
  "hp": 299,
  "speed": 1.7,
  "fx": "#ffb080",
  "look": _0xdcbada,
  "combo": [l(_0x6891d5), l(_0x4e9b98), l(_0x239629)],
  "air": _0x366ecc,
  "dashAtk": l(_0x2c6155),
  "skills": [_0x2fb419, _0x31cd8f],
  "swap": _0x49ed50,
  "passive": _0x3b952e,
  "awaken": [_0x38c93f, _0x2c780a, _0x456a55, _0x58d30a, _0x205820]
}, {
  "id": "sien",
  "name": "시엔",
  "title": "그림자 암살자",
  "rarity": 4,
  "type": "speed",
  "crest": "shadow",
  "lore": "왕실 첩보단 \"그림자 손\"의 마지막 단원. 그녀가 지나간 자리에는 발소리조차 남지 않는다.",
  "atk": 46.4,
  "hp": 203,
  "speed": 2.4,
  "fx": "#c0a0ff",
  "look": _0x32f539,
  "combo": [l(_0x1de37a), l(_0x434a41), l(_0x3b8751), l(_0x5ac8f4), l(_0xb49a62)],
  "air": l(_0x5beb49),
  "dashAtk": l(_0x5953b7),
  "skills": [_0x2b18d7, {
    "name": "단검 부채",
    "desc": "부채꼴로 단검 다섯 자루를 던져 출혈을 일으킨다.",
    "cd": 7,
    "act": d(_0x4ca3de)
  }],
  "swap": _0x3b3acc,
  "passive": _0x3bcfde,
  "awaken": [_0x465c32, _0x2959e0, _0x37e311, _0x445ec3, _0x45fae7]
}, {
  "id": "morga",
  "name": "모르가",
  "title": "사슬낫 사신",
  "rarity": 4,
  "type": "speed",
  "crest": "blood",
  "lore": "사자의 강을 건너는 이들을 인도하던 사신. 계약으로 묶인 지금은 산 자들의 피를 수확한다.",
  "atk": 49.6,
  "hp": 229,
  "speed": 2.05,
  "fx": "#ff5070",
  "look": _0x210d53,
  "combo": [l(_0x12870c), l(_0x4c9315), l(_0x5b3cd4), C(_0x189fbe)],
  "air": l(_0x3579af),
  "dashAtk": l(_0x21ef32),
  "skills": [_0x29f055, {
    "name": "피의 수확",
    "desc": "낫을 휘두르며 회전해 주변을 여섯 번 벤다. 회전 중 천천히 이동 가능.",
    "cd": 10,
    "act": C(_0x8043f5)
  }],
  "swap": {
    "name": "교대: 회귀하는 낫",
    "desc": "되돌아오는 낫을 던져 경로상의 적을 두 번 벤다.",
    "act": d(_0x29dab4)
  },
  "passive": _0x4598a4,
  "awaken": [_0x4f2870, _0x363161, _0x2d9867, _0x5ed7a4, _0x1c4914]
}, {
  "id": "aurelia",
  "name": "아우렐리아",
  "title": "방패 성기사",
  "rarity": 4,
  "type": "guard",
  "crest": "ward",
  "lore": "성소를 끝까지 지킨 성기사. 그녀의 방패가 무너졌을 때, 왕국도 함께 무너졌다.",
  "atk": 48,
  "hp": 347,
  "speed": 1.75,
  "fx": "#fff0a0",
  "look": _0x580849,
  "combo": [l(_0x37d549), l(_0x5dc95f), l(_0x59c7dd)],
  "air": _0x336be2,
  "dashAtk": l(_0x51890a),
  "skills": [_0x45f872, _0x3c67ef],
  "swap": _0x4a7b90,
  "passive": _0x389bd2,
  "awaken": [_0x25aff7, _0x23c12c, _0x199f19, _0x43717e, _0x290b53]
}, {
  "id": "eora",
  "name": "에오라",
  "title": "시간을 멈춘 마녀",
  "rarity": 4,
  "type": "magic",
  "crest": "frost",
  "lore": "왕국이 멸망하던 밤, 시계탑의 시간을 멈춰 혼자만 살아남은 마녀. 그 대가로 그녀의 시간은 영원히 겨울이다.",
  "atk": 46.4,
  "hp": 211,
  "speed": 1.9,
  "fx": "#a8e4ff",
  "look": _0x26beab,
  "combo": [d({
    "dur": 16,
    "t": 5,
    "m": 0.65,
    "p": w.orb("#a8e4ff", _0x1533a0),
    "s": "cast",
    "sfx": "proj"
  }), d({
    "dur": 16,
    "t": 5,
    "m": 0.65,
    "p": w.orb("#a8e4ff", _0x3526be),
    "s": "cast",
    "sfx": "proj"
  }), d({
    "dur": 26,
    "t": 8,
    "m": 0.55,
    "n": 3,
    "spread": 12,
    "p": w.orb("#d0f4ff", _0x310804),
    "w": "castUp",
    "s": "cast",
    "sfx": "freeze"
  })],
  "air": d({
    "dur": 16,
    "t": 4,
    "m": 0.65,
    "ang": 45,
    "air": !0,
    "grav": 0.35,
    "p": w.orb("#a8e4ff", _0x13778e),
    "s": "cast"
  }),
  "dashAtk": _0x39a886,
  "skills": [_0x22f29e, _0x34dd39],
  "swap": _0xc390b8,
  "passive": _0x278b3e,
  "awaken": [_0x151fc0, _0x16b6a9, _0x44910c, _0x1c1512, _0x3b1ca0]
}, {
  "id": "seres",
  "name": "세레스",
  "title": "저주받은 왕녀",
  "rarity": 5,
  "type": "guard",
  "crest": "shadow",
  "lore": "끝없는 왕의 유일한 혈육. 아버지의 저주를 몸에 새긴 채, 그 저주로 아버지를 끝내기 위해 계약에 응했다.",
  "atk": 65.6,
  "hp": 288,
  "speed": 2.15,
  "fx": "#ff80d0",
  "look": _0xf7123b,
  "combo": [l(_0x559c34), l(_0x468c11), l(_0x47ca46), C(_0x5cf5d3)],
  "air": l(_0x12252a),
  "dashAtk": l(_0x4bc1f4),
  "skills": [_0xdae885, _0x263cae],
  "swap": _0x2da759,
  "passive": _0x3c7ff6,
  "awaken": [_0x39bb8a, _0x1703a2, _0x35ddd1, _0x7677c9, _0x5e3846]
}, {
  "id": "drakan",
  "name": "드라칸",
  "title": "혼돈의 용기사",
  "rarity": 5,
  "type": "power",
  "crest": "flame",
  "lore": "혼돈의 용과 피를 나눈 기사. 용의 날개와 불꽃을 얻었지만, 인간이었던 기억은 잃어가고 있다.",
  "atk": 73.6,
  "hp": 310,
  "speed": 1.95,
  "fx": "#ff6a2a",
  "look": _0x5c2a70,
  "combo": [l(_0xbd2f88), l(_0x283ffb), C(_0x2a67c0), l(_0x656834)],
  "air": _0x22bdb2,
  "dashAtk": l(_0x2c43e1),
  "skills": [{
    "name": "용의 숨결",
    "desc": "전방으로 화염을 내뿜어 연속 피해와 화상을 입힌다.",
    "cd": 8,
    "act": {
      "dur": 48,
      "pose": [[0, "castUp"], [8, "cast"]],
      "armor": !0,
      "ev": [_0x476de9, ...[10, 14, 18, 22, 26, 30, 34, 38].map(_0x5cb318 => ({
        "t": _0x5cb318,
        "k": "proj",
        "p": _0x1d5774,
        "m": 0.42,
        "spread": 0,
        "ang": _0x5cb318 % 8 - 4
      })), _0x526e9a, _0x55fd09]
    }
  }, _0x3ac3d9],
  "swap": _0x5eff4f,
  "passive": _0xfac8f3,
  "awaken": [_0x560302, _0x52c720, _0x5a0ef3, _0x274929, _0x72c43a]
}, {
  "id": "astera",
  "name": "아스테라",
  "title": "별을 떨어뜨리는 점성술사",
  "rarity": 5,
  "type": "magic",
  "crest": "soul",
  "lore": "천문탑의 마지막 점성술사. 왕국의 멸망을 예언했으나 아무도 믿지 않았다. 이제 그녀는 별을 직접 떨어뜨린다.",
  "atk": 59.2,
  "hp": 229,
  "speed": 1.95,
  "fx": "#ffe680",
  "look": _0x4031c7,
  "combo": [d({
    "dur": 15,
    "t": 5,
    "m": 0.75,
    "p": w.star("#ffe680", _0x5b9cf0),
    "s": "cast",
    "sfx": "cast"
  }), d({
    "dur": 15,
    "t": 5,
    "m": 0.75,
    "p": w.star("#ffe680", _0x51236f),
    "s": "cast",
    "sfx": "cast"
  }), d({
    "dur": 26,
    "t": 8,
    "m": 0.65,
    "n": 3,
    "spread": 16,
    "p": w.star("#fff0b0", _0x3030c6),
    "w": "castUp",
    "s": "cast",
    "sfx": "cast"
  })],
  "air": d({
    "dur": 16,
    "t": 4,
    "m": 0.75,
    "ang": 40,
    "air": !0,
    "grav": 0.35,
    "p": w.star("#ffe680", _0xefc0b),
    "s": "cast"
  }),
  "dashAtk": _0x2f9879,
  "skills": [_0x296dd8, _0x10a137],
  "swap": _0x331711,
  "passive": _0x29f444,
  "awaken": [_0x329af4, _0x170bb2, _0x49b092, _0x36590a, _0x42b4be]
}];
(re.push(...ka), re.sort((_0xa689aa, _0x290b2f) => _0xa689aa.rarity - _0x290b2f.rarity));
const _0x16c3e6 = {
  power: "파워",
  speed: "스피드",
  ranged: "원거리",
  magic: "마법",
  guard: "방어"
};
const _0x311c77 = {
  power: "#ff8a5a",
  speed: "#6dffb0",
  ranged: "#ffe060",
  magic: "#a080ff",
  guard: "#80c0ff"
};
const _0x450335 = {
  power: "hit_power",
  speed: "hit_speed",
  ranged: "hit_ranged",
  magic: "hit_magic",
  guard: "hit_guard"
};
const _0x16bf96 = {
  vsBurn: 0.2
};
const _0x160016 = {
  stats: _0x16bf96
};
const _0x5b6a8d = {
  n: 2,
  desc: "화상 대상 피해 +20%",
  effects: [_0x160016]
};
const _0xedd728 = {
  k: "nova",
  r: 70,
  m: 1.8,
  el: "fire",
  st: "burn"
};
const _0x444488 = {
  on: "interval",
  every: 4,
  do: [_0xedd728]
};
const _0x2e3591 = {
  n: 4,
  desc: "4초마다 주변에 불기둥 폭발 (공격력 180%, 화상)",
  effects: [_0x444488]
};
const definition_inferno = {
  id: "inferno",
  name: "대화재",
  col: "#ff7a2a",
  pieces: ["ember_heart", "pyre_candle", "magma_core", "phoenix_feather"],
  tiers: [_0x5b6a8d, _0x2e3591]
};
const _0x1d215d = {
  lifesteal: 0.02
};
const _0x53757f = {
  stats: _0x1d215d
};
const _0x5e0595 = {
  n: 2,
  desc: "흡혈 +2%",
  effects: [_0x53757f]
};
const _0x26a32a = {
  atk: 0.06
};
const upgrade_feast = {
  k: "buff",
  id: "feast",
  stats: _0x26a32a,
  dur: 6,
  max: 5
};
const _0x24aa22 = {
  on: "kill",
  do: [upgrade_feast]
};
const _0x432fac = {
  n: 4,
  desc: "처치 시 6초간 공격력 +6% (최대 5중첩)",
  effects: [_0x24aa22]
};
const definition_feast = {
  id: "feast",
  name: "피의 연회",
  col: "#d8203a",
  pieces: ["vampire_tooth", "crimson_chalice", "butcher_cleaver", "thorn_crown"],
  tiers: [_0x5e0595, _0x432fac]
};
const _0x20742b = {
  vsShock: 0.2
};
const _0x8c3ccd = {
  stats: _0x20742b
};
const _0x486eae = {
  n: 2,
  desc: "감전 대상 피해 +20%",
  effects: [_0x8c3ccd]
};
const _0x247251 = {
  k: "strike",
  m: 1.6,
  el: "thunder"
};
const _0x480cfa = {
  on: "interval",
  every: 2.5,
  do: [_0x247251]
};
const _0x5af154 = {
  n: 4,
  desc: "2.5초마다 낙뢰 (공격력 160%)",
  effects: [_0x480cfa]
};
const definition_tempest = {
  id: "tempest",
  name: "폭풍의 왕관",
  col: "#7fd8ff",
  pieces: ["storm_rod", "thunder_drum", "static_cloak", "sky_eye"],
  tiers: [_0x486eae, _0x5af154]
};
const _0x44e907 = {
  crit: 0.08
};
const _0x4c224c = {
  stats: _0x44e907
};
const _0x4d9b30 = {
  n: 2,
  desc: "치명타 확률 +8%",
  effects: [_0x4c224c]
};
const _0x30bbe6 = {
  critDmg: 0.4
};
const _0x437837 = {
  stats: _0x30bbe6
};
const _0x28bcc0 = {
  allDmg: 0.3
};
const definition_nightblade = {
  k: "buff",
  id: "nightblade",
  stats: _0x28bcc0,
  dur: 2
};
const _0x2a4241 = {
  on: "dash",
  do: [definition_nightblade]
};
const _0x2a55c0 = {
  n: 4,
  desc: "치명타 피해 +40%. 대시 후 2초간 모든 피해 +30%",
  effects: [_0x437837, _0x2a4241]
};
const definition_nightblade_199944 = {
  id: "nightblade",
  name: "밤의 암살자",
  col: "#9a6bff",
  pieces: ["smoke_bomb", "night_mask", "assassin_mark", "twin_shadow"],
  tiers: [_0x4d9b30, _0x2a55c0]
};
const _0x29929b = {
  dmgTaken: -0.08
};
const _0x20ac24 = {
  stats: _0x29929b
};
const _0x3df44b = {
  n: 2,
  desc: "받는 피해 -8%",
  effects: [_0x20ac24]
};
const _0x33a7d0 = {
  k: "shield",
  v: 0.2
};
const _0x3f42ce = {
  on: "roomStart",
  do: [_0x33a7d0]
};
const _0x520cc7 = {
  allDmg: 0.15
};
const _0x4c1313 = {
  cond: "shielded",
  stats: _0x520cc7
};
const _0x38c22f = {
  n: 4,
  desc: "방 입장 시 보호막 (최대 체력 20%). 보호막이 있으면 모든 피해 +15%",
  effects: [_0x3f42ce, _0x4c1313]
};
const definition_citadel = {
  id: "citadel",
  name: "성채",
  col: "#ffd76a",
  pieces: ["oak_buckler", "saint_relic", "iron_will", "aegis_shard"],
  tiers: [_0x3df44b, _0x38c22f]
};
const _0x2a4c33 = {
  atk: 0.08
};
const _0x449bf9 = {
  stats: _0x2a4c33
};
const _0x51eaed = {
  n: 2,
  desc: "공격력 +8%",
  effects: [_0x449bf9]
};
const _0x32f619 = {
  finDmg: 0.4,
  eliteDmg: 0.15,
  bossDmg: 0.15
};
const _0x384a25 = {
  stats: _0x32f619
};
const _0xdf82fc = {
  n: 4,
  desc: "콤보 마지막 타 피해 +40%, 정예·보스 피해 +15%",
  effects: [_0x384a25]
};
const definition_berserker = {
  id: "berserker",
  name: "광전사의 의식",
  col: "#ff4b2a",
  pieces: ["berserk_horn", "war_paint", "titan_belt", "executioner"],
  tiers: [_0x51eaed, _0xdf82fc]
};
const _0x49de22 = {
  mspd: 0.1,
  dashCdr: 0.15
};
const _0x56f616 = {
  stats: _0x49de22
};
const _0x5238e2 = {
  n: 2,
  desc: "이동 속도 +10%, 대시 쿨타임 -15%",
  effects: [_0x56f616]
};
const _0x3ff713 = {
  swapDmg: 0.6
};
const _0x3dacf1 = {
  stats: _0x3ff713
};
const _0x367ab3 = {
  aspd: 0.25
};
const definition_herald = {
  k: "buff",
  id: "herald",
  stats: _0x367ab3,
  dur: 4
};
const _0x2e6661 = {
  on: "swap",
  do: [definition_herald]
};
const _0x5c7d05 = {
  n: 4,
  desc: "교대 공격 피해 +60%, 교대 후 4초간 공격 속도 +25%",
  effects: [_0x3dacf1, _0x2e6661]
};
const definition_herald_432a27 = {
  id: "herald",
  name: "바람의 전령",
  col: "#6dffb0",
  pieces: ["wind_boots", "feather_cape", "relay_baton", "hermes_coin"],
  tiers: [_0x5238e2, _0x5c7d05]
};
const _0x3ab956 = {
  cdr: 0.1
};
const _0x13fe22 = {
  stats: _0x3ab956
};
const _0x19cdff = {
  n: 2,
  desc: "스킬 쿨타임 -10%",
  effects: [_0x13fe22]
};
const _0x5beaa2 = {
  skillDmg: 0.3
};
const _0x35d852 = {
  stats: _0x5beaa2
};
const _0x28e75d = {
  k: "cdr",
  v: 0.3
};
const _0xbfebe5 = {
  on: "kill",
  do: [_0x28e75d]
};
const _0x23b3cc = {
  n: 4,
  desc: "스킬 피해 +30%, 처치 시 스킬 쿨타임 0.3초 감소",
  effects: [_0x35d852, _0xbfebe5]
};
const definition_reaper = {
  id: "reaper",
  name: "영혼 수확",
  col: "#9ef0ff",
  pieces: ["soul_jar", "grimoire", "spirit_chain", "reaper_hourglass"],
  tiers: [_0x19cdff, _0x23b3cc]
};
const _0x160734 = {
  vsPoison: 0.15
};
const _0x41bc76 = {
  stats: _0x160734
};
const _0x892d36 = {
  n: 2,
  desc: "독 대상 피해 +15%",
  effects: [_0x41bc76]
};
const _0xc322f4 = {
  dotDmg: 0.6
};
const _0x43c26b = {
  stats: _0xc322f4
};
const _0x41da3a = {
  k: "nova",
  r: 60,
  m: 0.8,
  el: "poison",
  st: "poison"
};
const _0x3f53c2 = {
  on: "interval",
  every: 3,
  do: [_0x41da3a]
};
const _0xb87f39 = {
  n: 4,
  desc: "지속 피해 +60%. 3초마다 주변에 독 폭발 (공격력 80%)",
  effects: [_0x43c26b, _0x3f53c2]
};
const definition_plague = {
  id: "plague",
  name: "역병의 정원",
  col: "#8bdc3a",
  pieces: ["toad_venom", "plague_mask", "spore_sac", "hydra_fang"],
  tiers: [_0x892d36, _0xb87f39]
};
const _0x52ea71 = {
  vsFrozen: 0.2
};
const _0x42231f = {
  stats: _0x52ea71
};
const _0x1fe1d4 = {
  n: 2,
  desc: "빙결 대상 피해 +20%",
  effects: [_0x42231f]
};
const _0xc5f231 = {
  k: "status",
  s: "chill"
};
const _0xcc16ce = {
  on: "hit",
  chance: 0.2,
  do: [_0xc5f231]
};
const _0x243c17 = {
  allDmg: 0.1
};
const _0x307a03 = {
  stats: _0x243c17
};
const _0x4415f9 = {
  n: 4,
  desc: "공격 시 20% 확률로 냉기, 모든 피해 +10%",
  effects: [_0xcc16ce, _0x307a03]
};
const definition_winter = {
  id: "winter",
  name: "영원한 겨울",
  col: "#a8e4ff",
  pieces: ["frost_ring", "glacier_heart", "winter_bell", "eternal_ice"],
  tiers: [_0x1fe1d4, _0x4415f9]
};
const _0x588884 = {
  gold: 0.3,
  crit: 0.05
};
const _0x6cc1c7 = {
  stats: _0x588884
};
const _0x36df11 = {
  n: 2,
  desc: "금화 획득 +30%, 치명타 확률 +5%",
  effects: [_0x6cc1c7]
};
const _0x3cc929 = {
  allDmg: 0.15
};
const _0x17a271 = {
  stats: _0x3cc929
};
const _0xe25b58 = {
  k: "gold",
  v: 1
};
const _0x265d9f = {
  on: "kill",
  do: [_0xe25b58]
};
const _0x2e239a = {
  n: 3,
  desc: "모든 피해 +15%, 처치 시 금화 +1",
  effects: [_0x17a271, _0x265d9f]
};
const definition_fortune = {
  id: "fortune",
  name: "도박사의 밤",
  col: "#ffe060",
  pieces: ["gambler_dice", "golden_idol", "kings_seal"],
  tiers: [_0x36df11, _0x2e239a]
};
re.push(makeEightHero(re.find(hero => hero.id === "caelus"), re.find(hero => hero.id === "hanbyeol")));
const T = Object.fromEntries(re.map(_0x1d396d => [_0x1d396d.id, _0x1d396d])), pe = "kael", ue = "rusty_blade", Gr = _0x16c3e6, Nr = _0x311c77, Kr = _0x450335, ye = [definition_inferno, definition_feast, definition_tempest, definition_nightblade_199944, definition_citadel, definition_berserker, definition_herald_432a27, definition_reaper, definition_plague, definition_winter, definition_fortune], Ir = Object.fromEntries(ye.map(_0xb2ab5b => [_0xb2ab5b.id, _0xb2ab5b])), ba = Object.fromEntries(ye.flatMap(_0x62d58e => _0x62d58e.pieces.map(_0x454da9 => [_0x454da9, _0x62d58e])));
function $r(_0x38ed39) {
  const _0x511fc8 = [];
  for (const _0x36274a of ye) {
    const _0x5a7d23 = _0x36274a.pieces.filter(_0x4f4635 => _0x38ed39.includes(_0x4f4635)).length;
    _0x5a7d23 && _0x511fc8.push({
      "id": _0x36274a.id,
      "count": _0x5a7d23,
      "tier": _0x36274a.tiers.filter(_0x38a476 => _0x5a7d23 >= _0x38a476.n).length
    });
  }
  return (_0x511fc8.sort((_0x1be9a5, _0x2cb4e0) => _0x2cb4e0.tier - _0x1be9a5.tier || _0x2cb4e0.count - _0x1be9a5.count), _0x511fc8);
}
class ga {
  s;
  constructor(_0x2585e9 = Math.random() * 4294967295 >>> 0) {
    const _0x1bf5e5 = {
      YykVa: function (_0x5b125a, _0x266b8b) {
        return _0x5b125a >>> _0x266b8b;
      }
    };
    const _0xfba7d1 = _0x1bf5e5;
    this.s = _0x2585e9 >>> 0;
  }
  get state() {
    return this.s;
  }
  set state(_0xdc5770) {
    const _0x3b0534 = {
      DxLnP: function (_0x16d4f1, _0x36fe2b) {
        return _0x16d4f1 >>> _0x36fe2b;
      }
    };
    const _0x3f4779 = _0x3b0534;
    this.s = _0xdc5770 >>> 0;
  }
  next() {
    const _0x57e668 = {
      gqGsa: function (_0x4aa8db, _0xfa4763) {
        return _0x4aa8db + _0xfa4763;
      }
    };
    (_0x57e668.JtArf = function (_0xa15fb3, _0x467a60) {
      return _0xa15fb3 | _0x467a60;
    }, _0x57e668.CZgfN = function (_0x5af759, _0xe0d689) {
      return _0x5af759 >>> _0xe0d689;
    });
    const _0x5ed2b4 = _0x57e668;
    let _0x5dcd00 = this.s = this.s + 1831565813 >>> 0;
    return (_0x5dcd00 = Math.imul(_0x5dcd00 ^ _0x5dcd00 >>> 15, _0x5dcd00 | 1), _0x5dcd00 ^= _0x5dcd00 + Math.imul(_0x5dcd00 ^ _0x5dcd00 >>> 7, _0x5ed2b4.JtArf(_0x5dcd00, 61)), _0x5ed2b4.CZgfN(_0x5dcd00 ^ _0x5dcd00 >>> 14, 0) / 4294967296);
  }
  range(_0x4e5d21, _0x46ceca) {
    const _0x347559 = {
      pwjpp: function (_0x35a21e, _0x22b234) {
        return _0x35a21e + _0x22b234;
      },
      kQLiW: function (_0xba8d3, _0x294c42) {
        return _0xba8d3 - _0x294c42;
      }
    };
    const _0x226166 = _0x347559;
    return _0x4e5d21 + (_0x46ceca - _0x4e5d21) * this.next();
  }
  int(_0x2c2365, _0x978085) {
    return Math.floor(this.range(_0x2c2365, _0x978085 + 1));
  }
  chance(_0x528d62) {
    return this.next() < _0x528d62;
  }
  pick(_0x2565e6) {
    return _0x2565e6[Math.floor(this.next() * _0x2565e6.length)];
  }
  shuffle(_0x392ffa) {
    for (let _0x500aba = _0x392ffa.length - 1; _0x500aba > 0; _0x500aba--) {
      const _0x18b611 = Math.floor(this.next() * (_0x500aba + 1)), _0x1ee191 = _0x392ffa[_0x500aba];
      (_0x392ffa[_0x500aba] = _0x392ffa[_0x18b611], _0x392ffa[_0x18b611] = _0x1ee191);
    }
    return _0x392ffa;
  }
  weighted(_0x42a5e0, _0x59f6f7) {
    let _0x1a4d8b = 0;
    for (const _0x47cfeb of _0x42a5e0) _0x1a4d8b += Math.max(0, _0x59f6f7(_0x47cfeb));
    let _0x1dc060 = this.next() * _0x1a4d8b;
    for (const _0x168581 of _0x42a5e0) if ((_0x1dc060 -= Math.max(0, _0x59f6f7(_0x168581)), _0x1dc060 <= 0)) return _0x168581;
    return _0x42a5e0[_0x42a5e0.length - 1];
  }
}
const _0x3bf009 = {
  n: 141,
  name: "마른 잉크의 평원",
  boss: "craxen",
  bg: ["#1c1814", "#2c261e", "#3e3428"],
  tile: ["#5a4e3e", "#e0c890", "#2a241c"],
  ambient: "#060402",
  dark: 0.42,
  light: "#ffe0a0",
  music: "s141",
  particles: "dust",
  gimmicks: ["collapse"],
  desc: "갈라지는 마른 잉크 · 바닥 붕괴"
};
const _0x409a90 = {
  n: 142,
  name: "오탈자 시장",
  boss: "misprin",
  bg: ["#1a1020", "#2a1a32", "#3c2646"],
  tile: ["#5a4060", "#ff90c0", "#2a1c30"],
  ambient: "#060208",
  dark: 0.45,
  light: "#ff90c0",
  music: "s142",
  particles: "spark",
  gimmicks: ["wind"],
  desc: "잘못 찍힌 글자의 노점 · 바람"
};
const _0x4e9d35 = {
  n: 143,
  name: "뒤집힌 활자굴",
  boss: "reverso",
  bg: ["#0e1016", "#181c28", "#22283a"],
  tile: ["#3e4458", "#a0e0ff", "#1c2030"],
  ambient: "#020306",
  dark: 0.55,
  light: "#a0e0ff",
  music: "s143",
  particles: "dust",
  gimmicks: ["gravity"],
  desc: "거꾸로 박힌 활자 · 중력 반전"
};
const _0x276e4c = {
  n: 144,
  name: "책갈피 협곡",
  boss: "marka",
  bg: ["#22140e", "#341e14", "#48281a"],
  tile: ["#6a4430", "#ff9060", "#30200e"],
  ambient: "#080200",
  dark: 0.38,
  light: "#ffb080",
  music: "s144",
  particles: "leaf",
  hazard: "void",
  gimmicks: ["wind"],
  desc: "펄럭이는 책갈피 · 바람"
};
const _0x548d42 = {
  n: 145,
  name: "거울 문단",
  boss: "echora",
  bg: ["#10141c", "#1c2232", "#2a324a"],
  tile: ["#4a5470", "#e0f0ff", "#20263a"],
  ambient: "#02040a",
  dark: 0.4,
  light: "#e0f0ff",
  music: "s145",
  particles: "star",
  slippery: !0,
  gimmicks: ["mirror"],
  desc: "서로를 비추는 문단 · 거울 분신"
};
const _0x498800 = {
  n: 146,
  name: "균열의 심장",
  boss: "errata",
  bg: ["#160406", "#28080c", "#3c0e14"],
  tile: ["#4a1e24", "#ff4050", "#220a0e"],
  ambient: "#060000",
  dark: 0.58,
  light: "#ff5060",
  music: "s146",
  particles: "ash",
  hazard: "void",
  gimmicks: ["collapse"],
  desc: "오탈자의 어미 · 바닥 붕괴"
};
const _0x1a7e93 = {
  n: 151,
  name: "모래시계 사구",
  boss: "sablon",
  bg: ["#2a1e0e", "#3e2c14", "#56401e"],
  tile: ["#8a6a3a", "#ffe0a0", "#3e2e18"],
  ambient: "#0a0602",
  dark: 0.32,
  light: "#fff0c0",
  music: "s151",
  particles: "dust",
  gimmicks: ["wind"],
  desc: "위로 떨어지는 모래 · 바람"
};
const _0x32e3d0 = {
  n: 152,
  name: "멈춘 분수 정원",
  boss: "fontaine",
  bg: ["#0a161a", "#12262c", "#1c3a40"],
  tile: ["#3a5a5a", "#a0fff0", "#1a2c2c"],
  ambient: "#020606",
  dark: 0.42,
  light: "#a0fff0",
  music: "s152",
  particles: "bubble",
  gimmicks: ["gravity"],
  desc: "물을 삼키는 분수 · 중력 반전"
};
const _0x5c324e = {
  n: 153,
  name: "거꾸로 도는 시계 공방",
  boss: "cogwin",
  bg: ["#1a1408", "#2c220e", "#403216"],
  tile: ["#6a5428", "#ffd060", "#2e2410"],
  ambient: "#060400",
  dark: 0.48,
  light: "#ffd060",
  music: "s153",
  particles: "spark",
  gimmicks: ["collapse"],
  desc: "역회전하는 태엽 · 바닥 붕괴"
};
const _0x59fbe1 = {
  n: 154,
  name: "어제의 거리",
  boss: "yestra",
  bg: ["#141420", "#202034", "#2e2e4a"],
  tile: ["#4a4a62", "#d0c0ff", "#22222e"],
  ambient: "#040408",
  dark: 0.5,
  light: "#d0c0ff",
  music: "s154",
  particles: "petal",
  gimmicks: ["mirror"],
  desc: "어제의 내가 걷는 거리 · 거울 분신"
};
const _0x2d02c1 = {
  n: 155,
  name: "연표의 탑",
  boss: "annalis",
  bg: ["#0c0e1a", "#14182c", "#1e2442"],
  tile: ["#3a4062", "#ffe8a0", "#1a1e30"],
  ambient: "#020208",
  dark: 0.5,
  light: "#ffe8a0",
  music: "s155",
  particles: "star",
  hazard: "void",
  gimmicks: ["wind"],
  desc: "쌓아 올린 연표 · 바람"
};
const _0x3fa527 = {
  n: 156,
  name: "되감기는 왕좌",
  boss: "chronica",
  bg: ["#100a02", "#201606", "#32240c"],
  tile: ["#4a3a18", "#ffe070", "#221a08"],
  ambient: "#000000",
  dark: 0.55,
  light: "#ffe070",
  music: "s156",
  particles: "spark",
  hazard: "void",
  gimmicks: ["gravity"],
  desc: "연대기의 수호자 · 중력 반전"
};
const _0x52dfcf = {
  n: 161,
  name: "낱장이 뜨는 들판",
  boss: "flotta",
  bg: ["#1c2a3a", "#2a3e54", "#3a5470"],
  tile: ["#5a7a6a", "#e0fff0", "#2a3a34"],
  ambient: "#060c12",
  dark: 0.28,
  light: "#e0fff0",
  music: "s161",
  particles: "petal",
  gimmicks: ["gravity"],
  desc: "떠오르는 종이 · 중력 반전"
};
const _0x4c40e8 = {
  n: 162,
  name: "거꾸로 매달린 숲",
  boss: "hangel",
  bg: ["#0a140c", "#122216", "#1a3020"],
  tile: ["#3a5a3a", "#c0ff90", "#1a2a1a"],
  ambient: "#020402",
  dark: 0.48,
  light: "#c0ff90",
  music: "s162",
  particles: "leaf",
  gimmicks: ["gravity"],
  desc: "뿌리가 하늘로 뻗은 숲 · 중력 반전"
};
const _0x1a39b = {
  n: 163,
  name: "끈다리 하늘섬",
  boss: "tethra",
  bg: ["#16243a", "#203452", "#2c486e"],
  tile: ["#5a6a84", "#c0e0ff", "#26303e"],
  ambient: "#040810",
  dark: 0.32,
  light: "#c0e0ff",
  music: "s163",
  particles: "snow",
  hazard: "void",
  gimmicks: ["wind"],
  desc: "섬을 잇는 끈 · 바람"
};
const _0x45914e = {
  n: 164,
  name: "무게가 사라진 탑",
  boss: "pondus",
  bg: ["#141018", "#221a2a", "#32263e"],
  tile: ["#54465e", "#ffd0ff", "#261e2c"],
  ambient: "#040206",
  dark: 0.48,
  light: "#ffd0ff",
  music: "s164",
  particles: "spark",
  gimmicks: ["collapse"],
  desc: "떠다니는 벽돌 · 바닥 붕괴"
};
const _0x5aafda = {
  n: 165,
  name: "구름 바다",
  boss: "nimbra",
  bg: ["#2a3444", "#3c4a60", "#52627e"],
  tile: ["#8a98b0", "#ffffff", "#3e4658"],
  ambient: "#080a10",
  dark: 0.25,
  light: "#ffffff",
  music: "s165",
  particles: "snow",
  hazard: "void",
  gimmicks: ["gravity"],
  desc: "위아래가 바뀌는 구름 · 중력 반전"
};
const _0x138da9 = {
  n: 166,
  name: "무게를 잃은 왕좌",
  boss: "gravis",
  bg: ["#08060e", "#120e1e", "#1e1830"],
  tile: ["#2e2840", "#a0c0ff", "#16121e"],
  ambient: "#000000",
  dark: 0.55,
  light: "#a0c0ff",
  music: "s166",
  particles: "void",
  hazard: "void",
  gimmicks: ["mirror"],
  desc: "무게를 잃은 왕 · 거울 분신"
};
const _0xa03f70 = {
  n: 171,
  name: "가면 복도",
  boss: "masquer",
  bg: ["#160a0e", "#261218", "#381c24"],
  tile: ["#54303a", "#ffc0a0", "#2a161c"],
  ambient: "#040002",
  dark: 0.5,
  light: "#ffc0a0",
  music: "s171",
  particles: "dust",
  gimmicks: ["mirror"],
  desc: "가면이 걸린 분장실 · 거울 분신"
};
const _0x6bb124 = {
  n: 172,
  name: "거울 무대",
  boss: "speculo",
  bg: ["#0e0e16", "#181828", "#24243c"],
  tile: ["#44445c", "#f0f0ff", "#1e1e2a"],
  ambient: "#020204",
  dark: 0.42,
  light: "#f0f0ff",
  music: "s172",
  particles: "star",
  slippery: !0,
  gimmicks: ["mirror"],
  desc: "늘어선 거울 · 거울 분신"
};
const _0x596a6f = {
  n: 173,
  name: "객석 아래 통로",
  boss: "umbrina",
  bg: ["#08080a", "#121216", "#1c1c22"],
  tile: ["#34343e", "#ff6070", "#18181c"],
  ambient: "#000000",
  dark: 0.66,
  light: "#ff6070",
  music: "s173",
  particles: "shadow",
  gimmicks: ["collapse"],
  desc: "그림자 통로 · 바닥 붕괴"
};
const _0x4a1398 = {
  n: 174,
  name: "리허설 무대",
  boss: "rehearsa",
  bg: ["#1a1006", "#2c1c0a", "#402a10"],
  tile: ["#6a4a24", "#ffd890", "#2e200e"],
  ambient: "#060300",
  dark: 0.42,
  light: "#ffd890",
  music: "s174",
  particles: "petal",
  gimmicks: ["gravity"],
  desc: "비친 자들의 연습 · 중력 반전"
};
const _0x18615b = {
  n: 175,
  name: "꺼진 조명의 천장",
  boss: "luminar",
  bg: ["#060810", "#0e1220", "#161c32"],
  tile: ["#2a3048", "#fff0a0", "#12141e"],
  ambient: "#000002",
  dark: 0.62,
  light: "#fff0a0",
  music: "s175",
  particles: "spark",
  hazard: "void",
  gimmicks: ["wind"],
  desc: "흔들리는 조명 · 바람"
};
const _0x18cecb = {
  n: 176,
  name: "가면의 무대",
  boss: "persona",
  bg: ["#14040e", "#24081a", "#380e28"],
  tile: ["#4a1a38", "#ff80d0", "#22081a"],
  ambient: "#040002",
  dark: 0.55,
  light: "#ff80d0",
  music: "s176",
  particles: "petal",
  hazard: "void",
  gimmicks: ["mirror"],
  desc: "가면 연출가 · 거울 분신"
};
const _0xffe438 = {
  n: 181,
  name: "풀무 작업장",
  boss: "bellowsa",
  bg: ["#1a1410", "#2a2018", "#3c2e22"],
  tile: ["#5a4836", "#ffb070", "#2a2018"],
  ambient: "#060402",
  dark: 0.42,
  light: "#ffb070",
  music: "s181",
  particles: "ash",
  gimmicks: ["wind"],
  desc: "숨 쉬는 풀무 · 바람"
};
const _0x3f4288 = {
  n: 182,
  name: "실타래 창고",
  boss: "skeina",
  bg: ["#16101a", "#241a2a", "#34263e"],
  tile: ["#56425e", "#ffa0d0", "#28202c"],
  ambient: "#040206",
  dark: 0.48,
  light: "#ffa0d0",
  music: "s182",
  particles: "dust",
  gimmicks: ["collapse"],
  desc: "굴러다니는 실타래 · 바닥 붕괴"
};
const _0x5b4eac = {
  n: 183,
  name: "바늘비 지붕",
  boss: "acuto",
  bg: ["#0e141a", "#16202a", "#202e3c"],
  tile: ["#3e4c5a", "#d0e8ff", "#1a222a"],
  ambient: "#020406",
  dark: 0.45,
  light: "#d0e8ff",
  music: "s183",
  particles: "rain",
  gimmicks: ["wind"],
  desc: "쏟아지는 바늘 · 바람"
};
const _0x4b8437 = {
  n: 184,
  name: "풀칠 회랑",
  boss: "glutina",
  bg: ["#141a0a", "#202a10", "#2e3c18"],
  tile: ["#4a5a2a", "#e0ff90", "#222a12"],
  ambient: "#040600",
  dark: 0.45,
  light: "#e0ff90",
  music: "s184",
  particles: "bubble",
  slippery: !0,
  gimmicks: ["gravity"],
  desc: "마르지 않는 풀 · 중력 반전"
};
const _0x126a18 = {
  n: 185,
  name: "폭풍 탑",
  boss: "turbina",
  bg: ["#0a0e1a", "#121a2e", "#1c2846"],
  tile: ["#36446a", "#a0d0ff", "#181e30"],
  ambient: "#02040a",
  dark: 0.48,
  light: "#a0d0ff",
  music: "s185",
  particles: "rain",
  hazard: "void",
  gimmicks: ["wind"],
  desc: "책등을 꿰매는 폭풍 · 바람"
};
const _0x2c9904 = {
  n: 186,
  name: "제본대",
  boss: "sibyra",
  bg: ["#120c06", "#22180c", "#342412"],
  tile: ["#4a3a20", "#ffe0a0", "#20180c"],
  ambient: "#000000",
  dark: 0.55,
  light: "#ffe0a0",
  music: "s186",
  particles: "ash",
  hazard: "void",
  gimmicks: ["mirror"],
  desc: "제본 장인 · 거울 분신"
};
const _0x2578c3 = {
  n: 191,
  name: "기울어진 열람실",
  boss: "tilda",
  bg: ["#16120e", "#241e16", "#342c20"],
  tile: ["#5a4c3a", "#f0d8a0", "#28221a"],
  ambient: "#040302",
  dark: 0.45,
  light: "#f0d8a0",
  music: "s191",
  particles: "dust",
  gimmicks: ["collapse"],
  desc: "기울어진 서가 · 바닥 붕괴"
};
const _0x54a20c = {
  n: 192,
  name: "꺼지는 바닥",
  boss: "sinkra",
  bg: ["#0c0e12", "#161a20", "#202630"],
  tile: ["#3a4250", "#c0d0e0", "#1a1e26"],
  ambient: "#020304",
  dark: 0.52,
  light: "#c0d0e0",
  music: "s192",
  particles: "ash",
  hazard: "void",
  gimmicks: ["collapse"],
  desc: "물결치는 바닥 · 바닥 붕괴"
};
const _0x59ebba = {
  n: 193,
  name: "금서 보관실",
  boss: "catena",
  bg: ["#140808", "#220e0e", "#341616"],
  tile: ["#4a2a2a", "#ff7060", "#221212"],
  ambient: "#040000",
  dark: 0.58,
  light: "#ff7060",
  music: "s193",
  particles: "blood",
  gimmicks: ["wind"],
  desc: "쇠사슬 금서 · 바람"
};
const _0x4d5ecb = {
  n: 194,
  name: "먼지 폭포 계단",
  boss: "pulvera",
  bg: ["#1a1610", "#2a241a", "#3e3426"],
  tile: ["#6a5c46", "#fff0d0", "#2e281e"],
  ambient: "#060402",
  dark: 0.4,
  light: "#fff0d0",
  music: "s194",
  particles: "dust",
  gimmicks: ["gravity"],
  desc: "쏟아지는 먼지 · 중력 반전"
};
const _0x1356ac = {
  n: 195,
  name: "허물어지는 돔",
  boss: "cupola",
  bg: ["#0a0a12", "#141420", "#202034"],
  tile: ["#3a3a52", "#d0b0ff", "#1a1a26"],
  ambient: "#020206",
  dark: 0.55,
  light: "#d0b0ff",
  music: "s195",
  particles: "shadow",
  hazard: "void",
  gimmicks: ["mirror"],
  desc: "무너지는 천장 · 거울 분신"
};
const _0x127b9d = {
  n: 196,
  name: "서고의 끝",
  boss: "ruina",
  bg: ["#100406", "#1e080c", "#300e14"],
  tile: ["#3e1a20", "#ff6080", "#1c0a0e"],
  ambient: "#000000",
  dark: 0.58,
  light: "#ff6080",
  music: "s196",
  particles: "ash",
  hazard: "void",
  gimmicks: ["collapse"],
  desc: "서고를 허무는 자 · 바닥 붕괴"
};
const _0x359de0 = {
  n: 201,
  name: "오탈자의 둥지",
  boss: "erratum_echo",
  bg: ["#140608", "#240c10", "#381418"],
  tile: ["#4a2228", "#ff6070", "#220c10"],
  ambient: "#040000",
  dark: 0.55,
  light: "#ff6070",
  music: "s201",
  particles: "ash",
  gimmicks: ["collapse", "mirror"],
  desc: "갈라진 여백의 메아리 · 붕괴 + 거울"
};
const _0x493fd3 = {
  n: 202,
  name: "되감기는 시계탑",
  boss: "chrono_echo",
  bg: ["#120e04", "#221a08", "#36280e"],
  tile: ["#4e3e1a", "#ffe070", "#241c0a"],
  ambient: "#020100",
  dark: 0.52,
  light: "#ffe070",
  music: "s202",
  particles: "spark",
  hazard: "void",
  gimmicks: ["gravity", "wind"],
  desc: "연대기의 메아리 · 중력 + 바람"
};
const _0x80f34a = {
  n: 203,
  name: "떠오르는 잔해",
  boss: "gravis_echo",
  bg: ["#0c1220", "#141e34", "#1e2c4c"],
  tile: ["#3a4a6a", "#c0e0ff", "#1a2232"],
  ambient: "#02040a",
  dark: 0.45,
  light: "#c0e0ff",
  music: "s203",
  particles: "snow",
  gimmicks: ["gravity", "collapse"],
  desc: "무게의 메아리 · 중력 + 붕괴"
};
const _0x16a2da = {
  n: 204,
  name: "깨진 거울 극장",
  boss: "persona_echo",
  bg: ["#120412", "#200820", "#340e34"],
  tile: ["#4a1e4a", "#ff90ff", "#200a20"],
  ambient: "#040004",
  dark: 0.55,
  light: "#ff90ff",
  music: "s204",
  particles: "petal",
  gimmicks: ["mirror", "wind"],
  desc: "대역의 메아리 · 거울 + 바람"
};
const _0x4f2448 = {
  n: 205,
  name: "무너지는 제본탑",
  boss: "binder_echo",
  bg: ["#0a0c14", "#121828", "#1c243e"],
  tile: ["#343e5a", "#a0d0ff", "#161c2a"],
  ambient: "#000206",
  dark: 0.55,
  light: "#a0d0ff",
  music: "s205",
  particles: "rain",
  hazard: "void",
  gimmicks: ["wind", "collapse"],
  desc: "바람과 무너짐의 메아리 · 바람 + 붕괴"
};
const _0x11907e = {
  n: 206,
  name: "교정자의 방",
  boss: "correxia",
  bg: ["#e8e0d0", "#c8b8a8", "#a08878"],
  tile: ["#2e2422", "#ff3040", "#160e0c"],
  ambient: "#100404",
  dark: 0.38,
  light: "#ff3040",
  music: "s206",
  particles: "ash",
  hazard: "void",
  gimmicks: ["mirror", "gravity"],
  desc: "붉은 펜의 교정자"
};
const _0x383881 = {
  n: 211,
  name: "잉크가 번진 들판",
  boss: "blotta",
  bg: ["#141a16", "#1e2a22", "#2c3c30"],
  tile: ["#3e5446", "#a0ffc0", "#1c2a22"],
  ambient: "#020604",
  dark: 0.42,
  light: "#a0ffc0",
  music: "s211",
  particles: "spore",
  gimmicks: ["poison"],
  desc: "번진 잉크가 피어오르는 들판 · 독 안개"
};
const _0x4553f3 = {
  n: 212,
  name: "젖은 원고의 늪",
  boss: "marsha",
  bg: ["#10160e", "#1a2416", "#283620"],
  tile: ["#3a4a2c", "#d0ff80", "#1a2410"],
  ambient: "#020400",
  dark: 0.48,
  light: "#d0ff80",
  music: "s212",
  particles: "bubble",
  slippery: !0,
  gimmicks: ["blink"],
  desc: "물에 젖은 원고 · 사라지는 발판"
};
const _0x46c0d3 = {
  n: 213,
  name: "먹물 안개 숲",
  boss: "nebulo",
  bg: ["#0c1012", "#141c20", "#1e2a30"],
  tile: ["#2e3e44", "#90e0d0", "#141c20"],
  ambient: "#000204",
  dark: 0.55,
  light: "#90e0d0",
  music: "s213",
  particles: "shadow",
  gimmicks: ["poison"],
  desc: "먹물 안개가 깔린 숲 · 독 안개"
};
const _0x77393 = {
  n: 214,
  name: "흘러내린 문단 계곡",
  boss: "cursiva",
  bg: ["#1a1410", "#2a2018", "#3e3022"],
  tile: ["#5a4632", "#ffc080", "#2a1e14"],
  ambient: "#060300",
  dark: 0.4,
  light: "#ffc080",
  music: "s214",
  particles: "dust",
  gimmicks: ["chase"],
  desc: "흘러내리는 문단 · 추격 벽"
};
const _0x139694 = {
  n: 215,
  name: "잉크병 동굴",
  boss: "bottla",
  bg: ["#060a14", "#0c1424", "#142038"],
  tile: ["#26344e", "#80b0ff", "#101828"],
  ambient: "#000206",
  dark: 0.6,
  light: "#80b0ff",
  music: "s215",
  particles: "bubble",
  hazard: "void",
  gimmicks: ["poison"],
  desc: "거대한 잉크병 속 · 독 안개"
};
const _0x3b8753 = {
  n: 216,
  name: "첫 줄의 제단",
  boss: "incipit",
  bg: ["#e8e4d8", "#c8c0b0", "#a09888"],
  tile: ["#2a2622", "#40ffa0", "#14120e"],
  ambient: "#081008",
  dark: 0.36,
  light: "#40ffa0",
  music: "s216",
  particles: "ash",
  hazard: "void",
  gimmicks: ["timeLimit"],
  desc: "백지의 문지기 · 시간 제한 결계"
};
const _0xf21745 = {
  n: 221,
  name: "깜빡이는 다리",
  boss: "blinx",
  bg: ["#0e0e1c", "#18182e", "#242444"],
  tile: ["#3a3a62", "#c0c0ff", "#1a1a30"],
  ambient: "#020206",
  dark: 0.5,
  light: "#c0c0ff",
  music: "s221",
  particles: "spark",
  hazard: "void",
  gimmicks: ["blink"],
  desc: "박자에 맞춰 깜빡이는 다리 · 사라지는 발판"
};
const _0xe3b041 = {
  n: 222,
  name: "쉼표 정원",
  boss: "comma",
  bg: ["#141c10", "#1e2c18", "#2a3e22"],
  tile: ["#465e36", "#ffe0f0", "#1e2a16"],
  ambient: "#040602",
  dark: 0.36,
  light: "#ffe0f0",
  music: "s222",
  particles: "petal",
  gimmicks: ["mirrorWorld"],
  desc: "쉼표가 피는 정원 · 거울 세계"
};
const _0x5adca9 = {
  n: 223,
  name: "커서의 탑",
  boss: "caret",
  bg: ["#060608", "#101014", "#1a1a22"],
  tile: ["#30303e", "#ffffff", "#141418"],
  ambient: "#000000",
  dark: 0.58,
  light: "#ffffff",
  music: "s223",
  particles: "star",
  hazard: "void",
  gimmicks: ["blink"],
  desc: "깜빡이는 커서의 탑 · 사라지는 발판"
};
const _0x273b45 = {
  n: 224,
  name: "지워졌다 쓰인 거리",
  boss: "palimp",
  bg: ["#1c1814", "#2c261e", "#3e362a"],
  tile: ["#5e5040", "#f0d0a0", "#2a221a"],
  ambient: "#060402",
  dark: 0.42,
  light: "#f0d0a0",
  music: "s224",
  particles: "dust",
  gimmicks: ["poison"],
  desc: "덧쓴 글자의 거리 · 독 안개"
};
const _0x2187d9 = {
  n: 225,
  name: "망설임의 하늘섬",
  boss: "hesita",
  bg: ["#1c2438", "#2a3652", "#3c4c70"],
  tile: ["#5a6a8a", "#e0e8ff", "#283048"],
  ambient: "#04060c",
  dark: 0.3,
  light: "#e0e8ff",
  music: "s225",
  particles: "snow",
  hazard: "void",
  gimmicks: ["blink"],
  desc: "떠 있다 사라지는 섬 · 사라지는 발판"
};
const _0x229852 = {
  n: 226,
  name: "미완성 문장의 왕좌",
  boss: "ellipsis",
  bg: ["#0a0612", "#160c22", "#241434"],
  tile: ["#3a2450", "#e0a0ff", "#1a0e26"],
  ambient: "#020004",
  dark: 0.56,
  light: "#e0a0ff",
  music: "s226",
  particles: "void",
  hazard: "void",
  gimmicks: ["chase"],
  desc: "미완의 왕 · 추격 벽"
};
const _0x319677 = {
  n: 231,
  name: "거꾸로 쓴 편지의 숲",
  boss: "retro",
  bg: ["#0e141a", "#16202a", "#22303e"],
  tile: ["#3a4e60", "#c0f0ff", "#18222c"],
  ambient: "#02040a",
  dark: 0.46,
  light: "#c0f0ff",
  music: "s231",
  particles: "leaf",
  gimmicks: ["mirrorWorld"],
  desc: "거울 글씨 편지가 걸린 숲 · 거울 세계"
};
const _0x15590b = {
  n: 232,
  name: "좌우가 바뀐 도서관",
  boss: "sinistra",
  bg: ["#16100c", "#241a12", "#36281c"],
  tile: ["#56402c", "#ffd8a0", "#261a10"],
  ambient: "#040200",
  dark: 0.48,
  light: "#ffd8a0",
  music: "s232",
  particles: "dust",
  gimmicks: ["timeLimit"],
  desc: "좌우가 바뀐 서가 · 시간 제한 결계"
};
const _0x46c321 = {
  n: 233,
  name: "반사 호수",
  boss: "gemina",
  bg: ["#0a1620", "#122434", "#1c344c"],
  tile: ["#36546e", "#a0e8ff", "#162636"],
  ambient: "#02060a",
  dark: 0.4,
  light: "#a0e8ff",
  music: "s233",
  particles: "bubble",
  slippery: !0,
  gimmicks: ["mirrorWorld"],
  desc: "하늘을 비추는 호수 · 거울 세계"
};
const _0x1c66f1 = {
  n: 234,
  name: "비대칭 성채",
  boss: "asymetra",
  bg: ["#140c14", "#221422", "#341e34"],
  tile: ["#543454", "#ffa0e0", "#241424"],
  ambient: "#040004",
  dark: 0.5,
  light: "#ffa0e0",
  music: "s234",
  particles: "spark",
  gimmicks: ["blink"],
  desc: "한쪽만 무너진 성채 · 사라지는 발판"
};
const _0x230a33 = {
  n: 235,
  name: "거울 원고의 별",
  boss: "catopra",
  bg: ["#04060e", "#0a0e1c", "#121a30"],
  tile: ["#2a3450", "#f0f8ff", "#0e1220"],
  ambient: "#000004",
  dark: 0.6,
  light: "#f0f8ff",
  music: "s235",
  particles: "star",
  hazard: "void",
  gimmicks: ["mirrorWorld"],
  desc: "거울로 된 별 · 거울 세계"
};
const _0x15f48f = {
  n: 236,
  name: "뒤집힌 서명의 방",
  boss: "antigraph",
  bg: ["#0c0a0e", "#18141c", "#262030"],
  tile: ["#3e3448", "#ff70b0", "#1a1420"],
  ambient: "#020002",
  dark: 0.55,
  light: "#ff70b0",
  music: "s236",
  particles: "shadow",
  hazard: "void",
  gimmicks: ["poison"],
  desc: "거울 저자의 서명 · 독 안개"
};
const _0x3ed49e = {
  n: 241,
  name: "초침 광장",
  boss: "secunda",
  bg: ["#181408", "#28200e", "#3c3016"],
  tile: ["#5c4c24", "#ffe060", "#2a2210"],
  ambient: "#060400",
  dark: 0.42,
  light: "#ffe060",
  music: "s241",
  particles: "spark",
  gimmicks: ["timeLimit"],
  desc: "거대한 초침이 도는 광장 · 시간 제한 결계"
};
const _0x467d2e = {
  n: 242,
  name: "모래 원고실",
  boss: "sabula",
  bg: ["#22180c", "#342612", "#4a381c"],
  tile: ["#7a6038", "#ffd890", "#36280e"],
  ambient: "#080400",
  dark: 0.36,
  light: "#ffd890",
  music: "s242",
  particles: "dust",
  gimmicks: ["chase"],
  desc: "모래로 지워지는 원고 · 추격 벽"
};
const _0x10357d = {
  n: 243,
  name: "마감 종탑",
  boss: "campana",
  bg: ["#0e0c14", "#1a1622", "#282234"],
  tile: ["#463c56", "#ffd0a0", "#1c1824"],
  ambient: "#020104",
  dark: 0.5,
  light: "#ffd0a0",
  music: "s243",
  particles: "ash",
  gimmicks: ["timeLimit"],
  desc: "마감을 알리는 종 · 시간 제한 결계"
};
const _0x3d8a54 = {
  n: 244,
  name: "잠들지 않는 인쇄소",
  boss: "nocturn",
  bg: ["#08080c", "#121218", "#1c1c26"],
  tile: ["#33333f", "#a0ffe0", "#16161c"],
  ambient: "#000000",
  dark: 0.62,
  light: "#a0ffe0",
  music: "s244",
  particles: "spark",
  gimmicks: ["blink"],
  desc: "밤새 도는 인쇄기 · 사라지는 발판"
};
const _0x27b222 = {
  n: 245,
  name: "마지막 시곗바늘의 하늘",
  boss: "deadla",
  bg: ["#1a0e08", "#2c160c", "#422212"],
  tile: ["#603420", "#ffa060", "#2c1408"],
  ambient: "#060200",
  dark: 0.44,
  light: "#ffa060",
  music: "s245",
  particles: "ash",
  hazard: "void",
  gimmicks: ["timeLimit"],
  desc: "하늘을 가르는 시곗바늘 · 시간 제한 결계"
};
const _0x523859 = {
  n: 246,
  name: "마감의 법정",
  boss: "termina",
  bg: ["#100606", "#1e0c0c", "#301414"],
  tile: ["#4a2020", "#ffd060", "#200a0a"],
  ambient: "#040000",
  dark: 0.58,
  light: "#ffd060",
  music: "s246",
  particles: "ash",
  hazard: "void",
  gimmicks: ["mirrorWorld"],
  desc: "마감의 판관 · 거울 세계"
};
const _0x1bf3d6 = {
  n: 251,
  name: "잉크 해일의 해안",
  boss: "marea",
  bg: ["#081018", "#0e1a28", "#16283c"],
  tile: ["#2a405a", "#80c0ff", "#101c2a"],
  ambient: "#000306",
  dark: 0.46,
  light: "#80c0ff",
  music: "s251",
  particles: "rain",
  gimmicks: ["chase"],
  desc: "검은 파도가 치는 해안 · 추격 벽"
};
const _0x116821 = {
  n: 252,
  name: "검은 강 하구",
  boss: "styxa",
  bg: ["#0a0c0a", "#141814", "#202620"],
  tile: ["#36423a", "#c0ffa0", "#161c16"],
  ambient: "#000200",
  dark: 0.56,
  light: "#c0ffa0",
  music: "s252",
  particles: "bubble",
  gimmicks: ["poison"],
  desc: "잉크가 흐르는 강 · 독 안개"
};
const _0x5a3bd4 = {
  n: 253,
  name: "쓰러지는 책장 회랑",
  boss: "cascada",
  bg: ["#16100a", "#241a10", "#362818"],
  tile: ["#5a422a", "#ffc070", "#28190c"],
  ambient: "#040200",
  dark: 0.48,
  light: "#ffc070",
  music: "s253",
  particles: "dust",
  gimmicks: ["chase"],
  desc: "도미노처럼 쓰러지는 책장 · 추격 벽"
};
const _0x3a9d32 = {
  n: 254,
  name: "잉크 폭포 절벽",
  boss: "cataract",
  bg: ["#0a1014", "#121c24", "#1c2c38"],
  tile: ["#344a5c", "#a0d8ff", "#141e28"],
  ambient: "#000204",
  dark: 0.44,
  light: "#a0d8ff",
  music: "s254",
  particles: "rain",
  hazard: "void",
  gimmicks: ["timeLimit"],
  desc: "쏟아지는 잉크 폭포 · 시간 제한 결계"
};
const _0x3a2dca = {
  n: 255,
  name: "소용돌이치는 잉크 하늘",
  boss: "vortexa",
  bg: ["#0c0618", "#180c2a", "#261440"],
  tile: ["#3a2460", "#c080ff", "#1a0e2c"],
  ambient: "#020006",
  dark: 0.52,
  light: "#c080ff",
  music: "s255",
  particles: "void",
  hazard: "void",
  gimmicks: ["chase"],
  desc: "하늘의 잉크 소용돌이 · 추격 벽"
};
const _0x75d279 = {
  n: 256,
  name: "해일의 심장",
  boss: "diluvia",
  bg: ["#02060c", "#060e1a", "#0c182a"],
  tile: ["#1c2c44", "#60a0ff", "#08101c"],
  ambient: "#000000",
  dark: 0.62,
  light: "#60a0ff",
  music: "s256",
  particles: "rain",
  hazard: "void",
  gimmicks: ["blink"],
  desc: "잉크 해일의 어미 · 사라지는 발판"
};
const _0x55e8e5 = {
  n: 261,
  name: "투명 잉크의 방",
  boss: "invisa",
  bg: ["#dce4e8", "#b8c4cc", "#8c9aa4"],
  tile: ["#2c343a", "#60d0ff", "#12181c"],
  ambient: "#040608",
  dark: 0.34,
  light: "#60d0ff",
  music: "s261",
  particles: "star",
  gimmicks: ["mirrorWorld"],
  desc: "보이지 않는 글씨의 방 · 거울 세계"
};
const _0x216629 = {
  n: 262,
  name: "그림자만 남은 거리",
  boss: "umbrax",
  bg: ["#08060a", "#100c14", "#1a1420"],
  tile: ["#2e2638", "#ff8060", "#140e18"],
  ambient: "#000000",
  dark: 0.66,
  light: "#ff8060",
  music: "s262",
  particles: "shadow",
  gimmicks: ["chase"],
  desc: "주인 없는 그림자의 거리 · 추격 벽"
};
const _0x54f583 = {
  n: 263,
  name: "발자국 서고",
  boss: "vestigia",
  bg: ["#14100c", "#221a14", "#32281e"],
  tile: ["#524234", "#ffe0c0", "#241c14"],
  ambient: "#040200",
  dark: 0.5,
  light: "#ffe0c0",
  music: "s263",
  particles: "dust",
  gimmicks: ["poison"],
  desc: "발자국만 남은 서고 · 독 안개"
};
const _0x1e7e29 = {
  n: 264,
  name: "지우개 사막",
  boss: "rasura",
  bg: ["#2a2420", "#3e3630", "#564a42"],
  tile: ["#8a7a6c", "#ffffff", "#3a322c"],
  ambient: "#080604",
  dark: 0.3,
  light: "#ffffff",
  music: "s264",
  particles: "ash",
  gimmicks: ["timeLimit"],
  desc: "지우개 가루의 사막 · 시간 제한 결계"
};
const _0x42e91f = {
  n: 265,
  name: "사라지는 별자리",
  boss: "evanesa",
  bg: ["#02040a", "#060a16", "#0c1224"],
  tile: ["#1e2840", "#d0e0ff", "#0a0e1a"],
  ambient: "#000002",
  dark: 0.62,
  light: "#d0e0ff",
  music: "s265",
  particles: "star",
  hazard: "void",
  gimmicks: ["blink"],
  desc: "하나씩 꺼지는 별 · 사라지는 발판"
};
const _0xab38a2 = {
  n: 266,
  name: "작가의 빈 의자",
  boss: "autor",
  bg: ["#0e0a06", "#1a140c", "#2a2014"],
  tile: ["#463620", "#ffe8b0", "#1c140a"],
  ambient: "#000000",
  dark: 0.58,
  light: "#ffe8b0",
  music: "s266",
  particles: "ash",
  hazard: "void",
  gimmicks: ["mirrorWorld"],
  desc: "지워진 작가 · 거울 세계"
};
const _0x573f53 = {
  n: 271,
  name: "번짐의 메아리",
  boss: "incipit_echo",
  bg: ["#0c1410", "#14221a", "#1e3226"],
  tile: ["#34503e", "#80ffb0", "#16241a"],
  ambient: "#000402",
  dark: 0.52,
  light: "#80ffb0",
  music: "s271",
  particles: "spore",
  gimmicks: ["poison", "chase"],
  desc: "첫 줄의 메아리 · 독 안개 + 추격 벽"
};
const _0x2ff632 = {
  n: 272,
  name: "깜빡임의 메아리",
  boss: "ellipsis_echo",
  bg: ["#0c0816", "#160e26", "#24183a"],
  tile: ["#3a2a58", "#d0a0ff", "#1a1228"],
  ambient: "#020004",
  dark: 0.54,
  light: "#d0a0ff",
  music: "s272",
  particles: "spark",
  hazard: "void",
  gimmicks: ["blink", "mirrorWorld"],
  desc: "미완의 메아리 · 발판 + 거울"
};
const _0x4f54ed = {
  n: 273,
  name: "거울의 메아리",
  boss: "antigraph_echo",
  bg: ["#0a0e16", "#121a28", "#1c2840"],
  tile: ["#30405e", "#ff90c8", "#141c2c"],
  ambient: "#020206",
  dark: 0.5,
  light: "#ff90c8",
  music: "s273",
  particles: "star",
  gimmicks: ["mirrorWorld", "timeLimit"],
  desc: "거울 저자의 메아리 · 거울 + 결계"
};
const _0xf83766 = {
  n: 274,
  name: "마감의 메아리",
  boss: "termina_echo",
  bg: ["#140a04", "#221208", "#341c0e"],
  tile: ["#4e2c18", "#ffc860", "#22120a"],
  ambient: "#040100",
  dark: 0.54,
  light: "#ffc860",
  music: "s274",
  particles: "ash",
  hazard: "void",
  gimmicks: ["timeLimit", "poison"],
  desc: "판관의 메아리 · 결계 + 독 안개"
};
const _0x184680 = {
  n: 275,
  name: "해일의 메아리",
  boss: "diluvia_echo",
  bg: ["#040a12", "#081422", "#102034"],
  tile: ["#223a58", "#70b8ff", "#0c1626"],
  ambient: "#000204",
  dark: 0.56,
  light: "#70b8ff",
  music: "s275",
  particles: "rain",
  hazard: "void",
  gimmicks: ["chase", "blink"],
  desc: "해일의 메아리 · 추격 벽 + 발판"
};
const _0x4ed97e = {
  n: 276,
  name: "백지의 서",
  boss: "blanca",
  bg: ["#f4f2ec", "#dcd8cc", "#bcb6a8"],
  tile: ["#1c1a18", "#9060ff", "#0c0a08"],
  ambient: "#0a0812",
  dark: 0.32,
  light: "#9060ff",
  music: "s276",
  particles: "void",
  hazard: "void",
  gimmicks: ["poison", "mirrorWorld"],
  desc: "백지의 주인"
};
const _0x316495 = {
  id: 1,
  name: "제1권",
  title: "사자의 계약",
  stories: [1, 2, 3, 4, 5, 6, 7],
  ready: !0
};
const _0x441bef = {
  id: 2,
  name: "제2권",
  title: "책장 밖의 독자",
  stories: [8, 9, 10, 11, 12, 13, 14],
  ready: !0
};
const _0x263b43 = {
  id: 3,
  name: "제3권",
  title: "잉크가 마른 뒤",
  stories: [15, 16, 17, 18, 19, 20, 21],
  ready: !0
};
const _0x3a1403 = {
  id: 4,
  name: "제4권",
  title: "백지의 서",
  stories: [22, 23, 24, 25, 26, 27, 28],
  ready: !0
};
const wa = [_0x3bf009, _0x409a90, _0x4e9d35, _0x276e4c, _0x548d42, _0x498800, _0x1a7e93, _0x32e3d0, _0x5c324e, _0x59fbe1, _0x2d02c1, _0x3fa527, _0x52dfcf, _0x4c40e8, _0x1a39b, _0x45914e, _0x5aafda, _0x138da9, _0xa03f70, _0x6bb124, _0x596a6f, _0x4a1398, _0x18615b, _0x18cecb, _0xffe438, _0x3f4288, _0x5b4eac, _0x4b8437, _0x126a18, _0x2c9904, _0x2578c3, _0x54a20c, _0x59ebba, _0x4d5ecb, _0x1356ac, _0x127b9d, _0x359de0, _0x493fd3, _0x80f34a, _0x16a2da, _0x4f2448, _0x11907e], ya = [_0x383881, _0x4553f3, _0x46c0d3, _0x77393, _0x139694, _0x3b8753, _0xf21745, _0xe3b041, _0x5adca9, _0x273b45, _0x2187d9, _0x229852, _0x319677, _0x15590b, _0x46c321, _0x1c66f1, _0x230a33, _0x15f48f, _0x3ed49e, _0x467d2e, _0x10357d, _0x3d8a54, _0x27b222, _0x523859, _0x1bf3d6, _0x116821, _0x5a3bd4, _0x3a9d32, _0x3a2dca, _0x75d279, _0x55e8e5, _0x216629, _0x54f583, _0x1e7e29, _0x42e91f, _0xab38a2, _0x573f53, _0x2ff632, _0x4f54ed, _0xf83766, _0x184680, _0x4ed97e], B = [_0x316495, _0x441bef, _0x263b43, _0x3a1403];
function A(_0x4f4e86) {
  return B.find(_0x3416ef => _0x3416ef.id === _0x4f4e86) ?? B[0];
}
function U(_0x6b9b03) {
  return B.find(_0x594035 => _0x594035.stories.includes(_0x6b9b03)) ?? B[0];
}
function L(_0x3db02f) {
  return U(_0x3db02f).stories.indexOf(_0x3db02f) + 1 || _0x3db02f;
}
function Vr(_0x2da8f8) {
  const _0x4ee208 = {
    "EOLJA": function (_0x3ace97, _0x24ce2f) {
      return _0x3ace97 === _0x24ce2f;
    },
    "bpmsS": function (_0x55af32, _0x2e051d) {
      return _0x55af32(_0x2e051d);
    }
  }, _0xb42896 = U(_0x2da8f8);
  return _0xb42896.id === 1 ? "스토리 " + L(_0x2da8f8) : _0xb42896.name + " 스토리 " + L(_0x2da8f8);
}
function va(_0x713ac2, _0x1601d7) {
  const _0xf65363 = {
    sQRru: function (_0xb2abd9, _0x490059) {
      return _0xb2abd9 >= _0x490059;
    }
  };
  const _0x250eb4 = _0xf65363;
  const _0x5d4c3f = B.find(_0xd9bac6 => _0xd9bac6.id === _0x1601d7);
  return !_0x5d4c3f || !_0x5d4c3f.ready || !_0x5d4c3f.stories.length ? !1 : te.all || _0x5d4c3f.id === B[0].id || _0x713ac2.storyMax >= _0x5d4c3f.stories[0];
}
function Xr(_0x2fce8c) {
  const _0x5a6e67 = {
    BgReE: function (_0x135dac, _0x510854) {
      return _0x135dac === _0x510854;
    },
    tUSjt: function (_0x28002b, _0x3dc4c6) {
      return _0x28002b > _0x3dc4c6;
    }
  };
  const _0x172f6f = _0x5a6e67;
  const _0xa46d9b = U(_0x2fce8c), _0x3fd7cb = L(_0x2fce8c);
  return _0x3fd7cb === 1 && _0xa46d9b.id > 1 ? A(_0xa46d9b.id - 1).name + "을 완수하면 열린다" : "스토리 " + (_0x3fd7cb - 1) + "을 완수하면 열린다";
}
function xa(_0x3034ba) {
  const _0x3fe5e0 = {
    "POQqf": function (_0x353910, _0x4474eb) {
      return _0x353910(_0x4474eb);
    }
  }, _0x328ba6 = A(_0x3034ba.book ?? 1), _0x5387da = _0x328ba6.stories.length ? _0x328ba6.stories : B[0].stories;
  return [_0x5387da[0], _0x5387da[_0x5387da.length - 1]];
}
function Yr(_0x533f7f) {
  const [_0xdd795a, _0x31fd8f] = xa(_0x533f7f);
  if (_0x533f7f.story >= _0xdd795a && _0x533f7f.story <= _0x31fd8f) return;
  const _0x1f4cd7 = Math.max(_0xdd795a, Math.min(_0x31fd8f, _0x533f7f.storyMax));
  _0x1f4cd7 <= _0x533f7f.storyMax && (_0x533f7f.story = _0x1f4cd7);
}
const upgrade_hp = {
  id: "hp",
  name: "강인한 육신",
  desc: "최대 체력 +{v}",
  max: 5,
  cost: [1200, 2400, 4200, 6600, 9600],
  per: 12,
  unit: ""
};
const upgrade_atk = {
  id: "atk",
  name: "계약의 힘",
  desc: "공격력 +{v}%",
  max: 5,
  cost: [1500, 3000, 4800, 7200, 10200],
  per: 4,
  unit: "%"
};
const upgrade_gold = {
  id: "gold",
  name: "도굴꾼의 감",
  desc: "시작 금화 +{v}",
  max: 5,
  cost: [900, 1800, 3000, 4500, 6600],
  per: 40,
  unit: ""
};
const upgrade_revive = {
  id: "revive",
  name: "두 번째 숨결",
  desc: "런마다 부활 {v}회 (체력 50%)",
  max: 1,
  cost: [12000],
  per: 1,
  unit: ""
};
const upgrade_stone = {
  id: "stone",
  name: "영혼 수집가",
  desc: "계약석 획득 +{v}%",
  max: 5,
  cost: [1800, 3600, 6000, 9000, 12600],
  per: 10,
  unit: "%"
};
const upgrade_crit = {
  id: "crit",
  name: "날카로운 눈",
  desc: "치명타 확률 +{v}%",
  max: 5,
  cost: [1200, 2400, 3900, 6000, 8400],
  per: 2,
  unit: "%"
};
const upgrade_swap = {
  id: "swap",
  name: "영혼 공명",
  desc: "교대 쿨타임 -{v}%",
  max: 4,
  cost: [1500, 3000, 5100, 7800],
  per: 6,
  unit: "%"
};
const upgrade_potion = {
  id: "potion",
  name: "비상 약낭",
  desc: "런 시작 시 회복 물약 {v}개",
  max: 1,
  cost: [4500],
  per: 1,
  unit: ""
};
const upgrade_relic = {
  id: "relic",
  name: "유물 감정사",
  desc: "정예 유물 선택지 +{v}",
  max: 1,
  cost: [7500],
  per: 1,
  unit: ""
};
const upgrade_rest = {
  id: "rest",
  name: "안식의 기도",
  desc: "휴식·방 클리어 회복량 +{v}%",
  max: 4,
  cost: [1200, 2400, 3900, 5700],
  per: 10,
  unit: "%"
};
const upgrade_skill = {
  id: "skill",
  name: "비전 연마",
  desc: "스킬 피해 +{v}%",
  max: 5,
  cost: [1800, 3600, 6000, 9000, 12600],
  per: 5,
  unit: "%"
};
const upgrade_cdr = {
  id: "cdr",
  name: "시간의 모래",
  desc: "스킬 쿨타임 -{v}%",
  max: 5,
  cost: [1800, 3600, 6000, 9000, 12600],
  per: 3,
  unit: "%"
};
const upgrade_guard = {
  id: "guard",
  name: "강철 피부",
  desc: "받는 피해 -{v}%",
  max: 5,
  cost: [1500, 3000, 5100, 7800, 10800],
  per: 3,
  unit: "%"
};
const upgrade_boss = {
  id: "boss",
  name: "처형인의 표식",
  desc: "보스 피해 +{v}%",
  max: 5,
  cost: [1800, 3600, 6000, 9000, 12600],
  per: 5,
  unit: "%"
};
const upgrade_critd = {
  id: "critd",
  name: "치명의 일격",
  desc: "치명타 피해 +{v}%",
  max: 5,
  cost: [1500, 3000, 5100, 7800, 10800],
  per: 8,
  unit: "%"
};
const upgrade_mspd = {
  id: "mspd",
  name: "바람의 걸음",
  desc: "이동 속도 +{v}%",
  max: 4,
  cost: [1200, 2400, 4200, 6600],
  per: 3,
  unit: "%"
};
const upgrade_dash = {
  id: "dash",
  name: "그림자 걸음",
  desc: "대시 재충전 -{v}%",
  max: 4,
  cost: [1200, 2400, 4200, 6600],
  per: 5,
  unit: "%"
};
const upgrade_leech = {
  id: "leech",
  name: "흡혈의 서약",
  desc: "피해량의 {v}% 회복",
  max: 3,
  cost: [6000, 12000, 18000],
  per: 0.5,
  unit: "%"
};
const upgrade_aspd = {
  id: "aspd",
  name: "광전의 박동",
  desc: "공격 속도 +{v}%",
  max: 5,
  cost: [1800, 3600, 6000, 9000, 12600],
  per: 3,
  unit: "%"
};
const upgrade_hppct = {
  id: "hppct",
  name: "불굴의 혼",
  desc: "최대 체력 +{v}%",
  max: 5,
  cost: [1800, 3600, 6000, 9000, 12600],
  per: 4,
  unit: "%"
};
const upgrade_elite = {
  id: "elite",
  name: "사냥꾼의 직감",
  desc: "정예 피해 +{v}%",
  max: 5,
  cost: [1500, 3000, 5100, 7800, 10800],
  per: 6,
  unit: "%"
};
const upgrade_dot = {
  id: "dot",
  name: "독사의 지혜",
  desc: "상태이상 지속 피해 +{v}%",
  max: 5,
  cost: [1500, 3000, 5100, 7800, 10800],
  per: 8,
  unit: "%"
};
const upgrade_swapdmg = {
  id: "swapdmg",
  name: "교대의 일격",
  desc: "교대 공격 피해 +{v}%",
  max: 5,
  cost: [1500, 3000, 5100, 7800, 10800],
  per: 10,
  unit: "%"
};
const upgrade_finish = {
  id: "finish",
  name: "마무리 일격",
  desc: "콤보 마지막 타 피해 +{v}%",
  max: 5,
  cost: [1500, 3000, 5100, 7800, 10800],
  per: 8,
  unit: "%"
};
const upgrade_air = {
  id: "air",
  name: "하늘의 칼날",
  desc: "공중 공격 피해 +{v}%",
  max: 4,
  cost: [1200, 2400, 4200, 6600],
  per: 8,
  unit: "%"
};
const upgrade_ward = {
  id: "ward",
  name: "수호의 서약",
  desc: "방 입장 시 최대 체력 {v}% 보호막",
  max: 3,
  cost: [3000, 6000, 9000],
  per: 3,
  unit: "%"
};
const upgrade_crystal = {
  id: "crystal",
  name: "결정 수집가",
  desc: "영혼 결정 획득 +{v}%",
  max: 5,
  cost: [2400, 4800, 7800, 11400, 15600],
  per: 8,
  unit: "%"
};
const _a = [upgrade_hp, upgrade_atk, upgrade_gold, upgrade_revive, upgrade_stone, upgrade_crit, upgrade_swap, upgrade_potion, upgrade_relic, upgrade_rest, upgrade_skill, upgrade_cdr, upgrade_guard, upgrade_boss, upgrade_critd, upgrade_mspd, upgrade_dash, upgrade_leech, upgrade_aspd, upgrade_hppct, upgrade_elite, upgrade_dot, upgrade_swapdmg, upgrade_finish, upgrade_air, upgrade_ward, upgrade_crystal], Sa = 3, ja = 0.7;
function Da(definition) {
  return permanentUpgrade(definition, Sa, ja);
}
const _0x4d83b2 = {
  stones: 0.21,
  crystals: 1
};
const _0xe76e81 = {
  stones: 0.04,
  crystals: 0.32
};
const _0x388ed5 = {
  stones: 1,
  crystals: 1
};
const _0x3422cd = {
  stones: 1,
  crystals: 1
};
const _0x3ea42f = {
  story: _0x4d83b2,
  rush: _0xe76e81,
  endless: _0x388ed5,
  tower: _0x3422cd
};
const Ca = _a.map(Da), Wa = Object.fromEntries(Ca.map(_0x8e6248 => [_0x8e6248.id, _0x8e6248])), Y = _0x3ea42f;
function fe(_0x2be3e9, _0x2a3f2a) {
  return (_0x2be3e9[_0x2a3f2a] ?? 0) * (Wa[_0x2a3f2a]?.per ?? 0);
}
const definition_potion = {
  id: "potion",
  name: "회복 물약",
  desc: "체력 35% 회복",
  col: "#ff4a6a",
  price: 60
};
const definition_bomb = {
  id: "bomb",
  name: "화염 폭탄",
  desc: "전방에 큰 폭발 (공격력 500%)",
  col: "#ff8a2a",
  price: 55
};
const definition_frost = {
  id: "frost",
  name: "서리 병",
  desc: "주변 모든 적을 빙결",
  col: "#a8e4ff",
  price: 55
};
const definition_lantern = {
  id: "lantern",
  name: "영혼 등불",
  desc: "모든 스킬·교대 쿨타임 초기화",
  col: "#9ef0ff",
  price: 50
};
const definition_ward = {
  id: "ward",
  name: "수호 부적",
  desc: "최대 체력 35% 보호막",
  col: "#ffd76a",
  price: 50
};
const _0x43f384 = {
  n: 1,
  name: "무너진 묘소",
  boss: "graven",
  bg: ["#14121c", "#221e2e", "#2e2838"],
  tile: ["#4a4458", "#6a6478", "#2a2636"],
  ambient: "#08060e",
  dark: 0.55,
  light: "#ffb060",
  music: "ch1",
  particles: "dust",
  desc: "해골과 망령"
};
const _0xb87ed7 = {
  n: 2,
  name: "독버섯 지하수로",
  boss: "mycora",
  bg: ["#0c1a14", "#14281e", "#1e3626"],
  tile: ["#3a5040", "#507060", "#20302a"],
  ambient: "#040a06",
  dark: 0.5,
  light: "#a0ff80",
  music: "ch2",
  particles: "spore",
  desc: "독과 슬라임"
};
const _0x3e31de = {
  n: 5,
  name: "침몰한 항구",
  boss: "morten",
  bg: ["#0a1622", "#12263a", "#1a3450"],
  tile: ["#3a4a58", "#5a7488", "#1e2a36"],
  ambient: "#02060c",
  dark: 0.5,
  light: "#80d0ff",
  music: "ch5",
  particles: "rain",
  desc: "익사자와 폭풍"
};
const _0x1fde9a = {
  n: 3,
  name: "불타는 왕실 대장간",
  boss: "ignis",
  bg: ["#2a0c08", "#3a1a10", "#4a2414"],
  tile: ["#5a3a30", "#7a5040", "#2a1a14"],
  ambient: "#100402",
  dark: 0.38,
  light: "#ff8a3a",
  music: "ch3",
  particles: "ember",
  hazard: "lava",
  desc: "불꽃과 골렘"
};
const _0x14f4c0 = {
  n: 6,
  name: "얼어붙은 왕립 도서관",
  boss: "libra",
  bg: ["#0e1626", "#1a2a40", "#28405a"],
  tile: ["#4a5a70", "#a8d0ec", "#24304a"],
  ambient: "#040814",
  dark: 0.45,
  light: "#a8e4ff",
  music: "ch6",
  particles: "snow",
  slippery: !0,
  desc: "서리와 금서"
};
const _0x6f81eb = {
  n: 4,
  name: "끝없는 왕좌",
  boss: "king",
  bg: ["#0e0a1a", "#1a1430", "#261e40"],
  tile: ["#3a3450", "#5a5078", "#1e1a2e"],
  ambient: "#040210",
  dark: 0.6,
  light: "#c0a0ff",
  music: "ch4",
  particles: "shadow",
  desc: "끝없는 왕"
};
const _0x1abcea = {
  n: 7,
  name: "망각의 심연",
  boss: "oblivion",
  bg: ["#04020a", "#0c0618", "#160c28"],
  tile: ["#2a2040", "#6a4aa0", "#120a20"],
  ambient: "#000000",
  dark: 0.62,
  light: "#ff80d0",
  music: "ch7",
  particles: "void",
  hazard: "void",
  desc: "진엔딩 · 왕이 삼킨 혼들의 끝"
};
const _0x3c2570 = {
  n: 11,
  name: "잿더미 순례길",
  boss: "kardun",
  bg: ["#1a1614", "#2a2420", "#3a322a"],
  tile: ["#5a5048", "#7a7068", "#2a2420"],
  ambient: "#0a0806",
  dark: 0.45,
  light: "#ffb080",
  music: "s11",
  particles: "ash",
  desc: "재와 순례자"
};
const _0x2c4795 = {
  n: 12,
  name: "거꾸로 선 종탑",
  boss: "bellona",
  bg: ["#141822", "#202838", "#2c364a"],
  tile: ["#4a4a5a", "#8a8090", "#24242e"],
  ambient: "#04060c",
  dark: 0.5,
  light: "#ffe0a0",
  music: "s12",
  particles: "dust",
  desc: "종소리와 가고일"
};
const _0x28451b = {
  n: 13,
  name: "별의 광맥",
  boss: "astril",
  bg: ["#0c0c1e", "#16163a", "#202050"],
  tile: ["#3a3a6a", "#8a8aff", "#1a1a34"],
  ambient: "#02020a",
  dark: 0.55,
  light: "#a0a0ff",
  music: "s13",
  particles: "star",
  desc: "수정과 광부"
};
const _0xe16c82 = {
  n: 14,
  name: "구름 위 정원",
  boss: "elowin",
  bg: ["#1a2a3a", "#2a4058", "#3a5878"],
  tile: ["#4a6a4a", "#8ac08a", "#2a3a2a"],
  ambient: "#06101a",
  dark: 0.3,
  light: "#e0ffe0",
  music: "s14",
  particles: "petal",
  hazard: "void",
  desc: "덩굴과 바람"
};
const _0x249829 = {
  n: 15,
  name: "성좌의 천문대",
  boss: "orbis",
  bg: ["#0a0e1e", "#141c36", "#1e2a4e"],
  tile: ["#3a4060", "#c0a060", "#1e2236"],
  ambient: "#02040c",
  dark: 0.5,
  light: "#ffe080",
  music: "s15",
  particles: "spark",
  desc: "혼천의와 점성술사"
};
const _0x5af617 = {
  n: 16,
  name: "꺼진 별의 심장",
  boss: "nemesia",
  bg: ["#06040a", "#120c1a", "#1e1428"],
  tile: ["#2e2838", "#8a7aa0", "#16121e"],
  ambient: "#000000",
  dark: 0.62,
  light: "#c0b0ff",
  music: "s16",
  particles: "ash",
  hazard: "void",
  desc: "꺼진 별"
};
const _0x5929f1 = {
  n: 21,
  name: "전쟁터의 진흙",
  boss: "grak",
  bg: ["#1a1410", "#2a2018", "#3a2c20"],
  tile: ["#4a3a2a", "#6a5440", "#2a2014"],
  ambient: "#080402",
  dark: 0.45,
  light: "#ffa060",
  music: "s21",
  particles: "rain",
  desc: "사자 병사와 까마귀"
};
const _0x1e4fb5 = {
  n: 22,
  name: "핏빛 포도원",
  boss: "seraphine",
  bg: ["#1e0a14", "#2e1420", "#40202e"],
  tile: ["#4a2a34", "#7a4a5a", "#2a141c"],
  ambient: "#0a0206",
  dark: 0.45,
  light: "#ff8090",
  music: "s22",
  particles: "petal",
  desc: "포도원과 흡혈귀"
};
const _0x5eceaf = {
  n: 23,
  name: "쇠사슬 감옥",
  boss: "morg",
  bg: ["#121214", "#1e1e22", "#2a2a30"],
  tile: ["#3e3e44", "#6a6a72", "#202024"],
  ambient: "#040404",
  dark: 0.58,
  light: "#ffc070",
  music: "s23",
  particles: "dust",
  desc: "간수와 고문 기계"
};
const _0x4bdfd5 = {
  n: 24,
  name: "붉은 대성당",
  boss: "valerius",
  bg: ["#1a0608", "#2c0e12", "#40161c"],
  tile: ["#5a3a3a", "#c09080", "#2a1414"],
  ambient: "#0a0204",
  dark: 0.5,
  light: "#ff6060",
  music: "s24",
  particles: "blood",
  desc: "타락한 성직자"
};
const _0x4d3a6d = {
  n: 25,
  name: "달 없는 숲",
  boss: "fenrik",
  bg: ["#060a08", "#0e1610", "#16241a"],
  tile: ["#2a3a2a", "#4a604a", "#141e14"],
  ambient: "#010402",
  dark: 0.66,
  light: "#c0ffc0",
  music: "s25",
  particles: "leaf",
  desc: "늑대인간과 덫"
};
const _0x489b02 = {
  n: 26,
  name: "핏빛 왕좌",
  boss: "carmilla",
  bg: ["#14020a", "#240614", "#380a20"],
  tile: ["#3a1a24", "#a04060", "#1e0a12"],
  ambient: "#060002",
  dark: 0.55,
  light: "#ff4070",
  music: "s26",
  particles: "blood",
  hazard: "lava",
  desc: "핏빛 여제"
};
const _0x1c73dc = {
  n: 31,
  name: "태초의 해안",
  boss: "levia",
  bg: ["#04121a", "#082230", "#0c3246"],
  tile: ["#2a4a50", "#5a9aa0", "#14262a"],
  ambient: "#00060a",
  dark: 0.45,
  light: "#80ffe0",
  music: "s31",
  particles: "bubble",
  slippery: !0,
  desc: "심해의 것들"
};
const _0x51dab8 = {
  n: 32,
  name: "화석의 숲",
  boss: "yggdra",
  bg: ["#141810", "#20261a", "#2c3424"],
  tile: ["#5a5a4a", "#8a8a70", "#2a2a20"],
  ambient: "#040602",
  dark: 0.45,
  light: "#e0e0a0",
  music: "s32",
  particles: "leaf",
  desc: "돌이 된 숲"
};
const _0x4a2daa = {
  n: 33,
  name: "폭풍의 첨탑",
  boss: "taranis",
  bg: ["#0c1018", "#161e2e", "#202c44"],
  tile: ["#3a4458", "#80a0d0", "#1a2030"],
  ambient: "#02040a",
  dark: 0.5,
  light: "#c0e0ff",
  music: "s33",
  particles: "rain",
  desc: "번개와 폭풍"
};
const _0x11fc66 = {
  n: 34,
  name: "거울의 미궁",
  boss: "mirror",
  bg: ["#14141e", "#22223a", "#303056"],
  tile: ["#4a4a6a", "#d0d0ff", "#24243a"],
  ambient: "#04040c",
  dark: 0.4,
  light: "#ffffff",
  music: "s34",
  particles: "spark",
  slippery: !0,
  desc: "거울과 환영"
};
const _0x1b3b41 = {
  n: 35,
  name: "시간의 폐허",
  boss: "aeon",
  bg: ["#1a160c", "#2a2414", "#3a321c"],
  tile: ["#5a5030", "#c0b070", "#2a2414"],
  ambient: "#060402",
  dark: 0.45,
  light: "#ffe0a0",
  music: "s35",
  particles: "dust",
  hazard: "void",
  desc: "멈춘 시간"
};
const _0x3be11b = {
  n: 36,
  name: "계약의 근원",
  boss: "arche",
  bg: ["#08060e", "#120e1e", "#1c162e"],
  tile: ["#2e2840", "#e0d0ff", "#16121e"],
  ambient: "#000000",
  dark: 0.55,
  light: "#fff0c0",
  music: "s36",
  particles: "star",
  hazard: "void",
  desc: "최초의 계약자"
};
const _0x403473 = {
  n: 41,
  name: "떠도는 하늘 항구",
  boss: "branik",
  bg: ["#16202e", "#223448", "#2e4862"],
  tile: ["#4a5a6a", "#8aa8c0", "#24303c"],
  ambient: "#04080e",
  dark: 0.38,
  light: "#a0d0f0",
  music: "s41",
  particles: "rain",
  hazard: "void",
  desc: "하늘 해적과 닻"
};
const _0x4b670a = {
  n: 42,
  name: "거꾸로 흐르는 폭포",
  boss: "lyanne",
  bg: ["#0c1a22", "#142a36", "#1e3c4c"],
  tile: ["#3a5a68", "#80c8e0", "#1a2c34"],
  ambient: "#02080c",
  dark: 0.42,
  light: "#a0f0ff",
  music: "s42",
  particles: "bubble",
  slippery: !0,
  desc: "물안개와 급류"
};
const _0x195470 = {
  n: 43,
  name: "폭풍 고래의 뼈",
  boss: "osric",
  bg: ["#10141a", "#1c222c", "#28303c"],
  tile: ["#5a6060", "#c0c8c0", "#2a2e30"],
  ambient: "#04060a",
  dark: 0.5,
  light: "#c0e0e0",
  music: "s43",
  particles: "rain",
  desc: "고래뼈와 번개"
};
const _0x14aade = {
  n: 44,
  name: "깃털 사원",
  boss: "penna",
  bg: ["#2a2218", "#3a3024", "#4a4030"],
  tile: ["#6a5a44", "#e0d0b0", "#342a1e"],
  ambient: "#0a0804",
  dark: 0.32,
  light: "#fff0d0",
  music: "s44",
  particles: "petal",
  desc: "깃털과 사제들"
};
const _0x433b0f = {
  n: 45,
  name: "천공의 회랑",
  boss: "kalais",
  bg: ["#0a1022", "#121e3a", "#1c2c52"],
  tile: ["#3a4868", "#a0c0f0", "#1a2236"],
  ambient: "#02040c",
  dark: 0.45,
  light: "#c0e0ff",
  music: "s45",
  particles: "spark",
  hazard: "void",
  desc: "폭풍의 사도"
};
const _0x1ac09c = {
  n: 46,
  name: "하늘의 상처",
  boss: "sever",
  bg: ["#0a0612", "#160c24", "#221236"],
  tile: ["#2e2440", "#c0a0ff", "#140e1e"],
  ambient: "#000000",
  dark: 0.58,
  light: "#e0c0ff",
  music: "s46",
  particles: "void",
  hazard: "void",
  desc: "하늘을 찢는 자"
};
const _0x2bcc84 = {
  n: 51,
  name: "잠긴 등대",
  boss: "halvard",
  bg: ["#081418", "#10222a", "#18303a"],
  tile: ["#2e4448", "#8ab0a8", "#162226"],
  ambient: "#000608",
  dark: 0.55,
  light: "#ffe8a0",
  music: "s51",
  particles: "bubble",
  desc: "꺼진 등불과 익사자"
};
const _0x166ec8 = {
  n: 52,
  name: "산호 묘지",
  boss: "coralie",
  bg: ["#1a0c14", "#2a1420", "#3c1e2e"],
  tile: ["#5a3a44", "#ff90b0", "#2a1820"],
  ambient: "#060204",
  dark: 0.48,
  light: "#ff90b0",
  music: "s52",
  particles: "spore",
  desc: "산호와 묘비"
};
const _0x455f9f = {
  n: 53,
  name: "침묵의 해구",
  boss: "nekton",
  bg: ["#04060e", "#080c1a", "#0e1428"],
  tile: ["#1e2438", "#5a70c0", "#0c101c"],
  ambient: "#000000",
  dark: 0.68,
  light: "#7090ff",
  music: "s53",
  particles: "bubble",
  hazard: "void",
  desc: "빛이 닿지 않는 곳"
};
const _0x1a6d0d = {
  n: 54,
  name: "거꾸로 선 도시",
  boss: "vesper",
  bg: ["#1c140c", "#2c2014", "#3e2e1c"],
  tile: ["#5a4a34", "#d0b080", "#2a2218"],
  ambient: "#060402",
  dark: 0.42,
  light: "#ffd080",
  music: "s54",
  particles: "dust",
  desc: "뒤집힌 거리"
};
const _0xf42708 = {
  n: 55,
  name: "검은 오로라",
  boss: "noctis",
  bg: ["#020a0a", "#061818", "#0a2626"],
  tile: ["#1e3434", "#80ffc0", "#0e1a1a"],
  ambient: "#000202",
  dark: 0.55,
  light: "#80ffc0",
  music: "s55",
  particles: "snow",
  slippery: !0,
  desc: "밤의 날개"
};
const _0x3e2c20 = {
  n: 56,
  name: "바깥의 문",
  boss: "iska",
  bg: ["#020606", "#081212", "#0e1e1e"],
  tile: ["#1e2e2e", "#a0ffe0", "#0a1414"],
  ambient: "#000000",
  dark: 0.62,
  light: "#a0ffe0",
  music: "s56",
  particles: "star",
  hazard: "void",
  desc: "바깥의 전령"
};
const _0x1dd6ac = {
  n: 61,
  name: "잠의 해안",
  boss: "sandman",
  bg: ["#120e1e", "#1e1830", "#2a2244"],
  tile: ["#4a4060", "#e0d0ff", "#221c30"],
  ambient: "#04020a",
  dark: 0.5,
  light: "#e0d0ff",
  music: "s61",
  particles: "dust",
  desc: "잠의 모래와 몽유병자"
};
const _0x2152b9 = {
  n: 62,
  name: "기억의 숲",
  boss: "mneme",
  bg: ["#0a1414", "#122424", "#1a3432"],
  tile: ["#3a5048", "#ffd890", "#1a2824"],
  ambient: "#020606",
  dark: 0.5,
  light: "#ffd890",
  music: "s62",
  particles: "leaf",
  desc: "기억이 열리는 나무"
};
const _0x232c64 = {
  n: 63,
  name: "끝없는 계단",
  boss: "labyrin",
  bg: ["#141820", "#20283a", "#2e3a54"],
  tile: ["#5a6478", "#e8f0ff", "#2a3040"],
  ambient: "#04060a",
  dark: 0.4,
  light: "#e8f0ff",
  music: "s63",
  particles: "spark",
  hazard: "void",
  desc: "끝나지 않는 계단"
};
const _0x2851b2 = {
  n: 64,
  name: "악몽의 서커스",
  boss: "grimal",
  bg: ["#160608", "#280a10", "#3c1018"],
  tile: ["#4a2028", "#ffd040", "#240c10"],
  ambient: "#060002",
  dark: 0.5,
  light: "#ff6080",
  music: "s64",
  particles: "ember",
  hazard: "lava",
  desc: "악몽의 천막"
};
const _0x2b047 = {
  n: 65,
  name: "잠든 자의 침실",
  boss: "lunabel",
  bg: ["#140c1a", "#22142c", "#30203e"],
  tile: ["#5a4060", "#ffc890", "#2a1c30"],
  ambient: "#040208",
  dark: 0.6,
  light: "#ffc890",
  music: "s65",
  particles: "shadow",
  slippery: !0,
  desc: "꺼져 가는 촛불"
};
const _0x55bcf2 = {
  n: 66,
  name: "깨어나는 꿈",
  boss: "oneira",
  bg: ["#0a0610", "#1a1020", "#2a1a30"],
  tile: ["#3a2e44", "#ffe0a0", "#1a1222"],
  ambient: "#000000",
  dark: 0.6,
  light: "#ffe0a0",
  music: "s66",
  particles: "void",
  hazard: "void",
  desc: "꿈꾸는 자"
};
const _0x189dcc = {
  n: 71,
  name: "젖은 원고의 항구",
  boss: "quillon",
  bg: ["#0c1020", "#141c34", "#1e2a4a"],
  tile: ["#3a4660", "#a0b8ff", "#1a2234"],
  ambient: "#02040a",
  dark: 0.45,
  light: "#a0b8ff",
  music: "s71",
  particles: "rain",
  desc: "잉크 비가 내리는 항구"
};
const _0x3d4a53 = {
  n: 72,
  name: "활자 광산",
  boss: "typhos",
  bg: ["#140e0a", "#241a12", "#34261a"],
  tile: ["#5a4a3a", "#ffb060", "#2a2018"],
  ambient: "#060402",
  dark: 0.5,
  light: "#ffb060",
  music: "s72",
  particles: "spark",
  desc: "납 활자를 캐는 갱도"
};
const _0x1ccf7d = {
  n: 73,
  name: "번지는 숲",
  boss: "smudra",
  bg: ["#0a0e16", "#121a28", "#1c2638"],
  tile: ["#2e3a4e", "#8090c0", "#161c28"],
  ambient: "#020306",
  dark: 0.5,
  light: "#a0b0e0",
  music: "s73",
  particles: "leaf",
  desc: "먹물이 번져 자란 숲"
};
const _0x3eb420 = {
  n: 74,
  name: "제본소 요새",
  boss: "stitcher",
  bg: ["#1a140e", "#2a2016", "#3a2e20"],
  tile: ["#6a5640", "#e0d0b0", "#2e2418"],
  ambient: "#060402",
  dark: 0.4,
  light: "#f0e0c0",
  music: "s74",
  particles: "dust",
  desc: "실과 바늘의 성채"
};
const _0x2c8935 = {
  n: 75,
  name: "등잔불 서고",
  boss: "lampra",
  bg: ["#1a0c06", "#2a140a", "#3c1e0e"],
  tile: ["#5a3a24", "#ffb040", "#2a180c"],
  ambient: "#080200",
  dark: 0.55,
  light: "#ffb040",
  music: "s75",
  particles: "ember",
  hazard: "lava",
  desc: "불붙은 서가"
};
const _0x1cb0c3 = {
  n: 76,
  name: "필경사의 책상",
  boss: "inkarna",
  bg: ["#04060e", "#0a0e1e", "#121a30"],
  tile: ["#222a40", "#6080ff", "#0e1220"],
  ambient: "#000000",
  dark: 0.6,
  light: "#6080ff",
  music: "s76",
  particles: "void",
  hazard: "void",
  desc: "잉크의 군주"
};
const _0x46dd6b = {
  n: 81,
  name: "유리 사막",
  boss: "dunak",
  bg: ["#2a1e10", "#3e2c18", "#544024"],
  tile: ["#8a7048", "#f0e0a0", "#3e3020"],
  ambient: "#0a0602",
  dark: 0.3,
  light: "#fff0c0",
  music: "s81",
  particles: "dust",
  desc: "모래가 유리로 굳은 사막"
};
const _0x3a418d = {
  n: 82,
  name: "거울 소금호수",
  boss: "salmira",
  bg: ["#141a24", "#202a3a", "#2e3c50"],
  tile: ["#8a98b0", "#ffffff", "#3a4458"],
  ambient: "#04060a",
  dark: 0.35,
  light: "#e0f0ff",
  music: "s82",
  particles: "snow",
  slippery: !0,
  desc: "하늘을 비추는 소금 평원"
};
const _0x5a536c = {
  n: 83,
  name: "무지개 협곡",
  boss: "iridel",
  bg: ["#1a1024", "#2a1a36", "#3c2648"],
  tile: ["#6a4a5a", "#ffa0e0", "#2e2030"],
  ambient: "#060208",
  dark: 0.38,
  light: "#ffc0f0",
  music: "s83",
  particles: "spark",
  desc: "빛이 갈라지는 협곡"
};
const _0x49feaf = {
  n: 84,
  name: "프리즘 성당",
  boss: "cantora",
  bg: ["#16141e", "#24202e", "#343046"],
  tile: ["#6a6478", "#fff0a0", "#2c2836"],
  ambient: "#040308",
  dark: 0.42,
  light: "#fff0c0",
  music: "s84",
  particles: "star",
  desc: "유리로 지은 성당"
};
const _0x4cd659 = {
  n: 85,
  name: "깨진 등대",
  boss: "phara",
  bg: ["#060a10", "#0e1620", "#162232"],
  tile: ["#3a4654", "#fff0a0", "#1a2028"],
  ambient: "#010204",
  dark: 0.58,
  light: "#fff0a0",
  music: "s85",
  particles: "rain",
  hazard: "void",
  desc: "미쳐 버린 등대의 빛"
};
const _0x4541b7 = {
  n: 86,
  name: "유리 바다의 심장",
  boss: "vitreon",
  bg: ["#04121a", "#08202c", "#0e3040"],
  tile: ["#2a5060", "#a0f0ff", "#10242e"],
  ambient: "#000204",
  dark: 0.55,
  light: "#a0f0ff",
  music: "s86",
  particles: "bubble",
  slippery: !0,
  desc: "바다를 굳힌 심장"
};
const _0x16bbe6 = {
  n: 91,
  name: "증기 하수도",
  boss: "valvex",
  bg: ["#0e100c", "#1a1e16", "#262c20"],
  tile: ["#4a4e3a", "#c0c0a0", "#20241a"],
  ambient: "#030402",
  dark: 0.5,
  light: "#e0e0c0",
  music: "s91",
  particles: "bubble",
  desc: "증기가 새는 하수관"
};
const _0x2e9289 = {
  n: 92,
  name: "태엽 시장",
  boss: "tickter",
  bg: ["#1c140a", "#2c2010", "#3e2e18"],
  tile: ["#6a5030", "#ffd060", "#2e2214"],
  ambient: "#060402",
  dark: 0.38,
  light: "#ffd890",
  music: "s92",
  particles: "spark",
  desc: "시간을 파는 노점"
};
const _0x26bf01 = {
  n: 93,
  name: "기관차 다리",
  boss: "locomar",
  bg: ["#1a0e0a", "#2a1810", "#3a2216"],
  tile: ["#4a3a34", "#ff8040", "#241a16"],
  ambient: "#060200",
  dark: 0.45,
  light: "#ff9a50",
  music: "s93",
  particles: "ash",
  hazard: "void",
  desc: "협곡을 건너는 철교"
};
const _0x1629c3 = {
  n: 94,
  name: "시계탑 감옥",
  boss: "horolock",
  bg: ["#0e0e14", "#18182a", "#24243c"],
  tile: ["#4a4a5a", "#ffe0a0", "#20202a"],
  ambient: "#020204",
  dark: 0.55,
  light: "#ffe0a0",
  music: "s94",
  particles: "shadow",
  desc: "시간에 갇힌 죄수들"
};
const _0x5100a6 = {
  n: 95,
  name: "용광 심장부",
  boss: "caldra",
  bg: ["#200604", "#360c06", "#4c140a"],
  tile: ["#5a2a1a", "#ff6020", "#2a100a"],
  ambient: "#0a0200",
  dark: 0.45,
  light: "#ff6020",
  music: "s95",
  particles: "ember",
  hazard: "lava",
  desc: "제국의 불타는 심장"
};
const _0x3a8393 = {
  n: 96,
  name: "태엽 왕좌",
  boss: "kronax",
  bg: ["#140e04", "#241a08", "#36280e"],
  tile: ["#5a4820", "#ffd060", "#2a2010"],
  ambient: "#040200",
  dark: 0.5,
  light: "#ffd060",
  music: "s96",
  particles: "spark",
  hazard: "void",
  desc: "태엽 황제"
};
const _0x563dbc = {
  n: 101,
  name: "곰팡이 습지",
  boss: "moldra",
  bg: ["#0a120a", "#121e10", "#1a2a16"],
  tile: ["#3a4a2a", "#a0d060", "#1a2412"],
  ambient: "#020402",
  dark: 0.5,
  light: "#c0f080",
  music: "s101",
  particles: "spore",
  desc: "포자가 피어오르는 늪"
};
const _0x3c80de = {
  n: 102,
  name: "썩은 과수원",
  boss: "pomora",
  bg: ["#160e08", "#24180e", "#342214"],
  tile: ["#4a3a24", "#e08040", "#241a10"],
  ambient: "#060300",
  dark: 0.42,
  light: "#ffa060",
  music: "s102",
  particles: "leaf",
  desc: "독이 든 열매"
};
const _0x5a069b = {
  n: 103,
  name: "벌집 수도원",
  boss: "apisa",
  bg: ["#1c1406", "#2e200a", "#402e10"],
  tile: ["#6a5020", "#ffd040", "#30240e"],
  ambient: "#060400",
  dark: 0.4,
  light: "#ffe060",
  music: "s103",
  particles: "dust",
  desc: "육각형 회랑"
};
const _0x23bba2 = {
  n: 104,
  name: "고치 동굴",
  boss: "chrysa",
  bg: ["#100e0c", "#1c1a16", "#2a2620"],
  tile: ["#4a463c", "#f0e8d0", "#222018"],
  ambient: "#030302",
  dark: 0.58,
  light: "#f0e8d0",
  music: "s104",
  particles: "shadow",
  desc: "비단실이 드리운 동굴"
};
const _0x3366a2 = {
  n: 105,
  name: "독꽃의 궁정",
  boss: "belladon",
  bg: ["#160a1a", "#24102a", "#34183c"],
  tile: ["#4a2a50", "#e080ff", "#24142a"],
  ambient: "#050208",
  dark: 0.45,
  light: "#f0a0ff",
  music: "s105",
  particles: "petal",
  desc: "가시 정원의 궁정"
};
const _0x83d1bf = {
  n: 106,
  name: "여왕의 꽃자궁",
  boss: "floravae",
  bg: ["#081406", "#10220c", "#183212"],
  tile: ["#2a4a1e", "#a0ff60", "#14240e"],
  ambient: "#000200",
  dark: 0.55,
  light: "#a0ff60",
  music: "s106",
  particles: "spore",
  hazard: "void",
  desc: "역병 정원의 여왕"
};
const _0x242c89 = {
  n: 111,
  name: "운석 분화구",
  boss: "meteon",
  bg: ["#1a0c08", "#2a140c", "#3a1e12"],
  tile: ["#5a3a2e", "#ff8050", "#2a1a14"],
  ambient: "#060200",
  dark: 0.45,
  light: "#ff9060",
  music: "s111",
  particles: "ash",
  hazard: "lava",
  desc: "별이 떨어진 자리"
};
const _0x4809f2 = {
  n: 112,
  name: "얼어붙은 혜성",
  boss: "cometra",
  bg: ["#08101c", "#10203a", "#183050"],
  tile: ["#4a6080", "#e0f8ff", "#1e2a3a"],
  ambient: "#010308",
  dark: 0.42,
  light: "#c0f0ff",
  music: "s112",
  particles: "snow",
  slippery: !0,
  desc: "혜성의 얼음 등"
};
const _0x1d9211 = {
  n: 113,
  name: "성운 늪",
  boss: "nebulis",
  bg: ["#100818", "#1c0e2c", "#2a1640"],
  tile: ["#3e2a54", "#d0a0ff", "#1c1228"],
  ambient: "#030106",
  dark: 0.5,
  light: "#d0a0ff",
  music: "s113",
  particles: "star",
  desc: "별이 태어나는 늪"
};
const _0x2e63d3 = {
  n: 114,
  name: "별자리 사냥터",
  boss: "orionel",
  bg: ["#04061a", "#0a0e2c", "#121a40"],
  tile: ["#2a3460", "#e0e0ff", "#141a30"],
  ambient: "#000104",
  dark: 0.5,
  light: "#e0e0ff",
  music: "s114",
  particles: "star",
  desc: "하늘의 사냥터"
};
const _0x3452c5 = {
  n: 115,
  name: "블랙홀 가장자리",
  boss: "horizon",
  bg: ["#020104", "#08040e", "#100818"],
  tile: ["#24182e", "#a080ff", "#0e0814"],
  ambient: "#000000",
  dark: 0.62,
  light: "#a080ff",
  music: "s115",
  particles: "void",
  hazard: "void",
  desc: "빛이 휘는 곳"
};
const _0x36fbac = {
  n: 116,
  name: "짐승의 뱃속",
  boss: "astrovor",
  bg: ["#14040c", "#240818", "#360e26"],
  tile: ["#4a1a34", "#e0a0ff", "#240c1a"],
  ambient: "#040002",
  dark: 0.58,
  light: "#e0a0ff",
  music: "s116",
  particles: "star",
  hazard: "void",
  desc: "삼켜진 별들"
};
const _0x588f85 = {
  n: 121,
  name: "찢어진 목차",
  boss: "indexa",
  bg: ["#1a160e", "#2a2416", "#3c3420"],
  tile: ["#6a5e44", "#f0e0b0", "#2e281c"],
  ambient: "#060402",
  dark: 0.38,
  light: "#fff0c0",
  music: "s121",
  particles: "dust",
  desc: "흩어진 장 제목들"
};
const _0x264f1f = {
  n: 122,
  name: "각주의 미로",
  boss: "glossa",
  bg: ["#0e1018", "#181c2a", "#24283c"],
  tile: ["#4a5068", "#c0d0ff", "#20242e"],
  ambient: "#020306",
  dark: 0.48,
  light: "#c0d0ff",
  music: "s122",
  particles: "spark",
  desc: "작은 글씨의 미궁"
};
const _0x202cf6 = {
  n: 123,
  name: "검열의 탑",
  boss: "censora",
  bg: ["#0c0a0a", "#181212", "#241a1a"],
  tile: ["#3a3030", "#ff3040", "#1a1414"],
  ambient: "#020000",
  dark: 0.58,
  light: "#ff5060",
  music: "s123",
  particles: "ash",
  desc: "검게 칠해진 문장"
};
const _0xc689c3 = {
  n: 124,
  name: "퇴고의 불",
  boss: "revisa",
  bg: ["#1e0804", "#320e06", "#46160a"],
  tile: ["#5a2e1a", "#ff8040", "#2a1008"],
  ambient: "#080200",
  dark: 0.48,
  light: "#ff8040",
  music: "s124",
  particles: "ember",
  hazard: "lava",
  desc: "고쳐 쓰기 위한 불"
};
const _0x5506ac = {
  n: 125,
  name: "작가의 방",
  boss: "calliope",
  bg: ["#140e1a", "#22182a", "#32243c"],
  tile: ["#54405a", "#ffe0a0", "#281e2c"],
  ambient: "#040206",
  dark: 0.5,
  light: "#ffe0a0",
  music: "s125",
  particles: "petal",
  desc: "촛불과 원고 더미"
};
const _0x399702 = {
  n: 126,
  name: "마지막 페이지",
  boss: "graphiel",
  bg: ["#e8e0d0", "#c8bca8", "#a89c88"],
  tile: ["#3a3430", "#fff0d0", "#1a1614"],
  ambient: "#100c08",
  dark: 0.35,
  light: "#fff0d0",
  music: "s126",
  particles: "ash",
  hazard: "void",
  desc: "아직 쓰이지 않은 끝"
};
const _0x108092 = {
  n: 131,
  name: "다시 읽는 묘소",
  boss: "echo_king",
  bg: ["#120a14", "#22142a", "#321c3c"],
  tile: ["#4a3a50", "#c070ff", "#1e1424"],
  ambient: "#040006",
  dark: 0.5,
  light: "#ff60c0",
  music: "s131",
  particles: "ash",
  desc: "묘소·잿빛 성좌·핏빛 왕관의 메아리"
};
const _0x29c50d = {
  n: 132,
  name: "바래진 꿈의 바다",
  boss: "echo_dream",
  bg: ["#060a14", "#0e1828", "#162438"],
  tile: ["#2e3e54", "#ffe0b0", "#141c28"],
  ambient: "#000206",
  dark: 0.58,
  light: "#ffe0b0",
  music: "s132",
  particles: "bubble",
  hazard: "void",
  desc: "망각·바깥의 바다·잠든 신의 꿈의 메아리"
};
const _0x46c028 = {
  n: 133,
  name: "잉크 유리의 항구",
  boss: "echo_ink",
  bg: ["#081220", "#10223a", "#183252"],
  tile: ["#2e4a66", "#a0f0ff", "#14202e"],
  ambient: "#010308",
  dark: 0.5,
  light: "#a0f0ff",
  music: "s133",
  particles: "rain",
  slippery: !0,
  desc: "잉크 왕국·유리 바다의 메아리"
};
const _0x45da3b = {
  n: 134,
  name: "태엽 정원",
  boss: "echo_bloom",
  bg: ["#10120a", "#1e2410", "#2c3418"],
  tile: ["#4a4a24", "#ffd060", "#20220e"],
  ambient: "#030400",
  dark: 0.5,
  light: "#ffd060",
  music: "s134",
  particles: "spore",
  hazard: "lava",
  desc: "톱니 제국·역병 정원의 메아리"
};
const _0x1a4ca2 = {
  n: 135,
  name: "별을 삼킨 마지막 페이지",
  boss: "echo_scribe",
  bg: ["#140818", "#22102a", "#32183e"],
  tile: ["#4a2a54", "#e0a0ff", "#221228"],
  ambient: "#040008",
  dark: 0.55,
  light: "#e0a0ff",
  music: "s135",
  particles: "star",
  hazard: "void",
  desc: "별을 먹는 짐승·마지막 페이지의 메아리"
};
const _0x260cb4 = {
  n: 136,
  name: "책장 밖",
  boss: "lector",
  bg: ["#020204", "#0a0a10", "#14141e"],
  tile: ["#2a2a34", "#ffffff", "#101016"],
  ambient: "#000000",
  dark: 0.55,
  light: "#ffffff",
  music: "s136",
  particles: "void",
  hazard: "void",
  desc: "책을 덮으려는 손"
};
const definition_first_run = {
  id: "first_run",
  name: "첫 계약",
  desc: "첫 런을 시작한다",
  reward: 160
};
const definition_clear1 = {
  id: "clear1",
  name: "묘소의 정적",
  desc: "묘지기 그라벤을 쓰러뜨린다",
  reward: 320
};
const definition_clear2 = {
  id: "clear2",
  name: "정화",
  desc: "부패의 어미 미코라를 쓰러뜨린다",
  reward: 400
};
const definition_clear3 = {
  id: "clear3",
  name: "꺼진 용광로",
  desc: "용광로 거신 이그니스를 쓰러뜨린다",
  reward: 480
};
const definition_clear4 = {
  id: "clear4",
  name: "끝의 끝",
  desc: "끝없는 왕을 쓰러뜨린다",
  reward: 1000
};
const definition_clear_morten = {
  id: "clear_morten",
  name: "닻을 내리다",
  desc: "익사한 제독 모르텐을 쓰러뜨린다",
  reward: 400
};
const definition_clear_libra = {
  id: "clear_libra",
  name: "해동",
  desc: "금서의 수호자 리브라를 쓰러뜨린다",
  reward: 560
};
const definition_clear_oblivion = {
  id: "clear_oblivion",
  name: "기억하는 자",
  desc: "망각을 쓰러뜨리고 진엔딩을 본다",
  reward: 1600
};
const definition_kills100 = {
  id: "kills100",
  name: "백인참",
  desc: "누적 처치 100",
  reward: 160
};
const definition_kills1000 = {
  id: "kills1000",
  name: "사자의 군주",
  desc: "누적 처치 1000",
  reward: 480
};
const definition_combo50 = {
  id: "combo50",
  name: "멈추지 않는 칼날",
  desc: "콤보 50 달성",
  reward: 160
};
const definition_combo150 = {
  id: "combo150",
  name: "폭풍 연격",
  desc: "콤보 150 달성",
  reward: 320
};
const definition_swap50 = {
  id: "swap50",
  name: "호흡의 일치",
  desc: "교대 공격 50회 적중",
  reward: 160
};
const definition_crest6 = {
  id: "crest6",
  name: "완성된 문장",
  desc: "한 문장을 6단계까지 모은다",
  reward: 320
};
const definition_relic10 = {
  id: "relic10",
  name: "수집가",
  desc: "한 런에서 유물 10개 보유",
  reward: 240
};
const definition_chars5 = {
  id: "chars5",
  name: "다섯 개의 계약",
  desc: "영웅 5명 보유",
  reward: 160
};
const definition_chars14 = {
  id: "chars14",
  name: "모든 혼의 주인",
  desc: "모든 영웅 보유",
  reward: 2400
};
const definition_star5 = {
  id: "star5",
  name: "별이 내린 날",
  desc: "★5를 처음 획득한다",
  reward: 160
};
const definition_awaken5 = {
  id: "awaken5",
  name: "완전한 각성",
  desc: "영웅 하나를 5각성시킨다",
  reward: 480
};
const definition_level20 = {
  id: "level20",
  name: "극의",
  desc: "영웅 하나를 20레벨로 육성한다",
  reward: 320
};
const definition_curse1 = {
  id: "curse1",
  name: "저주를 넘어",
  desc: "저주 1단계 이상으로 최종 보스 처치",
  reward: 640
};
const definition_hidden = {
  id: "hidden",
  name: "벽 너머",
  desc: "숨겨진 보물을 발견한다",
  reward: 160
};
const definition_nodamage = {
  id: "nodamage",
  name: "무결",
  desc: "보스를 피격 없이 처치한다",
  reward: 480
};
const definition_story2 = {
  id: "story2",
  name: "꺼진 별",
  desc: "스토리 2 「잿빛 성좌」를 완수한다",
  reward: 2000
};
const definition_story3 = {
  id: "story3",
  name: "부서진 왕관",
  desc: "스토리 3 「핏빛 왕관」을 완수한다",
  reward: 3000
};
const definition_story4 = {
  id: "story4",
  name: "마지막 계약",
  desc: "스토리 4 「태초의 계약」을 완수한다",
  reward: 4000
};
const _0x13d2e4 = {
  hpPct: -0.2,
  relic: !0
};
const _0x1bc788 = {
  label: "피를 바친다 (체력 -20%)",
  result: "여신상이 미소 짓는다. 손에 무언가 쥐어졌다.",
  fx: _0x13d2e4
};
const _0x2ce7c7 = {
  gold: 80
};
const _0x4d0ceb = {
  label: "금화를 챙긴다",
  result: "금화를 쓸어 담았다. 어딘가에서 한숨 소리가 들린다.",
  fx: _0x2ce7c7
};
const _0x8e3f45 = {
  hpPct: 0.25
};
const _0x2b7c6a = {
  label: "기도한다",
  result: "마음이 평온해진다. 체력이 회복되었다.",
  fx: _0x8e3f45
};
const definition_weeping_statue = {
  id: "weeping_statue",
  title: "눈물 흘리는 석상",
  text: "이끼 낀 여신상이 붉은 눈물을 흘리고 있다. 발치의 그릇에는 오래된 금화가 쌓여 있다.",
  choices: [_0x1bc788, _0x4d0ceb, _0x2b7c6a]
};
const _0x3dc904 = {
  gold: -60
};
const _0x266495 = {
  gold: 100,
  chance: 0.5,
  failResult: "졌다. 해골이 깔깔 웃는다.",
  failFx: _0x3dc904
};
const _0x541c53 = {
  label: "금화 60을 건다",
  needGold: 60,
  result: "이겼다! 해골이 투덜대며 금화를 넘긴다.",
  fx: _0x266495
};
const _0x10762c = {
  hpPct: -0.3
};
const _0x5a62b2 = {
  relic: !0,
  chance: 0.5,
  failResult: "졌다. 영혼 일부가 빠져나갔다.",
  failFx: _0x10762c
};
const _0x35448f = {
  label: "영혼을 건다 (체력)",
  result: "이겼다! 해골이 아끼던 유물을 내놓는다.",
  fx: _0x5a62b2
};
const _0xf6a1d1 = {
  label: "거절한다",
  result: "\"겁쟁이로군.\" 해골은 다시 주사위를 굴린다.",
  fx: {}
};
const definition_gambler = {
  id: "gambler",
  title: "해골 도박사",
  text: "\"한 판 하겠나, 살아있는 자여?\" 해골이 주사위를 굴리며 이를 딱딱거린다.",
  choices: [_0x541c53, _0x35448f, _0xf6a1d1]
};
const _0x52fd24 = {
  stone: 60
};
const _0x451e3c = {
  label: "손을 담근다",
  result: "계약석이 손에 맺혔다.",
  fx: _0x52fd24
};
const _0x581f98 = {
  hpPct: -0.15,
  tempChar: !0
};
const _0x4d6b9d = {
  label: "깊이 들여다본다 (체력 -15%)",
  result: "우물 속에서 누군가 손을 내밀었다. 새로운 영웅이 합류한다!",
  fx: _0x581f98
};
const _0x5d77f1 = {
  hpPct: 0.35
};
const _0x3066f6 = {
  label: "물을 마신다",
  result: "차가운 물이 상처를 씻어낸다.",
  fx: _0x5d77f1
};
const definition_soul_well = {
  id: "soul_well",
  title: "영혼의 우물",
  text: "푸른 빛이 일렁이는 우물. 수많은 영혼이 속삭인다.",
  choices: [_0x451e3c, _0x4d6b9d, _0x3066f6]
};
const _0x5a7dde = {
  gold: -80,
  atk: 0.1
};
const _0x35453c = {
  label: "금화 80을 낸다",
  needGold: 80,
  result: "무기가 날카로워졌다. 공격력 +10%",
  fx: _0x5a7dde
};
const _0x1c36de = {
  weapon: !0
};
const _0x3cd3b3 = {
  label: "다른 무기를 달라",
  result: "유령이 낡은 상자에서 무기를 꺼낸다.",
  fx: _0x1c36de
};
const _0xef2d5c = {
  label: "그냥 지나간다",
  result: "쇠 두드리는 소리가 멀어진다.",
  fx: {}
};
const definition_blacksmith_ghost = {
  id: "blacksmith_ghost",
  title: "대장장이의 유령",
  text: "반쯤 투명한 대장장이가 모루를 두드린다. \"무기를 손봐 주지. 대가는 있지만.\"",
  choices: [_0x35453c, _0x3cd3b3, _0xef2d5c]
};
const _0x4f72fc = {
  relic: !0,
  curseFight: !0
};
const _0x13bd31 = {
  label: "연다",
  result: "유물을 얻었다! 하지만 상자 속 망령이 덮쳤다.",
  fx: _0x4f72fc
};
const _0x25738d = {
  hpPct: -0.1,
  gold: 120
};
const _0x23da2c = {
  label: "부순다 (체력 -10%)",
  result: "상자가 산산조각 났다. 금화가 쏟아진다.",
  fx: _0x25738d
};
const _0x4d7e9f = {
  label: "무시한다",
  result: "현명한 선택일지도 모른다.",
  fx: {}
};
const definition_cursed_chest = {
  id: "cursed_chest",
  title: "저주받은 상자",
  text: "쇠사슬로 묶인 상자에서 검은 연기가 새어 나온다. 안에서 무언가 반짝인다.",
  choices: [_0x13bd31, _0x23da2c, _0x4d7e9f]
};
const _0x187b61 = {
  crystal: 40,
  usePotion: !0
};
const _0x1a157f = {
  label: "회복 물약을 나눈다",
  result: "순례자가 감사하며 영혼 결정을 건넨다.",
  fx: _0x187b61
};
const _0x1f2812 = {
  gold: -30,
  maxHp: 15
};
const _0x2077ce = {
  label: "금화를 준다 (30)",
  needGold: 30,
  result: "순례자가 축복을 내린다. 최대 체력 +15",
  fx: _0x1f2812
};
const _0x56a99f = {
  label: "지나친다",
  result: "뒤에서 희미한 기도가 들린다.",
  fx: {}
};
const definition_pilgrim = {
  id: "pilgrim",
  title: "길 잃은 순례자",
  text: "지친 순례자가 쓰러져 있다. \"물... 물 좀...\"",
  choices: [_0x1a157f, _0x2077ce, _0x56a99f]
};
const _0x381c60 = {
  tempChar: !0
};
const _0x1095a1 = {
  label: "손을 맞댄다",
  result: "거울 속 영웅이 계약에 응했다!",
  fx: _0x381c60
};
const _0x1aa5d6 = {
  relic: !0,
  hpPct: -0.12
};
const _0x295293 = {
  label: "거울을 깬다",
  result: "파편 속에서 유물을 찾았다. 손을 베었다.",
  fx: _0x1aa5d6
};
const _0x55ba85 = {
  label: "돌아선다",
  result: "거울 속 영웅이 쓸쓸히 웃는다.",
  fx: {}
};
const definition_mirror = {
  id: "mirror",
  title: "비추지 않는 거울",
  text: "거울에 당신 대신 낯선 영웅이 비친다. 그가 손짓한다.",
  choices: [_0x1095a1, _0x295293, _0x55ba85]
};
const _0x2df159 = {
  gold: -50,
  relic: !0
};
const _0x227b8f = {
  label: "금화 50을 바친다",
  needGold: 50,
  result: "사당이 빛나며 유물을 내린다.",
  fx: _0x2df159
};
const _0x2f4ab5 = {
  gold: 70,
  hpPct: -0.08
};
const _0x2ef24f = {
  label: "공물을 훔친다",
  result: "금화를 얻었다... 등 뒤가 서늘하다.",
  fx: _0x2f4ab5
};
const _0x3d1297 = {
  stone: 30
};
const _0x140cb3 = {
  label: "절을 올린다",
  result: "작은 계약석 조각이 떨어졌다.",
  fx: _0x3d1297
};
const definition_shrine = {
  id: "shrine",
  title: "잊힌 사당",
  text: "먼지 쌓인 사당에 공물 그릇이 놓여 있다.",
  choices: [_0x227b8f, _0x2ef24f, _0x140cb3]
};
const _0x279a41 = {
  lv: 0,
  name: "저주 없음",
  desc: "기본 난이도",
  enemy: 0,
  reward: 0
};
const _0x57b57f = {
  lv: 1,
  name: "저주 I",
  desc: "적 체력·공격력 +20%, 보상 +25%",
  enemy: 0.2,
  reward: 0.25
};
const _0x113ce4 = {
  lv: 2,
  name: "저주 II",
  desc: "적 +40%, 보상 +50%",
  enemy: 0.4,
  reward: 0.5
};
const _0x88e4d6 = {
  lv: 3,
  name: "저주 III",
  desc: "적 +65%, 정예 증가, 보상 +80%",
  enemy: 0.65,
  reward: 0.8
};
const _0x5da8f2 = {
  lv: 4,
  name: "저주 IV",
  desc: "적 +90%, 보상 +110%",
  enemy: 0.9,
  reward: 1.1
};
const _0x4e9c87 = {
  lv: 5,
  name: "저주 V",
  desc: "적 +120%, 회복량 감소, 보상 +150%",
  enemy: 1.2,
  reward: 1.5
};
const _0x2a09e3 = {
  lv: 6,
  name: "저주 VI",
  desc: "적 +160%, 회복량 감소, 보상 +190%",
  enemy: 1.6,
  reward: 1.9
};
const _0x2279ad = {
  lv: 7,
  name: "저주 VII",
  desc: "적 +210%, 회복량 감소, 보상 +240%",
  enemy: 2.1,
  reward: 2.4
};
const _0x164170 = {
  lv: 8,
  name: "저주 VIII",
  desc: "적 +270%, 회복량 크게 감소, 보상 +300%",
  enemy: 2.7,
  reward: 3
};
const _0x5d09e5 = {
  lv: 9,
  name: "저주 IX",
  desc: "적 +340%, 회복량 크게 감소, 보상 +370%",
  enemy: 3.4,
  reward: 3.7
};
const _0x449d1e = {
  lv: 10,
  name: "저주 X",
  desc: "적 +420%, 회복량 크게 감소, 보상 +450% — 끝의 저주",
  enemy: 4.2,
  reward: 4.5
};
const Ba = [definition_potion, definition_bomb, definition_frost, definition_lantern, definition_ward], Zr = Object.fromEntries(Ba.map(_0x2f7dd0 => [_0x2f7dd0.id, _0x2f7dd0])), De = [_0x43f384, _0xb87ed7, _0x3e31de, _0x1fde9a, _0x14f4c0, _0x6f81eb, _0x1abcea, _0x3c2570, _0x2c4795, _0x28451b, _0xe16c82, _0x249829, _0x5af617, _0x5929f1, _0x1e4fb5, _0x5eceaf, _0x4bdfd5, _0x4d3a6d, _0x489b02, _0x1c73dc, _0x51dab8, _0x4a2daa, _0x11fc66, _0x1b3b41, _0x3be11b, _0x403473, _0x4b670a, _0x195470, _0x14aade, _0x433b0f, _0x1ac09c, _0x2bcc84, _0x166ec8, _0x455f9f, _0x1a6d0d, _0xf42708, _0x3e2c20, _0x1dd6ac, _0x2152b9, _0x232c64, _0x2851b2, _0x2b047, _0x55bcf2, _0x189dcc, _0x3d4a53, _0x1ccf7d, _0x3eb420, _0x2c8935, _0x1cb0c3, _0x46dd6b, _0x3a418d, _0x5a536c, _0x49feaf, _0x4cd659, _0x4541b7, _0x16bbe6, _0x2e9289, _0x26bf01, _0x1629c3, _0x5100a6, _0x3a8393, _0x563dbc, _0x3c80de, _0x5a069b, _0x23bba2, _0x3366a2, _0x83d1bf, _0x242c89, _0x4809f2, _0x1d9211, _0x2e63d3, _0x3452c5, _0x36fbac, _0x588f85, _0x264f1f, _0x202cf6, _0xc689c3, _0x5506ac, _0x399702, _0x108092, _0x29c50d, _0x46c028, _0x45da3b, _0x1a4ca2, _0x260cb4, ...wa, ...ya], Ma = _0x4d8e11 => De.find(_0x127e6c => _0x127e6c.n === _0x4d8e11) ?? De[0], Ha = B.filter(_0x252480 => _0x252480.ready).map(_0x2e1a17 => ({
  "id": "book" + _0x2e1a17.id,
  "name": _0x2e1a17.name + " 완독",
  "desc": _0x2e1a17.name + "의 마지막 스토리를 완수한다",
  "reward": 0,
  "compass": 1
})), qr = [...Ha, definition_first_run, definition_clear1, definition_clear2, definition_clear3, definition_clear4, definition_clear_morten, definition_clear_libra, definition_clear_oblivion, definition_kills100, definition_kills1000, definition_combo50, definition_combo150, definition_swap50, definition_crest6, definition_relic10, definition_chars5, definition_chars14, definition_star5, definition_awaken5, definition_level20, definition_curse1, definition_hidden, definition_nodamage, definition_story2, definition_story3, definition_story4], Qr = [definition_weeping_statue, definition_gambler, definition_soul_well, definition_blacksmith_ghost, definition_cursed_chest, definition_pilgrim, definition_mirror, definition_shrine], ee = [_0x279a41, _0x57b57f, _0x113ce4, _0x88e4d6, _0x5da8f2, _0x4e9c87, _0x2a09e3, _0x2279ad, _0x164170, _0x5d09e5, _0x449d1e];
function Jr(_0x5cefba) {
  const _0x24db3f = {
    PWxtY: function (_0x561c69, _0xf3185) {
      return _0x561c69 <= _0xf3185;
    }
  };
  (_0x24db3f.UlARX = "기본 난이도", _0x24db3f.wwnXd = function (_0x27fe0b, _0x2a43d0) {
    return _0x27fe0b >= _0x2a43d0;
  });
  const _0x368f59 = _0x24db3f, _0x18ec40 = ee[_0x5cefba];
  if (!_0x18ec40 || _0x5cefba <= 0) return _0x368f59.UlARX;
  const _0x6638ca = ["적 체력·공격력 +" + Math.round(_0x18ec40.enemy * 100) + "%", "받는 피해 +" + _0x5cefba * 15 + "%", "적 속도 +" + Math.round(_0x18ec40.enemy * 6) + "%"];
  return (_0x368f59.wwnXd(_0x5cefba, 3) && _0x6638ca.push("정예 +" + (_0x368f59.wwnXd(_0x5cefba, 9) ? 3 : _0x5cefba >= 6 ? 2 : 1)), _0x368f59.wwnXd(_0x5cefba, 5) && _0x6638ca.push("회복 -" + (_0x368f59.wwnXd(_0x5cefba, 8) ? 50 : 30) + "%"), _0x6638ca.push("보상 +" + Math.round(_0x18ec40.reward * 100) + "%"), _0x6638ca.join(" · "));
}
const _0xd22daa = {
  name: "전투",
  desc: "금화 보상",
  col: "#ffd040",
  icon: "coin"
};
const _0x4f75e5 = {
  name: "정예",
  desc: "유물 보상",
  col: "#ff5050",
  icon: "skull"
};
const _0x1311f8 = {
  name: "영혼 제단",
  desc: "임시 영웅 획득",
  col: "#9ef0ff",
  icon: "soul"
};
const _0x5c88d1 = {
  name: "무기고",
  desc: "무기 교체",
  col: "#c0c8d0",
  icon: "sword"
};
const _0x57b24d = {
  name: "상점",
  desc: "유물·아이템 구매",
  col: "#80ff80",
  icon: "bag"
};
const _0x308f12 = {
  name: "휴식",
  desc: "체력 회복",
  col: "#ff80a0",
  icon: "heart"
};
const _0x2db3d1 = {
  name: "이벤트",
  desc: "알 수 없는 만남",
  col: "#c080ff",
  icon: "question"
};
const _0x276141 = {
  name: "보물방",
  desc: "유물과 금화",
  col: "#ffe080",
  icon: "chest"
};
const _0x4bb2b9 = {
  name: "보스",
  desc: "챕터의 주인",
  col: "#ff2040",
  icon: "crown"
};
const _0x306a55 = {
  name: "입구",
  desc: "",
  col: "#a0a0a0",
  icon: "door"
};
const _0x236b53 = {
  name: "훈련",
  desc: "",
  col: "#a0a0a0",
  icon: "door"
};
const _0x4265f4 = {
  combat: _0xd22daa,
  elite: _0x4f75e5,
  altar: _0x1311f8,
  armory: _0x5c88d1,
  shop: _0x57b24d,
  rest: _0x308f12,
  event: _0x2db3d1,
  treasure: _0x276141,
  boss: _0x4bb2b9,
  start: _0x306a55,
  tutorial: _0x236b53
};
const _0x10dbf5 = {
  atk: 0.05
};
const _0x414471 = {
  stats: _0x10dbf5
};
const _0x92dba2 = {
  k: "status",
  s: "burn"
};
const _0x5d200e = {
  on: "hit",
  chance: 0.1,
  do: [_0x92dba2]
};
const relic_ember_heart = {
  id: "ember_heart",
  name: "잿불 심장",
  crest: ["flame"],
  rarity: 1,
  icon: "heart",
  col: "#ff7a2a",
  desc: "공격 시 10% 확률로 화상. 공격력 +5%",
  effects: [_0x414471, _0x5d200e]
};
const _0x3c4298 = {
  skillDmg: 0.1
};
const _0x4a55ff = {
  stats: _0x3c4298
};
const _0x2d7aa5 = {
  k: "status",
  s: "burn"
};
const _0x1459d1 = {
  on: "skillHit",
  do: [_0x2d7aa5]
};
const relic_pyre_candle = {
  id: "pyre_candle",
  name: "장례 촛대",
  crest: ["flame", "soul"],
  rarity: 2,
  icon: "candle",
  col: "#ffb04a",
  desc: "스킬 적중 시 화상. 스킬 피해 +10%",
  effects: [_0x4a55ff, _0x1459d1]
};
const _0x1d8851 = {
  k: "nova",
  r: 22,
  m: 0.4,
  el: "fire",
  st: "burn"
};
const _0x5090ca = {
  on: "dash",
  do: [_0x1d8851]
};
const relic_cinder_boots = {
  id: "cinder_boots",
  name: "잿더미 장화",
  crest: ["flame", "swift"],
  rarity: 1,
  icon: "boot",
  col: "#e0562a",
  desc: "대시한 자리에 불길을 남긴다",
  effects: [_0x5090ca]
};
const _0x17ab2 = {
  revive: 1
};
const _0x2cc6c4 = {
  vsBurn: 0.15
};
const _0xa105f6 = {
  flags: _0x17ab2,
  stats: _0x2cc6c4
};
const relic_phoenix_feather = {
  id: "phoenix_feather",
  name: "불사조 깃털",
  crest: ["flame"],
  rarity: 3,
  icon: "feather",
  col: "#ff9a3a",
  desc: "런 중 1회 부활 (체력 40%). 화상 대상 피해 +15%",
  effects: [_0xa105f6]
};
const _0x4d40d1 = {
  k: "explode",
  r: 26,
  m: 0.7,
  el: "fire",
  st: "burn"
};
const _0x524684 = {
  on: "finisher",
  do: [_0x4d40d1]
};
const relic_magma_core = {
  id: "magma_core",
  name: "용암 핵",
  crest: ["flame", "fury"],
  rarity: 2,
  icon: "orb",
  col: "#ff5a1a",
  desc: "콤보 마지막 타격이 폭발 (공격력 70%, 화상)",
  effects: [_0x524684]
};
const _0x2a7bbe = {
  k: "status",
  s: "bleed"
};
const _0x2fc400 = {
  on: "hit",
  chance: 0.12,
  do: [_0x2a7bbe]
};
const relic_rusted_hook = {
  id: "rusted_hook",
  name: "녹슨 갈고리",
  crest: ["blood"],
  rarity: 1,
  icon: "claw",
  col: "#d8203a",
  desc: "공격 시 12% 확률로 출혈",
  effects: [_0x2fc400]
};
const _0x1d48c6 = {
  lifesteal: 0.02,
  critDmg: 0.15
};
const _0x693c91 = {
  stats: _0x1d48c6
};
const relic_vampire_tooth = {
  id: "vampire_tooth",
  name: "흡혈귀의 송곳니",
  crest: ["blood"],
  rarity: 2,
  icon: "tooth",
  col: "#b0102a",
  desc: "피해량의 2%만큼 회복. 치명타 피해 +15%",
  effects: [_0x693c91]
};
const _0x46bd8a = {
  k: "heal",
  v: 0.02
};
const _0x4e154e = {
  on: "kill",
  do: [_0x46bd8a]
};
const relic_crimson_chalice = {
  id: "crimson_chalice",
  name: "진홍 성배",
  crest: ["blood", "soul"],
  rarity: 2,
  icon: "chalice",
  col: "#e03050",
  desc: "처치 시 체력 2% 회복",
  effects: [_0x4e154e]
};
const _0x31b89f = {
  vsBleed: 0.15,
  atk: 0.04
};
const _0x464b8e = {
  stats: _0x31b89f
};
const relic_butcher_cleaver = {
  id: "butcher_cleaver",
  name: "도살자의 식칼",
  crest: ["blood", "fury"],
  rarity: 1,
  icon: "cleaver",
  col: "#c84040",
  desc: "출혈 대상에게 주는 피해 +15%. 공격력 +4%",
  effects: [_0x464b8e]
};
const _0xef0173 = {
  k: "nova",
  r: 50,
  m: 1.5,
  el: "blood",
  st: "bleed"
};
const _0x163042 = {
  k: "nova",
  r: 50,
  m: 0,
  st: "bleed"
};
const _0x4e4f08 = {
  k: "nova",
  r: 50,
  m: 0,
  st: "bleed"
};
const _0x1dda74 = {
  on: "hurt",
  do: [_0xef0173, _0x163042, _0x4e4f08]
};
const relic_thorn_crown = {
  id: "thorn_crown",
  name: "가시 면류관",
  crest: ["blood", "ward"],
  rarity: 3,
  icon: "crown",
  col: "#a02040",
  desc: "피격 시 주변에 가시 폭발 (공격력 150%, 출혈 3중첩)",
  effects: [_0x1dda74]
};
const _0x492706 = {
  k: "status",
  s: "shock"
};
const _0x3cc313 = {
  on: "hit",
  chance: 0.08,
  do: [_0x492706]
};
const relic_storm_rod = {
  id: "storm_rod",
  name: "피뢰침",
  crest: ["storm"],
  rarity: 1,
  icon: "bolt",
  col: "#7fd8ff",
  desc: "공격 시 8% 확률로 감전",
  effects: [_0x3cc313]
};
const _0x1a686d = {
  k: "chain",
  n: 4,
  m: 0.6
};
const _0x4cc30a = {
  on: "finisher",
  do: [_0x1a686d]
};
const relic_thunder_drum = {
  id: "thunder_drum",
  name: "천둥 북",
  crest: ["storm", "fury"],
  rarity: 2,
  icon: "drum",
  col: "#5ab8ff",
  desc: "콤보 마지막 타격 시 연쇄 번개 (4대상)",
  effects: [_0x4cc30a]
};
const _0x51cb71 = {
  k: "nova",
  r: 36,
  m: 0.3,
  el: "thunder",
  st: "shock"
};
const _0xbd8e7e = {
  on: "dash",
  do: [_0x51cb71]
};
const relic_static_cloak = {
  id: "static_cloak",
  name: "정전기 망토",
  crest: ["storm", "swift"],
  rarity: 1,
  icon: "cloak",
  col: "#9fe4ff",
  desc: "대시 시 주변 적 감전",
  effects: [_0xbd8e7e]
};
const _0x448c9f = {
  k: "strike",
  m: 2,
  el: "thunder"
};
const _0x637510 = {
  on: "interval",
  every: 5,
  do: [_0x448c9f]
};
const relic_sky_eye = {
  id: "sky_eye",
  name: "하늘의 눈",
  crest: ["storm", "soul"],
  rarity: 3,
  icon: "eye",
  col: "#bff0ff",
  desc: "5초마다 가장 가까운 적에게 낙뢰 (공격력 200%)",
  effects: [_0x637510]
};
const _0x2285d9 = {
  dashCdr: 0.15
};
const _0x839a4d = {
  stats: _0x2285d9
};
const _0x27a158 = {
  atk: 0.15
};
const definition_smoke = {
  k: "buff",
  id: "smoke",
  stats: _0x27a158,
  dur: 1.5
};
const _0x48ae71 = {
  on: "dash",
  do: [definition_smoke]
};
const relic_smoke_bomb = {
  id: "smoke_bomb",
  name: "연막탄 주머니",
  crest: ["shadow"],
  rarity: 1,
  icon: "pouch",
  col: "#7a6aa0",
  desc: "대시 쿨타임 -15%. 대시 후 1.5초간 공격력 +15%",
  effects: [_0x839a4d, _0x48ae71]
};
const _0x46a48a = {
  crit: 0.1
};
const _0x3c909f = {
  stats: _0x46a48a
};
const relic_night_mask = {
  id: "night_mask",
  name: "밤의 가면",
  crest: ["shadow"],
  rarity: 2,
  icon: "mask",
  col: "#6a4aaa",
  desc: "치명타 확률 +10%",
  effects: [_0x3c909f]
};
const _0x589cb1 = {
  k: "echo",
  m: 1.2
};
const _0x4120aa = {
  on: "swapHit",
  icd: 1,
  do: [_0x589cb1]
};
const relic_twin_shadow = {
  id: "twin_shadow",
  name: "쌍둥이 그림자",
  crest: ["shadow", "swift"],
  rarity: 3,
  icon: "twin",
  col: "#a080ff",
  desc: "교대 공격이 그림자로 한 번 더 반복된다 (공격력 120%)",
  effects: [_0x4120aa]
};
const _0x18204d = {
  critDmg: 0.3
};
const _0x2961a5 = {
  stats: _0x18204d
};
const relic_assassin_mark = {
  id: "assassin_mark",
  name: "암살자의 표식",
  crest: ["shadow", "blood"],
  rarity: 2,
  icon: "dagger",
  col: "#8a3aff",
  desc: "치명타 피해 +30%",
  effects: [_0x2961a5]
};
const _0x54ace7 = {
  spr: "blade",
  spd: 5,
  life: 60,
  w: 10,
  h: 6,
  home: 0.3,
  col: "#a080ff",
  el: "shadow",
  pierce: 2
};
const _0x32295b = {
  k: "proj",
  p: _0x54ace7,
  m: 1,
  n: 2
};
const _0x4f96fb = {
  on: "kill",
  chance: 0.25,
  do: [_0x32295b]
};
const relic_void_lantern = {
  id: "void_lantern",
  name: "공허의 등불",
  crest: ["shadow", "soul"],
  rarity: 1,
  icon: "lantern",
  col: "#7a5aff",
  desc: "처치 시 25% 확률로 그림자 칼날 발사",
  effects: [_0x4f96fb]
};
const _0x52a777 = {
  dmgTaken: -0.08
};
const _0x277f20 = {
  stats: _0x52a777
};
const relic_oak_buckler = {
  id: "oak_buckler",
  name: "떡갈나무 방패",
  crest: ["ward"],
  rarity: 1,
  icon: "shield",
  col: "#c8a060",
  desc: "받는 피해 -8%",
  effects: [_0x277f20]
};
const _0x3a1df8 = {
  k: "heal",
  v: 0.05
};
const _0x306ac9 = {
  on: "roomClear",
  do: [_0x3a1df8]
};
const relic_saint_relic = {
  id: "saint_relic",
  name: "성인의 유골",
  crest: ["ward", "soul"],
  rarity: 2,
  icon: "bone",
  col: "#fff0c0",
  desc: "방 클리어 시 체력 5% 회복",
  effects: [_0x306ac9]
};
const _0x35a5a7 = {
  maxHp: 25
};
const _0x327820 = {
  stats: _0x35a5a7
};
const relic_iron_will = {
  id: "iron_will",
  name: "강철 의지",
  crest: ["ward", "fury"],
  rarity: 1,
  icon: "fist",
  col: "#a0a0b0",
  desc: "최대 체력 +25",
  effects: [_0x327820]
};
const _0x527e32 = {
  k: "shield",
  v: 0.15
};
const _0x2c9f87 = {
  on: "interval",
  every: 12,
  do: [_0x527e32]
};
const _0x4ab746 = {
  allDmg: 0.15
};
const _0x188dd6 = {
  cond: "shielded",
  stats: _0x4ab746
};
const relic_aegis_shard = {
  id: "aegis_shard",
  name: "아이기스 파편",
  crest: ["ward"],
  rarity: 3,
  icon: "shard",
  col: "#ffe08a",
  desc: "12초마다 보호막(최대 체력 15%). 보호막 상태 피해 +15%",
  effects: [_0x2c9f87, _0x188dd6]
};
const _0x13396f = {
  k: "nova",
  r: 60,
  m: 0.5,
  el: "thunder",
  st: "shock"
};
const _0x101172 = {
  on: "hurt",
  do: [_0x13396f]
};
const relic_guardian_bell = {
  id: "guardian_bell",
  name: "수호자의 종",
  crest: ["ward", "storm"],
  rarity: 2,
  icon: "bell",
  col: "#ffd76a",
  desc: "피격 시 주변 적 감전 + 넉백",
  effects: [_0x101172]
};
const _0x232bb6 = {
  atk: 0.08
};
const _0x58f01f = {
  stats: _0x232bb6
};
const relic_berserk_horn = {
  id: "berserk_horn",
  name: "광전사의 뿔피리",
  crest: ["fury"],
  rarity: 1,
  icon: "horn",
  col: "#ff6040",
  desc: "공격력 +8%",
  effects: [_0x58f01f]
};
const _0x330185 = {
  aspd: 0.2,
  lifesteal: 0.02
};
const _0x391cd1 = {
  cond: "lowHp",
  stats: _0x330185
};
const relic_blood_rage = {
  id: "blood_rage",
  name: "피의 분노",
  crest: ["fury", "blood"],
  rarity: 2,
  icon: "drop",
  col: "#ff2040",
  desc: "체력 50% 이하 시 공격 속도 +20%, 흡혈 2%",
  effects: [_0x391cd1]
};
const _0x4d1283 = {
  finDmg: 0.25
};
const _0x2f9e18 = {
  stats: _0x4d1283
};
const relic_war_paint = {
  id: "war_paint",
  name: "전쟁 물감",
  crest: ["fury"],
  rarity: 1,
  icon: "paint",
  col: "#ff5050",
  desc: "콤보 마지막 타격 피해 +25%",
  effects: [_0x2f9e18]
};
const _0x30c9f9 = {
  hpPct: 0.15,
  atk: 0.06
};
const _0x1b52bc = {
  stats: _0x30c9f9
};
const relic_titan_belt = {
  id: "titan_belt",
  name: "거인의 허리띠",
  crest: ["fury", "ward"],
  rarity: 2,
  icon: "belt",
  col: "#b07040",
  desc: "최대 체력 +15%, 공격력 +6%",
  effects: [_0x1b52bc]
};
const _0xc035d9 = {
  eliteDmg: 0.25,
  bossDmg: 0.25
};
const _0x12487e = {
  stats: _0xc035d9
};
const relic_executioner = {
  id: "executioner",
  name: "처형인의 두건",
  crest: ["fury"],
  rarity: 3,
  icon: "hood",
  col: "#802020",
  desc: "정예·보스에게 주는 피해 +25%",
  effects: [_0x12487e]
};
const _0x2064bc = {
  mspd: 0.12
};
const _0x399625 = {
  stats: _0x2064bc
};
const relic_wind_boots = {
  id: "wind_boots",
  name: "바람의 장화",
  crest: ["swift"],
  rarity: 1,
  icon: "boot",
  col: "#6dffb0",
  desc: "이동 속도 +12%",
  effects: [_0x399625]
};
const _0xe7d12a = {
  extraJump: 1
};
const _0xc26f3 = {
  flags: _0xe7d12a
};
const relic_feather_cape = {
  id: "feather_cape",
  name: "깃털 망토",
  crest: ["swift"],
  rarity: 2,
  icon: "feather",
  col: "#a0ffd0",
  desc: "추가 점프 +1",
  effects: [_0xc26f3]
};
const _0xc90b3e = {
  swapDmg: 0.4
};
const _0x55c083 = {
  stats: _0xc90b3e
};
const _0x4211cc = {
  aspd: 0.2
};
const definition_relay = {
  k: "buff",
  id: "relay",
  stats: _0x4211cc,
  dur: 3
};
const _0x11cf07 = {
  on: "swap",
  do: [definition_relay]
};
const relic_relay_baton = {
  id: "relay_baton",
  name: "계주봉",
  crest: ["swift", "fury"],
  rarity: 2,
  icon: "baton",
  col: "#40e090",
  desc: "교대 공격 피해 +40%, 교대 시 3초간 공격 속도 +20%",
  effects: [_0x55c083, _0x11cf07]
};
const _0x11c7b3 = {
  aspd: 0.1
};
const _0x1e26de = {
  stats: _0x11c7b3
};
const relic_quicksilver = {
  id: "quicksilver",
  name: "수은 방울",
  crest: ["swift", "frost"],
  rarity: 1,
  icon: "potion",
  col: "#c0e0f0",
  desc: "공격 속도 +10%",
  effects: [_0x1e26de]
};
const _0x26e56f = {
  dashCharges: 1,
  airDash: 1
};
const _0x323709 = {
  flags: _0x26e56f
};
const relic_hermes_coin = {
  id: "hermes_coin",
  name: "전령의 동전",
  crest: ["swift"],
  rarity: 3,
  icon: "coin",
  col: "#80ffc0",
  desc: "대시 2회 충전, 공중 대시 +1",
  effects: [_0x323709]
};
const _0x563b03 = {
  cdr: 0.1
};
const _0x1f0f4e = {
  stats: _0x563b03
};
const relic_soul_jar = {
  id: "soul_jar",
  name: "영혼 항아리",
  crest: ["soul"],
  rarity: 1,
  icon: "jar",
  col: "#9ef0ff",
  desc: "스킬 쿨타임 -10%",
  effects: [_0x1f0f4e]
};
const _0x20a6e4 = {
  skillDmg: 0.2
};
const _0x569514 = {
  stats: _0x20a6e4
};
const relic_grimoire = {
  id: "grimoire",
  name: "금단의 마도서",
  crest: ["soul", "shadow"],
  rarity: 2,
  icon: "book",
  col: "#6ad0ff",
  desc: "스킬 피해 +20%",
  effects: [_0x569514]
};
const _0x598211 = {
  swapCdr: 0.2
};
const _0x2cd0e9 = {
  stats: _0x598211
};
const relic_spirit_chain = {
  id: "spirit_chain",
  name: "영혼 사슬",
  crest: ["soul", "swift"],
  rarity: 1,
  icon: "chain",
  col: "#a0e0ff",
  desc: "교대 쿨타임 -20%",
  effects: [_0x2cd0e9]
};
const _0x89ad6 = {
  k: "swapCd",
  v: 1
};
const _0x48d979 = {
  k: "cdr",
  v: 0.5
};
const _0x53dff1 = {
  on: "kill",
  do: [_0x89ad6, _0x48d979]
};
const relic_reaper_hourglass = {
  id: "reaper_hourglass",
  name: "사신의 모래시계",
  crest: ["soul"],
  rarity: 3,
  icon: "hourglass",
  col: "#c0f8ff",
  desc: "처치 시 교대 쿨타임 1초 감소, 스킬 쿨 0.5초 감소",
  effects: [_0x53dff1]
};
const _0x38a5ff = {
  k: "status",
  s: "poison"
};
const _0x405b57 = {
  on: "hit",
  chance: 0.15,
  do: [_0x38a5ff]
};
const relic_toad_venom = {
  id: "toad_venom",
  name: "두꺼비 독샘",
  crest: ["venom"],
  rarity: 1,
  icon: "flask",
  col: "#8bdc3a",
  desc: "공격 시 15% 확률로 독",
  effects: [_0x405b57]
};
const _0x254996 = {
  vsPoison: 0.2,
  dmgTaken: -0.05
};
const _0x276fe2 = {
  stats: _0x254996
};
const relic_plague_mask = {
  id: "plague_mask",
  name: "역병 의사 가면",
  crest: ["venom", "ward"],
  rarity: 2,
  icon: "mask",
  col: "#6aa030",
  desc: "독 대상에게 주는 피해 +20%, 받는 피해 -5%",
  effects: [_0x276fe2]
};
const _0x27f0fe = {
  k: "nova",
  r: 40,
  m: 0.4,
  el: "poison",
  st: "poison"
};
const _0x2ef555 = {
  on: "skill",
  do: [_0x27f0fe]
};
const relic_spore_sac = {
  id: "spore_sac",
  name: "포자 주머니",
  crest: ["venom", "soul"],
  rarity: 1,
  icon: "pouch",
  col: "#a0d050",
  desc: "스킬 사용 시 주변에 독 폭발",
  effects: [_0x2ef555]
};
const _0x168177 = {
  dotDmg: 0.4
};
const _0xc8405b = {
  poisonMax: 3
};
const _0x9a9bc2 = {
  stats: _0x168177,
  flags: _0xc8405b
};
const relic_hydra_fang = {
  id: "hydra_fang",
  name: "히드라 독니",
  crest: ["venom", "blood"],
  rarity: 3,
  icon: "tooth",
  col: "#60c020",
  desc: "지속 피해 +40%. 독·출혈 최대 중첩 +3",
  effects: [_0x9a9bc2]
};
const _0x173ebb = {
  k: "status",
  s: "chill"
};
const _0x593ed8 = {
  on: "hit",
  chance: 0.1,
  do: [_0x173ebb]
};
const relic_frost_ring = {
  id: "frost_ring",
  name: "서리 반지",
  crest: ["frost"],
  rarity: 1,
  icon: "ring",
  col: "#a8e4ff",
  desc: "공격 시 10% 확률로 냉기",
  effects: [_0x593ed8]
};
const _0x2c10d9 = {
  k: "nova",
  r: 55,
  m: 0.3,
  el: "frost",
  st: "chill"
};
const _0x22c5b3 = {
  k: "nova",
  r: 55,
  m: 0,
  st: "chill"
};
const _0x4f8a59 = {
  on: "hurt",
  do: [_0x2c10d9, _0x22c5b3]
};
const relic_glacier_heart = {
  id: "glacier_heart",
  name: "빙하의 심장",
  crest: ["frost", "ward"],
  rarity: 2,
  icon: "gem",
  col: "#80d0ff",
  desc: "피격 시 주변 적에게 냉기 2중첩",
  effects: [_0x4f8a59]
};
const _0x4cbc3e = {
  k: "status",
  s: "chill"
};
const _0x341db7 = {
  on: "skillHit",
  do: [_0x4cbc3e]
};
const _0x29f73d = {
  vsFrozen: 0.15
};
const _0x25559b = {
  stats: _0x29f73d
};
const relic_winter_bell = {
  id: "winter_bell",
  name: "한겨울 방울",
  crest: ["frost", "soul"],
  rarity: 2,
  icon: "bell",
  col: "#c0f0ff",
  desc: "스킬 적중 시 냉기, 빙결 대상 피해 +15%",
  effects: [_0x341db7, _0x25559b]
};
const _0x256069 = {
  k: "explode",
  r: 50,
  m: 1.5,
  el: "frost",
  st: "chill"
};
const _0x173ba4 = {
  on: "kill",
  need: "freeze",
  do: [_0x256069]
};
const relic_eternal_ice = {
  id: "eternal_ice",
  name: "영원의 얼음",
  crest: ["frost"],
  rarity: 3,
  icon: "snow",
  col: "#e0f8ff",
  desc: "빙결된 적을 처치하면 얼음 파편 폭발 (공격력 150%)",
  effects: [_0x173ba4]
};
const _0x22fd96 = {
  crit: 0.06,
  critDmg: 0.2
};
const _0x15b9ed = {
  stats: _0x22fd96
};
const relic_gambler_dice = {
  id: "gambler_dice",
  name: "도박사의 주사위",
  crest: ["fury", "shadow"],
  rarity: 2,
  icon: "dice",
  col: "#f0f0f0",
  desc: "치명타 확률 +6%, 치명타 피해 +20%",
  effects: [_0x15b9ed]
};
const _0x15739b = {
  gold: 0.35
};
const _0x3b0611 = {
  stats: _0x15739b
};
const relic_golden_idol = {
  id: "golden_idol",
  name: "황금 우상",
  crest: ["ward", "swift"],
  rarity: 1,
  icon: "idol",
  col: "#ffd040",
  desc: "금화 획득 +35%",
  effects: [_0x3b0611]
};
const _0x4906b3 = {
  allDmg: 0.12
};
const _0xcb6516 = {
  stats: _0x4906b3
};
const relic_kings_seal = {
  id: "kings_seal",
  name: "왕의 인장",
  crest: ["soul", "fury"],
  rarity: 3,
  icon: "ring",
  col: "#ffe060",
  desc: "모든 피해 +12%",
  effects: [_0xcb6516]
};
const _0x6ebd2b = {
  vsBurn: 0.12
};
const _0x162db3 = {
  stats: _0x6ebd2b
};
const relic_soot_charm = {
  id: "soot_charm",
  name: "그을음 부적",
  crest: ["flame"],
  rarity: 1,
  icon: "paint",
  col: "#d0603a",
  desc: "화상 대상 피해 +12%",
  effects: [_0x162db3]
};
const _0x5e5de9 = {
  k: "status",
  s: "burn"
};
const _0x1b2fa3 = {
  on: "finisher",
  do: [_0x5e5de9]
};
const relic_torch_stub = {
  id: "torch_stub",
  name: "꺼져 가는 횃불",
  crest: ["flame", "fury"],
  rarity: 1,
  icon: "candle",
  col: "#ff9050",
  desc: "콤보 마지막 타격 시 화상",
  effects: [_0x1b2fa3]
};
const _0x3a2f7a = {
  vsBleed: 0.12
};
const _0x2f306c = {
  stats: _0x3a2f7a
};
const relic_bloody_bandage = {
  id: "bloody_bandage",
  name: "피 묻은 붕대",
  crest: ["blood"],
  rarity: 1,
  icon: "belt",
  col: "#c03040",
  desc: "출혈 대상 피해 +12%",
  effects: [_0x2f306c]
};
const _0x435725 = {
  lifesteal: 0.015
};
const _0xa04894 = {
  stats: _0x435725
};
const relic_leech_tooth = {
  id: "leech_tooth",
  name: "거머리 이빨",
  crest: ["blood", "soul"],
  rarity: 1,
  icon: "tooth",
  col: "#a02040",
  desc: "피해량의 1.5%만큼 체력 회복",
  effects: [_0xa04894]
};
const _0x1ab543 = {
  k: "status",
  s: "shock"
};
const _0xd34f44 = {
  on: "hit",
  chance: 0.1,
  do: [_0x1ab543]
};
const relic_static_coil = {
  id: "static_coil",
  name: "정전기 코일",
  crest: ["storm"],
  rarity: 1,
  icon: "bolt",
  col: "#80d0ff",
  desc: "공격 시 10% 확률로 감전",
  effects: [_0xd34f44]
};
const _0x56ad68 = {
  vsShock: 0.12
};
const _0x56ead7 = {
  stats: _0x56ad68
};
const relic_rain_drum = {
  id: "rain_drum",
  name: "비구름 북",
  crest: ["storm", "fury"],
  rarity: 1,
  icon: "drum",
  col: "#70a0e0",
  desc: "감전 대상 피해 +12%",
  effects: [_0x56ead7]
};
const _0x3e880a = {
  dashDmg: 0.2,
  dashCdr: 0.08
};
const _0x4ffd7b = {
  stats: _0x3e880a
};
const relic_dusk_hood = {
  id: "dusk_hood",
  name: "황혼 두건",
  crest: ["shadow"],
  rarity: 1,
  icon: "hood",
  col: "#8060c0",
  desc: "대시 피해 +20%, 대시 쿨타임 -8%",
  effects: [_0x4ffd7b]
};
const _0x5b5fec = {
  crit: 0.05
};
const _0x562ec2 = {
  stats: _0x5b5fec
};
const relic_cracked_mask = {
  id: "cracked_mask",
  name: "금 간 가면",
  crest: ["shadow", "fury"],
  rarity: 1,
  icon: "mask",
  col: "#a090c0",
  desc: "치명타 확률 +5%",
  effects: [_0x562ec2]
};
const _0x55b7ec = {
  dmgTaken: -0.06
};
const _0x1277e0 = {
  stats: _0x55b7ec
};
const relic_iron_buckle = {
  id: "iron_buckle",
  name: "무쇠 버클",
  crest: ["ward"],
  rarity: 1,
  icon: "belt",
  col: "#a0a8b8",
  desc: "받는 피해 -6%",
  effects: [_0x1277e0]
};
const _0x5cf6c4 = {
  k: "shield",
  v: 0.06
};
const _0x5f3157 = {
  on: "roomStart",
  do: [_0x5cf6c4]
};
const relic_oak_shield = {
  id: "oak_shield",
  name: "참나무 방패",
  crest: ["ward"],
  rarity: 1,
  icon: "shield",
  col: "#a08050",
  desc: "방 입장 시 보호막 (최대 체력 6%)",
  effects: [_0x5f3157]
};
const _0x4fb5b7 = {
  finDmg: 0.2
};
const _0x5f420e = {
  stats: _0x4fb5b7
};
const relic_rage_horn = {
  id: "rage_horn",
  name: "분노의 뿔피리",
  crest: ["fury"],
  rarity: 1,
  icon: "horn",
  col: "#ff6040",
  desc: "콤보 마지막 타 피해 +20%",
  effects: [_0x5f420e]
};
const _0x2d4dfd = {
  aspd: 0.06
};
const _0x18dbf0 = {
  stats: _0x2d4dfd
};
const relic_brawler_wrap = {
  id: "brawler_wrap",
  name: "싸움꾼의 손싸개",
  crest: ["fury", "swift"],
  rarity: 1,
  icon: "fist",
  col: "#e08060",
  desc: "공격 속도 +6%",
  effects: [_0x18dbf0]
};
const _0x2da4ab = {
  mspd: 0.08,
  airDmg: 0.1
};
const _0x44ad01 = {
  stats: _0x2da4ab
};
const relic_wind_feather = {
  id: "wind_feather",
  name: "바람 깃털",
  crest: ["swift"],
  rarity: 1,
  icon: "feather",
  col: "#80f0c0",
  desc: "이동 속도 +8%, 공중 공격 피해 +10%",
  effects: [_0x44ad01]
};
const _0x2d3331 = {
  swapDmg: 0.2
};
const _0x27c0b4 = {
  stats: _0x2d3331
};
const relic_relay_ribbon = {
  id: "relay_ribbon",
  name: "이어달리기 띠",
  crest: ["swift", "soul"],
  rarity: 1,
  icon: "belt",
  col: "#60e0a0",
  desc: "교대 공격 피해 +20%",
  effects: [_0x27c0b4]
};
const _0x55a4a0 = {
  k: "heal",
  v: 0.01
};
const _0x28846e = {
  on: "kill",
  do: [_0x55a4a0]
};
const relic_wisp_lantern = {
  id: "wisp_lantern",
  name: "도깨비불 등롱",
  crest: ["soul"],
  rarity: 1,
  icon: "lantern",
  col: "#9ef0ff",
  desc: "처치 시 체력 1% 회복",
  effects: [_0x28846e]
};
const _0x4131a0 = {
  cdr: 0.06
};
const _0x50a6d4 = {
  stats: _0x4131a0
};
const relic_prayer_book = {
  id: "prayer_book",
  name: "낡은 기도서",
  crest: ["soul"],
  rarity: 1,
  icon: "book",
  col: "#d8d0b0",
  desc: "스킬 쿨타임 -6%",
  effects: [_0x50a6d4]
};
const _0x2943b0 = {
  k: "status",
  s: "poison"
};
const _0x41d01d = {
  on: "hit",
  chance: 0.12,
  do: [_0x2943b0]
};
const relic_toad_jar = {
  id: "toad_jar",
  name: "두꺼비 독 단지",
  crest: ["venom"],
  rarity: 1,
  icon: "jar",
  col: "#80c040",
  desc: "공격 시 12% 확률로 독",
  effects: [_0x41d01d]
};
const _0x4f206a = {
  vsPoison: 0.12
};
const _0x49ae26 = {
  stats: _0x4f206a
};
const relic_moss_vial = {
  id: "moss_vial",
  name: "이끼 약병",
  crest: ["venom", "ward"],
  rarity: 1,
  icon: "flask",
  col: "#60a050",
  desc: "독 대상 피해 +12%",
  effects: [_0x49ae26]
};
const _0x10fdc6 = {
  vsFrozen: 0.12
};
const _0x489c5d = {
  stats: _0x10fdc6
};
const relic_rime_shard = {
  id: "rime_shard",
  name: "서리 조각",
  crest: ["frost"],
  rarity: 1,
  icon: "shard",
  col: "#b0e8ff",
  desc: "빙결 대상 피해 +12%",
  effects: [_0x489c5d]
};
const _0x31d402 = {
  k: "nova",
  r: 24,
  m: 0.2,
  el: "frost",
  st: "chill"
};
const _0x13904c = {
  on: "dash",
  do: [_0x31d402]
};
const relic_snow_boot = {
  id: "snow_boot",
  name: "눈길 장화",
  crest: ["frost", "swift"],
  rarity: 1,
  icon: "boot",
  col: "#d0f0ff",
  desc: "대시 시 주변에 냉기",
  effects: [_0x13904c]
};
const _0x209823 = {
  gold: 0.2,
  crit: 0.02
};
const _0x115c2a = {
  stats: _0x209823
};
const relic_lucky_coin = {
  id: "lucky_coin",
  name: "행운의 동전",
  crest: ["fury", "ward"],
  rarity: 1,
  icon: "coin",
  col: "#ffd060",
  desc: "금화 획득 +20%, 치명타 확률 +2%",
  effects: [_0x115c2a]
};
const _0x2292f2 = {
  eliteDmg: 0.15
};
const _0x21d458 = {
  stats: _0x2292f2
};
const relic_hunter_eye = {
  id: "hunter_eye",
  name: "사냥꾼의 눈",
  crest: ["fury"],
  rarity: 1,
  icon: "eye",
  col: "#ffc080",
  desc: "정예 적 피해 +15%",
  effects: [_0x21d458]
};
const _0xcd9b88 = {
  hpPct: 0.08
};
const _0x124b6d = {
  stats: _0xcd9b88
};
const relic_giant_bone = {
  id: "giant_bone",
  name: "거인의 뼈",
  crest: ["ward", "fury"],
  rarity: 1,
  icon: "bone",
  col: "#e0d8c0",
  desc: "최대 체력 +8%",
  effects: [_0x124b6d]
};
const _0x10aca2 = {
  k: "heal",
  v: 0.04
};
const _0x5f3e91 = {
  on: "roomClear",
  do: [_0x10aca2]
};
const relic_red_potion = {
  id: "red_potion",
  name: "붉은 물약",
  crest: ["blood", "ward"],
  rarity: 1,
  icon: "potion",
  col: "#ff5060",
  desc: "방을 정리하면 체력 4% 회복",
  effects: [_0x5f3e91]
};
const _0x1aa007 = {
  bossDmg: 0.1
};
const _0x2737a8 = {
  stats: _0x1aa007
};
const relic_slayer_chain = {
  id: "slayer_chain",
  name: "처형인의 사슬",
  crest: ["fury", "blood"],
  rarity: 1,
  icon: "chain",
  col: "#c0a0a0",
  desc: "보스 피해 +10%",
  effects: [_0x2737a8]
};
const _0x10b799 = {
  k: "chain",
  n: 3,
  m: 0.6
};
const _0x1829fb = {
  on: "skillHit",
  chance: 0.3,
  icd: 0.3,
  do: [_0x10b799]
};
const relic_storm_crown = {
  id: "storm_crown",
  name: "뇌운의 관",
  crest: ["storm", "soul"],
  rarity: 2,
  icon: "crown",
  col: "#a0d8ff",
  desc: "스킬 적중 시 30% 확률로 연쇄 번개 (공격력 60%)",
  effects: [_0x1829fb]
};
const _0x76fb8a = {
  crit: 0.15
};
const definition_twinDag = {
  k: "buff",
  id: "twinDag",
  stats: _0x76fb8a,
  dur: 3
};
const _0x5d277d = {
  on: "dash",
  do: [definition_twinDag]
};
const relic_twin_daggers = {
  id: "twin_daggers",
  name: "쌍둥이 단검",
  crest: ["shadow", "swift"],
  rarity: 2,
  icon: "twin",
  col: "#c0a0ff",
  desc: "대시 후 3초간 치명타 확률 +15%",
  effects: [_0x5d277d]
};
const _0x2878ea = {
  dotDmg: 0.25
};
const _0x3b4e8f = {
  stats: _0x2878ea
};
const _0x5c1e47 = {
  k: "status",
  s: "poison"
};
const _0x36f796 = {
  on: "hit",
  chance: 0.1,
  do: [_0x5c1e47]
};
const relic_plague_chalice = {
  id: "plague_chalice",
  name: "역병의 성배",
  crest: ["venom", "soul"],
  rarity: 2,
  icon: "chalice",
  col: "#a0e060",
  desc: "상태이상 지속 피해 +25%, 공격 시 10% 확률로 독",
  effects: [_0x3b4e8f, _0x36f796]
};
const _0x242988 = {
  cdr: 0.15,
  swapCdr: 0.15
};
const _0xbecb90 = {
  stats: _0x242988
};
const _0x582120 = {
  k: "cdr",
  v: 0.5
};
const _0x15d2bd = {
  on: "skill",
  do: [_0x582120]
};
const relic_heaven_hourglass = {
  id: "heaven_hourglass",
  name: "하늘의 모래시계",
  crest: ["swift", "soul"],
  rarity: 3,
  icon: "hourglass",
  col: "#ffe8a0",
  desc: "스킬 쿨타임 -15%, 교대 쿨타임 -15%, 스킬 사용 시 쿨타임 0.5초 추가 감소",
  effects: [_0xbecb90, _0x15d2bd]
};
const _0x5ec98e = {
  hpPct: 0.2,
  atk: 0.12
};
const _0x403d3b = {
  stats: _0x5ec98e
};
const _0x20a857 = {
  k: "nova",
  r: 60,
  m: 1.2,
  el: "fire",
  st: "burn"
};
const _0x26305f = {
  on: "hurt",
  do: [_0x20a857]
};
const relic_dragon_heart = {
  id: "dragon_heart",
  name: "용의 심장",
  crest: ["flame", "ward"],
  rarity: 3,
  icon: "heart",
  col: "#ff4030",
  desc: "최대 체력 +20%, 공격력 +12%, 피격 시 주변 화염 폭발 (공격력 120%)",
  effects: [_0x403d3b, _0x26305f]
};
const _0x47333b = {
  atk: 0.4,
  dmgTaken: 0.3
};
const _0x438ccb = {
  stats: _0x47333b
};
const relic_curse_contract = {
  id: "curse_contract",
  name: "저주 · 피의 계약서",
  crest: ["blood", "fury"],
  rarity: 2,
  icon: "book",
  col: "#b02040",
  desc: "공격력 +40% · 대가: 받는 피해 +30%",
  effects: [_0x438ccb]
};
const _0x5eb577 = {
  allDmg: 0.3,
  hpPct: -0.25
};
const _0x21cab6 = {
  stats: _0x5eb577
};
const relic_curse_crown = {
  id: "curse_crown",
  name: "저주 · 깨진 왕관",
  crest: ["soul", "fury"],
  rarity: 2,
  icon: "crown",
  col: "#8a40a0",
  desc: "모든 피해 +30% · 대가: 최대 체력 -25%",
  effects: [_0x21cab6]
};
const _0x32794c = {
  crit: 0.25,
  critDmg: 0.5,
  mspd: -0.15
};
const _0x209d71 = {
  stats: _0x32794c
};
const relic_curse_dagger = {
  id: "curse_dagger",
  name: "저주 · 굶주린 단검",
  crest: ["shadow", "blood"],
  rarity: 2,
  icon: "dagger",
  col: "#702040",
  desc: "치명타 확률 +25%, 치명타 피해 +50% · 대가: 이동 속도 -15%",
  effects: [_0x209d71]
};
const _0x172f23 = {
  aspd: 0.35,
  dmgTaken: 0.2
};
const _0x19b37d = {
  stats: _0x172f23
};
const relic_curse_mask = {
  id: "curse_mask",
  name: "저주 · 광기의 가면",
  crest: ["fury", "swift"],
  rarity: 2,
  icon: "mask",
  col: "#c03060",
  desc: "공격 속도 +35% · 대가: 받는 피해 +20%",
  effects: [_0x19b37d]
};
const _0xaa0cc7 = {
  cdr: 0.3,
  skillDmg: 0.2,
  hpPct: -0.2
};
const _0x14fdae = {
  stats: _0xaa0cc7
};
const relic_curse_ring = {
  id: "curse_ring",
  name: "저주 · 사자의 반지",
  crest: ["soul", "shadow"],
  rarity: 2,
  icon: "ring",
  col: "#6040a0",
  desc: "스킬 쿨타임 -30%, 스킬 피해 +20% · 대가: 최대 체력 -20%",
  effects: [_0x14fdae]
};
const _0x4f2111 = {
  gold: 1,
  atk: 0.1,
  dmgTaken: 0.15
};
const _0x38b82c = {
  stats: _0x4f2111
};
const relic_curse_coin = {
  id: "curse_coin",
  name: "저주 · 검은 금화",
  crest: ["ward", "shadow"],
  rarity: 2,
  icon: "coin",
  col: "#504060",
  desc: "금화 획득 +100%, 공격력 +10% · 대가: 받는 피해 +15%",
  effects: [_0x38b82c]
};
const _0x5dba1d = {
  allDmg: 0.25,
  mspd: 0.1,
  dmgTaken: 0.25
};
const _0x32cb61 = {
  stats: _0x5dba1d
};
const _0x5a0b6e = {
  k: "explode",
  r: 44,
  m: 2,
  el: "shadow"
};
const _0x32bbcd = {
  on: "kill",
  do: [_0x5a0b6e]
};
const relic_curse_heart = {
  id: "curse_heart",
  name: "저주 · 공허의 심장",
  crest: ["soul", "storm"],
  rarity: 3,
  icon: "heart",
  col: "#40205a",
  desc: "모든 피해 +25%, 이동 속도 +10%, 처치 시 폭발 (공격력 200%) · 대가: 받는 피해 +25%",
  effects: [_0x32cb61, _0x32bbcd]
};
const _0x5c7c50 = {
  bossDmg: 0.6,
  eliteDmg: 0.4,
  dmgTaken: 0.4
};
const _0xc00d52 = {
  stats: _0x5c7c50
};
const relic_curse_oath = {
  id: "curse_oath",
  name: "저주 · 끝의 서약",
  crest: ["fury", "soul"],
  rarity: 3,
  icon: "chain",
  col: "#901830",
  desc: "보스 피해 +60%, 정예 피해 +40% · 대가: 받는 피해 +40%",
  effects: [_0xc00d52]
};
const _0x4c4124 = {
  vsBurn: 0.08,
  atk: 0.03
};
const _0x22bce0 = {
  stats: _0x4c4124
};
const relic_ash_ribbon = {
  id: "ash_ribbon",
  name: "잿빛 리본",
  crest: ["flame"],
  rarity: 1,
  icon: "belt",
  col: "#c07050",
  desc: "화상 대상 피해 +8%, 공격력 +3%",
  effects: [_0x22bce0]
};
const _0x31c15e = {
  k: "status",
  s: "burn"
};
const _0x36cdbd = {
  on: "crit",
  do: [_0x31c15e]
};
const relic_spark_flint = {
  id: "spark_flint",
  name: "부싯돌",
  crest: ["flame", "fury"],
  rarity: 1,
  icon: "shard",
  col: "#ff9050",
  desc: "치명타 시 화상",
  effects: [_0x36cdbd]
};
const _0x591b71 = {
  k: "heal",
  v: 0.008
};
const _0x544e4f = {
  on: "kill",
  do: [_0x591b71]
};
const relic_scab_charm = {
  id: "scab_charm",
  name: "딱지 부적",
  crest: ["blood"],
  rarity: 1,
  icon: "drop",
  col: "#b03040",
  desc: "처치 시 체력 0.8% 회복",
  effects: [_0x544e4f]
};
const _0x418938 = {
  k: "status",
  s: "bleed"
};
const _0xfafbc9 = {
  on: "finisher",
  do: [_0x418938]
};
const relic_thorn_ring = {
  id: "thorn_ring",
  name: "가시 반지",
  crest: ["blood", "fury"],
  rarity: 1,
  icon: "ring",
  col: "#c02040",
  desc: "콤보 마지막 타격 시 출혈",
  effects: [_0xfafbc9]
};
const _0x288bb6 = {
  k: "chain",
  n: 2,
  m: 0.4
};
const _0x3653f4 = {
  on: "hit",
  chance: 0.06,
  icd: 0.3,
  do: [_0x288bb6]
};
const relic_copper_wire = {
  id: "copper_wire",
  name: "구리 철사",
  crest: ["storm"],
  rarity: 1,
  icon: "chain",
  col: "#d08040",
  desc: "공격 시 6% 확률로 연쇄 번개 (공격력 40%)",
  effects: [_0x3653f4]
};
const _0x117831 = {
  k: "status",
  s: "shock"
};
const _0x42fd8c = {
  on: "skillHit",
  do: [_0x117831]
};
const relic_thunder_seed = {
  id: "thunder_seed",
  name: "천둥 씨앗",
  crest: ["storm", "soul"],
  rarity: 1,
  icon: "gem",
  col: "#90c8ff",
  desc: "스킬 적중 시 감전",
  effects: [_0x42fd8c]
};
const _0x1bd6e9 = {
  atk: 0.12
};
const definition_shadeCloth = {
  k: "buff",
  id: "shadeCloth",
  stats: _0x1bd6e9,
  dur: 2
};
const _0x107186 = {
  on: "dash",
  do: [definition_shadeCloth]
};
const relic_shade_cloth = {
  id: "shade_cloth",
  name: "그늘 천",
  crest: ["shadow"],
  rarity: 1,
  icon: "cloak",
  col: "#5040a0",
  desc: "대시 후 2초간 공격력 +12%",
  effects: [_0x107186]
};
const _0x540961 = {
  critDmg: 0.12
};
const _0x1f401e = {
  stats: _0x540961
};
const relic_night_eye = {
  id: "night_eye",
  name: "밤눈",
  crest: ["shadow", "fury"],
  rarity: 1,
  icon: "eye",
  col: "#8070d0",
  desc: "치명타 피해 +12%",
  effects: [_0x1f401e]
};
const _0x41b6bf = {
  hpPct: 0.05,
  dmgTaken: -0.03
};
const _0x403fd4 = {
  stats: _0x41b6bf
};
const relic_wooden_shield = {
  id: "wooden_shield",
  name: "나무 방패",
  crest: ["ward"],
  rarity: 1,
  icon: "shield",
  col: "#a08060",
  desc: "최대 체력 +5%, 받는 피해 -3%",
  effects: [_0x403fd4]
};
const _0x360c63 = {
  k: "shield",
  v: 0.04
};
const _0x28c53e = {
  on: "hurt",
  icd: 5,
  do: [_0x360c63]
};
const relic_guard_bell = {
  id: "guard_bell",
  name: "파수꾼의 종",
  crest: ["ward", "soul"],
  rarity: 1,
  icon: "bell",
  col: "#d0c090",
  desc: "피격 시 최대 체력 4% 보호막 (5초에 한 번)",
  effects: [_0x28c53e]
};
const _0x91f38 = {
  atk: 0.06
};
const _0x1a1fae = {
  stats: _0x91f38
};
const relic_battle_paint = {
  id: "battle_paint",
  name: "전투 물감",
  crest: ["fury"],
  rarity: 1,
  icon: "paint",
  col: "#e05050",
  desc: "공격력 +6%",
  effects: [_0x1a1fae]
};
const _0x8b429e = {
  eliteDmg: 0.12,
  bossDmg: 0.05
};
const _0x31188a = {
  stats: _0x8b429e
};
const relic_broken_tooth = {
  id: "broken_tooth",
  name: "부러진 송곳니",
  crest: ["fury", "blood"],
  rarity: 1,
  icon: "tooth",
  col: "#e0d0c0",
  desc: "정예 피해 +12%, 보스 피해 +5%",
  effects: [_0x31188a]
};
const _0x2d711f = {
  mspd: 0.06,
  dashCdr: 0.05
};
const _0x3c2aea = {
  stats: _0x2d711f
};
const relic_sandal = {
  id: "sandal",
  name: "낡은 샌들",
  crest: ["swift"],
  rarity: 1,
  icon: "boot",
  col: "#c0a070",
  desc: "이동 속도 +6%, 대시 재충전 -5%",
  effects: [_0x3c2aea]
};
const _0x3d2c2b = {
  aspd: 0.05,
  airDmg: 0.08
};
const _0x4ec334 = {
  stats: _0x3d2c2b
};
const relic_hummingbird = {
  id: "hummingbird",
  name: "벌새 깃",
  crest: ["swift", "fury"],
  rarity: 1,
  icon: "feather",
  col: "#70e0b0",
  desc: "공격 속도 +5%, 공중 공격 피해 +8%",
  effects: [_0x4ec334]
};
const _0x49ab06 = {
  swapCdr: 0.08
};
const _0x36bd70 = {
  stats: _0x49ab06
};
const relic_spirit_urn = {
  id: "spirit_urn",
  name: "혼백 단지",
  crest: ["soul"],
  rarity: 1,
  icon: "jar",
  col: "#9ef0ff",
  desc: "교대 쿨타임 -8%",
  effects: [_0x36bd70]
};
const _0x4bca55 = {
  k: "heal",
  v: 0.03
};
const _0x39c176 = {
  on: "roomClear",
  do: [_0x4bca55]
};
const relic_incense = {
  id: "incense",
  name: "향로",
  crest: ["soul", "ward"],
  rarity: 1,
  icon: "lantern",
  col: "#e0c0ff",
  desc: "방을 정리하면 체력 3% 회복",
  effects: [_0x39c176]
};
const _0x19e256 = {
  k: "status",
  s: "poison"
};
const _0x48e8eb = {
  on: "crit",
  do: [_0x19e256]
};
const relic_spider_fang = {
  id: "spider_fang",
  name: "거미 송곳니",
  crest: ["venom"],
  rarity: 1,
  icon: "tooth",
  col: "#80b040",
  desc: "치명타 시 독",
  effects: [_0x48e8eb]
};
const _0x3cd30c = {
  dotDmg: 0.1
};
const _0x3fd029 = {
  stats: _0x3cd30c
};
const relic_rot_mushroom = {
  id: "rot_mushroom",
  name: "썩은 버섯",
  crest: ["venom", "soul"],
  rarity: 1,
  icon: "potion",
  col: "#90a050",
  desc: "상태이상 지속 피해 +10%",
  effects: [_0x3fd029]
};
const _0x2e075b = {
  k: "status",
  s: "chill"
};
const _0xe29809 = {
  on: "finisher",
  do: [_0x2e075b]
};
const relic_ice_pick = {
  id: "ice_pick",
  name: "얼음 송곳",
  crest: ["frost"],
  rarity: 1,
  icon: "dagger",
  col: "#a0e0ff",
  desc: "콤보 마지막 타격 시 냉기",
  effects: [_0xe29809]
};
const _0x3a54e1 = {
  k: "nova",
  r: 40,
  m: 0,
  st: "chill"
};
const _0x35baeb = {
  on: "hurt",
  do: [_0x3a54e1]
};
const relic_snow_globe = {
  id: "snow_globe",
  name: "눈 구슬",
  crest: ["frost", "ward"],
  rarity: 1,
  icon: "orb",
  col: "#d0f0ff",
  desc: "피격 시 주변 적에게 냉기",
  effects: [_0x35baeb]
};
const _0x1c7089 = {
  finDmg: 0.12
};
const _0x5c0ffb = {
  stats: _0x1c7089
};
const relic_tin_soldier = {
  id: "tin_soldier",
  name: "양철 병정",
  crest: ["ward", "fury"],
  rarity: 1,
  icon: "idol",
  col: "#a0a8b0",
  desc: "콤보 마지막 타 피해 +12%",
  effects: [_0x5c0ffb]
};
const _0x3ec40e = {
  dashDmg: 0.15
};
const _0x45afaa = {
  stats: _0x3ec40e
};
const relic_fox_tail = {
  id: "fox_tail",
  name: "여우 꼬리",
  crest: ["swift", "shadow"],
  rarity: 1,
  icon: "feather",
  col: "#ff9040",
  desc: "대시 피해 +15%",
  effects: [_0x45afaa]
};
const _0x4282e4 = {
  cdr: 0.04
};
const _0x3219b8 = {
  stats: _0x4282e4
};
const relic_old_compass = {
  id: "old_compass",
  name: "낡은 나침반",
  crest: ["soul", "swift"],
  rarity: 1,
  icon: "coin",
  col: "#c0b080",
  desc: "스킬 쿨타임 -4%",
  effects: [_0x3219b8]
};
const _0x5f2f94 = {
  gold: 0.25
};
const _0x23796c = {
  stats: _0x5f2f94
};
const relic_beggar_cup = {
  id: "beggar_cup",
  name: "거지의 동냥 그릇",
  crest: ["ward"],
  rarity: 1,
  icon: "chalice",
  col: "#a09070",
  desc: "금화 획득 +25%",
  effects: [_0x23796c]
};
const _0x293784 = {
  crit: 0.03
};
const _0x224331 = {
  stats: _0x293784
};
const relic_lucky_clover = {
  id: "lucky_clover",
  name: "네잎클로버",
  crest: ["fury", "swift"],
  rarity: 1,
  icon: "gem",
  col: "#60d060",
  desc: "치명타 확률 +3%",
  effects: [_0x224331]
};
const _0x344bd7 = {
  skillDmg: 0.07
};
const _0x267f1b = {
  stats: _0x344bd7
};
const relic_candle_stub = {
  id: "candle_stub",
  name: "몽당 양초",
  crest: ["flame", "soul"],
  rarity: 1,
  icon: "candle",
  col: "#ffc070",
  desc: "스킬 피해 +7%",
  effects: [_0x267f1b]
};
const _0x474ff0 = {
  vsBleed: 0.06,
  vsPoison: 0.06
};
const _0x1c7968 = {
  stats: _0x474ff0
};
const relic_leech_jar = {
  id: "leech_jar",
  name: "거머리 병",
  crest: ["blood", "venom"],
  rarity: 1,
  icon: "jar",
  col: "#802040",
  desc: "출혈 대상 피해 +6%, 독 대상 피해 +6%",
  effects: [_0x1c7968]
};
const _0x5471a6 = {
  vsShock: 0.1
};
const _0x3fa6da = {
  stats: _0x5471a6
};
const relic_storm_bottle = {
  id: "storm_bottle",
  name: "폭풍 병",
  crest: ["storm"],
  rarity: 1,
  icon: "flask",
  col: "#80b0ff",
  desc: "감전 대상 피해 +10%",
  effects: [_0x3fa6da]
};
const _0x3e68c6 = {
  swapDmg: 0.15
};
const _0x4a1b66 = {
  stats: _0x3e68c6
};
const relic_relay_glove = {
  id: "relay_glove",
  name: "교대 장갑",
  crest: ["swift", "soul"],
  rarity: 1,
  icon: "fist",
  col: "#70d0c0",
  desc: "교대 공격 피해 +15%",
  effects: [_0x4a1b66]
};
const _0x58e443 = {
  vsFrozen: 0.08,
  hpPct: 0.03
};
const _0x3232d2 = {
  stats: _0x58e443
};
const relic_frost_tea = {
  id: "frost_tea",
  name: "서리 차",
  crest: ["frost", "soul"],
  rarity: 1,
  icon: "potion",
  col: "#b0e0f0",
  desc: "빙결 대상 피해 +8%, 최대 체력 +3%",
  effects: [_0x3232d2]
};
const _0x540824 = {
  k: "explode",
  r: 40,
  m: 1.2,
  el: "fire",
  st: "burn"
};
const _0x235fb7 = {
  on: "kill",
  need: "burn",
  do: [_0x540824]
};
const relic_phoenix_ash = {
  id: "phoenix_ash",
  name: "불사조의 재",
  crest: ["flame", "soul"],
  rarity: 2,
  icon: "feather",
  col: "#ff8040",
  desc: "화상 대상 처치 시 화염 폭발 (공격력 120%)",
  effects: [_0x235fb7]
};
const _0x4781c4 = {
  vsBleed: 0.15
};
const _0x5ce567 = {
  stats: _0x4781c4
};
const _0x258af4 = {
  crit: 0.1
};
const definition_bhound = {
  k: "buff",
  id: "bhound",
  stats: _0x258af4,
  dur: 2
};
const _0x50a660 = {
  on: "dash",
  do: [definition_bhound]
};
const relic_bloodhound = {
  id: "bloodhound",
  name: "핏빛 사냥개 목줄",
  crest: ["blood", "swift"],
  rarity: 2,
  icon: "chain",
  col: "#c02030",
  desc: "출혈 대상 피해 +15%, 대시 후 2초간 치명타 +10%",
  effects: [_0x5ce567, _0x50a660]
};
const _0x1867b7 = {
  k: "chain",
  n: 3,
  m: 0.6
};
const _0x2c65f9 = {
  on: "crit",
  icd: 0.3,
  do: [_0x1867b7]
};
const relic_tempest_coin = {
  id: "tempest_coin",
  name: "폭풍 동전",
  crest: ["storm", "fury"],
  rarity: 2,
  icon: "coin",
  col: "#90d0ff",
  desc: "치명타 시 연쇄 번개 (공격력 60%)",
  effects: [_0x2c65f9]
};
const _0xe66f81 = {
  skillDmg: 0.15,
  cdr: 0.06
};
const _0x29d1d0 = {
  stats: _0xe66f81
};
const relic_void_lens = {
  id: "void_lens",
  name: "공허의 렌즈",
  crest: ["shadow", "soul"],
  rarity: 2,
  icon: "eye",
  col: "#7050c0",
  desc: "스킬 피해 +15%, 스킬 쿨타임 -6%",
  effects: [_0x29d1d0]
};
const _0x606c6a = {
  dmgTaken: -0.15,
  atk: 0.15
};
const _0x3a7aa2 = {
  cond: "lowHp",
  stats: _0x606c6a
};
const relic_iron_resolve = {
  id: "iron_resolve",
  name: "강철 결의",
  crest: ["ward", "fury"],
  rarity: 2,
  icon: "shield",
  col: "#b0b8c8",
  desc: "체력 50% 이하일 때 받는 피해 -15%, 공격력 +15%",
  effects: [_0x3a7aa2]
};
const _0x11af51 = {
  aspd: 0.1,
  mspd: 0.08
};
const _0x192f36 = {
  stats: _0x11af51
};
const relic_wind_harp = {
  id: "wind_harp",
  name: "바람 하프",
  crest: ["swift", "storm"],
  rarity: 2,
  icon: "bell",
  col: "#80f0d0",
  desc: "공격 속도 +10%, 이동 속도 +8%",
  effects: [_0x192f36]
};
const _0x46194d = {
  k: "explode",
  r: 44,
  m: 1,
  el: "poison",
  st: "poison"
};
const _0x3ae3fc = {
  on: "kill",
  need: "poison",
  do: [_0x46194d]
};
const relic_plague_bell = {
  id: "plague_bell",
  name: "역병 종",
  crest: ["venom", "fury"],
  rarity: 2,
  icon: "bell",
  col: "#a0c040",
  desc: "독 대상 처치 시 독 폭발 (공격력 100%)",
  effects: [_0x3ae3fc]
};
const _0x3814b6 = {
  vsFrozen: 0.2
};
const _0xa34351 = {
  stats: _0x3814b6
};
const _0x568731 = {
  k: "shield",
  v: 0.05
};
const _0x32f46b = {
  on: "hurt",
  icd: 6,
  do: [_0x568731]
};
const relic_glacier_crown = {
  id: "glacier_crown",
  name: "빙하 왕관",
  crest: ["frost", "ward"],
  rarity: 2,
  icon: "crown",
  col: "#c0f0ff",
  desc: "빙결 대상 피해 +20%, 피격 시 최대 체력 5% 보호막 (6초에 한 번)",
  effects: [_0xa34351, _0x32f46b]
};
const _0x4e6292 = {
  k: "meteor",
  m: 2.5
};
const _0x36f31c = {
  on: "interval",
  every: 5,
  do: [_0x4e6292]
};
const _0x43d9c3 = {
  allDmg: 0.1
};
const _0x15ca5f = {
  stats: _0x43d9c3
};
const relic_star_heart = {
  id: "star_heart",
  name: "별의 심장",
  crest: ["soul", "storm"],
  rarity: 3,
  icon: "heart",
  col: "#c8b8ff",
  desc: "5초마다 가장 가까운 적에게 별빛 유성 (공격력 250%), 모든 피해 +10%",
  effects: [_0x36f31c, _0x15ca5f]
};
const _0x27656b = {
  k: "cdr",
  v: 0.5
};
const _0x45060a = {
  on: "kill",
  do: [_0x27656b]
};
const _0xf977a5 = {
  crit: 0.08,
  critDmg: 0.25
};
const _0x30eb77 = {
  stats: _0xf977a5
};
const relic_reaper_sand = {
  id: "reaper_sand",
  name: "사신의 모래",
  crest: ["shadow", "soul"],
  rarity: 3,
  icon: "hourglass",
  col: "#a080ff",
  desc: "처치 시 스킬 쿨타임 0.5초 감소, 치명타 확률 +8%, 치명타 피해 +25%",
  effects: [_0x45060a, _0x30eb77]
};
const _0x375162 = {
  e: 0,
  stat: "atk"
};
const _0x2b780c = {
  atk: 0.1
};
const _0x2c4505 = {
  stats: _0x2b780c
};
const relic_rusty_blade = {
  id: "rusty_blade",
  name: "녹슨 장검",
  rarity: 3,
  atk: 4,
  icon: "sword",
  col: "#b8a890",
  scale: 0.25,
  ref: _0x375162,
  desc: "공격력 +{v}%",
  effects: [_0x2c4505]
};
const _0xc0c362 = {
  e: 0,
  stat: "crit"
};
const _0x3d248d = {
  crit: 0.08
};
const _0x130786 = {
  stats: _0x3d248d
};
const relic_hunter_knife = {
  id: "hunter_knife",
  name: "사냥꾼의 단도",
  rarity: 3,
  atk: 3,
  icon: "dagger",
  col: "#c0c8d0",
  scale: 0.25,
  ref: _0xc0c362,
  desc: "치명타 확률 +{v}%",
  effects: [_0x130786]
};
const _0x3d2368 = {
  e: 0,
  chance: !0
};
const _0x42896d = {
  k: "status",
  s: "burn"
};
const _0x6d6c00 = {
  on: "hit",
  chance: 0.12,
  do: [_0x42896d]
};
const relic_ember_club = {
  id: "ember_club",
  name: "불씨 곤봉",
  rarity: 3,
  crest: ["flame"],
  atk: 4,
  icon: "hammer",
  col: "#e07a3a",
  scale: 0.25,
  ref: _0x3d2368,
  desc: "공격 시 {v}% 확률로 화상",
  effects: [_0x6d6c00]
};
const _0x1047a0 = {
  e: 0,
  chance: !0
};
const _0x5661ea = {
  k: "status",
  s: "bleed"
};
const _0x78616a = {
  on: "hit",
  chance: 0.15,
  do: [_0x5661ea]
};
const relic_thorn_whip = {
  id: "thorn_whip",
  name: "가시 채찍",
  rarity: 3,
  crest: ["blood"],
  atk: 3,
  icon: "whip",
  col: "#a03040",
  scale: 0.25,
  ref: _0x1047a0,
  desc: "공격 시 {v}% 확률로 출혈",
  effects: [_0x78616a]
};
const _0x5ce62e = {
  e: 0,
  chance: !0
};
const _0xcb7f7c = {
  k: "status",
  s: "poison"
};
const _0x5abaed = {
  on: "hit",
  chance: 0.2,
  do: [_0xcb7f7c]
};
const relic_viper_fang = {
  id: "viper_fang",
  name: "독니 단검",
  rarity: 3,
  crest: ["venom"],
  atk: 3,
  icon: "dagger",
  col: "#70c040",
  scale: 0.25,
  ref: _0x5ce62e,
  desc: "공격 시 {v}% 확률로 독",
  effects: [_0x5abaed]
};
const _0x383446 = {
  e: 0,
  stat: "mspd"
};
const _0xbd073d = {
  mspd: 0.12,
  aspd: 0.08
};
const _0x4d49b1 = {
  stats: _0xbd073d
};
const relic_gale_gloves = {
  id: "gale_gloves",
  name: "바람깃 장갑",
  rarity: 3,
  crest: ["swift"],
  atk: 2,
  icon: "glove",
  col: "#70e0a0",
  scale: 0.25,
  ref: _0x383446,
  desc: "이동 속도 +{v}%, 공격 속도 +8%",
  effects: [_0x4d49b1]
};
const _0x3088a8 = {
  e: 0,
  dv: !0
};
const _0x3b7724 = {
  k: "heal",
  v: 0.02
};
const _0x3d968d = {
  on: "kill",
  do: [_0x3b7724]
};
const relic_grave_shovel = {
  id: "grave_shovel",
  name: "묘지기의 삽",
  rarity: 3,
  crest: ["soul"],
  atk: 4,
  icon: "shovel",
  col: "#8a8a7a",
  scale: 0.25,
  ref: _0x3088a8,
  desc: "처치 시 체력 {v}% 회복",
  effects: [_0x3d968d]
};
const _0x377f0a = {
  e: 0,
  stat: "dmgTaken"
};
const _0x37be20 = {
  dmgTaken: -0.1
};
const _0x4f0742 = {
  stats: _0x37be20
};
const _0x21ae47 = {
  k: "shield",
  v: 0.08
};
const _0x2a71ee = {
  on: "roomStart",
  do: [_0x21ae47]
};
const relic_tower_sword = {
  id: "tower_sword",
  name: "철판 방패검",
  rarity: 3,
  crest: ["ward"],
  atk: 3,
  icon: "shield",
  col: "#a0a8b8",
  scale: 0.25,
  ref: _0x377f0a,
  desc: "받는 피해 -{v}%, 방 입장 시 보호막 8%",
  effects: [_0x4f0742, _0x2a71ee]
};
const _0x4eb5b4 = {
  e: 0,
  chance: !0
};
const _0x1734ae = {
  k: "status",
  s: "chill"
};
const _0x507d8d = {
  on: "hit",
  chance: 0.14,
  do: [_0x1734ae]
};
const relic_frost_awl = {
  id: "frost_awl",
  name: "서리 송곳",
  rarity: 3,
  crest: ["frost"],
  atk: 3,
  icon: "spear",
  col: "#a0e0ff",
  scale: 0.25,
  ref: _0x4eb5b4,
  desc: "공격 시 {v}% 확률로 냉기",
  effects: [_0x507d8d]
};
const _0x280800 = {
  e: 0,
  chance: !0
};
const _0x3a5b4f = {
  k: "status",
  s: "burn",
  n: 2
};
const _0x4ae32e = {
  on: "finisher",
  chance: 0.4,
  do: [_0x3a5b4f]
};
const relic_ash_hatchet = {
  id: "ash_hatchet",
  name: "잿빛 손도끼",
  rarity: 3,
  crest: ["flame"],
  atk: 4,
  icon: "axe",
  col: "#d06a3a",
  scale: 0.25,
  ref: _0x280800,
  desc: "콤보 마지막 타격 시 {v}% 확률로 화상 2중첩",
  effects: [_0x4ae32e]
};
const _0x423dd2 = {
  e: 0,
  stat: "lifesteal"
};
const _0xff1f10 = {
  lifesteal: 0.02
};
const _0x40fb52 = {
  stats: _0xff1f10
};
const relic_leech_sickle = {
  id: "leech_sickle",
  name: "거머리 낫",
  rarity: 3,
  crest: ["blood"],
  atk: 3,
  icon: "scythe",
  col: "#b03050",
  scale: 0.25,
  ref: _0x423dd2,
  desc: "준 피해의 {v}%만큼 체력 회복",
  effects: [_0x40fb52]
};
const _0x1c70a0 = {
  e: 0,
  chance: !0
};
const _0x45b063 = {
  k: "status",
  s: "shock"
};
const _0x47e46c = {
  on: "hit",
  chance: 0.12,
  do: [_0x45b063]
};
const relic_spark_rod = {
  id: "spark_rod",
  name: "불똥 쇠막대",
  rarity: 3,
  crest: ["storm"],
  atk: 3,
  icon: "staff",
  col: "#90c8ff",
  scale: 0.25,
  ref: _0x1c70a0,
  desc: "공격 시 {v}% 확률로 감전",
  effects: [_0x47e46c]
};
const _0x38e84d = {
  e: 0,
  buff: "crit"
};
const _0x490857 = {
  crit: 0.15
};
const definition_dkunai = {
  k: "buff",
  id: "dkunai",
  stats: _0x490857,
  dur: 2
};
const _0x440953 = {
  on: "dash",
  do: [definition_dkunai]
};
const relic_dusk_kunai = {
  id: "dusk_kunai",
  name: "황혼의 쿠나이",
  rarity: 3,
  crest: ["shadow"],
  atk: 3,
  icon: "dagger",
  col: "#8a6ac0",
  scale: 0.25,
  ref: _0x38e84d,
  desc: "대시 후 2초간 치명타 확률 +{v}%",
  effects: [_0x440953]
};
const _0x158167 = {
  e: 0,
  stat: "hpPct"
};
const _0x2ce384 = {
  hpPct: 0.1
};
const _0x3c5aca = {
  stats: _0x2ce384
};
const relic_knot_buckler = {
  id: "knot_buckler",
  name: "옹이 원형방패",
  rarity: 3,
  crest: ["ward"],
  atk: 2,
  icon: "shield",
  col: "#a07a4a",
  scale: 0.25,
  ref: _0x158167,
  desc: "최대 체력 +{v}%",
  effects: [_0x3c5aca]
};
const _0x1d25e4 = {
  e: 0,
  stat: "finDmg"
};
const _0x10731c = {
  finDmg: 0.2
};
const _0x4793fd = {
  stats: _0x10731c
};
const relic_brawler_knuckle = {
  id: "brawler_knuckle",
  name: "싸움꾼의 너클",
  rarity: 3,
  crest: ["fury"],
  atk: 4,
  icon: "glove",
  col: "#d07040",
  scale: 0.25,
  ref: _0x1d25e4,
  desc: "콤보 마지막 타 피해 +{v}%",
  effects: [_0x4793fd]
};
const _0x587cc5 = {
  e: 0,
  stat: "dashCdr"
};
const _0x504ec8 = {
  dashCdr: 0.12
};
const _0x1a4331 = {
  stats: _0x504ec8
};
const relic_feather_dart = {
  id: "feather_dart",
  name: "깃털 투창",
  rarity: 3,
  crest: ["swift"],
  atk: 3,
  icon: "spear",
  col: "#a0f0c0",
  scale: 0.25,
  ref: _0x587cc5,
  desc: "대시 쿨타임 -{v}%",
  effects: [_0x1a4331]
};
const _0x339734 = {
  e: 0,
  dv: !0
};
const _0x30060f = {
  k: "heal",
  v: 0.05
};
const _0x3d221e = {
  on: "roomClear",
  do: [_0x30060f]
};
const relic_vigil_candle = {
  id: "vigil_candle",
  name: "추모의 촛대",
  rarity: 3,
  crest: ["soul"],
  atk: 3,
  icon: "staff",
  col: "#e8d890",
  scale: 0.25,
  ref: _0x339734,
  desc: "방을 정리할 때 체력 {v}% 회복",
  effects: [_0x3d221e]
};
const _0x1bf427 = {
  e: 0,
  stat: "vsPoison"
};
const _0x20722e = {
  vsPoison: 0.15
};
const _0x324709 = {
  stats: _0x20722e
};
const relic_swamp_flail = {
  id: "swamp_flail",
  name: "늪지 도리깨",
  rarity: 3,
  crest: ["venom"],
  atk: 4,
  icon: "hammer",
  col: "#6a9a40",
  scale: 0.25,
  ref: _0x1bf427,
  desc: "중독 대상 피해 +{v}%",
  effects: [_0x324709]
};
const _0x125079 = {
  e: 0,
  chance: !0
};
const _0x19e6c = {
  k: "status",
  s: "chill"
};
const _0x1c882b = {
  on: "skillHit",
  chance: 0.3,
  do: [_0x19e6c]
};
const relic_icicle_bow = {
  id: "icicle_bow",
  name: "고드름 활",
  rarity: 3,
  crest: ["frost"],
  atk: 3,
  icon: "bow",
  col: "#b0e8ff",
  scale: 0.25,
  ref: _0x125079,
  desc: "스킬 적중 시 {v}% 확률로 냉기",
  effects: [_0x1c882b]
};
const _0x26399a = {
  e: 0,
  stat: "gold"
};
const _0x5c93e9 = {
  gold: 0.15
};
const _0x37cccb = {
  stats: _0x5c93e9
};
const relic_miner_pick = {
  id: "miner_pick",
  name: "광부의 곡괭이",
  rarity: 3,
  atk: 4,
  icon: "hammer",
  col: "#c0a060",
  scale: 0.25,
  ref: _0x26399a,
  desc: "금화 획득 +{v}%",
  effects: [_0x37cccb]
};
const _0x895642 = {
  e: 0,
  stat: "airDmg"
};
const _0x5ecf80 = {
  airDmg: 0.25
};
const _0x8fc9ff = {
  stats: _0x5ecf80
};
const relic_kite_glaive = {
  id: "kite_glaive",
  name: "연날개 언월도",
  rarity: 3,
  crest: ["storm"],
  atk: 3,
  icon: "spear",
  col: "#80c0e0",
  scale: 0.25,
  ref: _0x895642,
  desc: "공중 공격 피해 +{v}%",
  effects: [_0x8fc9ff]
};
const _0x31735f = {
  e: 0,
  stat: "eliteDmg"
};
const _0x2770e6 = {
  eliteDmg: 0.15
};
const _0x41951a = {
  stats: _0x2770e6
};
const relic_beast_whip = {
  id: "beast_whip",
  name: "맹수 조련 채찍",
  rarity: 3,
  crest: ["fury"],
  atk: 3,
  icon: "whip",
  col: "#a08060",
  scale: 0.25,
  ref: _0x31735f,
  desc: "정예 적 피해 +{v}%",
  effects: [_0x41951a]
};
const _0x5bee2e = {
  e: 0,
  buff: "aspd"
};
const _0x1a48f1 = {
  aspd: 0.2
};
const definition_tinglass = {
  k: "buff",
  id: "tinglass",
  stats: _0x1a48f1,
  dur: 5
};
const _0x539d23 = {
  on: "roomStart",
  do: [definition_tinglass]
};
const relic_tin_hourglass = {
  id: "tin_hourglass",
  name: "양철 모래시계",
  rarity: 3,
  crest: ["swift"],
  atk: 2,
  icon: "hourglass",
  col: "#c8c8b0",
  scale: 0.25,
  ref: _0x5bee2e,
  desc: "방 입장 후 5초간 공격 속도 +{v}%",
  effects: [_0x539d23]
};
const _0x159dba = {
  e: 0,
  stat: "dotDmg"
};
const _0x1eec37 = {
  dotDmg: 0.15
};
const _0x1aaa07 = {
  stats: _0x1eec37
};
const relic_venom_blowgun = {
  id: "venom_blowgun",
  name: "독침 취관",
  rarity: 3,
  crest: ["venom"],
  atk: 2,
  icon: "staff",
  col: "#80c050",
  scale: 0.25,
  ref: _0x159dba,
  desc: "상태이상 지속 피해 +{v}%",
  effects: [_0x1aaa07]
};
const _0x1e28f1 = {
  e: 0,
  dm: !0
};
const _0x1b9269 = {
  k: "explode",
  r: 36,
  m: 0.5,
  el: "frost",
  st: "chill"
};
const _0x310554 = {
  on: "kill",
  do: [_0x1b9269]
};
const relic_rime_chakram = {
  id: "rime_chakram",
  name: "서리 차크람",
  rarity: 3,
  crest: ["frost"],
  atk: 3,
  icon: "orb",
  col: "#a8e0ff",
  scale: 0.25,
  ref: _0x1e28f1,
  desc: "처치 시 서리 파편 폭발 (공격력 {v}%, 냉기)",
  effects: [_0x310554]
};
const _0x5309cd = {
  e: 0,
  stat: "vsBurn"
};
const _0xd1e8a7 = {
  vsBurn: 0.15
};
const _0x5a74e6 = {
  stats: _0xd1e8a7
};
const relic_ember_fan = {
  id: "ember_fan",
  name: "불티 부채",
  rarity: 3,
  crest: ["flame"],
  atk: 3,
  icon: "staff",
  col: "#ff9050",
  scale: 0.25,
  ref: _0x5309cd,
  desc: "화상 대상 피해 +{v}%",
  effects: [_0x5a74e6]
};
const _0x5096e7 = {
  e: 0,
  dv: !0
};
const _0x4cecc0 = {
  k: "shield",
  v: 0.08
};
const _0x25d518 = {
  on: "parry",
  do: [_0x4cecc0]
};
const _0x82e2f7 = {
  dmgTaken: -0.05
};
const _0x50268a = {
  stats: _0x82e2f7
};
const relic_oak_tonfa = {
  id: "oak_tonfa",
  name: "참나무 톤파",
  rarity: 3,
  crest: ["ward"],
  atk: 3,
  icon: "hammer",
  col: "#a07a4a",
  scale: 0.25,
  ref: _0x5096e7,
  desc: "반격 성공 시 보호막 {v}%, 받는 피해 -5%",
  effects: [_0x25d518, _0x50268a]
};
const _0x347dd4 = {
  e: 0,
  stat: "vsBleed"
};
const _0x333cb1 = {
  vsBleed: 0.15
};
const _0x3d280f = {
  stats: _0x333cb1
};
const _0xb772d3 = {
  k: "status",
  s: "bleed"
};
const _0x3a8f53 = {
  on: "finisher",
  do: [_0xb772d3]
};
const relic_bone_cleaver = {
  id: "bone_cleaver",
  name: "뼈 식칼",
  rarity: 3,
  crest: ["blood"],
  atk: 4,
  icon: "axe",
  col: "#d8c8b0",
  scale: 0.25,
  ref: _0x347dd4,
  desc: "출혈 대상 피해 +{v}%, 콤보 마지막 타격 시 출혈",
  effects: [_0x3d280f, _0x3a8f53]
};
const _0x12e077 = {
  e: 0,
  chance: !0
};
const _0xbac446 = {
  k: "status",
  s: "poison",
  n: 2
};
const _0x1ba51f = {
  on: "skillHit",
  chance: 0.25,
  do: [_0xbac446]
};
const relic_venom_sling = {
  id: "venom_sling",
  name: "독가시 새총",
  rarity: 3,
  crest: ["venom"],
  atk: 2,
  icon: "bow",
  col: "#90d060",
  scale: 0.25,
  ref: _0x12e077,
  desc: "스킬 적중 시 {v}% 확률로 독 2중첩",
  effects: [_0x1ba51f]
};
const _0xff1d62 = {
  e: 0,
  stat: "bossDmg"
};
const _0x4ee7bd = {
  bossDmg: 0.15
};
const _0x18146c = {
  stats: _0x4ee7bd
};
const relic_spiked_gauntlet = {
  id: "spiked_gauntlet",
  name: "가시 철권",
  rarity: 3,
  crest: ["fury"],
  atk: 4,
  icon: "glove",
  col: "#b0a090",
  scale: 0.25,
  ref: _0xff1d62,
  desc: "보스 피해 +{v}%",
  effects: [_0x18146c]
};
const _0x390781 = {
  e: 0,
  stat: "aspd"
};
const _0x432bdc = {
  aspd: 0.1
};
const _0x338c17 = {
  stats: _0x432bdc
};
const relic_sparrow_rang = {
  id: "sparrow_rang",
  name: "참새 부메랑",
  rarity: 3,
  crest: ["swift"],
  atk: 3,
  icon: "orb",
  col: "#d0b080",
  scale: 0.25,
  ref: _0x390781,
  desc: "공격 속도 +{v}%",
  effects: [_0x338c17]
};
const _0x4e1a8c = {
  e: 0,
  dm: !0
};
const _0x7c3d = {
  k: "wave",
  m: 0.9
};
const _0x3c8480 = {
  on: "finisher",
  do: [_0x7c3d]
};
const relic_quake_blade = {
  id: "quake_blade",
  name: "진동 대검",
  rarity: 4,
  crest: ["fury"],
  atk: 7,
  icon: "sword",
  col: "#d0a060",
  scale: 0.2,
  ref: _0x4e1a8c,
  desc: "콤보 마지막 타격 시 충격파 (공격력 {v}%)",
  effects: [_0x3c8480]
};
const _0x545949 = {
  e: 0,
  dv: !0
};
const _0x48bb23 = {
  k: "heal",
  v: 0.04
};
const _0x1d51ff = {
  on: "kill",
  do: [_0x48bb23]
};
const _0x1dfe42 = {
  atk: 0.08
};
const _0x326e5 = {
  stats: _0x1dfe42
};
const relic_blood_thirst = {
  id: "blood_thirst",
  name: "피의 갈증",
  rarity: 4,
  crest: ["blood"],
  atk: 6,
  icon: "axe",
  col: "#d02040",
  scale: 0.2,
  ref: _0x545949,
  desc: "처치 시 체력 {v}% 회복, 공격력 +8%",
  effects: [_0x1d51ff, _0x326e5]
};
const _0x51195d = {
  e: 0,
  chance: !0
};
const _0x518a91 = {
  k: "chain",
  n: 3,
  m: 0.6
};
const _0x357a5d = {
  on: "hit",
  chance: 0.14,
  icd: 0.25,
  do: [_0x518a91]
};
const relic_thunder_pike = {
  id: "thunder_pike",
  name: "뇌명창",
  rarity: 4,
  crest: ["storm"],
  atk: 6,
  icon: "spear",
  col: "#80d0ff",
  scale: 0.2,
  ref: _0x51195d,
  desc: "공격 시 {v}% 확률로 연쇄 번개",
  effects: [_0x357a5d]
};
const _0x148bf3 = {
  e: 0,
  buff: "atk"
};
const _0x40a434 = {
  atk: 0.35
};
const definition_sfang = {
  k: "buff",
  id: "sfang",
  stats: _0x40a434,
  dur: 3
};
const _0x8b0e7b = {
  on: "dash",
  do: [definition_sfang]
};
const relic_shadow_fang = {
  id: "shadow_fang",
  name: "그림자 송곳니",
  rarity: 4,
  crest: ["shadow"],
  atk: 6,
  icon: "dagger",
  col: "#9a6bff",
  scale: 0.2,
  ref: _0x148bf3,
  desc: "대시 후 3초간 공격력 +{v}%",
  effects: [_0x8b0e7b]
};
const _0x39866d = {
  e: 0,
  stat: "swapDmg"
};
const _0x4adbf0 = {
  swapDmg: 1,
  swapCdr: 0.15
};
const _0x2b6fd5 = {
  stats: _0x4adbf0
};
const relic_relay_token = {
  id: "relay_token",
  name: "교대자의 증표",
  rarity: 4,
  crest: ["swift"],
  atk: 5,
  icon: "orb",
  col: "#6dffb0",
  scale: 0.2,
  ref: _0x39866d,
  desc: "교대 공격 피해 +{v}%, 교대 쿨타임 -15%",
  effects: [_0x2b6fd5]
};
const _0x2d614d = {
  e: 0,
  stat: "atk"
};
const _0x41fdb5 = {
  atk: 0.4
};
const _0x1d4f89 = {
  cond: "lowHp",
  stats: _0x41fdb5
};
const _0x2f9e00 = {
  aspd: 0.1
};
const _0xca98c9 = {
  stats: _0x2f9e00
};
const relic_berserker_axe = {
  id: "berserker_axe",
  name: "광전사의 도끼",
  rarity: 4,
  crest: ["fury"],
  atk: 8,
  icon: "axe",
  col: "#ff5030",
  scale: 0.2,
  ref: _0x2d614d,
  desc: "체력 50% 이하일 때 공격력 +{v}%, 공격 속도 +10%",
  effects: [_0x1d4f89, _0xca98c9]
};
const _0x2c5e01 = {
  e: 0,
  dv: !0,
  sec: !0
};
const _0x26c9ee = {
  k: "cdr",
  v: 0.6
};
const _0x293c8b = {
  on: "kill",
  do: [_0x26c9ee]
};
const relic_soul_reaper = {
  id: "soul_reaper",
  name: "영혼 수확자",
  rarity: 4,
  crest: ["soul"],
  atk: 6,
  icon: "scythe",
  col: "#9ef0ff",
  scale: 0.2,
  ref: _0x2c5e01,
  desc: "처치 시 스킬 쿨타임 {v}초 감소",
  effects: [_0x293c8b]
};
const _0x3562c1 = {
  e: 0,
  stat: "skillDmg"
};
const _0x3fddb1 = {
  skillDmg: 0.25
};
const _0x29a407 = {
  stats: _0x3fddb1
};
const _0x3af806 = {
  k: "status",
  s: "burn"
};
const _0x40c029 = {
  on: "skillHit",
  do: [_0x3af806]
};
const relic_pyre_staff = {
  id: "pyre_staff",
  name: "화장터 지팡이",
  rarity: 4,
  crest: ["flame", "soul"],
  atk: 6,
  icon: "staff",
  col: "#ff8a3a",
  scale: 0.2,
  ref: _0x3562c1,
  desc: "스킬 피해 +{v}%, 스킬 적중 시 화상",
  effects: [_0x29a407, _0x40c029]
};
const _0x4283c3 = {
  e: 0,
  stat: "vsFrozen"
};
const _0x2245c6 = {
  vsFrozen: 0.4
};
const _0x517daa = {
  stats: _0x2245c6
};
const _0xc8e024 = {
  k: "status",
  s: "chill",
  n: 2
};
const _0x5326b8 = {
  on: "crit",
  do: [_0xc8e024]
};
const relic_rime_saber = {
  id: "rime_saber",
  name: "상고대 군도",
  rarity: 4,
  crest: ["frost"],
  atk: 6,
  icon: "sword",
  col: "#a8e4ff",
  scale: 0.2,
  ref: _0x4283c3,
  desc: "빙결 대상 피해 +{v}%, 치명타 시 냉기 2중첩",
  effects: [_0x517daa, _0x5326b8]
};
const _0xb15dce = {
  e: 0,
  chance: !0
};
const _0x59f48a = {
  spr: "fireball",
  spd: 6,
  life: 60,
  w: 10,
  h: 8,
  col: "#ff7a3a",
  el: "fire",
  st: "burn",
  pierce: 1
};
const _0x2d5957 = {
  k: "proj",
  p: _0x59f48a,
  m: 0.8
};
const _0x16f79b = {
  on: "hit",
  chance: 0.15,
  icd: 0.2,
  do: [_0x2d5957]
};
const relic_cinder_bow = {
  id: "cinder_bow",
  name: "잿불 장궁",
  rarity: 4,
  crest: ["flame"],
  atk: 6,
  icon: "bow",
  col: "#ff7a3a",
  scale: 0.2,
  ref: _0xb15dce,
  desc: "공격 시 {v}% 확률로 화염탄 발사 (공격력 80%, 화상)",
  effects: [_0x16f79b]
};
const _0x222d7a = {
  e: 0,
  stat: "vsBleed"
};
const _0x50d4f8 = {
  vsBleed: 0.3
};
const _0x2447c4 = {
  stats: _0x50d4f8
};
const _0x183a85 = {
  k: "status",
  s: "bleed"
};
const _0x26a33b = {
  on: "crit",
  do: [_0x183a85]
};
const relic_hemo_lance = {
  id: "hemo_lance",
  name: "혈류 장창",
  rarity: 4,
  crest: ["blood"],
  atk: 7,
  icon: "spear",
  col: "#c02040",
  scale: 0.2,
  ref: _0x222d7a,
  desc: "출혈 대상 피해 +{v}%, 치명타 시 출혈",
  effects: [_0x2447c4, _0x26a33b]
};
const _0x10f7bc = {
  e: 0,
  dm: !0
};
const _0x4f428f = {
  k: "chain",
  n: 3,
  m: 0.8
};
const _0x2cebf7 = {
  on: "kill",
  do: [_0x4f428f]
};
const relic_thunder_disc = {
  id: "thunder_disc",
  name: "뇌운 원반",
  rarity: 4,
  crest: ["storm"],
  atk: 6,
  icon: "orb",
  col: "#a0d8ff",
  scale: 0.2,
  ref: _0x10f7bc,
  desc: "처치 시 그 자리에서 연쇄 번개 (공격력 {v}%)",
  effects: [_0x2cebf7]
};
const _0x552656 = {
  e: 0,
  stat: "crit"
};
const _0x3df9a3 = {
  crit: 0.25
};
const _0x51ee75 = {
  cond: "afterDash",
  stats: _0x3df9a3
};
const _0x29a36c = {
  dashCdr: 0.1
};
const _0x23377e = {
  stats: _0x29a36c
};
const relic_night_twins = {
  id: "night_twins",
  name: "밤그늘 쌍단검",
  rarity: 4,
  crest: ["shadow"],
  atk: 6,
  icon: "dagger",
  col: "#7a5ac8",
  scale: 0.2,
  ref: _0x552656,
  desc: "대시 직후 치명타 확률 +{v}%, 대시 쿨타임 -10%",
  effects: [_0x51ee75, _0x23377e]
};
const _0x3c0388 = {
  e: 0,
  dv: !0
};
const _0x3d9ea2 = {
  k: "shield",
  v: 0.15
};
const _0x179a82 = {
  on: "roomStart",
  do: [_0x3d9ea2]
};
const _0x5367b0 = {
  atk: 0.12
};
const _0xee7af1 = {
  cond: "shielded",
  stats: _0x5367b0
};
const relic_bastion_mace = {
  id: "bastion_mace",
  name: "성벽 철퇴",
  rarity: 4,
  crest: ["ward"],
  atk: 7,
  icon: "hammer",
  col: "#b0b8c8",
  scale: 0.2,
  ref: _0x3c0388,
  desc: "방 입장 시 보호막 {v}%, 보호막이 있을 때 공격력 +12%",
  effects: [_0x179a82, _0xee7af1]
};
const _0x58a850 = {
  e: 0,
  dm: !0
};
const _0x1efe99 = {
  k: "nova",
  r: 64,
  m: 2,
  el: "phys"
};
const _0x52910b = {
  on: "parry",
  do: [_0x1efe99]
};
const _0x220093 = {
  dmgTaken: -0.08
};
const _0x5f17f0 = {
  stats: _0x220093
};
const relic_riposte_blade = {
  id: "riposte_blade",
  name: "받아치는 검",
  rarity: 4,
  crest: ["ward", "fury"],
  atk: 6,
  icon: "sword",
  col: "#e0c890",
  scale: 0.2,
  ref: _0x58a850,
  desc: "반격 성공 시 충격파 (공격력 {v}%). 받는 피해 -8%",
  effects: [_0x52910b, _0x5f17f0]
};
const _0x3355cc = {
  e: 0,
  stat: "atk"
};
const _0x2c2f72 = {
  atk: 0.25
};
const _0x400a43 = {
  cond: "comboHigh",
  stats: _0x2c2f72
};
const _0x32b3d4 = {
  finDmg: 0.15
};
const _0x12b6e6 = {
  stats: _0x32b3d4
};
const relic_warmonger_axe = {
  id: "warmonger_axe",
  name: "전쟁광의 대도끼",
  rarity: 4,
  crest: ["fury"],
  atk: 8,
  icon: "axe",
  col: "#e05030",
  scale: 0.2,
  ref: _0x3355cc,
  desc: "콤보 15 이상일 때 공격력 +{v}%, 콤보 마지막 타 피해 +15%",
  effects: [_0x400a43, _0x12b6e6]
};
const _0x22378b = {
  e: 0,
  buff: "aspd"
};
const _0x39f985 = {
  aspd: 0.25
};
const definition_gpike = {
  k: "buff",
  id: "gpike",
  stats: _0x39f985,
  dur: 4
};
const _0x234dc4 = {
  on: "swap",
  do: [definition_gpike]
};
const _0x5205e6 = {
  swapCdr: 0.1
};
const _0x37c3f5 = {
  stats: _0x5205e6
};
const relic_gust_pike = {
  id: "gust_pike",
  name: "질풍 장창",
  rarity: 4,
  crest: ["swift"],
  atk: 6,
  icon: "spear",
  col: "#80f0c0",
  scale: 0.2,
  ref: _0x22378b,
  desc: "교대 후 4초간 공격 속도 +{v}%, 교대 쿨타임 -10%",
  effects: [_0x234dc4, _0x37c3f5]
};
const _0x2c5f26 = {
  e: 0,
  dm: !0
};
const _0xc136d7 = {
  spr: "soul",
  spd: 5,
  life: 90,
  w: 10,
  h: 10,
  home: 0.3,
  col: "#a0f0ff",
  el: "shadow",
  pierce: 1
};
const _0x5009ca = {
  k: "proj",
  p: _0xc136d7,
  m: 1,
  n: 2
};
const _0x3b18b1 = {
  on: "interval",
  every: 5,
  do: [_0x5009ca]
};
const relic_wisp_lantern_7672fb = {
  id: "wisp_lantern",
  name: "혼불 랜턴",
  rarity: 4,
  crest: ["soul"],
  atk: 6,
  icon: "staff",
  col: "#a0f0ff",
  scale: 0.2,
  ref: _0x2c5f26,
  desc: "5초마다 추적 혼불 2발 (각 공격력 {v}%)",
  effects: [_0x3b18b1]
};
const _0x134074 = {
  e: 0,
  chance: !0
};
const _0x1f1073 = {
  k: "status",
  s: "poison"
};
const _0x12d1aa = {
  on: "hit",
  chance: 0.2,
  do: [_0x1f1073]
};
const _0x3825b0 = {
  poisonCloud: 1
};
const _0x4b95fd = {
  flags: _0x3825b0
};
const relic_plague_censer = {
  id: "plague_censer",
  name: "역병 향로",
  rarity: 4,
  crest: ["venom"],
  atk: 6,
  icon: "orb",
  col: "#90d050",
  scale: 0.2,
  ref: _0x134074,
  desc: "공격 시 {v}% 확률로 독, 중독된 적 처치 시 독구름",
  effects: [_0x12d1aa, _0x4b95fd]
};
const _0x135d93 = {
  e: 1,
  flag: "freezeShatter"
};
const _0x4cce0d = {
  k: "status",
  s: "chill",
  n: 2
};
const _0x55b1e0 = {
  on: "finisher",
  do: [_0x4cce0d]
};
const _0x4ce43f = {
  freezeShatter: 1
};
const _0x449195 = {
  flags: _0x4ce43f
};
const relic_glacier_maul = {
  id: "glacier_maul",
  name: "빙하 쇄빙퇴",
  rarity: 4,
  crest: ["frost"],
  atk: 8,
  icon: "hammer",
  col: "#90d0ff",
  scale: 0.2,
  ref: _0x135d93,
  desc: "콤보 마지막 타격 시 냉기 2중첩. 빙결이 풀릴 때 폭발 (공격력 {v}%)",
  effects: [_0x55b1e0, _0x449195]
};
const _0x3bd8d0 = {
  e: 0,
  dm: !0
};
const _0x59e35a = {
  k: "explode",
  r: 30,
  m: 0.8,
  el: "shadow"
};
const _0x55019d = {
  on: "airHit",
  icd: 0.3,
  do: [_0x59e35a]
};
const _0x3d8ae5 = {
  airDmg: 0.15
};
const _0x163352 = {
  stats: _0x3d8ae5
};
const relic_chain_sickle = {
  id: "chain_sickle",
  name: "그림자 사슬낫",
  rarity: 4,
  crest: ["shadow"],
  atk: 7,
  icon: "scythe",
  col: "#9070d0",
  scale: 0.2,
  ref: _0x3bd8d0,
  desc: "공중 공격 적중 시 그림자 폭발 (공격력 {v}%), 공중 공격 피해 +15%",
  effects: [_0x55019d, _0x163352]
};
const _0x4a488b = {
  e: 0,
  dm: !0
};
const _0x3a64fa = {
  k: "nova",
  r: 56,
  m: 1,
  el: "frost",
  st: "chill"
};
const _0x1cb8d9 = {
  on: "hurt",
  icd: 2,
  do: [_0x3a64fa]
};
const _0x1a699f = {
  dmgTaken: -0.08
};
const _0x2fec18 = {
  stats: _0x1a699f
};
const relic_icewall_shield = {
  id: "icewall_shield",
  name: "빙벽 대방패",
  rarity: 4,
  crest: ["frost", "ward"],
  atk: 6,
  icon: "shield",
  col: "#a0d8ff",
  scale: 0.2,
  ref: _0x4a488b,
  desc: "피격 시 냉기 파동 (공격력 {v}%, 냉기, 2초에 한 번). 받는 피해 -8%",
  effects: [_0x1cb8d9, _0x2fec18]
};
const _0x3113ca = {
  e: 0,
  chance: !0
};
const _0x541f53 = {
  spr: "arrow",
  spd: 7,
  life: 60,
  w: 12,
  h: 4,
  col: "#90e050",
  el: "poison",
  st: "poison",
  pierce: 1
};
const _0x3fd9b4 = {
  k: "proj",
  p: _0x541f53,
  m: 0.8
};
const _0x397ce6 = {
  on: "hit",
  chance: 0.15,
  icd: 0.2,
  do: [_0x3fd9b4]
};
const _0x1630bc = {
  vsPoison: 0.15
};
const _0x1ccc40 = {
  stats: _0x1630bc
};
const relic_venom_crossbow = {
  id: "venom_crossbow",
  name: "독화살 쇠뇌",
  rarity: 4,
  crest: ["venom"],
  atk: 6,
  icon: "bow",
  col: "#80d050",
  scale: 0.2,
  ref: _0x3113ca,
  desc: "공격 시 {v}% 확률로 독화살 발사 (공격력 80%, 독). 중독 대상 피해 +15%",
  effects: [_0x397ce6, _0x1ccc40]
};
const _0x417fff = {
  e: 0,
  dm: !0
};
const _0x598691 = {
  k: "explode",
  r: 36,
  m: 1,
  el: "fire",
  st: "burn"
};
const _0x47bfb6 = {
  on: "finisher",
  do: [_0x598691]
};
const _0x72165 = {
  finDmg: 0.1
};
const _0x2f12ba = {
  stats: _0x72165
};
const relic_forge_gauntlet = {
  id: "forge_gauntlet",
  name: "용광로 건틀릿",
  rarity: 4,
  crest: ["flame", "fury"],
  atk: 7,
  icon: "glove",
  col: "#ff8040",
  scale: 0.2,
  ref: _0x417fff,
  desc: "콤보 마지막 타격 시 화염 폭발 (공격력 {v}%, 화상). 콤보 마지막 타 피해 +10%",
  effects: [_0x47bfb6, _0x2f12ba]
};
const _0xdf4e1d = {
  e: 0,
  stat: "lifesteal"
};
const _0x3090c6 = {
  lifesteal: 0.03,
  skillDmg: 0.1
};
const _0x14b54f = {
  stats: _0x3090c6
};
const _0x304532 = {
  k: "status",
  s: "bleed"
};
const _0x5e4912 = {
  on: "skillHit",
  do: [_0x304532]
};
const relic_crimson_tome = {
  id: "crimson_tome",
  name: "선혈의 마도서",
  rarity: 4,
  crest: ["blood"],
  atk: 6,
  icon: "orb",
  col: "#d03050",
  scale: 0.2,
  ref: _0xdf4e1d,
  desc: "준 피해의 {v}%만큼 체력 회복, 스킬 피해 +10%, 스킬 적중 시 출혈",
  effects: [_0x14b54f, _0x5e4912]
};
const _0x39212f = {
  e: 0,
  dm: !0
};
const _0x41efb9 = {
  k: "nova",
  r: 48,
  m: 0.8,
  el: "frost",
  st: "chill"
};
const _0x22d7ed = {
  on: "dash",
  icd: 1,
  do: [_0x41efb9]
};
const _0x160bcb = {
  vsFrozen: 0.2
};
const _0x2effdf = {
  stats: _0x160bcb
};
const relic_tundra_lance = {
  id: "tundra_lance",
  name: "설원 기병창",
  rarity: 4,
  crest: ["frost", "swift"],
  atk: 7,
  icon: "spear",
  col: "#b0e8ff",
  scale: 0.2,
  ref: _0x39212f,
  desc: "대시할 때 주위에 서리 파동 (공격력 {v}%, 냉기, 1초에 한 번). 빙결 대상 피해 +20%",
  effects: [_0x22d7ed, _0x2effdf]
};
const _0xa889f0 = {
  e: 0,
  stat: "crit"
};
const _0x41cea2 = {
  crit: 0.1
};
const _0x1f0a8c = {
  stats: _0x41cea2
};
const _0x5ecac6 = {
  k: "status",
  s: "poison",
  n: 2
};
const _0x2eec3a = {
  on: "crit",
  do: [_0x5ecac6]
};
const relic_venom_claws = {
  id: "venom_claws",
  name: "맹독 쌍조",
  rarity: 4,
  crest: ["venom", "shadow"],
  atk: 6,
  icon: "glove",
  col: "#90e060",
  scale: 0.2,
  ref: _0xa889f0,
  desc: "치명타 확률 +{v}%, 치명타 시 독 2중첩",
  effects: [_0x1f0a8c, _0x2eec3a]
};
const _0x4e4e12 = {
  e: 0,
  dm: !0
};
const _0x5b0398 = {
  spr: "blade",
  spd: 5,
  life: 80,
  w: 10,
  h: 6,
  home: 0.35,
  col: "#c8a8ff",
  el: "shadow",
  pierce: 1
};
const _0x433071 = {
  k: "proj",
  p: _0x5b0398,
  m: 0.9,
  n: 3
};
const _0x171264 = {
  on: "kill",
  do: [_0x433071]
};
const _0x3bc41b = {
  atk: 0.15
};
const _0x462d1a = {
  stats: _0x3bc41b
};
const relic_eternis = {
  id: "eternis",
  name: "사자의 왕검 「에테르니스」",
  rarity: 5,
  crest: ["soul", "shadow"],
  atk: 12,
  icon: "sword",
  col: "#c8a8ff",
  scale: 0.15,
  ref: _0x4e4e12,
  desc: "처치 시 적의 영혼이 칼날 3개로 변해 추적 공격 (공격력 {v}%). 공격력 +15%",
  effects: [_0x171264, _0x462d1a]
};
const _0x254223 = {
  e: 0,
  dm: !0
};
const _0x148701 = {
  k: "chain",
  n: 4,
  m: 0.7
};
const _0x112452 = {
  on: "hit",
  chance: 0.25,
  icd: 0.15,
  do: [_0x148701]
};
const _0x3ad5ed = {
  vsShock: 0.3
};
const _0x4efabd = {
  stats: _0x3ad5ed
};
const relic_storm_heart = {
  id: "storm_heart",
  name: "폭풍의 심장",
  rarity: 5,
  crest: ["storm"],
  atk: 11,
  icon: "orb",
  col: "#7fd8ff",
  scale: 0.15,
  ref: _0x254223,
  desc: "공격 시 25% 확률로 연쇄 번개 (공격력 {v}%), 감전 대상 피해 +30%",
  effects: [_0x112452, _0x4efabd]
};
const _0x478055 = {
  e: 1,
  flag: "burnSpread"
};
const _0x2d6c7c = {
  k: "status",
  s: "burn"
};
const _0x26f770 = {
  on: "hit",
  do: [_0x2d6c7c]
};
const _0x39ca55 = {
  burnSpread: 1.5
};
const _0x21c5c2 = {
  flags: _0x39ca55
};
const relic_volcania = {
  id: "volcania",
  name: "화산검 「볼카니아」",
  rarity: 5,
  crest: ["flame", "fury"],
  atk: 12,
  icon: "sword",
  col: "#ff6a2a",
  scale: 0.15,
  ref: _0x478055,
  desc: "모든 공격이 화상을 부여. 화상 대상 처치 시 폭발 (공격력 {v}%)",
  effects: [_0x26f770, _0x21c5c2]
};
const _0x1da64d = {
  e: 1,
  stat: "swapCdr"
};
const _0x4081a2 = {
  k: "slowTime",
  dur: 2
};
const _0xc030e4 = {
  on: "swap",
  do: [_0x4081a2]
};
const _0xb74bbc = {
  swapCdr: 0.4,
  swapDmg: 0.3
};
const _0xbb1e01 = {
  stats: _0xb74bbc
};
const relic_chrono_glass = {
  id: "chrono_glass",
  name: "시간의 모래시계",
  rarity: 5,
  crest: ["swift", "soul"],
  atk: 10,
  icon: "hourglass",
  col: "#ffe8a0",
  scale: 0.15,
  ref: _0x1da64d,
  desc: "교대 시 2초간 적의 시간이 느려진다. 교대 쿨타임 -{v}%, 교대 공격 피해 +30%",
  effects: [_0xc030e4, _0xbb1e01]
};
const _0x527af0 = {
  e: 0,
  stat: "critDmg"
};
const _0x351b85 = {
  critDmg: 0.5,
  crit: 0.08
};
const _0x401b26 = {
  stats: _0x351b85
};
const _0x379946 = {
  k: "status",
  s: "bleed",
  n: 3
};
const _0x2d2189 = {
  on: "crit",
  do: [_0x379946]
};
const _0x2562e0 = {
  bleedRupture: 1.25
};
const _0x2ae4db = {
  flags: _0x2562e0
};
const relic_blood_sovereign = {
  id: "blood_sovereign",
  name: "피의 군주",
  rarity: 5,
  crest: ["blood"],
  atk: 12,
  icon: "axe",
  col: "#ff2050",
  scale: 0.15,
  ref: _0x527af0,
  desc: "치명타 피해 +{v}%, 치명타 확률 +8%. 치명타 시 출혈 3중첩, 출혈 5중첩 시 파열 (공격력 125%)",
  effects: [_0x401b26, _0x2d2189, _0x2ae4db]
};
const _0xdfeff6 = {
  e: 0,
  dm: !0
};
const _0x2a7915 = {
  k: "meteor",
  m: 3
};
const _0x513653 = {
  on: "interval",
  every: 4,
  do: [_0x2a7915]
};
const _0x5c3956 = {
  skillDmg: 0.3
};
const _0x22f70c = {
  stats: _0x5c3956
};
const relic_chaos_star = {
  id: "chaos_star",
  name: "혼돈의 별",
  rarity: 5,
  crest: ["soul", "storm"],
  atk: 11,
  icon: "orb",
  col: "#ffd0ff",
  scale: 0.15,
  ref: _0xdfeff6,
  desc: "4초마다 가장 가까운 적에게 운석 낙하 (공격력 {v}%). 스킬 피해 +30%",
  effects: [_0x513653, _0x22f70c]
};
const _0x483f2b = {
  e: 0,
  dm: !0
};
const _0x276209 = {
  k: "nova",
  r: 70,
  m: 1.8,
  el: "frost",
  st: "chill"
};
const _0x14ab58 = {
  on: "skill",
  do: [_0x276209]
};
const _0x14e3a4 = {
  vsFrozen: 0.3,
  cdr: 0.08
};
const _0x3b3ebd = {
  stats: _0x14e3a4
};
const relic_glacia = {
  id: "glacia",
  name: "서리여왕의 홀 「글라시아」",
  rarity: 5,
  crest: ["frost", "soul"],
  atk: 11,
  icon: "staff",
  col: "#b8e8ff",
  scale: 0.15,
  ref: _0x483f2b,
  desc: "스킬 사용 시 주위에 서리 폭발 (공격력 {v}%, 냉기). 빙결 대상 피해 +30%, 스킬 쿨타임 -8%",
  effects: [_0x14ab58, _0x3b3ebd]
};
const _0x48bc59 = {
  e: 0,
  chance: !0
};
const _0x4d073b = {
  k: "status",
  s: "poison",
  n: 2
};
const _0xeec47a = {
  on: "hit",
  chance: 0.3,
  icd: 0.1,
  do: [_0x4d073b]
};
const _0x54f14b = {
  vsPoison: 0.25,
  dotDmg: 0.3
};
const _0x1840ee = {
  stats: _0x54f14b
};
const relic_basilisk = {
  id: "basilisk",
  name: "독사왕의 이빨 「바실리스크」",
  rarity: 5,
  crest: ["venom", "shadow"],
  atk: 11,
  icon: "dagger",
  col: "#80e040",
  scale: 0.15,
  ref: _0x48bc59,
  desc: "공격 시 {v}% 확률로 독 2중첩. 중독 대상 피해 +25%, 지속 피해 +30%",
  effects: [_0xeec47a, _0x1840ee]
};
const _0xe36263 = {
  e: 0,
  dv: !0
};
const _0x5fa7a4 = {
  k: "shield",
  v: 0.08
};
const _0x20121f = {
  on: "hurt",
  icd: 2,
  do: [_0x5fa7a4]
};
const _0x76f72b = {
  hurtWave: 1.2
};
const _0x44f83c = {
  dmgTaken: -0.1
};
const _0x302cc4 = {
  flags: _0x76f72b,
  stats: _0x44f83c
};
const relic_ironheart = {
  id: "ironheart",
  name: "불굴의 성채 「아이언하트」",
  rarity: 5,
  crest: ["ward", "fury"],
  atk: 10,
  icon: "shield",
  col: "#d0c090",
  scale: 0.15,
  ref: _0xe36263,
  desc: "피격 시 보호막 {v}% (2초에 한 번). 피격 시 반격 파동 (공격력 120%), 받는 피해 -10%",
  effects: [_0x20121f, _0x302cc4]
};
const _0x1ead37 = {
  e: 0,
  dm: !0
};
const _0x47f466 = {
  spr: "crescent",
  spd: 6,
  life: 50,
  w: 16,
  h: 12,
  col: "#90ffe0",
  el: "phys",
  pierce: 4
};
const _0x44d916 = {
  k: "proj",
  p: _0x47f466,
  m: 1.4
};
const _0x8b0a53 = {
  on: "dash",
  icd: 0.5,
  do: [_0x44d916]
};
const _0x8a24cb = {
  aspd: 0.12,
  dashCdr: 0.15
};
const _0x6aa9b0 = {
  stats: _0x8a24cb
};
const relic_windripper = {
  id: "windripper",
  name: "질풍 쌍월도 「윈드리퍼」",
  rarity: 5,
  crest: ["swift", "storm"],
  atk: 11,
  icon: "sword",
  col: "#90ffe0",
  scale: 0.15,
  ref: _0x1ead37,
  desc: "대시할 때 바람 칼날 발사 (공격력 {v}%, 관통). 공격 속도 +12%, 대시 쿨타임 -15%",
  effects: [_0x8b0a53, _0x6aa9b0]
};
const _0x1e870d = {
  e: 0,
  dm: !0
};
const _0x55a326 = {
  k: "explode",
  r: 52,
  m: 1.6,
  el: "fire",
  st: "burn"
};
const _0x123b79 = {
  on: "finisher",
  do: [_0x55a326]
};
const _0x535adf = {
  k: "shield",
  v: 0.15
};
const _0x253494 = {
  on: "roomStart",
  do: [_0x535adf]
};
const _0x1c7a4b = {
  atk: 0.15
};
const _0x43d761 = {
  cond: "shielded",
  stats: _0x1c7a4b
};
const relic_hephais = {
  id: "hephais",
  name: "대장신의 망치 「헤파이스」",
  rarity: 5,
  crest: ["flame", "ward"],
  atk: 12,
  icon: "hammer",
  col: "#ff9040",
  scale: 0.15,
  ref: _0x1e870d,
  desc: "콤보 마지막 타격 시 화염 폭발 (공격력 {v}%, 화상). 방 입장 시 보호막 15%, 보호막이 있을 때 공격력 +15%",
  effects: [_0x123b79, _0x253494, _0x43d761]
};
const _0x7fae71 = {
  e: 0,
  chance: !0
};
const _0x13f76c = {
  spr: "arrow",
  spd: 6.5,
  life: 90,
  w: 12,
  h: 4,
  home: 0.3,
  col: "#90f050",
  el: "poison",
  st: "poison",
  pierce: 1
};
const _0x574491 = {
  k: "proj",
  p: _0x13f76c,
  m: 0.6,
  n: 3
};
const _0x2ee0a3 = {
  on: "hit",
  chance: 0.2,
  icd: 0.25,
  do: [_0x574491]
};
const _0x583a99 = {
  dotDmg: 0.3,
  vsPoison: 0.2
};
const _0xe0005 = {
  stats: _0x583a99
};
const _0x1f048e = {
  k: "status",
  s: "bleed"
};
const _0x35d733 = {
  on: "crit",
  do: [_0x1f048e]
};
const relic_aspis_bow = {
  id: "aspis_bow",
  name: "세 갈래 독궁 「아스피스」",
  rarity: 5,
  crest: ["venom", "blood"],
  atk: 11,
  icon: "bow",
  col: "#70d040",
  scale: 0.15,
  ref: _0x7fae71,
  desc: "공격 시 {v}% 확률로 추적 독화살 3발 (각 공격력 60%, 독). 지속 피해 +30%, 중독 대상 피해 +20%, 치명타 시 출혈",
  effects: [_0x2ee0a3, _0xe0005, _0x35d733]
};
const _0x146e52 = {
  e: 0,
  dm: !0
};
const _0x322311 = {
  k: "explode",
  r: 48,
  m: 1.8,
  el: "frost",
  st: "chill"
};
const _0x12d989 = {
  on: "finisher",
  do: [_0x322311]
};
const _0x51c71a = {
  vsFrozen: 0.3,
  finDmg: 0.2
};
const _0x286578 = {
  stats: _0x51c71a
};
const relic_niflheim = {
  id: "niflheim",
  name: "빙하창 「니플헤임」",
  rarity: 5,
  crest: ["frost", "fury"],
  atk: 12,
  icon: "spear",
  col: "#90d8ff",
  scale: 0.15,
  ref: _0x146e52,
  desc: "콤보 마지막 타격 시 빙하 폭발 (공격력 {v}%, 냉기). 빙결 대상 피해 +30%, 콤보 마지막 타 피해 +20%",
  effects: [_0x12d989, _0x286578]
};
const _0xa7228 = {
  e: 0,
  dm: !0
};
const _0x94c3aa = {
  k: "nova",
  r: 80,
  m: 2,
  el: "thunder",
  st: "shock"
};
const _0x7dc037 = {
  k: "shield",
  v: 0.05
};
const _0x4f88fd = {
  on: "interval",
  every: 5,
  do: [_0x94c3aa, _0x7dc037]
};
const _0x1a9974 = {
  dmgTaken: -0.1
};
const _0x475702 = {
  stats: _0x1a9974
};
const relic_toleon = {
  id: "toleon",
  name: "뇌명종 「톨레온」",
  rarity: 5,
  crest: ["ward", "storm"],
  atk: 10,
  icon: "orb",
  col: "#ffe080",
  scale: 0.15,
  ref: _0xa7228,
  desc: "5초마다 종소리 파동 (공격력 {v}%, 감전)과 보호막 5%. 받는 피해 -10%",
  effects: [_0x4f88fd, _0x475702]
};
const _0x2699dc = {
  e: 0,
  dm: !0
};
const _0x48e6c2 = {
  k: "strike",
  m: 2.2,
  el: "holy"
};
const _0x21dbad = {
  on: "hit",
  chance: 0.22,
  icd: 0.2,
  do: [_0x48e6c2]
};
const _0x25a69e = {
  atk: 0.2,
  vsShock: 0.25
};
const _0x2c3d86 = {
  stats: _0x25a69e
};
const relic_astra_blade = {
  id: "astra_blade",
  name: "천공검 「아스트라」",
  rarity: 6,
  crest: ["storm", "soul"],
  atk: 16,
  icon: "sword",
  col: "#9ad8ff",
  scale: 0.12,
  ref: _0x2699dc,
  desc: "공격 시 22% 확률로 별빛 낙뢰 (공격력 {v}%). 공격력 +20%, 감전 대상 피해 +25%",
  effects: [_0x21dbad, _0x2c3d86]
};
const _0x78a264 = {
  e: 0,
  dm: !0
};
const _0x3ec8f1 = {
  k: "explode",
  r: 64,
  m: 2.6,
  el: "shadow",
  st: "bleed"
};
const _0x39c6a2 = {
  on: "kill",
  do: [_0x3ec8f1]
};
const _0x178c57 = {
  crit: 0.12,
  critDmg: 0.4
};
const _0xf736f5 = {
  stats: _0x178c57
};
const relic_nox_scythe = {
  id: "nox_scythe",
  name: "심연의 대낫 「녹스」",
  rarity: 6,
  crest: ["shadow", "blood"],
  atk: 17,
  icon: "scythe",
  col: "#b070ff",
  scale: 0.12,
  ref: _0x78a264,
  desc: "처치 시 그 자리에 심연 폭발 (공격력 {v}%, 출혈). 치명타 확률 +12%, 치명타 피해 +40%",
  effects: [_0x39c6a2, _0xf736f5]
};
const _0x58a3ab = {
  e: 0,
  dm: !0
};
const _0x47a6f1 = {
  spr: "arrow",
  spd: 6,
  life: 90,
  w: 12,
  h: 4,
  home: 0.3,
  col: "#80ffd0",
  el: "thunder",
  pierce: 1
};
const _0x3e750a = {
  k: "proj",
  p: _0x47a6f1,
  m: 0.9,
  n: 6
};
const _0x3d8e34 = {
  on: "skill",
  do: [_0x3e750a]
};
const _0x37e6b8 = {
  aspd: 0.15,
  skillDmg: 0.25
};
const _0x1b5313 = {
  stats: _0x37e6b8
};
const relic_zephyr_bow = {
  id: "zephyr_bow",
  name: "폭풍궁 「제피로스」",
  rarity: 6,
  crest: ["swift", "storm"],
  atk: 15,
  icon: "bow",
  col: "#80ffd0",
  scale: 0.12,
  ref: _0x58a3ab,
  desc: "스킬 사용 시 추적 바람 화살 6발 (공격력 {v}%). 공격 속도 +15%, 스킬 피해 +25%",
  effects: [_0x3d8e34, _0x1b5313]
};
const _0x38ef59 = {
  e: 0,
  dm: !0
};
const _0x1678d1 = {
  k: "explode",
  r: 40,
  m: 2.2,
  el: "poison",
  st: "poison"
};
const _0x40b1f0 = {
  on: "hit",
  chance: 0.22,
  icd: 0.2,
  do: [_0x1678d1]
};
const _0x3d4ccd = {
  vsPoison: 0.3,
  dotDmg: 0.35
};
const _0x42c4b3 = {
  stats: _0x3d4ccd
};
const relic_jormungand = {
  id: "jormungand",
  name: "독룡 사슬채찍 「요르문간드」",
  rarity: 6,
  crest: ["venom", "shadow"],
  atk: 16,
  icon: "whip",
  col: "#60e080",
  scale: 0.12,
  ref: _0x38ef59,
  desc: "공격 시 22% 확률로 독룡의 숨결 폭발 (공격력 {v}%, 독). 중독 대상 피해 +30%, 지속 피해 +35%",
  effects: [_0x40b1f0, _0x42c4b3]
};
const _0x3a631c = {
  e: 0,
  dm: !0
};
const _0x42d940 = {
  k: "nova",
  r: 76,
  m: 2.2,
  el: "fire",
  st: "burn"
};
const _0x3f7145 = {
  k: "nova",
  r: 76,
  m: 1,
  el: "frost",
  st: "chill"
};
const _0x398d5f = {
  on: "skill",
  do: [_0x42d940, _0x3f7145]
};
const _0x262c2c = {
  skillDmg: 0.2,
  vsBurn: 0.25
};
const _0x5cb982 = {
  stats: _0x262c2c
};
const relic_ignivar = {
  id: "ignivar",
  name: "염빙 쌍검 「이그니바」",
  rarity: 6,
  crest: ["flame", "frost"],
  atk: 16,
  icon: "sword",
  col: "#ff8070",
  scale: 0.12,
  ref: _0x3a631c,
  desc: "스킬 사용 시 불꽃 폭발 (공격력 {v}%, 화상)과 서리 폭발 (공격력 100%, 냉기). 스킬 피해 +20%, 화상 대상 피해 +25%",
  effects: [_0x398d5f, _0x5cb982]
};
const _0x382977 = {
  e: 0,
  chance: !0
};
const _0xc69e8d = {
  spr: "starsword",
  spd: 6,
  life: 80,
  w: 14,
  h: 6,
  home: 0.35,
  col: "#a8b4ff",
  el: "holy",
  pierce: 1
};
const _0x543757 = {
  k: "proj",
  p: _0xc69e8d,
  m: 1.3,
  n: 2
};
const _0x22a5f9 = {
  on: "hit",
  chance: 0.2,
  icd: 0.25,
  do: [_0x543757]
};
const _0xa870c = {
  atk: 0.2,
  crit: 0.1
};
const _0x556371 = {
  stats: _0xa870c
};
const _0xccc67d = {
  critDmg: 0.35
};
const _0x1ae0de = {
  stats: _0xccc67d
};
const _0x3188ad = {
  target: "skill1",
  dmg: 0.3,
  count: 3
};
const relic_astrolabe = {
  id: "astrolabe",
  name: "성계검 「아스트롤라베」",
  rarity: 7,
  owner: "caelus",
  crest: ["soul", "storm"],
  atk: 24,
  icon: "sword",
  col: "#8a9aff",
  scale: 0.1,
  ref: _0x382977,
  desc: "공격 시 {v}% 확률로 별빛 장검 2자루가 적을 추적 (각 공격력 130%). 공격력 +20%, 치명타 확률 +10%",
  effects: [_0x22a5f9, _0x556371],
  sig: [_0x1ae0de],
  sigMods: [_0x3188ad],
  sigDesc: "치명타 피해 +35% · 성흔 결정창 피해 +30%, 파편 +3"
};
const _0x396b90 = {
  e: 0,
  dm: !0
};
const _0x5c41d7 = {
  k: "nova",
  r: 72,
  m: 2.4,
  el: "holy"
};
const _0x41017b = {
  on: "skill",
  do: [_0x5c41d7]
};
const _0x289360 = {
  skillDmg: 0.25,
  critDmg: 0.25
};
const _0x4cb287 = {
  stats: _0x289360
};
const _0x3af327 = {
  dmgTaken: -0.12
};
const _0x216d41 = {
  stats: _0x3af327
};
const _0x2db8bd = {
  target: "skill1",
  dmg: 0.35
};
const _0x4e17ff = {
  target: "skill2",
  cd: 3
};
const relic_astralis = {
  id: "astralis",
  name: "별의 홀 「아스트랄리스」",
  rarity: 7,
  owner: "astral",
  crest: ["soul", "ward"],
  atk: 22,
  icon: "staff",
  col: "#a890ff",
  scale: 0.1,
  ref: _0x396b90,
  desc: "스킬 사용 시 주위에 별빛 폭발 (공격력 {v}%). 스킬 피해 +25%, 치명타 피해 +25%",
  effects: [_0x41017b, _0x4cb287],
  sig: [_0x216d41],
  sigMods: [_0x2db8bd, _0x4e17ff],
  sigDesc: "받는 피해 -12% · 별의 낙하 피해 +35%, 성역의 결계 쿨타임 -3초"
};
const _0x2600ce = {
  e: 0,
  chance: !0
};
const _0x1e016c = {
  spr: "spear",
  spd: 7,
  life: 70,
  w: 16,
  h: 5,
  home: 0.3,
  col: "#ff3050",
  el: "fire",
  st: "burn",
  pierce: 1
};
const _0x1b78be = {
  k: "proj",
  p: _0x1e016c,
  m: 1.4
};
const _0x36adff = {
  on: "skillHit",
  chance: 0.3,
  icd: 0.2,
  do: [_0x1b78be]
};
const _0x45c0ab = {
  skillDmg: 0.2,
  vsBurn: 0.3
};
const _0x237f43 = {
  stats: _0x45c0ab
};
const _0x3eacf1 = {
  vsBurn: 0.2
};
const _0x32bc89 = {
  stats: _0x3eacf1
};
const _0x27ab52 = {
  target: "ult",
  dmg: 0.3,
  cd: 12
};
const relic_crimson_stigma = {
  id: "crimson_stigma",
  name: "성흔 보주 「크림슨 스티그마」",
  rarity: 7,
  owner: "ashen",
  crest: ["flame", "soul"],
  atk: 23,
  icon: "orb",
  col: "#ff3050",
  scale: 0.1,
  ref: _0x2600ce,
  desc: "스킬 적중 시 {v}% 확률로 붉은 창이 적을 추적 (공격력 140%, 화상). 스킬 피해 +20%, 화상 대상 피해 +30%",
  effects: [_0x36adff, _0x237f43],
  sig: [_0x32bc89],
  sigMods: [_0x27ab52],
  sigDesc: "화상 대상 피해 +20% · 잿불 성흔우 피해 +30%, 쿨타임 -12초"
};
const _0x520630 = {
  e: 0,
  chance: !0
};
const _0x6931ec = {
  k: "echo",
  m: 1.2
};
const _0x231067 = {
  on: "crit",
  chance: 0.35,
  icd: 0.15,
  do: [_0x6931ec]
};
const _0x43eb62 = {
  crit: 0.12,
  aspd: 0.12
};
const _0x51f4ef = {
  stats: _0x43eb62
};
const _0x1d98bd = {
  vsBleed: 0.25
};
const _0x2d7a6d = {
  stats: _0x1d98bd
};
const _0x49e831 = {
  target: "skill1",
  dmg: 0.3
};
const _0x52e280 = {
  target: "ult",
  cd: 10
};
const relic_selene_twin = {
  id: "selene_twin",
  name: "월백 쌍검 「셀레네」",
  rarity: 7,
  owner: "baekya",
  crest: ["shadow", "blood"],
  atk: 22,
  icon: "dagger",
  col: "#c8d8ff",
  scale: 0.1,
  ref: _0x520630,
  desc: "치명타 시 {v}% 확률로 잔상이 주변 적 최대 4명을 벤다 (공격력 120%). 치명타 확률 +12%, 공격 속도 +12%",
  effects: [_0x231067, _0x51f4ef],
  sig: [_0x2d7a6d],
  sigMods: [_0x49e831, _0x52e280],
  sigDesc: "출혈 대상 피해 +25% · 백야 난무 피해 +30%, 백야의 연무 쿨타임 -10초"
};
const _0x175cb8 = {
  e: 0,
  chance: !0
};
const _0x40a8bb = {
  spr: "arrow",
  spd: 7,
  life: 90,
  w: 12,
  h: 4,
  home: 0.35,
  col: "#80a0ff",
  el: "holy",
  pierce: 1
};
const _0x2c6316 = {
  k: "proj",
  p: _0x40a8bb,
  m: 1,
  n: 3
};
const _0x1b87fc = {
  on: "hit",
  chance: 0.18,
  icd: 0.25,
  do: [_0x2c6316]
};
const _0x59426d = {
  crit: 0.1,
  critDmg: 0.3
};
const _0x2f39f5 = {
  stats: _0x59426d
};
const _0x3dc8d1 = {
  aspd: 0.15
};
const _0x4f4631 = {
  stats: _0x3dc8d1
};
const _0x312a9b = {
  target: "skill2",
  dmg: 0.35
};
const _0x785a57 = {
  target: "ult",
  cd: 10
};
const relic_taegeuk_bow = {
  id: "taegeuk_bow",
  name: "태극궁 「천궁」",
  rarity: 7,
  owner: "hanbyeol",
  crest: ["swift", "storm"],
  atk: 22,
  icon: "bow",
  col: "#ff6080",
  scale: 0.1,
  ref: _0x175cb8,
  desc: "공격 시 {v}% 확률로 추적 별빛 화살 3발 (각 공격력 100%). 치명타 확률 +10%, 치명타 피해 +30%",
  effects: [_0x1b87fc, _0x2f39f5],
  sig: [_0x4f4631],
  sigMods: [_0x312a9b, _0x785a57],
  sigDesc: "공격 속도 +15% · 별을 쫓는 화살 피해 +35%, 태극 천궁 쿨타임 -10초"
};
const _0x16afa8 = {
  e: 0,
  dm: !0
};
const _0x18e279 = {
  k: "nova",
  r: 84,
  m: 2.6,
  el: "holy"
};
const _0x5be5c6 = {
  on: "interval",
  every: 5,
  do: [_0x18e279]
};
const _0xd7102e = {
  atk: 0.18,
  hpPct: 0.1
};
const _0x504de2 = {
  stats: _0xd7102e
};
const _0x2b96e7 = {
  allDmg: 0.12
};
const _0x13168b = {
  stats: _0x2b96e7
};
const _0x3240d4 = {
  target: "skill1",
  dmg: 0.35
};
const _0x4ea487 = {
  target: "skill2",
  cd: 3
};
const relic_helios_orb = {
  id: "helios_orb",
  name: "계승의 별구 「헬리오스」",
  rarity: 7,
  owner: "solen",
  crest: ["soul", "ward"],
  atk: 21,
  icon: "orb",
  col: "#9ab4ff",
  scale: 0.1,
  ref: _0x16afa8,
  desc: "5초마다 주위에 별빛 파동 (공격력 {v}%). 공격력 +18%, 최대 체력 +10%",
  effects: [_0x5be5c6, _0x504de2],
  sig: [_0x13168b],
  sigMods: [_0x3240d4, _0x4ea487],
  sigDesc: "모든 피해 +12% · 빛의 돌진 피해 +35%, 세계를 비추는 빛 쿨타임 -3초"
};
const _0x3de917 = {
  e: 0,
  dm: !0
};
const _0x254024 = {
  spr: "star",
  spd: 5.5,
  life: 90,
  w: 10,
  h: 10,
  home: 0.3,
  col: "#9ac8ff",
  el: "frost",
  st: "chill",
  pierce: 1
};
const _0x405ae7 = {
  k: "proj",
  p: _0x254024,
  m: 1.1,
  n: 4
};
const _0x2f6d0c = {
  on: "skill",
  do: [_0x405ae7]
};
const _0x2099d3 = {
  skillDmg: 0.3,
  cdr: 0.08
};
const _0x4fe582 = {
  stats: _0x2099d3
};
const _0x766e6d = {
  skillDmg: 0.1
};
const _0x519852 = {
  stats: _0x766e6d
};
const _0x4c9eb5 = {
  target: "skill1",
  dmg: 0.3
};
const _0x1ca4e5 = {
  target: "skill2",
  size: 0.25
};
const relic_odysseia = {
  id: "odysseia",
  name: "별바다 해도서 「오디세이아」",
  rarity: 7,
  owner: "lucas",
  crest: ["soul", "frost"],
  atk: 21,
  icon: "orb",
  col: "#7ab8ff",
  scale: 0.1,
  ref: _0x3de917,
  desc: "스킬 사용 시 추적 별빛 4발 (각 공격력 {v}%, 냉기). 스킬 피해 +30%, 스킬 쿨타임 -8%",
  effects: [_0x2f6d0c, _0x4fe582],
  sig: [_0x519852],
  sigMods: [_0x4c9eb5, _0x1ca4e5],
  sigDesc: "스킬 피해 +10% · 별바다의 고래 피해 +30%, 별의 해도 범위 +25%"
};
const _0x4957b9 = {
  e: 0,
  chance: !0
};
const _0x33ae8f = {
  k: "explode",
  r: 40,
  m: 1.6,
  el: "shadow"
};
const _0x524668 = {
  on: "hit",
  chance: 0.15,
  icd: 0.2,
  do: [_0x33ae8f]
};
const _0x1215be = {
  aspd: 0.15,
  crit: 0.1
};
const _0x386c88 = {
  stats: _0x1215be
};
const _0x479c30 = {
  critDmg: 0.3
};
const _0x5077cf = {
  stats: _0x479c30
};
const _0x5f4ee6 = {
  target: "skill1",
  dmg: 0.3
};
const _0x8d58d3 = {
  target: "skill2",
  cd: 2
};
const relic_oblivia = {
  id: "oblivia",
  name: "심연의 구체 「오블리비아」",
  rarity: 7,
  owner: "enoch",
  crest: ["shadow", "swift"],
  atk: 23,
  icon: "orb",
  col: "#8a6aff",
  scale: 0.1,
  ref: _0x4957b9,
  desc: "공격 시 {v}% 확률로 적 자리에 심연 폭발 (공격력 160%). 공격 속도 +15%, 치명타 확률 +10%",
  effects: [_0x524668, _0x386c88],
  sig: [_0x5077cf],
  sigMods: [_0x5f4ee6, _0x8d58d3],
  sigDesc: "치명타 피해 +30% · 심연 난도질 피해 +30%, 심연 돌파 쿨타임 -2초"
};
const _0x143fd5 = {
  e: 0,
  dm: !0
};
const _0x5df2cf = {
  k: "strike",
  m: 2.6,
  el: "holy"
};
const _0x20cb85 = {
  on: "finisher",
  do: [_0x5df2cf]
};
const _0x1d0dfe = {
  crit: 0.12,
  critDmg: 0.3
};
const _0x2051a6 = {
  stats: _0x1d0dfe
};
const _0x5c794b = {
  finDmg: 0.3
};
const _0x52eb46 = {
  stats: _0x5c794b
};
const _0x50c03e = {
  target: "skill1",
  dmg: 0.3
};
const _0x38fa1a = {
  target: "skill2",
  dmg: 0.3
};
const relic_luciferion = {
  id: "luciferion",
  name: "타락 성검 「루시페리온」",
  rarity: 7,
  owner: "luciel",
  crest: ["fury", "soul"],
  atk: 24,
  icon: "sword",
  col: "#ffd060",
  scale: 0.1,
  ref: _0x143fd5,
  desc: "콤보 마지막 타격 시 금빛 낙뢰 (공격력 {v}%). 치명타 확률 +12%, 치명타 피해 +30%",
  effects: [_0x20cb85, _0x2051a6],
  sig: [_0x52eb46],
  sigMods: [_0x50c03e, _0x38fa1a],
  sigDesc: "콤보 마지막 타 피해 +30% · 성역 가르기·타락한 검무 피해 +30%"
};
const _0x3f1063 = {
  e: 0,
  dm: !0
};
const _0x1e7ec2 = {
  k: "explode",
  r: 56,
  m: 2.4,
  el: "fire",
  st: "burn"
};
const _0x575f3d = {
  on: "finisher",
  do: [_0x1e7ec2]
};
const _0x12e7aa = {
  atk: 0.15,
  vsBurn: 0.25
};
const _0x57d768 = {
  stats: _0x12e7aa
};
const _0x3b1191 = {
  atk: 0.1
};
const _0x54ac58 = {
  stats: _0x3b1191
};
const _0xdaae5f = {
  target: "skill1",
  dmg: 0.35
};
const _0x26ff58 = {
  target: "skill2",
  cd: 4
};
const relic_solaris = {
  id: "solaris",
  name: "태양창 「솔라리스」",
  rarity: 7,
  owner: "aurel",
  crest: ["flame", "fury"],
  atk: 23,
  icon: "spear",
  col: "#ffa040",
  scale: 0.1,
  ref: _0x3f1063,
  desc: "콤보 마지막 타격 시 태양 폭발 (공격력 {v}%, 화상). 공격력 +15%, 화상 대상 피해 +25%",
  effects: [_0x575f3d, _0x57d768],
  sig: [_0x54ac58],
  sigMods: [_0xdaae5f, _0x26ff58],
  sigDesc: "공격력 +10% · 태양 강타 피해 +35%, 태양의 문장 쿨타임 -4초"
};
const _0x1308dc = {
  e: 0,
  dm: !0
};
const _0x586c86 = {
  k: "meteor",
  m: 2.6
};
const _0x1c00f3 = {
  on: "interval",
  every: 3.5,
  do: [_0x586c86]
};
const _0x4314eb = {
  skillDmg: 0.25,
  crit: 0.08
};
const _0x2ae2da = {
  stats: _0x4314eb
};
const _0x685436 = {
  skillDmg: 0.1
};
const _0x5e78d1 = {
  stats: _0x685436
};
const _0x41cc2a = {
  target: "skill2",
  count: 4
};
const _0x46f94d = {
  target: "skill1",
  dmg: 0.3
};
const relic_sirius = {
  id: "sirius",
  name: "예언의 지팡이 「시리우스」",
  rarity: 7,
  owner: "vega",
  crest: ["soul", "storm"],
  atk: 22,
  icon: "staff",
  col: "#80c8ff",
  scale: 0.1,
  ref: _0x1308dc,
  desc: "3.5초마다 가장 가까운 적에게 유성 낙하 (공격력 {v}%). 스킬 피해 +25%, 치명타 확률 +8%",
  effects: [_0x1c00f3, _0x2ae2da],
  sig: [_0x5e78d1],
  sigMods: [_0x41cc2a, _0x46f94d],
  sigDesc: "스킬 피해 +10% · 유성우 유성 +4개, 예언의 별 피해 +30%"
};
const _0x18f581 = {
  e: 0,
  chance: !0
};
const _0x45ee2c = {
  k: "status",
  s: "poison",
  n: 2
};
const _0x314543 = {
  on: "hit",
  chance: 0.3,
  icd: 0.1,
  do: [_0x45ee2c]
};
const _0x14299f = {
  vsPoison: 0.3,
  skillDmg: 0.2
};
const _0x3a37e = {
  stats: _0x14299f
};
const _0x32212e = {
  k: "heal",
  v: 0.015
};
const _0x4f7971 = {
  on: "kill",
  do: [_0x32212e]
};
const _0x3ff948 = {
  dotDmg: 0.3
};
const _0x860285 = {
  stats: _0x3ff948
};
const _0x28d9dd = {
  target: "skill1",
  dmg: 0.25,
  count: 2
};
const relic_blooming_rose = {
  id: "blooming_rose",
  name: "개화의 지팡이 「블루밍 로즈」",
  rarity: 7,
  owner: "flora",
  crest: ["venom", "soul"],
  atk: 21,
  icon: "staff",
  col: "#ff80d0",
  scale: 0.1,
  ref: _0x18f581,
  desc: "공격 시 {v}% 확률로 독 2중첩. 중독 대상 피해 +30%, 스킬 피해 +20%, 처치 시 체력 1.5% 회복",
  effects: [_0x314543, _0x3a37e, _0x4f7971],
  sig: [_0x860285],
  sigMods: [_0x28d9dd],
  sigDesc: "지속 피해 +30% · 피어나는 꽃 피해 +25%, 꽃 +2송이"
};
const _0xacbe61 = {
  e: 0,
  chance: !0
};
const _0x16f83c = {
  k: "explode",
  r: 52,
  m: 7,
  el: "holy"
};
const _0x16d3f8 = {
  on: "hit",
  chance: 0.07,
  icd: 0.3,
  do: [_0x16f83c]
};
const _0x4048f3 = {
  crit: 0.12,
  critDmg: 0.4
};
const _0x3b7d51 = {
  stats: _0x4048f3
};
const _0x17bca0 = {
  gold: 0.2
};
const _0x3c05e7 = {
  luck: 1
};
const _0x57cb58 = {
  stats: _0x17bca0,
  flags: _0x3c05e7
};
const _0x3d9b55 = {
  target: "skill1",
  dmg: 0.35
};
const _0x58fee4 = {
  target: "skill2",
  cd: 1
};
const relic_jackpot = {
  id: "jackpot",
  name: "행운의 룰렛 「잭팟」",
  rarity: 7,
  owner: "gambler",
  crest: ["swift", "fury"],
  atk: 22,
  icon: "orb",
  col: "#a0ff60",
  scale: 0.1,
  ref: _0xacbe61,
  desc: "공격 시 {v}% 확률로 잭팟 폭발 (공격력 700%). 치명타 확률 +12%, 치명타 피해 +40%",
  effects: [_0x16d3f8, _0x3b7d51],
  sig: [_0x57cb58],
  sigMods: [_0x3d9b55, _0x58fee4],
  sigDesc: "행운: 룰렛 잭팟 12%·대박 15%(평소 7%·10%), 도박 카드 대박 20%(평소 10%) · 금화 획득 +20% · 운명의 룰렛 피해 +35%, 도박 카드 쿨타임 -1초"
};
const _0xb8c6c7 = {
  e: 0,
  dm: !0
};
const _0xfb289b = {
  k: "nova",
  r: 60,
  m: 2,
  el: "holy"
};
const _0x319cf1 = {
  on: "dash",
  icd: 0.4,
  do: [_0xfb289b]
};
const _0x41230d = {
  dashDmg: 0.4,
  aspd: 0.12
};
const _0x45ce99 = {
  stats: _0x41230d
};
const _0x3d9623 = {
  crit: 0.1
};
const _0x1b7315 = {
  stats: _0x3d9623
};
const _0x1f383b = {
  target: "ult",
  dmg: 0.3,
  cd: 10
};
const relic_lumina = {
  id: "lumina",
  name: "광휘검 「루미나」",
  rarity: 7,
  owner: "lumien",
  crest: ["shadow", "swift"],
  atk: 24,
  icon: "sword",
  col: "#b0a0ff",
  scale: 0.1,
  ref: _0xb8c6c7,
  desc: "대시할 때 주위를 빛으로 벤다 (공격력 {v}%). 대시 공격 피해 +40%, 공격 속도 +12%",
  effects: [_0x319cf1, _0x45ce99],
  sig: [_0x1b7315],
  sigMods: [_0x1f383b],
  sigDesc: "치명타 확률 +10% · 광휘 일섬 피해 +30%, 쿨타임 -10초"
};
const _0x3a78c7 = {
  e: 0,
  chance: !0
};
const _0x4193dd = {
  k: "explode",
  r: 40,
  m: 1.8,
  el: "frost",
  st: "freeze"
};
const _0x840d26 = {
  on: "skillHit",
  chance: 0.25,
  icd: 0.3,
  do: [_0x4193dd]
};
const _0x91e12a = {
  skillDmg: 0.15,
  vsFrozen: 0.15
};
const _0x1311af = {
  stats: _0x91e12a
};
const _0x43e8e5 = {
  aspd: 0.12
};
const _0x4d8a51 = {
  stats: _0x43e8e5
};
const _0x411dfe = {
  target: "skill1",
  dmg: 0.35
};
const _0x1ec889 = {
  target: "skill2",
  cd: 2
};
const relic_glacies = {
  id: "glacies",
  name: "빙결창 「글라키에스」",
  rarity: 7,
  owner: "elin",
  crest: ["frost", "swift"],
  atk: 23,
  icon: "spear",
  col: "#9ad8ff",
  scale: 0.1,
  ref: _0x3a78c7,
  desc: "스킬이 적중하면 {v}% 확률로 그 자리에 얼음 가시가 터진다 (공격력 180%, 빙결). 스킬 피해 +15%, 빙결 대상 피해 +15%",
  effects: [_0x840d26, _0x1311af],
  sig: [_0x4d8a51],
  sigMods: [_0x411dfe, _0x1ec889],
  sigDesc: "공격 속도 +12% · 빙결 투창 피해 +35%, 서리 결계 쿨타임 -2초"
};
const _0x519801 = {
  e: 0,
  dm: !0
};
const _0x327625 = {
  k: "nova",
  r: 72,
  m: 2.4,
  el: "holy"
};
const _0x43dc56 = {
  on: "hurt",
  icd: 1,
  do: [_0x327625]
};
const _0x5b6ea3 = {
  hpPct: 0.2,
  dmgTaken: -0.12
};
const _0xa6eb21 = {
  stats: _0x5b6ea3
};
const _0xaab915 = {
  atk: 0.15
};
const _0x373ef6 = {
  stats: _0xaab915
};
const _0x3efbb4 = {
  target: "skill1",
  dmg: 0.4
};
const _0x5c9d3c = {
  target: "skill2",
  cd: 2
};
const relic_aegis = {
  id: "aegis",
  name: "광명의 건틀릿 「아이기스」",
  rarity: 7,
  owner: "jax",
  crest: ["ward", "fury"],
  atk: 20,
  icon: "glove",
  col: "#ffd070",
  scale: 0.1,
  ref: _0x519801,
  desc: "피격 시 빛의 반격 파동 (공격력 {v}%, 1초에 한 번). 최대 체력 +20%, 받는 피해 -12%",
  effects: [_0x43dc56, _0xa6eb21],
  sig: [_0x373ef6],
  sigMods: [_0x3efbb4, _0x5c9d3c],
  sigDesc: "공격력 +15% · 광명 강타 피해 +40%, 광명의 맹세 쿨타임 -2초"
};
const _0x29d694 = {
  e: 0,
  chance: !0
};
const _0x234bce = {
  k: "status",
  s: "bleed",
  n: 2
};
const _0x139e5a = {
  on: "hit",
  chance: 0.25,
  icd: 0.1,
  do: [_0x234bce]
};
const _0x5cd384 = {
  critDmg: 0.4,
  vsBleed: 0.25
};
const _0x4c1c91 = {
  stats: _0x5cd384
};
const _0x19c053 = {
  atk: 0.1
};
const _0x3eb5db = {
  stats: _0x19c053
};
const _0x18bd6e = {
  target: "ult",
  dmg: 0.35,
  cd: 2
};
const relic_eclipse = {
  id: "eclipse",
  name: "흑월도 「월식」",
  rarity: 7,
  owner: "heukwol",
  crest: ["blood", "fury"],
  atk: 24,
  icon: "sword",
  col: "#ff3040",
  scale: 0.1,
  ref: _0x29d694,
  desc: "공격 시 {v}% 확률로 출혈 2중첩. 치명타 피해 +40%, 출혈 대상 피해 +25%",
  effects: [_0x139e5a, _0x4c1c91],
  sig: [_0x3eb5db],
  sigMods: [_0x18bd6e],
  sigDesc: "공격력 +10% · 흑월 참 피해 +35%, 쿨타임 -2초"
};
const _0x38020b = {
  e: 0,
  dm: !0
};
const _0x1499a0 = {
  spr: "arrow",
  spd: 7,
  life: 90,
  w: 12,
  h: 4,
  home: 0.35,
  col: "#a0ff90",
  el: "phys",
  pierce: 1
};
const _0x2fda01 = {
  k: "proj",
  p: _0x1499a0,
  m: 1.2,
  n: 3
};
const _0x6636eb = {
  on: "interval",
  every: 3,
  do: [_0x2fda01]
};
const _0x26437e = {
  aspd: 0.15,
  crit: 0.08
};
const _0x187685 = {
  stats: _0x26437e
};
const _0xf11ecd = {
  critDmg: 0.25
};
const _0x301455 = {
  stats: _0xf11ecd
};
const _0x2cbef2 = {
  target: "skill1",
  dmg: 0.35
};
const _0x488d11 = {
  target: "ult",
  cd: 8
};
const relic_sylph = {
  id: "sylph",
  name: "바람잎 활 「실프」",
  rarity: 7,
  owner: "arien",
  crest: ["swift", "storm"],
  atk: 21,
  icon: "bow",
  col: "#90e070",
  scale: 0.1,
  ref: _0x38020b,
  desc: "3초마다 추적 바람 화살 3발 (각 공격력 {v}%). 공격 속도 +15%, 치명타 확률 +8%",
  effects: [_0x6636eb, _0x187685],
  sig: [_0x301455],
  sigMods: [_0x2cbef2, _0x488d11],
  sigDesc: "치명타 피해 +25% · 잎새 연사 피해 +35%, 바람의 인도 쿨타임 -8초"
};
const e0 = _0x4265f4, Ue = [relic_ember_heart, relic_pyre_candle, relic_cinder_boots, relic_phoenix_feather, relic_magma_core, relic_rusted_hook, relic_vampire_tooth, relic_crimson_chalice, relic_butcher_cleaver, relic_thorn_crown, relic_storm_rod, relic_thunder_drum, relic_static_cloak, relic_sky_eye, relic_smoke_bomb, relic_night_mask, relic_twin_shadow, relic_assassin_mark, relic_void_lantern, relic_oak_buckler, relic_saint_relic, relic_iron_will, relic_aegis_shard, relic_guardian_bell, relic_berserk_horn, relic_blood_rage, relic_war_paint, relic_titan_belt, relic_executioner, relic_wind_boots, relic_feather_cape, relic_relay_baton, relic_quicksilver, relic_hermes_coin, relic_soul_jar, relic_grimoire, relic_spirit_chain, relic_reaper_hourglass, relic_toad_venom, relic_plague_mask, relic_spore_sac, relic_hydra_fang, relic_frost_ring, relic_glacier_heart, relic_winter_bell, relic_eternal_ice, relic_gambler_dice, relic_golden_idol, relic_kings_seal, relic_soot_charm, relic_torch_stub, relic_bloody_bandage, relic_leech_tooth, relic_static_coil, relic_rain_drum, relic_dusk_hood, relic_cracked_mask, relic_iron_buckle, relic_oak_shield, relic_rage_horn, relic_brawler_wrap, relic_wind_feather, relic_relay_ribbon, relic_wisp_lantern, relic_prayer_book, relic_toad_jar, relic_moss_vial, relic_rime_shard, relic_snow_boot, relic_lucky_coin, relic_hunter_eye, relic_giant_bone, relic_red_potion, relic_slayer_chain, relic_storm_crown, relic_twin_daggers, relic_plague_chalice, relic_heaven_hourglass, relic_dragon_heart, relic_curse_contract, relic_curse_crown, relic_curse_dagger, relic_curse_mask, relic_curse_ring, relic_curse_coin, relic_curse_heart, relic_curse_oath, relic_ash_ribbon, relic_spark_flint, relic_scab_charm, relic_thorn_ring, relic_copper_wire, relic_thunder_seed, relic_shade_cloth, relic_night_eye, relic_wooden_shield, relic_guard_bell, relic_battle_paint, relic_broken_tooth, relic_sandal, relic_hummingbird, relic_spirit_urn, relic_incense, relic_spider_fang, relic_rot_mushroom, relic_ice_pick, relic_snow_globe, relic_tin_soldier, relic_fox_tail, relic_old_compass, relic_beggar_cup, relic_lucky_clover, relic_candle_stub, relic_leech_jar, relic_storm_bottle, relic_relay_glove, relic_frost_tea, relic_phoenix_ash, relic_bloodhound, relic_tempest_coin, relic_void_lens, relic_iron_resolve, relic_wind_harp, relic_plague_bell, relic_glacier_crown, relic_star_heart, relic_reaper_sand], s0 = Object.fromEntries(Ue.map(_0x146a3f => [_0x146a3f.id, _0x146a3f])), ve = [relic_rusty_blade, relic_hunter_knife, relic_ember_club, relic_thorn_whip, relic_viper_fang, relic_gale_gloves, relic_grave_shovel, relic_tower_sword, relic_frost_awl, relic_ash_hatchet, relic_leech_sickle, relic_spark_rod, relic_dusk_kunai, relic_knot_buckler, relic_brawler_knuckle, relic_feather_dart, relic_vigil_candle, relic_swamp_flail, relic_icicle_bow, relic_miner_pick, relic_kite_glaive, relic_beast_whip, relic_tin_hourglass, relic_venom_blowgun, relic_rime_chakram, relic_ember_fan, relic_oak_tonfa, relic_bone_cleaver, relic_venom_sling, relic_spiked_gauntlet, relic_sparrow_rang, relic_quake_blade, relic_blood_thirst, relic_thunder_pike, relic_shadow_fang, relic_relay_token, relic_berserker_axe, relic_soul_reaper, relic_pyre_staff, relic_rime_saber, relic_cinder_bow, relic_hemo_lance, relic_thunder_disc, relic_night_twins, relic_bastion_mace, relic_riposte_blade, relic_warmonger_axe, relic_gust_pike, relic_wisp_lantern_7672fb, relic_plague_censer, relic_glacier_maul, relic_chain_sickle, relic_icewall_shield, relic_venom_crossbow, relic_forge_gauntlet, relic_crimson_tome, relic_tundra_lance, relic_venom_claws, relic_eternis, relic_storm_heart, relic_volcania, relic_chrono_glass, relic_blood_sovereign, relic_chaos_star, relic_glacia, relic_basilisk, relic_ironheart, relic_windripper, relic_hephais, relic_aspis_bow, relic_niflheim, relic_toleon, relic_astra_blade, relic_nox_scythe, relic_zephyr_bow, relic_jormungand, relic_ignivar, relic_astrolabe, relic_astralis, relic_crimson_stigma, relic_selene_twin, relic_taegeuk_bow, relic_helios_orb, relic_odysseia, relic_oblivia, relic_luciferion, relic_solaris, relic_sirius, relic_blooming_rose, relic_jackpot, relic_lumina, relic_glacies, relic_aegis, relic_eclipse, relic_sylph], Ea = Object.fromEntries(ve.map(_0x348f84 => [_0x348f84.id, _0x348f84])), Ra = (_0x2dde97, _0x50a760) => 1 + _0x2dde97.scale * (_0x50a760 - 1);
classifyRelics(Ue);
function Ta(_0x1e19f9, _0x4f1bf1) {
  const _0x6f85c5 = {
    bUSzY: function (_0x6b6d60, _0x1410a1) {
      return _0x6b6d60 === _0x1410a1;
    }
  };
  const _0x47bd1d = _0x6f85c5, _0x3abd6a = Ra(_0x1e19f9, _0x4f1bf1);
  if (_0x3abd6a === 1) return _0x1e19f9.effects;
  const _0x409b36 = _0x1e19f9.ref;
  return _0x1e19f9.effects.map((_0x1cd37b, _0x14ccda) => {
    if (_0x14ccda !== _0x409b36.e) return _0x1cd37b;
    const _0xb79a90 = {
      ..._0x1cd37b,
      "stats": _0x1cd37b.stats && ({
        ..._0x1cd37b.stats
      }),
      "flags": _0x1cd37b.flags && ({
        ..._0x1cd37b.flags
      }),
      "do": _0x1cd37b.do?.map(_0x49d1d2 => ({
        ..._0x49d1d2
      }))
    };
    (_0x409b36.stat && _0xb79a90.stats && (_0xb79a90.stats[_0x409b36.stat] = (_0xb79a90.stats[_0x409b36.stat] ?? 0) * _0x3abd6a), _0x409b36.chance && _0xb79a90.chance !== void 0 && (_0xb79a90.chance = Math.min(1, _0xb79a90.chance * _0x3abd6a)), _0x409b36.flag && _0xb79a90.flags && (_0xb79a90.flags[_0x409b36.flag] = (_0xb79a90.flags[_0x409b36.flag] ?? 0) * _0x3abd6a));
    const _0x2a1b3e = _0xb79a90.do?.[0];
    return (_0x2a1b3e && _0x409b36.dm && typeof _0x2a1b3e.m == "number" && (_0x2a1b3e.m *= _0x3abd6a), _0x2a1b3e && _0x409b36.dv && typeof _0x2a1b3e.v == "number" && (_0x2a1b3e.v *= _0x3abd6a), _0x2a1b3e && _0x409b36.buff && _0x2a1b3e.k === "buff" && (_0x2a1b3e.stats = {
      ..._0x2a1b3e.stats,
      [_0x409b36.buff]: (_0x2a1b3e.stats?.[_0x409b36.buff] ?? 0) * _0x3abd6a
    }), _0xb79a90);
  });
}
function a0(_0x12f0f9, _0x29306b, _0x420ab7 = !0) {
  const _0x147c2c = {
    bSeGe: function (_0x13b13e, _0x3e2233) {
      return _0x13b13e * _0x3e2233;
    }
  };
  const _0x27b743 = _0x147c2c;
  const _0x4b2f1e = Ta(_0x12f0f9, _0x29306b)[_0x12f0f9.ref.e], _0x178aec = _0x12f0f9.ref, _0x4aa4e1 = _0x4b2f1e.do?.[0];
  let _0x3d658f = 0;
  _0x178aec.stat ? _0x3d658f = _0x4b2f1e.stats?.[_0x178aec.stat] ?? 0 : _0x178aec.chance ? _0x3d658f = _0x4b2f1e.chance ?? 0 : _0x178aec.flag ? _0x3d658f = _0x4b2f1e.flags?.[_0x178aec.flag] ?? 0 : _0x178aec.dm ? _0x3d658f = _0x4aa4e1?.m ?? 0 : _0x178aec.dv ? _0x3d658f = _0x4aa4e1?.v ?? 0 : _0x178aec.buff && (_0x3d658f = _0x4aa4e1?.stats?.[_0x178aec.buff] ?? 0);
  const _0x1c65bf = _0x178aec.sec ? Math.abs(_0x3d658f).toFixed(1) : String(Math.round(Math.abs(_0x3d658f) * 100)), _0x58560e = _0x12f0f9.desc.replace("{v}", _0x1c65bf);
  return !_0x420ab7 || !_0x12f0f9.owner || !_0x12f0f9.sigDesc ? _0x58560e : _0x58560e + " · 전용(" + (T[_0x12f0f9.owner]?.name ?? _0x12f0f9.owner) + "): " + _0x12f0f9.sigDesc;
}
const _0xf5a66f = {
  hp: 380,
  atk: 250
};
const _0x9d9062 = {
  id: 22,
  name: "번지는 첫 줄",
  sub: "백지 위에 첫 줄을 새겨라",
  route: [[211], [212], [213], [214], [215], [216]],
  finalStage: 6,
  power: _0xf5a66f,
  intro: ["잉크는 다시 흘렀다. 그리고 그대 앞에 놓인 것은 — 아무것도 쓰이지 않은 책 한 권.", "표지에는 제목 대신 한 줄만 있었다. 「이 책은 계약자가 쓴다.」", "", "그대가 첫 글자를 적자, 백지가 몸을 떨었다.", "쓰이지 않으려는 페이지들이 잉크를 밀어내고, 번진 잉크는 독한 안개가 되어 바닥부터 차올랐다.", "", "백지의 문지기 인시피트가 첫 줄 앞에 서 있다.", "「아무도 너에게 이 책을 맡기지 않았다. 첫 줄은 내가 지킨다.」", "", "계약자여, 제4권을 열어라. 이번에는 남이 쓴 이야기가 아니라, 그대가 쓰는 이야기다."],
  ending: ["인시피트가 무너지자 번진 잉크가 가라앉고, 백지 맨 위에 그대의 첫 줄이 또렷하게 남았다.", "\"…첫 줄은 썼구나. 하지만 둘째 줄은 쓰는 자를 망설이게 하지.\"", "", "다음 페이지를 넘기자 문장들이 깜빡이기 시작했다. 쓰였다가, 지워졌다가, 다시 쓰였다.", "", "— 제4권 스토리 1 끝. 망설이는 문장 쪽으로."],
  cards: ["잉크가 번진 들판", "젖은 원고의 늪", "먹물 안개 숲", "흘러내린 문단 계곡", "잉크병 동굴", "첫 줄의 제단"]
};
const _0x501736 = {
  hp: 494,
  atk: 325
};
const _0x48460b = {
  id: 23,
  name: "깜빡이는 문장",
  sub: "망설이는 문장 위를 건너라",
  route: [[221], [222], [223], [224], [225], [226]],
  finalStage: 6,
  power: _0x501736,
  intro: ["둘째 장. 쓰는 손이 망설일 때마다 문장이 깜빡인다.", "발 디딘 문장이 박자에 맞춰 사라지고, 다시 나타난다.", "", "박자를 읽어라. 깜빡이는 발판은 사라지기 직전 하얗게 떨린다.", "쉼표 정원에서는 세계가 좌우로 뒤집히기도 한다 — 보이는 대로 누르면 된다.", "", "「미완의 왕」 엘립시스는 모든 문장을 말줄임표로 끝내 버린다.", "그의 문장 속에서는, 어떤 이야기도 끝나지 못한다.", "", "계약자여, 깜빡이는 문장 위를 끝까지 건너라."],
  ending: ["엘립시스의 말줄임표가 마침표 하나로 닫혔다.", "\"…끝을 맺는구나. 망설이지 않고.\"", "", "마침표가 찍힌 자리에 거울이 생겼다. 그 안에서 그대의 원고가 거꾸로 쓰이고 있었다.", "", "— 제4권 스토리 2 끝. 뒤집힌 원고 속으로."],
  cards: ["깜빡이는 다리", "쉼표 정원", "커서의 탑", "지워졌다 쓰인 거리", "망설임의 하늘섬", "미완성 문장의 왕좌"]
};
const _0x22f574 = {
  hp: 642.2,
  atk: 422.5
};
const _0x5df0fa = {
  id: 24,
  name: "거울 원고",
  sub: "뒤집힌 원고 속에서 길을 읽어라",
  route: [[231], [232], [233], [234], [235], [236]],
  finalStage: 6,
  power: _0x22f574,
  intro: ["거울 원고. 그대가 쓴 모든 문장이 반대 방향으로 비친다.", "", "보랏빛 거울선이 화면을 가로지르면, 세계가 좌우로 뒤집힌다.", "걱정하지 마라 — 조작도 함께 뒤집혀, 화면에서 오른쪽은 언제나 오른쪽이다.", "눈을 믿어라. 뒤집힌 세계에서 헷갈리는 것은 손이 아니라 기억이다.", "", "「거울 저자」 안티그라프는 그대의 원고를 베껴 쓴다.", "그대가 쓴 스킬마저 거꾸로 되돌려 보낸다.", "", "계약자여, 거울 속 원고가 아니라 그대의 원고를 끝까지 지켜라."],
  ending: ["안티그라프의 거울 글씨가 한 획씩 바로 쓰이며 풀려 나갔다.", "\"베낀 문장은… 결국 원본을 이길 수 없군.\"", "", "그때, 하늘 높은 곳에서 종이 울렸다. 커다란 시곗바늘이 원고 위로 그림자를 드리웠다.", "「마감까지 남은 시간」이라는 글자가, 페이지마다 새겨지기 시작했다.", "", "— 제4권 스토리 3 끝. 마감이 다가온다."],
  cards: ["거꾸로 쓴 편지의 숲", "좌우가 바뀐 도서관", "반사 호수", "비대칭 성채", "거울 원고의 별", "뒤집힌 서명의 방"]
};
const _0x1baeb2 = {
  hp: 834.9,
  atk: 549.3
};
const _0x4b563e = {
  id: 25,
  name: "마감의 결계",
  sub: "마감이 닫히기 전에 써 내려가라",
  route: [[241], [242], [243], [244], [245], [246]],
  finalStage: 6,
  power: _0x1baeb2,
  intro: ["마감(磨勘). 쓰는 자에게 가장 무서운 두 글자.", "", "이 장의 방에는 결계 시계가 걸려 있다. 제한 시간 안에 적을 모두 쓰러뜨려라.", "시간이 다하면 보랏빛 결계가 닫히며, 방을 정리할 때까지 체력을 조금씩 깎는다.", "", "「마감의 판관」 테르미나는 원고를 심판한다.", "그녀의 판결은 두 번 연달아 내려진다 — 한 번 피했다고 안심하지 마라.", "그리고 그녀를 끝까지 몰아붙이면, 판관의 몸은 둘로 갈라진다.", "", "계약자여, 마감 안에 이 장을 끝내라."],
  ending: ["갈라졌던 테르미나의 두 저울이 함께 기울며 꺾였다.", "\"…기한은 지켰다. 원고를 받아 주마.\"", "", "그러나 원고를 넘기는 순간, 책장 아래에서 검은 물결이 일어났다.", "쓰고 버린 모든 초고가 잉크 해일이 되어, 그대를 덮치려 밀려오고 있었다.", "", "— 제4권 스토리 4 끝. 달려라."],
  cards: ["초침 광장", "모래 원고실", "마감 종탑", "잠들지 않는 인쇄소", "마지막 시곗바늘의 하늘", "마감의 법정"]
};
const _0x5f0836 = {
  hp: 1085.3,
  atk: 714
};
const _0x3cf725 = {
  id: 26,
  name: "쫓아오는 잉크",
  sub: "밀려오는 잉크 해일보다 빨리 달려라",
  route: [[251], [252], [253], [254], [255], [256]],
  finalStage: 6,
  power: _0x5f0836,
  intro: ["버려진 초고들이 하나의 물결이 되었다. 검은 잉크의 벽이 방을 가로질러 밀려온다.", "", "잉크 벽은 한쪽 끝에서 다른 쪽 끝까지 쓸고 지나간다.", "앞으로 달려라 — 방의 끝에는 금빛으로 빛나는 피난처가 남는다.", "벽에 닿으면 크게 다치고 앞으로 밀려난다.", "", "「잉크 해일의 어미」 디루비아는 모든 초고를 삼켜 자라났다.", "그녀의 하늘에서는 운석이 그림자를 먼저 떨어뜨린다. 그림자를 보고 피하라.", "", "계약자여, 해일보다 먼저 이 장의 끝에 닿아라."],
  ending: ["디루비아의 두 물결이 서로 부딪쳐 부서지자, 잉크 해일이 잔잔한 강이 되었다.", "\"버린 원고도… 너의 것이었는데.\"", "", "강물에 비친 그대의 손이 흐려졌다. 손끝부터 투명하게, 지워지고 있었다.", "누군가 이 책에서 「작가」를 지우고 있었다.", "", "— 제4권 스토리 5 끝. 지워지는 손을 붙잡아라."],
  cards: ["잉크 해일의 해안", "검은 강 하구", "쓰러지는 책장 회랑", "잉크 폭포 절벽", "소용돌이치는 잉크 하늘", "해일의 심장"]
};
const _0x2e41b1 = {
  hp: 1410.9,
  atk: 928.2
};
const _0xb6b9cf = {
  id: 27,
  name: "지워지는 작가",
  sub: "보이지 않는 적의 그림자를 읽어라",
  route: [[261], [262], [263], [264], [265], [266]],
  finalStage: 6,
  power: _0x2e41b1,
  intro: ["작가가 지워지면, 이야기는 누구의 것도 아니게 된다.", "", "이 장의 적들은 모습을 감춘다. 그러나 그림자와 발자국까지 지울 수는 없다.", "발밑의 그림자가 붉게 번쩍이면 — 보이지 않는 칼날이 온다.", "", "「지워진 작가」 아우토르는 한때 이 책을 쓰던 손이었다.", "그는 그대를 지우고, 빈 의자에 다시 앉으려 한다.", "그대가 쓴 스킬을 베껴 그대에게 돌려주고, 거울 속 쌍둥이와 자리를 바꾸며.", "", "계약자여, 지워지지 않는 손으로 펜을 쥐어라."],
  ending: ["둘로 갈라진 아우토르가 함께 무너지며, 빈 의자 위에 펜 한 자루를 남겼다.", "\"…이 의자는, 이제 네 것이다.\"", "", "펜을 집어 들자, 책의 마지막 장이 저절로 넘어갔다.", "그곳에는 아무것도 없었다. 완벽한 백지 — 그리고 그 백지를 다스리는 자가 기다리고 있었다.", "", "— 제4권 스토리 6 끝. 백지의 서로."],
  cards: ["투명 잉크의 방", "그림자만 남은 거리", "발자국 서고", "지우개 사막", "사라지는 별자리", "작가의 빈 의자"]
};
const _0x146b3e = {
  hp: 1834.2,
  atk: 1206.7
};
const _0x12fa56 = {
  id: 28,
  name: "백지의 서",
  sub: "백지의 주인에게서 마지막 장을 되찾아라",
  route: [[271], [272], [273], [274], [275], [276]],
  finalStage: 6,
  power: _0x146b3e,
  intro: ["마지막 장. 한 글자도 없는 완벽한 백지.", "", "「백지의 주인」 블랑카. 쓰이지 않은 모든 이야기의 주인.", "\"이야기는 쓰이는 순간 끝을 향한다. 쓰이지 않으면, 영원히 끝나지 않지.\"", "", "그녀는 번지는 잉크와 깜빡이는 문장, 뒤집힌 거울과 마감의 결계, 잉크 해일과 지워지는 손을", "모두 한꺼번에 그대에게 되돌린다.", "", "계약자여, 백지 위에 마지막 장을 써라. 그대의 이름으로, 그대의 끝을."],
  ending: ["블랑카의 두 몸이 한 장의 종이처럼 접혀 사라지고, 백지 위에 마지막 문장이 떠올랐다.", "\"…좋아. 끝이 있는 이야기도, 나쁘지 않네.\"", "", "책이 덮였다. 표지에는 제목이 새로 쓰여 있었다.", "「백지의 서 — 지은이: 계약자」", "", "— 제4권, 끝.", "그대가 쓴 이야기는 끝났다. 그러나 펜은, 아직 그대의 손에 있다."],
  cards: ["번짐의 메아리", "깜빡임의 메아리", "거울의 메아리", "마감의 메아리", "해일의 메아리", "백지의 서 — 마지막 장"]
};
const _0x3e6da3 = {
  hp: 1,
  atk: 1
};
const _0x324661 = {
  id: 1,
  name: "사자의 계약",
  sub: "끝없는 왕을 쓰러뜨려라",
  route: [[1], [2, 5], [3], [6], [4], [7]],
  finalStage: 5,
  trueStage: 6,
  power: _0x3e6da3,
  intro: ["한때 빛나던 왕국 아스펠은 하룻밤 사이에 무너졌다.", "왕은 죽음을 거부했고, 스스로 「끝없는 왕」이 되어", "왕국의 모든 혼을 지하 묘소에 가두었다.", "", "그대는 계약자.", "계약석으로 쓰러진 영웅들의 혼을 불러내 계약하고,", "그들의 몸을 빌려 싸울 수 있는 유일한 자.", "", "계약의 성소에서 영웅을 부르고, 묘소의 가장 깊은 곳으로 내려가라.", "끝없는 왕에게 끝을 선사하라."],
  ending: ["끝없는 왕의 왕관이 바닥에 떨어져 굴렀다.", "갇혀 있던 혼들이 하나둘 묘소를 빠져나가 밤하늘로 올라갔다.", "", "그런데 — 하늘로 오른 혼들의 빛이, 어느 순간 꺼지기 시작했다.", "별자리 하나가 잿빛으로 물들며 그 빛을 삼키고 있었다.", "", "계약은 아직 끝나지 않았다."],
  cards: ["계약자여, 끝없는 왕을 쓰러뜨려라", "더 깊은 곳으로", "더 깊은 곳으로", "더 깊은 곳으로", "왕좌가 가깝다", "왕이 삼킨 혼들이 잠든 곳 — 진실의 끝으로"]
};
const _0x151049 = {
  hp: 1.5,
  atk: 1.3
};
const _0x57ef3b = {
  id: 2,
  name: "잿빛 성좌",
  sub: "혼을 삼키는 별을 꺼뜨려라",
  route: [[11], [12], [13], [14], [15], [16]],
  finalStage: 6,
  power: _0x151049,
  intro: ["왕이 쓰러진 밤, 풀려난 혼들은 별이 되기 위해 하늘로 올랐다.", "그러나 하늘 끝에는 이미 죽은 별 하나가 기다리고 있었다.", "", "「잿빛 성좌단」 — 꺼진 별을 신으로 섬기는 자들.", "그들은 하늘로 오르는 혼을 붙잡아 죽은 별의 심장에 던져 넣고 있다.", "", "잿더미 순례길에서 시작해, 거꾸로 선 종탑과 별의 광맥을 지나", "구름 위 정원과 천문대를 넘어 — 꺼진 별의 심장으로.", "", "계약자여, 혼들이 별이 될 수 있도록 길을 열어라."],
  ending: ["꺼진 별의 심장이 마지막으로 한 번 고동치고 — 멈췄다.", "붙잡혀 있던 혼들이 빛의 강이 되어 하늘을 가로질렀다.", "", "그 빛 아래, 멀리 동쪽 대지가 붉게 물들어 있었다.", "별이 꺼진 틈을 타 깨어난 핏빛 왕관이, 산 자의 피를 부르고 있었다."],
  cards: ["잿빛 성좌단의 순례길", "종소리가 거꾸로 울린다", "별빛이 광맥이 되어 흐르는 곳", "구름 위, 아무도 가꾸지 않는 정원", "성좌를 읽는 자들의 탑", "꺼진 별의 심장 — 성좌의 끝"]
};
const _0x4368ef = {
  hp: 2,
  atk: 1.6
};
const _0xbca677 = {
  id: 3,
  name: "핏빛 왕관",
  sub: "피의 여제의 대관식을 막아라",
  route: [[21], [22], [23], [24], [25], [26]],
  finalStage: 6,
  power: _0x4368ef,
  intro: ["동쪽의 옛 제국 베르미온. 백 년 전 피의 저주로 멸망한 땅.", "별이 꺼지던 밤, 그 땅의 무덤에서 핏빛 왕관이 다시 빛났다.", "", "「핏빛 여제」 카르밀라는 산 자와 죽은 자의 피를 모두 모아", "스스로에게 영원한 왕관을 씌우려 한다.", "", "전쟁터의 진흙, 핏빛 포도원, 쇠사슬 감옥,", "붉은 대성당과 달 없는 숲을 지나 — 핏빛 왕좌로.", "", "계약자여, 대관식의 종이 울리기 전에."],
  ending: ["핏빛 왕관이 산산이 부서지며 붉은 비가 그쳤다.", "베르미온의 하늘에 백 년 만에 처음으로 해가 떴다.", "", "그러나 부서진 왕관의 파편 하나하나에 같은 문양이 새겨져 있었다.", "그대가 손등에 지닌 것과 똑같은 — 계약의 문장이.", "", "모든 계약은, 어디에서 시작되었는가."],
  cards: ["진흙 속에 끝나지 않은 전쟁", "포도 대신 피가 익어 가는 곳", "쇠사슬이 노래하는 감옥", "붉은 성가가 울리는 대성당", "달이 사라진 숲, 늑대의 시간", "핏빛 왕좌 — 대관식의 밤"]
};
const _0xe1bb93 = {
  hp: 2.6,
  atk: 1.9
};
const _0x21f180 = {
  id: 4,
  name: "태초의 계약",
  sub: "최초의 계약자를 만나라",
  route: [[31], [32], [33], [34], [35], [36]],
  finalStage: 6,
  power: _0xe1bb93,
  intro: ["모든 계약에는 같은 문장이 새겨져 있다.", "그 문장을 처음 그린 자 — 「최초의 계약자」 아르케.", "", "그는 세계가 처음 생겨날 때 혼과 육신을 나누는 계약을 맺었고,", "그 대가로 이 세계의 모든 죽음을 자신에게 묶어 두었다.", "", "왕도, 별도, 여제도 — 모두 그의 계약에서 흘러나온 그림자였다.", "", "태초의 해안에서 시작해 시간의 폐허를 지나 계약의 근원으로.", "계약자여, 마지막 계약을 끝낼 때다."],
  ending: ["최초의 계약자가 웃었다. \"드디어, 나를 끝낼 자가 왔구나.\"", "세계를 묶고 있던 첫 번째 계약이 풀려 나갔다.", "", "혼은 혼의 자리로, 육신은 육신의 자리로.", "그대의 손등에서도 계약의 문장이 조용히 사라졌다.", "", "그런데 계약이 풀린 그 밤, 하늘에 칼자국 같은 균열이 그어졌다.", "사라지던 아르케가 중얼거렸다. \"…바깥에서, 보고 있었군.\"", "", "— 그대가 부르면, 영웅들은 언제든 다시 대답할 것이다."],
  cards: ["세계가 처음 물에서 일어난 해안", "돌이 된 숲, 기억하는 나무", "번개가 하늘을 꿰매는 첨탑", "거울 속의 또 다른 계약자", "시간이 무너져 내린 폐허", "계약의 근원 — 모든 것의 처음"]
};
const _0x290b52 = {
  hp: 3.2,
  atk: 2.2
};
const _0x97e538 = {
  id: 5,
  name: "찢어진 하늘",
  sub: "하늘의 상처를 꿰매라",
  route: [[41], [42], [43], [44], [45], [46]],
  finalStage: 6,
  power: _0x290b52,
  intro: ["첫 번째 계약이 풀린 밤, 하늘이 찢어졌다.", "균열 너머에서 쏟아진 폭풍이 하늘 항구를 삼키고,", "날개 가진 것들은 모두 미쳐 날뛰기 시작했다.", "", "「하늘을 찢는 자」 세베르 — 계약이 지키던 세계의 껍질을", "안쪽에서부터 베어 가르는 칼날.", "", "손등의 문장은 사라졌지만, 영웅들은 여전히 그대의 부름에 대답한다.", "", "떠도는 항구와 거꾸로 흐르는 폭포, 고래의 뼈와 깃털 사원,", "천공의 회랑을 지나 — 하늘의 상처로.", "계약자여, 찢어진 하늘을 꿰매라."],
  ending: ["둘로 갈라졌던 세베르가 함께 무너지며, 하늘의 상처가 천천히 아물었다.", "폭풍이 걷히고, 떠도는 항구의 종이 다시 울렸다.", "", "그러나 균열이 닫히기 직전, 그 틈으로 그대는 보았다.", "하늘 너머에 끝없이 펼쳐진 검은 바다를.", "그리고 그 바다 위에서 이쪽을 바라보던, 수많은 눈을.", "", "세베르는 칼이었을 뿐이다. 칼을 쥔 손은 — 바다 저편에 있다."],
  cards: ["폭풍에 닻을 끊긴 항구", "물이 하늘로 떨어지는 곳", "폭풍 고래가 잠든 뼈의 골짜기", "날개 잃은 자들의 기도", "폭풍의 사도가 지키는 하늘길", "하늘의 상처 — 세계의 껍질이 갈라진 곳"]
};
const _0x3f88f2 = {
  hp: 3.9,
  atk: 2.5
};
const _0x4d0ac4 = {
  id: 6,
  name: "바깥의 바다",
  sub: "세계 너머의 전령을 막아라",
  route: [[51], [52], [53], [54], [55], [56]],
  finalStage: 6,
  power: _0x3f88f2,
  intro: ["세계는 끝없는 검은 바다 위에 떠 있는 한 방울의 빛이었다.", "첫 번째 계약은 그 빛을 감싼 껍질이었고 — 이제 그 껍질은 없다.", "", "바다가 세계의 가장자리로 스며들기 시작했다.", "등대는 잠기고, 무덤은 산호가 되고, 도시는 거꾸로 뒤집혔다.", "", "「바깥의 전령」 이스카 — 바다 저편의 무언가가 보낸 목소리.", "그는 이 세계를 바다로 되돌리러 왔다고 말한다.", "", "잠긴 등대와 산호 묘지, 침묵의 해구와 거꾸로 선 도시,", "검은 오로라를 지나 — 세계의 바깥으로 열린 문 앞으로.", "계약자여, 이 세계의 마지막 해안을 지켜라."],
  ending: ["이스카의 두 몸이 함께 무너지며, 바깥의 문이 닫혔다.", "바다는 세계의 가장자리에서 조용히 물러났다.", "", "쓰러진 전령이 마지막으로 웃었다.", "\"나는 목소리일 뿐… 그분은 아직 잠들어 있다.\"", "\"이 세계는 그분이 꾸는 꿈. 아르케의 펜도, 그대의 계약도.\"", "", "닫힌 문 너머에서, 아주 느린 숨소리가 들려왔다.", "무언가가 — 깨어나려 하고 있다."],
  cards: ["바다에 잠긴 마지막 등불", "산호가 무덤을 덮은 곳", "소리마저 가라앉는 해구", "하늘과 땅이 뒤바뀐 도시", "검은 오로라가 흐르는 극야", "바깥의 문 — 세계의 가장자리"]
};
const _0x2368f9 = {
  hp: 7.8,
  atk: 5
};
const _0x1c8101 = {
  id: 7,
  name: "잠든 신의 꿈",
  sub: "깨어나는 꿈을 끝내라",
  route: [[61], [62], [63], [64], [65], [66]],
  finalStage: 6,
  power: _0x2368f9,
  intro: ["바깥의 문이 닫힌 밤, 처음으로 꿈을 꾸지 않는 잠이 찾아왔다.", "그리고 아침이 오지 않았다.", "", "바다 저편에서 잠들어 있던 존재 — 「꿈꾸는 자」 오네이라.", "이 세계는 그가 꾸는 꿈이었고, 이제 그가 눈을 뜨려 한다.", "꿈꾸는 자가 깨어나면, 꿈은 흔적도 없이 사라진다.", "", "해안의 모래는 잠으로 변하고, 숲은 기억을 열매로 맺고,", "계단은 끝없이 이어지고, 악몽은 천막을 펼쳤다.", "", "잠의 해안에서 시작해 잠든 자의 침실을 지나 — 깨어나는 꿈의 끝으로.", "계약자여, 이 꿈이 끝나기 전에 꿈꾸는 자를 다시 재워라."],
  ending: ["두 갈래로 갈라졌던 꿈과 악몽이 함께 무너지며, 오네이라의 눈이 천천히 감겼다.", "\"…꿈속의 누군가가, 나를 다시 재우는구나.\"", "", "아침이 왔다. 해가 떴고, 바다는 고요했다.", "세계는 여전히 누군가의 꿈일지도 모른다.", "그러나 그 꿈을 지켜 낸 것은, 꿈속의 그대였다.", "", "— 제1권 「사자의 계약」, 끝.", "책장이 넘어가는 소리가 들린다. 다음 이야기는, 아직 쓰이지 않았다."],
  cards: ["잠이 모래가 되어 쌓인 해안", "기억이 열매로 매달린 숲", "끝없이 이어지는 계단", "악몽이 천막을 펼친 곳", "촛불이 하나씩 꺼지는 침실", "깨어나는 꿈 — 세계의 마지막 밤"]
};
const _0x21402d = {
  hp: 7.8,
  atk: 5
};
const _0x89027e = {
  id: 8,
  name: "잉크로 쓴 왕국",
  sub: "번지는 잉크의 끝을 찾아라",
  route: [[71], [72], [73], [74], [75], [76]],
  finalStage: 6,
  power: _0x21402d,
  intro: ["제1권의 마지막 장이 덮이고, 제단 위에 두 번째 책이 놓였다.", "표지는 비어 있었고, 책장은 아직 마르지 않은 잉크로 젖어 있었다.", "", "그 잉크로 쓰인 것은 무엇이든 살아 움직였다 — 항구도, 광산도, 숲도, 성채도.", "잉크의 정체는, 계약을 맺고 쓰러져 간 사자들의 혼이었다.", "", "누군가 사자의 혼을 갈아 새 이야기를 쓰고 있다.", "그리고 그 첫 문장에서 태어난 「잉크의 군주」가 책장을 먹물로 덮어 간다.", "", "계약자여, 제2권에 들어가라. 번지는 잉크의 끝을 찾아, 첫 문장을 끊어라."],
  ending: ["잉카르나의 몸이 물이 되어 흘러내렸다. 책장 위의 왕국도 함께 번져 지워졌다.", "\"나는… 첫 문장일 뿐이다. 펜을 쥔 손은, 따로 있다.\"", "", "흘러내린 잉크는 책장의 가장자리로, 그 너머의 바다로 흘러갔다.", "수평선 끝에서 무언가가 반짝였다. 유리처럼 굳은 바다였다.", "", "— 제2권 스토리 1 끝. 잉크가 흘러온 곳을 따라가라."],
  cards: ["잉크 비가 내리는 젖은 원고의 항구", "글자를 캐내는 납 활자 광산", "먹물이 번져 자란 숲", "찢긴 책장을 꿰매는 제본소 요새", "불붙은 서가 — 마지막 등잔", "필경사의 책상 — 첫 문장의 왕좌"]
};
const _0x190061 = {
  hp: 9.4,
  atk: 6
};
const _0x6c368a = {
  id: 9,
  name: "유리 바다의 순례",
  sub: "잉크가 흘러온 바다를 건너라",
  route: [[81], [82], [83], [84], [85], [86]],
  finalStage: 6,
  power: _0x190061,
  intro: ["잉크가 흘러간 바다는 물결치던 모양 그대로 유리가 되어 있었다.", "그 위를 순례자들이 걷는다. 바다 한가운데 있다는 「심장」에 닿으면 무엇이든 다시 쓸 수 있다고 믿으며.", "", "사막은 유리 모래가 되었고, 호수는 하늘을 비추는 거울이 되었다.", "빛은 협곡에서 일곱 갈래로 갈라지고, 성당은 그 빛으로 노래한다.", "", "그러나 바다의 심장은 새 이야기를 쓰는 대신,", "사자의 혼을 잉크로 짜내 책장 위로 퍼 올리고 있었다.", "", "계약자여, 순례자의 길을 따라 유리 바다를 건너라. 잉크가 솟는 심장을 멈춰라."],
  ending: ["비트레온의 고동이 멎자, 유리 바다에 금이 가며 천천히 물로 돌아갔다.", "순례자들은 그제야 자신들이 걷던 것이 사자들의 눈물이었음을 알았다.", "", "깨진 유리 조각 하나에 다른 장면이 비쳤다.", "거대한 톱니가 책장을 붙잡고, 억지로 다음 쪽으로 넘기고 있었다.", "", "— 제2권 스토리 2 끝. 누군가 이야기를 서둘러 끝내려 한다."],
  cards: ["모래가 유리로 굳은 사막", "하늘을 비추는 거울 소금호수", "빛이 일곱 갈래로 갈라지는 협곡", "유리로 지은 프리즘 성당", "미쳐 버린 빛 — 깨진 등대", "유리 바다의 심장"]
};
const _0x1f6a13 = {
  hp: 11.2,
  atk: 7.2
};
const _0x141711 = {
  id: 10,
  name: "톱니 심장의 제국",
  sub: "책장을 넘기는 태엽을 멈춰라",
  route: [[91], [92], [93], [94], [95], [96]],
  finalStage: 6,
  power: _0x1f6a13,
  intro: ["책의 다음 쪽에는 쉬지 않고 돌아가는 제국이 있었다.", "하수관은 증기를 뿜고, 시장에서는 남은 시간을 태엽으로 감아 판다.", "", "제국의 모든 톱니는 하나의 목적으로 돈다 — 책장을 넘기는 것.", "이야기를 한시라도 빨리 마지막 쪽으로 데려가기 위해.", "", "자신의 심장을 태엽으로 바꾼 황제 크로낙스는 말한다.", "\"끝이 정해진 이야기라면, 기다릴 이유가 없다.\"", "", "계약자여, 기관차 다리를 건너 시계탑을 지나 — 태엽 왕좌의 시계를 멈춰라."],
  ending: ["두 갈래로 갈라졌던 황제의 태엽이 동시에 멈췄다. 책장이 넘어가던 소리가 끊겼다.", "\"…멈춘 쪽은, 썩는다. 그것도 모르고.\"", "", "황제의 마지막 말처럼, 멈춰 선 다음 쪽에서는 꽃이 피고 있었다.", "달콤하고, 무겁고, 숨 막히는 향기 — 책장 가장자리부터 곰팡이가 번져 왔다.", "", "— 제2권 스토리 3 끝. 멈춘 책장 위로 정원이 자란다."],
  cards: ["증기가 새는 하수도", "남은 시간을 파는 태엽 시장", "협곡을 건너는 기관차 다리", "시간에 갇힌 시계탑 감옥", "제국의 불타는 용광 심장부", "태엽 왕좌 — 넘어가는 마지막 쪽"]
};
const _0x1e53a1 = {
  hp: 13.5,
  atk: 8.6
};
const _0x4e877d = {
  id: 11,
  name: "역병 정원",
  sub: "책장을 덮는 정원의 여왕을 시들게 하라",
  route: [[101], [102], [103], [104], [105], [106]],
  finalStage: 6,
  power: _0x1e53a1,
  intro: ["넘어가지 않게 된 책장 위에 정원이 자라났다.", "늪에서는 포자가 피어오르고, 과수원의 열매는 독으로 익었다.", "", "벌집 수도원의 수녀들은 꿀과 독침으로 기도하고,", "고치 동굴에서는 무엇이든 실에 싸여 다른 것으로 다시 태어난다.", "", "정원의 여왕 플로라베는 이야기를 끝내는 대신 영원히 피어 있기를 바란다.", "모든 쪽, 모든 문장이 자신의 꽃으로 덮일 때까지.", "", "계약자여, 가시 궁정을 지나 여왕의 꽃자궁으로 — 이 정원을 시들게 하라."],
  ending: ["분열한 여왕의 두 꽃이 함께 시들자, 정원은 한 장의 마른 꽃잎이 되어 바스러졌다.", "\"피어 있는 것만이… 지워지지 않는 줄 알았는데.\"", "", "마지막 꽃가루가 하늘로 날아올랐다. 그 하늘에서 별이 하나씩 꺼지고 있었다.", "아니 — 무언가가, 별을 먹고 있었다.", "", "— 제2권 스토리 4 끝. 책의 하늘이 어두워진다."],
  cards: ["포자가 피어오르는 곰팡이 습지", "독이 든 열매의 썩은 과수원", "꿀과 독침의 벌집 수도원", "비단실이 드리운 고치 동굴", "가시 정원 — 독꽃의 궁정", "여왕의 꽃자궁"]
};
const _0x3f7aa0 = {
  hp: 16.2,
  atk: 10.4
};
const _0x2a99a5 = {
  id: 12,
  name: "별을 먹는 짐승",
  sub: "하늘을 삼키는 짐승을 막아라",
  route: [[111], [112], [113], [114], [115], [116]],
  finalStage: 6,
  power: _0x3f7aa0,
  intro: ["책의 하늘에 박힌 별들은, 지금까지 쓰인 이야기의 등불이었다.", "그 별이 하나씩 사라지고 있다. 하늘을 삼키는 짐승 — 아스트로보르.", "", "떨어진 별의 껍데기는 분화구가 되었고, 혜성은 얼어붙은 채 멈춰 섰다.", "성운은 늪이 되어 가라앉고, 별자리의 사냥꾼들은 마지막 사냥에 나섰다.", "", "별이 모두 사라지면, 제1권도 제2권도 어둠 속에서 읽을 수 없게 된다.", "", "계약자여, 블랙홀의 가장자리를 넘어 짐승의 뱃속으로 — 삼켜진 별을 되찾아라."],
  ending: ["갈라진 짐승의 두 몸이 무너지자, 뱃속에서 별들이 한꺼번에 쏟아져 나왔다.", "하늘이 다시 밝아졌다. 그리고 별빛 사이로, 찢어진 책장 한 장이 내려왔다.", "", "거기에는 이렇게 쓰여 있었다.", "「제2권. 지은이 — 필경사 그라피엘. 마지막 장: 계약자의 죽음.」", "", "— 제2권 스토리 5 끝. 마지막 페이지가 기다린다."],
  cards: ["별이 떨어진 운석 분화구", "얼어붙은 혜성의 등", "별이 태어나는 성운 늪", "하늘의 사냥터 — 별자리", "빛이 휘는 블랙홀 가장자리", "짐승의 뱃속 — 삼켜진 별들"]
};
const _0x371813 = {
  hp: 19.4,
  atk: 12.4
};
const _0x5283bb = {
  id: 13,
  name: "마지막 페이지",
  sub: "이 책을 쓰는 자와 마주하라",
  route: [[121], [122], [123], [124], [125], [126]],
  finalStage: 6,
  power: _0x371813,
  intro: ["잉크의 왕국, 유리 바다, 톱니 제국, 역병 정원, 별을 먹는 짐승.", "그 모든 것은 한 사람의 펜 끝에서 쓰인 장들이었다.", "", "필경사 그라피엘. 사자의 혼을 잉크로 갈아 이야기를 쓰는 자.", "그는 이 책의 마지막 장에 이미 한 줄을 적어 두었다 — 「계약자는 여기서 죽는다.」", "", "찢어진 목차를 지나, 각주의 미로와 검열의 탑을 넘어,", "퇴고의 불길과 작가의 방을 지나면 — 아직 쓰이지 않은 마지막 페이지가 있다.", "", "계약자여, 정해진 결말을 거슬러라. 마지막 문장은 그대가 쓴다."],
  ending: ["두 갈래로 갈라졌던 필경사가 함께 쓰러지고, 그의 펜이 하얀 페이지 위로 굴러떨어졌다.", "\"…등장인물이, 작가의 펜을 줍는구나.\"", "", "그대는 펜을 들어 마지막 줄을 지웠다. 그리고 그 아래에 새 문장을 적었다.", "「계약자는 살아서, 다음 이야기로 걸어갔다.」", "", "잉크가 되었던 사자들의 혼이 글자 사이로 빠져나와, 조용히 하늘로 올라갔다.", "", "— 제2권 스토리 6 끝.", "빈 책장이 한 장 더 넘어간다. 그리고 그 너머에서 — 누군가 이 책을 읽고 있었다."],
  cards: ["흩어진 장 제목 — 찢어진 목차", "작은 글씨의 미궁 — 각주의 미로", "검게 칠해진 문장 — 검열의 탑", "고쳐 쓰기 위한 불 — 퇴고", "촛불과 원고 더미 — 작가의 방", "마지막 페이지"]
};
const _0x314c90 = {
  hp: 38.8,
  atk: 24.8
};
const _0x36b4bf = {
  id: 14,
  name: "책장 밖의 독자",
  sub: "책을 덮으려는 손을 멈춰라",
  route: [[131], [132], [133], [134], [135], [136]],
  finalStage: 6,
  power: _0x314c90,
  intro: ["그대가 쓴 마지막 문장 아래로, 책장이 한 장 더 넘어갔다.", "그 너머에서 — 누군가 이 책을 처음부터 다시 읽고 있었다.", "", "「책장 밖의 독자」 렉토르. 결말이 바뀐 것이 마음에 들지 않는 자.", "그가 앞 장들을 되짚을 때마다, 지나온 이야기들이 일그러진 메아리가 되어 되살아난다.", "끝없는 왕의 묘소, 꿈꾸는 자의 바다, 잉크와 유리, 태엽과 꽃, 별을 삼킨 마지막 페이지.", "", "다시 읽히는 이야기 속에서는 왼쪽과 오른쪽이 뒤바뀌고, 빛이 꺼지고, 시간마저 멈춘다.", "그리고 독자는 마지막에 책을 덮으려 한다. 책이 덮이면, 그 안의 모든 이야기는 다시는 읽히지 않는다.", "", "계약자여, 지나온 모든 이야기를 한 번 더 넘어 — 책장 밖의 손을 멈춰라."],
  ending: ["둘로 갈라졌던 독자의 눈이 함께 감기고, 책을 덮으려던 손이 천천히 물러났다.", "\"…결말을 바꾼 등장인물은, 처음이었다.\"", "", "렉토르는 덮던 책을 다시 펼쳐, 그대가 쓴 마지막 문장에 손가락을 얹었다.", "\"계속 읽겠다. 다음 장을 써라, 계약자.\"", "", "빈 페이지 위로 새 잉크가 번지기 시작했다. 이번에는 누구의 펜도 아닌, 그대의 걸음으로.", "", "— 제2권, 끝.", "책은 덮이지 않았다. 다음 이야기는, 아직 쓰이지 않았다."],
  cards: ["다시 읽기 — 묘소와 핏빛 왕관", "다시 읽기 — 망각과 바다와 꿈", "다시 읽기 — 잉크와 유리", "다시 읽기 — 태엽과 꽃", "다시 읽기 — 별과 마지막 페이지", "책장 밖 — 덮이는 책"]
};
const _0x39ecbd = {
  hp: 60,
  atk: 40
};
const _0x11c10f = {
  id: 15,
  name: "갈라진 여백",
  sub: "첫 교정의 붉은 펜을 꺾어라",
  route: [[141], [142], [143], [144], [145], [146]],
  finalStage: 6,
  power: _0x39ecbd,
  intro: ["렉토르가 책을 다시 펼친 뒤, 그대의 걸음은 펜이 되어 빈 페이지를 채워 나갔다.", "그러나 작가 없이 쓰인 잉크는 쓰이자마자 말라 갈라졌다.", "", "갈라진 틈에서 「오탈자」들이 기어 나왔다 — 잘못 찍힌 글자에서 태어난, 규칙을 비트는 것들.", "어떤 것은 보호막을 두르고, 어떤 것은 죽어도 다시 일어나고, 어떤 것은 둘로 갈라진다.", "", "그리고 붉은 펜을 든 손이 여백에 첫 교정 표시를 남겼다.", "「이 책에 없던 등장인물 — 계약자. 삭제할 것.」", "", "계약자여, 제3권에 들어가라. 잉크가 마른 뒤의 세계에서, 지워지지 않고 살아남아라."],
  ending: ["오탈자의 어미 에라타가 무너지자, 갈라진 여백이 한 줄씩 아물었다.", "\"교정은… 한 번으로 끝나지 않아. 초교가 끝나면, 재교가 온다.\"", "", "아문 여백 위로 시곗바늘 같은 붉은 선이 거꾸로 그어지기 시작했다.", "누군가 이미 쓰인 문장을 되감아, 그대가 지나온 길을 지우고 있었다.", "", "— 제3권 스토리 1 끝. 시간이 거꾸로 흐르는 쪽으로."],
  cards: ["마른 잉크가 갈라지는 평원", "잘못 찍힌 글자를 파는 시장", "활자가 거꾸로 박힌 굴", "책갈피가 바람에 펄럭이는 협곡", "문단이 서로를 비추는 거울방", "균열의 심장 — 첫 교정 표시"]
};
const _0x1575cb = {
  hp: 78,
  atk: 52
};
const _0x49207a = {
  id: 16,
  name: "되감기는 연대기",
  sub: "거꾸로 흐르는 시간을 붙잡아라",
  route: [[151], [152], [153], [154], [155], [156]],
  finalStage: 6,
  power: _0x1575cb,
  intro: ["재교(再校). 두 번째 교정은 시간을 되감는 것이었다.", "연대기의 문장들이 거꾸로 읽히며, 일어난 일이 일어나지 않은 일로 돌아갔다.", "", "모래시계 사구에서는 모래가 위로 떨어지고, 분수는 물을 삼킨다.", "어제의 거리에서는 그대의 어제 모습이 걸어 다니며 그대를 흉내 낸다.", "", "「연대기의 수호자」 크로니카는 시계를 감아, 쓰러뜨린 것마저 되돌린다.", "되감기는 시계를 제때 부수지 못하면, 그녀의 상처도 함께 되감긴다.", "", "계약자여, 되감기는 시간 속에서 앞으로 걸어라."],
  ending: ["마지막 시계가 부서지자, 거꾸로 돌던 연대기가 멈추고 — 다시 앞으로 흐르기 시작했다.", "\"되감아도… 너는 같은 자리로 돌아오는구나.\"", "", "그 순간, 발밑이 가벼워졌다. 책장이 한 장씩 떠올라 하늘로 흩어졌다.", "교정자는 이제 중력을 지우려 하고 있었다.", "", "— 제3권 스토리 2 끝. 떠오르는 낱장을 따라."],
  cards: ["모래가 위로 떨어지는 사구", "물을 삼키는 멈춘 분수 정원", "태엽이 거꾸로 도는 시계 공방", "어제의 내가 걷는 거리", "연표가 쌓아 올린 탑", "되감기는 왕좌 — 연대기의 끝"]
};
const _0x11d72e = {
  hp: 101.4,
  atk: 67.6
};
const _0x345d2e = {
  id: 17,
  name: "떠오르는 낱장",
  sub: "중력이 뒤집힌 하늘을 건너라",
  route: [[161], [162], [163], [164], [165], [166]],
  finalStage: 6,
  power: _0x11d72e,
  intro: ["삼교(三校). 교정자는 무게를 지웠다.", "글자가 종이에서 떨어져 떠오르고, 책장 위의 섬들이 하늘로 흩어졌다.", "", "어떤 구역에서는 위와 아래가 뒤집힌다. 천장이 바닥이 되고, 떨어지는 것은 위로 떨어진다.", "하늘섬의 적들은 그 틈을 노려, 거꾸로 선 그대를 노린다.", "", "「무게를 잃은 왕」 그라비스는 중력을 손끝으로 감는다.", "보랏빛 예고가 번지면 하늘과 땅이 바뀐다 — 어느 쪽에 서 있어야 할지 읽어라.", "", "계약자여, 떠오르는 낱장을 붙잡아 다시 책에 묶어라."],
  ending: ["그라비스가 바닥으로 — 진짜 바닥으로 — 떨어지자, 흩어졌던 낱장들이 비처럼 내려앉았다.", "\"무게가 있어야… 이야기는 남는다. 그것도 교정자는 모른다.\"", "", "내려앉은 낱장마다 그대의 모습이 비쳤다. 그리고 그 비친 모습이, 먼저 움직였다.", "", "— 제3권 스토리 3 끝. 너를 흉내 내는 것이 기다린다."],
  cards: ["낱장이 떠오르는 들판", "거꾸로 매달린 종이 숲", "하늘섬을 잇는 끈다리", "무게가 사라진 탑", "중력이 뒤집히는 구름 바다", "무게를 잃은 왕좌"]
};
const _0x5860ad = {
  hp: 131.8,
  atk: 87.9
};
const _0x523d50 = {
  id: 18,
  name: "비친 자들의 극장",
  sub: "너를 흉내 내는 그림자를 넘어라",
  route: [[171], [172], [173], [174], [175], [176]],
  finalStage: 6,
  power: _0x5860ad,
  intro: ["교정자의 네 번째 방법은 대역(代役)이었다.", "지울 수 없는 등장인물이라면, 똑같이 생긴 다른 것으로 바꿔치기하면 된다.", "", "비친 자들의 극장. 무대 위 거울마다 그대의 분신이 서 있다.", "그것들은 그대가 휘두르면 휘두르고, 뛰면 뛴다 — 한 박자 늦게, 반대편에서.", "", "극장의 주인 「가면 연출가」 페르소나는 분신 사이에 진짜를 숨긴다.", "진짜에게만 작은 흔들림이 있다. 그것을 읽지 못하면, 무대는 그대를 지운다.", "", "계약자여, 거울 속 대역이 아닌 그대 자신으로 막을 내려라."],
  ending: ["갈라진 페르소나의 두 가면이 함께 깨지고, 극장의 거울들이 한꺼번에 금이 갔다.", "\"대역은… 박수를 받지 못하는구나.\"", "", "조명이 꺼진 무대 뒤에서 거센 바람이 불어왔다. 책등을 꿰매는 바늘 소리와 함께.", "누군가 이 책을 통째로 꿰매 닫으려 하고 있었다.", "", "— 제3권 스토리 4 끝. 바람이 부는 제본소로."],
  cards: ["분장실 — 가면이 걸린 복도", "거울이 늘어선 무대", "객석 아래 그림자 통로", "비친 자들의 리허설", "꺼진 조명의 천장", "마지막 막 — 가면의 무대"]
};
const _0x15f8dd = {
  hp: 171.4,
  atk: 114.2
};
const _0x4a1b52 = {
  id: 19,
  name: "폭풍의 제본소",
  sub: "책을 꿰매 닫으려는 바람을 멈춰라",
  route: [[181], [182], [183], [184], [185], [186]],
  finalStage: 6,
  power: _0x15f8dd,
  intro: ["교료(校了)가 가까워지자, 교정자는 책을 닫을 준비를 시작했다.", "제본소의 거대한 풀무가 바람을 일으키고, 바늘과 실이 하늘을 가로지른다.", "", "바람은 끊임없이 한쪽으로 분다. 몸을 기울여 버티지 않으면 함정으로 밀려난다.", "바람의 방향이 바뀌기 직전, 실이 반대편으로 펄럭인다 — 그것이 신호다.", "", "「제본 장인」 시비라는 책등을 꿰매 그대를 책 안에 영원히 가두려 한다.", "", "계약자여, 바람을 거슬러 걸어라. 책이 닫히기 전에."],
  ending: ["갈라진 시비라의 두 바늘이 함께 부러지고, 풀무가 마지막 숨을 내쉬었다.", "\"닫히지 않는 책은… 영원히 끝나지 않아. 그게 정말 네가 원하는 거냐?\"", "", "바람이 그치자, 서고 전체가 삐걱거렸다. 책장들이 안쪽으로 기울어 무너져 내리기 시작했다.", "", "— 제3권 스토리 5 끝. 무너지는 서고로."],
  cards: ["풀무가 숨 쉬는 작업장", "실타래가 굴러다니는 창고", "바늘이 비처럼 내리는 지붕", "풀칠이 마르지 않는 회랑", "책등을 꿰매는 폭풍 탑", "제본대 — 닫히는 책"]
};
const _0x4700f6 = {
  hp: 222.8,
  atk: 148.5
};
const _0x310a0e = {
  id: 20,
  name: "무너지는 서고",
  sub: "조여 오는 벽 사이에서 살아남아라",
  route: [[191], [192], [193], [194], [195], [196]],
  finalStage: 6,
  power: _0x4700f6,
  intro: ["책을 닫지 못한 교정자는, 책이 꽂힌 서고째 허물기로 했다.", "서가는 안쪽으로 무너지고, 바닥은 물결처럼 꺼져 내린다.", "", "보스가 있는 방에서는 보랏빛 벽이 양쪽에서 조여 온다. 벽에 닿으면 밀려나며 다친다.", "좁아진 무대에서도 피할 곳은 남아 있다 — 끝까지 예고를 읽어라.", "", "「서고의 허무는 자」 루이나는 마지막 서가를 무너뜨려, 그대를 책더미 아래 묻으려 한다.", "", "계약자여, 무너지는 서고 끝에서 교정자의 방으로 가는 문을 찾아라."],
  ending: ["둘로 갈라졌던 루이나가 함께 쓰러지고, 조여 오던 벽이 천천히 물러났다.", "\"…교정자는 저 위에 있다. 마지막 페이지, 잉크가 완전히 마른 곳.\"", "", "무너진 서가 사이로 붉은 문 하나가 드러났다.", "문 너머에서 펜촉이 종이를 긁는 소리가 들렸다 — 그대의 이름을, 한 획씩 지우는 소리가.", "", "— 제3권 스토리 6 끝. 교정자의 방으로."],
  cards: ["서가가 기울어진 열람실", "물결처럼 꺼지는 바닥", "금서 보관실의 쇠사슬", "먼지가 폭포처럼 쏟아지는 계단", "허물어지는 돔 천장", "서고의 끝 — 조여 오는 무대"]
};
const _0x5b80a7 = {
  hp: 289.6,
  atk: 193.1
};
const _0x1dbf50 = {
  id: 21,
  name: "잉크가 마른 뒤",
  sub: "마지막 교정자와 마주하라",
  route: [[201], [202], [203], [204], [205], [206]],
  finalStage: 6,
  power: _0x5b80a7,
  intro: ["교정자의 방. 모든 잉크가 완전히 말라, 더는 한 글자도 고쳐 쓸 수 없는 곳.", "", "「붉은 펜의 교정자」 코렉시아. 이 세계에 없던 등장인물을 지워 온 손.", "그녀는 여백을 가르고, 시간을 되감고, 무게를 지우고, 대역을 세우고, 바람으로 책을 닫고, 서고를 허물었다.", "그리고 이제 그 모든 교정을 한꺼번에 그대에게 쓰려 한다.", "", "마지막 교정이 끝나면, 「계약자」라는 단어는 이 책에서 영원히 사라진다.", "", "계약자여, 마른 잉크 위에 마지막 한 줄을 새겨라 — 지워지지 않는 걸음으로."],
  ending: ["코렉시아의 붉은 펜이 두 동강 나며, 마지막 교정 표시가 종이에서 벗겨져 나갔다.", "\"…오탈자가, 이야기를 끝까지 지켜 냈구나.\"", "", "말라 갈라졌던 잉크가 다시 젖어 들었다. 이번에는 누군가 고치기 위한 잉크가 아니라, 계속 쓰기 위한 잉크였다.", "그대의 이름은 지워지지 않았다. 교정 표시 대신, 책의 맨 앞장에 이렇게 남았다.", "「등장인물: 계약자 — 이 이야기를 끝까지 걸어간 자.」", "", "— 제3권, 끝.", "잉크는 다시 흐른다. 다음 이야기는, 아직 쓰이지 않았다."],
  cards: ["갈라진 여백의 메아리 — 오탈자의 둥지", "되감기는 시계의 메아리", "떠오르는 낱장의 메아리", "비친 자들의 메아리", "바람과 무너짐의 메아리", "교정자의 방 — 마지막 교정"]
};
const Aa = [_0x9d9062, _0x48460b, _0x5df0fa, _0x4b563e, _0x3cf725, _0xb6b9cf, _0x12fa56], E = [_0x324661, _0x57ef3b, _0xbca677, _0x21f180, _0x97e538, _0x4d0ac4, _0x1c8101, _0x89027e, _0x6c368a, _0x141711, _0x4e877d, _0x2a99a5, _0x5283bb, _0x36b4bf, _0x11c10f, _0x49207a, _0x345d2e, _0x523d50, _0x4a1b52, _0x310a0e, _0x1dbf50];
E.push(...Aa);
const _0x594937 = {
  growth: 0.08,
  healPct: 0.15,
  eliteEvery: 5,
  bossEvery: 10,
  stonesPerFloor: 80,
  stonesPerBoss: 1200,
  crystalsPerFloor: 40
};
const Oa = Object.fromEntries(E.map(_0xd98611 => [_0xd98611.id, _0xd98611])), ke = _0x3ad02c => Oa[_0x3ad02c] ?? E[0], O = _0x594937;
function t0(_0x39bbaa, _0x399a41) {
  const _0x147a15 = B.find(_0x13dedc => _0x13dedc.id === _0x399a41);
  if (!_0x147a15 || !_0x147a15.ready || !_0x147a15.stories.length) return !1;
  if (te.all) return !0;
  const _0x21afe8 = _0x147a15.stories[_0x147a15.stories.length - 1];
  return !!_0x39bbaa.storyClear?.[_0x21afe8];
}
function G(_0x3effa8) {
  const _0x208017 = {
    "ytYQp": function (_0x4d2821, _0x359010) {
      return _0x4d2821(_0x359010);
    }
  };
  const _0x3533e0 = [];
  for (const _0x1d1eac of A(_0x3effa8).stories) for (const _0x32fc86 of ke(_0x1d1eac).route) for (const _0x17b1da of _0x32fc86) _0x3533e0.push({
    "story": _0x1d1eac,
    "theme": _0x17b1da
  });
  return _0x3533e0;
}
function Fa(_0x41c899) {
  const _0x11aff7 = {
    "YqFdl": function (_0x4caa5b, _0x277b34) {
      return _0x4caa5b(_0x277b34);
    }
  };
  return G(_0x41c899);
}
function r0(_0x493e18, _0x42c1c8) {
  const _0xd10ad7 = _0x493e18?.[_0x42c1c8];
  return typeof _0xd10ad7 == "number" && Number.isFinite(_0xd10ad7) ? _0xd10ad7 : 0;
}
function Ua(_0x3b21ae) {
  const _0xfc0f22 = {
    VXBTo: function (_0x7a2eae, _0x19962f) {
      return _0x7a2eae === _0x19962f;
    }
  };
  (_0xfc0f22.VbpSP = function (_0x1e91da, _0x2ffa13) {
    return _0x1e91da % _0x2ffa13;
  }, _0xfc0f22.pipEv = "elite");
  const _0x61a481 = _0xfc0f22;
  return _0x3b21ae > 0 && _0x3b21ae % O.bossEvery === 0 ? "boss" : _0x3b21ae > 0 && _0x61a481.VbpSP(_0x3b21ae, O.eliteEvery) === 0 ? _0x61a481.pipEv : "combat";
}
function Pa(_0x4267d4, _0x1a3444) {
  const _0x1372ef = {
    Ucxte: function (_0x19970c, _0x19a768) {
      return _0x19970c + _0x19a768;
    }
  };
  (_0x1372ef.nxyPV = function (_0x436e96, _0xe72df2) {
    return _0x436e96 * _0xe72df2;
  }, _0x1372ef.Nozcp = function (_0x356cdf, _0x13ff3a) {
    return _0x356cdf * _0x13ff3a;
  });
  const _0x1fe0d3 = _0x1372ef, _0x4703e5 = Math.pow(1 + O.growth, Math.max(0, _0x1a3444 - 1));
  return {
    "hp": _0x1fe0d3.nxyPV(_0x4267d4.hp, _0x4703e5),
    "atk": _0x1fe0d3.Nozcp(_0x4267d4.atk, _0x4703e5)
  };
}
function o0(_0x3df06d, _0x5ed238) {
  const _0x22000b = {
    OfvQg: function (_0x3955de, _0x110968) {
      return _0x3955de * _0x110968;
    }
  };
  const _0x40ab20 = _0x22000b;
  const _0x2cb91a = Math.max(0, Math.floor(_0x3df06d));
  return {
    "stones": _0x2cb91a * O.stonesPerFloor + _0x5ed238 * O.stonesPerBoss,
    "crystals": _0x2cb91a * O.crystalsPerFloor
  };
}
function me(_0x172515) {
  const _0x4b54f9 = {
    "PwAOw": "object",
    "RcGll": function (_0x5b42a8, _0x23d06e) {
      return _0x5b42a8(_0x23d06e);
    },
    "CDZiB": function (_0x209cb1, _0x3a6b13) {
      return _0x209cb1 == _0x3a6b13;
    }
  }, _0x24351c = {};
  if (!_0x172515 || typeof _0x172515 != _0x4b54f9.PwAOw) return _0x24351c;
  for (const [_0x50192f, _0x587f30] of Object.entries(_0x172515)) {
    const _0x3dbae5 = Number(_0x50192f);
    Number.isInteger(_0x3dbae5) && _0x3dbae5 > 0 && typeof _0x587f30 == "number" && Number.isFinite(_0x587f30) && _0x587f30 > 0 && (_0x24351c[_0x3dbae5] = Math.floor(_0x587f30));
  }
  return _0x24351c;
}
const _0x16e22e = {
  hp: 4,
  atk: 2.6
};
const _0x5b1c43 = {
  hp: 1900,
  atk: 1250
};
const _0x54fb6c = {
  book: 1,
  to: 20
};
const _0x333454 = {
  book: 2,
  to: 50
};
const _0x2955dd = {
  book: 3,
  to: 75
};
const _0x853f73 = {
  book: 4,
  to: 100
};
const _0x10e6bc = {
  floors: 100,
  start: _0x16e22e,
  end: _0x5b1c43,
  bossDiv: 1.75,
  healPct: 0.12,
  eliteEvery: 5,
  bossEvery: 10,
  bands: [_0x54fb6c, _0x333454, _0x2955dd, _0x853f73],
  prevBookChance: 0.25,
  stonesPerFloor: 100,
  stonesPerBoss: 1200,
  crystalsPerFloor: 48,
  unlockStory: 8
};
const u = _0x10e6bc, l0 = _0x16632a => te.all || (_0x16632a.storyMax ?? 1) >= u.unlockStory;
function za(_0x2ee1ea, _0x48b5bd = !1) {
  const _0x28816e = {
    Mprkj: function (_0x5b2a59, _0x11ef97) {
      return _0x5b2a59 / _0x11ef97;
    }
  };
  const _0x18019b = _0x28816e;
  const _0x3537c4 = (Math.max(1, Math.min(u.floors, Math.floor(_0x2ee1ea))) - 1) / (u.floors - 1), _0x599e4f = _0x48b5bd ? u.bossDiv : 1;
  return {
    "hp": u.start.hp * Math.pow(u.end.hp / u.start.hp, _0x3537c4) / _0x599e4f,
    "atk": u.start.atk * Math.pow(u.end.atk / u.start.atk, _0x3537c4) / _0x599e4f
  };
}
function he(_0x171d29) {
  return _0x171d29 > 0 && _0x171d29 % u.bossEvery === 0 ? "boss" : _0x171d29 > 0 && _0x171d29 % u.eliteEvery === 0 ? "elite" : "combat";
}
function be(_0x300a75) {
  return (u.bands.find(_0x237116 => _0x300a75 <= _0x237116.to) ?? u.bands[u.bands.length - 1]).book;
}
function La(_0x19eb62) {
  for (const _0x2c4ef0 of B) for (const _0x42763e of G(_0x2c4ef0.id)) if (_0x42763e.theme === _0x19eb62) return _0x42763e.story;
  return 1;
}
function Ga(_0x42f5e8) {
  const _0x134196 = {
    GyjvF: function (_0x150f35, _0x1c0d66) {
      return _0x150f35 <= _0x1c0d66;
    }
  };
  _0x134196.cSRKB = function (_0x497137, _0x5c6b18) {
    return _0x497137 + _0x5c6b18;
  };
  const _0x337ea6 = _0x134196, _0x388fd0 = [];
  for (let _0x28bb57 = u.bossEvery; _0x28bb57 <= u.floors; _0x28bb57 += u.bossEvery) {
    const _0x73fdde = be(_0x28bb57), _0x46acba = G(_0x73fdde).map(_0x526830 => _0x526830.theme);
    if (be(_0x28bb57 + u.bossEvery) !== _0x73fdde || _0x337ea6.cSRKB(_0x28bb57, u.bossEvery) > u.floors) _0x388fd0.push(_0x46acba[_0x46acba.length - 1]); else {
      const _0x360402 = _0x46acba.slice(0, -1).filter(_0x180b69 => !_0x388fd0.includes(_0x180b69)), _0x273f92 = _0x360402.length ? _0x360402 : _0x46acba.slice(0, -1);
      _0x388fd0.push(_0x273f92[Math.floor(_0x42f5e8() * _0x273f92.length)]);
    }
  }
  return _0x388fd0;
}
function Na(_0x3be87d, _0x24ed23, _0x11f147 = 0) {
  const _0x482f0e = {
    OnHon: function (_0x4bb378, _0xbcff1c) {
      return _0x4bb378 > _0xbcff1c;
    }
  };
  const _0x4f8e3a = _0x482f0e, _0x2f8457 = Array.isArray(_0x11f147) ? _0x11f147 : [_0x11f147];
  let _0x405e12 = be(_0x3be87d);
  _0x405e12 > 1 && _0x24ed23() < u.prevBookChance && _0x405e12--;
  const _0xc838a4 = G(_0x405e12).map(_0x1c0892 => _0x1c0892.theme), _0x48cbb9 = _0xc838a4.filter(_0x4e478e => !_0x2f8457.includes(_0x4e478e)), _0x9d3dcc = _0x48cbb9.length ? _0x48cbb9 : _0xc838a4;
  return _0x9d3dcc[Math.floor(_0x24ed23() * _0x9d3dcc.length)];
}
function Pe(_0x50137b) {
  const _0x5bb68e = {
    aueoL: function (_0x1c7322, _0x208ba7) {
      return _0x1c7322 <= _0x208ba7;
    },
    NBUDn: function (_0x5ea48d, _0x2da7cc) {
      return _0x5ea48d !== _0x2da7cc;
    }
  };
  _0x5bb68e.wTFEi = function (_0x226115, _0x108a43) {
    return _0x226115 % _0x108a43;
  };
  _0x5bb68e.dJLmZ = function (_0x38e6f3, _0x3c5878) {
    return _0x38e6f3 === _0x3c5878;
  };
  const _0x5a1800 = _0x5bb68e;
  if (_0x50137b <= 0 || _0x50137b > u.floors || _0x5a1800.wTFEi(_0x50137b, u.bossEvery) !== 0) return null;
  const _0x2840ee = _0x50137b / u.bossEvery;
  return {
    "stones": 1000 * _0x2840ee,
    "crystals": 600 * _0x2840ee,
    "compass": _0x50137b === 50 || _0x5a1800.dJLmZ(_0x50137b, 100) ? 1 : 0
  };
}
function i0(_0x5bf455, _0x554623) {
  const _0x292d4f = {
    "IVQET": function (_0x300b27, _0x144733) {
      return _0x300b27 <= _0x144733;
    },
    "YXfIj": function (_0x208624, _0x392a60) {
      return _0x208624(_0x392a60);
    },
    "gkCKD": function (_0x4883d3, _0x94f6fc) {
      return _0x4883d3 + _0x94f6fc;
    },
    "UaeJj": function (_0x3d785a, _0x3f3f56) {
      return _0x3d785a > _0x3f3f56;
    }
  }, _0x2c85b6 = {};
  (_0x2c85b6.best = 0, _0x2c85b6.claimed = []);
  const _0xabd0e2 = _0x5bf455.tower ??= _0x2c85b6, _0xb24189 = [];
  for (let _0x4bd3c9 = u.bossEvery; _0x4bd3c9 <= Math.min(_0x554623, u.floors); _0x4bd3c9 += u.bossEvery) {
    if (_0xabd0e2.claimed.includes(_0x4bd3c9)) continue;
    const _0x50b79a = Pe(_0x4bd3c9);
    (_0xabd0e2.claimed.push(_0x4bd3c9), _0x5bf455.stones += _0x50b79a.stones, _0x5bf455.crystals += _0x50b79a.crystals, _0x5bf455.compass = (_0x5bf455.compass ?? 0) + _0x50b79a.compass, _0xb24189.push({
      "floor": _0x4bd3c9,
      ..._0x50b79a
    }));
  }
  return (_0xabd0e2.claimed.sort((_0x2dc017, _0x3a3604) => _0x2dc017 - _0x3a3604), _0x554623 > _0xabd0e2.best && (_0xabd0e2.best = Math.min(u.floors, Math.floor(_0x554623))), _0xb24189);
}
function c0(_0x56d026, _0x4d7006) {
  const _0x14b247 = {
    Ildwe: function (_0x41ca32, _0x2b6c3b) {
      return _0x41ca32 * _0x2b6c3b;
    }
  };
  const _0x4d0f97 = _0x14b247;
  const _0x3a1599 = Math.max(0, Math.floor(_0x56d026));
  return {
    "stones": _0x3a1599 * u.stonesPerFloor + _0x4d7006 * u.stonesPerBoss,
    "crystals": _0x3a1599 * u.crystalsPerFloor
  };
}
function Ka(_0x4df6b8) {
  const _0x16d0d9 = _0x4df6b8, _0x3929ee = _0x16d0d9 && typeof _0x16d0d9.best == "number" && Number.isFinite(_0x16d0d9.best) ? Math.max(0, Math.min(u.floors, Math.floor(_0x16d0d9.best))) : 0, _0x2ed8fd = _0x16d0d9 && Array.isArray(_0x16d0d9.claimed) ? [...new Set(_0x16d0d9.claimed.filter(_0x13ab92 => typeof _0x13ab92 == "number" && Number.isInteger(_0x13ab92) && Pe(_0x13ab92) !== null))].sort((_0x1df2dc, _0x14f706) => _0x1df2dc - _0x14f706) : [], _0x3194be = {};
  _0x3194be.best = _0x3929ee;
  _0x3194be.claimed = _0x2ed8fd;
  return _0x3194be;
}
const _0xfb2d94 = {
  hp: 1.3,
  atk: 1.25,
  heal: 0.2
};
const Ce = _0xfb2d94, Ia = [["combat", 40], ["elite", 13], ["altar", 8], ["armory", 8], ["shop", 7], ["rest", 6], ["event", 11], ["treasure", 6]];
function $a(_0x550c4f, _0x4ced27, _0x480e06) {
  const _0x256e9c = {
    DIGyL: function (_0x37a6f5, _0x34999a) {
      return _0x37a6f5 < _0x34999a;
    },
    ZLKVu: function (_0x5b8cbf, _0x5ed6e0) {
      return _0x5b8cbf === _0x5ed6e0;
    },
    Guolj: "start",
    pCQRg: function (_0x40e76f, _0xb31a14) {
      return _0x40e76f === _0xb31a14;
    },
    GlKnf: "elite",
    chgTv: function (_0x423af1, _0x12512c) {
      return _0x423af1 - _0x12512c;
    }
  };
  const _0x35302d = _0x256e9c, _0x23a138 = _0x550c4f.int(7, 10), _0x4c3601 = [], _0x1a5a7c = [];
  let _0x4f5ed1 = 0;
  for (let _0x36a327 = 0; _0x36a327 < _0x23a138; _0x36a327++) {
    const _0x212935 = [];
    let _0x168153;
    _0x36a327 === 0 || _0x36a327 === _0x23a138 - 1 ? _0x168153 = 1 : _0x168153 = _0x550c4f.int(2, 3);
    for (let _0x4fcf37 = 0; _0x4fcf37 < _0x168153; _0x4fcf37++) {
      let _0x26268d;
      if (_0x36a327 === 0) _0x26268d = _0x480e06 ? "tutorial" : _0x35302d.Guolj; else {
        if (_0x36a327 === _0x23a138 - 1) _0x26268d = "boss"; else {
          if (_0x36a327 === _0x23a138 - 2) _0x26268d = _0x4fcf37 === 0 ? "rest" : _0x4fcf37 === 1 ? "shop" : "treasure"; else {
            const _0x228491 = _0x212935.map(_0x53cb4b => _0x4c3601[_0x53cb4b].type);
            _0x26268d = _0x550c4f.weighted(Ia.filter(([_0x5b4a28]) => !(_0x5b4a28 === "elite" && _0x36a327 < 2) && !(_0x228491.includes(_0x5b4a28) && _0x5b4a28 !== "combat")), ([_0x126379]) => _0x126379)[0];
          }
        }
      }
      const _0x5e4856 = {};
      (_0x5e4856.id = _0x4f5ed1, _0x5e4856.layer = _0x36a327, _0x5e4856.idx = _0x4fcf37, _0x5e4856.type = _0x26268d, _0x5e4856.next = [], _0x5e4856.visited = !1, (_0x4c3601.push(_0x5e4856), _0x212935.push(_0x4f5ed1++)));
    }
    _0x1a5a7c.push(_0x212935);
  }
  if (!_0x4c3601.some(_0x257910 => _0x257910.type === "elite")) {
    const _0x538dba = _0x4c3601.filter(_0xb8f9b1 => _0xb8f9b1.layer >= 2 && _0xb8f9b1.layer < _0x23a138 - 2);
    _0x538dba.length && (_0x550c4f.pick(_0x538dba).type = _0x35302d.GlKnf);
  }
  for (let _0x1dfe9f = 0; _0x1dfe9f < _0x23a138 - 1; _0x1dfe9f++) {
    const _0x18ed88 = _0x1a5a7c[_0x1dfe9f], _0x174bd6 = _0x1a5a7c[_0x1dfe9f + 1];
    for (const _0x1683d7 of _0x18ed88) {
      const _0x5e1082 = _0x550c4f.shuffle([..._0x174bd6]), _0x226dfc = Math.min(_0x174bd6.length, _0x550c4f.int(2, 3));
      _0x4c3601[_0x1683d7].next = _0x5e1082.slice(0, _0x226dfc);
    }
    for (const _0x1af4bb of _0x174bd6) _0x18ed88.some(_0x80034d => _0x4c3601[_0x80034d].next.includes(_0x1af4bb)) || _0x4c3601[_0x550c4f.pick(_0x18ed88)].next.push(_0x1af4bb);
    for (const _0x1d3ad0 of _0x18ed88) _0x4c3601[_0x1d3ad0].next.sort((_0x10ff5b, _0x56394d) => _0x4c3601[_0x10ff5b].idx - _0x4c3601[_0x56394d].idx);
  }
  const _0x545b7a = {};
  return (_0x545b7a.nodes = _0x4c3601, _0x545b7a.layers = _0x1a5a7c, _0x545b7a);
}
const _0xda759d = {
  kills: 0,
  dmg: 0,
  stones: 0,
  crystals: 0,
  rooms: 0,
  frames: 0,
  maxCombo: 0,
  swapHits: 0,
  bosses: [],
  cause: "",
  hidden: 0,
  bossNoHit: !0,
  enemyKills: {}
};
const _0x118772 = {
  hp: 1,
  atk: 1
};
class Va {
  rng;
  story = 1;
  chapter = 1;
  theme = 1;
  kingDown = !1;
  trueEnd = !1;
  nodes = [];
  layers = [];
  cur = 0;
  party;
  active = 0;
  weapon;
  relics = [];
  gold;
  items = [];
  hp = 1;
  shield = 0;
  bonusAtk = 0;
  rerolls = 0;
  bonusMaxHp = 0;
  revives;
  curse;
  stats = JSON.parse(JSON.stringify(_0xda759d));
  tutorial;
  finished = !1;
  victory = !1;
  initialized = !1;
  bossRush = !1;
  rushList = [];
  hiddenPending = false;
  hiddenFight = false;
  eightUnlocked = false;
  hiddenChecks = 0;
  book = 1;
  endless = !1;
  floor = 0;
  endlessBase = _0x118772;
  endlessPool = [];
  nextFloorTheme = 0;
  tower = !1;
  towerCleared = 0;
  towerBosses = [];
  constructor(_0x6c1952, _0x10d42b) {
    this.rewardReceipt = globalThis.crypto?.randomUUID?.() ?? String(Date.now()) + "-" + Math.random();
    const _0x416504 = {
      "JBqwW": function (_0x3dcaa6, _0x367151) {
        return _0x3dcaa6(_0x367151);
      },
      "GsOFf": "gold",
      "KdoVl": "potion",
      "EhSgM": "stone",
      "nDRXM": function (_0x2b7955, _0x69d689) {
        return _0x2b7955 / _0x69d689;
      }
    };
    this.rng = new ga(_0x10d42b);
    const [_0x3b1685, _0x578fed] = _0x6c1952.loadout.chars, _0xed2d4b = _0x173dd0 => ({
      "id": _0x173dd0,
      "lv": _0x6c1952.chars[_0x173dd0]?.lv ?? 1,
      "aw": _0x6c1952.chars[_0x173dd0]?.aw ?? 0,
      "temp": !1
    });
    this.party = [_0xed2d4b(_0x3b1685), _0xed2d4b(_0x578fed || _0x3b1685)];
    const _0x1c328c = _0x6c1952.loadout.weapon;
    const _0x237ea9 = {};
    (_0x237ea9.id = _0x1c328c, _0x237ea9.rf = _0x6c1952.weapons[_0x1c328c]?.rf ?? 1, (this.weapon = _0x237ea9, this.gold = Math.round(fe(_0x6c1952.upgrades, _0x416504.GsOFf)), this.revives = _0x6c1952.upgrades.revive ?? 0, _0x6c1952.upgrades.potion && this.items.push(_0x416504.KdoVl), this.curse = _0x6c1952.curse, this.upStone = fe(_0x6c1952.upgrades, _0x416504.EhSgM) / 100, this.upCrystal = fe(_0x6c1952.upgrades, "crystal") / 100, this.tutorial = !_0x6c1952.tutorialDone, this.story = Math.max(1, Math.min(_0x6c1952.storyMax, _0x6c1952.story)), this.newChapter(1, this.storyDef.route[0][0])));
  }
  get storyDef() {
    const _0x54394f = {
      "tSsoF": function (_0x451e6b, _0x5a9656) {
        return _0x451e6b(_0x5a9656);
      }
    };
    return ke(this.story);
  }
  get power() {
    const _0x2ecd3c = {
      UcTfz: "boss"
    };
    const _0x29fe12 = _0x2ecd3c;
    return this.endless ? Pa(this.endlessBase, this.floor) : this.tower ? za(this.floor, this.nodes[this.cur]?.type === _0x29fe12.UcTfz) : this.bossRush ? {
      "hp": this.storyDef.power.hp * Ce.hp * cycleMultiplier(rushCycle(this.chapter, this.rushList.length)),
      "atk": this.storyDef.power.atk * Ce.atk * cycleMultiplier(rushCycle(this.chapter, this.rushList.length))
    } : this.storyDef.power;
  }
  nextThemes() {
    if (this.endless || this.tower) return [this.nextFloorTheme];
    if (this.bossRush) {
      const _0x312600 = this.rushList[this.chapter % this.rushList.length];
      return _0x312600 ? [_0x312600.theme] : [];
    }
    return this.storyDef.route[this.chapter] ?? [];
  }
  startBossRush(_0x2d8eca, _0x26740e = _0x2d8eca.book ?? 1) {
    const save = arguments[0], book = (arguments[1] ?? save.book) ?? 1;
    this.bossRush = true;
    this.eightUnlocked = !!save.eightUnlocked;
    this.tutorial = false;
    this.book = A(book).id;
    this.rushList = selectBossTrialRoute(Fa(this.book), save);
    if (this.rushList.length) this.newChapter(1, this.rushList[0].theme);
  }
  startEndless(_0x5e1368, _0xc6db49 = _0x5e1368.book ?? 1) {
    const _0x3c0abf = {
      "cCYpl": function (_0x5313f0, _0x54b7fa) {
        return _0x5313f0(_0x54b7fa);
      },
      "kRXNG": function (_0x19bf57, _0x273e2d) {
        return _0x19bf57(_0x273e2d);
      }
    };
    (this.endless = !0, this.tutorial = !1, this.book = A(_0xc6db49).id, this.endlessPool = G(this.book), this.story = A(this.book).stories[0], this.endlessBase = {
      ...ke(this.story).power
    }, this.nextFloorTheme = this.rollFloorTheme(), this.newChapter(1, this.nextFloorTheme));
  }
  startTower() { throw new Error('사자의 탑은 제거되었습니다'); }
  towerTheme(_0x208201) {
    const _0x41e760 = {
      HZDOl: "boss"
    };
    (_0x41e760.zfQTZ = function (_0x1ad894, _0x118ec3) {
      return _0x1ad894 === _0x118ec3;
    }, _0x41e760.SBOcd = function (_0x81f77b, _0x26ffe4) {
      return _0x81f77b + _0x26ffe4;
    }, _0x41e760.gPIvm = function (_0x4e41c6, _0x4ddc8d) {
      return _0x4e41c6 - _0x4ddc8d;
    });
    const _0x4eb835 = _0x41e760;
    if (_0x208201 > u.floors) return this.theme;
    if (he(_0x208201) === _0x4eb835.HZDOl) return this.towerBosses[_0x208201 / u.bossEvery - 1] ?? this.theme;
    const _0x16bc63 = _0x4eb835.zfQTZ(he(_0x4eb835.SBOcd(_0x208201, 1)), _0x4eb835.HZDOl) ? this.towerBosses[_0x4eb835.gPIvm((_0x208201 + 1) / u.bossEvery, 1)] ?? 0 : 0;
    return Na(_0x208201, () => this.rng.next(), [this.theme, _0x16bc63]);
  }
  rollFloorTheme() {
    const _0x18b8dc = this.endlessPool.filter(_0x342f30 => _0x342f30.theme !== this.theme || this.endlessPool.length < 2);
    return this.rng.pick(_0x18b8dc.length ? _0x18b8dc : this.endlessPool).theme;
  }
  newChapter(_0x2cee6c, _0x3a97ff) {
    const _0x6a5669 = {
      "OQVyg": function (_0x52ad78, _0x576a00) {
        return _0x52ad78(_0x576a00);
      },
      "RZQmY": function (_0x5897c5, _0x3cec82) {
        return _0x5897c5(_0x3cec82);
      },
      "JXAcS": function (_0x1219b0, _0x33b297) {
        return _0x1219b0 === _0x33b297;
      },
      "rUzLb": function (_0x41337b, _0x500717) {
        return _0x41337b - _0x500717;
      },
      "BBZhl": "boss",
      "SfQGG": function (_0x4c0ecf, _0x5d59b1, _0x34da39, _0x238f62) {
        return _0x4c0ecf(_0x5d59b1, _0x34da39, _0x238f62);
      },
      "FInKp": function (_0x351186, _0x28b42c) {
        return _0x351186 === _0x28b42c;
      }
    };
    if (this.endless) {
      const _0x5d8a19 = this.endlessPool.find(_0x316b0d => _0x316b0d.theme === _0x3a97ff) ?? this.endlessPool[0];
      (this.floor = _0x2cee6c, this.chapter = 1, this.theme = _0x5d8a19.theme, this.story = _0x5d8a19.story);
      const _0x4f6c4e = Ua(_0x2cee6c), _0x1526c6 = {};
      (_0x1526c6.id = 0, _0x1526c6.layer = 0, _0x1526c6.idx = 0, _0x1526c6.type = _0x4f6c4e, _0x1526c6.next = _0x4f6c4e === "boss" ? [] : [-1], _0x1526c6.visited = !0, (this.nodes = [_0x1526c6], this.layers = [[0]], this.cur = 0, this.nextFloorTheme = this.rollFloorTheme()));
      return;
    }
    if (this.tower) {
      (this.floor = _0x2cee6c, this.chapter = 1, this.theme = _0x3a97ff, this.story = La(_0x3a97ff));
      const _0x469970 = he(_0x2cee6c);
      (this.nodes = [{
        "id": 0,
        "layer": 0,
        "idx": 0,
        "type": _0x469970,
        "next": _0x469970 === "boss" ? [] : [-1],
        "visited": !0
      }], this.layers = [[0]], this.cur = 0, this.nextFloorTheme = this.towerTheme(_0x2cee6c + 1));
      return;
    }
    if (this.bossRush) {
      const _0x23a66a = this.rushList[(_0x2cee6c - 1) % this.rushList.length], _0x3ae380 = {};
      (_0x3ae380.id = 0, _0x3ae380.layer = 0, _0x3ae380.idx = 0, _0x3ae380.type = _0x6a5669.BBZhl, _0x3ae380.next = [], _0x3ae380.visited = !0, (this.story = _0x23a66a.story, this.chapter = _0x2cee6c, this.theme = _0x23a66a.theme, this.nodes = [_0x3ae380], this.layers = [[0]], this.cur = 0));
      return;
    }
    (this.chapter = _0x2cee6c, this.theme = _0x3a97ff);
    const _0x2da7ab = $a(this.rng, _0x2cee6c, _0x2cee6c === 1 && this.tutorial && this.story === 1);
    (this.nodes = _0x2da7ab.nodes, this.layers = _0x2da7ab.layers, this.cur = 0, this.nodes[0].visited = !0);
  }
  get node() {
    return this.nodes[this.cur];
  }
  get curseEnemy() {
    return ee[this.curse]?.enemy ?? 0;
  }
  get curseReward() {
    return ee[this.curse]?.reward ?? 0;
  }
  upStone = 0;
  upCrystal = 0;
  get modeMul() {
    return this.endless ? Y.endless : this.tower ? Y.tower : this.bossRush ? Y.rush : Y.story;
  }
  gain(_0x3cd982, _0x3ea1db) {
    const _0x4ccf28 = {
      bGQfG: function (_0x510d45, _0x23cb65) {
        return _0x510d45 * _0x23cb65;
      }
    };
    _0x4ccf28.hXLwL = function (_0xdc0554, _0x558d88) {
      return _0xdc0554 + _0x558d88;
    };
    const _0x258544 = _0x4ccf28, _0x561da1 = this.modeMul, _0x95eb43 = (_0x8a659f, _0x1f5f4b) => _0x8a659f > 0 ? Math.max(1, Math.round(_0x8a659f * _0x1f5f4b)) : 0, _0x1c2e47 = _0x95eb43(_0x3cd982, _0x561da1.stones * _0x258544.hXLwL(1, this.curseReward) * (1 + this.upStone)), _0x15c9eb = _0x95eb43(_0x3ea1db, _0x561da1.crystals * (1 + this.curseReward * 0.5) * (1 + this.upCrystal));
    return (this.stats.stones += _0x1c2e47, this.stats.crystals += _0x15c9eb, {
      "stones": _0x1c2e47,
      "crystals": _0x15c9eb
    });
  }
  rollRelics(count) { return rollRelicChoices(Ue, count, () => this.rng.next(),this.relics); }
  rollChar() {
    const _0x31c569 = this.party.map(_0x2ed40a => _0x2ed40a.id), _0x1fe2eb = re.filter(_0x17af18 => _0x17af18.rarity < 8 && !_0x31c569.includes(_0x17af18.id)), _0x36f0c6 = {};
    (_0x36f0c6["3"] = 6, _0x36f0c6["4"] = 3, _0x36f0c6["5"] = 1, _0x36f0c6["6"] = 0.3);
    return (_0x36f0c6["7"] = 0.1, this.rng.weighted(_0x1fe2eb, _0x3d9534 => _0x36f0c6[_0x3d9534.rarity] ?? 1).id);
  }
  rollWeapons(_0x33b640) {
    const _0x381149 = {
      Kvkaj: function (_0x243465, _0x3233f4) {
        return _0x243465 < _0x3233f4;
      }
    };
    const _0x50bcc1 = _0x381149;
    const _0x889c98 = ve.filter(_0x1f8764 => _0x1f8764.id !== this.weapon.id && !_0x1f8764.owner), _0x24dd46 = [], _0xdefc83 = [..._0x889c98];
    for (let _0x2621d8 = 0; _0x2621d8 < _0x33b640 && _0xdefc83.length; _0x2621d8++) {
      const _0x337569 = this.rng.weighted(_0xdefc83, _0x33db05 => _0x33db05.rarity === 3 ? 6 : _0x33db05.rarity === 4 ? 3 : _0x33db05.rarity === 7 ? 0.03 : _0x33db05.rarity === 6 ? 0.25 : 0.8 + this.chapter * 0.3);
      (_0x24dd46.push(_0x337569.id), _0xdefc83.splice(_0xdefc83.indexOf(_0x337569), 1));
    }
    return _0x24dd46;
  }
}
function d0(_0x2049c4, _0xf34579) {
  return {
    "v": 1,
    "data": JSON.parse(JSON.stringify(_0x2049c4, (_0x5554c1, _0x2f49ca) => _0x5554c1 === "rng" ? void 0 : _0x2f49ca)),
    "rngEntry": _0xf34579.rngEntry,
    "rngNow": _0x2049c4.rng.state,
    "template": _0xf34579.template,
    "room": {
      "cleared": _0xf34579.cleared,
      "bossDown": _0xf34579.bossDown,
      "used": _0xf34579.used
    },
    "savedAt": Date.now()
  };
}
function n0(_0x4fb2b5, _0x44d0ab) {
  const _0x35a8a6 = {
    "jIlDF": function (_0x2db0d0, _0x57c39b) {
      return _0x2db0d0(_0x57c39b);
    }
  }, _0x2ec317 = new Va(_0x4fb2b5);
  return (Object.assign(_0x2ec317, Xa(_0x44d0ab.data), {relics:capRelics(_0x44d0ab.data.relics??[])}), _0x2ec317.rng.state = _0x44d0ab.rngEntry, _0x2ec317);
}
function Xa(_0x336490) {
  return JSON.parse(JSON.stringify(_0x336490));
}
function Ya(_0x1ed474) {
  const _0x36eb44 = {
    rtiYD: function (_0x1d3bab, _0x33b4d5) {
      return _0x1d3bab !== _0x33b4d5;
    },
    cJxYv: "object",
    SDkVz: function (_0x2c7785, _0xb5f461) {
      return _0x2c7785 != _0xb5f461;
    }
  };
  const _0x3c62d6 = _0x36eb44, _0x245c7c = _0x1ed474;
  if (!_0x245c7c || _0x245c7c.v !== 1 || typeof _0x245c7c.data != _0x3c62d6.cJxYv || !_0x245c7c.data || typeof _0x245c7c.rngEntry != "number" || !_0x245c7c.room) return null;
  const _0x19d712 = _0x245c7c.data;
  return !Array.isArray(_0x19d712.nodes) || !Array.isArray(_0x19d712.party) || typeof _0x19d712.cur != "number" ? null : _0x245c7c;
}
const ge = 9 * 3600000, Za = 7 * 86400000;
function xe(at) { return weekStart(at); }
function ze(at) { return weekKey(at); }
const _0x27d247 = {
  key: "prog",
  asc: !1,
  label: "진행도"
};
const _0x442165 = {
  key: "tower",
  asc: !1,
  label: "사자의 탑"
};
const _0x263a00 = {
  key: "curse",
  asc: !1,
  label: "저주 단계"
};
const f0 = _0x19befa => ze(xe(_0x19befa) - 1), m0 = _0x3c5a66 => xe(_0x3c5a66) + Za - _0x3c5a66, h0 = (_0x53b26a, _0xaf69e2) => "w" + _0x53b26a + "_" + _0xaf69e2, qa = _0x399286 => U(_0x399286).name + " 스토리 " + L(_0x399286), p0 = [_0x27d247, ...B.map(_0x4f2445 => ({
  "key": "endless" + _0x4f2445.id,
  "asc": !1,
  "label": "무한 모드 " + _0x4f2445.name
})), ...B.map(_0x15e5f8 => ({
  "key": "rush" + _0x15e5f8.id,
  "asc": !1,
  "label": "보스러쉬 " + _0x15e5f8.name
})), {key:"endless",asc:false,label:"무한 주간 종합"}, {key:"rush",asc:false,label:"보스러쉬 주간 종합"}, _0x263a00, ...E.map(_0x2531f4 => ({
  "key": "time" + _0x2531f4.id,
  "asc": !0,
  "label": qa(_0x2531f4.id) + " 시간"
}))], Qa = _0x5bc275 => _0x5bc275.startsWith("time"), Ja = ["prog", "endless", "rush"];
function u0(category) { return Ja.includes(category) ? {stones:0,compass:2} : null; }
function k0(_0x17fc36, _0x26f8d0) {
  const _0x37677f = {
    "uEhfM": function (_0x2adbef, _0x5a0d78) {
      return _0x2adbef === _0x5a0d78;
    },
    "SZqAy": "저주 없음",
    "jOfSD": "time",
    "nWrHK": function (_0x729a00, _0x51e197) {
      return _0x729a00(_0x51e197);
    },
    "HBBJr": function (_0x3e9ff5, _0x3bc1fc) {
      return _0x3e9ff5(_0x3bc1fc);
    }
  };
  return _0x17fc36 === "prog" ? Math.floor(_0x26f8d0 / 100) + "개 완수" : _0x17fc36.startsWith("endless") || _0x17fc36 === "tower" ? _0x26f8d0 + "층" : _0x17fc36.startsWith("rush") ? _0x26f8d0 + "체" : _0x17fc36 === "curse" ? _0x26f8d0 === 0 ? _0x37677f.SZqAy : _0x26f8d0 + "단계" : _0x17fc36.startsWith(_0x37677f.jOfSD) ? et(_0x26f8d0) : String(_0x26f8d0);
}
function et(_0x30dd95) {
  const _0x174e6a = {
    QQoXK: function (_0x39b7d0, _0x5b99d9) {
      return _0x39b7d0 % _0x5b99d9;
    }
  };
  const _0x2edbfc = _0x174e6a, _0x8debd8 = Math.max(0, Math.round(_0x30dd95)), _0x7420de = Math.floor(_0x8debd8 / 3600), _0x448d47 = Math.floor(_0x8debd8 % 3600 / 60), _0x1df303 = String(_0x8debd8 % 60).padStart(2, "0");
  return _0x7420de ? _0x7420de + ":" + String(_0x448d47).padStart(2, "0") + ":" + _0x1df303 : _0x448d47 + ":" + _0x1df303;
}
function Le(_0x172db7) {
  return E.filter(_0x1c1d91 => _0x172db7.storyClear?.[_0x1c1d91.id]).length * 100 + (_0x172db7.storyMax ?? 1);
}
function b0(_0xf5811) {
  const _0x547019 = {
    VwzaJ: function (_0xe6ac9d, _0x43d32e) {
      return _0xe6ac9d > _0x43d32e;
    }
  };
  const _0x3b816b = _0x547019;
  const _0x58837c = {
    "prog": Le(_0xf5811)
  };
  for (const _0x4d019f of B) {
    const _0xbeaa40 = Math.floor(_0xf5811.endlessBest?.[_0x4d019f.id] ?? 0), _0x102e10 = Math.floor(_0xf5811.rushBest?.[_0x4d019f.id] ?? 0);
    (_0xbeaa40 > 0 && (_0x58837c["endless" + _0x4d019f.id] = _0xbeaa40), _0x102e10 > 0 && (_0x58837c["rush" + _0x4d019f.id] = _0x102e10));
  }
  ((_0xf5811.tower?.best ?? 0) > 0 && (_0x58837c.tower = Math.floor(_0xf5811.tower.best)), (_0xf5811.curseBest ?? -1) >= 0 && (_0x58837c.curse = Math.floor(_0xf5811.curseBest)));
  for (const [_0x5e1a79, _0x4c9b34] of Object.entries(_0xf5811.storyTime ?? ({}))) _0x4c9b34 > 0 && (_0x58837c["time" + _0x5e1a79] = Math.round(_0x4c9b34));
  _0x58837c.endless=Math.max(0,...Object.values(_0xf5811.endlessBest??{}));
  _0x58837c.rush=Math.max(0,...Object.values(_0xf5811.rushBest??{}));
  delete _0x58837c.tower;
  return _0x58837c;
}
function Ge(_0x29e720, _0x45d188) {
  const _0x1b92de = {
    "bsryw": function (_0x5319ec, _0xc8bb4a) {
      return _0x5319ec(_0xc8bb4a);
    }
  };
  const _0x25f446 = ze(_0x45d188), _0x157beb = _0x29e720.weekly;
  _0x157beb && _0x157beb.key === _0x25f446 || (_0x29e720.weekly = {
    "key": _0x25f446,
    "scores": {},
    "prev": _0x157beb && _0x157beb.key ? {
      "key": _0x157beb.key,
      "scores": {
        ..._0x157beb.scores
      }
    } : void 0
  });
}
function z(_0x9a6c78, _0x267bae, _0x4006eb, _0x5f17e1) {
  const _0xcef43f = {
    dyxQj: function (_0x4d6ca9, _0x37e6b0) {
      return _0x4d6ca9 > _0x37e6b0;
    }
  };
  const _0x3e9b23 = _0xcef43f;
  Ge(_0x9a6c78, _0x5f17e1);
  const _0x38b8fe = _0x9a6c78.weekly.scores, _0x3f4ccc = _0x38b8fe[_0x267bae];
  (_0x3f4ccc === void 0 || (Qa(_0x267bae) ? _0x4006eb < _0x3f4ccc : _0x4006eb > _0x3f4ccc)) && (_0x38b8fe[_0x267bae] = _0x4006eb);
}
function st(save, at) { Ge(save,at); return {...save.weekly.scores}; }
function g0(_0x38a818, _0x5e16ba, _0x4155c8) {
  const _0x1131ad = {
    "bPGxk": function (_0x381e8f, _0x4d37fc) {
      return _0x381e8f > _0x4d37fc;
    },
    "asnQr": function (_0x113ff5, _0x4fc1f6, _0x540267, _0x23cc82, _0x1a221d) {
      return _0x113ff5(_0x4fc1f6, _0x540267, _0x23cc82, _0x1a221d);
    },
    "wLVxh": "curse"
  };
  if (_0x5e16ba.tower) (_0x5e16ba.towerFloor ?? 0) > 0 && z(_0x38a818, "tower", _0x5e16ba.towerFloor, _0x4155c8); else {
    if (_0x5e16ba.endless) _0x5e16ba.floor > 0 && z(_0x38a818, "endless" + _0x5e16ba.book, _0x5e16ba.floor, _0x4155c8); else {
      if (_0x5e16ba.bossRush) _0x5e16ba.bosses > 0 && z(_0x38a818, "rush" + _0x5e16ba.book, _0x5e16ba.bosses, _0x4155c8); else {
        if (_0x5e16ba.victory) {
          (_0x38a818.curseBest = Math.max(_0x38a818.curseBest ?? -1, _0x5e16ba.curse), z(_0x38a818, _0x1131ad.wLVxh, _0x5e16ba.curse, _0x4155c8));
          const _0x5d5e6c = Math.max(1, Math.round(_0x5e16ba.frames / 60)), _0x31ad73 = _0x38a818.storyTime[_0x5e16ba.story];
          ((!_0x31ad73 || _0x5d5e6c < _0x31ad73) && (_0x38a818.storyTime[_0x5e16ba.story] = _0x5d5e6c), z(_0x38a818, "time" + _0x5e16ba.story, _0x5d5e6c, _0x4155c8));
        }
      }
    }
  }
  if (_0x5e16ba.endless && _0x5e16ba.floor > 0) z(_0x38a818, "endless", _0x5e16ba.floor, _0x4155c8);
  if (_0x5e16ba.bossRush && _0x5e16ba.bosses > 0) z(_0x38a818, "rush", _0x5e16ba.bosses, _0x4155c8);
  if (_0x5e16ba.victory && !_0x5e16ba.endless && !_0x5e16ba.bossRush && !_0x5e16ba.tower) z(_0x38a818, "prog", Le(_0x38a818), _0x4155c8);
  st(_0x38a818, _0x4155c8);
}
function at(_0x592b73) {
  const _0x21b464 = {
    "CpTEg": "string",
    "dsrnc": function (_0x281666, _0x1cab3e) {
      return _0x281666(_0x1cab3e);
    },
    "NQkFQ": function (_0x379674, _0x5b5112) {
      return _0x379674 == _0x5b5112;
    },
    "sIvEk": function (_0x31356a, _0x567fc0) {
      return _0x31356a(_0x567fc0);
    },
    "dzBEM": function (_0x1c0b13, _0x3a1639) {
      return _0x1c0b13 > _0x3a1639;
    },
    "mZIKh": function (_0x4abdbe, _0x4a0650) {
      return _0x4abdbe == _0x4a0650;
    },
    "HPQOS": "object"
  }, _0xbfc41b = _0x4a9ca1 => typeof _0x4a9ca1 == "number" && Number.isFinite(_0x4a9ca1), _0x7afb9f = _0x56212c => {
    const _0x5449d0 = {};
    if (_0x56212c && typeof _0x56212c == "object") {
      for (const [_0x588d7b, _0x486792] of Object.entries(_0x56212c)) (/^[a-z]+\d*$/).test(_0x588d7b) && _0xbfc41b(_0x486792) && (_0x5449d0[_0x588d7b] = Math.round(_0x486792));
    }
    return _0x5449d0;
  }, _0x1b25aa = _0xbfc41b(_0x592b73.curseBest) ? Math.max(-1, Math.floor(_0x592b73.curseBest)) : _0xbfc41b(_0x592b73.curseMax) && _0x592b73.curseMax > 0 ? Math.floor(_0x592b73.curseMax) - 1 : -1, _0x1fe9a4 = {};
  if (_0x592b73.storyTime && typeof _0x592b73.storyTime == "object") {
    for (const [_0x4acd97, _0x16ef40] of Object.entries(_0x592b73.storyTime)) E.some(_0x4d4616 => String(_0x4d4616.id) === _0x4acd97) && _0xbfc41b(_0x16ef40) && _0x16ef40 > 0 && (_0x1fe9a4[Number(_0x4acd97)] = Math.round(_0x16ef40));
  }
  const _0x5c6790 = _0xbf963f => {
    const _0x3f054e = _0xbf963f;
    return _0x3f054e && typeof _0x3f054e.key == _0x21b464.CpTEg && (/^\d{8}$/).test(_0x3f054e.key) ? {
      "key": _0x3f054e.key,
      "scores": _0x7afb9f(_0x3f054e.scores)
    } : void 0;
  }, _0x109431 = _0x5c6790(_0x592b73.weekly), _0x338261 = _0x109431 ? {
    ..._0x109431,
    "prev": _0x5c6790(_0x592b73.weekly.prev)
  } : void 0, _0x24ac41 = {};
  if (_0x592b73.rankClaims && typeof _0x592b73.rankClaims == _0x21b464.HPQOS) {
    for (const [_0x392934, _0x42d45c] of Object.entries(_0x592b73.rankClaims)) _0x42d45c === !0 && (_0x24ac41[_0x392934] = !0);
  }
  const _0x42c7b5 = {
    curseBest: _0x1b25aa
  };
  return (_0x42c7b5.storyTime = _0x1fe9a4, _0x42c7b5.weekly = _0x338261, _0x42c7b5.rankClaims = _0x24ac41, _0x42c7b5);
}
const Ne = 50, se = 10, We = 5, tt = 50, Ke = _0x493f3c => Math.max(10, Math.round(tt * _0x493f3c * _0x493f3c / 10) * 10), rt = 0.08, ot = 0.02, lt = 0.03, it = 0.01;
function w0(_0x2203b7) {
  const _0x2db40a = {
    ipnXb: function (_0x2b998e, _0x23c113) {
      return _0x2b998e + _0x23c113;
    },
    dMUkJ: function (_0x99d588, _0x51cbd0) {
      return _0x99d588 * _0x51cbd0;
    }
  };
  const _0x367400 = _0x2db40a;
  return Math.min(_0x2203b7, se) * rt + Math.max(0, _0x2203b7 - se) * lt;
}
function y0(_0x292246) {
  const _0x375b05 = {
    gFyEx: function (_0x4dcf95, _0x109636) {
      return _0x4dcf95 * _0x109636;
    }
  };
  const _0x4cc1ea = _0x375b05;
  return Math.min(_0x292246, se) * ot + Math.max(0, _0x292246 - se) * it;
}
function ct(rarity, current) {
  return weaponEnhanceCost(current + 1);
}
function v0(_0x1694f6, _0x568398) {
  return _0x1694f6.weapons[_0x568398]?.en ?? 0;
}
function x0(_0x15509d, _0x5c8f82) {
  const _0x40769b = Ea[_0x5c8f82], _0x252c0e = _0x15509d.weapons[_0x5c8f82];
  if (!_0x40769b || !_0x252c0e) return !1;
  const _0x3bcc0d = _0x252c0e.en ?? 0;
  if (_0x3bcc0d >= Ne) return !1;
  const _0x118b5d = ct(_0x40769b.rarity, _0x3bcc0d);
  return _0x15509d.crystals < _0x118b5d ? !1 : (_0x15509d.crystals -= _0x118b5d, _0x252c0e.en = _0x3bcc0d + 1, !0);
}
const Ie = 50, dt = 0.06, nt = 0.02;
function ft(_0x31d92f) {
  const _0x43ccd = {
    YloQp: function (_0x3c1388, _0x177b1f) {
      return _0x3c1388 * _0x177b1f;
    }
  };
  const _0x4e2850 = _0x43ccd;
  return Math.min(_0x31d92f, We) * dt + Math.max(0, _0x31d92f - We) * nt;
}
const mt = ["skill1", "skill2", "ult", "swap"];
function ht(rarity, current) {
  return skillMasteryCost(current + 1);
}
function pt(_0x497395, _0x5258e9) {
  const _0x4fac3b = _0x497395.chars[_0x5258e9]?.sk;
  return [_0x4fac3b?.[0] ?? 0, _0x4fac3b?.[1] ?? 0, _0x4fac3b?.[2] ?? 0, _0x4fac3b?.[3] ?? 0];
}
function ut(_0x1d4410, _0x8bb9ae) {
  const _0x5713be = T[_0x1d4410];
  return _0x5713be ? _0x8bb9ae !== 2 || !!_0x5713be.ult : !1;
}
function _0(_0xb3373d, _0xce6125, _0x3ebf4a) {
  const _0x53c101 = {
    "LVpyW": function (_0x218d6c, _0x6ce0e3, _0x487dd0) {
      return _0x218d6c(_0x6ce0e3, _0x487dd0);
    },
    "aJhtZ": function (_0x93eff3, _0x2a9755) {
      return _0x93eff3 < _0x2a9755;
    }
  }, _0x103a7d = T[_0xce6125], _0x42c560 = _0xb3373d.chars[_0xce6125];
  if (!_0x103a7d || !_0x42c560 || _0x3ebf4a < 0 || _0x3ebf4a > 3 || !ut(_0xce6125, _0x3ebf4a)) return !1;
  const _0x5aa82d = pt(_0xb3373d, _0xce6125);
  if (_0x5aa82d[_0x3ebf4a] >= Ie) return !1;
  const _0x35a37d = ht(_0x103a7d.rarity, _0x5aa82d[_0x3ebf4a]);
  return _0xb3373d.crystals < _0x35a37d ? !1 : (_0xb3373d.crystals -= _0x35a37d, _0x5aa82d[_0x3ebf4a]++, _0x42c560.sk = _0x5aa82d, !0);
}
function S0(_0x1c5a3a) {
  const _0x4c19a7 = [];
  return (_0x1c5a3a && mt.forEach((_0x315e47, _0x10e4dc) => {
    const _0x181a42 = _0x1c5a3a[_0x10e4dc] ?? 0;
    _0x181a42 > 0 && _0x4c19a7.push({
      "target": _0x315e47,
      "dmg": ft(_0x181a42)
    });
  }), _0x4c19a7);
}
const _0x5be682 = {
  cost: 100,
  gain: 30
};
const Be = _0x5be682;
function j0(_0x40042d, _0x1d366a = 1) {
  const _0x2d022f = Math.max(1, Math.floor(_0x1d366a)), _0x3040ef = Be.cost * _0x2d022f;
  return _0x40042d.crystals < _0x3040ef ? !1 : (_0x40042d.crystals -= _0x3040ef, _0x40042d.stones += Be.gain * _0x2d022f, !0);
}
const _0x58360d = {
  buy: 50,
  sell: 20
};

const we = _0x58360d, Me = ECONOMY.awakeningBase;
function kt(rarity, current = 0) {
  return awakeningCost(rarity, current);
}
function D0(_0x1bb0b9, _0x57e058) {
  const _0x2fc669 = Math.max(1, Math.floor(_0x57e058));
  return _0x1bb0b9.crystals < we.buy * _0x2fc669 ? !1 : (_0x1bb0b9.crystals -= we.buy * _0x2fc669, _0x1bb0b9.awShards += _0x2fc669, !0);
}
function C0(_0x5c3bb5, _0x45aa27) {
  const _0x3444e2 = {
    udIel: function (_0x14136d, _0x461194) {
      return _0x14136d < _0x461194;
    },
    MzYbb: function (_0x27f284, _0x5afdfb) {
      return _0x27f284 * _0x5afdfb;
    }
  };
  const _0x2349eb = _0x3444e2;
  const _0x308a26 = Math.max(1, Math.floor(_0x45aa27));
  return _0x5c3bb5.awShards < _0x308a26 ? !1 : (_0x5c3bb5.awShards -= _0x308a26, _0x5c3bb5.crystals += we.sell * _0x308a26, !0);
}
function W0(save, id) {
  const definition = T[id], hero = save.chars[id];
  if (!definition || !hero || hero.aw >= wr) return false;
  const cost = kt(definition.rarity, hero.aw);
  if (save.awShards < cost) return false;
  save.awShards -= cost;
  hero.aw++;
  return true;
}
function B0(_0xd7711b) {
  return 150 + _0xd7711b * 100;
}
const He = (_0x4073e, _0x103bda) => typeof _0x4073e == "number" && Number.isFinite(_0x4073e) ? Math.max(0, Math.min(_0x103bda, Math.floor(_0x4073e))) : 0;
function bt(_0x29c823) {
  const _0x1b1848 = {
    "jhTJs": "object",
    "TKzid": function (_0x188865, _0x1d9f5f, _0x176e52) {
      return _0x188865(_0x1d9f5f, _0x176e52);
    }
  };
  for (const _0x44394c of Object.keys(_0x29c823.weapons)) {
    const _0x16d82e = _0x29c823.weapons[_0x44394c];
    if (!(!_0x16d82e || typeof _0x16d82e != _0x1b1848.jhTJs) && _0x16d82e.en !== void 0) {
      const _0x55d244 = He(_0x16d82e.en, Ne);
      _0x55d244 ? _0x16d82e.en = _0x55d244 : delete _0x16d82e.en;
    }
  }
  for (const _0x52684f of Object.keys(_0x29c823.chars)) {
    const _0x56e32d = _0x29c823.chars[_0x52684f];
    if (!(!_0x56e32d || typeof _0x56e32d != _0x1b1848.jhTJs) && _0x56e32d.sk !== void 0) {
      const _0x2a9b62 = Array.isArray(_0x56e32d.sk) ? _0x56e32d.sk : [], _0x25c39d = [0, 1, 2, 3].map(_0x26ca8c => He(_0x2a9b62[_0x26ca8c], Ie));
      _0x25c39d.some(_0x194643 => _0x194643 > 0) ? _0x56e32d.sk = _0x25c39d : delete _0x56e32d.sk;
    }
  }
}
const _0x9d3dea = {
  col: "#ffb080",
  vis: "fire",
  drop: "rock",
  proj: "fireball",
  st: "burn"
};
const definition_kardun = {
  id: "kardun",
  theme: 11,
  name: "잿빛 순례단장 카르둔",
  title: "재를 밟고 걷는 자",
  hp: 2300,
  atk: 15,
  big: !0,
  phases: [0.5],
  patterns: [["shovelSlam", "charge", "starfall", "spikeWave", "summon"], ["shovelSlam", "charge", "starfall", "spikeWave", "summon", "leapSmash", "shockRing"]],
  col: "#ffb080",
  elem: _0x9d3dea
};
const _0x3e8555 = {
  col: "#ffe0a0",
  vis: "holy",
  drop: "blade",
  proj: "orb"
};
const definition_bellona = {
  id: "bellona",
  theme: 12,
  name: "울림의 사제 벨로나",
  title: "거꾸로 울리는 종의 목소리",
  hp: 3100,
  atk: 17,
  phases: [0.5],
  patterns: [["shockRing", "radialBurst", "pillarMarch", "homingOrbs", "teleSlam"], ["shockRing", "radialBurst", "pillarMarch", "homingOrbs", "teleSlam", "crossBeam", "floorHalf"]],
  col: "#ffe0a0",
  elem: _0x3e8555
};
const _0x3c62e2 = {
  col: "#c0c0ff",
  vis: "star",
  drop: "shard",
  proj: "shard"
};
const definition_astril = {
  id: "astril",
  theme: 13,
  name: "광맥의 여왕 아스트릴",
  title: "별빛을 캐내 왕관을 엮은 자",
  hp: 3900,
  atk: 19,
  phases: [0.5],
  patterns: [["spikeWave", "aimedFan", "starfall", "summon", "radialBurst"], ["spikeWave", "aimedFan", "starfall", "summon", "radialBurst", "crossBeam", "pillarMarch"]],
  col: "#a0a0ff",
  elem: _0x3c62e2
};
const _0x3623db = {
  col: "#a0e080",
  vis: "poison",
  drop: "blade",
  proj: "soul",
  st: "poison"
};
const definition_elowin = {
  id: "elowin",
  theme: 14,
  name: "천공 정원사 엘로윈",
  title: "구름 위의 마지막 정원을 지키는 자",
  hp: 4600,
  atk: 21,
  phases: [0.5],
  patterns: [["spikeWave", "homingOrbs", "dashSlash", "gravityWell", "summon"], ["spikeWave", "homingOrbs", "dashSlash", "gravityWell", "summon", "starfall", "floorHalf"]],
  col: "#a0e080",
  elem: _0x3623db
};
const _0x3d270a = {
  col: "#ffe080",
  vis: "star",
  drop: "fireball",
  proj: "star"
};
const definition_orbis = {
  id: "orbis",
  theme: 15,
  name: "천문관 오르비스",
  title: "성좌의 궤도를 다시 쓰는 자",
  hp: 5400,
  atk: 23,
  phases: [0.5],
  patterns: [["radialBurst", "crossBeam", "laserSweep", "homingOrbs", "teleSlam"], ["radialBurst", "crossBeam", "laserSweep", "homingOrbs", "teleSlam", "starfall", "gravityWell", "execZones"]],
  col: "#ffe080",
  elem: _0x3d270a
};
const _0x3f47a3 = {
  col: "#c0b0ff",
  vis: "void",
  drop: "shard",
  proj: "orb"
};
const definition_nemesia = {
  id: "nemesia",
  theme: 16,
  name: "꺼진 별 네메시아",
  title: "혼을 삼켜 다시 빛나려는 죽은 별",
  hp: 6800,
  atk: 26,
  mult: 3,
  phases: [0.66, 0.33],
  patterns: [["swordCombo", "radialBurst", "starfall", "crossBeam", "gravityWell"], ["swordCombo", "radialBurst", "starfall", "crossBeam", "gravityWell", "laserSweep", "cloneDash", "execHalf"], ["swordCombo", "radialBurst", "starfall", "crossBeam", "gravityWell", "laserSweep", "cloneDash", "meteor", "floorHalf", "execHalf"]],
  col: "#c0b0ff",
  elem: _0x3f47a3
};
const _0x4d1c2b = {
  col: "#d0a080",
  vis: "poison",
  drop: "spear",
  proj: "blade",
  st: "poison"
};
const definition_grak = {
  id: "grak",
  theme: 21,
  name: "썩은 장군 그라크",
  title: "끝나지 않은 전쟁의 지휘관",
  hp: 2500,
  atk: 16,
  big: !0,
  phases: [0.5],
  patterns: [["swordCombo", "charge", "summon", "starfall", "shockRing"], ["swordCombo", "charge", "summon", "starfall", "shockRing", "leapSmash", "pillarMarch"]],
  col: "#c08060",
  elem: _0x4d1c2b
};
const _0x389af1 = {
  col: "#ff4070",
  vis: "blood",
  drop: "blade",
  proj: "orb"
};
const definition_seraphine = {
  id: "seraphine",
  theme: 22,
  name: "포도원의 백작부인 세라핀",
  title: "피로 빚은 포도주의 주인",
  hp: 3300,
  atk: 18,
  phases: [0.5],
  patterns: [["dashSlash", "homingOrbs", "aimedFan", "cloneDash", "teleSlam"], ["dashSlash", "homingOrbs", "aimedFan", "cloneDash", "teleSlam", "floorHalf", "radialBurst"]],
  col: "#ff4070",
  elem: _0x389af1
};
const _0x98a36d = {
  col: "#ffc070",
  vis: "fire",
  drop: "rock",
  proj: "blade",
  st: "burn"
};
const definition_morg = {
  id: "morg",
  theme: 23,
  name: "간수장 모르그",
  title: "쇠사슬의 감옥을 쥔 손",
  hp: 4200,
  atk: 21,
  big: !0,
  phases: [0.5],
  patterns: [["leapSmash", "spikeWave", "pillarMarch", "summon", "charge"], ["leapSmash", "spikeWave", "pillarMarch", "summon", "charge", "shockRing", "gravityWell"]],
  col: "#ffc070",
  elem: _0x98a36d
};
const _0x3e71a2 = {
  col: "#ff6060",
  vis: "blood",
  drop: "blade",
  proj: "soul"
};
const definition_valerius = {
  id: "valerius",
  theme: 24,
  name: "타락한 추기경 발레리우스",
  title: "붉은 성가를 지휘하는 자",
  hp: 5000,
  atk: 23,
  phases: [0.5],
  patterns: [["crossBeam", "pillarMarch", "homingOrbs", "radialBurst", "summon"], ["crossBeam", "pillarMarch", "homingOrbs", "radialBurst", "summon", "laserSweep", "starfall"]],
  col: "#ff6060",
  elem: _0x3e71a2
};
const _0x39f595 = {
  col: "#e0e0b0",
  vis: "blood",
  drop: "blade",
  proj: "blade"
};
const definition_fenrik = {
  id: "fenrik",
  theme: 25,
  name: "늑대왕 펜릭",
  title: "달을 삼킨 짐승",
  hp: 5700,
  atk: 25,
  phases: [0.5],
  patterns: [["dashSlash", "leapSmash", "charge", "cloneDash", "shockRing"], ["dashSlash", "leapSmash", "charge", "cloneDash", "shockRing", "summon", "spikeWave", "execGround"]],
  col: "#ffe040",
  elem: _0x39f595
};
const _0x549d76 = {
  col: "#ff4070",
  vis: "blood",
  drop: "blade",
  proj: "orb"
};
const definition_carmilla = {
  id: "carmilla",
  theme: 26,
  name: "핏빛 여제 카르밀라",
  title: "영원한 왕관을 원한 자",
  hp: 7200,
  atk: 28,
  mult: 3,
  phases: [0.66, 0.33],
  patterns: [["dashSlash", "aimedFan", "homingOrbs", "crossBeam", "swordCombo"], ["dashSlash", "aimedFan", "homingOrbs", "crossBeam", "swordCombo", "cloneDash", "floorHalf", "execZones"], ["dashSlash", "aimedFan", "homingOrbs", "crossBeam", "swordCombo", "cloneDash", "floorHalf", "meteor", "laserSweep", "radialBurst", "execZones"]],
  col: "#ff4070",
  elem: _0x549d76
};
const _0x4227b6 = {
  col: "#80ffe0",
  vis: "ice",
  drop: "shard",
  proj: "orb",
  st: "chill"
};
const definition_levia = {
  id: "levia",
  theme: 31,
  name: "심해의 군주 레비아",
  title: "세계가 물이었을 때의 왕",
  hp: 2700,
  atk: 17,
  big: !0,
  phases: [0.5],
  patterns: [["shockRing", "gravityWell", "aimedFan", "summon", "pillarMarch"], ["shockRing", "gravityWell", "aimedFan", "summon", "pillarMarch", "starfall", "floorHalf"]],
  col: "#80ffe0",
  elem: _0x4227b6
};
const _0x43c0ba = {
  col: "#c0c080",
  vis: "poison",
  drop: "rock",
  proj: "spore",
  st: "poison"
};
const definition_yggdra = {
  id: "yggdra",
  theme: 32,
  name: "고대수 이그드라",
  title: "돌이 되어서도 기억하는 나무",
  hp: 3600,
  atk: 19,
  big: !0,
  still: !0,
  phases: [0.5],
  patterns: [["spikeWave", "starfall", "pillarMarch", "summon", "gravityWell"], ["spikeWave", "starfall", "pillarMarch", "summon", "gravityWell", "radialBurst", "shockRing"]],
  col: "#e0e0a0",
  elem: _0x43c0ba
};
const _0x51662f = {
  col: "#c0e0ff",
  vis: "thunder",
  drop: "spear",
  proj: "bolt"
};
const definition_taranis = {
  id: "taranis",
  theme: 33,
  name: "뇌신 타라니스",
  title: "하늘을 꿰매는 번개",
  hp: 4500,
  atk: 22,
  big: !0,
  phases: [0.5],
  patterns: [["crossBeam", "pillarMarch", "dashSlash", "starfall", "teleSlam"], ["crossBeam", "pillarMarch", "dashSlash", "starfall", "teleSlam", "laserSweep", "radialBurst"]],
  col: "#c0e0ff",
  elem: _0x51662f
};
const _0x36bded = {
  col: "#d0d0ff",
  vis: "holy",
  drop: "shard",
  proj: "shard"
};
const definition_mirror_4b6540 = {
  id: "mirror",
  theme: 34,
  name: "거울의 계약자",
  title: "거울 속의 그대",
  hp: 5200,
  atk: 24,
  phases: [0.5],
  patterns: [["cloneDash", "dashSlash", "swordCombo", "aimedFan", "teleSlam"], ["cloneDash", "dashSlash", "swordCombo", "aimedFan", "teleSlam", "radialBurst", "crossBeam"]],
  col: "#d0d0ff",
  elem: _0x36bded
};
const _0x48f78b = {
  col: "#ffe0a0",
  vis: "time",
  drop: "blade",
  proj: "orb"
};
const definition_aeon = {
  id: "aeon",
  theme: 35,
  name: "영겁의 파수꾼 에온",
  title: "멈춘 시간을 지키는 자",
  hp: 6000,
  atk: 26,
  big: !0,
  phases: [0.5],
  patterns: [["homingOrbs", "pillarMarch", "laserSweep", "radialBurst", "teleSlam"], ["homingOrbs", "pillarMarch", "laserSweep", "radialBurst", "teleSlam", "floorHalf", "gravityWell", "execHalf"]],
  col: "#ffe0a0",
  elem: _0x48f78b
};
const _0x13db1a = {
  col: "#fff0c0",
  vis: "holy",
  drop: "blade",
  proj: "soul"
};
const definition_arche = {
  id: "arche",
  theme: 36,
  name: "최초의 계약자 아르케",
  title: "모든 계약의 처음이자 끝",
  hp: 7800,
  atk: 30,
  mult: 3,
  phases: [0.66, 0.33],
  patterns: [["swordCombo", "crossBeam", "radialBurst", "cloneDash", "starfall"], ["swordCombo", "crossBeam", "radialBurst", "cloneDash", "starfall", "laserSweep", "gravityWell", "meteor", "execGround"], ["swordCombo", "crossBeam", "radialBurst", "cloneDash", "starfall", "laserSweep", "gravityWell", "meteor", "floorHalf", "pactShadows", "pillarMarch", "execGround"]],
  col: "#fff0c0",
  elem: _0x13db1a
};
const _0x53ce70 = {
  col: "#a0d0f0",
  vis: "thunder",
  drop: "spear",
  proj: "bolt"
};
const definition_branik = {
  id: "branik",
  theme: 41,
  name: "닻을 끊은 선장 브라니크",
  title: "하늘 항구의 마지막 선장",
  hp: 2900,
  atk: 18,
  big: !0,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["shovelSlam", "charge", "leapSmash", "starfall", "galeWaves", "homingOrbs"], ["shovelSlam", "charge", "leapSmash", "starfall", "galeWaves", "homingOrbs", "pillarMarch", "spikeWave", "summon"]],
  col: "#a0d0f0",
  elem: _0x53ce70
};
const _0x49e32c = {
  col: "#a0f0ff",
  vis: "ice",
  drop: "shard",
  proj: "shard",
  st: "chill"
};
const definition_lyanne = {
  id: "lyanne",
  theme: 42,
  name: "물안개 무녀 리안",
  title: "거꾸로 흐르는 물의 무녀",
  hp: 3800,
  atk: 20,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["aimedFan", "dashSlash", "teleSlam", "bladeHalo", "gravityWell", "skyCurtain"], ["aimedFan", "dashSlash", "teleSlam", "bladeHalo", "gravityWell", "skyCurtain", "laserSweep", "radialBurst", "floorHalf"]],
  col: "#a0f0ff",
  elem: _0x49e32c
};
const _0x1aed46 = {
  col: "#c0e0e0",
  vis: "thunder",
  drop: "bone",
  proj: "bolt",
  st: "shock"
};
const definition_osric = {
  id: "osric",
  theme: 43,
  name: "뼈고래 사제 오스릭",
  title: "폭풍 고래의 뼈를 지키는 자",
  hp: 4700,
  atk: 23,
  big: !0,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["shockRing", "leapSmash", "spikeWave", "pillarMarch", "homingOrbs", "floorSweep"], ["shockRing", "leapSmash", "spikeWave", "pillarMarch", "homingOrbs", "floorSweep", "meteor", "crossBeam", "summon"]],
  col: "#c0e0e0",
  elem: _0x1aed46
};
const _0xc2a7f5 = {
  col: "#fff0d0",
  vis: "holy",
  drop: "blade",
  proj: "blade"
};
const definition_penna = {
  id: "penna",
  theme: 44,
  name: "깃털 대주교 펜나",
  title: "날개 잃은 자들의 사제",
  hp: 5500,
  atk: 25,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["radialBurst", "aimedFan", "teleSlam", "bladeHalo", "crossBeam", "skyCurtain"], ["radialBurst", "aimedFan", "teleSlam", "bladeHalo", "crossBeam", "skyCurtain", "beamGrid", "laserSweep", "cloneDash"]],
  col: "#fff0d0",
  elem: _0xc2a7f5
};
const _0x2b8be9 = {
  col: "#c0e0ff",
  vis: "thunder",
  drop: "spear",
  proj: "bolt",
  st: "shock"
};
const definition_kalais = {
  id: "kalais",
  theme: 45,
  name: "폭풍의 사도 칼라이스",
  title: "하늘을 나는 마지막 사도",
  hp: 6300,
  atk: 27,
  flying: !0,
  orb: !0,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["diveBomb", "swoop", "aimedFan", "homingOrbs", "galeWaves", "laserSweep", "starfall", "eclipseDive"], ["diveBomb", "swoop", "aimedFan", "homingOrbs", "galeWaves", "laserSweep", "starfall", "radialBurst", "skyCurtain", "crossBeam", "eclipseDive"]],
  col: "#c0e0ff",
  elem: _0x2b8be9
};
const _0x1789e4 = {
  col: "#e0c0ff",
  vis: "void",
  drop: "shard",
  proj: "crescent"
};
const definition_sever = {
  id: "sever",
  theme: 46,
  name: "하늘을 찢는 자 세베르",
  title: "세계에 상처를 낸 칼날",
  hp: 8400,
  atk: 32,
  mult: 3,
  phases: [0.66, 0.33],
  multi: [3, 4, 5, 3],
  split: !0,
  patterns: [["swordCombo", "dashSlash", "spikeWave", "floorSweep", "checkerFloor", "starfall", "laserSweep"], ["swordCombo", "dashSlash", "spikeWave", "floorSweep", "checkerFloor", "starfall", "laserSweep", "beamGrid", "skyCurtain", "floorHalf", "worldSever"], ["swordCombo", "dashSlash", "spikeWave", "floorSweep", "checkerFloor", "starfall", "laserSweep", "beamGrid", "skyCurtain", "floorHalf", "meteor", "crossBeam", "cloneDash", "worldSever"], ["swordCombo", "dashSlash", "spikeWave", "floorSweep", "checkerFloor", "starfall", "laserSweep", "beamGrid", "skyCurtain", "meteor", "crossBeam", "worldSever"]],
  col: "#e0c0ff",
  elem: _0x1789e4
};
const _0x1aef3f = {
  col: "#ffe8a0",
  vis: "holy",
  drop: "rock",
  proj: "orb"
};
const definition_halvard = {
  id: "halvard",
  theme: 51,
  name: "잠긴 등대지기 할바르드",
  title: "꺼진 등불을 지키는 자",
  hp: 3100,
  atk: 19,
  big: !0,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["shovelSlam", "charge", "shockRing", "crossBeam", "homingOrbs", "laserSweep"], ["shovelSlam", "charge", "shockRing", "crossBeam", "homingOrbs", "laserSweep", "beamGrid", "starfall", "summon"]],
  col: "#ffe8a0",
  elem: _0x1aef3f
};
const _0x40502c = {
  col: "#ff90b0",
  vis: "poison",
  drop: "shard",
  proj: "spore",
  st: "poison"
};
const definition_coralie = {
  id: "coralie",
  theme: 52,
  name: "산호 묘지의 신부 코랄리",
  title: "산호로 굳은 신부",
  hp: 4000,
  atk: 21,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["dashSlash", "aimedFan", "spikeWave", "gravityWell", "bladeHalo", "checkerFloor"], ["dashSlash", "aimedFan", "spikeWave", "gravityWell", "bladeHalo", "checkerFloor", "cloneDash", "floorHalf", "skyCurtain"]],
  col: "#ff90b0",
  elem: _0x40502c
};
const _0x38d862 = {
  col: "#7090ff",
  vis: "void",
  drop: "rock",
  proj: "orb"
};
const definition_nekton = {
  id: "nekton",
  theme: 53,
  name: "해구의 군주 넥톤",
  title: "빛이 닿지 않는 바닥의 왕",
  hp: 4900,
  atk: 24,
  big: !0,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["leapSmash", "charge", "shockRing", "gravityWell", "floorSweep", "pillarMarch"], ["leapSmash", "charge", "shockRing", "gravityWell", "floorSweep", "pillarMarch", "meteor", "galeWaves", "summon"]],
  col: "#6080ff",
  elem: _0x38d862
};
const _0x3c8ccc = {
  col: "#ffd080",
  vis: "time",
  drop: "blade",
  proj: "star"
};
const definition_vesper = {
  id: "vesper",
  theme: 54,
  name: "거꾸로 선 도시의 시장 베스퍼",
  title: "뒤집힌 시간을 다스리는 자",
  hp: 5800,
  atk: 26,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["teleSlam", "swordCombo", "aimedFan", "floorHalf", "homingOrbs", "beamGrid"], ["teleSlam", "swordCombo", "aimedFan", "floorHalf", "homingOrbs", "beamGrid", "cloneDash", "laserSweep", "skyCurtain"]],
  col: "#ffd080",
  elem: _0x3c8ccc
};
const _0x234682 = {
  col: "#80ffc0",
  vis: "ice",
  drop: "shard",
  proj: "star",
  st: "chill"
};
const definition_noctis = {
  id: "noctis",
  theme: 55,
  name: "검은 오로라 녹티스",
  title: "심연 위를 나는 밤의 날개",
  hp: 6600,
  atk: 28,
  flying: !0,
  orb: !0,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["diveBomb", "swoop", "radialBurst", "bladeHalo", "skyCurtain", "crossBeam", "galeWaves", "eclipseDive"], ["diveBomb", "swoop", "radialBurst", "bladeHalo", "skyCurtain", "crossBeam", "galeWaves", "aimedFan", "meteor", "laserSweep", "eclipseDive"]],
  col: "#80ffc0",
  elem: _0x234682
};
const _0x1c2dc7 = {
  col: "#a0ffe0",
  vis: "void",
  drop: "shard",
  proj: "soul"
};
const definition_iska = {
  id: "iska",
  theme: 56,
  name: "바깥의 전령 이스카",
  title: "세계의 바깥에서 온 목소리",
  hp: 9000,
  atk: 34,
  mult: 3,
  phases: [0.66, 0.33],
  multi: [3, 4, 5, 3],
  split: !0,
  patterns: [["swordCombo", "dashSlash", "shockRing", "checkerFloor", "floorSweep", "skyCurtain", "beamGrid"], ["swordCombo", "dashSlash", "shockRing", "checkerFloor", "floorSweep", "skyCurtain", "beamGrid", "laserSweep", "floorHalf", "meteor", "worldSever"], ["swordCombo", "dashSlash", "shockRing", "checkerFloor", "floorSweep", "skyCurtain", "beamGrid", "laserSweep", "floorHalf", "meteor", "starfall", "crossBeam", "pactShadows", "gravityWell", "worldSever"], ["swordCombo", "dashSlash", "shockRing", "checkerFloor", "floorSweep", "skyCurtain", "beamGrid", "laserSweep", "meteor", "starfall", "crossBeam", "gravityWell", "worldSever"]],
  col: "#a0ffe0",
  elem: _0x1c2dc7
};
const _0x4256d6 = {
  col: "#e0d0ff",
  vis: "star",
  drop: "shard",
  proj: "star"
};
const definition_sandman = {
  id: "sandman",
  theme: 61,
  name: "모래꾼 잔드만",
  title: "잠의 모래를 뿌리는 자",
  hp: 3300,
  atk: 20,
  big: !0,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["shovelSlam", "leapSmash", "charge", "skyCurtain", "galeWaves", "homingOrbs"], ["shovelSlam", "leapSmash", "charge", "skyCurtain", "galeWaves", "homingOrbs", "gravityWell", "floorSweep", "summon"]],
  col: "#e0d0ff",
  elem: _0x4256d6
};
const _0x579264 = {
  col: "#ffd890",
  vis: "poison",
  drop: "blade",
  proj: "spore",
  st: "poison"
};
const definition_mneme = {
  id: "mneme",
  theme: 62,
  name: "기억의 정원사 므네메",
  title: "잊힌 기억을 거두는 자",
  hp: 4200,
  atk: 22,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["dashSlash", "aimedFan", "teleSlam", "spikeWave", "bladeHalo", "pillarMarch"], ["dashSlash", "aimedFan", "teleSlam", "spikeWave", "bladeHalo", "pillarMarch", "cloneDash", "checkerFloor", "homingOrbs"]],
  col: "#ffd890",
  elem: _0x579264
};
const _0x48c2a6 = {
  col: "#e8f0ff",
  vis: "crystal",
  drop: "spear",
  proj: "crystal"
};
const definition_labyrin = {
  id: "labyrin",
  theme: 63,
  name: "끝없는 계단의 설계자 라비린",
  title: "끝나지 않는 길을 그리는 자",
  hp: 5100,
  atk: 25,
  big: !0,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["teleSlam", "shockRing", "leapSmash", "beamGrid", "crossBeam", "laserSweep"], ["teleSlam", "shockRing", "leapSmash", "beamGrid", "crossBeam", "laserSweep", "floorHalf", "starfall", "summon"]],
  col: "#e8f0ff",
  elem: _0x48c2a6
};
const _0xc2cd36 = {
  col: "#ff6080",
  vis: "fire",
  drop: "blade",
  proj: "blade",
  st: "burn"
};
const definition_grimal = {
  id: "grimal",
  theme: 64,
  name: "악몽의 단장 그리말",
  title: "웃음이 멈추지 않는 천막의 주인",
  hp: 6000,
  atk: 27,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["swordCombo", "dashSlash", "cloneDash", "radialBurst", "homingOrbs", "checkerFloor"], ["swordCombo", "dashSlash", "cloneDash", "radialBurst", "homingOrbs", "checkerFloor", "meteor", "skyCurtain", "floorSweep"]],
  col: "#ff6080",
  elem: _0xc2cd36
};
const _0x12f10b = {
  col: "#ffc890",
  vis: "time",
  drop: "shard",
  proj: "soul"
};
const definition_lunabel = {
  id: "lunabel",
  theme: 65,
  name: "자장가의 유모 루나벨",
  title: "잠든 자의 머리맡을 지키는 자",
  hp: 6900,
  atk: 29,
  phases: [0.5],
  multi: [3, 4],
  patterns: [["teleSlam", "aimedFan", "bladeHalo", "gravityWell", "laserSweep", "pillarMarch", "execZones"], ["teleSlam", "aimedFan", "bladeHalo", "gravityWell", "laserSweep", "pillarMarch", "radialBurst", "beamGrid", "skyCurtain", "execZones"]],
  col: "#ffc890",
  elem: _0x12f10b
};
const _0x8935ae = {
  col: "#ffe0b0",
  vis: "holy",
  drop: "shard",
  proj: "star"
};
const definition_oneira = {
  id: "oneira",
  theme: 66,
  name: "꿈꾸는 자 오네이라",
  title: "세계를 꿈꾸던 잠든 신",
  hp: 9600,
  atk: 36,
  mult: 3,
  flying: !0,
  orb: !0,
  phases: [0.66, 0.33],
  multi: [3, 4, 5, 3],
  split: !0,
  patterns: [["diveBomb", "swoop", "radialBurst", "aimedFan", "skyCurtain", "beamGrid", "checkerFloor", "homingOrbs"], ["diveBomb", "swoop", "radialBurst", "aimedFan", "skyCurtain", "beamGrid", "checkerFloor", "homingOrbs", "laserSweep", "floorSweep", "meteor", "dreamShade", "dreamGaze"], ["diveBomb", "swoop", "radialBurst", "aimedFan", "skyCurtain", "beamGrid", "checkerFloor", "homingOrbs", "laserSweep", "floorSweep", "meteor", "starfall", "crossBeam", "gravityWell", "dreamShade", "dreamGaze", "dreamStill"], ["diveBomb", "swoop", "radialBurst", "aimedFan", "skyCurtain", "beamGrid", "checkerFloor", "laserSweep", "floorSweep", "starfall", "crossBeam", "dreamShade", "dreamGaze", "dreamStill"]],
  col: "#ffe0b0",
  elem: _0x8935ae
};
const _0x58ec45 = {
  col: "#6080ff",
  vis: "void",
  drop: "blade",
  proj: "orb"
};
const _0x29e89c = {
  col: "#ffb060",
  vis: "fire",
  drop: "rock",
  proj: "fireball",
  st: "burn"
};
const _0x481a20 = {
  col: "#8090c0",
  vis: "poison",
  drop: "shard",
  proj: "spore",
  st: "poison"
};
const _0x325981 = {
  col: "#e0e0f0",
  vis: "trap",
  drop: "spear",
  proj: "blade",
  st: "bleed"
};
const _0x74c67c = {
  col: "#ffb040",
  vis: "fire",
  drop: "fireball",
  proj: "fireball",
  st: "burn"
};
const _0x2461e8 = {
  col: "#4060ff",
  vis: "void",
  drop: "blade",
  proj: "soul"
};
const _0x257b76 = {
  col: "#e0c080",
  vis: "crystal",
  drop: "shard",
  proj: "crystal"
};
const _0x430201 = {
  col: "#e0f0ff",
  vis: "ice",
  drop: "shard",
  proj: "shard",
  st: "chill"
};
const _0x4e476e = {
  col: "#ffa0e0",
  vis: "star",
  drop: "spear",
  proj: "star"
};
const _0x44c65f = {
  col: "#fff0a0",
  vis: "holy",
  drop: "blade",
  proj: "soul"
};
const _0x732017 = {
  col: "#fff0a0",
  vis: "thunder",
  drop: "spear",
  proj: "bolt",
  st: "shock"
};
const _0x33b90b = {
  col: "#a0f0ff",
  vis: "ice",
  drop: "shard",
  proj: "crystal",
  st: "chill"
};
const _0x1a45ae = {
  col: "#c0c0a0",
  vis: "fire",
  drop: "rock",
  proj: "rock",
  st: "burn"
};
const _0xbe5da4 = {
  col: "#e0c040",
  vis: "time",
  drop: "blade",
  proj: "bolt",
  st: "slow"
};
const _0x146436 = {
  col: "#ff8040",
  vis: "fire",
  drop: "spear",
  proj: "fireball",
  st: "burn"
};
const _0x22555c = {
  col: "#ffe0a0",
  vis: "time",
  drop: "blade",
  proj: "orb",
  st: "slow"
};
const _0x611099 = {
  col: "#ff6020",
  vis: "fire",
  drop: "fireball",
  proj: "fireball",
  st: "burn"
};
const _0xee08b4 = {
  col: "#ffd060",
  vis: "time",
  drop: "blade",
  proj: "bolt"
};
const _0xfab024 = {
  col: "#8aa04a",
  vis: "poison",
  drop: "rock",
  proj: "spore",
  st: "poison"
};
const _0x238135 = {
  col: "#c06030",
  vis: "poison",
  drop: "blade",
  proj: "spore",
  st: "poison"
};
const _0x23306a = {
  col: "#ffd040",
  vis: "poison",
  drop: "spear",
  proj: "star",
  st: "poison"
};
const _0x410ba = {
  col: "#f0e8d0",
  vis: "trap",
  drop: "shard",
  proj: "soul",
  st: "slow"
};
const _0x1b8fbe = {
  col: "#c060ff",
  vis: "poison",
  drop: "blade",
  proj: "spore",
  st: "poison"
};
const _0x58401d = {
  col: "#a0ff60",
  vis: "poison",
  drop: "shard",
  proj: "spore",
  st: "poison"
};
const _0x3a2f49 = {
  col: "#ff7040",
  vis: "fire",
  drop: "rock",
  proj: "rock",
  st: "burn"
};
const _0x5915db = {
  col: "#c0f0ff",
  vis: "ice",
  drop: "spear",
  proj: "shard",
  st: "chill"
};
const _0x4b7550 = {
  col: "#c080ff",
  vis: "void",
  drop: "shard",
  proj: "orb"
};
const _0x9034a8 = {
  col: "#e0e0ff",
  vis: "star",
  drop: "spear",
  proj: "star"
};
const _0x422eed = {
  col: "#a080ff",
  vis: "void",
  drop: "shard",
  proj: "soul"
};
const _0x52aacb = {
  col: "#e0a0ff",
  vis: "star",
  drop: "shard",
  proj: "star"
};
const _0x33e6b1 = {
  col: "#e0d0a0",
  vis: "holy",
  drop: "blade",
  proj: "blade"
};
const _0x2d3504 = {
  col: "#c0d0ff",
  vis: "compass",
  drop: "shard",
  proj: "crystal"
};
const _0x140f45 = {
  col: "#ff3040",
  vis: "blood",
  drop: "blade",
  proj: "blade",
  st: "bleed"
};
const _0x5fb303 = {
  col: "#ff8040",
  vis: "fire",
  drop: "fireball",
  proj: "fireball",
  st: "burn"
};
const _0x5923be = {
  col: "#e0b0ff",
  vis: "holy",
  drop: "shard",
  proj: "star"
};
const _0xec23b5 = {
  col: "#fff0d0",
  vis: "holy",
  drop: "blade",
  proj: "soul"
};
const _0x140c29 = {
  col: "#c070ff",
  vis: "void",
  drop: "blade",
  proj: "soul"
};
const _0x1b5683 = {
  col: "#ffe0b0",
  vis: "void",
  drop: "shard",
  proj: "star"
};
const _0x147865 = {
  col: "#a0f0ff",
  vis: "ice",
  drop: "shard",
  proj: "crystal"
};
const _0x102b44 = {
  col: "#ffd060",
  vis: "time",
  drop: "shard",
  proj: "star"
};
const _0x1e4b47 = {
  col: "#e0a0ff",
  vis: "star",
  drop: "blade",
  proj: "star"
};
const _0x107e3b = {
  col: "#e0e0ff",
  vis: "void",
  drop: "shard",
  proj: "soul"
};
const _0xaf29d = {
  col: "#e0c890",
  vis: "crystal",
  drop: "rock",
  proj: "crystal"
};
const _0xa23181 = {
  col: "#ff90c0",
  vis: "void",
  drop: "blade",
  proj: "star"
};
const _0x20931a = {
  col: "#a0e0ff",
  vis: "ice",
  drop: "shard",
  proj: "shard",
  st: "chill"
};
const _0x81a888 = {
  col: "#ffb080",
  vis: "fire",
  drop: "spear",
  proj: "blade",
  st: "burn"
};
const _0x2d154f = {
  col: "#e0f0ff",
  vis: "star",
  drop: "shard",
  proj: "star"
};
const _0x273b5e = {
  col: "#ff4050",
  vis: "blood",
  drop: "blade",
  proj: "blade",
  st: "bleed"
};
const _0x2b22fe = {
  col: "#ffe0a0",
  vis: "time",
  drop: "rock",
  proj: "crystal",
  st: "slow"
};
const _0x395ebe = {
  col: "#a0fff0",
  vis: "ice",
  drop: "shard",
  proj: "shard",
  st: "chill"
};
const _0x5a8530 = {
  col: "#ffd060",
  vis: "time",
  drop: "blade",
  proj: "bolt",
  st: "slow"
};
const _0x5e7622 = {
  col: "#d0c0ff",
  vis: "void",
  drop: "blade",
  proj: "soul"
};
const _0x118271 = {
  col: "#ffe8a0",
  vis: "holy",
  drop: "shard",
  proj: "star"
};
const _0x1a1c7e = {
  col: "#ffe070",
  vis: "time",
  drop: "blade",
  proj: "bolt",
  st: "slow"
};
const _0x38b702 = {
  col: "#e0fff0",
  vis: "holy",
  drop: "spear",
  proj: "blade"
};
const _0x3cfd65 = {
  col: "#c0ff90",
  vis: "poison",
  drop: "shard",
  proj: "spore",
  st: "poison"
};
const _0x23a11b = {
  col: "#c0e0ff",
  vis: "thunder",
  drop: "spear",
  proj: "bolt",
  st: "shock"
};
const _0x500ad9 = {
  col: "#ffd0ff",
  vis: "star",
  drop: "rock",
  proj: "orb"
};
const _0x456bac = {
  col: "#e0f0ff",
  vis: "thunder",
  drop: "shard",
  proj: "bolt",
  st: "shock"
};
const _0x5ef6eb = {
  col: "#a0c0ff",
  vis: "void",
  drop: "rock",
  proj: "orb"
};
const _0x1ffdb4 = {
  col: "#ffc0a0",
  vis: "blood",
  drop: "blade",
  proj: "blade",
  st: "bleed"
};
const _0x1d7d20 = {
  col: "#f0f0ff",
  vis: "crystal",
  drop: "shard",
  proj: "crystal"
};
const _0x2e490b = {
  col: "#ff6070",
  vis: "void",
  drop: "blade",
  proj: "soul"
};
const _0xd30f84 = {
  col: "#ffd890",
  vis: "holy",
  drop: "spear",
  proj: "star"
};
const _0x3da54b = {
  col: "#fff0a0",
  vis: "thunder",
  drop: "spear",
  proj: "bolt",
  st: "shock"
};
const _0x50ee3b = {
  col: "#ff80d0",
  vis: "void",
  drop: "blade",
  proj: "soul"
};
const _0xe9d83a = {
  col: "#ffb070",
  vis: "fire",
  drop: "fireball",
  proj: "fireball",
  st: "burn"
};
const _0x44acb7 = {
  col: "#ffa0d0",
  vis: "trap",
  drop: "spear",
  proj: "blade",
  st: "slow"
};
const _0x56c98b = {
  col: "#d0e8ff",
  vis: "trap",
  drop: "spear",
  proj: "spear",
  st: "bleed"
};
const _0x9e8e56 = {
  col: "#e0ff90",
  vis: "poison",
  drop: "shard",
  proj: "spore",
  st: "slow"
};
const _0x8b9c59 = {
  col: "#a0d0ff",
  vis: "thunder",
  drop: "spear",
  proj: "bolt",
  st: "shock"
};
const _0x523a62 = {
  col: "#ffe0a0",
  vis: "trap",
  drop: "spear",
  proj: "blade",
  st: "bleed"
};
const _0x5890fa = {
  col: "#f0d8a0",
  vis: "holy",
  drop: "blade",
  proj: "blade"
};
const _0x5dee72 = {
  col: "#c0d0e0",
  vis: "void",
  drop: "rock",
  proj: "rock"
};
const _0x47cd3e = {
  col: "#ff7060",
  vis: "blood",
  drop: "spear",
  proj: "soul",
  st: "bleed"
};
const _0x1960dd = {
  col: "#fff0d0",
  vis: "crystal",
  drop: "rock",
  proj: "crystal"
};
const _0x40c990 = {
  col: "#d0b0ff",
  vis: "void",
  drop: "rock",
  proj: "orb"
};
const _0x5c8ec9 = {
  col: "#ff6080",
  vis: "blood",
  drop: "rock",
  proj: "rock",
  st: "bleed"
};
const _0x1844ca = {
  col: "#ff6070",
  vis: "blood",
  drop: "blade",
  proj: "blade",
  st: "bleed"
};
const _0x5ad3df = {
  col: "#ffe070",
  vis: "time",
  drop: "shard",
  proj: "bolt",
  st: "slow"
};
const _0x5f0e6d = {
  col: "#c0e0ff",
  vis: "void",
  drop: "rock",
  proj: "orb"
};
const _0xf185a8 = {
  col: "#ff90ff",
  vis: "void",
  drop: "blade",
  proj: "soul"
};
const _0x366ab6 = {
  col: "#a0d0ff",
  vis: "thunder",
  drop: "spear",
  proj: "bolt",
  st: "shock"
};
const _0x560ea8 = {
  col: "#ff3040",
  vis: "blood",
  drop: "blade",
  proj: "blade",
  st: "bleed"
};
const _0x3f56f0 = {
  ["3"]: [3, 3, 4],
  ["4"]: [3, 4, 4, 5]
};
const gt = [definition_kardun, definition_bellona, definition_astril, definition_elowin, definition_orbis, definition_nemesia, definition_grak, definition_seraphine, definition_morg, definition_valerius, definition_fenrik, definition_carmilla, definition_levia, definition_yggdra, definition_taranis, definition_mirror_4b6540, definition_aeon, definition_arche], wt = gt.map(({theme: _0x44d9a5, big: _0x337d1d, ..._0x219a7e}) => {
  const _0x2b99b5 = {
    IFIsF: function (_0x228372, _0x50d2ab) {
      return _0x228372 + _0x50d2ab;
    }
  };
  const _0x4d2002 = _0x2b99b5, _0x2bb7fd = _0x44d9a5 % 10;
  return {
    ..._0x219a7e,
    "chapter": _0x44d9a5,
    "w": _0x337d1d ? 40 : 30,
    "h": _0x337d1d ? 56 : 46,
    "soulStones": _0x2bb7fd === 6 ? 1500 : 400 + _0x2bb7fd * 80
  };
}), yt = [definition_branik, definition_lyanne, definition_osric, definition_penna, definition_kalais, definition_sever, definition_halvard, definition_coralie, definition_nekton, definition_vesper, definition_noctis, definition_iska, definition_sandman, definition_mneme, definition_labyrin, definition_grimal, definition_lunabel, definition_oneira], vt = yt.map(({theme: _0x2400e5, big: _0x2fa7e5, ..._0x9a0683}) => {
  const _0xfc2f73 = {
    KiBma: function (_0x40ade3, _0xa4a68e) {
      return _0x40ade3 % _0xa4a68e;
    },
    ZYuPQ: function (_0x51d0bc, _0x276434) {
      return _0x51d0bc + _0x276434;
    },
    jqiEE: function (_0x5bfa8c, _0x58b09b) {
      return _0x5bfa8c * _0x58b09b;
    }
  };
  const _0x82ad56 = _0xfc2f73, _0x3286e8 = _0x2400e5 % 10;
  return {
    ..._0x9a0683,
    "chapter": _0x2400e5,
    "w": _0x2fa7e5 ? 40 : 30,
    "h": _0x2fa7e5 ? 56 : 46,
    "soulStones": _0x3286e8 === 6 ? 1800 : 480 + _0x3286e8 * 90
  };
}), S = (_0x1bd8fa, ..._0x183267) => [...new Set([..._0x1bd8fa, ..._0x183267])], xt = ["execGround", "execZones", "execHalf", "eclipseDive", "worldSever", "dreamShade", "dreamGaze", "dreamStill", "execMirrorHalf", "execDarkZones", "execMirrorGaze", "execFreezeDive"], N = _0xef7f74 => _0xef7f74.filter(_0x2ac7be => !xt.includes(_0x2ac7be)), k = (_0x1c8f0d, _0x1d8414) => [_0x1c8f0d, S(_0x1c8f0d, ..._0x1d8414)], $e = ["swordCombo", "leapSmash", "dashSlash", "galeWaves", "homingOrbs", "skyCurtain", "crossBeam"], Ve = S($e, "laserSweep", "floorSweep", "checkerFloor", "execGround"), _t = S(Ve, "beamGrid", "starfall", "gravityWell", "execHalf"), Xe = ["shovelSlam", "leapSmash", "charge", "galeWaves", "homingOrbs", "floorSweep", "bladeHalo"], Ye = S(Xe, "checkerFloor", "gravityWell", "meteor", "execZones"), St = S(Ye, "beamGrid", "crossBeam", "skyCurtain", "worldSever"), Ze = ["swordCombo", "leapSmash", "charge", "crossBeam", "laserSweep", "homingOrbs", "checkerFloor"], qe = S(Ze, "beamGrid", "floorSweep", "gravityWell", "execHalf", "worldSever"), Qe = S(qe, "skyCurtain", "starfall", "meteor", "dreamStill"), jt = S(N(Qe).filter(_0xac022a => _0xac022a !== "homingOrbs" && _0xac022a !== "gravityWell"), "execHalf", "worldSever", "dreamStill"), Je = ["diveBomb", "swoop", "radialBurst", "aimedFan", "skyCurtain", "homingOrbs", "checkerFloor", "gravityWell"], es = S(Je, "beamGrid", "floorSweep", "laserSweep", "eclipseDive", "execZones"), ss = S(es, "meteor", "starfall", "crossBeam", "dreamShade"), Dt = S(N(ss).filter(_0x1509e0 => _0x1509e0 !== "homingOrbs" && _0x1509e0 !== "gravityWell"), "eclipseDive", "execZones", "dreamShade"), as = ["diveBomb", "swoop", "radialBurst", "aimedFan", "skyCurtain", "beamGrid", "gravityWell", "homingOrbs"], ts = S(as, "laserSweep", "floorSweep", "meteor", "dreamGaze", "eclipseDive"), rs = S(ts, "starfall", "crossBeam", "checkerFloor", "dreamStill"), Ct = S(N(rs).filter(_0x2c41f0 => _0x2c41f0 !== "homingOrbs" && _0x2c41f0 !== "gravityWell"), "dreamGaze", "eclipseDive", "dreamStill"), os = ["swordCombo", "teleSlam", "dashSlash", "cloneDash", "crossBeam", "homingOrbs", "skyCurtain", "checkerFloor"], ls = S(os, "laserSweep", "beamGrid", "floorSweep", "execGround", "execHalf"), is = S(ls, "starfall", "meteor", "gravityWell", "bladeHalo", "execZones", "worldSever"), Wt = S(N(is).filter(_0x14012a => _0x14012a !== "homingOrbs" && _0x14012a !== "gravityWell"), "execHalf", "execZones", "worldSever", "dreamStill"), cs = ["diveBomb", "swoop", "radialBurst", "aimedFan", "skyCurtain", "homingOrbs", "beamGrid", "curseReverse"], ds = S(cs, "laserSweep", "floorSweep", "curseBlackout", "execDarkZones", "eclipseDive", "execMirrorHalf"), ns = S(ds, "starfall", "crossBeam", "checkerFloor", "curseFreeze", "execFreezeDive", "execMirrorGaze", "worldSever", "dreamStill"), Bt = S(N(ns).filter(_0x229189 => _0x229189 !== "homingOrbs"), "execMirrorHalf", "execDarkZones", "execFreezeDive", "dreamShade", "dreamStill"), Mt = [{
  "id": "quillon",
  "theme": 71,
  "name": "먹물 항해사 퀼론",
  "title": "잉크 바다를 건너온 자",
  "hp": 3400,
  "atk": 20,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["charge", "leapSmash", "dashSlash", "galeWaves", "homingOrbs", "skyCurtain"], ["summon", "floorSweep", "gravityWell"]),
  "col": "#6080ff",
  "elem": _0x58ec45
}, {
  "id": "typhos",
  "theme": 72,
  "name": "활자 주조공 타이포스",
  "title": "납으로 글자를 녹여 붓는 자",
  "hp": 4300,
  "atk": 22,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["shovelSlam", "leapSmash", "shockRing", "pillarMarch", "starfall", "meteor"], ["spikeWave", "floorHalf", "beamGrid"]),
  "col": "#ffb060",
  "elem": _0x29e89c
}, {
  "id": "smudra",
  "theme": 73,
  "name": "번짐의 마녀 스머드라",
  "title": "젖은 글씨를 숲으로 키우는 자",
  "hp": 5200,
  "atk": 25,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["teleSlam", "aimedFan", "cloneDash", "checkerFloor", "homingOrbs", "gravityWell"], ["radialBurst", "bladeHalo", "skyCurtain"]),
  "col": "#8090c0",
  "elem": _0x481a20
}, {
  "id": "stitcher",
  "theme": 74,
  "name": "실 꿰는 기사 스티처",
  "title": "찢긴 책장을 꿰매 붙이는 자",
  "hp": 6100,
  "atk": 27,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["swordCombo", "dashSlash", "spikeWave", "pillarMarch", "crossBeam", "laserSweep"], ["cloneDash", "beamGrid", "bladeHalo"]),
  "col": "#e0e0f0",
  "elem": _0x325981
}, {
  "id": "lampra",
  "theme": 75,
  "name": "등잔의 사서 람프라",
  "title": "마지막 등잔을 지키는 자",
  "hp": 7000,
  "atk": 29,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["teleSlam", "aimedFan", "radialBurst", "meteor", "pillarMarch", "skyCurtain", "execZones"], ["laserSweep", "gravityWell", "floorSweep"]),
  "col": "#ffb040",
  "elem": _0x74c67c
}, {
  "id": "inkarna",
  "theme": 76,
  "name": "잉크의 군주 잉카르나",
  "title": "첫 문장에서 태어난 자",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "big": !0,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5],
  "patterns": [$e, Ve, _t],
  "col": "#4060ff",
  "elem": _0x2461e8
}, {
  "id": "dunak",
  "theme": 81,
  "name": "모래 순례자장 두나크",
  "title": "유리가 된 사막을 걷는 자",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["shovelSlam", "charge", "leapSmash", "galeWaves", "skyCurtain", "starfall"], ["spikeWave", "floorSweep", "summon"]),
  "col": "#e0c080",
  "elem": _0x257b76
}, {
  "id": "salmira",
  "theme": 82,
  "name": "소금 거울의 무희 살미라",
  "title": "비친 모습과 함께 춤추는 자",
  "hp": 4300,
  "atk": 22,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["dashSlash", "cloneDash", "aimedFan", "bladeHalo", "checkerFloor", "homingOrbs"], ["teleSlam", "beamGrid", "gravityWell"]),
  "col": "#e0f0ff",
  "elem": _0x430201
}, {
  "id": "iridel",
  "theme": 83,
  "name": "무지개 사냥꾼 이리델",
  "title": "빛을 일곱 갈래로 쏘는 자",
  "hp": 5200,
  "atk": 25,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["aimedFan", "dashSlash", "teleSlam", "crossBeam", "laserSweep", "starfall"], ["radialBurst", "beamGrid", "pillarMarch"]),
  "col": "#ffa0e0",
  "elem": _0x4e476e
}, {
  "id": "cantora",
  "theme": 84,
  "name": "프리즘 성가대장 칸토라",
  "title": "빛으로 노래하는 유리 성당의 주인",
  "hp": 6100,
  "atk": 27,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["teleSlam", "radialBurst", "shockRing", "pillarMarch", "skyCurtain", "homingOrbs"], ["aimedFan", "floorHalf", "laserSweep"]),
  "col": "#fff0a0",
  "elem": _0x44c65f
}, {
  "id": "phara",
  "theme": 85,
  "name": "깨진 등대의 눈 파라",
  "title": "바다를 비추다 미쳐 버린 빛",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["diveBomb", "swoop", "radialBurst", "aimedFan", "skyCurtain", "galeWaves", "homingOrbs", "eclipseDive"], ["beamGrid", "laserSweep", "floorSweep"]),
  "col": "#fff0a0",
  "elem": _0x732017
}, {
  "id": "vitreon",
  "theme": 86,
  "name": "유리 바다의 심장 비트레온",
  "title": "바다를 유리로 굳힌 거대한 심장",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "big": !0,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5],
  "patterns": [Xe, Ye, St],
  "col": "#a0f0ff",
  "elem": _0x33b90b
}, {
  "id": "valvex",
  "theme": 91,
  "name": "밸브 감독관 발벡스",
  "title": "증기를 쥐고 도시를 숨 쉬게 하는 자",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["shovelSlam", "charge", "shockRing", "galeWaves", "floorSweep", "meteor"], ["leapSmash", "gravityWell", "summon"]),
  "col": "#c0c0a0",
  "elem": _0x1a45ae
}, {
  "id": "tickter",
  "theme": 92,
  "name": "태엽 상인 틱터",
  "title": "남은 시간을 사고파는 자",
  "hp": 4300,
  "atk": 22,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["teleSlam", "cloneDash", "aimedFan", "homingOrbs", "checkerFloor", "bladeHalo"], ["radialBurst", "pillarMarch", "beamGrid"]),
  "col": "#e0c040",
  "elem": _0xbe5da4
}, {
  "id": "locomar",
  "theme": 93,
  "name": "철도 기사 로코마르",
  "title": "멈추지 않는 기관차를 모는 자",
  "hp": 5200,
  "atk": 25,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["charge", "dashSlash", "leapSmash", "floorSweep", "galeWaves", "laserSweep"], ["spikeWave", "meteor", "crossBeam"]),
  "col": "#ff8040",
  "elem": _0x146436
}, {
  "id": "horolock",
  "theme": 94,
  "name": "시계탑 간수장 호롤록",
  "title": "시간을 가두는 열쇠를 쥔 자",
  "hp": 6100,
  "atk": 27,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["swordCombo", "teleSlam", "shockRing", "pillarMarch", "beamGrid", "gravityWell"], ["cloneDash", "checkerFloor", "floorHalf"]),
  "col": "#ffe0a0",
  "elem": _0x22555c
}, {
  "id": "caldra",
  "theme": 95,
  "name": "용광 심장지기 칼드라",
  "title": "제국의 심장에 불을 지피는 자",
  "hp": 7000,
  "atk": 29,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["shovelSlam", "leapSmash", "charge", "meteor", "skyCurtain", "pillarMarch", "worldSever"], ["floorSweep", "galeWaves", "starfall"]),
  "col": "#ff6020",
  "elem": _0x611099
}, {
  "id": "kronax",
  "theme": 96,
  "name": "태엽 황제 크로낙스",
  "title": "심장 대신 태엽을 감은 황제",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "big": !0,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5, 3],
  "split": !0,
  "patterns": [Ze, qe, Qe, jt],
  "col": "#ffd060",
  "elem": _0xee08b4
}, {
  "id": "moldra",
  "theme": 101,
  "name": "곰팡이 늪지기 몰드라",
  "title": "썩음을 거름으로 삼는 자",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["shovelSlam", "leapSmash", "charge", "skyCurtain", "homingOrbs", "gravityWell"], ["spikeWave", "floorSweep", "summon"]),
  "col": "#8aa04a",
  "elem": _0xfab024
}, {
  "id": "pomora",
  "theme": 102,
  "name": "썩은 과수원지기 포모라",
  "title": "독이 든 열매를 거두는 자",
  "hp": 4300,
  "atk": 22,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["dashSlash", "swordCombo", "teleSlam", "pillarMarch", "galeWaves", "checkerFloor"], ["cloneDash", "bladeHalo", "meteor"]),
  "col": "#c06030",
  "elem": _0x238135
}, {
  "id": "apisa",
  "theme": 103,
  "name": "벌집 수녀원장 아피사",
  "title": "꿀과 독침으로 기도하는 자",
  "hp": 5200,
  "atk": 25,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["teleSlam", "aimedFan", "radialBurst", "homingOrbs", "skyCurtain", "beamGrid"], ["shockRing", "gravityWell", "laserSweep"]),
  "col": "#ffd040",
  "elem": _0x23306a
}, {
  "id": "chrysa",
  "theme": 104,
  "name": "고치의 어미 크리사",
  "title": "무엇이든 고치에 싸서 다시 낳는 자",
  "hp": 6100,
  "atk": 27,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["cloneDash", "dashSlash", "aimedFan", "checkerFloor", "bladeHalo", "gravityWell"], ["teleSlam", "floorSweep", "summon"]),
  "col": "#f0e8d0",
  "elem": _0x410ba
}, {
  "id": "belladon",
  "theme": 105,
  "name": "독꽃 기사 벨라돈",
  "title": "여왕의 정원을 지키는 가시",
  "hp": 7000,
  "atk": 29,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["swordCombo", "dashSlash", "teleSlam", "pillarMarch", "crossBeam", "homingOrbs", "execHalf"], ["cloneDash", "laserSweep", "skyCurtain"]),
  "col": "#c060ff",
  "elem": _0x1b8fbe
}, {
  "id": "floravae",
  "theme": 106,
  "name": "역병 정원의 여왕 플로라베",
  "title": "세계를 정원으로 덮으려는 꽃",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "flying": !0,
  "orb": !0,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5, 3],
  "split": !0,
  "patterns": [Je, es, ss, Dt],
  "col": "#a0ff60",
  "elem": _0x58401d
}, {
  "id": "meteon",
  "theme": 111,
  "name": "운석 거인 메테온",
  "title": "떨어진 별의 껍데기를 입은 자",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["shovelSlam", "leapSmash", "charge", "meteor", "starfall", "skyCurtain"], ["shockRing", "floorSweep", "summon"]),
  "col": "#ff7040",
  "elem": _0x3a2f49
}, {
  "id": "cometra",
  "theme": 112,
  "name": "혜성 기수 코메트라",
  "title": "얼어붙은 꼬리를 타고 달리는 자",
  "hp": 4300,
  "atk": 22,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["dashSlash", "charge", "aimedFan", "galeWaves", "crossBeam", "homingOrbs"], ["cloneDash", "laserSweep", "floorSweep"]),
  "col": "#c0f0ff",
  "elem": _0x5915db
}, {
  "id": "nebulis",
  "theme": 113,
  "name": "성운 마녀 네불리스",
  "title": "별이 태어나는 늪을 젓는 자",
  "hp": 5200,
  "atk": 25,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["teleSlam", "radialBurst", "aimedFan", "gravityWell", "homingOrbs", "checkerFloor"], ["bladeHalo", "beamGrid", "starfall"]),
  "col": "#c080ff",
  "elem": _0x4b7550
}, {
  "id": "orionel",
  "theme": 114,
  "name": "별자리 사냥꾼 오리오넬",
  "title": "하늘의 짐승을 쫓는 마지막 사냥꾼",
  "hp": 6100,
  "atk": 27,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["aimedFan", "dashSlash", "leapSmash", "starfall", "crossBeam", "skyCurtain"], ["cloneDash", "pillarMarch", "laserSweep"]),
  "col": "#e0e0ff",
  "elem": _0x9034a8
}, {
  "id": "horizon",
  "theme": 115,
  "name": "사건의 지평선 호라이즌",
  "title": "빛조차 돌아오지 못하는 눈",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["diveBomb", "swoop", "radialBurst", "aimedFan", "gravityWell", "homingOrbs", "beamGrid", "eclipseDive"], ["skyCurtain", "laserSweep", "floorSweep"]),
  "col": "#a080ff",
  "elem": _0x422eed
}, {
  "id": "astrovor",
  "theme": 116,
  "name": "별을 먹는 짐승 아스트로보르",
  "title": "하늘의 별을 하나씩 삼켜 온 것",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "flying": !0,
  "orb": !0,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5, 3],
  "split": !0,
  "patterns": [as, ts, rs, Ct],
  "col": "#e0a0ff",
  "elem": _0x52aacb
}, {
  "id": "indexa",
  "theme": 121,
  "name": "목차의 파수꾼 인덱사",
  "title": "모든 장의 이름을 외우는 자",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["shovelSlam", "charge", "leapSmash", "pillarMarch", "galeWaves", "homingOrbs"], ["shockRing", "floorSweep", "summon"]),
  "col": "#e0d0a0",
  "elem": _0x33e6b1
}, {
  "id": "glossa",
  "theme": 122,
  "name": "각주의 미궁지기 글로사",
  "title": "길을 각주 속에 숨기는 자",
  "hp": 4300,
  "atk": 22,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["teleSlam", "aimedFan", "cloneDash", "beamGrid", "checkerFloor", "homingOrbs"], ["radialBurst", "gravityWell", "floorHalf"]),
  "col": "#c0d0ff",
  "elem": _0x2d3504
}, {
  "id": "censora",
  "theme": 123,
  "name": "검열관 센소라",
  "title": "마음에 들지 않는 문장을 지우는 자",
  "hp": 5200,
  "atk": 25,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["swordCombo", "leapSmash", "dashSlash", "crossBeam", "laserSweep", "skyCurtain"], ["spikeWave", "beamGrid", "floorSweep"]),
  "col": "#ff3040",
  "elem": _0x140f45
}, {
  "id": "revisa",
  "theme": 124,
  "name": "퇴고의 불꽃 레비사",
  "title": "고쳐 쓰기 위해 모든 것을 태우는 자",
  "hp": 6100,
  "atk": 27,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["dashSlash", "teleSlam", "radialBurst", "meteor", "pillarMarch", "galeWaves"], ["cloneDash", "skyCurtain", "starfall"]),
  "col": "#ff8040",
  "elem": _0x5fb303
}, {
  "id": "calliope",
  "theme": 125,
  "name": "뮤즈 칼리오페",
  "title": "작가의 귓가에 이야기를 속삭이던 자",
  "hp": 7000,
  "atk": 29,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["teleSlam", "aimedFan", "radialBurst", "bladeHalo", "homingOrbs", "gravityWell", "execZones"], ["cloneDash", "beamGrid", "laserSweep", "dreamStill"]),
  "col": "#e0b0ff",
  "elem": _0x5923be
}, {
  "id": "graphiel",
  "theme": 126,
  "name": "필경사 그라피엘",
  "title": "이 책을 쓰는 자",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5, 3],
  "split": !0,
  "patterns": [os, ls, is, Wt],
  "col": "#fff0d0",
  "elem": _0xec23b5
}, {
  "id": "echo_king",
  "theme": 131,
  "name": "끝없는 왕의 메아리",
  "title": "첫 장을 다시 읽는 왕관",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["swordCombo", "teleSlam", "shadowBlades", "crownBeam", "boneRain", "homingOrbs", "curseReverse", "execGround"], ["swordRain", "skyCurtain", "curseBlackout", "execHalf"]),
  "col": "#c070ff",
  "elem": _0x140c29
}, {
  "id": "echo_dream",
  "theme": 132,
  "name": "꿈꾸는 자의 메아리",
  "title": "망각과 바다와 꿈을 한데 꾼 것",
  "hp": 4300,
  "atk": 22,
  "flying": !0,
  "orb": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["diveBomb", "swoop", "radialBurst", "voidPillars", "skyCurtain", "homingOrbs", "curseBlackout", "eclipseDive"], ["beamGrid", "laserSweep", "curseFreeze", "dreamShade"]),
  "col": "#ffe0b0",
  "elem": _0x1b5683
}, {
  "id": "echo_ink",
  "theme": 133,
  "name": "잉크 유리의 메아리",
  "title": "잉크 바다를 유리로 굳힌 첫 장들",
  "hp": 5200,
  "atk": 25,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["swordCombo", "leapSmash", "dashSlash", "galeWaves", "homingOrbs", "crossBeam", "curseReverse", "curseFreeze", "execMirrorHalf"], ["floorSweep", "checkerFloor", "gravityWell", "execZones"]),
  "col": "#a0f0ff",
  "elem": _0x147865
}, {
  "id": "echo_bloom",
  "theme": 134,
  "name": "태엽 꽃의 메아리",
  "title": "시간을 감는 정원의 여왕",
  "hp": 6100,
  "atk": 27,
  "flying": !0,
  "orb": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["diveBomb", "swoop", "aimedFan", "checkerFloor", "gravityWell", "homingOrbs", "curseFreeze", "curseBlackout", "execFreezeDive"], ["beamGrid", "floorSweep", "meteor", "curseReverse", "dreamStill", "execDarkZones"]),
  "col": "#ffd060",
  "elem": _0x102b44
}, {
  "id": "echo_scribe",
  "theme": 135,
  "name": "필경사의 메아리",
  "title": "별을 삼킨 펜",
  "hp": 7000,
  "atk": 29,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": k(["swordCombo", "teleSlam", "cloneDash", "starfall", "meteor", "homingOrbs", "curseReverse", "curseBlackout", "execDarkZones"], ["laserSweep", "beamGrid", "skyCurtain", "curseFreeze", "worldSever", "execHalf"]),
  "col": "#e0a0ff",
  "elem": _0x1e4b47
}, {
  "id": "lector",
  "theme": 136,
  "name": "책장 밖의 독자 렉토르",
  "title": "이 책을 덮으려는 손",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "flying": !0,
  "orb": !0,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5, 3],
  "split": !0,
  "patterns": [cs, ds, ns, Bt],
  "col": "#ffffff",
  "elem": _0x107e3b
}], Ht = Mt.map(({theme: _0x51745d, big: _0xcab906, ..._0x1e6403}) => {
  const _0x3e4740 = {
    uPiMe: function (_0x74ffd1, _0xf66ddc) {
      return _0x74ffd1 * _0xf66ddc;
    }
  };
  const _0x4657ca = _0x3e4740, _0x59fdce = _0x51745d % 10;
  return {
    ..._0x1e6403,
    "chapter": _0x51745d,
    "w": _0xcab906 ? 40 : 30,
    "h": _0xcab906 ? 56 : 46,
    "soulStones": _0x59fdce === 6 ? 2200 : 560 + _0x59fdce * 100
  };
}), j = (_0x138281, ..._0x2e2658) => [...new Set([..._0x138281, ..._0x2e2658])], Et = ["execEcho", "execGravity", "execSwap", "execClones", "execDarkEcho", "execMirrorSwap", "execWallCrush"], Rt = [...Et, "execGround", "execZones", "execHalf", "eclipseDive", "worldSever", "dreamShade", "dreamGaze", "dreamStill", "execMirrorHalf", "execDarkZones", "execMirrorGaze", "execFreezeDive"], oe = _0x1470b5 => _0x1470b5.filter(_0x91b116 => !Rt.includes(_0x91b116)), b = (_0x162541, _0x17ec93) => [_0x162541, j(_0x162541, ..._0x17ec93)], fs = ["swordCombo", "leapSmash", "dashSlash", "spiralHell", "laserLattice", "homingOrbs", "skyCurtain"], ms = j(fs, "cloneShell", "checkerFloor", "floorSweep", "execEcho", "execZones"), Tt = j(ms, "swapPlace", "arenaTilt", "beamGrid", "execClones", "execHalf"), hs = ["swordCombo", "teleSlam", "dashSlash", "rewindClock", "spiralHell", "homingOrbs", "laserLattice"], ps = j(hs, "swapPlace", "checkerFloor", "floorSweep", "execEcho", "dreamStill"), At = j(ps, "arenaTilt", "cloneShell", "beamGrid", "execSwap", "execZones"), us = ["swordCombo", "leapSmash", "charge", "gravityFlip", "spiralHell", "laserLattice", "homingOrbs"], ks = j(us, "skyCurtain", "checkerFloor", "swapPlace", "execGravity", "execHalf"), Ot = j(ks, "arenaTilt", "beamGrid", "mirrorDouble", "execEcho", "execZones"), bs = ["swordCombo", "teleSlam", "cloneShell", "mirrorDouble", "spiralHell", "laserLattice", "homingOrbs"], gs = j(bs, "swapPlace", "curseReverse", "checkerFloor", "execClones", "execSwap"), ws = j(gs, "arenaTilt", "beamGrid", "curseBlackout", "execMirrorSwap", "execEcho"), Ft = j(oe(ws).filter(_0x245bfa => _0x245bfa !== "homingOrbs"), "execClones", "execMirrorSwap", "execSwap"), ys = ["diveBomb", "swoop", "radialBurst", "aimedFan", "spiralHell", "arenaTilt", "laserLattice", "galeWaves"], vs = j(ys, "homingOrbs", "curseSeal", "cloneShell", "eclipseDive", "execSwap"), xs = j(vs, "skyCurtain", "beamGrid", "mirrorDouble", "execDarkEcho", "execClones"), Ut = j(oe(xs).filter(_0x2dfde8 => _0x2dfde8 !== "homingOrbs"), "eclipseDive", "execDarkEcho", "execClones"), _s = ["swordCombo", "leapSmash", "charge", "closingWalls", "spiralHell", "laserLattice", "floorSweep"], Ss = j(_s, "skyCurtain", "swapPlace", "curseFreeze", "execWallCrush", "worldSever"), js = j(Ss, "arenaTilt", "cloneShell", "beamGrid", "meteor", "execEcho", "execZones"), Pt = j(oe(js), "execWallCrush", "worldSever", "execEcho"), Ds = ["diveBomb", "swoop", "radialBurst", "aimedFan", "spiralHell", "laserLattice", "homingOrbs", "curseReverse", "curseSeal"], Cs = j(Ds, "arenaTilt", "gravityFlip", "closingWalls", "rewindClock", "curseBlackout", "execEcho", "execGravity", "execSwap", "eclipseDive"), Ws = j(Cs, "cloneShell", "mirrorDouble", "swapPlace", "beamGrid", "skyCurtain", "curseFreeze", "execClones", "execDarkEcho", "execMirrorSwap", "execWallCrush", "dreamGaze", "execMirrorHalf"), zt = j(oe(Ws).filter(_0x7287fc => _0x7287fc !== "homingOrbs"), "execClones", "execDarkEcho", "execMirrorSwap", "execWallCrush", "execGravity", "dreamStill"), Lt = [{
  "id": "craxen",
  "theme": 141,
  "name": "균열 파수꾼 크락센",
  "title": "마른 잉크의 갈라진 틈을 지키는 자",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["shovelSlam", "leapSmash", "charge", "spiralHell", "floorSweep", "skyCurtain"], ["laserLattice", "checkerFloor", "homingOrbs"]),
  "col": "#e0c890",
  "elem": _0xaf29d
}, {
  "id": "misprin",
  "theme": 142,
  "name": "오탈자 상인 미스프린",
  "title": "잘못 찍힌 글자를 파는 자",
  "hp": 4300,
  "atk": 22,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["teleSlam", "cloneShell", "aimedFan", "spiralHell", "homingOrbs", "galeWaves"], ["swapPlace", "laserLattice", "bladeHalo"]),
  "col": "#ff90c0",
  "elem": _0xa23181
}, {
  "id": "reverso",
  "theme": 143,
  "name": "거꾸로 선 식자공 레버소",
  "title": "활자를 거꾸로 박는 자",
  "hp": 5200,
  "atk": 25,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["swordCombo", "dashSlash", "gravityFlip", "starfall", "crossBeam", "laserSweep"], ["spiralHell", "beamGrid", "cloneDash"]),
  "col": "#a0e0ff",
  "elem": _0x20931a
}, {
  "id": "marka",
  "theme": 144,
  "name": "책갈피 기수 마르카",
  "title": "바람을 타고 장을 넘기는 자",
  "hp": 6100,
  "atk": 27,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["charge", "dashSlash", "leapSmash", "galeWaves", "arenaTilt", "skyCurtain"], ["laserLattice", "spiralHell", "pillarMarch"]),
  "col": "#ffb080",
  "elem": _0x81a888
}, {
  "id": "echora",
  "theme": 145,
  "name": "거울 문단의 에코라",
  "title": "모든 문장을 되비추는 눈",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["diveBomb", "swoop", "radialBurst", "spiralHell", "mirrorDouble", "aimedFan", "homingOrbs", "execEcho"], ["laserLattice", "arenaTilt", "eclipseDive"]),
  "col": "#e0f0ff",
  "elem": _0x2d154f
}, {
  "id": "errata",
  "theme": 146,
  "name": "오탈자의 어미 에라타",
  "title": "잘못 찍힌 모든 글자의 어머니",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "big": !0,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5],
  "patterns": [fs, ms, Tt],
  "col": "#ff4050",
  "elem": _0x273b5e
}, {
  "id": "sablon",
  "theme": 151,
  "name": "모래시계 순례자장 사블론",
  "title": "위로 떨어지는 모래를 거두는 자",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["shovelSlam", "charge", "galeWaves", "skyCurtain", "spiralHell", "rewindClock"], ["leapSmash", "floorSweep", "laserLattice"]),
  "col": "#ffe0a0",
  "elem": _0x2b22fe
}, {
  "id": "fontaine",
  "theme": 152,
  "name": "멈춘 분수의 요정 퐁텐",
  "title": "흐르는 것을 거꾸로 삼키는 자",
  "hp": 4300,
  "atk": 22,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["teleSlam", "aimedFan", "gravityFlip", "homingOrbs", "bladeHalo", "checkerFloor"], ["spiralHell", "rewindClock", "laserSweep"]),
  "col": "#a0fff0",
  "elem": _0x395ebe
}, {
  "id": "cogwin",
  "theme": 153,
  "name": "역태엽 공방장 코그윈",
  "title": "시계를 거꾸로 감는 대장장이",
  "hp": 5200,
  "atk": 25,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["shovelSlam", "leapSmash", "shockRing", "pillarMarch", "laserLattice", "rewindClock"], ["spikeWave", "floorHalf", "arenaTilt"]),
  "col": "#ffd060",
  "elem": _0x5a8530
}, {
  "id": "yestra",
  "theme": 154,
  "name": "어제의 나 예스트라",
  "title": "어제의 너를 흉내 내는 자",
  "hp": 6100,
  "atk": 27,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["swordCombo", "dashSlash", "swapPlace", "mirrorDouble", "crossBeam", "homingOrbs"], ["cloneShell", "laserLattice", "starfall"]),
  "col": "#d0c0ff",
  "elem": _0x5e7622
}, {
  "id": "annalis",
  "theme": 155,
  "name": "연표의 사서 아날리스",
  "title": "모든 날짜를 기록하는 자",
  "hp": 7000,
  "atk": 29,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["teleSlam", "aimedFan", "radialBurst", "rewindClock", "spiralHell", "skyCurtain", "execEcho"], ["laserLattice", "gravityWell", "dreamStill"]),
  "col": "#ffe8a0",
  "elem": _0x118271
}, {
  "id": "chronica",
  "theme": 156,
  "name": "연대기의 수호자 크로니카",
  "title": "쓰러진 것마저 되감는 시계",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5],
  "patterns": [hs, ps, At],
  "col": "#ffe070",
  "elem": _0x1a1c7e
}, {
  "id": "flotta",
  "theme": 161,
  "name": "낱장 사냥꾼 플로타",
  "title": "떠오르는 종이를 쫓는 자",
  "hp": 3400,
  "atk": 20,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["charge", "leapSmash", "gravityFlip", "skyCurtain", "spiralHell", "galeWaves"], ["floorSweep", "laserLattice", "homingOrbs"]),
  "col": "#e0fff0",
  "elem": _0x38b702
}, {
  "id": "hangel",
  "theme": 162,
  "name": "거꾸로 매달린 정원사 행겔",
  "title": "뿌리를 하늘로 심는 자",
  "hp": 4300,
  "atk": 22,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["teleSlam", "aimedFan", "gravityFlip", "homingOrbs", "checkerFloor", "bladeHalo"], ["cloneShell", "spiralHell", "laserSweep"]),
  "col": "#c0ff90",
  "elem": _0x3cfd65
}, {
  "id": "tethra",
  "theme": 163,
  "name": "끈다리 파수꾼 테트라",
  "title": "하늘섬을 묶어 두는 자",
  "hp": 5200,
  "atk": 25,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["shovelSlam", "charge", "gravityWell", "galeWaves", "arenaTilt", "laserLattice"], ["spikeWave", "meteor", "crossBeam"]),
  "col": "#c0e0ff",
  "elem": _0x23a11b
}, {
  "id": "pondus",
  "theme": 164,
  "name": "무게를 재는 자 폰두스",
  "title": "사라진 무게를 저울에 다는 자",
  "hp": 6100,
  "atk": 27,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["shovelSlam", "leapSmash", "shockRing", "gravityFlip", "starfall", "spiralHell"], ["floorHalf", "beamGrid", "swapPlace"]),
  "col": "#ffd0ff",
  "elem": _0x500ad9
}, {
  "id": "nimbra",
  "theme": 165,
  "name": "구름 바다의 눈 님브라",
  "title": "위와 아래를 뒤바꾸는 구름",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["diveBomb", "swoop", "radialBurst", "aimedFan", "gravityFlip", "spiralHell", "homingOrbs", "execGravity"], ["laserLattice", "arenaTilt", "eclipseDive"]),
  "col": "#ffffff",
  "elem": _0x456bac
}, {
  "id": "gravis",
  "theme": 166,
  "name": "무게를 잃은 왕 그라비스",
  "title": "중력을 손끝으로 감는 왕",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "big": !0,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5],
  "patterns": [us, ks, Ot],
  "col": "#a0c0ff",
  "elem": _0x5ef6eb
}, {
  "id": "masquer",
  "theme": 171,
  "name": "가면 시종장 마스케르",
  "title": "얼굴을 갈아 끼우는 자",
  "hp": 3400,
  "atk": 20,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["dashSlash", "swordCombo", "mirrorDouble", "aimedFan", "homingOrbs", "bladeHalo"], ["cloneShell", "laserLattice", "spiralHell"]),
  "col": "#ffc0a0",
  "elem": _0x1ffdb4
}, {
  "id": "speculo",
  "theme": 172,
  "name": "거울 배우 스페쿨로",
  "title": "비친 모습으로 자리를 바꾸는 자",
  "hp": 4300,
  "atk": 22,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["teleSlam", "cloneShell", "swapPlace", "crossBeam", "laserSweep", "homingOrbs"], ["mirrorDouble", "spiralHell", "checkerFloor"]),
  "col": "#f0f0ff",
  "elem": _0x1d7d20
}, {
  "id": "umbrina",
  "theme": 173,
  "name": "객석의 그림자 움브리나",
  "title": "불 꺼진 객석에서 기다리는 자",
  "hp": 5200,
  "atk": 25,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["dashSlash", "teleSlam", "cloneDash", "curseBlackout", "skyCurtain", "laserLattice"], ["spiralHell", "floorSweep", "gravityWell"]),
  "col": "#ff6070",
  "elem": _0x2e490b
}, {
  "id": "rehearsa",
  "theme": 174,
  "name": "연습하는 대역 레허사",
  "title": "너의 동작을 미리 연습한 자",
  "hp": 6100,
  "atk": 27,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["swordCombo", "leapSmash", "mirrorDouble", "swapPlace", "pillarMarch", "starfall"], ["cloneShell", "arenaTilt", "beamGrid"]),
  "col": "#ffd890",
  "elem": _0xd30f84
}, {
  "id": "luminar",
  "theme": 175,
  "name": "꺼진 조명 루미나르",
  "title": "진짜에게만 빛을 비추는 자",
  "hp": 7000,
  "atk": 29,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["teleSlam", "aimedFan", "laserLattice", "spiralHell", "curseBlackout", "homingOrbs", "execClones"], ["execSwap", "arenaTilt", "beamGrid"]),
  "col": "#fff0a0",
  "elem": _0x3da54b
}, {
  "id": "persona",
  "theme": 176,
  "name": "가면 연출가 페르소나",
  "title": "대역 사이에 진짜를 숨기는 자",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5, 3],
  "split": !0,
  "patterns": [bs, gs, ws, Ft],
  "col": "#ff80d0",
  "elem": _0x50ee3b
}, {
  "id": "bellowsa",
  "theme": 181,
  "name": "풀무장 벨로사",
  "title": "바람으로 불씨를 키우는 자",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["shovelSlam", "charge", "galeWaves", "arenaTilt", "meteor", "spiralHell"], ["leapSmash", "floorSweep", "laserLattice"]),
  "col": "#ffb070",
  "elem": _0xe9d83a
}, {
  "id": "skeina",
  "theme": 182,
  "name": "실타래 마녀 스케이나",
  "title": "손끝을 실로 묶는 자",
  "hp": 4300,
  "atk": 22,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["teleSlam", "aimedFan", "bladeHalo", "laserLattice", "homingOrbs", "checkerFloor"], ["cloneShell", "spiralHell", "curseSeal"]),
  "col": "#ffa0d0",
  "elem": _0x44acb7
}, {
  "id": "acuto",
  "theme": 183,
  "name": "바늘비의 기사 아쿠토",
  "title": "하늘에서 바늘을 쏟는 자",
  "hp": 5200,
  "atk": 25,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["dashSlash", "swordCombo", "skyCurtain", "starfall", "crossBeam", "arenaTilt"], ["spiralHell", "swapPlace", "beamGrid"]),
  "col": "#d0e8ff",
  "elem": _0x56c98b
}, {
  "id": "glutina",
  "theme": 184,
  "name": "풀칠 수녀 글루티나",
  "title": "모든 장을 붙여 버리는 자",
  "hp": 6100,
  "atk": 27,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["teleSlam", "radialBurst", "gravityFlip", "gravityWell", "homingOrbs", "spiralHell"], ["curseSeal", "laserLattice", "floorSweep"]),
  "col": "#e0ff90",
  "elem": _0x9e8e56
}, {
  "id": "turbina",
  "theme": 185,
  "name": "폭풍 탑의 눈 투르비나",
  "title": "책등을 꿰매는 폭풍의 중심",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["diveBomb", "swoop", "radialBurst", "aimedFan", "arenaTilt", "spiralHell", "galeWaves", "execDarkEcho"], ["laserLattice", "eclipseDive", "curseSeal"]),
  "col": "#a0d0ff",
  "elem": _0x8b9c59
}, {
  "id": "sibyra",
  "theme": 186,
  "name": "제본 장인 시비라",
  "title": "책을 꿰매 닫으려는 바늘",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "flying": !0,
  "orb": !0,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5, 3],
  "split": !0,
  "patterns": [ys, vs, xs, Ut],
  "col": "#ffe0a0",
  "elem": _0x523a62
}, {
  "id": "tilda",
  "theme": 191,
  "name": "기울어진 사서 틸다",
  "title": "서가를 기울여 길을 막는 자",
  "hp": 3400,
  "atk": 20,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["swordCombo", "leapSmash", "closingWalls", "floorSweep", "spiralHell", "pillarMarch"], ["laserLattice", "checkerFloor", "homingOrbs"]),
  "col": "#f0d8a0",
  "elem": _0x5890fa
}, {
  "id": "sinkra",
  "theme": 192,
  "name": "꺼지는 바닥의 신크라",
  "title": "바닥을 물결로 바꾸는 자",
  "hp": 4300,
  "atk": 22,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["shovelSlam", "charge", "floorHalf", "spikeWave", "closingWalls", "skyCurtain"], ["spiralHell", "laserLattice", "meteor"]),
  "col": "#c0d0e0",
  "elem": _0x5dee72
}, {
  "id": "catena",
  "theme": 193,
  "name": "사슬 금서지기 카테나",
  "title": "읽어선 안 될 책을 묶는 자",
  "hp": 5200,
  "atk": 25,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["dashSlash", "teleSlam", "curseFreeze", "crossBeam", "laserLattice", "homingOrbs"], ["closingWalls", "spiralHell", "swapPlace"]),
  "col": "#ff7060",
  "elem": _0x47cd3e
}, {
  "id": "pulvera",
  "theme": 194,
  "name": "먼지 폭포의 풀베라",
  "title": "쏟아지는 먼지 속에 숨은 자",
  "hp": 6100,
  "atk": 27,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["teleSlam", "aimedFan", "gravityFlip", "skyCurtain", "closingWalls", "bladeHalo"], ["cloneShell", "spiralHell", "starfall"]),
  "col": "#fff0d0",
  "elem": _0x1960dd
}, {
  "id": "cupola",
  "theme": 195,
  "name": "허물어지는 돔 쿠폴라",
  "title": "하늘을 받치다 무너지는 천장",
  "hp": 7000,
  "atk": 29,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["shovelSlam", "leapSmash", "closingWalls", "meteor", "spiralHell", "laserLattice", "execWallCrush"], ["arenaTilt", "beamGrid", "execEcho"]),
  "col": "#d0b0ff",
  "elem": _0x40c990
}, {
  "id": "ruina",
  "theme": 196,
  "name": "서고를 허무는 자 루이나",
  "title": "마지막 서가를 무너뜨리는 손",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "big": !0,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5, 3],
  "split": !0,
  "patterns": [_s, Ss, js, Pt],
  "col": "#ff6080",
  "elem": _0x5c8ec9
}, {
  "id": "erratum_echo",
  "theme": 201,
  "name": "에라타의 메아리",
  "title": "다시 갈라지는 여백",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["swordCombo", "leapSmash", "spiralHell", "laserLattice", "cloneShell", "curseReverse", "curseSeal", "execEcho"], ["closingWalls", "swapPlace", "curseBlackout", "execClones"]),
  "col": "#ff6070",
  "elem": _0x1844ca
}, {
  "id": "chrono_echo",
  "theme": 202,
  "name": "크로니카의 메아리",
  "title": "다시 감기는 시계",
  "hp": 4300,
  "atk": 22,
  "flying": !0,
  "orb": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["diveBomb", "swoop", "radialBurst", "rewindClock", "spiralHell", "gravityFlip", "curseFreeze", "curseSeal", "execGravity"], ["laserLattice", "arenaTilt", "curseReverse", "eclipseDive", "dreamStill"]),
  "col": "#ffe070",
  "elem": _0x5ad3df
}, {
  "id": "gravis_echo",
  "theme": 203,
  "name": "그라비스의 메아리",
  "title": "다시 떠오르는 왕관",
  "hp": 5200,
  "atk": 25,
  "big": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["shovelSlam", "leapSmash", "charge", "gravityFlip", "spiralHell", "laserLattice", "curseBlackout", "curseReverse", "execSwap"], ["closingWalls", "mirrorDouble", "curseFreeze", "execGravity"]),
  "col": "#c0e0ff",
  "elem": _0x5f0e6d
}, {
  "id": "persona_echo",
  "theme": 204,
  "name": "페르소나의 메아리",
  "title": "다시 쓰는 가면",
  "hp": 6100,
  "atk": 27,
  "flying": !0,
  "orb": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["diveBomb", "swoop", "aimedFan", "mirrorDouble", "cloneShell", "spiralHell", "curseReverse", "curseBlackout", "execMirrorSwap"], ["laserLattice", "arenaTilt", "rewindClock", "curseSeal", "execClones", "dreamGaze"]),
  "col": "#ff90ff",
  "elem": _0xf185a8
}, {
  "id": "binder_echo",
  "theme": 205,
  "name": "바늘과 폐허의 메아리",
  "title": "다시 닫히고 다시 무너지는 책",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "phases": [0.5],
  "multi": [3, 4],
  "patterns": b(["diveBomb", "swoop", "radialBurst", "spiralHell", "arenaTilt", "closingWalls", "curseSeal", "curseFreeze", "execDarkEcho", "execWallCrush"], ["laserLattice", "gravityFlip", "rewindClock", "curseBlackout", "eclipseDive", "execGravity"]),
  "col": "#a0d0ff",
  "elem": _0x366ab6
}, {
  "id": "correxia",
  "theme": 206,
  "name": "붉은 펜의 교정자 코렉시아",
  "title": "이 책에 없던 등장인물을 지우는 손",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "flying": !0,
  "orb": !0,
  "phases": [0.66, 0.33],
  "multi": [3, 4, 5, 3],
  "split": !0,
  "patterns": [Ds, Cs, Ws, zt],
  "col": "#ff3040",
  "elem": _0x560ea8
}], Gt = _0x20a92e => _0x20a92e >= 5 ? 4 : 3, Ee = _0x3f56f0;
function Bs(_0x4d1ce7, _0x389579) {
  const _0x611110 = {
    irKYh: function (_0x588583, _0x58b5ad) {
      return _0x588583 < _0x58b5ad;
    },
    CjxCn: function (_0x4ddf2c, _0x12b40a) {
      return _0x4ddf2c * _0x12b40a;
    },
    ckDsg: function (_0x4329f3, _0x394648) {
      return _0x4329f3 - _0x394648;
    }
  };
  const _0x3fa0e7 = _0x611110, _0x5effd4 = _0x4d1ce7[0], _0x2c2732 = [...new Set(_0x4d1ce7.flat())].filter(_0x449878 => !_0x5effd4.includes(_0x449878)), _0x1b44ce = [];
  for (let _0x15ccb5 = 0; _0x15ccb5 < _0x389579; _0x15ccb5++) {
    const _0x161828 = _0x15ccb5 === _0x389579 - 1 ? _0x2c2732.length : Math.round(_0x15ccb5 / (_0x389579 - 1) * _0x2c2732.length);
    _0x1b44ce.push(_0x15ccb5 === _0x389579 - 1 ? [..._0x4d1ce7[_0x4d1ce7.length - 1]] : [..._0x5effd4, ..._0x2c2732.slice(0, _0x161828)]);
  }
  return _0x1b44ce;
}
const _0x4d03de = {
  col: "#a0ffc0",
  vis: "poison",
  drop: "rock",
  proj: "orb",
  st: "poison"
};
const _0x3920d9 = {
  col: "#d0ff80",
  vis: "poison",
  drop: "shard",
  proj: "orb",
  st: "poison"
};
const _0x230126 = {
  col: "#90e0d0",
  vis: "void",
  drop: "spear",
  proj: "soul"
};
const _0x25f96b = {
  col: "#ffc080",
  vis: "fire",
  drop: "blade",
  proj: "blade",
  st: "burn"
};
const _0x4ce366 = {
  col: "#80b0ff",
  vis: "void",
  drop: "shard",
  proj: "orb"
};
const _0x53fd1a = {
  col: "#40ffa0",
  vis: "poison",
  drop: "blade",
  proj: "blade",
  st: "poison"
};
const _0xeadea6 = {
  col: "#c0c0ff",
  vis: "thunder",
  drop: "spear",
  proj: "bolt",
  st: "shock"
};
const _0x24980b = {
  col: "#ffe0f0",
  vis: "holy",
  drop: "blade",
  proj: "star"
};
const _0x1a3cd8 = {
  col: "#ffffff",
  vis: "star",
  drop: "spear",
  proj: "star"
};
const _0x2f5435 = {
  col: "#f0d0a0",
  vis: "void",
  drop: "blade",
  proj: "blade"
};
const _0x1d3edb = {
  col: "#e0e8ff",
  vis: "ice",
  drop: "shard",
  proj: "shard",
  st: "chill"
};
const _0x5756db = {
  col: "#e0a0ff",
  vis: "void",
  drop: "blade",
  proj: "soul"
};
const _0x2eeae6 = {
  col: "#c0f0ff",
  vis: "ice",
  drop: "shard",
  proj: "shard",
  st: "chill"
};
const _0x3af61e = {
  col: "#ffd8a0",
  vis: "holy",
  drop: "blade",
  proj: "blade"
};
const _0x53a68c = {
  col: "#a0e8ff",
  vis: "ice",
  drop: "shard",
  proj: "orb",
  st: "chill"
};
const _0x699aa7 = {
  col: "#ffa0e0",
  vis: "blood",
  drop: "rock",
  proj: "blade",
  st: "bleed"
};
const _0x33dd82 = {
  col: "#f0f8ff",
  vis: "star",
  drop: "shard",
  proj: "star"
};
const _0x253948 = {
  col: "#ff70b0",
  vis: "void",
  drop: "blade",
  proj: "blade"
};
const _0x4b0a17 = {
  col: "#ffe060",
  vis: "time",
  drop: "blade",
  proj: "bolt",
  st: "slow"
};
const _0x147699 = {
  col: "#ffd890",
  vis: "time",
  drop: "rock",
  proj: "crystal",
  st: "slow"
};
const _0x43c047 = {
  col: "#ffd0a0",
  vis: "thunder",
  drop: "rock",
  proj: "bolt",
  st: "shock"
};
const _0x93824 = {
  col: "#a0ffe0",
  vis: "thunder",
  drop: "blade",
  proj: "bolt",
  st: "shock"
};
const _0x34bccf = {
  col: "#ffa060",
  vis: "fire",
  drop: "spear",
  proj: "bolt",
  st: "burn"
};
const _0x2ab0c7 = {
  col: "#ffd060",
  vis: "holy",
  drop: "blade",
  proj: "blade"
};
const _0x1ca0c2 = {
  col: "#80c0ff",
  vis: "ice",
  drop: "spear",
  proj: "orb",
  st: "chill"
};
const _0x137c76 = {
  col: "#c0ffa0",
  vis: "poison",
  drop: "shard",
  proj: "soul",
  st: "poison"
};
const _0x5ef336 = {
  col: "#ffc070",
  vis: "crystal",
  drop: "rock",
  proj: "crystal"
};
const _0x4213dd = {
  col: "#a0d8ff",
  vis: "ice",
  drop: "spear",
  proj: "shard",
  st: "chill"
};
const _0x45efa3 = {
  col: "#c080ff",
  vis: "void",
  drop: "shard",
  proj: "soul"
};
const _0x5ddb82 = {
  col: "#60a0ff",
  vis: "ice",
  drop: "spear",
  proj: "orb",
  st: "chill"
};
const _0x380f43 = {
  col: "#60d0ff",
  vis: "ice",
  drop: "shard",
  proj: "shard",
  st: "chill"
};
const _0x231153 = {
  col: "#ff8060",
  vis: "fire",
  drop: "blade",
  proj: "blade",
  st: "burn"
};
const _0x196a8e = {
  col: "#ffe0c0",
  vis: "holy",
  drop: "spear",
  proj: "arrow"
};
const _0x3d0ec4 = {
  col: "#ffffff",
  vis: "holy",
  drop: "rock",
  proj: "crystal"
};
const _0x2c68d0 = {
  col: "#d0e0ff",
  vis: "star",
  drop: "shard",
  proj: "star"
};
const _0x514d65 = {
  col: "#ffe8b0",
  vis: "holy",
  drop: "blade",
  proj: "blade"
};
const _0x1f745a = {
  col: "#80ffb0",
  vis: "poison",
  drop: "rock",
  proj: "orb",
  st: "poison"
};
const _0x4bfb0c = {
  col: "#d0a0ff",
  vis: "void",
  drop: "blade",
  proj: "soul"
};
const _0x49ec92 = {
  col: "#ff90c8",
  vis: "void",
  drop: "blade",
  proj: "blade"
};
const _0x10269d = {
  col: "#ffc860",
  vis: "holy",
  drop: "spear",
  proj: "bolt"
};
const _0x200c94 = {
  col: "#70b8ff",
  vis: "ice",
  drop: "spear",
  proj: "orb",
  st: "chill"
};
const _0x4bcfc4 = {
  col: "#9060ff",
  vis: "void",
  drop: "blade",
  proj: "soul"
};
const _0x322069 = {
  ["4"]: [3, 3, 4, 4],
  ["5"]: [3, 4, 4, 5, 5]
};
const definition_graven = {
  id: "graven",
  name: "묘지기 그라벤",
  title: "무너진 묘소의 주인",
  chapter: 1,
  hp: 2200,
  atk: 14,
  w: 40,
  h: 56,
  phases: [0.5],
  patterns: [["shovelSlam", "charge", "boneRain", "lanternFire", "summonSkel"], ["shovelSlam", "charge", "boneRain", "lanternFire", "summonSkel", "leapSmash", "ghostFlames"]],
  col: "#e8e0c8",
  soulStones: 300
};
const definition_mycora = {
  id: "mycora",
  name: "부패의 어미 미코라",
  title: "지하수로를 삼킨 균사",
  chapter: 2,
  hp: 3200,
  atk: 18,
  w: 56,
  h: 52,
  phases: [0.55],
  patterns: [["sporeCloud", "bodySlam", "spitVolley", "rootSpikes", "birthSlimes"], ["sporeCloud", "bodySlam", "spitVolley", "rootSpikes", "birthSlimes", "toxicFlood", "bounceChain"]],
  col: "#8bdc3a",
  soulStones: 400
};
const definition_ignis = {
  id: "ignis",
  name: "용광로 거신 이그니스",
  title: "왕실 대장간의 심장",
  chapter: 3,
  hp: 4600,
  atk: 23,
  w: 56,
  h: 64,
  phases: [0.55],
  patterns: [["hammerQuake", "flameBreath", "lavaPillars", "boulderRoll", "moltenRain"], ["hammerQuake", "flameBreath", "lavaPillars", "boulderRoll", "moltenRain", "coreLaser", "doubleQuake"]],
  col: "#ff6a2a",
  soulStones: 500
};
const definition_king = {
  id: "king",
  name: "끝없는 왕",
  title: "멸망한 왕국의 영원한 군주",
  chapter: 4,
  hp: 6500,
  atk: 26,
  w: 30,
  h: 46,
  phases: [0.66, 0.33],
  patterns: [["swordCombo", "shadowBlades", "crownBeam", "teleSlam", "summonGuards"], ["swordCombo", "shadowBlades", "crownBeam", "teleSlam", "swordRain", "darkWave", "royalExecution"], ["swordCombo", "shadowBlades", "crownBeam", "teleSlam", "swordRain", "darkWave", "pactShadows", "royalExecution"]],
  col: "#9a6bff",
  soulStones: 800,
  mult: 3
};
const definition_morten = {
  id: "morten",
  name: "익사한 제독 모르텐",
  title: "가라앉은 함대의 지휘관",
  chapter: 5,
  hp: 3300,
  atk: 18,
  w: 40,
  h: 56,
  phases: [0.5],
  patterns: [["shovelSlam", "harpoonVolley", "tidalWave", "summonCrew", "cannonBarrage"], ["shovelSlam", "harpoonVolley", "tidalWave", "summonCrew", "cannonBarrage", "whirlpool", "leapSmash"]],
  col: "#70c0e0",
  soulStones: 400
};
const definition_libra = {
  id: "libra",
  name: "금서의 수호자 리브라",
  title: "얼어붙은 지식의 마지막 사서",
  chapter: 6,
  hp: 5400,
  atk: 24,
  w: 30,
  h: 46,
  phases: [0.5],
  patterns: [["iceSpears", "pageStorm", "frostNova", "shelfCollapse", "summonTomes"], ["iceSpears", "pageStorm", "frostNova", "shelfCollapse", "summonTomes", "blizzard", "teleSlam"]],
  col: "#a8e4ff",
  soulStones: 600
};
const definition_oblivion = {
  id: "oblivion",
  name: "망각",
  title: "왕이 버린 그림자, 모든 혼을 삼킨 것",
  chapter: 7,
  hp: 9000,
  atk: 30,
  w: 30,
  h: 46,
  phases: [0.66, 0.33],
  patterns: [["swordCombo", "voidPillars", "shadowBlades", "teleSlam", "voidBeam"], ["swordCombo", "voidPillars", "shadowBlades", "teleSlam", "voidBeam", "darkWave", "swordRain", "oblivionErase", "royalExecution"], ["swordCombo", "voidPillars", "shadowBlades", "teleSlam", "voidBeam", "darkWave", "swordRain", "pactShadows", "oblivionErase", "royalExecution"]],
  col: "#ff80d0",
  soulStones: 1200,
  mult: 4
};
const Nt = Lt.map(({theme: _0x32064e, big: _0x18970d, ..._0x37bfc8}) => {
  const _0xd5fd43 = {
    hlGhq: function (_0x281d89, _0x139bc4) {
      return _0x281d89 - _0x139bc4;
    }
  };
  _0xd5fd43.MIxpH = function (_0x15ecd4, _0x36c0ff) {
    return _0x15ecd4 * _0x36c0ff;
  };
  const _0x285864 = _0xd5fd43, _0x1c7b82 = _0x32064e % 10, _0x23304f = _0x1c7b82 === 6, _0x5bd272 = Gt(_0x1c7b82), _0x4324fd = _0x37bfc8.split ? _0x37bfc8.patterns.slice(0, -1) : _0x37bfc8.patterns, _0x4fd6c4 = Bs(_0x4324fd, _0x5bd272);
  _0x37bfc8.split && _0x4fd6c4.push(_0x37bfc8.patterns[_0x37bfc8.patterns.length - 1]);
  const _0x3b6d78 = _0x23304f ? Ee[4] : _0x1c7b82 === 5 ? [3, 3, 4, 4] : Ee[3], _0x409e4e = {};
  _0x409e4e.length = _0x5bd272 - 1;
  return {
    ..._0x37bfc8,
    "patterns": _0x4fd6c4,
    "phases": Array.from(_0x409e4e, (_0xddec0b, _0x408579) => Math.round((1 - (_0x408579 + 1) / _0x5bd272) * 1000) / 1000),
    "multi": _0x37bfc8.split ? [..._0x3b6d78, 3] : _0x3b6d78,
    "segBar": !0,
    "chapter": _0x32064e,
    "w": _0x18970d ? 40 : 30,
    "h": _0x18970d ? 56 : 46,
    "soulStones": _0x23304f ? 3000 : 760 + _0x285864.MIxpH(_0x1c7b82, 120)
  };
}), D = (_0x11c555, ..._0x51ede8) => [...new Set([..._0x11c555, ..._0x51ede8])], Kt = ["execChain", "execSingularity", "execMeteor", "execVanish", "execTwinSwap", "execRhythm", "execPoisonTide", "execMirrorWorld"], It = ["execEcho", "execGravity", "execSwap", "execClones", "execDarkEcho", "execMirrorSwap", "execWallCrush", "execGround", "execZones", "execHalf", "eclipseDive", "worldSever", "dreamShade", "dreamGaze", "dreamStill", "execMirrorHalf", "execDarkZones", "execMirrorGaze", "execFreezeDive"], le = _0x3d68ea => _0x3d68ea.filter(_0xac9af6 => !Kt.includes(_0xac9af6) && !It.includes(_0xac9af6)), g = (_0x34bc92, _0x2cd898) => [_0x34bc92, D(_0x34bc92, ..._0x2cd898)], Ms = ["shovelSlam", "leapSmash", "charge", "poisonRise", "spiralHell", "meteorShadow", "homingOrbs"], Hs = D(Ms, "laserCross", "singularity", "floorSweep", "execPoisonTide", "execMeteor"), $t = D(Hs, "copySkill", "splitArena", "laserLattice", "curseWeight", "execChain"), Es = ["swordCombo", "teleSlam", "dashSlash", "splitArena", "laserCross", "spiralHell", "inkChase"], Rs = D(Es, "mirrorFlip", "cloneShell", "curseMute", "execRhythm", "execSingularity"), Vt = D(Rs, "copySkill", "singularity", "beamGrid", "execChain"), Ts = ["swordCombo", "dashSlash", "copySkill", "mirrorFlip", "laserCross", "spiralHell", "homingOrbs"], As = D(Ts, "twinSwap", "splitArena", "curseReverse", "execMirrorWorld", "execTwinSwap"), Xt = D(As, "meteorShadow", "mirrorDouble", "beamGrid", "execChain"), Os = ["swordCombo", "teleSlam", "leapSmash", "laserCross", "splitArena", "rewindClock", "homingOrbs"], Fs = D(Os, "meteorShadow", "curseMute", "swapPlace", "execChain", "execRhythm"), Us = D(Fs, "copySkill", "mirrorFlip", "singularity", "curseWeight", "execMirrorWorld", "execMeteor"), Yt = D(le(Us).filter(_0x11d56c => _0x11d56c !== "homingOrbs"), "execChain", "execRhythm", "execMirrorWorld"), Ps = ["diveBomb", "swoop", "radialBurst", "inkChase", "meteorShadow", "singularity", "aimedFan"], zs = D(Ps, "laserCross", "poisonRise", "curseWeight", "eclipseDive", "execMeteor", "execPoisonTide"), Ls = D(zs, "splitArena", "copySkill", "skyCurtain", "execSingularity", "execChain"), Zt = D(le(Ls).filter(_0x1585ab => _0x1585ab !== "aimedFan"), "execChain", "execSingularity", "execPoisonTide"), Gs = ["swordCombo", "dashSlash", "teleSlam", "vanishStalk", "copySkill", "laserCross", "spiralHell"], Ns = D(Gs, "twinSwap", "meteorShadow", "curseMute", "curseBlackout", "execVanish", "execTwinSwap"), Ks = D(Ns, "mirrorFlip", "singularity", "splitArena", "curseWeight", "execChain", "execMirrorWorld"), qt = D(le(Ks).filter(_0xb6d85f => _0xb6d85f !== "spiralHell"), "execVanish", "execTwinSwap", "execChain"), Is = ["diveBomb", "swoop", "radialBurst", "laserCross", "singularity", "meteorShadow", "spiralHell", "curseWeight", "curseMute"], $s = D(Is, "poisonRise", "inkChase", "splitArena", "copySkill", "curseReverse", "execPoisonTide", "execMeteor", "execSingularity", "eclipseDive"), Vs = D($s, "mirrorFlip", "vanishStalk", "twinSwap", "laserLattice", "curseBlackout", "curseSeal", "curseFreeze", "execChain", "execVanish", "execTwinSwap", "execRhythm", "execMirrorWorld"), Qt = D(le(Vs).filter(_0x39b1d7 => _0x39b1d7 !== "spiralHell"), "execChain", "execTwinSwap", "execRhythm", "execMirrorWorld", "execVanish", "execSingularity"), Jt = [{
  "id": "blotta",
  "theme": 211,
  "name": "번짐의 사냥꾼 블로타",
  "title": "번진 잉크로 사냥감을 가두는 자",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "patterns": g(["shovelSlam", "charge", "leapSmash", "poisonRise", "spiralHell", "floorSweep"], ["meteorShadow", "laserLattice", "homingOrbs"]),
  "col": "#a0ffc0",
  "elem": _0x4d03de
}, {
  "id": "marsha",
  "theme": 212,
  "name": "젖은 원고의 늪지기 마르샤",
  "title": "가라앉는 원고를 지키는 자",
  "hp": 4300,
  "atk": 22,
  "patterns": g(["teleSlam", "aimedFan", "poisonRise", "checkerFloor", "homingOrbs", "splitArena"], ["singularity", "spiralHell", "curseWeight"]),
  "col": "#d0ff80",
  "elem": _0x3920d9
}, {
  "id": "nebulo",
  "theme": 213,
  "name": "먹물 안개의 사슴왕 네불로",
  "title": "안개 속을 걷는 뿔",
  "hp": 5200,
  "atk": 25,
  "big": !0,
  "patterns": g(["charge", "dashSlash", "leapSmash", "singularity", "galeWaves", "skyCurtain"], ["poisonRise", "laserCross", "cloneShell"]),
  "col": "#90e0d0",
  "elem": _0x230126
}, {
  "id": "cursiva",
  "theme": 214,
  "name": "흘림체 기사 커시브",
  "title": "흘러내리는 문단을 타는 기사",
  "hp": 6100,
  "atk": 27,
  "patterns": g(["swordCombo", "dashSlash", "inkChase", "crossBeam", "spiralHell", "laserSweep"], ["copySkill", "splitArena", "meteorShadow"]),
  "col": "#ffc080",
  "elem": _0x25f96b
}, {
  "id": "bottla",
  "theme": 215,
  "name": "잉크병의 눈 보틀라",
  "title": "병 속에서 세상을 들여다보는 눈",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "patterns": g(["diveBomb", "swoop", "radialBurst", "laserCross", "poisonRise", "aimedFan", "homingOrbs", "execPoisonTide"], ["singularity", "meteorShadow", "eclipseDive", "execSingularity"]),
  "col": "#80b0ff",
  "elem": _0x4ce366
}, {
  "id": "incipit",
  "theme": 216,
  "name": "백지의 문지기 인시피트",
  "title": "첫 줄을 지키는 자",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "big": !0,
  "patterns": [Ms, Hs, $t],
  "col": "#40ffa0",
  "elem": _0x53fd1a
}, {
  "id": "blinx",
  "theme": 221,
  "name": "점멸 다리지기 블링크스",
  "title": "박자에 맞춰 다리를 끊는 자",
  "hp": 3400,
  "atk": 20,
  "patterns": g(["swordCombo", "teleSlam", "splitArena", "laserLattice", "homingOrbs", "floorSweep"], ["laserCross", "spiralHell", "curseMute"]),
  "col": "#c0c0ff",
  "elem": _0xeadea6
}, {
  "id": "comma",
  "theme": 222,
  "name": "쉼표 정원사 코마",
  "title": "모든 문장에 쉼표를 심는 자",
  "hp": 4300,
  "atk": 22,
  "patterns": g(["teleSlam", "aimedFan", "mirrorFlip", "bladeHalo", "homingOrbs", "checkerFloor"], ["splitArena", "meteorShadow", "curseWeight"]),
  "col": "#ffe0f0",
  "elem": _0x24980b
}, {
  "id": "caret",
  "theme": 223,
  "name": "커서 파수꾼 카렛",
  "title": "쓰다 만 자리에서 깜빡이는 자",
  "hp": 5200,
  "atk": 25,
  "patterns": g(["swordCombo", "dashSlash", "laserCross", "crossBeam", "spiralHell", "cloneDash"], ["copySkill", "singularity", "beamGrid"]),
  "col": "#ffffff",
  "elem": _0x1a3cd8
}, {
  "id": "palimp",
  "theme": 224,
  "name": "덧쓰기 도둑 팰림프",
  "title": "지운 글 위에 남의 글을 덧쓰는 자",
  "hp": 6100,
  "atk": 27,
  "patterns": g(["dashSlash", "teleSlam", "copySkill", "poisonRise", "aimedFan", "homingOrbs"], ["vanishStalk", "splitArena", "laserLattice"]),
  "col": "#f0d0a0",
  "elem": _0x2f5435
}, {
  "id": "hesita",
  "theme": 225,
  "name": "망설임의 눈 헤지타",
  "title": "떠 있다 사라지는 섬의 눈",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "patterns": g(["diveBomb", "swoop", "radialBurst", "splitArena", "laserCross", "aimedFan", "homingOrbs", "execRhythm"], ["mirrorFlip", "meteorShadow", "eclipseDive", "execMirrorWorld"]),
  "col": "#e0e8ff",
  "elem": _0x1d3edb
}, {
  "id": "ellipsis",
  "theme": 226,
  "name": "미완의 왕 엘립시스",
  "title": "모든 문장을 말줄임표로 끝내는 왕",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "patterns": [Es, Rs, Vt],
  "col": "#e0a0ff",
  "elem": _0x5756db
}, {
  "id": "retro",
  "theme": 231,
  "name": "거울 글씨 필경사 레트로",
  "title": "모든 편지를 거꾸로 쓰는 자",
  "hp": 3400,
  "atk": 20,
  "patterns": g(["swordCombo", "aimedFan", "mirrorFlip", "starfall", "homingOrbs", "laserSweep"], ["copySkill", "spiralHell", "laserLattice"]),
  "col": "#c0f0ff",
  "elem": _0x2eeae6
}, {
  "id": "sinistra",
  "theme": 232,
  "name": "왼손잡이 사서 시니스트라",
  "title": "좌우가 바뀐 서가의 주인",
  "hp": 4300,
  "atk": 22,
  "patterns": g(["teleSlam", "dashSlash", "splitArena", "curseReverse", "crossBeam", "homingOrbs"], ["mirrorFlip", "meteorShadow", "cloneShell"]),
  "col": "#ffd8a0",
  "elem": _0x3af61e
}, {
  "id": "gemina",
  "theme": 233,
  "name": "호수의 쌍둥이 게미나",
  "title": "물에 비친 자신과 자리를 바꾸는 자",
  "hp": 5200,
  "atk": 25,
  "patterns": g(["swordCombo", "dashSlash", "twinSwap", "laserLattice", "spiralHell", "galeWaves"], ["mirrorFlip", "laserCross", "swapPlace"]),
  "col": "#a0e8ff",
  "elem": _0x53a68c
}, {
  "id": "asymetra",
  "theme": 234,
  "name": "비대칭 성주 아시메트라",
  "title": "한쪽만 무너진 성의 주인",
  "hp": 6100,
  "atk": 27,
  "big": !0,
  "patterns": g(["shovelSlam", "leapSmash", "charge", "splitArena", "meteorShadow", "floorHalf"], ["copySkill", "singularity", "arenaTilt"]),
  "col": "#ffa0e0",
  "elem": _0x699aa7
}, {
  "id": "catopra",
  "theme": 235,
  "name": "반사의 눈 카토프라",
  "title": "별빛을 거꾸로 비추는 눈",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "patterns": g(["diveBomb", "swoop", "radialBurst", "mirrorFlip", "laserCross", "aimedFan", "homingOrbs", "execMirrorWorld"], ["twinSwap", "singularity", "eclipseDive", "execTwinSwap"]),
  "col": "#f0f8ff",
  "elem": _0x33dd82
}, {
  "id": "antigraph",
  "theme": 236,
  "name": "거울 저자 안티그라프",
  "title": "원고를 거꾸로 베껴 쓰는 자",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "patterns": [Ts, As, Xt],
  "col": "#ff70b0",
  "elem": _0x253948
}, {
  "id": "secunda",
  "theme": 241,
  "name": "초침 집행관 세쿤다",
  "title": "1초마다 칼을 내리는 자",
  "hp": 3400,
  "atk": 20,
  "patterns": g(["swordCombo", "dashSlash", "laserCross", "rewindClock", "homingOrbs", "floorSweep"], ["splitArena", "spiralHell", "curseMute"]),
  "col": "#ffe060",
  "elem": _0x4b0a17
}, {
  "id": "sabula",
  "theme": 242,
  "name": "모래 교열자 사불라",
  "title": "원고를 모래로 지우는 자",
  "hp": 4300,
  "atk": 22,
  "patterns": g(["teleSlam", "aimedFan", "inkChase", "galeWaves", "skyCurtain", "homingOrbs"], ["meteorShadow", "singularity", "curseWeight"]),
  "col": "#ffd890",
  "elem": _0x147699
}, {
  "id": "campana",
  "theme": 243,
  "name": "마감 종지기 캄파나",
  "title": "마감을 알리는 종을 치는 자",
  "hp": 5200,
  "atk": 25,
  "big": !0,
  "patterns": g(["shovelSlam", "leapSmash", "shockRing", "splitArena", "laserCross", "pillarMarch"], ["meteorShadow", "curseMute", "spikeWave"]),
  "col": "#ffd0a0",
  "elem": _0x43c047
}, {
  "id": "nocturn",
  "theme": 244,
  "name": "야간 인쇄공 노크투른",
  "title": "밤새 원고를 찍어 내는 자",
  "hp": 6100,
  "atk": 27,
  "big": !0,
  "patterns": g(["shovelSlam", "charge", "leapSmash", "copySkill", "laserLattice", "meteorShadow"], ["laserCross", "vanishStalk", "checkerFloor"]),
  "col": "#a0ffe0",
  "elem": _0x93824
}, {
  "id": "deadla",
  "theme": 245,
  "name": "마감의 눈 데들라",
  "title": "하늘을 가르는 마지막 시곗바늘",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "patterns": g(["diveBomb", "swoop", "radialBurst", "laserCross", "meteorShadow", "aimedFan", "homingOrbs", "execChain"], ["splitArena", "curseMute", "eclipseDive", "execMeteor"]),
  "col": "#ffa060",
  "elem": _0x34bccf
}, {
  "id": "termina",
  "theme": 246,
  "name": "마감의 판관 테르미나",
  "title": "원고에 마지막 판결을 내리는 자",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "split": !0,
  "patterns": [Os, Fs, Us, Yt],
  "col": "#ffd060",
  "elem": _0x2ab0c7
}, {
  "id": "marea",
  "theme": 251,
  "name": "해일 기수 마레아",
  "title": "검은 파도를 타는 기수",
  "hp": 3400,
  "atk": 20,
  "patterns": g(["charge", "dashSlash", "inkChase", "galeWaves", "homingOrbs", "floorSweep"], ["meteorShadow", "laserLattice", "singularity"]),
  "col": "#80c0ff",
  "elem": _0x1ca0c2
}, {
  "id": "styxa",
  "theme": 252,
  "name": "먹물 뱃사공 스틱사",
  "title": "검은 강을 건네주는 자",
  "hp": 4300,
  "atk": 22,
  "patterns": g(["teleSlam", "aimedFan", "poisonRise", "singularity", "homingOrbs", "skyCurtain"], ["inkChase", "spiralHell", "curseWeight"]),
  "col": "#c0ffa0",
  "elem": _0x137c76
}, {
  "id": "cascada",
  "theme": 253,
  "name": "도미노 사서 카스카다",
  "title": "책장을 줄줄이 쓰러뜨리는 자",
  "hp": 5200,
  "atk": 25,
  "big": !0,
  "patterns": g(["shovelSlam", "leapSmash", "charge", "inkChase", "pillarMarch", "spikeWave"], ["splitArena", "meteorShadow", "closingWalls"]),
  "col": "#ffc070",
  "elem": _0x5ef336
}, {
  "id": "cataract",
  "theme": 254,
  "name": "폭포 위의 매 카타락트",
  "title": "잉크 폭포를 거슬러 나는 자",
  "hp": 6100,
  "atk": 27,
  "patterns": g(["dashSlash", "swordCombo", "meteorShadow", "laserCross", "skyCurtain", "homingOrbs"], ["copySkill", "inkChase", "gravityFlip"]),
  "col": "#a0d8ff",
  "elem": _0x4213dd
}, {
  "id": "vortexa",
  "theme": 255,
  "name": "소용돌이 눈 볼텍사",
  "title": "하늘의 잉크를 휘감는 눈",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "patterns": g(["diveBomb", "swoop", "radialBurst", "singularity", "inkChase", "aimedFan", "homingOrbs", "execSingularity"], ["laserCross", "meteorShadow", "eclipseDive", "execMeteor"]),
  "col": "#c080ff",
  "elem": _0x45efa3
}, {
  "id": "diluvia",
  "theme": 256,
  "name": "잉크 해일의 어미 디루비아",
  "title": "버려진 초고를 삼켜 자란 바다",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "flying": !0,
  "orb": !0,
  "split": !0,
  "patterns": [Ps, zs, Ls, Zt],
  "col": "#60a0ff",
  "elem": _0x5ddb82
}, {
  "id": "invisa",
  "theme": 261,
  "name": "투명 필경사 인비사",
  "title": "보이지 않는 잉크로 쓰는 자",
  "hp": 3400,
  "atk": 20,
  "patterns": g(["swordCombo", "dashSlash", "vanishStalk", "aimedFan", "homingOrbs", "laserSweep"], ["mirrorFlip", "laserLattice", "spiralHell"]),
  "col": "#60d0ff",
  "elem": _0x380f43
}, {
  "id": "umbrax",
  "theme": 262,
  "name": "그림자 서기 움브락스",
  "title": "주인을 잃은 그림자",
  "hp": 4300,
  "atk": 22,
  "patterns": g(["teleSlam", "dashSlash", "vanishStalk", "inkChase", "homingOrbs", "crossBeam"], ["copySkill", "curseBlackout", "meteorShadow"]),
  "col": "#ff8060",
  "elem": _0x231153
}, {
  "id": "vestigia",
  "theme": 263,
  "name": "발자국 사냥꾼 베스티지아",
  "title": "남은 발자국을 쫓는 자",
  "hp": 5200,
  "atk": 25,
  "patterns": g(["dashSlash", "charge", "copySkill", "poisonRise", "aimedFan", "starfall"], ["vanishStalk", "singularity", "curseMute"]),
  "col": "#ffe0c0",
  "elem": _0x196a8e
}, {
  "id": "rasura",
  "theme": 264,
  "name": "지우개 거인 라수라",
  "title": "사막을 통째로 지우는 손",
  "hp": 6100,
  "atk": 27,
  "big": !0,
  "patterns": g(["shovelSlam", "leapSmash", "charge", "twinSwap", "meteorShadow", "floorHalf"], ["splitArena", "laserCross", "curseWeight"]),
  "col": "#ffffff",
  "elem": _0x3d0ec4
}, {
  "id": "evanesa",
  "theme": 265,
  "name": "희미한 눈 에바네사",
  "title": "하나씩 꺼져 가는 별자리",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "patterns": g(["diveBomb", "swoop", "radialBurst", "vanishStalk", "laserCross", "aimedFan", "homingOrbs", "execVanish"], ["twinSwap", "meteorShadow", "eclipseDive", "execTwinSwap"]),
  "col": "#d0e0ff",
  "elem": _0x2c68d0
}, {
  "id": "autor",
  "theme": 266,
  "name": "지워진 작가 아우토르",
  "title": "한때 이 책을 쓰던 손",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "split": !0,
  "patterns": [Gs, Ns, Ks, qt],
  "col": "#ffe8b0",
  "elem": _0x514d65
}, {
  "id": "incipit_echo",
  "theme": 271,
  "name": "인시피트의 메아리",
  "title": "다시 번지는 첫 줄",
  "hp": 3400,
  "atk": 20,
  "big": !0,
  "patterns": g(["shovelSlam", "charge", "poisonRise", "inkChase", "spiralHell", "curseWeight", "curseMute", "execPoisonTide"], ["meteorShadow", "singularity", "curseSeal", "execMeteor"]),
  "col": "#80ffb0",
  "elem": _0x1f745a
}, {
  "id": "ellipsis_echo",
  "theme": 272,
  "name": "엘립시스의 메아리",
  "title": "다시 끊기는 문장",
  "hp": 4300,
  "atk": 22,
  "flying": !0,
  "orb": !0,
  "patterns": g(["diveBomb", "swoop", "splitArena", "laserCross", "mirrorFlip", "curseMute", "curseReverse", "execRhythm"], ["spiralHell", "singularity", "curseFreeze", "execMirrorWorld"]),
  "col": "#d0a0ff",
  "elem": _0x4bfb0c
}, {
  "id": "antigraph_echo",
  "theme": 273,
  "name": "안티그라프의 메아리",
  "title": "다시 베껴 쓰는 거울",
  "hp": 5200,
  "atk": 25,
  "patterns": g(["swordCombo", "dashSlash", "copySkill", "twinSwap", "mirrorFlip", "curseReverse", "curseWeight", "execTwinSwap"], ["laserCross", "splitArena", "curseBlackout", "execMirrorWorld"]),
  "col": "#ff90c8",
  "elem": _0x49ec92
}, {
  "id": "termina_echo",
  "theme": 274,
  "name": "테르미나의 메아리",
  "title": "다시 내려지는 판결",
  "hp": 6100,
  "atk": 27,
  "flying": !0,
  "orb": !0,
  "patterns": g(["diveBomb", "radialBurst", "laserCross", "splitArena", "meteorShadow", "curseMute", "curseSeal", "execChain"], ["singularity", "poisonRise", "curseWeight", "execRhythm"]),
  "col": "#ffc860",
  "elem": _0x10269d
}, {
  "id": "diluvia_echo",
  "theme": 275,
  "name": "디루비아의 메아리",
  "title": "다시 밀려오는 해일",
  "hp": 7000,
  "atk": 29,
  "flying": !0,
  "orb": !0,
  "patterns": g(["diveBomb", "swoop", "inkChase", "singularity", "meteorShadow", "curseWeight", "curseBlackout", "execSingularity"], ["laserCross", "vanishStalk", "curseMute", "eclipseDive", "execVanish"]),
  "col": "#70b8ff",
  "elem": _0x200c94
}, {
  "id": "blanca",
  "theme": 276,
  "name": "백지의 주인 블랑카",
  "title": "쓰이지 않은 모든 이야기의 주인",
  "hp": 9800,
  "atk": 36,
  "mult": 3,
  "flying": !0,
  "orb": !0,
  "split": !0,
  "patterns": [Is, $s, Vs, Qt],
  "col": "#9060ff",
  "elem": _0x4bcfc4
}], er = _0x5522a8 => _0x5522a8 >= 5 ? 5 : 4, sr = _0x322069, ar = Jt.map(({theme: _0x42bd8a, big: _0x37f1cd, ..._0x2236e1}) => {
  const _0x2eb542 = {
    UJXtO: function (_0x5c6ce8, _0x544e81) {
      return _0x5c6ce8 % _0x544e81;
    },
    wasld: function (_0x32d1ed, _0x39090a) {
      return _0x32d1ed * _0x39090a;
    }
  };
  const _0x52c956 = _0x2eb542;
  const _0x3bbd6e = _0x42bd8a % 10, _0x196f35 = _0x3bbd6e === 6, _0x2a7851 = er(_0x3bbd6e), _0x4b89e6 = _0x2236e1.split ? _0x2236e1.patterns.slice(0, -1) : _0x2236e1.patterns, _0x3142c5 = Bs(_0x4b89e6, _0x2a7851);
  _0x2236e1.split && _0x3142c5.push(_0x2236e1.patterns[_0x2236e1.patterns.length - 1]);
  const _0x2ca2cd = sr[_0x2a7851], _0x1003e8 = {};
  _0x1003e8.length = _0x2a7851 - 1;
  return {
    ..._0x2236e1,
    "patterns": _0x3142c5,
    "phases": Array.from(_0x1003e8, (_0x4e178c, _0x442f39) => Math.round((1 - (_0x442f39 + 1) / _0x2a7851) * 1000) / 1000),
    "multi": _0x2236e1.split ? [..._0x2ca2cd, 3] : _0x2ca2cd,
    "segBar": !0,
    "chapter": _0x42bd8a,
    "w": _0x37f1cd ? 40 : 30,
    "h": _0x37f1cd ? 56 : 46,
    "soulStones": _0x196f35 ? 3600 : 900 + _0x3bbd6e * 140
  };
}), Xs = 1.5, K = [definition_graven, definition_mycora, definition_ignis, definition_king, definition_morten, definition_libra, definition_oblivion];
K.push(...wt, ...vt, ...Ht, ...Nt, ...ar);
K.push(makeHiddenBoss(definition_oblivion));
const _0x317d66 = {
  ai: "melee",
  hp: 80,
  atk: 8,
  speed: 0.8,
  w: 12,
  h: 22,
  range: 26,
  windup: 30,
  cd: 60,
  kbRes: 0,
  gold: 5,
  eliteSkill: "shockwave"
};
const _0x401343 = {
  ai: "archer",
  hp: 58,
  atk: 7,
  speed: 0.6,
  w: 12,
  h: 22,
  range: 175,
  windup: 38,
  cd: 100,
  kbRes: 0,
  gold: 5,
  eliteSkill: "volley"
};
const _0x4a19a4 = {
  ai: "flyer",
  hp: 62,
  atk: 8,
  speed: 1,
  w: 14,
  h: 14,
  range: 95,
  windup: 32,
  cd: 85,
  flying: !0,
  kbRes: 0.2,
  gold: 5,
  eliteSkill: "blink"
};
const _0x2c21f5 = {
  ai: "shield",
  hp: 125,
  atk: 10,
  speed: 0.55,
  w: 14,
  h: 22,
  def: 0.12,
  range: 28,
  windup: 32,
  cd: 70,
  kbRes: 0.5,
  gold: 7,
  eliteSkill: "enrage"
};
const _0x109cd2 = {
  ai: "jumper",
  hp: 95,
  atk: 12,
  speed: 1.4,
  w: 16,
  h: 12,
  range: 115,
  windup: 26,
  cd: 70,
  kbRes: 0.1,
  gold: 6,
  eliteSkill: "summon"
};
const _0x421419 = {
  ai: "charger",
  hp: 95,
  atk: 12,
  speed: 0.8,
  w: 18,
  h: 12,
  range: 145,
  windup: 32,
  cd: 75,
  kbRes: 0.2,
  gold: 6,
  eliteSkill: "enrage"
};
const _0x328067 = {
  ai: "turret",
  hp: 90,
  atk: 11,
  speed: 0,
  w: 16,
  h: 18,
  range: 200,
  windup: 40,
  cd: 105,
  kbRes: 1,
  gold: 6,
  eliteSkill: "volley"
};
const _0x4e2422 = {
  ai: "bomber",
  hp: 66,
  atk: 11,
  speed: 1.05,
  w: 16,
  h: 12,
  range: 30,
  windup: 28,
  cd: 85,
  flying: !0,
  kbRes: 0.2,
  gold: 6,
  eliteSkill: "nova"
};
const _0xcb1cf8 = {
  ai: "caster",
  hp: 92,
  atk: 12,
  speed: 0.85,
  w: 14,
  h: 14,
  range: 165,
  windup: 36,
  cd: 100,
  flying: !0,
  kbRes: 0.2,
  gold: 7,
  eliteSkill: "volley"
};
const _0x5a2155 = {
  ai: "caster",
  hp: 100,
  atk: 12,
  speed: 0.6,
  w: 12,
  h: 22,
  range: 170,
  windup: 38,
  cd: 105,
  kbRes: 0.1,
  gold: 8,
  eliteSkill: "summon"
};
const _0x1963e3 = {
  ai: "golem",
  hp: 240,
  atk: 18,
  speed: 0.45,
  w: 24,
  h: 28,
  def: 0.15,
  range: 40,
  windup: 44,
  cd: 90,
  kbRes: 0.85,
  gold: 12,
  eliteSkill: "shockwave"
};
const _0x25b047 = {
  ai: "teleporter",
  hp: 120,
  atk: 14,
  speed: 1,
  w: 12,
  h: 22,
  range: 28,
  windup: 26,
  cd: 80,
  kbRes: 0.1,
  gold: 9,
  eliteSkill: "blink"
};
const _0x5cb897 = {
  ai: "lancer",
  hp: 140,
  atk: 15,
  speed: 0.75,
  w: 14,
  h: 24,
  def: 0.1,
  range: 70,
  windup: 32,
  cd: 70,
  kbRes: 0.4,
  gold: 9,
  eliteSkill: "shockwave"
};
const _0x56249d = {
  melee: _0x317d66,
  archer: _0x401343,
  flyer: _0x4a19a4,
  shield: _0x2c21f5,
  jumper: _0x109cd2,
  charger: _0x421419,
  turret: _0x328067,
  bomber: _0x4e2422,
  caster: _0xcb1cf8,
  gcaster: _0x5a2155,
  golem: _0x1963e3,
  teleporter: _0x25b047,
  lancer: _0x5cb897
};
const _0x482f9b = {
  weight: 4
};
const _0x43dcb4 = {
  w: 14,
  h: 10
};
const _0x53d5ed = {
  def: 0.1
};
const _0x452d0f = {
  w: 18,
  h: 24,
  mul: 0.8
};
const _0x5b96dd = {
  def: 0.15
};
const _0xd78b2 = {
  weight: 3
};
const _0x3a7ef6 = {
  vis: "star"
};
const _0x2d867d = {
  elem: _0x3a7ef6
};
const _0x49a627 = {
  weight: 4
};
const _0x4f3bf0 = {
  w: 18
};
const _0x36ac2e = {
  vis: "thunder"
};
const _0x8a0277 = {
  elem: _0x36ac2e
};
const _0x39e49b = {
  def: 0.18
};
const _0x4b8a3d = {
  vis: "fire",
  st: "burn"
};
const _0x3b746f = {
  elem: _0x4b8a3d
};
const _0x4b221a = {
  weight: 3
};
const _0xd3a949 = {
  vis: "void"
};
const _0x5f4bf0 = {
  elem: _0xd3a949
};
const _0x3bebfb = {
  weight: 4
};
const _0x394358 = {
  vis: "poison",
  st: "poison"
};
const _0x42cdb8 = {
  elem: _0x394358
};
const _0x517876 = {
  w: 14,
  h: 10
};
const _0x3c7c14 = {
  vis: "blood"
};
const _0x33e98b = {
  elem: _0x3c7c14
};
const _0x2f1d39 = {
  def: 0.2,
  weight: 3
};
const _0x24ba77 = {
  w: 20
};
const _0x76199f = {
  speed: 0.6,
  mul: 1.2
};
const _0x10876b = {
  def: 0.15
};
const _0x210dbd = {
  w: 20,
  h: 16,
  mul: 1.3
};
const _0x302a55 = {
  vis: "poison",
  st: "poison"
};
const _0x36053a = {
  elem: _0x302a55
};
const _0x53f22f = {
  def: 0.2
};
const _0x1b393c = {
  w: 20
};
const _0x40420b = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x45f082 = {
  w: 20,
  h: 14
};
const _0x1f996b = {
  w: 18,
  h: 14,
  def: 0.18
};
const _0x4f68b8 = {
  vis: "thunder"
};
const _0x4fb349 = {
  elem: _0x4f68b8
};
const _0xba607d = {
  speed: 1.2
};
const _0x560696 = {
  vis: "thunder"
};
const _0x338107 = {
  elem: _0x560696
};
const _0x2da4f9 = {
  vis: "thunder"
};
const _0x2038c6 = {
  elem: _0x2da4f9
};
const _0x471333 = {
  weight: 4
};
const _0x4ffcf9 = {
  w: 12,
  h: 12
};
const _0x347fee = {
  vis: "time"
};
const _0xab3b62 = {
  w: 18,
  elem: _0x347fee
};
const _0x4d8e79 = {
  weight: 4,
  def: 0.1
};
const _0x3b463d = {
  vis: "time"
};
const _0x5bbb87 = {
  elem: _0x3b463d
};
const _0x110467 = {
  def: 0.22
};
const _0x4ee855 = {
  vis: "holy"
};
const _0x3c8c76 = {
  elem: _0x4ee855
};
const _0x5a3de2 = {
  weight: 4
};
const _0x2f4450 = {
  vis: "thunder"
};
const _0x2b8de5 = {
  elem: _0x2f4450
};
const _0x46929f = {
  vis: "thunder"
};
const _0x57003f = {
  elem: _0x46929f
};
const _0x1f7130 = {
  w: 18,
  h: 14,
  def: 0.18
};
const _0x46d50a = {
  vis: "ice",
  st: "chill"
};
const _0x309867 = {
  elem: _0x46d50a
};
const _0x3ab57b = {
  weight: 4
};
const _0x1983bf = {
  def: 0.1
};
const _0x2dfe81 = {
  vis: "thunder"
};
const _0x496bf2 = {
  w: 20,
  elem: _0x2dfe81
};
const _0x299ecc = {
  weight: 4,
  speed: 1
};
const _0x387b55 = {
  def: 0.2,
  weight: 3
};
const _0x4a6e75 = {
  vis: "thunder",
  st: "shock"
};
const _0x23d64b = {
  elem: _0x4a6e75
};
const _0x2f5658 = {
  w: 20,
  h: 16
};
const _0x2139d3 = {
  weight: 4
};
const _0x5c1f0a = {
  vis: "void"
};
const _0xff5da2 = {
  w: 12,
  h: 12,
  elem: _0x5c1f0a
};
const _0x76f5d6 = {
  weight: 4
};
const _0x2e7190 = {
  vis: "holy"
};
const _0x2546a8 = {
  elem: _0x2e7190
};
const _0x542213 = {
  w: 20
};
const _0x5e51a9 = {
  vis: "poison",
  st: "poison"
};
const _0xb70732 = {
  elem: _0x5e51a9
};
const _0x2c4da4 = {
  w: 18,
  h: 14,
  def: 0.2
};
const _0x1dad89 = {
  weight: 4,
  def: 0.12
};
const _0x274d96 = {
  vis: "void"
};
const _0x2f36a7 = {
  w: 18,
  elem: _0x274d96
};
const _0x1122ae = {
  weight: 4
};
const _0x4e8f1c = {
  def: 0.2
};
const _0x16b315 = {
  vis: "time"
};
const _0x441a2c = {
  w: 18,
  elem: _0x16b315
};
const _0x2f8c19 = {
  vis: "fire",
  st: "burn"
};
const _0x1ebfce = {
  elem: _0x2f8c19
};
const _0x44e26a = {
  w: 20,
  h: 16,
  mul: 1.1
};
const _0x766e23 = {
  vis: "ice",
  st: "chill"
};
const _0x245431 = {
  def: 0.15,
  elem: _0x766e23
};
const _0x49502e = {
  def: 0.22,
  weight: 3
};
const _0x56d398 = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x1bbeb6 = {
  weight: 4
};
const _0x3d5ea3 = {
  vis: "star"
};
const _0x33653f = {
  elem: _0x3d5ea3
};
const _0x360b48 = {
  weight: 4
};
const _0x2f3b6d = {
  w: 20
};
const _0x202832 = {
  weight: 4,
  def: 0.12
};
const _0x5735f9 = {
  weight: 4,
  mul: 1.05
};
const _0x418bf4 = {
  vis: "fire",
  st: "burn"
};
const _0xdd11d6 = {
  elem: _0x418bf4
};
const _0x1a4bc8 = {
  w: 20,
  h: 16
};
const _0x1b6552 = {
  vis: "fire",
  st: "burn"
};
const _0x5a9eee = {
  elem: _0x1b6552
};
const _0x144ad3 = {
  def: 0.2,
  weight: 4
};
const _0x12a55b = {
  def: 0.24,
  weight: 3
};
const _0x4b4184 = {
  vis: "void"
};
const _0x17f26a = {
  w: 12,
  h: 12,
  elem: _0x4b4184
};
const _0x4d5add = {
  w: 20,
  h: 16,
  mul: 1.15
};
const M0 = Object.fromEntries(K.map(_0x9974c => [_0x9974c.id, _0x9974c])), H0 = _0x514bd9 => Math.round(_0x514bd9.hp * (_0x514bd9.mult ?? Xs)), E0 = _0x82f5b8 => Math.round(_0x82f5b8.atk * (_0x82f5b8.mult ?? Xs)), tr = _0x56249d, i = {
  "arrow": _0x1e74f3 => ({
    "spr": "arrow",
    "spd": 3.6,
    "life": 120,
    "w": 10,
    "h": 4,
    "col": _0x1e74f3
  }),
  "spear": _0x5d6cd4 => ({
    "spr": "spear",
    "spd": 4,
    "life": 110,
    "w": 18,
    "h": 4,
    "col": _0x5d6cd4
  }),
  "orb": (_0x4b8fcc, _0x2bb50e = 0) => ({
    "spr": "orb",
    "spd": 2.7,
    "life": 160,
    "w": 10,
    "h": 10,
    "col": _0x4b8fcc,
    "home": _0x2bb50e || void 0
  }),
  "fire": _0x3e9236 => ({
    "spr": "fireball",
    "spd": 3,
    "life": 120,
    "w": 10,
    "h": 10,
    "col": _0x3e9236,
    "st": "burn"
  }),
  "shard": (_0x1ff410, _0x5c113e) => ({
    "spr": "shard",
    "spd": 3.4,
    "life": 120,
    "w": 10,
    "h": 6,
    "col": _0x1ff410,
    "st": _0x5c113e
  }),
  "star": _0x16611d => ({
    "spr": "star",
    "spd": 3.2,
    "life": 130,
    "w": 9,
    "h": 9,
    "col": _0x16611d
  }),
  "bolt": _0x4cf37 => ({
    "spr": "bolt",
    "spd": 4.2,
    "life": 100,
    "w": 12,
    "h": 6,
    "col": _0x4cf37
  }),
  "blade": _0x3c7186 => ({
    "spr": "blade",
    "spd": 3.6,
    "life": 110,
    "w": 10,
    "h": 6,
    "col": _0x3c7186
  }),
  "soul": _0x451d10 => ({
    "spr": "soul",
    "spd": 2.2,
    "life": 180,
    "w": 8,
    "h": 8,
    "col": _0x451d10,
    "home": 0.035
  }),
  "lob": (_0x4689b1, _0x285cb8) => ({
    "spr": "spore",
    "spd": 2.6,
    "vy": -3.2,
    "grav": 0.1,
    "life": 140,
    "w": 8,
    "h": 8,
    "col": _0x4689b1,
    "st": _0x285cb8
  })
}, rr = [["ash_pilgrim", "재의 순례자", 11, "melee", "#b0a090", _0x482f9b], ["ember_bat", "잿불 박쥐", 11, "flyer", "#ff8a4a", _0x43dcb4], ["fossil_scorpion", "화석 전갈", 11, "charger", "#c0a070", _0x53d5ed], ["cult_acolyte", "성좌단 신도", 11, "gcaster", "#c0b0ff", {
  "proj": i.orb("#c0b0ff", 0.03)
}], ["bell_ringer", "종지기", 12, "golem", "#c0a060", _0x452d0f], ["bronze_gargoyle", "청동 가고일", 12, "bomber", "#b08a50", _0x5b96dd], ["toll_wraith", "울림 망령", 12, "teleporter", "#e0d0a0"], ["tower_knight", "종탑 기사", 12, "shield", "#8a8aa0", _0xd78b2], ["crystal_golem", "수정 골렘", 13, "golem", "#8a8aff", _0x2d867d], ["lost_miner", "광부 망령", 13, "melee", "#a0a0c0", _0x49a627], ["crystal_spider", "수정 거미", 13, "jumper", "#b0a0ff", _0x4f3bf0], ["star_wisp", "별빛 위습", 13, "caster", "#e0e0ff", {
  "proj": i.star("#e0e0ff")
}], ["thorn_sprite", "가시덩굴 정령", 14, "turret", "#6ab03a", {
  "proj": i.lob("#a0e060", "poison")
}], ["sky_jelly", "하늘 해파리", 14, "bomber", "#a0e0ff", _0x8a0277], ["garden_doll", "정원사 인형", 14, "lancer", "#e0c0a0"], ["feather_hunter", "깃털 사냥꾼", 14, "archer", "#80c0a0", {
  "proj": i.arrow("#e0f0e0")
}], ["armillary", "혼천의", 15, "caster", "#ffe080", {
  "w": 16,
  "h": 16,
  "proj": i.orb("#ffe080", 0.04)
}], ["astrologer", "별 점술사", 15, "teleporter", "#a0c0ff"], ["clock_knight", "시계태엽 기사", 15, "shield", "#c0a060", _0x39e49b], ["meteor_sprite", "유성 정령", 15, "flyer", "#ff9a4a", _0x3b746f], ["star_knight", "성좌 기사", 16, "lancer", "#c0b0ff", _0x4b221a], ["hole_eye", "블랙홀 눈", 16, "caster", "#9a6bff", {
  "proj": i.orb("#9a6bff", 0.05)
}], ["star_eater", "별 포식 벌레", 16, "jumper", "#6a5a8a", _0x5f4bf0], ["ash_angel", "잿빛 천사", 16, "teleporter", "#d0c8e0"], ["war_dead", "사자 병사", 21, "melee", "#8a7a6a", _0x3bebfb], ["carrion_crow", "썩은 까마귀", 21, "flyer", "#4a4a5a"], ["mud_golem", "진흙 골렘", 21, "golem", "#6a5440", _0x42cdb8], ["siege_archer", "공성 궁수", 21, "archer", "#a08a6a", {
  "proj": i.arrow("#d0c0a0")
}], ["vine_vampire", "포도원 흡혈귀", 22, "teleporter", "#c04060"], ["blood_bat", "흡혈 박쥐", 22, "flyer", "#c03040", _0x517876], ["wine_slime", "포도주 슬라임", 22, "jumper", "#8a2a5a", _0x33e98b], ["grape_maiden", "포도원 시녀", 22, "gcaster", "#e080a0", {
  "proj": i.lob("#c04080")
}], ["jailer", "간수", 23, "shield", "#6a6a72", _0x2f1d39], ["chain_hound", "사슬 사냥개", 23, "charger", "#5a5a62", _0x24ba77], ["torture_engine", "고문 기계", 23, "turret", "#8a6a4a", {
  "proj": i.blade("#c0c0c8")
}], ["shackled", "족쇄 죄수", 23, "melee", "#9a8a7a", _0x76199f], ["fallen_priest", "타락한 사제", 24, "gcaster", "#ff6060", {
  "proj": i.soul("#ff6060")
}], ["blood_choir", "핏빛 성가대", 24, "turret", "#e04050", {
  "proj": i.orb("#ff4060")
}], ["red_gargoyle", "붉은 가고일", 24, "bomber", "#a03030", _0x10876b], ["templar", "성당 기사", 24, "lancer", "#c0a0a0"], ["werewolf", "늑대인간", 25, "charger", "#6a6a5a", _0x210dbd], ["trapper", "덫사냥꾼", 25, "archer", "#7a8a5a", {
  "proj": i.spear("#c0c0a0")
}], ["moon_moth", "그믐 나방", 25, "bomber", "#a0c0a0", _0x36053a], ["dark_dryad", "어둠 드라이어드", 25, "teleporter", "#80c080"], ["crimson_guard", "핏빛 근위병", 26, "shield", "#a02040", _0x53f22f], ["blood_mage", "혈마도사", 26, "gcaster", "#ff3060", {
  "proj": i.orb("#ff3060", 0.04)
}], ["blood_hound", "혈견", 26, "charger", "#8a1a2a", _0x1b393c], ["bat_swarm", "박쥐 떼", 26, "flyer", "#6a1a2a", _0x40420b], ["deep_angler", "심해 아귀", 31, "charger", "#2a6a7a", _0x45f082], ["first_crab", "태초의 게", 31, "shield", "#d06a4a", _0x1f996b], ["tide_priest", "조수 사제", 31, "gcaster", "#80ffe0", {
  "proj": i.orb("#80ffe0", 0.03)
}], ["sea_jelly", "심해 해파리", 31, "bomber", "#80a0ff", _0x4fb349], ["stone_treant", "석화 나무정령", 32, "golem", "#8a8a70"], ["fossil_raptor", "화석 랩터", 32, "charger", "#a09a7a"], ["moss_spirit", "이끼 정령", 32, "flyer", "#9ad070"], ["petrified_ranger", "석화된 순찰자", 32, "archer", "#9a9a8a", {
  "proj": i.arrow("#d0d0b0")
}], ["storm_harpy", "폭풍 하피", 33, "flyer", "#80a0d0", _0xba607d], ["thunder_knight", "뇌전 기사", 33, "lancer", "#c0e0ff", _0x338107], ["spark_wisp", "번개 위습", 33, "caster", "#e0f0ff", {
  "proj": i.bolt("#e0f0ff")
}], ["cloud_golem", "구름 골렘", 33, "golem", "#c0d0e0", _0x2038c6], ["mirror_double", "거울 분신", 34, "teleporter", "#d0d0ff", _0x471333], ["glass_shard", "유리 파편", 34, "flyer", "#e0e8ff", _0x4ffcf9], ["reflection_mage", "반사 마도사", 34, "gcaster", "#ffffff", {
  "proj": i.shard("#ffffff")
}], ["prism_turret", "프리즘", 34, "turret", "#c0a0ff", {
  "proj": i.star("#ffe0ff")
}], ["time_eater", "시간 포식자", 35, "jumper", "#c0b070", _0xab3b62], ["clock_soldier", "태엽 병사", 35, "melee", "#c0a060", _0x4d8e79], ["hourglass_golem", "모래시계 골렘", 35, "golem", "#e0c080", _0x5bbb87], ["echo", "메아리 잔상", 35, "teleporter", "#ffe0a0"], ["pact_sentinel", "계약의 파수꾼", 36, "shield", "#e0d0ff", _0x110467], ["first_soul", "최초의 혼", 36, "bomber", "#fff0c0", _0x3c8c76], ["origin_eye", "근원의 눈", 36, "caster", "#fff0c0", {
  "proj": i.soul("#fff0c0")
}], ["arche_shade", "아르케의 그림자", 36, "lancer", "#a090c0"], ["sky_pirate", "하늘 해적", 41, "melee", "#a08a6a", _0x5a3de2], ["harpoon_gunner", "작살 포수", 41, "archer", "#8aa0b0", {
  "proj": i.spear("#d0e0f0")
}], ["storm_gull", "폭풍 갈매기", 41, "flyer", "#d0e0f0", _0x2b8de5], ["anchor_golem", "닻 골렘", 41, "golem", "#6a7a8a", _0x57003f], ["mist_maiden", "물안개 시녀", 42, "gcaster", "#a0f0ff", {
  "proj": i.shard("#d0f8ff", "chill")
}], ["falls_crab", "폭포 게", 42, "shield", "#4a8aa0", _0x1f7130], ["rain_jelly", "빗방울 해파리", 42, "bomber", "#80d0ff", _0x309867], ["torrent_monk", "급류 수도승", 42, "teleporter", "#60a0c0"], ["whalebone_warrior", "고래뼈 전사", 43, "lancer", "#d0d0c0", _0x3ab57b], ["barnacle_blob", "따개비 덩어리", 43, "jumper", "#7a8a7a", _0x1983bf], ["storm_eel", "폭풍 장어", 43, "charger", "#4a6a9a", _0x496bf2], ["marrow_wisp", "골수 위습", 43, "caster", "#e0f0ff", {
  "proj": i.bolt("#e0f0ff")
}], ["feather_monk", "깃털 수도사", 44, "melee", "#e0d0b0", _0x299ecc], ["plume_archer", "깃털 궁수", 44, "archer", "#c0a080", {
  "proj": i.arrow("#fff0d0")
}], ["temple_owl", "사원 올빼미", 44, "flyer", "#a08a6a"], ["quill_turret", "깃펜 포탑", 44, "turret", "#fff0d0", {
  "proj": i.blade("#fff0d0")
}], ["storm_paladin", "폭풍 성기사", 45, "shield", "#c0d0e0", _0x387b55], ["thunder_roc", "천둥 새", 45, "bomber", "#8aa0d0", _0x23d64b], ["cloud_wyrm", "구름 비룡", 45, "charger", "#c0d0f0", _0x2f5658], ["gale_sorcerer", "돌풍 마법사", 45, "gcaster", "#c0e0ff", {
  "proj": i.bolt("#c0e0ff")
}], ["rift_stalker", "균열 추적자", 46, "teleporter", "#c0a0ff", _0x2139d3], ["void_shard", "공허 파편", 46, "flyer", "#e0c0ff", _0xff5da2], ["torn_angel", "찢긴 천사", 46, "lancer", "#d0c0e0"], ["rift_eye", "균열의 눈", 46, "caster", "#a080ff", {
  "proj": i.orb("#c0a0ff", 0.045)
}], ["lamp_drowned", "등불 익사자", 51, "melee", "#6a8a8a", _0x76f5d6], ["lamp_jelly", "등불 해파리", 51, "bomber", "#ffe8a0", _0x2546a8], ["tide_hound", "조류 사냥개", 51, "charger", "#3a6a7a", _0x542213], ["lens_turret", "등대 렌즈", 51, "turret", "#ffe8a0", {
  "proj": i.bolt("#fff0c0")
}], ["coral_bride", "산호 신부", 52, "gcaster", "#ff90b0", {
  "proj": i.lob("#ff90b0", "poison")
}], ["coral_golem", "산호 골렘", 52, "golem", "#d06a7a", _0xb70732], ["grave_crab", "묘지 게", 52, "shield", "#a0a0a0", _0x2c4da4], ["bone_fish", "뼈 물고기", 52, "flyer", "#e0e0d0"], ["trench_diver", "해구 잠수부", 53, "lancer", "#5a6a8a", _0x1dad89], ["angler_eye", "해구의 눈", 53, "caster", "#7090ff", {
  "proj": i.orb("#7090ff", 0.04)
}], ["abyss_worm", "심연 벌레", 53, "jumper", "#3a3a6a", _0x2f36a7], ["silent_monk", "침묵 수도사", 53, "teleporter", "#4a5a7a"], ["inverted_citizen", "거꾸로 선 시민", 54, "melee", "#c0a080", _0x1122ae], ["city_watch", "뒤집힌 경비병", 54, "shield", "#8a7a5a", _0x4e8f1c], ["gear_spider", "태엽 거미", 54, "jumper", "#c0a060", _0x441a2c], ["lantern_moth", "가로등 나방", 54, "bomber", "#ffd080", _0x1ebfce], ["aurora_wisp", "오로라 위습", 55, "caster", "#80ffc0", {
  "proj": i.star("#c0ffe0")
}], ["night_raptor", "밤 랩터", 55, "charger", "#2a3a4a", _0x44e26a], ["polar_hunter", "극야 사냥꾼", 55, "archer", "#a0c0d0", {
  "proj": i.shard("#e0ffff", "chill")
}], ["frost_gargoyle", "서리 가고일", 55, "flyer", "#80a0b0", _0x245431], ["outer_knight", "바깥의 기사", 56, "shield", "#4a6a6a", _0x49502e], ["herald_eye", "전령의 눈", 56, "caster", "#a0ffe0", {
  "proj": i.soul("#a0ffe0")
}], ["unmade", "지워진 것", 56, "teleporter", "#d0fff0"], ["outer_swarm", "바깥의 떼", 56, "flyer", "#3a5a5a", _0x56d398], ["sleepwalker", "몽유병자", 61, "melee", "#b0a0c8", _0x1bbeb6], ["lull_moth", "자장가 나방", 61, "bomber", "#e0d0ff", _0x33653f], ["sand_golem", "잠모래 골렘", 61, "golem", "#c0b0d0"], ["moon_archer", "달빛 궁수", 61, "archer", "#d0c8ff", {
  "proj": i.arrow("#e8e0ff")
}], ["memory_thief", "기억 도둑", 62, "teleporter", "#6a8070", _0x360b48], ["oblivion_crow", "망각 까마귀", 62, "flyer", "#3a3a44"], ["root_wolf", "뿌리 늑대", 62, "charger", "#5a6a4a", _0x2f3b6d], ["memory_bloom", "기억 꽃봉오리", 62, "turret", "#ffd890", {
  "proj": i.star("#ffe0a0")
}], ["stair_warden", "계단 파수꾼", 63, "lancer", "#8a94a8", _0x202832], ["paper_crane", "종이 학", 63, "flyer", "#f0f0f8"], ["orbit_lamp", "궤도 등불", 63, "turret", "#e8f0ff", {
  "proj": i.bolt("#e8f0ff")
}], ["stair_scribe", "계단 서기", 63, "gcaster", "#c0d0ff", {
  "proj": i.shard("#c0d0ff")
}], ["nightmare_clown", "악몽 광대", 64, "melee", "#e0e0e0", _0x5735f9], ["knife_juggler", "칼 곡예사", 64, "archer", "#ffd040", {
  "proj": i.blade("#ffd040")
}], ["balloon_jelly", "풍선 해파리", 64, "bomber", "#ff6080", _0xdd11d6], ["circus_lion", "불꽃 사자", 64, "charger", "#c08030", _0x1a4bc8], ["wax_golem", "촛농 골렘", 65, "golem", "#e0c8a0", _0x5a9eee], ["toy_soldier", "장난감 병정", 65, "shield", "#a03040", _0x144ad3], ["lullaby_doll", "자장가 인형", 65, "gcaster", "#ffc890", {
  "proj": i.soul("#ffc890")
}], ["music_box", "오르골", 65, "turret", "#c0a070", {
  "proj": i.star("#ffe0b0")
}], ["dream_knight", "꿈의 기사", 66, "shield", "#5a4a6a", _0x12a55b], ["shut_eye", "감긴 눈", 66, "caster", "#ffe0a0", {
  "proj": i.orb("#ffe0a0", 0.045)
}], ["nightmare_shard", "악몽 파편", 66, "flyer", "#a080c0", _0x17f26a], ["dawn_raptor", "새벽 랩터", 66, "charger", "#c0a080", _0x4d5add]], ie = _0x154a87 => _0x154a87.map(([_0x521231, _0x5c8ba4, _0x3618bb, _0x4e7400, _0x2c22fc, _0x55a25d = {}]) => {
  const _0x418ea4 = {
    JdARl: function (_0x4878e2, _0x1033a2) {
      return _0x4878e2 * _0x1033a2;
    }
  };
  (_0x418ea4.obyVF = function (_0xcc86df, _0x5a48d2) {
    return _0xcc86df + _0x5a48d2;
  }, _0x418ea4.fXaUp = function (_0xa942f8, _0x42f3e6) {
    return _0xa942f8 - _0x42f3e6;
  }, _0x418ea4.xQaja = function (_0x42dbcd, _0x4c8c2e) {
    return _0x42dbcd === _0x4c8c2e;
  }, _0x418ea4.dMbOj = "turret");
  const _0x2c9bb2 = _0x418ea4, _0x447c57 = tr[_0x4e7400], _0x238056 = _0x2c9bb2.obyVF(1, _0x2c9bb2.fXaUp(_0x3618bb % 10, 1) * 0.12) * (_0x55a25d.mul ?? 1), {mul: _0x5ab233, ..._0x2a2798} = _0x55a25d, _0x4d9a4a = {
    "id": _0x521231,
    "name": _0x5c8ba4,
    "chapter": _0x3618bb,
    "col": _0x2c22fc,
    "weight": 3,
    ..._0x447c57,
    "hp": Math.round(_0x447c57.hp * _0x238056),
    "atk": Math.round(_0x447c57.atk * _0x238056),
    ..._0x2a2798
  };
  return (!_0x4d9a4a.proj && (_0x4d9a4a.ai === "archer" || _0x2c9bb2.xQaja(_0x4d9a4a.ai, "caster") || _0x2c9bb2.xQaja(_0x4d9a4a.ai, "turret")) && (_0x4d9a4a.proj = _0x4d9a4a.ai === "archer" ? i.arrow(_0x2c22fc) : _0x4d9a4a.ai === _0x2c9bb2.dMbOj ? i.lob(_0x2c22fc) : i.orb(_0x2c22fc)), _0x4d9a4a);
}), Ys = ie(rr);
[...new Set(Ys.map(_0x4a67c5 => _0x4a67c5.ai))];
const _0x2bb1c8 = {
  weight: 4
};
const _0x158dbc = {
  w: 18,
  def: 0.1
};
const _0x59b849 = {
  weight: 4
};
const _0x248db6 = {
  w: 18
};
const _0x1ce0d0 = {
  w: 20
};
const _0x587ed4 = {
  vis: "poison",
  st: "poison"
};
const _0xe35b5f = {
  elem: _0x587ed4
};
const _0x3c28dd = {
  vis: "void"
};
const _0x1180a8 = {
  elem: _0x3c28dd
};
const _0x51baae = {
  def: 0.18,
  weight: 4
};
const _0x159865 = {
  def: 0.1
};
const _0x2f25bd = {
  w: 14,
  h: 10
};
const _0x2a42d0 = {
  vis: "fire",
  st: "burn"
};
const _0x3e7825 = {
  w: 12,
  h: 12,
  elem: _0x2a42d0
};
const _0x5ea625 = {
  weight: 4
};
const _0x532b10 = {
  vis: "fire",
  st: "burn"
};
const _0x8fce60 = {
  elem: _0x532b10
};
const _0x4e0566 = {
  def: 0.22,
  weight: 3
};
const _0x4bf8a7 = {
  weight: 4
};
const _0x17e30d = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x126a26 = {
  weight: 4
};
const _0x3853b6 = {
  def: 0.1
};
const _0xf1c119 = {
  weight: 4
};
const _0x154589 = {
  vis: "ice",
  st: "chill"
};
const _0x42fb8e = {
  elem: _0x154589
};
const _0x50de55 = {
  weight: 4
};
const _0x323b1f = {
  w: 20
};
const _0x449a91 = {
  def: 0.2,
  weight: 4
};
const _0x90f3bc = {
  vis: "holy"
};
const _0x509d15 = {
  w: 12,
  h: 12,
  elem: _0x90f3bc
};
const _0x1063f1 = {
  weight: 4
};
const _0x1c0698 = {
  vis: "thunder",
  st: "shock"
};
const _0x13863e = {
  elem: _0x1c0698
};
const _0x51db02 = {
  w: 18,
  h: 14,
  def: 0.18
};
const _0x5c9fe7 = {
  def: 0.22,
  weight: 3
};
const _0x4de2bf = {
  w: 18
};
const _0x57cd1f = {
  vis: "blood",
  st: "bleed"
};
const _0x2aa88a = {
  elem: _0x57cd1f
};
const _0x52716b = {
  weight: 4
};
const _0x3134f0 = {
  w: 18,
  h: 14,
  mul: 1.1
};
const _0x4dce30 = {
  w: 18
};
const _0x57f3c6 = {
  vis: "fire",
  st: "burn"
};
const _0x5d37d4 = {
  elem: _0x57f3c6
};
const _0x5e51f3 = {
  weight: 4
};
const _0x12e2b1 = {
  w: 20
};
const _0x193247 = {
  def: 0.2,
  weight: 4
};
const _0x4039aa = {
  vis: "fire",
  st: "burn"
};
const _0x5001ac = {
  w: 14,
  h: 10,
  elem: _0x4039aa
};
const _0xcb465d = {
  weight: 4,
  mul: 1.05
};
const _0x29585f = {
  w: 18
};
const _0x2eef6e = {
  def: 0.22,
  weight: 4
};
const _0x1cf6c3 = {
  vis: "fire",
  st: "burn"
};
const _0x5451eb = {
  elem: _0x1cf6c3
};
const _0x1bcee4 = {
  vis: "fire",
  st: "burn"
};
const _0x3a3d98 = {
  elem: _0x1bcee4
};
const _0x204a19 = {
  def: 0.24,
  weight: 3
};
const _0x2a9901 = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x23ea76 = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x361238 = {
  weight: 4
};
const _0x1cab5b = {
  vis: "poison",
  st: "poison"
};
const _0x3b7506 = {
  elem: _0x1cab5b
};
const _0x50978d = {
  w: 14,
  h: 10
};
const _0x1858c6 = {
  weight: 4
};
const _0x4574ec = {
  vis: "poison",
  st: "poison"
};
const _0x23c50c = {
  elem: _0x4574ec
};
const _0x2e2064 = {
  w: 18
};
const _0x155989 = {
  w: 18,
  h: 14,
  mul: 1.1
};
const _0x5375c5 = {
  def: 0.2,
  weight: 4
};
const _0x61aa1f = {
  vis: "poison",
  st: "slow"
};
const _0x52dfa6 = {
  elem: _0x61aa1f
};
const _0x50c8d1 = {
  vis: "poison",
  st: "poison"
};
const _0x125182 = {
  elem: _0x50c8d1
};
const _0x2c31c4 = {
  w: 18
};
const _0x20f4c2 = {
  w: 20
};
const _0x41ca92 = {
  weight: 4
};
const _0x4af633 = {
  weight: 4,
  mul: 1.05
};
const _0x536954 = {
  vis: "poison",
  st: "poison"
};
const _0x7e21f0 = {
  elem: _0x536954
};
const _0x19af9b = {
  def: 0.24,
  weight: 3
};
const _0x54ed61 = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x503b83 = {
  vis: "poison",
  st: "poison"
};
const _0x2a0e07 = {
  elem: _0x503b83
};
const _0x5a8c70 = {
  weight: 4
};
const _0x42c80f = {
  vis: "fire",
  st: "burn"
};
const _0xcd9631 = {
  elem: _0x42c80f
};
const _0x328c90 = {
  w: 18,
  h: 14,
  def: 0.18
};
const _0x2b0a20 = {
  weight: 4
};
const _0x1ea748 = {
  vis: "ice",
  st: "chill"
};
const _0x253689 = {
  w: 20,
  elem: _0x1ea748
};
const _0x597d42 = {
  w: 12,
  h: 12
};
const _0x52bee0 = {
  vis: "star"
};
const _0x38d116 = {
  elem: _0x52bee0
};
const _0x4c8001 = {
  vis: "void"
};
const _0x151f4d = {
  elem: _0x4c8001
};
const _0x437848 = {
  w: 20,
  h: 16
};
const _0x1bebd2 = {
  def: 0.2
};
const _0x679f9f = {
  weight: 4
};
const _0x3da85d = {
  vis: "void"
};
const _0x5ac46e = {
  w: 18,
  h: 14,
  mul: 1.2,
  elem: _0x3da85d
};
const _0x103907 = {
  vis: "void"
};
const _0xe2e5e6 = {
  elem: _0x103907
};
const _0x3dfcef = {
  w: 18,
  mul: 1.1
};
const _0x3e6f4d = {
  def: 0.24,
  weight: 3
};
const _0x3db032 = {
  vis: "poison",
  st: "poison"
};
const _0xe45fce = {
  elem: _0x3db032
};
const _0x570f2f = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x1fd081 = {
  def: 0.2,
  weight: 4
};
const _0x3cf84a = {
  w: 18
};
const _0x1e66d8 = {
  w: 20,
  mul: 1.1
};
const _0x2c774b = {
  def: 0.24,
  weight: 4
};
const _0x46598e = {
  vis: "void"
};
const _0x444f8a = {
  w: 12,
  h: 12,
  elem: _0x46598e
};
const _0x2549af = {
  weight: 4
};
const _0x44fb62 = {
  vis: "fire",
  st: "burn"
};
const _0x553a34 = {
  elem: _0x44fb62
};
const _0x26f2d1 = {
  w: 20
};
const _0x13892c = {
  weight: 4
};
const _0x1205b9 = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x2526a2 = {
  def: 0.26,
  weight: 3
};
const _0x4db344 = {
  weight: 4
};
const _0x48aadb = {
  w: 20,
  h: 16,
  mul: 1.2
};
const _0x553506 = {
  weight: 4,
  mul: 1.25
};
const _0x4e32da = {
  vis: "void"
};
const _0x2851c5 = {
  mul: 1.25,
  elem: _0x4e32da
};
const _0x6c0aa = {
  def: 0.24,
  mul: 1.2
};
const _0x26cbdd = {
  w: 14,
  h: 10,
  mul: 1.3
};
const _0x37fe5b = {
  weight: 4,
  mul: 1.25
};
const _0x4d2ff5 = {
  vis: "ice",
  st: "chill"
};
const _0x2bba83 = {
  mul: 1.25,
  elem: _0x4d2ff5
};
const _0x2b120d = {
  vis: "void"
};
const _0x442ef4 = {
  mul: 1.25,
  elem: _0x2b120d
};
const _0x28e48e = {
  w: 20,
  mul: 1.3
};
const _0x2e0296 = {
  weight: 4,
  mul: 1.25
};
const _0x12d133 = {
  mul: 1.3
};
const _0x1d6ceb = {
  w: 18,
  def: 0.12,
  mul: 1.25
};
const _0x982d88 = {
  def: 0.24,
  weight: 4,
  mul: 1.2
};
const _0xd78383 = {
  w: 18,
  h: 14,
  mul: 1.3
};
const _0x232639 = {
  vis: "poison",
  st: "poison"
};
const _0x2f3a10 = {
  mul: 1.25,
  elem: _0x232639
};
const _0x2d25e9 = {
  mul: 1.25
};
const _0x35f9f8 = {
  w: 20,
  h: 16,
  mul: 1.3
};
const _0x5039b5 = {
  w: 12,
  h: 12,
  mul: 1.3
};
const _0x41b51e = {
  def: 0.26,
  weight: 4,
  mul: 1.2
};
const _0x2ab260 = {
  w: 18,
  h: 14,
  mul: 1.3
};
const _0x107786 = {
  def: 0.28,
  weight: 3,
  mul: 1.2
};
const _0x4949da = {
  weight: 4,
  mul: 1.25
};
const _0x2c6d5f = {
  w: 20,
  h: 16,
  mul: 1.3
};
const _0x101d2c = {
  cd: 0.75,
  windup: 0.9,
  minWindup: 18,
  speed: 1.15
};
const _0x32f97c = {
  weight: 4
};
const _0x318556 = {
  def: 0.1
};
const _0xb22bed = {
  w: 14,
  h: 10
};
const _0x421ccc = {
  weight: 4
};
const _0x249fc1 = {
  affixes: ["split"]
};
const _0xb82f5e = {
  affixes: ["shield"]
};
const _0xcce957 = {
  vis: "void"
};
const _0x63e829 = {
  elem: _0xcce957
};
const _0x53c2c6 = {
  weight: 4
};
const _0x4fd8e4 = {
  w: 18
};
const _0x5175a2 = {
  weight: 4
};
const _0x3bc6e8 = {
  w: 20
};
const _0x3ec2fb = {
  weight: 4,
  def: 0.18,
  affixes: ["reflect"]
};
const _0xf9f1e2 = {
  w: 12,
  h: 12
};
const _0x1a0773 = {
  weight: 3,
  def: 0.22,
  affixes: ["revive"]
};
const _0x60dd52 = {
  w: 18
};
const _0x11f27d = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x6910bd = {
  weight: 4
};
const _0x40e24c = {
  def: 0.1
};
const _0x56036b = {
  vis: "ice",
  st: "chill"
};
const _0x530bec = {
  elem: _0x56036b
};
const _0x10ba56 = {
  def: 0.2
};
const _0x4dd12a = {
  weight: 4
};
const _0x1ae76b = {
  w: 18
};
const _0x143f16 = {
  affixes: ["haste"]
};
const _0x1f892c = {
  weight: 4
};
const _0x25deab = {
  w: 20
};
const _0x244f86 = {
  affixes: ["shield"]
};
const _0x1d9494 = {
  weight: 3,
  def: 0.22,
  affixes: ["revive"]
};
const _0x42a542 = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x6d48e5 = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x4e7a3b = {
  weight: 4
};
const _0xc6a59d = {
  weight: 4
};
const _0x41e047 = {
  w: 18
};
const _0x3e8cb7 = {
  w: 14,
  h: 10
};
const _0x2da0cd = {
  weight: 4
};
const _0x50959a = {
  w: 20
};
const _0x181a75 = {
  def: 0.15
};
const _0xe2f1e7 = {
  affixes: ["curseBomb"]
};
const _0x2c697c = {
  weight: 4
};
const _0x5919a5 = {
  vis: "thunder",
  st: "shock"
};
const _0x388c72 = {
  elem: _0x5919a5
};
const _0x5ea08a = {
  weight: 3,
  def: 0.22,
  affixes: ["reflect"]
};
const _0x4167b0 = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x1474a4 = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x1999c8 = {
  weight: 4
};
const _0x40f8c4 = {
  weight: 4,
  affixes: ["reflect"]
};
const _0x515931 = {
  w: 20
};
const _0x48207d = {
  w: 12,
  h: 12
};
const _0xfbb727 = {
  weight: 4
};
const _0x4b152d = {
  w: 18
};
const _0x3255ea = {
  w: 14,
  h: 10
};
const _0x53050b = {
  affixes: ["split"]
};
const _0xf24b25 = {
  weight: 4,
  affixes: ["revive"]
};
const _0x3afc6d = {
  vis: "thunder",
  st: "shock"
};
const _0x57ac4a = {
  elem: _0x3afc6d
};
const _0x12fdf4 = {
  w: 20,
  h: 16
};
const _0x2b9031 = {
  weight: 3,
  affixes: ["haste"]
};
const _0x54071c = {
  affixes: ["shield"]
};
const _0x217ed6 = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x30c137 = {
  weight: 4
};
const _0x4410fc = {
  vis: "fire",
  st: "burn"
};
const _0x2ac7b1 = {
  elem: _0x4410fc
};
const _0xa4b1ca = {
  w: 18,
  affixes: ["split"]
};
const _0x3899b7 = {
  w: 14,
  h: 10
};
const _0x3ff4e8 = {
  weight: 4
};
const _0x275f76 = {
  w: 18,
  h: 14,
  mul: 1.1
};
const _0x291d84 = {
  affixes: ["reflect"]
};
const _0x5aeaf6 = {
  weight: 4
};
const _0x3e7d0a = {
  vis: "poison",
  st: "slow"
};
const _0x2e8303 = {
  elem: _0x3e7d0a
};
const _0x33d2f2 = {
  w: 20,
  h: 16
};
const _0x1c6bb8 = {
  vis: "thunder",
  st: "shock"
};
const _0x100038 = {
  elem: _0x1c6bb8
};
const _0x473577 = {
  def: 0.2,
  affixes: ["shield"]
};
const _0x3a15c3 = {
  weight: 3,
  def: 0.22,
  affixes: ["revive", "shield"]
};
const _0x5681c7 = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0xa24adc = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x5a1768 = {
  weight: 4
};
const _0x257fff = {
  affixes: ["split"]
};
const _0xb9de25 = {
  w: 14,
  h: 10
};
const _0x23077b = {
  weight: 4
};
const _0x59d7cf = {
  w: 18
};
const _0xbc58a9 = {
  w: 20,
  h: 16,
  affixes: ["haste"]
};
const _0x41bcdc = {
  weight: 4
};
const _0x57012d = {
  w: 12,
  h: 12
};
const _0x415a19 = {
  affixes: ["shield"]
};
const _0x470b72 = {
  def: 0.2,
  weight: 4
};
const _0x4a7d4e = {
  w: 18
};
const _0x215793 = {
  affixes: ["curseBomb"]
};
const _0x3c5c3b = {
  w: 20
};
const _0x3c6a9f = {
  weight: 3,
  def: 0.22,
  affixes: ["revive"]
};
const _0x413b3b = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x5adf6e = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x31b362 = {
  affixes: ["split"]
};
const _0x10ba9a = {
  weight: 4,
  def: 0.22,
  affixes: ["reflect"]
};
const _0x3be750 = {
  w: 14,
  h: 10
};
const _0x49c91e = {
  weight: 4,
  affixes: ["revive"]
};
const _0x4286d2 = {
  affixes: ["haste"]
};
const _0x3a4b5e = {
  w: 20,
  affixes: ["shield"]
};
const _0x3796d9 = {
  w: 18
};
const _0x3fcdd9 = {
  weight: 4,
  affixes: ["reflect"]
};
const _0x22a90b = {
  affixes: ["curseBomb"]
};
const _0x54cdec = {
  weight: 4,
  affixes: ["shield"]
};
const _0x3089e4 = {
  vis: "thunder",
  st: "shock"
};
const _0x56037a = {
  elem: _0x3089e4,
  affixes: ["split"]
};
const _0x57b107 = {
  weight: 3,
  def: 0.24,
  affixes: ["revive", "reflect"]
};
const _0x191ea6 = {
  w: 20,
  h: 16,
  mul: 1.15,
  affixes: ["haste"]
};
const _0x325e71 = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x4feb00 = {
  cd: 0.65,
  windup: 0.85,
  minWindup: 16,
  speed: 1.25
};
const _0x5e2894 = {
  weight: 4
};
const _0x130084 = {
  affixes: ["absorb"]
};
const _0x2dcc4e = {
  w: 14,
  h: 10
};
const _0x5a6288 = {
  w: 18,
  affixes: ["trail"]
};
const _0x6b25ed = {
  w: 20
};
const _0x102666 = {
  affixes: ["shield"]
};
const _0x35dc55 = {
  weight: 4,
  w: 20,
  h: 16
};
const _0x4fe06e = {
  w: 18,
  affixes: ["twin"]
};
const _0x3e7b46 = {
  weight: 4
};
const _0x3417a8 = {
  w: 14,
  h: 10
};
const _0x48a177 = {
  def: 0.1
};
const _0x3da47c = {
  weight: 4,
  affixes: ["taunt"]
};
const _0x391c43 = {
  vis: "void"
};
const _0x537576 = {
  elem: _0x391c43
};
const _0x3e47f1 = {
  affixes: ["revive"]
};
const _0x363af3 = {
  weight: 3,
  def: 0.22,
  affixes: ["absorb", "shield"]
};
const _0x1fae03 = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x5e7de2 = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x2487ed = {
  weight: 4
};
const _0xef901e = {
  w: 14,
  h: 12
};
const _0x58d77c = {
  affixes: ["twin"]
};
const _0xbc067e = {
  weight: 4
};
const _0x474f43 = {
  affixes: ["shield"]
};
const _0x5e1cd1 = {
  weight: 4
};
const _0x58bb4a = {
  affixes: ["taunt"]
};
const _0x38127b = {
  weight: 4,
  affixes: ["trail"]
};
const _0x533fa1 = {
  w: 20
};
const _0x4295e1 = {
  def: 0.12
};
const _0x4d0bab = {
  weight: 4,
  def: 0.18
};
const _0x5a8780 = {
  vis: "ice",
  st: "chill"
};
const _0x432ead = {
  elem: _0x5a8780
};
const _0x297259 = {
  weight: 3,
  def: 0.22,
  affixes: ["revive", "twin"]
};
const _0x1950be = {
  w: 20,
  h: 16,
  mul: 1.15,
  affixes: ["haste"]
};
const _0x3bc260 = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x2e1c1e = {
  w: 14,
  h: 10
};
const _0x2c068f = {
  def: 0.1,
  affixes: ["reflect"]
};
const _0x252cd6 = {
  def: 0.12
};
const _0x2b681a = {
  w: 18
};
const _0x2889d8 = {
  affixes: ["absorb"]
};
const _0x31082d = {
  weight: 4,
  affixes: ["twin"]
};
const _0x434e8d = {
  vis: "ice",
  st: "chill"
};
const _0x152e7e = {
  elem: _0x434e8d
};
const _0x53c661 = {
  weight: 4,
  affixes: ["taunt"]
};
const _0x5c767c = {
  w: 14,
  h: 10
};
const _0x43ae77 = {
  affixes: ["split"]
};
const _0x56f269 = {
  weight: 4
};
const _0x43dd58 = {
  w: 12,
  h: 12,
  affixes: ["reflect"]
};
const _0x508b9d = {
  def: 0.1
};
const _0x521f8a = {
  weight: 3,
  def: 0.22,
  affixes: ["reflect", "trail"]
};
const _0x1b46f5 = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x302aa1 = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x283d5a = {
  weight: 4,
  affixes: ["haste"]
};
const _0x3f8df8 = {
  affixes: ["shield"]
};
const _0x1be1ff = {
  def: 0.1
};
const _0x39f87d = {
  w: 18,
  h: 14
};
const _0x1a059a = {
  affixes: ["split"]
};
const _0x1d6d37 = {
  weight: 4,
  def: 0.2
};
const _0x20e08a = {
  w: 14,
  h: 10
};
const _0x330378 = {
  affixes: ["taunt"]
};
const _0x12d5b2 = {
  weight: 4,
  affixes: ["trail"]
};
const _0x31f170 = {
  def: 0.14
};
const _0x422f7e = {
  weight: 4
};
const _0x24b20e = {
  vis: "fire",
  st: "burn"
};
const _0x4f6ff4 = {
  elem: _0x24b20e
};
const _0xdb88da = {
  w: 20,
  affixes: ["absorb"]
};
const _0x4dacab = {
  weight: 3,
  def: 0.24,
  affixes: ["twin", "shield"]
};
const _0x4de866 = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x15c31c = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x3f76b9 = {
  weight: 4
};
const _0x5e65b5 = {
  def: 0.1
};
const _0x4f0525 = {
  vis: "ice",
  st: "chill"
};
const _0x4d0ee0 = {
  elem: _0x4f0525
};
const _0x2f44d5 = {
  w: 18,
  affixes: ["trail"]
};
const _0x2ed339 = {
  affixes: ["absorb"]
};
const _0x1a1244 = {
  weight: 4,
  def: 0.2
};
const _0x19d667 = {
  w: 12,
  h: 12
};
const _0x15afcc = {
  w: 20,
  affixes: ["haste"]
};
const _0x3790ac = {
  affixes: ["split"]
};
const _0x11e013 = {
  weight: 4
};
const _0x4151ae = {
  w: 14,
  h: 10
};
const _0x349322 = {
  w: 18,
  affixes: ["twin"]
};
const _0x17e396 = {
  weight: 4,
  affixes: ["taunt"]
};
const _0x57502d = {
  vis: "void"
};
const _0x5a0151 = {
  elem: _0x57502d
};
const _0x258273 = {
  weight: 3,
  def: 0.24,
  affixes: ["revive", "absorb"]
};
const _0x5a6898 = {
  w: 20,
  h: 16,
  mul: 1.15
};
const _0x1a49c0 = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x25022e = {
  weight: 4,
  affixes: ["trail"]
};
const _0xb31c3a = {
  w: 14,
  h: 12
};
const _0x3d8cd5 = {
  affixes: ["reflect"]
};
const _0x5471f4 = {
  weight: 4,
  affixes: ["twin"]
};
const _0x5a53ce = {
  w: 20
};
const _0x5a05cd = {
  def: 0.12
};
const _0x1a50b6 = {
  def: 0.1,
  affixes: ["trail"]
};
const _0x190239 = {
  w: 18
};
const _0xc69731 = {
  affixes: ["absorb"]
};
const _0x28562a = {
  weight: 4
};
const _0x369dfc = {
  w: 18
};
const _0x1f3f72 = {
  affixes: ["shield", "taunt"]
};
const _0x68150c = {
  w: 14,
  h: 12
};
const _0x3f767e = {
  def: 0.1,
  affixes: ["twin"]
};
const _0x565b36 = {
  weight: 3,
  def: 0.24,
  affixes: ["taunt", "revive"]
};
const _0x24cac8 = {
  w: 20,
  h: 16,
  mul: 1.15,
  affixes: ["trail"]
};
const _0x2397fb = {
  w: 18,
  h: 14,
  mul: 1.2
};
const _0x5e52c2 = {
  weight: 4,
  affixes: ["absorb"]
};
const _0x4bba74 = {
  affixes: ["split"]
};
const _0x31834a = {
  w: 14,
  h: 12
};
const _0x3bbf3c = {
  weight: 4,
  affixes: ["twin"]
};
const _0x1053ee = {
  affixes: ["haste"]
};
const _0x2de6d3 = {
  weight: 4,
  affixes: ["reflect"]
};
const _0x56b0ff = {
  w: 12,
  h: 12
};
const _0x328e70 = {
  def: 0.12,
  affixes: ["taunt"]
};
const _0x27483d = {
  weight: 4,
  def: 0.22,
  affixes: ["shield"]
};
const _0x23597b = {
  w: 20,
  affixes: ["curseBomb"]
};
const _0x506fb4 = {
  weight: 4,
  affixes: ["trail"]
};
const _0x325729 = {
  w: 18,
  affixes: ["twin"]
};
const _0x29bebe = {
  vis: "ice",
  st: "chill"
};
const _0x367a94 = {
  elem: _0x29bebe
};
const _0x18c92a = {
  weight: 3,
  def: 0.24,
  affixes: ["absorb", "twin"]
};
const _0x56c6d5 = {
  w: 20,
  h: 16,
  mul: 1.15,
  affixes: ["taunt", "haste"]
};
const _0x145f3e = {
  w: 18,
  h: 14,
  mul: 1.2,
  affixes: ["trail"]
};
const _0x3979dd = {
  hp: 1.5,
  atk: 1.5,
  cd: 0.8,
  speed: 1.12
};
const enemy_skeleton = {
  id: "skeleton",
  name: "해골 병사",
  chapter: 1,
  ai: "melee",
  hp: 70,
  atk: 7,
  speed: 0.75,
  w: 12,
  h: 22,
  range: 26,
  windup: 32,
  cd: 60,
  kbRes: 0,
  gold: 4,
  col: "#e8e0c8",
  eliteSkill: "shockwave",
  weight: 4
};
const _0xd0a00a = {
  spr: "arrow",
  spd: 3.4,
  life: 120,
  w: 10,
  h: 4,
  col: "#d8d0b0"
};
const enemy_bone_archer = {
  id: "bone_archer",
  name: "해골 궁수",
  chapter: 1,
  ai: "archer",
  hp: 50,
  atk: 6,
  speed: 0.6,
  w: 12,
  h: 22,
  range: 170,
  windup: 40,
  cd: 100,
  kbRes: 0,
  gold: 5,
  col: "#d8d0b0",
  eliteSkill: "volley",
  weight: 3,
  proj: _0xd0a00a
};
const enemy_wraith = {
  id: "wraith",
  name: "방황하는 망령",
  chapter: 1,
  ai: "flyer",
  hp: 55,
  atk: 7,
  speed: 0.9,
  w: 14,
  h: 16,
  range: 90,
  windup: 34,
  cd: 90,
  flying: !0,
  kbRes: 0.2,
  gold: 5,
  col: "#80e0ff",
  eliteSkill: "blink",
  weight: 3
};
const enemy_bone_shield = {
  id: "bone_shield",
  name: "뼈 방패병",
  chapter: 1,
  ai: "shield",
  hp: 110,
  atk: 9,
  speed: 0.55,
  w: 14,
  h: 22,
  def: 0.1,
  range: 28,
  windup: 34,
  cd: 70,
  kbRes: 0.5,
  gold: 7,
  col: "#c8c0a0",
  eliteSkill: "enrage",
  weight: 2
};
const enemy_slime = {
  id: "slime",
  name: "부패 슬라임",
  chapter: 2,
  ai: "jumper",
  hp: 90,
  atk: 12,
  speed: 1.4,
  w: 16,
  h: 12,
  range: 110,
  windup: 26,
  cd: 70,
  kbRes: 0.1,
  gold: 6,
  col: "#8bdc3a",
  eliteSkill: "summon",
  weight: 4
};
const enemy_venom_bug = {
  id: "venom_bug",
  name: "독충",
  chapter: 2,
  ai: "charger",
  hp: 80,
  atk: 13,
  speed: 0.7,
  w: 18,
  h: 10,
  range: 140,
  windup: 34,
  cd: 80,
  kbRes: 0.2,
  gold: 6,
  col: "#a0c040",
  eliteSkill: "enrage",
  weight: 3
};
const _0x50e0f8 = {
  spr: "spore",
  spd: 2.6,
  vy: -3.2,
  grav: 0.1,
  life: 140,
  w: 8,
  h: 8,
  col: "#c0f060",
  st: "poison"
};
const enemy_spore_cap = {
  id: "spore_cap",
  name: "포자 버섯",
  chapter: 2,
  ai: "turret",
  hp: 85,
  atk: 11,
  speed: 0,
  w: 16,
  h: 18
};
(enemy_spore_cap.range = 200, enemy_spore_cap.windup = 40, enemy_spore_cap.cd = 110, enemy_spore_cap.kbRes = 1, enemy_spore_cap.gold = 6, enemy_spore_cap.col = "#c060a0", enemy_spore_cap.eliteSkill = "volley", enemy_spore_cap.weight = 3, enemy_spore_cap.proj = _0x50e0f8);
const enemy_moth = {
  id: "moth",
  name: "독가루 나방",
  chapter: 2,
  ai: "bomber",
  hp: 60,
  atk: 10,
  speed: 1,
  w: 16,
  h: 12,
  range: 30,
  windup: 30,
  cd: 90,
  flying: !0,
  kbRes: 0.2,
  gold: 6,
  col: "#e0c060",
  eliteSkill: "nova",
  weight: 2
};
const _0x4257e4 = {
  spr: "fireball",
  spd: 3,
  life: 120,
  w: 10,
  h: 10,
  col: "#ff7a2a",
  st: "burn"
};
const enemy_fire_sprite = {
  id: "fire_sprite",
  name: "불꽃 정령",
  chapter: 3,
  ai: "caster",
  hp: 90,
  atk: 14,
  speed: 0.9,
  w: 14,
  h: 14,
  range: 160,
  windup: 36,
  cd: 100,
  flying: !0,
  kbRes: 0.2,
  gold: 8,
  col: "#ff8a3a",
  eliteSkill: "volley",
  weight: 3,
  proj: _0x4257e4
};
const enemy_magma_golem = {
  id: "magma_golem",
  name: "용암 골렘",
  chapter: 3,
  ai: "golem",
  hp: 260,
  atk: 20,
  speed: 0.45,
  w: 24,
  h: 28,
  def: 0.15,
  range: 40,
  windup: 46,
  cd: 90,
  kbRes: 0.85,
  gold: 14,
  col: "#ff5a1a",
  eliteSkill: "shockwave",
  weight: 2
};
const enemy_forge_hound = {
  id: "forge_hound",
  name: "용광로 사냥개",
  chapter: 3,
  ai: "charger",
  hp: 120,
  atk: 16,
  speed: 1,
  w: 20,
  h: 12,
  range: 150,
  windup: 30,
  cd: 70,
  kbRes: 0.2,
  gold: 9,
  col: "#ff9a4a",
  eliteSkill: "enrage",
  weight: 3
};
const enemy_smith_skel = {
  id: "smith_skel",
  name: "대장장이 해골",
  chapter: 3,
  ai: "melee",
  hp: 140,
  atk: 17,
  speed: 0.7,
  w: 14,
  h: 22,
  range: 30,
  windup: 32,
  cd: 64,
  kbRes: 0.3,
  gold: 9,
  col: "#d0a080",
  eliteSkill: "shockwave",
  weight: 3
};
const enemy_royal_guard = {
  id: "royal_guard",
  name: "왕실 근위 기사",
  chapter: 4,
  ai: "shield",
  hp: 240,
  atk: 20,
  speed: 0.6,
  w: 16,
  h: 24,
  def: 0.2,
  range: 32,
  windup: 30,
  cd: 60,
  kbRes: 0.6,
  gold: 12,
  col: "#a0a0c0",
  eliteSkill: "enrage",
  weight: 3
};
const enemy_shade = {
  id: "shade",
  name: "그림자",
  chapter: 4,
  ai: "teleporter",
  hp: 150,
  atk: 18,
  speed: 1,
  w: 12,
  h: 22,
  range: 28,
  windup: 26,
  cd: 80,
  kbRes: 0.1,
  gold: 11,
  col: "#9a6bff",
  eliteSkill: "blink",
  weight: 3
};
const _0x4d6bd2 = {
  spr: "orb",
  spd: 2.6,
  life: 160,
  w: 10,
  h: 10,
  col: "#a080ff",
  home: 0.04
};
const enemy_shadow_mage = {
  id: "shadow_mage",
  name: "그림자 마도사",
  chapter: 4,
  ai: "caster",
  hp: 140,
  atk: 17,
  speed: 0.6,
  w: 12,
  h: 22,
  range: 170,
  windup: 40,
  cd: 110,
  kbRes: 0.1,
  gold: 12,
  col: "#7a4aff",
  eliteSkill: "summon",
  weight: 2,
  proj: _0x4d6bd2
};
const enemy_royal_lancer = {
  id: "royal_lancer",
  name: "왕실 창병",
  chapter: 4,
  ai: "lancer",
  hp: 180,
  atk: 21,
  speed: 0.75,
  w: 14,
  h: 24,
  def: 0.1,
  range: 70,
  windup: 32,
  cd: 70,
  kbRes: 0.4,
  gold: 12,
  col: "#c0a060",
  eliteSkill: "shockwave",
  weight: 3
};
const enemy_drowned = {
  id: "drowned",
  name: "익사한 선원",
  chapter: 5,
  ai: "melee",
  hp: 95,
  atk: 12,
  speed: 0.8,
  w: 12,
  h: 22,
  range: 28,
  windup: 28,
  cd: 60,
  kbRes: 0,
  gold: 6,
  col: "#70b0a0",
  eliteSkill: "shockwave",
  weight: 4
};
const _0x260661 = {
  spr: "spear",
  spd: 4,
  life: 110,
  w: 18,
  h: 4,
  col: "#c0d0d8"
};
const enemy_harpooner = {
  id: "harpooner",
  name: "작살잡이",
  chapter: 5,
  ai: "archer",
  hp: 70,
  atk: 11,
  speed: 0.6,
  w: 12,
  h: 22,
  range: 180,
  windup: 38,
  cd: 100,
  kbRes: 0,
  gold: 6,
  col: "#c0d0d8",
  eliteSkill: "volley",
  weight: 3,
  proj: _0x260661
};
const enemy_gull = {
  id: "gull",
  name: "망령 갈매기",
  chapter: 5,
  ai: "flyer",
  hp: 60,
  atk: 10,
  speed: 1.1,
  w: 14,
  h: 12,
  range: 100,
  windup: 30,
  cd: 80,
  flying: !0,
  kbRes: 0.2,
  gold: 6,
  col: "#d0e0f0",
  eliteSkill: "blink",
  weight: 3
};
const enemy_crab = {
  id: "crab",
  name: "갑각 게 병사",
  chapter: 5,
  ai: "shield",
  hp: 130,
  atk: 13,
  speed: 0.6,
  w: 18,
  h: 14,
  def: 0.15,
  range: 30,
  windup: 32,
  cd: 70,
  kbRes: 0.5,
  gold: 8,
  col: "#e06040",
  eliteSkill: "enrage",
  weight: 2
};
const _0x2b57ba = {
  spr: "shard",
  spd: 3.4,
  life: 120,
  w: 10,
  h: 6,
  col: "#a8e4ff",
  st: "chill"
};
const enemy_tome = {
  id: "tome",
  name: "떠도는 마도서",
  chapter: 6,
  ai: "caster",
  hp: 95,
  atk: 14,
  speed: 0.9,
  w: 14,
  h: 12,
  range: 170,
  windup: 34,
  cd: 100,
  flying: !0,
  kbRes: 0.2,
  gold: 9,
  col: "#a8e4ff",
  eliteSkill: "volley",
  weight: 3,
  proj: _0x2b57ba
};
const _0x10a43f = {
  vis: "ice",
  st: "chill"
};
const enemy_frost_librarian = {
  id: "frost_librarian",
  name: "서리 사서",
  chapter: 6,
  ai: "golem",
  hp: 210,
  atk: 18,
  speed: 0.5,
  w: 16,
  h: 24,
  def: 0.1,
  range: 42,
  windup: 42,
  cd: 90,
  kbRes: 0.7,
  gold: 12,
  col: "#a8e4ff",
  eliteSkill: "shockwave",
  weight: 2,
  elem: _0x10a43f
};
const enemy_mimic = {
  id: "mimic",
  name: "서가 미믹",
  chapter: 6,
  ai: "charger",
  hp: 140,
  atk: 16,
  speed: 0.6,
  w: 20,
  h: 18,
  range: 150,
  windup: 30,
  cd: 70,
  kbRes: 0.4,
  gold: 11,
  col: "#8a5a3a",
  eliteSkill: "enrage",
  weight: 3
};
const enemy_ink_shade = {
  id: "ink_shade",
  name: "잉크 그림자",
  chapter: 6,
  ai: "teleporter",
  hp: 130,
  atk: 16,
  speed: 0.9,
  w: 12,
  h: 22,
  range: 28,
  windup: 26,
  cd: 80,
  kbRes: 0.1,
  gold: 10,
  col: "#3a4a8a",
  eliteSkill: "blink",
  weight: 3
};
const _0x752266 = {
  spr: "orb",
  spd: 2.8,
  life: 160,
  w: 10,
  h: 10,
  col: "#ff80d0",
  home: 0.04
};
const enemy_void_eye = {
  id: "void_eye",
  name: "망각의 눈",
  chapter: 7,
  ai: "caster",
  hp: 120,
  atk: 17,
  speed: 0.8,
  w: 14,
  h: 14,
  range: 180,
  windup: 34,
  cd: 95,
  flying: !0,
  kbRes: 0.2,
  gold: 13,
  col: "#ff80d0",
  eliteSkill: "volley",
  weight: 3,
  proj: _0x752266
};
const enemy_void_knight = {
  id: "void_knight",
  name: "공허 기사",
  chapter: 7,
  ai: "shield",
  hp: 230,
  atk: 20,
  speed: 0.65,
  w: 16,
  h: 24,
  def: 0.2,
  range: 32,
  windup: 28,
  cd: 60,
  kbRes: 0.6,
  gold: 14,
  col: "#9a6bff",
  eliteSkill: "enrage",
  weight: 3
};
const _0x3aeb41 = {
  vis: "void"
};
const enemy_devourer = {
  id: "devourer",
  name: "기억 포식자",
  chapter: 7,
  ai: "jumper",
  hp: 170,
  atk: 20,
  speed: 1.5,
  w: 18,
  h: 14,
  range: 120,
  windup: 24,
  cd: 65,
  kbRes: 0.2,
  gold: 13,
  col: "#c050c0",
  eliteSkill: "summon",
  weight: 3,
  elem: _0x3aeb41
};
const _0x3c3965 = {
  vis: "void"
};
const enemy_lost_soul = {
  id: "lost_soul",
  name: "잊힌 혼",
  chapter: 7,
  ai: "bomber",
  hp: 90,
  atk: 16,
  speed: 1.1,
  w: 14,
  h: 14,
  range: 30,
  windup: 28,
  cd: 85,
  flying: !0,
  kbRes: 0.2,
  gold: 12,
  col: "#e0c0ff",
  eliteSkill: "nova",
  weight: 2,
  elem: _0x3c3965
};
const enemy_dummy = {
  id: "dummy",
  name: "훈련용 허수아비",
  chapter: 0,
  ai: "dummy",
  hp: 999999,
  atk: 0,
  speed: 0,
  w: 14,
  h: 24,
  range: 0,
  windup: 0,
  cd: 0,
  kbRes: 1,
  gold: 0,
  col: "#c0a060",
  eliteSkill: "enrage",
  weight: 0
};
const _0x1f3c5f = {
  hp: 3.2,
  atk: 1.4,
  size: 1.3
};
const or = [["ink_sailor", "먹물 선원", 71, "melee", "#3a4a7a", _0x2bb1c8], ["blot_crab", "얼룩 게", 71, "jumper", "#2a3050", _0x158dbc], ["ink_gull", "잉크 갈매기", 71, "flyer", "#d0d8f0"], ["quill_gunner", "깃펜 사수", 71, "archer", "#6080c0", {
  "proj": i.bolt("#80a0ff")
}], ["type_miner", "활자 광부", 72, "melee", "#8a8070", _0x59b849], ["lead_golem", "납 활자 골렘", 72, "golem", "#7a7a8a"], ["press_spider", "인쇄 거미", 72, "jumper", "#4a4a5a", _0x248db6], ["type_spark", "불똥 위습", 72, "caster", "#ffb060", {
  "proj": i.fire("#ffb060")
}], ["smudge_wolf", "번진 늑대", 73, "charger", "#3a3a5a", _0x1ce0d0], ["ink_treant", "먹나무", 73, "golem", "#2a3a3a", _0xe35b5f], ["blot_moth", "얼룩 나방", 73, "bomber", "#4a4a7a", _0x1180a8], ["smudge_hunter", "번짐 사냥꾼", 73, "archer", "#5a6a80", {
  "weight": 4,
  "proj": i.arrow("#a0b0e0")
}], ["binder_knight", "제본 기사", 74, "shield", "#7a5a3a", _0x51baae], ["needle_lancer", "바늘 창병", 74, "lancer", "#c0c0d0"], ["glue_blob", "아교 덩어리", 74, "jumper", "#d0c080", _0x159865], ["page_bat", "종이 박쥐", 74, "flyer", "#e8e0d0", _0x2f25bd], ["lamp_keeper", "등잔지기", 75, "gcaster", "#ffb040", {
  "proj": i.fire("#ffc060")
}], ["ember_page", "타는 낱장", 75, "flyer", "#ff8040", _0x3e7825], ["wax_scribe", "밀랍 서기", 75, "teleporter", "#e0c8a0", _0x5ea625], ["oil_golem", "기름 골렘", 75, "golem", "#3a2a1a", _0x8fce60], ["letter_knight", "글자 기사", 76, "shield", "#1a1a2a", _0x4e0566], ["ink_phantom", "먹 그림자", 76, "teleporter", "#2a2a4a", _0x4bf8a7], ["inkwell_eye", "잉크병의 눈", 76, "caster", "#4060c0", {
  "proj": i.orb("#6080ff", 0.04)
}], ["pen_raptor", "펜촉 랩터", 76, "charger", "#c0a060", _0x17e30d], ["glass_pilgrim", "유리 순례자", 81, "melee", "#d0c8b0", _0x126a26], ["glass_scorpion", "유리 전갈", 81, "charger", "#a0e0e0", _0x3853b6], ["mirage_wisp", "신기루", 81, "caster", "#ffe0a0", {
  "proj": i.star("#fff0c0")
}], ["dune_archer", "모래 궁수", 81, "archer", "#c0a070", {
  "proj": i.arrow("#e0d0a0")
}], ["salt_dancer", "소금 무희", 82, "teleporter", "#f0f0f8", _0xf1c119], ["mirror_fish", "거울 물고기", 82, "flyer", "#c0e0ff"], ["brine_jelly", "소금물 해파리", 82, "bomber", "#a0d0ff", _0x42fb8e], ["salt_golem", "소금 골렘", 82, "golem", "#e0e0e8"], ["prism_post", "프리즘 탑", 83, "turret", "#ffa0e0", {
  "proj": i.star("#ffd0f0")
}], ["canyon_hawk", "협곡 매", 83, "flyer", "#c08060"], ["rainbow_lancer", "무지개 창병", 83, "lancer", "#a0a0ff", _0x50de55], ["faded_hound", "색 바랜 사냥개", 83, "charger", "#a09080", _0x323b1f], ["choir_priest", "성가 사제", 84, "gcaster", "#fff0d0", {
  "proj": i.star("#fff0a0")
}], ["glass_paladin", "유리 성기사", 84, "shield", "#c0e8ff", _0x449a91], ["halo_shard", "후광 파편", 84, "flyer", "#ffe8a0", _0x509d15], ["bell_prism", "종 프리즘", 84, "turret", "#e0c0ff", {
  "proj": i.bolt("#e0c0ff")
}], ["keeper_ghost", "등대지기 망령", 85, "melee", "#a0b8c8", _0x1063f1], ["tempest_gull", "폭풍 갈매기", 85, "flyer", "#8090a0", _0x13863e], ["lens_eye", "렌즈의 눈", 85, "caster", "#fff0a0", {
  "proj": i.bolt("#ffffa0")
}], ["wreck_crab", "난파 게", 85, "shield", "#6a5a4a", _0x51db02], ["tide_knight", "조수 기사", 86, "shield", "#4a8ab0", _0x5c9fe7], ["glass_eel", "유리 장어", 86, "jumper", "#a0f0f0", _0x4de2bf], ["heart_jelly", "심장 해파리", 86, "bomber", "#ff80a0", _0x2aa88a], ["sea_choir", "바다 성가대", 86, "gcaster", "#c0f0ff", {
  "proj": i.shard("#e0ffff", "chill"),
  "weight": 4
}], ["sewer_worker", "하수 노동자", 91, "melee", "#6a6a50", _0x52716b], ["steam_mites", "증기 진드기 떼", 91, "flyer", "#c0c0b0", _0x3134f0], ["pipe_worm", "배관 벌레", 91, "jumper", "#8a6a4a", _0x4dce30], ["boiler_golem", "보일러 골렘", 91, "golem", "#8a5a3a", _0x5d37d4], ["wind_merchant", "태엽 상인", 92, "teleporter", "#a07a4a", _0x5e51f3], ["gear_dog", "톱니 개", 92, "charger", "#b09060", _0x12e2b1], ["coin_turret", "동전 포탑", 92, "turret", "#e0c040", {
  "proj": i.bolt("#ffe060")
}], ["clock_bird", "시계 새", 92, "flyer", "#c0a070"], ["rail_guard", "철로 경비", 93, "shield", "#5a5a6a", _0x193247], ["coal_bat", "석탄 박쥐", 93, "flyer", "#2a2a2a", _0x5001ac], ["engine_lancer", "기관 창병", 93, "lancer", "#8a4a3a"], ["smoke_wisp", "매연 위습", 93, "caster", "#7a7a7a", {
  "proj": i.orb("#a0a0a0", 0.03)
}], ["chain_jailer", "사슬 간수", 94, "melee", "#4a4a5a", _0xcb465d], ["pendulum_golem", "진자 골렘", 94, "golem", "#a08a5a"], ["hour_eye", "시침의 눈", 94, "caster", "#ffe0a0", {
  "proj": i.orb("#ffe0a0", 0.04)
}], ["cog_spider", "톱니 거미", 94, "jumper", "#7a6a4a", _0x29585f], ["forge_knight", "용광 기사", 95, "shield", "#6a3a2a", _0x2eef6e], ["slag_golem", "쇳물 골렘", 95, "golem", "#ff6020", _0x5451eb], ["ember_drone", "불씨 드론", 95, "bomber", "#ff9040", _0x3a3d98], ["rivet_gunner", "리벳 사수", 95, "archer", "#a0a0b0", {
  "proj": i.bolt("#ffc080")
}], ["imperial_doll", "근위 자동인형", 96, "shield", "#c0a040", _0x204a19], ["gear_raptor", "톱니 랩터", 96, "charger", "#a08050", _0x2a9901], ["throne_orrery", "왕좌의 혼천의", 96, "turret", "#ffd060", {
  "proj": i.star("#ffe080")
}], ["brass_hornets", "황동 말벌 떼", 96, "flyer", "#d0a040", _0x23ea76], ["bog_shambler", "늪 배회자", 101, "melee", "#5a6a3a", _0x361238], ["mold_blob", "곰팡이 덩어리", 101, "jumper", "#8aa04a", _0x3b7506], ["spore_bat", "포자 박쥐", 101, "flyer", "#6a7a4a", _0x50978d], ["bog_flytrap", "늪 식충초", 101, "turret", "#7ab040", {
  "proj": i.lob("#a0e060", "poison")
}], ["orchard_hand", "쇠스랑 일꾼", 102, "lancer", "#8a6a4a", _0x1858c6], ["rot_treant", "썩은 고목", 102, "golem", "#5a4a2a", _0x23c50c], ["apple_worm", "사과 벌레", 102, "jumper", "#c04030", _0x2e2064], ["fly_swarm", "날파리 떼", 102, "flyer", "#3a3a2a", _0x155989], ["hive_nun", "벌집 수녀", 103, "gcaster", "#e0b040", {
  "proj": i.lob("#ffd060", "poison")
}], ["wasp_knight", "말벌 기사", 103, "shield", "#d0a020", _0x5375c5], ["honey_golem", "꿀 골렘", 103, "golem", "#e0a030", _0x52dfa6], ["hive_drone", "벌집 일벌", 103, "bomber", "#ffd040", _0x125182], ["cocoon_spider", "고치 거미", 104, "jumper", "#d0d0c0", _0x2c31c4], ["silk_moth", "비단 나방", 104, "flyer", "#f0e8d0"], ["larva_crawler", "애벌레", 104, "charger", "#a0c060", _0x20f4c2], ["cocoon_cultist", "고치 숭배자", 104, "teleporter", "#a09080", _0x41ca92], ["thorn_courtier", "가시 시종", 105, "melee", "#6a2a4a", _0x4af633], ["poison_lily", "독 백합", 105, "turret", "#e0a0ff", {
  "proj": i.lob("#c080ff", "poison")
}], ["petal_archer", "꽃잎 궁수", 105, "archer", "#ff80b0", {
  "proj": i.blade("#ffa0c0")
}], ["nectar_jelly", "꿀물 해파리", 105, "bomber", "#ffc0e0", _0x7e21f0], ["royal_thorn", "여왕의 가시 기사", 106, "shield", "#3a6a3a", _0x19af9b], ["bloom_eye", "꽃눈", 106, "caster", "#ff60a0", {
  "proj": i.orb("#ff80c0", 0.045)
}], ["seed_raptor", "씨앗 랩터", 106, "charger", "#6a8a3a", _0x54ed61], ["plague_moth", "역병 나방", 106, "bomber", "#8a6aa0", _0x2a0e07], ["crater_brute", "분화구 장정", 111, "melee", "#7a5a4a", _0x5a8c70], ["meteor_golem", "운석 골렘", 111, "golem", "#5a4a4a", _0xcd9631], ["cinder_bird", "잿불 새", 111, "flyer", "#ff7040"], ["crater_crab", "분화구 게", 111, "shield", "#8a4a3a", _0x328c90], ["comet_rider", "혜성 기수", 112, "lancer", "#a0d0ff", _0x2b0a20], ["tail_wisp", "혜성 꼬리 위습", 112, "caster", "#c0f0ff", {
  "proj": i.shard("#e0ffff", "chill")
}], ["frost_hound", "서리 사냥개", 112, "charger", "#a0c0e0", _0x253689], ["comet_shard", "혜성 파편", 112, "flyer", "#e0f8ff", _0x597d42], ["nebula_witch", "성운 마녀", 113, "gcaster", "#c080ff", {
  "proj": i.orb("#d0a0ff", 0.035),
  "weight": 4
}], ["star_jelly", "별 해파리", 113, "bomber", "#ffa0ff", _0x38d116], ["nebula_blob", "성운 덩어리", 113, "jumper", "#8060c0", _0x151f4d], ["stardust_golem", "성진 골렘", 113, "golem", "#6a5a8a"], ["star_hunter", "별자리 사냥꾼", 114, "archer", "#e0e0ff", {
  "proj": i.star("#ffffff"),
  "weight": 4
}], ["star_raptor", "별 랩터", 114, "charger", "#5060a0", _0x437848], ["lyra_orrery", "거문고자리 혼천의", 114, "turret", "#a0b0ff", {
  "proj": i.bolt("#c0d0ff")
}], ["astral_knight", "별의 기사", 114, "shield", "#3a4a8a", _0x1bebd2], ["void_walker", "공허 보행자", 115, "teleporter", "#4a3a6a", _0x679f9f], ["gravity_eye", "중력의 눈", 115, "caster", "#c0a0ff", {
  "proj": i.orb("#a080ff", 0.05)
}], ["horizon_swarm", "지평선 떼", 115, "flyer", "#2a2040", _0x5ac46e], ["singular_golem", "특이점 골렘", 115, "golem", "#1a1028", _0xe2e5e6], ["maw_worm", "아가리 벌레", 116, "jumper", "#8a3a5a", _0x3dfcef], ["devoured_knight", "삼켜진 기사", 116, "shield", "#5a4a6a", _0x3e6f4d], ["acid_jelly", "위액 해파리", 116, "bomber", "#a0ff60", _0xe45fce], ["star_larva", "별 유충", 116, "charger", "#e0c0ff", _0x570f2f], ["torn_knight", "찢긴 장의 기사", 121, "shield", "#c0b090", _0x1fd081], ["bookmark_bird", "책갈피 새", 121, "flyer", "#c04040"], ["chapter_golem", "장(章) 골렘", 121, "golem", "#a08a60"], ["title_archer", "표제 궁수", 121, "archer", "#e0d0a0", {
  "proj": i.arrow("#fff0c0")
}], ["maze_scribe", "미궁 서기", 122, "gcaster", "#a0b0d0", {
  "proj": i.shard("#c0d0ff"),
  "weight": 4
}], ["note_spider", "각주 거미", 122, "jumper", "#3a3a4a", _0x3cf84a], ["maze_bull", "미궁 황소", 122, "charger", "#6a4a3a", _0x1e66d8], ["margin_eye", "여백의 눈", 122, "caster", "#f0f0e0", {
  "proj": i.orb("#ffffff", 0.04)
}], ["censor_knight", "검열 기사", 123, "shield", "#2a2a2a", _0x2c774b], ["black_bar", "검은 줄", 123, "flyer", "#101010", _0x444f8a], ["redact_golem", "삭제 골렘", 123, "golem", "#3a3a3a"], ["seal_lancer", "봉인 창병", 123, "lancer", "#a02020"], ["ash_scribe", "잿빛 서기", 124, "teleporter", "#8a8080", _0x2549af], ["burning_draft", "불타는 초고", 124, "bomber", "#ff7030", _0x553a34], ["eraser_hound", "지우개 사냥개", 124, "charger", "#e0a0a0", _0x26f2d1], ["cinder_archer", "불씨 궁수", 124, "archer", "#ff9050", {
  "proj": i.fire("#ff9050")
}], ["muse_shade", "뮤즈의 그림자", 125, "teleporter", "#a080c0", _0x13892c], ["inkpot_turret", "잉크병 포탑", 125, "turret", "#3050a0", {
  "proj": i.orb("#4060c0")
}], ["quill_swarm", "깃펜 떼", 125, "flyer", "#f0f0f0", _0x1205b9], ["desk_golem", "책상 골렘", 125, "golem", "#6a4a2a"], ["final_word", "마지막 단어", 126, "shield", "#f0e0c0", _0x2526a2], ["ending_wraith", "결말의 망령", 126, "teleporter", "#d0c0e0", _0x4db344], ["blank_eye", "백지의 눈", 126, "caster", "#ffffff", {
  "proj": i.orb("#fff0d0", 0.05)
}], ["period_raptor", "마침표 랩터", 126, "charger", "#1a1a1a", _0x48aadb], ["echo_skeleton", "해골 병사의 메아리", 131, "melee", "#e0d8c0", _0x553506], ["ash_wraith_echo", "잿빛 망령의 메아리", 131, "flyer", "#a0a0b0", _0x2851c5], ["crown_guard_echo", "핏빛 근위병의 메아리", 131, "shield", "#a02030", _0x6c0aa], ["grave_bat_echo", "묘소 박쥐의 메아리", 131, "flyer", "#5a4a6a", _0x26cbdd], ["void_knight_echo", "망각 기사의 메아리", 132, "teleporter", "#6a4aa0", _0x37fe5b], ["tide_jelly_echo", "바깥 해파리의 메아리", 132, "flyer", "#80ffe0", _0x2bba83], ["dream_moth_echo", "꿈 나방의 메아리", 132, "bomber", "#ffe0a0", _0x442ef4], ["sleep_hound_echo", "잠 사냥개의 메아리", 132, "charger", "#6a5a8a", _0x28e48e], ["ink_sailor_echo", "먹물 선원의 메아리", 133, "melee", "#3a4a7a", _0x2e0296], ["glass_gull_echo", "유리 갈매기의 메아리", 133, "flyer", "#c0f0ff", _0x12d133], ["blot_crab_echo", "얼룩 게의 메아리", 133, "jumper", "#2a3050", _0x1d6ceb], ["glass_archer_echo", "유리 궁수의 메아리", 133, "archer", "#a0f0ff", {
  "mul": 1.2,
  "proj": i.shard("#a0f0ff")
}], ["clock_knight_echo", "태엽 기사의 메아리", 134, "shield", "#a08040", _0x982d88], ["brass_hornet_echo", "놋쇠 말벌 떼의 메아리", 134, "flyer", "#ffd060", _0xd78383], ["spore_bat_echo", "포자 박쥐의 메아리", 134, "flyer", "#8a9a5a", _0x2f3a10], ["thorn_lancer_echo", "가시 창병의 메아리", 134, "lancer", "#c060ff", _0x2d25e9], ["star_raptor_echo", "별 랩터의 메아리", 135, "charger", "#7080d0", _0x35f9f8], ["comet_shard_echo", "혜성 조각의 메아리", 135, "flyer", "#c0e8ff", _0x5039b5], ["redact_knight_echo", "검열 기사의 메아리", 135, "shield", "#2a2a2a", _0x41b51e], ["quill_swarm_echo", "깃펜 떼의 메아리", 135, "flyer", "#f0f0f0", _0x2ab260], ["page_warden", "책장 파수병", 136, "shield", "#e0d8d0", _0x107786], ["margin_wraith", "여백의 망령", 136, "teleporter", "#f0f0f0", _0x4949da], ["reader_eye", "독자의 눈", 136, "caster", "#ffffff", {
  "mul": 1.25,
  "proj": i.orb("#ffffff", 0.05)
}], ["bookworm", "책벌레", 136, "charger", "#c0b090", _0x2c6d5f]], lr = ie(or), Z = _0x101d2c, ir = [["crack_walker", "균열 보행자", 141, "melee", "#7a6a50", _0x32f97c], ["dry_beetle", "마른 잉크 딱정벌레", 141, "charger", "#4a3a2a", _0x318556], ["flake_bat", "잉크 비늘 박쥐", 141, "flyer", "#3a3026", _0xb22bed], ["crack_archer", "틈새 사수", 141, "archer", "#8a7458", {
  "proj": i.arrow("#ffe0a0")
}], ["typo_merchant", "오탈자 상인", 142, "teleporter", "#a04a7a", _0x421ccc], ["misprint_blob", "번진 글자 덩어리", 142, "jumper", "#c060a0", _0x249fc1], ["stamp_golem", "도장 골렘", 142, "golem", "#7a3a5a", _0xb82f5e], ["ink_moth", "오자 나방", 142, "bomber", "#ff90c0", _0x63e829], ["inverted_miner", "거꾸로 광부", 143, "melee", "#5a6478", _0x53c2c6], ["type_spider", "활자 거미", 143, "jumper", "#3e4458", _0x4fd8e4], ["drip_eye", "천장의 눈", 143, "caster", "#2a3040", {
  "proj": i.orb("#a0e0ff", 0.03)
}], ["slug_turret", "납 포탑", 143, "turret", "#6a7080", {
  "proj": i.bolt("#a0e0ff")
}], ["ribbon_rider", "책갈피 기수", 144, "lancer", "#b05030", _0x5175a2], ["canyon_kite", "협곡 연", 144, "flyer", "#ff9060"], ["gust_hound", "돌풍 사냥개", 144, "charger", "#8a5a3a", _0x3bc6e8], ["fold_archer", "접힌 장 궁수", 144, "archer", "#6a4430", {
  "proj": i.arrow("#ffb080")
}], ["mirror_knight", "거울 기사", 145, "shield", "#8090b0", _0x3ec2fb], ["glass_wisp", "유리 위습", 145, "caster", "#c0e0ff", {
  "proj": i.star("#e0f0ff")
}], ["echo_dancer", "메아리 무희", 145, "teleporter", "#a0b0d0"], ["shard_swarm", "거울 조각 떼", 145, "flyer", "#d0e0f0", _0xf9f1e2], ["errant_knight", "오탈 기사", 146, "shield", "#5a1e24", _0x1a0773], ["crack_worm", "균열 벌레", 146, "jumper", "#7a2a30", _0x60dd52], ["red_pen_eye", "붉은 펜의 눈", 146, "caster", "#3a0e14", {
  "proj": i.orb("#ff4050", 0.04)
}], ["typo_raptor", "오탈자 랩터", 146, "charger", "#a03040", _0x11f27d], ["dune_reverser", "역류 순례자", 151, "melee", "#a08050", _0x6910bd], ["glass_scarab", "모래시계 풍뎅이", 151, "charger", "#c09a50", _0x40e24c], ["sand_wraith", "거꾸로 모래 망령", 151, "flyer", "#e0c890"], ["hour_turret", "모래시계 포탑", 151, "turret", "#8a6a3a", {
  "proj": i.lob("#ffe0a0")
}], ["fountain_nymph", "분수 요정", 152, "gcaster", "#4a8a8a", {
  "proj": i.shard("#a0fff0", "chill"),
  "weight": 4
}], ["still_frog", "멈춘 개구리", 152, "jumper", "#3a6a5a"], ["drip_jelly", "거꾸로 물방울", 152, "bomber", "#80e0e0", _0x530bec], ["hedge_guard", "정원 수문장", 152, "shield", "#3a5a3a", _0x10ba56], ["gear_smith", "역태엽 대장장이", 153, "melee", "#6a5428", _0x4dd12a], ["spring_hopper", "용수철 벌레", 153, "jumper", "#a08a40", _0x1ae76b], ["cog_drone", "톱니 드론", 153, "flyer", "#c0a040"], ["tick_golem", "초침 골렘", 153, "golem", "#8a7030", _0x143f16], ["yesterday_man", "어제의 행인", 154, "melee", "#5a5a7a", _0x1f892c], ["memory_hound", "기억 사냥개", 154, "charger", "#6a6a90", _0x25deab], ["lamplight_eye", "가로등의 눈", 154, "caster", "#4a4a62", {
  "proj": i.orb("#fff0a0")
}], ["rerun_archer", "되풀이 궁수", 154, "archer", "#7a6aa0", {
  "proj": i.arrow("#d0c0ff")
}], ["annal_scribe", "연표 서기", 155, "gcaster", "#3a4062", {
  "proj": i.star("#ffe8a0"),
  "weight": 4
}], ["era_knight", "시대 기사", 155, "lancer", "#4a5080"], ["date_bird", "연호 새", 155, "flyer", "#ffe8a0"], ["chronicle_golem", "연대기 골렘", 155, "golem", "#5a5070", _0x244f86], ["rewind_guard", "되감기 근위병", 156, "shield", "#4a3a18", _0x1d9494], ["pendulum_wisp", "진자 위습", 156, "caster", "#ffe070", {
  "proj": i.orb("#ffe070", 0.04)
}], ["clock_raptor", "시계 랩터", 156, "charger", "#8a6a2a", _0x42a542], ["hour_hornets", "시침 말벌 떼", 156, "flyer", "#c0a040", _0x6d48e5], ["leaf_reader", "떠다니는 독자", 161, "melee", "#5a7a6a", _0x4e7a3b], ["float_crane", "종이학", 161, "flyer", "#f0f0e0"], ["float_jelly", "부유 해파리", 161, "bomber", "#a0f0d0"], ["page_golem", "낱장 골렘", 161, "golem", "#d0d0c0"], ["root_hanger", "뿌리 매달이", 162, "teleporter", "#3a5a3a", _0xc6a59d], ["hang_spider", "매달린 거미", 162, "jumper", "#2a4a2a", _0x41e047], ["seed_turret", "거꾸로 씨앗꽃", 162, "turret", "#5a8a3a", {
  "proj": i.lob("#c0ff90", "poison")
}], ["canopy_bat", "수관 박쥐", 162, "flyer", "#3a5a2a", _0x3e8cb7], ["tether_guard", "끈다리 파수병", 163, "lancer", "#5a6a84", _0x2da0cd], ["sky_ray", "하늘 가오리", 163, "flyer", "#7a90b0"], ["cloud_hound", "구름 사냥개", 163, "charger", "#c0d0e0", _0x50959a], ["kite_archer", "연 사수", 163, "archer", "#8090a8", {
  "proj": i.arrow("#c0e0ff")
}], ["brick_monk", "벽돌 수도사", 164, "gcaster", "#54465e", {
  "proj": i.orb("#ffd0ff", 0.03),
  "weight": 4
}], ["float_brick", "떠도는 벽돌", 164, "jumper", "#7a6a84", _0x181a75], ["weightless_eye", "무중력의 눈", 164, "caster", "#32263e", {
  "proj": i.star("#ffd0ff")
}], ["tower_golem", "탑 골렘", 164, "golem", "#6a5a7a", _0xe2f1e7], ["cloud_diver", "구름 잠수부", 165, "melee", "#8a98b0", _0x2c697c], ["storm_jelly", "번개 구름 해파리", 165, "bomber", "#c0c8e0", _0x388c72], ["nimbus_ray", "적란 가오리", 165, "flyer", "#a0b0c8"], ["sky_turret", "구름 포탑", 165, "turret", "#7a88a0", {
  "proj": i.bolt("#fff060")
}], ["nullgrav_knight", "무중력 기사", 166, "shield", "#2e2840", _0x5ea08a], ["gravity_wisp", "중력 위습", 166, "caster", "#a0c0ff", {
  "proj": i.orb("#a0c0ff", 0.04)
}], ["orbit_raptor", "궤도 랩터", 166, "charger", "#3a3460", _0x4167b0], ["satellite_swarm", "위성 떼", 166, "flyer", "#5a5a8a", _0x1474a4], ["mask_servant", "가면 시종", 171, "melee", "#54303a", _0x1999c8], ["mask_moth", "가면 나방", 171, "flyer", "#a06a5a"], ["costume_golem", "의상 골렘", 171, "golem", "#6a3a4a"], ["prop_turret", "소품 대포", 171, "turret", "#8a5a4a", {
  "proj": i.bolt("#ffc0a0")
}], ["mirror_actor", "거울 배우", 172, "teleporter", "#44445c", _0x40f8c4], ["glass_hound", "유리 사냥개", 172, "charger", "#a0a0c0", _0x515931], ["spot_eye", "조명의 눈", 172, "caster", "#e0e0f0", {
  "proj": i.star("#fff0a0")
}], ["reflect_shard", "반사 파편", 172, "flyer", "#c0c0e0", _0x48207d], ["usher_shade", "그림자 안내원", 173, "melee", "#34343e", _0xfbb727], ["seat_spider", "객석 거미", 173, "jumper", "#22222a", _0x4b152d], ["shadow_bat", "그림자 박쥐", 173, "flyer", "#1c1c22", _0x3255ea], ["trapdoor_golem", "함정문 골렘", 173, "golem", "#3a3a44", _0x53050b], ["understudy", "대역 배우", 174, "melee", "#6a4a24", _0xf24b25], ["cue_bird", "신호 새", 174, "flyer", "#ffd890"], ["script_turret", "대본 포탑", 174, "turret", "#8a6a40", {
  "proj": i.blade("#ffd890")
}], ["rehearse_lancer", "연습 창병", 174, "lancer", "#5a3a1a"], ["rigger", "조명 기사", 175, "archer", "#2a3048", {
  "proj": i.bolt("#fff0a0"),
  "weight": 4
}], ["bulb_jelly", "전구 해파리", 175, "bomber", "#fff0a0", _0x57ac4a], ["catwalk_raptor", "통로 랩터", 175, "charger", "#3a4060", _0x12fdf4], ["fuse_wisp", "퓨즈 위습", 175, "caster", "#ffe060", {
  "proj": i.bolt("#ffe060")
}], ["masked_duelist", "가면 결투가", 176, "teleporter", "#4a1a38", _0x2b9031], ["curtain_golem", "막 골렘", 176, "golem", "#6a1a4a", _0x54071c], ["mask_eye", "가면의 눈", 176, "caster", "#22081a", {
  "proj": i.soul("#ff80d0")
}], ["applause_swarm", "박수 떼", 176, "flyer", "#a04080", _0x217ed6], ["bellows_hand", "풀무 일꾼", 181, "melee", "#5a4836", _0x30c137], ["ash_moth", "재 나방", 181, "flyer", "#8a7a6a"], ["furnace_golem", "화덕 골렘", 181, "golem", "#7a4a2a", _0x2ac7b1], ["spark_turret", "불꽃 포탑", 181, "turret", "#8a5a3a", {
  "proj": i.fire("#ffb070")
}], ["spool_keeper", "실타래지기", 182, "gcaster", "#56425e", {
  "proj": i.blade("#ffa0d0"),
  "weight": 4
}], ["yarn_ball", "굴러가는 실타래", 182, "charger", "#c070a0"], ["thread_spider", "실 거미", 182, "jumper", "#3a2a40", _0xa4b1ca], ["loom_bat", "베틀 박쥐", 182, "flyer", "#7a5a80", _0x3899b7], ["needle_knight", "바늘 기사", 183, "lancer", "#3e4c5a", _0x3ff4e8], ["pin_swarm", "핀 떼", 183, "flyer", "#c0d0e0", _0x275f76], ["thimble_golem", "골무 골렘", 183, "golem", "#8a9aa8", _0x291d84], ["roof_archer", "지붕 사수", 183, "archer", "#4a5a6a", {
  "proj": i.spear("#d0e8ff")
}], ["glue_monk", "풀칠 수도사", 184, "melee", "#4a5a2a", _0x5aeaf6], ["paste_blob", "풀 덩어리", 184, "jumper", "#c0d080", _0x2e8303], ["sticky_eye", "끈적한 눈", 184, "caster", "#2a3a12", {
  "proj": i.lob("#e0ff90", "poison")
}], ["brush_raptor", "풀솔 랩터", 184, "charger", "#6a7a3a", _0x33d2f2], ["storm_binder", "폭풍 제본사", 185, "gcaster", "#36446a", {
  "proj": i.bolt("#a0d0ff"),
  "weight": 4
}], ["gale_hawk", "돌풍 매", 185, "flyer", "#5a70a0"], ["vortex_jelly", "소용돌이 해파리", 185, "bomber", "#80b0ff", _0x100038], ["spine_guard", "책등 수비병", 185, "shield", "#2a3450", _0x473577], ["binding_knight", "제본 기사", 186, "shield", "#4a3a20", _0x3a15c3], ["awl_raptor", "송곳 랩터", 186, "charger", "#8a6a3a", _0x5681c7], ["seal_eye", "봉인의 눈", 186, "caster", "#20180c", {
  "proj": i.soul("#ffe0a0")
}], ["stitch_swarm", "바늘땀 떼", 186, "flyer", "#c0a070", _0xa24adc], ["tilted_reader", "기운 열람자", 191, "melee", "#5a4c3a", _0x5a1768], ["shelf_golem", "서가 골렘", 191, "golem", "#6a5040", _0x257fff], ["dust_bat", "먼지 박쥐", 191, "flyer", "#8a7a60", _0xb9de25], ["catalog_turret", "목록 포탑", 191, "turret", "#7a6448", {
  "proj": i.blade("#f0d8a0")
}], ["sinker", "꺼진 자", 192, "teleporter", "#3a4250", _0x23077b], ["ripple_worm", "물결 벌레", 192, "jumper", "#4a5a6a", _0x59d7cf], ["abyss_eye", "틈새의 눈", 192, "caster", "#1a1e26", {
  "proj": i.orb("#c0d0e0", 0.04)
}], ["floor_raptor", "바닥 랩터", 192, "charger", "#4a5260", _0xbc58a9], ["chain_librarian", "사슬 사서", 193, "lancer", "#4a2a2a", _0x41bcdc], ["forbidden_tome", "날뛰는 금서", 193, "flyer", "#7a2a2a", _0x57012d], ["lock_golem", "자물쇠 골렘", 193, "golem", "#5a3a3a", _0x415a19], ["blood_scribe", "피의 필사가", 193, "gcaster", "#3a1414", {
  "proj": i.soul("#ff7060")
}], ["dust_stairkeeper", "계단지기", 194, "shield", "#6a5c46", _0x470b72], ["dust_jelly", "먼지 해파리", 194, "bomber", "#c0b090"], ["step_spider", "계단 거미", 194, "jumper", "#4a4030", _0x4a7d4e], ["dust_archer", "먼지 사수", 194, "archer", "#8a7a60", {
  "proj": i.arrow("#fff0d0")
}], ["dome_keeper", "돔지기", 195, "gcaster", "#3a3a52", {
  "proj": i.star("#d0b0ff"),
  "weight": 4
}], ["rubble_golem", "잔해 골렘", 195, "golem", "#4a4a62", _0x215793], ["fresco_bird", "벽화 새", 195, "flyer", "#8a7ab0"], ["arch_hound", "아치 사냥개", 195, "charger", "#5a5070", _0x3c5c3b], ["ruin_knight", "폐허 기사", 196, "shield", "#3e1a20", _0x3c6a9f], ["ash_raptor", "잿더미 랩터", 196, "charger", "#5a2a30", _0x413b3b], ["collapse_eye", "붕괴의 눈", 196, "caster", "#1c0a0e", {
  "proj": i.soul("#ff6080")
}], ["debris_swarm", "파편 떼", 196, "flyer", "#7a3a40", _0x5adf6e], ["errata_spawn", "오탈자 새끼", 201, "jumper", "#7a2a30", _0x31b362], ["errata_knight", "오탈자 기사", 201, "shield", "#4a2228", _0x10ba9a], ["red_ink_bat", "붉은 잉크 박쥐", 201, "flyer", "#a02030", _0x3be750], ["proof_eye", "교정의 눈", 201, "caster", "#2a0a10", {
  "proj": i.orb("#ff6070", 0.045)
}], ["rewind_knight", "되감기 기사", 202, "lancer", "#4e3e1a", _0x49c91e], ["gear_hawk", "톱니 매", 202, "flyer", "#a08030"], ["second_golem", "초 골렘", 202, "golem", "#6a5428", _0x4286d2], ["clock_eye", "시계의 눈", 202, "caster", "#241c0a", {
  "proj": i.bolt("#ffe070")
}], ["debris_monk", "잔해 수도사", 203, "gcaster", "#3a4a6a", {
  "proj": i.star("#c0e0ff"),
  "weight": 4
}], ["float_ray", "부유 가오리", 203, "flyer", "#5a70a0"], ["gravity_hound", "중력 사냥개", 203, "charger", "#3a4a6a", _0x3a4b5e], ["rubble_spider", "잔해 거미", 203, "jumper", "#4a5a7a", _0x3796d9], ["shattered_actor", "깨진 배우", 204, "teleporter", "#4a1e4a", _0x3fcdd9], ["mirror_moth", "거울 나방", 204, "flyer", "#c080c0"], ["stage_golem", "무대 골렘", 204, "golem", "#5a2a5a", _0x22a90b], ["encore_archer", "앙코르 궁수", 204, "archer", "#6a2a6a", {
  "proj": i.star("#ff90ff")
}], ["tower_binder", "제본탑 장인", 205, "melee", "#343e5a", _0x54cdec], ["needle_hawk", "바늘 매", 205, "flyer", "#6080b0"], ["storm_golem", "폭풍 골렘", 205, "golem", "#2a3450", _0x56037a], ["gale_turret", "돌풍 포탑", 205, "turret", "#4a5a80", {
  "proj": i.bolt("#a0d0ff")
}], ["red_pen_guard", "붉은 펜 근위병", 206, "shield", "#2e2422", _0x57b107], ["correction_eye", "교정 표시의 눈", 206, "caster", "#160e0c", {
  "proj": i.soul("#ff3040")
}], ["delete_raptor", "삭제 랩터", 206, "charger", "#3a2a2a", _0x191ea6], ["erase_swarm", "지우개 가루 떼", 206, "flyer", "#e0d8d0", _0x325e71]], cr = ie(ir).map(_0x22885b => ({
  ..._0x22885b,
  "cd": Math.round(_0x22885b.cd * Z.cd),
  "windup": Math.max(Z.minWindup, Math.round(_0x22885b.windup * Z.windup)),
  "speed": _0x22885b.speed * Z.speed
})), q = _0x4feb00, dr = [["blot_walker", "번짐 보행자", 211, "melee", "#3e5a48", _0x5e2894], ["ink_toad", "잉크 두꺼비", 211, "jumper", "#2e6a4a", _0x130084], ["spore_quill", "포자 깃펜", 211, "flyer", "#5aa070", _0x2dcc4e], ["smudge_archer", "얼룩 사수", 211, "archer", "#46604e", {
  "proj": i.arrow("#a0ffc0")
}], ["bog_scribe", "늪의 서기", 212, "gcaster", "#3a4a2c", {
  "proj": i.lob("#d0ff80", "poison"),
  "weight": 4
}], ["wet_leech", "젖은 거머리", 212, "jumper", "#4a5a20", _0x5a6288], ["reed_hound", "갈대 사냥개", 212, "charger", "#5a6a30", _0x6b25ed], ["soggy_golem", "젖은 원고 골렘", 212, "golem", "#4a5a3a", _0x102666], ["mist_stag", "먹물 사슴", 213, "charger", "#2e4e54", _0x35dc55], ["fog_wisp", "안개 위습", 213, "caster", "#60b0a0", {
  "proj": i.orb("#90e0d0", 0.03)
}], ["ink_druid", "먹물 드루이드", 213, "gcaster", "#2a3e44", {
  "proj": i.soul("#90e0d0")
}], ["branch_spider", "가지 거미", 213, "jumper", "#203034", _0x4fe06e], ["script_knight", "흘림체 기사", 214, "lancer", "#5a4632", _0x3e7b46], ["drip_bat", "흐르는 잉크 박쥐", 214, "flyer", "#6a4a2a", _0x3417a8], ["slide_crab", "미끄럼 게", 214, "charger", "#7a5a3a", _0x48a177], ["canyon_cannon", "계곡 포대", 214, "turret", "#5a4a3a", {
  "proj": i.lob("#ffc080")
}], ["bottle_imp", "잉크병 요괴", 215, "teleporter", "#26344e", _0x3da47c], ["ink_jelly", "잉크 해파리", 215, "bomber", "#4060a0", _0x537576], ["cork_golem", "코르크 골렘", 215, "golem", "#5a4a3a", _0x3e47f1], ["glass_eye", "병 속의 눈", 215, "caster", "#1a2440", {
  "proj": i.orb("#80b0ff", 0.035)
}], ["incipit_guard", "첫 줄 근위병", 216, "shield", "#2a2622", _0x363af3], ["margin_raptor", "여백 랩터", 216, "charger", "#3a3a32", _0x1fae03], ["blankpage_eye", "백지의 눈", 216, "caster", "#e0dcd0", {
  "proj": i.soul("#40ffa0")
}], ["verse_swarm", "시구 떼", 216, "flyer", "#c8c0b0", _0x5e7de2], ["blink_guard", "점멸 다리지기", 221, "melee", "#3a3a62", _0x2487ed], ["flicker_moth", "깜빡이 나방", 221, "flyer", "#8080d0", _0xef901e], ["beat_frog", "박자 개구리", 221, "jumper", "#4a4a8a", _0x58d77c], ["metronome", "메트로놈 포탑", 221, "turret", "#5a5a80", {
  "proj": i.bolt("#c0c0ff")
}], ["comma_gardener", "쉼표 정원사", 222, "melee", "#465e36", _0xbc067e], ["pause_snail", "쉼표 달팽이", 222, "jumper", "#7a9a5a", _0x474f43], ["petal_wisp", "꽃잎 위습", 222, "caster", "#ffc0e0", {
  "proj": i.star("#ffe0f0")
}], ["hedge_bloom", "울타리 꽃", 222, "turret", "#5a7a46", {
  "proj": i.lob("#ffe0f0")
}], ["cursor_sentry", "커서 보초", 223, "lancer", "#30303e", _0x5e1cd1], ["caret_bird", "캐럿 새", 223, "flyer", "#d0d0e0"], ["text_golem", "글자 골렘", 223, "golem", "#4a4a5a", _0x58bb4a], ["select_eye", "선택 영역의 눈", 223, "caster", "#1a1a22", {
  "proj": i.orb("#ffffff", 0.04)
}], ["palimp_thief", "덧쓰기 도둑", 224, "teleporter", "#5e5040", _0x38127b], ["erase_hound", "지움 사냥개", 224, "charger", "#7a6a50", _0x533fa1], ["overwrite_crab", "덧칠 게", 224, "charger", "#6a5a44", _0x4295e1], ["street_archer", "거리의 궁수", 224, "archer", "#4a3e30", {
  "proj": i.arrow("#f0d0a0")
}], ["hesit_knight", "망설임 기사", 225, "shield", "#5a6a8a", _0x4d0bab], ["isle_ray", "하늘섬 가오리", 225, "flyer", "#a0b0d0"], ["cloud_jelly", "구름 해파리", 225, "bomber", "#d0d8f0", _0x432ead], ["drift_prism", "떠도는 프리즘", 225, "turret", "#7a88a8", {
  "proj": i.shard("#e0e8ff", "chill")
}], ["dots_knight", "말줄임 기사", 226, "shield", "#3a2450", _0x297259], ["unfinished_eye", "미완의 눈", 226, "caster", "#1a0e26", {
  "proj": i.soul("#e0a0ff")
}], ["ellipse_raptor", "생략 랩터", 226, "charger", "#5a3a7a", _0x1950be], ["period_swarm", "마침표 떼", 226, "flyer", "#2a1a3a", _0x3bc260], ["letter_ranger", "거울 편지 순찰자", 231, "archer", "#3a4e60", {
  "weight": 4,
  "proj": i.arrow("#c0f0ff")
}], ["envelope_bat", "봉투 박쥐", 231, "flyer", "#d0e0e8", _0x2e1c1e], ["stamp_beetle", "우표 딱정벌레", 231, "charger", "#4a6070", _0x2c068f], ["mirror_treant", "거울 나무", 231, "golem", "#3a5040"], ["left_librarian", "왼손잡이 사서", 232, "gcaster", "#56402c", {
  "proj": i.star("#ffd8a0"),
  "weight": 4
}], ["book_crab", "책등 게", 232, "charger", "#6a4a30", _0x252cd6], ["index_spider", "색인 거미", 232, "jumper", "#3a2a1a", _0x2b681a], ["shelf_gargoyle", "서가 가고일", 232, "golem", "#5a4a3a", _0x2889d8], ["lake_twin", "호수의 쌍둥이 무사", 233, "melee", "#36546e", _0x31082d], ["reflect_fish", "반사 물고기", 233, "flyer", "#80c0e0"], ["ripple_jelly", "물결 해파리", 233, "bomber", "#a0e0ff", _0x152e7e], ["lily_turret", "수련 포대", 233, "turret", "#3a6a6a", {
  "proj": i.lob("#a0e8ff")
}], ["asym_knight", "외팔 기사", 234, "lancer", "#543454", _0x53c661], ["crooked_bat", "삐뚤어진 박쥐", 234, "flyer", "#a05a90", _0x5c767c], ["half_golem", "반쪽 골렘", 234, "golem", "#6a3a5a", _0x43ae77], ["tilt_cannon", "기운 포대", 234, "turret", "#5a3a50", {
  "proj": i.bolt("#ffa0e0")
}], ["star_copyist", "별의 필사가", 235, "teleporter", "#2a3450", _0x56f269], ["mirror_shard", "거울 파편", 235, "flyer", "#d0e0ff", _0x43dd58], ["orbit_eye", "궤도의 눈", 235, "caster", "#0e1220", {
  "proj": i.star("#f0f8ff")
}], ["nova_crab", "별 게", 235, "charger", "#4a5a80", _0x508b9d], ["signature_knight", "서명 기사", 236, "shield", "#3e3448", _0x521f8a], ["quill_raptor", "깃펜 랩터", 236, "charger", "#5a2a4a", _0x1b46f5], ["ink_mirror_eye", "잉크 거울의 눈", 236, "caster", "#1a1420", {
  "proj": i.soul("#ff70b0")
}], ["blot_swarm", "얼룩 떼", 236, "flyer", "#6a3a5a", _0x302aa1], ["second_runner", "초침 주자", 241, "melee", "#5c4c24", _0x283d5a], ["tick_bird", "째깍 새", 241, "flyer", "#c0a040"], ["dial_golem", "문자판 골렘", 241, "golem", "#7a6430", _0x3f8df8], ["chime_turret", "차임 포탑", 241, "turret", "#8a7030", {
  "proj": i.bolt("#ffe060")
}], ["sand_editor", "모래 교열자", 242, "gcaster", "#7a6038", {
  "proj": i.lob("#ffd890"),
  "weight": 4
}], ["dune_scorpion", "모래 전갈", 242, "charger", "#a08050", _0x1be1ff], ["grain_swarm", "모래알 떼", 242, "flyer", "#d0b070", _0x39f87d], ["hourglass_imp", "모래시계 요괴", 242, "jumper", "#8a6a3a", _0x1a059a], ["deadline_ringer", "종지기", 243, "shield", "#463c56", _0x1d6d37], ["toll_bat", "종소리 박쥐", 243, "flyer", "#8a7aa0", _0x20e08a], ["belfry_gargoyle", "청동 가고일", 243, "golem", "#6a5a40", _0x330378], ["echo_wisp", "메아리 위습", 243, "caster", "#ffd0a0", {
  "proj": i.orb("#ffd0a0", 0.03)
}], ["night_printer", "야간 인쇄공", 244, "melee", "#33333f", _0x12d5b2], ["press_crab", "압착 게", 244, "charger", "#4a4a5a", _0x31f170], ["type_drone", "활자 드론", 244, "flyer", "#60a090"], ["roller_gear", "롤러 톱니", 244, "turret", "#3a4a4a", {
  "proj": i.bolt("#a0ffe0")
}], ["hand_lancer", "시곗바늘 창병", 245, "lancer", "#603420", _0x422f7e], ["ember_moth", "불씨 나방", 245, "bomber", "#ff8040", _0x4f6ff4], ["sky_dial", "하늘 문자판", 245, "turret", "#7a4a2a", {
  "proj": i.fire("#ffa060")
}], ["deadline_hound", "마감 사냥개", 245, "charger", "#8a4a2a", _0xdb88da], ["verdict_guard", "판결 근위병", 246, "shield", "#4a2020", _0x4dacab], ["gavel_raptor", "의사봉 랩터", 246, "charger", "#6a3020", _0x4de866], ["scale_eye", "저울의 눈", 246, "caster", "#200a0a", {
  "proj": i.orb("#ffd060", 0.045)
}], ["summons_swarm", "소환장 떼", 246, "flyer", "#d0b080", _0x15c31c], ["tide_rider", "해일 기수", 251, "lancer", "#2a405a", _0x3f76b9], ["surf_crab", "파도 게", 251, "charger", "#3a5a7a", _0x5e65b5], ["gull_quill", "깃펜 갈매기", 251, "flyer", "#c0d0e0"], ["foam_jelly", "거품 해파리", 251, "bomber", "#80b0e0", _0x4d0ee0], ["ferryman", "먹물 뱃사공", 252, "gcaster", "#36423a", {
  "proj": i.lob("#c0ffa0", "poison"),
  "weight": 4
}], ["river_eel", "강 뱀장어", 252, "jumper", "#2a4a2a", _0x2f44d5], ["delta_toad", "하구 두꺼비", 252, "jumper", "#4a6a3a", _0x2ed339], ["reed_turret", "갈대 포대", 252, "turret", "#3a5a30", {
  "proj": i.lob("#c0ffa0", "poison")
}], ["domino_knight", "도미노 기사", 253, "shield", "#5a422a", _0x1a1244], ["fallen_page", "떨어지는 낱장", 253, "flyer", "#e0d0b0", _0x19d667], ["shelf_hound", "서가 사냥개", 253, "charger", "#7a5a3a", _0x15afcc], ["tome_golem", "두꺼운 책 골렘", 253, "golem", "#6a4a2a", _0x3790ac], ["falls_diver", "폭포 잠수부", 254, "melee", "#344a5c", _0x11e013], ["spray_bat", "물보라 박쥐", 254, "flyer", "#80a8c0", _0x4151ae], ["cliff_spider", "절벽 거미", 254, "jumper", "#2a3a4a", _0x349322], ["mist_prism", "물안개 프리즘", 254, "turret", "#6a8aa0", {
  "proj": i.shard("#a0d8ff", "chill")
}], ["vortex_monk", "소용돌이 수도승", 255, "teleporter", "#3a2460", _0x17e396], ["whirl_ray", "회오리 가오리", 255, "flyer", "#8a60c0"], ["storm_eye", "폭풍의 눈알", 255, "caster", "#1a0e2c", {
  "proj": i.orb("#c080ff", 0.035)
}], ["spiral_jelly", "나선 해파리", 255, "bomber", "#a070e0", _0x5a0151], ["deluge_guard", "해일 근위병", 256, "shield", "#1c2c44", _0x258273], ["abyss_raptor", "심해 랩터", 256, "charger", "#2a3a5a", _0x5a6898], ["heart_eye", "해일 심장의 눈", 256, "caster", "#08101c", {
  "proj": i.soul("#60a0ff")
}], ["droplet_swarm", "물방울 떼", 256, "flyer", "#4070c0", _0x1a49c0], ["clear_scribe", "투명 필경사", 261, "teleporter", "#8c9aa4", _0x25022e], ["glass_moth", "유리 나방", 261, "flyer", "#c0d8e8", _0xb31c3a], ["pane_golem", "유리창 골렘", 261, "golem", "#7a8a94", _0x3d8cd5], ["clearlens_eye", "렌즈의 눈", 261, "caster", "#2c343a", {
  "proj": i.orb("#60d0ff", 0.035)
}], ["shadow_clerk", "그림자 서기", 262, "melee", "#2e2638", _0x5471f4], ["shade_hound", "그늘 사냥개", 262, "charger", "#3a2e44", _0x5a53ce], ["lamp_wisp", "꺼진 가로등 위습", 262, "caster", "#ff8060", {
  "proj": i.fire("#ff8060")
}], ["gutter_crab", "하수구 게", 262, "charger", "#2a2430", _0x5a05cd], ["track_hunter", "발자국 사냥꾼", 263, "archer", "#524234", {
  "weight": 4,
  "proj": i.arrow("#ffe0c0")
}], ["print_beetle", "발자국 딱정벌레", 263, "charger", "#6a5a44", _0x1a50b6], ["dust_spider", "먼지 거미", 263, "jumper", "#4a3e30", _0x190239], ["archive_golem", "서고 골렘", 263, "golem", "#5a4a3a", _0xc69731], ["eraser_nomad", "지우개 유목민", 264, "melee", "#8a7a6c", _0x28562a], ["crumb_worm", "지우개 가루 벌레", 264, "jumper", "#c0b0a0", _0x369dfc], ["dune_ray", "사막 가오리", 264, "flyer", "#d0c0b0"], ["rubber_golem", "고무 골렘", 264, "golem", "#a08070", _0x1f3f72], ["fading_astrologer", "희미한 점성술사", 265, "gcaster", "#1e2840", {
  "proj": i.star("#d0e0ff"),
  "weight": 4
}], ["star_moth", "별빛 나방", 265, "flyer", "#a0b0e0", _0x68150c], ["constel_crab", "별자리 게", 265, "charger", "#3a4a70", _0x3f767e], ["void_armillary", "공허 혼천의", 265, "turret", "#2a3450", {
  "proj": i.star("#d0e0ff")
}], ["ghost_author", "유령 작가", 266, "shield", "#463620", _0x565b36], ["nib_raptor", "펜촉 랩터", 266, "charger", "#5a4020", _0x24cac8], ["chair_eye", "빈 의자의 눈", 266, "caster", "#1c140a", {
  "proj": i.soul("#ffe8b0")
}], ["draft_swarm", "초고 떼", 266, "flyer", "#d0c0a0", _0x2397fb], ["blot_echo", "번짐의 메아리 병사", 271, "melee", "#34503e", _0x5e52c2], ["toad_echo", "메아리 두꺼비", 271, "jumper", "#2e6a4a", _0x4bba74], ["moth_echo", "메아리 나방", 271, "flyer", "#60c080", _0x31834a], ["cannon_echo", "메아리 포대", 271, "turret", "#3a5a40", {
  "proj": i.lob("#80ffb0", "poison")
}], ["blink_echo", "깜빡임의 메아리 기사", 272, "lancer", "#3a2a58", _0x3bbf3c], ["flicker_echo", "메아리 깜빡이", 272, "flyer", "#9070d0"], ["frog_echo", "메아리 개구리", 272, "jumper", "#5a3a8a", _0x1053ee], ["eye_echo", "미완의 메아리 눈", 272, "caster", "#1a1228", {
  "proj": i.soul("#d0a0ff")
}], ["mirror_echo", "거울의 메아리 무사", 273, "teleporter", "#30405e", _0x2de6d3], ["shard_echo", "메아리 파편", 273, "flyer", "#d0b0e0", _0x56b0ff], ["crab_echo", "메아리 게", 273, "charger", "#4a3a60", _0x328e70], ["prism_echo", "메아리 프리즘", 273, "turret", "#6a5a8a", {
  "proj": i.star("#ff90c8")
}], ["verdict_echo", "마감의 메아리 근위병", 274, "shield", "#4e2c18", _0x27483d], ["bird_echo", "메아리 째깍 새", 274, "flyer", "#d0a040"], ["hound_echo", "메아리 사냥개", 274, "charger", "#7a4a20", _0x23597b], ["dial_echo", "메아리 문자판", 274, "turret", "#6a4a2a", {
  "proj": i.fire("#ffc860")
}], ["tide_echo", "해일의 메아리 기수", 275, "lancer", "#223a58", _0x506fb4], ["eel_echo", "메아리 뱀장어", 275, "jumper", "#2a4a6a", _0x325729], ["ray_echo", "메아리 가오리", 275, "flyer", "#5080c0"], ["jelly_echo", "메아리 해파리", 275, "bomber", "#60a0e0", _0x367a94], ["blank_knight", "백지 기사", 276, "shield", "#1c1a18", _0x18c92a], ["whitespace_eye", "여백의 눈", 276, "caster", "#0c0a08", {
  "proj": i.soul("#9060ff")
}], ["void_raptor", "공백 랩터", 276, "charger", "#2a2438", _0x56c6d5], ["blank_swarm", "백지 조각 떼", 276, "flyer", "#e8e4dc", _0x145f3e]], nr = ie(dr).map(_0x589b5c => ({
  ..._0x589b5c,
  "cd": Math.round(_0x589b5c.cd * q.cd),
  "windup": Math.max(q.minWindup, Math.round(_0x589b5c.windup * q.windup)),
  "speed": _0x589b5c.speed * q.speed
})), Q = _0x3979dd, fr = [enemy_skeleton, enemy_bone_archer, enemy_wraith, enemy_bone_shield, enemy_slime, enemy_venom_bug, enemy_spore_cap, enemy_moth, enemy_fire_sprite, enemy_magma_golem, enemy_forge_hound, enemy_smith_skel, enemy_royal_guard, enemy_shade, enemy_shadow_mage, enemy_royal_lancer, enemy_drowned, enemy_harpooner, enemy_gull, enemy_crab, enemy_tome, enemy_frost_librarian, enemy_mimic, enemy_ink_shade, enemy_void_eye, enemy_void_knight, enemy_devourer, enemy_lost_soul, enemy_dummy], Zs = [...fr, ...Ys, ...lr, ...cr, ...nr].map(_0x179885 => _0x179885.ai === "dummy" ? _0x179885 : {
  ..._0x179885,
  "hp": Math.round(_0x179885.hp * Q.hp),
  "atk": Math.round(_0x179885.atk * Q.atk),
  "cd": Math.round(_0x179885.cd * Q.cd),
  "speed": _0x179885.speed * Q.speed
}), R0 = Object.fromEntries(Zs.map(_0x8211b3 => [_0x8211b3.id, _0x8211b3])), T0 = [1, 1, 1.35, 1.75, 2.1, 2.45, 2.9], A0 = _0x1f3c5f, qs = new Map();
for (const e of E) e.route.forEach((_0x72ca35, _0x48db87) => _0x72ca35.forEach(_0x51d388 => qs.set(_0x51d388, [e.id, _0x48db87 + 1])));
function Qs(_0x16608a) {
  const _0x5379f8 = {
    "twOMT": function (_0x140d03, _0x483bca) {
      return _0x140d03(_0x483bca);
    }
  }, [_0x234835, _0x47bca9] = qs.get(_0x16608a) ?? [0, 0], _0xf714e9 = _0x234835 ? U(_0x234835).id : 0, _0x4905b8 = _0x234835 ? U(_0x234835).name + " 스토리 " + L(_0x234835) + " · " + _0x47bca9 + "장 " + Ma(_0x16608a).name : "공용", _0x124d6c = {};
  (_0x124d6c.book = _0xf714e9, _0x124d6c.story = _0x234835);
  _0x124d6c.stage = _0x47bca9;
  return (_0x124d6c.theme = _0x16608a, _0x124d6c.label = _0x4905b8, _0x124d6c);
}
const ae = _0x2bb65a => _0x2bb65a.story * 10000 + _0x2bb65a.stage * 1000 + _0x2bb65a.theme % 1000, O0 = Zs.filter(_0x290a85 => _0x290a85.ai !== "dummy").map((_0x4114a3, _0x1bd93f) => ({
  "def": _0x4114a3,
  "place": Qs(_0x4114a3.chapter),
  "i": _0x1bd93f
})).sort((_0x4625fa, _0x2ccf64) => ae(_0x4625fa.place) - ae(_0x2ccf64.place) || _0x4625fa.i - _0x2ccf64.i).map(({def: _0x311dab, place: _0x5bc87c}) => ({
  "def": _0x311dab,
  "place": _0x5bc87c
})), Re = K.map((_0x2219e6, _0x1de19) => ({
  "def": _0x2219e6,
  "place": Qs(_0x2219e6.chapter),
  "i": _0x1de19
})).sort((_0x8f025c, _0x478e0a) => ae(_0x8f025c.place) - ae(_0x478e0a.place) || _0x8f025c.i - _0x478e0a.i).map(({def: _0x2cec2e, place: _0x494130}) => ({
  "def": _0x2cec2e,
  "place": _0x494130
})), F0 = (_0x3e3555, _0x28e4b3) => _0x3e3555.stats.enemyKills?.[_0x28e4b3] ?? 0, mr = (_0x3e545d, _0x3674c8) => _0x3e545d.stats.bossKills?.[_0x3674c8] ?? 0;
function U0(_0x3debc6, _0x16077e) {
  if (!_0x16077e) return;
  const _0x42de5f = _0x3debc6.stats.enemyKills ??= {};
  for (const [_0x4eafb5, _0x490674] of Object.entries(_0x16077e)) typeof _0x490674 == "number" && _0x490674 > 0 && Number.isFinite(_0x490674) && (_0x42de5f[_0x4eafb5] = (_0x42de5f[_0x4eafb5] ?? 0) + Math.floor(_0x490674));
}
const Js = [[25, 1], [50, 1], [75, 1], [100, 3]];
function hr(_0x1b7e54) {
  return [Re.filter(_0x562388 => mr(_0x1b7e54, _0x562388.def.id) > 0).length, Re.length];
}
function P0(_0x125297) {
  const _0x28d2db = {
    Hhbti: function (_0x4a6170, _0x5597e3) {
      return _0x4a6170 < _0x5597e3;
    }
  };
  const _0x44bab0 = _0x28d2db, [_0x171904, _0x554b57] = hr(_0x125297), _0x44a66e = _0x125297.codexClaims ??= [], _0x34ebc3 = [];
  for (const [_0x5bcc03, _0x54e1db] of Js) _0x44a66e.includes(_0x5bcc03) || _0x171904 * 100 < _0x5bcc03 * _0x554b57 || (_0x44a66e.push(_0x5bcc03), _0x125297.compass += _0x54e1db, _0x34ebc3.push([_0x5bcc03, _0x54e1db]));
  return _0x34ebc3;
}
function pr(_0x440fda) {
  const _0x52ff40 = {
    Uiahi: "object"
  };
  const _0x1fbff7 = _0x52ff40, _0x1676c0 = _0x440fda.stats.enemyKills, _0x55160c = {};
  if (_0x1676c0 && typeof _0x1676c0 == _0x1fbff7.Uiahi) {
    for (const [_0x181b84, _0x54415a] of Object.entries(_0x1676c0)) typeof _0x54415a == "number" && Number.isFinite(_0x54415a) && _0x54415a > 0 && (_0x55160c[_0x181b84] = Math.floor(_0x54415a));
  }
  _0x440fda.stats.enemyKills = _0x55160c;
  const _0x31e36d = _0x440fda.codexClaims;
  _0x440fda.codexClaims = Array.isArray(_0x31e36d) ? [...new Set(_0x31e36d.filter(_0x19aa2a => Js.some(([_0x1cad08]) => _0x1cad08 === _0x19aa2a)))] : [];
}
const _e = 5;
function ur() {
  return {
    "music": 0.6,
    "sfx": 0.8,
    "shake": 1,
    "dmgNumbers": !0,
    "touch": "auto",
    "bindings": J(F),
    "bindVer": _e
  };
}
function kr() {
  const _0x40a10b = {
    "xqVhJ": function (_0x4930b2) {
      return _0x4930b2();
    },
    "PYZdO": "newbie"
  }, _0xb83936 = {};
  (_0xb83936.lv = 1, _0xb83936.aw = 0, _0xb83936.count = 1);
  const _0x6a8f79 = {};
  _0x6a8f79[pe] = _0xb83936;
  const _0x3c9b89 = {
    rf: 1,
    count: 1
  };
  const _0xb182f = {};
  _0xb182f[ue] = _0x3c9b89;
  const _0x4fdf68 = {
    runs: 0,
    kills: 0,
    clears: 0,
    bestChapter: 0,
    swapHits: 0,
    maxCombo: 0,
    pulls: 0,
    deaths: 0,
    bossKills: {},
    enemyKills: {},
    playTime: 0
  };
  const _0x4142c5 = {
    best: 0,
    claimed: []
  };
  const _0x61de7c = {};
  return (_0x61de7c.chars = [pe, ""], _0x61de7c.weapon = ue, {
    "v": 1,
    "stones": 800,
    "crystals": 500,
    "awShards": 0,
    "compass": 0,
    "chars": _0x6a8f79,
    "weapons": _0xb182f,
    "pity": {
      "char": P(),
      "weapon": P(),
      "pickup": P(),
      "theme": P(),
      "six": P()
    },
    "freePullUsed": !1,
    "upgrades": {},
    "ach": {},
    "stats": _0x4fdf68,
    "curse": 0,
    "curseMax": 0,
    "story": 1,
    "storyMax": 1,
    "book": 1,
    "storySeen": {},
    "storyClear": {},
    "usedCoupons": [],
    "bossRushBest": 0,
    "rushBest": {},
    "endlessBest": {},
    "tower": _0x4142c5,
    "mats": [0, 0, 0, 0],
    "crafted": 0,
    "titles": [_0x40a10b.PYZdO],
    "title": "newbie",
    "curseBest": -1,
    "storyTime": {},
    "rankClaims": {},
    "run": null,
    "loadout": _0x61de7c,
    "pickupIndex": 0,
    "themeIndex": 0,
    "pickupOverride": null,
    "runsSinceRotation": 0,
    "tutorialDone": !1,
    "introSeen": !1,
    "firstClear": {},
    "settings": ur(),
    "newChars": [],
    "codexClaims": [],
    economyVersion: ECONOMY_VERSION,
    appliedSettlements: []
  });
}
function br(_0x2f538d) {
  const _0x3dae1c = {
    SSniS: function (_0x100e87, _0x4eba4) {
      return _0x100e87 != _0x4eba4;
    },
    LalNM: function (_0x2c66f1, _0x48d7b7) {
      return _0x2c66f1 !== _0x48d7b7;
    }
  };
  (_0x3dae1c.javoJ = function (_0x9b7f62, _0x4b7983) {
    return _0x9b7f62 !== _0x4b7983;
  }, _0x3dae1c.CWBEC = function (_0x3848a6, _0xe67593) {
    return _0x3848a6 === _0xe67593;
  });
  const _0x38b4e4 = _0x3dae1c;
  const _0x3c0787 = _0x2f538d;
  return !_0x3c0787 || typeof _0x3c0787.five != "string" || !Array.isArray(_0x3c0787.four) || _0x3c0787.four.length !== 2 || _0x38b4e4.javoJ(T[_0x3c0787.five]?.rarity, 5) || _0x3c0787.four.some(_0x1e53e6 => T[_0x1e53e6]?.rarity !== 4) || _0x38b4e4.CWBEC(_0x3c0787.four[0], _0x3c0787.four[1]) ? null : {
    "five": _0x3c0787.five,
    "four": [_0x3c0787.four[0], _0x3c0787.four[1]]
  };
}
function gr(_0x2da88a, _0x5bf528) {
  const _0xe48af = {
    "ifNrX": function (_0x46f98e, _0xb92538) {
      return _0x46f98e !== _0xb92538;
    },
    "DsMrR": function (_0x55cb02, _0x23adc2) {
      return _0x55cb02 === _0x23adc2;
    },
    "BCtUF": "KeyQ",
    "mkITc": function (_0x16bf58, _0x659bc3) {
      return _0x16bf58(_0x659bc3);
    },
    "XDThj": "KeyV"
  };
  if (!_0x5bf528 || _0x2da88a !== _e && _0x2da88a !== 2 && _0x2da88a !== 3 && _0x2da88a !== 4) return J(F);
  const _0xc423cb = J(_0x5bf528);
  if ((_0x2da88a === 2 && _0xc423cb.dash.keys.length === 1 && _0xc423cb.dash.keys[0] === _0xe48af.BCtUF && (_0xc423cb.dash.keys = [...F.dash.keys]), (_0x2da88a ?? 0) < 4 && _0xc423cb.skill2.keys.length === 1 && _0xc423cb.skill2.keys[0] === "KeyR")) {
    for (const _0x372b1e of Object.keys(_0xc423cb)) _0xc423cb[_0x372b1e].keys = _0xc423cb[_0x372b1e].keys.filter(_0x2df3d7 => _0x2df3d7 !== "KeyQ");
    _0xc423cb.skill2.keys = ["KeyQ"];
  }
  if ((_0x2da88a ?? 0) < 5) {
    const _0x33c71e = _0x58aceb => Object.keys(_0xc423cb).some(_0x566b18 => _0x566b18 !== "ult" && _0xc423cb[_0x566b18].keys.includes(_0x58aceb));
    _0xc423cb.ult.keys = _0x33c71e("KeyX") ? _0x33c71e(_0xe48af.XDThj) ? [] : [_0xe48af.XDThj] : ["KeyX"];
  }
  return _0xc423cb;
}
function z0(_0x4610df) {
  const _0x2954a7 = {
    "gwohm": "object",
    "SlERq": function (_0x2c7976, _0xae56e9) {
      return _0x2c7976(_0xae56e9);
    },
    "KZFza": "newbie",
    "aPxtJ": function (_0x24b172, _0x1aa6e1) {
      return _0x24b172 === _0x1aa6e1;
    },
    "wcbnq": "string",
    "VnSOM": "number",
    "jFejA": function (_0x37d641, _0x18b00a) {
      return _0x37d641 == _0x18b00a;
    },
    "yGHpN": "stones",
    "hNTdp": "story",
    "Qkmpe": "storyMax",
    "hVgbg": "book",
    "dkPHQ": function (_0x368204, _0x39e288, _0x3b9f19) {
      return _0x368204(_0x39e288, _0x3b9f19);
    }
  }, _0x190aac = kr();
  if (!_0x4610df || typeof _0x4610df != _0x2954a7.gwohm) return _0x190aac;
  const _0x2f3d58 = _0x4610df, _0x54510e = {
    ..._0x190aac,
    ..._0x2f3d58,
    "v": 1,
    "pity": {
      ..._0x190aac.pity,
      ..._0x2f3d58.pity ?? ({})
    },
    "stats": {
      ..._0x190aac.stats,
      ..._0x2f3d58.stats ?? ({}),
      "bossKills": {
        ..._0x2f3d58.stats?.bossKills ?? ({})
      }
    },
    "settings": {
      ..._0x190aac.settings,
      ..._0x2f3d58.settings ?? ({}),
      "bindVer": _e,
      "bindings": gr(_0x2f3d58.settings?.bindVer, _0x2f3d58.settings?.bindings)
    },
    "chars": {
      ..._0x190aac.chars,
      ..._0x2f3d58.chars ?? ({})
    },
    "weapons": {
      ..._0x190aac.weapons,
      ..._0x2f3d58.weapons ?? ({})
    },
    "loadout": _0x2f3d58.loadout && Array.isArray(_0x2f3d58.loadout.chars) ? {
      "chars": [_0x2f3d58.loadout.chars[0] ?? pe, _0x2f3d58.loadout.chars[1] ?? ""],
      "weapon": _0x2f3d58.loadout.weapon ?? ue
    } : _0x190aac.loadout,
    "newChars": Array.isArray(_0x2f3d58.newChars) ? _0x2f3d58.newChars : [],
    "storySeen": {
      ..._0x2f3d58.storySeen ?? ({})
    },
    "storyClear": {
      ..._0x2f3d58.storyClear ?? ({})
    },
    "usedCoupons": Array.isArray(_0x2f3d58.usedCoupons) ? _0x2f3d58.usedCoupons.filter(_0x5f2e5b => typeof _0x5f2e5b == "string") : [],
    "bossRushBest": typeof _0x2f3d58.bossRushBest == "number" ? _0x2f3d58.bossRushBest : 0,
    "rushBest": _0x2f3d58.rushBest && typeof _0x2f3d58.rushBest == _0x2954a7.gwohm ? me(_0x2f3d58.rushBest) : me({
      1: _0x2f3d58.bossRushBest
    }),
    "endlessBest": me(_0x2f3d58.endlessBest),
    "tower": Ka(_0x2f3d58.tower),
    "mats": [0, 1, 2, 3].map(_0x5187fc => Array.isArray(_0x2f3d58.mats) && typeof _0x2f3d58.mats[_0x5187fc] == "number" && Number.isFinite(_0x2f3d58.mats[_0x5187fc]) ? Math.max(0, Math.floor(_0x2f3d58.mats[_0x5187fc])) : 0),
    "crafted": typeof _0x2f3d58.crafted == "number" && Number.isFinite(_0x2f3d58.crafted) ? Math.max(0, Math.floor(_0x2f3d58.crafted)) : 0,
    "titles": Array.isArray(_0x2f3d58.titles) ? [...new Set(["newbie", ..._0x2f3d58.titles.filter(_0x3e8c21 => typeof _0x3e8c21 == "string")])] : [_0x2954a7.KZFza],
    "title": typeof _0x2f3d58.title == "string" ? _0x2f3d58.title : _0x2954a7.KZFza,
    "dbg": _0x2f3d58.dbg === !0 ? !0 : void 0,
    "seal": typeof _0x2f3d58.seal == _0x2954a7.wcbnq ? _0x2f3d58.seal : void 0,
    "taint": typeof _0x2f3d58.taint == _0x2954a7.VnSOM && _0x2f3d58.taint > 0 ? Math.floor(_0x2f3d58.taint) : void 0,
    "resetN": typeof _0x2f3d58.resetN == "number" && _0x2f3d58.resetN > 0 ? Math.floor(_0x2f3d58.resetN) : void 0,
    "sanctionN": typeof _0x2f3d58.sanctionN == "number" && Number.isFinite(_0x2f3d58.sanctionN) ? _0x2f3d58.sanctionN : void 0,
    "rankBan": _0x2f3d58.rankBan === !0 ? !0 : void 0,
    ...at(_0x2f3d58),
    "run": _0x2f3d58.run?.data?.tower ? null : Ya(_0x2f3d58.run),
    "eightUnlocked": _0x2f3d58.eightUnlocked === true,
    "pickupOverride": br(_0x2f3d58.pickupOverride)
  };
  for (const _0x50d74a of [_0x2954a7.yGHpN, "crystals", "awShards", "compass", "curse", "curseMax", "pickupIndex", "themeIndex", "runsSinceRotation", _0x2954a7.hNTdp, _0x2954a7.Qkmpe, _0x2954a7.hVgbg]) (typeof _0x54510e[_0x50d74a] != "number" || !Number.isFinite(_0x54510e[_0x50d74a])) && (_0x54510e[_0x50d74a] = _0x190aac[_0x50d74a]);
  return (_0x54510e.storyMax = Math.max(1, Math.min(E.length, Math.floor(_0x54510e.storyMax))), _0x54510e.story = Math.max(1, Math.min(_0x54510e.storyMax, Math.floor(_0x54510e.story))), va(_0x54510e, Math.floor(_0x54510e.book)) || (_0x54510e.book = 1), bt(_0x54510e), pr(_0x54510e), _0x54510e);
}
function L0(level) {
  return heroLevelCost(level);
}
const _0xf3d234 = {
  apiKey: globalThis.CONTRACT_CONFIG?.firebase?.apiKey ?? "",
  projectId: globalThis.CONTRACT_CONFIG?.firebase?.projectId ?? ""
};
const G0 = 20, wr = 5, yr = 5, N0 = _0xf3d234;
function vr() {
  try {
    return globalThis.localStorage?.getItem("pact_force_local") === "1";
  } catch {
    return !1;
  }
}
const definition_newbie = {
  no: 1,
  id: "newbie",
  name: "계약자",
  col: "#c8c0d8",
  desc: "처음부터 가진 칭호",
  cond: () => !0
};
const K0 = () => !!N0.apiKey && !!N0.projectId && !vr(), Te = _0x2ee6de => Object.values(_0x2ee6de.stats.bossKills).reduce((_0x5ef1c9, _0x19fb55) => _0x5ef1c9 + _0x19fb55, 0), xr = _0x29deeb => Object.keys(_0x29deeb.ach).length, Ae = _0x3d4c49 => Math.max(0, ...Object.values(_0x3d4c49.weapons).map(_0x48780a => _0x48780a.en ?? 0)), _r = _0x4c0bc6 => Math.max(0, ...Object.values(_0x4c0bc6.chars).flatMap(_0x140e83 => _0x140e83.sk ?? [0])), Oe = (_0x325555, _0x20bd3d) => Object.entries(_0x325555.chars).some(([_0x55f73e, _0x42e37c]) => _0x42e37c.aw >= 5 && (T[_0x55f73e]?.rarity ?? 0) >= _0x20bd3d), ce = [definition_newbie, ...B.map((_0x40f07f, _0x581556) => ({
  "no": 2 + _0x581556,
  "id": "book" + _0x40f07f.id,
  "name": ["첫 권을 덮은 자", "두 번째 장서가", "잉크를 말린 자", "백지를 채운 자"][_0x581556] ?? _0x40f07f.name + "의 독자",
  "col": ["#e0c890", "#a0c8ff", "#c090ff", "#ffffff"][_0x581556] ?? "#e0d0ff",
  "desc": _0x40f07f.name + "의 마지막 스토리 완수",
  "cond": _0x2abac3 => _0x2abac3.storyMax > _0x40f07f.stories[_0x40f07f.stories.length - 1] || !!_0x2abac3.storyClear[_0x40f07f.stories[_0x40f07f.stories.length - 1]]
})), {
  "no": 10,
  "id": "tower10",
  "name": "탑의 순례자",
  "col": "#ffd080",
  "desc": "사자의 탑 10층 돌파",
  "cond": _0x3803ff => _0x3803ff.tower.best >= 10
}, {
  "no": 11,
  "id": "tower50",
  "name": "탑의 중턱",
  "col": "#ffb040",
  "desc": "사자의 탑 50층 돌파",
  "cond": _0x3819e4 => _0x3819e4.tower.best >= 50
}, {
  "no": 12,
  "id": "tower100",
  "name": "탑의 정복자",
  "col": "#ff8020",
  "desc": "사자의 탑 100층 돌파",
  "cond": _0x8e3664 => _0x8e3664.tower.best >= 100
}, {
  "no": 13,
  "id": "boss100",
  "name": "보스 사냥꾼",
  "col": "#ff7080",
  "desc": "보스 누적 처치 100",
  "cond": _0xd635c2 => Te(_0xd635c2) >= 100
}, {
  "no": 14,
  "id": "boss500",
  "name": "왕들의 처형인",
  "col": "#ff3050",
  "desc": "보스 누적 처치 500",
  "cond": _0x1f953e => Te(_0x1f953e) >= 500
}, {
  "no": 15,
  "id": "kill10k",
  "name": "사자의 군주",
  "col": "#b080ff",
  "desc": "누적 처치 10,000",
  "cond": _0x38d632 => _0x38d632.stats.kills >= 10000
}, {
  "no": 16,
  "id": "curse5",
  "name": "저주를 즐기는 자",
  "col": "#ff80a0",
  "desc": "저주 5단계 해금",
  "cond": _0x811912 => _0x811912.curseMax >= 5
}, {
  "no": 17,
  "id": "curseMax",
  "name": "저주의 끝",
  "col": "#ff4080",
  "desc": "저주 최고 단계 해금",
  "cond": _0x5d4700 => _0x5d4700.curseMax >= ee.length - 1
}, {
  "no": 18,
  "id": "collector",
  "name": "영웅 수집가",
  "col": "#80e0ff",
  "desc": "영웅 30명 보유",
  "cond": _0x36fa0d => Object.keys(_0x36fa0d.chars).length >= 30
}, {
  "no": 19,
  "id": "smith",
  "name": "대장장이",
  "col": "#ffb060",
  "desc": "무기 강화 +30 달성",
  "cond": _0x14ff5a => Ae(_0x14ff5a) >= 30
}, {
  "no": 20,
  "id": "smith50",
  "name": "전설의 대장장이",
  "col": "#ff9020",
  "desc": "무기 강화 +50 달성",
  "cond": _0x1ef59f => Ae(_0x1ef59f) >= 50
}, {
  "no": 21,
  "id": "master",
  "name": "숙련의 대가",
  "col": "#40d0e0",
  "desc": "스킬 숙련 50단계 달성",
  "cond": _0x2f123f => _r(_0x2f123f) >= 50
}, {
  "no": 22,
  "id": "aw6",
  "name": "각성한 별",
  "col": "#ff9ad8",
  "desc": "★6 영웅 각성 5단계",
  "cond": _0xfddb6b => Oe(_0xfddb6b, 6)
}, {
  "no": 23,
  "id": "aw7",
  "name": "별 너머의 계약자",
  "col": "#ff60c0",
  "desc": "★7 영웅 각성 5단계",
  "cond": _0x26422c => Oe(_0x26422c, 7)
}, {
  "no": 24,
  "id": "ach30",
  "name": "업적 사냥꾼",
  "col": "#ffe080",
  "desc": "업적 30개 달성",
  "cond": _0x3c41a0 => xr(_0x3c41a0) >= 30
}, {
  "no": 25,
  "id": "crafter",
  "name": "제작의 손",
  "col": "#e0a060",
  "desc": "무기 제작소에서 무기 5번 제작",
  "cond": _0x372957 => (_0x372957.crafted ?? 0) >= 5
}, {
  "no": 26,
  "id": "rich",
  "name": "결정 부자",
  "col": "#a0f0ff",
  "desc": "영혼 결정 100만 보유",
  "cond": _0x5b92fa => _0x5b92fa.crystals >= 1000000
}], Sr = Object.fromEntries(ce.map(_0x3af6b0 => [_0x3af6b0.id, _0x3af6b0])), I0 = Object.fromEntries(ce.map(_0x19713e => [_0x19713e.no, _0x19713e]));
function $0(_0x4b1731) {
  const _0x312112 = [];
  for (const _0x2deaf1 of ce) _0x4b1731.titles.includes(_0x2deaf1.id) || _0x2deaf1.cond(_0x4b1731) && (_0x4b1731.titles.push(_0x2deaf1.id), _0x312112.push(_0x2deaf1));
  return _0x312112;
}
function V0(_0x2c5546) {
  const _0x133d66 = Sr[_0x2c5546.title];
  return _0x133d66 && (te.all || _0x2c5546.titles.includes(_0x133d66.id)) ? _0x133d66 : ce[0];
}
const jr = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
function Dr(_0x13999c) {
  const _0x5de4c3 = {
    vhgwr: function (_0x4991f7, _0x210a4e) {
      return _0x4991f7 << _0x210a4e;
    },
    zkDJB: function (_0x357a4a, _0xc8439d) {
      return _0x357a4a >> _0xc8439d;
    }
  };
  (_0x5de4c3.vNKMu = function (_0x5e2cac, _0x4d3b6c) {
    return _0x5e2cac + _0x4d3b6c;
  }, _0x5de4c3.AJrcm = function (_0x3908a9, _0x4838a4) {
    return _0x3908a9 - _0x4838a4;
  }, _0x5de4c3.HGqaB = function (_0x180551, _0x3a9028) {
    return _0x180551 >>> _0x3a9028;
  }, _0x5de4c3.CEOfn = function (_0x34cace, _0xe86249) {
    return _0x34cace * _0xe86249;
  }, _0x5de4c3.BxNNb = function (_0x1d4e9b, _0x24b595) {
    return _0x1d4e9b < _0x24b595;
  }, _0x5de4c3.rMsLB = function (_0x14f27e, _0x17e7ee) {
    return _0x14f27e < _0x17e7ee;
  }, _0x5de4c3.zODId = function (_0x13a862, _0x23dd76) {
    return _0x13a862 - _0x23dd76;
  }, _0x5de4c3.CLdVJ = function (_0x2fe44e, _0x19f374) {
    return _0x2fe44e ^ _0x19f374;
  });
  (_0x5de4c3.gNaBg = function (_0x33b14d, _0x3b97c5) {
    return _0x33b14d >>> _0x3b97c5;
  }, _0x5de4c3.EYjUe = function (_0x124df6, _0x20d389) {
    return _0x124df6 ^ _0x20d389;
  }, _0x5de4c3.pZFBi = function (_0x44d512, _0x58322d) {
    return _0x44d512 & _0x58322d;
  }, _0x5de4c3.UwfzP = function (_0x77ab55, _0x41369a) {
    return _0x77ab55 >>> _0x41369a;
  });
  const _0x2fb5bb = _0x5de4c3, _0x4b6037 = new TextEncoder().encode(_0x13999c), _0x1a8733 = _0x4b6037.length, _0x3a6610 = _0x2fb5bb.vNKMu(_0x1a8733 + 9, 63) >> 6 << 6, _0x40df5b = new Uint8Array(_0x3a6610);
  (_0x40df5b.set(_0x4b6037), _0x40df5b[_0x1a8733] = 128);
  const _0x3a5f28 = new DataView(_0x40df5b.buffer);
  (_0x3a5f28.setUint32(_0x3a6610 - 8, Math.floor(_0x1a8733 * 8 / 4294967296)), _0x3a5f28.setUint32(_0x2fb5bb.AJrcm(_0x3a6610, 4), _0x2fb5bb.HGqaB(_0x2fb5bb.CEOfn(_0x1a8733, 8), 0)));
  const _0x203cbf = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), _0x3b54bb = new Uint32Array(64), _0x2e61a4 = (_0xf50754, _0x4ab7cd) => _0xf50754 >>> _0x4ab7cd | _0xf50754 << 32 - _0x4ab7cd;
  for (let _0x5aa8b1 = 0; _0x2fb5bb.BxNNb(_0x5aa8b1, _0x3a6610); _0x5aa8b1 += 64) {
    for (let _0x19364c = 0; _0x2fb5bb.BxNNb(_0x19364c, 16); _0x19364c++) _0x3b54bb[_0x19364c] = _0x3a5f28.getUint32(_0x2fb5bb.vNKMu(_0x5aa8b1, _0x19364c * 4));
    for (let _0x34ab3c = 16; _0x2fb5bb.rMsLB(_0x34ab3c, 64); _0x34ab3c++) {
      const _0x25af0e = _0x2e61a4(_0x3b54bb[_0x34ab3c - 15], 7) ^ _0x2e61a4(_0x3b54bb[_0x34ab3c - 15], 18) ^ _0x3b54bb[_0x2fb5bb.zODId(_0x34ab3c, 15)] >>> 3, _0x141aab = _0x2fb5bb.CLdVJ(_0x2fb5bb.CLdVJ(_0x2e61a4(_0x3b54bb[_0x34ab3c - 2], 17), _0x2e61a4(_0x3b54bb[_0x34ab3c - 2], 19)), _0x2fb5bb.gNaBg(_0x3b54bb[_0x34ab3c - 2], 10));
      _0x3b54bb[_0x34ab3c] = _0x2fb5bb.HGqaB(_0x3b54bb[_0x34ab3c - 16] + _0x25af0e + _0x3b54bb[_0x34ab3c - 7] + _0x141aab, 0);
    }
    let [_0x35f8ac, _0x56315e, _0x418df1, _0x5a1321, _0x4d1b50, _0x3c8e35, _0xf054ec, _0x3fd6b7] = _0x203cbf;
    for (let _0x24dc0d = 0; _0x24dc0d < 64; _0x24dc0d++) {
      const _0x47f4a1 = _0x2fb5bb.HGqaB(_0x3fd6b7 + (_0x2e61a4(_0x4d1b50, 6) ^ _0x2e61a4(_0x4d1b50, 11) ^ _0x2e61a4(_0x4d1b50, 25)) + (_0x4d1b50 & _0x3c8e35 ^ ~_0x4d1b50 & _0xf054ec) + jr[_0x24dc0d] + _0x3b54bb[_0x24dc0d], 0), _0x7de34d = (_0x2fb5bb.CLdVJ(_0x2e61a4(_0x35f8ac, 2), _0x2e61a4(_0x35f8ac, 13)) ^ _0x2e61a4(_0x35f8ac, 22)) + (_0x2fb5bb.EYjUe(_0x35f8ac & _0x56315e, _0x2fb5bb.pZFBi(_0x35f8ac, _0x418df1)) ^ _0x56315e & _0x418df1) >>> 0;
      (_0x3fd6b7 = _0xf054ec, _0xf054ec = _0x3c8e35, _0x3c8e35 = _0x4d1b50, _0x4d1b50 = _0x2fb5bb.HGqaB(_0x5a1321 + _0x47f4a1, 0), _0x5a1321 = _0x418df1, _0x418df1 = _0x56315e, _0x56315e = _0x35f8ac, _0x35f8ac = _0x2fb5bb.UwfzP(_0x2fb5bb.vNKMu(_0x47f4a1, _0x7de34d), 0));
    }
    (_0x203cbf[0] += _0x35f8ac, _0x203cbf[1] += _0x56315e, _0x203cbf[2] += _0x418df1, _0x203cbf[3] += _0x5a1321, _0x203cbf[4] += _0x4d1b50, _0x203cbf[5] += _0x3c8e35, _0x203cbf[6] += _0xf054ec, _0x203cbf[7] += _0x3fd6b7);
  }
  return [..._0x203cbf].map(_0x442c8f => _0x442c8f.toString(16).padStart(8, "0")).join("");
}
const _0x3044db = {
  k: "status",
  s: "burn"
};
const _0x3d7ced = {
  on: "hit",
  chance: 0.15,
  do: [_0x3044db]
};
const _0x290eee = {
  n: 2,
  desc: "공격 시 15% 확률로 화상",
  effects: [_0x3d7ced]
};
const _0x2160c4 = {
  burnSpread: 1.2
};
const _0x59a608 = {
  flags: _0x2160c4
};
const _0x1d59f8 = {
  n: 4,
  desc: "화상 대상 처치 시 폭발 (공격력 120%)",
  effects: [_0x59a608]
};
const _0x1c4750 = {
  dotDmg: 1
};
const _0x47cbaf = {
  burnMax: 3
};
const _0x378107 = {
  stats: _0x1c4750,
  flags: _0x47cbaf
};
const _0x39723b = {
  n: 6,
  desc: "화상 피해 +100%, 화상 최대 중첩 +3",
  effects: [_0x378107]
};
const definition_flame = {
  id: "flame",
  name: "화염",
  col: "#ff7a2a",
  icon: "flame",
  tiers: [_0x290eee, _0x1d59f8, _0x39723b]
};
const _0x1a4772 = {
  k: "status",
  s: "bleed",
  n: 2
};
const _0x42e9f0 = {
  on: "crit",
  do: [_0x1a4772]
};
const _0x4a383b = {
  n: 2,
  desc: "치명타 시 출혈 2중첩",
  effects: [_0x42e9f0]
};
const _0x2e5321 = {
  vsBleed: 0.25
};
const _0x2eafa6 = {
  stats: _0x2e5321
};
const _0x97d2ce = {
  n: 4,
  desc: "출혈 대상에게 주는 피해 +25%",
  effects: [_0x2eafa6]
};
const _0x568a61 = {
  bleedRupture: 1.5
};
const _0x46100f = {
  lifesteal: 0.03
};
const _0x14529a = {
  flags: _0x568a61,
  stats: _0x46100f
};
const _0xa272ad = {
  n: 6,
  desc: "출혈 5중첩 시 파열 (공격력 150%) · 흡혈 3%",
  effects: [_0x14529a]
};
const definition_blood = {
  id: "blood",
  name: "출혈",
  col: "#d8203a",
  icon: "drop",
  tiers: [_0x4a383b, _0x97d2ce, _0xa272ad]
};
const _0x345e89 = {
  k: "chain",
  n: 3,
  m: 0.5
};
const _0x59f428 = {
  on: "hit",
  chance: 0.1,
  icd: 0.3,
  do: [_0x345e89]
};
const _0x42b567 = {
  n: 2,
  desc: "공격 시 10% 확률로 연쇄 번개 (3대상)",
  effects: [_0x59f428]
};
const _0x513748 = {
  vsShock: 0.3
};
const _0x2737ab = {
  shockSpread: 1
};
const _0x4c5771 = {
  stats: _0x513748,
  flags: _0x2737ab
};
const _0x166422 = {
  n: 4,
  desc: "감전 대상에게 주는 피해 +30%, 감전이 주변으로 번짐",
  effects: [_0x4c5771]
};
const _0x15a6bf = {
  k: "strike",
  m: 2.5,
  el: "thunder"
};
const _0x757aeb = {
  on: "finisher",
  do: [_0x15a6bf]
};
const _0x2ffe55 = {
  n: 6,
  desc: "콤보 마지막 타격 시 낙뢰 (공격력 250%)",
  effects: [_0x757aeb]
};
const definition_storm = {
  id: "storm",
  name: "번개",
  col: "#7fd8ff",
  icon: "bolt",
  tiers: [_0x42b567, _0x166422, _0x2ffe55]
};
const _0x592346 = {
  crit: 0.2
};
const definition_shadow2 = {
  k: "buff",
  id: "shadow2",
  stats: _0x592346,
  dur: 2
};
const _0xb9b705 = {
  on: "dash",
  do: [definition_shadow2]
};
const _0x4557a7 = {
  n: 2,
  desc: "대시 후 2초간 치명타 확률 +20%",
  effects: [_0xb9b705]
};
const _0x101960 = {
  dashThrough: 0.8
};
const _0x2656d3 = {
  flags: _0x101960
};
const _0x3574f3 = {
  n: 4,
  desc: "대시로 통과한 적에게 공격력 80% 피해",
  effects: [_0x2656d3]
};
const _0x2e7f73 = {
  k: "echo",
  m: 1.5
};
const _0xdf4e42 = {
  on: "kill",
  icd: 0.4,
  do: [_0x2e7f73]
};
const _0x5eb892 = {
  n: 6,
  desc: "처치 시 그림자 분신이 주변 적을 벤다 (공격력 150%)",
  effects: [_0xdf4e42]
};
const definition_shadow = {
  id: "shadow",
  name: "그림자",
  col: "#9a6bff",
  icon: "eye",
  tiers: [_0x4557a7, _0x3574f3, _0x5eb892]
};
const _0x400df4 = {
  k: "shield",
  v: 0.12
};
const _0x143e7a = {
  on: "roomStart",
  do: [_0x400df4]
};
const _0xff57c = {
  n: 2,
  desc: "방 입장 시 최대 체력 12% 보호막",
  effects: [_0x143e7a]
};
const _0x183624 = {
  allDmg: 0.2
};
const _0x2d6619 = {
  cond: "shielded",
  stats: _0x183624
};
const _0x14dc02 = {
  dmgTaken: -0.1
};
const _0x15ea5c = {
  stats: _0x14dc02
};
const _0x3f8b68 = {
  n: 4,
  desc: "보호막이 있을 때 주는 피해 +20%, 받는 피해 -10%",
  effects: [_0x2d6619, _0x15ea5c]
};
const _0x383992 = {
  hurtWave: 2
};
const _0x51b8fb = {
  flags: _0x383992
};
const _0x3afbab = {
  k: "shield",
  v: 0.06
};
const _0x139b7d = {
  on: "interval",
  every: 8,
  do: [_0x3afbab]
};
const _0xd6ca50 = {
  n: 6,
  desc: "피격 시 반격 파동 (공격력 200%) · 8초마다 보호막 6%",
  effects: [_0x51b8fb, _0x139b7d]
};
const definition_ward_52303c = {
  id: "ward",
  name: "수호",
  col: "#ffd76a",
  icon: "shield",
  tiers: [_0xff57c, _0x3f8b68, _0xd6ca50]
};
const _0x4ec036 = {
  atk: 0.1
};
const _0x2c111d = {
  stats: _0x4ec036
};
const _0x4916fa = {
  n: 2,
  desc: "공격력 +10%",
  effects: [_0x2c111d]
};
const _0x4335e9 = {
  atk: 0.3,
  aspd: 0.15
};
const _0x4058fb = {
  cond: "lowHp",
  stats: _0x4335e9
};
const _0x37e123 = {
  n: 4,
  desc: "체력 50% 이하일 때 공격력 +30%, 공격 속도 +15%",
  effects: [_0x4058fb]
};
const _0xc4474c = {
  aspd: 0.06,
  atk: 0.04
};
const upgrade_fury6 = {
  k: "buff",
  id: "fury6",
  stats: _0xc4474c,
  dur: 5,
  max: 5
};
const _0x3990f7 = {
  on: "kill",
  do: [upgrade_fury6]
};
const _0x40c9ed = {
  n: 6,
  desc: "처치 시 공격 속도 +6% (최대 5중첩, 5초)",
  effects: [_0x3990f7]
};
const definition_fury = {
  id: "fury",
  name: "광폭",
  col: "#ff4b2a",
  icon: "fang",
  tiers: [_0x4916fa, _0x37e123, _0x40c9ed]
};
const _0x15f003 = {
  mspd: 0.1,
  dashCdr: 0.2
};
const _0x3ce2f9 = {
  stats: _0x15f003
};
const _0x179aab = {
  n: 2,
  desc: "이동 속도 +10%, 대시 쿨타임 -20%",
  effects: [_0x3ce2f9]
};
const _0x34de6a = {
  swapCdr: 0.3
};
const _0x28b260 = {
  stats: _0x34de6a
};
const _0x2b7a1c = {
  n: 4,
  desc: "교대 쿨타임 -30%",
  effects: [_0x28b260]
};
const _0x45ff66 = {
  swapDmg: 1
};
const _0x1ca471 = {
  swapInvuln: 0.8
};
const _0x34bdd0 = {
  stats: _0x45ff66,
  flags: _0x1ca471
};
const _0x29478e = {
  n: 6,
  desc: "교대 공격 피해 +100%, 교대 시 0.8초 무적",
  effects: [_0x34bdd0]
};
const definition_swift = {
  id: "swift",
  name: "신속",
  col: "#6dffb0",
  icon: "wing",
  tiers: [_0x179aab, _0x2b7a1c, _0x29478e]
};
const _0x8b4c44 = {
  cdr: 0.15
};
const _0xde4d4 = {
  stats: _0x8b4c44
};
const _0x99044c = {
  n: 2,
  desc: "스킬 쿨타임 -15%",
  effects: [_0xde4d4]
};
const _0x232220 = {
  spr: "soul",
  spd: 4,
  life: 90,
  w: 8,
  h: 8,
  home: 0.25,
  col: "#9ef0ff",
  el: "holy"
};
const _0x2bc942 = {
  k: "proj",
  p: _0x232220,
  m: 0.6,
  n: 3
};
const _0x5276d5 = {
  on: "skill",
  do: [_0x2bc942]
};
const _0x1108ee = {
  n: 4,
  desc: "스킬 사용 시 영혼탄 3발 발사 (공격력 60%)",
  effects: [_0x5276d5]
};
const _0x4a6693 = {
  k: "cdr",
  v: 1
};
const _0x2d04d1 = {
  on: "kill",
  do: [_0x4a6693]
};
const _0x406f91 = {
  skillDmg: 0.25
};
const _0x2582e6 = {
  stats: _0x406f91
};
const _0x2dce91 = {
  n: 6,
  desc: "처치 시 스킬 쿨타임 1초 감소, 스킬 피해 +25%",
  effects: [_0x2d04d1, _0x2582e6]
};
const definition_soul = {
  id: "soul",
  name: "영혼",
  col: "#9ef0ff",
  icon: "soul",
  tiers: [_0x99044c, _0x1108ee, _0x2dce91]
};
const _0x5e6a1d = {
  k: "status",
  s: "poison"
};
const _0x47e855 = {
  on: "hit",
  chance: 0.2,
  do: [_0x5e6a1d]
};
const _0x40a5ee = {
  n: 2,
  desc: "공격 시 20% 확률로 독",
  effects: [_0x47e855]
};
const _0x175154 = {
  poisonMax: 5
};
const _0x571177 = {
  dotDmg: 0.5
};
const _0x16673e = {
  flags: _0x175154,
  stats: _0x571177
};
const _0xbfb5aa = {
  n: 4,
  desc: "독 최대 중첩 +5, 독 피해 +50%",
  effects: [_0x16673e]
};
const _0x40dc67 = {
  poisonCloud: 1
};
const _0x715a18 = {
  flags: _0x40dc67
};
const _0x1a34c3 = {
  n: 6,
  desc: "독 대상 처치 시 독구름 생성",
  effects: [_0x715a18]
};
const definition_venom = {
  id: "venom",
  name: "맹독",
  col: "#8bdc3a",
  icon: "skull",
  tiers: [_0x40a5ee, _0xbfb5aa, _0x1a34c3]
};
const _0x1607ec = {
  k: "status",
  s: "chill"
};
const _0x425244 = {
  on: "hit",
  chance: 0.12,
  do: [_0x1607ec]
};
const _0x1a73bc = {
  n: 2,
  desc: "공격 시 12% 확률로 냉기 (5중첩 시 빙결)",
  effects: [_0x425244]
};
const _0x2ecb2e = {
  vsFrozen: 0.35
};
const _0x24c1f0 = {
  stats: _0x2ecb2e
};
const _0x26fa26 = {
  n: 4,
  desc: "빙결 대상에게 주는 피해 +35%",
  effects: [_0x24c1f0]
};
const _0xb3c335 = {
  freezeShatter: 2.5
};
const _0x18284b = {
  flags: _0xb3c335
};
const _0x2ef438 = {
  n: 6,
  desc: "빙결 해제 시 얼음 폭발 (공격력 250%)",
  effects: [_0x18284b]
};
const definition_frost_3853db = {
  id: "frost",
  name: "서리",
  col: "#a8e4ff",
  icon: "snow",
  tiers: [_0x1a73bc, _0x26fa26, _0x2ef438]
};
const _0x2c5d4a = {
  allDmg: 0.08
};
const _0x135172 = {
  stats: _0x2c5d4a
};
const _0x1b243e = {
  atk: 0.15
};
const definition_cb_sun = {
  k: "buff",
  id: "cb_sun",
  stats: _0x1b243e,
  dur: 3
};
const _0x166fbf = {
  on: "swap",
  do: [definition_cb_sun]
};
const relic_fallen_sun = {
  id: "fallen_sun",
  name: "타락한 성역과 태양",
  col: "#ffd060",
  heroes: ["luciel", "aurel"],
  desc: "모든 피해 +8%. 교대 후 3초간 공격력 +15%",
  effects: [_0x135172, _0x166fbf]
};
const _0x4a4fa7 = {
  cdr: 0.1
};
const _0x163a17 = {
  stats: _0x4a4fa7
};
const _0x57c70f = {
  k: "cdr",
  v: 1
};
const _0x1cf6dd = {
  on: "swap",
  do: [_0x57c70f]
};
const relic_star_voyage = {
  id: "star_voyage",
  name: "별의 항해",
  col: "#9ec8ff",
  heroes: ["caelus", "lucas"],
  desc: "스킬 쿨타임 -10%. 교대할 때 스킬 쿨타임 1초 감소",
  effects: [_0x163a17, _0x1cf6dd]
};
const _0x68792 = {
  dmgTaken: -0.08,
  swapDmg: 0.3
};
const _0x21d61b = {
  stats: _0x68792
};
const relic_star_border = {
  id: "star_border",
  name: "별의 경계",
  col: "#c0b0ff",
  heroes: ["astral", "caelus"],
  desc: "받는 피해 -8%, 교대 공격 피해 +30%",
  effects: [_0x21d61b]
};
const _0x50e12a = {
  k: "shield",
  v: 0.08
};
const _0x350656 = {
  on: "roomStart",
  do: [_0x50e12a]
};
const _0x50c0de = {
  skillDmg: 0.12
};
const _0xb2fd9c = {
  stats: _0x50c0de
};
const relic_prophecy = {
  id: "prophecy",
  name: "계승과 예언",
  col: "#a0e0ff",
  heroes: ["solen", "vega"],
  desc: "방 입장 시 보호막 (최대 체력 8%), 스킬 피해 +12%",
  effects: [_0x350656, _0xb2fd9c]
};
const _0x18d203 = {
  crit: 0.08,
  critDmg: 0.2
};
const _0x223159 = {
  stats: _0x18d203
};
const relic_white_black = {
  id: "white_black",
  name: "백야와 흑월",
  col: "#e0e0ff",
  heroes: ["baekya", "heukwol"],
  desc: "치명타 확률 +8%, 치명타 피해 +20%",
  effects: [_0x223159]
};
const _0x7a4193 = {
  vsBurn: 0.2,
  dotDmg: 0.3
};
const _0x1474ab = {
  stats: _0x7a4193
};
const relic_cinder_wing = {
  id: "cinder_wing",
  name: "잿불과 불사조",
  col: "#ff8040",
  heroes: ["ashen", "ignia"],
  desc: "화상 대상 피해 +20%, 지속 피해 +30%",
  effects: [_0x1474ab]
};
const _0xe3faaf = {
  gold: 0.25,
  dmgTaken: -0.06
};
const _0xf25653 = {
  stats: _0xe3faaf
};
const relic_namesakes = {
  id: "namesakes",
  name: "이름이 닮은 둘",
  col: "#ffe080",
  heroes: ["gambler", "jax"],
  desc: "금화 획득 +25%, 받는 피해 -6%",
  effects: [_0xf25653]
};
const _0x3651e1 = {
  aspd: 0.08,
  mspd: 0.08
};
const _0x33859f = {
  stats: _0x3651e1
};
const relic_wind_star = {
  id: "wind_star",
  name: "바람과 별의 화살",
  col: "#80ffc0",
  heroes: ["hanbyeol", "arien"],
  desc: "공격 속도 +8%, 이동 속도 +8%",
  effects: [_0x33859f]
};
const _0x35d3c1 = {
  dashCdr: 0.2
};
const _0x5d9063 = {
  swapInvuln: 0.5
};
const _0x338cdd = {
  stats: _0x35d3c1,
  flags: _0x5d9063
};
const relic_abyss_dance = {
  id: "abyss_dance",
  name: "심연의 검무",
  col: "#9a6bff",
  heroes: ["enoch", "lumien"],
  desc: "대시 쿨타임 -20%, 교대 시 0.5초 무적",
  effects: [_0x338cdd]
};
const _0x403c2b = {
  vsPoison: 0.2
};
const _0x38f3af = {
  stats: _0x403c2b
};
const _0x39b576 = {
  k: "heal",
  v: 0.01
};
const _0x3f7eb4 = {
  on: "kill",
  do: [_0x39b576]
};
const relic_flower_plague = {
  id: "flower_plague",
  name: "꽃과 역병",
  col: "#a0e060",
  heroes: ["flora", "nigel"],
  desc: "독 대상 피해 +20%, 처치 시 체력 1% 회복",
  effects: [_0x38f3af, _0x3f7eb4]
};
const _0x1ee88e = {
  vsBurn: 0.15,
  atk: 0.08
};
const _0x5b33f1 = {
  stats: _0x1ee88e
};
const relic_sun_cinder = {
  id: "sun_cinder",
  name: "태양과 잿불",
  col: "#ffa040",
  heroes: ["ashen", "aurel"],
  desc: "화상 대상 피해 +15%, 공격력 +8%",
  effects: [_0x5b33f1]
};
const _0x47dd31 = {
  dashCdr: 0.1
};
const _0x166409 = {
  stats: _0x47dd31
};
const _0x5e886f = {
  allDmg: 0.25
};
const definition_cb_abyss = {
  k: "buff",
  id: "cb_abyss",
  stats: _0x5e886f,
  dur: 2
};
const _0x431e45 = {
  on: "dash",
  do: [definition_cb_abyss]
};
const relic_abyss_white = {
  id: "abyss_white",
  name: "심연과 백야",
  col: "#b0a0ff",
  heroes: ["baekya", "enoch"],
  desc: "대시 쿨타임 -10%. 대시 후 2초간 모든 피해 +25%",
  effects: [_0x166409, _0x431e45]
};
const _0x4295a6 = {
  k: "shield",
  v: 0.1
};
const _0x487b14 = {
  on: "roomStart",
  do: [_0x4295a6]
};
const _0x1d1388 = {
  dmgTaken: -0.06
};
const _0x1aa103 = {
  stats: _0x1d1388
};
const relic_starlight_ward = {
  id: "starlight_ward",
  name: "별빛 수호",
  col: "#c8e0ff",
  heroes: ["astral", "solen"],
  desc: "방 입장 시 보호막 (최대 체력 10%), 받는 피해 -6%",
  effects: [_0x487b14, _0x1aa103]
};
const _0x284165 = {
  swapDmg: 0.4,
  mspd: 0.08
};
const _0x57f8b2 = {
  stats: _0x284165
};
const relic_compass_arrow = {
  id: "compass_arrow",
  name: "별을 쫓는 나침반",
  col: "#a0d8ff",
  heroes: ["caelus", "hanbyeol"],
  desc: "교대 공격 피해 +40%, 이동 속도 +8%",
  effects: [_0x57f8b2]
};
const _0x7f99af = {
  critDmg: 0.3,
  vsBleed: 0.15
};
const _0x1400ba = {
  stats: _0x7f99af
};
const relic_sword_duel = {
  id: "sword_duel",
  name: "검성의 결투",
  col: "#e04060",
  heroes: ["luciel", "heukwol"],
  desc: "치명타 피해 +30%, 출혈 대상 피해 +15%",
  effects: [_0x1400ba]
};
const _0x439afc = {
  skillDmg: 0.15
};
const _0x5cbd4d = {
  stats: _0x439afc
};
const _0x2c68f8 = {
  k: "strike",
  m: 1.5,
  el: "holy"
};
const _0x234b08 = {
  on: "interval",
  every: 6,
  do: [_0x2c68f8]
};
const relic_sky_prophecy = {
  id: "sky_prophecy",
  name: "별의 예언",
  col: "#80c0ff",
  heroes: ["vega", "astera"],
  desc: "스킬 피해 +15%. 6초마다 가까운 적에게 별똥별 (공격력 150%)",
  effects: [_0x5cbd4d, _0x234b08]
};
const _0x580473 = {
  cdr: 0.1,
  swapCdr: 0.15
};
const _0x42773d = {
  stats: _0x580473
};
const relic_dream_voyage = {
  id: "dream_voyage",
  name: "꿈의 항해",
  col: "#a0b0ff",
  heroes: ["lucas", "marionne"],
  desc: "스킬 쿨타임 -10%, 교대 쿨타임 -15%",
  effects: [_0x42773d]
};
const _0x509c3f = {
  aspd: 0.1,
  crit: 0.05
};
const _0x253c76 = {
  stats: _0x509c3f
};
const relic_wind_reader = {
  id: "wind_reader",
  name: "바람을 읽는 화살",
  col: "#90ffc0",
  heroes: ["hanbyeol", "silva"],
  desc: "공격 속도 +10%, 치명타 확률 +5%",
  effects: [_0x253c76]
};
const _0x2bac66 = {
  dmgTaken: -0.1
};
const _0x23acbd = {
  stats: _0x2bac66
};
const _0x15e909 = {
  k: "nova",
  r: 50,
  m: 1.2,
  el: "holy"
};
const _0x4957a7 = {
  on: "hurt",
  icd: 1,
  do: [_0x15e909]
};
const relic_light_bulwark = {
  id: "light_bulwark",
  name: "광명의 성벽",
  col: "#ffe090",
  heroes: ["jax", "helga"],
  desc: "받는 피해 -10%. 피격 시 주변에 반격 (공격력 120%)",
  effects: [_0x23acbd, _0x4957a7]
};
const _0x4b0662 = {
  k: "heal",
  v: 0.015
};
const _0xc3a584 = {
  on: "kill",
  do: [_0x4b0662]
};
const _0x50736d = {
  cdr: 0.08
};
const _0x3185a7 = {
  stats: _0x50736d
};
const relic_dawn_garden = {
  id: "dawn_garden",
  name: "새벽 정원",
  col: "#ffb0d0",
  heroes: ["flora", "seraph"],
  desc: "처치 시 체력 1.5% 회복, 스킬 쿨타임 -8%",
  effects: [_0xc3a584, _0x3185a7]
};
const _0x52f694 = {
  crit: 0.08,
  dashDmg: 0.3
};
const _0x57f352 = {
  stats: _0x52f694
};
const relic_shadow_edge = {
  id: "shadow_edge",
  name: "그림자 칼날",
  col: "#9a6bff",
  heroes: ["lumien", "kaz"],
  desc: "치명타 확률 +8%, 대시 피해 +30%",
  effects: [_0x57f352]
};
const _0x481290 = {
  gold: 0.2,
  cdr: 0.1
};
const _0x58fc48 = {
  stats: _0x481290
};
const relic_time_gamble = {
  id: "time_gamble",
  name: "시간을 건 도박",
  col: "#e0d080",
  heroes: ["gambler", "liora"],
  desc: "금화 획득 +20%, 스킬 쿨타임 -10%",
  effects: [_0x58fc48]
};
const _0x58b002 = {
  aspd: 0.1,
  finDmg: 0.2
};
const _0x3dbef1 = {
  stats: _0x58b002
};
const relic_wind_gear = {
  id: "wind_gear",
  name: "바람과 태엽",
  col: "#a0ffd0",
  heroes: ["arien", "orin"],
  desc: "공격 속도 +10%, 콤보 마지막 타 피해 +20%",
  effects: [_0x3dbef1]
};
const _0x46e4bb = {
  k: "explode",
  r: 30,
  m: 0.8,
  el: "fire",
  st: "burn"
};
const _0xc5ba5 = {
  on: "finisher",
  icd: 0.4,
  do: [_0x46e4bb]
};
const relic_dragon_cinder = {
  id: "dragon_cinder",
  name: "용의 잿불",
  col: "#ff6030",
  heroes: ["ashen", "drakan"],
  desc: "콤보 마지막 타에 화염 폭발 (공격력 80%, 화상)",
  effects: [_0xc5ba5]
};
const _0x2471dc = {
  lifesteal: 0.02,
  vsBleed: 0.15
};
const _0x30ea23 = {
  stats: _0x2471dc
};
const relic_blood_moon = {
  id: "blood_moon",
  name: "핏빛 달",
  col: "#c02040",
  heroes: ["heukwol", "vella"],
  desc: "흡혈 +2%, 출혈 대상 피해 +15%",
  effects: [_0x30ea23]
};
const _0x4f53ed = {
  skillDmg: 0.12,
  dmgTaken: -0.06
};
const _0x2b7b61 = {
  stats: _0x4f53ed
};
const relic_cursed_scholar = {
  id: "cursed_scholar",
  name: "저주받은 학자",
  col: "#8060c0",
  heroes: ["enoch", "seres"],
  desc: "스킬 피해 +12%, 받는 피해 -6%",
  effects: [_0x2b7b61]
};
const _0x4368f5 = {
  atk: 0.1,
  vsShock: 0.1
};
const _0x3f9474 = {
  stats: _0x4368f5
};
const relic_lava_thunder = {
  id: "lava_thunder",
  name: "용암 천둥",
  col: "#ff9040",
  heroes: ["garon", "bron"],
  desc: "공격력 +10%, 감전 대상 피해 +10%",
  effects: [_0x3f9474]
};
const _0x2f57e1 = {
  allDmg: 0.2,
  lifesteal: 0.01
};
const _0x15c01f = {
  cond: "lowHp",
  stats: _0x2f57e1
};
const relic_phoenix_sword = {
  id: "phoenix_sword",
  name: "불사조의 검",
  col: "#ff8050",
  heroes: ["luciel", "ignia"],
  desc: "체력 50% 이하일 때 모든 피해 +20%, 흡혈 +1%",
  effects: [_0x15c01f]
};
const _0x44bb51 = {
  vsFrozen: 0.15
};
const _0x18531f = {
  stats: _0x44bb51
};
const _0x555c18 = {
  k: "status",
  s: "chill"
};
const _0x22603e = {
  on: "skillHit",
  icd: 0.3,
  do: [_0x555c18]
};
const relic_frost_star = {
  id: "frost_star",
  name: "서리별",
  col: "#c0f0ff",
  heroes: ["lea", "solen"],
  desc: "빙결 대상 피해 +15%, 스킬 적중 시 냉기",
  effects: [_0x18531f, _0x22603e]
};
const _0x53f5b2 = {
  k: "status",
  s: "poison"
};
const _0x20f6f8 = {
  on: "hit",
  chance: 0.12,
  do: [_0x53f5b2]
};
const _0x80e6c9 = {
  dotDmg: 0.2
};
const _0x4079c0 = {
  stats: _0x80e6c9
};
const relic_plague_star = {
  id: "plague_star",
  name: "역병의 별",
  col: "#a0e060",
  heroes: ["nigel", "vega"],
  desc: "공격 시 12% 확률로 독, 지속 피해 +20%",
  effects: [_0x20f6f8, _0x4079c0]
};
const _0x5aa8c7 = {
  vsFrozen: 0.15,
  cdr: 0.05
};
const _0x24dbd0 = {
  stats: _0x5aa8c7
};
const _0x251043 = {
  k: "status",
  s: "chill"
};
const _0x40f1ab = {
  on: "skillHit",
  icd: 0.3,
  do: [_0x251043]
};
const relic_frost_spear = {
  id: "frost_spear",
  name: "서리 창과 검",
  col: "#9ad8ff",
  heroes: ["elin", "lea"],
  desc: "빙결 대상 피해 +15%, 스킬 적중 시 냉기, 스킬 쿨타임 -5%",
  effects: [_0x24dbd0, _0x40f1ab]
};
const _0x3367a7 = {
  vsFrozen: 0.2
};
const _0x3b6c0f = {
  stats: _0x3367a7
};
const _0x5a6604 = {
  k: "status",
  s: "chill"
};
const _0x159a63 = {
  on: "hit",
  chance: 0.1,
  do: [_0x5a6604]
};
const relic_frost_queens = {
  id: "frost_queens",
  name: "서리의 여왕들",
  col: "#a8e4ff",
  heroes: ["lea", "eora"],
  desc: "빙결 대상 피해 +20%, 공격 시 10% 확률로 냉기",
  effects: [_0x3b6c0f, _0x159a63]
};
const _0x4efc24 = {
  vsShock: 0.2
};
const _0x5ef163 = {
  stats: _0x4efc24
};
const _0x252f9e = {
  k: "chain",
  n: 3,
  m: 0.5
};
const _0x49fd09 = {
  on: "finisher",
  icd: 0.5,
  do: [_0x252f9e]
};
const relic_thunderclap = {
  id: "thunderclap",
  name: "천둥과 번개",
  col: "#7fd8ff",
  heroes: ["garon", "raika"],
  desc: "감전 대상 피해 +20%. 콤보 마지막 타에 연쇄 번개 (3대상)",
  effects: [_0x5ef163, _0x49fd09]
};
const _0xb41768 = {
  dmgTaken: -0.12,
  hpPct: 0.1
};
const _0x25ad6e = {
  stats: _0xb41768
};
const relic_iron_wall = {
  id: "iron_wall",
  name: "철벽",
  col: "#ffd76a",
  heroes: ["helga", "aurelia"],
  desc: "받는 피해 -12%, 최대 체력 +10%",
  effects: [_0x25ad6e]
};
const _0x3bbb26 = {
  vsBleed: 0.2
};
const _0x57847f = {
  stats: _0x3bbb26
};
const _0x15d52e = {
  k: "status",
  s: "bleed"
};
const _0x5e0cf9 = {
  on: "crit",
  do: [_0x15d52e]
};
const relic_twin_scythe = {
  id: "twin_scythe",
  name: "사신의 두 낫",
  col: "#d8203a",
  heroes: ["morga", "vella"],
  desc: "출혈 대상 피해 +20%, 치명타 시 출혈",
  effects: [_0x57847f, _0x5e0cf9]
};
const _0xa6647b = {
  crit: 0.06,
  dashDmg: 0.3
};
const _0x1329a0 = {
  stats: _0xa6647b
};
const relic_princess_shadow = {
  id: "princess_shadow",
  name: "왕녀의 그림자",
  col: "#9a6bff",
  heroes: ["seres", "sien"],
  desc: "치명타 확률 +6%, 대시 피해 +30%",
  effects: [_0x1329a0]
};
const _0x4ff662 = {
  atk: 0.06,
  dmgTaken: -0.06
};
const _0x143013 = {
  stats: _0x4ff662
};
const relic_knight_oath = {
  id: "knight_oath",
  name: "몰락과 맹세",
  col: "#c0c0d0",
  heroes: ["balt", "aurelia"],
  desc: "공격력 +6%, 받는 피해 -6%",
  effects: [_0x143013]
};
const _0x3df591 = {
  k: "status",
  s: "burn"
};
const _0x1fa63d = {
  on: "hit",
  chance: 0.1,
  do: [_0x3df591]
};
const _0x4411fc = {
  vsBurn: 0.15
};
const _0x8b3ca0 = {
  stats: _0x4411fc
};
const relic_dragon_flask = {
  id: "dragon_flask",
  name: "용과 연금술",
  col: "#ff7a2a",
  heroes: ["drakan", "selin"],
  desc: "공격 시 10% 확률로 화상, 화상 대상 피해 +15%",
  effects: [_0x1fa63d, _0x8b3ca0]
};
const _0x5aa70a = {
  skillDmg: 0.15,
  cdr: 0.08
};
const _0x38bfe2 = {
  stats: _0x5aa70a
};
const relic_puppet_bones = {
  id: "puppet_bones",
  name: "사자를 부리는 손",
  col: "#9ef0ff",
  heroes: ["nox", "marionne"],
  desc: "스킬 피해 +15%, 스킬 쿨타임 -8%",
  effects: [_0x38bfe2]
};
const _0x52d5ac = {
  atk: 0.08,
  mspd: 0.08
};
const _0x4a0620 = {
  stats: _0x52d5ac
};
const relic_first_friends = {
  id: "first_friends",
  name: "첫 동료",
  col: "#e0c890",
  heroes: ["kael", "rina"],
  desc: "공격력 +8%, 이동 속도 +8%",
  effects: [_0x4a0620]
};
const W = (_0x601024, _0x27d3ec, _0x2ba99f) => ({
  "id": _0x601024,
  "kind": _0x27d3ec,
  "rows": _0x2ba99f
}), X0 = [W("c_hall", "combat", ["########################################", "#......................................#", "#......................................#", "#.......T...........T...........T......#", "#......................................#", "#..........f.............f.............#", "#......................................#", "#.........=======........=======.......#", "#......................................#", "#......................................#", "#....=====.......e..........=====......#", "#......................................#", "#......................................#", "#P.........e..........e.......D...D..D.#", "#.........######.....######............#", "##########################^^^##########", "########################################"]), W("c_pit", "combat", ["############################################", "#..........................................#", "#..........................................#", "#....T.................T.................T.#", "#..........................................#", "#.............f..............f.............#", "#..........................................#", "#.......=====.......=======.......=====....#", "#..........................................#", "#..........................................#", "#..................e.......................#", "#...............=======....................#", "#..........................................#", "#P.......e...................e.....D..D..D.#", "#######.......###########.......############", "#######^^^^^^^###########^^^^^^^############", "############################################"]), W("c_tower", "combat", ["######################################", "#....................................#", "#..............f.....................#", "#........=========.........T.........#", "#.......................e............#", "#.....................=======........#", "#....T...............................#", "#...........e...............f........#", "#.......=========....................#", "#........................======......#", "#BBB.................................#", "#$$B..........e..........e...........#", "#BBB...........====..................#", "#....................t.......D..D..D.#", "#P......................#####........#", "######################################", "######################################"]), W("c_bridge", "combat", ["##################################################", "#................................................#", "#................................................#", "#.....T...............T................T.........#", "#.............f...................f..............#", "#................................................#", "#................................................#", "#..........e........e.........e..................#", "#.....==========CCCCCCCC==========...............#", "#................................................#", "#................................................#", "#.....................................e..........#", "#..............................=======...........#", "#P.......t...........................t...D..D..D.#", "######........#######^^^^#######.........#########", "######^^^^^^^^#######^^^^#######^^^^^^^^^#########", "##################################################"]), W("c_vault", "combat", ["##########################################", "#........................................#", "#........................................#", "#......T.............T.............T.....#", "#..............f.........................#", "#........................................#", "#.........=====..........=====...........#", "#........................................#", "#...........................f............#", "#....======.......=====.........=====....#", "#........................................#", "#........................................#", "#......e.............e..........e........#", "#P...............t...............D..D..D.#", "#####.....###########.....################", "#####^^^^^###########^^^^^#######BBB$$$###", "################################BBBBBBB###"]), W("c_stairs", "combat", ["############################################", "#..........................................#", "#..........................................#", "#.....T..........T.........................#", "#............................f.............#", "#..................................#####...#", "#.............................=====#$$$B...#", "#..................................#####...#", "#.......................#####..............#", "#............f.....#####...........e.......#", "#...............####.......................#", "#..........#####...........................#", "#......e........................e..........#", "#P..#####.............t............D..D..D.#", "#####......................................#", "############################################", "############################################"]), W("c_arena", "combat", ["####################################", "#..................................#", "#..................................#", "#...T..........................T...#", "#...........f..........f...........#", "#..................................#", "#.....======............======.....#", "#..................................#", "#..............======..............#", "#..................................#", "#...======..................======.#", "#..................................#", "#........e......e......e...........#", "#P..........................D.D.D..#", "#..................................#", "####################################", "####################################"]), W("c_crumble", "combat", ["##############################################", "#............................................#", "#............................................#", "#...T...............T.................T......#", "#............................................#", "#.........f.....................f............#", "#............................................#", "#.....................e......................#", "#..............CCCCCCCCCCCC..................#", "#............................................#", "#....======........................=====.....#", "#............................................#", "#.........e.....................e............#", "#P....................t...............D..D..D#", "##########...........................#########", "##########^^^^^^^^^^^^^^^^^^^^^^^^^^^#########", "##############################################"]), W("c_split", "combat", ["##########################################", "#........................................#", "#........................................#", "#.....T..............T...............T...#", "#........................................#", "#..........e.................e...........#", "#......==========.......==========.......#", "#........................................#", "#...............f........................#", "#........................................#", "#..................####..................#", "#..................#BB#..................#", "#.........e........#$$#......e...........#", "#P.................####.........D..D..D..#", "#.......t................t...............#", "##########################################", "##########################################"]), W("c_long", "combat", ["############################################################", "#..........................................................#", "#..........................................................#", "#....T............T.............T...............T..........#", "#..........................................................#", "#.........f......................f.........................#", "#..........................................................#", "#...........=======...........=======..........======......#", "#..........................................................#", "#..........................................................#", "#......e...........e....................e..........e.......#", "#..................................====....................#", "#..........................................................#", "#P..............t..................t...............D..D..D.#", "########.....##########......############....###############", "########^^^^^##########^^^^^^############^^^^###############", "############################################################"]), W("s_room", "special", ["##################################", "#................................#", "#................................#", "#.....T..........T..........T....#", "#................................#", "#................................#", "#................................#", "#................................#", "#................................#", "#................................#", "#................................#", "#................................#", "#................................#", "#P..........N.............D.D.D..#", "#................................#", "##################################", "##################################"]), W("boss", "boss", ["##############################################", "#............................................#", "#............................................#", "#....T..............T...............T........#", "#............................................#", "#............................................#", "#............................................#", "#........=====....................=====......#", "#............................................#", "#............................................#", "#............................................#", "#............................................#", "#............................................#", "#.........P.....................X..........D.#", "#............................................#", "##############################################", "##############################################"]), W("tutorial", "tutorial", ["##########################################################################", "#........................................................................#", "#........................................................................#", "#....T.............T..............T...............T................T.....#", "#........................................................................#", "#........................................................................#", "#........................................................................#", "#........................................................................#", "#...............................====.....................................#", "#........................................................................#", "#........................===.............................................#", "#.......................................####.............................#", "#........................................................................#", "#P....S.........S.......S..........S.......S.....e.....S.....e......D....#", "#.....................................^^.................................#", "##################.....######################################.....########", "##########################################################################"]), W("hub", "hub", ["##########################################################################", "#........................................................................#", "#........................................................................#", "#....T..........T..............T...............T.............T......T....#", "#........................................................................#", "#........................................................................#", "#........................................................................#", "#........................................................................#", "#........................................................................#", "#........................................................................#", "#........................................................................#", "#........................................................................#", "#........................................................................#", "#..N.....N.......N.........P.N.........N........N.......N.........N......#", "#........................................................................#", "##########################################################################", "##########################################################################"])], Y0 = ["{left}/{right} 이동 · {jump} 점프 (공중에서 한 번 더: 2단 점프)", "{attack} 기본 공격 — 연타하면 콤보! 공중에서도 공격 가능", "{dash} 대시 — 순간 무적. 공중 대시 1회 · 대시 직후 {attack}: 대시 공격", "{down} + {jump}: 발판 아래로 내려가기", "{skill1} / {skill2} 스킬 (쿨타임) · 금 간 벽은 공격으로 부술 수 있다", "{swap} 교대 — 대기 중인 영웅이 교대 공격과 함께 등장! 앞의 적에게 써 보자", "{interact} 상호작용 · {item} 소모 아이템 · {build} 빌드 확인 · 문 앞에서 {interact}"], Cr = [definition_flame, definition_blood, definition_storm, definition_shadow, definition_ward_52303c, definition_fury, definition_swift, definition_soul, definition_venom, definition_frost_3853db], Z0 = Object.fromEntries(Cr.map(_0x562084 => [_0x562084.id, _0x562084])), Se = [relic_fallen_sun, relic_star_voyage, relic_star_border, relic_prophecy, relic_white_black, relic_cinder_wing, relic_namesakes, relic_wind_star, relic_abyss_dance, relic_flower_plague, relic_sun_cinder, relic_abyss_white, relic_starlight_ward, relic_compass_arrow, relic_sword_duel, relic_sky_prophecy, relic_dream_voyage, relic_wind_reader, relic_light_bulwark, relic_dawn_garden, relic_shadow_edge, relic_time_gamble, relic_wind_gear, relic_dragon_cinder, relic_blood_moon, relic_cursed_scholar, relic_lava_thunder, relic_phoenix_sword, relic_frost_star, relic_plague_star, relic_frost_spear, relic_frost_queens, relic_thunderclap, relic_iron_wall, relic_twin_scythe, relic_princess_shadow, relic_knight_oath, relic_dragon_flask, relic_puppet_bones, relic_first_friends];
Object.fromEntries(Se.map(_0x1ab06e => [_0x1ab06e.id, _0x1ab06e]));
function q0(_0x37d8c2) {
  const _0x339e64 = {
    tnlMo: function (_0x3eaeab, _0x3e878a) {
      return _0x3eaeab === _0x3e878a;
    }
  };
  const _0x2674f3 = _0x339e64;
  return _0x37d8c2.length < 2 || _0x37d8c2[0] === _0x37d8c2[1] ? [] : Se.filter(_0xcec84a => _0x37d8c2.includes(_0xcec84a.heroes[0]) && _0x37d8c2.includes(_0xcec84a.heroes[1]));
}
function Q0(_0x5ce381) {
  const _0x35cb93 = {
    ERyhz: function (_0x46af6c, _0x3b7727) {
      return _0x46af6c === _0x3b7727;
    }
  };
  const _0x48fbfe = _0x35cb93;
  return _0x5ce381.length === 2 && _0x5ce381[0] && _0x5ce381[0] === _0x5ce381[1] ? _0x5ce381[0] : null;
}
function J0(_0x3edd9a) {
  return Se.filter(_0x374919 => _0x374919.heroes.includes(_0x3edd9a));
}
qr.push(...EXTRA_MILESTONES.map(([id,name,desc]) => ({id,name,desc,reward:160})));
ce.splice(0,ce.length,...ce.filter(title => !title.id.startsWith('tower')));
ce.push(...EXTRA_MILESTONES.map(([id,name,desc,cond],index) => ({id:'title_'+id,no:100+index,name,col:'#ffe2a0',desc,cond})));
Object.assign(Sr,Object.fromEntries(ce.map(title=>[title.id,title])));
Object.assign(I0,Object.fromEntries(ce.map(title=>[title.no,title])));
const eo = ["잿빛 정수", "핏빛 정수", "잉크 정수", "백지 정수"], so = ["#e0c890", "#ff6070", "#b080ff", "#f0f0ff"];
function Wr(_0x30dfc4) {
  return _0x30dfc4 >= 211 ? 4 : _0x30dfc4 >= 141 ? 3 : _0x30dfc4 >= 71 ? 2 : 1;
}
const Br = 0.2, Mr = (() => {
  const _0x3fc1c2 = new Set();
  for (const _0x286fad of E) for (const _0x4887b7 of [_0x286fad.finalStage, _0x286fad.trueStage]) if (_0x4887b7) {
    for (const _0x14031d of _0x286fad.route[_0x4887b7 - 1] ?? []) _0x3fc1c2.add(_0x14031d);
  }
  return new Set(K.filter(_0x2c9fac => _0x3fc1c2.has(_0x2c9fac.chapter)).map(_0x386728 => _0x386728.id));
})();
function ao(_0x4cef2e, _0x58f769 = Math.random) {
  if (!Mr.has(_0x4cef2e)) return null;
  const _0x982899 = K.find(_0x4acad6 => _0x4acad6.id === _0x4cef2e);
  return _0x58f769() >= Br ? null : {
    "book": Wr(_0x982899.chapter),
    "n": 1
  };
}
const _0x3182f1 = {
  crystals: 3000,
  mats: [2, 0, 0, 0]
};
const _0xf2566c = {
  crystals: 10000,
  mats: [4, 1, 0, 0]
};
const _0x29947b = {
  crystals: 30000,
  mats: [5, 5, 0, 0]
};
const _0x323244 = {
  crystals: 200000,
  mats: [0, 3, 10, 5]
};
const _0x26749d = {
  ["3"]: _0x3182f1,
  ["4"]: _0xf2566c,
  ["5"]: _0x29947b,
  ["6"]: _0x323244
};
const ea = _0x26749d;
function sa() {
  return ve.filter(_0x250740 => !!ea[_0x250740.rarity] && !_0x250740.owner).sort((_0x1734df, _0x5b72cb) => _0x1734df.rarity - _0x5b72cb.rarity);
}
function aa(definition) {
  return craftCost(definition.rarity);
}
function Hr(_0x43a086, _0x170283) {
  const _0x2b330b = {
    CPkPa: function (_0x579d16, _0x1e58cc) {
      return _0x579d16 >= _0x1e58cc;
    }
  };
  _0x2b330b.plKqP = function (_0x45f16e, _0x4cec0a) {
    return _0x45f16e < _0x4cec0a;
  };
  const _0x5b39c0 = _0x2b330b, _0x4a3b0e = sa().find(_0x2d1016 => _0x2d1016.id === _0x170283), _0x3e561f = _0x4a3b0e && aa(_0x4a3b0e);
  return !_0x4a3b0e || !_0x3e561f ? "bad" : (_0x43a086.weapons[_0x170283]?.rf ?? 0) >= yr ? "max" : _0x5b39c0.plKqP(_0x43a086.crystals, _0x3e561f.crystals) ? "crystals" : _0x3e561f.mats.some((_0x4a87ec, _0x516a43) => (_0x43a086.mats[_0x516a43] ?? 0) < _0x4a87ec) ? "mats" : null;
}
function to(_0x4b7ab0, _0x20a6fd) {
  const _0x487054 = Hr(_0x4b7ab0, _0x20a6fd);
  if (_0x487054) return _0x487054;
  const _0x16d0f7 = aa(sa().find(_0x11ceb4 => _0x11ceb4.id === _0x20a6fd));
  (_0x4b7ab0.crystals -= _0x16d0f7.crystals, _0x16d0f7.mats.forEach((_0x3155fb, _0x1d7998) => _0x4b7ab0.mats[_0x1d7998] -= _0x3155fb), _0x4b7ab0.crafted = (_0x4b7ab0.crafted ?? 0) + 1);
  const _0x3a3eb4 = _0x4b7ab0.weapons[_0x20a6fd], _0x442f53 = {};
  _0x442f53.rf = 1;
  _0x442f53.count = 1;
  return _0x3a3eb4 ? (_0x3a3eb4.count++, _0x3a3eb4.rf++, "refine") : (_0x4b7ab0.weapons[_0x20a6fd] = _0x442f53, "new");
}
const _0x572ae3 = {
  compass: 1
};
const _0xaf721c = {
  reward: _0x572ae3,
  desc: "별의 나침반 1개"
};
const _0x2f2a72 = {
  compass: 1
};
const _0x50d3ed = {
  reward: _0x2f2a72,
  desc: "별의 나침반 1개"
};
const _0x262688 = {
  ["4248241d85c13c4fdb501ee1"]: _0xaf721c,
  b3b227f87c12705daa2cdfb5: _0x50d3ed
};
const Er = _0x262688, Rr = _0x5e2a65 => Dr("saja-coupon|" + ta(_0x5e2a65)).slice(0, 24), ta = _0x265369 => _0x265369.trim().toUpperCase().replace(/\s+/g, ""), Tr = "존재하지 않는 쿠폰 코드입니다";
function ro(_0x464009, _0x13602a, _0x351a83 = new Date(), _0x331bb3) {
  const _0xd6cc8e = {
    pDuVF: "이 계정에서 이미 사용한 쿠폰입니다",
    rDRRr: function (_0x4b094a, _0x497ab5) {
      return _0x4b094a + _0x497ab5;
    }
  };
  const _0x54085e = _0xd6cc8e, _0x405375 = ta(_0x13602a);
  const _0x550f6f = {
    ok: !1,
    error: "쿠폰 코드를 입력하세요"
  };
  if (!_0x405375) return _0x550f6f;
  const _0x354060 = Rr(_0x405375), _0x43d13a = Er[_0x354060] ?? _0x331bb3, _0x52671c = {};
  (_0x52671c.ok = !1, _0x52671c.error = Tr);
  if (!_0x43d13a) return _0x52671c;
  const _0x16da41 = {
    ok: !1,
    error: _0x54085e.pDuVF
  };
  if (_0x464009.usedCoupons.includes(_0x354060) || _0x464009.usedCoupons.includes(_0x405375)) return _0x16da41;
  const _0x199662 = {
    ok: !1,
    error: "기간이 지난 쿠폰입니다"
  };
  if (_0x43d13a.until && _0x351a83.getTime() > new Date(_0x43d13a.until + "T23:59:59+09:00").getTime()) return _0x199662;
  const _0x3341a4 = _0x43d13a.reward;
  (_0x3341a4.stones && (_0x464009.stones += _0x3341a4.stones), _0x3341a4.crystals && (_0x464009.crystals += _0x3341a4.crystals), _0x3341a4.compass && (_0x464009.compass = (_0x464009.compass ?? 0) + _0x3341a4.compass), _0x3341a4.awShards && (_0x464009.awShards += _0x3341a4.awShards));
  for (const _0x3a60e8 of _0x3341a4.chars ?? []) {
    const _0x49992f = _0x464009.chars[_0x3a60e8], _0x4adcd0 = {};
    (_0x4adcd0.lv = 1, _0x4adcd0.aw = 0, _0x4adcd0.count = 1, _0x49992f ? _0x49992f.count++ : _0x464009.chars[_0x3a60e8] = _0x4adcd0);
  }
  for (const _0x20bf5c of _0x3341a4.weapons ?? []) {
    const _0x163ab3 = _0x464009.weapons[_0x20bf5c], _0x4849f9 = {};
    (_0x4849f9.rf = 1, _0x4849f9.count = 1, _0x163ab3 ? _0x163ab3.count = (_0x163ab3.count ?? 1) + 1 : _0x464009.weapons[_0x20bf5c] = _0x4849f9);
  }
  const _0x2e84be = {
    ok: !0
  };
  return (_0x2e84be.desc = _0x43d13a.desc, (_0x464009.usedCoupons.push(_0x354060), _0x2e84be));
}
function oo(_0x435d29, _0x5be1dd) {
  const _0x15cc8a = {
    "tePkG": function (_0x4d02e3, _0x2632cf, _0x21d057) {
      return _0x4d02e3(_0x2632cf, _0x21d057);
    }
  }, _0x3f2960 = [];
  (_0x435d29.stones && _0x3f2960.push("계약석 " + _0x435d29.stones.toLocaleString()), _0x435d29.crystals && _0x3f2960.push("영혼 결정 " + _0x435d29.crystals.toLocaleString()), _0x435d29.compass && _0x3f2960.push("별의 나침반 " + _0x435d29.compass + "개"), _0x435d29.awShards && _0x3f2960.push("각성 파편 " + _0x435d29.awShards.toLocaleString()));
  for (const _0x3eb094 of _0x435d29.chars ?? []) _0x3f2960.push("영웅 " + _0x5be1dd(_0x3eb094, !1));
  for (const _0x422a69 of _0x435d29.weapons ?? []) _0x3f2960.push("무기 " + _0x5be1dd(_0x422a69, !0));
  return _0x3f2960.join(" · ") || "없음";
}
const _0x46c16f = {
  name: "특수 패턴",
  desc: "이 보스만의 공격"
};
const f = (_0x3e64b2, _0x271721) => ({
  "name": _0x3e64b2,
  "desc": _0x271721
}), v = (_0x3c4a6f, _0x1fc799, _0x377e18) => ({
  "name": _0x3c4a6f,
  "desc": _0x1fc799,
  "exec": !0,
  "hint": _0x377e18
}), Ar = {
  "shovelSlam": f("내려찍기", "무기를 높이 들어 앞을 내려찍는다"),
  "charge": f("돌진", "예고 뒤 플레이어 쪽으로 곧게 돌진한다"),
  "leapSmash": f("도약 강타", "높이 뛰어올라 플레이어 자리로 떨어진다"),
  "bodySlam": f("몸통 박치기", "몸을 던져 짓누른다"),
  "bounceChain": f("연속 튀어오르기", "몸통 박치기를 여러 번 이어 튄다"),
  "hammerQuake": f("지진 망치", "바닥을 내리쳐 양옆으로 충격파를 보낸다"),
  "doubleQuake": f("이중 지진", "지진 망치를 두 번 연달아"),
  "swordCombo": f("검 연격", "다가와 여러 번 베어 낸다"),
  "teleSlam": f("순간이동 강타", "플레이어 위로 순간이동해 내리찍는다"),
  "dashSlash": f("섬광 베기", "경로가 표시된 뒤 순식간에 돌진해 벤다"),
  "cloneDash": f("분신 돌진", "분신이 화면 끝에서 차례로 돌진한다"),
  "diveBomb": f("급강하", "착지 지점 예고 뒤 내리꽂혀 폭발 — 착지 직후가 공격 기회"),
  "swoop": f("저공 활강", "화면 끝에서 바닥 높이로 낮게 가로지른다 — 뛰어넘기"),
  "boulderRoll": f("바위 굴리기", "바닥을 따라 굴러오는 바위 — 뛰어넘기"),
  "flameBreath": f("화염 숨결", "앞쪽을 길게 불태운다"),
  "boneRain": f("뼈 비", "하늘에서 뼈가 쏟아진다"),
  "lanternFire": f("등불 화염", "등불에서 불덩이를 날린다"),
  "ghostFlames": f("유령 불꽃", "떠다니는 유령 불꽃이 쫓아온다"),
  "sporeCloud": f("포자 구름", "독 포자 구름을 퍼뜨린다"),
  "spitVolley": f("독 침 세례", "포물선으로 독 덩이를 뱉는다"),
  "moltenRain": f("용암 비", "녹은 쇳물이 쏟아진다"),
  "shadowBlades": f("그림자 칼날", "그림자 칼날을 날린다"),
  "swordRain": f("검의 비", "하늘에서 검이 차례로 꽂힌다"),
  "harpoonVolley": f("작살 투척", "작살을 연달아 던진다 — 던지기 직전 번쩍인다"),
  "cannonBarrage": f("함포 사격", "포탄이 무대 곳곳에 떨어진다"),
  "iceSpears": f("얼음 창", "얼음 창을 날린다 (둔화)"),
  "pageStorm": f("책장 폭풍", "날카로운 책장이 휘몰아친다"),
  "shelfCollapse": f("서가 붕괴", "머리 위에서 책장이 무너진다"),
  "blizzard": f("눈보라", "무대 전체에 얼음 조각이 쏟아진다"),
  "starfall": f("별똥별", "별이 비처럼 떨어진다"),
  "radialBurst": f("방사 탄막", "사방으로 탄을 퍼뜨린다"),
  "aimedFan": f("조준 부채 사격", "플레이어를 노린 부채꼴 사격 3연발"),
  "homingOrbs": f("추적 구슬", "천천히 쫓아오는 구슬을 띄운다"),
  "bladeHalo": f("칼날 후광", "머리 위의 칼날이 차례로 날아온다"),
  "skyCurtain": f("하늘 장막", "낙하물이 화면을 덮는다 — 비어 있는 틈으로"),
  "spiralHell": f("나선 지옥", "회전하는 나선 탄막"),
  "meteor": f("운석", "거대한 운석 하나 — 넓은 범위 폭발"),
  "meteorShadow": f("그림자 운석", "그림자가 커지는 자리에 운석이 떨어진다"),
  "rootSpikes": f("뿌리 가시", "바닥에서 뿌리 가시가 솟는다"),
  "toxicFlood": f("독 범람", "바닥이 독으로 차오른다 — 발판 위로"),
  "lavaPillars": f("용암 기둥", "예고된 자리에서 용암 기둥이 솟는다"),
  "coreLaser": f("노심 레이저", "가슴의 노심에서 굵은 광선을 쏜다"),
  "crownBeam": f("왕관 광선", "왕관에서 광선을 쏜다"),
  "darkWave": f("어둠의 파동", "바닥을 타고 어둠의 파동이 밀려온다 — 뛰어넘기"),
  "tidalWave": f("해일", "바닥을 쓸며 파도가 밀려온다"),
  "whirlpool": f("소용돌이", "플레이어를 끌어당기는 소용돌이"),
  "frostNova": f("서리 폭발", "몸 주위로 서리가 터진다"),
  "voidPillars": f("공허 기둥", "공허의 기둥이 차례로 솟는다"),
  "voidBeam": f("공허 광선", "무대를 가로지르는 공허 광선"),
  "pillarMarch": f("기둥 행진", "보스 앞에서부터 기둥이 차례로 솟는다"),
  "shockRing": f("충격파 고리", "양옆으로 퍼지는 충격파 연속 — 점프 타이밍"),
  "gravityWell": f("중력 우물", "플레이어를 끌어당기는 장판"),
  "crossBeam": f("십자 광선", "세로 기둥 + 가로 광선 (낮으면 점프, 높으면 그대로)"),
  "spikeWave": f("가시 파도", "바닥 가시가 양옆으로 번져 나간다"),
  "floorHalf": f("반쪽 바닥", "바닥 절반이 뒤덮인다 — 반대편으로"),
  "laserSweep": f("레이저 훑기", "높이가 다른 가로 광선이 차례로"),
  "galeWaves": f("돌풍", "양 끝에서 낮고 높은 돌풍이 번갈아 밀려온다"),
  "floorSweep": f("바닥 쓸기", "바닥 끝에서 끝까지 쓸고 가는 띠 — 뛰어넘기"),
  "checkerFloor": f("체스판 바닥", "바닥이 체스판처럼 번갈아 터진다 — 한 칸 옆으로"),
  "beamGrid": f("광선 격자", "세로 기둥 격자 + 가로 광선"),
  "summonSkel": f("해골 소환", "해골 병사를 불러낸다"),
  "birthSlimes": f("슬라임 분만", "슬라임을 낳는다"),
  "summonGuards": f("근위대 소환", "왕실 근위 기사를 불러낸다"),
  "summonCrew": f("선원 소환", "익사한 선원을 불러낸다"),
  "summonTomes": f("마도서 소환", "떠도는 마도서를 불러낸다"),
  "summon": f("소환", "부하를 불러낸다"),
  "pactShadows": f("계약의 그림자", "계약자의 그림자들이 덮쳐 온다"),
  "laserLattice": f("레이저 격자", "가로·세로 레이저가 격자로 깔린다"),
  "arenaTilt": f("기우는 세계", "화면이 기운다 — 몸은 그대로, 탄만 보고 피하라"),
  "rewindClock": f("시간 되감기", "시계를 5초 안에 부수면 보스가 휘청, 못 부수면 체력을 되감는다"),
  "closingWalls": f("좁아지는 벽", "양쪽 벽이 조여 와 무대를 좁힌다"),
  "gravityFlip": f("중력 반전", "하늘색 구역 안에서는 위로 떨어진다 — 그 뒤 바닥이 터진다"),
  "mirrorDouble": f("거울 분신", "한 박자 늦게 플레이어를 따라 하는 분신"),
  "swapPlace": f("자리 바꾸기", "플레이어와 자리를 바꾸고 바뀐 자리로 탄을 쏜다"),
  "cloneShell": f("분신 돌진", "넷이 함께 돌진 — 눈이 금빛인 진짜를 때리면 분신이 사라진다"),
  "laserCross": f("회전 십자 레이저", "회전하는 레이저 십자 + 탄 고리"),
  "singularity": f("특이점 우물", "모든 것을 끌어당기는 중력 우물"),
  "splitArena": f("반쪽 무대", "무대 반쪽씩 번갈아 위험해진다"),
  "poisonRise": f("차오르는 독 안개", "독 안개가 차오른다 — 구원의 발판 위로"),
  "inkChase": f("추격하는 잉크 벽", "잉크 벽이 뒤에서 쫓아온다"),
  "mirrorFlip": f("거울 세계", "화면과 조작이 좌우로 뒤집힌다"),
  "copySkill": f("스킬 베끼기", "플레이어가 마지막에 쓴 스킬을 베껴 쓴다"),
  "vanishStalk": f("투명 추적", "모습을 감추고 그림자·발자국만 남긴다"),
  "twinSwap": f("쌍둥이 교대", "거울 쌍둥이와 역할을 바꾼다"),
  "curseReverse": f("저주: 반전", "좌우 조작이 뒤집힌다"),
  "curseBlackout": f("저주: 암전", "시야가 어두워진다"),
  "curseFreeze": f("저주: 정지", "잠시 굳는다 — 굳기 전에 기둥 사이로 옮겨 서라"),
  "curseSeal": f("저주: 봉인", "스킬이 잠시 봉인된다"),
  "curseWeight": f("저주: 무게", "점프 높이가 절반이 된다"),
  "curseMute": f("저주: 침묵", "대시를 쓸 수 없다"),
  "royalExecution": v("왕의 참수", "바닥 높이를 가로지르는 칼날", "판정 순간 점프하거나 발판 위에 있어라"),
  "oblivionErase": v("망각의 선고", "화면 전체가 지워진다", "금빛 「기억의 빛」 기둥 안으로 들어가라"),
  "execGround": v("바닥 처형", "바닥을 휩쓸어 땅에 선 자를 지운다", "뛰어오르거나 발판 위로"),
  "execZones": v("금빛 틈", "화면 전체가 지워진다", "금빛 기둥(틈) 안에 서 있어라"),
  "execHalf": v("반쪽 처형", "플레이어가 있는 쪽 절반이 지워진다", "반대편 절반으로 달려라"),
  "eclipseDive": v("낙인 낙하", "따라다니던 그림자 기둥이 고정된 뒤 내리꽂힌다", "기둥이 고정되면 바로 밖으로 벗어나라"),
  "worldSever": v("세계 절단", "세계를 가로로 베어 낸다", "땅에 붙어 있어라 (점프·발판 위 금지)"),
  "dreamShade": v("꿈의 그늘", "화면 전체가 지워지고 보스의 그림자만 안전", "떠가는 그림자 기둥을 쫓아 그 안에 서라"),
  "dreamGaze": v("깨어나는 시선", "보스가 눈을 뜨면 시선이 닿는 곳이 지워진다", "보스 등 뒤로 돌아가라"),
  "dreamStill": v("꿈의 정적", "움직이는 자를 지운다", "카운트 1부터 아무 키도 누르지 말고 땅에 서 있어라"),
  "execMirrorHalf": v("거울 반쪽 처형", "조작 반전 + 반쪽 처형", "뒤집힌 조작으로 반대편 절반으로"),
  "execDarkZones": v("어둠 속 금빛 틈", "암전 + 금빛 틈 처형", "어두워지기 전에 금빛 틈 위치를 기억하라"),
  "execMirrorGaze": v("거울 시선", "조작 반전 + 깨어나는 시선", "뒤집힌 조작으로 보스 등 뒤로"),
  "execFreezeDive": v("정지된 낙인", "1초 굳는 동안 발밑에 낙인 기둥이 고정된다", "풀리는 즉시 기둥 밖으로 대시"),
  "execEcho": v("메아리 낙인", "1초마다 지나온 자리에 보라 기둥이 하나씩 (3개)", "계속 움직여 지나온 보라 기둥들 밖에 서라"),
  "execDarkEcho": v("어둠 속 메아리", "불을 끈 채 메아리 낙인", "어두워도 계속 한 방향으로 움직여 기둥 밖으로"),
  "execGravity": v("중력 처형", "바닥 띠 전체가 지워진다", "하늘색 기둥에 들어가 위(금빛)로 떨어지거나 높은 발판으로"),
  "execSwap": v("자리바꿈 처형", "보스가 선 쪽 절반이 지워지고 1초 뒤 자리를 바꾼다", "자리가 바뀐 뒤 반대편(금빛)으로 달려라"),
  "execMirrorSwap": v("거울 자리바꿈", "조작 반전 + 자리바꿈 처형", "뒤집힌 조작으로, 바뀐 뒤 반대편으로"),
  "execClones": v("진짜를 찾아라", "보스 넷 중 진짜 아래 기둥만 남는다", "눈이 금빛으로 깜빡인 진짜 아래 금빛 기둥으로"),
  "execWallCrush": v("조여 오는 벽", "양쪽 보라 벽이 금빛 틈까지 조여 온다", "금빛 틈(폭 64) 안에 서라"),
  "execChain": v("연쇄 판결", "즉사기 두 번 연속: 발밑 보라 기둥 → 금빛 틈 두 곳", "먼저 기둥을 벗어나고, 숨 돌린 뒤 금빛 틈으로"),
  "execSingularity": v("특이점", "가운데 보라 원이 점점 세게 끌어당긴다", "반대로 버텨 달려 양끝 금빛 자리로"),
  "execMeteor": v("마지막 운석", "5구역 중 4구역에 거대한 운석 그림자", "그림자가 없는 금빛 구역 하나에 서라"),
  "execVanish": v("보이지 않는 처형자", "보스가 사라지고 금빛 그림자만 움직인다", "천천히 움직이는 금빛 그림자 위에 계속 서 있어라"),
  "execTwinSwap": v("뒤바뀐 쌍둥이", "왕관 쓴 진짜 쪽 반만 남고, 1초 뒤 둘이 자리를 바꾼다", "왕관 쪽(금빛)에 서고, 바뀌면 따라가라"),
  "execRhythm": v("박자 처형", "바닥이 지워지고 금빛 발판이 박자에 맞춰 깜빡인다", "마지막에 남는 무리의 금빛 발판 위(또는 공중)에 있어라"),
  "execPoisonTide": v("독 해일", "독 안개가 바닥 위 56px까지 차오른다", "두 번 뛰어 금빛 발판 위로 올라서라"),
  "execMirrorWorld": v("거울 세계 처형", "플레이어 쪽 반이 보라, 0.8초 뒤 화면·조작이 뒤집힌다", "뒤집혀도 보이는 대로 금빛 반쪽으로")
}, Fe = _0x46c16f;
function lo(_0x52ff68) {
  const _0x307507 = {
    rTBxe: "보라 예고를 피해 금빛 자리로"
  };
  const _0x35912e = _0x307507, _0x2a7187 = {
    ...Fe
  };
  (_0x2a7187.name = "즉사기", _0x2a7187.exec = !0, _0x2a7187.hint = _0x35912e.rTBxe);
  return Ar[_0x52ff68] ?? (_0x52ff68.startsWith("exec") ? _0x2a7187 : Fe);
}
applyStoryContent(B, E);
export {ao as data_ao, qr as ACHIEVEMENTS, M0 as data_M0, T as CHARACTERS, te as DEVELOPER_FLAGS, R0 as data_R0, N0 as BACKEND_CONFIG, q0 as data_q0, Q0 as data_Q0, Ur as InputManager, $r as data_$r, Ir as data_Ir, S0 as data_S0, wr as AWAKENING_MAX, v0 as data_v0, y0 as data_y0, fe as data_fe, w0 as data_w0, p0 as data_p0, E as STORIES, ha as data_ha, ua as data_ua, pa as data_pa, Za as data_Za, Kr as data_Kr, re as CHARACTER_LIST, K as BOSSES, B as BOOKS, ze as data_ze, P0 as data_P0, o0 as data_o0, c0 as data_c0, r0 as data_r0, i0 as data_i0, U0 as data_U0, ee as CURSE_LEVELS, g0 as data_g0, Lr as data_Lr, zr as data_zr, M as GACHA_RULES, De as THEMES, X0 as data_X0, ke as getStory, Vr as data_Vr, A as getBook, u as data_u, O as data_O, eo as data_eo, d0 as data_d0, B0 as data_B0, Ce as data_Ce, m0 as data_m0, qa as data_qa, I0 as data_I0, k0 as data_k0, va as data_va, Yr as data_Yr, n0 as restoreRun, oo as data_oo, da as data_da, X as data_X, Pr as data_Pr, Ue as data_Ue, ye as data_ye, Se as data_Se, O0 as data_O0, Re as data_Re, ve as data_ve, Zr as data_Zr, Z0 as data_Z0, U as data_U, L as data_L, Ma as data_Ma, e0 as data_e0, Y0 as data_Y0, Gr as data_Gr, a0 as data_a0, ba as data_ba, Qr as data_Qr, Nr as data_Nr, Ba as data_Ba, Rr as data_Rr, ta as data_ta, ra as getStoryGate, Or as formatBookStory, J as cloneData, F as DEFAULT_BINDINGS, Fr as data_Fr, ro as data_ro, Tr as data_Tr, la as data_la, $0 as data_$0, Va as RunState, st as data_st, F0 as getEnemyKillCount, hr as data_hr, Js as data_Js, mr as getBossKillCount, lo as data_lo, xa as data_xa, l0 as data_l0, Xr as data_Xr, J0 as data_J0, Jr as data_Jr, it as data_it, Ca as PERMANENT_UPGRADES, j0 as data_j0, Be as data_Be, D0 as data_D0, C0 as data_C0, we as SHARD_EXCHANGE, Me as data_Me, ce as data_ce, Fa as getBossRoute, za as data_za, t0 as isBookComplete, kt as getAwakeningCost, W0 as awakenHero, L0 as getHeroLevelCost, pt as data_pt, ut as data_ut, Ie as data_Ie, ht as getSkillMasteryCost, _0 as data__0, ct as getWeaponEnhanceCost, x0 as data_x0, sa as craftableWeapons, to as craftWeapon, Hr as canCraftWeapon, aa as getCraftCost, so as data_so, We as data_We, se as data_se, dt as data_dt, nt as data_nt, ft as data_ft, rt as data_rt, ot as data_ot, lt as data_lt, Qa as data_Qa, b0 as data_b0, u0 as data_u0, K0 as isOnlineBackend, V0 as data_V0, xe as data_xe, Ea as WEAPONS, G0 as data_G0, Ne as data_Ne, yr as data_yr, z0 as normalizeSave, kr as createSave, T0 as data_T0, f0 as data_f0, A0 as data_A0, Ge as data_Ge, Dr as hashSave, Zs as data_Zs, H0 as data_H0, E0 as data_E0, h0 as data_h0, Cr as data_Cr, Ta as data_Ta, s0 as data_s0};
