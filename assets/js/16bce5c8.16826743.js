"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58149],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,d=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(35742);function o(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},74397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(88828);const l={title:"wk",description:"Page dedicated to explaining the 'flow wk' command, which allows users to retrieve Top 20 flow by Premium for a stock with an option contact expiring that week. The page provides usage, parameters, and example for the command.",keywords:["flow wk command","stock","premium flow","option contact","stock ticker","usage","parameters","example"]},i=void 0,c={unversionedId:"bot/reference/telegram/flow/flow/wk",id:"bot/reference/telegram/flow/flow/wk",title:"wk",description:"Page dedicated to explaining the 'flow wk' command, which allows users to retrieve Top 20 flow by Premium for a stock with an option contact expiring that week. The page provides usage, parameters, and example for the command.",source:"@site/content/bot/reference/telegram/flow/flow/wk.md",sourceDirName:"bot/reference/telegram/flow/flow",slug:"/bot/reference/telegram/flow/flow/wk",permalink:"/bot/reference/telegram/flow/flow/wk",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/flow/flow/wk.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1700864596,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{title:"wk",description:"Page dedicated to explaining the 'flow wk' command, which allows users to retrieve Top 20 flow by Premium for a stock with an option contact expiring that week. The page provides usage, parameters, and example for the command.",keywords:["flow wk command","stock","premium flow","option contact","stock ticker","usage","parameters","example"]},sidebar:"tutorialSidebar",previous:{title:"unu",permalink:"/bot/reference/telegram/flow/flow/unu"},next:{title:"day",permalink:"/bot/reference/telegram/flow/flowsum/day"}},p={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:m},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"flow - flow: wk - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve the Top 20 flow by Premium for a stock with an option contact expiring that week."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/flow wk [ticker]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Stock Ticker - Not required for subcmd: unu"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"/flow wk AMD\n")),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);