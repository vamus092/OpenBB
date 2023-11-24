"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),h=n,f=m["".concat(l,".").concat(h)]||m[h]||p[h]||c;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},62872:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(39960),n=r(86010),c=r(67294),o=r(16550);function i(e){let{title:t,url:r,description:i,command:l}=e;const{pathname:s}=(0,o.TH)(),d=s.replace(/\/v\d+/,"");return c.createElement(a.Z,{className:(0,n.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},c.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),c.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),i?c.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},i):null)}},55500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),c=r(62872);const o={},i="charts",l={unversionedId:"bot/reference/telegram/charts/index",id:"bot/reference/telegram/charts/index",title:"charts",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/charts/index.mdx",sourceDirName:"bot/reference/telegram/charts",slug:"/bot/reference/telegram/charts/",permalink:"/bot/reference/telegram/charts/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/charts/index.mdx",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1700864596,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenBB Telegram Reference",permalink:"/bot/reference/telegram/"},next:{title:"c",permalink:"/bot/reference/telegram/charts/c"}},s={},d=[],m={toc:d},p="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"charts"},"charts"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(c.Z,{title:"c",description:"This command will retrieve a candlestick chart for the crypto coin provided. The interval provided must be a...",url:"/bot/reference/telegram/charts/c",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"c15m",description:"This command allows the user to retrieve a 15-minute intraday chart for a given ticker. The chart will show the...",url:"/bot/reference/telegram/charts/c15m",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"c3m",description:"This command allows users to retrieve a 3-minute intraday chart for the given ticker. This chart will display the...",url:"/bot/reference/telegram/charts/c3m",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"c5m",description:"This command allows the user to retrieve an intraday 5 minute chart for a given ticker. This chart will display...",url:"/bot/reference/telegram/charts/c5m",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"cc",description:"This command allows the user to retrieve an intraday 5 minute chart for a given ticker, /c5m also has the same...",url:"/bot/reference/telegram/charts/cc",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"cd",description:"This command allows the user to retrieve a daily candlestick chart for a particular ticker or coin. The...",url:"/bot/reference/telegram/charts/cd",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"chart",description:"This command will retrieve a candlestick chart for the ticker/interval provided, with data for the past number of...",url:"/bot/reference/telegram/charts/chart",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"chartfib",description:"This command allows the user to retrieve Fibonacci levels for a given ticker. This data can be used to identify...",url:"/bot/reference/telegram/charts/chartfib",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"chartsr",description:"This command allows the user to retrieve Displays Support and Resistance Levels for the ticker provided. It will...",url:"/bot/reference/telegram/charts/chartsr",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"cm",description:"This command allows the user to retrieve a weekly candlestick chart for the ticker/coin provided. The chart...",url:"/bot/reference/telegram/charts/cm",mdxType:"ReferenceCard"}),(0,n.kt)(c.Z,{title:"cw",description:"This command allows the user to retrieve a weekly candlestick chart for the ticker/coin provided. The chart...",url:"/bot/reference/telegram/charts/cw",mdxType:"ReferenceCard"})))}h.isMDXComponent=!0}}]);