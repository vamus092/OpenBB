"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20240],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=d(e.components);return o.createElement(l.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(t),f=a,u=m["".concat(l,".").concat(f)]||m[f]||p[f]||n;return t?o.createElement(u,i(i({ref:r},s),{},{components:t})):o.createElement(u,i({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<n;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var o=t(39960),a=t(86010),n=t(67294),i=t(16550),c=t(48334);function l(e){let{title:r,url:t,description:l,command:d}=e;const{pathname:s}=(0,i.TH)(),m=s.replace(/\/v\d+/,""),p=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return n.createElement(o.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:t},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),n.createElement("div",{className:"flex items-center"},n.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&n.createElement(c.Z,{className:"ml-auto mr-4"})),l?n.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},94595:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(87462),a=(t(67294),t(3905)),n=t(26515);const i={},c="corporate",l={unversionedId:"excel/reference/library/fixedincome/corporate/index",id:"excel/reference/library/fixedincome/corporate/index",title:"corporate",description:"Commands",source:"@site/content/excel/reference/library/fixedincome/corporate/index.mdx",sourceDirName:"excel/reference/library/fixedincome/corporate",slug:"/excel/reference/library/fixedincome/corporate/",permalink:"/excel/reference/library/fixedincome/corporate/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/fixedincome/corporate/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fixedincome",permalink:"/excel/reference/library/fixedincome/"},next:{title:"commercial_paper",permalink:"/excel/reference/library/fixedincome/corporate/commercial_paper"}},d={},s=[{value:"Commands",id:"commands",level:3}],m={toc:s},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"corporate"},"corporate"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(n.Z,{title:"spot_rates",description:"Spot Rates. The spot rates for any maturity is the yield on a bond that provides a single payment...",url:"corporate/spot_rates",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"commercial_paper",description:"Commercial Paper. Commercial paper (CP) consists of short-term, promissory notes issued primarily...",url:"corporate/commercial_paper",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"ice_bofa",description:"ICE BofA US Corporate Bond Indices. The ICE BofA US Corporate Index tracks the performance of US...",url:"corporate/ice_bofa",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"hqm",description:"High Quality Market Corporate Bond. The HQM yield curve represents the high quality corporate...",url:"corporate/hqm",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(n.Z,{title:"moody",description:"Moody Corporate Bond Index. Moody's Aaa and Baa are investment bonds that acts as an index of the...",url:"corporate/moody",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);