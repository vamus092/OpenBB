"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28895],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(t),f=o,u=s["".concat(i,".").concat(f)]||s[f]||p[f]||a;return t?n.createElement(u,c(c({ref:r},m),{},{components:t})):n.createElement(u,c({ref:r},m))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<a;d++)c[d]=t[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(39960),o=t(86010),a=t(67294),c=t(16550),l=t(48334);function i(e){let{title:r,url:t,description:i,command:d}=e;const{pathname:m}=(0,c.TH)(),s=m.replace(/\/v\d+/,""),p=!s.includes("/reference")&&!s.includes("/widgets-library/")&&!s.includes("/data_models");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":s.startsWith("/terminal")||s.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":s.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":s.startsWith("/sdk")||s.startsWith("/platform"),header_docs:!(s.startsWith("/terminal")||s.startsWith("/pro")||s.startsWith("/sdk")||s.startsWith("/platform")||s.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),a.createElement("div",{className:"flex items-center"},a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&a.createElement(l.Z,{className:"ml-auto mr-4"})),i?a.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},i):null)}},18229:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var n=t(87462),o=(t(67294),t(3905)),a=t(26515);const c={},l="gdp",i={unversionedId:"platform/reference/economy/gdp/index",id:"platform/reference/economy/gdp/index",title:"gdp",description:"Commands",source:"@site/content/platform/reference/economy/gdp/index.mdx",sourceDirName:"platform/reference/economy/gdp",slug:"/platform/reference/economy/gdp/",permalink:"/platform/reference/economy/gdp/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/economy/gdp/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"economy",permalink:"/platform/reference/economy/"},next:{title:"forecast",permalink:"/platform/reference/economy/gdp/forecast"}},d={},m=[{value:"Commands",id:"commands",level:3}],s={toc:m},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gdp"},"gdp"),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"Forecast",description:"Forecasted GDP Data",url:"/platform/reference/economy/gdp/forecast",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Nominal",description:"Nominal GDP Data",url:"/platform/reference/economy/gdp/nominal",command:!0,mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"Real",description:"Real GDP Data",url:"/platform/reference/economy/gdp/real",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);