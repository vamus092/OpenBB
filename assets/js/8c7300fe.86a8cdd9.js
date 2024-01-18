"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,y=u["".concat(m,".").concat(s)]||u[s]||c[s]||l;return r?a.createElement(y,i(i({ref:t},d),{},{components:r})):a.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},6780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const i={title:"TREASURY_RATES",description:"Government Treasury Rates",keywords:["fixedincome","government","treasury_rates"]},o=void 0,m={unversionedId:"excel/reference/fixedincome/government/treasury_rates",id:"excel/reference/fixedincome/government/treasury_rates",title:"TREASURY_RATES",description:"Government Treasury Rates",source:"@site/content/excel/reference/fixedincome/government/treasury_rates.md",sourceDirName:"excel/reference/fixedincome/government",slug:"/excel/reference/fixedincome/government/treasury_rates",permalink:"/excel/reference/fixedincome/government/treasury_rates",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/fixedincome/government/treasury_rates.md",tags:[],version:"current",frontMatter:{title:"TREASURY_RATES",description:"Government Treasury Rates",keywords:["fixedincome","government","treasury_rates"]},sidebar:"tutorialSidebar",previous:{title:"FIXEDINCOME.GOVERNMENT",permalink:"/excel/reference/fixedincome/government/"},next:{title:"US_YIELD_CURVE",permalink:"/excel/reference/fixedincome/government/us_yield_curve"}},p={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],u={toc:d},c="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"FIXEDINCOME.GOVERNMENT.TREASURY_RATES | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Government Treasury Rates."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.FIXEDINCOME.GOVERNMENT.TREASURY_RATES([start_date];[end_date];[provider])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.FIXEDINCOME.GOVERNMENT.TREASURY_RATES()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: federal_reserve, fmp, defaults to federal_reserve."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"month_1"),(0,n.kt)("td",{parentName:"tr",align:null},"1 month treasury rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"month_2"),(0,n.kt)("td",{parentName:"tr",align:null},"2 month treasury rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"month_3"),(0,n.kt)("td",{parentName:"tr",align:null},"3 month treasury rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"month_6"),(0,n.kt)("td",{parentName:"tr",align:null},"6 month treasury rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year_1"),(0,n.kt)("td",{parentName:"tr",align:null},"1 year treasury rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year_2"),(0,n.kt)("td",{parentName:"tr",align:null},"2 year treasury rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year_3"),(0,n.kt)("td",{parentName:"tr",align:null},"3 year treasury rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year_5"),(0,n.kt)("td",{parentName:"tr",align:null},"5 year treasury rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year_7"),(0,n.kt)("td",{parentName:"tr",align:null},"7 year treasury rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year_10"),(0,n.kt)("td",{parentName:"tr",align:null},"10 year treasury rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year_20"),(0,n.kt)("td",{parentName:"tr",align:null},"20 year treasury rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"year_30"),(0,n.kt)("td",{parentName:"tr",align:null},"30 year treasury rate.")))))}s.isMDXComponent=!0}}]);