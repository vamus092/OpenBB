"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(35742);function i(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},37894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(88828);const o={title:"Tabular data",sidebar_position:0,description:"Explore OpenBB Terminal Pro Docs and learn about tabular data manipulation. Discover features like column resizing, reorganization, filtering, sorting, and transposing. Enhance your navigation and analysis of investment research data.",keywords:["tabular data","data manipulation","column resizing","column reorganization","column filtering","sorting","transposing","investment research","financial data"]},l=void 0,s={unversionedId:"pro/widgets/tabular-data/index",id:"pro/widgets/tabular-data/index",title:"Tabular data",description:"Explore OpenBB Terminal Pro Docs and learn about tabular data manipulation. Discover features like column resizing, reorganization, filtering, sorting, and transposing. Enhance your navigation and analysis of investment research data.",source:"@site/content/pro/widgets/tabular-data/index.md",sourceDirName:"pro/widgets/tabular-data",slug:"/pro/widgets/tabular-data/",permalink:"/pro/widgets/tabular-data/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/widgets/tabular-data/index.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1700864596,formattedLastUpdatedAt:"Nov 24, 2023",sidebarPosition:0,frontMatter:{title:"Tabular data",sidebar_position:0,description:"Explore OpenBB Terminal Pro Docs and learn about tabular data manipulation. Discover features like column resizing, reorganization, filtering, sorting, and transposing. Enhance your navigation and analysis of investment research data.",keywords:["tabular data","data manipulation","column resizing","column reorganization","column filtering","sorting","transposing","investment research","financial data"]},sidebar:"tutorialSidebar",previous:{title:"Chat with widgets",permalink:"/pro/widgets/chat-with-widget"},next:{title:"Chart from raw data",permalink:"/pro/widgets/tabular-data/chart-from-raw-data"}},u={},c=[{value:"Column Resizing",id:"column-resizing",level:2},{value:"Column Reorganization",id:"column-reorganization",level:2},{value:"Column Filtering",id:"column-filtering",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Transposing",id:"transposing",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Tabular Data | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"In the realm of investment research, financial data often comes in tabular form. This is because it's predominantly quantitative, and analysts and quants frequently need to delve into the raw data to make informed decisions. To enhance your navigation experience through this data, we've incorporated basic data manipulation capabilities."),(0,r.kt)("h2",{id:"column-resizing"},"Column Resizing"),(0,r.kt)("p",null,'You have the flexibility to manually adjust the width of the table columns. Alternatively, you can use the "Autosize all columns" feature for automatic resizing.'),(0,r.kt)("h2",{id:"column-reorganization"},"Column Reorganization"),(0,r.kt)("p",null,"Reorganize your columns effortlessly with our drag-and-drop feature. Simply click and hold the mouse on the column header and drag it to your desired position."),(0,r.kt)("h2",{id:"column-filtering"},"Column Filtering"),(0,r.kt)("p",null,"To reduce visual clutter, you can temporarily hide any columns that aren't currently relevant to your analysis. This can be done easily in the column settings."),(0,r.kt)("h2",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"By clicking on a column header, you can sort the data in ascending or descending order based on that column's values."),(0,r.kt)("h2",{id:"transposing"},"Transposing"),(0,r.kt)("p",null,"Our platform allows you to transpose tables, turning columns into rows and vice versa. This feature can be particularly useful for rendering time series from tabular data."))}m.isMDXComponent=!0}}]);