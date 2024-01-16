"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"v3.2.2",version:"3.2.2",date:new Date("2023-08-30T00:00:00.000Z"),description:"v3.2.2",sidebar_position:94},i=void 0,l={unversionedId:"terminal/changelog/version3_2_2",id:"terminal/changelog/version3_2_2",title:"v3.2.2",description:"v3.2.2",source:"@site/content/terminal/changelog/version3_2_2.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version3_2_2",permalink:"/terminal/changelog/version3_2_2",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version3_2_2.mdx",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1705424975,formattedLastUpdatedAt:"Jan 16, 2024",sidebarPosition:94,frontMatter:{title:"v3.2.2",version:"3.2.2",date:"2023-08-30T00:00:00.000Z",description:"v3.2.2",sidebar_position:94},sidebar:"tutorialSidebar",previous:{title:"v3.2.3",permalink:"/terminal/changelog/version3_2_3"},next:{title:"v3.2.1",permalink:"/terminal/changelog/version3_2_1"}},p={},s=[{value:"Thank you and welcome to our new contributors \ud83d\udd25",id:"thank-you-and-welcome-to-our-new-contributors-",level:2},{value:"What&#39;s new \ud83c\udf89",id:"whats-new-",level:2},{value:"What&#39;s changed \ud83d\ude80",id:"whats-changed-",level:2},{value:"Links \ud83e\udd8b",id:"links-",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"thank-you-and-welcome-to-our-new-contributors-"},"Thank you and welcome to our new contributors \ud83d\udd25"),(0,a.kt)("p",null,"@Define101 and @kulbinderdio"),(0,a.kt)("h2",{id:"whats-new-"},"What's new \ud83c\udf89"),(0,a.kt)("p",null,"We are excited to launch an implementation of TimeGPT from nixtla!"),(0,a.kt)("p",null,"As per usual, we are also including some general bug fixes, enhancements and documentations.  We have also deprecated some crypto functions that have not been returning data from their API."),(0,a.kt)("h2",{id:"whats-changed-"},"What's changed \ud83d\ude80"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"update defillama_dapps json file (#5380) @Define101"),(0,a.kt)("li",{parentName:"ul"},"Allow to execute reports url from reports menu (#5385) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Feature/companies house (#4721) @kulbinderdio"),(0,a.kt)("li",{parentName:"ul"},"Hotfix - PyWry fix python 3.11 fail on boot, copy+paste on MacOS (#5384) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"Change bootup message (#5378) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Add example notebook for building volume-at-price chart. (#5370) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"Fix foreach on routine where the inputs provided are not valid (#5373) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"1st integration with TimeGPT-1 (Beta), from Nixtla (#5292) @DidierRLopes"),(0,a.kt)("li",{parentName:"ul"},"Removed prints (#5367) @colin99d"),(0,a.kt)("li",{parentName:"ul"},"Some error handling (#5357) @colin99d"),(0,a.kt)("li",{parentName:"ul"},"Improves the ",(0,a.kt)("inlineCode",{parentName:"li"},"settings/userdata")," command, and upgrade ruff (#5359) @colin99d"),(0,a.kt)("li",{parentName:"ul"},"bye bye shroom (#5351) @colin99d"),(0,a.kt)("li",{parentName:"ul"},"hotfix / Allow routine args inside lists (#5353) @tehcoderer"),(0,a.kt)("li",{parentName:"ul"},"Fix the CPI CSV and remove twitter functionalities (#5350) @jmaslek"),(0,a.kt)("li",{parentName:"ul"},"Thegraph totally changed, I removed the endpoints (#5349) @colin99d"),(0,a.kt)("li",{parentName:"ul"},"Adds example notebook for installing in Google Colab (#5333) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"Improve documentation (#5345) @colin99d"),(0,a.kt)("li",{parentName:"ul"},"Fixes #5332 (#5344) @colin99d"),(0,a.kt)("li",{parentName:"ul"},"hotfix/fix-stocks-search-sdk3: Fixes the stocks search so that it doesn't ",(0,a.kt)("inlineCode",{parentName:"li"},"print_rich_table()")," for SDK. (#5329) @deeleeramone"),(0,a.kt)("li",{parentName:"ul"},"Fixed URL for uploading to the hub (#5340) @colin99d"),(0,a.kt)("li",{parentName:"ul"},"Fixed the request function (#5336) @colin99d"),(0,a.kt)("li",{parentName:"ul"},"Release/3.2.1 (#5335) @jmaslek")),(0,a.kt)("p",null,"We are proud of our community contributors and staunch supporters of open-source ecosystems.\nHelp us promote our community by tagging ",(0,a.kt)("inlineCode",{parentName:"p"},"@openbb_finance")," on Twitter with a link to your pull request,\nand join our Discord server to chat about your contribution! We want to hear about your experience!"),(0,a.kt)("h3",{id:"links-"},"Links \ud83e\udd8b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openbb.co/"},"Website"),", ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/openbb_finance"},"Twitter"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/openbb-finance"},"Linkedin"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.instagram.com/openbb.finance/"},"Instagram"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/openbb/"},"Reddit"),", ",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/xPHTuHCmuV"},"Discord")))}d.isMDXComponent=!0}}]);