"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(35742);function i(e){let{title:t}=e;return n.createElement(a.Z,null,n.createElement("title",null,t))}},882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),i=r(88828);const o={title:"trading_pair_info",description:"The trading_pair_info page provides a detailed guide on how to get essential trading pair information from Coinbase using the OpenBB API. The tool supports all significant trading pairs such as ETH-USDT and UNI-ETH. Retrieve the needed data in a convenient DataFrame format. Check out the source code to learn more.",keywords:["trading pair info","coinbase","crypto trading","cryptocurrency trading","API","ETH-USDT","UNI-ETH","dataframe","due diligence"]},l=void 0,p={unversionedId:"sdk/reference/crypto/dd/trading_pair_info",id:"sdk/reference/crypto/dd/trading_pair_info",title:"trading_pair_info",description:"The trading_pair_info page provides a detailed guide on how to get essential trading pair information from Coinbase using the OpenBB API. The tool supports all significant trading pairs such as ETH-USDT and UNI-ETH. Retrieve the needed data in a convenient DataFrame format. Check out the source code to learn more.",source:"@site/content/sdk/reference/crypto/dd/trading_pair_info.md",sourceDirName:"sdk/reference/crypto/dd",slug:"/sdk/reference/crypto/dd/trading_pair_info",permalink:"/sdk/reference/crypto/dd/trading_pair_info",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/dd/trading_pair_info.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1705424975,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{title:"trading_pair_info",description:"The trading_pair_info page provides a detailed guide on how to get essential trading pair information from Coinbase using the OpenBB API. The tool supports all significant trading pairs such as ETH-USDT and UNI-ETH. Retrieve the needed data in a convenient DataFrame format. Check out the source code to learn more.",keywords:["trading pair info","coinbase","crypto trading","cryptocurrency trading","API","ETH-USDT","UNI-ETH","dataframe","due diligence"]},sidebar:"tutorialSidebar",previous:{title:"trades",permalink:"/sdk/reference/crypto/dd/trades"},next:{title:"trading_pairs",permalink:"/sdk/reference/crypto/dd/trading_pairs"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"crypto.dd.trading_pair_info - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Get information about chosen trading pair. ","[Source: Coinbase]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinbase_model.py#L48"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.crypto.dd.trading_pair_info(symbol: str)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Trading pair of coins on Coinbase e.g ETH-USDT or UNI-ETH"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Basic information about given trading pair")))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);