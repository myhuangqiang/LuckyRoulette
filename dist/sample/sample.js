webpackJsonp([0],[,,function(t,e){function n(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var o=r(a);return[n].concat(a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=d[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));d[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(v)return m;r.parentNode.removeChild(r)}if(b){var o=p++;r=f||(f=a()),e=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function s(t,e){var n=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(14),d={},c=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,m=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var a=l(t,e);return r(a),function(e){for(var n=[],o=0;o<a.length;o++){var i=a[o],s=d[i.id];s.refs--,n.push(s)}e?(a=l(t,e),r(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete d[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,n,r,a,o){var i,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,s=t.default);var l="function"==typeof s?s.options:s;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId=a);var d;if(o?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=d):r&&(d=r),d){var c=l.functional,f=c?l.render:l.beforeCreate;c?(l._injectStyles=d,l.render=function(t,e){return d.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,d):[d]}return{esModule:i,exports:s,options:l}}},,,,,function(t,e,n){t.exports=n(10)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(0),o=r(a),i=n(11),s=r(i);new o.default({el:"#page-sample",render:function(t){return t(s.default)}})},function(t,e,n){"use strict";function r(t){n(12)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(15),o=n.n(a),i=n(22),s=n(4),u=r,l=s(o.a,i.a,!1,u,null,null);e.default=l.exports},function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(3)("8b7fbc32",r,!0)},function(t,e,n){e=t.exports=n(2)(void 0),e.push([t.i,".wrapper{text-align:center}input{width:40px}button,input{font-size:inherit}",""])},function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=o[0],s=o[1],u=o[2],l=o[3],d={id:t+":"+a,css:s,media:u,sourceMap:l};r[i]?r[i].parts.push(d):n.push(r[i]={id:i,parts:[d]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16),a=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={components:{Roulette:a.default},data:function(){return{sample:{state:"static"},roulette:{coverurl:"assets/r.png",pointerurl:"assets/p.png",radius:100,test:!0,datas:[{name:"thanku",degs:[27,87],desc:"谢谢参与"},{name:"ps",degs:[333,387],desc:"特等奖"},{name:"p2",degs:[87,147],desc:"二等奖"},{name:"welcome",degs:[147,207],desc:"欢迎再来"},{name:"p1",degs:[207,274],desc:"一等奖"},{name:"p3",degs:[274,333],desc:"三等奖"}]}}},methods:{clickFun:function(){this.$refs.luckyRoulette.play()},brake:function(t){this.$refs.luckyRoulette.brake(t)},reset:function(){this.$refs.luckyRoulette.reset()},duringHandle:function(t){this.sample.state=t},toggleCoverUrl:function(){this.roulette.coverurl=this.roulette.coverurl?"":"assets/r.png"},togglePointerUrl:function(){this.roulette.pointerurl=this.roulette.pointerurl?"":"assets/p.png"},toggleTest:function(){this.roulette.test=!this.roulette.test},setRadius:function(t){this.roulette.radius=t}},created:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),a=function(t){return t&&t.__esModule?t:{default:t}}(r);a.default.install=function(t){t.component(a.default.name,a.default)},e.default=a.default},function(t,e,n){"use strict";function r(t){n(18)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(20),o=n.n(a),i=n(21),s=n(4),u=r,l=s(o.a,i.a,!1,u,"data-v-6fbaf6df",null);e.default=l.exports},function(t,e,n){var r=n(19);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(3)("244272f4",r,!0)},function(t,e,n){e=t.exports=n(2)(void 0),e.push([t.i,'.roulette[data-v-6fbaf6df]{position:relative;border-radius:50%;display:inline-block}.roulette[data-v-6fbaf6df],.roulette [data-v-6fbaf6df]{-webkit-box-sizing:border-box;box-sizing:border-box}.roulette_roundel[data-v-6fbaf6df]{position:relative;width:100%;height:100%;background-size:100%;background-position:50%;background-repeat:no-repeat}.roulette_roundel--cover[data-v-6fbaf6df]{display:block;width:100%;height:100%;position:absolute;z-index:1;left:0;top:0}.roulette_roundel--subline[data-v-6fbaf6df]{position:absolute;display:inline-block;top:0;left:50%;height:50%;transform-origin:0 100%;text-align:center;width:1px;z-index:9}.roulette_roundel--subline.\\--line[data-v-6fbaf6df]{border-top:5px solid blue;background:#ddd}.roulette_roundel--subline.\\--mid[data-v-6fbaf6df]{border-top:5px solid red;background-color:transparent}.roulette_pointer--image[data-v-6fbaf6df]{position:absolute;top:50%;left:40%;width:20%;height:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}.roulette_pointer--image img[data-v-6fbaf6df]{width:100%}.roulette_pointer--test[data-v-6fbaf6df]{position:absolute;width:10px;height:35%;left:50%;top:15%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:50% 50% 5px 5px;background-color:rgba(0,0,0,.75)}.roulette_pointer--test[data-v-6fbaf6df]:after{content:"";position:absolute;width:20px;height:30px;display:inline-block;background-color:rgba(0,0,0,.75);bottom:-10px;left:-5px;border-radius:50% 50% 10px 10px}.brake[data-v-6fbaf6df],.static[data-v-6fbaf6df],.trans[data-v-6fbaf6df]{-webkit-transform:rotate(0deg);-webkit-transition-property:-webkit-transform;-webkit-transition-timing-function:ease-out;transform:rotate(0deg);transition-property:transform;transition-timing-function:ease-out}.play[data-v-6fbaf6df]{-webkit-animation-name:play--rotate-data-v-6fbaf6df;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-name:play--rotate-data-v-6fbaf6df;animation-iteration-count:infinite;animation-timing-function:linear}@-webkit-keyframes play--rotate-data-v-6fbaf6df{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes play--rotate-data-v-6fbaf6df{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={STATIC:"static",PLAY:"play",TRANS:"trans",BRAKE:"brake",STOP:"stop"},a=function(t,e){var n=t>e?[e,t]:[t,e];return Math.floor(Math.random()*(n[1]-n[0]+1))+n[0]};e.default={name:"Roulette",data:function(){return{el:null,elId:0,currState:r.STATIC}},props:{datas:{type:Array,default:function(){return[{name:"p1",degs:[30,90]},{name:"p2",degs:[90,150]},{name:"p3",degs:[150,210]},{name:"p4",degs:[210,270]},{name:"p5",degs:[270,330]},{name:"p6",degs:[330,390]}]}},r:{type:Number,default:100},ease:{type:Number,default:5},speed:{type:Number,default:1},during:{type:Function,default:new Function},coverurl:{type:String},pointerurl:{type:String},test:{type:Boolean,default:!1},vague:{type:Number,default:10},disabled:{type:Boolean,default:!1}},computed:{datum:function(){var t=[],e=[];return this.datas.forEach(function(n,r){var a=n.degs;t.push((a[0]+a[1])/2%360),e.push(a[0],a[1])}),{mid:t,line:e}},diameter:function(){return{width:2*this.r+"px",height:2*this.r+"px"}}},methods:{handleClick:function(t){this.$emit("click",t)},play:function(){var t=this;this.disabled||this.currState!=r.STATIC&&this.currState!=r.STOP||(this.reset(),setTimeout(function(){t.currState=r.PLAY},20))},brake:function(t){var e=this;if(this.currState==r.PLAY){var n=this.datas.find(function(e,n){return e.name==t});if(!n)return void console.log("No target found");var o=n.degs,i=a(o[0]+this.vague,o[1]-this.vague),s=360*parseInt(Math.abs(this.ease))+360-i,u=(s/360*this.speed).toFixed(2);this.currState=r.TRANS,setTimeout(function(){e.currState=r.BRAKE,e.el.style.cssText="-webkit-transform:rotate("+s+"deg);\n\t\t\t\t\t\t-webkit-transition-duration:"+u+"s;\n\t\t\t\t\t\ttransform:rotate("+s+"deg);\n\t\t\t\t\t\ttransition-duration:"+u+"s"},20)}},reset:function(){this.currState=r.STATIC},_sublineStyle:function(t){return"-webkit-transform:rotate("+t+"deg) translateX(-50%);transform:rotate("+t+"deg) translateX(-50%);"},_roundelStyle:function(){var t=Math.max(this.speed-.15,.15);return"play"==this.currState?"-webkit-animation-duration: "+t+"s;animation-duration: "+t+"s;":""},_transEnd:function(){this.currState==r.BRAKE&&(this.currState=r.STOP)}},watch:{currState:function(t,e){t==r.STATIC&&(this.el.style.cssText=""),this.during(t)}},created:function(){this.elId="__roulette_"+this._uid+"_"+(new Date).getTime()},mounted:function(){this.el=document.getElementById(this.elId)}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"roulette",style:[t.diameter]},[n("div",{staticClass:"roulette_roundel",class:t.currState,style:t._roundelStyle(),attrs:{id:t.elId},on:{transitionend:t._transEnd,webkitTransitionEnd:t._transEnd}},[n("span",{staticClass:"roulette_roundel--cover"},[t.coverurl?n("img",{attrs:{width:"100%",height:"100%",src:t.coverurl,alt:""}}):t._e()]),t._v(" "),t._l(t.datum.mid,function(e,r){return t.test?n("span",{key:"m"+r,staticClass:"roulette_roundel--subline --mid",style:t._sublineStyle(e)}):t._e()}),t._v(" "),t._l(t.datum.line,function(e,r){return t.test?n("span",{key:"l"+r,staticClass:"roulette_roundel--subline --line",style:t._sublineStyle(e)}):t._e()})],2),t._v(" "),t.test?n("div",{staticClass:"roulette_pointer--test"}):t._e(),t._v(" "),n("div",{staticClass:"roulette_pointer--image",on:{click:t.handleClick}},[t.pointerurl?n("img",{attrs:{src:t.pointerurl,alt:""}}):t._e()])])},a=[],o={render:r,staticRenderFns:a};e.a=o},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Roulette",{ref:"luckyRoulette",attrs:{r:t.roulette.radius,coverurl:t.roulette.coverurl,datas:t.roulette.datas,test:t.roulette.test,pointerurl:t.roulette.pointerurl,during:t.duringHandle},on:{click:t.clickFun}}),t._v(" "),n("div",{staticClass:"sample"},[n("p",[t._v('状态:"'+t._s(t.sample.state)+'"')]),t._v(" "),n("p",[n("button",{attrs:{type:"button"},on:{click:t.clickFun}},[t._v("开始抽奖")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:t.reset}},[t._v("重置抽奖")])]),t._v(" "),n("div",[n("table",{staticStyle:{margin:"auto"},attrs:{border:"1"}},[t._m(0),t._v(" "),n("tbody",t._l(t.roulette.datas,function(e){return n("tr",{key:e.name},[n("td",[t._v(t._s(e.desc))]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.degs[0],expression:"item.degs[0]",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.degs[0]},on:{input:function(n){n.target.composing||t.$set(e.degs,0,t._n(n.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.degs[1],expression:"item.degs[1]",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.degs[1]},on:{input:function(n){n.target.composing||t.$set(e.degs,1,t._n(n.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("td",[n("button",{attrs:{type:"button"},on:{click:function(n){t.brake(e.name)}}},[t._v("中奖")])])])}))])]),t._v(" "),n("p",[n("button",{attrs:{type:"button"},on:{click:t.toggleCoverUrl}},[t._v(t._s(t.roulette.coverurl?"隐藏":"显示")+"封面")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:t.togglePointerUrl}},[t._v(t._s(t.roulette.pointerurl?"隐藏":"显示")+"指针")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:t.toggleTest}},[t._v(t._s(t.roulette.test?"隐藏":"显示")+"辅助线")])]),t._v(" "),n("p",[n("label",{attrs:{for:"radius"}},[t._v("设置半径"),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.roulette.radius,expression:"roulette.radius",modifiers:{number:!0}}],attrs:{type:"number",id:"radius"},domProps:{value:t.roulette.radius},on:{input:function(e){e.target.composing||t.$set(t.roulette,"radius",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])])])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("奖品")]),t._v(" "),n("th",[t._v("起始角度")]),t._v(" "),n("th",[t._v("结束角度")]),t._v(" "),n("th",[t._v("操作")])])])}],o={render:r,staticRenderFns:a};e.a=o}],[9]);