"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55443],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,y=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return r?a.createElement(y,l(l({ref:t},i),{},{components:r})):a.createElement(y,l({ref:t},i))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[c]="string"==typeof e?e:n,l[1]=m;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},44115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const l={title:"summary",description:"Documentation page for the '/summary' command, which retrieves a summary of all prints by MarketCap percentage. The command and its parameters 'days' and 'sort' are explained. The description provides various options for sorting, i.e., by MarketCap, float, sum, or short percentage.",keywords:["MarketCap Summary","Prints by MarketCap","Prints Summary","Command /summary","Parameter days","Parameter sort","Sort by MarketCap","Sort by float","Sort by sum","Sort by short percentage"]},m=void 0,s={unversionedId:"bot/reference/telegram/darkpool/summary",id:"bot/reference/telegram/darkpool/summary",title:"summary",description:"Documentation page for the '/summary' command, which retrieves a summary of all prints by MarketCap percentage. The command and its parameters 'days' and 'sort' are explained. The description provides various options for sorting, i.e., by MarketCap, float, sum, or short percentage.",source:"@site/content/bot/reference/telegram/darkpool/summary.md",sourceDirName:"bot/reference/telegram/darkpool",slug:"/bot/reference/telegram/darkpool/summary",permalink:"/bot/reference/telegram/darkpool/summary",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/darkpool/summary.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705579840,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"summary",description:"Documentation page for the '/summary' command, which retrieves a summary of all prints by MarketCap percentage. The command and its parameters 'days' and 'sort' are explained. The description provides various options for sorting, i.e., by MarketCap, float, sum, or short percentage.",keywords:["MarketCap Summary","Prints by MarketCap","Prints Summary","Command /summary","Parameter days","Parameter sort","Sort by MarketCap","Sort by float","Sort by sum","Sort by short percentage"]},sidebar:"tutorialSidebar",previous:{title:"sectors",permalink:"/bot/reference/telegram/darkpool/sectors"},next:{title:"topsum",permalink:"/bot/reference/telegram/darkpool/topsum"}},p={},i=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],c={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"darkpool: summary - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command retrieves a summary of all the prints by percentage of MarketCap over the last x days, sorted by MarketCap. The summary includes the total number of prints and their total percentage of MarketCap, as well as the float and short percentage."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/summary days sort\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"days"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of days to look back"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sort"),(0,n.kt)("td",{parentName:"tr",align:null},"Sort by ",(0,n.kt)("inlineCode",{parentName:"td"},"mc")," (MarketCap), ",(0,n.kt)("inlineCode",{parentName:"td"},"float"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"sum"),", or ",(0,n.kt)("inlineCode",{parentName:"td"},"short")," (Short Percentage)"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/summary 10 mc\n")),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);