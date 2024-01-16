"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,b=d["".concat(u,".").concat(p)]||d[p]||m[p]||l;return a?r.createElement(b,o(o({ref:t},c),{},{components:a})):r.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},88828:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(35742);function l(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},31792:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),u=a(91980),s=a(67392),c=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=b({queryString:a,groupId:r}),[d,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=u??d;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var g=a(72389);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function h(e){let{className:t,block:a,selectedValue:u,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),{pathname:p}=(0,i.TH)(),b=e=>{const t=e.currentTarget,a=d.indexOf(t),r=c[a].value;r!==u&&(m(t),s(r))},k=e=>{let t=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>d.push(e),onKeyDown:k,onClick:b},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,o?.className,{"border-b-2 pointer-events-none":u===t,"border-b-2 text-[#669dcb] border-[#669dcb]":u===t&&p.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&p.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&p.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&p.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&p.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==t&&p.startsWith("/terminal")})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},82074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(88828),o=a(31792),i=a(85162);const u={title:"macro",description:"This Docusaurus page offers detailed resources related to the 'macro' function within the OpenBBTerminal Python package. It presents function parameters, provides source code links, and offers examples of two functions that handle querying macroeconomic data from the EconDB database and visualizing the received macro data.",keywords:["docusaurus page","metadata","macro function","EconDB database","parameters","countries","transform","start_date","end_date","symbol","macro data","macro chart","raw","econdb_model.py","econdb_view.py","economy","macro parameters","macro countries","economical data visualization"]},s=void 0,c={unversionedId:"sdk/reference/economy/macro",id:"sdk/reference/economy/macro",title:"macro",description:"This Docusaurus page offers detailed resources related to the 'macro' function within the OpenBBTerminal Python package. It presents function parameters, provides source code links, and offers examples of two functions that handle querying macroeconomic data from the EconDB database and visualizing the received macro data.",source:"@site/content/sdk/reference/economy/macro.md",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/macro",permalink:"/sdk/reference/economy/macro",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/economy/macro.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1705424975,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{title:"macro",description:"This Docusaurus page offers detailed resources related to the 'macro' function within the OpenBBTerminal Python package. It presents function parameters, provides source code links, and offers examples of two functions that handle querying macroeconomic data from the EconDB database and visualizing the received macro data.",keywords:["docusaurus page","metadata","macro function","EconDB database","parameters","countries","transform","start_date","end_date","symbol","macro data","macro chart","raw","econdb_model.py","econdb_view.py","economy","macro parameters","macro countries","economical data visualization"]},sidebar:"tutorialSidebar",previous:{title:"indices",permalink:"/sdk/reference/economy/indices"},next:{title:"macro_countries",permalink:"/sdk/reference/economy/macro_countries"}},d={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],p={toc:m},b="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(b,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"economy.macro - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"This functions groups the data queried from the EconDB database ","[Source: EconDB]"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/econdb_model.py#L670"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.economy.macro(parameters: Optional[list] = None, countries: Optional[list] = None, transform: str = "", start_date: str = "1900-01-01", end_date: Optional[str] = None, symbol: str = "")\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"parameters"),(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of data you wish to download. Available parameters can be accessed through economy.macro_parameters()."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"countries"),(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected country or countries. Available countries can be accessed through economy.macro_countries()."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"transform"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected transform. Available transforms can be accessed through get_macro_transform()."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'The starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31.'),(0,n.kt)("td",{parentName:"tr",align:null},"1900-01-01"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional","[str]"),(0,n.kt)("td",{parentName:"tr",align:null},'The end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05.'),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"In what currency you wish to convert all values."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tuple[pd.DataFrame, Dict[Any, Dict","[Any, Any]","], str]"),(0,n.kt)("td",{parentName:"tr",align:null},"A DataFrame with the requested macro data of all chosen countries,",(0,n.kt)("br",null),"A dictionary containing the units of each country's parameter (e.g. EUR),",(0,n.kt)("br",null),"A string denomination which can be Trillions, Billions, Millions, Thousands")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nmacro_df = openbb.economy.macro()\n")),(0,n.kt)("hr",null)),(0,n.kt)(i.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,n.kt)("p",null,"Show the received macro data about a company ","[Source: EconDB]"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/econdb_view.py#L17"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.economy.macro_chart(parameters: Optional[list] = None, countries: Optional[list] = None, transform: str = "", start_date: str = "1900-01-01", end_date: Optional[str] = None, symbol: str = "", raw: bool = False, external_axes: bool = False, export: str = "", sheet_name: Optional[str] = None, limit: int = 10)\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"parameters"),(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of data you wish to display. Available parameters can be accessed through get_macro_parameters()."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"countries"),(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"The selected country or countries. Available countries can be accessed through get_macro_countries()."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"transform"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"select data transformation from:",(0,n.kt)("br",null),"    '' - no transformation",(0,n.kt)("br",null),"    'TPOP' - total percentage change on period,",(0,n.kt)("br",null),"    'TOYA' - total percentage since 1 year ago,",(0,n.kt)("br",null),"    'TUSD' - level USD,",(0,n.kt)("br",null),"    'TPGP' - Percentage of GDP,",(0,n.kt)("br",null),"    'TNOR' - Start = 100"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'The starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31.'),(0,n.kt)("td",{parentName:"tr",align:null},"1900-01-01"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end_date"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional","[str]"),(0,n.kt)("td",{parentName:"tr",align:null},'The end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05.'),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"In what currency you wish to convert all values."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"raw"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to display the raw output."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to return the figure object or not, by default False"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Export data to csv,json,xlsx or png,jpg,pdf,svg file"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Plots the Series."),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("hr",null))))}k.isMDXComponent=!0}}]);