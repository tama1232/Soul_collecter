import {eightContentVisible} from '../config/expansion.js';
import {selectedWeapon,openWeaponPicker} from './weapon-pickup.js';
import {getProbabilities} from '../config/live-rules.js';
import {compassRates, normalRates} from '../config/economy.js';
// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
import {runtime_w, game, runtime_Fd, runtime_Rn, runtime_kt, runtime_q, runtime_j2, runtime_ye, drawText, runtime_ua, runtime_Xe, runtime_Bo, drawItemIcon, runtime_de, runtime_Qf, runtime_zn, runtime_E2, runtime_Xd, runtime_ma, runtime_Yf, runtime_ue, runtime_H2} from "../game.js";
import {CHARACTERS, CHARACTER_LIST, data_da, data_ve, data_X, WEAPONS, data_Pr, GACHA_RULES, data_Nr, data_Gr, data_a0, data_zr} from "../game-data.js";
const pe = "" + new URL("../../assets/compass.png", import.meta.url).href;
let X = null;
function ue() {
  return typeof Image > "u" ? null : (X || (X = new Image(), X.src = pe), X);
}
function le(_0x33e9e7, _0x51da76, _0x1a37ec, _0x348824) {
  const _0x39b2b8 = ue();
  if (_0x39b2b8 && _0x39b2b8.complete && _0x39b2b8.naturalWidth) {
    (_0x33e9e7.save(), _0x33e9e7.imageSmoothingEnabled = !1, _0x33e9e7.drawImage(_0x39b2b8, _0x51da76, _0x1a37ec, _0x348824, _0x348824), _0x33e9e7.restore());
    return;
  }
  (_0x33e9e7.fillStyle = "#6a9aff", _0x33e9e7.beginPath(), _0x33e9e7.arc(_0x51da76 + _0x348824 / 2, _0x1a37ec + _0x348824 / 2, _0x348824 / 2.4, 0, Math.PI * 2), _0x33e9e7.fill());
}
const me = ["pickup", "theme", "six", "char", "weapon"], ke = ["char"], be = () => !!game.save.storyClear[1];
function Y() {
  return game.debug ? [{
    "kind": "pickup"
  }, ...data_zr.map((_0x4f7c19, _0x2e47be) => ({
    "kind": "theme",
    "theme": _0x2e47be
  })), {
    "kind": "six"
  }, {
    "kind": "char"
  }, {
    "kind": "weapon"
  }] : me.filter(_0x275abc => !ke.includes(_0x275abc) && (_0x275abc !== "theme" || be())).map(_0x1666f9 => ({
    "kind": _0x1666f9
  }));
}
const q = () => CHARACTER_LIST.filter(_0x20aed0 => _0x20aed0.rarity === 5), ee = () => CHARACTER_LIST.filter(_0x4bad1c => _0x4bad1c.rarity === 4), Q = 9;
class N {
  constructor(_0x1e94db) {
    this.back = _0x1e94db;
  }
  banner = 0;
  btn = 1;
  phase = "menu";
  t = 0;
  results = [];
  flipped = 0;
  flipT = 0;
  flipAnim = 0;
  revealIdx = -1;
  revealT = 0;
  sparks = [];
  shakeT = 0;
  maxR = 3;
  stoneAnim = 0;
  picker = null;
  detail = null;
  forceNext = {};
  forcePick = null;
  enter() {
    (runtime_w.playMusic("gacha"), game.save.freePullUsed || (this.btn = Math.max(0, this.buttons().findIndex(_0xf9c03a => _0xf9c03a.free))));
  }
  tab() {
    const _0x25750f = Y();
    return (this.banner >= _0x25750f.length && (this.banner = _0x25750f.length - 1), _0x25750f[this.banner]);
  }
  get kind() {
    return this.tab().kind;
  }
  themeIdx() {
    return this.tab().theme;
  }
  freeAvailable() {
    return !game.save.freePullUsed && this.kind !== "weapon" && this.kind !== "six";
  }
  buttons() {
    if (this.kind === "six") {
      const _0x3e2ad5 = game.save.compass ?? 0;
      return [{
        "label": "1회 계약",
        "sub": "별의 나침반 1",
        "count": 1,
        "free": !1,
        "ok": _0x3e2ad5 >= 1
      }, {
        "label": "10회 계약",
        "sub": "별의 나침반 10",
        "count": 10,
        "free": !1,
        "ok": _0x3e2ad5 >= 10
      }];
    }
    const _0x4eb884 = game.save.stones, _0x13cc08 = [{
      "label": "1회 계약",
      "sub": "영혼석 " + runtime_H2(1),
      "count": 1,
      "free": !1,
      "ok": _0x4eb884 >= runtime_H2(1)
    }, {
      "label": "10회 계약",
      "sub": "영혼석 " + runtime_H2(10) + " · ★4↑ 확정",
      "count": 10,
      "free": !1,
      "ok": _0x4eb884 >= runtime_H2(10)
    }, {
      "label": "100회 계약",
      "sub": "영혼석 " + runtime_H2(100) + " · 10회마다 ★4↑",
      "count": 100,
      "free": !1,
      "ok": _0x4eb884 >= runtime_H2(100)
    }];
    return (this.freeAvailable() && _0x13cc08.push({
      "label": "첫 계약 · 무료 10회",
      "sub": "★4 이상 확정!",
      "count": 10,
      "free": !0,
      "ok": !0
    }), _0x13cc08);
  }
  doPull(_0x5da261, _0x1a6199) {
    const _0x2e7e89 = this.kind === "weapon" ? "weapon" : "char", _0x75da4d = game.debug ? this.forceNext[_0x2e7e89] : void 0, _0xbde402 = runtime_Fd(game.save, this.kind, _0x5da261, _0x1a6199, Math.random, _0x75da4d, this.themeIdx());
    if ((_0xbde402 && _0x75da4d && delete this.forceNext[_0x2e7e89], !_0xbde402)) {
      (runtime_w.play("error"), game.toast(this.kind === "six" ? "별의 나침반이 부족하다 — 주간 1위 보상으로 얻을 수 있다" : "영혼석이 부족하다 — 런에서 영혼석을 모으자", "#ff8080"));
      return;
    }
    (game.persist(), this.results = _0xbde402, this.maxR = Math.max(..._0xbde402.map(_0x4e2d29 => _0x4e2d29.rarity)), this.phase = "throw", this.t = 0, this.flipped = 0, this.flipT = 0, runtime_w.play("gacha_throw"));
  }
  burst(_0x4e0f54, _0x3b27eb, _0x311835, _0x4461ca, _0x2839de = 3) {
    for (let _0x5af1aa = 0; _0x5af1aa < _0x4461ca; _0x5af1aa++) {
      const _0x18d71d = Math.random() * Math.PI * 2, _0x9c8663 = _0x2839de * (0.3 + Math.random());
      this.sparks.push({
        "x": _0x4e0f54,
        "y": _0x3b27eb,
        "vx": Math.cos(_0x18d71d) * _0x9c8663,
        "vy": Math.sin(_0x18d71d) * _0x9c8663,
        "life": 30 + Math.random() * 30,
        "col": _0x311835
      });
    }
  }
  cardPos(_0x31c05e) {
    if (this.results.length === 1) return [210, 70, 60, 90];
    const _0x3b0662 = 64, _0x1d66ac = 92, _0x18dd2b = _0x31c05e % 5, _0x3e0dc6 = Math.floor(_0x31c05e / 5);
    return [240 - (5 * (_0x3b0662 + 8) - 8) / 2 + _0x18dd2b * (_0x3b0662 + 8), 36 + _0x3e0dc6 * (_0x1d66ac + 12), _0x3b0662, _0x1d66ac];
  }
  startReveal(_0x280dad) {
    const _0x50a2ef = this.results[_0x280dad];
    return _0x50a2ef.rarity >= 5 || _0x50a2ef.rarity === 4 && _0x50a2ef.isNew && _0x50a2ef.type === "char" ? (this.phase = "reveal", this.revealIdx = _0x280dad, this.revealT = 0, runtime_w.play(_0x50a2ef.rarity >= 5 ? "reveal_5" : "reveal_4"), _0x50a2ef.rarity >= 5 && (this.shakeT = 40), !0) : !1;
  }
  flipNext() {
    if (this.flipped >= this.results.length) return;
    const _0x283cb3 = this.flipped++;
    this.flipAnim = 12;
    const _0x4511f9 = this.results[_0x283cb3], [_0x597b59, _0x356b07, _0x232c5a, _0xbc4210] = this.cardPos(_0x283cb3);
    (this.burst(_0x597b59 + _0x232c5a / 2, _0x356b07 + _0xbc4210 / 2, runtime_Rn[_0x4511f9.rarity], _0x4511f9.rarity >= 5 ? 40 : _0x4511f9.rarity === 4 ? 20 : 8, _0x4511f9.rarity >= 5 ? 4 : 2.5), runtime_w.play("reveal_" + Math.min(5, _0x4511f9.rarity)), runtime_w.play("flip"), _0x4511f9.rarity >= 5 && (this.shakeT = 20), this.startReveal(_0x283cb3));
  }
  update() {
    const _0xbcff84 = game.input;
    (this.t++, this.shakeT > 0 && this.shakeT--, this.flipAnim > 0 && this.flipAnim--);
    for (const _0x3bf16a of this.sparks) (_0x3bf16a.x += _0x3bf16a.vx, _0x3bf16a.y += _0x3bf16a.vy, _0x3bf16a.vy += 0.05, _0x3bf16a.vx *= 0.97, _0x3bf16a.life--);
    this.sparks = this.sparks.filter(_0x45bc8a => _0x45bc8a.life > 0);
    const _0x227cd6 = _0xbcff84.menu("back");
    if(this.phase==='menu' && this.kind==='weapon' && (game.input.raw('KeyT') || runtime_kt.hover()==='weapon-pickup'&&runtime_kt.mouse.click)) {openWeaponPicker(game,WEAPONS);return;}
    switch (this.phase) {
      case "menu":
        {
          if (this.picker) {
            this.updatePicker();
            break;
          }
          if (this.detail) {
            this.updateDetail();
            break;
          }
          if (this.forcePick) {
            this.updateForcePick();
            break;
          }
          if (game.debug && (_0xbcff84.raw("KeyN") || runtime_kt.hover() === "gforce" && runtime_kt.mouse.click)) {
            const _0x580721 = this.forceList(), _0x16d0b8 = this.forceNext[this.kind === "weapon" ? "weapon" : "char"];
            (this.forcePick = {
              "sel": Math.max(0, _0x580721.findIndex(_0xd8a8cc => _0xd8a8cc.id === _0x16d0b8)),
              "scroll": 0
            }, runtime_w.play("select"));
            break;
          }
          if (_0xbcff84.raw("KeyI") || runtime_kt.hover() === "gdetail" && runtime_kt.mouse.click) {
            (this.detail = {
              "scroll": 0
            }, runtime_w.play("select"));
            break;
          }
          if (game.debug && this.kind === "pickup" && (_0xbcff84.raw("KeyP") || runtime_kt.hover() === "pkopen" && runtime_kt.mouse.click)) {
            this.openPicker();
            break;
          }
          if (_0xbcff84.menu("back")) {
            game.go(this.back);
            return;
          }
          (_0xbcff84.menu("mup") && (this.banner = (this.banner + Y().length - 1) % Y().length, runtime_w.play("select")), _0xbcff84.menu("mdown") && (this.banner = (this.banner + 1) % Y().length, runtime_w.play("select")));
          const _0x3f0ad9 = this.buttons();
          (this.btn >= _0x3f0ad9.length && (this.btn = 1), _0xbcff84.menu("mleft") && (this.btn = (this.btn + _0x3f0ad9.length - 1) % _0x3f0ad9.length), _0xbcff84.menu("mright") && (this.btn = (this.btn + 1) % _0x3f0ad9.length));
          const _0x13bd1e = runtime_kt.hover();
          let _0x4d8b61 = !1;
          if ((_0x13bd1e?.startsWith("gb:") && runtime_kt.mouse.moved && (this.btn = Number(_0x13bd1e.slice(3))), _0x13bd1e?.startsWith("gb:") && runtime_kt.mouse.click && (_0x4d8b61 = !0), _0x13bd1e?.startsWith("gt:") && runtime_kt.mouse.click && (this.banner = Number(_0x13bd1e.slice(3))), _0xbcff84.menu("ok") || _0x4d8b61)) {
            const _0x56ec13 = _0x3f0ad9[this.btn];
            _0x56ec13.ok ? this.doPull(_0x56ec13.count, _0x56ec13.free) : (runtime_w.play("error"), game.toast(this.kind === "six" ? "별의 나침반이 부족하다" : "영혼석이 부족하다", "#ff8080"));
          }
          break;
        }
      case "throw":
        (this.t === 50 && (runtime_w.play("gacha_impact"), this.shakeT = 10, this.burst(240, 150, "#ffffff", 30, 3)), this.t >= 62 && (this.phase = "beam", this.t = 0, runtime_w.play("beam_" + Math.min(5, this.maxR)), this.maxR >= 5 && (this.shakeT = 60)), _0x227cd6 && this.toSummary());
        break;
      case "beam":
        if ((this.t % 4 === 0 && this.burst(240 + (Math.random() - 0.5) * 40, 160, runtime_Rn[this.maxR], 3, 2), this.t >= (this.maxR >= 5 ? 110 : 80) || _0xbcff84.menu("ok") && this.t > 30)) {
          if (this.results.length > 10) {
            this.toSummary();
            break;
          }
          (this.phase = "cards", this.t = 0, this.flipT = 20);
        }
        _0x227cd6 && this.toSummary();
        break;
      case "cards":
        {
          if (_0x227cd6) {
            this.toSummary();
            break;
          }
          if (this.flipped < this.results.length) {
            this.flipT--;
            const _0x55617a = this.results[this.flipped], _0x50384b = _0x55617a && _0x55617a.rarity >= 5 ? 40 : 12;
            (this.flipT <= 0 || _0xbcff84.menu("ok") || runtime_kt.mouse.click) && (this.flipNext(), this.flipT = _0x50384b);
          } else this.flipT > 0 ? this.flipT-- : (_0xbcff84.menu("ok") || runtime_kt.mouse.click) && (this.phase = "summary", this.flipT = 0, this.t = 0);
          break;
        }
      case "reveal":
        (this.revealT++, this.revealT % 3 === 0 && this.burst(240, 130, runtime_Rn[this.results[this.revealIdx].rarity], 2, 4), this.revealT > 40 && (_0xbcff84.menu("ok") || runtime_kt.mouse.click || _0x227cd6) && (this.phase = "cards", this.flipT = 10, _0x227cd6 && this.toSummary()));
        break;
      case "summary":
        this.t > 15 && (_0xbcff84.menu("ok") || _0xbcff84.menu("back") || runtime_kt.mouse.click) && (this.phase = "menu", this.t = 0, runtime_w.playMusic("gacha"), this.btn >= this.buttons().length && (this.btn = 1));
        break;
    }
  }
  toSummary() {
    (this.phase = "summary", this.flipT = 0, this.flipped = this.results.length, this.t = 0, runtime_w.play("reveal_" + Math.min(5, this.maxR)));
  }
  shake() {
    if (this.shakeT <= 0) return [0, 0];
    const _0x10b33d = Math.min(4, this.shakeT / 6);
    return [(Math.random() - 0.5) * _0x10b33d * 2, (Math.random() - 0.5) * _0x10b33d * 2];
  }
  world(_0x385da4) {
    const _0xc1073c = _0x385da4.createLinearGradient(0, 0, 0, 270);
    (_0xc1073c.addColorStop(0, "#0a0818"), _0xc1073c.addColorStop(1, "#1a1030"), _0x385da4.fillStyle = _0xc1073c, _0x385da4.fillRect(0, 0, 480, 270));
    for (let _0x3d6aae = 0; _0x3d6aae < 60; _0x3d6aae++) {
      const _0x3fe5f4 = _0x3d6aae * 131 % 480, _0x5cc6ef = (_0x3d6aae * 71 + this.t * 0.1 * (_0x3d6aae % 3 + 1)) % 270;
      (_0x385da4.fillStyle = "rgba(200,180,255," + (0.15 + _0x3d6aae % 5 * 0.08) + ")", _0x385da4.fillRect(_0x3fe5f4, 270 - _0x5cc6ef, 1, 1));
    }
    (_0x385da4.fillStyle = "#2a2040", _0x385da4.fillRect(180, 190, 120, 80), _0x385da4.fillStyle = "#3a3058", _0x385da4.fillRect(170, 184, 140, 8), _0x385da4.fillStyle = "#4a4070", _0x385da4.fillRect(200, 150, 80, 36), _0x385da4.fillStyle = "#5a5088", _0x385da4.fillRect(196, 146, 88, 6), _0x385da4.save(), _0x385da4.translate(240, 196), _0x385da4.scale(1, 0.3), _0x385da4.strokeStyle = runtime_q("#9ef0ff", 0.4 + 0.2 * Math.sin(this.t * 0.05)), _0x385da4.lineWidth = 2, _0x385da4.beginPath(), _0x385da4.arc(0, 0, 70, 0, Math.PI * 2), _0x385da4.stroke(), _0x385da4.beginPath());
    for (let _0x5239bc = 0; _0x5239bc <= 6; _0x5239bc++) {
      const _0x5be9ba = _0x5239bc / 6 * Math.PI * 2 + this.t * 0.01;
      _0x385da4.lineTo(Math.cos(_0x5be9ba) * 60, Math.sin(_0x5be9ba) * 60);
    }
    if ((_0x385da4.stroke(), _0x385da4.restore(), this.phase === "beam" || this.phase === "throw" && this.t > 50)) {
      const _0x32e4c6 = this.phase === "beam" ? runtime_Rn[this.maxR] : "#ffffff", _0x3bde38 = this.phase === "beam" ? Math.min(1, this.t / 20) : 1 - (62 - this.t) / 12, _0x2cfe54 = (this.maxR >= 5 ? 60 : this.maxR === 4 ? 40 : 28) * _0x3bde38;
      (_0x385da4.save(), _0x385da4.globalCompositeOperation = "lighter");
      const _0x693220 = _0x385da4.createLinearGradient(240 - _0x2cfe54, 0, 240 + _0x2cfe54, 0);
      if ((_0x693220.addColorStop(0, runtime_q(_0x32e4c6, 0)), _0x693220.addColorStop(0.5, runtime_q(_0x32e4c6, 0.85)), _0x693220.addColorStop(1, runtime_q(_0x32e4c6, 0)), _0x385da4.fillStyle = _0x693220, _0x385da4.fillRect(240 - _0x2cfe54, 0, _0x2cfe54 * 2, 180), _0x385da4.fillStyle = runtime_q("#ffffff", 0.7 * _0x3bde38), _0x385da4.fillRect(240 - _0x2cfe54 * 0.12, 0, _0x2cfe54 * 0.24, 180), this.maxR >= 5 && this.phase === "beam")) for (let _0x5308ff = 0; _0x5308ff < 12; _0x5308ff++) {
        const _0x59f6ef = _0x5308ff / 12 * Math.PI * 2 + this.t * 0.02;
        (_0x385da4.strokeStyle = runtime_q(this.maxR >= 6 ? runtime_Rn[this.maxR] : "#ffe080", 0.25), _0x385da4.lineWidth = 6, _0x385da4.beginPath(), _0x385da4.moveTo(240, 150), _0x385da4.lineTo(240 + Math.cos(_0x59f6ef) * 400, 150 + Math.sin(_0x59f6ef) * 400), _0x385da4.stroke());
      }
      _0x385da4.restore();
    }
  }
  openPicker() {
    const _0x3578ba = runtime_j2(game.save);
    (this.picker = {
      "row": 0,
      "col": Math.max(0, q().findIndex(_0x573f62 => _0x573f62.id === _0x3578ba.five)),
      "five": _0x3578ba.five,
      "four": [..._0x3578ba.four]
    }, runtime_w.play("select"));
  }
  updatePicker() {
    const _0x32a278 = this.picker, _0x453f1d = game.input;
    if (!game.debug || _0x453f1d.menu("back")) {
      this.picker = null;
      return;
    }
    const _0x2b0c74 = _0x4e8408 => _0x4e8408 === 0 ? q().length : _0x4e8408 === 1 ? ee().length : 3, _0x60bcb = Q;
    if (_0x453f1d.menu("mdown")) {
      if (_0x32a278.row < 2 && _0x32a278.col + _0x60bcb < _0x2b0c74(_0x32a278.row)) _0x32a278.col += _0x60bcb; else {
        const _0x21253a = _0x32a278.col % _0x60bcb;
        (_0x32a278.row = (_0x32a278.row + 1) % 3, _0x32a278.col = _0x32a278.row === 2 ? 0 : Math.min(_0x21253a, _0x2b0c74(_0x32a278.row) - 1));
      }
    }
    if (_0x453f1d.menu("mup")) {
      if (_0x32a278.row < 2 && _0x32a278.col - _0x60bcb >= 0) _0x32a278.col -= _0x60bcb; else {
        const _0x578219 = _0x32a278.row === 2 ? 0 : _0x32a278.col % _0x60bcb;
        if ((_0x32a278.row = (_0x32a278.row + 2) % 3, _0x32a278.row < 2)) {
          const _0x359e1d = _0x2b0c74(_0x32a278.row), _0x26519f = Math.floor((_0x359e1d - 1) / _0x60bcb) * _0x60bcb;
          _0x32a278.col = Math.min(_0x26519f + _0x578219, _0x359e1d - 1);
        } else _0x32a278.col = 0;
      }
    }
    (_0x453f1d.menu("mleft") && _0x32a278.col--, _0x453f1d.menu("mright") && _0x32a278.col++, _0x32a278.col = (_0x32a278.col + _0x2b0c74(_0x32a278.row)) % _0x2b0c74(_0x32a278.row));
    const _0x4f6c55 = runtime_kt.hover();
    let _0xe5beef = !1;
    const _0x3724f0 = _0x4f6c55?.match(/^pk([54b]):(\d+)$/);
    if ((_0x3724f0 && ((runtime_kt.mouse.moved || runtime_kt.mouse.click) && (_0x32a278.row = _0x3724f0[1] === "5" ? 0 : _0x3724f0[1] === "4" ? 1 : 2, _0x32a278.col = Number(_0x3724f0[2])), runtime_kt.mouse.click && (_0xe5beef = !0)), !!(_0x453f1d.menu("ok") || _0xe5beef))) {
      if (_0x32a278.row === 0) (_0x32a278.five = q()[_0x32a278.col].id, runtime_w.play("select")); else {
        if (_0x32a278.row === 1) {
          const _0x597a9a = ee()[_0x32a278.col].id;
          (_0x32a278.four.includes(_0x597a9a) ? _0x32a278.four = _0x32a278.four.filter(_0x7acc0c => _0x7acc0c !== _0x597a9a) : (_0x32a278.four.push(_0x597a9a), _0x32a278.four.length > 2 && _0x32a278.four.shift()), runtime_w.play("select"));
        } else {
          if (_0x32a278.col === 0) {
            if (_0x32a278.four.length !== 2) {
              (runtime_w.play("error"), game.toast("★4 픽업은 2명을 골라야 한다", "#ff8080"));
              return;
            }
            (game.save.pickupOverride = {
              "five": _0x32a278.five,
              "four": [_0x32a278.four[0], _0x32a278.four[1]]
            }, game.persist(), runtime_w.play("confirm"), game.toast("[디버그] 픽업 지정: " + CHARACTERS[_0x32a278.five].name + " / " + _0x32a278.four.map(_0x21a8af => CHARACTERS[_0x21a8af].name).join(" · "), "#80ffa0"), this.picker = null);
          } else _0x32a278.col === 1 ? (game.save.pickupOverride = null, game.persist(), runtime_w.play("confirm"), game.toast("[디버그] 자동 로테이션 픽업으로 복귀", "#80ffa0"), this.picker = null) : this.picker = null;
        }
      }
    }
  }
  renderPicker(_0x2956bc) {
    const _0xefe78b = this.picker;
    (_0x2956bc.fillStyle = "rgba(4,2,10,0.95)", _0x2956bc.fillRect(0, 0, 480, 270), runtime_ye(_0x2956bc, 36, 18, 408, 230, {
      "border": "#80ffa0"
    }), drawText(_0x2956bc, "[디버그] 픽업 직접 선택", 46, 24, {
      "size": 10,
      "color": "#80ffa0",
      "bold": !0
    }), drawText(_0x2956bc, game.save.pickupOverride ? "현재: 직접 지정" : "현재: 자동 로테이션", 434, 27, {
      "size": 6,
      "align": "right",
      "color": "#a8a0c0"
    }));
    const _0x53258b = 41, _0x18b07a = 38, _0x25aa6a = (_0x37169c, _0x561545, _0x9ba181, _0xbfd604, _0x59a5e5, _0x5b7998) => {
      (_0x2956bc.fillStyle = _0xbfd604 ? runtime_q(runtime_Rn[_0x37169c.rarity], 0.4) : "rgba(255,255,255,0.05)", _0x2956bc.fillRect(_0x561545, _0x9ba181, _0x53258b, _0x18b07a), _0x2956bc.strokeStyle = _0x59a5e5 ? "#ffffff" : _0xbfd604 ? runtime_Rn[_0x37169c.rarity] : "#3a3048", _0x2956bc.strokeRect(_0x561545 + 0.5, _0x9ba181 + 0.5, _0x53258b - 1, _0x18b07a - 1), _0x2956bc.save(), _0x2956bc.beginPath(), _0x2956bc.rect(_0x561545 + 1, _0x9ba181 + 1, _0x53258b - 2, _0x18b07a - 2), _0x2956bc.clip(), _0x2956bc.drawImage(runtime_Qf(_0x37169c.id, _0xbfd604 ? "castUp" : "idle0"), _0x561545 + _0x53258b / 2 - 20, _0x9ba181 - 10, 40, 40), _0x2956bc.restore(), drawText(_0x2956bc, _0x37169c.name, _0x561545 + _0x53258b / 2, _0x9ba181 + 29, {
        "size": 5,
        "align": "center",
        "color": _0xbfd604 ? "#ffe080" : "#ffffff",
        "maxW": _0x53258b - 2
      }), _0xbfd604 && drawText(_0x2956bc, "✔", _0x561545 + _0x53258b - 3, _0x9ba181 + 2, {
        "size": 6,
        "align": "right",
        "color": "#80ffa0",
        "bold": !0
      }), runtime_kt.add(_0x5b7998, _0x561545, _0x9ba181, _0x53258b, _0x18b07a));
    }, _0x5f271a = (_0x4db5bc, _0x2523d7, _0x45ae47, _0x41ef47, _0x3cc0b7) => (_0x4db5bc.forEach((_0x2c85b8, _0x436323) => _0x25aa6a(_0x2c85b8, 46 + _0x436323 % Q * (_0x53258b + 2), _0x2523d7 + Math.floor(_0x436323 / Q) * (_0x18b07a + 2), _0x41ef47(_0x2c85b8.id), _0xefe78b.row === _0x45ae47 && _0xefe78b.col === _0x436323, _0x3cc0b7 + ":" + _0x436323)), _0x2523d7 + Math.ceil(_0x4db5bc.length / Q) * (_0x18b07a + 2));
    drawText(_0x2956bc, "★5 픽업 (1명)", 46, 40, {
      "size": 7,
      "color": runtime_Rn[5]
    });
    let _0x5b9926 = _0x5f271a(q(), 50, 0, _0x4fc710 => _0xefe78b.five === _0x4fc710, "pk5");
    (drawText(_0x2956bc, "★4 픽업 (2명) — " + _0xefe78b.four.length + "/2", 46, _0x5b9926 + 2, {
      "size": 7,
      "color": runtime_Rn[4]
    }), _0x5b9926 = _0x5f271a(ee(), _0x5b9926 + 12, 1, _0x17476b => _0xefe78b.four.includes(_0x17476b), "pk4"));
    const _0x40f4ba = Math.min(212, _0x5b9926 + 6);
    (["적용", "자동 로테이션 복귀", "취소"].forEach((_0x4896cd, _0x1e3571) => {
      (runtime_ua(_0x2956bc, 70 + _0x1e3571 * 116, _0x40f4ba, 108, 20, _0x4896cd, _0xefe78b.row === 2 && _0xefe78b.col === _0x1e3571, {
        "col": _0x1e3571 === 0 ? "#80ffa0" : "#9ef0ff"
      }), runtime_kt.add("pkb:" + _0x1e3571, 70 + _0x1e3571 * 116, _0x40f4ba, 108, 20));
    }), drawText(_0x2956bc, "천장 카운트는 그대로 유지된다", 240, _0x40f4ba + 23, {
      "size": 6,
      "align": "center",
      "color": "#8a8098"
    }), runtime_Xe(_0x2956bc, [["방향키", "이동"], [game.input.label("attack"), "선택"], ["Esc", "취소"]]));
  }
  detailItems() {
    const _0x4ef4df = this.kind, _0x3f5033 = _0x4ef4df === "weapon" ? data_ve : CHARACTER_LIST, _0x407fce = _0x4ef4df === "pickup" ? runtime_j2(game.save) : null, _0x180beb = _0x4ef4df === "theme" ? runtime_Bo(game.save, this.themeIdx()) : null, _0x29b9bb = [];
    if (_0x4ef4df === "six") {
      for (const [_0x569454, _0x146f60] of compassRates(!!game.save.eightUnlocked)) {
        const _0x11b8d4 = CHARACTER_LIST.filter(_0x29f460 => _0x29f460.rarity === _0x569454);
        for (const _0x55b52a of _0x11b8d4) _0x29b9bb.push({
          "id": _0x55b52a.id,
          "name": _0x55b52a.name,
          "rarity": _0x569454,
          "p": _0x146f60 / _0x11b8d4.length,
          "pickup": !1
        });
      }
      return _0x29b9bb;
    }
    for (const [_0x30d433, _0xb8626d] of normalRates(!!game.save.eightUnlocked).filter(([,rate])=>rate>0)) {
      const _0x104cc5 = _0x3f5033.filter(_0x24e494 => _0x24e494.rarity === _0x30d433);
      if (!_0x104cc5.length) continue;
      if(this.kind==='weapon' && _0x30d433===7) {
        const target=selectedWeapon(game.save,WEAPONS),rate=getProbabilities().weaponPickup;
        for(const weapon of _0x104cc5) _0x29b9bb.push({id:weapon.id,name:weapon.name,rarity:7,p:_0xb8626d*(weapon.id===target.id?rate:(1-rate)/(_0x104cc5.length-1)),pickup:weapon.id===target.id});
        continue;
      }
      if (_0x180beb && (_0x30d433 === 7 || _0x30d433 === 6)) {
        const _0x523d10 = _0x30d433 === 7 ? [_0x180beb.r7] : _0x180beb.r6;
        for (const _0x275fd4 of _0x104cc5) _0x523d10.includes(_0x275fd4.id) && _0x29b9bb.push({
          "id": _0x275fd4.id,
          "name": _0x275fd4.name,
          "rarity": _0x30d433,
          "p": _0xb8626d / _0x523d10.length,
          "pickup": !0
        });
        continue;
      }
      const _0x405ef4 = _0x104cc5.filter(_0x34d93f => data_X[_0x34d93f.id] !== void 0), _0x4df995 = _0x104cc5.filter(_0x69da7 => data_X[_0x69da7.id] === void 0), _0x116793 = _0x405ef4.length && _0x4df995.length ? 1 - _0x405ef4.reduce((_0x11e1a2, _0xb217be) => _0x11e1a2 + data_X[_0xb217be.id], 0) : 1, _0x36881c = _0x407fce ? _0x30d433 === 5 ? [_0x407fce.five] : _0x30d433 === 4 ? _0x407fce.four : [] : [], _0x122cbe = _0x30d433 === 5 ? GACHA_RULES.pickupRate5 : GACHA_RULES.pickupRate4;
      for (const _0x486a5a of _0x104cc5) {
        let _0x445cf6;
        const _0x3b2187 = _0x36881c.includes(_0x486a5a.id);
        (_0x36881c.length && _0x30d433 === 5 && _0x104cc5.length > _0x36881c.length ? _0x445cf6 = _0x3b2187 ? _0x122cbe / _0x36881c.length : (1 - _0x122cbe) / (_0x104cc5.length - _0x36881c.length) : _0x36881c.length && _0x30d433 === 4 ? _0x445cf6 = (_0x3b2187 ? _0x122cbe / _0x36881c.length : 0) + (1 - _0x122cbe) / _0x104cc5.length : _0x405ef4.length && _0x4df995.length ? _0x445cf6 = data_X[_0x486a5a.id] ?? _0x116793 / _0x4df995.length : _0x445cf6 = 1 / _0x104cc5.length, _0x29b9bb.push({
          "id": _0x486a5a.id,
          "name": _0x486a5a.name,
          "rarity": _0x30d433,
          "p": _0xb8626d * _0x445cf6,
          "pickup": _0x36881c.includes(_0x486a5a.id)
        }));
      }
    }
    return _0x29b9bb;
  }
  forceList() {
    return [...this.kind === "weapon" ? data_ve : CHARACTER_LIST].filter(item=>eightContentVisible(game.save,item)).sort((_0x2b28ca, _0x10656a) => _0x10656a.rarity - _0x2b28ca.rarity);
  }
  static FCOLS = 9;
  static FROWS = 4;
  updateForcePick() {
    const _0x188f6e = game.input, _0x2cf0a7 = this.forcePick, _0x3e911c = this.forceList(), _0x3dea8a = N.FCOLS, _0x58499a = this.kind === "weapon" ? "weapon" : "char", _0x2bffa1 = runtime_kt.hover();
    if (_0x188f6e.menu("back") || _0x188f6e.raw("KeyN")) {
      (this.forcePick = null, runtime_w.play("cancel"));
      return;
    }
    (_0x188f6e.menu("mleft") && (_0x2cf0a7.sel = Math.max(0, _0x2cf0a7.sel - 1)), _0x188f6e.menu("mright") && (_0x2cf0a7.sel = Math.min(_0x3e911c.length - 1, _0x2cf0a7.sel + 1)), _0x188f6e.menu("mup") && (_0x2cf0a7.sel = Math.max(0, _0x2cf0a7.sel - _0x3dea8a)), _0x188f6e.menu("mdown") && (_0x2cf0a7.sel = Math.min(_0x3e911c.length - 1, _0x2cf0a7.sel + _0x3dea8a)), _0x2bffa1?.startsWith("gf:") && runtime_kt.mouse.moved && (_0x2cf0a7.sel = Number(_0x2bffa1.slice(3))));
    const _0x471f7d = Math.floor(_0x2cf0a7.sel / _0x3dea8a);
    if ((_0x471f7d < _0x2cf0a7.scroll && (_0x2cf0a7.scroll = _0x471f7d), _0x471f7d >= _0x2cf0a7.scroll + N.FROWS && (_0x2cf0a7.scroll = _0x471f7d - N.FROWS + 1), _0x2bffa1 === "gfclear" && runtime_kt.mouse.click || _0x188f6e.raw("KeyC"))) {
      (delete this.forceNext[_0x58499a], this.forcePick = null, game.toast("[디버그] 다음 뽑기 지정 해제", "#80ffa0"));
      return;
    }
    if (_0x188f6e.menu("ok") || _0x2bffa1?.startsWith("gf:") && runtime_kt.mouse.click) {
      const _0x2ddce2 = _0x3e911c[_0x2cf0a7.sel];
      (this.forceNext[_0x58499a] = _0x2ddce2.id, this.forcePick = null, runtime_w.play("gem"), game.toast("[디버그] 다음 뽑기 첫 장: " + _0x2ddce2.name, "#80ffa0"));
    }
  }
  renderForcePick(_0xce65dc) {
    const _0x2c768a = this.forcePick, _0x13abdd = this.forceList(), _0x71ffa9 = N.FCOLS, _0x28abd3 = this.kind === "weapon";
    (_0xce65dc.fillStyle = "rgba(4,2,10,0.95)", _0xce65dc.fillRect(0, 0, 480, 270), runtime_ye(_0xce65dc, 20, 14, 440, 236, {
      "border": "#80ffa0"
    }), drawText(_0xce65dc, "[디버그] 다음 뽑기에 나올 " + (_0x28abd3 ? "무기" : "영웅") + " 지정", 30, 20, {
      "size": 10,
      "color": "#80ffa0",
      "bold": !0
    }), drawText(_0xce65dc, "1회·10회 계약의 첫 장이 이것으로 나온다 (한 번 쓰면 해제, 천장 카운트는 그대로)", 30, 34, {
      "size": 6,
      "color": "#a8a0c0"
    }));
    const _0x1768f4 = Math.ceil(_0x13abdd.length / _0x71ffa9);
    for (let _0x468ace = _0x2c768a.scroll; _0x468ace < Math.min(_0x1768f4, _0x2c768a.scroll + N.FROWS); _0x468ace++) for (let _0x18609b = 0; _0x18609b < _0x71ffa9; _0x18609b++) {
      const _0x1488cb = _0x468ace * _0x71ffa9 + _0x18609b, _0x38473e = _0x13abdd[_0x1488cb];
      if (!_0x38473e) break;
      const _0x555390 = 30 + _0x18609b * 47, _0x3c9224 = 46 + (_0x468ace - _0x2c768a.scroll) * 46, _0x55b305 = _0x1488cb === _0x2c768a.sel;
      if ((_0xce65dc.fillStyle = _0x55b305 ? runtime_q(runtime_Rn[_0x38473e.rarity], 0.45) : runtime_q(runtime_Rn[_0x38473e.rarity], 0.1), _0xce65dc.fillRect(_0x555390, _0x3c9224, 44, 43), _0xce65dc.strokeStyle = _0x55b305 ? "#ffffff" : runtime_q(runtime_Rn[_0x38473e.rarity], 0.6), _0xce65dc.strokeRect(_0x555390 + 0.5, _0x3c9224 + 0.5, 43, 42), _0xce65dc.save(), _0xce65dc.beginPath(), _0xce65dc.rect(_0x555390 + 1, _0x3c9224 + 1, 42, 30), _0xce65dc.clip(), _0x28abd3)) {
        const _0x4a44eb = WEAPONS[_0x38473e.id];
        drawItemIcon(_0xce65dc, _0x4a44eb.id, _0x555390 + 9, _0x3c9224 + 3, 26) || runtime_de(_0xce65dc, _0x4a44eb.icon, _0x555390 + 9, _0x3c9224 + 3, 26, _0x4a44eb.col);
      } else _0xce65dc.drawImage(runtime_Qf(_0x38473e.id, "idle0"), _0x555390 + 22 - 24, _0x3c9224 + 33 - 44, 48, 48);
      (_0xce65dc.restore(), drawText(_0xce65dc, _0x38473e.name.replace(/「.*」/, "").trim(), _0x555390 + 22, _0x3c9224 + 32, {
        "size": 5,
        "align": "center",
        "color": "#ffffff",
        "maxW": 42
      }), runtime_kt.add("gf:" + _0x1488cb, _0x555390, _0x3c9224, 44, 43));
    }
    (_0x2c768a.scroll > 0 && drawText(_0xce65dc, "▲", 240, 40, {
      "size": 7,
      "align": "center",
      "color": "#c0b0e0"
    }), _0x2c768a.scroll + N.FROWS < _0x1768f4 && drawText(_0xce65dc, "▼", 240, 230, {
      "size": 7,
      "align": "center",
      "color": "#c0b0e0"
    }));
    const _0x7daf34 = this.forceNext[_0x28abd3 ? "weapon" : "char"], _0x48216f = runtime_kt.hover() === "gfclear";
    (_0xce65dc.fillStyle = _0x48216f ? "rgba(255,128,128,0.3)" : "rgba(255,128,128,0.12)", _0xce65dc.fillRect(360, 230, 92, 13), _0xce65dc.strokeStyle = "#ff9090", _0xce65dc.strokeRect(360.5, 230.5, 91, 12), drawText(_0xce65dc, "지정 해제 (C)", 406, 233, {
      "size": 6,
      "align": "center",
      "color": "#ffb0b0"
    }), runtime_kt.add("gfclear", 360, 230, 92, 13), drawText(_0xce65dc, _0x7daf34 ? "현재 지정: " + (_0x28abd3 ? WEAPONS[_0x7daf34] : CHARACTERS[_0x7daf34]).name : "현재 지정 없음", 30, 233, {
      "size": 6,
      "color": "#80ffa0"
    }), runtime_Xe(_0xce65dc, [["방향키", "선택"], [game.input.label("attack"), "지정"], ["C", "해제"], ["N / Esc", "닫기"]]));
  }
  static DCOLS = 5;
  static DROWS = 5;
  updateDetail() {
    const _0xe6590 = game.input, _0x15ff4c = this.detail, _0x8929b3 = this.detailRows().length;
    if (_0xe6590.menu("back") || _0xe6590.raw("KeyI") || runtime_kt.hover() === "gdclose" && runtime_kt.mouse.click) {
      (this.detail = null, runtime_w.play("cancel"));
      return;
    }
    (_0xe6590.menu("mup") && (_0x15ff4c.scroll = Math.max(0, _0x15ff4c.scroll - 1)), _0xe6590.menu("mdown") && (_0x15ff4c.scroll = Math.min(Math.max(0, _0x8929b3 - N.DROWS), _0x15ff4c.scroll + 1)), runtime_kt.hover() === "gdup" && runtime_kt.mouse.click && (_0x15ff4c.scroll = Math.max(0, _0x15ff4c.scroll - 1)), runtime_kt.hover() === "gddown" && runtime_kt.mouse.click && (_0x15ff4c.scroll = Math.min(Math.max(0, _0x8929b3 - N.DROWS), _0x15ff4c.scroll + 1)));
  }
  detailRows() {
    const _0x101bf2 = this.detailItems(), _0x4888db = [];
    for (const _0x57aac5 of [8, 7, 6, 5, 4, 3]) {
      const _0x44dead = _0x101bf2.filter(_0x4ef2b6 => _0x4ef2b6.rarity === _0x57aac5);
      if (_0x44dead.length) {
        _0x4888db.push({
          "head": _0x57aac5,
          "n": _0x44dead.length
        });
        for (let _0x588e4b = 0; _0x588e4b < _0x44dead.length; _0x588e4b += N.DCOLS) _0x4888db.push({
          "items": _0x44dead.slice(_0x588e4b, _0x588e4b + N.DCOLS)
        });
      }
    }
    return _0x4888db;
  }
  renderDetail(_0x4d30f6) {
    const _0x5bb1c9 = this.detail, _0x3f004e = this.kind;
    (_0x4d30f6.fillStyle = "rgba(4,2,10,0.94)", _0x4d30f6.fillRect(0, 0, 480, 270), runtime_ye(_0x4d30f6, 20, 12, 440, 240, {
      "border": "#c080ff"
    }), drawText(_0x4d30f6, (_0x3f004e === "theme" ? runtime_Bo(game.save, this.themeIdx()).name : data_Pr[_0x3f004e].name) + " — 등장 목록", 30, 18, {
      "size": 10,
      "color": "#ffffff",
      "bold": !0
    }), drawText(_0x4d30f6, "1회 뽑기당 개별 확률", 450, 21, {
      "size": 6,
      "align": "right",
      "color": "#a8a0c0"
    }));
    const _0x44a708 = this.detailRows();
    let _0x31a0be = 36;
    const _0x401d99 = _0x44a708.slice(_0x5bb1c9.scroll);
    let _0x32fbab = 0;
    for (const _0x988602 of _0x401d99) {
      const _0xf2bf7f = ("head" in _0x988602) ? 12 : 38;
      if (_0x31a0be + _0xf2bf7f > 238) break;
      if ((_0x32fbab++, ("head" in _0x988602))) {
        runtime_zn(_0x4d30f6, 30, _0x31a0be + 2, _0x988602.head, 5);
        const _0x25cf6b = data_da.find(([_0x3c0303]) => _0x3c0303 === _0x988602.head)?.[1] ?? 0;
        drawText(_0x4d30f6, +(_0x25cf6b * 100).toFixed(2) + "% · " + _0x988602.n + (_0x3f004e === "weapon" ? "종" : "명"), 30 + _0x988602.head * 7 + 6, _0x31a0be + 1, {
          "size": 6,
          "color": runtime_Rn[_0x988602.head]
        });
      } else _0x988602.items.forEach((_0x36f5ec, _0x2c490f) => {
        const _0x411270 = 30 + _0x2c490f * 84, _0x320169 = _0x3f004e === "weapon" ? !!game.save.weapons[_0x36f5ec.id] : !!game.save.chars[_0x36f5ec.id];
        if ((_0x4d30f6.fillStyle = runtime_q(runtime_Rn[_0x36f5ec.rarity], _0x36f5ec.pickup ? 0.3 : 0.12), _0x4d30f6.fillRect(_0x411270, _0x31a0be, 80, 35), _0x4d30f6.strokeStyle = _0x36f5ec.pickup ? "#ffcc40" : runtime_q(runtime_Rn[_0x36f5ec.rarity], 0.6), _0x4d30f6.strokeRect(_0x411270 + 0.5, _0x31a0be + 0.5, 79, 34), _0x4d30f6.save(), _0x4d30f6.beginPath(), _0x4d30f6.rect(_0x411270 + 1, _0x31a0be + 1, 30, 33), _0x4d30f6.clip(), _0x3f004e === "weapon")) {
          const _0x28d367 = data_ve.find(_0x42e551 => _0x42e551.id === _0x36f5ec.id);
          drawItemIcon(_0x4d30f6, _0x28d367.id, _0x411270 + 3, _0x31a0be + 4, 26) || runtime_de(_0x4d30f6, _0x28d367.icon, _0x411270 + 3, _0x31a0be + 4, 26, _0x28d367.col);
        } else _0x4d30f6.drawImage(runtime_Qf(_0x36f5ec.id, "idle0"), _0x411270 + 16 - 24, _0x31a0be + 36 - 44, 48, 48);
        (_0x4d30f6.restore(), drawText(_0x4d30f6, _0x36f5ec.name.replace(/「.*」/, "").trim(), _0x411270 + 33, _0x31a0be + 4, {
          "size": 6,
          "color": "#ffffff",
          "bold": !0,
          "maxW": 46
        }));
        const _0x52474c = _0x36f5ec.p;
        (drawText(_0x4d30f6, +(_0x52474c * 100).toPrecision(3) + "%", _0x411270 + 33, _0x31a0be + 15, {
          "size": 6,
          "color": runtime_Rn[_0x36f5ec.rarity]
        }), drawText(_0x4d30f6, _0x36f5ec.pickup ? "픽업" : _0x320169 ? "보유" : "", _0x411270 + 33, _0x31a0be + 25, {
          "size": 5,
          "color": _0x36f5ec.pickup ? "#ffcc40" : "#80ffa0"
        }));
      });
      _0x31a0be += _0xf2bf7f + 2;
    }
    (_0x5bb1c9.scroll > 0 && (drawText(_0x4d30f6, "▲", 240, 28, {
      "size": 7,
      "align": "center",
      "color": "#c0b0e0"
    }), runtime_kt.add("gdup", 200, 26, 80, 10)), _0x5bb1c9.scroll + _0x32fbab < _0x44a708.length && (drawText(_0x4d30f6, "▼", 240, 240, {
      "size": 7,
      "align": "center",
      "color": "#c0b0e0"
    }), runtime_kt.add("gddown", 200, 238, 80, 10)), runtime_kt.add("gdclose", 0, 0, 20, 20), runtime_Xe(_0x4d30f6, [["↑↓", "스크롤"], ["I / Esc", "닫기"]]));
  }
  ui(_0x25e25a) {
    if (this.phase === "menu") this.renderMenu(_0x25e25a); else {
      if (this.phase === "throw") {
        const _0x475af8 = Math.min(1, this.t / 50), _0x84298 = 240, _0x34227f = 280 - Math.sin(_0x475af8 * Math.PI) * 150 - _0x475af8 * 120;
        (runtime_de(_0x25e25a, "gem", _0x84298 - 8, _0x34227f, 16, "#6a9aff"), _0x25e25a.save(), _0x25e25a.globalCompositeOperation = "lighter", _0x25e25a.fillStyle = "rgba(120,160,255,0.4)", _0x25e25a.beginPath(), _0x25e25a.arc(_0x84298, _0x34227f + 8, 12, 0, Math.PI * 2), _0x25e25a.fill(), _0x25e25a.restore(), drawText(_0x25e25a, "영혼석을 바친다…", 240, 240, {
          "size": 9,
          "align": "center",
          "color": "#c0d0ff"
        }), runtime_Xe(_0x25e25a, [["Esc", "건너뛰기"]]));
      } else {
        if (this.phase === "beam") {
          const _0x20e69d = this.maxR >= 7 ? "별빛이 하늘을 가른다…!!" : this.maxR === 6 ? "붉은 혼이 하늘을 찢는다…!" : this.maxR >= 5 ? "하늘이 금빛으로 갈라진다…!" : this.maxR === 4 ? "보랏빛 혼이 응답한다…" : "푸른 혼이 응답한다";
          (drawText(_0x25e25a, _0x20e69d, 240, 230, {
            "size": 10,
            "align": "center",
            "color": runtime_Rn[this.maxR],
            "bold": !0
          }), runtime_Xe(_0x25e25a, [[game.input.label("attack"), "계속"], ["Esc", "건너뛰기"]]));
        } else {
          if ((this.phase === "cards" || this.phase === "summary") && this.results.length > 10) (this.renderBulk(_0x25e25a), runtime_Xe(_0x25e25a, [[game.input.label("attack"), "확인"]])); else {
            if (this.phase === "cards" || this.phase === "summary") {
              if ((this.renderCards(_0x25e25a), this.phase === "summary")) {
                const _0xd18c54 = this.results.filter(_0xe53e34 => _0xe53e34.isNew).length;
                (drawText(_0x25e25a, "결과: ★5↑ " + this.results.filter(_0x458aba => _0x458aba.rarity >= 5).length + " · ★4 " + this.results.filter(_0x5815bf => _0x5815bf.rarity === 4).length + " · 신규 " + _0xd18c54, 240, 244, {
                  "size": 8,
                  "align": "center",
                  "color": "#ffe080"
                }), runtime_Xe(_0x25e25a, [[game.input.label("attack"), "확인"]]));
              } else runtime_Xe(_0x25e25a, [[game.input.label("attack"), "뒤집기"], ["Esc", "건너뛰기"]]);
            } else this.phase === "reveal" && this.renderReveal(_0x25e25a);
          }
        }
      }
    }
    (this.picker && this.renderPicker(_0x25e25a), this.detail && this.renderDetail(_0x25e25a), this.forcePick && this.renderForcePick(_0x25e25a), _0x25e25a.save(), _0x25e25a.globalCompositeOperation = "lighter");
    for (const _0x58e98a of this.sparks) (_0x25e25a.fillStyle = runtime_q(_0x58e98a.col, Math.min(1, _0x58e98a.life / 20)), _0x25e25a.fillRect(_0x58e98a.x, _0x58e98a.y, 2, 2));
    _0x25e25a.restore();
  }
  renderMenu(_0x3020b6) {
    const _0x465b4e = game.save;
    (drawText(_0x3020b6, "계약의 제단", 12, 8, {
      "size": 12,
      "color": "#9ef0ff",
      "bold": !0
    }), _0x3020b6.fillStyle = "rgba(10,6,20,0.8)", _0x3020b6.fillRect(350, 6, 124, 16), runtime_de(_0x3020b6, "gem", 354, 9, 10, "#6a9aff"), drawText(_0x3020b6, "영혼석 " + _0x465b4e.stones, 368, 9, {
      "size": 8,
      "color": "#9ec0ff"
    }), _0x3020b6.fillStyle = "rgba(10,6,20,0.8)", _0x3020b6.fillRect(262, 6, 84, 16), le(_0x3020b6, 264, 6, 16), drawText(_0x3020b6, "별의 나침반 " + (_0x465b4e.compass ?? 0), 282, 9, {
      "size": 7,
      "color": "#a8c8ff"
    }));
    const _0xb73048 = Y(), _0x5db40b = _0xb73048.length > 4 ? 23 : 30, _0x9ce5cd = _0xb73048.length > 4 ? 21 : 26;
    _0xb73048.forEach((_0x2b7675, _0x1e62cb) => {
      const _0x51f80e = _0x2b7675.kind, _0x56e012 = 32 + _0x1e62cb * _0x5db40b, _0x3ae8ca = _0x51f80e === "theme" ? runtime_Bo(_0x465b4e, _0x2b7675.theme) : null;
      (runtime_ua(_0x3020b6, 8, _0x56e012, 92, _0x9ce5cd, _0x3ae8ca ? _0x3ae8ca.name : data_Pr[_0x51f80e].name, _0x1e62cb === this.banner, {
        "size": 7,
        "sub": _0x51f80e === "pickup" ? "픽업" : _0x51f80e === "six" ? "★6 확정" : _0x3ae8ca ? _0x2b7675.theme !== void 0 ? _0x2b7675.theme === runtime_E2() ? "테마 · 지금 열림" : "테마 · [디버그]" : "테마 계약" : _0x51f80e === "char" ? "상시 영웅" : "상시 무기",
        "col": _0x51f80e === "pickup" ? "#ffcc40" : _0x51f80e === "six" ? "#7ab0ff" : _0x3ae8ca ? _0x3ae8ca.col : _0x51f80e === "char" ? "#c080ff" : "#80c0ff"
      }), runtime_kt.add("gt:" + _0x1e62cb, 8, _0x56e012, 92, _0x9ce5cd));
    });
    const _0x297d41 = this.kind, _0x30fe7b = _0x297d41 === "theme" ? runtime_Bo(_0x465b4e, this.themeIdx()) : null;
    if ((runtime_ye(_0x3020b6, 106, 30, 236, 166, {
      "border": _0x297d41 === "pickup" ? "#ffcc40" : _0x30fe7b ? _0x30fe7b.col : "#6a5a9a"
    }), drawText(_0x3020b6, _0x30fe7b ? _0x30fe7b.name : data_Pr[_0x297d41].name, 116, 36, {
      "size": 11,
      "color": "#ffffff",
      "bold": !0
    }), drawText(_0x3020b6, _0x30fe7b ? _0x30fe7b.desc + " · ★7·★6은 테마 영웅만" : data_Pr[_0x297d41].desc, 116, 50, {
      "size": 6,
      "color": "#a8a0c0",
      "maxW": 220
    }), _0x297d41 === "six")) {
      (_0x3020b6.save(), _0x3020b6.globalCompositeOperation = "lighter");
      const _0x1bd750 = _0x3020b6.createRadialGradient(150, 108, 0, 150, 108, 52);
      (_0x1bd750.addColorStop(0, "rgba(100,150,255,0.45)"), _0x1bd750.addColorStop(1, "rgba(100,150,255,0)"), _0x3020b6.fillStyle = _0x1bd750, _0x3020b6.fillRect(96, 56, 108, 104), _0x3020b6.restore(), le(_0x3020b6, 116, 72, 68), drawText(_0x3020b6, "보유 " + (_0x465b4e.compass ?? 0) + "개", 150, 146, {
        "size": 7,
        "align": "center",
        "color": "#a8c8ff",
        "bold": !0
      }));
      const _0x7e1d42 = CHARACTER_LIST.filter(_0x127f42 => _0x127f42.rarity === 6), _0x3ea150 = Math.ceil(_0x7e1d42.length / 2), _0x5c5ff7 = 148 / _0x3ea150;
      (_0x3020b6.save(), _0x3020b6.beginPath(), _0x3020b6.rect(190, 58, 150, 112), _0x3020b6.clip(), _0x7e1d42.forEach((_0x36579e, _0x33b11e) => {
        const _0x5e5030 = 192 + _0x5c5ff7 * (_0x33b11e % _0x3ea150 + 0.5), _0x33269c = _0x33b11e < _0x3ea150 ? 104 : 160;
        (_0x3020b6.fillStyle = runtime_q(runtime_Rn[6], _0x465b4e.chars[_0x36579e.id] ? 0.16 : 0.06), _0x3020b6.fillRect(_0x5e5030 - _0x5c5ff7 / 2 + 1, _0x33269c - 44, _0x5c5ff7 - 2, 44), _0x3020b6.drawImage(runtime_Qf(_0x36579e.id, "idle0"), _0x5e5030 - 24, _0x33269c - 44, 48, 48));
      }), _0x3020b6.restore(), _0x7e1d42.forEach((_0x19f426, _0x89f60) => drawText(_0x3020b6, _0x19f426.name, 192 + _0x5c5ff7 * (_0x89f60 % _0x3ea150 + 0.5), _0x89f60 < _0x3ea150 ? 105 : 161, {
        "size": 5,
        "align": "center",
        "color": runtime_Rn[6],
        "maxW": _0x5c5ff7
      })), drawText(_0x3020b6, "일요일 세 부문 1위에게 별의 나침반 각 2개", 116, 182, {
        "size": 6,
        "color": "#a8a0c0"
      }));
    } else {
      if (_0x30fe7b) {
        const _0x469c80 = CHARACTERS[_0x30fe7b.r7];
        (_0x3020b6.save(), _0x3020b6.globalCompositeOperation = "lighter");
        const _0x223395 = _0x3020b6.createRadialGradient(170, 112, 0, 170, 112, 58);
        (_0x223395.addColorStop(0, runtime_q(_0x30fe7b.col, 0.4)), _0x223395.addColorStop(1, runtime_q(_0x30fe7b.col, 0)), _0x3020b6.fillStyle = _0x223395, _0x3020b6.fillRect(112, 56, 116, 104), _0x3020b6.restore(), _0x3020b6.save(), _0x3020b6.beginPath(), _0x3020b6.rect(108, 58, 232, 100), _0x3020b6.clip(), _0x3020b6.drawImage(runtime_Qf(_0x30fe7b.r7, "idle0"), 122, 64, 96, 96), _0x30fe7b.r6.forEach((_0x46cb16, _0x34c17d) => {
          const _0x460be3 = 244 + _0x34c17d * 34;
          (_0x3020b6.fillStyle = runtime_q(runtime_Rn[6], _0x465b4e.chars[_0x46cb16] ? 0.16 : 0.07), _0x3020b6.fillRect(_0x460be3 - 16, 92, 32, 54), _0x3020b6.drawImage(runtime_Qf(_0x46cb16, "idle0"), _0x460be3 - 32, 84, 64, 64));
        }), _0x3020b6.restore(), _0x30fe7b.r6.forEach((_0x6c64d6, _0x2b2721) => drawText(_0x3020b6, CHARACTERS[_0x6c64d6].name, 244 + _0x2b2721 * 34, 148, {
          "size": 6,
          "align": "center",
          "color": runtime_Rn[6],
          "maxW": 33
        })), drawText(_0x3020b6, "★6 테마", 278, 157, {
          "size": 6,
          "align": "center",
          "color": runtime_Rn[6]
        }), runtime_zn(_0x3020b6, 116, 162, 7, 7), drawText(_0x3020b6, _0x469c80.title, 116, 172, {
          "size": 7,
          "color": runtime_Rn[7],
          "maxW": 150
        }), drawText(_0x3020b6, _0x469c80.name, 116, 182, {
          "size": 10,
          "color": "#ffffff",
          "bold": !0
        }));
        const _0x34834c = this.themeIdx(), _0x2f63a2 = _0x34834c !== void 0 && _0x34834c !== runtime_E2();
        drawText(_0x3020b6, _0x2f63a2 ? "[디버그] 지금은 닫힌 테마" : runtime_Xd() + "분 후 다음 테마", 336, 182, {
          "size": 6,
          "align": "right",
          "color": _0x2f63a2 ? "#80ffa0" : "#a8a0c0"
        });
      } else {
        if (_0x297d41 === "pickup") {
          const _0x4b0f94 = runtime_j2(_0x465b4e), _0x4ccbb6 = CHARACTERS[_0x4b0f94.five], _0x6cff52 = "idle0";
          (_0x3020b6.save(), _0x3020b6.globalCompositeOperation = "lighter");
          const _0x33c7fb = _0x3020b6.createRadialGradient(176, 112, 0, 176, 112, 56);
          if ((_0x33c7fb.addColorStop(0, "rgba(255,200,80,0.4)"), _0x33c7fb.addColorStop(1, "rgba(255,200,80,0)"), _0x3020b6.fillStyle = _0x33c7fb, _0x3020b6.fillRect(120, 56, 112, 104), _0x3020b6.restore(), _0x3020b6.save(), _0x3020b6.beginPath(), _0x3020b6.rect(108, 50, 150, 106), _0x3020b6.clip(), _0x3020b6.drawImage(runtime_Qf(_0x4b0f94.five, _0x6cff52), 128, 64, 96, 96), _0x3020b6.restore(), runtime_zn(_0x3020b6, 116, 162, 5, 8), drawText(_0x3020b6, "" + _0x4ccbb6.title, 116, 172, {
            "size": 7,
            "color": "#ffe080"
          }), drawText(_0x3020b6, _0x4ccbb6.name, 116, 182, {
            "size": 10,
            "color": "#ffffff",
            "bold": !0
          }), _0x4b0f94.four.forEach((_0x219a61, _0x3e4d3a) => {
            (_0x3020b6.drawImage(runtime_Qf(_0x219a61, "idle0"), 262 + _0x3e4d3a * 36 - 48, 46, 96, 96), drawText(_0x3020b6, CHARACTERS[_0x219a61].name, 262 + _0x3e4d3a * 36, 146, {
              "size": 6,
              "align": "center",
              "color": "#c080ff"
            }));
          }), drawText(_0x3020b6, "★4 픽업", 298, 156, {
            "size": 6,
            "align": "center",
            "color": "#c080ff"
          }), drawText(_0x3020b6, _0x465b4e.pickupOverride ? "[디버그] 직접 지정한 픽업" : runtime_Xd() + "분 후 교체", 336, 182, {
            "size": 6,
            "align": "right",
            "color": _0x465b4e.pickupOverride ? "#80ffa0" : "#a8a0c0"
          }), game.debug)) {
            const _0x302d65 = runtime_kt.hover() === "pkopen";
            (_0x3020b6.fillStyle = _0x302d65 ? "rgba(128,255,160,0.3)" : "rgba(128,255,160,0.12)", _0x3020b6.fillRect(262, 50, 76, 13), _0x3020b6.strokeStyle = "#80ffa0", _0x3020b6.strokeRect(262.5, 50.5, 75, 12), drawText(_0x3020b6, "픽업 선택 (P)", 300, 53, {
              "size": 6,
              "align": "center",
              "color": "#80ffa0"
            }), runtime_kt.add("pkopen", 262, 50, 76, 13));
          }
        } else {
          if (_0x297d41 === "char") {
            const _0xc06587 = CHARACTER_LIST.filter(_0x53c348 => _0x53c348.rarity >= 6&&eightContentVisible(game.save,_0x53c348)), _0x453fdb = (_0xc06587.length >= 3 ? _0xc06587 : CHARACTER_LIST.filter(_0x599634 => _0x599634.rarity >= 5&&eightContentVisible(game.save,_0x599634))).sort((_0x3da283, _0x26af15) => _0x26af15.rarity - _0x3da283.rarity), _0x1151e8 = _0x453fdb.slice(0, 16), _0x5b6a0c = _0x1151e8.length > 8, _0x3ac2a4 = _0x5b6a0c ? Math.ceil(_0x1151e8.length / 2) : _0x1151e8.length, _0x356bb8 = _0x5b6a0c ? 48 : _0x1151e8.length > 6 ? 72 : 96, _0x30f02a = 228 / _0x3ac2a4, _0xfd0d22 = _0x5b6a0c ? [{
              "foot": 104,
              "top": 60,
              "h": 46,
              "name": 106,
              "star": 113
            }, {
              "foot": 160,
              "top": 118,
              "h": 46,
              "name": 162,
              "star": 169
            }] : [{
              "foot": 150,
              "top": 72,
              "h": 84,
              "name": 159,
              "star": 168
            }], _0x249df9 = _0x517a15 => {
              const _0x12347f = _0x5b6a0c ? Math.floor(_0x517a15 / _0x3ac2a4) : 0, _0x321729 = _0x5b6a0c ? _0x517a15 % _0x3ac2a4 : _0x517a15;
              return {
                "cx": Math.round(110 + _0x30f02a * (_0x321729 + 0.5)),
                "r": _0xfd0d22[_0x12347f]
              };
            };
            (_0x3020b6.save(), _0x3020b6.beginPath(), _0x3020b6.rect(108, 50, 232, 122), _0x3020b6.clip(), _0x1151e8.forEach((_0x38aaae, _0x15e1f9) => {
              const {cx: _0x3e1b56, r: _0x2fb123} = _0x249df9(_0x15e1f9);
              (_0x3020b6.fillStyle = runtime_q(runtime_Rn[_0x38aaae.rarity], _0x465b4e.chars[_0x38aaae.id] ? 0.16 : 0.06), _0x3020b6.fillRect(_0x3e1b56 - _0x30f02a / 2 + 2, _0x2fb123.top, _0x30f02a - 4, _0x2fb123.h), _0x3020b6.drawImage(runtime_Qf(_0x38aaae.id, "idle0"), _0x3e1b56 - _0x356bb8 / 2, _0x2fb123.foot - _0x356bb8 * 88 / 96, _0x356bb8, _0x356bb8));
            }), _0x3020b6.restore(), _0x1151e8.forEach((_0x2f22ad, _0x43d927) => {
              const {cx: _0x5acce9, r: _0x5378ca} = _0x249df9(_0x43d927);
              drawText(_0x3020b6, _0x2f22ad.name, _0x5acce9, _0x5378ca.name, {
                "size": _0x5b6a0c || _0x1151e8.length > 6 ? 5 + (_0x5b6a0c ? 0 : 1) : 7,
                "align": "center",
                "color": _0x2f22ad.rarity >= 6 ? runtime_Rn[_0x2f22ad.rarity] : "#ffe080",
                "maxW": _0x30f02a - 2
              });
              const _0xefb3bd = _0x5b6a0c ? 2 : _0x1151e8.length > 6 ? 3 : 4;
              _0x5b6a0c || runtime_zn(_0x3020b6, _0x5acce9 - _0x2f22ad.rarity * _0xefb3bd / 2, _0x5378ca.star, _0x2f22ad.rarity, _0xefb3bd);
            }), _0x453fdb.length > _0x1151e8.length && drawText(_0x3020b6, "외 " + (_0x453fdb.length - _0x1151e8.length) + "명 — 상세 보기", 336, 180, {
              "size": 6,
              "align": "right",
              "color": "#c0a8ff"
            }), drawText(_0x3020b6, "영웅 " + CHARACTER_LIST.filter(item=>eightContentVisible(game.save,item)).length + "명 · 보유 " + Object.keys(_0x465b4e.chars).length + "명", 116, 180, {
              "size": 7,
              "color": "#c8c0d8"
            }));
          } else {
            const target=selectedWeapon(game.save,WEAPONS), _0x527d35=[target];
            (drawText(_0x3020b6, "선택 무기 · ★7 등장 시 " + Math.round(getProbabilities().weaponPickup * 100) + "% / 픽뚫 " + Math.round((1-getProbabilities().weaponPickup)*100) + "%", 226, 58, {
              "size": 6,
              "align": "center",
              "color": "#7affea",
              "maxW": 236
            }), _0x527d35.forEach((_0x327605, _0x1926e1) => {
              const _0x1ac06f = 112 + _0x1926e1 * 58, _0x123439 = 68;
              (_0x3020b6.fillStyle = "rgba(122,255,234,0.1)", _0x3020b6.fillRect(_0x1ac06f, _0x123439, 54, 50), drawItemIcon(_0x3020b6, _0x327605.id, _0x1ac06f + 13, _0x123439 + 4, 28) || runtime_de(_0x3020b6, _0x327605.icon, _0x1ac06f + 13, _0x123439 + 4, 28, _0x327605.col), drawText(_0x3020b6, _0x327605.name.replace(/「.*」/, "").trim(), _0x1ac06f + 27, _0x123439 + 36, {
                "size": 5,
                "align": "center",
                "color": "#7affea",
                "maxW": 52
              }));
            }), drawText(_0x3020b6, "★5 무기", 112, 124, {
              "size": 6,
              "color": "#ffe080"
            }), data_ve.filter(_0x3336cc => _0x3336cc.rarity === 5).slice(0, 10).forEach((_0x4f56de, _0xd40313) => {
              const _0xdfa1ee = 112 + _0xd40313 % 5 * 46, _0x18397f = 134 + Math.floor(_0xd40313 / 5) * 22;
              (_0x3020b6.fillStyle = "rgba(255,200,80,0.1)", _0x3020b6.fillRect(_0xdfa1ee, _0x18397f, 44, 20), drawItemIcon(_0x3020b6, _0x4f56de.id, _0xdfa1ee + 2, _0x18397f + 2, 16) || runtime_de(_0x3020b6, _0x4f56de.icon, _0xdfa1ee + 2, _0x18397f + 2, 16, _0x4f56de.col), drawText(_0x3020b6, _0x4f56de.name.replace(/「.*」/, "").trim(), _0xdfa1ee + 30, _0x18397f + 7, {
                "size": 4,
                "align": "center",
                "color": "#ffe080",
                "maxW": 26
              }));
            }));
          }
        }
      }
    }
    if (game.debug) {
      const _0x528383 = this.forceNext[_0x297d41 === "weapon" ? "weapon" : "char"], _0x12c810 = runtime_kt.hover() === "gforce";
      (_0x3020b6.fillStyle = _0x12c810 ? "rgba(128,255,160,0.3)" : "rgba(128,255,160,0.12)", _0x3020b6.fillRect(196, 34, 82, 12), _0x3020b6.strokeStyle = "#80ffa0", _0x3020b6.strokeRect(196.5, 34.5, 81, 11));
      const _0x688b69 = _0x528383 ? (_0x297d41 === "weapon" ? WEAPONS[_0x528383] : CHARACTERS[_0x528383]).name.replace(/「.*」/, "").trim() : "";
      (drawText(_0x3020b6, _0x528383 ? "다음: " + _0x688b69 : "다음 뽑기 지정 (N)", 237, 36, {
        "size": 6,
        "align": "center",
        "color": "#80ffa0",
        "maxW": 78
      }), runtime_kt.add("gforce", 196, 34, 82, 12));
    }
    {
      const _0x1ca492 = runtime_kt.hover() === "gdetail";
      (_0x3020b6.fillStyle = _0x1ca492 ? "rgba(192,128,255,0.35)" : "rgba(192,128,255,0.15)", _0x3020b6.fillRect(282, 34, 56, 12), _0x3020b6.strokeStyle = "#c080ff", _0x3020b6.strokeRect(282.5, 34.5, 55, 11), drawText(_0x3020b6, "상세 보기 (I)", 310, 36, {
        "size": 6,
        "align": "center",
        "color": "#e0c8ff"
      }), runtime_kt.add("gdetail", 282, 34, 56, 12));
    }
    (runtime_ye(_0x3020b6, 348, 30, 126, 166), drawText(_0x3020b6, "확률표", 356, 36, {
      "size": 8,
      "color": "#e0d0ff",
      "bold": !0
    }));
    if(this.kind==='weapon') {runtime_ua(_0x3020b6,112,180,226,14,'[T] 7성 픽업 무기 선택',false,{size:7,col:'#7affea'});runtime_kt.add('weapon-pickup',112,180,226,14);}
    const _0x453a9a = _0x29ab3b => (_0x297d41 === "weapon" ? data_ve : CHARACTER_LIST).some(_0x1e4fa5 => _0x1e4fa5.rarity === _0x29ab3b);
    if (_0x297d41 === "six") (compassRates(!!game.save.eightUnlocked).forEach(([_0x1af093, _0x1d6915], _0xa5ba8c) => {
      const _0x5913f0 = 47 + _0xa5ba8c * 10;
      (runtime_zn(_0x3020b6, 356, _0x5913f0 + 1, _0x1af093, 4), drawText(_0x3020b6, runtime_ma(_0x1d6915, 1), 466, _0x5913f0, {
        "size": 6,
        "align": "right",
        "color": runtime_Rn[_0x1af093]
      }));
    }), drawText(_0x3020b6, game.save.eightUnlocked ? "★8 계약 해금됨" : "히든 보스 처치 시 ★8 해금", 356, 80, {
      "size": 7,
      "color": "#a8c8ff",
      "bold": !0
    }), drawText(_0x3020b6, "★6 " + CHARACTER_LIST.filter(_0x3a42e2 => _0x3a42e2.rarity === 6).length + "명 · ★7 " + CHARACTER_LIST.filter(_0x15fcef => _0x15fcef.rarity === 7).length + "명 균등", 356, 91, {
      "size": 6,
      "color": "#c8c0d8"
    }), drawText(_0x3020b6, "별의 나침반 1개 = 1회", 356, 100, {
      "size": 6,
      "color": "#a8c8ff"
    }), drawText(_0x3020b6, "천장·영혼석과 무관 (따로 계산)", 356, 112, {
      "size": 6,
      "color": "#8a8098"
    }), drawText(_0x3020b6, "획득: 일요일 주간 1위 보상", 356, 124, {
      "size": 6,
      "color": "#8a8098"
    }), drawText(_0x3020b6, "중복: 영웅 각성", 356, 186, {
      "size": 6,
      "color": "#8a8098"
    })); else {
      normalRates(!!game.save.eightUnlocked).filter(([,rate])=>rate>0).forEach(([_0x43d331, _0x1b80e8], _0x30a27d) => {
        const _0x2dbbcc = 47 + _0x30a27d * 10;
        (runtime_zn(_0x3020b6, 356, _0x2dbbcc + 1, _0x43d331, _0x43d331 >= 6 ? 4 : 5), drawText(_0x3020b6, +(_0x1b80e8 * 100).toFixed(3) + "%", 466, _0x2dbbcc, {
          "size": 6,
          "align": "right",
          "color": runtime_Rn[_0x43d331]
        }), _0x453a9a(_0x43d331) || drawText(_0x3020b6, "준비 중", 430, _0x2dbbcc, {
          "size": 5,
          "align": "right",
          "color": "#8a8098"
        }));
      });
      const _0x537b1f = _0x465b4e.pity[_0x297d41];
      (drawText(_0x3020b6, "천장 ★5 60 / ★6 120 / ★7 360", 356, 100, {
        "size": 7,
        "color": "#e0d0ff"
      }), drawText(_0x3020b6, "★5 이상 확정까지 " + (GACHA_RULES.hardPity - _0x537b1f.since5) + "회", 356, 111, {
        "size": 6,
        "color": "#ffe080"
      }), _0x3020b6.fillStyle = "#1a1424", _0x3020b6.fillRect(356, 121, 110, 5), _0x3020b6.fillStyle = _0x537b1f.since5 >= GACHA_RULES.hardPity * 0.8 ? "#ffcc40" : "#a080ff", _0x3020b6.fillRect(356, 121, 110 * _0x537b1f.since5 / GACHA_RULES.hardPity, 5), drawText(_0x3020b6, "★6 확정 " + Math.max(1,120-(_0x537b1f.since6??0)) + "회", 356, 129, {
        "size": 6,
        "color": "#c8c0d8"
      }), drawText(_0x3020b6, "10회 계약: ★4 이상 확정", 356, 140, {
        "size": 6,
        "color": "#c080ff"
      }), _0x297d41 === "pickup" ? drawText(_0x3020b6, "★5의 50%는 픽업 영웅", 356, 151, {
        "size": 6,
        "color": "#a8a0c0"
      }) : _0x297d41 === "theme" && drawText(_0x3020b6, "★7·★6은 100% 테마 영웅", 356, 151, {
        "size": 6,
        "color": "#a8a0c0"
      }));
      const _0xe13f51 = data_da.map(([_0x5d49f6]) => _0x5d49f6).filter(_0x691d99 => _0x691d99 > 5 && !_0x453a9a(_0x691d99));
      if (_0xe13f51.length) {
        let _0x58c86b = Math.min(..._0xe13f51) - 1;
        for (; _0x58c86b > 5 && !_0x453a9a(_0x58c86b); ) _0x58c86b--;
        drawText(_0x3020b6, _0xe13f51.sort().map(_0x4fe861 => "★" + _0x4fe861).join("·") + " 준비 중: 나오면 ★" + _0x58c86b + "로", 356, 163, {
          "size": 5,
          "color": "#8a8098"
        });
      }
      (drawText(_0x3020b6, "★7 확정 " + Math.max(1,360-(_0x537b1f.since7??0)) + "회", 356, 174, {
        "size": 6,
        "color": "#8a8098"
      }), drawText(_0x3020b6, "중복: 영웅 각성 / 무기 재련", 356, 186, {
        "size": 6,
        "color": "#8a8098"
      }));
    }
    const _0x229ff5 = this.buttons(), _0x5e0c41 = _0x229ff5.length >= 4 ? 108 : 116, _0x400149 = 240 - (_0x229ff5.length * (_0x5e0c41 + 8) - 8) / 2;
    (_0x229ff5.forEach((_0x3b08e8, _0x2c3d5b) => {
      (runtime_ua(_0x3020b6, _0x400149 + _0x2c3d5b * (_0x5e0c41 + 8), 204, _0x5e0c41, 30, _0x3b08e8.label, this.btn === _0x2c3d5b, {
        "sub": _0x3b08e8.sub,
        "disabled": !_0x3b08e8.ok,
        "col": _0x3b08e8.free ? "#ffcc40" : "#9ef0ff"
      }), runtime_kt.add("gb:" + _0x2c3d5b, _0x400149 + _0x2c3d5b * (_0x5e0c41 + 8), 204, _0x5e0c41, 30));
    }), runtime_Xe(_0x3020b6, [["↑↓", "배너"], ["←→", "선택"], [game.input.label("attack"), "계약"], ["Esc", "나가기"]]));
  }
  drawCard(_0x5b5ad3, _0x2b14ca, _0x45ca5b, _0x5c95e6, _0x3afe64, _0x3cb2bb, _0x51aa79) {
    if (!_0x51aa79) {
      (_0x5b5ad3.fillStyle = "#1a1030", _0x5b5ad3.fillRect(_0x45ca5b, _0x5c95e6, _0x3afe64, _0x3cb2bb), _0x5b5ad3.strokeStyle = "#6a5a9a", _0x5b5ad3.strokeRect(_0x45ca5b + 0.5, _0x5c95e6 + 0.5, _0x3afe64 - 1, _0x3cb2bb - 1), runtime_de(_0x5b5ad3, "soul", _0x45ca5b + _0x3afe64 / 2 - 10, _0x5c95e6 + _0x3cb2bb / 2 - 10, 20, "#6a5a9a"), _0x2b14ca.rarity >= 5 && this.flipped < this.results.length && (this.t >> 2) % 2 && (_0x5b5ad3.strokeStyle = "#ffcc40", _0x5b5ad3.strokeRect(_0x45ca5b - 0.5, _0x5c95e6 - 0.5, _0x3afe64 + 1, _0x3cb2bb + 1)));
      return;
    }
    const [_0x3d1570, _0x3d6167] = runtime_Yf[_0x2b14ca.rarity], _0x4c0a8c = _0x5b5ad3.createLinearGradient(0, _0x5c95e6, 0, _0x5c95e6 + _0x3cb2bb);
    if ((_0x4c0a8c.addColorStop(0, _0x3d1570), _0x4c0a8c.addColorStop(1, _0x3d6167), _0x5b5ad3.fillStyle = _0x4c0a8c, _0x5b5ad3.fillRect(_0x45ca5b, _0x5c95e6, _0x3afe64, _0x3cb2bb), _0x5b5ad3.strokeStyle = runtime_Rn[_0x2b14ca.rarity], _0x5b5ad3.lineWidth = _0x2b14ca.rarity >= 5 ? 2 : 1, _0x5b5ad3.strokeRect(_0x45ca5b + 0.5, _0x5c95e6 + 0.5, _0x3afe64 - 1, _0x3cb2bb - 1), _0x5b5ad3.lineWidth = 1, _0x2b14ca.type === "char")) (_0x5b5ad3.drawImage(runtime_Qf(_0x2b14ca.id, "idle0"), _0x45ca5b + _0x3afe64 / 2 - 48, _0x5c95e6 - 38, 96, 96), drawText(_0x5b5ad3, CHARACTERS[_0x2b14ca.id].name, _0x45ca5b + _0x3afe64 / 2, _0x5c95e6 + _0x3cb2bb - 26, {
      "size": 7,
      "align": "center",
      "color": "#ffffff",
      "bold": !0
    })); else {
      const _0x5b4aa5 = WEAPONS[_0x2b14ca.id];
      (drawItemIcon(_0x5b5ad3, _0x5b4aa5.id, _0x45ca5b + _0x3afe64 / 2 - 16, _0x5c95e6 + 12, 32) || runtime_de(_0x5b5ad3, _0x5b4aa5.icon, _0x45ca5b + _0x3afe64 / 2 - 16, _0x5c95e6 + 12, 32, _0x5b4aa5.col), drawText(_0x5b5ad3, _0x5b4aa5.name.replace(/「.*」/, "").trim(), _0x45ca5b + _0x3afe64 / 2, _0x5c95e6 + _0x3cb2bb - 26, {
        "size": 6,
        "align": "center",
        "color": "#ffffff",
        "bold": !0,
        "maxW": _0x3afe64 - 4
      }));
    }
    (runtime_zn(_0x5b5ad3, _0x45ca5b + _0x3afe64 / 2, _0x5c95e6 + _0x3cb2bb - 36, _0x2b14ca.rarity, 5, "center"), drawText(_0x5b5ad3, _0x2b14ca.note, _0x45ca5b + _0x3afe64 / 2, _0x5c95e6 + _0x3cb2bb - 14, {
      "size": 6,
      "align": "center",
      "color": _0x2b14ca.isNew ? "#ffe080" : "#a0ffd0",
      "bold": _0x2b14ca.isNew
    }), _0x2b14ca.pickup && drawText(_0x5b5ad3, "PICK UP", _0x45ca5b + 3, _0x5c95e6 + 3, {
      "size": 5,
      "color": "#ffcc40",
      "bold": !0
    }));
  }
  renderCards(_0x8dd71d) {
    this.results.forEach((_0x2921b7, _0x53c6a0) => {
      const [_0x533229, _0xafadae, _0xe7e669, _0x341b57] = this.cardPos(_0x53c6a0), _0xfd5fb0 = _0x53c6a0 < this.flipped;
      if (_0x53c6a0 === this.flipped - 1 && this.flipAnim > 6 && this.phase === "cards") {
        const _0x2b73cf = (this.flipAnim - 6) / 6;
        (_0x8dd71d.save(), _0x8dd71d.translate(_0x533229 + _0xe7e669 / 2, _0xafadae + _0x341b57 / 2), _0x8dd71d.scale(Math.max(0.05, 1 - _0x2b73cf), 1), this.drawCard(_0x8dd71d, _0x2921b7, -_0xe7e669 / 2, -_0x341b57 / 2, _0xe7e669, _0x341b57, !0), _0x8dd71d.restore());
      } else this.drawCard(_0x8dd71d, _0x2921b7, _0x533229, _0xafadae, _0xe7e669, _0x341b57, _0xfd5fb0);
    });
  }
  renderBulk(_0x161a82) {
    const _0x56a1e6 = new Map();
    for (const _0x17997c of this.results) {
      const _0x390d0a = _0x17997c.type + ":" + _0x17997c.id, _0x33d5d4 = _0x56a1e6.get(_0x390d0a);
      _0x33d5d4 ? (_0x33d5d4.n++, _0x33d5d4.isNew ||= _0x17997c.isNew, _0x33d5d4.pickup ||= _0x17997c.pickup) : _0x56a1e6.set(_0x390d0a, {
        "r": _0x17997c,
        "n": 1,
        "isNew": _0x17997c.isNew,
        "pickup": _0x17997c.pickup
      });
    }
    const _0x1233dd = [..._0x56a1e6.values()].sort((_0x539044, _0x54e0f3) => _0x54e0f3.r.rarity - _0x539044.r.rarity || Number(_0x54e0f3.pickup) - Number(_0x539044.pickup) || _0x54e0f3.n - _0x539044.n), _0x36494f = _0x182430 => this.results.filter(_0xfff66c => _0xfff66c.rarity === _0x182430).length, _0x87ee22 = [8, 7, 6, 5, 4, 3].filter(_0x472268 => _0x36494f(_0x472268)).map(_0x44302d => "★" + _0x44302d + " " + _0x36494f(_0x44302d));
    drawText(_0x161a82, this.results.length + "회 계약 결과 — " + _0x87ee22.join(" · ") + " · 신규 " + this.results.filter(_0x186c71 => _0x186c71.isNew).length, 240, 14, {
      "size": 8,
      "align": "center",
      "color": "#ffe080",
      "bold": !0
    });
    const _0x96df8b = 10, _0x5ec7a4 = 44, _0x126da3 = 31, _0xfcdb32 = 2, _0x4f80e1 = 60, _0x4816c0 = 240 - (_0x96df8b * (_0x5ec7a4 + _0xfcdb32) - _0xfcdb32) / 2;
    (_0x1233dd.slice(0, _0x4f80e1).forEach((_0x36c3ef, _0x52c486) => {
      const _0x167ba0 = _0x4816c0 + _0x52c486 % _0x96df8b * (_0x5ec7a4 + _0xfcdb32), _0x18c074 = 30 + Math.floor(_0x52c486 / _0x96df8b) * (_0x126da3 + _0xfcdb32), _0xa9fc6d = _0x36c3ef.r, [_0xe513cc, _0x59f432] = runtime_Yf[_0xa9fc6d.rarity], _0x5df80e = _0x161a82.createLinearGradient(0, _0x18c074, 0, _0x18c074 + _0x126da3);
      if ((_0x5df80e.addColorStop(0, _0xe513cc), _0x5df80e.addColorStop(1, _0x59f432), _0x161a82.fillStyle = _0x5df80e, _0x161a82.fillRect(_0x167ba0, _0x18c074, _0x5ec7a4, _0x126da3), _0x161a82.strokeStyle = runtime_Rn[_0xa9fc6d.rarity], _0x161a82.lineWidth = _0xa9fc6d.rarity >= 5 ? 2 : 1, _0x161a82.strokeRect(_0x167ba0 + 0.5, _0x18c074 + 0.5, _0x5ec7a4 - 1, _0x126da3 - 1), _0x161a82.lineWidth = 1, _0xa9fc6d.type === "char")) _0x161a82.drawImage(runtime_Qf(_0xa9fc6d.id, "idle0"), _0x167ba0 + _0x5ec7a4 / 2 - 20, _0x18c074 - 8, 40, 40); else {
        const _0x17beb6 = WEAPONS[_0xa9fc6d.id];
        drawItemIcon(_0x161a82, _0x17beb6.id, _0x167ba0 + _0x5ec7a4 / 2 - 10, _0x18c074 + 3, 20) || runtime_de(_0x161a82, _0x17beb6.icon, _0x167ba0 + _0x5ec7a4 / 2 - 10, _0x18c074 + 3, 20, _0x17beb6.col);
      }
      (drawText(_0x161a82, "★" + _0xa9fc6d.rarity, _0x167ba0 + 2, _0x18c074 + _0x126da3 - 8, {
        "size": 5,
        "color": runtime_Rn[_0xa9fc6d.rarity],
        "bold": !0
      }), _0x36c3ef.n > 1 && drawText(_0x161a82, "×" + _0x36c3ef.n, _0x167ba0 + _0x5ec7a4 - 2, _0x18c074 + _0x126da3 - 8, {
        "size": 6,
        "align": "right",
        "color": "#ffffff",
        "bold": !0
      }), _0x36c3ef.isNew ? drawText(_0x161a82, "NEW", _0x167ba0 + 2, _0x18c074 + 2, {
        "size": 5,
        "color": "#ffe080",
        "bold": !0
      }) : _0x36c3ef.pickup && drawText(_0x161a82, "PICK", _0x167ba0 + 2, _0x18c074 + 2, {
        "size": 5,
        "color": "#ffcc40",
        "bold": !0
      }));
    }), _0x1233dd.length > _0x4f80e1 && drawText(_0x161a82, "외 " + (_0x1233dd.length - _0x4f80e1) + "종", 240, 232, {
      "size": 6,
      "align": "center",
      "color": "#a8a0c0"
    }));
    const _0x2f66e1 = _0x1233dd.filter(_0x3b0abd => _0x3b0abd.r.rarity >= 5).map(_0x4a4e9d => "" + (_0x4a4e9d.r.type === "char" ? CHARACTERS[_0x4a4e9d.r.id].name : WEAPONS[_0x4a4e9d.r.id].name.replace(/「.*」/, "").trim()) + (_0x4a4e9d.n > 1 ? "×" + _0x4a4e9d.n : "") + (_0x4a4e9d.isNew ? "(NEW)" : ""));
    _0x2f66e1.length && drawText(_0x161a82, "★5↑: " + _0x2f66e1.join(", "), 240, 242, {
      "size": 6,
      "align": "center",
      "color": "#ffd070",
      "maxW": 460
    });
  }
  renderReveal(_0x46c86d) {
    const _0x89b2c6 = this.results[this.revealIdx], _0x1937e3 = runtime_Rn[_0x89b2c6.rarity], _0x217ada = this.revealT;
    (_0x46c86d.fillStyle = "rgba(4,2,10,0.88)", _0x46c86d.fillRect(0, 0, 480, 270), _0x46c86d.save(), _0x46c86d.globalCompositeOperation = "lighter");
    for (let _0xe542e0 = 0; _0xe542e0 < 16; _0xe542e0++) {
      const _0x3a43ef = _0xe542e0 / 16 * Math.PI * 2 + _0x217ada * 0.01;
      (_0x46c86d.strokeStyle = runtime_q(_0x1937e3, 0.12), _0x46c86d.lineWidth = 10, _0x46c86d.beginPath(), _0x46c86d.moveTo(180, 140), _0x46c86d.lineTo(180 + Math.cos(_0x3a43ef) * 500, 140 + Math.sin(_0x3a43ef) * 500), _0x46c86d.stroke());
    }
    const _0x2033e1 = _0x46c86d.createRadialGradient(180, 140, 0, 180, 140, 120);
    (_0x2033e1.addColorStop(0, runtime_q(_0x1937e3, 0.5)), _0x2033e1.addColorStop(1, runtime_q(_0x1937e3, 0)), _0x46c86d.fillStyle = _0x2033e1, _0x46c86d.fillRect(60, 20, 240, 240), _0x46c86d.restore());
    const _0x5dc346 = Math.min(1, _0x217ada / 25);
    if (_0x89b2c6.type === "char") {
      const _0x41899a = CHARACTERS[_0x89b2c6.id], _0x31c4f0 = ["castUp", "windHigh", "slashDown", "idle0"][Math.min(3, Math.floor(_0x217ada / 18))], _0x5a4dfa = 48 * (_0x89b2c6.rarity >= 5 ? 5 : 4);
      (_0x46c86d.globalAlpha = _0x5dc346, _0x217ada < 25 ? _0x46c86d.drawImage(runtime_ue(runtime_Qf(_0x89b2c6.id, _0x31c4f0), "#ffffff"), 180 - _0x5a4dfa / 2, 255 - _0x5a4dfa, _0x5a4dfa, _0x5a4dfa) : _0x46c86d.drawImage(runtime_Qf(_0x89b2c6.id, _0x31c4f0), 180 - _0x5a4dfa / 2, 255 - _0x5a4dfa, _0x5a4dfa, _0x5a4dfa), _0x46c86d.globalAlpha = 1);
      const _0x1edb00 = 300, _0x3bce1b = Math.min(1, (_0x217ada - 15) / 20);
      _0x3bce1b > 0 && (runtime_zn(_0x46c86d, _0x1edb00, 70, _0x89b2c6.rarity, 12), drawText(_0x46c86d, _0x41899a.title, _0x1edb00, 90, {
        "size": 9,
        "color": _0x1937e3,
        "alpha": _0x3bce1b
      }), drawText(_0x46c86d, _0x41899a.name, _0x1edb00, 104, {
        "size": 22,
        "color": "#ffffff",
        "bold": !0,
        "alpha": _0x3bce1b
      }), drawText(_0x46c86d, data_Gr[_0x41899a.type] + " · " + _0x41899a.passive.name, _0x1edb00, 136, {
        "size": 8,
        "color": data_Nr[_0x41899a.type],
        "alpha": _0x3bce1b
      }), drawText(_0x46c86d, _0x41899a.lore, _0x1edb00, 152, {
        "size": 7,
        "color": "#c8c0d8",
        "alpha": _0x3bce1b,
        "maxW": 170
      }), drawText(_0x46c86d, _0x89b2c6.note, _0x1edb00, 176, {
        "size": 10,
        "color": _0x89b2c6.isNew ? "#ffe080" : "#a0ffd0",
        "bold": !0,
        "alpha": _0x3bce1b
      }));
    } else {
      const _0x3c8224 = WEAPONS[_0x89b2c6.id];
      (_0x46c86d.globalAlpha = _0x5dc346, drawItemIcon(_0x46c86d, _0x3c8224.id, 120, 80, 120) || runtime_de(_0x46c86d, _0x3c8224.icon, 120, 80, 120, _0x3c8224.col), _0x46c86d.globalAlpha = 1, runtime_zn(_0x46c86d, 300, 80, _0x89b2c6.rarity, 12), drawText(_0x46c86d, _0x3c8224.name, 300, 100, {
        "size": 14,
        "color": "#ffffff",
        "bold": !0,
        "maxW": 175
      }), drawText(_0x46c86d, data_a0(_0x3c8224, game.save.weapons[_0x89b2c6.id]?.rf ?? 1, !1), 300, 124, {
        "size": 7,
        "color": "#c8c0d8",
        "maxW": 170
      }), drawText(_0x46c86d, _0x89b2c6.note, 300, 170, {
        "size": 10,
        "color": "#ffe080",
        "bold": !0
      }));
    }
    _0x217ada > 40 && runtime_Xe(_0x46c86d, [[game.input.label("attack"), "계속"]]);
  }
}
export {N as GachaScene};
