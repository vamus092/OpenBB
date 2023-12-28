"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},95882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={},i=void 0,o={unversionedId:"excel/reference/library/economy/fred_search",id:"excel/reference/library/economy/fred_search",title:"fred_search",description:"Search for FRED series or economic releases by ID or fuzzy query. This does not return the observation values, only the metadata. Use this function to find series IDs for fred_series().",source:"@site/content/excel/reference/library/economy/fred_search.md",sourceDirName:"excel/reference/library/economy",slug:"/excel/reference/library/economy/fred_search",permalink:"/excel/reference/library/economy/fred_search",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/economy/fred_search.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cpi",permalink:"/excel/reference/library/economy/cpi"},next:{title:"fred_series",permalink:"/excel/reference/library/economy/fred_series"}},d={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],u={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Search for FRED series or economic releases by ID or fuzzy query. This does not return the observation values, only the metadata. Use this function to find series IDs for ",(0,n.kt)("inlineCode",{parentName:"p"},"fred_series()"),"."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.ECONOMY.FRED_SEARCH(required; [optional])\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fred"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"The search word(s)."),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"is_release"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Is release?  If True, other search filter variables are ignored. If no query text or release_id is supplied, this defaults to True. (provider: fred)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"release_id"),(0,n.kt)("td",{parentName:"tr",align:null},"Any"),(0,n.kt)("td",{parentName:"tr",align:null},"A specific release ID to target. (provider: fred)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return. (1-1000) (provider: fred)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offset"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"Offset the results in conjunction with limit. (provider: fred)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filter_variable"),(0,n.kt)("td",{parentName:"tr",align:null},"Any"),(0,n.kt)("td",{parentName:"tr",align:null},"Filter by an attribute. (provider: fred)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filter_value"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"String value to filter the variable by.  Used in conjunction with filter_variable. (provider: fred)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tag_names"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"A semicolon delimited list of tag names that series match all of.  Example: 'japan;imports' (provider: fred)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude_tag_names"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"A semicolon delimited list of tag names that series match none of.  Example: 'imports;services'. Requires that variable tag_names also be set to limit the number of matching series. (provider: fred)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"release_id"),(0,n.kt)("td",{parentName:"tr",align:null},"The release ID for queries.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"series_id"),(0,n.kt)("td",{parentName:"tr",align:null},"The series ID for the item in the release.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the release.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"title"),(0,n.kt)("td",{parentName:"tr",align:null},"The title of the series.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"observation_start"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the first observation in the series.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"observation_end"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the last observation in the series.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"frequency"),(0,n.kt)("td",{parentName:"tr",align:null},"The frequency of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"frequency_short"),(0,n.kt)("td",{parentName:"tr",align:null},"Short form of the data frequency.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"units"),(0,n.kt)("td",{parentName:"tr",align:null},"The units of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"units_short"),(0,n.kt)("td",{parentName:"tr",align:null},"Short form of the data units.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"seasonal_adjustment"),(0,n.kt)("td",{parentName:"tr",align:null},"The seasonal adjustment of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"seasonal_adjustment_short"),(0,n.kt)("td",{parentName:"tr",align:null},"Short form of the data seasonal adjustment.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_updated"),(0,n.kt)("td",{parentName:"tr",align:null},"The datetime of the last update to the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"notes"),(0,n.kt)("td",{parentName:"tr",align:null},"Description of the release.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"press_release"),(0,n.kt)("td",{parentName:"tr",align:null},"If the release is a press release.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"url"),(0,n.kt)("td",{parentName:"tr",align:null},"URL to the release.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"popularity"),(0,n.kt)("td",{parentName:"tr",align:null},"Popularity of the series (provider: fred)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"group_popularity"),(0,n.kt)("td",{parentName:"tr",align:null},"Group popularity of the release (provider: fred)")))))}s.isMDXComponent=!0}}]);