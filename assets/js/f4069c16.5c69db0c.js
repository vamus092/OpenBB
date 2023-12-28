"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25519],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,u=m["".concat(l,".").concat(p)]||m[p]||f[p]||o;return r?n.createElement(u,i(i({ref:t},d),{},{components:r})):n.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(39960),a=r(86010),o=r(67294),i=r(16550),c=r(48334);function l(e){let{title:t,url:r,description:l,command:s}=e;const{pathname:d}=(0,i.TH)(),m=d.replace(/\/v\d+/,""),f=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),f&&o.createElement(c.Z,{className:"ml-auto mr-4"})),l?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},95653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(26515);const i={},c="ETFs",l={unversionedId:"terminal/reference/etf/index",id:"terminal/reference/etf/index",title:"ETFs",description:"Menus",source:"@site/content/terminal/reference/etf/index.mdx",sourceDirName:"terminal/reference/etf",slug:"/terminal/reference/etf/",permalink:"/terminal/reference/etf/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tob",permalink:"/terminal/reference/stocks/tob"},next:{title:"Discovery",permalink:"/terminal/reference/etf/disc/"}},s={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],m={toc:d},f="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"etfs"},"ETFs"),(0,a.kt)("h3",{id:"menus"},"Menus"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Disc",description:"decliners, active, gainers",url:"/terminal/reference/etf/disc",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ta",description:"aroon, sma, clenow, wma, rsi, atr, ema, cg, fisher, donchian, demark, obv, macd, bbands, adosc, kc, hma, zlma,...",url:"/terminal/reference/etf/ta",mdxType:"ReferenceCard"})),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Ca",description:"Compare ETF's holdings with each other",url:"/terminal/reference/etf/ca",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Candle",description:"Shows historic data for an ETF",url:"/terminal/reference/etf/candle",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Compare",description:"Compare selected ETFs [Source: StockAnalysis]",url:"/terminal/reference/etf/compare",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Holding_Perf",description:"Look at ETF company holdings' performance",url:"/terminal/reference/etf/holding_perf",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Holdings",description:"Look at ETF company holdings",url:"/terminal/reference/etf/holdings",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Load",description:"Load ETF ticker to perform analysis on.",url:"/terminal/reference/etf/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"News",description:"Prints latest news about ETF, including date, title and web link. [Source: News API]",url:"/terminal/reference/etf/news",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Overview",description:"Get overview data for selected etf",url:"/terminal/reference/etf/overview",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Search",description:"Search ETF by name [Source: FinanceDatabase/StockAnalysis.com]",url:"/terminal/reference/etf/search",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Weights",description:"Look at ETF sector holdings",url:"/terminal/reference/etf/weights",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);