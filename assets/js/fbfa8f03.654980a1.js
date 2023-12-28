"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82720],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return t?n.createElement(f,o(o({ref:r},d),{},{components:t})):n.createElement(f,o({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(39960),a=t(86010),i=t(67294),o=t(16550),c=t(48334);function l(e){let{title:r,url:t,description:l,command:s}=e;const{pathname:d}=(0,o.TH)(),p=d.replace(/\/v\d+/,""),m=!p.includes("/reference")&&!p.includes("/widgets-library/")&&!p.includes("/data_models");return i.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":p.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":p.startsWith("/sdk")||p.startsWith("/platform"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/pro")||p.startsWith("/excel")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot"))}),to:t},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),m&&i.createElement(c.Z,{className:"ml-auto mr-4"})),l?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},l):null)}},52535:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),i=t(26515);const o={},c="price",l={unversionedId:"excel/reference/library/equity/price/index",id:"excel/reference/library/equity/price/index",title:"price",description:"Commands",source:"@site/content/excel/reference/library/equity/price/index.mdx",sourceDirName:"excel/reference/library/equity/price",slug:"/excel/reference/library/equity/price/",permalink:"/excel/reference/library/equity/price/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/equity/price/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"share_statistics",permalink:"/excel/reference/library/equity/ownership/share_statistics"},next:{title:"historical",permalink:"/excel/reference/library/equity/price/historical"}},s={},d=[{value:"Commands",id:"commands",level:3}],p={toc:d},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"price"},"price"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"nbbo",description:"Equity NBBO. Load National Best Bid and Offer for a specific equity.",url:"price/nbbo",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"performance",description:"Price performance as a return, over different periods.",url:"price/performance",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"historical",description:"Equity Historical price. Load stock data for a specific ticker.",url:"price/historical",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"quote",description:"Equity Quote. Load stock data for a specific ticker.",url:"price/quote",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);