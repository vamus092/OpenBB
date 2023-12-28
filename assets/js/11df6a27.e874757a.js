"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Installation",sidebar_position:1,description:"This page presents the general requirements and the steps to install the OpenBB Excel Add-in. The OpenBB Excel Add-in is available on Windows, Mac, and Excel on the web. It can be installed by an administrator or by individual users.",keywords:["Microsoft Excel","Add-in"]},l=void 0,o={unversionedId:"excel/getting-started/installation",id:"excel/getting-started/installation",title:"Installation",description:"This page presents the general requirements and the steps to install the OpenBB Excel Add-in. The OpenBB Excel Add-in is available on Windows, Mac, and Excel on the web. It can be installed by an administrator or by individual users.",source:"@site/content/excel/getting-started/installation.md",sourceDirName:"excel/getting-started",slug:"/excel/getting-started/installation",permalink:"/excel/getting-started/installation",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/getting-started/installation.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1,description:"This page presents the general requirements and the steps to install the OpenBB Excel Add-in. The OpenBB Excel Add-in is available on Windows, Mac, and Excel on the web. It can be installed by an administrator or by individual users.",keywords:["Microsoft Excel","Add-in"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/excel/"},next:{title:"Basics",permalink:"/excel/usage/basics"}},s={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Individual user",id:"individual-user",level:3},{value:"Administrator",id:"administrator",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"The OpenBB Excel Add-in is available on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows (Microsoft 365)"),(0,r.kt)("li",{parentName:"ul"},"Mac (Microsoft 365)"),(0,r.kt)("li",{parentName:"ul"},"Excel on the web")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The OpenBB Excel Add-in is available on the Microsoft AppSource. It can be installed by an administrator or by individual users."),(0,r.kt)("h3",{id:"individual-user"},"Individual user"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Microsoft Excel."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Insert")," tab."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Get Add-ins"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Office Add-ins")," dialog box ",(0,r.kt)("strong",{parentName:"li"},"STORE")," tab, search for ",(0,r.kt)("strong",{parentName:"li"},"OpenBB")," and select the add-in."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If you are using Excel on the web replace steps 2-3 with ",(0,r.kt)("strong",{parentName:"p"},"Home")," > ",(0,r.kt)("strong",{parentName:"p"},"Add-ins")," > ",(0,r.kt)("strong",{parentName:"p"},"More add-ins"),".")),(0,r.kt)("h3",{id:"administrator"},"Administrator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to Microsoft 365 admin center."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Settings")," > ",(0,r.kt)("strong",{parentName:"li"},"Integrated apps"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Get apps"),"."),(0,r.kt)("li",{parentName:"ol"},"Search for ",(0,r.kt)("strong",{parentName:"li"},"OpenBB")," and select the add-in."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Get in now"),"."),(0,r.kt)("li",{parentName:"ol"},"Go through the deployment wizard to complete the installation.")))}u.isMDXComponent=!0}}]);