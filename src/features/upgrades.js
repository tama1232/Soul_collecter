import {upgradeCost} from '../config/economy.js';
// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
import {game, runtime_kt, runtime_w, drawText, runtime_de, runtime_ye, runtime_Xe, runtime_ua} from "../game.js";
import {PERMANENT_UPGRADES, data_j0, data_Be, data_D0, data_C0, SHARD_EXCHANGE, data_Me} from "../game-data.js";
const h = 10, k = ["영구 강화", "결정 교환소", "각성 파편"], z = [{
  "buy": !0,
  "n": 1
}, {
  "buy": !0,
  "n": 10
}, {
  "buy": !0,
  "n": 100
}, {
  "buy": !1,
  "n": 1
}, {
  "buy": !1,
  "n": 10
}], $ = [1, 10];
class _ {
  constructor(_0x22eee6) {
    this.back = _0x22eee6;
  }
  sel = 0;
  top = 0;
  tab = 0;
  ssel = 0;
  xsel = 0;
  update() {
    const _0x1bf162 = game.input;
    if (_0x1bf162.menu("back")) {
      game.go(this.back);
      return;
    }
    const _0xccb201 = runtime_kt.hover();
    let _0x17b15c = this.tab;
    if ((_0x1bf162.menu("tabL") && (_0x17b15c = (this.tab + k.length - 1) % k.length), _0x1bf162.menu("tabR") && (_0x17b15c = (this.tab + 1) % k.length), _0xccb201?.startsWith("utab:") && runtime_kt.mouse.click && (_0x17b15c = Number(_0xccb201.slice(5))), _0x17b15c !== this.tab)) {
      (this.tab = _0x17b15c, runtime_w.play("select"));
      return;
    }
    if (this.tab === 1) {
      this.updateExchange(_0xccb201);
      return;
    }
    if (this.tab === 2) {
      this.updateShards(_0xccb201);
      return;
    }
    const _0x1de3a5 = PERMANENT_UPGRADES.length;
    (_0x1bf162.menu("mup") && (this.sel = (this.sel - 1 + _0x1de3a5) % _0x1de3a5), _0x1bf162.menu("mdown") && (this.sel = (this.sel + 1) % _0x1de3a5), this.sel < this.top && (this.top = this.sel), this.sel >= this.top + h && (this.top = this.sel - h + 1));
    const _0x11bb9c = runtime_kt.hover();
    let _0xa4595d = !1;
    if ((_0x11bb9c?.startsWith("up:") && (runtime_kt.mouse.moved && (this.sel = Number(_0x11bb9c.slice(3))), runtime_kt.mouse.click && (this.sel = Number(_0x11bb9c.slice(3)), _0xa4595d = !0)), _0x1bf162.menu("ok") || _0xa4595d)) {
      const _0x362392 = PERMANENT_UPGRADES[this.sel], _0x28e837 = game.save.upgrades[_0x362392.id] ?? 0;
      if (_0x28e837 >= _0x362392.max) {
        runtime_w.play("error");
        return;
      }
      const _0x479cf3 = upgradeCost(_0x362392,_0x28e837);
      if (game.save.crystals < _0x479cf3) {
        (runtime_w.play("error"), game.toast("영혼 결정이 부족하다", "#ff8080"));
        return;
      }
      (game.save.crystals -= _0x479cf3, game.save.upgrades[_0x362392.id] = _0x28e837 + 1, runtime_w.play("buy"), game.persist());
    }
  }
  updateExchange(_0x564490) {
    const _0x1205b3 = game.input;
    ((_0x1205b3.menu("mup") || _0x1205b3.menu("mleft")) && (this.xsel = (this.xsel + $.length - 1) % $.length), (_0x1205b3.menu("mdown") || _0x1205b3.menu("mright")) && (this.xsel = (this.xsel + 1) % $.length));
    let _0x4cdc1c = !1;
    if ((_0x564490?.startsWith("ex:") && (runtime_kt.mouse.moved || runtime_kt.mouse.click) && (this.xsel = Number(_0x564490.slice(3)), _0x4cdc1c = runtime_kt.mouse.click), !(_0x1205b3.menu("ok") || _0x4cdc1c))) return;
    const _0x5a9695 = $[this.xsel];
    if (!data_j0(game.save, _0x5a9695)) {
      (runtime_w.play("error"), game.toast("영혼 결정이 부족하다", "#ff8080"));
      return;
    }
    (runtime_w.play("buy"), game.toast("계약석 +" + data_Be.gain * _0x5a9695, "#c0a0ff"), game.persist());
  }
  world(_0x23d49e) {
    (_0x23d49e.fillStyle = "#100a14", _0x23d49e.fillRect(0, 0, 480, 270));
  }
  ui(_0x591a3e) {
    const _0x5767e2 = game.save;
    if ((drawText(_0x591a3e, "영구 강화 — 사자의 대장간", 12, 8, {
      "size": 12,
      "color": "#ffb060",
      "bold": !0
    }), runtime_de(_0x591a3e, "shard", 360, 9, 10, "#40d0e0"), drawText(_0x591a3e, "영혼 결정 " + _0x5767e2.crystals, 374, 10, {
      "size": 8,
      "color": "#a0f0ff"
    }), k.forEach((_0x521df8, _0x46d13e) => {
      const _0x456b7a = 168 + _0x46d13e * 62, _0x23ceb6 = _0x46d13e === this.tab, _0x20b298 = runtime_kt.hover() === "utab:" + _0x46d13e;
      (_0x591a3e.fillStyle = _0x23ceb6 ? "rgba(255,176,96,0.35)" : _0x20b298 ? "rgba(255,176,96,0.15)" : "rgba(255,255,255,0.04)", _0x591a3e.fillRect(_0x456b7a, 7, 58, 15), _0x591a3e.strokeStyle = _0x23ceb6 ? "#ffb060" : "#3a2e52", _0x591a3e.strokeRect(_0x456b7a + 0.5, 7.5, 57, 14), drawText(_0x591a3e, _0x521df8, _0x456b7a + 29, 10, {
        "size": 7,
        "align": "center",
        "color": _0x23ceb6 ? "#ffffff" : "#a8a0c0",
        "bold": _0x23ceb6
      }), runtime_kt.add("utab:" + _0x46d13e, _0x456b7a, 7, 58, 15));
    }), this.tab === 1)) {
      this.uiExchange(_0x591a3e);
      return;
    }
    if (this.tab === 2) {
      this.uiShards(_0x591a3e);
      return;
    }
    runtime_ye(_0x591a3e, 8, 28, 464, 226);
    const _0x1d17e5 = 21;
    (PERMANENT_UPGRADES.forEach((_0x1d846c, _0x3f871c) => {
      if (_0x3f871c < this.top || _0x3f871c >= this.top + h) return;
      const _0x4b577f = _0x5767e2.upgrades[_0x1d846c.id] ?? 0, _0x298739 = 34 + (_0x3f871c - this.top) * _0x1d17e5, _0x3d2953 = _0x3f871c === this.sel;
      (_0x591a3e.fillStyle = _0x3d2953 ? "rgba(255,176,96,0.25)" : "rgba(255,255,255,0.03)", _0x591a3e.fillRect(14, _0x298739, 452, _0x1d17e5 - 2), runtime_kt.add("up:" + _0x3f871c, 14, _0x298739, 452, _0x1d17e5 - 2), drawText(_0x591a3e, _0x1d846c.name, 20, _0x298739 + (_0x1d17e5 - 9) / 2, {
        "size": 8,
        "color": _0x3d2953 ? "#ffffff" : "#e0d0c0",
        "bold": _0x3d2953
      }), drawText(_0x591a3e, _0x1d846c.desc.replace("{v}", String(+(_0x1d846c.per * Math.max(1, _0x4b577f)).toFixed(1))), 120, _0x298739 + (_0x1d17e5 - 9) / 2, {
        "size": 7,
        "color": _0x4b577f ? "#ffe080" : "#8a8098"
      }));
      (drawText(_0x591a3e, _0x1d846c.uncapped ? "Lv" + _0x4b577f : _0x4b577f + "/" + _0x1d846c.max, 410, _0x298739 + (_0x1d17e5 - 9) / 2 + 1, {
        "size": 6,
        "color": _0x4b577f ? "#ffd0a0" : "#6a6078"
      }), drawText(_0x591a3e, _0x4b577f >= _0x1d846c.max ? "완료" : upgradeCost(_0x1d846c,_0x4b577f).toLocaleString("ko-KR",{notation:"compact",maximumFractionDigits:1}), 460, _0x298739 + (_0x1d17e5 - 9) / 2, {
        "size": 7,
        "align": "right",
        "color": _0x4b577f >= _0x1d846c.max ? "#80ff80" : _0x5767e2.crystals >= upgradeCost(_0x1d846c,_0x4b577f) ? "#a0f0ff" : "#806070"
      }));
    }), PERMANENT_UPGRADES.length > h && (_0x591a3e.fillStyle = "rgba(255,255,255,0.08)", _0x591a3e.fillRect(468, 34, 2, h * 21 - 2), _0x591a3e.fillStyle = "#ffb060", _0x591a3e.fillRect(468, 34 + this.top / PERMANENT_UPGRADES.length * (h * 21 - 2), 2, h / PERMANENT_UPGRADES.length * (h * 21 - 2)), this.top > 0 && drawText(_0x591a3e, "▲", 240, 28, {
      "size": 6,
      "align": "center",
      "color": "#ffb060"
    }), this.top + h < PERMANENT_UPGRADES.length && drawText(_0x591a3e, "▼", 240, 247, {
      "size": 6,
      "align": "center",
      "color": "#ffb060"
    })), runtime_Xe(_0x591a3e, [["↑↓", "선택"], [game.input.label("skill2") + "/" + game.input.label("skill1"), "탭"], [game.input.label("attack"), "강화"], ["Esc", "나가기"]], 258));
  }
  uiExchange(_0x3e4c6b) {
    const _0x59b0c0 = game.save;
    (runtime_ye(_0x3e4c6b, 8, 28, 464, 226), drawText(_0x3e4c6b, "결정 교환소", 240, 40, {
      "size": 11,
      "align": "center",
      "color": "#c0a0ff",
      "bold": !0
    }), drawText(_0x3e4c6b, "남는 영혼 결정을 계약에 쓰는 계약석으로 바꾼다 (결정 " + data_Be.cost + " → 계약석 " + data_Be.gain + ")", 240, 58, {
      "size": 7,
      "align": "center",
      "color": "#a8a0c0"
    }), runtime_de(_0x3e4c6b, "gem", 196, 74, 10, "#6a9aff"), drawText(_0x3e4c6b, "보유 계약석 " + _0x59b0c0.stones, 210, 75, {
      "size": 8,
      "color": "#e0d0ff"
    }), $.forEach((_0x30a641, _0x1d1ca2) => {
      const _0x5b6838 = 52 + _0x1d1ca2 * 196, _0x410ef8 = data_Be.cost * _0x30a641;
      (runtime_ua(_0x3e4c6b, _0x5b6838, 100, 180, 60, "계약석 " + data_Be.gain * _0x30a641, _0x1d1ca2 === this.xsel, {
        "sub": "영혼 결정 " + _0x410ef8,
        "disabled": _0x59b0c0.crystals < _0x410ef8,
        "col": "#c0a0ff",
        "size": 11
      }), runtime_kt.add("ex:" + _0x1d1ca2, _0x5b6838, 100, 180, 60));
    }), drawText(_0x3e4c6b, "각성 비용은 단계마다 기본값의 35%씩 증가 · 교환 후 되돌리기 불가", 240, 176, {
      "size": 6,
      "align": "center",
      "color": "#806070"
    }), runtime_Xe(_0x3e4c6b, [["←→", "선택"], [game.input.label("skill2") + "/" + game.input.label("skill1"), "탭"], [game.input.label("attack"), "교환"], ["Esc", "나가기"]], 258));
  }
  updateShards(_0x37b3e3) {
    const _0x8128ef = game.input, _0x118d2e = z.length;
    (_0x8128ef.menu("mleft") && (this.ssel = (this.ssel + _0x118d2e - 1) % _0x118d2e), _0x8128ef.menu("mright") && (this.ssel = (this.ssel + 1) % _0x118d2e), (_0x8128ef.menu("mup") || _0x8128ef.menu("mdown")) && (this.ssel = this.ssel < 3 ? Math.min(_0x118d2e - 1, this.ssel + 3) : this.ssel - 3));
    let _0x29d6e4 = !1;
    if ((_0x37b3e3?.startsWith("sx:") && (runtime_kt.mouse.moved || runtime_kt.mouse.click) && (this.ssel = Number(_0x37b3e3.slice(3)), _0x29d6e4 = runtime_kt.mouse.click), !(_0x8128ef.menu("ok") || _0x29d6e4))) return;
    const _0x5d0a27 = z[this.ssel];
    if (!(_0x5d0a27.buy ? data_D0(game.save, _0x5d0a27.n) : data_C0(game.save, _0x5d0a27.n))) {
      (runtime_w.play("error"), game.toast(_0x5d0a27.buy ? "영혼 결정이 부족하다" : "각성 파편이 부족하다", "#ff8080"));
      return;
    }
    (runtime_w.play("buy"), game.toast(_0x5d0a27.buy ? "각성 파편 +" + _0x5d0a27.n : "영혼 결정 +" + SHARD_EXCHANGE.sell * _0x5d0a27.n, "#ffb0e0"), game.persist());
  }
  uiShards(_0x2b1e4c) {
    const _0x36206c = game.save;
    (runtime_ye(_0x2b1e4c, 8, 28, 464, 226), drawText(_0x2b1e4c, "각성 파편 교환소", 240, 38, {
      "size": 11,
      "align": "center",
      "color": "#ff9ad8",
      "bold": !0
    }), drawText(_0x2b1e4c, "영혼 결정 " + SHARD_EXCHANGE.buy + " → 각성 파편 1 · 되팔기 각성 파편 1 → 영혼 결정 " + SHARD_EXCHANGE.sell, 240, 54, {
      "size": 7,
      "align": "center",
      "color": "#a8a0c0"
    }), runtime_de(_0x2b1e4c, "gem", 186, 66, 10, "#ff8ad0"), drawText(_0x2b1e4c, "보유 각성 파편 " + _0x36206c.awShards.toLocaleString(), 200, 67, {
      "size": 8,
      "color": "#ffd0f0",
      "bold": !0
    }), z.forEach((_0x5be702, _0x49f6d7) => {
      const _0x53d2c3 = _0x49f6d7 < 3 ? 0 : 1, _0x290714 = _0x53d2c3 ? _0x49f6d7 - 3 : _0x49f6d7, _0x4e7a4e = _0x53d2c3 ? 92 + _0x290714 * 152 : 24 + _0x290714 * 148, _0x3cb772 = _0x53d2c3 ? 148 : 84, _0x247c1f = _0x5be702.buy ? SHARD_EXCHANGE.buy * _0x5be702.n : _0x5be702.n, _0x5eb759 = _0x5be702.buy ? _0x36206c.crystals : _0x36206c.awShards;
      (runtime_ua(_0x2b1e4c, _0x4e7a4e, _0x3cb772, 136, 46, _0x5be702.buy ? "각성 파편 " + _0x5be702.n : "영혼 결정 " + SHARD_EXCHANGE.sell * _0x5be702.n, _0x49f6d7 === this.ssel, {
        "sub": _0x5be702.buy ? "영혼 결정 " + _0x247c1f.toLocaleString() : "각성 파편 " + _0x247c1f + " 되팔기",
        "disabled": _0x5eb759 < _0x247c1f,
        "col": _0x5be702.buy ? "#ff9ad8" : "#a0f0ff",
        "size": 9
      }), runtime_kt.add("sx:" + _0x49f6d7, _0x4e7a4e, _0x3cb772, 136, 46));
    }), drawText(_0x2b1e4c, "사기", 18, 76, {
      "size": 6,
      "color": "#ff9ad8"
    }), drawText(_0x2b1e4c, "되팔기", 18, 140, {
      "size": 6,
      "color": "#a0f0ff"
    }));
    const _0x168d1e = [3, 4, 5, 6, 7, 8].map(_0x1db608 => "★" + _0x1db608 + " " + data_Me[_0x1db608].toLocaleString()).join(" · ");
    (drawText(_0x2b1e4c, "각성 1단계 비용 (영웅 육성 화면에서 사용): " + _0x168d1e, 240, 206, {
      "size": 6,
      "align": "center",
      "color": "#c8c0d8"
    }), drawText(_0x2b1e4c, "각성 비용은 단계마다 기본값의 35%씩 증가 · 교환 후 되돌리기 불가", 240, 220, {
      "size": 6,
      "align": "center",
      "color": "#806070"
    }), runtime_Xe(_0x2b1e4c, [["방향키", "선택"], [game.input.label("skill2") + "/" + game.input.label("skill1"), "탭"], [game.input.label("attack"), "교환"], ["Esc", "나가기"]], 258));
  }
}
export {_ as UpgradeScene};
