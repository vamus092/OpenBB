"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(y,a(a({ref:t},u),{},{components:n})):o.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(35742);function i(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},71182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905)),i=n(88828);const a={title:"Sharing Your Extension",sidebar_position:4,description:"This guide provides detailed instructions on how to share your custom OpenBB extension with the community by publishing it on PyPI.",keywords:["OpenBB extensions","PyPI publishing","Extension sharing","Custom extension","OpenBB community"]},l=void 0,s={unversionedId:"platform/development/contributor-guidelines/sharing_extensions",id:"platform/development/contributor-guidelines/sharing_extensions",title:"Sharing Your Extension",description:"This guide provides detailed instructions on how to share your custom OpenBB extension with the community by publishing it on PyPI.",source:"@site/content/platform/development/contributor-guidelines/sharing_extensions.md",sourceDirName:"platform/development/contributor-guidelines",slug:"/platform/development/contributor-guidelines/sharing_extensions",permalink:"/platform/development/contributor-guidelines/sharing_extensions",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/contributor-guidelines/sharing_extensions.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",sidebarPosition:4,frontMatter:{title:"Sharing Your Extension",sidebar_position:4,description:"This guide provides detailed instructions on how to share your custom OpenBB extension with the community by publishing it on PyPI.",keywords:["OpenBB extensions","PyPI publishing","Extension sharing","Custom extension","OpenBB community"]},sidebar:"tutorialSidebar",previous:{title:"Manage Extensions",permalink:"/platform/development/contributor-guidelines/manage_extensions"},next:{title:"Write Code and Commit",permalink:"/platform/development/contributor-guidelines/write_code_commit"}},p={},u=[{value:"Publish your extension to PyPI",id:"publish-your-extension-to-pypi",level:2},{value:"Setup",id:"setup",level:3},{value:"Release",id:"release",level:3},{value:"Publish",id:"publish",level:3}],c={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Sharing Your Extension - Contributor Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"We encourage you to share your extension with the community. You can do that by publishing it to PyPI."),(0,r.kt)("h2",{id:"publish-your-extension-to-pypi"},"Publish your extension to PyPI"),(0,r.kt)("p",null,"To publish your extension to PyPI, you'll need to have a PyPI account and a PyPI API token."),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Create an account and get an API token from ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/manage/account/token/"},"https://pypi.org/manage/account/token/")),(0,r.kt)("p",null,"Store the token with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"poetry config pypi-token.pypi pypi-YYYYYYYY\n")),(0,r.kt)("h3",{id:"release"},"Release"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the directory where your extension ",(0,r.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," lives and make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," specifies the version tag you want to release and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"poetry build\n")),(0,r.kt)("p",null,"This will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"/dist")," folder in the directory, which will contain the ",(0,r.kt)("inlineCode",{parentName:"p"},".whl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tar.gz")," files matching the version to release."),(0,r.kt)("p",null,"If you want to test your package locally you can do it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install dist/openbb_[FILE_NAME].whl\n")),(0,r.kt)("h3",{id:"publish"},"Publish"),(0,r.kt)("p",null,"To publish your package to PyPI run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"poetry publish\n")),(0,r.kt)("p",null,"Now, you can pip install your package from PyPI with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install openbb-some_ext\n")))}m.isMDXComponent=!0}}]);