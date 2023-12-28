"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54356],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),p=n,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||l;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:r},t)}},88828:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(35742);function l(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},31792:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(87462),n=r(67294),l=r(86010),o=r(12466),i=r(16550),u=r(91980),s=r(67392),c=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:r,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=u??d;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var b=r(72389);const h={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),{pathname:p}=(0,i.TH)(),f=e=>{const t=e.currentTarget,r=d.indexOf(t),a=c[r].value;a!==u&&(m(t),s(a))},g=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},c.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>d.push(e),onKeyDown:g,onClick:f},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",h.tabItem,o?.className,{"border-b-2 pointer-events-none":u===t,"border-b-2 text-[#669dcb] border-[#669dcb]":u===t&&p.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&p.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&p.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===t&&p.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==t&&p.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==t&&p.startsWith("/terminal")})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},75026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(88828),o=r(31792),i=r(85162);const u={title:"omega_ratio",description:"Learn how to calculate the Omega Ratio using a Python function. This documentation page provides information on the parameters required, including time series data, target column, and threshold. The function returns a list of Omega ratios.",keywords:["Omega Ratio","calculate Omega Ratio","Python function","documentation page","time series data","target column","threshold","OmegaModel"]},s=void 0,c={unversionedId:"platform/reference/quantitative/omega_ratio",id:"platform/reference/quantitative/omega_ratio",title:"omega_ratio",description:"Learn how to calculate the Omega Ratio using a Python function. This documentation page provides information on the parameters required, including time series data, target column, and threshold. The function returns a list of Omega ratios.",source:"@site/content/platform/reference/quantitative/omega_ratio.md",sourceDirName:"platform/reference/quantitative",slug:"/platform/reference/quantitative/omega_ratio",permalink:"/platform/reference/quantitative/omega_ratio",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/quantitative/omega_ratio.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{title:"omega_ratio",description:"Learn how to calculate the Omega Ratio using a Python function. This documentation page provides information on the parameters required, including time series data, target column, and threshold. The function returns a list of Omega ratios.",keywords:["Omega Ratio","calculate Omega Ratio","Python function","documentation page","time series data","target column","threshold","OmegaModel"]},sidebar:"tutorialSidebar",previous:{title:"normality",permalink:"/platform/reference/quantitative/normality"},next:{title:"quantile",permalink:"/platform/reference/quantitative/quantile"}},d={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],p={toc:m},f="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{title:"quantitative /omega_ratio - Reference | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Calculate the Omega Ratio."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"obb.quantitative.omega_ratio(data: Union[list, dict, pd.DataFrame, List[pd.DataFrame], pd.Series, List[pd.Series], numpy.ndarray, Data, List[Data]], target: str, threshold_start: float = 0.0, threshold_end: float = 1.5)\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"List","[Data]"),(0,n.kt)("td",{parentName:"tr",align:null},"Time series data."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"target"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Target column name."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"threshold_start"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Start threshold, by default 0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"0.0"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"threshold_end"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"End threshold, by default 1.5"),(0,n.kt)("td",{parentName:"tr",align:null},"1.5"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"Omega ratios.\n")),(0,n.kt)("hr",null))}g.isMDXComponent=!0}}]);