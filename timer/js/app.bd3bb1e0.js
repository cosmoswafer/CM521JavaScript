(function(){"use strict";var t={8385:function(t,i,e){var n=e(9242),r=e(3396),a=e(7139);const o={id:"app"},s={id:"stopwatch"},u={id:"stopwatch-controls"},l=(0,r._)("span",{id:"brand"},"Stopwatch",-1),p={id:"stopwatch-records"},h={key:0};function m(t,i,e,n,m,c){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",s,(0,a.zw)(c.timer_text),1),(0,r._)("div",u,[(0,r._)("button",{onClick:i[0]||(i[0]=t=>m.run_timer?c.addLap():c.resetTimer()),id:"reset-and-lap"},(0,a.zw)(m.run_timer?"Lap":"Reset"),1),l,(0,r._)("button",{onClick:i[1]||(i[1]=t=>m.run_timer?c.stopTimer():c.startTimer()),id:"start-and-stop",class:(0,a.C_)({red:m.run_timer})},(0,a.zw)(m.run_timer?"Stop":"Start"),3)]),(0,r._)("ul",p,[m.lap_time?((0,r.wg)(),(0,r.iD)("li",h,[(0,r._)("span",null,"Lap "+(0,a.zw)(m.laps.length+1),1),(0,r._)("span",null,(0,a.zw)(c.lap_text),1)])):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.laps,((t,i)=>((0,r.wg)(),(0,r.iD)("li",{key:i,class:(0,a.C_)({red:t.time===this.lap_hi,green:t.time===this.lap_low})},[(0,r._)("span",null,"Lap "+(0,a.zw)(m.laps.length-i),1),(0,r._)("span",null,(0,a.zw)(t.text),1)],2)))),128))])])}var c={name:"iOS Timer App",data(){return{time_value:0,lap_time:0,run_timer:!1,begin_time:0,lap_begin:0,lap_hi:0,lap_low:999999999,laps:[]}},computed:{timer_text(){return this.ts2Timer(this.time_value)},lap_text(){return this.ts2Timer(this.lap_time)}},methods:{ts2Timer:function(t){const i=Math.floor(t%1e3/10),e=Math.floor(t/1e3)%60,n=Math.floor(t/1e3/60);return`${String(n).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(i).padStart(2,"0")}`},timerRafInit:function(t){this.begin_time=t-this.time_value,this.lap_begin=t-this.lap_time,requestAnimationFrame(this.timerRaf)},timerRaf:function(t){this.time_value=t-this.begin_time,this.lap_time=t-this.lap_begin,this.run_timer&&requestAnimationFrame(this.timerRaf)},startTimer:function(){this.run_timer=!0,requestAnimationFrame(this.timerRafInit)},stopTimer:function(){this.run_timer=!1},resetTimer:function(){this.time_value=0,this.laps=[],this.lap_time=0,this.lap_hi=0,this.lap_low=999999999},addLap:function(){const t=this.lap_time;this.lap_begin+=this.lap_time,t>this.lap_hi&&(this.lap_hi=t),t<this.lap_low&&(this.lap_low=t),this.laps.unshift({text:this.ts2Timer(t),time:t})}}},f=e(89);const _=(0,f.Z)(c,[["render",m]]);var d=_;(0,n.ri)(d).mount("#app")}},i={};function e(n){var r=i[n];if(void 0!==r)return r.exports;var a=i[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(i,n,r,a){if(!n){var o=1/0;for(p=0;p<t.length;p++){n=t[p][0],r=t[p][1],a=t[p][2];for(var s=!0,u=0;u<n.length;u++)(!1&a||o>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[u])}))?n.splice(u--,1):(s=!1,a<o&&(o=a));if(s){t.splice(p--,1);var l=r();void 0!==l&&(i=l)}}return i}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[n,r,a]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={143:0};e.O.j=function(i){return 0===t[i]};var i=function(i,n){var r,a,o=n[0],s=n[1],u=n[2],l=0;if(o.some((function(i){return 0!==t[i]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(u)var p=u(e)}for(i&&i(n);l<o.length;l++)a=o[l],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(p)},n=self["webpackChunktimer"]=self["webpackChunktimer"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(8385)}));n=e.O(n)})();
//# sourceMappingURL=app.bd3bb1e0.js.map