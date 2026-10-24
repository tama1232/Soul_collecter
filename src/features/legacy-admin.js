// Reconstructed from the public 2026-10-23 distribution; see docs/PROVENANCE.md.
import {runtime_Rd, runtime_pc, accountStore, runtime_Hf, runtime_Jf, runtime_an, runtime_lc, runtime_Ud, runtime_Ld, game, runtime_Od, runtime_jd, runtime_zd, runtime_Ed, runtime_Id, runtime_Hl, runtime_Jd, runtime_w, runtime_Wd, runtime_Hd, runtime_V0, runtime_is, drawText} from "../game.js";
import {WEAPONS, CHARACTERS, data_G0, AWAKENING_MAX, data_yr, data_Ne, CHARACTER_LIST, data_ve, STORIES, data_qa, data_oo, data_ta} from "../game-data.js";
const f = _0x4944ed => _0x4944ed.toLocaleString(), E = _0xbe4909 => (_0xbe4909 ?? []).map(_0x1b27eb => _0x1b27eb || "-").join("/");
function at(_0x526c03) {
  return _0x526c03.kind.startsWith("flag:") ? "⚠ " + (runtime_Rd[_0x526c03.kind.slice(5)] ?? _0x526c03.kind) : _0x526c03.kind === "seal" ? "첫 봉인" : "저장";
}
function j(_0x35faac, _0x2fdf7d) {
  return _0x35faac.map(_0x4bd900 => {
    const [_0x47f31b, _0xe9283e, _0x3ed36f] = _0x4bd900.split(":"), _0x8b3d8e = _0x2fdf7d ? WEAPONS[_0x47f31b] : CHARACTERS[_0x47f31b];
    return {
      "r": _0x8b3d8e?.rarity ?? 0,
      "t": "★" + (_0x8b3d8e?.rarity ?? "?") + " " + (_0x8b3d8e?.name ?? _0x47f31b) + "(" + (_0x2fdf7d ? "재련" + _0xe9283e + (_0x3ed36f !== "0" ? "·+" + _0x3ed36f : "") : "Lv" + _0xe9283e + "·각성" + _0x3ed36f) + ")"
    };
  }).sort((_0x317a25, _0x3b529c) => _0x3b529c.r - _0x317a25.r).map(_0x57cc30 => _0x57cc30.t).join(", ");
}
function st(_0x251145, _0x2e2dd7) {
  const _0x4c93a8 = [];
  for (const _0x4d68d3 of ["cur"]) for (const _0x2d07df of Object.keys(_0x251145[_0x4d68d3])) {
    const _0x458778 = _0x251145[_0x4d68d3][_0x2d07df] - (_0x2e2dd7[_0x4d68d3][_0x2d07df] ?? 0);
    _0x458778 && _0x4c93a8.push((runtime_pc[_0x2d07df] ?? _0x2d07df) + " " + (_0x458778 > 0 ? "+" : "") + f(_0x458778));
  }
  for (const [_0x510a1b, _0x2fedbc] of [["runs", "런"], ["pulls", "뽑기"], ["coupons", "쿠폰"], ["sanction", "제재/보급"], ["ach", "업적"], ["crafted", "제작"]]) {
    const _0x28062d = (_0x251145.ctr[_0x510a1b] ?? 0) - (_0x2e2dd7.ctr[_0x510a1b] ?? 0);
    _0x28062d && _0x4c93a8.push(_0x2fedbc + " " + (_0x28062d > 0 ? "+" : "") + _0x28062d);
  }
  if ((_0x251145.prog && _0x2e2dd7.prog && (_0x251145.prog.story !== _0x2e2dd7.prog.story && _0x4c93a8.push("스토리 " + _0x2e2dd7.prog.story + "→" + _0x251145.prog.story), _0x251145.prog.tower !== _0x2e2dd7.prog.tower && _0x4c93a8.push("탑 " + _0x2e2dd7.prog.tower + "→" + _0x251145.prog.tower + "층")), _0x251145.units && _0x2e2dd7.units)) for (const _0x5b1238 of [!1, !0]) {
    const _0x56417 = _0x1bb661 => new Map(_0x1bb661.map(_0x50efa8 => [_0x50efa8.split(":")[0], _0x50efa8])), _0x60d22a = _0x56417(_0x5b1238 ? _0x2e2dd7.units.weapons : _0x2e2dd7.units.chars), _0x443215 = _0x56417(_0x5b1238 ? _0x251145.units.weapons : _0x251145.units.chars), _0x1225db = [..._0x443215.keys()].filter(_0x17388d => !_0x60d22a.has(_0x17388d)), _0xdee513 = [..._0x60d22a.keys()].filter(_0x21bf0b => !_0x443215.has(_0x21bf0b)), _0x53dd57 = [..._0x443215.keys()].filter(_0x392d63 => _0x60d22a.has(_0x392d63) && _0x60d22a.get(_0x392d63) !== _0x443215.get(_0x392d63)), _0x19ecc3 = _0x294c3d => (_0x5b1238 ? WEAPONS[_0x294c3d] : CHARACTERS[_0x294c3d])?.name ?? _0x294c3d;
    (_0x1225db.length && _0x4c93a8.push("새 " + (_0x5b1238 ? "무기" : "영웅") + " " + _0x1225db.map(_0x19ecc3).join(", ")), _0xdee513.length && _0x4c93a8.push("없어진 " + (_0x5b1238 ? "무기" : "영웅") + " " + _0xdee513.map(_0x19ecc3).join(", ")), _0x53dd57.length && _0x4c93a8.push((_0x5b1238 ? "무기" : "영웅") + " 성장 " + _0x53dd57.map(_0x2d234d => _0x19ecc3(_0x2d234d) + " " + _0x60d22a.get(_0x2d234d).split(":").slice(1).join("·") + "→" + _0x443215.get(_0x2d234d).split(":").slice(1).join("·")).join(", ")));
  }
  return _0x4c93a8.join(" · ");
}
function nt(_0x186c12, _0x4ae7b2, _0x4476f8 = 40) {
  if (!_0x4ae7b2.length) return "장부 기록 없음 (업데이트 후 접속하지 않았거나 이 기기 전용 계정)";
  const _0x12ecf8 = _0x4ae7b2.slice(0, _0x4476f8).map((_0x42c264, _0x39d55f) => {
    const _0x406130 = _0x42c264.snap, _0x50828e = "■ " + new Date(_0x42c264.at).toLocaleString() + " [" + at(_0x42c264) + "]" + (_0x42c264.detail ? " " + _0x42c264.detail : "");
    if (!_0x406130) return _0x50828e;
    const _0x1fda44 = "   재화: 영혼석 " + f(_0x406130.cur.stones) + " · 영혼 결정 " + f(_0x406130.cur.crystals) + " · 각성 파편 " + f(_0x406130.cur.awShards) + " · 나침반 " + f(_0x406130.cur.compass) + " · 정수 " + _0x406130.cur.m1 + "/" + _0x406130.cur.m2 + "/" + _0x406130.cur.m3 + "/" + _0x406130.cur.m4, _0x1e8b48 = "   기록: 런 " + _0x406130.ctr.runs + " · 뽑기 " + _0x406130.ctr.pulls + " · 쿠폰 " + _0x406130.ctr.coupons + " · 제재/보급 " + _0x406130.ctr.sanction + " · 업적 " + _0x406130.ctr.ach + " · 제작 " + _0x406130.ctr.crafted, _0x56c5f7 = _0x406130.prog, _0x321878 = _0x56c5f7 ? "   진행: 스토리 " + _0x56c5f7.story + "해금(완수 " + _0x56c5f7.clear + ") · 사자의 탑 " + _0x56c5f7.tower + "층 · 무한 " + E(_0x56c5f7.endless) + " · 보스 시련 " + E(_0x56c5f7.rush) + " · 저주 " + (_0x56c5f7.curse < 0 ? "-" : _0x56c5f7.curse) + " · 영구 강화 합 " + Object.values(_0x56c5f7.upg).reduce((_0x1def21, _0x1c8704) => _0x1def21 + _0x1c8704, 0) : "   진행·유닛: (이 줄은 2-183 업데이트 전 기록이라 없음)", _0x5a56bb = _0x406130.units ? "   영웅 " + _0x406130.units.chars.length + ": " + j(_0x406130.units.chars, !1) + "\n   무기 " + _0x406130.units.weapons.length + ": " + j(_0x406130.units.weapons, !0) : "", _0x5ab51e = _0x4ae7b2[_0x39d55f + 1]?.snap, _0x580f44 = _0x5ab51e ? st(_0x406130, _0x5ab51e) : "";
    return [_0x50828e, _0x580f44 ? "   ▶ 직전 대비: " + _0x580f44 : _0x5ab51e ? "   ▶ 직전 대비: 변화 없음" : "", _0x1fda44, _0x321878, _0x1e8b48, _0x5a56bb].filter(Boolean).join("\n");
  });
  return _0x186c12 + " 장부 " + _0x4ae7b2.length + "줄 (새것부터" + (_0x4ae7b2.length > _0x4476f8 ? ", 최근 " + _0x4476f8 + "줄만" : "") + "):\n" + _0x12ecf8.join("\n");
}
const it = "\n.pact-admin{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(460px,92vw);max-height:92vh;max-height:90dvh;overflow-y:auto;\n  touch-action:pan-y;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;padding:16px 18px;box-sizing:border-box;\n  background:rgba(14,10,24,.96);border:2px solid #ff6080;color:#e0d8f0;font-family:\"Noto Sans KR\",\"Malgun Gothic\",sans-serif;font-size:13px;z-index:10}\n.pact-admin h3{margin:0 0 8px;font-size:16px;color:#ff8090}\n.pact-admin .me{font-size:11px;color:#a8a0c0;word-break:break-all;margin-bottom:10px}\n.pact-admin input[type=text]{box-sizing:border-box;padding:7px 8px;background:#0a0812;color:#fff;border:1px solid #4a3a6a;font:inherit}\n.pact-admin button{padding:7px 12px;background:#3a2a5a;color:#ffe0a0;border:1px solid #c0a060;font:inherit;cursor:pointer}\n.pact-admin button.red{background:#5a1a2a;border-color:#ff6080;color:#fff}\n.pact-admin .row{display:flex;gap:6px;margin:6px 0}\n.pact-admin .info{margin:10px 0;padding:8px;background:#0a0812;border:1px solid #3a2e52;font-size:12px;line-height:1.6;white-space:pre-line;min-height:20px}\n.pact-admin label.act{display:block;margin:3px 0;cursor:pointer}\n.pact-admin label.act small{color:#8a8098}\n.pact-admin .msg{min-height:18px;margin-top:8px;font-size:12px}\n.pact-admin .gift{margin-top:12px;padding-top:10px;border-top:1px solid #6a5020}\n.pact-admin .gift h4{margin:0 0 6px;color:#ffd060;font-size:14px}\n.pact-admin .gift label{font-size:11px;color:#a8a0c0;display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}\n.pact-admin .gift input[type=number],.pact-admin select{box-sizing:border-box;width:100%;padding:6px;background:#0a0812;color:#fff;border:1px solid #4a3a6a;font:inherit;font-size:12px}\n.pact-admin input[type=date]{box-sizing:border-box;width:100%;padding:6px 8px;background:#0a0812;color:#fff;border:1px solid #4a3a6a;font:inherit;color-scheme:dark}\n.pact-admin .glist{font-size:12px;line-height:1.7}\n.pact-admin .glist span{display:inline-block;margin:2px 4px 2px 0;padding:1px 6px;background:#2a2040;border:1px solid #4a3a6a;cursor:pointer}\n.pact-admin button.gold{background:#5a4010;border-color:#ffd060;color:#fff}\n";
class lt {
  constructor(_0x3742ed) {
    this.back = _0x3742ed;
  }
  root = null;
  target = null;
  busy = !1;
  gChars = {};
  flags = [];
  gWeps = {};
  enter() {
    if (!document.getElementById("pact-admin-css")) {
      const _0x4368e6 = document.createElement("style");
      (_0x4368e6.id = "pact-admin-css", _0x4368e6.textContent = it, document.head.appendChild(_0x4368e6));
    }
    const _0x3a4828 = accountStore.session, _0x1e8046 = document.createElement("div");
    (_0x1e8046.className = "pact-admin", _0x1e8046.innerHTML = "\n      <h3>관리자 — 계정 제재 · 보급</h3>\n      <div class=\"me\"></div>\n      <div class=\"row\"><input type=\"text\" name=\"id\" placeholder=\"대상 아이디\" maxlength=\"16\" style=\"flex:1\" spellcheck=\"false\" autocapitalize=\"off\"><button type=\"button\" data-a=\"find\">찾기</button><button type=\"button\" data-a=\"dlist\">D 계정 목록</button></div>\n      <div class=\"row\"><button type=\"button\" class=\"red\" data-a=\"flags\">의심 알림</button><button type=\"button\" data-a=\"ledger\">대상 장부</button><button type=\"button\" data-a=\"clearflags\">표시된 알림 지우기</button></div>\n      <div class=\"info\">아이디를 입력하고 찾기를 누르세요.</div>\n      <div class=\"acts\">" + runtime_Hf.map(_0x544a6e => "<label class=\"act\"><input type=\"checkbox\" value=\"" + _0x544a6e.act + "\"> " + _0x544a6e.label + " <small>— " + _0x544a6e.desc + "</small></label>").join("") + "</div>\n      <div class=\"row\"><input type=\"text\" name=\"reason\" placeholder=\"사유 (대상에게 보임)\" maxlength=\"80\" style=\"flex:1\"></div>\n      <div class=\"row\"><button type=\"button\" class=\"red\" data-a=\"issue\">제재 내리기</button><button type=\"button\" data-a=\"lift\">정지·랭킹 제외 해제</button><button type=\"button\" data-a=\"close\" style=\"margin-left:auto\">닫기</button></div>\n      <div class=\"gift\">\n        <h4>보급 (진행도 복구 · 보상 지급)</h4>\n        <div class=\"row\">" + [["stones", "영혼석"], ["crystals", "영혼 결정"], ["awShards", "각성 파편"], ["compass", "별의 나침반"]].map(([_0x1fd188, _0x327cb9]) => "<label>" + _0x327cb9 + "<input type=\"number\" min=\"0\" name=\"g-" + _0x1fd188 + "\" value=\"0\"></label>").join("") + "</div>\n        <div class=\"row\">" + [1, 2, 3, 4].map(_0x4a31ee => "<label>정수 " + _0x4a31ee + "권<input type=\"number\" min=\"0\" name=\"g-mat" + (_0x4a31ee - 1) + "\" value=\"0\"></label>").join("") + "</div>\n        <div class=\"row\"><label style=\"flex:3\">영웅<select name=\"g-char\">" + [...CHARACTER_LIST].sort((_0x45a956, _0xad832e) => _0xad832e.rarity - _0x45a956.rarity).map(_0x2ae5fa => "<option value=\"" + _0x2ae5fa.id + "\">★" + _0x2ae5fa.rarity + " " + _0x2ae5fa.name + "</option>").join("") + "</select></label><label>Lv<input type=\"number\" name=\"g-clv\" min=\"1\" max=\"" + data_G0 + "\" value=\"1\"></label><label>각성<input type=\"number\" name=\"g-caw\" min=\"0\" max=\"" + AWAKENING_MAX + "\" value=\"0\"></label><button type=\"button\" data-a=\"g-addchar\" style=\"align-self:flex-end\">추가</button></div>\n        <div class=\"row\"><label style=\"flex:3\">무기<select name=\"g-wep\">" + [...data_ve].sort((_0x1997b2, _0x59a9a3) => _0x59a9a3.rarity - _0x1997b2.rarity).map(_0x3e9a23 => "<option value=\"" + _0x3e9a23.id + "\">★" + _0x3e9a23.rarity + " " + _0x3e9a23.name + "</option>").join("") + "</select></label><label>재련<input type=\"number\" name=\"g-wrf\" min=\"1\" max=\"" + data_yr + "\" value=\"1\"></label><label>강화<input type=\"number\" name=\"g-wen\" min=\"0\" max=\"" + data_Ne + "\" value=\"0\"></label><button type=\"button\" data-a=\"g-addwep\" style=\"align-self:flex-end\">추가</button></div>\n        <div class=\"row\"><label>스토리 해금<select name=\"g-story\"><option value=\"0\">그대로</option>" + STORIES.map(_0x5cb2aa => "<option value=\"" + _0x5cb2aa.id + "\">" + data_qa(_0x5cb2aa.id) + "까지</option>").join("") + "</select></label></div>\n        <div class=\"glist\"></div>\n        <div class=\"row\"><input type=\"text\" name=\"g-msg\" placeholder=\"대상에게 보일 메시지 (예: 진행도 복구)\" maxlength=\"80\" style=\"flex:1\"><button type=\"button\" class=\"gold\" data-a=\"gift\">보급 보내기</button></div>\n      </div>\n      <div class=\"gift\">\n        <h4>쿠폰 만들기 (모든 플레이어가 계정당 한 번 · 설정 → 쿠폰 코드 입력)</h4>\n        <div class=\"row\"><label style=\"flex:2\">코드 (영문·숫자 4~24자)<input type=\"text\" name=\"c-code\" maxlength=\"24\" spellcheck=\"false\" autocapitalize=\"characters\"></label><label>기한 (비우면 없음)<input type=\"date\" name=\"c-until\"></label></div>\n        <div class=\"row\">" + [["stones", "영혼석"], ["crystals", "영혼 결정"], ["compass", "별의 나침반"], ["awShards", "각성 파편"]].map(([_0x35aa7c, _0x1544e7]) => "<label>" + _0x1544e7 + "<input type=\"number\" min=\"0\" name=\"c-" + _0x35aa7c + "\" value=\"0\"></label>").join("") + "</div>\n        <div class=\"row\"><label style=\"flex:1\">영웅<select name=\"c-char\"><option value=\"\">없음</option>" + [...CHARACTER_LIST].sort((_0x51f7f5, _0x2c47df) => _0x2c47df.rarity - _0x51f7f5.rarity).map(_0x2e8d6d => "<option value=\"" + _0x2e8d6d.id + "\">★" + _0x2e8d6d.rarity + " " + _0x2e8d6d.name + "</option>").join("") + "</select></label><label style=\"flex:1\">무기<select name=\"c-wep\"><option value=\"\">없음</option>" + [...data_ve].sort((_0xc81c66, _0x211ad4) => _0x211ad4.rarity - _0xc81c66.rarity).map(_0x4bec9f => "<option value=\"" + _0x4bec9f.id + "\">★" + _0x4bec9f.rarity + " " + _0x4bec9f.name + "</option>").join("") + "</select></label></div>\n        <div class=\"row\"><input type=\"text\" name=\"c-desc\" placeholder=\"받을 때 보일 설명 (비우면 보상 내용으로)\" maxlength=\"60\" style=\"flex:1\"><button type=\"button\" class=\"gold\" data-a=\"c-make\">쿠폰 만들기</button><button type=\"button\" data-a=\"c-list\">쿠폰 목록</button></div>\n        <div class=\"clist glist\"></div>\n      </div>\n      <div class=\"msg\"></div>", document.body.appendChild(_0x1e8046), this.root = _0x1e8046);
    const _0x53e928 = _0x1e8046.querySelector(".me");
    (_0x53e928.textContent = _0x3a4828?.kind === "firebase" ? "내 계정: " + _0x3a4828.id + " · UID " + _0x3a4828.uid + " — 관리자 확인 중…" : "온라인 계정으로 로그인해야 쓸 수 있습니다", _0x3a4828?.kind === "firebase" && runtime_Jf().then(_0x30b21e => {
      (_0x53e928.textContent = "내 계정: " + _0x3a4828.id + " · UID " + _0x3a4828.uid + " — " + (_0x30b21e ? "관리자 ✔" : "관리자 아님: Firebase 콘솔 Firestore에 admins 컬렉션 / 문서 ID = 위 UID 로 빈 문서를 만들면 관리자가 됩니다"), _0x53e928.style.color = _0x30b21e ? "#a0ffa0" : "#ffb080");
    }), _0x1e8046.querySelectorAll("button[data-a]").forEach(_0x28c91c => _0x28c91c.onclick = () => void this.act(_0x28c91c.dataset.a)), _0x1e8046.querySelector("input[name=id]").addEventListener("keydown", _0x11e5f0 => {
      _0x11e5f0.key === "Enter" && this.act("find");
    }), _0x1e8046.addEventListener("keydown", _0x2ff079 => _0x2ff079.stopPropagation()), _0x1e8046.addEventListener("wheel", _0x36bc56 => _0x36bc56.stopPropagation(), {
      "passive": !0
    }));
    let _0x1097f0 = null, _0x16cf99 = 0;
    (_0x1e8046.addEventListener("pointerdown", _0x5d3ba2 => {
      const _0x23018c = _0x5d3ba2.target;
      _0x5d3ba2.pointerType === "mouse" || (/^(INPUT|SELECT|BUTTON|LABEL|TEXTAREA|OPTION)$/).test(_0x23018c.tagName) || (_0x1097f0 = _0x5d3ba2.clientY, _0x16cf99 = _0x1e8046.scrollTop);
    }), _0x1e8046.addEventListener("pointermove", _0x450d25 => {
      _0x1097f0 !== null && (_0x1e8046.scrollTop = _0x16cf99 - (_0x450d25.clientY - _0x1097f0));
    }));
    const _0x38a3b0 = () => {
      _0x1097f0 = null;
    };
    (_0x1e8046.addEventListener("pointerup", _0x38a3b0), _0x1e8046.addEventListener("pointercancel", _0x38a3b0));
  }
  leave() {
    (this.root?.remove(), this.root = null);
  }
  msg(_0x572b02, _0x4b832c = "#ffe0a0") {
    const _0x3b34f0 = this.root?.querySelector(".msg");
    _0x3b34f0 && (_0x3b34f0.textContent = _0x572b02, _0x3b34f0.style.color = _0x4b832c);
  }
  showTarget() {
    const _0x56c49a = this.root?.querySelector(".info"), _0xd45ce8 = this.target;
    if (!_0x56c49a) return;
    if (!_0xd45ce8) {
      _0x56c49a.textContent = "계정을 찾지 못했습니다 (저장·랭킹 기록이 없는 아이디).";
      return;
    }
    const _0x2599d5 = _0xd45ce8.save, _0x15e15c = _0xd45ce8.sanction;
    _0x56c49a.textContent = ["아이디 " + _0xd45ce8.id + (_0x2599d5?.dbg ? " D" : "") + " · UID " + _0xd45ce8.uid, _0x2599d5 ? "영혼석 " + _0x2599d5.stones + " · 영혼 결정 " + _0x2599d5.crystals + " · 나침반 " + _0x2599d5.compass + " · 영웅 " + Object.keys(_0x2599d5.chars).length + " · 무기 " + Object.keys(_0x2599d5.weapons).length + " · 스토리 " + _0x2599d5.storyMax : "클라우드 저장 없음", _0xd45ce8.updated ? "마지막 저장 " + new Date(_0xd45ce8.updated).toLocaleString() : "", _0x2599d5 ? "보상 감시 봉인: " + ({
      "ok": "정상",
      "none": "없음 (업데이트 전 저장)",
      "bad": "불일치 — 게임 밖에서 고친 저장"
    })[runtime_an(_0x2599d5)] : "", _0x15e15c ? "마지막 기록 #" + _0x15e15c.n + ": " + (_0x15e15c.acts.map(_0x940fd0 => _0x940fd0 === "gift" ? "보급(" + runtime_lc(_0x15e15c.gift ?? ({})) + ")" : runtime_Hf.find(_0x16d941 => _0x16d941.act === _0x940fd0)?.label ?? _0x940fd0).join(", ") || "—") + (_0x15e15c.block ? " · 정지 중" : "") + (_0x15e15c.rankBan ? " · 랭킹 제외 중" : "") + (_0x15e15c.reason ? " · 사유 " + _0x15e15c.reason : "") : "제재 기록 없음"].filter(Boolean).join("\n");
  }
  async showCoupons() {
    const _0x25102c = this.root?.querySelector(".clist");
    if (!_0x25102c) return;
    const _0x3260e4 = await runtime_Ud();
    _0x25102c.textContent = _0x3260e4.length ? "" : "만든 쿠폰 없음 (게임에 내장된 쿠폰은 Gift.md 참고)";
    for (const _0x39ce15 of _0x3260e4) {
      const _0x3f2161 = document.createElement("span");
      (_0x3f2161.textContent = _0x39ce15.code + " — " + _0x39ce15.def.desc + (_0x39ce15.def.until ? " (~" + _0x39ce15.def.until + ")" : "") + " ✕", _0x3f2161.title = "누르면 지운다", _0x3f2161.onclick = () => void (async () => {
        if (window.confirm("쿠폰 " + _0x39ce15.code + "을(를) 지웁니다. 이미 받은 계정의 보상은 그대로입니다.")) try {
          (await runtime_Ld(_0x39ce15.key), this.msg("쿠폰 " + _0x39ce15.code + " 지움", "#a0ffa0"), await this.showCoupons());
        } catch (_0x5cca35) {
          this.msg(_0x5cca35 instanceof Error ? _0x5cca35.message : "오류", "#ff9090");
        }
      })(), _0x25102c.appendChild(_0x3f2161));
    }
  }
  readGift() {
    const _0x2d4776 = _0x38b51c => Number(this.root.querySelector("[name=" + _0x38b51c + "]").value) || 0;
    return {
      "stones": _0x2d4776("g-stones"),
      "crystals": _0x2d4776("g-crystals"),
      "awShards": _0x2d4776("g-awShards"),
      "compass": _0x2d4776("g-compass"),
      "mats": [0, 1, 2, 3].map(_0x3bdaa7 => _0x2d4776("g-mat" + _0x3bdaa7)),
      "chars": {
        ...this.gChars
      },
      "weapons": {
        ...this.gWeps
      },
      "storyMax": _0x2d4776("g-story")
    };
  }
  showGiftList() {
    const _0xa8fb93 = this.root?.querySelector(".glist");
    if (!_0xa8fb93) return;
    _0xa8fb93.textContent = "";
    const _0x2110b4 = (_0x596a1d, _0x1db69e) => {
      const _0x55b188 = document.createElement("span");
      (_0x55b188.textContent = _0x596a1d + " ✕", _0x55b188.onclick = () => {
        (_0x1db69e(), this.showGiftList());
      }, _0xa8fb93.appendChild(_0x55b188));
    };
    for (const _0x3c8ca0 of Object.keys(this.gChars)) _0x2110b4(runtime_lc({
      "chars": {
        [_0x3c8ca0]: this.gChars[_0x3c8ca0]
      }
    }), () => delete this.gChars[_0x3c8ca0]);
    for (const _0x36da53 of Object.keys(this.gWeps)) _0x2110b4(runtime_lc({
      "weapons": {
        [_0x36da53]: this.gWeps[_0x36da53]
      }
    }), () => delete this.gWeps[_0x36da53]);
  }
  async act(_0x196051) {
    if (_0x196051 === "close") {
      game.go(this.back, !1);
      return;
    }
    if (!(this.busy || !this.root)) {
      this.busy = !0;
      try {
        if (_0x196051 === "find") {
          const _0x4c6fc4 = this.root.querySelector("input[name=id]").value;
          if (!_0x4c6fc4.trim()) return this.msg("아이디를 입력하세요", "#ff9090");
          (this.msg("찾는 중…"), this.target = await runtime_Od(_0x4c6fc4), this.showTarget(), this.msg(this.target ? "찾음" : "없음", this.target ? "#a0ffa0" : "#ff9090"));
        } else {
          if (_0x196051 === "dlist") {
            this.msg("불러오는 중…");
            const _0x184747 = await runtime_jd(), _0x26e9c9 = this.root.querySelector(".info");
            (_0x26e9c9.textContent = _0x184747.length ? "D 표시 계정 " + _0x184747.length + "명 (랭킹 기록이 있는 계정만) — 관계자가 아니면 디버그 진입법 유출 의심:\n" + _0x184747.join(", ") : "D 표시 계정 없음 (랭킹 기록 기준)", this.target = null, this.msg("완료", "#a0ffa0"));
          } else {
            if (_0x196051 === "flags") {
              (this.msg("불러오는 중…"), this.flags = await runtime_zd(50));
              const _0xa3ac82 = this.root.querySelector(".info");
              (_0xa3ac82.textContent = this.flags.length ? "의심 알림 " + this.flags.length + "건 (새것부터) — 아이디로 찾은 뒤 「대상 장부」로 앞뒤 기록을 확인하세요:\n" + this.flags.map(_0x5b2c5f => "· " + new Date(_0x5b2c5f.at).toLocaleString() + " " + _0x5b2c5f.id + " — " + (runtime_Rd[_0x5b2c5f.kind] ?? _0x5b2c5f.kind) + (_0x5b2c5f.detail ? ": " + _0x5b2c5f.detail : "")).join("\n") : "의심 알림 없음", this.target = null, this.msg("완료", "#a0ffa0"));
            } else {
              if (_0x196051 === "clearflags") {
                if (!this.flags.length) return this.msg("먼저 「의심 알림」을 불러오세요", "#ff9090");
                if (!window.confirm("표시된 알림 " + this.flags.length + "건을 확인 처리(삭제)합니다. 장부 기록은 남습니다.")) return;
                for (const _0x5c8a9c of this.flags) await runtime_Ed(_0x5c8a9c.docId);
                (this.flags = [], this.root.querySelector(".info").textContent = "알림을 지웠습니다.", this.msg("완료", "#a0ffa0"));
              } else {
                if (_0x196051 === "ledger") {
                  if (!this.target) return this.msg("먼저 대상을 찾으세요", "#ff9090");
                  this.msg("불러오는 중…");
                  const _0x260a68 = await runtime_Id(this.target.uid), _0x52c7e9 = this.root.querySelector(".info");
                  (_0x52c7e9.textContent = nt(this.target.id, _0x260a68), this.msg("완료", "#a0ffa0"));
                } else {
                  if (_0x196051 === "c-make") {
                    const _0x1799a6 = _0x15b8c8 => this.root.querySelector("[name=" + _0x15b8c8 + "]").value.trim(), _0x212461 = _0x52cfc0 => Math.max(0, Math.floor(Number(_0x1799a6(_0x52cfc0)) || 0)), _0x10bc94 = runtime_Hl({
                      "stones": _0x212461("c-stones"),
                      "crystals": _0x212461("c-crystals"),
                      "compass": _0x212461("c-compass"),
                      "awShards": _0x212461("c-awShards"),
                      "chars": _0x1799a6("c-char") ? [_0x1799a6("c-char")] : [],
                      "weapons": _0x1799a6("c-wep") ? [_0x1799a6("c-wep")] : []
                    }), _0x105faf = (_0x2e9e81, _0x195be1) => (_0x195be1 ? WEAPONS[_0x2e9e81] : CHARACTERS[_0x2e9e81])?.name ?? _0x2e9e81, _0x35d33b = _0x1799a6("c-desc") || data_oo(_0x10bc94, _0x105faf), _0x1cb977 = data_ta(_0x1799a6("c-code"));
                    if (!window.confirm("쿠폰 " + _0x1cb977 + "\n보상: " + data_oo(_0x10bc94, _0x105faf) + "\n설명: " + _0x35d33b + "\n기한: " + (_0x1799a6("c-until") || "없음") + "\n만들까요?")) return;
                    (this.msg("만드는 중…"), await runtime_Jd(_0x1cb977, _0x10bc94, _0x35d33b, _0x1799a6("c-until")), runtime_w.play("confirm"), this.root.querySelector("[name=c-code]").value = "", this.msg("쿠폰 " + _0x1cb977 + " 을(를) 만들었습니다 — 바로 사용할 수 있습니다", "#a0ffa0"), await this.showCoupons());
                  } else {
                    if (_0x196051 === "c-list") (this.msg("불러오는 중…"), await this.showCoupons(), this.msg("완료", "#a0ffa0")); else {
                      if (_0x196051 === "g-addchar" || _0x196051 === "g-addwep") {
                        const _0x2d0095 = _0x151ac6 => this.root.querySelector("[name=" + _0x151ac6 + "]").value;
                        (_0x196051 === "g-addchar" ? this.gChars[_0x2d0095("g-char")] = {
                          "lv": Number(_0x2d0095("g-clv")) || 1,
                          "aw": Number(_0x2d0095("g-caw")) || 0
                        } : this.gWeps[_0x2d0095("g-wep")] = {
                          "rf": Number(_0x2d0095("g-wrf")) || 1,
                          "en": Number(_0x2d0095("g-wen")) || 0
                        }, this.showGiftList());
                      } else {
                        if (_0x196051 === "gift") {
                          if (!this.target) return this.msg("먼저 대상을 찾으세요", "#ff9090");
                          const _0xdc155a = this.readGift(), _0x46ab9a = runtime_lc(_0xdc155a);
                          if (_0x46ab9a === "없음") return this.msg("보급할 것을 넣으세요", "#ff9090");
                          if (!window.confirm(this.target.id + "에게 보급합니다:\n" + _0x46ab9a + "\n계속할까요?")) return;
                          (this.msg("처리 중…"), await runtime_Wd(this.target, ["gift"], this.root.querySelector("input[name=g-msg]").value.trim(), _0xdc155a), runtime_w.play("confirm"), this.gChars = {}, this.gWeps = {}, this.showGiftList(), this.showTarget(), this.msg("보급 완료: " + _0x46ab9a + " — 대상이 접속해 있으면 5분 안에, 아니면 다음 접속 때 들어갑니다", "#a0ffa0"));
                        } else {
                          if (_0x196051 === "issue") {
                            if (!this.target) return this.msg("먼저 대상을 찾으세요", "#ff9090");
                            const _0x498a7e = [...this.root.querySelectorAll(".acts input:checked")].map(_0x2aa2cf => _0x2aa2cf.value);
                            if (!_0x498a7e.length) return this.msg("제재 종류를 고르세요", "#ff9090");
                            const _0x6b6c91 = this.root.querySelector("input[name=reason]").value.trim(), _0x1942f9 = _0x498a7e.map(_0x13cf78 => runtime_Hf.find(_0x3a275b => _0x3a275b.act === _0x13cf78).label).join(", ");
                            if (!window.confirm(this.target.id + "에게 「" + _0x1942f9 + "」 제재를 내립니다. 초기화는 되돌릴 수 없습니다. 계속할까요?")) return;
                            (this.msg("처리 중…"), await runtime_Wd(this.target, _0x498a7e, _0x6b6c91), runtime_w.play("confirm"), this.showTarget(), this.msg("제재 완료 — 대상이 접속해 있으면 5분 안에, 아니면 다음 접속 때 안내됩니다", "#a0ffa0"));
                          } else {
                            if (_0x196051 === "lift") {
                              if (!this.target?.sanction) return this.msg("해제할 제재가 없습니다", "#ff9090");
                              (await runtime_Hd(this.target), this.showTarget(), this.msg("정지·랭킹 제외를 해제했습니다 (초기화된 기록은 돌아오지 않음)", "#a0ffa0"));
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } catch (_0x1e4337) {
        (runtime_w.play("error"), this.msg(_0x1e4337 instanceof runtime_V0 || _0x1e4337 instanceof runtime_is ? _0x1e4337.message : "알 수 없는 오류", "#ff9090"));
      } finally {
        this.busy = !1;
      }
    }
  }
  update() {
    game.input.menu("back") && game.go(this.back, !1);
  }
  world(_0xcd465c) {
    (_0xcd465c.fillStyle = "#07060b", _0xcd465c.fillRect(0, 0, 480, 270));
  }
  ui(_0x8f502e) {
    drawText(_0x8f502e, "ESC: 닫기", 240, 258, {
      "size": 6,
      "align": "center",
      "color": "#6a6078"
    });
  }
}
export {lt as AdminScene};
