(global.webpackChunk_N_E=global.webpackChunk_N_E||[]).push([[495],{3658:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hb_app/1_body/5_TestConfiguration/defaultConfig",function(){return n(730)}])},7456:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s,defaultCustomTestDataContext:()=>u});var r=n(2706),a=n(4246),o=n(7378),i=n(6567),u=o.createContext("");const s=function(e){var t=e.children,n=(0,r.Z)(o.useState(Object.entries(i.config)),2),s=n[0],l=n[1],c=(0,o.useState)(!1),f=c[0],d=c[1];(0,o.useEffect)((function(){l(Object.entries(i.config))}),[]);var m={configEntries:s,setConfigEntries:l,configFlag:f,setConfigFlag:d};return(0,a.jsx)(u.Provider,{value:m,children:t})}},730:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(2706),a=n(4246),o=n(7378),i=n(4913),u=n(3960),s=n(6567),l=n(3219),c=n(7456),f=n(6144);const d=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],d=(0,o.useContext)(c.defaultCustomTestDataContext),m=d.configEntries,p=d.setConfigEntries,v=d.setConfigFlag,g=!1;(0,o.useEffect)((function(){n(!1)}),[m]);var y=function(){return(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("h1",{className:"mb-[20px] font-bold",children:" Default Configuration"}),(0,a.jsx)(u.default,{size:"small",type:"primary_inverse",className:"!py-0 !mb-5 border border-sky-600",label:"Save",onClick:function(){g&&(p(m),n(!0),v(!0),g=!1)}})]})},h=function(e){var t=(0,r.Z)(e,2),n=t[0],o=t[1];return(0,a.jsxs)("div",{className:"grid grid-cols-3 mb-[5px] container items-center",children:[(0,a.jsxs)("h6",{className:"uppercase text-sm",children:[n,": "]}),(0,a.jsx)("span",{className:"text-sm break-all",children:o}),(0,a.jsx)(i.default,{placeholder:"new val",onChange:function(e){return function(e,t){g=!0;var n=e.target.value;m=m.map((function(e){var a=(0,r.Z)(e,2),o=a[0],i=a[1];if(o===t){if("string"===typeof n&&"string"===t)return[o,n];if(Number.isInteger(parseInt(n))&&"integer"===t)return[o,n];if(n.includes(".")&&"float"===t)return[o,n]}return[o,i]}))}(e,n)}})]},"".concat(n,"-").concat(o))},b=function(){return(0,a.jsxs)("div",{className:"ml-[20px] mt-[5px] pl-[20px] border-l-2",children:[y(),m?m.map(h):Object.entries(s.config).map(h)]})};return t?(0,a.jsx)("p",{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{}),(0,a.jsx)(f.default,{}),(0,a.jsx)(l.default,{})]})}},6144:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(7378),a=n(7456),o=n(774),i=n(9520),u=n(3828);const s=function(){var e=(0,r.useContext)(u.testSummaryContext),t=e.changeSummary,n=e.setChangeSummary,s=e.multiChangeSummary,l=e.setMultiChangeSummary,c=(0,r.useContext)(o.testQuerySummaryContext),f=c.changeQuerySummary,d=c.setChangeQuerySummary,m=c.multiChangeQuerySummary,p=c.setMultiChangeQuerySummary,v=(0,r.useContext)(a.defaultCustomTestDataContext),g=v.configEntries,y=v.configFlag,h=v.setConfigFlag;return(0,r.useEffect)((function(){y&&(n((0,i.mapConfigChangesInChangeSummary)(t,g)),d((0,i.mapConfigChangesInChangeSummary)(f,g)),l((0,i.mapConfigChangesInChangeMultiSummary)(s,g)),p((0,i.mapConfigChangesInChangeMultiSummary)(m,g)),h(!1))}),[g]),null}},9520:(e,t,n)=>{"use strict";n.r(t),n.d(t,{compareAndRetainResponseInMultiSummary:()=>m,compareAndRetainResponseInSummary:()=>d,default:()=>y,getConfigEntriesValue:()=>s,mapChangeMultiSummary:()=>g,mapChangeSummary:()=>p,mapConfigChangesInChangeMultiSummary:()=>c,mapConfigChangesInChangeSummary:()=>l});var r=n(1946),a=n(8772),o=n(3334),i=n(3573),u=n(6611);function s(e,t){var n="";return e.forEach((function(e,r){e[0]==t&&(n=e[1])})),"null"==t?null:"optional"==t?"":n}function l(e,t){return null===e||void 0===e?void 0:e.map((function(e){var n=e.newFieldType.toLowerCase();return"optional"===n||"null"===n||n.includes("c-")?e:(0,o.Z)((0,a.Z)({},e),{newFieldValue:s(t,e.newFieldType.toLowerCase()).toString()})}))}function c(e,t){return null===e||void 0===e?void 0:e.map((function(e){var n;return(0,o.Z)((0,a.Z)({},e),{tests:null===(n=e.tests)||void 0===n?void 0:n.map((function(e){var n=e.newFieldType.toLowerCase();return"optional"===n||"null"===n||n.includes("c-")?e:(0,o.Z)((0,a.Z)({},e),{newFieldValue:s(t,e.newFieldType.toLowerCase()).toString()})}))})}))}function f(e,t,n){var r={};return r.fieldName=e.fieldName,r.oldFieldType=e.fieldType,r.oldFieldValue=e.oldFieldValue,r.newFieldType=t,r.newFieldValue=n,r.status=400,r.response="",r}function d(e,t){return t.map((function(t){var n="",r="",u=!1;return e.map((function(e){if(!u){var a=Object.keys(t),o=Object.keys(e),s=new Set((0,i.Z)(a).concat((0,i.Z)(o))),l=!0;s.forEach((function(n){"status"!==n&&"response"!==n&&(t[n]===e[n]||(l=!1))})),l&&(n=e.status,r=e.response,u=!0)}})),u?(0,o.Z)((0,a.Z)({},t),{status:n,response:r}):(0,a.Z)({},t)}))}function m(e,t){return t.map((function(t){var n="",r="",i=!1;return e.map((function(e){i||JSON.stringify(t.tests)!==JSON.stringify(e.tests)||(i=!0,n=e.status,r=e.response)})),i?(0,o.Z)((0,a.Z)({},t),{status:n,response:r}):(0,a.Z)({},t)}))}function p(e,t,n){var r=[];return null===e||void 0===e||e.map((function(e){t.map((function(t){t.fieldName===e.name&&(e.dataType.map((function(e){if(!0===e.selected){var a=s(n,e.value),o=f(t,e.label,a);r.push(o)}})),e.custom.map((function(e){if(!0===e.selected)if("Custom"===e.label&&e.value.length>0)for(var n=0;n<e.value.length;n++){var a=e.value[n],o=f(t,"C-"+(0,u.Z)(e.value[n]),a);r.push(o)}else{var i=e.value,s=f(t,"C-"+e.label,i);r.push(s)}})))}))})),r}function v(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(0!==t.length){var u=t[0],s=t.slice(1);n[u].forEach((function(t){var l=(0,o.Z)((0,a.Z)({},i),(0,r.Z)({},u,t));v(e,s,n,l)}))}else e.push(Object.values(i))}function g(e,t,n,r,a){var o=0,i=[],l=[];return e.forEach((function(e){if(e!=t){var c=[],f={},d=0;if(null===n||void 0===n||n.forEach((function(e){r.map((function(t){if(t.fieldName===e.name){e.options.forEach((function(n,r){r==o&&n.forEach((function(n){if(n.selected&&"Custom"!==n.label&&"Select..."!==n.label){var r={};r.fieldName=e.name,r.oldFieldType=t.fieldType,r.oldFieldValue=t.oldFieldValue,r.newFieldType=n.label;var o=s(a,n.value);r.newFieldValue=null===o?null:o,c.push(r)}else n.selected&&"Custom"===n.label&&(d=1)}))})),l=[];var n=[];1==d&&e.config.forEach((function(r,a){a==o&&r.forEach((function(r){if(r.selected)if("Custom"===r.label&&r.value.length>0)for(var a=0;a<r.value.length;a++){var o={};o.fieldName=e.name,o.oldFieldType=t.fieldType,o.oldFieldValue=t.oldFieldValue,o.newFieldType="C-"+(0,u.Z)(r.value[a]);var i=r.value[a];o.newFieldValue=null===i?null:i,d=2,n.push(o)}else{var s={};s.fieldName=e.name,s.oldFieldType=t.fieldType,s.oldFieldValue=t.oldFieldValue,s.newFieldType="C-"+r.label,s.newFieldValue=r.value,d=2,n.push(s)}}))})),n.length>0&&(f[e.name]=n)}}))})),v(l,Object.keys(f),f),2==d&&l.length>0)for(var m=function(e){var t=[];if(c.length>0)for(var n=0;n<c.length;n++)t.push(c[n]);l[e].map((function(e){return t.push(e)}));var r={};r.tests=t,r.status=400,r.response="",i.push(r)},p=0;p<l.length;p++)m(p);else if(c.length>0){var g={};g.tests=c,g.status=400,g.response="",i.push(g)}o++}})),i}function y(){}},6567:(e,t,n)=>{"use strict";n.r(t),n.d(t,{config:()=>r,default:()=>a});var r={string:"test",integer:2,float:1.23};const a=function(){}},3960:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(4246),a=n(5822);const o=function(e){var t=(0,a.fontSize)(e.size),n=(0,a.typeColor)(e.type);return(0,r.jsx)("button",{type:"button",className:"".concat("\npx-3 py-1 mr-1 rounded\nease-linear transition-all duration-150\n"," ").concat(t," ").concat(n," ").concat(e.className),onClick:e.onClick,children:e.label})}},5822:(e,t,n)=>{"use strict";function r(e){return e?"extralarge"===e.toLowerCase()?"text-xl":"large"===e.toLowerCase()?"text-lg":"medium"===e.toLowerCase()?"text-base":"text-sm":"text-sm"}function a(e){var t="text-white hover:text-white \n    bg-sky-600 hover:bg-sky-400 active:bg-sky-600";return e?"primary"===e.toLowerCase()?t:"primary_inverse"===e.toLowerCase()?"\n    text-sky-600 \n    bg-white-400\n    border border-sky-600\n    hover:text-sky \n    hover:bg-white-600\n    active:bg-white-600":"primary_link"===e.toLowerCase()?"\n    text-sky-600 \n    bg-white-400\n    hover:text-sky \n    hover:bg-white-600\n    active:bg-white-600":"secondary"===e.toLowerCase()||"warning"===e.toLowerCase()?"text-white hover:text-white \n    bg-sky-400 hover:bg-sky-600 active:bg-sky-600":t:t}n.r(t),n.d(t,{default:()=>o,fontSize:()=>r,typeColor:()=>a});const o=function(){}},4913:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(4246),a=n(5822);const o=function(e){var t=(0,a.fontSize)(e.size);return(0,r.jsx)("input",{type:"text",placeholder:e.placeholder,className:"".concat("\nmt-[2px] px-2 py-[6px] \nplaceholder-blueGray-300 text-blueGray-600 \nrelative bg-white bg-white rounded \nborder-slate-300 border-solid border\nshadow outline-none \nfocus:outline-none focus:shadow-outline min-w-[25%] min-h-[5%]\noverflow-x-auto\n"," ").concat(t," ").concat(e.className),onChange:e.onChange,onPaste:e.onPaste,value:e.value})}},4081:(e,t,n)=>{"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:()=>r})},3619:(e,t,n)=>{"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:()=>r})},3676:(e,t,n)=>{"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:()=>a})},7265:(e,t,n)=>{"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>r})},3334:(e,t,n)=>{"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:()=>r})},2706:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7265);var a=n(754);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,a.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},3573:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(4081);var a=n(7265);var o=n(754);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},6611:(e,t,n)=>{"use strict";function r(e){return e&&e.constructor===Symbol?"symbol":typeof e}n.d(t,{Z:()=>r})},754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(4081);function a(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}},e=>{e.O(0,[3219,9774,2888,179],(()=>{return t=3658,e(e.s=t);var t}));var t=e.O();_N_E=t}]);