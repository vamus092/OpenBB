"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},28392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905)),i=n(88828);const l={title:"spending",description:"General government spending provides an indication of the size of government across countries",keywords:["economy","spending"]},o=void 0,p={unversionedId:"terminal/reference/economy/spending",id:"terminal/reference/economy/spending",title:"spending",description:"General government spending provides an indication of the size of government across countries",source:"@site/content/terminal/reference/economy/spending.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/spending",permalink:"/terminal/reference/economy/spending",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/spending.md",tags:[],version:"current",frontMatter:{title:"spending",description:"General government spending provides an indication of the size of government across countries",keywords:["economy","spending"]},sidebar:"tutorialSidebar",previous:{title:"rgdp",permalink:"/terminal/reference/economy/rgdp"},next:{title:"treasury",permalink:"/terminal/reference/economy/treasury"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"economy /spending - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"General government spending provides an indication of the size of government across countries. The large variation in this indicator highlights the variety of countries' approaches to delivering public goods and services and providing social protection, not necessarily differences in resources spent"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"spending [-c COUNTRIES] [-p {TOT,RECULTREL,HOUCOMM,PUBORD,EDU,ENVPROT,GRALPUBSER,SOCPROT,ECOAFF,DEF,HEALTH}] [-u {PC_GDP,THND_USD_CAP}] [-s START_DATE] [-e END_DATE]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"countries"),(0,a.kt)("td",{parentName:"tr",align:null},"-c  --countries"),(0,a.kt)("td",{parentName:"tr",align:null},"Countries to get data for"),(0,a.kt)("td",{parentName:"tr",align:null},"united_states"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"perspective"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --perspective"),(0,a.kt)("td",{parentName:"tr",align:null},"Use either TOT (Total), RECULTREL (Recreation, culture and religion), HOUCOMM (Housing and community amenities), PUBORD (Public order and safety), EDU (Education), ENVPROT (Environmental protection), GRALPUBSER (General public services), SOCPROT (Social protection), ECOAFF (Economic affairs), DEF (Defence), HEALTH (Health)"),(0,a.kt)("td",{parentName:"tr",align:null},"TOT"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"TOT, RECULTREL, HOUCOMM, PUBORD, EDU, ENVPROT, GRALPUBSER, SOCPROT, ECOAFF, DEF, HEALTH")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"units"),(0,a.kt)("td",{parentName:"tr",align:null},"-u  --units"),(0,a.kt)("td",{parentName:"tr",align:null},"Use either THND_USD_CAP (thousands of USD per capity) or PC_GDP (percentage of GDP)"),(0,a.kt)("td",{parentName:"tr",align:null},"PC_GDP"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"PC_GDP, THND_USD_CAP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start_date"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,a.kt)("td",{parentName:"tr",align:null},"Start date of data, in YYYY-MM-DD format"),(0,a.kt)("td",{parentName:"tr",align:null},"1993-11-24"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"end_date"),(0,a.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,a.kt)("td",{parentName:"tr",align:null},"End date of data, in YYYY-MM-DD format"),(0,a.kt)("td",{parentName:"tr",align:null},"2023-11-24"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);