"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(35742);function o(e){let{title:t}=e;return a.createElement(r.Z,null,a.createElement("title",null,t))}},28315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(88828);const i={title:"Introduction",sidebar_position:0,description:"Introduction to OpenBB Platform; a convenient and powerful tool that provides pre-built data connectors and libraries to design and build financial reports and applications. Learn more about contributing to the platform.",keywords:["OpenBB Platform","investment research infrastructure","data connectors","financial reports","OpenBB team","third-party data providers","CONTRIBUTING GUIDELINES"]},l=void 0,s={unversionedId:"platform/index",id:"platform/index",title:"Introduction",description:"Introduction to OpenBB Platform; a convenient and powerful tool that provides pre-built data connectors and libraries to design and build financial reports and applications. Learn more about contributing to the platform.",source:"@site/content/platform/index.md",sourceDirName:"platform",slug:"/platform/",permalink:"/platform/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/index.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1705424975,formattedLastUpdatedAt:"Jan 16, 2024",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0,description:"Introduction to OpenBB Platform; a convenient and powerful tool that provides pre-built data connectors and libraries to design and build financial reports and applications. Learn more about contributing to the platform.",keywords:["OpenBB Platform","investment research infrastructure","data connectors","financial reports","OpenBB team","third-party data providers","CONTRIBUTING GUIDELINES"]},sidebar:"tutorialSidebar",previous:{title:"world",permalink:"/excel/reference/news/world"},next:{title:"Installation",permalink:"/platform/installation"}},p={},d=[{value:"What is the OpenBB Platform?",id:"what-is-the-openbb-platform",level:2}],c={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The OpenBB Platform has been created and is currently maintained by the OpenBB team together with the contributions from hundreds of community members. This gives us an unrivaled speed of development and the ability to maintain stable integrations with numerous third-party data providers."),(0,r.kt)("p",null,"Developing and maintaining a full-blown investment research infrastructure from the ground up takes a lot of time and effort. However, it does not have to be this way. By taking advantage of OpenBB Platform with its out-of-the-box data connectors and library of extensions, you can focus on designing and building your financial reports and applications."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/74520441-5e95-4ba6-9d16-6a2d5c966cf9",alt:"Platform Docs pic"})),(0,r.kt)("h2",{id:"what-is-the-openbb-platform"},"What is the OpenBB Platform?"),(0,r.kt)("p",null,"Starting with V4, we have completely restructured the previous version of the OpenBB SDK.\nInstead of a single monolithic SDK, that comes with dependency nightmares and compatibility issues with things you may not need, we have morphed into the OpenBB Platform, which serves as a collection of building blocks to be used for your own need."),(0,r.kt)("p",null,"We have broken the Platform into two main components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OpenBB Core"),(0,r.kt)("li",{parentName:"ul"},"OpenBB Extensions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OpenBB Providers"),(0,r.kt)("li",{parentName:"ul"},"OpenBB Toolkits")))),(0,r.kt)("p",null,"The OpenBB Core provides all of the groundwork for building custom applications.  It is a lightweight package providing connections with data providers in a standardized way, and the ability to build additional toolkits on top.  Additionally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb-core")," library contains the infrastructure for Fast API deployments."),(0,r.kt)("p",null,"OpenBB Extensions are the pieces that can be added to the core for building on top of.  We have grouped them categorically as, Providers and Toolkits.\nAs the name suggests, Providers are the interface to obtaining any raw data from any data source. The data providers are accessed through asset class extensions, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb-equity"),". OpenBB toolkits, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb-technical"),", provide additional functionalities on top of the raw data access."),(0,r.kt)("p",null,"When you install the Platform (openbb), we provide a default set of extensions that give access to a wide range of functionalities and data.  Additional data and processing tools are available to be installed and used as desired. The reason we are doing this is to avoid an overcomplicated environment with many dependencies that can cause issues. The goal is that OpenBB can be used as a drop-in within any environment for building and extending applications."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Want to contribute? Check out our ",(0,r.kt)("a",{parentName:"p",href:"/platform/development"},"Development section"),"."))}m.isMDXComponent=!0}}]);