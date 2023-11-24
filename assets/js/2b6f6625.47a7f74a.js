"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71075],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),p=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),c=p(r),s=n,f=c["".concat(i,".").concat(s)]||c[s]||m[s]||l;return r?a.createElement(f,o(o({ref:e},d),{},{components:r})):a.createElement(f,o({ref:e},d))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[c]="string"==typeof t?t:n,o[1]=u;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},85162:(t,e,r)=>{r.d(e,{Z:()=>o});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:r,className:o}=t;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},e)}},88828:(t,e,r)=>{r.d(e,{Z:()=>l});var a=r(67294),n=r(35742);function l(t){let{title:e}=t;return a.createElement(n.Z,null,a.createElement("title",null,e))}},31792:(t,e,r)=>{r.d(e,{Z:()=>v});var a=r(87462),n=r(67294),l=r(86010),o=r(12466),u=r(16550),i=r(91980),p=r(67392),d=r(50012);function c(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:r,attributes:a,default:n}}=t;return{value:e,label:r,attributes:a,default:n}}))}function m(t){const{values:e,children:r}=t;return(0,n.useMemo)((()=>{const t=e??c(r);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function s(t){let{value:e,tabValues:r}=t;return r.some((t=>t.value===e))}function f(t){let{queryString:e=!1,groupId:r}=t;const a=(0,u.k6)(),l=function(t){let{queryString:e=!1,groupId:r}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,t),a.replace({...a.location,search:e.toString()})}),[l,a])]}function k(t){const{defaultValue:e,queryString:r=!1,groupId:a}=t,l=m(t),[o,u]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:r}=t;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!s({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=r.find((t=>t.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[i,p]=f({queryString:r,groupId:a}),[c,k]=function(t){let{groupId:e}=t;const r=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,l]=(0,d.Nk)(r);return[a,(0,n.useCallback)((t=>{r&&l.set(t)}),[r,l])]}({groupId:a}),g=(()=>{const t=i??c;return s({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((t=>{if(!s({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);u(t),p(t),k(t)}),[p,k,l]),tabValues:l}}var g=r(72389);const N={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(t){let{className:e,block:r,selectedValue:i,selectValue:p,tabValues:d}=t;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),{pathname:s}=(0,u.TH)(),f=t=>{const e=t.currentTarget,r=c.indexOf(e),a=d[r].value;a!==i&&(m(e),p(a))},k=t=>{let e=null;switch(t.key){case"Enter":f(t);break;case"ArrowRight":{const r=c.indexOf(t.currentTarget)+1;e=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(t.currentTarget)-1;e=c[r]??c[c.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},d.map((t=>{let{value:e,label:r,attributes:o}=t;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>c.push(t),onKeyDown:k,onClick:f},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",N.tabItem,o?.className,{"border-b-2 pointer-events-none":i===e,"border-b-2 text-[#669dcb] border-[#669dcb]":i===e&&s.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===e&&s.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==e&&s.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===e&&s.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==e&&s.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==e&&s.startsWith("/terminal")})}),r??e)})))}function y(t){let{lazy:e,children:r,selectedValue:a}=t;if(r=Array.isArray(r)?r:[r],e){const t=r.find((t=>t.props.value===a));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function h(t){const e=k(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},n.createElement(b,(0,a.Z)({},t,e)),n.createElement(y,(0,a.Z)({},t,e)))}function v(t){const e=(0,g.Z)();return n.createElement(h,(0,a.Z)({key:String(e)},t))}},60240:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(88828),o=r(31792),u=r(85162);const i={title:"reference_rates",description:"Current, official, currency reference rates",keywords:["currency","reference_rates"]},p=void 0,d={unversionedId:"platform/reference/currency/reference_rates",id:"platform/reference/currency/reference_rates",title:"reference_rates",description:"Current, official, currency reference rates",source:"@site/content/platform/reference/currency/reference_rates.md",sourceDirName:"platform/reference/currency",slug:"/platform/reference/currency/reference_rates",permalink:"/platform/reference/currency/reference_rates",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/currency/reference_rates.md",tags:[],version:"current",frontMatter:{title:"reference_rates",description:"Current, official, currency reference rates",keywords:["currency","reference_rates"]},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/platform/reference/currency/price/historical"},next:{title:"search",permalink:"/platform/reference/currency/search"}},c={},m=[{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}],s={toc:m},f="wrapper";function k(t){let{components:e,...r}=t;return(0,n.kt)(f,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"currency /reference_rates - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Current, official, currency reference rates."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb import obb\nobb.currency.reference_rates()\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['ecb']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'ecb' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"ecb"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"OBBject\n    results : List[CurrencyReferenceRates]\n        Serializable results.\n\n    provider : Optional[Literal['ecb']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    metadata: Optional[Metadata]\n        Metadata info about the command execution.\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"The date of the data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EUR"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Euro.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USD"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"US Dollar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"JPY"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Japanese Yen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BGN"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Bulgarian Lev.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CZK"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Czech Koruna.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DKK"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Danish Krone.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GBP"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Pound Sterling.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HUF"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Hungarian Forint.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PLN"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Polish Zloty.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RON"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Romanian Leu.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SEK"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Swedish Krona.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CHF"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Swiss Franc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ISK"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Icelandic Krona.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NOK"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Norwegian Krone.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TRY"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Turkish Lira.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AUD"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Australian Dollar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BRL"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Brazilian Real.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CAD"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Canadian Dollar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CNY"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Chinese Yuan.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HKD"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Hong Kong Dollar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IDR"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Indonesian Rupiah.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ILS"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Israeli Shekel.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"INR"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Indian Rupee.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"KRW"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"South Korean Won.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MXN"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Mexican Peso.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MYR"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Malaysian Ringgit.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NZD"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"New Zealand Dollar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PHP"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Philippine Peso.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SGD"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Singapore Dollar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"THB"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Thai Baht.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ZAR"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"South African Rand.")))))))}k.isMDXComponent=!0}}]);