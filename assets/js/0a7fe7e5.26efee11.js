"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66087],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(35742);function i(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},45706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),i=r(88828);const l={title:"INSTITUTIONS_SEARCH",description:"Learn how to use the OBB.regulators.sec.institutions_search() method to look up institutions regulated by the SEC. This method allows you to search for institutions based on various parameters such as the query and provider. It returns a list of search results and provides additional attributes like warnings, chart, and metadata. Explore the attributes like name and cik for more details on the institution.",keywords:["institutions regulated by the SEC","SEC regulated institutions lookup","SEC regulated institutions search","SEC institutions search query","OBB regulator","InstitutionsSearch class","provider parameter","query parameter","use_cache parameter","results attribute","warnings attribute","chart attribute","metadata attribute","name attribute","cik attribute"]},s=void 0,o={unversionedId:"excel/reference/regulators/sec/institutions_search",id:"excel/reference/regulators/sec/institutions_search",title:"INSTITUTIONS_SEARCH",description:"Learn how to use the OBB.regulators.sec.institutions_search() method to look up institutions regulated by the SEC. This method allows you to search for institutions based on various parameters such as the query and provider. It returns a list of search results and provides additional attributes like warnings, chart, and metadata. Explore the attributes like name and cik for more details on the institution.",source:"@site/content/excel/reference/regulators/sec/institutions_search.md",sourceDirName:"excel/reference/regulators/sec",slug:"/excel/reference/regulators/sec/institutions_search",permalink:"/excel/reference/regulators/sec/institutions_search",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/regulators/sec/institutions_search.md",tags:[],version:"current",frontMatter:{title:"INSTITUTIONS_SEARCH",description:"Learn how to use the OBB.regulators.sec.institutions_search() method to look up institutions regulated by the SEC. This method allows you to search for institutions based on various parameters such as the query and provider. It returns a list of search results and provides additional attributes like warnings, chart, and metadata. Explore the attributes like name and cik for more details on the institution.",keywords:["institutions regulated by the SEC","SEC regulated institutions lookup","SEC regulated institutions search","SEC institutions search query","OBB regulator","InstitutionsSearch class","provider parameter","query parameter","use_cache parameter","results attribute","warnings attribute","chart attribute","metadata attribute","name attribute","cik attribute"]},sidebar:"tutorialSidebar",previous:{title:"CIK_MAP",permalink:"/excel/reference/regulators/sec/cik_map"},next:{title:"RSS_LITIGATION",permalink:"/excel/reference/regulators/sec/rss_litigation"}},u={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"REGULATORS.SEC.INSTITUTIONS_SEARCH | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Look up institutions regulated by the SEC."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.REGULATORS.SEC.INSTITUTIONS_SEARCH([query];[provider];[use_cache])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.REGULATORS.SEC.INSTITUTIONS_SEARCH()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Search query."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: sec, defaults to sec."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"use_cache"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether or not to use cache. If True, cache will store for seven days. (provider: sec)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the institution. (provider: sec)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"cik"),(0,n.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) (provider: sec)")))))}m.isMDXComponent=!0}}]);