(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(n,t,e){"use strict";e.r(t);var r=e(158),o=e.n(r),a=e(0),i=e.n(a),u=e(156),c=e(154),s=e(159),p=e(157);function l(){var n=o()(["\n  color: black;\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: silver;\n  box-shadow: 0 0 25px rgba(0,0,0,.6);\n  margin-bottom:75px;\n"]);return l=function(){return n},n}function f(){var n=o()(["\n  text-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: #777 1px 1px 1px;\n  position: relative;\n  font-size: 40px;\n  background-size: cover;\n  background: url(",");\n\n  &:hover {\n    &:before {\n      background: transparent;\n      content: '';\n    }\n    a {\n      opacity: 0;\n      transition: opacity .8s;\n    }\n  }\n\n  &:before {\n    background: rgba(0,0,0, .6);\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    content: '';\n  }\n\n  a {\n    z-index: 1;\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    line-height: 200px;\n    color: #45a8f9;\n  }\n\n  a:-webkit-any-link{\n    text-decoration: none;\n  }\n\n  a:visited{\n    color: red;\n  }\n"]);return f=function(){return n},n}var g=Object(p.a)(s.a)(f(),function(n){return n.contact?"https://i.imgur.com/1plVJGZ.png":n.about?"https://i.imgur.com/xw04y4O.png":n.jobs?"https://i.imgur.com/s986Vg5.png":n.education?"https://i.imgur.com/hV73nHn.png":void 0}),d=Object(p.a)(s.b)(l());t.default=function(){return i.a.createElement(u.a,null,i.a.createElement("h1",null,"Zachary Chapman"),i.a.createElement(d,{columns:"200px 200px",rows:"200px 200px",gap:"5px"},i.a.createElement(g,{about:!0},i.a.createElement(c.a,{to:"/about/"},"about me")),i.a.createElement(g,{jobs:!0},i.a.createElement(c.a,{to:"/jobs/"},"job history")),i.a.createElement(g,{education:!0},i.a.createElement(c.a,{to:"/education/"},"education")),i.a.createElement(g,{contact:!0},i.a.createElement(c.a,{to:"/contact/"},"contact"))))}},153:function(n,t,e){var r;n.exports=(r=e(155))&&r.default||r},154:function(n,t,e){"use strict";var r=e(0),o=e.n(r),a=e(4),i=e.n(a),u=e(33),c=e.n(u);e.d(t,"a",function(){return c.a});e(153),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},155:function(n,t,e){"use strict";e.r(t);e(34);var r=e(0),o=e.n(r),a=e(4),i=e.n(a),u=e(55),c=e(2),s=function(n){var t=n.location,e=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(u.a,Object.assign({location:t,pageResources:e},e.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},156:function(n,t,e){"use strict";var r=e(0),o=e.n(r),a=e(143),i=e.n(a);t.a=function(n){var t=n.children;return o.a.createElement("div",{className:i.a.container},t)}},159:function(n,t,e){"use strict";e.d(t,"a",function(){return m}),e.d(t,"b",function(){return b});var r=e(157);function o(n){return function(){return n}}var a=function(){};a.thatReturns=o,a.thatReturnsFalse=o(!1),a.thatReturnsTrue=o(!0),a.thatReturnsNull=o(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(n){return n};var i,u=a,c=function(n){},s=function(n,t,e,r,o,a,i,u){if(c(t),!n){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[e,r,o,a,i,u],l=0;(s=new Error(t.replace(/%s/g,function(){return p[l++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}},p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(n){return t[n]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(n){r[n]=n}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()&&Object.assign,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"),d=("function"==typeof Symbol&&Symbol.iterator,function(n){n.exports=function(){function n(n,t,e,r,o,a){a!==g&&s(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return n}n.isRequired=n;var e={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return e.checkPropTypes=u,e.PropTypes=e,e}()}(i={exports:{}},i.exports),i.exports),m=r.a.div.withConfig({displayName:"Cell__Cell"})(["height:100%;min-width:0;grid-column-end:",";grid-row-end:",";",";",";",";",";",";"],function(n){var t=n.width;return"span "+(void 0===t?1:t)},function(n){var t=n.height;return"span "+(void 0===t?1:t)},function(n){var t=n.left;return t&&"grid-column-start: "+t},function(n){var t=n.top;return t&&"grid-row-start: "+t},function(n){return n.center&&"text-align: center"},function(n){var t=n.area;return t&&"grid-area: "+t},function(n){return n.middle&&"\n    display: inline-flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    justify-self: stretch;\n  "});m.propTypes={className:d.string,width:d.number,height:d.number,top:d.oneOfType([d.number,d.string]),left:d.oneOfType([d.number,d.string]),middle:d.bool,center:d.bool,area:d.string};var h=function(n){return"number"==typeof n?"repeat("+n+", 1fr)":n},b=r.a.div.withConfig({displayName:"Grid__Grid"})(["display:grid;height:",";grid-auto-flow:",";grid-auto-rows:",";",";grid-template-columns:",";grid-gap:",";",";",";",";",";",";"],function(n){var t=n.height;return void 0===t?"auto":t},function(n){var t=n.flow;return void 0===t?"row":t},function(n){var t=n.minRowHeight;return"minmax("+(void 0===t?"20px":t)+", auto)"},function(n){var t=n.rows;return t&&"grid-template-rows: "+h(t)},function(n){var t=n.columns;return h(void 0===t?12:t)},function(n){var t=n.gap;return void 0===t?"8px":t},function(n){var t=n.columnGap;return t&&"column-gap: "+t},function(n){var t=n.rowGap;return t&&"row-gap: "+t},function(n){var t=n.areas;return t&&"grid-template-areas: "+function(n){return n.map(function(n){return'"'+n+'"'}).join(" ")}(t)},function(n){var t=n.justifyContent;return t&&"justify-content: "+t},function(n){var t=n.alignContent;return t&&"align-content: "+t});b.propTypes={className:d.string,columns:d.oneOfType([d.string,d.number]),gap:d.string,columnGap:d.string,rowGap:d.string,height:d.string,minRowHeight:d.string,flow:d.string,rows:d.oneOfType([d.string,d.number]),areas:d.arrayOf(d.string),justifyContent:d.string,alignContent:d.string}}}]);
//# sourceMappingURL=component---src-pages-index-js-5dfbb31c955de5e3c963.js.map