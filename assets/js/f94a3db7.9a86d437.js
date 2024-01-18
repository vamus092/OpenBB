"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59926],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(a),u=n,h=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(35742);function i(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},54127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const l={title:"IPO",description:"Access the Upcoming and Historical IPO Calendars and retrieve IPO information using Python.",keywords:["Upcoming IPO Calendar","Historical IPO Calendar","Python function","equity.calendar.ipo","symbol","start_date","end_date","limit","provider","intrinio","nasdaq","status","min_value","max_value","OBBject","results","CalendarIpo","warnings","Chart","Metadata","data","ipo_date","status","exchange","offer_amount","share_price","share_price_lowest","share_price_highest","share_count","share_count_lowest","share_count_highest","announcement_url","sec_report_url","open_price","close_price","volume","day_change","week_change","month_change","id","company","security","name","expected_price_date","filed_date","withdraw_date","deal_status"]},o=void 0,p={unversionedId:"excel/reference/equity/calendar/ipo",id:"excel/reference/equity/calendar/ipo",title:"IPO",description:"Access the Upcoming and Historical IPO Calendars and retrieve IPO information using Python.",source:"@site/content/excel/reference/equity/calendar/ipo.md",sourceDirName:"excel/reference/equity/calendar",slug:"/excel/reference/equity/calendar/ipo",permalink:"/excel/reference/equity/calendar/ipo",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/calendar/ipo.md",tags:[],version:"current",frontMatter:{title:"IPO",description:"Access the Upcoming and Historical IPO Calendars and retrieve IPO information using Python.",keywords:["Upcoming IPO Calendar","Historical IPO Calendar","Python function","equity.calendar.ipo","symbol","start_date","end_date","limit","provider","intrinio","nasdaq","status","min_value","max_value","OBBject","results","CalendarIpo","warnings","Chart","Metadata","data","ipo_date","status","exchange","offer_amount","share_price","share_price_lowest","share_price_highest","share_count","share_count_lowest","share_count_highest","announcement_url","sec_report_url","open_price","close_price","volume","day_change","week_change","month_change","id","company","security","name","expected_price_date","filed_date","withdraw_date","deal_status"]},sidebar:"tutorialSidebar",previous:{title:"EARNINGS",permalink:"/excel/reference/equity/calendar/earnings"},next:{title:"SPLITS",permalink:"/excel/reference/equity/calendar/splits"}},d={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"EQUITY.CALENDAR.IPO | OpenBB Add-in for Excel Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Upcoming and Historical IPO Calendar."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.CALENDAR.IPO([symbol];[start_date];[end_date];[limit];[provider];[status];[offer_amount_greater_than];[offer_amount_less_than])\n")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.CALENDAR.IPO()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: intrinio, defaults to intrinio."),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Status of the IPO. ","[upcoming, priced, or withdrawn]"," (provider: intrinio)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offer_amount_greater_than"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"Return IPOs with an offer dollar amount greater than the given amount. (provider: intrinio)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offer_amount_less_than"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"Return IPOs with an offer dollar amount less than the given amount. (provider: intrinio)"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ipo_date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the IPO, when the stock first trades on a major exchange.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"The status of the IPO. Upcoming IPOs have not taken place yet but are expected to.             Priced IPOs have taken place.             Withdrawn IPOs were expected to take place, but were subsequently withdrawn and did not take place          (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange"),(0,n.kt)("td",{parentName:"tr",align:null},"The acronym of the stock exchange that the company is going to trade publicly on.             Typically NYSE or NASDAQ.          (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offer_amount"),(0,n.kt)("td",{parentName:"tr",align:null},"The total dollar amount of shares offered in the IPO. Typically this is share price * share count (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"share_price"),(0,n.kt)("td",{parentName:"tr",align:null},"The price per share at which the IPO was offered. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"share_price_lowest"),(0,n.kt)("td",{parentName:"tr",align:null},"The expected lowest price per share at which the IPO will be offered.             Before an IPO is priced, companies typically provide a range of prices per share at which             they expect to offer the IPO (typically available for upcoming IPOs).          (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"share_price_highest"),(0,n.kt)("td",{parentName:"tr",align:null},"The expected highest price per share at which the IPO will be offered.             Before an IPO is priced, companies typically provide a range of prices per share at which             they expect to offer the IPO (typically available for upcoming IPOs).          (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"share_count"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of shares offered in the IPO. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"share_count_lowest"),(0,n.kt)("td",{parentName:"tr",align:null},"The expected lowest number of shares that will be offered in the IPO. Before an IPO is priced,             companies typically provide a range of shares that they expect to offer in the IPO             (typically available for upcoming IPOs).          (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"share_count_highest"),(0,n.kt)("td",{parentName:"tr",align:null},"The expected highest number of shares that will be offered in the IPO. Before an IPO is priced,             companies typically provide a range of shares that they expect to offer in the IPO             (typically available for upcoming IPOs).          (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"announcement_url"),(0,n.kt)("td",{parentName:"tr",align:null},"The URL to the company's announcement of the IPO (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sec_report_url"),(0,n.kt)("td",{parentName:"tr",align:null},"The URL to the company's S-1, S-1/A, F-1, or F-1/A SEC filing,             which is required to be filed before an IPO takes place.          (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"open_price"),(0,n.kt)("td",{parentName:"tr",align:null},"The opening price at the beginning of the first trading day (only available for priced IPOs). (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"close_price"),(0,n.kt)("td",{parentName:"tr",align:null},"The closing price at the end of the first trading day (only available for priced IPOs). (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"volume"),(0,n.kt)("td",{parentName:"tr",align:null},"The volume at the end of the first trading day (only available for priced IPOs). (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"day_change"),(0,n.kt)("td",{parentName:"tr",align:null},"The percentage change between the open price and the close price on the first trading day             (only available for priced IPOs).          (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"week_change"),(0,n.kt)("td",{parentName:"tr",align:null},"The percentage change between the open price on the first trading day and the close price approximately             a week after the first trading day (only available for priced IPOs).          (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"month_change"),(0,n.kt)("td",{parentName:"tr",align:null},"The percentage change between the open price on the first trading day and the close price approximately             a month after the first trading day (only available for priced IPOs).          (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"The Intrinio ID of the IPO. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"company"),(0,n.kt)("td",{parentName:"tr",align:null},"The company that is going public via the IPO. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"security"),(0,n.kt)("td",{parentName:"tr",align:null},"The primary Security for the Company that is going public via the IPO (provider: intrinio)")))))}u.isMDXComponent=!0}}]);