(function(){"use strict";var n={8208:function(n,r,o){var t=o(9242),e=o(3396);const i={class:"app-root"},s=["src"],c=["src"],a={class:"actions"};function u(n,r,o,t,u,l){return(0,e.wg)(),(0,e.iD)("div",i,[(0,e._)("img",{onClick:r[0]||(r[0]=(...n)=>l.resetGame&&l.resetGame(...n)),src:u.botimg},null,8,s),(0,e._)("img",{onClick:r[1]||(r[1]=(...n)=>l.resetGame&&l.resetGame(...n)),src:u.youimg},null,8,c),(0,e._)("div",a,[(0,e._)("img",{onClick:r[2]||(r[2]=n=>l.playGame("rock")),src:"images/rock-btn.png"}),(0,e._)("img",{onClick:r[3]||(r[3]=n=>l.playGame("scissor")),src:"images/scissor-btn.png"}),(0,e._)("img",{onClick:r[4]||(r[4]=n=>l.playGame("paper")),src:"images/paper-btn.png"})])])}var l={name:"App",data(){return{botaction:"ROCK",youimg:"images/Placeholder-You.png",botimg:"images/Placeholder-Bot.png"}},methods:{botAction:function(){const n=["rock","paper","scissor"],r=Math.floor(3*Math.random());return n[r]},gameResult:function(n,r){return n===r?["draw","draw"]:"paper"===n&&"rock"===r||"rock"===n&&"scissor"===r||"scissor"===n&&"paper"===r?["win","lose"]:["lose","win"]},playGame:function(n){const r=this.botAction(),[o,t]=this.gameResult(n,r);this.youimg=`images/${n}-${o}.png`,this.botimg=`images/${r}-${t}.png`},resetGame:function(){this.youimg="images/Placeholder-You.png",this.botimg="images/Placeholder-Bot.png"}}},p=o(89);const f=(0,p.Z)(l,[["render",u]]);var g=f;(0,t.ri)(g).mount("#app")}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return n[t](i,i.exports,o),i.exports}o.m=n,function(){var n=[];o.O=function(r,t,e,i){if(!t){var s=1/0;for(l=0;l<n.length;l++){t=n[l][0],e=n[l][1],i=n[l][2];for(var c=!0,a=0;a<t.length;a++)(!1&i||s>=i)&&Object.keys(o.O).every((function(n){return o.O[n](t[a])}))?t.splice(a--,1):(c=!1,i<s&&(s=i));if(c){n.splice(l--,1);var u=e();void 0!==u&&(r=u)}}return r}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[t,e,i]}}(),function(){o.n=function(n){var r=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(r,{a:r}),r}}(),function(){o.d=function(n,r){for(var t in r)o.o(r,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)}}(),function(){var n={143:0};o.O.j=function(r){return 0===n[r]};var r=function(r,t){var e,i,s=t[0],c=t[1],a=t[2],u=0;if(s.some((function(r){return 0!==n[r]}))){for(e in c)o.o(c,e)&&(o.m[e]=c[e]);if(a)var l=a(o)}for(r&&r(t);u<s.length;u++)i=s[u],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(l)},t=self["webpackChunkrockscissorpaper"]=self["webpackChunkrockscissorpaper"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(8208)}));t=o.O(t)})();
//# sourceMappingURL=app.a998d9aa.js.map