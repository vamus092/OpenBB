"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60026],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,u=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return t?n.createElement(u,c(c({ref:r},d),{},{components:t})):n.createElement(u,c({ref:r},d))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),a=t(86010),o=t(67294),c=t(16550),i=t(48334);function s(e){let{title:r,url:t,description:s,command:l}=e;const{pathname:d}=(0,c.TH)(),p=d.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&o.createElement(i.Z,{className:"ml-auto mr-4"})),s?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},30731:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),o=t(26515);const c={},i="Cryptocurrency",s={unversionedId:"terminal/reference/crypto/index",id:"terminal/reference/crypto/index",title:"Cryptocurrency",description:"Menus",source:"@site/content/terminal/reference/crypto/index.mdx",sourceDirName:"terminal/reference/crypto",slug:"/terminal/reference/crypto/",permalink:"/terminal/reference/crypto/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/index.mdx",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1700864596,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"upload",permalink:"/terminal/reference/account/upload"},next:{title:"Quantitative Analysis",permalink:"/terminal/reference/crypto/qa/"}},l={},d=[{value:"Menus",id:"menus",level:3},{value:"Commands",id:"commands",level:3}],p={toc:d},m="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cryptocurrency"},"Cryptocurrency"),(0,a.kt)("h3",{id:"menus"},"Menus"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Qa",description:"cusum, pick, bw, skew, raw, qqplot, normality, decompose, kurtosis, spread, cdf, hist, unitroot, summary, line,...",url:"/terminal/reference/crypto/qa",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Disc",description:"top, nft_mktp, search, gainers, dapp_categories, tokens, fees, trending, defi_chains, losers, dapp_chains,...",url:"/terminal/reference/crypto/disc",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Defi",description:"vaults, anchor, ldapps, lcsc, stvl, sinfo, gacc, validators, sreturn, gdapps, sratio, dtvl, newsletter",url:"/terminal/reference/crypto/defi",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ov",description:"ewf, platforms, stables, cr, hm, categories, wf, contracts, news, derivatives, exchanges, wfpe, indexes, ch, fun,...",url:"/terminal/reference/crypto/ov",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Tools",description:"il, aprtoapy",url:"/terminal/reference/crypto/tools",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Ta",description:"fib, tv, atr, stoch, wma, demark, sma, cg, obv, adx, donchian, aroon, ema, fisher, cones, zlma, load, kc, ad,...",url:"/terminal/reference/crypto/ta",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Dd",description:"rm, gh, market, score, trades, gov, pi, ps, social, oi, dev, news, ob, bc, links, liquidations, eb, team, mkt,...",url:"/terminal/reference/crypto/dd",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Nft",description:"collections, fp, stats",url:"/terminal/reference/crypto/nft",mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Onchain",description:"baas, top, th, tx, tv, whales, holders, btccp, address, prices, hr, btcct, dvcp, lt, hist, ueat, topledger,...",url:"/terminal/reference/crypto/onchain",mdxType:"ReferenceCard"})),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Candle",description:"Display chart for loaded coin. You can specify currency vs which you want to show chart and also number of days...",url:"/terminal/reference/crypto/candle",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Find",description:"Find similar coin by name, symbol, or id. If you don't remember exact name or id of the Coin at CoinGecko,...",url:"/terminal/reference/crypto/find",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Headlines",description:"Display sentiment analysis from FinBrain for chosen Cryptocurrencies",url:"/terminal/reference/crypto/headlines",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Load",description:"Load crypto currency to perform analysis on. Yahoo Finance is used as default source. Other sources can be used...",url:"/terminal/reference/crypto/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Price",description:"Display price and interval of confidence in real-time. [Source: Pyth]",url:"/terminal/reference/crypto/price",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Prt",description:"Potential Returns ToolTool to check returns if loaded coin reaches provided price or other crypto market capUses...",url:"/terminal/reference/crypto/prt",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);