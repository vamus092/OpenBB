"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70054],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||c;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(67294),a=r(35742);function c(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},55021:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905)),c=r(88828);const o={title:"currencies",description:"This page provides information about accessing global currencies data through a Python function. The function returns a DataFrame with the name, price, net change, and percent change of multiple currencies.",keywords:["global currencies data","data scraping","economy.currencies","price","net change","percent change"]},i=void 0,l={unversionedId:"sdk/reference/economy/currencies",id:"sdk/reference/economy/currencies",title:"currencies",description:"This page provides information about accessing global currencies data through a Python function. The function returns a DataFrame with the name, price, net change, and percent change of multiple currencies.",source:"@site/content/sdk/reference/economy/currencies.md",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/currencies",permalink:"/sdk/reference/economy/currencies",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/economy/currencies.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1705424975,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{title:"currencies",description:"This page provides information about accessing global currencies data through a Python function. The function returns a DataFrame with the name, price, net change, and percent change of multiple currencies.",keywords:["global currencies data","data scraping","economy.currencies","price","net change","percent change"]},sidebar:"tutorialSidebar",previous:{title:"cpi",permalink:"/sdk/reference/economy/cpi"},next:{title:"debt",permalink:"/sdk/reference/economy/debt"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,{title:"economy.currencies - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Scrape data for global currencies"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/wsj_model.py#L242"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.economy.currencies()\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Dataframe containing name, price, net change and percent change")))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);