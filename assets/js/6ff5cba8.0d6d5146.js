"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66948],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),d=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=d(e.components);return o.createElement(l.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(t),p=n,u=m["".concat(l,".").concat(p)]||m[p]||f[p]||i;return t?o.createElement(u,a(a({ref:r},s),{},{components:t})):o.createElement(u,a({ref:r},s))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[m]="string"==typeof e?e:n,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var o=t(39960),n=t(86010),i=t(67294),a=t(16550),c=t(48334);function l(e){let{title:r,url:t,description:l,command:d}=e;const{pathname:s}=(0,a.TH)(),m=s.replace(/\/v\d+/,""),f=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return i.createElement(o.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),f&&i.createElement(c.Z,{className:"ml-auto mr-4"})),l?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},40416:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(87462),n=(t(67294),t(3905)),i=t(26515);const a={},c="metric",l={unversionedId:"sdk/reference/portfolio/metric/index",id:"sdk/reference/portfolio/metric/index",title:"metric",description:"Commands",source:"@site/content/sdk/reference/portfolio/metric/index.mdx",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/",permalink:"/sdk/reference/portfolio/metric/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sectors",permalink:"/sdk/reference/portfolio/alloc/sectors"},next:{title:"calmar",permalink:"/sdk/reference/portfolio/metric/calmar"}},d={},s=[{value:"Commands",id:"commands",level:3}],m={toc:s},f="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(f,(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"metric"},"metric"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"Calmar",description:"Get calmar ratio",url:"/sdk/reference/portfolio/metric/calmar",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Commonsense",description:"Get common sense ratio",url:"/sdk/reference/portfolio/metric/commonsense",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Gaintopain",description:"Get Pain-to-Gain ratio based on historical data",url:"/sdk/reference/portfolio/metric/gaintopain",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Information",description:"Get information ratio",url:"/sdk/reference/portfolio/metric/information",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Jensens",description:"Get jensen's alpha",url:"/sdk/reference/portfolio/metric/jensens",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Kelly",description:"Get kelly criterion",url:"/sdk/reference/portfolio/metric/kelly",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Kurtosis",description:"Get kurtosis for portfolio and benchmark selected",url:"/sdk/reference/portfolio/metric/kurtosis",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Maxdrawdown",description:"Get maximum drawdown ratio for portfolio and benchmark selected",url:"/sdk/reference/portfolio/metric/maxdrawdown",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Payoff",description:"Get payoff ratio",url:"/sdk/reference/portfolio/metric/payoff",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Profitfactor",description:"Get profit factor",url:"/sdk/reference/portfolio/metric/profitfactor",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Rsquare",description:"Get R2 Score for portfolio and benchmark selected",url:"/sdk/reference/portfolio/metric/rsquare",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Sharpe",description:"Get sharpe ratio for portfolio and benchmark selected",url:"/sdk/reference/portfolio/metric/sharpe",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Skew",description:"Get skewness for portfolio and benchmark selected",url:"/sdk/reference/portfolio/metric/skew",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Sortino",description:"Get sortino ratio for portfolio and benchmark selected",url:"/sdk/reference/portfolio/metric/sortino",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Tail",description:"Get tail ratio",url:"/sdk/reference/portfolio/metric/tail",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Trackerr",description:"Get tracking error",url:"/sdk/reference/portfolio/metric/trackerr",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Volatility",description:"Get volatility for portfolio and benchmark selected",url:"/sdk/reference/portfolio/metric/volatility",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);