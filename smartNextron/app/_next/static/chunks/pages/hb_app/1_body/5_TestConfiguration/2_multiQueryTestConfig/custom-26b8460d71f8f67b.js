(global.webpackChunk_N_E=global.webpackChunk_N_E||[]).push([[806],{1634:(t,e,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hb_app/1_body/5_TestConfiguration/2_multiQueryTestConfig/custom",function(){return s(4327)}])},7784:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a,multiQueryCustomTestDataContext:()=>o});var r=s(4246),n=s(7378),o=n.createContext("");const a=function(t){var e=t.children,s=(0,n.useState)(!1),a=s[0],i=s[1],u=(0,n.useState)({}),c=u[0],l=u[1],h=(0,n.useState)({}),x=h[0],d=h[1],p=(0,n.useState)({}),g={modalIsOpen:a,setModalIsOpen:i,path:c,setPath:l,type:p[0],setType:p[1],index:x,setIndex:d};return(0,r.jsx)(o.Provider,{value:g,children:e})}},4327:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var r=s(4246),n=s(7378),o=s(9072),a=s(9374),i=s(6617),u=s(7784);const c=function(t){var e=(0,n.useContext)(u.multiQueryCustomTestDataContext),s=e.modalIsOpen,c=e.setModalIsOpen,l=e.setPath,h=e.setIndex,x=e.setType;return(0,n.useEffect)((function(){s||(l({}),h({}))}),[s]),(0,r.jsx)(i.default,{message:"Custom",position:"right",children:(0,r.jsx)(o.G,{icon:a.Yai,className:"text-sky-600 ml-[20px] my-auto w-[20px] h-[20px] cursor-pointer",onClick:function(){return c(!0),l(t.path),h(t.index),void x(t.type)}})})}},5822:(t,e,s)=>{"use strict";function r(t){return t?"extralarge"===t.toLowerCase()?"text-xl":"large"===t.toLowerCase()?"text-lg":"medium"===t.toLowerCase()?"text-base":"text-sm":"text-sm"}function n(t){var e="text-white hover:text-white \n    bg-sky-600 hover:bg-sky-400 active:bg-sky-600";return t?"primary"===t.toLowerCase()?e:"primary_inverse"===t.toLowerCase()?"\n    text-sky-600 \n    bg-white-400\n    border border-sky-600\n    hover:text-sky \n    hover:bg-white-600\n    active:bg-white-600":"primary_link"===t.toLowerCase()?"\n    text-sky-600 \n    bg-white-400\n    hover:text-sky \n    hover:bg-white-600\n    active:bg-white-600":"secondary"===t.toLowerCase()||"warning"===t.toLowerCase()?"text-white hover:text-white \n    bg-sky-400 hover:bg-sky-600 active:bg-sky-600":e:e}s.r(e),s.d(e,{default:()=>o,fontSize:()=>r,typeColor:()=>n});const o=function(){}},6617:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});var r=s(4246),n=s(5822);function o(t){return(0,r.jsxs)("div",{className:"group relative flex z-4",children:[t.children,(0,r.jsx)("span",{className:"".concat("absolute \nrounded bg-gray-800 scale-0 transition-all \np-2 text-xs text-white group-hover:scale-100"," ").concat("right"==t.position?"left-10 right-50":"lessRight"==t.position?"left-5 right-20":"left"==t.position?"right-10 left-50":"top-8").concat((0,n.fontSize)(t.size)," ").concat(t.className),children:t.message})]})}}},t=>{t.O(0,[9570,9072,9774,2888,179],(()=>{return e=1634,t(t.s=e);var e}));var e=t.O();_N_E=e}]);