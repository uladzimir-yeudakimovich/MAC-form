!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=function(e){return e.length>=3&&":"!=e[2]&&(e=`${e.slice(0,2)}:${e.slice(2)}`),e.length>=6&&":"!=e[5]&&(e=`${e.slice(0,5)}:${e.slice(5)}`),e.length>=9&&":"!=e[8]&&(e=`${e.slice(0,8)}:${e.slice(8)}`),e.length>=12&&":"!=e[11]&&(e=`${e.slice(0,11)}:${e.slice(11)}`),e.length>=15&&":"!=e[14]&&(e=`${e.slice(0,14)}:${e.slice(14)}`),e}},function(e,t){e.exports=function(e){let t={"А":"A","В":"B","С":"C","Е":"E"};return t[e]?t[e]:""}},function(e,t,n){const r=n(1),c=n(0);e.exports=function(e){return e=(e=(e=e.toUpperCase()).replace(/[^A-FА-С0-9]/g,"")).replace(/[А-Я]/g,r),(e=c(e)).length>=17&&(e=e.slice(0,17)),e}},function(e,t,n){const r=n(2),c=document.getElementById("macForm");c&&c.addEventListener("keyup",function(e){const t=e.target;t.value=r(t.value)})}]);