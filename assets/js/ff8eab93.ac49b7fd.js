"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78475],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=o(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[u]="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52638:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"filings",description:"Learn how to retrieve company filings data such as date, type of document, and link. Understand the available parameters to filter the data, including symbol, limit, provider, type, and page. Explore the different fields in the data, such as ticker symbol, accepted date, and final link.",keywords:["company filings","data entries","symbol","limit","provider","type","page","cik","date","link","ticker symbol","accepted date","final link","report date","act","items","primary doc description","primary doc","accession number","file number","film number","is inline xbrl","is xbrl","size","complete submission url","filing detail url","xml"]},i=void 0,d={unversionedId:"excel/reference/equity/fundamental/filings",id:"excel/reference/equity/fundamental/filings",title:"filings",description:"Learn how to retrieve company filings data such as date, type of document, and link. Understand the available parameters to filter the data, including symbol, limit, provider, type, and page. Explore the different fields in the data, such as ticker symbol, accepted date, and final link.",source:"@site/content/excel/reference/equity/fundamental/filings.md",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/filings",permalink:"/excel/reference/equity/fundamental/filings",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/equity/fundamental/filings.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1705424975,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{title:"filings",description:"Learn how to retrieve company filings data such as date, type of document, and link. Understand the available parameters to filter the data, including symbol, limit, provider, type, and page. Explore the different fields in the data, such as ticker symbol, accepted date, and final link.",keywords:["company filings","data entries","symbol","limit","provider","type","page","cik","date","link","ticker symbol","accepted date","final link","report date","act","items","primary doc description","primary doc","accession number","file number","film number","is inline xbrl","is xbrl","size","complete submission url","filing detail url","xml"]},sidebar:"tutorialSidebar",previous:{title:"employee_count",permalink:"/excel/reference/equity/fundamental/employee_count"},next:{title:"historical_attributes",permalink:"/excel/reference/equity/fundamental/historical_attributes"}},p={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],m={toc:o},u="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Company Filings. Company filings data."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.FUNDAMENTAL.FILINGS([symbol];[provider];[form_type];[limit];[start_date];[end_date];[thea_enabled];[cik];[use_cache])\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.FUNDAMENTAL.FILINGS()\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, sec, defaults to fmp."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"form_type"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the SEC filing form. (provider: sec)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date of the data, in YYYY-MM-DD format. (provider: intrinio)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"End date of the data, in YYYY-MM-DD format. (provider: intrinio)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"thea_enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Return filings that have been read by Intrinio's Thea NLP. (provider: intrinio)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Lookup filings by Central Index Key (CIK) instead of by symbol. (provider: sec)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_cache"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not to use cache.  If True, cache will store for one day. (provider: sec)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"return-data"},"Return Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cik"),(0,r.kt)("td",{parentName:"tr",align:null},"Central Index Key (CIK) for the requested entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Filing date of the SEC report.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accepted_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Accepted date of the SEC report.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"report_type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the SEC report.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_url"),(0,r.kt)("td",{parentName:"tr",align:null},"URL to the filing page on the SEC site.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"report_url"),(0,r.kt)("td",{parentName:"tr",align:null},"URL to the actual report on the SEC site.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Intrinio ID of the filing. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period_end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"Ending date of the fiscal period for the filing. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sec_unique_id"),(0,r.kt)("td",{parentName:"tr",align:null},"SEC unique ID of the filing. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance_url"),(0,r.kt)("td",{parentName:"tr",align:null},"URL for the XBRL filing for the report. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"industry_group"),(0,r.kt)("td",{parentName:"tr",align:null},"Industry group of the company. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"industry_category"),(0,r.kt)("td",{parentName:"tr",align:null},"Industry category of the company. (provider: intrinio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"report_date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the filing. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"act"),(0,r.kt)("td",{parentName:"tr",align:null},"The SEC Act number. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"items"),(0,r.kt)("td",{parentName:"tr",align:null},"The SEC Item numbers. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary_doc_description"),(0,r.kt)("td",{parentName:"tr",align:null},"The description of the primary document. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary_doc"),(0,r.kt)("td",{parentName:"tr",align:null},"The filename of the primary document. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accession_number"),(0,r.kt)("td",{parentName:"tr",align:null},"The accession number. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_number"),(0,r.kt)("td",{parentName:"tr",align:null},"The file number. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"film_number"),(0,r.kt)("td",{parentName:"tr",align:null},"The film number. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_inline_xbrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the filing is an inline XBRL filing. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_xbrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the filing is an XBRL filing. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"The size of the filing. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"complete_submission_url"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL to the complete filing submission. (provider: sec)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filing_detail_url"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL to the filing details. (provider: sec)")))))}s.isMDXComponent=!0}}]);