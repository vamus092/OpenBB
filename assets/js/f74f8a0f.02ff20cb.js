"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(35742);function o(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},25763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(88828);const l={title:"regions",description:"This page provides details about the 'regions' function of the OpenBB finance platform. The said function displays the portfolio region allocation in comparison to the benchmark. It includes a brief overview, parameters, return values, and an example usage.",keywords:["OpenBB finance platform","portfolio region allocation","benchmark comparison","portfolio management","portfolio allocation","parameters","example usage"]},i=void 0,p={unversionedId:"sdk/reference/portfolio/alloc/regions",id:"sdk/reference/portfolio/alloc/regions",title:"regions",description:"This page provides details about the 'regions' function of the OpenBB finance platform. The said function displays the portfolio region allocation in comparison to the benchmark. It includes a brief overview, parameters, return values, and an example usage.",source:"@site/content/sdk/reference/portfolio/alloc/regions.md",sourceDirName:"sdk/reference/portfolio/alloc",slug:"/sdk/reference/portfolio/alloc/regions",permalink:"/sdk/reference/portfolio/alloc/regions",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/alloc/regions.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705579840,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"regions",description:"This page provides details about the 'regions' function of the OpenBB finance platform. The said function displays the portfolio region allocation in comparison to the benchmark. It includes a brief overview, parameters, return values, and an example usage.",keywords:["OpenBB finance platform","portfolio region allocation","benchmark comparison","portfolio management","portfolio allocation","parameters","example usage"]},sidebar:"tutorialSidebar",previous:{title:"countries",permalink:"/sdk/reference/portfolio/alloc/countries"},next:{title:"sectors",permalink:"/sdk/reference/portfolio/alloc/sectors"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{title:"portfolio.alloc.regions - Reference | OpenBB SDK Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display portfolio region allocation compared to the benchmark"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L944"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.portfolio.alloc.regions(portfolio_engine: portfolio_engine.PortfolioEngine, limit: int = 10, tables: bool = False, recalculate: bool = False)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,a.kt)("td",{parentName:"tr",align:null},"PortfolioEngine"),(0,a.kt)("td",{parentName:"tr",align:null},"PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,a.kt)("br",null),"Use ",(0,a.kt)("inlineCode",{parentName:"td"},"portfolio.load")," to create a PortfolioEngine."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tables"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to include separate allocation tables"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of assets you wish to show, by default this is set to 10"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"recalculate"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to force recalculate allocation if already exists"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Union[pd.DataFrame, Tuple","[pd.DataFrame, pd.DataFrame, pd.DataFrame]","]"),(0,a.kt)("td",{parentName:"tr",align:null},"DataFrame with combined allocation plus individual allocation if tables is ",(0,a.kt)("inlineCode",{parentName:"td"},"True"),".")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio/holdings_example.xlsx")\noutput = openbb.portfolio.alloc.regions(p)\n')),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);