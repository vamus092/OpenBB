"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6865],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=i(t),f=o,u=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return t?n.createElement(u,s(s({ref:r},d),{},{components:t})):n.createElement(u,s({ref:r},d))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[m]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),o=t(86010),a=t(67294),s=t(16550);function c(e){let{title:r,url:t,description:c,command:l}=e;const{pathname:i}=(0,s.TH)(),d=i.replace(/\/v\d+/,"");return a.createElement(n.Z,{className:(0,o.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk")||d.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:t},a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),a.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),c?a.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},78124:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(87462),o=(t(67294),t(3905)),a=t(62872);const s={},c="screeners",l={unversionedId:"bot/reference/telegram/screeners/index",id:"bot/reference/telegram/screeners/index",title:"screeners",description:"<ReferenceCard",source:"@site/content/bot/reference/telegram/screeners/index.mdx",sourceDirName:"bot/reference/telegram/screeners",slug:"/bot/reference/telegram/screeners/",permalink:"/bot/reference/telegram/screeners/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/screeners/index.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705579840,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"watchlist_remove",permalink:"/bot/reference/telegram/overview/watchlist_remove"},next:{title:"ah",permalink:"/bot/reference/telegram/screeners/scr/ah"}},i={},d=[],m={toc:d},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"screeners"},"screeners"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"scr",description:"ah all pm",url:"/bot/reference/telegram/screeners/scr",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"screener",description:"This command allows the user to retrieve stock screener results according to the chosen technical signal.",url:"/bot/reference/telegram/screeners/screener",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);