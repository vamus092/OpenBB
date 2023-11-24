"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47194],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>b});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),d=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(n),g=r,b=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return n?a.createElement(b,o(o({ref:e},s),{},{components:n})):a.createElement(b,o({ref:e},s))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[m]="string"==typeof t?t:r,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88828:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294),r=n(35742);function i(t){let{title:e}=t;return a.createElement(r.Z,null,a.createElement("title",null,e))}},78098:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),i=n(88828);const o={title:"Data Extensions",sidebar_position:1,description:"Learn about the OpenBB Platform and its extension framework that allows seamless integration of modules like 'openbb-yfinance'. Discover how installations and removals automatically update the router when the Python interpreter is refreshed. This page lists the data provider extensions available.",keywords:["OpenBB Platform","extension framework","yFinance","install openbb-yfinance","Python interpreter","PyPI","openbb-qa","data","vendors","providers","install","free","subscription"]},p=void 0,l={unversionedId:"platform/extensions/data_extensions",id:"platform/extensions/data_extensions",title:"Data Extensions",description:"Learn about the OpenBB Platform and its extension framework that allows seamless integration of modules like 'openbb-yfinance'. Discover how installations and removals automatically update the router when the Python interpreter is refreshed. This page lists the data provider extensions available.",source:"@site/content/platform/extensions/data_extensions.md",sourceDirName:"platform/extensions",slug:"/platform/extensions/data_extensions",permalink:"/platform/extensions/data_extensions",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/extensions/data_extensions.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1700864596,formattedLastUpdatedAt:"Nov 24, 2023",sidebarPosition:1,frontMatter:{title:"Data Extensions",sidebar_position:1,description:"Learn about the OpenBB Platform and its extension framework that allows seamless integration of modules like 'openbb-yfinance'. Discover how installations and removals automatically update the router when the Python interpreter is refreshed. This page lists the data provider extensions available.",keywords:["OpenBB Platform","extension framework","yFinance","install openbb-yfinance","Python interpreter","PyPI","openbb-qa","data","vendors","providers","install","free","subscription"]},sidebar:"tutorialSidebar",previous:{title:"OpenBB Platform Extensions",permalink:"/platform/extensions/"},next:{title:"Toolkits",permalink:"/platform/extensions/toolkit_extensions"}},d={},s=[{value:"Provider Coverage",id:"provider-coverage",level:2},{value:"Installation",id:"installation",level:2},{value:"Available Data Extensions",id:"available-data-extensions",level:2}],m={toc:s},c="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Data - Extensions | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Data extensions will expand the breadth and coverage of the data available in the OpenBB Platform.  Each source (provider) is its own independent extension, even if there is only one endpoint accessible.  This allows every data source to be inserted or removed, at any time, without distrubing the operation of the Core components."),(0,r.kt)("p",null,"Functions will appear in the Python Interface and Fast API only if a supported provider, for that specific endpoint, is installed.  Additional Python libraries will be installed, where required, by the extension."),(0,r.kt)("h2",{id:"provider-coverage"},"Provider Coverage"),(0,r.kt)("p",null,"The total installed coverage can be determined through the Python interface, as a dictionary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.coverage.providers\n")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"All data extensions are installed with similar syntax.  Published data extensions will have names beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb"),".  For example, yFinance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"pip install openbb-yfinance\n")),(0,r.kt)("p",null,"Additions and removals update the router automatically to reflect the changes when the Python interpreter is refreshed.  Below is a list of data provider extensions."),(0,r.kt)("p",null,"Uninstall any extension with ",(0,r.kt)("inlineCode",{parentName:"p"},"pip uninstall"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"pip uninstall openbb-yfinance\n")),(0,r.kt)("h2",{id:"available-data-extensions"},"Available Data Extensions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Extension Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Installation Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Core/Community"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Minimum Subscription Type Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-alpha-vantage"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.alphavantage.co/"},"Alpha Vantage")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-alpha-vantage"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-benzinga"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.benzinga.com/apis/en-ca/"},"Benzinga")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-benzinga"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Core"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Paid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-biztoc"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://api.biztoc.com/#biztoc-default"},"Biztoc")," News data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-biztoc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-cboe"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.cboe.com/delayed_quotes/"},"Cboe")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-cboe"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,r.kt)("td",{parentName:"tr",align:"right"},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-ecb"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://data.ecb.europa.eu/"},"ECB")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-ecb"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,r.kt)("td",{parentName:"tr",align:"right"},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-finra"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.finra.org/finra-data"},"FINRA")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-finra"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,r.kt)("td",{parentName:"tr",align:"right"},"None / Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-fmp"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://site.financialmodelingprep.com/developer/"},"FMP")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-fmp"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Core"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-fred"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://fred.stlouisfed.org/"},"FRED")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-fred"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Core"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-government-us"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://data.gov"},"US Government")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-us-government"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Core"),(0,r.kt)("td",{parentName:"tr",align:"right"},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-intrinio"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://intrinio.com/pricing"},"Intrinio")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-intrinio"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Core"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Paid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-nasdaq"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://data.nasdaq.com/"},"Nasdaq Data Link")," connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-nasdaq"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,r.kt)("td",{parentName:"tr",align:"right"},"None / Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-oecd"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://data.oecd.org/"},"OECD")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-oecd"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Core"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-polygon"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://polygon.io/"},"Polygon")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-polygon"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Core"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-sec"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.sec.gov/edgar/sec-api-documentation"},"SEC")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-sec"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Core"),(0,r.kt)("td",{parentName:"tr",align:"right"},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-seeking-alpha"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://seekingalpha.com/"},"Seeking Alpha")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-seeking-alpha"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,r.kt)("td",{parentName:"tr",align:"right"},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-stockgrid"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://stockgrid.io"},"Stockgrid")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-stockgrid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,r.kt)("td",{parentName:"tr",align:"right"},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-tiingo"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.tiingo.com/about/pricing"},"Tiingo")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-tiingo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Core"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-tradingeconomics"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://tradingeconomics.com/api"},"TradingEconomics")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-tradingeconomics"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Core"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Paid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-ultima"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://ultimainsights.ai/openbb"},"Ultima Insights")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-ultima"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Paid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-wsj"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.wsj.com/"},"Wall Street Journal")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-wsj"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,r.kt)("td",{parentName:"tr",align:"right"},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"openbb-yfinance"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://finance.yahoo.com/"},"Yahoo Finance")," data connector."),(0,r.kt)("td",{parentName:"tr",align:"center"},"pip install openbb-yfinance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Community"),(0,r.kt)("td",{parentName:"tr",align:"right"},"None")))),(0,r.kt)("p",null,"Have you published a data provider extension and want it featured on this list?  Tell us about it!  Open a pull request on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/"},"GitHub")," to submit an extension for inclusion.  Code contributions, for new and existing, data providers are always welcome."),(0,r.kt)("p",null,"Search ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/search/?q=openbb-"},"PyPI")," to find more extensions."))}g.isMDXComponent=!0}}]);