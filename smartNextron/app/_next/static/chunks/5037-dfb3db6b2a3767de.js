"use strict";(global.webpackChunk_N_E=global.webpackChunk_N_E||[]).push([[5037],{5770:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,importExportTestDataContext:()=>a});var n=r(4246),s=r(7378),a=s.createContext("");const l=function(e){var t=e.children,r=(0,s.useState)(!1),l=r[0],o=r[1],u=(0,s.useState)([]),c=u[0],i=u[1];(0,s.useEffect)((function(){o(!1)}),[]);var d={importFlag:l,setImportFlag:o,importedTestConfig:c,setImportedTestConfig:i};return(0,n.jsx)(a.Provider,{value:d,children:t})}},6045:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(4246),s=r(4075),a=r(6952),l=r(9753),o=r(6886),u=r(6185),c=r(6126),i=r(642),d=r(470),f=r(7082),m=r(2206),h=r(5770),x=r(3828),p=r(7456),g=r(7134),y=r(3719),v=r(7784),N=r(774),j=r(2442),b=r(1239);const C=function(e){var t=e.children;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(b.default,{children:(0,n.jsx)(j.default,{children:(0,n.jsx)(s.default,{children:(0,n.jsx)(l.default,{children:(0,n.jsx)(o.default,{children:(0,n.jsx)(u.default,{children:(0,n.jsx)(c.default,{children:(0,n.jsx)(i.default,{children:(0,n.jsx)(d.default,{children:(0,n.jsx)(g.default,{children:(0,n.jsx)(p.default,{children:(0,n.jsx)(y.default,{children:(0,n.jsx)(v.default,{children:(0,n.jsx)(f.default,{children:(0,n.jsx)(m.default,{children:(0,n.jsx)(h.default,{children:(0,n.jsx)(N.default,{children:(0,n.jsx)(x.default,{children:(0,n.jsx)(a.default,{children:t})})})})})})})})})})})})})})})})})})})})}},1919:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(9132),s=r(2706),a=r(5556),l=r(4246),o=r(7378),u=r(2442),c=r(3960),i=r(9753),d=r(6886),f=r(6126),m=r(642),h=r(6952),x=r(774),p=r(3828),g=r(7134),y=r(470),v=r(7456),N=r(4075),j=r(9718),b=r(1239),C=r(6185);const w=function(){var e=(0,o.useContext)(N.exportImportContext),t=e.setGlobalImportHTTPMethodFlag,r=e.setGlobalImportSingleFlag,w=e.setGlobalImportMultiFlag,E=e.setGlobalImportQueryFlag,T=e.setGlobalImportQueryParamFlag,S=(0,o.useContext)(i.httpMethodContext),F=S.HTTP_Method,R=S.setHTTP_Method,k=(0,o.useContext)(d.urlContext),_=k.url,Z=k.setUrl,q=(0,o.useContext)(f.headersContext),D=q.headers,M=q.setHeaders,P=(0,o.useContext)(m.jsonBodyContext),L=P.positive,H=P.parsedPositiveData,Q=P.setPositive,A=P.setParsedPositiveData,O=(0,o.useContext)(v.defaultCustomTestDataContext),G=O.configEntries,I=O.setConfigEntries,U=(0,o.useContext)(y.testDataConfigContext),V=U.singleTestConfig,K=U.setSingleTestConfig,z=U.multiTestConfig,J=U.setMultiTestconfig,B=U.multiHeaders,W=U.setMultiHeaders,$=(0,o.useContext)(g.queryTestDataConfigContext),X=$.querySingleTestConfig,Y=$.setQuerySingleTestConfig,ee=$.queryMultiTestConfig,te=$.setQueryMultiTestconfig,re=$.queryMultiHeaders,ne=$.setQueryMultiHeaders,se=(0,o.useContext)(p.testSummaryContext),ae=se.changeSummary,le=se.setChangeSummary,oe=se.multiChangeSummary,ue=se.setMultiChangeSummary,ce=(0,o.useContext)(x.testQuerySummaryContext),ie=ce.changeQuerySummary,de=ce.setChangeQuerySummary,fe=ce.multiChangeQuerySummary,me=ce.setMultiChangeQuerySummary,he=(0,o.useContext)(h.testResultContext),xe=he.result,pe=he.setResult,ge=(0,o.useContext)(u.collectionsContext),ye=ge.folderName,ve=(ge.setFolderName,ge.requestName),Ne=(ge.setRequestName,ge.requestClickFlag),je=ge.setRequestClickFlag,be=(0,o.useContext)(C.paramsContext),Ce=be.pathParams,we=be.setTempParams,Ee=(0,o.useContext)(b.preRequestContext),Te=Ee.tableData,Se=Ee.setTableData,Fe=function(){var e={};e.HTTP_Method=F||"",e.url=_||"",e.pathParams=Ce||[],e.headers=D?JSON.parse(D):{},e.positive=L?JSON.parse(L):{},e.parsedPositiveData=H||{},e.singleTestConfig=V||[],e.singleQueryTestConfig=X||[],e.multiTestConfig=z||[],e.multiQueryTestConfig=ee||[],e.multiHeaders=B||[],e.queryMultiHeaders=re||[],e.configEntries=G,e.result=xe||[],e.changeSummary=ae||{},e.changeQuerySummary=ie||{},e.multiChangeSummary=oe||{},e.multiChangeQuerySummary=fe||{};var t=[];return Te&&(t=Te.map((function(e){var t=(0,s.Z)(e,5);return{sourceRequest:t[0],sourceType:t[1],sourceKey:t[2],destType:t[3],destKey:t[4]}}))),e.preRequest=t,e},Re="http://localhost:8082/save",ke=function(){var e=(0,n.Z)((function(){var e;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,j.Z.post(Re,Fe(),{params:{folderName:ye,requestName:ve},metadata:{name:"exportData"}})];case 1:return t.sent(),[3,3];case 2:return e=t.sent(),console.error("Error saving request:",e),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),_e=(0,o.useState)(JSON.stringify({})),Ze=_e[0],qe=_e[1],De=(0,o.useState)(!1),Me=De[0],Pe=De[1];(0,o.useEffect)((function(){if(Me&&Ze){t(!0),T(!0),E(!0),r(!0),w(!0),Pe(!1);var e=Ze;if(R(e.HTTP_Method),we(e.pathParams),Z(e.url),0===Object.keys(e.headers).length?M(""):M(JSON.stringify(e.headers,null,2)),0===Object.keys(e.positive).length?Q(""):Q(JSON.stringify(e.positive,null,2)),A(e.parsedPositiveData),K(e.singleTestConfig),Y(e.singleQueryTestConfig),J(e.multiTestConfig),W(e.multiHeaders),te(e.multiQueryTestConfig),ne(e.queryMultiHeaders),I(e.configEntries),le(e.changeSummary),de(e.changeQuerySummary),ue(e.multiChangeSummary),me(e.multiChangeQuerySummary),pe(e.result),Array.isArray(e.preRequest)&&e.preRequest.some((function(e){return"object"===typeof e}))){var n=e.preRequest.map((function(e){return[e.sourceRequest,e.sourceType,e.sourceKey,e.destType,e.destKey]}));Se(n)}else Se([])}}),[Ze]);var Le=function(){var e=(0,n.Z)((function(){return(0,a.__generator)(this,(function(e){switch(e.label){case 0:return[4,j.Z.get(Re,{params:{folderName:ye,requestName:ve},metadata:{name:"importData"}}).then((function(e){qe(e.data),Pe(!0)})).catch((function(e){console.error("Error retrieving data:",e)}))];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}(),He=(0,o.useState)(!1),Qe=He[0],Ae=He[1];return(0,o.useEffect)((function(){Ne&&(t(!0),T(!0),E(!0),r(!0),w(!0),Pe(!1),we([]),Z([]),M(""),Q(""),A([]),K([]),Y([]),J([]),W([]),te([]),ne([]),I([]),le([]),de([]),ue([]),me([]),pe([]),Se([]),Le(),je(!1),Ae(!1))}),[Ne]),(0,o.useEffect)((function(){Qe||Ae(!0)}),[Qe]),Qe?ye?(0,l.jsxs)("div",{className:"flex w-full",children:[(0,l.jsxs)("p",{className:"ml-[10px] mr-[35px]",children:[ye," / ",ve]}),(0,l.jsx)(c.default,{label:"Save",size:"small",type:"primary_inverse",className:"h-[33px] !m-0",onClick:function(){return Ae(!1),void ke()}})]}):(0,l.jsx)("p",{className:"italic",children:"New Request - Kindly create new req before start / export and import this in new request"}):(0,l.jsx)(l.Fragment,{})}},8922:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var n=r(9132),s=r(5556),a=r(4246),l=r(7378),o=r(6895),u=r(9072),c=r(9374),i=r(9718),d=r(6761),f=r(9064),m=r(2442),h=(r(6617),function(e){var t=(0,l.useState)(!1),r=t[0],o=t[1],i=e.width?e.width:"w-[30px]",m=(e.height&&e.height,e.text&&e.text,(0,l.useRef)(null)),h=function(e){m.current&&!m.current.contains(e.target)&&o(!1)};(0,l.useEffect)((function(){return document.addEventListener("click",h),function(){document.removeEventListener("click",h)}}),[]);var x=(0,l.useState)(!1),p=x[0],g=x[1],y=(0,l.useState)(!1),N=y[0],C=y[1],w=(0,l.useState)(!1),E=w[0],T=w[1],R=(0,l.useState)(!1),k=R[0],_=R[1],Z=(0,l.useState)(""),q=Z[0],D=Z[1],M=function(){var t=(0,n.Z)((function(){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,j(q,e.folderName)];case 1:return t.sent(),D(""),b(e.setCollections),g(!1),o(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}(),P=function(){var t=(0,n.Z)((function(){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,v(e.folderName)];case 1:return t.sent(),C(!1),o(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}(),L=function(){var t=(0,n.Z)((function(){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,S(e.folderName)];case 1:return t.sent(),b(e.setCollections),T(!1),o(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}(),H=function(){var t=(0,n.Z)((function(){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,F(e.folderName,q)];case 1:return t.sent(),D(""),b(e.setCollections),_(!1),o(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}();!function(){var t=(0,n.Z)((function(){var t,r,n,a,l,u;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),t={folderName:e.folderName},r=new URLSearchParams(t).toString(),n="http://localhost:8082/download-folder?".concat(r),[4,fetch(n,{method:"GET",responseType:"blob"})];case 1:return[4,s.sent().blob()];case 2:return a=s.sent(),l=URL.createObjectURL(a),(u=document.createElement("a")).href=l,u.download="downloaded-folder.zip",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(l),[3,4];case 3:return s.sent(),[3,4];case 4:return g(!1),o(!1),[2]}}))}))}();return(0,a.jsxs)("div",{ref:m,className:"relative flex flex-col rounded-lg ".concat(i," ").concat(e.className),children:[(0,a.jsx)(u.G,{icon:c.S6C,className:"mt-[5px] w-[15px] h-[15px] text-sky-600 hover:cursor-pointer",onClick:function(){o(!r)}}),r&&(0,a.jsxs)("div",{className:"absolute opacity-100 bg-sky-400 border-[1px] border-gray-400 mt-[2px] z-30 flex flex-col items-start rounded-lg p-1 w-[200px] text-black",children:[(0,a.jsx)(d.default,{logo:c.x58,logoLabel:" Add New Request",logoClassName:"text-white ",labelClassName:" hover:text-white hover:cursor-pointer",flag:p,open:function(){return g(!0)},close:function(){return g(!1)},save:function(){M()},height:"h-[200px]",width:"w-[30%]",header:"New Request",children:(0,a.jsxs)("div",{className:"mt-[25px] flex gap-5 justify-between",children:[(0,a.jsx)("p",{className:"mt-[5px]",children:"Request Name"}),(0,a.jsx)(f.default,{className:"w-[210px]",value:q,setValue:D})]})}),(0,a.jsx)(d.default,{logo:c.x58,logoLabel:" Run Folder",logoClassName:"text-white ",labelClassName:" hover:text-white hover:cursor-pointer",flag:N,open:function(){return C(!0)},close:function(){return C(!1)},save:function(){P()},saveLabel:"Run",height:"h-[200px]",width:"w-[30%]",header:"Folder Runner",children:(0,a.jsx)("div",{className:"mt-[25px] flex gap-5 justify-between",children:(0,a.jsxs)("p",{className:"mt-[5px]",children:["Do You want to Run folder named - ",e.folderName]})})}),(0,a.jsxs)(d.default,{logo:c.IwR,logoLabel:"Rename Folder",logoClassName:"text-white ",labelClassName:" hover:text-white hover:cursor-pointer",flag:k,open:function(){return _(!0)},close:function(){return _(!1)},save:function(){H()},height:"h-[200px]",width:"w-[30%]",header:"Rename Folder",children:[(0,a.jsxs)("p",{children:["Old Folder Name - ",e.folderName]}),(0,a.jsxs)("div",{className:"flex gap-5 justify-between",children:[(0,a.jsx)("p",{className:"mt-[5px]",children:"New Folder Name"}),(0,a.jsx)(f.default,{className:"w-[210px]",value:q,setValue:D})]})]}),(0,a.jsx)(d.default,{logo:c.$aW,logoLabel:"Delete Folder",logoClassName:"text-white ",labelClassName:" hover:text-white hover:cursor-pointer",flag:E,open:function(){return T(!0)},close:function(){return T(!1)},save:function(){L()},height:"h-[200px]",width:"w-[30%]",header:"Delete Folder",children:(0,a.jsx)("div",{className:"mt-[25px] flex gap-5 justify-between",children:(0,a.jsxs)("p",{className:"mt-[5px]",children:["Are you sure to delete the folder : ",e.folderName]})})})]})]})}),x=function(e){var t=e.collectionName,r=e.setCollections,n=(0,l.useState)(!1),s=n[0],o=n[1];return(0,a.jsxs)("div",{className:"flex flex-row justify-between w-full hover:text-sky-600 hover:border-l-2 hover:border-sky-600 hover:cursor-pointer",onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)},children:[(0,a.jsx)("p",{className:"mx-2 text-[14px] font-600 hover:text-sky-600 hover:cursor-pointer w-full",children:t}),s&&(0,a.jsx)(h,{folderName:t,setCollections:r})]})},p=function(e){var t=(0,l.useState)(!1),r=t[0],o=t[1],i=e.width?e.width:"w-[30px]",m=(e.height&&e.height,e.text&&e.text,(0,l.useRef)(null)),h=function(e){m.current&&!m.current.contains(e.target)&&o(!1)};(0,l.useEffect)((function(){return document.addEventListener("click",h),function(){document.removeEventListener("click",h)}}),[]);var x=(0,l.useState)(!1),p=x[0],g=x[1],y=(0,l.useState)(!1),v=y[0],N=y[1],j=(0,l.useState)(""),E=j[0],T=j[1],S=function(){var t=(0,n.Z)((function(){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,w(e.requestName,e.folderName)];case 1:return t.sent(),b(e.setCollections),g(!1),o(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}(),F=function(){var t=(0,n.Z)((function(){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,C(e.requestName,E,e.folderName)];case 1:return t.sent(),T(""),b(e.setCollections),N(!1),o(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}();return(0,a.jsxs)("div",{ref:m,className:"relative flex flex-col rounded-lg ".concat(i," ").concat(e.className),children:[(0,a.jsx)(u.G,{icon:c.S6C,className:"mt-[5px] w-[15px] h-[15px] text-sky-600 hover:cursor-pointer",onClick:function(){o(!r)}}),r&&(0,a.jsxs)("div",{className:"absolute opacity-100 bg-sky-400 border-[1px] border-gray-400 mt-[2px] z-30 flex flex-col items-start rounded-lg p-1 w-[200px] text-black",children:[(0,a.jsxs)(d.default,{logo:c.IwR,logoLabel:"Rename Request",logoClassName:"text-white ",labelClassName:" hover:text-white hover:cursor-pointer",flag:v,open:function(){return N(!0)},close:function(){return N(!1)},save:function(){F()},height:"h-[200px]",width:"w-[30%]",header:"Rename Request",children:[(0,a.jsxs)("p",{children:["Old Request Name - ",e.requestName]}),(0,a.jsxs)("div",{className:"flex gap-5 justify-between",children:[(0,a.jsx)("p",{className:"mt-[5px]",children:"New Request Name"}),(0,a.jsx)(f.default,{className:"w-[210px]",value:E,setValue:T})]})]}),(0,a.jsx)(d.default,{logo:c.$aW,logoLabel:"Delete Request",logoClassName:"text-white ",labelClassName:" hover:text-white hover:cursor-pointer",flag:p,open:function(){return g(!0)},close:function(){return g(!1)},save:function(){S()},height:"h-[200px]",width:"w-[30%]",header:"Delete Request",children:(0,a.jsx)("div",{className:"mt-[25px] flex gap-5 justify-between",children:(0,a.jsxs)("p",{className:"mt-[5px]",children:["Are you sure to delete the request : ",e.requestName]})})})]})]})},g=function(e){var t=e.folderName,r=e.requestName,n=e.setCollections,s=(0,l.useContext)(m.collectionsContext),o=s.setFolderName,u=s.setRequestName,c=s.setRequestClickFlag,i=(0,l.useState)(!1),d=i[0],f=i[1];return(0,a.jsxs)("div",{className:"flex flex-row justify-between w-full",onMouseEnter:function(){f(!0)},onMouseLeave:function(){f(!1)},children:[(0,a.jsx)("p",{className:"ml-[10px] text-[12px] mr-4 hover:text-sky-600 hover:cursor-pointer w-full",onClick:function(){o(t),u(r),c(!0)},children:r.length<=20?r:r.substring(0,17)+"..."}),d&&(0,a.jsx)(p,{folderName:t,requestName:r,setCollections:n})]})};function y(e){var t=e.collections,r=e.setCollections,n=Object.keys(t).sort();return(0,a.jsx)("div",{className:"mt-[10px] ml-[10px]",children:n.map((function(e){return(0,a.jsxs)("div",{className:"mb-[15px]",children:[(0,a.jsx)(x,{collectionName:e,setCollections:r},e),t[e].sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(t){return(0,a.jsx)("div",{className:"hover:text-sky-600 hover:border-l-2 hover:border-sky-600 hover:cursor-pointer flex justify-between",children:(0,a.jsx)(g,{requestName:t.name,folderName:e,setCollections:r})},t.name)}))]},e)}))})}var v=function(){var e=(0,n.Z)((function(e){var t;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return[4,i.Z.post("http://localhost:8082/runCollection",null,{params:{folderName:e},metadata:{name:"runCollection"}})];case 1:return t=r.sent(),console.error(t.data),[2]}}))}));return function(t){return e.apply(this,arguments)}}(),N="http://localhost:8082/files",j=function(){var e=(0,n.Z)((function(e,t){var r,n;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,i.Z.post(N,null,{params:{fileName:e,folderName:t},metadata:{name:"createFile"}})];case 1:return"File created successfully"===(r=s.sent()).data?console.log("CREATE - File created successfully"):"File already exists"===r.data?console.log("CREATE - File already exists"):console.log("CREATE - Failed to create file"),[3,3];case 2:return n=s.sent(),console.error("CREATE - Error creating file:",n),[3,3];case 3:return[2]}}))}));return function(t,r){return e.apply(this,arguments)}}(),b=function(){var e=(0,n.Z)((function(e){return(0,s.__generator)(this,(function(t){return i.Z.get(N,{headers:{"X-Request-Name":"RetrieveFile"}}).then((function(t){e(t.data)})).catch((function(e){console.error("Error fetching collections:",e)})),[2]}))}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,n.Z)((function(e,t,r){var n,a;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,i.Z.put(N,null,{params:{oldFileName:e,newFileName:t,folderName:r},metadata:{name:"renameFile"}})];case 1:return"File renamed successfully"===(n=s.sent()).data?console.log("RENAME - File renamed successfully"):"Failed to rename file"===n.data?console.log("RENAME - Failed to rename file"):console.log("RENAME - File does not exist"),[3,3];case 2:return a=s.sent(),console.error("RENAME - Error renaming file:",a),[3,3];case 3:return[2]}}))}));return function(t,r,n){return e.apply(this,arguments)}}(),w=function(){var e=(0,n.Z)((function(e,t){var r,n;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,i.Z.delete(N,{params:{fileName:e,folderName:t},metadata:{name:"deleteFile"}})];case 1:return"File deleted successfully"===(r=s.sent()).data?console.log("DELETE - File deleted successfully"):"Failed to delete file"===r.data?console.log("DELETE - Failed to delete file"):console.log("DELETE - File does not exist"),[3,3];case 2:return n=s.sent(),console.error("DELETE - Error deleting file:",n),[3,3];case 3:return[2]}}))}));return function(t,r){return e.apply(this,arguments)}}(),E="http://localhost:8082/directory",T=function(){var e=(0,n.Z)((function(e){var t;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,i.Z.post(E,null,{params:{folderName:e},metadata:{name:"createDirectory"}})];case 1:return"Directory created successfully"===r.sent().data?console.log("Directory created successfully"):console.log("Failed to create directory"),[3,3];case 2:return t=r.sent(),console.error("Error creating directory:",t),[3,3];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=(0,n.Z)((function(e){var t,r;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,i.Z.delete(E,{params:{folderName:e},metadata:{name:"deleteDirectory"}})];case 1:return"Directory deleted successfully"===(t=n.sent()).data?console.log("Directory deleted successfully"):"Directory does not exist"===t.data?console.log("Directory does not exist"):console.log("Failed to delete directory"),[3,3];case 2:return r=n.sent(),console.error("Error deleting directory:",r),[3,3];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=(0,n.Z)((function(e,t){var r,n;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,i.Z.put(E,null,{params:{oldFolderName:e,newFolderName:t},metadata:{name:"renameDirectory"}})];case 1:return"Directory renamed successfully"===(r=s.sent()).data?console.log("Directory renamed successfully"):"Directory does not exist"===r.data?console.log("Directory does not exist"):console.log("Failed to rename directory"),[3,3];case 2:return n=s.sent(),console.error("Error renaming directory:",n),[3,3];case 3:return[2]}}))}));return function(t,r){return e.apply(this,arguments)}}(),R=function(){var e=(0,n.Z)((function(e){var t,r;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,i.Z.patch(E,null,{params:{folderPath:e},metadata:{name:"setDirectoryPath"}})];case 1:return t=n.sent(),console.log("Directory folderPath set successfully"+t.data),[3,3];case 2:return r=n.sent(),console.error("Error setting directory path:",r),[3,3];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}();const k=function(){var e=(0,l.useState)({}),t=e[0],r=e[1];(0,l.useEffect)((function(){b(r)}),[]);var m=(0,l.useState)(""),h=m[0],x=m[1],p=(0,l.useState)(""),g=p[0],v=p[1],N=(0,l.useState)(!1),j=N[0],C=N[1],w=(0,l.useState)(!1),E=w[0],S=w[1],F=function(){var e=(0,n.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,T(g)];case 1:return e.sent(),b(r),v(""),S(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,n.Z)((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,R(h)];case 1:return e.sent(),b(r),v(""),C(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,a.jsxs)("div",{className:"flex flex-col w-[15%] border border-2 border-solid border-green ml-[15px]",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)(o.default,{label:"Collections"}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(d.default,{logo:c.MDP,logoClassName:"mt-[20px] pt-[13px] pr-[10px]",flag:j,open:function(){return C(!0)},close:function(){return C(!1)},save:function(){k()},height:"h-[200px]",width:"w-[30%]",header:"Git Folder Path",children:(0,a.jsxs)("div",{className:"mt-[25px] flex gap-5 justify-between",children:[(0,a.jsx)("p",{className:"mt-[5px]",children:"Git Folder Path"}),(0,a.jsx)(f.default,{className:"w-[210px]",value:h,setValue:x})]})}),(0,a.jsx)(d.default,{logo:c.x58,logoClassName:"mt-[20px] pt-[13px] pr-[20px]",flag:E,open:function(){return S(!0)},close:function(){return S(!1)},save:function(){F()},height:"h-[200px]",width:"w-[30%]",header:"New Folder",children:(0,a.jsxs)("div",{className:"mt-[25px] flex gap-5 justify-between",children:[(0,a.jsx)("p",{className:"mt-[5px]",children:"Folder Name"}),(0,a.jsx)(f.default,{className:"w-[210px]",value:g,setValue:v})]})}),(0,a.jsx)(u.G,{onClick:function(){(0,i.Z)({url:"http://localhost:8082/download",method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),r=document.createElement("a");r.href=t,r.setAttribute("download","report.html"),document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(t)})).catch((function(e){console.error(e)}))},icon:c.q7m,className:"text-sky-600 mt-[16px] mr-[10px] w-[15px] h-[15px] cursor-pointer"})]})]}),(0,a.jsx)("p",{className:"border-b-2 mt-[10px]"}),(0,a.jsx)(y,{collections:t,setCollections:r})]})}},6762:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(1946),s=r(8772),a=r(3334),l=r(3573),o=r(4246),u=r(7378),c=r(3960),i=r(4424),d=r(5321),f=r(6693),m=r(1043);const h=function(e){var t=e.data,r=e.setData,h=(0,u.useState)({column1:"",column2:""}),x=h[0],p=h[1],g=(0,u.useState)(null),y=g[0],v=g[1],N=function(e,t){var r=e.target.value;p((0,a.Z)((0,s.Z)({},x),(0,n.Z)({},t,r)))};return(0,o.jsx)("div",{className:"relative overflow-auto shadow-md sm:rounded-lg w-full h-[40vh]",children:(0,o.jsxs)("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[(0,o.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,o.jsx)("tr",{children:["Key","Value","Actions"].map((function(e,t){return(0,o.jsx)("th",{scope:"col",className:"border border-gray-300 px-6 py-3 text-sky-600",children:e},t)}))})}),(0,o.jsxs)("tbody",{children:[t&&t.map((function(e){return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{className:"border border-gray-300 py-2 px-5",children:y===e.id?(0,o.jsx)("input",{type:"text",className:"p-1 border border-gray-300 rounded-md",value:x.column1,onChange:function(e){return N(e,"column1")}}):e.column1}),(0,o.jsx)("td",{className:"border border-gray-300 py-2 px-5",children:y===e.id?(0,o.jsx)("input",{type:"text",className:"p-1 border border-gray-300 rounded-md",value:x.column2,onChange:function(e){return N(e,"column2")}}):e.column2.length<=20?e.column2:e.column2.substring(0,17)+"..."}),(0,o.jsx)("td",{className:"border border-gray-300 p-2",children:y===e.id?(0,o.jsxs)("div",{className:"ml-[10px] flex gap-3",children:[(0,o.jsx)(f.default,{onClick:function(){return t=e.id,r((function(e){return e.map((function(e){return e.id===t?(0,a.Z)((0,s.Z)({},e),{column1:x.column1,column2:x.column2}):e}))})),v(null),void p({column1:"",column2:""});var t}}),(0,o.jsx)(m.default,{onClick:function(){return v(null),void p({column1:"",column2:""})}})]}):(0,o.jsxs)("div",{className:"ml-[10px] flex gap-3",children:[(0,o.jsx)(d.default,{onClick:function(){return function(e){var r=t.find((function(t){return t.id===e}));p((0,s.Z)({},r)),v(e)}(e.id)}}),(0,o.jsx)(i.default,{onClick:function(){return n=e.id,void r(t.filter((function(e){return e.id!==n})));var n}})]})})]},e.id)})),null===y&&(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{className:"border border-gray-300 p-2",children:(0,o.jsx)("input",{type:"text",placeholder:"key",className:"p-1 border border-gray-300 rounded-md",value:x.column1,onChange:function(e){return N(e,"column1")}})}),(0,o.jsx)("td",{className:"border border-gray-300 p-2",children:(0,o.jsx)("input",{type:"text",placeholder:"value",className:"p-1 border border-gray-300 rounded-md",value:x.column2,onChange:function(e){return N(e,"column2")}})}),(0,o.jsx)("td",{className:"border border-gray-300 p-2",children:(0,o.jsx)(c.default,{type:"primary_inverse",label:"Add",onClick:function(){r((0,l.Z)(t).concat([(0,a.Z)((0,s.Z)({},x),{id:t.length+1})])),p({column1:"",column2:""})}})})]})]})]})})}},4759:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(8772),s=r(3334),a=r(4246),l=r(7378),o=r(9753),u=r(4075),c=r(8914),i=r(1530);const d=function(){var e=(0,l.useContext)(o.httpMethodContext),t=e.HTTP_Method,r=e.setHTTP_Method,d=(0,l.useContext)(u.exportImportContext),f=d.globalImportHTTPMethodFlag,m=d.setGlobalImportHTTPMethodFlag,h=(0,l.useState)(c.methods),x=h[0],p=h[1];return(0,l.useEffect)((function(){f&&t&&Object.keys(t)&&(p(x.map((function(e){return e.label===t.label?(0,s.Z)((0,n.Z)({},e),{selected:!0}):(0,s.Z)((0,n.Z)({},e),{selected:!1})}))),m(!1))}),[f]),(0,a.jsx)(i.default,{options:x,setOptions:p,setValue:r,width:"w-[140px]",height:"h-[37px]",className:"mt-[3px]"})}},1453:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(4246),s=r(7378),a=r(6886),l=r(9064);const o=function(){var e=(0,s.useContext)(a.urlContext),t=e.url,r=e.setUrl;return(0,n.jsx)(l.default,{size:"small",placeholder:"Enter the Url",setValue:r,value:t,className:"ml-[5px] w-[70%] h-[37px]"})}},7155:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(4246),s=r(7135),a=r(4759),l=r(1453),o=r(1919);r(7378);const u=function(){return(0,n.jsxs)("div",{className:"flex flex-col gap-2 mx-[20px] mb-[10px]",children:[(0,n.jsx)(o.default,{}),(0,n.jsx)("p",{className:"flex border-t-2 border-gray ",children:" "}),(0,n.jsxs)("div",{className:"flex ",children:[(0,n.jsx)(a.default,{}),(0,n.jsx)(l.default,{}),(0,n.jsx)(s.default,{})]})]})}},8914:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,methods:()=>n});var n=[{value:"get",label:"GET",selected:!0},{value:"post",label:"POST",selected:!1},{value:"put",label:"PUT",selected:!1},{value:"patch",label:"PATCH",selected:!1},{value:"delete",label:"DELETE",selected:!1}];const s=function(){}},5037:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(4246),s=r(6045),a=r(8922),l=(r(6762),r(7155)),o=r(3484);const u=function(){return(0,n.jsx)(s.default,{children:(0,n.jsxs)("div",{className:"flex flex-row",children:[(0,n.jsx)(a.default,{}),(0,n.jsxs)("div",{className:"flex flex-col w-full",children:[(0,n.jsx)(l.default,{}),(0,n.jsx)(o.default,{})]})]})})}},1043:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(4246),s=r(9072),a=r(9374),l=r(6617);function o(e){return(0,n.jsx)(l.default,{message:"Cancel",position:"left",children:(0,n.jsx)("div",{className:"min-w-[15px] min-h-[15px] cursor-pointer",onClick:e.onClick,children:(0,n.jsx)(s.G,{icon:a.g82,className:"".concat(e.className," text-sky-600")})})})}},6693:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(4246),s=r(9072),a=r(9374),l=r(6617);function o(e){return(0,n.jsx)(l.default,{message:"Save",position:"right",children:(0,n.jsx)("div",{className:"min-w-[15px] min-h-[15px] cursor-pointer",onClick:e.onClick,children:(0,n.jsx)(s.G,{icon:a.LEp,className:"".concat(e.className," text-sky-600")})})})}}}]);