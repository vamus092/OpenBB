"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30802],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},88210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const o={title:"bench",description:"This page provides a detailed guideline on how to load in benchmarks for a portfolio based on the ticker. It elaborates the usage of the 'bench' command in python, its parameters, choices and gives practical examples of its application.",keywords:["benchmark","portfolio","SPDR S&P 500 ETF Trust (SPY)","iShares Core S&P 500 ETF (IVV)","Vanguard Total Stock Market ETF (VTI)","Vanguard S&P 500 ETF (VOO)","Invesco QQQ Trust (QQQ)","full_shares","shares","choices","parameters","Vanguard FTSE Developed Markets ETF (VEA)"]},i=void 0,p={unversionedId:"terminal/reference/portfolio/bench",id:"terminal/reference/portfolio/bench",title:"bench",description:"This page provides a detailed guideline on how to load in benchmarks for a portfolio based on the ticker. It elaborates the usage of the 'bench' command in python, its parameters, choices and gives practical examples of its application.",source:"@site/content/terminal/reference/portfolio/bench.md",sourceDirName:"terminal/reference/portfolio",slug:"/terminal/reference/portfolio/bench",permalink:"/terminal/reference/portfolio/bench",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/bench.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1705424975,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{title:"bench",description:"This page provides a detailed guideline on how to load in benchmarks for a portfolio based on the ticker. It elaborates the usage of the 'bench' command in python, its parameters, choices and gives practical examples of its application.",keywords:["benchmark","portfolio","SPDR S&P 500 ETF Trust (SPY)","iShares Core S&P 500 ETF (IVV)","Vanguard Total Stock Market ETF (VTI)","Vanguard S&P 500 ETF (VOO)","Invesco QQQ Trust (QQQ)","full_shares","shares","choices","parameters","Vanguard FTSE Developed Markets ETF (VEA)"]},sidebar:"tutorialSidebar",previous:{title:"attrib",permalink:"/terminal/reference/portfolio/attrib"},next:{title:"distr",permalink:"/terminal/reference/portfolio/distr"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"portfolio /bench - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Load in a benchmark from a selected list or set your own based on the ticker."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"bench -b BENCHMARK [-s]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"benchmark"),(0,n.kt)("td",{parentName:"tr",align:null},"-b  --benchmark"),(0,n.kt)("td",{parentName:"tr",align:null},"Set the benchmark for the portfolio. By default, this is SPDR S&P 500 ETF Trust (SPY)."),(0,n.kt)("td",{parentName:"tr",align:null},"SPY"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"full_shares"),(0,n.kt)("td",{parentName:"tr",align:null},"-s  --full_shares"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to only make a trade with the benchmark when a full share can be bought (no partial shares)."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"2022 May 10, 09:53 (\ud83e\udd8b) /portfolio/ $ bench Vanguard FTSE Developed Markets ETF (VEA)\n\nBenchmark: Vanguard Developed Markets Index Fund (VEA)\n\n2022 May 10, 09:53 (\ud83e\udd8b) /portfolio/ $\n")),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);