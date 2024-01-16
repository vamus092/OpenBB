"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19711],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(t),f=a,u=s["".concat(l,".").concat(f)]||s[f]||p[f]||c;return t?n.createElement(u,i(i({ref:r},m),{},{components:t})):n.createElement(u,i({ref:r},m))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=f;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<c;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),a=t(86010),c=t(67294),i=t(16550),o=t(48334);function l(e){let{title:r,url:t,description:l,command:d}=e;const{pathname:m}=(0,i.TH)(),s=m.replace(/\/v\d+/,""),p=!s.includes("/reference")&&!s.includes("/widgets-library/")&&!s.includes("/data_models");return c.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":s.startsWith("/terminal")||s.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":s.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":s.startsWith("/sdk")||s.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":s.startsWith("/excel"),header_docs:!(s.startsWith("/terminal")||s.startsWith("/pro")||s.startsWith("/excel")||s.startsWith("/sdk")||s.startsWith("/platform")||s.startsWith("/bot"))}),to:t},c.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),c.createElement("div",{className:"flex items-center"},c.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&c.createElement(o.Z,{className:"ml-auto mr-4"})),l?c.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},49330:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=t(87462),a=(t(67294),t(3905)),c=t(26515);const i={},o="technical",l={unversionedId:"platform/reference/technical/index",id:"platform/reference/technical/index",title:"technical",description:"Commands",source:"@site/content/platform/reference/technical/index.mdx",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/",permalink:"/platform/reference/technical/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/technical/index.mdx",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1705424975,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/platform/reference/currency/search"},next:{title:"ad",permalink:"/platform/reference/technical/ad"}},d={},m=[{value:"Commands",id:"commands",level:3}],s={toc:m},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"technical"},"technical"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(c.Z,{title:"Ad",description:"The Accumulation/Distribution Line",url:"/platform/reference/technical/ad",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Adosc",description:"Accumulation/Distribution Oscillator",url:"/platform/reference/technical/adosc",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Adx",description:"ADX",url:"/platform/reference/technical/adx",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Aroon",description:"Aroon Indicator",url:"/platform/reference/technical/aroon",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Atr",description:"Average True Range",url:"/platform/reference/technical/atr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Bbands",description:"Bollinger Bands",url:"/platform/reference/technical/bbands",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Cci",description:"Commodity Channel Index (CCI)",url:"/platform/reference/technical/cci",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Cg",description:"Center of Gravity",url:"/platform/reference/technical/cg",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Clenow",description:"Clenow Volatility Adjusted Momentum",url:"/platform/reference/technical/clenow",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Cones",description:"Calculate the realized volatility quantiles over rolling windows of time",url:"/platform/reference/technical/cones",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Demark",description:"Demark sequential indicator",url:"/platform/reference/technical/demark",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Donchian",description:"Donchian Channels",url:"/platform/reference/technical/donchian",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Ema",description:"Exponential Moving Average",url:"/platform/reference/technical/ema",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Fib",description:"Create Fibonacci Retracement Levels",url:"/platform/reference/technical/fib",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Fisher",description:"Fisher Transform",url:"/platform/reference/technical/fisher",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Hma",description:"The Hull Moving Average",url:"/platform/reference/technical/hma",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Ichimoku",description:"The Ichimoku Cloud",url:"/platform/reference/technical/ichimoku",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Kc",description:"Keltner Channels",url:"/platform/reference/technical/kc",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Macd",description:"The Moving Average Convergence Divergence (MACD)",url:"/platform/reference/technical/macd",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Obv",description:"On Balance Volume (OBV)",url:"/platform/reference/technical/obv",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Rsi",description:"Relative Strength Index (RSI)",url:"/platform/reference/technical/rsi",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Sma",description:"Simple Moving Average",url:"/platform/reference/technical/sma",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Stoch",description:"Stochastic Oscillator",url:"/platform/reference/technical/stoch",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Vwap",description:"The Volume Weighted Average Price",url:"/platform/reference/technical/vwap",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Wma",description:"Weighted Moving Average",url:"/platform/reference/technical/wma",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(c.Z,{title:"Zlma",description:"The zero lag exponential moving average (ZLEMA)",url:"/platform/reference/technical/zlma",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);