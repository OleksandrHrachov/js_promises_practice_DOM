parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"warning",s=arguments.length>1?arguments[1]:void 0,n=document.querySelector("body"),t=document.createElement("div");t.classList.add(e),t.setAttribute("data-qa","notification"),t.innerText=s,n.append(t)}var s=new Promise(function(e,s){document.addEventListener("click",function(){e({messageType:"success",message:"First promise was resolved"})}),setTimeout(function(){s(new Error("First promise was rejected"))},3e3)});s.then(function(s){e(s.messageType,s.message)},function(s){e(s.messageType,s.message)});var n=new Promise(function(e,s){document.addEventListener("click",function(){e({messageType:"success",message:"Second promise was resolved"})}),document.addEventListener("contextmenu",function(s){s.preventDefault(),e({messageType:"success",message:"Second promise was resolved"})})});n.then(function(s){e(s.messageType,s.message)});var t=new Promise(function(e,s){var n=!1,t=!1;document.addEventListener("mousedown",function(s){0===s.button&&(n=!0),2===s.button&&(t=!0),!0===n&&!0===t&&e({messageType:"success",message:"Third promise was resolved"})})});t.then(function(s){e(s.messageType,s.message)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.0731b3b6.js.map