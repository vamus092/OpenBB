"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80474],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(67294),a=n(35742);function l(t){let{title:e}=t;return r.createElement(a.Z,null,r.createElement("title",null,e))}},67618:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905)),l=n(88828);const o={title:"calc",description:"Learn about 'calc', a tool to calculate profit or loss for given option settings for strikes, premium, and selling contracts with default and optional preferences. Include examples and a profit chart for better understanding.",keywords:["calc","profit calculator","option settings","put option","sell option","strike price","premium price","profit chart"]},i=void 0,p={unversionedId:"terminal/reference/stocks/options/calc",id:"terminal/reference/stocks/options/calc",title:"calc",description:"Learn about 'calc', a tool to calculate profit or loss for given option settings for strikes, premium, and selling contracts with default and optional preferences. Include examples and a profit chart for better understanding.",source:"@site/content/terminal/reference/stocks/options/calc.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/calc",permalink:"/terminal/reference/stocks/options/calc",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/calc.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705579840,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"calc",description:"Learn about 'calc', a tool to calculate profit or loss for given option settings for strikes, premium, and selling contracts with default and optional preferences. Include examples and a profit chart for better understanding.",keywords:["calc","profit calculator","option settings","put option","sell option","strike price","premium price","profit chart"]},sidebar:"tutorialSidebar",previous:{title:"sop",permalink:"/terminal/reference/stocks/options/hedge/sop"},next:{title:"chains",permalink:"/terminal/reference/stocks/options/chains"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},m="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{title:"stocks /options/calc - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Calculate profit or loss for given option settings."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"calc [--put] [--sell] [-s STRIKE] [-p PREMIUM] [-m MIN] [-M MAX]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"put"),(0,a.kt)("td",{parentName:"tr",align:null},"--put"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to calculate put option"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sell"),(0,a.kt)("td",{parentName:"tr",align:null},"--sell"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to get profit chart of selling contract"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"strike"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --strike"),(0,a.kt)("td",{parentName:"tr",align:null},"Option strike price"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"premium"),(0,a.kt)("td",{parentName:"tr",align:null},"-p  --premium"),(0,a.kt)("td",{parentName:"tr",align:null},"Premium price"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"min"),(0,a.kt)("td",{parentName:"tr",align:null},"-m  --min"),(0,a.kt)("td",{parentName:"tr",align:null},"Min price to look at"),(0,a.kt)("td",{parentName:"tr",align:null},"-1"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max"),(0,a.kt)("td",{parentName:"tr",align:null},"-M  --max"),(0,a.kt)("td",{parentName:"tr",align:null},"Max price to look at"),(0,a.kt)("td",{parentName:"tr",align:null},"-1"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 08:45 (\ud83e\udd8b) /stocks/options/ $ calc -s 30 -p 6 -m 1 -M 50\n\nStrike: $30.0\nPremium: $6.0\nBreakeven price: $36.0\nMax profit: Unlimited\nMax loss: $-600.0\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154277755-a6640bee-8621-4a7d-9fc6-9c197daca0e1.png",alt:"calc"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);