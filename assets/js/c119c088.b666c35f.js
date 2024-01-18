"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?a.createElement(k,i(i({ref:t},p),{},{components:r})):a.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},69941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const i={title:"hcorr",description:"The page presents a correlation heatmap 'hcorr' based on historical price comparison between similar companies. This tool assists in understanding and visualizing stock market trends.",keywords:["hcorr","correlation heatmap","price comparison","historical data","stock market trends","financial tools","data visualization","type_candle","display_full_matrix"]},o=void 0,s={unversionedId:"terminal/reference/stocks/ca/hcorr",id:"terminal/reference/stocks/ca/hcorr",title:"hcorr",description:"The page presents a correlation heatmap 'hcorr' based on historical price comparison between similar companies. This tool assists in understanding and visualizing stock market trends.",source:"@site/content/terminal/reference/stocks/ca/hcorr.md",sourceDirName:"terminal/reference/stocks/ca",slug:"/terminal/reference/stocks/ca/hcorr",permalink:"/terminal/reference/stocks/ca/hcorr",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ca/hcorr.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705579840,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"hcorr",description:"The page presents a correlation heatmap 'hcorr' based on historical price comparison between similar companies. This tool assists in understanding and visualizing stock market trends.",keywords:["hcorr","correlation heatmap","price comparison","historical data","stock market trends","financial tools","data visualization","type_candle","display_full_matrix"]},sidebar:"tutorialSidebar",previous:{title:"get",permalink:"/terminal/reference/stocks/ca/get"},next:{title:"historical",permalink:"/terminal/reference/stocks/ca/historical"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"stocks /ca/hcorr - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Correlation heatmap based on historical price comparison between similar companies."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"hcorr [-t {o,h,l,c,a}] [-s START] [-e END] [--display-full-matrix]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type_candle"),(0,n.kt)("td",{parentName:"tr",align:null},"-t  --type"),(0,n.kt)("td",{parentName:"tr",align:null},"Candle data to use: o-open, h-high, l-low, c-close, a-adjusted close, r-returns."),(0,n.kt)("td",{parentName:"tr",align:null},"a"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"o, h, l, c, a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,n.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the stock"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-01-17"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end"),(0,n.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,n.kt)("td",{parentName:"tr",align:null},"The end date (format YYYY-MM-DD) of the stocks"),(0,n.kt)("td",{parentName:"tr",align:null},"2024-01-18"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"display_full_matrix"),(0,n.kt)("td",{parentName:"tr",align:null},"--display-full-matrix"),(0,n.kt)("td",{parentName:"tr",align:null},"Display all matrix values, rather than masking off half."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154073186-45336f5f-85e1-4cb9-9307-9694295b1f80.png",alt:"hcorr"})),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);