(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-testMyTab-testMyTab"],{"0362":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".tab-item[data-v-4efca7a7]{\r\n\t/* height: 40px;\r\n\tline-height: 40px; */-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:10px 10px 5px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-left:5px;margin-right:5px}.tab-item-text[data-v-4efca7a7]{font-size:14px;color:#000}.active-tab-item[data-v-4efca7a7]{border-bottom:4px solid #007aff;padding:10px 10px 1px 10px}.active-tab-item-text[data-v-4efca7a7]{font-size:14px;color:#007aff}",""])},"09ff":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{activeTabIndex:0,tabItemArray:["选项卡1","选项卡2"]}},methods:{tabChange:function(t){this.activeTabIndex=t}}};e.default=i},"20e7":function(t,e,a){var i=a("0362");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("cbef18fc",i,!0,{sourceMap:!1,shadowMode:!1})},3488:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-flex"},[a("v-uni-view",{staticClass:"uni-flex uni-row",staticStyle:{width:"100%","padding-left":"5px"}},[t._l(t.tabItemArray,function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"tab-item ",class:[t.activeTabIndex==i?"active-tab-item":""],on:{click:function(e){e=t.$handleEvent(e),t.tabChange(i)}}},[a("v-uni-text",{staticClass:"tab-item-text",class:[t.activeTabIndex==i?"active-tab-item-text":""]},[t._v(t._s(e))]),a("v-uni-view",{staticClass:"active-tab-indicator"})],1)]})],2)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},3812:function(t,e,a){"use strict";a.r(e);var i=a("3488"),n=a("ae5d");for(var c in n)"default"!==c&&function(t){a.d(e,t,function(){return n[t]})}(c);a("e38d");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"4efca7a7",null);e["default"]=r.exports},ae5d:function(t,e,a){"use strict";a.r(e);var i=a("09ff"),n=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);e["default"]=n.a},e38d:function(t,e,a){"use strict";var i=a("20e7"),n=a.n(i);n.a}}]);