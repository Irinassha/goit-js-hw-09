function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},d=t.parcelRequired7c6;null==d&&((d=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var d={id:e,exports:{}};return r[e]=d,t.call(d.exports,d,d.exports),d.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},t.parcelRequired7c6=d);var n=d("7Y9D8");d("iQIUW");const l=document.querySelector("body"),a=document.querySelector("button[data-start]"),i=document.querySelector("button[data-stop]");a.classList.add("btn-color-js"),i.classList.add("btn-color-js");let s=null;a.addEventListener("click",(()=>{a.setAttribute("disabled",!0),i.removeAttribute("disabled"),s=setInterval((()=>{l.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e(n).Notify.success("Start")})),i.addEventListener("click",(()=>{clearInterval(s),a.removeAttribute("disabled"),i.setAttribute("disabled",!0),e(n).Notify.failure("Stop")}));
//# sourceMappingURL=01-color-switcher.7f099edf.js.map
