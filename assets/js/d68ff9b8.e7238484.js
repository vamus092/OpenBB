"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||n;return r?o.createElement(f,l(l({ref:t},s),{},{components:r})):o.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(67294),a=r(35742);function n(e){let{title:t}=e;return o.createElement(a.Z,null,o.createElement("title",null,t))}},45788:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var o=r(87462),a=(r(67294),r(3905)),n=r(88828);const l={title:"tvl",description:"This page provides instructions on how to use the 'TVL' command to retrieve historical Total Value Locked (TVL) data for a given protocol. This data provides a snapshot of the total amount of capital locked in a protocol, enabling comparison of metrics between protocols and tracking their growth over time.",keywords:["TVL","Total Value Locked","protocol","crypto","historical data","growth tracking","metrics comparison","capital"]},i=void 0,c={unversionedId:"bot/reference/discord/crypto/tvl",id:"bot/reference/discord/crypto/tvl",title:"tvl",description:"This page provides instructions on how to use the 'TVL' command to retrieve historical Total Value Locked (TVL) data for a given protocol. This data provides a snapshot of the total amount of capital locked in a protocol, enabling comparison of metrics between protocols and tracking their growth over time.",source:"@site/content/bot/reference/discord/crypto/tvl.md",sourceDirName:"bot/reference/discord/crypto",slug:"/bot/reference/discord/crypto/tvl",permalink:"/bot/reference/discord/crypto/tvl",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/crypto/tvl.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705579840,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"tvl",description:"This page provides instructions on how to use the 'TVL' command to retrieve historical Total Value Locked (TVL) data for a given protocol. This data provides a snapshot of the total amount of capital locked in a protocol, enabling comparison of metrics between protocols and tracking their growth over time.",keywords:["TVL","Total Value Locked","protocol","crypto","historical data","growth tracking","metrics comparison","capital"]},sidebar:"tutorialSidebar",previous:{title:"top",permalink:"/bot/reference/discord/crypto/top"},next:{title:"darkpool",permalink:"/bot/reference/discord/darkpool/"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{title:"crypto: tvl - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows users to retrieve historical TVL (Total Value Locked) data for any given protocol. It provides a snapshot of the total amount of capital that is currently locked in the protocol, allowing users to easily compare the metrics between different protocols and track their growth over time."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/crypto tvl protocols\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"protocols"),(0,a.kt)("td",{parentName:"tr",align:null},"comma separated list of protocols (e.g., curve,makerdao)"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/crypto tvl\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/crypto tvl protocols: curve\n")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);