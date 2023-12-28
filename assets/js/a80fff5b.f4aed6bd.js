"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,y=s["".concat(p,".").concat(m)]||s[m]||c[m]||i;return r?a.createElement(y,l(l({ref:t},d),{},{components:r})):a.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90156:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"unusual",description:"Learn how to get the complete options chain for a ticker with the equity options unusual API. Explore the available parameters such as symbol and provider. Retrieve valuable data like the underlying symbol, contract symbol, trade type, sentiment, total value, total size, average price, ask/bid prices at execution, underlying price at execution, and timestamp.",keywords:["complete options chain","ticker options","equity options unusual","symbol","provider","intrinio","source","data","underlying symbol","contract symbol","trade type","sentiment","total value","total size","average price","ask at execution","bid at execution","underlying price at execution","timestamp"]},l=void 0,o={unversionedId:"excel/reference/library/derivatives/options/unusual",id:"excel/reference/library/derivatives/options/unusual",title:"unusual",description:"Learn how to get the complete options chain for a ticker with the equity options unusual API. Explore the available parameters such as symbol and provider. Retrieve valuable data like the underlying symbol, contract symbol, trade type, sentiment, total value, total size, average price, ask/bid prices at execution, underlying price at execution, and timestamp.",source:"@site/content/excel/reference/library/derivatives/options/unusual.md",sourceDirName:"excel/reference/library/derivatives/options",slug:"/excel/reference/library/derivatives/options/unusual",permalink:"/excel/reference/library/derivatives/options/unusual",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/derivatives/options/unusual.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{title:"unusual",description:"Learn how to get the complete options chain for a ticker with the equity options unusual API. Explore the available parameters such as symbol and provider. Retrieve valuable data like the underlying symbol, contract symbol, trade type, sentiment, total value, total size, average price, ask/bid prices at execution, underlying price at execution, and timestamp.",keywords:["complete options chain","ticker options","equity options unusual","symbol","provider","intrinio","source","data","underlying symbol","contract symbol","trade type","sentiment","total value","total size","average price","ask at execution","bid at execution","underlying price at execution","timestamp"]},sidebar:"tutorialSidebar",previous:{title:"chains",permalink:"/excel/reference/library/derivatives/options/chains"},next:{title:"news",permalink:"/excel/reference/library/news/"}},p={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],d={toc:u},s="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Get the complete options chain for a ticker."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.DERIVATIVES.OPTIONS.UNUSUAL(required; [optional])\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: intrinio"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for. (the underlying symbol)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"source"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"The source of the data. Either realtime or delayed. (provider: intrinio)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"underlying_symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data. (the underlying symbol)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"contract_symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Contract symbol for the option.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"trade_type"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of unusual trade. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sentiment"),(0,n.kt)("td",{parentName:"tr",align:null},"Bullish, Bearish, or Neutral Sentiment is estimated based on whether the trade was executed at the bid, ask, or mark price. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total_value"),(0,n.kt)("td",{parentName:"tr",align:null},"The aggregated value of all option contract premiums included in the trade. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"total_size"),(0,n.kt)("td",{parentName:"tr",align:null},"The total number of contracts involved in a single transaction. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"average_price"),(0,n.kt)("td",{parentName:"tr",align:null},"The average premium paid per option contract. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ask_at_execution"),(0,n.kt)("td",{parentName:"tr",align:null},"Ask price at execution. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bid_at_execution"),(0,n.kt)("td",{parentName:"tr",align:null},"Bid price at execution. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"underlying_price_at_execution"),(0,n.kt)("td",{parentName:"tr",align:null},"Price of the underlying security at execution of trade. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,n.kt)("td",{parentName:"tr",align:null},"The UTC timestamp of order placement. (provider: intrinio)")))))}c.isMDXComponent=!0}}]);