parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../fonts/open-sans-condensed.light.ttf":[["open-sans-condensed.light.dcb54370.ttf","wTox"],"wTox"]}],"wzuc":[function(require,module,exports) {
const e=document.getElementsByClassName("slider__slide"),t=document.querySelector(".slider__arrow_left"),l=document.querySelector(".slider__arrow_right");let n=1;function r(e){e.preventDefault(),c(n+=1)}function s(e){e.preventDefault(),c(n-=1)}function c(t){let l;for(t>e.length&&(n=1),t<1&&(n=e.length),l=0;l<e.length;l++)e[l].style.display="none";e[n-1].style.display="block"}t.addEventListener("click",s),l.addEventListener("click",r),c(n);const o=setInterval(()=>{c(n+=1)},4e3);
},{}],"RSqK":[function(require,module,exports) {
const e={closeBtn:document.querySelector(".js-modal-close"),openBtn:document.querySelector(".js-modal-open"),modal:document.querySelector(".js-modal"),formEl:document.querySelector(".js-form")};e.openBtn.addEventListener("click",o),e.closeBtn.addEventListener("click",o),e.formEl.addEventListener("submit",l);const t="Поле обязательно для заполнения";function o(){e.formEl.reset(),e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("blocked-body")}function l(e){e.preventDefault();const l=e.target.name,r=e.target.phone,d=e.target.email;return console.log(r.value),0===l.value.trim().length?(l.classList.add("modal__input_error"),void l.setAttribute("placeholder",t)):0===r.value.trim().length?(r.classList.add("modal__input_error"),void r.setAttribute("placeholder",t)):0===d.value.trim().length?(d.classList.add("modal__input_error"),void d.setAttribute("placeholder",t)):void o()}
},{}],"sByI":[function(require,module,exports) {
const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),c=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),document.body.classList.toggle("blocked-body")};t.addEventListener("click",c),n.addEventListener("click",c);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/slider"),require("./js/modal"),require("./js/mobile-menu");
},{"./sass/main.scss":"clu1","./js/slider":"wzuc","./js/modal":"RSqK","./js/mobile-menu":"sByI"}]},{},["Focm"], null)
//# sourceMappingURL=/Art-Sites/src.b4db2398.js.map