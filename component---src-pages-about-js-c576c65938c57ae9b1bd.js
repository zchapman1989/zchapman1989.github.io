(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(156),i=n(154),u=n(158),s=n(157),c=Object(s.a)(u.a).withConfig({displayName:"about__StyledCell",componentId:"bbwwjd-0"})(["color:black;display:inline-block;justify-content:center;align-items:center;"]),l=Object(s.a)(u.b).withConfig({displayName:"about__StyledGrid",componentId:"bbwwjd-1"})(["color:black;width:800px;margin-left:auto;margin-right:auto;"]);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{to:"/"},"Home"),a.a.createElement("h1",null,"About Me"),a.a.createElement(l,{columns:"300px 450px",rows:"500px 500px",gap:"40px"},a.a.createElement(c,null,a.a.createElement("img",{src:"https://i.imgur.com/CkEQOHQ.jpg",alt:""})),a.a.createElement(c,null,' After working several "Dead end" jobs over the years I decided it was time for a career change. Software engineering was suggested to me originally by a friend as it would put several of my personal and intellectual strengths to use where my previous jobs had not. A bit of a perfectionist, I have found the field to be perfect for me. I have taken a non-conventional route in regards to my education, opting to self-study instead of attending a traditional school as I felt being able to focus on current industry standards and practices would benefit me and my future employers more than a typical college course would.'),a.a.createElement(c,null," I have a beautiful wife, CaraRose, who has been my biggest supporter and motivator through out my career change, and had it not been for her I would still be lamenting my lack of true career path. I have one step daughter, and a newborn son. "),a.a.createElement(c,null,a.a.createElement("img",{src:"https://i.imgur.com/jc5TRCb.jpg",alt:""}))),a.a.createElement(i.a,{to:"/"},"Home"))}},153:function(e,t,n){var r;e.exports=(r=n(155))&&r.default||r},154:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(33),s=n.n(u);n.d(t,"a",function(){return s.a});n(153),a.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},155:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(55),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(143),i=n.n(o);t.a=function(e){var t=e.children;return a.a.createElement("div",{className:i.a.container},t)}},158:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return y});var r=n(157);function a(e){return function(){return e}}var o=function(){};o.thatReturns=a,o.thatReturnsFalse=a(!1),o.thatReturnsTrue=a(!0),o.thatReturnsNull=a(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e};var i,u=o,s=function(e){},c=function(e,t,n,r,a,o,i,u){if(s(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,i,u],f=0;(c=new Error(t.replace(/%s/g,function(){return l[f++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}},l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()&&Object.assign,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"),g=("function"==typeof Symbol&&Symbol.iterator,function(e){e.exports=function(){function e(e,t,n,r,a,o){o!==d&&c(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=u,n.PropTypes=n,n}()}(i={exports:{}},i.exports),i.exports),m=r.a.div.withConfig({displayName:"Cell__Cell"})(["height:100%;min-width:0;grid-column-end:",";grid-row-end:",";",";",";",";",";",";"],function(e){var t=e.width;return"span "+(void 0===t?1:t)},function(e){var t=e.height;return"span "+(void 0===t?1:t)},function(e){var t=e.left;return t&&"grid-column-start: "+t},function(e){var t=e.top;return t&&"grid-row-start: "+t},function(e){return e.center&&"text-align: center"},function(e){var t=e.area;return t&&"grid-area: "+t},function(e){return e.middle&&"\n    display: inline-flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    justify-self: stretch;\n  "});m.propTypes={className:g.string,width:g.number,height:g.number,top:g.oneOfType([g.number,g.string]),left:g.oneOfType([g.number,g.string]),middle:g.bool,center:g.bool,area:g.string};var h=function(e){return"number"==typeof e?"repeat("+e+", 1fr)":e},y=r.a.div.withConfig({displayName:"Grid__Grid"})(["display:grid;height:",";grid-auto-flow:",";grid-auto-rows:",";",";grid-template-columns:",";grid-gap:",";",";",";",";",";",";"],function(e){var t=e.height;return void 0===t?"auto":t},function(e){var t=e.flow;return void 0===t?"row":t},function(e){var t=e.minRowHeight;return"minmax("+(void 0===t?"20px":t)+", auto)"},function(e){var t=e.rows;return t&&"grid-template-rows: "+h(t)},function(e){var t=e.columns;return h(void 0===t?12:t)},function(e){var t=e.gap;return void 0===t?"8px":t},function(e){var t=e.columnGap;return t&&"column-gap: "+t},function(e){var t=e.rowGap;return t&&"row-gap: "+t},function(e){var t=e.areas;return t&&"grid-template-areas: "+function(e){return e.map(function(e){return'"'+e+'"'}).join(" ")}(t)},function(e){var t=e.justifyContent;return t&&"justify-content: "+t},function(e){var t=e.alignContent;return t&&"align-content: "+t});y.propTypes={className:g.string,columns:g.oneOfType([g.string,g.number]),gap:g.string,columnGap:g.string,rowGap:g.string,height:g.string,minRowHeight:g.string,flow:g.string,rows:g.oneOfType([g.string,g.number]),areas:g.arrayOf(g.string),justifyContent:g.string,alignContent:g.string}}}]);
//# sourceMappingURL=component---src-pages-about-js-c576c65938c57ae9b1bd.js.map