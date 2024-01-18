"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96521],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(35742);function l(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},87406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const i={title:"active",description:"This page provides information on how to display active blockchain addresses over time including usage, parameters and visualization. The data source is Glassnode.",keywords:["Blockchain","Addresses","Active","Glassnode","Data visualization","Frequency Interval","Initial Date","Final Date"]},o=void 0,c={unversionedId:"terminal/reference/crypto/dd/active",id:"terminal/reference/crypto/dd/active",title:"active",description:"This page provides information on how to display active blockchain addresses over time including usage, parameters and visualization. The data source is Glassnode.",source:"@site/content/terminal/reference/crypto/dd/active.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/active",permalink:"/terminal/reference/crypto/dd/active",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/active.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705579840,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"active",description:"This page provides information on how to display active blockchain addresses over time including usage, parameters and visualization. The data source is Glassnode.",keywords:["Blockchain","Addresses","Active","Glassnode","Data visualization","Frequency Interval","Initial Date","Final Date"]},sidebar:"tutorialSidebar",previous:{title:"Due Diligence",permalink:"/terminal/reference/crypto/dd/"},next:{title:"ath",permalink:"/terminal/reference/crypto/dd/ath"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"crypto /dd/active - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Display active blockchain addresses over time ","[Source: https://glassnode.org]"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"active [-i {24h,1w,1month}] [-s SINCE] [-u UNTIL]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Frequency interval. Default: 24h"),(0,r.kt)("td",{parentName:"tr",align:null},"24h"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"24h, 1w, 1month")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"since"),(0,r.kt)("td",{parentName:"tr",align:null},"-s  --since"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial date. Default: 1 year ago"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-01-18"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"until"),(0,r.kt)("td",{parentName:"tr",align:null},"-u  --until"),(0,r.kt)("td",{parentName:"tr",align:null},"Final date. Default: Today"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-01-18"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154058739-e30fed47-c86f-4aef-a699-1bc69180c607.png",alt:"active"})),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);