parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"yG33":[function(require,module,exports) {
var e=document.querySelector(".slide-left"),t=document.querySelector(".slide-right"),c=document.querySelector(".dot-left"),o=document.querySelector(".dot-right"),n=document.querySelector(".slide-container"),l=document.querySelector(".slide1").clientWidth;e.addEventListener("click",function(s){s.preventDefault(),n.style.left=0-l+"px",e.classList.remove("control-active"),t.classList.add("control-active"),c.classList.remove("dot-active"),o.classList.add("dot-active")}),t.addEventListener("click",function(l){l.preventDefault(),n.style.left="0px",e.classList.add("control-active"),t.classList.remove("control-active"),c.classList.add("dot-active"),o.classList.remove("dot-active")});for(var s=document.querySelectorAll(".our_services-block"),i=document.querySelectorAll(".our_services-content"),r=function(e){s[e].onclick=function(){for(var t=0;t<s.length;t++)t===e?(s[t].classList.add("services_block-active"),i[t].classList.remove("block-none")):(s[t].classList.remove("services_block-active"),i[t].classList.add("block-none"))}},a=0;a<s.length;a++)r(a);var d=document.querySelector(".shot_map"),u=document.querySelector(".modal-content-map"),v=u.querySelector(".modal-content-close");d.onclick=function(e){e.preventDefault(),u.classList.remove("block-none")},v.onclick=function(e){e.preventDefault(),u.classList.add("block-none")};var m=document.querySelector(".map_company-btn"),L=document.querySelector(".modal_content--write-us"),k=L.querySelector(".modal-content-close");m.onclick=function(e){e.preventDefault(),L.classList.remove("block-none")},k.onclick=function(e){e.preventDefault(),L.classList.add("block-none")},window.addEventListener("keydown",function(e){27===e.keyCode&&(u.classList.contains("block-none")||u.classList.add("block-none"),L.classList.contains("block-none")||L.classList.add("block-none"))});
},{}]},{},["yG33"], null)
//# sourceMappingURL=/index.map