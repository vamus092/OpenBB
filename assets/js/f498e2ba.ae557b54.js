"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87174],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),c=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return o.createElement(d.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=n,u=p["".concat(d,".").concat(f)]||p[f]||m[f]||i;return t?o.createElement(u,a(a({ref:r},s),{},{components:t})):o.createElement(u,a({ref:r},s))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>d});var o=t(39960),n=t(86010),i=t(67294),a=t(16550),l=t(48334);function d(e){let{title:r,url:t,description:d,command:c}=e;const{pathname:s}=(0,a.TH)(),p=s.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return i.createElement(o.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&i.createElement(l.Z,{className:"ml-auto mr-4"})),d?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},d):null)}},94382:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var o=t(87462),n=(t(67294),t(3905)),i=t(26515);const a={},l="portfolio",d={unversionedId:"sdk/reference/portfolio/index",id:"sdk/reference/portfolio/index",title:"portfolio",description:"Menus",source:"@site/content/sdk/reference/portfolio/index.mdx",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/",permalink:"/sdk/reference/portfolio/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/sdk/reference/futures/search"},next:{title:"alloc",permalink:"/sdk/reference/portfolio/alloc/"}},c={},s=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],p={toc:s},m="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"portfolio"},"portfolio"),(0,n.kt)("h3",{id:"menus"},"Menus"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"Alloc",description:"countries, sectors, assets, regions",url:"/sdk/reference/portfolio/alloc",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Metric",description:"tail, kelly, skew, sortino, profitfactor, commonsense, kurtosis, jensens, gaintopain, calmar, sharpe, trackerr,...",url:"/sdk/reference/portfolio/metric",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Po",description:"plot, herc, nco, minrisk, load_bl_views, ef, maxret, show, maxdiv, file, maxsharpe, load, maxutil, riskparity,...",url:"/sdk/reference/portfolio/po",mdxType:"ReferenceCard"})),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"Bench",description:"Load benchmark into portfolio",url:"/sdk/reference/portfolio/bench",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Distr",description:"Display daily returns",url:"/sdk/reference/portfolio/distr",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Dret",description:"Get daily returns",url:"/sdk/reference/portfolio/dret",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Es",description:"Get portfolio expected shortfall",url:"/sdk/reference/portfolio/es",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Holdp",description:"Get holdings of assets (in percentage)",url:"/sdk/reference/portfolio/holdp",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Holdv",description:"Get holdings of assets (absolute value)",url:"/sdk/reference/portfolio/holdv",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Load",description:"Get PortfolioEngine object",url:"/sdk/reference/portfolio/load",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Maxdd",description:"Calculate the drawdown (MDD) of historical series. Note that the calculation is done",url:"/sdk/reference/portfolio/maxdd",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Mret",description:"Get monthly returns",url:"/sdk/reference/portfolio/mret",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Om",description:"Get omega ratio",url:"/sdk/reference/portfolio/om",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Perf",description:"Get portfolio performance vs the benchmark",url:"/sdk/reference/portfolio/perf",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Rbeta",description:"Get rolling beta using portfolio and benchmark returns",url:"/sdk/reference/portfolio/rbeta",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Rsharpe",description:"Get rolling sharpe ratio",url:"/sdk/reference/portfolio/rsharpe",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Rsort",description:"Get rolling sortino",url:"/sdk/reference/portfolio/rsort",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Rvol",description:"Get rolling volatility",url:"/sdk/reference/portfolio/rvol",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Show",description:"Get portfolio transactions",url:"/sdk/reference/portfolio/show",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Summary",description:"Get portfolio and benchmark returns summary",url:"/sdk/reference/portfolio/summary",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Var",description:"Get portfolio VaR",url:"/sdk/reference/portfolio/var",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Yret",description:"Get yearly returns",url:"/sdk/reference/portfolio/yret",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);