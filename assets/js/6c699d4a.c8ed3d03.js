"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70026],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),o=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=o(a),g=n,N=s["".concat(m,".").concat(g)]||s[g]||k[g]||l;return a?r.createElement(N,i(i({ref:e},d),{},{components:a})):r.createElement(N,i({ref:e},d))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[s]="string"==typeof t?t:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var r=a(67294),n=a(35742);function l(t){let{title:e}=t;return r.createElement(n.Z,null,r.createElement("title",null,e))}},30825:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),l=a(88828);const i={title:"Behavioural Analysis",description:"The page introduces the Behavioural Analysis sub-menu, within the Stocks menu, of the OpenBB Terminal.",keywords:["Behavioural Analysis","public sentiment","momentum trading strategies","stocks","companies","reddit","twitter","stocktwits","x","google","API key","/r/wallstreetbets","social sentiment","deep learning algorithms"]},p=void 0,m={unversionedId:"terminal/menus/stocks/ba",id:"terminal/menus/stocks/ba",title:"Behavioural Analysis",description:"The page introduces the Behavioural Analysis sub-menu, within the Stocks menu, of the OpenBB Terminal.",source:"@site/content/terminal/menus/stocks/ba.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/ba",permalink:"/terminal/menus/stocks/ba",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/ba.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{title:"Behavioural Analysis",description:"The page introduces the Behavioural Analysis sub-menu, within the Stocks menu, of the OpenBB Terminal.",keywords:["Behavioural Analysis","public sentiment","momentum trading strategies","stocks","companies","reddit","twitter","stocktwits","x","google","API key","/r/wallstreetbets","social sentiment","deep learning algorithms"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/terminal/menus/stocks/"},next:{title:"Comparison Analysis",permalink:"/terminal/menus/stocks/comparison"}},o={},d=[{value:"Usage",id:"usage",level:2},{value:"Trending",id:"trending",level:3},{value:"Bullbear",id:"bullbear",level:3},{value:"Redditsent",id:"redditsent",level:3},{value:"Queries",id:"queries",level:3}],s={toc:d},k="wrapper";function g(t){let{components:e,...a}=t;return(0,n.kt)(k,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"Behavioural Analysis - Stocks - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"The Behavioural Analysis menu offers the user tools for gauging the overall public sentiment of a company online. The complexity of the tools range from message board scrapers to deep learning algorithms for financial analysis and prediction. Sentiment is particularly useful for momentum trading strategies, discovery, and general fundamental research. "),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Navigate into the menu from the Stocks menu by entering, ",(0,n.kt)("inlineCode",{parentName:"p"},"ba"),". Or, by using the absolute path from anywhere in the Terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/ba\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/5946bc28-95a8-4402-a546-68be140aa025",alt:"Screenshot 2023-10-31 at 1 50 04\u202fPM"})),(0,n.kt)("h3",{id:"trending"},"Trending"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"trending")," command gets the list of trending tickers, according to Stocktwits."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/ba/trending\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Watchlist Count"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AMD"),(0,n.kt)("td",{parentName:"tr",align:"right"},"468973"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Advanced Micro Devices Inc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"NVDA"),(0,n.kt)("td",{parentName:"tr",align:"right"},"447556"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NVIDIA Corp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XRP.X"),(0,n.kt)("td",{parentName:"tr",align:"right"},"158654"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ripple")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CHK"),(0,n.kt)("td",{parentName:"tr",align:"right"},"61074"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Chesapeake Energy Corp. - Ordinary Shares - New")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PINS"),(0,n.kt)("td",{parentName:"tr",align:"right"},"44549"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PINTEREST INC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRSP"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34881"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CRISPR Therapeutics AG")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CAT"),(0,n.kt)("td",{parentName:"tr",align:"right"},"29787"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Caterpillar Inc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FSLR"),(0,n.kt)("td",{parentName:"tr",align:"right"},"28779"),(0,n.kt)("td",{parentName:"tr",align:"left"},"First Solar Inc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CVS"),(0,n.kt)("td",{parentName:"tr",align:"right"},"26361"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CVS Health Corp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SAVE"),(0,n.kt)("td",{parentName:"tr",align:"right"},"24589"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Spirit Airlines Inc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SRPT"),(0,n.kt)("td",{parentName:"tr",align:"right"},"18634"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sarepta Therapeutics Inc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Z"),(0,n.kt)("td",{parentName:"tr",align:"right"},"18152"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Zillow Group Inc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BUD"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13161"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Anheuser-Busch InBev")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MTCH"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12638"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Match Group Inc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UEC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12473"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Uranium Energy Corp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CZR"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10943"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Caesars Entertainment Inc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CCJ"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10108"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cameco Corp.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ANET"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9235"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Arista Networks Inc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CELH"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9012"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Celsius Holdings Inc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"LTHM"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8206"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Livent Corp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MPC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7307"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Marathon Petroleum Corp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"PAYC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5425"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Paycom Software Inc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ZI"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5061"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ZoomInfo Technologies Inc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SPRC"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3789"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCISPARC LTD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ELF"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3658"),(0,n.kt)("td",{parentName:"tr",align:"left"},"e.l.f. Beauty Inc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"XDC.X"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3073"),(0,n.kt)("td",{parentName:"tr",align:"left"},"XinFin Network")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"KRL.X"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2385"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kryll")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"FRSH"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1935"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Freshworks Inc")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"MTZ"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1544"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mastec Inc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"VERV"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1054"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Verve Therapeutics Inc")))),(0,n.kt)("h3",{id:"bullbear"},"Bullbear"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"bullbear")," gives a fast sentiment synopsis from the most recent Stocktwits posts."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/ba/load crsp/bullbear\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"Watchlist count: 34881\n\nLast 15 sentiment messages:\nBullish: 80.0%\nBearish: 20.0%\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/ba/load amd/bullbear\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"Watchlist count: 468973\n\nLast 12 sentiment messages:\nBullish: 50.0%\nBearish: 50.0%\n")),(0,n.kt)("h3",{id:"redditsent"},"Redditsent"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"redditsent")," will crawl through posts related to the ticker and give it a score based on how polarizing the message is."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/71e6a3c9-ece8-45a4-afca-150211ae7c43",alt:"Screenshot 2023-10-31 at 2 28 52\u202fPM"})),(0,n.kt)("h3",{id:"queries"},"Queries"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"queries")," command shows the terms people are including when searching for the company on Google."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/ba/load amd/queries\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"query"),(0,n.kt)("th",{parentName:"tr",align:"left"},"value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"amd ryzen"),(0,n.kt)("td",{parentName:"tr",align:"left"},"100%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"amd radeon"),(0,n.kt)("td",{parentName:"tr",align:"left"},"67%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"radeon"),(0,n.kt)("td",{parentName:"tr",align:"left"},"62%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"amd stock"),(0,n.kt)("td",{parentName:"tr",align:"left"},"52%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"amd ryzen 5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"47%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"intel"),(0,n.kt)("td",{parentName:"tr",align:"left"},"46%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"amd ryzen 7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"25%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nvidia"),(0,n.kt)("td",{parentName:"tr",align:"left"},"23%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"amd driver"),(0,n.kt)("td",{parentName:"tr",align:"left"},"22%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"amd cpu"),(0,n.kt)("td",{parentName:"tr",align:"left"},"21%")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/ba/load intc/queries\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"query"),(0,n.kt)("th",{parentName:"tr",align:"left"},"value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stock intc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"100%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"intc price"),(0,n.kt)("td",{parentName:"tr",align:"left"},"36%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stock price intc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"32%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"amd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"15%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"amd stock"),(0,n.kt)("td",{parentName:"tr",align:"left"},"12%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"aapl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"msft"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"intc share"),(0,n.kt)("td",{parentName:"tr",align:"left"},"7%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nvda"),(0,n.kt)("td",{parentName:"tr",align:"left"},"7%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tsla"),(0,n.kt)("td",{parentName:"tr",align:"left"},"7%")))))}g.isMDXComponent=!0}}]);