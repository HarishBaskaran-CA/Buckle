(global.webpackChunk_N_E=global.webpackChunk_N_E||[]).push([[2077],{3978:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hb_app/1_body/6_TestSummary/modelling/summaryCreation",function(){return t(9520)}])},9520:(e,n,t)=>{"use strict";t.r(n),t.d(n,{compareAndRetainResponseInMultiSummary:()=>d,compareAndRetainResponseInSummary:()=>p,default:()=>h,getConfigEntriesValue:()=>i,mapChangeMultiSummary:()=>y,mapChangeSummary:()=>m,mapConfigChangesInChangeMultiSummary:()=>c,mapConfigChangesInChangeSummary:()=>s});var r=t(1946),l=t(8772),a=t(3334),o=t(3573),u=t(6611);function i(e,n){var t="";return e.forEach((function(e,r){e[0]==n&&(t=e[1])})),"null"==n?null:"optional"==n?"":t}function s(e,n){return null===e||void 0===e?void 0:e.map((function(e){var t=e.newFieldType.toLowerCase();return"optional"===t||"null"===t||t.includes("c-")?e:(0,a.Z)((0,l.Z)({},e),{newFieldValue:i(n,e.newFieldType.toLowerCase()).toString()})}))}function c(e,n){return null===e||void 0===e?void 0:e.map((function(e){var t;return(0,a.Z)((0,l.Z)({},e),{tests:null===(t=e.tests)||void 0===t?void 0:t.map((function(e){var t=e.newFieldType.toLowerCase();return"optional"===t||"null"===t||t.includes("c-")?e:(0,a.Z)((0,l.Z)({},e),{newFieldValue:i(n,e.newFieldType.toLowerCase()).toString()})}))})}))}function f(e,n,t){var r={};return r.fieldName=e.fieldName,r.oldFieldType=e.fieldType,r.oldFieldValue=e.oldFieldValue,r.newFieldType=n,r.newFieldValue=t,r.status=400,r.response="",r}function p(e,n){return n.map((function(n){var t="",r="",u=!1;return e.map((function(e){if(!u){var l=Object.keys(n),a=Object.keys(e),i=new Set((0,o.Z)(l).concat((0,o.Z)(a))),s=!0;i.forEach((function(t){"status"!==t&&"response"!==t&&(n[t]===e[t]||(s=!1))})),s&&(t=e.status,r=e.response,u=!0)}})),u?(0,a.Z)((0,l.Z)({},n),{status:t,response:r}):(0,l.Z)({},n)}))}function d(e,n){return n.map((function(n){var t="",r="",o=!1;return e.map((function(e){o||JSON.stringify(n.tests)!==JSON.stringify(e.tests)||(o=!0,t=e.status,r=e.response)})),o?(0,a.Z)((0,l.Z)({},n),{status:t,response:r}):(0,l.Z)({},n)}))}function m(e,n,t){var r=[];return null===e||void 0===e||e.map((function(e){n.map((function(n){n.fieldName===e.name&&(e.dataType.map((function(e){if(!0===e.selected){var l=i(t,e.value),a=f(n,e.label,l);r.push(a)}})),e.custom.map((function(e){if(!0===e.selected)if("Custom"===e.label&&e.value.length>0)for(var t=0;t<e.value.length;t++){var l=e.value[t],a=f(n,"C-"+(0,u.Z)(e.value[t]),l);r.push(a)}else{var o=e.value,i=f(n,"C-"+e.label,o);r.push(i)}})))}))})),r}function v(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(0!==n.length){var u=n[0],i=n.slice(1);t[u].forEach((function(n){var s=(0,a.Z)((0,l.Z)({},o),(0,r.Z)({},u,n));v(e,i,t,s)}))}else e.push(Object.values(o))}function y(e,n,t,r,l){var a=0,o=[],s=[];return e.forEach((function(e){if(e!=n){var c=[],f={},p=0;if(null===t||void 0===t||t.forEach((function(e){r.map((function(n){if(n.fieldName===e.name){e.options.forEach((function(t,r){r==a&&t.forEach((function(t){if(t.selected&&"Custom"!==t.label&&"Select..."!==t.label){var r={};r.fieldName=e.name,r.oldFieldType=n.fieldType,r.oldFieldValue=n.oldFieldValue,r.newFieldType=t.label;var a=i(l,t.value);r.newFieldValue=null===a?null:a,c.push(r)}else t.selected&&"Custom"===t.label&&(p=1)}))})),s=[];var t=[];1==p&&e.config.forEach((function(r,l){l==a&&r.forEach((function(r){if(r.selected)if("Custom"===r.label&&r.value.length>0)for(var l=0;l<r.value.length;l++){var a={};a.fieldName=e.name,a.oldFieldType=n.fieldType,a.oldFieldValue=n.oldFieldValue,a.newFieldType="C-"+(0,u.Z)(r.value[l]);var o=r.value[l];a.newFieldValue=null===o?null:o,p=2,t.push(a)}else{var i={};i.fieldName=e.name,i.oldFieldType=n.fieldType,i.oldFieldValue=n.oldFieldValue,i.newFieldType="C-"+r.label,i.newFieldValue=r.value,p=2,t.push(i)}}))})),t.length>0&&(f[e.name]=t)}}))})),v(s,Object.keys(f),f),2==p&&s.length>0)for(var d=function(e){var n=[];if(c.length>0)for(var t=0;t<c.length;t++)n.push(c[t]);s[e].map((function(e){return n.push(e)}));var r={};r.tests=n,r.status=400,r.response="",o.push(r)},m=0;m<s.length;m++)d(m);else if(c.length>0){var y={};y.tests=c,y.status=400,y.response="",o.push(y)}a++}})),o}function h(){}},4081:(e,n,t)=>{"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:()=>r})},7265:(e,n,t)=>{"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.d(n,{Z:()=>r})},3334:(e,n,t)=>{"use strict";function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}t.d(n,{Z:()=>r})},3573:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var r=t(4081);var l=t(7265);var a=t(754);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,l.Z)(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},6611:(e,n,t)=>{"use strict";function r(e){return e&&e.constructor===Symbol?"symbol":typeof e}t.d(n,{Z:()=>r})},754:(e,n,t)=>{"use strict";t.d(n,{Z:()=>l});var r=t(4081);function l(e,n){if(e){if("string"===typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}}},e=>{e.O(0,[9774,2888,179],(()=>{return n=3978,e(e.s=n);var n}));var n=e.O();_N_E=n}]);