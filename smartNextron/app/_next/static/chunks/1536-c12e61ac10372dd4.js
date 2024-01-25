"use strict";(global.webpackChunk_N_E=global.webpackChunk_N_E||[]).push([[1536],{1536:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(4246),r=n(7378),s=n(240),l=n(2875),i=n(3828),c=n(1201),o=n(4593),u=n(774),d=n(9758);const m=function(){var e=(0,r.useState)(1),t=e[0],n=e[1],m=(0,r.useContext)(i.testSummaryContext),x=m.changeSummary,f=m.multiChangeSummary,h=(0,r.useContext)(u.testQuerySummaryContext),p=h.changeQuerySummary,g=h.multiChangeQuerySummary,y=(0,r.useState)(0),v=y[0],j=y[1];return(0,r.useEffect)((function(){j((null===p||void 0===p?void 0:p.length)+(null===g||void 0===g?void 0:g.length)+(null===x||void 0===x?void 0:x.length)+(null===f||void 0===f?void 0:f.length))}),[p,g,x,f]),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)(o.default,{className:"w-[45%]",flag:t,setFlag:n,first:"Query-Single",second:"Query-Multi",third:"Body-Single",fourth:"Body-Multi"}),(0,a.jsxs)("p",{className:"mr-[300px]",children:["Total TestCases Count - ",v]})]}),0==t?(0,a.jsx)(c.default,{}):(0,a.jsx)(a.Fragment,{}),1==t?(0,a.jsx)(d.default,{}):(0,a.jsx)(a.Fragment,{}),2==t?(0,a.jsx)(s.default,{}):(0,a.jsx)(a.Fragment,{}),3==t?(0,a.jsx)(l.default,{}):(0,a.jsx)(a.Fragment,{})]})}},9758:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(4246),r=n(7378),s=n(774),l=n(7134);const i=function(){var e=function(e,t){if(e.length!==t.length)return!1;var n=new Set(e.map((function(e){return JSON.stringify(e)}))),a=new Set(t.map((function(e){return JSON.stringify(e)})));if(n.size!==a.size)return!1;var r=!0,s=!1,l=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var o=i.value;if(!a.has(o))return!1}}catch(u){s=!0,l=u}finally{try{r||null==c.return||c.return()}finally{if(s)throw l}}return!0},t=(0,r.useContext)(s.testQuerySummaryContext),n=t.multiChangeQuerySummary,i=t.setMultiChangeQuerySummary,c=(0,r.useContext)(l.queryTestDataConfigContext).queryMultiTestConfig,o=function(e){return(0,a.jsx)("p",{className:"pr-2 !text-left text-sm break-all",children:e})};return(0,a.jsx)(a.Fragment,{children:c?(0,a.jsxs)("ul",{className:"w-[100%]",children:[(0,a.jsx)("li",{className:"py-2 border-2 border-gray",children:(0,a.jsxs)("div",{className:"ml-[20px] grid grid-cols-7",children:[o("TC - ".concat(n.length)),o("PathName"),o("oldFieldType"),o("oldFieldValue"),o("newFieldType"),o("newFieldValue"),o("Response code")]})},"summary-header"),n&&n.map((function(t,r){return(0,a.jsx)("li",{className:"py-1 border-b border-gray ",children:(0,a.jsxs)("div",{className:"ml-[20px] grid grid-cols-7",children:[o(r+1),(0,a.jsx)("div",{className:"flex flex-col",children:Object.entries(t.tests).map((function(e,t){return(0,a.jsx)("div",{children:o(e[1].fieldName)},"".concat(e[1].fieldName,"-").concat(t))}))}),(0,a.jsx)("div",{className:"flex flex-col",children:Object.entries(t.tests).map((function(e,t){return(0,a.jsx)("div",{children:o(e[1].oldFieldType)},"".concat(e[1].fieldName,"-").concat(t))}))}),(0,a.jsx)("div",{className:"flex flex-col",children:Object.entries(t.tests).map((function(e,t){return(0,a.jsx)("div",{children:o(e[1].oldFieldValue)},"".concat(e[1].fieldName,"-").concat(t))}))}),(0,a.jsx)("div",{className:"flex flex-col",children:Object.entries(t.tests).map((function(e,t){return(0,a.jsx)("div",{children:o(e[1].newFieldType)},"".concat(e[1].fieldName,"-").concat(t))}))}),(0,a.jsx)("div",{className:"flex flex-col",children:Object.entries(t.tests).map((function(e,t){return(0,a.jsxs)("div",{children:[" ",o(null===e[1].newFieldValue?"null":e[1].newFieldValue)]},"".concat(e[1].fieldName,"-").concat(t))}))}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("input",{type:"text",value:t.status,onChange:function(a){!function(t,a){var r=n.map((function(n){return e(n.tests,a.tests)&&(n.status=t.target.value),n}));i(r)}(a,t)},className:"pr-2 text-center text-sm w-[60%] border-b-2 border-sky-600"}),(0,a.jsx)(ResponseContent,{onResponseChange:function(a){return function(t,a){var r=n.map((function(n){return e(n.tests,t.tests)&&(n.response=a),n}));i(r)}(t,a)}})]})]})},"".concat(t,"-").concat(r))}))]}):(0,a.jsx)(a.Fragment,{})})}},2875:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(4246),r=n(7378),s=n(470),l=n(3828),i=n(9623);const c=function(){var e=function(e,t){if(e.length!==t.length)return!1;var n=new Set(e.map((function(e){return JSON.stringify(e)}))),a=new Set(t.map((function(e){return JSON.stringify(e)})));if(n.size!==a.size)return!1;var r=!0,s=!1,l=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var o=i.value;if(!a.has(o))return!1}}catch(u){s=!0,l=u}finally{try{r||null==c.return||c.return()}finally{if(s)throw l}}return!0},t=(0,r.useContext)(l.testSummaryContext),n=t.multiChangeSummary,c=t.setMultiChangeSummary,o=(0,r.useContext)(s.testDataConfigContext).multiTestConfig,u=function(e){return(0,a.jsx)("p",{className:"pr-2 !text-left text-sm break-all",children:e})};return(0,a.jsx)(a.Fragment,{children:o?(0,a.jsxs)("ul",{className:"w-[100%]",children:[(0,a.jsx)("li",{className:"py-2 border-2 border-gray",children:(0,a.jsxs)("div",{className:"ml-[20px] grid grid-cols-7",children:[u("TC - ".concat(n.length)),u("PathName"),u("oldFieldType"),u("oldFieldValue"),u("newFieldType"),u("newFieldValue"),u("Response code")]})},"summary-header"),n&&n.map((function(t,r){return(0,a.jsx)("li",{className:"py-1 border-b border-gray ",children:(0,a.jsxs)("div",{className:"ml-[20px] grid grid-cols-7",children:[u(r+1),(0,a.jsx)("div",{className:"flex flex-col",children:Object.entries(t.tests).map((function(e,t){return(0,a.jsx)("div",{children:u(e[1].fieldName)},"".concat(e[1].fieldName,"-").concat(t))}))}),(0,a.jsx)("div",{className:"flex flex-col",children:Object.entries(t.tests).map((function(e,t){return(0,a.jsx)("div",{children:u(e[1].oldFieldType)},"".concat(e[1].fieldName,"-").concat(t))}))}),(0,a.jsx)("div",{className:"flex flex-col",children:Object.entries(t.tests).map((function(e,t){return(0,a.jsx)("div",{children:u(e[1].oldFieldValue)},"".concat(e[1].fieldName,"-").concat(t))}))}),(0,a.jsx)("div",{className:"flex flex-col",children:Object.entries(t.tests).map((function(e,t){return(0,a.jsx)("div",{children:u(e[1].newFieldType)},"".concat(e[1].fieldName,"-").concat(t))}))}),(0,a.jsx)("div",{className:"flex flex-col",children:Object.entries(t.tests).map((function(e,t){return(0,a.jsxs)("div",{children:[" ",u(null===e[1].newFieldValue?"null":e[1].newFieldValue)]},"".concat(e[1].fieldName,"-").concat(t))}))}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("input",{type:"text",value:t.status,onChange:function(a){!function(t,a){var r=n.map((function(n){return e(n.tests,a.tests)&&(n.status=t.target.value),n}));c(r)}(a,t)},className:"pr-2 text-center text-sm w-[60%] border-b-2 border-sky-600"}),(0,a.jsx)(i.default,{onResponseChange:function(a){return function(t,a){var r=n.map((function(n){return e(n.tests,t.tests)&&(n.response=a),n}));c(r)}(t,a)}})]})]})},"".concat(t,"-").concat(r))}))]}):(0,a.jsx)(a.Fragment,{})})}},9623:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(9132),r=n(5556),s=n(4246),l=n(7378),i=(n(9072),n(6761)),c=n(9541);const o=function(e){var t=e.onResponseChange,n=(0,l.useState)(!1),o=n[0],u=n[1],d=(0,l.useState)(""),m=d[0],x=d[1],f=function(){var e=(0,a.Z)((function(){return(0,r.__generator)(this,(function(e){return u(!1),[2]}))}));return function(){return e.apply(this,arguments)}}();return(0,s.jsx)(i.default,{buttonLabel:"content",logoClassName:" pr-[10px]",flag:o,open:function(){return u(!0)},close:function(){return u(!1)},save:function(){f()},height:"h-[400px]",width:"w-[45%]",header:"Validation Details",children:(0,s.jsxs)("div",{className:"flex flex-col gap-2 justify-between",children:[(0,s.jsx)("p",{className:"mt-[5px] text-gray-500",children:"Response Content"}),(0,s.jsx)(c.default,{className:"w-[500px] max-h-[200px] overflow-y-auto",value:m,setValue:x,onChange:function(e){var n=e.target.value;x(n),t(n)}})]})})}},1201:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(4246),r=n(7378),s=n(7134),l=n(774),i=n(9623);n(5562);const c=function(){var e=function(e,t){var n=!0;for(var a in e){if(!e.hasOwnProperty(a)||!t.hasOwnProperty(a)){n=!1;break}if(e[a]!==t[a]){n=!1;break}}return n},t=(0,r.useContext)(l.testQuerySummaryContext),n=t.changeQuerySummary,c=t.setChangeQuerySummary,o=(0,r.useContext)(s.queryTestDataConfigContext).querySingleTestConfig,u=function(e){return(0,a.jsx)("p",{className:"pr-2 !text-left text-sm break-all",children:e})};return(0,a.jsx)(a.Fragment,{children:o?(0,a.jsxs)("ul",{className:"w-[100%]",children:[(0,a.jsx)("li",{className:"py-2 border-2 border-gray",children:(0,a.jsxs)("div",{className:"ml-[20px] grid grid-cols-7",children:[u("TC - ".concat(n.length)),u("PathName"),u("oldFieldType"),u("oldFieldValue"),u("newFieldType"),u("newFieldValue"),u("Response code")]})},"summary-header"),n&&Object.entries(n).map((function(t,r){return(0,a.jsx)("li",{className:"py-1 border-b border-gray ",children:(0,a.jsxs)("div",{className:"ml-[20px] grid grid-cols-7",children:[u(r+1),u(t[1].fieldName),u(t[1].oldFieldType),u(t[1].oldFieldValue),u(t[1].newFieldType),u(null===t[1].newFieldValue?"null":t[1].newFieldValue),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("input",{type:"text",value:t[1].status,onChange:function(a){!function(t,a){var r=n.map((function(n){return e(n,a)&&(n.status=t.target.value),n}));c(r)}(a,t[1])},className:"pr-2 text-center text-sm w-[60%] border-b-2 border-sky-600"}),(0,a.jsx)(i.default,{onResponseChange:function(a){return function(t,a){var r=n.map((function(n){return e(n,t)&&(n.response=a),n}));c(r)}(t[1],a)}})]})]})},t)}))]}):(0,a.jsx)(a.Fragment,{})})}},240:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(4246),r=n(7378),s=(n(642),n(470)),l=n(3828),i=(n(7456),n(9623));const c=function(){var e=function(e,t){var n=!0;for(var a in e){if(!e.hasOwnProperty(a)||!t.hasOwnProperty(a)){n=!1;break}if(e[a]!==t[a]){n=!1;break}}return n},t=(0,r.useContext)(l.testSummaryContext),n=t.changeSummary,c=t.setChangeSummary,o=(0,r.useContext)(s.testDataConfigContext).singleTestConfig,u=function(e){return(0,a.jsx)("p",{className:"pr-2 !text-left text-sm break-all",children:e})};return(0,a.jsx)(a.Fragment,{children:o?(0,a.jsxs)("ul",{className:"w-[100%]",children:[(0,a.jsx)("li",{className:"py-2 border-2 border-gray",children:(0,a.jsxs)("div",{className:"ml-[20px] grid grid-cols-7",children:[u("TC - ".concat(n.length)),u("PathName"),u("oldFieldType"),u("oldFieldValue"),u("newFieldType"),u("newFieldValue"),u("Response code")]})},"summary-header"),n&&Object.entries(n).map((function(t,r){return(0,a.jsx)("li",{className:"py-1 border-b border-gray ",children:(0,a.jsxs)("div",{className:"ml-[20px] grid grid-cols-7",children:[u(r+1),u(t[1].fieldName),u(t[1].oldFieldType),u(t[1].oldFieldValue),u(t[1].newFieldType),u(null===t[1].newFieldValue?"null":t[1].newFieldValue),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("input",{type:"text",value:t[1].status,onChange:function(a){!function(t,a){var r=n.map((function(n){return e(n,a)&&(n.status=t.target.value),n}));c(r)}(a,t[1])},className:"pr-2 text-center text-sm w-[60%] border-b-2 border-sky-600"}),(0,a.jsx)(i.default,{onResponseChange:function(a){return function(t,a){var r=n.map((function(n){return e(n,t)&&(n.response=a),n}));c(r)}(t[1],a)}})]})]})},t)}))]}):(0,a.jsx)(a.Fragment,{})})}},6761:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(4246),r=(n(7378),n(3960)),s=n(9072);const l=function(e){var t=e.flag,n=e.open,l=e.save,i=e.close,c=e.height,o=e.width,u=e.contentWidth,d=e.header,m=e.children,x=e.saveLabel,f=e.logo,h=e.logoLabel,p=e.labelClassName,g=e.logoClassName,y=e.buttonLabel;return(0,a.jsx)("div",{children:t?(0,a.jsx)("div",{className:"fixed z-10 inset-0 overflow-auto",children:(0,a.jsxs)("div",{className:"flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,a.jsx)("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:(0,a.jsx)("div",{className:"absolute inset-0 bg-gray-500 opacity-75"})}),(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left \n              overflow-hidden shadow-xl transform transition-all \n              flex flex-col justify-between \n              ".concat(c||"h-[300px]"," ").concat(o||""),children:[(0,a.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:(0,a.jsx)("div",{className:"sm:flex sm:items-start",children:(0,a.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[(0,a.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:d}),(0,a.jsx)("div",{className:"mt-2 ".concat(u),children:m})]})})}),(0,a.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[(0,a.jsx)(r.default,{label:"Close",size:"small",type:"primary",className:"h-[33px] !py-0 !mt-[3px]",onClick:i}),l&&(0,a.jsx)(r.default,{label:x||"Save",size:"small",type:"primary",className:"h-[33px] !py-0 !mt-[3px]",onClick:l})]})]})})]})}):f?(0,a.jsxs)("div",{className:"flex flex-row gap-3 ".concat(p),onClick:n,children:[(0,a.jsx)(s.G,{icon:f,className:"text-sky-600 ml-[10px] mt-[5px] w-[15px] h-[15px] cursor-pointer ".concat(g)}),h]}):(0,a.jsx)(r.default,{type:"primary_inverse",label:y,className:"ml-[20px] mt-[5px] ".concat(p),onClick:n})})}},9541:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(4246),r=n(5822);const s=function(e){var t=(0,r.fontSize)(e.size),n=e.error?"!border-red-500":"";return(0,a.jsx)("textarea",{className:"".concat("\nbg-[#f8f8f8] min-w-[25%] max-w-full min-h-[180px] p-[10px] \nborder-[2px] border-solid border-grey text-[14px]\n"," ").concat(t," ").concat(n," ").concat(e.className),name:e.name,placeholder:e.placeholder,onClick:e.onClick,defaultValue:e.defaultValue,value:e.value,onChange:e.onChange?e.onChange:function(t){if(e.readOnly)return"";e.setValue(t.target.value)},onPaste:function(t){if(e.readOnly)return"";t.preventDefault();var n=t.clipboardData.getData("text"),a=t.target,r=a.selectionStart,s=a.selectionEnd,l=e.value||"",i=l.slice(0,r)+n+l.slice(s);e.setValue(i),a.setSelectionRange(r+n.length,r+n.length)},readOnly:e.readOnly})}},4593:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(4246),r="\npx-[10px] text-[14px]\n",s="\nbg-white border-sky-600 text-sky-600 border-2 rounded-full\n";const l=function(e){return(0,a.jsxs)("div",{className:"".concat("\nflex justify-around min-w-[15%] p-1 mb-2 border-2 rounded-full border-sky-600 bg-gray-200\n"," ").concat(e.className),children:[(0,a.jsx)("button",{className:"".concat(r,"\n                    ").concat(0==e.flag?s:""),onClick:function(){return e.setFlag(0)},children:e.first}),(0,a.jsx)("button",{className:"".concat(r,"\n                    ").concat(1==e.flag?s:""),onClick:function(){return e.setFlag(1)},children:e.second}),(0,a.jsx)("button",{className:"".concat(r,"\n                    ").concat(2==e.flag?s:""),onClick:function(){return e.setFlag(2)},children:e.third}),(0,a.jsx)("button",{className:"".concat(r,"\n                    ").concat(3==e.flag?s:""),onClick:function(){return e.setFlag(3)},children:e.fourth})]})}}}]);