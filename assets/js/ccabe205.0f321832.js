"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),k=n,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return r?a.createElement(u,o(o({ref:t},p),{},{components:r})):a.createElement(u,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},64065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const o={title:"pick",description:"This page provides information on how to select different parameters (like high, low, close etc.) for daily stock analysis, especially for TSLA stocks. It explains the usage of the 'pick' command within the Python environment for stock parameter selection.",keywords:["target variable","stock analysis","daily stock","tsla stock","pick","stock parameter selection","stock market","stock data manipulation","market data","financial data analysis","time series data"]},i=void 0,s={unversionedId:"terminal/reference/stocks/qa/pick",id:"terminal/reference/stocks/qa/pick",title:"pick",description:"This page provides information on how to select different parameters (like high, low, close etc.) for daily stock analysis, especially for TSLA stocks. It explains the usage of the 'pick' command within the Python environment for stock parameter selection.",source:"@site/content/terminal/reference/stocks/qa/pick.md",sourceDirName:"terminal/reference/stocks/qa",slug:"/terminal/reference/stocks/qa/pick",permalink:"/terminal/reference/stocks/qa/pick",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/qa/pick.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1700864596,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{title:"pick",description:"This page provides information on how to select different parameters (like high, low, close etc.) for daily stock analysis, especially for TSLA stocks. It explains the usage of the 'pick' command within the Python environment for stock parameter selection.",keywords:["target variable","stock analysis","daily stock","tsla stock","pick","stock parameter selection","stock market","stock data manipulation","market data","financial data analysis","time series data"]},sidebar:"tutorialSidebar",previous:{title:"om",permalink:"/terminal/reference/stocks/qa/om"},next:{title:"qqplot",permalink:"/terminal/reference/stocks/qa/qqplot"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},d="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"stocks /qa/pick - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Change target variable"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"pick [-t {open,high,low,close,adjclose,volume,dividends,stock splits,returns,logret,logprice}]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target"),(0,n.kt)("td",{parentName:"tr",align:null},"-t  --target"),(0,n.kt)("td",{parentName:"tr",align:null},"Select variable to analyze"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"open, high, low, close, adjclose, volume, dividends, stock splits, returns, logret, logprice")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 11:12 (\ud83e\udd8b) /stocks/qa/ $ load tsla\n\nLoading Daily TSLA stock with starting period 2019-02-11 for analysis.\n\nDatetime: 2022 Feb 16 11:12\nTimezone: America/New_York\nCurrency: USD\nMarket:   CLOSED\n\n\n2022 Feb 16, 11:12 (\ud83e\udd8b) /stocks/qa/ $ pick adjclose\n")),(0,n.kt)("hr",null))}k.isMDXComponent=!0}}]);