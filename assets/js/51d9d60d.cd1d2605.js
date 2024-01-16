"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),o=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=o(r),c=n,f=p["".concat(d,".").concat(c)]||p[c]||u[c]||l;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},10421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(88828);const i={title:"mt",description:"This page provides detailed information about how to display Messari timeseries data, explaining the use of key parameters, available data frequency intervals, and how to query the timeseries. It is a resource for understanding and extracting meaningful insights from Messari data.",keywords:["messari timeseries","timeseries parameters","data frequency intervals","messari data sources","timeseries query","messari usage"]},s=void 0,d={unversionedId:"terminal/reference/crypto/dd/mt",id:"terminal/reference/crypto/dd/mt",title:"mt",description:"This page provides detailed information about how to display Messari timeseries data, explaining the use of key parameters, available data frequency intervals, and how to query the timeseries. It is a resource for understanding and extracting meaningful insights from Messari data.",source:"@site/content/terminal/reference/crypto/dd/mt.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/mt",permalink:"/terminal/reference/crypto/dd/mt",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/mt.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1705424975,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{title:"mt",description:"This page provides detailed information about how to display Messari timeseries data, explaining the use of key parameters, available data frequency intervals, and how to query the timeseries. It is a resource for understanding and extracting meaningful insights from Messari data.",keywords:["messari timeseries","timeseries parameters","data frequency intervals","messari data sources","timeseries query","messari usage"]},sidebar:"tutorialSidebar",previous:{title:"mkt",permalink:"/terminal/reference/crypto/dd/mkt"},next:{title:"news",permalink:"/terminal/reference/crypto/dd/news"}},o={},m=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"crypto /dd/mt - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Display messari timeseries ","[Source: https://messari.io]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"mt [--list] [-t TIMESERIES] [-i {5m,15m,30m,1h,1d,1w}] [-s START] [-end END] [--include-paid] [-q QUERY [QUERY ...]]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"--list"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to show available timeseries"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeseries"),(0,n.kt)("td",{parentName:"tr",align:null},"-t  --timeseries"),(0,n.kt)("td",{parentName:"tr",align:null},"Messari timeseries id"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"exch.flow.out.usd, min.rev.ntv, exch.flow.in.usd, exch.flow.out.ntv, vol.exch, txn.fee.med.ntv, sply.total.iss.ntv, txn.cnt, reddit.subscribers, txn.tsfr.val.adj, txn.tfr.val.adj.ntv, txn.vol, exch.flow.out.ntv.incl, telegram.users, diff.avg, exch.flow.in.ntv.incl, price, txn.fee.avg.ntv, daily.vol, blk.size.byte, exch.flow.out.usd.incl, txn.fee.med, exch.sply.ntv, min.rev.usd, sply.total.iss, txn.tfr.avg.ntv, sply.out, real.vol, act.addr.cnt, nvt.adj, txn.tfr.val.med.ntv, new.iss.ntv, txn.fee.avg, txn.tsfr.val.avg, mcap.dom, daily.shp, iss.rate, exch.sply.usd, mcap.realized, exch.flow.in.usd.incl, sply.liquid, price.exch, mcap.circ, reddit.active.users, cg.sply.circ, hashrate, txn.tsfr.cnt, blk.size.bytes.avg, exch.flow.in.ntv, txn.tfr.erc721.cnt, txn.tfr.val.ntv, nvt.adj.90d.ma, txn.tfr.val.med, fees, sply.circ, twitter.followers, blk.cnt, new.iss.usd, mcap.out, fees.ntv, txn.tfr.erc20.cnt")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,n.kt)("td",{parentName:"tr",align:null},"Frequency interval"),(0,n.kt)("td",{parentName:"tr",align:null},"1d"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"5m, 15m, 30m, 1h, 1d, 1w")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start"),(0,n.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial date. Default: A year ago"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-01-16"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end"),(0,n.kt)("td",{parentName:"tr",align:null},"-end  --end"),(0,n.kt)("td",{parentName:"tr",align:null},"End date. Default: Today"),(0,n.kt)("td",{parentName:"tr",align:null},"2024-01-16"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"include_paid"),(0,n.kt)("td",{parentName:"tr",align:null},"--include-paid"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to show both paid and free sources"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"-q  --query"),(0,n.kt)("td",{parentName:"tr",align:null},"Query to search across all messari timeseries"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}c.isMDXComponent=!0}}]);