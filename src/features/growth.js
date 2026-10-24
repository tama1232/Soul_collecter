// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
import {CHARACTER_LIST, data_ve, getAwakeningCost, CHARACTERS, AWAKENING_MAX, awakenHero, data_G0, getHeroLevelCost, data_pt, data_ut, data_Ie, getSkillMasteryCost, data__0, data_Ne, getWeaponEnhanceCost, WEAPONS, data_x0, craftableWeapons, craftWeapon, data_$0, canCraftWeapon, getCraftCost, data_yr, data_a0, data_eo, data_so, data_Nr, data_Gr, data_We, data_se, data_w0, data_dt, data_nt, data_ft, data_y0, data_rt, data_ot, data_lt, data_it} from "../game-data.js";
import {game, runtime_w, runtime_kt, runtime_Ml, runtime_Rn, runtime_ye, drawText, runtime_q, drawItemIcon, runtime_de, runtime_zn, runtime_ua, runtime_Qf, drawBar, runtime_P1, runtime_T1, runtime_Xe} from "../game.js";
const P = ["레벨", "스킬 숙련", "무기 강화", "무기 제작"], os = ["스킬 1", "스킬 2", "궁극기", "교대"], v = _0x1ab9f4 => Math.round(_0x1ab9f4 * 100) + "%";
class _s {
  constructor(_0x5bcb64) {
    this.back = _0x5bcb64;
  }
  sel = 0;
  t = 0;
  flash = 0;
  bsel = 0;
  tab = 0;
  slot = 0;
  wsel = 0;
  csel = 0;
  list() {
    return CHARACTER_LIST.filter(_0x3d5ae5 => game.save.chars[_0x3d5ae5.id]).map(_0x3e429c => _0x3e429c.id);
  }
  weapons() {
    return data_ve.filter(_0x84ce2d => game.save.weapons[_0x84ce2d.id]).map(_0x424b9c => _0x424b9c.id);
  }
  setTab(_0x255d43) {
    _0x255d43 !== this.tab && (this.tab = _0x255d43, runtime_w.play("select"));
  }
  update() {
    (this.t++, this.flash > 0 && this.flash--);
    const _0x4a0874 = game.input;
    if (_0x4a0874.menu("back")) {
      game.go(this.back);
      return;
    }
    const _0x1a63d8 = runtime_kt.hover();
    if ((_0x4a0874.menu("tabL") ? this.setTab((this.tab + P.length - 1) % P.length) : _0x4a0874.menu("tabR") && this.setTab((this.tab + 1) % P.length), _0x1a63d8?.startsWith("gtab:") && runtime_kt.mouse.click)) {
      this.setTab(Number(_0x1a63d8.slice(5)));
      return;
    }
    if (this.tab === 3) {
      this.updateCraft(_0x1a63d8);
      return;
    }
    if (this.tab === 2) {
      this.updateWeapon(_0x1a63d8);
      return;
    }
    const _0x4ee55d = this.list();
    if ((_0x4a0874.menu("mup") && (this.sel = (this.sel - 1 + _0x4ee55d.length) % _0x4ee55d.length), _0x4a0874.menu("mdown") && (this.sel = (this.sel + 1) % _0x4ee55d.length), _0x1a63d8?.startsWith("gr:") && (runtime_kt.mouse.moved || runtime_kt.mouse.click) && (this.sel = Number(_0x1a63d8.slice(3))), this.tab === 1)) {
      this.updateMastery(_0x1a63d8, _0x4ee55d[this.sel]);
      return;
    }
    let _0x3e5d33 = !1;
    if ((_0x1a63d8 === "lvup" && runtime_kt.mouse.click && (_0x3e5d33 = !0, this.bsel = 0), _0x1a63d8 === "awsh" && runtime_kt.mouse.click && (_0x3e5d33 = !0, this.bsel = 1), !game.debug && (_0x4a0874.menu("mleft") || _0x4a0874.menu("mright")) && (this.bsel = 1 - this.bsel, runtime_w.play("select")), (_0x4a0874.menu("ok") || _0x3e5d33) && this.bsel === 1 && _0x4ee55d.length)) {
      const _0x3e1f21 = _0x4ee55d[this.sel], _0x3a6546 = game.save.chars[_0x3e1f21], _0x129611 = getAwakeningCost(CHARACTERS[_0x3e1f21].rarity, _0x3a6546.aw);
      if (_0x3a6546.aw >= AWAKENING_MAX || !awakenHero(game.save, _0x3e1f21)) {
        (runtime_w.play("error"), _0x3a6546.aw < AWAKENING_MAX && game.toast("각성 파편이 부족하다 (필요 " + _0x129611.toLocaleString() + ")", "#ff8080"));
        return;
      }
      (this.flash = 30, runtime_w.play("gem"), game.toast(CHARACTERS[_0x3e1f21].name + " 각성 " + _0x3a6546.aw + "단계!", "#ffb0e0"), game.achToast(runtime_Ml(game.save)), game.persist());
      return;
    }
    if (game.debug && _0x4ee55d.length) {
      let _0x348d0e = 0;
      if (((_0x4a0874.menu("mleft") || _0x1a63d8 === "awdn" && runtime_kt.mouse.click) && (_0x348d0e = -1), (_0x4a0874.menu("mright") || _0x1a63d8 === "awup" && runtime_kt.mouse.click) && (_0x348d0e = 1), _0x348d0e)) {
        const _0x19534e = game.save.chars[_0x4ee55d[this.sel]], _0x214188 = Math.max(0, Math.min(AWAKENING_MAX, _0x19534e.aw + _0x348d0e));
        _0x214188 !== _0x19534e.aw ? (_0x19534e.aw = _0x214188, _0x19534e.count = _0x214188 + 1, runtime_w.play(_0x348d0e > 0 ? "gem" : "select"), game.achToast(runtime_Ml(game.save)), game.persist()) : runtime_w.play("error");
        return;
      }
    }
    if (_0x4a0874.menu("ok") || _0x3e5d33) {
      const _0x5c26fc = _0x4ee55d[this.sel], _0x486760 = game.save.chars[_0x5c26fc];
      if (_0x486760.lv >= data_G0) {
        runtime_w.play("error");
        return;
      }
      const _0x47307d = getHeroLevelCost(_0x486760.lv);
      if (game.save.crystals < _0x47307d) {
        (runtime_w.play("error"), game.toast("영혼 결정이 부족하다", "#ff8080"));
        return;
      }
      (game.save.crystals -= _0x47307d, _0x486760.lv++, this.flash = 30, runtime_w.play("levelup"), game.achToast(runtime_Ml(game.save)), game.persist());
    }
  }
  updateMastery(_0x1c4cb0, _0xc933d3) {
    const _0x51c85 = game.input;
    (_0x51c85.menu("mleft") && (this.slot = (this.slot + 3) % 4), _0x51c85.menu("mright") && (this.slot = (this.slot + 1) % 4));
    let _0x5963db = !1;
    if (_0x1c4cb0?.startsWith("msk:") && (runtime_kt.mouse.moved || runtime_kt.mouse.click)) {
      const _0x2a889d = Number(_0x1c4cb0.slice(4));
      (runtime_kt.mouse.click && _0x2a889d === this.slot && (_0x5963db = !0), this.slot = _0x2a889d);
    }
    if ((_0x1c4cb0 === "mtrain" && runtime_kt.mouse.click && (_0x5963db = !0), !(_0x51c85.menu("ok") || _0x5963db))) return;
    const _0x4c4494 = CHARACTERS[_0xc933d3], _0x57bd42 = data_pt(game.save, _0xc933d3)[this.slot];
    if (!data_ut(_0xc933d3, this.slot) || _0x57bd42 >= data_Ie) {
      runtime_w.play("error");
      return;
    }
    if (game.save.crystals < getSkillMasteryCost(_0x4c4494.rarity, _0x57bd42)) {
      (runtime_w.play("error"), game.toast("영혼 결정이 부족하다", "#ff8080"));
      return;
    }
    data__0(game.save, _0xc933d3, this.slot) && (this.flash = 30, runtime_w.play("levelup"), game.persist());
  }
  updateWeapon(_0x53f0d0) {
    const _0x2faee6 = game.input, _0x30a755 = this.weapons();
    if (!_0x30a755.length) return;
    (_0x2faee6.menu("mup") && (this.wsel = (this.wsel - 1 + _0x30a755.length) % _0x30a755.length), _0x2faee6.menu("mdown") && (this.wsel = (this.wsel + 1) % _0x30a755.length), this.wsel = Math.min(this.wsel, _0x30a755.length - 1), _0x53f0d0?.startsWith("gw:") && (runtime_kt.mouse.moved || runtime_kt.mouse.click) && (this.wsel = Number(_0x53f0d0.slice(3))));
    const _0x33a0d1 = _0x53f0d0 === "wenh" && runtime_kt.mouse.click;
    if (!(_0x2faee6.menu("ok") || _0x33a0d1)) return;
    const _0x33cc5d = _0x30a755[this.wsel], _0x16f3d8 = game.save.weapons[_0x33cc5d]?.en ?? 0;
    if (_0x16f3d8 >= data_Ne) {
      runtime_w.play("error");
      return;
    }
    if (game.save.crystals < getWeaponEnhanceCost(WEAPONS[_0x33cc5d].rarity, _0x16f3d8)) {
      (runtime_w.play("error"), game.toast("영혼 결정이 부족하다", "#ff8080"));
      return;
    }
    data_x0(game.save, _0x33cc5d) && (this.flash = 30, runtime_w.play("levelup"), game.persist());
  }
  updateCraft(_0x28cdda) {
    const _0x157c2d = game.input, _0x48b0f6 = craftableWeapons();
    if (!_0x48b0f6.length) return;
    (_0x157c2d.menu("mup") && (this.csel = (this.csel - 1 + _0x48b0f6.length) % _0x48b0f6.length), _0x157c2d.menu("mdown") && (this.csel = (this.csel + 1) % _0x48b0f6.length), _0x28cdda?.startsWith("gc:") && (runtime_kt.mouse.moved || runtime_kt.mouse.click) && (this.csel = Number(_0x28cdda.slice(3))));
    const _0x27192f = _0x28cdda === "craft" && runtime_kt.mouse.click;
    if (!(_0x157c2d.menu("ok") || _0x27192f)) return;
    const _0x1e9a20 = _0x48b0f6[this.csel], _0xba19ab = craftWeapon(game.save, _0x1e9a20.id);
    if (_0xba19ab === "new" || _0xba19ab === "refine") {
      (this.flash = 30, runtime_w.play("gem"), game.toast(_0xba19ab === "new" ? "제작 완료: " + _0x1e9a20.name : _0x1e9a20.name + " 재련 " + game.save.weapons[_0x1e9a20.id].rf + "단계", runtime_Rn[_0x1e9a20.rarity]));
      for (const _0x359158 of data_$0(game.save)) game.toast("새 칭호: 「" + _0x359158.name + "」", _0x359158.col);
      game.persist();
      return;
    }
    (runtime_w.play("error"), game.toast(_0xba19ab === "max" ? "이미 최대 재련이다" : _0xba19ab === "crystals" ? "영혼 결정이 부족하다" : "보스의 정수가 부족하다", "#ff8080"));
  }
  uiCraft(_0x532881) {
    const _0xe747c4 = game.save, _0x2b1571 = craftableWeapons();
    runtime_ye(_0x532881, 8, 28, 150, 228);
    const _0x5e6423 = 14, _0x10b99a = Math.min(this.csel, _0x2b1571.length - 1), _0x1d8a27 = Math.max(0, Math.min(_0x2b1571.length - _0x5e6423, _0x10b99a - Math.floor(_0x5e6423 / 2)));
    if ((_0x1d8a27 > 0 && drawText(_0x532881, "▲", 83, 29, {
      "size": 5,
      "align": "center",
      "color": "#a8a0c0"
    }), _0x1d8a27 + _0x5e6423 < _0x2b1571.length && drawText(_0x532881, "▼", 83, 250, {
      "size": 5,
      "align": "center",
      "color": "#a8a0c0"
    }), _0x2b1571.forEach((_0x1f0a66, _0x123f30) => {
      if (_0x123f30 < _0x1d8a27 || _0x123f30 >= _0x1d8a27 + _0x5e6423) return;
      const _0x4b45ff = 34 + (_0x123f30 - _0x1d8a27) * 15.5;
      (_0x532881.fillStyle = _0x123f30 === _0x10b99a ? runtime_q(runtime_Rn[_0x1f0a66.rarity], 0.35) : "transparent", _0x532881.fillRect(12, _0x4b45ff, 142, 15), runtime_kt.add("gc:" + _0x123f30, 12, _0x4b45ff, 142, 15), drawText(_0x532881, _0x1f0a66.name, 16, _0x4b45ff + 3, {
        "size": 6,
        "color": runtime_Rn[_0x1f0a66.rarity],
        "maxW": 100
      }));
      const _0x4adf89 = _0xe747c4.weapons[_0x1f0a66.id], _0x4e37bb = !canCraftWeapon(_0xe747c4, _0x1f0a66.id);
      drawText(_0x532881, _0x4adf89 ? "재련" + _0x4adf89.rf : "미보유", 150, _0x4b45ff + 3, {
        "size": 6,
        "align": "right",
        "color": _0x4e37bb ? "#80ffa0" : _0x4adf89 ? "#ffe080" : "#6a6078"
      });
    }), !_0x2b1571.length)) return;
    const _0x3ffe96 = _0x2b1571[_0x10b99a], _0x178811 = _0xe747c4.weapons[_0x3ffe96.id], _0x25049a = getCraftCost(_0x3ffe96);
    (runtime_ye(_0x532881, 164, 28, 308, 228, {
      "border": runtime_Rn[_0x3ffe96.rarity]
    }), drawItemIcon(_0x532881, _0x3ffe96.id, 176, 40, 48) || runtime_de(_0x532881, _0x3ffe96.icon, 176, 40, 48, _0x3ffe96.col), runtime_zn(_0x532881, 232, 40, _0x3ffe96.rarity, 7), drawText(_0x532881, _0x3ffe96.name, 232, 50, {
      "size": 9,
      "color": "#ffffff",
      "bold": !0,
      "maxW": 232
    }), drawText(_0x532881, _0x178811 ? "보유 · 재련 " + _0x178811.rf + " / " + data_yr + " (제작하면 재련 +1)" : "미보유 (제작하면 획득)", 232, 64, {
      "size": 6,
      "color": _0x178811 ? "#ffe080" : "#a8a0c0"
    }), drawText(_0x532881, "공격력 +" + _0x3ffe96.atk, 232, 74, {
      "size": 6,
      "color": "#c8c0d8"
    }), drawText(_0x532881, data_a0(_0x3ffe96, _0x178811?.rf ?? 1, !1), 176, 94, {
      "size": 6,
      "color": "#c8c0d8",
      "maxW": 284
    }), drawText(_0x532881, "필요 재료", 176, 122, {
      "size": 7,
      "color": "#e0d0ff",
      "bold": !0
    }));
    const _0x35233b = [["영혼 결정", "#a0f0ff", _0x25049a.crystals, _0xe747c4.crystals]];
    (_0x25049a.mats.forEach((_0x76c9a9, _0x3c6f77) => {
      _0x76c9a9 && _0x35233b.push([data_eo[_0x3c6f77], data_so[_0x3c6f77], _0x76c9a9, _0xe747c4.mats[_0x3c6f77] ?? 0]);
    }), _0x35233b.forEach(([_0x51f231, _0x33a987, _0x3dc700, _0xef30ea], _0x208670) => {
      const _0x2c4f13 = 134 + _0x208670 * 12;
      (drawText(_0x532881, _0x51f231, 184, _0x2c4f13, {
        "size": 7,
        "color": _0x33a987
      }), drawText(_0x532881, _0xef30ea.toLocaleString() + " / " + _0x3dc700.toLocaleString(), 400, _0x2c4f13, {
        "size": 7,
        "align": "right",
        "color": _0xef30ea >= _0x3dc700 ? "#80ffa0" : "#ff8080"
      }));
    }), drawText(_0x532881, "보유 정수: " + data_eo.map((_0x93692f, _0x1463af) => _0x93692f + " " + (_0xe747c4.mats[_0x1463af] ?? 0)).join(" · "), 176, 186, {
      "size": 5,
      "color": "#8a8098",
      "maxW": 290
    }), drawText(_0x532881, "정수는 스토리 모드에서 각 스토리의 최종 보스를 쓰러뜨리면 20% 확률로 1개 (보스 시련·무한·탑 제외)", 176, 195, {
      "size": 5,
      "color": "#6a6078",
      "maxW": 290
    }));
    const _0x236270 = canCraftWeapon(_0xe747c4, _0x3ffe96.id);
    (runtime_ua(_0x532881, 180, 206, 276, 30, _0x236270 === "max" ? "최대 재련" : _0x178811 ? "제작 (재련 +1)" : "제작", !0, {
      "sub": _0x236270 === "crystals" ? "영혼 결정 부족" : _0x236270 === "mats" ? "보스의 정수 부족" : "",
      "disabled": !!_0x236270,
      "col": "#ffb060",
      "size": 10
    }), runtime_kt.add("craft", 180, 206, 276, 30));
  }
  world(_0x31cab2) {
    (_0x31cab2.fillStyle = "#0c0818", _0x31cab2.fillRect(0, 0, 480, 270), _0x31cab2.save(), _0x31cab2.globalCompositeOperation = "lighter");
    const _0x1a6c97 = _0x31cab2.createRadialGradient(330, 140, 0, 330, 140, 120);
    (_0x1a6c97.addColorStop(0, "rgba(80,200,230,0.25)"), _0x1a6c97.addColorStop(1, "rgba(80,200,230,0)"), _0x31cab2.fillStyle = _0x1a6c97, _0x31cab2.fillRect(200, 20, 260, 240), _0x31cab2.restore());
  }
  ui(_0x6141cc) {
    const _0x14323b = game.save;
    if ((drawText(_0x6141cc, "영웅 육성", 12, 8, {
      "size": 12,
      "color": "#a0f0ff",
      "bold": !0
    }), P.forEach((_0x384f51, _0xb386) => {
      const _0x3b52e3 = 82 + _0xb386 * 62, _0x2fb6c6 = _0xb386 === this.tab, _0x5422db = runtime_kt.hover() === "gtab:" + _0xb386;
      (_0x6141cc.fillStyle = _0x2fb6c6 ? "rgba(64,208,224,0.35)" : _0x5422db ? "rgba(64,208,224,0.15)" : "rgba(255,255,255,0.04)", _0x6141cc.fillRect(_0x3b52e3, 7, 58, 15), _0x6141cc.strokeStyle = _0x2fb6c6 ? "#40d0e0" : "#3a2e52", _0x6141cc.strokeRect(_0x3b52e3 + 0.5, 7.5, 57, 14), drawText(_0x6141cc, _0x384f51, _0x3b52e3 + 29, 10, {
        "size": 7,
        "align": "center",
        "color": _0x2fb6c6 ? "#ffffff" : "#a8a0c0",
        "bold": _0x2fb6c6
      }), runtime_kt.add("gtab:" + _0xb386, _0x3b52e3, 7, 58, 15));
    }), runtime_de(_0x6141cc, "shard", 360, 9, 10, "#40d0e0"), drawText(_0x6141cc, "영혼 결정 " + _0x14323b.crystals, 374, 10, {
      "size": 8,
      "color": "#a0f0ff"
    }), this.tab === 2)) {
      this.uiWeapon(_0x6141cc);
      return;
    }
    if (this.tab === 3) {
      this.uiCraft(_0x6141cc);
      return;
    }
    const _0x1322d6 = this.list();
    runtime_ye(_0x6141cc, 8, 28, 130, 228);
    const _0x2f1f64 = 14, _0xa1ea61 = Math.max(0, Math.min(_0x1322d6.length - _0x2f1f64, this.sel - Math.floor(_0x2f1f64 / 2)));
    if ((_0xa1ea61 > 0 && drawText(_0x6141cc, "▲", 73, 29, {
      "size": 5,
      "align": "center",
      "color": "#a8a0c0"
    }), _0xa1ea61 + _0x2f1f64 < _0x1322d6.length && drawText(_0x6141cc, "▼", 73, 250, {
      "size": 5,
      "align": "center",
      "color": "#a8a0c0"
    }), _0x1322d6.forEach((_0x2eed5c, _0x1d53cf) => {
      if (_0x1d53cf < _0xa1ea61 || _0x1d53cf >= _0xa1ea61 + _0x2f1f64) return;
      const _0xde9141 = CHARACTERS[_0x2eed5c], _0x266dd2 = 34 + (_0x1d53cf - _0xa1ea61) * 15.5;
      (_0x6141cc.fillStyle = _0x1d53cf === this.sel ? runtime_q(runtime_Rn[_0xde9141.rarity], 0.35) : "transparent", _0x6141cc.fillRect(12, _0x266dd2, 122, 15), runtime_kt.add("gr:" + _0x1d53cf, 12, _0x266dd2, 122, 15), drawText(_0x6141cc, _0xde9141.name, 16, _0x266dd2 + 3, {
        "size": 7,
        "color": runtime_Rn[_0xde9141.rarity]
      }));
      const _0x2d43a5 = this.tab === 1 ? "숙련 " + data_pt(_0x14323b, _0x2eed5c).reduce((_0x303889, _0x3baeb3) => _0x303889 + _0x3baeb3, 0) : "Lv." + _0x14323b.chars[_0x2eed5c].lv;
      drawText(_0x6141cc, _0x2d43a5, 130, _0x266dd2 + 3, {
        "size": 7,
        "align": "right",
        "color": "#ffffff"
      });
    }), this.tab === 1)) {
      this.uiMastery(_0x6141cc, _0x1322d6[this.sel]);
      return;
    }
    const _0x1b587d = _0x1322d6[this.sel], _0x152b9f = CHARACTERS[_0x1b587d], _0xda2af1 = _0x14323b.chars[_0x1b587d];
    runtime_ye(_0x6141cc, 144, 28, 328, 228, {
      "border": runtime_Rn[_0x152b9f.rarity]
    });
    const _0xbf5cb0 = this.flash > 0 ? "castUp" : ["idle0", "idle1"][Math.floor(this.t / 30) % 2];
    (_0x6141cc.drawImage(runtime_Qf(_0x1b587d, _0xbf5cb0), 138, 38, 144, 144), this.flash > 0 && (_0x6141cc.save(), _0x6141cc.globalCompositeOperation = "lighter", _0x6141cc.fillStyle = runtime_q("#a0f0ff", this.flash / 60), _0x6141cc.fillRect(150, 34, 120, 140), _0x6141cc.restore()), runtime_zn(_0x6141cc, 280, 36, _0x152b9f.rarity, 7), drawText(_0x6141cc, _0x152b9f.name, 280, 46, {
      "size": 12,
      "color": "#ffffff",
      "bold": !0
    }), drawText(_0x6141cc, _0x152b9f.title + " · " + data_Gr[_0x152b9f.type], 280, 62, {
      "size": 7,
      "color": data_Nr[_0x152b9f.type]
    }), drawText(_0x6141cc, "레벨 " + _0xda2af1.lv + " / 20", 280, 78, {
      "size": 9,
      "color": "#ffe080",
      "bold": !0
    }), drawBar(_0x6141cc, 280, 92, 180, 5, _0xda2af1.lv / data_G0, "#40d0e0"));
    const _0x501ad5 = Math.min(data_G0, _0xda2af1.lv + 1);
    if ((drawText(_0x6141cc, "공격력 " + runtime_P1(_0x152b9f.atk, _0xda2af1.lv, 0) + " → " + runtime_P1(_0x152b9f.atk, _0x501ad5, 0), 280, 104, {
      "size": 7,
      "color": "#f0e8d8"
    }), drawText(_0x6141cc, "기본 체력 " + runtime_T1(_0x152b9f.hp, _0xda2af1.lv) + " → " + runtime_T1(_0x152b9f.hp, _0x501ad5), 280, 116, {
      "size": 7,
      "color": "#f0e8d8"
    }), drawText(_0x6141cc, "각성 " + _0xda2af1.aw + " / " + AWAKENING_MAX + " (중복 계약 또는 각성 파편)", 280, 130, {
      "size": 7,
      "color": "#c080ff"
    }), game.debug)) for (const [_0x499e38, _0x5eb9c7, _0x34ab76] of [["awdn", "−", 408], ["awup", "+", 428]]) {
      const _0x285a9e = runtime_kt.hover() === _0x499e38;
      (_0x6141cc.fillStyle = _0x285a9e ? "rgba(128,255,160,0.35)" : "rgba(128,255,160,0.12)", _0x6141cc.fillRect(_0x34ab76, 128, 16, 11), _0x6141cc.strokeStyle = "#80ffa0", _0x6141cc.strokeRect(_0x34ab76 + 0.5, 128.5, 15, 10), drawText(_0x6141cc, _0x5eb9c7, _0x34ab76 + 8, 129, {
        "size": 7,
        "align": "center",
        "color": "#80ffa0",
        "bold": !0
      }), runtime_kt.add(_0x499e38, _0x34ab76, 128, 16, 11));
    }
    _0x152b9f.awaken.forEach((_0x15bbca, _0x41f664) => drawText(_0x6141cc, (_0x41f664 < _0xda2af1.aw ? "◆" : "◇") + " " + _0x15bbca.desc, 280, 142 + _0x41f664 * 11, {
      "size": 6,
      "color": _0x41f664 < _0xda2af1.aw ? "#ffe080" : "#6a6078",
      "maxW": 186
    }));
    const _0x2b5ce5 = _0xda2af1.lv >= data_G0, _0x69230b = getHeroLevelCost(_0xda2af1.lv);
    (runtime_ua(_0x6141cc, 152, 206, 154, 30, _0x2b5ce5 ? "최대 레벨" : "레벨 업", this.bsel === 0, {
      "sub": _0x2b5ce5 ? "" : "영혼 결정 " + _0x69230b + " (보유 " + _0x14323b.crystals + ")",
      "disabled": _0x2b5ce5 || _0x14323b.crystals < _0x69230b,
      "col": "#40d0e0",
      "size": 10
    }), runtime_kt.add("lvup", 152, 206, 154, 30));
    const _0x3704a6 = _0xda2af1.aw >= AWAKENING_MAX, _0x56903b = getAwakeningCost(_0x152b9f.rarity, _0xda2af1.aw);
    (runtime_ua(_0x6141cc, 312, 206, 154, 30, _0x3704a6 ? "각성 완료" : "각성 파편으로 각성", this.bsel === 1, {
      "sub": _0x3704a6 ? "" : "각성 파편 " + _0x56903b.toLocaleString() + " (보유 " + _0x14323b.awShards.toLocaleString() + ")",
      "disabled": _0x3704a6 || _0x14323b.awShards < _0x56903b,
      "col": "#ff9ad8",
      "size": 9
    }), runtime_kt.add("awsh", 312, 206, 154, 30), runtime_Xe(_0x6141cc, game.debug ? [["↑↓", "영웅"], [game.input.label("skill2") + "/" + game.input.label("skill1"), "탭"], ["←→", "[디버그] 각성"], [game.input.label("attack"), "레벨 업"], ["Esc", "나가기"]] : [["↑↓", "영웅"], ["←→", "레벨 업/각성"], [game.input.label("skill2") + "/" + game.input.label("skill1"), "탭"], [game.input.label("attack"), "결정"], ["Esc", "나가기"]], 258));
  }
  uiMastery(_0x95b46a, _0x6d6f82) {
    const _0x1ba787 = game.save, _0x281f57 = CHARACTERS[_0x6d6f82], _0x2ca928 = data_pt(_0x1ba787, _0x6d6f82);
    runtime_ye(_0x95b46a, 144, 28, 328, 228, {
      "border": runtime_Rn[_0x281f57.rarity]
    });
    const _0x1fd9bb = this.flash > 0 ? "castUp" : ["idle0", "idle1"][Math.floor(this.t / 30) % 2];
    (_0x95b46a.drawImage(runtime_Qf(_0x6d6f82, _0x1fd9bb), 150, 26, 72, 72), runtime_zn(_0x95b46a, 230, 36, _0x281f57.rarity, 7), drawText(_0x95b46a, _0x281f57.name, 230, 46, {
      "size": 12,
      "color": "#ffffff",
      "bold": !0
    }), drawText(_0x95b46a, "스킬 숙련 — 단계마다 그 기술 피해 +" + v(data_dt) + ", " + (data_We + 1) + "단계부터 +" + v(data_nt) + " (최대 " + data_Ie + ")", 230, 64, {
      "size": 6,
      "color": "#a0f0ff",
      "maxW": 236
    }), drawText(_0x95b46a, "영혼 결정으로 수련하며, 이 영웅이 활성일 때 적용된다", 230, 75, {
      "size": 6,
      "color": "#8a8098",
      "maxW": 236
    }));
    const _0xc731eb = [_0x281f57.skills[0].name, _0x281f57.skills[1].name, _0x281f57.ult?.name ?? "— (궁극기 없음)", _0x281f57.swap.name], _0x2aca26 = [game.input.label("skill1"), game.input.label("skill2"), game.input.label("ult"), game.input.label("swap")];
    for (let _0x4e99d1 = 0; _0x4e99d1 < 4; _0x4e99d1++) {
      const _0x47c49b = 98 + _0x4e99d1 * 26, _0x1dd416 = _0x4e99d1 === this.slot, _0xd6aeeb = data_ut(_0x6d6f82, _0x4e99d1), _0x2afa65 = _0x2ca928[_0x4e99d1];
      if ((_0x95b46a.fillStyle = _0x1dd416 ? "rgba(64,208,224,0.25)" : "rgba(255,255,255,0.03)", _0x95b46a.fillRect(150, _0x47c49b, 316, 24), _0x1dd416 && (_0x95b46a.fillStyle = "#40d0e0", _0x95b46a.fillRect(150, _0x47c49b, 2, 24)), runtime_kt.add("msk:" + _0x4e99d1, 150, _0x47c49b, 316, 24), drawText(_0x95b46a, os[_0x4e99d1] + " [" + _0x2aca26[_0x4e99d1] + "]", 156, _0x47c49b + 3, {
        "size": 6,
        "color": _0xd6aeeb ? "#a8a0c0" : "#5a5068"
      }), drawText(_0x95b46a, _0xc731eb[_0x4e99d1], 156, _0x47c49b + 12, {
        "size": 8,
        "color": _0xd6aeeb ? _0x1dd416 ? "#ffffff" : "#e0d8f0" : "#5a5068",
        "bold": _0x1dd416,
        "maxW": 120
      }), drawBar(_0x95b46a, 282, _0x47c49b + 10, 40, 4, _0x2afa65 / data_Ie, "#40d0e0"), drawText(_0x95b46a, _0x2afa65 + "/" + data_Ie, 302, _0x47c49b + 15, {
        "size": 5,
        "align": "center",
        "color": "#a0f0ff"
      }), !_0xd6aeeb)) continue;
      const _0x22c07b = _0x2afa65 >= data_Ie;
      drawText(_0x95b46a, _0x22c07b ? "피해 +" + v(data_ft(_0x2afa65)) : "피해 +" + v(data_ft(_0x2afa65)) + " → +" + v(data_ft(_0x2afa65 + 1)), 338, _0x47c49b + 8, {
        "size": 6,
        "color": _0x2afa65 ? "#ffe080" : "#c8c0d8"
      });
      const _0x61936a = getSkillMasteryCost(_0x281f57.rarity, _0x2afa65);
      drawText(_0x95b46a, _0x22c07b ? "완료" : "" + _0x61936a, 460, _0x47c49b + 8, {
        "size": 7,
        "align": "right",
        "color": _0x22c07b ? "#80ff80" : _0x1ba787.crystals >= _0x61936a ? "#a0f0ff" : "#806070"
      });
    }
    const _0x332e55 = data_ut(_0x6d6f82, this.slot), _0xba312a = _0x2ca928[this.slot], _0x5abcfa = _0xba312a >= data_Ie, _0x47eb52 = getSkillMasteryCost(_0x281f57.rarity, _0xba312a), _0x47d268 = _0x332e55 ? _0x5abcfa ? "최대 숙련" : os[this.slot] + " 숙련 (" + _0xba312a + " → " + (_0xba312a + 1) + ")" : "숙련 불가";
    (runtime_ua(_0x95b46a, 160, 206, 300, 30, _0x47d268, !0, {
      "sub": !_0x332e55 || _0x5abcfa ? "" : "영혼 결정 " + _0x47eb52 + " (보유 " + _0x1ba787.crystals + ")",
      "disabled": !_0x332e55 || _0x5abcfa || _0x1ba787.crystals < _0x47eb52,
      "col": "#40d0e0",
      "size": 10
    }), runtime_kt.add("mtrain", 160, 206, 300, 30), this.flash > 0 && (_0x95b46a.save(), _0x95b46a.globalCompositeOperation = "lighter", _0x95b46a.fillStyle = runtime_q("#a0f0ff", this.flash / 90), _0x95b46a.fillRect(150, 98 + this.slot * 26, 316, 24), _0x95b46a.restore()), runtime_Xe(_0x95b46a, [["↑↓", "영웅"], ["←→", "기술"], [game.input.label("skill2") + "/" + game.input.label("skill1"), "탭"], [game.input.label("attack"), "숙련"], ["Esc", "나가기"]], 258));
  }
  uiWeapon(_0xb7d7e7) {
    const _0x58a5be = game.save, _0x3ceacb = this.weapons();
    runtime_ye(_0xb7d7e7, 8, 28, 150, 228);
    const _0x2d0eef = 14, _0x3560fa = Math.min(this.wsel, _0x3ceacb.length - 1), _0xa3e39f = Math.max(0, Math.min(_0x3ceacb.length - _0x2d0eef, _0x3560fa - Math.floor(_0x2d0eef / 2)));
    if ((_0xa3e39f > 0 && drawText(_0xb7d7e7, "▲", 83, 29, {
      "size": 5,
      "align": "center",
      "color": "#a8a0c0"
    }), _0xa3e39f + _0x2d0eef < _0x3ceacb.length && drawText(_0xb7d7e7, "▼", 83, 250, {
      "size": 5,
      "align": "center",
      "color": "#a8a0c0"
    }), _0x3ceacb.forEach((_0x464968, _0x32365a) => {
      if (_0x32365a < _0xa3e39f || _0x32365a >= _0xa3e39f + _0x2d0eef) return;
      const _0x25c045 = WEAPONS[_0x464968], _0x21556a = 34 + (_0x32365a - _0xa3e39f) * 15.5;
      (_0xb7d7e7.fillStyle = _0x32365a === _0x3560fa ? runtime_q(runtime_Rn[_0x25c045.rarity], 0.35) : "transparent", _0xb7d7e7.fillRect(12, _0x21556a, 142, 15), runtime_kt.add("gw:" + _0x32365a, 12, _0x21556a, 142, 15), drawText(_0xb7d7e7, _0x25c045.name, 16, _0x21556a + 3, {
        "size": 6,
        "color": runtime_Rn[_0x25c045.rarity],
        "maxW": 108
      }));
      const _0xb163fc = _0x58a5be.weapons[_0x464968]?.en ?? 0;
      drawText(_0xb7d7e7, "+" + _0xb163fc, 150, _0x21556a + 3, {
        "size": 7,
        "align": "right",
        "color": _0xb163fc ? "#ffe080" : "#6a6078"
      });
    }), !_0x3ceacb.length)) return;
    const _0x64d781 = _0x3ceacb[_0x3560fa], _0x139c30 = WEAPONS[_0x64d781], _0x33abf7 = _0x58a5be.weapons[_0x64d781], _0x38cbad = _0x33abf7.en ?? 0;
    (runtime_ye(_0xb7d7e7, 164, 28, 308, 228, {
      "border": runtime_Rn[_0x139c30.rarity]
    }), drawItemIcon(_0xb7d7e7, _0x64d781, 176, 40, 56) || runtime_de(_0xb7d7e7, _0x139c30.icon, 176, 40, 56, _0x139c30.col), this.flash > 0 && (_0xb7d7e7.save(), _0xb7d7e7.globalCompositeOperation = "lighter", _0xb7d7e7.fillStyle = runtime_q("#ffe080", this.flash / 60), _0xb7d7e7.fillRect(172, 36, 64, 64), _0xb7d7e7.restore()), runtime_zn(_0xb7d7e7, 244, 38, _0x139c30.rarity, 7), drawText(_0xb7d7e7, "" + _0x139c30.name + (_0x38cbad ? " +" + _0x38cbad : ""), 244, 48, {
      "size": 9,
      "color": "#ffffff",
      "bold": !0,
      "maxW": 220
    }), drawText(_0xb7d7e7, "재련 " + _0x33abf7.rf + " · 강화 " + _0x38cbad + " / " + data_Ne, 244, 64, {
      "size": 7,
      "color": "#ffe080"
    }), drawBar(_0xb7d7e7, 244, 76, 216, 5, _0x38cbad / data_Ne, "#ffb060"));
    const _0x5ac869 = Math.min(data_Ne, _0x38cbad + 1), _0x50090e = _0x139c30.atk * (1 + 0.15 * (_0x33abf7.rf - 1)), _0x5818d2 = Math.round(_0x50090e * (1 + data_w0(_0x38cbad))), _0x446018 = Math.round(_0x50090e * (1 + data_w0(_0x5ac869))), _0x5277c0 = _0x38cbad >= data_Ne;
    (drawText(_0xb7d7e7, _0x5277c0 ? "무기 공격력 " + _0x5818d2 : "무기 공격력 " + _0x5818d2 + " → " + _0x446018, 180, 108, {
      "size": 8,
      "color": "#f0e8d8"
    }), drawText(_0xb7d7e7, _0x5277c0 ? "모든 피해 +" + v(data_y0(_0x38cbad)) : "모든 피해 +" + v(data_y0(_0x38cbad)) + " → +" + v(data_y0(_0x5ac869)), 180, 122, {
      "size": 8,
      "color": "#f0e8d8"
    }), drawText(_0xb7d7e7, "단계마다 무기 기본 공격력 +" + v(data_rt) + "·모든 피해 +" + v(data_ot) + ", +" + (data_se + 1) + "부터 +" + v(data_lt) + "·+" + v(data_it) + " (재련과 따로 쌓인다)", 180, 138, {
      "size": 6,
      "color": "#8a8098",
      "maxW": 284
    }), drawText(_0xb7d7e7, data_a0(_0x139c30, _0x33abf7.rf, !1), 180, 154, {
      "size": 6,
      "color": "#c8c0d8",
      "maxW": 284
    }));
    const _0x5d6f8e = getWeaponEnhanceCost(_0x139c30.rarity, _0x38cbad);
    (runtime_ua(_0xb7d7e7, 180, 206, 276, 30, _0x5277c0 ? "최대 강화" : "무기 강화 (+" + _0x38cbad + " → +" + _0x5ac869 + ")", !0, {
      "sub": _0x5277c0 ? "" : "영혼 결정 " + _0x5d6f8e + " (보유 " + _0x58a5be.crystals + ")",
      "disabled": _0x5277c0 || _0x58a5be.crystals < _0x5d6f8e,
      "col": "#ffb060",
      "size": 10
    }), runtime_kt.add("wenh", 180, 206, 276, 30), runtime_Xe(_0xb7d7e7, [["↑↓", "무기"], [game.input.label("skill2") + "/" + game.input.label("skill1"), "탭"], [game.input.label("attack"), "강화"], ["Esc", "나가기"]], 258));
  }
}
export {_s as GrowthScene};
