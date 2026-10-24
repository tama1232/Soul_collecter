import {pixelViewport} from './render-utils.js';
const pt=480,wt=270;
function pa(_0x291348, _0x3937ce) {
  const _0x2ecabc = document.createElement("canvas");
  return (_0x2ecabc.width = _0x291348, _0x2ecabc.height = _0x3937ce, _0x2ecabc);
}
class GameRenderer {
  display;
  d;
  world;
  w;
  top;
  t;
  scale = 2;
  constructor(_0x140730) {
    (this.display = _0x140730, this.d = _0x140730.getContext("2d"), this.world = pa(pt, wt), this.w = this.world.getContext("2d"), this.w.imageSmoothingEnabled = !1, this.top = pa(pt, wt), this.t = this.top.getContext("2d"), this.t.imageSmoothingEnabled = !1, Fe.worldCanvases = [this.world, this.top], this.resize(), window.addEventListener("resize", () => this.resize()), window.addEventListener("orientationchange", () => setTimeout(() => this.resize(), 120)), window.visualViewport?.addEventListener("resize", () => this.resize()));
  }
  resize() {
    const viewport = window.visualViewport;
    const size = pixelViewport(viewport?.width ?? innerWidth, viewport?.height ?? innerHeight, devicePixelRatio, pt, wt);
    this.scale = size.scale;
    if (this.display.width !== size.width) this.display.width = size.width;
    if (this.display.height !== size.height) this.display.height = size.height;
    this.display.style.width = size.cssWidth + "px";
    this.display.style.height = size.cssHeight + "px";
    this.d.imageSmoothingEnabled = false;
  }
  beginFrame() {
    (Fe.tilt = 0, Fe.mirror = 1, this.w.setTransform(1, 0, 0, 1, 0, 0), this.w.globalAlpha = 1, this.w.globalCompositeOperation = "source-over", this.w.fillStyle = "#000", this.w.fillRect(0, 0, pt, wt), this.t.setTransform(1, 0, 0, 1, 0, 0), this.t.globalAlpha = 1, this.t.globalCompositeOperation = "source-over", this.t.clearRect(0, 0, pt, wt));
  }
  tiltT(_0x4b2f53) {
    const _0x140364 = this.display.width / 2, _0x46bec5 = this.display.height / 2;
    Fe.mirror !== 1 && (_0x4b2f53.translate(_0x140364, 0), _0x4b2f53.scale(Fe.mirror, 1), _0x4b2f53.translate(-_0x140364, 0));
    const _0x435d05 = Fe.tilt;
    if (!_0x435d05) return;
    const _0x50c202 = If(_0x435d05);
    (_0x4b2f53.translate(_0x140364, _0x46bec5), _0x4b2f53.rotate(_0x435d05), _0x4b2f53.scale(_0x50c202, _0x50c202), _0x4b2f53.translate(-_0x140364, -_0x46bec5));
  }
  presentTop(_0x4476f1 = 0, _0x10bac2 = 0) {
    const _0x158501 = this.d;
    (_0x158501.save(), _0x158501.setTransform(1, 0, 0, 1, 0, 0), _0x158501.imageSmoothingEnabled = !1, this.tiltT(_0x158501), _0x158501.drawImage(this.top, Math.round(_0x4476f1) * this.scale, Math.round(_0x10bac2) * this.scale, this.display.width, this.display.height), _0x158501.restore());
  }
  present(_0x2c7ed1 = 0, _0x58d802 = 0) {
    const _0x465e27 = this.d;
    (_0x465e27.setTransform(1, 0, 0, 1, 0, 0), _0x465e27.globalAlpha = 1, _0x465e27.globalCompositeOperation = "source-over", _0x465e27.fillStyle = "#000", _0x465e27.fillRect(0, 0, this.display.width, this.display.height), _0x465e27.imageSmoothingEnabled = !1, _0x465e27.save(), this.tiltT(_0x465e27), _0x465e27.drawImage(this.world, Math.round(_0x2c7ed1) * this.scale, Math.round(_0x58d802) * this.scale, this.display.width, this.display.height), _0x465e27.restore(), _0x465e27.setTransform(this.scale, 0, 0, this.scale, 0, 0), _0x465e27.imageSmoothingEnabled = !1);
  }
}
const Fe = {
  "tilt": 0,
  "mirror": 1,
  "worldCanvases": []
}, If = _0x2b2c23 => 1 + Math.abs(Math.sin(_0x2b2c23)) * 1.9;
export {GameRenderer,Fe as stageTransform,pa as createCanvas};
