"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59018],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},g=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},h="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,g=p(t,["components","mdxType","originalType","parentName"]),h=m(a),k=n,s=h["".concat(o,".").concat(k)]||h[k]||d[k]||i;return a?r.createElement(s,l(l({ref:e},g),{},{components:a})):r.createElement(s,l({ref:e},g))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[h]="string"==typeof t?t:n,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(67294),n=a(35742);function i(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},475:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const l={title:"Historical Prices",sidebar_position:4,description:"This page provides an introduction to financial statement data available in the OpenBB Platform.  This includes quarterly and annual reports, along with metrics and ratios by company. This guide provides examples for using the variety of sources.",keywords:["stocks","companies","prices","historical","ohlc","intraday","intervals","market data"]},p=void 0,o={unversionedId:"platform/usage/historical_prices",id:"platform/usage/historical_prices",title:"Historical Prices",description:"This page provides an introduction to financial statement data available in the OpenBB Platform.  This includes quarterly and annual reports, along with metrics and ratios by company. This guide provides examples for using the variety of sources.",source:"@site/content/platform/usage/historical_prices.md",sourceDirName:"platform/usage",slug:"/platform/usage/historical_prices",permalink:"/platform/usage/historical_prices",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/usage/historical_prices.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",sidebarPosition:4,frontMatter:{title:"Historical Prices",sidebar_position:4,description:"This page provides an introduction to financial statement data available in the OpenBB Platform.  This includes quarterly and annual reports, along with metrics and ratios by company. This guide provides examples for using the variety of sources.",keywords:["stocks","companies","prices","historical","ohlc","intraday","intervals","market data"]},sidebar:"tutorialSidebar",previous:{title:"Finding Symbols",permalink:"/platform/usage/find_symbols"},next:{title:"Market Calendars",permalink:"/platform/usage/market_calendars"}},m={},g=[{value:"Historical OHLC",id:"historical-ohlc",level:2},{value:"Intervals",id:"intervals",level:3},{value:"Resample a Time Series",id:"resample-a-time-series",level:3},{value:"Differences Between Sources",id:"differences-between-sources",level:3},{value:"Other Types of Symbols",id:"other-types-of-symbols",level:2},{value:"Share Classes",id:"share-classes",level:3},{value:"Regional Identifiers",id:"regional-identifiers",level:3},{value:"Indices",id:"indices",level:3},{value:"Currencies",id:"currencies",level:3},{value:"Crypto",id:"crypto",level:3},{value:"Futures",id:"futures",level:3},{value:"Options",id:"options",level:3}],h={toc:g},d="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"Historical Prices - Usage | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Historical market prices typically come in the form of OHLC+V - open, high, low, close, volume.  There may be additional fields returned by a provider, but those are the expected columns. Granularity and amount of historical data will vary by provider and subscription status. Visit their websites to understand what your entitlements are."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"These examples will assume that the OpenBB Platform is initialized in a Python session."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nimport pandas as pd\n"))),(0,n.kt)("h2",{id:"historical-ohlc"},"Historical OHLC"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"historical")," function is located under a submodule for each asset type. In the ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb-equity")," module."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(obb.equity.price.historical)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This endpoint has the most number of providers out of any function. At the time of writing, choices are:")),(0,n.kt)("p",null,"['alpha_vantage', 'cboe', 'fmp', 'intrinio', 'polygon', 'tiingo', 'yfinance']"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Common parameters have been standardized across all sources, ",(0,n.kt)("inlineCode",{parentName:"p"},"start_date"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"end_date"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"interval"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The default interval will be ",(0,n.kt)("inlineCode",{parentName:"p"},"1d"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The depth of historical data and choices for granularity will vary by provider and subscription status. Refer to the website and documentation of each source understand your specific entitlements.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Despite being in the ",(0,n.kt)("inlineCode",{parentName:"p"},"equity")," module, it's might be possible to get other asset types, like currencies or crypto, from the same endpoint.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For demonstration purposes, we will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb-yfinance")," data extension."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'df_daily = obb.equity.price.historical(symbol = "spy", provider="yfinance")\ndf_daily.to_df().head(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"dividends"),(0,n.kt)("th",{parentName:"tr",align:"right"},"stock splits"),(0,n.kt)("th",{parentName:"tr",align:"right"},"capital gains"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"396.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"400.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"395.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"399.9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"60429000"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,n.kt)("p",null,"To load the entire history available from a source, pick a starting date well beyond what it might be. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"1900-01-01")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'df_daily =(\n  obb.equity.price.historical(symbol = "spy", start_date = "1990-01-01", provider="yfinance")\n  .to_df()\n)\ndf_daily.head(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"dividends"),(0,n.kt)("th",{parentName:"tr",align:"right"},"stock splits"),(0,n.kt)("th",{parentName:"tr",align:"right"},"capital gains"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1993-01-29"),(0,n.kt)("td",{parentName:"tr",align:"right"},"43.97"),(0,n.kt)("td",{parentName:"tr",align:"right"},"43.97"),(0,n.kt)("td",{parentName:"tr",align:"right"},"43.75"),(0,n.kt)("td",{parentName:"tr",align:"right"},"43.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1003200"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,n.kt)("h3",{id:"intervals"},"Intervals"),(0,n.kt)("p",null,"The intervals are entered according to this pattern:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1m")," = One Minute"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1h")," = One Hour"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1d")," = One Day"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1W")," = One Week"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1M")," = One Month")),(0,n.kt)("p",null,"The date for monthly value is the first or last, depending on the provider. This can be easily resampled from daily data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'df_monthly = (\n  obb.equity.price.historical("spy", start_date="1990-01-01", interval="1M", provider="yfinance")\n  .to_df()\n)\ndf_monthly.tail(2)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"dividends"),(0,n.kt)("th",{parentName:"tr",align:"right"},"stock splits"),(0,n.kt)("th",{parentName:"tr",align:"right"},"capital gains"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-10-01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"426.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"438.14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"409.21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"418.2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1999149700"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"419.2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"456.38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"418.65"),(0,n.kt)("td",{parentName:"tr",align:"right"},"455.02"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1161239576"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,n.kt)("h3",{id:"resample-a-time-series"},"Resample a Time Series"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"yfinance")," returns the monthly data for the first day of each month. Let's resample it to take from the last, using the daily information captured in the previous cells."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'(\n    df_daily[["open", "high", "low", "close", "volume"]]\n    .resample("M")\n    .agg(\n        {"open": "first", "high": "max", "low": "min", "close": "last", "volume": "sum"}\n    ).tail(2)\n)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-10-31"),(0,n.kt)("td",{parentName:"tr",align:"right"},"426.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"438.14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"409.21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"418.2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1999149700")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"419.2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"456.38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"418.65"),(0,n.kt)("td",{parentName:"tr",align:"right"},"455.02"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1210484176")))),(0,n.kt)("p",null,"We can see that the current month's total volume is higher when we resample the daily time series. It is difficult to know where the discrepancy lays, and it may just be a temporary glitch. However, we can verify that the total volume, according to YahooFinance, is the number we just sampled."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are following along, the results will not match exactly what is displayed here.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'df_daily.loc["2023-11-01":].sum()["volume"]\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"1210484176\n")),(0,n.kt)("h3",{id:"differences-between-sources"},"Differences Between Sources"),(0,n.kt)("p",null,"To demonstrate the difference between sources, let's compare values for daily volume from several sources."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Collect the data\n\nyahoo = obb.equity.price.historical("spy", provider="yfinance").to_df()\nalphavantage = obb.equity.price.historical("spy", provider = "alpha_vantage").to_df()\nintrinio = obb.equity.price.historical("spy", provider="intrinio").to_df()\nfmp = obb.equity.price.historical("spy", provider="fmp").to_df()\n\n# Make a new DataFrame with just the volume columns\ncompare = pd.DataFrame()\ncompare["AV Volume"] = alphavantage["volume"].tail(10)\ncompare["FMP Volume"] = fmp["volume"].tail(10)\ncompare["Intrinio Volume"] = intrinio["volume"].tail(10)\ncompare["Yahoo Volume"] = yahoo["volume"].tail(10)\n\ncompare\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"AV Volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"FMP Volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Intrinio Volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Yahoo Volume"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-09"),(0,n.kt)("td",{parentName:"tr",align:"right"},"83174417"),(0,n.kt)("td",{parentName:"tr",align:"right"},"83071417"),(0,n.kt)("td",{parentName:"tr",align:"right"},"83174417"),(0,n.kt)("td",{parentName:"tr",align:"right"},"83174400")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"89558054"),(0,n.kt)("td",{parentName:"tr",align:"right"},"89558054"),(0,n.kt)("td",{parentName:"tr",align:"right"},"89558054"),(0,n.kt)("td",{parentName:"tr",align:"right"},"89462200")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"52236068"),(0,n.kt)("td",{parentName:"tr",align:"right"},"52192568"),(0,n.kt)("td",{parentName:"tr",align:"right"},"52236068"),(0,n.kt)("td",{parentName:"tr",align:"right"},"52236100")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"97176935"),(0,n.kt)("td",{parentName:"tr",align:"right"},"97130503"),(0,n.kt)("td",{parentName:"tr",align:"right"},"97176935"),(0,n.kt)("td",{parentName:"tr",align:"right"},"97176900")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"77327573"),(0,n.kt)("td",{parentName:"tr",align:"right"},"77327573"),(0,n.kt)("td",{parentName:"tr",align:"right"},"77327573"),(0,n.kt)("td",{parentName:"tr",align:"right"},"77327600")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-16"),(0,n.kt)("td",{parentName:"tr",align:"right"},"66665797"),(0,n.kt)("td",{parentName:"tr",align:"right"},"66654468"),(0,n.kt)("td",{parentName:"tr",align:"right"},"66665797"),(0,n.kt)("td",{parentName:"tr",align:"right"},"66665800")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"83193902"),(0,n.kt)("td",{parentName:"tr",align:"right"},"83193902"),(0,n.kt)("td",{parentName:"tr",align:"right"},"83193902"),(0,n.kt)("td",{parentName:"tr",align:"right"},"83133200")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"70055633"),(0,n.kt)("td",{parentName:"tr",align:"right"},"69614633"),(0,n.kt)("td",{parentName:"tr",align:"right"},"70055633"),(0,n.kt)("td",{parentName:"tr",align:"right"},"69936200")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"49244639"),(0,n.kt)("td",{parentName:"tr",align:"right"},"49244639"),(0,n.kt)("td",{parentName:"tr",align:"right"},"49244639"),(0,n.kt)("td",{parentName:"tr",align:"right"},"49244600")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"59446573"),(0,n.kt)("td",{parentName:"tr",align:"right"},"59313820"),(0,n.kt)("td",{parentName:"tr",align:"right"},"58205780"),(0,n.kt)("td",{parentName:"tr",align:"right"},"59394900")))),(0,n.kt)("h2",{id:"other-types-of-symbols"},"Other Types of Symbols"),(0,n.kt)("p",null,"Other types of assets and ticker symbols can be loaded from ",(0,n.kt)("inlineCode",{parentName:"p"},"obb.equity.price.historical()"),", below are some examples but not an exhaustive list."),(0,n.kt)("h3",{id:"share-classes"},"Share Classes"),(0,n.kt)("p",null,"Some sources use ",(0,n.kt)("inlineCode",{parentName:"p"},"-")," as the distinction between a share class, e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"BRK-A")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"BRK-B"),". Other formats include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A period: ",(0,n.kt)("inlineCode",{parentName:"li"},"BRK.A")),(0,n.kt)("li",{parentName:"ul"},"A slash: ",(0,n.kt)("inlineCode",{parentName:"li"},"BRK/A")),(0,n.kt)("li",{parentName:"ul"},"No separator, the share class becomes the fourth or fifth letter.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("brk.b", provider="polygon")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("brk-b", provider="fmp")\n')),(0,n.kt)("p",null,"While some providers handle the different formats on their end, others do not. This is something to consider when no results are returned from one source. Some may even use a combination, or accept multiple variations. Sometimes there is no real logic behind the additional characters, ",(0,n.kt)("inlineCode",{parentName:"p"},"GOOGL")," vs. ",(0,n.kt)("inlineCode",{parentName:"p"},"GOOG"),". These are known unknown variables of ticker symbology, what's good for one source may return errors from another."),(0,n.kt)("h3",{id:"regional-identifiers"},"Regional Identifiers"),(0,n.kt)("p",null,"With providers supporting market data from multiple jurisdictions, the most common method for requesting data outside of US-listings is to append a suffix to the ticker symbol (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"RELIANCE.NS"),"). Formats may be unique to a provider, so it is best to review the source's documentation for an overview of their specific conventions. ",(0,n.kt)("a",{parentName:"p",href:"https://help.yahoo.com/kb/SLN2310.html"},"This page")," on Yahoo describes how they format symbols, which many others follow to some degree."),(0,n.kt)("h3",{id:"indices"},"Indices"),(0,n.kt)("p",null,"Sources will have their own treatment of these symbols, some examples are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"YahooFinance/FMP/CBOE: ^RUT"),(0,n.kt)("li",{parentName:"ul"},"Polygon: I:NDX")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("^RUT", provider="cboe").to_df().tail(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1796.37"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1804.96"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1785.93"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1792.92"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("^RUT", provider="fmp").to_df().tail(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"vwap"),(0,n.kt)("th",{parentName:"tr",align:"left"},"label"),(0,n.kt)("th",{parentName:"tr",align:"right"},"adj_close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"unadjusted_volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"change"),(0,n.kt)("th",{parentName:"tr",align:"right"},"change_percent"),(0,n.kt)("th",{parentName:"tr",align:"right"},"change_over_time"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1792.51"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1803.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1789.88"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1795.54"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1796.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"November 22, 23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1795.54"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.02893"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.16898"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0016898")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"For an endpoint geared more specifically towards indices, try ",(0,n.kt)("inlineCode",{parentName:"strong"},"obb.index.market()")))),(0,n.kt)("h3",{id:"currencies"},"Currencies"),(0,n.kt)("p",null,"FX symbols face the same dilemma as share classes, there are several variations of the same symbol."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"YahooFinance: ",(0,n.kt)("inlineCode",{parentName:"li"},"EURUSD=X")),(0,n.kt)("li",{parentName:"ul"},"Polygon: ",(0,n.kt)("inlineCode",{parentName:"li"},"C:EURUSD")),(0,n.kt)("li",{parentName:"ul"},"AlphaVantage/FMP: ",(0,n.kt)("inlineCode",{parentName:"li"},"EURUSD"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"The symbol prefixes are handled internally when ",(0,n.kt)("inlineCode",{parentName:"strong"},"obb.currency.price.historical()")," is used, enter as a pair with no extra characters."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("EURUSD=X", provider="yfinance").to_df().tail(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"dividends"),(0,n.kt)("th",{parentName:"tr",align:"right"},"stock splits"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.0918"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.0923"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.0855"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.0918"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("C:EURUSD", provider="polygon").to_df().tail(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"vwap"),(0,n.kt)("th",{parentName:"tr",align:"right"},"transactions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.09168"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.0923"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.0851"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.0888"),(0,n.kt)("td",{parentName:"tr",align:"right"},"155827"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.0893"),(0,n.kt)("td",{parentName:"tr",align:"right"},"155827")))),(0,n.kt)("h3",{id:"crypto"},"Crypto"),(0,n.kt)("p",null,"Similar, but different to FX tickers."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"YahooFinance: ",(0,n.kt)("inlineCode",{parentName:"li"},"BTC-USD")),(0,n.kt)("li",{parentName:"ul"},"Polygon: ",(0,n.kt)("inlineCode",{parentName:"li"},"X:BTCUSD")),(0,n.kt)("li",{parentName:"ul"},"AlphaVantage/FMP: ",(0,n.kt)("inlineCode",{parentName:"li"},"BTCUSD"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"The symbol prefixes are handled internally when ",(0,n.kt)("inlineCode",{parentName:"strong"},"obb.crypto.price.historical()")," is used, enter as a pair with no extra characters and placing the fiat currency second."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("X:BTCUSD", provider="polygon").to_df().tail(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"vwap"),(0,n.kt)("th",{parentName:"tr",align:"right"},"transactions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"35756"),(0,n.kt)("td",{parentName:"tr",align:"right"},"37900"),(0,n.kt)("td",{parentName:"tr",align:"right"},"35633"),(0,n.kt)("td",{parentName:"tr",align:"right"},"37433.8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"30411.4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36841.5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"464907")))),(0,n.kt)("p",null,"As noted above, ",(0,n.kt)("inlineCode",{parentName:"p"},"X:")," or other prefixes are not required when using the ",(0,n.kt)("inlineCode",{parentName:"p"},"crypto")," version of this same endpoint."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.crypto.price.historical("BTCUSD", provider="polygon").to_df().tail(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"vwap"),(0,n.kt)("th",{parentName:"tr",align:"right"},"transactions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"35756"),(0,n.kt)("td",{parentName:"tr",align:"right"},"37900"),(0,n.kt)("td",{parentName:"tr",align:"right"},"35633"),(0,n.kt)("td",{parentName:"tr",align:"right"},"37433.8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"30411.4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36841.5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"464907")))),(0,n.kt)("h3",{id:"futures"},"Futures"),(0,n.kt)("p",null,"Historical prices for the continuation chart, can be fetched by the ",(0,n.kt)("inlineCode",{parentName:"p"},"fmp")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"yfinance")," data extensions.  Individual active contracts are returned by ",(0,n.kt)("inlineCode",{parentName:"p"},"yfinance"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Continuous front-month: ",(0,n.kt)("inlineCode",{parentName:"li"},"CL=F")),(0,n.kt)("li",{parentName:"ul"},"December 2023 contract: ",(0,n.kt)("inlineCode",{parentName:"li"},"CLZ24.NYM")),(0,n.kt)("li",{parentName:"ul"},"March 2024 contract: ",(0,n.kt)("inlineCode",{parentName:"li"},"CLH24.NYM"))),(0,n.kt)("p",null,"Individual contracts will require knowing which of the CME venues the future is listed on. ",(0,n.kt)("inlineCode",{parentName:"p"},'["NYM", "NYB", "CME", "CBT"]'),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("CL=F", provider="fmp").to_df().tail(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"vwap"),(0,n.kt)("th",{parentName:"tr",align:"left"},"label"),(0,n.kt)("th",{parentName:"tr",align:"right"},"adj_close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"unadjusted_volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"change"),(0,n.kt)("th",{parentName:"tr",align:"right"},"change_percent"),(0,n.kt)("th",{parentName:"tr",align:"right"},"change_over_time"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"77.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"77.97"),(0,n.kt)("td",{parentName:"tr",align:"right"},"73.79"),(0,n.kt)("td",{parentName:"tr",align:"right"},"76.78"),(0,n.kt)("td",{parentName:"tr",align:"right"},"368686"),(0,n.kt)("td",{parentName:"tr",align:"right"},"76.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"November 22, 23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"76.78"),(0,n.kt)("td",{parentName:"tr",align:"right"},"368686"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.99"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-1.27"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0127")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("CLZ24.NYM", provider="yfinance").to_df().tail(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"dividends"),(0,n.kt)("th",{parentName:"tr",align:"right"},"stock splits"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-22"),(0,n.kt)("td",{parentName:"tr",align:"right"},"74.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"74.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"73.41"),(0,n.kt)("td",{parentName:"tr",align:"right"},"73.46"),(0,n.kt)("td",{parentName:"tr",align:"right"},"610"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("p",null,"Individual options contracts are also loadable from ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb.equity.price.historical()"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"YahooFinance: ",(0,n.kt)("inlineCode",{parentName:"li"},"SPY241220P00400000")),(0,n.kt)("li",{parentName:"ul"},"Polygon: ",(0,n.kt)("inlineCode",{parentName:"li"},"O:SPY241220P00400000"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("SPY241220P00400000", provider="yfinance").to_df().tail(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"dividends"),(0,n.kt)("th",{parentName:"tr",align:"right"},"stock splits"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-22 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.82"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.25"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.61"),(0,n.kt)("td",{parentName:"tr",align:"right"},"77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("O:SPY241220P00400000", provider="polygon").to_df().tail(1)\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"high"),(0,n.kt)("th",{parentName:"tr",align:"right"},"low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"close"),(0,n.kt)("th",{parentName:"tr",align:"right"},"volume"),(0,n.kt)("th",{parentName:"tr",align:"right"},"vwap"),(0,n.kt)("th",{parentName:"tr",align:"right"},"transactions"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-11-20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.95"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.75"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.75"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.8376"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10")))))}k.isMDXComponent=!0}}]);