"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return r?a.createElement(y,o(o({ref:t},s),{},{components:r})):a.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},2917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const o={title:"SYMBOL_MAP",description:"Retrieve the ticker symbol corresponding to a company CIK using the OBB API endpoint. This function allows you to perform a search query and get the results along with additional metadata, warnings, and optional chart data.",keywords:["ticker symbol","CIK","company","ticker mapping","search query","provider","results","warnings","chart","metadata","data","symbol","entity"]},i=void 0,c={unversionedId:"excel/reference/regulators/sec/symbol_map",id:"excel/reference/regulators/sec/symbol_map",title:"SYMBOL_MAP",description:"Retrieve the ticker symbol corresponding to a company CIK using the OBB API endpoint. This function allows you to perform a search query and get the results along with additional metadata, warnings, and optional chart data.",source:"@site/content/excel/reference/regulators/sec/symbol_map.md",sourceDirName:"excel/reference/regulators/sec",slug:"/excel/reference/regulators/sec/symbol_map",permalink:"/excel/reference/regulators/sec/symbol_map",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/regulators/sec/symbol_map.md",tags:[],version:"current",frontMatter:{title:"SYMBOL_MAP",description:"Retrieve the ticker symbol corresponding to a company CIK using the OBB API endpoint. This function allows you to perform a search query and get the results along with additional metadata, warnings, and optional chart data.",keywords:["ticker symbol","CIK","company","ticker mapping","search query","provider","results","warnings","chart","metadata","data","symbol","entity"]},sidebar:"tutorialSidebar",previous:{title:"SIC_SEARCH",permalink:"/excel/reference/regulators/sec/sic_search"},next:{title:"NEWS",permalink:"/excel/reference/news/"}},p={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"REGULATORS.SEC.SYMBOL_MAP | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get the ticker symbol corresponding to a company's CIK."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.REGULATORS.SEC.SYMBOL_MAP([query];[provider])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.REGULATORS.SEC.SYMBOL_MAP()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Search query."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: sec, defaults to sec."),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data. (provider: sec)")))))}d.isMDXComponent=!0}}]);