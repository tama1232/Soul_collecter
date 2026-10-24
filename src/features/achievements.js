import {canSelectTitle} from '../systems/rank-titles.js';
import {rankingService} from '../game.js';
import {hiddenAchievement} from '../config/expansion.js';
// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
import {data_$0, ACHIEVEMENTS, data_ce, DEVELOPER_FLAGS, data_V0} from "../game-data.js";
import {runtime_Ml, game, runtime_kt, runtime_w, runtime_ye, drawText, runtime_q, runtime_Xe, runtime_de} from "../game.js";
class S {
  constructor(_0x43338e) {
    this.back = _0x43338e;
    rankingService.syncTitles(game.save).catch(()=>{});
    game.achToast(runtime_Ml(game.save));
    for (const _0x179e45 of data_$0(game.save)) game.toast("새 칭호: 「" + _0x179e45.name + "」", _0x179e45.col);
    game.persist();
  }
  sel = 0;
  scroll = 0;
  tab = 0;
  tsel = 0;
  titleTop = 0;
  update() {
    const _0x159236 = game.input;
    if (_0x159236.menu("back")) {
      game.go(this.back);
      return;
    }
    const _0x1f3b78 = runtime_kt.hover(), _0x37cd31 = _0x159236.menu("tabL") ? 0 : _0x159236.menu("tabR") ? 1 : _0x1f3b78?.startsWith("atab:") && runtime_kt.mouse.click ? Number(_0x1f3b78.slice(5)) : this.tab;
    if (_0x37cd31 !== this.tab) {
      (this.tab = _0x37cd31, runtime_w.play("select"));
      return;
    }
    if (this.tab === 1) {
      this.updateTitles(_0x1f3b78);
      return;
    }
    const _0x5f2bf5 = ACHIEVEMENTS.length;
    (_0x159236.menu("mup") && (this.sel = (this.sel - 1 + _0x5f2bf5) % _0x5f2bf5), _0x159236.menu("mdown") && (this.sel = (this.sel + 1) % _0x5f2bf5), this.sel < this.scroll && (this.scroll = this.sel), this.sel >= this.scroll + 9 && (this.scroll = this.sel - 8));
    const _0x4dd892 = runtime_kt.hover();
    let _0xd5060b = !1;
    if ((_0x4dd892?.startsWith("ac:") && (runtime_kt.mouse.moved && (this.sel = Number(_0x4dd892.slice(3))), runtime_kt.mouse.click && (this.sel = Number(_0x4dd892.slice(3)), _0xd5060b = !0)), _0x159236.menu("ok") || _0xd5060b)) {
      const _0x5cbcfb = ACHIEVEMENTS[this.sel];
      game.save.ach[_0x5cbcfb.id] === "done" ? (game.save.ach[_0x5cbcfb.id] = "claimed", game.save.stones += _0x5cbcfb.reward, _0x5cbcfb.compass && (game.save.compass = (game.save.compass ?? 0) + _0x5cbcfb.compass), runtime_w.play("gem"), game.toast([_0x5cbcfb.reward ? "영혼석 +" + _0x5cbcfb.reward : "", _0x5cbcfb.compass ? "별의 나침반 +" + _0x5cbcfb.compass : ""].filter(Boolean).join(" · "), "#9ec0ff"), game.persist()) : runtime_w.play("error");
    }
    if (_0x159236.pressed("ult") || runtime_kt.hover()==='claim-all'&&runtime_kt.mouse.click) {
      let _0x1846dd = 0, _0x355c4c = 0;
      for (const _0x45448c of ACHIEVEMENTS) game.save.ach[_0x45448c.id] === "done" && (game.save.ach[_0x45448c.id] = "claimed", _0x1846dd += _0x45448c.reward, _0x355c4c += _0x45448c.compass ?? 0);
      (_0x1846dd || _0x355c4c) && (game.save.stones += _0x1846dd, game.save.compass = (game.save.compass ?? 0) + _0x355c4c, runtime_w.play("gem"), game.toast([_0x1846dd ? "영혼석 +" + _0x1846dd : "", _0x355c4c ? "별의 나침반 +" + _0x355c4c : ""].filter(Boolean).join(" · "), "#9ec0ff"), game.persist());
    }
  }
  updateTitles(_0x455164) {
    const _0x1fe92a = game.input, _0x6849e1 = data_ce.length;
    (_0x1fe92a.menu("mup") && (this.tsel = (this.tsel - 2 + _0x6849e1) % _0x6849e1), _0x1fe92a.menu("mdown") && (this.tsel = (this.tsel + 2) % _0x6849e1), (_0x1fe92a.menu("mleft") || _0x1fe92a.menu("mright")) && (this.tsel = this.tsel ^ 1), this.tsel = Math.min(_0x6849e1 - 1, this.tsel));
    let _0x360fdb = !1;
    if ((_0x455164?.startsWith("ti:") && (runtime_kt.mouse.moved && (this.tsel = Number(_0x455164.slice(3))), runtime_kt.mouse.click && (this.tsel = Number(_0x455164.slice(3)), _0x360fdb = !0)), !(_0x1fe92a.menu("ok") || _0x360fdb))) return;
    const _0x53e8ad = data_ce[this.tsel];
    if (!canSelectTitle(game.save,_0x53e8ad) && !(DEVELOPER_FLAGS.all&&!_0x53e8ad.rankCategory)) {
      runtime_w.play("error");
      return;
    }
    (game.save.title = _0x53e8ad.id, runtime_w.play("confirm"), game.toast("칭호 「" + _0x53e8ad.name + "」을(를) 달았다", _0x53e8ad.col), game.persist());
  }
  uiTitles(_0x5e2efc) {
    const _0x1d3108 = game.save;
    const row=Math.floor(this.tsel/2);
    this.titleTop=Math.max(0,Math.min(this.titleTop,row));
    if(row>=this.titleTop+12) this.titleTop=row-11;
    runtime_ye(_0x5e2efc, 8, 28, 464, 224);
    const _0x1408b3 = data_V0(_0x1d3108);
    (drawText(_0x5e2efc, "단 칭호: 「" + _0x1408b3.name + "」 — 랭킹 이름 옆과 타이틀 화면에 보인다 (꾸밈 전용)", 16, 32, {
      "size": 7,
      "color": _0x1408b3.col,
      "bold": !0
    }), data_ce.forEach((_0x10cf4e, _0x53f4f0) => {
      if(Math.floor(_0x53f4f0/2)<this.titleTop || Math.floor(_0x53f4f0/2)>=this.titleTop+12) return;
      const _0x5db9e8 = 14 + _0x53f4f0 % 2 * 228, _0x1079c6 = 44 + (Math.floor(_0x53f4f0 / 2)-this.titleTop) * 15.5, _0x1fa629 = canSelectTitle(_0x1d3108,_0x10cf4e) || DEVELOPER_FLAGS.all&&!_0x10cf4e.rankCategory, _0x4721c8 = _0x53f4f0 === this.tsel;
      (_0x5e2efc.fillStyle = _0x4721c8 ? runtime_q(_0x10cf4e.col, 0.25) : "rgba(255,255,255,0.03)", _0x5e2efc.fillRect(_0x5db9e8, _0x1079c6, 224, 14), runtime_kt.add("ti:" + _0x53f4f0, _0x5db9e8, _0x1079c6, 224, 14), _0x10cf4e.id === _0x1408b3.id && drawText(_0x5e2efc, "◆", _0x5db9e8 + 3, _0x1079c6 + 3, {
        "size": 7,
        "color": _0x10cf4e.col
      }), drawText(_0x5e2efc, _0x1fa629 && !hiddenAchievement(_0x1d3108,_0x10cf4e.id) ? _0x10cf4e.name : "???", _0x5db9e8 + 14, _0x1079c6 + 3, {
        "size": 7,
        "color": _0x1fa629 ? _0x10cf4e.col : "#5a5068",
        "bold": _0x4721c8 || _0x10cf4e.id === _0x1408b3.id,
        "maxW": 84
      }), drawText(_0x5e2efc, hiddenAchievement(_0x1d3108,_0x10cf4e.id)?"???":_0x10cf4e.desc, _0x5db9e8 + 220, _0x1079c6 + 4, {
        "size": 5,
        "align": "right",
        "color": _0x1fa629 ? "#a8a0c0" : "#6a6078",
        "maxW": 120
      }));
    }), runtime_Xe(_0x5e2efc, [["방향키", "선택"], [game.input.label("attack"), "달기"], [game.input.label("skill2"), "← 업적"], ["Esc", "나가기"]], 258));
  }
  world(_0xbf83c9) {
    (_0xbf83c9.fillStyle = "#0c0a14", _0xbf83c9.fillRect(0, 0, 480, 270));
  }
  ui(_0x255258) {
    const _0x3fff95 = game.save;
    drawText(_0x255258, "업적 비석", 12, 8, {
      "size": 12,
      "color": "#ffe080",
      "bold": !0
    });
    const _0x424a6a = ACHIEVEMENTS.filter(_0x3ef167 => _0x3fff95.ach[_0x3ef167.id]).length;
    if ((drawText(_0x255258, _0x424a6a + " / " + ACHIEVEMENTS.length + " 달성", 120, 11, {
      "size": 7,
      "color": "#a8a0c0"
    }), runtime_de(_0x255258, "gem", 360, 9, 10, "#6a9aff"), drawText(_0x255258, "영혼석 " + _0x3fff95.stones, 374, 10, {
      "size": 8,
      "color": "#9ec0ff"
    }), ["업적", "칭호 " + _0x3fff95.titles.length + "/" + data_ce.length].forEach((_0x55519e, _0x7869c1) => {
      const _0x3579f1 = 196 + _0x7869c1 * 70, _0x1399cc = _0x7869c1 === this.tab;
      (_0x255258.fillStyle = _0x1399cc ? "rgba(255,224,128,0.3)" : "rgba(255,255,255,0.04)", _0x255258.fillRect(_0x3579f1, 7, 66, 15), _0x255258.strokeStyle = _0x1399cc ? "#ffe080" : "#3a2e52", _0x255258.strokeRect(_0x3579f1 + 0.5, 7.5, 65, 14), drawText(_0x255258, _0x55519e, _0x3579f1 + 33, 10, {
        "size": 7,
        "align": "center",
        "color": _0x1399cc ? "#ffffff" : "#a8a0c0",
        "bold": _0x1399cc
      }), runtime_kt.add("atab:" + _0x7869c1, _0x3579f1, 7, 66, 15));
    }), this.tab === 1)) {
      this.uiTitles(_0x255258);
      return;
    }
    (runtime_ye(_0x255258, 8, 28, 464, 224), ACHIEVEMENTS.slice(this.scroll, this.scroll + 9).forEach((_0x1b4a30, _0x53a7a7) => {
      const _0x42423d = _0x53a7a7 + this.scroll, _0xc89b53 = _0x3fff95.ach[_0x1b4a30.id], _0x3732f2 = 34 + _0x53a7a7 * 21, _0x1a5119 = _0x42423d === this.sel;
      (_0x255258.fillStyle = _0x1a5119 ? "rgba(255,224,128,0.2)" : "rgba(255,255,255,0.03)", _0x255258.fillRect(14, _0x3732f2, 452, 19), runtime_kt.add("ac:" + _0x42423d, 14, _0x3732f2, 452, 19), runtime_de(_0x255258, _0xc89b53 ? "star" : "lock", 18, _0x3732f2 + 4, 11, _0xc89b53 === "claimed" ? "#8a8098" : _0xc89b53 ? "#ffe080" : "#4a4058"), drawText(_0x255258, hiddenAchievement(_0x3fff95,_0x1b4a30.id)?"???":_0x1b4a30.name, 34, _0x3732f2 + 5, {
        "size": 8,
        "color": _0xc89b53 ? "#ffffff" : "#8a8098",
        "bold": _0x1a5119
      }), drawText(_0x255258, hiddenAchievement(_0x3fff95,_0x1b4a30.id)?"???":_0x1b4a30.desc, 140, _0x3732f2 + 5, {
        "size": 7,
        "color": "#a8a0c0", "maxW":200
      }), drawText(_0x255258, _0xc89b53 === "claimed" ? "수령 완료" : (_0xc89b53 === "done" ? "수령 ▶ " : "") + [_0x1b4a30.reward ? "영혼석 " + _0x1b4a30.reward : "", _0x1b4a30.compass ? "별의 나침반 " + _0x1b4a30.compass : ""].filter(Boolean).join(" + "), 460, _0x3732f2 + 5, {
        "size": 7,
        "align": "right",
        "color": _0xc89b53 === "done" ? "#ffe080" : "#6a6078",
        "bold": _0xc89b53 === "done"
      }));
    }), drawText(_0x255258,'[ 모두 받기 ]',412,242,{size:8,color:'#a4ffd4',align:'center'}), runtime_kt.add('claim-all',366,236,96,16), runtime_Xe(_0x255258, [["↑↓", "선택"], [game.input.label("attack"), "수령"], [game.input.label("ult"), "모두 수령"], [game.input.label("skill1"), "칭호 →"], ["Esc", "나가기"]], 258));
  }
}
export {S as AchScene};
