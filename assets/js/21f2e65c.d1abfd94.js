"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,f=d["".concat(c,".").concat(s)]||d[s]||u[s]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(35742);function l(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},90029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const o={title:"debt",description:"General government debt-to-GDP ratio measures the gross debt of the general government as a percentage of GDP",keywords:["economy","debt"]},i=void 0,c={unversionedId:"terminal/reference/economy/debt",id:"terminal/reference/economy/debt",title:"debt",description:"General government debt-to-GDP ratio measures the gross debt of the general government as a percentage of GDP",source:"@site/content/terminal/reference/economy/debt.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/debt",permalink:"/terminal/reference/economy/debt",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/debt.md",tags:[],version:"current",frontMatter:{title:"debt",description:"General government debt-to-GDP ratio measures the gross debt of the general government as a percentage of GDP",keywords:["economy","debt"]},sidebar:"tutorialSidebar",previous:{title:"cpi",permalink:"/terminal/reference/economy/cpi"},next:{title:"edebt",permalink:"/terminal/reference/economy/edebt"}},m={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"economy /debt - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"General government debt-to-GDP ratio measures the gross debt of the general government as a percentage of GDP. It is a key indicator for the sustainability of government finance."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"debt [-c COUNTRIES] [-s START_DATE] [-e END_DATE]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"countries"),(0,a.kt)("td",{parentName:"tr",align:null},"-c  --countries"),(0,a.kt)("td",{parentName:"tr",align:null},"Countries to get data for"),(0,a.kt)("td",{parentName:"tr",align:null},"united_states"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start_date"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,a.kt)("td",{parentName:"tr",align:null},"Start date of data, in YYYY-MM-DD format"),(0,a.kt)("td",{parentName:"tr",align:null},"1994-01-18"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"end_date"),(0,a.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,a.kt)("td",{parentName:"tr",align:null},"End date of data, in YYYY-MM-DD format"),(0,a.kt)("td",{parentName:"tr",align:null},"2024-01-18"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null))}s.isMDXComponent=!0}}]);