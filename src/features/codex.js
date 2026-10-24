import {bondMultiplier, collectionBonds} from '../config/expansion.js';
// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
import {CHARACTER_LIST, data_ve, data_Ue, data_Cr, data_ye, data_Se, data_O0, data_Re, data_P0, getEnemyKillCount, data_hr, data_Js, DEVELOPER_FLAGS, data_Nr, data_Gr, AWAKENING_MAX, data_yr, data_a0, CHARACTERS, data_s0, data_L, getBossKillCount, data_H0, data_E0, data_lo} from "../game-data.js";
import {ParticleEffects, game, runtime_w, runtime_kt, drawText, runtime_ua, runtime_ye, runtime_Xe, runtime_q, runtime_Rn, runtime_Qf, runtime_ue, runtime_zn, runtime_Dn, runtime_Hs, drawItemIcon, runtime_de, runtime_zs, runtime_Zf, runtime_Ro, runtime_qh, runtime__t, runtime_En, runtime_Sh, runtime_Ph, runtime_Ga, runtime__0, runtime_Ka} from "../game.js";
const G = ["영웅", "무기", "유물", "문장", "세트", "인연", "적", "보스"], D = 6, es = 7, Ts = {
  "boss": "보스",
  "melee": "근접",
  "archer": "궁수 (원거리)",
  "flyer": "비행",
  "jumper": "도약",
  "charger": "돌진",
  "turret": "포탑 (고정)",
  "shield": "방패병",
  "teleporter": "순간이동",
  "caster": "마법사 (원거리)",
  "bomber": "자폭 비행",
  "lancer": "창병",
  "golem": "거구",
  "dummy": "훈련용"
}, H = ["#a8a0c0", "#e0d0ff", "#ffc890", "#80e0ff", "#a0ffc0"], M = [], ts = [];
data_O0.forEach((_0x17594e, _0x31bca1) => {
  let _0x15f9fc = M[M.length - 1];
  ((!_0x15f9fc || _0x15f9fc.place.theme !== _0x17594e.place.theme || _0x15f9fc.idx.length >= 4) && M.push(_0x15f9fc = {
    "place": _0x17594e.place,
    "idx": []
  }), ts[_0x31bca1] = [M.length - 1, _0x15f9fc.idx.length], _0x15f9fc.idx.push(_0x31bca1));
});
const V = 10, T = [], ms = [];
data_Re.forEach((_0x5db994, _0x2b4b41) => {
  const _0x409761 = data_Re[_0x2b4b41 - 1];
  ((!_0x409761 || _0x409761.place.story !== _0x5db994.place.story) && T.push({
    "head": "제" + _0x5db994.place.book + "권 스토리 " + data_L(_0x5db994.place.story),
    "col": H[_0x5db994.place.book] ?? "#a8a0c0"
  }), ms[_0x2b4b41] = T.length, T.push({
    "boss": _0x2b4b41
  }));
});
const q = 19, fs = 14, X = 6, hs = {
  0: [5, X],
  1: [5, X],
  2: [8, 10],
  3: [1, 99],
  4: [1, 99],
  5: [1, 19]
};
class Ps {
  constructor(_0x5015fa) {
    this.back = _0x5015fa;
  }
  tab = 0;
  sel = 0;
  t = 0;
  scroll = 0;
  fx = new ParticleEffects();
  preview = {
    "act": 0,
    "f": 0,
    "which": 0
  };
  patPage = 0;
  patT = 0;
  count() {
    return [CHARACTER_LIST.length, data_ve.length, data_Ue.length, data_Cr.length, data_ye.length, data_Se.length, data_O0.length, data_Re.length][this.tab];
  }
  enter() {
    const _0x3f5f0e = data_P0(game.save);
    if (_0x3f5f0e.length) {
      for (const [_0x8b9131, _0x3e4609] of _0x3f5f0e) game.toast("보스 도감 " + _0x8b9131 + "% 달성 — 별의 나침반 +" + _0x3e4609, "#ffe080");
      (runtime_w.play("select"), game.persist());
    }
  }
  navBestiary() {
    const _0x99f397 = game.input;
    if (this.tab === D) {
      const [_0x2028f2, _0x17305a] = ts[this.sel], _0x1ebbee = _0x440c41 => {
        const _0x4abbc3 = M[Math.max(0, Math.min(M.length - 1, _0x440c41))];
        this.sel = _0x4abbc3.idx[Math.min(_0x17305a, _0x4abbc3.idx.length - 1)];
      };
      (_0x99f397.menu("mleft") && (this.sel = Math.max(0, this.sel - 1)), _0x99f397.menu("mright") && (this.sel = Math.min(data_O0.length - 1, this.sel + 1)), _0x99f397.menu("mup") && _0x1ebbee(_0x2028f2 - 1), _0x99f397.menu("mdown") && _0x1ebbee(_0x2028f2 + 1));
    } else {
      const _0xcf7557 = data_Re.length;
      ((_0x99f397.menu("mup") || _0x99f397.menu("mleft")) && (this.sel = Math.max(0, this.sel - 1)), (_0x99f397.menu("mdown") || _0x99f397.menu("mright")) && (this.sel = Math.min(_0xcf7557 - 1, this.sel + 1)));
    }
  }
  update() {
    this.t++;
    const _0x20840e = game.input;
    if (_0x20840e.menu("back")) {
      game.go(this.back);
      return;
    }
    (_0x20840e.menu("tabL") && (this.tab = (this.tab + G.length - 1) % G.length, this.sel = 0, runtime_w.play("select")), _0x20840e.menu("tabR") && (this.tab = (this.tab + 1) % G.length, this.sel = 0, runtime_w.play("select")));
    const _0x1b4fb3 = this.count(), [_0x34e2ea, _0x6e905c] = hs[this.tab] ?? [1, 1], _0x4cc1d8 = this.sel, _0x20bb8e = this.tab;
    this.tab >= D ? this.navBestiary() : (_0x20840e.menu("mleft") && (this.sel = Math.max(0, this.sel - 1)), _0x20840e.menu("mright") && (this.sel = Math.min(_0x1b4fb3 - 1, this.sel + 1)), _0x20840e.menu("mup") && (this.sel = Math.max(0, this.sel - _0x34e2ea)), _0x20840e.menu("mdown") && (this.sel = Math.min(_0x1b4fb3 - 1, this.sel + _0x34e2ea)));
    const _0x1f1f54 = runtime_kt.hover();
    if ((_0x1f1f54?.startsWith("cx:") && (runtime_kt.mouse.moved || runtime_kt.mouse.click) && (this.sel = Number(_0x1f1f54.slice(3))), _0x1f1f54?.startsWith("ct:") && runtime_kt.mouse.click && (this.tab = Number(_0x1f1f54.slice(3)), this.sel = 0), _0x1f1f54 === "pg" && runtime_kt.mouse.click && this.patPage++, _0x20bb8e !== this.tab && (this.scroll = 0), this.tab === D)) {
      const _0x264bab = ts[this.sel][0];
      (_0x264bab < this.scroll && (this.scroll = _0x264bab), _0x264bab >= this.scroll + V && (this.scroll = _0x264bab - V + 1));
    } else {
      if (this.tab === es) {
        const _0xdd295 = ms[this.sel];
        (_0xdd295 - 1 < this.scroll && (this.scroll = Math.max(0, _0xdd295 - 1)), _0xdd295 >= this.scroll + q && (this.scroll = _0xdd295 - q + 1));
      } else {
        if (this.tab < 3 || this.tab === 5) {
          const _0x23b2d2 = Math.floor(this.sel / _0x34e2ea);
          (_0x23b2d2 < this.scroll && (this.scroll = _0x23b2d2), _0x23b2d2 >= this.scroll + _0x6e905c && (this.scroll = _0x23b2d2 - _0x6e905c + 1));
        } else this.scroll = 0;
      }
    }
    if ((_0x4cc1d8 !== this.sel && (runtime_w.play("select"), this.preview = {
      "act": 0,
      "f": 0,
      "which": 0
    }, this.patPage = 0, this.patT = 0), this.tab === es && ++this.patT >= 240 && (this.patT = 0, this.patPage++), this.tab === 0)) {
      const _0x15ff25 = CHARACTER_LIST[this.sel];
      _0x15ff25 && game.save.newChars.includes(_0x15ff25.id) && (game.save.newChars = game.save.newChars.filter(_0x56c758 => _0x56c758 !== _0x15ff25.id), game.persist());
      const _0x34feb4 = this.seq(), _0x37387d = _0x34feb4[this.preview.act % _0x34feb4.length];
      this.preview.f++;
      for (const _0x39f1e7 of _0x37387d.ev) (_0x39f1e7.t === this.preview.f && _0x39f1e7.k === "hit" && _0x39f1e7.fx && this.fx.slash(120, 150, 1, _0x39f1e7.fx, _0x15ff25.fx), _0x39f1e7.t === this.preview.f && (_0x39f1e7.k === "nova" || _0x39f1e7.k === "meteor" || _0x39f1e7.k === "field" || _0x39f1e7.k === "proj") && this.fx.ring(150, 150, _0x15ff25.fx, 30));
      this.preview.f > _0x37387d.dur + 10 && (this.preview.f = 0, this.preview.act++);
    }
    this.fx.update();
  }
  seq() {
    const _0x1880f9 = CHARACTER_LIST[this.sel];
    return [..._0x1880f9.combo, _0x1880f9.skills[0].act, _0x1880f9.skills[1].act, _0x1880f9.swap.act];
  }
  pose() {
    const _0x1ccc21 = this.seq(), _0x31aa8d = _0x1ccc21[this.preview.act % _0x1ccc21.length];
    let _0x5e1449 = _0x31aa8d.pose[0][1];
    for (const [_0x2b7a6a, _0x3b4def] of _0x31aa8d.pose) this.preview.f >= _0x2b7a6a && (_0x5e1449 = _0x3b4def);
    return (this.preview.f > _0x31aa8d.dur && (_0x5e1449 = "idle0"), _0x5e1449);
  }
  world(_0x436c1a) {
    const _0x22c574 = _0x436c1a.createLinearGradient(0, 0, 0, 270);
    (_0x22c574.addColorStop(0, "#120c20"), _0x22c574.addColorStop(1, "#0a0614"), _0x436c1a.fillStyle = _0x22c574, _0x436c1a.fillRect(0, 0, 480, 270));
  }
  ui(_0x398130) {
    (drawText(_0x398130, "도감", 10, 6, {
      "size": 12,
      "color": "#e0d0ff",
      "bold": !0
    }), G.forEach((_0x2ac348, _0xa335d6) => {
      (runtime_ua(_0x398130, 46 + _0xa335d6 * 53.5, 5, 50, 15, _0x2ac348, _0xa335d6 === this.tab, {
        "size": 7
      }), runtime_kt.add("ct:" + _0xa335d6, 46 + _0xa335d6 * 53.5, 5, 50, 15));
    }));
    const _0x12a2ad = game.save, _0x3c0f7f = this.tab === 0 ? Object.keys(_0x12a2ad.chars).length : this.tab === 1 ? Object.keys(_0x12a2ad.weapons).length : 0;
    if ((this.tab < 2 && drawText(_0x398130, "수집 " + _0x3c0f7f + " / " + this.count(), 474, 21, {
      "size": 6,
      "align": "right",
      "color": "#a8a0c0"
    }), this.tab === D)) {
      const _0x3009a8 = data_O0.filter(_0x313c64 => getEnemyKillCount(_0x12a2ad, _0x313c64.def.id) > 0).length;
      drawText(_0x398130, "발견 " + _0x3009a8 + " / " + data_O0.length, 474, 21, {
        "size": 6,
        "align": "right",
        "color": "#a8a0c0"
      });
    }
    if (this.tab === es) {
      const [_0x553486, _0x386882] = data_hr(_0x12a2ad), _0x5853d8 = data_Js.find(([_0x2220e0]) => !(_0x12a2ad.codexClaims ?? []).includes(_0x2220e0)), _0x383588 = _0x5853d8 ? " · 다음 " + _0x5853d8[0] + "% (" + Math.ceil(_0x5853d8[0] * _0x386882 / 100) + "체): 별의 나침반 +" + _0x5853d8[1] : " · 수집 보상 모두 받음";
      drawText(_0x398130, "처치 " + _0x553486 + " / " + _0x386882 + _0x383588, 474, 21, {
        "size": 6,
        "align": "right",
        "color": "#ffe080"
      });
    }
    (runtime_ye(_0x398130, 6, 28, 190, 226), this.tab === 0 ? this.charGrid(_0x398130) : this.tab === 1 ? this.weaponGrid(_0x398130) : this.tab === 2 ? this.relicGrid(_0x398130) : this.tab === 3 ? this.crestList(_0x398130) : this.tab === 4 ? this.setList(_0x398130) : this.tab === 5 ? this.comboList(_0x398130) : this.tab === D ? this.enemyGrid(_0x398130) : this.bossList(_0x398130), runtime_Xe(_0x398130, [[game.input.label("skill2") + "/" + game.input.label("skill1"), "탭"], ["방향키", "선택"], ["Esc", "나가기"]], 258));
  }
  gridCell(_0x2e9fb3) {
    return [12 + _0x2e9fb3 % 5 * 36, 34 + (Math.floor(_0x2e9fb3 / 5) - this.scroll) * 36];
  }
  gridVisible(_0x4e4118) {
    const _0x22a2aa = Math.floor(_0x4e4118 / 5) - this.scroll;
    return _0x22a2aa >= 0 && _0x22a2aa < X;
  }
  gridArrows(_0x155e54, _0x212b8b) {
    const _0x3aea01 = Math.ceil(_0x212b8b / 5);
    (this.scroll > 0 && drawText(_0x155e54, "▲", 100, 26, {
      "size": 6,
      "align": "center",
      "color": "#a090c0"
    }), this.scroll + X < _0x3aea01 && drawText(_0x155e54, "▼", 100, 251, {
      "size": 6,
      "align": "center",
      "color": "#a090c0"
    }));
  }
  charGrid(_0x1885ec) {
    const _0x5cd75b = game.save;
    (this.gridArrows(_0x1885ec, CHARACTER_LIST.length), CHARACTER_LIST.forEach((_0x5fbe94, _0x56b093) => {
      if (!this.gridVisible(_0x56b093)) return;
      const [_0x173e57, _0x34a108] = this.gridCell(_0x56b093), _0x1aa528 = _0x5cd75b.chars[_0x5fbe94.id] ?? (DEVELOPER_FLAGS.all ? {
        "aw": 0
      } : void 0);
      (_0x1885ec.fillStyle = _0x56b093 === this.sel ? runtime_q(runtime_Rn[_0x5fbe94.rarity], 0.35) : "rgba(255,255,255,0.04)", _0x1885ec.fillRect(_0x173e57, _0x34a108, 32, 32), _0x1885ec.strokeStyle = _0x1aa528 ? runtime_Rn[_0x5fbe94.rarity] : "#2a2238", _0x1885ec.strokeRect(_0x173e57 + 0.5, _0x34a108 + 0.5, 31, 31));
      const _0x5e0eee = runtime_Qf(_0x5fbe94.id, "idle0"), _0x5c631b = _0x5e0eee.width / 48;
      (_0x1885ec.drawImage(_0x1aa528 ? _0x5e0eee : runtime_ue(_0x5e0eee, "#05030a"), 10 * _0x5c631b, 14 * _0x5c631b, 28 * _0x5c631b, 28 * _0x5c631b, _0x173e57 + 2, _0x34a108 + 2, 28, 28), _0x1aa528?.aw && drawText(_0x1885ec, "" + _0x1aa528.aw, _0x173e57 + 29, _0x34a108 + 22, {
        "size": 6,
        "align": "right",
        "color": "#ffe080",
        "bold": !0
      }), _0x5cd75b.newChars.includes(_0x5fbe94.id) && drawText(_0x1885ec, "NEW", _0x173e57 + 2, _0x34a108 + 1, {
        "size": 5,
        "color": "#ff6080",
        "bold": !0
      }), runtime_kt.add("cx:" + _0x56b093, _0x173e57, _0x34a108, 32, 32));
    }));
    const _0x5259c4 = CHARACTER_LIST[this.sel], _0x372956 = _0x5cd75b.chars[_0x5259c4.id] ?? (DEVELOPER_FLAGS.all ? {
      "lv": 1,
      "aw": 0
    } : void 0);
    (runtime_ye(_0x1885ec, 200, 28, 274, 226, {
      "border": runtime_Rn[_0x5259c4.rarity]
    }), _0x1885ec.fillStyle = "rgba(0,0,0,0.3)", _0x1885ec.fillRect(204, 32, 110, 128), _0x1885ec.fillStyle = "#2a2238", _0x1885ec.fillRect(204, 150, 110, 2));
    const _0x3242da = runtime_Qf(_0x5259c4.id, this.pose());
    (_0x1885ec.drawImage(_0x372956 ? _0x3242da : runtime_ue(_0x3242da, "#05030a"), 211, 62, 96, 96), _0x1885ec.save(), _0x1885ec.beginPath(), _0x1885ec.rect(204, 32, 110, 128), _0x1885ec.clip(), _0x1885ec.translate(139, -22), this.fx.renderFront(_0x1885ec, 0, 0), _0x1885ec.restore());
    const _0x4617ea = this.seq(), _0x23a1b9 = this.preview.act % _0x4617ea.length, _0x363a02 = _0x23a1b9 < _0x5259c4.combo.length ? "기본 공격 " + (_0x23a1b9 + 1) + "타" : _0x23a1b9 === _0x5259c4.combo.length ? _0x5259c4.skills[0].name : _0x23a1b9 === _0x5259c4.combo.length + 1 ? _0x5259c4.skills[1].name : _0x5259c4.swap.name;
    (drawText(_0x1885ec, _0x363a02, 259, 152, {
      "size": 6,
      "align": "center",
      "color": "#a8a0c0"
    }), runtime_zn(_0x1885ec, 320, 34, _0x5259c4.rarity, 7), drawText(_0x1885ec, _0x5259c4.title, 320, 44, {
      "size": 7,
      "color": runtime_Rn[_0x5259c4.rarity]
    }), drawText(_0x1885ec, _0x372956 ? _0x5259c4.name : _0x5259c4.name + " (미획득)", 320, 54, {
      "size": 11,
      "color": "#ffffff",
      "bold": !0
    }), drawText(_0x1885ec, "" + data_Gr[_0x5259c4.type], 320, 70, {
      "size": 7,
      "color": data_Nr[_0x5259c4.type],
      "bold": !0
    }), _0x5259c4.crest && runtime_Dn(_0x1885ec, [_0x5259c4.crest], 360, 69), drawText(_0x1885ec, "공격 " + _0x5259c4.atk + " · 체력 " + _0x5259c4.hp + " · 속도 " + _0x5259c4.speed, 320, 82, {
      "size": 6,
      "color": "#c8c0d8"
    }), drawText(_0x1885ec, _0x372956 ? "Lv." + _0x372956.lv + " · 각성 " + _0x372956.aw + "/" + AWAKENING_MAX : "계약의 제단에서 획득", 320, 92, {
      "size": 7,
      "color": _0x372956 ? "#ffe080" : "#8a8098"
    }), runtime_Hs(_0x1885ec, _0x5259c4.lore, 320, 104, 150, {
      "size": 6,
      "color": "#a8a0c0"
    }, 8));
    let _0x5d89cd = 164;
    const _0x1db846 = [["기본 공격 (" + _0x5259c4.combo.length + "타 콤보)", _0x5259c4.combo.length + "타 콤보 · 공중 공격 · 대시 공격"], ["[스킬1] " + _0x5259c4.skills[0].name + " (" + _0x5259c4.skills[0].cd + "초)", _0x5259c4.skills[0].desc], ["[스킬2] " + _0x5259c4.skills[1].name + " (" + _0x5259c4.skills[1].cd + "초)", _0x5259c4.skills[1].desc], ..._0x5259c4.ult ? [["[궁극기 " + game.input.label("ult") + "] " + _0x5259c4.ult.name + " (" + _0x5259c4.ult.cd + "초)", _0x5259c4.ult.desc]] : [], [_0x5259c4.swap.name, _0x5259c4.swap.desc], ["[패시브] " + _0x5259c4.passive.name, _0x5259c4.passive.desc]], _0x2f84f4 = _0x1db846.length > 5 ? 15 : 18;
    for (const [_0x30d2e3, _0x5a999e] of _0x1db846) (drawText(_0x1885ec, _0x30d2e3, 206, _0x5d89cd, {
      "size": 6,
      "color": _0x30d2e3.startsWith("[궁극기") ? "#ff9ae0" : "#ffe080"
    }), drawText(_0x1885ec, _0x5a999e, 206, _0x5d89cd + 8, {
      "size": 6,
      "color": "#c8c0d8",
      "maxW": 150
    }), _0x5d89cd += _0x2f84f4);
    (drawText(_0x1885ec, "각성", 362, 164, {
      "size": 7,
      "color": "#e0d0ff",
      "bold": !0
    }), _0x5259c4.awaken.forEach((_0x310de6, _0x31bba4) => {
      const _0x219352 = !!_0x372956 && _0x372956.aw > _0x31bba4;
      (drawText(_0x1885ec, "" + (_0x31bba4 + 1), 362, 176 + _0x31bba4 * 15, {
        "size": 6,
        "color": _0x219352 ? "#ffe080" : "#5a5068",
        "bold": !0
      }), drawText(_0x1885ec, _0x310de6.desc, 370, 176 + _0x31bba4 * 15, {
        "size": 6,
        "color": _0x219352 ? "#f0e8d8" : "#6a6078",
        "maxW": 100
      }));
    }));
  }
  weaponGrid(_0x5e32ef) {
    const _0x1602c6 = game.save;
    (this.gridArrows(_0x5e32ef, data_ve.length), data_ve.forEach((_0xd556d2, _0x49abd2) => {
      if (!this.gridVisible(_0x49abd2)) return;
      const [_0x3466f0, _0x4fbbfa] = this.gridCell(_0x49abd2), _0x43099a = _0x1602c6.weapons[_0xd556d2.id] ?? (DEVELOPER_FLAGS.all ? {
        "rf": 1
      } : void 0);
      (_0x5e32ef.fillStyle = _0x49abd2 === this.sel ? runtime_q(runtime_Rn[_0xd556d2.rarity], 0.35) : "rgba(255,255,255,0.04)", _0x5e32ef.fillRect(_0x3466f0, _0x4fbbfa, 32, 32), _0x5e32ef.strokeStyle = _0x43099a ? runtime_Rn[_0xd556d2.rarity] : "#2a2238", _0x5e32ef.strokeRect(_0x3466f0 + 0.5, _0x4fbbfa + 0.5, 31, 31), drawItemIcon(_0x5e32ef, _0xd556d2.id, _0x3466f0 + 4, _0x4fbbfa + 4, 24, _0x43099a ? void 0 : "#2e2640") || runtime_de(_0x5e32ef, _0xd556d2.icon, _0x3466f0 + 4, _0x4fbbfa + 4, 24, _0x43099a ? _0xd556d2.col : "#2e2640"), _0x43099a && _0x43099a.rf > 1 && drawText(_0x5e32ef, "" + _0x43099a.rf, _0x3466f0 + 29, _0x4fbbfa + 22, {
        "size": 6,
        "align": "right",
        "color": "#ffe080",
        "bold": !0
      }), runtime_kt.add("cx:" + _0x49abd2, _0x3466f0, _0x4fbbfa, 32, 32));
    }));
    const _0x47a2bc = data_ve[this.sel], _0x3a7b14 = _0x1602c6.weapons[_0x47a2bc.id] ?? (DEVELOPER_FLAGS.all ? {
      "rf": 1
    } : void 0);
    (runtime_ye(_0x5e32ef, 200, 28, 274, 226, {
      "border": runtime_Rn[_0x47a2bc.rarity]
    }), _0x5e32ef.fillStyle = "rgba(0,0,0,0.3)", _0x5e32ef.fillRect(208, 36, 80, 80), drawItemIcon(_0x5e32ef, _0x47a2bc.id, 216, 44, 64, _0x3a7b14 ? void 0 : "#2e2640") || runtime_de(_0x5e32ef, _0x47a2bc.icon, 216, 44, 64, _0x3a7b14 ? _0x47a2bc.col : "#2e2640"), runtime_zn(_0x5e32ef, 296, 38, _0x47a2bc.rarity, 8), drawText(_0x5e32ef, _0x47a2bc.name, 296, 52, {
      "size": 10,
      "color": "#ffffff",
      "bold": !0,
      "maxW": 172
    }), drawText(_0x5e32ef, "공격력 +" + _0x47a2bc.atk, 296, 68, {
      "size": 7,
      "color": "#c8c0d8"
    }), _0x47a2bc.crest && runtime_Dn(_0x5e32ef, _0x47a2bc.crest, 296, 80), drawText(_0x5e32ef, _0x3a7b14 ? "보유 · 재련 " + _0x3a7b14.rf + "/" + data_yr : "미획득", 296, 96, {
      "size": 7,
      "color": _0x3a7b14 ? "#ffe080" : "#8a8098"
    }), drawText(_0x5e32ef, "효과", 210, 126, {
      "size": 8,
      "color": "#e0d0ff",
      "bold": !0
    }));
    let _0x1711f6 = 140 + runtime_Hs(_0x5e32ef, data_a0(_0x47a2bc, _0x3a7b14?.rf ?? 1, !1), 210, 140, 254, {
      "size": 7,
      "color": "#f0e8d8"
    }, 10);
    _0x47a2bc.owner && _0x47a2bc.sigDesc && (_0x1711f6 += runtime_Hs(_0x5e32ef, "전용(" + (CHARACTERS[_0x47a2bc.owner]?.name ?? _0x47a2bc.owner) + "): " + _0x47a2bc.sigDesc, 210, _0x1711f6, 254, {
      "size": 6,
      "color": runtime_Rn[7]
    }, 9));
    const _0x16b910 = Math.max(176, _0x1711f6 + 2), _0x5b6e4f = Math.min(11, (250 - _0x16b910 - 10) / 5);
    drawText(_0x5e32ef, "재련 단계별 효과", 210, _0x16b910, {
      "size": 7,
      "color": "#e0d0ff"
    });
    for (let _0x17c7db = 1; _0x17c7db <= 5; _0x17c7db++) drawText(_0x5e32ef, _0x17c7db + "단계: " + data_a0(_0x47a2bc, _0x17c7db, !1), 210, _0x16b910 + 10 + (_0x17c7db - 1) * _0x5b6e4f, {
      "size": 6,
      "color": _0x3a7b14 && _0x3a7b14.rf >= _0x17c7db ? "#ffe080" : "#6a6078",
      "maxW": 256
    });
  }
  relicGrid(_0x347256) {
    const [_0x1174b8] = hs[2], _0x1b8a5f = Math.ceil(data_Ue.length / 8);
    (data_Ue.forEach((_0x463919, _0x5629d4) => {
      const _0x444dae = Math.floor(_0x5629d4 / 8) - this.scroll;
      if (_0x444dae < 0 || _0x444dae >= _0x1174b8) return;
      const _0x161d6b = 12 + _0x5629d4 % 8 * 22, _0x23500b = 34 + _0x444dae * 22;
      (_0x347256.fillStyle = _0x5629d4 === this.sel ? "rgba(160,128,255,0.35)" : "rgba(255,255,255,0.04)", _0x347256.fillRect(_0x161d6b, _0x23500b, 20, 20), runtime_de(_0x347256, _0x463919.icon, _0x161d6b + 2, _0x23500b + 2, 16, _0x463919.col), runtime_kt.add("cx:" + _0x5629d4, _0x161d6b, _0x23500b, 20, 20));
    }), this.scroll > 0 && drawText(_0x347256, "▲", 100, 26, {
      "size": 6,
      "align": "center",
      "color": "#a090c0"
    }), this.scroll + _0x1174b8 < _0x1b8a5f && drawText(_0x347256, "▼", 100, 255, {
      "size": 6,
      "align": "center",
      "color": "#a090c0"
    }));
    const _0x2c6708 = data_Ue[this.sel];
    (runtime_ye(_0x347256, 200, 28, 274, 226, {
      "border": runtime_zs[_0x2c6708.rarity]
    }), runtime_de(_0x347256, _0x2c6708.icon, 214, 40, 56, _0x2c6708.col), drawText(_0x347256, _0x2c6708.name, 282, 44, {
      "size": 11,
      "color": "#ffffff",
      "bold": !0
    }), drawText(_0x347256, runtime_Zf[_0x2c6708.rarity], 282, 60, {
      "size": 7,
      "color": runtime_zs[_0x2c6708.rarity]
    }), runtime_Dn(_0x347256, _0x2c6708.crest, 282, 72), runtime_Hs(_0x347256, _0x2c6708.desc, 212, 110, 250, {
      "size": 8,
      "color": "#f0e8d8"
    }, 12), drawText(_0x347256, "유물은 런 중 정예·보물·상점·이벤트에서 얻는다.", 212, 230, {
      "size": 6,
      "color": "#8a8098"
    }), this.sel);
  }
  crestList(_0x3f1717) {
    data_Cr.forEach((_0x22e1d3, _0x43d2f2) => {
      const _0x32cee6 = 34 + _0x43d2f2 * 21;
      (_0x3f1717.fillStyle = _0x43d2f2 === this.sel ? runtime_q(_0x22e1d3.col, 0.25) : "rgba(255,255,255,0.03)", _0x3f1717.fillRect(12, _0x32cee6, 178, 19), runtime_de(_0x3f1717, _0x22e1d3.icon, 16, _0x32cee6 + 3, 13, _0x22e1d3.col), drawText(_0x3f1717, _0x22e1d3.name, 34, _0x32cee6 + 5, {
        "size": 8,
        "color": _0x22e1d3.col,
        "bold": !0
      }));
      const _0x2fc675 = data_Ue.filter(_0x234e96 => _0x234e96.crest.includes(_0x22e1d3.id)).length;
      (drawText(_0x3f1717, "유물 " + _0x2fc675 + "종", 184, _0x32cee6 + 6, {
        "size": 6,
        "align": "right",
        "color": "#8a8098"
      }), runtime_kt.add("cx:" + _0x43d2f2, 12, _0x32cee6, 178, 19));
    });
    const _0x46196d = data_Cr[this.sel];
    (runtime_ye(_0x3f1717, 200, 28, 274, 226, {
      "border": _0x46196d.col
    }), runtime_de(_0x3f1717, _0x46196d.icon, 212, 38, 32, _0x46196d.col), drawText(_0x3f1717, _0x46196d.name + "의 문장", 252, 44, {
      "size": 12,
      "color": _0x46196d.col,
      "bold": !0
    }), _0x46196d.tiers.forEach((_0x54f8c0, _0x4ebd6b) => {
      const _0x57ae61 = 86 + _0x4ebd6b * 40;
      (_0x3f1717.fillStyle = runtime_q(_0x46196d.col, 0.12), _0x3f1717.fillRect(210, _0x57ae61, 254, 34), drawText(_0x3f1717, _0x54f8c0.n + "개", 216, _0x57ae61 + 4, {
        "size": 9,
        "color": _0x46196d.col,
        "bold": !0
      }), runtime_Hs(_0x3f1717, _0x54f8c0.desc, 246, _0x57ae61 + 5, 212, {
        "size": 7,
        "color": "#f0e8d8"
      }, 10));
    }));
    const _0x1e9476 = CHARACTER_LIST.filter(_0x3bed9e => _0x3bed9e.crest === _0x46196d.id).map(_0x17d720 => _0x17d720.name), _0x3eaa49 = data_ve.filter(_0x1012de => _0x1012de.crest?.includes(_0x46196d.id)).map(_0x52b319 => _0x52b319.name.replace(/「.*」/, "").trim());
    (runtime_Hs(_0x3f1717, "영웅: " + (_0x1e9476.join(", ") || "-"), 212, 204, 254, {
      "size": 5,
      "color": "#c8c0d8"
    }, 7), runtime_Hs(_0x3f1717, "무기: " + (_0x3eaa49.join(", ") || "-"), 212, 219, 254, {
      "size": 5,
      "color": "#c8c0d8"
    }, 7));
  }
  setList(_0x3cee99) {
    data_ye.forEach((_0x116091, _0xad7d13) => {
      const _0x23d792 = 34 + _0xad7d13 * 19;
      (_0x3cee99.fillStyle = _0xad7d13 === this.sel ? runtime_q(_0x116091.col, 0.25) : "rgba(255,255,255,0.03)", _0x3cee99.fillRect(12, _0x23d792, 178, 17), drawText(_0x3cee99, "◆ " + _0x116091.name, 18, _0x23d792 + 4, {
        "size": 8,
        "color": _0x116091.col,
        "bold": !0
      }), drawText(_0x3cee99, "유물 " + _0x116091.pieces.length + "개", 184, _0x23d792 + 5, {
        "size": 6,
        "align": "right",
        "color": "#8a8098"
      }), runtime_kt.add("cx:" + _0xad7d13, 12, _0x23d792, 178, 17));
    });
    const _0x19d8a1 = data_ye[this.sel];
    (runtime_ye(_0x3cee99, 200, 28, 274, 226, {
      "border": _0x19d8a1.col
    }), drawText(_0x3cee99, "유물 세트 「" + _0x19d8a1.name + "」", 212, 40, {
      "size": 12,
      "color": _0x19d8a1.col,
      "bold": !0
    }), _0x19d8a1.pieces.forEach((_0x4b4587, _0x334604) => {
      const _0x3281a2 = data_s0[_0x4b4587], _0x687d55 = 212 + _0x334604 % 2 * 128, _0x1dcd82 = 62 + Math.floor(_0x334604 / 2) * 26;
      (_0x3cee99.fillStyle = "rgba(255,255,255,0.05)", _0x3cee99.fillRect(_0x687d55, _0x1dcd82, 124, 22), runtime_de(_0x3cee99, _0x3281a2.icon, _0x687d55 + 3, _0x1dcd82 + 3, 16, _0x3281a2.col), drawText(_0x3cee99, _0x3281a2.name, _0x687d55 + 24, _0x1dcd82 + 4, {
        "size": 7,
        "color": runtime_zs[_0x3281a2.rarity],
        "bold": !0,
        "maxW": 98
      }), drawText(_0x3cee99, runtime_Zf[_0x3281a2.rarity], _0x687d55 + 24, _0x1dcd82 + 13, {
        "size": 5,
        "color": "#8a8098"
      }));
    }), _0x19d8a1.tiers.forEach((_0x4564b2, _0x4fba05) => {
      const _0x58bff8 = 124 + _0x4fba05 * 38;
      (_0x3cee99.fillStyle = runtime_q(_0x19d8a1.col, 0.12), _0x3cee99.fillRect(210, _0x58bff8, 254, 32), drawText(_0x3cee99, _0x4564b2.n + "개", 216, _0x58bff8 + 4, {
        "size": 9,
        "color": _0x19d8a1.col,
        "bold": !0
      }), runtime_Hs(_0x3cee99, _0x4564b2.desc, 246, _0x58bff8 + 5, 212, {
        "size": 7,
        "color": "#f0e8d8"
      }, 10));
    }), runtime_Hs(_0x3cee99, "유물 등급: 일반 45% · 희귀 30% · 에픽 20% · 전설 5%. 중복 획득마다 Lv+1, 기본 효과 +35%. 문장·세트는 종류별 1개만 센다.", 212, 206, 254, {
      "size": 6,
      "color": "#a8a0c0"
    }, 9));
  }
  comboList(_0x5fec2) {
    (this.scroll > 0 && drawText(_0x5fec2, "▲ " + this.scroll, 186, 30, {
      "size": 5,
      "align": "right",
      "color": "#a090c0"
    }), this.scroll + 19 < data_Se.length && drawText(_0x5fec2, "▼ " + (data_Se.length - this.scroll - 19), 186, 250, {
      "size": 5,
      "align": "right",
      "color": "#a090c0"
    }), data_Se.forEach((_0x302c7f, _0x181fe6) => {
      if (_0x181fe6 < this.scroll || _0x181fe6 >= this.scroll + 19) return;
      const _0x736706 = 32 + (_0x181fe6 - this.scroll) * 11.5;
      (_0x5fec2.fillStyle = _0x181fe6 === this.sel ? runtime_q(_0x302c7f.col, 0.25) : "rgba(255,255,255,0.03)", _0x5fec2.fillRect(12, _0x736706, 178, 10.5));
      const [_0x3fc4f, _0x497ee7] = _0x302c7f.heroes.map(_0xd5bba0 => CHARACTERS[_0xd5bba0]);
      (drawText(_0x5fec2, _0x302c7f.name, 16, _0x736706 + 2, {
        "size": 6,
        "color": _0x302c7f.col,
        "bold": !0,
        "maxW": 90
      }), drawText(_0x5fec2, _0x3fc4f.name + "+" + _0x497ee7.name, 186, _0x736706 + 2, {
        "size": 6,
        "align": "right",
        "color": game.save.chars[_0x3fc4f.id] && game.save.chars[_0x497ee7.id] ? "#ffe080" : "#8a8098",
        "maxW": 84
      }), runtime_kt.add("cx:" + _0x181fe6, 12, _0x736706, 178, 10.5));
    }));
    const _0x5453b9 = data_Se[this.sel];
    (runtime_ye(_0x5fec2, 200, 28, 274, 226, {
      "border": _0x5453b9.col
    }), drawText(_0x5fec2, "인연 「" + _0x5453b9.name + "」", 212, 40, {
      "size": 12,
      "color": _0x5453b9.col,
      "bold": !0
    }), _0x5453b9.heroes.forEach((_0x9986aa, _0x366a12) => {
      const _0x4915a5 = CHARACTERS[_0x9986aa], _0x1ef0a7 = 222 + _0x366a12 * 120, _0x4db97f = DEVELOPER_FLAGS.all || !!game.save.chars[_0x9986aa];
      (_0x5fec2.drawImage(_0x4db97f ? runtime_Qf(_0x9986aa, "idle0") : runtime_ue(runtime_Qf(_0x9986aa, "idle0"), "#000000"), _0x1ef0a7 - 8, 46, 96, 96), runtime_zn(_0x5fec2, _0x1ef0a7 + 40, 142, _0x4915a5.rarity, 6, "center"), drawText(_0x5fec2, _0x4915a5.name, _0x1ef0a7 + 40, 150, {
        "size": 9,
        "align": "center",
        "color": _0x4db97f ? "#ffffff" : "#6a6078",
        "bold": !0
      }));
    }), drawText(_0x5fec2, "+", 336, 96, {
      "size": 14,
      "align": "center",
      "color": _0x5453b9.col,
      "bold": !0
    }), _0x5fec2.fillStyle = runtime_q(_0x5453b9.col, 0.12), _0x5fec2.fillRect(210, 168, 254, 34), runtime_Hs(_0x5fec2, _0x5453b9.desc + " · 효과 ×" + bondMultiplier(_0x5453b9,CHARACTERS,game.save.chars).toFixed(2), 218, 174, 240, {
      "size": 8,
      "color": "#f0e8d8"
    }, 11), runtime_Hs(_0x5fec2, "편성 인연: 평균 희귀도 +1마다 기본 효과 +20%, 평균 돌파당 기본 배율에 +12%. 두 영웅을 보유하면 미편성 상태에도 공격·체력·스킬에 기본 0.5%×인연 배율이 상시 적용된다.", 212, 210, 254, {
      "size": 6,
      "color": "#a8a0c0"
    }, 9));
  }
  enemyGrid(_0x2f246b) {
    const _0x5353e5 = game.save;
    this.scroll > 0 && drawText(_0x2f246b, "▲ " + this.scroll, 186, 29, {
      "size": 5,
      "align": "right",
      "color": "#a090c0"
    });
    const _0x4601b8 = M.length - this.scroll - V;
    _0x4601b8 > 0 && drawText(_0x2f246b, "▼ " + _0x4601b8, 186, 252, {
      "size": 5,
      "align": "right",
      "color": "#a090c0"
    });
    for (let _0x4530d5 = this.scroll; _0x4530d5 < Math.min(M.length, this.scroll + V); _0x4530d5++) {
      const _0x4d2a5c = M[_0x4530d5], _0x15c170 = 34 + (_0x4530d5 - this.scroll) * 22, _0x4026d7 = _0x4d2a5c.place.label.split(" · ")[1], _0x1d16d9 = "제" + _0x4d2a5c.place.book + "권 S" + data_L(_0x4d2a5c.place.story), _0x38b322 = H[_0x4d2a5c.place.book] ?? "#a8a0c0";
      (_0x2f246b.fillStyle = "rgba(255,255,255,0.03)", _0x2f246b.fillRect(10, _0x15c170, 180, 20), _0x2f246b.fillStyle = _0x38b322, _0x2f246b.fillRect(10, _0x15c170, 2, 20), drawText(_0x2f246b, _0x1d16d9, 15, _0x15c170 + 2, {
        "size": 5,
        "color": _0x38b322,
        "maxW": 82
      }), drawText(_0x2f246b, _0x4026d7 ?? "", 15, _0x15c170 + 10, {
        "size": 6,
        "color": "#d8d0e8",
        "maxW": 84
      }), _0x4d2a5c.idx.forEach((_0x2bd4a5, _0x35f78e) => {
        const _0x5f3d20 = data_O0[_0x2bd4a5], _0x402f22 = 100 + _0x35f78e * 22, _0xf7aaf9 = DEVELOPER_FLAGS.all || getEnemyKillCount(_0x5353e5, _0x5f3d20.def.id) > 0;
        (_0x2f246b.fillStyle = _0x2bd4a5 === this.sel ? runtime_q(_0x5f3d20.def.col, 0.4) : "rgba(255,255,255,0.05)", _0x2f246b.fillRect(_0x402f22, _0x15c170, 20, 20), _0x2f246b.strokeStyle = _0x2bd4a5 === this.sel ? "#ffffff" : _0xf7aaf9 ? runtime_q(_0x5f3d20.def.col, 0.7) : "#2a2238", _0x2f246b.strokeRect(_0x402f22 + 0.5, _0x15c170 + 0.5, 19, 19));
        const _0x4ad618 = runtime_Ro(_0x5f3d20.def.id, "idle", 0);
        (_0x2f246b.drawImage(_0xf7aaf9 ? _0x4ad618 : runtime_ue(_0x4ad618, "#05030a"), 6, 6, 36, 40, _0x402f22 + 1, _0x15c170 + 1, 18, 19), _0xf7aaf9 || drawText(_0x2f246b, "?", _0x402f22 + 10, _0x15c170 + 7, {
          "size": 6,
          "align": "center",
          "color": "#5a5068",
          "bold": !0
        }), runtime_kt.add("cx:" + _0x2bd4a5, _0x402f22, _0x15c170, 20, 20));
      }));
    }
    this.enemyDetail(_0x2f246b);
  }
  enemyDetail(_0x33bf8a) {
    const _0x16c93d = data_O0[this.sel], _0x7228a6 = _0x16c93d.def, _0x3c1511 = getEnemyKillCount(game.save, _0x7228a6.id), _0x5dc07c = DEVELOPER_FLAGS.all || _0x3c1511 > 0;
    (runtime_ye(_0x33bf8a, 200, 28, 274, 226, {
      "border": _0x5dc07c ? _0x7228a6.col : "#3a3048"
    }), _0x33bf8a.fillStyle = "rgba(0,0,0,0.3)", _0x33bf8a.fillRect(206, 34, 96, 96), _0x33bf8a.fillStyle = "#2a2238", _0x33bf8a.fillRect(206, 122, 96, 2));
    const _0x53a713 = Math.floor(this.t / 90) % 3, _0x1620fb = _0x53a713 === 0 ? "idle" : _0x53a713 === 1 ? "move" : this.t % 90 < 40 ? "wind" : "atk", _0x5f20a = Math.floor(this.t / (_0x1620fb === "move" ? 6 : 12)), _0x4f24d2 = runtime_qh(_0x7228a6.id, _0x1620fb, _0x5f20a) ?? runtime_Ro(_0x7228a6.id, _0x1620fb, _0x5f20a);
    _0x33bf8a.drawImage(_0x5dc07c ? _0x4f24d2 : runtime_ue(_0x4f24d2, "#05030a"), 206, 34, 96, 96);
    const _0x4ed981 = _0x16c93d.place;
    if ((drawText(_0x33bf8a, _0x4ed981.label, 308, 36, {
      "size": 6,
      "color": H[_0x4ed981.book] ?? "#a8a0c0",
      "maxW": 160
    }), drawText(_0x33bf8a, _0x5dc07c ? _0x7228a6.name : "???", 308, 48, {
      "size": 11,
      "color": _0x5dc07c ? "#ffffff" : "#6a6078",
      "bold": !0,
      "maxW": 160
    }), !_0x5dc07c)) {
      runtime_Hs(_0x33bf8a, "아직 쓰러뜨리지 않은 적. 한 번 쓰러뜨리면 정보가 기록된다.", 308, 66, 160, {
        "size": 6,
        "color": "#8a8098"
      }, 9);
      return;
    }
    (drawText(_0x33bf8a, Ts[_0x7228a6.ai] ?? _0x7228a6.ai, 308, 64, {
      "size": 7,
      "color": "#80e0ff",
      "bold": !0
    }), _0x7228a6.flying && _0x7228a6.ai !== "flyer" && _0x7228a6.ai !== "bomber" && drawText(_0x33bf8a, "비행", 460, 64, {
      "size": 6,
      "align": "right",
      "color": "#80e0ff"
    }), drawText(_0x33bf8a, "처치 " + _0x3c1511.toLocaleString() + "회", 308, 76, {
      "size": 7,
      "color": "#ffe080"
    }), [["기본 체력", "" + _0x7228a6.hp], ["기본 공격력", "" + _0x7228a6.atk], ["방어", _0x7228a6.def ? Math.round(_0x7228a6.def * 100) + "%" : "-"], ["이동 속도", _0x7228a6.speed.toFixed(2)], ["넉백 저항", Math.round(_0x7228a6.kbRes * 100) + "%"], ["공격 거리", "" + _0x7228a6.range]].forEach(([_0x4cc400, _0x442bfc], _0x440cee) => {
      const _0x29882a = 308 + _0x440cee % 2 * 82, _0x5e53ee = 90 + Math.floor(_0x440cee / 2) * 11;
      (drawText(_0x33bf8a, _0x4cc400, _0x29882a, _0x5e53ee, {
        "size": 6,
        "color": "#a8a0c0"
      }), drawText(_0x33bf8a, _0x442bfc, _0x29882a + 76, _0x5e53ee, {
        "size": 6,
        "align": "right",
        "color": "#f0e8d8"
      }));
    }));
    let _0x3816af = 140;
    const _0x3b17e7 = _0x7228a6.proj ? " · 원거리 탄" + (_0x7228a6.proj.st ? " (" + (({
      "poison": "중독",
      "burn": "화상",
      "chill": "둔화"
    })[_0x7228a6.proj.st] ?? _0x7228a6.proj.st) + ")" : "") : "";
    (drawText(_0x33bf8a, "공격 예고 " + (_0x7228a6.windup / 60).toFixed(2) + "초 · 공격 후 대기 " + (_0x7228a6.cd / 60).toFixed(2) + "초" + _0x3b17e7, 210, _0x3816af, {
      "size": 6,
      "color": "#c8c0d8",
      "maxW": 258
    }), _0x3816af += 12, drawText(_0x33bf8a, "정예일 때: " + (({
      "shockwave": "충격파",
      "volley": "일제 사격",
      "summon": "소환",
      "blink": "순간이동",
      "enrage": "격노",
      "nova": "폭발"
    })[_0x7228a6.eliteSkill] ?? _0x7228a6.eliteSkill), 210, _0x3816af, {
      "size": 6,
      "color": "#ff9ab0"
    }), _0x3816af += 12, _0x7228a6.affixes?.length && (drawText(_0x33bf8a, "타고난 접두 능력", 210, _0x3816af, {
      "size": 6,
      "color": "#e0d0ff"
    }), _0x7228a6.affixes.forEach((_0x522c89, _0x253d58) => {
      const _0xa4db61 = runtime__t[_0x522c89];
      drawText(_0x33bf8a, "[" + (_0xa4db61?.name ?? _0x522c89) + "]", 290 + _0x253d58 * 56, _0x3816af, {
        "size": 6,
        "color": _0xa4db61?.col ?? "#ffffff",
        "bold": !0
      });
    }), _0x3816af += 12), runtime_Hs(_0x33bf8a, "표시된 체력·공격력은 기본값이다. 실제로는 스토리 배율과 장(진행 단계) 배율이 곱해지고, 정예는 체력 3.2배·공격 1.4배.", 210, Math.max(_0x3816af + 4, 214), 256, {
      "size": 6,
      "color": "#8a8098"
    }, 9));
  }
  bossList(_0x475b6a) {
    const _0x1a2c2c = game.save;
    this.scroll > 0 && drawText(_0x475b6a, "▲ " + this.scroll, 186, 29, {
      "size": 5,
      "align": "right",
      "color": "#a090c0"
    });
    const _0x14da96 = T.length - this.scroll - q;
    _0x14da96 > 0 && drawText(_0x475b6a, "▼ " + _0x14da96, 186, 252, {
      "size": 5,
      "align": "right",
      "color": "#a090c0"
    });
    for (let _0x1f6848 = this.scroll; _0x1f6848 < Math.min(T.length, this.scroll + q); _0x1f6848++) {
      const _0x3f3ddd = T[_0x1f6848], _0x596302 = 33 + (_0x1f6848 - this.scroll) * 11.5;
      if (("head" in _0x3f3ddd)) {
        drawText(_0x475b6a, "── " + _0x3f3ddd.head, 14, _0x596302 + 2, {
          "size": 6,
          "color": _0x3f3ddd.col,
          "bold": !0
        });
        continue;
      }
      const _0x45fe8b = _0x3f3ddd.boss, _0x5b4908 = data_Re[_0x45fe8b], _0x190a3c = getBossKillCount(_0x1a2c2c, _0x5b4908.def.id), _0x2e7c48 = DEVELOPER_FLAGS.all || _0x190a3c > 0;
      (_0x475b6a.fillStyle = _0x45fe8b === this.sel ? runtime_q(_0x5b4908.def.col, 0.3) : "rgba(255,255,255,0.03)", _0x475b6a.fillRect(12, _0x596302, 178, 10.5), drawText(_0x475b6a, _0x5b4908.place.stage + "장", 16, _0x596302 + 2, {
        "size": 6,
        "color": "#8a8098"
      }), drawText(_0x475b6a, _0x2e7c48 ? _0x5b4908.def.name : "???", 34, _0x596302 + 2, {
        "size": 6,
        "color": _0x2e7c48 ? _0x5b4908.def.col : "#5a5068",
        "bold": _0x2e7c48,
        "maxW": 118
      }), drawText(_0x475b6a, _0x190a3c ? "×" + _0x190a3c : "", 186, _0x596302 + 2, {
        "size": 6,
        "align": "right",
        "color": "#ffe080"
      }), runtime_kt.add("cx:" + _0x45fe8b, 12, _0x596302, 178, 10.5));
    }
    this.bossDetail(_0x475b6a);
  }
  bossFrame(_0xa3b27f) {
    const _0x436135 = Math.floor(this.t / 10);
    if (_0xa3b27f.orb) return runtime_En(_0xa3b27f.id, Math.floor(this.t / 6) % 12, !1);
    if (_0xa3b27f.id === "mycora") return runtime_Sh("idle", _0x436135);
    if (_0xa3b27f.id === "ignis") return runtime_Ph("idle", _0x436135, !1);
    const _0x4cf134 = runtime_Ga[_0xa3b27f.id];
    if (!_0x4cf134) return null;
    const _0x50c948 = _0x436135 % 2 ? "idle1" : "idle0";
    return runtime__0(_0xa3b27f.id, _0x50c948) ?? runtime_Ka("b:" + _0xa3b27f.id, _0x4cf134, _0x50c948);
  }
  bossDetail(_0x1707bf) {
    const _0x27c819 = data_Re[this.sel], _0x1e87a2 = _0x27c819.def, _0x1d128f = getBossKillCount(game.save, _0x1e87a2.id), _0x1f7569 = DEVELOPER_FLAGS.all ? Math.max(1, _0x1d128f) : _0x1d128f;
    (runtime_ye(_0x1707bf, 200, 28, 274, 226, {
      "border": _0x1f7569 ? _0x1e87a2.col : "#3a3048"
    }), _0x1707bf.fillStyle = "rgba(0,0,0,0.3)", _0x1707bf.fillRect(206, 34, 80, 80));
    const _0x17edc8 = this.bossFrame(_0x1e87a2);
    if ((_0x1707bf.save(), _0x1707bf.beginPath(), _0x1707bf.rect(206, 34, 80, 80), _0x1707bf.clip(), _0x17edc8)) {
      const _0x4125ed = _0x1f7569 ? _0x17edc8 : runtime_ue(_0x17edc8, "#05030a");
      if (runtime_Ga[_0x1e87a2.id] && !_0x1e87a2.orb) _0x1707bf.drawImage(_0x4125ed, 194, 114 - 104 * (44 / 48), 104, 104); else {
        const _0x36c61b = 80 / Math.max(_0x17edc8.width, _0x17edc8.height), _0x532cea = _0x17edc8.width * _0x36c61b, _0x2c106c = _0x17edc8.height * _0x36c61b;
        _0x1707bf.drawImage(_0x4125ed, 246 - _0x532cea / 2, 114 - _0x2c106c, _0x532cea, _0x2c106c);
      }
    } else (_0x1707bf.fillStyle = _0x1f7569 ? _0x1e87a2.col : "#1a1424", _0x1707bf.beginPath(), _0x1707bf.arc(246, 74, 26, 0, Math.PI * 2), _0x1707bf.fill());
    _0x1707bf.restore();
    const _0x1a89d4 = _0x27c819.place;
    if ((drawText(_0x1707bf, _0x1a89d4.label, 292, 36, {
      "size": 6,
      "color": H[_0x1a89d4.book] ?? "#a8a0c0",
      "maxW": 176
    }), !_0x1f7569)) {
      (drawText(_0x1707bf, "???", 292, 48, {
        "size": 12,
        "color": "#6a6078",
        "bold": !0
      }), runtime_Hs(_0x1707bf, "아직 쓰러뜨리지 않은 보스. 한 번 쓰러뜨리면 이름과 공격 패턴·즉사기 피하는 법이 기록된다.", 292, 68, 174, {
        "size": 6,
        "color": "#8a8098"
      }, 9));
      return;
    }
    (drawText(_0x1707bf, _0x1e87a2.title, 292, 47, {
      "size": 6,
      "color": _0x1e87a2.col,
      "maxW": 176
    }), drawText(_0x1707bf, _0x1e87a2.name, 292, 56, {
      "size": 11,
      "color": "#ffffff",
      "bold": !0,
      "maxW": 176
    }), drawText(_0x1707bf, "처치 " + _0x1d128f + "회", 292, 72, {
      "size": 7,
      "color": "#ffe080"
    }));
    const _0x26225c = _0x1e87a2.phases.length + 1;
    (drawText(_0x1707bf, "체력 " + data_H0(_0x1e87a2).toLocaleString() + " · 공격 " + data_E0(_0x1e87a2), 292, 84, {
      "size": 6,
      "color": "#c8c0d8"
    }), drawText(_0x1707bf, "" + (_0x1e87a2.segBar ? "체력 " + _0x26225c + "칸" : "페이즈 " + _0x26225c) + (_0x1e87a2.split ? " · 분열" : "") + (_0x1e87a2.flying ? " · 비행" : "") + (_0x1e87a2.still ? " · 고정" : ""), 292, 94, {
      "size": 6,
      "color": "#c8c0d8"
    }), drawText(_0x1707bf, "(기본값 · 스토리 배율 별도)", 292, 104, {
      "size": 5,
      "color": "#8a8098"
    }));
    const _0x1c985c = [...new Set(_0x1e87a2.patterns.flat())].map(_0xf257f1 => data_lo(_0xf257f1)), _0x34f905 = _0x1c985c.filter(_0x1b90de => _0x1b90de.exec), _0x240413 = _0x1c985c.filter(_0x232b7c => !_0x232b7c.exec), _0x142dad = [];
    for (const _0x102cba of _0x34f905) _0x142dad.push({
      "p": _0x102cba
    }, {
      "p": _0x102cba,
      "hint": !0
    });
    for (const _0x23e311 of _0x240413) _0x142dad.push({
      "p": _0x23e311
    });
    const _0x1be5a7 = [0];
    for (; _0x1be5a7[_0x1be5a7.length - 1] + fs < _0x142dad.length; ) {
      let _0x522ec7 = _0x1be5a7[_0x1be5a7.length - 1] + fs;
      (_0x142dad[_0x522ec7]?.hint && _0x522ec7--, _0x1be5a7.push(_0x522ec7));
    }
    const _0x410e10 = this.patPage % _0x1be5a7.length, _0x8fa7d6 = _0x1be5a7[_0x410e10], _0x5ad5d8 = _0x1be5a7[_0x410e10 + 1] ?? _0x142dad.length;
    (drawText(_0x1707bf, "패턴 " + _0x240413.length + (_0x34f905.length ? " · 즉사기 " + _0x34f905.length : ""), 208, 118, {
      "size": 7,
      "color": "#e0d0ff",
      "bold": !0
    }), _0x1be5a7.length > 1 && (drawText(_0x1707bf, _0x410e10 + 1 + "/" + _0x1be5a7.length + " ▶", 466, 118, {
      "size": 6,
      "align": "right",
      "color": "#a090c0"
    }), runtime_kt.add("pg", 430, 116, 40, 10)));
    let _0x14ce5e = 130;
    for (let _0x5706e8 = _0x8fa7d6; _0x5706e8 < _0x5ad5d8; _0x5706e8++) {
      const {p: _0x55a44c, hint: _0x57f7c8} = _0x142dad[_0x5706e8];
      (_0x57f7c8 ? drawText(_0x1707bf, "  피하는 법: " + (_0x55a44c.hint ?? ""), 214, _0x14ce5e, {
        "size": 6,
        "color": "#fff0a0",
        "maxW": 252
      }) : _0x55a44c.exec ? (_0x1707bf.fillStyle = "rgba(176,80,255,0.18)", _0x1707bf.fillRect(206, _0x14ce5e - 1, 262, 18), drawText(_0x1707bf, "◆ " + _0x55a44c.name, 210, _0x14ce5e, {
        "size": 6,
        "color": "#d090ff",
        "bold": !0
      }), drawText(_0x1707bf, _0x55a44c.desc, 300, _0x14ce5e, {
        "size": 6,
        "color": "#c8c0d8",
        "maxW": 166
      })) : (drawText(_0x1707bf, "· " + _0x55a44c.name, 210, _0x14ce5e, {
        "size": 6,
        "color": "#ffe080"
      }), drawText(_0x1707bf, _0x55a44c.desc, 290, _0x14ce5e, {
        "size": 6,
        "color": "#c8c0d8",
        "maxW": 176
      })), _0x14ce5e += 8);
    }
    _0x34f905.length && drawText(_0x1707bf, "즉사기: 보라 예고 · 금빛 자리만 안전 · 3·2·1", 208, 245, {
      "size": 5,
      "color": "#a080c0"
    });
  }
}
export {Ps as CodexScene};
