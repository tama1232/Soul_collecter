// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
import {isBossTrialUnlocked} from "../config/economy.js";
import {BOOKS as TrialBooks} from "../game-data.js";
const trialUnlocked = () => isBossTrialUnlocked(game.save, game.save.book ?? 1, TrialBooks);
import {CHARACTER_LIST, data_ve, data_xa, data_l0, WEAPONS, RunState, data_Vr, data_Xr, data_q0, data_Q0, CHARACTERS, data_Z0, data_J0, data_Nr, data_Gr, data_a0, CURSE_LEVELS, data_Jr, getBook, data_r0, data_u, getStory, DEVELOPER_FLAGS, data_O, getBossRoute, data_L, data_za, data_Yr, isBookComplete} from "../game-data.js";
import {game, runtime_w, runtime_kt, runtime_Na, RunScene, runtime_bd, runtime_q, drawText, runtime_ye, runtime_Rn, runtime_Qf, runtime_zn, runtime_Dn, drawItemIcon, runtime_de, runtime_ua, runtime_Xe} from "../game.js";
const g = () => DEVELOPER_FLAGS.all ? CURSE_LEVELS.length - 1 : game.save.curseMax, U = () => isBookComplete(game.save, game.save.book ?? 1), rs = () => getBook(game.save.book ?? 1).name + "의 스토리를 모두 완수하면 열린다", x = 4;
function Ms() {
  data_Yr(game.save);
  const [_0x2bdc43, _0x58ab3a] = data_xa(game.save);
  return Math.max(_0x2bdc43, Math.min(_0x58ab3a, game.save.story));
}
class Rs {
  constructor(_0x158b9e) {
    this.back = _0x158b9e;
  }
  focus = 4;
  lastSlot = 0;
  rush = !1;
  endless = !1;
  tower = !1;
  view = Ms();
  picking = null;
  pickScroll = 0;
  pick = 0;
  t = 0;
  wasDebug = game.debug;
  enter() {
    (this.wasDebug = game.debug, this.fixOwned());
  }
  fixOwned() {
    if (game.debug) return;
    const _0x26a82b = game.save.loadout, _0x49c56c = this.ownedChars();
    for (const _0x55a39f of [0, 1]) _0x26a82b.chars[_0x55a39f] && !game.save.chars[_0x26a82b.chars[_0x55a39f]] && (_0x26a82b.chars[_0x55a39f] = _0x49c56c.find(_0x189889 => !_0x26a82b.chars.includes(_0x189889)) ?? "");
    (_0x26a82b.chars[0] || ([_0x26a82b.chars[0], _0x26a82b.chars[1]] = [_0x26a82b.chars[1] || _0x49c56c[0] || "", ""]), game.save.weapons[_0x26a82b.weapon] || (_0x26a82b.weapon = this.ownedWeapons()[0]));
  }
  ownedChars() {
    return CHARACTER_LIST.filter(_0x15bcb2 => game.debug || game.save.chars[_0x15bcb2.id]).map(_0xc691c2 => _0xc691c2.id);
  }
  ownedWeapons() {
    return data_ve.filter(_0x66cd2f => game.debug || game.save.weapons[_0x66cd2f.id]).map(_0x4ecd58 => _0x4ecd58.id);
  }
  update() {
    this.t++;
    const _0x1fed3c = game.input, _0x37f335 = game.save.loadout;
    if ((this.wasDebug && !game.debug && (this.fixOwned(), this.picking = null), this.wasDebug = game.debug, this.picking)) {
      const _0xf48d1b = this.picking === "char" ? this.ownedChars() : this.ownedWeapons();
      this.pick = Math.max(0, Math.min(this.pick, _0xf48d1b.length - 1));
      const _0x1ae512 = 8, _0x2ec5d5 = this.pick;
      (_0x1fed3c.menu("mleft") && (this.pick = (this.pick - 1 + _0xf48d1b.length) % _0xf48d1b.length), _0x1fed3c.menu("mright") && (this.pick = (this.pick + 1) % _0xf48d1b.length), _0x1fed3c.menu("mup") && this.pick - _0x1ae512 >= 0 && (this.pick -= _0x1ae512), _0x1fed3c.menu("mdown") && (this.pick = Math.min(_0xf48d1b.length - 1, this.pick + _0x1ae512)), this.pick !== _0x2ec5d5 && runtime_w.play("select"));
      const _0x468454 = runtime_kt.hover(), _0x541b0f = Math.ceil(_0xf48d1b.length / _0x1ae512);
      if ((_0x468454 === "lpup" && runtime_kt.mouse.click && (this.pickScroll = Math.max(0, this.pickScroll - 1)), _0x468454 === "lpdown" && runtime_kt.mouse.click && (this.pickScroll = Math.min(Math.max(0, _0x541b0f - x), this.pickScroll + 1)), this.pick !== _0x2ec5d5)) {
        const _0x1580f9 = Math.floor(this.pick / _0x1ae512);
        (_0x1580f9 < this.pickScroll && (this.pickScroll = _0x1580f9), _0x1580f9 >= this.pickScroll + x && (this.pickScroll = _0x1580f9 - x + 1));
      }
      this.pickScroll = Math.max(0, Math.min(this.pickScroll, Math.max(0, _0x541b0f - x)));
      let _0x1297ed = !1;
      if ((_0x468454?.startsWith("lp:") && (runtime_kt.mouse.moved && (this.pick = Number(_0x468454.slice(3))), runtime_kt.mouse.click && (this.pick = Number(_0x468454.slice(3)), _0x1297ed = !0)), _0x1fed3c.menu("back"))) (this.picking = null, runtime_w.play("back")); else {
        if (_0x1fed3c.menu("ok") || _0x1297ed) {
          const _0x437be5 = _0xf48d1b[this.pick];
          if (!_0x437be5) return;
          if (this.picking === "char") {
            const _0x51eb53 = this.focus;
            if (_0x37f335.chars[1 - _0x51eb53] === _0x437be5) {
              if (!_0x37f335.chars[_0x51eb53]) {
                runtime_w.play("error");
                return;
              }
              _0x37f335.chars[1 - _0x51eb53] = _0x37f335.chars[_0x51eb53];
            }
            _0x37f335.chars[_0x51eb53] = _0x437be5;
          } else _0x37f335.weapon = _0x437be5;
          (runtime_w.play("confirm"), game.persist(), this.picking = null);
        }
      }
      return;
    }
    if (_0x1fed3c.menu("back")) {
      game.go(this.back);
      return;
    }
    this.navigate();
    const _0x3bfdff = runtime_kt.hover();
    let _0x1f1d65 = !1;
    (_0x3bfdff?.startsWith("lf:") && (runtime_kt.mouse.moved && (this.focus = Number(_0x3bfdff.slice(3))), runtime_kt.mouse.click && (this.focus = Number(_0x3bfdff.slice(3)), _0x1f1d65 = !0)), (_0x1fed3c.menu("ok") || _0x1f1d65) && (runtime_w.play("confirm"), this.focus <= 1 ? (this.picking = "char", this.pick = Math.max(0, this.ownedChars().indexOf(_0x37f335.chars[this.focus])), this.pickScroll = Math.max(0, Math.floor(this.pick / 8) - x + 1)) : this.focus === 2 ? (this.picking = "weapon", this.pick = Math.max(0, this.ownedWeapons().indexOf(_0x37f335.weapon)), this.pickScroll = Math.max(0, Math.floor(this.pick / 8) - x + 1)) : this.focus === 3 ? this.curseLocked() || (game.save.curse = game.save.curse >= g() ? 0 : game.save.curse + 1) : this.focus === 5 ? this.rush || this.endless || this.tower ? this.rush = this.endless = this.tower = !1 : this.setView(this.view >= data_xa(game.save)[1] ? data_xa(game.save)[0] : this.view + 1) : this.focus === 6 || this.focus === 7 ? (this.focus === 6 ? trialUnlocked() : U()) ? this.focus === 6 ? (this.rush = !this.rush, this.endless = this.tower = !1) : (this.endless = !this.endless, this.rush = this.tower = !1) : (runtime_w.play("error"), game.toast((this.focus === 6 ? "보스러쉬" : "무한 모드") + "는 " + (this.focus === 6 ? "선택한 권의 첫 스토리를 완수하면 열린다" : rs()), "#ff9090")) : this.depart()));
  }
  curseLocked() {
    return g() > 0 ? !1 : (runtime_w.play("error"), game.toast("저주 단계는 스토리를 끝까지 깨면 해금된다", "#ff9090"), !0);
  }
  setView(_0x5d8492) {
    const [_0x5bd8e6, _0x2cac93] = data_xa(game.save);
    (this.view = Math.max(_0x5bd8e6, Math.min(_0x2cac93, _0x5d8492)), this.view <= game.save.storyMax && (game.save.story = this.view), runtime_w.play("select"));
  }
  navigate() {
    const _0x28775f = game.input, _0x15a663 = this.focus;
    let _0x1e9d68 = _0x15a663;
    (_0x28775f.menu("mleft") && (_0x15a663 === 1 ? _0x1e9d68 = 0 : _0x15a663 === 0 ? _0x1e9d68 = 1 : _0x15a663 === 4 ? _0x1e9d68 = 3 : _0x15a663 === 6 || _0x15a663 === 7 || _0x15a663 === 8 ? _0x1e9d68 = 1 : _0x15a663 === 5 && (this.rush || this.endless || this.tower) ? (this.rush = this.endless = this.tower = !1, runtime_w.play("select")) : _0x15a663 === 5 && this.view > data_xa(game.save)[0] ? this.setView(this.view - 1) : _0x15a663 === 5 ? _0x1e9d68 = 2 : _0x15a663 === 3 && game.save.curse > 0 ? (game.save.curse--, runtime_w.play("select")) : _0x15a663 === 3 && this.curseLocked()), _0x28775f.menu("mright") && (_0x15a663 === 0 ? _0x1e9d68 = 1 : _0x15a663 === 1 ? _0x1e9d68 = 6 : _0x15a663 === 2 ? _0x1e9d68 = 5 : _0x15a663 === 5 && (this.rush || this.endless || this.tower) ? (this.rush = this.endless = this.tower = !1, runtime_w.play("select")) : _0x15a663 === 5 && this.view < data_xa(game.save)[1] ? this.setView(this.view + 1) : _0x15a663 === 5 ? runtime_w.play("error") : _0x15a663 === 3 && game.save.curse < g() ? (game.save.curse++, runtime_w.play("select")) : _0x15a663 === 3 && (_0x1e9d68 = 4)), _0x28775f.menu("mup") && (_0x15a663 === 2 ? _0x1e9d68 = this.lastSlot : _0x15a663 === 3 ? _0x1e9d68 = 2 : _0x15a663 === 4 ? _0x1e9d68 = 5 : _0x15a663 === 5 ? _0x1e9d68 = 6 : _0x15a663 === 6 ? _0x1e9d68 = 7 : _0x15a663 === 7 && (_0x1e9d68 = 7)), _0x28775f.menu("mdown") && (_0x15a663 === 0 || _0x15a663 === 1 ? _0x1e9d68 = 2 : _0x15a663 === 2 ? _0x1e9d68 = 3 : _0x15a663 === 3 || _0x15a663 === 5 ? _0x1e9d68 = 4 : _0x15a663 === 6 ? _0x1e9d68 = 5 : _0x15a663 === 7 ? _0x1e9d68 = 6 : _0x15a663 === 8 && (_0x1e9d68 = 7)), _0x1e9d68 !== _0x15a663 && (this.focus = _0x1e9d68, runtime_w.play("select")), (this.focus === 0 || this.focus === 1) && (this.lastSlot = this.focus));
  }
  depart() {
    const _0xd0f38a = game.save.loadout, _0x4c20b5 = _0x2695c2 => !!_0x2695c2 && !!CHARACTERS[_0x2695c2] && (game.debug || !!game.save.chars[_0x2695c2]);
    if (!_0x4c20b5(_0xd0f38a.chars[0]) || !_0x4c20b5(_0xd0f38a.chars[1]) || _0xd0f38a.chars[0] === _0xd0f38a.chars[1]) {
      (runtime_w.play("error"), game.toast("영웅 2명이 필요하다 — 계약의 제단에서 영웅을 부르자", "#ff8080"));
      return;
    }
    ((!WEAPONS[_0xd0f38a.weapon] || !game.debug && !game.save.weapons[_0xd0f38a.weapon]) && (_0xd0f38a.weapon = Object.keys(game.save.weapons)[0]), game.persist());
    const _0x582266 = new RunState(game.save);
    if (this.endless) {
      if (!U() && !game.debug) return;
      (_0x582266.startEndless(game.save), runtime_Na(game.save, "first_run") && game.achToast(["first_run"]), game.go(new RunScene(_0x582266)));
      return;
    }
    if (this.rush) {
      if ((_0x582266.startBossRush(game.save), !_0x582266.rushList.length)) return;
      (runtime_Na(game.save, "first_run") && game.achToast(["first_run"]), game.go(new RunScene(_0x582266)));
      return;
    }
    if (this.view > game.save.storyMax) {
      if (!game.debug) {
        (runtime_w.play("error"), game.toast(data_Vr(this.view) + "은 " + data_Xr(this.view), "#ff9090"));
        return;
      }
      (_0x582266.story = this.view, _0x582266.newChapter(1, _0x582266.storyDef.route[0][0]));
    }
    runtime_Na(game.save, "first_run") && game.achToast(["first_run"]);
    const _0x3ac830 = _0x582266.storyDef, _0x4bd011 = !game.save.storySeen[_0x3ac830.id];
    (game.save.storySeen[_0x3ac830.id] = !0, game.persist(), _0x4bd011 && _0x3ac830.id > 1 ? game.go(new runtime_bd(data_Vr(_0x3ac830.id) + "  「" + _0x3ac830.name + "」", _0x3ac830.sub, _0x3ac830.intro, () => game.go(new RunScene(_0x582266)))) : game.go(new RunScene(_0x582266)));
  }
  world(_0x37afd6) {
    const _0x555616 = _0x37afd6.createLinearGradient(0, 0, 0, 270);
    (_0x555616.addColorStop(0, "#140c22"), _0x555616.addColorStop(1, "#080410"), _0x37afd6.fillStyle = _0x555616, _0x37afd6.fillRect(0, 0, 480, 270), _0x37afd6.save(), _0x37afd6.globalCompositeOperation = "lighter");
    for (let _0x3103dc = 0; _0x3103dc < 5; _0x3103dc++) (_0x37afd6.strokeStyle = runtime_q("#9a6bff", 0.15 + _0x3103dc * 0.05), _0x37afd6.lineWidth = 2, _0x37afd6.beginPath(), _0x37afd6.ellipse(400, 150, 40 - _0x3103dc * 6 + Math.sin(this.t * 0.05 + _0x3103dc) * 2, 70 - _0x3103dc * 10, 0, 0, Math.PI * 2), _0x37afd6.stroke());
    _0x37afd6.restore();
  }
  ui(_0x115fae) {
    const _0x22f104 = game.save, _0x367e64 = _0x22f104.loadout;
    drawText(_0x115fae, "출정 편성", 12, 8, {
      "size": 12,
      "color": "#e0d0ff",
      "bold": !0
    });
    const _0x461990 = data_q0(_0x367e64.chars.filter(Boolean)), _0x47c88b = data_Q0(_0x367e64.chars.map(_0x272f45 => CHARACTERS[_0x272f45]?.crest));
    if (_0x461990.length) drawText(_0x115fae, "인연 「" + _0x461990[0].name + "」 — " + _0x461990[0].desc, 12, 26, {
      "size": 7,
      "color": _0x461990[0].col,
      "bold": !0,
      "maxW": 296
    }); else {
      if (_0x47c88b) drawText(_0x115fae, "같은 문장 동료 — " + data_Z0[_0x47c88b].name + " 문장을 1개 더 센다", 12, 26, {
        "size": 7,
        "color": data_Z0[_0x47c88b].col,
        "maxW": 296
      }); else {
        const _0x16bbc4 = _0x367e64.chars[this.focus === 1 ? 1 : 0], _0x5acfd9 = _0x16bbc4 ? data_J0(_0x16bbc4).map(_0x9f79ca => CHARACTERS[_0x9f79ca.heroes[0] === _0x16bbc4 ? _0x9f79ca.heroes[1] : _0x9f79ca.heroes[0]].name) : [];
        drawText(_0x115fae, _0x5acfd9.length ? CHARACTERS[_0x16bbc4].name + "의 인연: " + _0x5acfd9.join(" · ") + " — 함께 편성하면 조합 보너스" : "함께할 영웅 2명과 무기를 고르세요. 전투 중 교대로 바꿔 싸울 수 있습니다.", 12, 26, {
          "size": 7,
          "color": "#a8a0c0",
          "maxW": 296
        });
      }
    }
    for (let _0x345b70 = 0; _0x345b70 < 2; _0x345b70++) {
      const _0x2be24e = _0x367e64.chars[_0x345b70], _0xf90187 = CHARACTERS[_0x2be24e], _0x20af8e = 12 + _0x345b70 * 150, _0x4fe56e = 40, _0x4d0733 = this.focus === _0x345b70;
      if ((runtime_ye(_0x115fae, _0x20af8e, _0x4fe56e, 144, 120, {
        "border": _0x4d0733 ? "#ffffff" : _0xf90187 ? runtime_Rn[_0xf90187.rarity] : "#3a2e52"
      }), runtime_kt.add("lf:" + _0x345b70, _0x20af8e, _0x4fe56e, 144, 120), drawText(_0x115fae, _0x345b70 === 0 ? "선봉" : "교대", _0x20af8e + 6, _0x4fe56e + 4, {
        "size": 7,
        "color": "#8a8098"
      }), _0xf90187)) {
        const _0xc4903 = _0x4d0733 ? ["idle0", "windHigh", "slashDown", "thrust"][Math.floor(this.t / 20) % 4] : "idle0";
        (_0x115fae.save(), _0x115fae.beginPath(), _0x115fae.rect(_0x20af8e + 2, _0x4fe56e + 2, 72, 116), _0x115fae.clip(), _0x115fae.drawImage(runtime_Qf(_0x2be24e, _0xc4903), _0x20af8e + 38 - 48, _0x4fe56e + 102 - 88, 96, 96), _0x115fae.restore(), runtime_zn(_0x115fae, _0x20af8e + 76, _0x4fe56e + 14, _0xf90187.rarity, 6), drawText(_0x115fae, _0xf90187.name, _0x20af8e + 76, _0x4fe56e + 24, {
          "size": 10,
          "color": "#ffffff",
          "bold": !0,
          "maxW": 64
        }), drawText(_0x115fae, _0xf90187.title, _0x20af8e + 76, _0x4fe56e + 38, {
          "size": 6,
          "color": "#a8a0c0",
          "maxW": 64
        }), drawText(_0x115fae, data_Gr[_0xf90187.type], _0x20af8e + 76, _0x4fe56e + 48, {
          "size": 7,
          "color": data_Nr[_0xf90187.type]
        }));
        const _0x35cc23 = _0x22f104.chars[_0x2be24e];
        (drawText(_0x115fae, "Lv." + (_0x35cc23?.lv ?? 1) + " · 각성 " + (_0x35cc23?.aw ?? 0), _0x20af8e + 76, _0x4fe56e + 58, {
          "size": 6,
          "color": "#ffe080"
        }), _0xf90187.crest && runtime_Dn(_0x115fae, [_0xf90187.crest], _0x20af8e + 76, _0x4fe56e + 68), drawText(_0x115fae, _0xf90187.skills[0].name, _0x20af8e + 76, _0x4fe56e + 84, {
          "size": 6,
          "color": "#c8c0d8",
          "maxW": 64
        }), drawText(_0x115fae, _0xf90187.skills[1].name, _0x20af8e + 76, _0x4fe56e + 93, {
          "size": 6,
          "color": "#c8c0d8",
          "maxW": 64
        }), drawText(_0x115fae, _0xf90187.swap.name.replace("교대: ", "교대 · "), _0x20af8e + 76, _0x4fe56e + 102, {
          "size": 6,
          "color": "#a0ffd0",
          "maxW": 64
        }));
      } else drawText(_0x115fae, "비어 있음", _0x20af8e + 72, _0x4fe56e + 56, {
        "size": 9,
        "align": "center",
        "color": "#6a6078"
      });
    }
    const _0x24e7fd = WEAPONS[_0x367e64.weapon], _0x2c9fd6 = this.focus === 2;
    (runtime_ye(_0x115fae, 12, 166, 294, 42, {
      "border": _0x2c9fd6 ? "#ffffff" : runtime_Rn[_0x24e7fd.rarity]
    }), runtime_kt.add("lf:2", 12, 166, 294, 42), drawItemIcon(_0x115fae, _0x24e7fd.id, 18, 171, 30) || runtime_de(_0x115fae, _0x24e7fd.icon, 18, 171, 30, _0x24e7fd.col), runtime_zn(_0x115fae, 54, 171, _0x24e7fd.rarity, 4));
    const _0x5a5f35 = 54 + _0x24e7fd.rarity * 5 + 4;
    (drawText(_0x115fae, "" + _0x24e7fd.name + (_0x22f104.weapons[_0x24e7fd.id]?.en ? " +" + _0x22f104.weapons[_0x24e7fd.id].en : "") + " (재련 " + (_0x22f104.weapons[_0x24e7fd.id]?.rf ?? 1) + ")", _0x5a5f35, 170, {
      "size": 8,
      "color": "#ffffff",
      "bold": !0,
      "maxW": 300 - _0x5a5f35
    }), drawText(_0x115fae, data_a0(_0x24e7fd, _0x22f104.weapons[_0x24e7fd.id]?.rf ?? 1, !1), 54, 184, {
      "size": 6,
      "color": "#c8c0d8",
      "maxW": 246
    }), _0x24e7fd.crest && runtime_Dn(_0x115fae, _0x24e7fd.crest, 54, 194));
    const _0xf91f9d = this.focus === 3;
    (runtime_ye(_0x115fae, 12, 212, 294, 24, {
      "border": _0xf91f9d ? "#ffffff" : "#6a3a5a"
    }), runtime_kt.add("lf:3", 12, 212, 294, 24));
    const _0x134708 = CURSE_LEVELS[_0x22f104.curse];
    if ((drawText(_0x115fae, "◀ " + _0x134708.name + " ▶", 20, 218, {
      "size": 8,
      "color": _0x22f104.curse ? "#ff80a0" : "#c8c0d8",
      "bold": !0
    }), !g())) drawText(_0x115fae, "스토리를 끝까지 깨면 저주 단계가 해금된다", 110, 219, {
      "size": 6,
      "color": "#a8a0c0",
      "maxW": 190
    }); else {
      const _0x50c14a = data_Jr(_0x22f104.curse).split(" · ");
      (drawText(_0x115fae, _0x50c14a.slice(0, 3).join(" · "), 110, _0x22f104.curse ? 214 : 219, {
        "size": 6,
        "color": "#a8a0c0",
        "maxW": 190
      }), _0x50c14a.length > 3 && drawText(_0x115fae, _0x50c14a.slice(3).join(" · "), 110, 223, {
        "size": 6,
        "color": "#ffb0c0",
        "maxW": 190
      }));
    }
    const _0x2a9e65 = getBook(_0x22f104.book ?? 1), _0x23cf2f = data_r0(_0x22f104.rushBest, _0x2a9e65.id), _0x4f58e0 = data_r0(_0x22f104.endlessBest, _0x2a9e65.id), _0x4c13f7 = (_0x34545f, _0x557230, _0x3e12ae, _0x234e47, _0x24581a, _0x45aefe, _0x5dbd6b, _0x44d9aa, _0x55dc4b = _0x557230 === 6 ? trialUnlocked() : U(), _0x75d1eb = _0x557230 === 6 ? "선택한 권 첫 스토리 완수 후 해금" : rs()) => {
      const _0x1ff08d = this.focus === _0x557230;
      (runtime_ye(_0x115fae, 316, _0x34545f, 156, 22, {
        "border": _0x1ff08d ? "#ffffff" : _0x55dc4b ? _0x3e12ae ? _0x45aefe : _0x5dbd6b : "#3a3448"
      }), _0x3e12ae && (_0x115fae.fillStyle = _0x44d9aa, _0x115fae.fillRect(318, _0x34545f + 2, 152, 18)), drawText(_0x115fae, _0x55dc4b ? _0x3e12ae ? "◆ " + _0x234e47 + " — 켜짐" : _0x234e47 : _0x234e47 + " · 잠김", 394, _0x34545f + 4, {
        "size": 8,
        "align": "center",
        "color": _0x55dc4b ? _0x3e12ae ? _0x45aefe : "#e0d0d8" : "#6a6078",
        "bold": !0
      }), drawText(_0x115fae, _0x55dc4b ? _0x24581a : _0x75d1eb, 394, _0x34545f + 14, {
        "size": 5,
        "align": "center",
        "color": _0x55dc4b ? "#c8b8c8" : "#8a7890",
        "maxW": 150
      }), runtime_kt.add("lf:" + _0x557230, 316, _0x34545f, 156, 22));
    }, _0x16740e = _0x22f104.tower ?? ({
      "best": 0,
      "claimed": []
    });
    (_0x4c13f7(114, 7, this.endless, _0x2a9e65.name + " 무한 모드", "최고 기록 " + _0x4f58e0 + "층", "#90e0ff", "#3a5a6a", "rgba(80,190,255,0.16)"), _0x4c13f7(140, 6, this.rush, _0x2a9e65.name + " 보스러쉬", "최고 기록 " + _0x23cf2f + "체", "#ff9090", "#6a3a4a", "rgba(255,80,96,0.18)"));
    const _0x4d89a6 = getStory(this.view), _0x401b1f = this.view > _0x22f104.storyMax && !DEVELOPER_FLAGS.all, _0x42195e = this.focus === 5;
    if ((runtime_ye(_0x115fae, 316, 166, 156, 42, {
      "border": _0x42195e ? "#ffffff" : _0x401b1f && !this.rush && !this.endless && !this.tower ? "#4a4058" : "#c0a060"
    }), runtime_kt.add("lf:5", 316, 166, 156, 42), this.tower)) {
      const _0x2c5949 = data_za(data_u.floors);
      (drawText(_0x115fae, "사자의 탑 (스토리 칸을 누르면 끔)", 322, 170, {
        "size": 6,
        "color": "#ffd080"
      }), drawText(_0x115fae, "사자의 탑 · 최고 " + _0x16740e.best + "층", 394, 180, {
        "size": 9,
        "align": "center",
        "color": "#ffd080",
        "bold": !0
      }), drawText(_0x115fae, "1~" + data_u.floors + "층 · 제1권→제4권 적 · " + data_u.bossEvery + "층마다 보스·첫 돌파 보상 · 100층 적 ×" + Math.round(_0x2c5949.hp), 394, 194, {
        "size": 5,
        "align": "center",
        "color": "#ffe8c0",
        "maxW": 150
      }));
    } else {
      if (this.endless) (drawText(_0x115fae, "무한 모드 (스토리 칸을 누르면 끔)", 322, 170, {
        "size": 6,
        "color": "#90e0ff"
      }), drawText(_0x115fae, _0x2a9e65.name + " 무한 모드", 394, 180, {
        "size": 9,
        "align": "center",
        "color": "#90e0ff",
        "bold": !0
      }), drawText(_0x115fae, _0x2a9e65.name + "의 장을 무작위로 끝없이 · 층마다 적 +" + Math.round(data_O.growth * 100) + "% · " + data_O.eliteEvery + "층 정예 · " + data_O.bossEvery + "층 보스 · 최고 " + _0x4f58e0 + "층", 394, 194, {
        "size": 5,
        "align": "center",
        "color": "#c0f0ff",
        "maxW": 150
      })); else {
        if (this.rush) {
          const _0x2ec795 = getBossRoute(_0x2a9e65.id).filter(entry => _0x22f104.storyClear?.[entry.story]).length;
          (drawText(_0x115fae, "보스러쉬 (스토리 칸을 누르면 끔)", 322, 170, {
            "size": 6,
            "color": "#ff9090"
          }), drawText(_0x115fae, _0x2a9e65.name + " 보스러쉬", 394, 180, {
            "size": 9,
            "align": "center",
            "color": "#ff8080",
            "bold": !0
          }), drawText(_0x115fae, _0x2a9e65.name + "의 보스 " + _0x2ec795 + "체 순환 · 끝없음 · 스킬 쿨 +0.5초/순환 · 최고 " + _0x23cf2f + "체", 394, 194, {
            "size": 5,
            "align": "center",
            "color": "#ffc0c0",
            "maxW": 150
          }));
        } else {
          (drawText(_0x115fae, "스토리 " + data_L(_0x4d89a6.id) + " / " + data_L(data_xa(_0x22f104)[1]) + (_0x401b1f ? " · 잠김" : ""), 322, 170, {
            "size": 6,
            "color": _0x401b1f ? "#ff9090" : "#a8a0c0"
          }), drawText(_0x115fae, (this.view > data_xa(_0x22f104)[0] ? "◀" : " ") + " " + _0x4d89a6.name + " " + (this.view < data_xa(_0x22f104)[1] ? "▶" : " "), 394, 180, {
            "size": 9,
            "align": "center",
            "color": _0x401b1f ? "#8a8098" : "#ffe0a0",
            "bold": !0,
            "maxW": 150
          }));
          const _0x18adc4 = _0x401b1f ? "" + data_Xr(_0x4d89a6.id) + (game.debug ? " (디버그: 출정 가능)" : "") : _0x22f104.storyMax > 1 || _0x4d89a6.id > 1 ? _0x22f104.storyClear[_0x4d89a6.id] ? _0x4d89a6.sub + " · 완수" : _0x4d89a6.sub : "「사자의 계약」을 완수하면 후속 스토리가 열린다";
          drawText(_0x115fae, _0x18adc4, 394, 194, {
            "size": 5,
            "align": "center",
            "color": _0x401b1f ? "#ff9090" : _0x22f104.storyClear[_0x4d89a6.id] ? "#a0ffd0" : "#a8a0c0",
            "maxW": 150
          });
        }
      }
    }
    if ((runtime_ua(_0x115fae, 316, 210, 156, 28, "출정!", this.focus === 4, {
      "size": 11,
      "col": "#ffcc40",
      "sub": this.tower ? "탑의 꼭대기로" : this.endless ? "끝없는 층으로" : this.rush ? "보스와 연속 전투" : _0x401b1f ? game.debug ? "[디버그] 잠긴 스토리로" : "잠긴 스토리" : _0x4d89a6.id === 1 ? "끝없는 왕좌를 향해" : _0x4d89a6.sub
    }), runtime_kt.add("lf:4", 316, 210, 156, 28), this.picking)) {
      const _0x406eab = this.picking === "char" ? this.ownedChars() : this.ownedWeapons();
      (_0x115fae.fillStyle = "rgba(4,2,10,0.8)", _0x115fae.fillRect(0, 0, 480, 270), runtime_ye(_0x115fae, 40, 24, 400, 220), drawText(_0x115fae, this.picking === "char" ? "영웅 선택" : "무기 선택", 50, 30, {
        "size": 10,
        "color": "#e0d0ff",
        "bold": !0
      }), game.debug && drawText(_0x115fae, "[디버그] 보유하지 않은 영웅·무기도 선택 가능 (기록에는 추가되지 않음)", 430, 33, {
        "size": 6,
        "align": "right",
        "color": "#80ffa0"
      }));
      const _0x5e8854 = Math.ceil(_0x406eab.length / 8);
      (this.pickScroll > 0 && (drawText(_0x115fae, "▲ (" + this.pickScroll + "줄 더)", 240, 36, {
        "size": 6,
        "align": "center",
        "color": "#c0b0e0"
      }), runtime_kt.add("lpup", 190, 34, 100, 10)), this.pickScroll + x < _0x5e8854 && (drawText(_0x115fae, "▼ (" + (_0x5e8854 - this.pickScroll - x) + "줄 더)", 240, 222, {
        "size": 6,
        "align": "center",
        "color": "#c0b0e0"
      }), runtime_kt.add("lpdown", 190, 220, 100, 10)), _0x406eab.forEach((_0x452b6f, _0x4ea5c4) => {
        const _0x29966b = Math.floor(_0x4ea5c4 / 8) - this.pickScroll;
        if (_0x29966b < 0 || _0x29966b >= x) return;
        const _0x44b972 = 48 + _0x4ea5c4 % 8 * 48, _0x352164 = 46 + _0x29966b * 44, _0x417676 = _0x4ea5c4 === this.pick;
        if (this.picking === "char") {
          const _0x2af7a4 = CHARACTERS[_0x452b6f];
          (_0x115fae.fillStyle = _0x417676 ? runtime_q(runtime_Rn[_0x2af7a4.rarity], 0.4) : "rgba(255,255,255,0.05)", _0x115fae.fillRect(_0x44b972, _0x352164, 46, 42), _0x115fae.strokeStyle = runtime_Rn[_0x2af7a4.rarity], _0x115fae.strokeRect(_0x44b972 + 0.5, _0x352164 + 0.5, 45, 41), _0x115fae.drawImage(runtime_Qf(_0x452b6f, _0x417676 ? "castUp" : "idle0"), _0x44b972 + 23 - 24, _0x352164 - 13, 48, 48), drawText(_0x115fae, _0x2af7a4.name, _0x44b972 + 23, _0x352164 + 33, {
            "size": 6,
            "align": "center",
            "color": _0x367e64.chars.includes(_0x452b6f) ? "#ffe080" : "#ffffff",
            "maxW": 44
          }), _0x22f104.chars[_0x452b6f] || drawText(_0x115fae, "디버그", _0x44b972 + 2, _0x352164 + 1, {
            "size": 5,
            "color": "#80ffa0"
          }));
          const _0x205f4d = _0x367e64.chars[this.focus === 1 ? 0 : 1];
          _0x205f4d && _0x205f4d !== _0x452b6f && data_q0([_0x452b6f, _0x205f4d]).length && drawText(_0x115fae, "인연", _0x44b972 + 44, _0x352164 + 1, {
            "size": 5,
            "align": "right",
            "color": "#ff90c0",
            "bold": !0
          });
        } else {
          const _0x504f82 = WEAPONS[_0x452b6f];
          (_0x115fae.fillStyle = _0x417676 ? runtime_q(runtime_Rn[_0x504f82.rarity], 0.4) : "rgba(255,255,255,0.05)", _0x115fae.fillRect(_0x44b972, _0x352164, 46, 42), _0x115fae.strokeStyle = runtime_Rn[_0x504f82.rarity], _0x115fae.strokeRect(_0x44b972 + 0.5, _0x352164 + 0.5, 45, 41), drawItemIcon(_0x115fae, _0x504f82.id, _0x44b972 + 13, _0x352164 + 3, 20) || runtime_de(_0x115fae, _0x504f82.icon, _0x44b972 + 13, _0x352164 + 3, 20, _0x504f82.col), drawText(_0x115fae, _0x504f82.name.replace(/「.*」/, "").trim(), _0x44b972 + 23, _0x352164 + 26, {
            "size": 5,
            "align": "center",
            "color": "#ffffff",
            "maxW": 44
          }), drawText(_0x115fae, _0x22f104.weapons[_0x452b6f] ? "재련" + _0x22f104.weapons[_0x452b6f].rf + (_0x22f104.weapons[_0x452b6f].en ? " +" + _0x22f104.weapons[_0x452b6f].en : "") : "디버그", _0x44b972 + 23, _0x352164 + 34, {
            "size": 5,
            "align": "center",
            "color": _0x22f104.weapons[_0x452b6f] ? "#a8a0c0" : "#80ffa0"
          }));
        }
        runtime_kt.add("lp:" + _0x4ea5c4, _0x44b972, _0x352164, 46, 42);
      }));
      const _0x539ddb = _0x406eab[this.pick];
      (_0x539ddb && this.picking === "weapon" && drawText(_0x115fae, data_a0(WEAPONS[_0x539ddb], _0x22f104.weapons[_0x539ddb]?.rf ?? 1, !1), 240, 232, {
        "size": 7,
        "align": "center",
        "color": "#ffe8c0",
        "maxW": 390
      }), _0x539ddb && this.picking === "char" && drawText(_0x115fae, CHARACTERS[_0x539ddb].passive.name + ": " + CHARACTERS[_0x539ddb].passive.desc, 240, 232, {
        "size": 7,
        "align": "center",
        "color": "#ffe8c0",
        "maxW": 390
      }), runtime_Xe(_0x115fae, [["WASD/방향키", "선택"], [game.input.label("attack") + "/" + game.input.label("interact"), "결정"], ["Esc", "취소"]]));
    } else runtime_Xe(_0x115fae, [["WASD/방향키", "항목"], [game.input.label("attack") + "/" + game.input.label("interact"), "변경/출정"], ["Esc", "나가기"]], 258);
  }
}
export {Rs as LoadoutScene, U as rushUnlocked};
