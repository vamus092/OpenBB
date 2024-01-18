"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62742],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||n;return r?o.createElement(f,s(s({ref:t},p),{},{components:r})):o.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(67294),a=r(35742);function n(e){let{title:t}=e;return o.createElement(a.Z,null,o.createElement("title",null,t))}},53710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=r(87462),a=(r(67294),r(3905)),n=r(88828);const s={title:"sumtop",description:"The sumtop command is a useful tool for retrieving the top flow for the day for Calls and Puts by stock, providing an overview of the market's sentiment towards a particular stock, as well as an overall view of the market's sentiment towards all stocks. The page provides the command usage, examples, and details regarding parameters.",keywords:["sumtop command","stock market overview","market sentiment","calls and puts","flow sumtop usage"]},l=void 0,i={unversionedId:"bot/reference/discord/flow/sumtop",id:"bot/reference/discord/flow/sumtop",title:"sumtop",description:"The sumtop command is a useful tool for retrieving the top flow for the day for Calls and Puts by stock, providing an overview of the market's sentiment towards a particular stock, as well as an overall view of the market's sentiment towards all stocks. The page provides the command usage, examples, and details regarding parameters.",source:"@site/content/bot/reference/discord/flow/sumtop.md",sourceDirName:"bot/reference/discord/flow",slug:"/bot/reference/discord/flow/sumtop",permalink:"/bot/reference/discord/flow/sumtop",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/flow/sumtop.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705579840,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"sumtop",description:"The sumtop command is a useful tool for retrieving the top flow for the day for Calls and Puts by stock, providing an overview of the market's sentiment towards a particular stock, as well as an overall view of the market's sentiment towards all stocks. The page provides the command usage, examples, and details regarding parameters.",keywords:["sumtop command","stock market overview","market sentiment","calls and puts","flow sumtop usage"]},sidebar:"tutorialSidebar",previous:{title:"summary",permalink:"/bot/reference/discord/flow/summary"},next:{title:"sumweek",permalink:"/bot/reference/discord/flow/sumweek"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{title:"flow: sumtop - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve the top flow for the day for Calls and Puts by stock. This will provide the user with an overview of the market's current sentiment towards a particular stock as well as an overall view of the market's sentiment towards all stocks."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/flow sumtop\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/flow sumtop\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);