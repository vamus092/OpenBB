"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72863],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(d,".").concat(c)]||m[c]||p[c]||l;return a?n.createElement(g,o(o({ref:e},s),{},{components:a})):n.createElement(g,o({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},e)}},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},31792:(t,e,a)=>{a.d(e,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),d=a(91980),u=a(67392),s=a(50012);function m(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function p(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??m(a);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:a}=t;const n=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,d._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function f(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=p(t),[o,i]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[d,u]=g({queryString:a,groupId:n}),[m,f]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),h=(()=>{const t=d??m;return c({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),u(t),f(t)}),[u,f,l]),tabValues:l}}var h=a(72389);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function k(t){let{className:e,block:a,selectedValue:d,selectValue:u,tabValues:s}=t;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),{pathname:c}=(0,i.TH)(),g=t=>{const e=t.currentTarget,a=m.indexOf(e),n=s[a].value;n!==d&&(p(e),u(n))},f=t=>{let e=null;switch(t.key){case"Enter":g(t);break;case"ArrowRight":{const a=m.indexOf(t.currentTarget)+1;e=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(t.currentTarget)-1;e=m[a]??m[m.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},s.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:d===e?0:-1,"aria-selected":d===e,key:e,ref:t=>m.push(t),onKeyDown:f,onClick:g},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,o?.className,{"border-b-2 pointer-events-none":d===e,"border-b-2 text-[#669dcb] border-[#669dcb]":d===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==e&&c.startsWith("/terminal")})}),a??e)})))}function N(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function y(t){const e=f(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(k,(0,n.Z)({},t,e)),r.createElement(N,(0,n.Z)({},t,e)))}function w(t){const e=(0,h.Z)();return r.createElement(y,(0,n.Z)({key:String(e)},t))}},95816:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(88828),o=a(31792),i=a(85162);const d={title:"income_growth",description:"Explore the growth of a company's income statement with the Python function obb.equity.fundamental.income_growth. Retrieve data for symbols, specify the limit, period, and provider, and get detailed information on various aspects of the income statement growth.",keywords:["income statement growth","company income statement","python obb.equity.fundamental.income_growth","symbol","limit","period","provider","data entries","time period","provider name","warnings","chart object","metadata","symbol data","date","growth revenue","cost of goods sold","gross profit","gross profit ratio","research and development expenses","general and administrative expenses","selling and marketing expenses","operating expenses","total costs and expenses","interest expenses","depreciation and amortization expenses","ebitda","ebitda ratio","operating income","operating income ratio","total other income expenses net","income before tax","income tax expenses","net income","eps","eps diluted","weighted average shares outstanding"]},u=void 0,s={unversionedId:"platform/reference/equity/fundamental/income_growth",id:"platform/reference/equity/fundamental/income_growth",title:"income_growth",description:"Explore the growth of a company's income statement with the Python function obb.equity.fundamental.income_growth. Retrieve data for symbols, specify the limit, period, and provider, and get detailed information on various aspects of the income statement growth.",source:"@site/content/platform/reference/equity/fundamental/income_growth.md",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/income_growth",permalink:"/platform/reference/equity/fundamental/income_growth",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/fundamental/income_growth.md",tags:[],version:"current",frontMatter:{title:"income_growth",description:"Explore the growth of a company's income statement with the Python function obb.equity.fundamental.income_growth. Retrieve data for symbols, specify the limit, period, and provider, and get detailed information on various aspects of the income statement growth.",keywords:["income statement growth","company income statement","python obb.equity.fundamental.income_growth","symbol","limit","period","provider","data entries","time period","provider name","warnings","chart object","metadata","symbol data","date","growth revenue","cost of goods sold","gross profit","gross profit ratio","research and development expenses","general and administrative expenses","selling and marketing expenses","operating expenses","total costs and expenses","interest expenses","depreciation and amortization expenses","ebitda","ebitda ratio","operating income","operating income ratio","total other income expenses net","income before tax","income tax expenses","net income","eps","eps diluted","weighted average shares outstanding"]},sidebar:"tutorialSidebar",previous:{title:"income",permalink:"/platform/reference/equity/fundamental/income"},next:{title:"management",permalink:"/platform/reference/equity/fundamental/management"}},m={},p=[{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],c={toc:p},g="wrapper";function f(t){let{components:e,...a}=t;return(0,r.kt)(g,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"equity /fundamental/income_growth - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Income Statement Growth. Information about the growth of the company income statement."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\nobb.equity.fundamental.income_growth(symbol="AAPL", limit=10, period="annual")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of data entries to return."),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['annual', 'quarter']"),(0,r.kt)("td",{parentName:"tr",align:null},"Time period of the data to return."),(0,r.kt)("td",{parentName:"tr",align:null},'"annual"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,r.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,r.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : List[IncomeStatementGrowth]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    metadata: Optional[Metadata]\n        Metadata info about the command execution.\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"period"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Period the statement is returned for.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of total revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_cost_of_revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of cost of goods sold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_gross_profit"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of gross profit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_gross_profit_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of gross profit as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_research_and_development_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of expenses on research and development.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_general_and_administrative_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of general and administrative expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_selling_and_marketing_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of expenses on selling and marketing activities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_other_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of other operating expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_operating_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of total operating expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_cost_and_expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of total costs and expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_interest_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of interest expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_depreciation_and_amortization"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of depreciation and amortization expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_ebitda"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of Earnings Before Interest, Taxes, Depreciation, and Amortization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_ebitda_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of EBITDA as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_operating_income"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of operating income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_operating_income_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of operating income as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_total_other_income_expenses_net"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of net total other income and expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_income_before_tax"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of income before taxes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_income_before_tax_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of income before taxes as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_income_tax_expense"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of income tax expenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_net_income"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of net income.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_net_income_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of net income as a percentage of revenue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_eps"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of Earnings Per Share (EPS).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_eps_diluted"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of diluted Earnings Per Share (EPS).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_weighted_average_shs_out"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of weighted average shares outstanding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"growth_weighted_average_shs_out_dil"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Growth rate of diluted weighted average shares outstanding.")))))))}f.isMDXComponent=!0}}]);