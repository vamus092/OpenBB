"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),p=a,u=m["".concat(c,".").concat(p)]||m[p]||f[p]||i;return r?n.createElement(u,o(o({ref:t},d),{},{components:r})):n.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(39960),a=r(86010),i=r(67294),o=r(16550),s=r(48334);function c(e){let{title:t,url:r,description:c,command:l}=e;const{pathname:d}=(0,o.TH)(),m=d.replace(/\/v\d+/,""),f=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return i.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),f&&i.createElement(s.Z,{className:"ml-auto mr-4"})),c?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},35938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(26515);const o={},s="Fundamental Analysis",c={unversionedId:"terminal/reference/stocks/fa/index",id:"terminal/reference/stocks/fa/index",title:"Fundamental Analysis",description:"Commands",source:"@site/content/terminal/reference/stocks/fa/index.mdx",sourceDirName:"terminal/reference/stocks/fa",slug:"/terminal/reference/stocks/fa/",permalink:"/terminal/reference/stocks/fa/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fa/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"topsells",permalink:"/terminal/reference/stocks/gov/topsells"},next:{title:"analysis",permalink:"/terminal/reference/stocks/fa/analysis"}},l={},d=[{value:"Commands",id:"commands",level:3}],m={toc:d},f="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fundamental-analysis"},"Fundamental Analysis"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Analysis",description:"Display analysis of SEC filings based on NLP model. [Source: https://eclect.us]",url:"/terminal/reference/stocks/fa/analysis",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Balance",description:"Prints a complete balance sheet statement over time. This can be either quarterly or annually. The following...",url:"/terminal/reference/stocks/fa/balance",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Cash",description:"Prints a complete cash flow statement over time. This can be either quarterly or annually. The following fields...",url:"/terminal/reference/stocks/fa/cash",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Customer",description:"List of customers from ticker provided. [Source: CSIMarket]",url:"/terminal/reference/stocks/fa/customer",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Dcf",description:"A discounted cash flow statement looks to analyze the value of a company. To do this we need to predict the...",url:"/terminal/reference/stocks/fa/dcf",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Dcfc",description:"Prints the discounted cash flow of a company over time including the DCF of today. The following fields are...",url:"/terminal/reference/stocks/fa/dcfc",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Divs",description:"Historical dividends for a company",url:"/terminal/reference/stocks/fa/divs",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Dupont",description:"The extended dupont deconstructs return on equity to allow investors to understand it better",url:"/terminal/reference/stocks/fa/dupont",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Earnings",description:"Print earnings dates and reported EPS of the company. The following fields are expected: Fiscal Date Ending and...",url:"/terminal/reference/stocks/fa/earnings",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Epsfc",description:"Estimated EPS [Source: Seeking Alpha]",url:"/terminal/reference/stocks/fa/epsfc",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Est",description:"Yearly estimates and quarter earnings/revenues. [Source: Business Insider]",url:"/terminal/reference/stocks/fa/est",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Fraud",description:"M-score: ------------------------------------------------ The Beneish model is a statistical model that uses...",url:"/terminal/reference/stocks/fa/fraud",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Growth",description:"Prints the growth of several financial statement items and ratios over time. This can be either annually and...",url:"/terminal/reference/stocks/fa/growth",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Income",description:"Prints a complete income statement over time. This can be either quarterly or annually. The following fields are...",url:"/terminal/reference/stocks/fa/income",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Load",description:"Load stock ticker to perform analysis on. When the data source is yf, an Indian ticker can be loaded by using...",url:"/terminal/reference/stocks/fa/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Metrics",description:"Prints a list of the key metrics of a company over time. This can be either quarterly or annually. This includes,...",url:"/terminal/reference/stocks/fa/metrics",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Mgmt",description:"Print management team. Namely: Name, Title, and Information from google [Source: Business Insider]",url:"/terminal/reference/stocks/fa/mgmt",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Mktcap",description:"Prints stock price, number of shares, market capitalization and enterprise value over time. The following fields...",url:"/terminal/reference/stocks/fa/mktcap",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Overview",description:"Prints information about, among other things, the industry, sector exchange and company description.",url:"/terminal/reference/stocks/fa/overview",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Pt",description:"Prints price target from analysts. [Source: Business Insider and Financial Modeling Prep]",url:"/terminal/reference/stocks/fa/pt",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Rating",description:"Based on specific ratios, prints information whether the company is a (strong) buy, neutral or a (strong) sell....",url:"/terminal/reference/stocks/fa/rating",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Ratios",description:"Prints in-depth ratios of a company over time. This can be either quarterly or annually. This contains, among...",url:"/terminal/reference/stocks/fa/ratios",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Revfc",description:"Estimated revenue [Source: Seeking Alpha]",url:"/terminal/reference/stocks/fa/revfc",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Rot",description:"Rating over time (monthly). [Source: Finnhub]",url:"/terminal/reference/stocks/fa/rot",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Score",description:"Value investing based on Warren Buffett, Joseph Piotroski and Benjamin Graham thoughts [Source: FMP]. Data is...",url:"/terminal/reference/stocks/fa/score",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Sec",description:"Prints SEC filings of the company. The following fields are expected: Filing Date, Document Date, Type, Category,...",url:"/terminal/reference/stocks/fa/sec",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Shrs",description:"Print Major, institutional and mutualfunds shareholders. [Source: Yahoo Finance]",url:"/terminal/reference/stocks/fa/shrs",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Splits",description:"Stock splits and reverse split events since IPO [Source: Yahoo Finance]",url:"/terminal/reference/stocks/fa/splits",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Supplier",description:"List of suppliers from ticker provided. [Source: CSIMarket]",url:"/terminal/reference/stocks/fa/supplier",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Warnings",description:"Sean Seah warnings. Check: Consistent historical earnings per share; Consistently high return on equity;...",url:"/terminal/reference/stocks/fa/warnings",command:!0,mdxType:"ReferenceCard"})))}p.isMDXComponent=!0}}]);