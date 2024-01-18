"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(35742);function i(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(15569);function i(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[i,o]=(0,a.useState)(!0);return a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},a.createElement("p",null,n),a.createElement("div",{style:{transform:"scale(0.7)"}},a.createElement(r.Toggle,{isOn:i,handleChange:()=>o(!i)}))),i&&a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},a.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},37894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(88828),o=n(20630);const l={title:"Tabular data",sidebar_position:0,description:"Explore OpenBB Terminal Pro Docs and learn about tabular data manipulation. Discover features like column resizing, reorganization, filtering, sorting, and transposing. Enhance your navigation and analysis of investment research data.",keywords:["tabular data","data manipulation","column resizing","column reorganization","column filtering","sorting","transposing","investment research","financial data"]},s=void 0,d={unversionedId:"pro/widgets/tabular-data/index",id:"pro/widgets/tabular-data/index",title:"Tabular data",description:"Explore OpenBB Terminal Pro Docs and learn about tabular data manipulation. Discover features like column resizing, reorganization, filtering, sorting, and transposing. Enhance your navigation and analysis of investment research data.",source:"@site/content/pro/widgets/tabular-data/index.md",sourceDirName:"pro/widgets/tabular-data",slug:"/pro/widgets/tabular-data/",permalink:"/pro/widgets/tabular-data/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/widgets/tabular-data/index.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705579840,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:0,frontMatter:{title:"Tabular data",sidebar_position:0,description:"Explore OpenBB Terminal Pro Docs and learn about tabular data manipulation. Discover features like column resizing, reorganization, filtering, sorting, and transposing. Enhance your navigation and analysis of investment research data.",keywords:["tabular data","data manipulation","column resizing","column reorganization","column filtering","sorting","transposing","investment research","financial data"]},sidebar:"tutorialSidebar",previous:{title:"Widgets",permalink:"/pro/widgets/"},next:{title:"Chart from raw data",permalink:"/pro/widgets/tabular-data/chart-from-raw-data"}},c={},u=[{value:"Column Resizing",id:"column-resizing",level:2},{value:"Column Reorganization",id:"column-reorganization",level:2},{value:"Column Filtering",id:"column-filtering",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Transposing",id:"transposing",level:2}],p={toc:u},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Tabular Data | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,r.kt)(o.Z,{youtubeLink:"https://www.youtube.com/embed/g_cdzenT6ck?si=wbCHt-Y5lQACeM9o",videoLegend:"Short introduction to tabular data",mdxType:"TutorialVideo"}),(0,r.kt)("p",null,"In the realm of investment research, financial data often comes in tabular form. This is because it's predominantly quantitative, and analysts and quants frequently need to delve into the raw data to make informed decisions. To enhance your navigation experience through this data, we've incorporated basic data manipulation capabilities."),(0,r.kt)("h2",{id:"column-resizing"},"Column Resizing"),(0,r.kt)("p",null,'You have the flexibility to manually adjust the width of the table columns. Alternatively, you can use the "Autosize all columns" feature for automatic resizing.'),(0,r.kt)("h2",{id:"column-reorganization"},"Column Reorganization"),(0,r.kt)("p",null,"Reorganize your columns effortlessly with our drag-and-drop feature. Simply click and hold the mouse on the column header and drag it to your desired position."),(0,r.kt)("h2",{id:"column-filtering"},"Column Filtering"),(0,r.kt)("p",null,"To reduce visual clutter, you can temporarily hide any columns that aren't currently relevant to your analysis. This can be done easily in the column settings."),(0,r.kt)("h2",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"By clicking on a column header, you can sort the data in ascending or descending order based on that column's values."),(0,r.kt)("h2",{id:"transposing"},"Transposing"),(0,r.kt)("p",null,"Our platform allows you to transpose tables, turning columns into rows and vice versa. This feature can be particularly useful for rendering time series from tabular data."))}g.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var a,r=(a=n(67294))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return r.createElement("label",{"data-testid":"Toggle-label",className:"switch"},r.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),r.createElement("span",{className:"slider round"}))}}}]);