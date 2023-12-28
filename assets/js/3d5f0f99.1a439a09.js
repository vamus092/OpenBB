"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,k=p["".concat(c,".").concat(u)]||p[u]||d[u]||s;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(35742);function s(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},65028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),s=r(88828);const i={title:"capm",description:"The capm page offers detailed information on analysing a stock's risk in comparison to the market risk. Learn to use the 'capm' command and understand Beta, Systematic Risk, and Unsystematic Risk in stock analysis.",keywords:["capm","stock risk","market risk","beta","systematic risk","unsystematic risk","stock analysis"]},o=void 0,c={unversionedId:"terminal/reference/stocks/qa/capm",id:"terminal/reference/stocks/qa/capm",title:"capm",description:"The capm page offers detailed information on analysing a stock's risk in comparison to the market risk. Learn to use the 'capm' command and understand Beta, Systematic Risk, and Unsystematic Risk in stock analysis.",source:"@site/content/terminal/reference/stocks/qa/capm.md",sourceDirName:"terminal/reference/stocks/qa",slug:"/terminal/reference/stocks/qa/capm",permalink:"/terminal/reference/stocks/qa/capm",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/qa/capm.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{title:"capm",description:"The capm page offers detailed information on analysing a stock's risk in comparison to the market risk. Learn to use the 'capm' command and understand Beta, Systematic Risk, and Unsystematic Risk in stock analysis.",keywords:["capm","stock risk","market risk","beta","systematic risk","unsystematic risk","stock analysis"]},sidebar:"tutorialSidebar",previous:{title:"bw",permalink:"/terminal/reference/stocks/qa/bw"},next:{title:"cdf",permalink:"/terminal/reference/stocks/qa/cdf"}},l={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{title:"stocks /qa/capm - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Provides detailed information about a stock's risk compared to the market risk."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"capm\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 11:01 (\ud83e\udd8b) /stocks/qa/ $ load tsla\n\nLoading Daily TSLA stock with starting period 2019-02-11 for analysis.\n\nDatetime: 2022 Feb 16 11:02\nTimezone: America/New_York\nCurrency: USD\nMarket:   CLOSED\n\n\n2022 Feb 16, 11:02 (\ud83e\udd8b) /stocks/qa/ $ capm\nBeta:                   2.02\nSystematic Risk:        23.09%\nUnsystematic Risk:      76.91%\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);