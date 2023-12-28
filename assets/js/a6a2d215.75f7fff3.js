"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(67294),i=n(35742);function r(e){let{title:t}=e;return o.createElement(i.Z,null,o.createElement("title",null,t))}},75412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905)),r=n(88828);const a={title:"OBBject Extensions",sidebar_position:8,description:"This page provides information about how to write extensions for the OpenBB OBBject class.",keywords:["OBBject","Python","Development","OpenBB Platform"]},l=void 0,s={unversionedId:"platform/development/developer-guidelines/obbject_extensions",id:"platform/development/developer-guidelines/obbject_extensions",title:"OBBject Extensions",description:"This page provides information about how to write extensions for the OpenBB OBBject class.",source:"@site/content/platform/development/developer-guidelines/obbject_extensions.md",sourceDirName:"platform/development/developer-guidelines",slug:"/platform/development/developer-guidelines/obbject_extensions",permalink:"/platform/development/developer-guidelines/obbject_extensions",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/developer-guidelines/obbject_extensions.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",sidebarPosition:8,frontMatter:{title:"OBBject Extensions",sidebar_position:8,description:"This page provides information about how to write extensions for the OpenBB OBBject class.",keywords:["OBBject","Python","Development","OpenBB Platform"]},sidebar:"tutorialSidebar",previous:{title:"OpenBB OBBject",permalink:"/platform/development/developer-guidelines/obbject"},next:{title:"Introduction",permalink:"/platform/development/contributor-guidelines/"}},p={},c=[{value:"Folder structure",id:"folder-structure",level:3},{value:"Writing the extension",id:"writing-the-extension",level:3},{value:"Entry Point",id:"entry-point",level:3},{value:"Using the extension",id:"using-the-extension",level:3}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{title:"OBBject Extensions - Developer Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"As mentioned, OpenBB provides some basic methods for interacting with common data structures that will be seen in the results attribute.\nIf you are working with custom data, or adding new endpoints, it is possible that you will want to have your own methods for interacting with the data.\nThe OpenBB Platform provides a way to do this by extending the OBBject class.\nThe architecture for extensions was designed similar to how extensions and accessors are done in pandas, and relies on plugins through the poetry dependency management package."),(0,i.kt)("p",null,"This page will go through the steps of developing a simple, custom extension for the OBBject class."),(0,i.kt)("h3",{id:"folder-structure"},"Folder structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"example\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 openbb_example\n\u2502   \u2514\u2500\u2500 __init__.py\n\u251c\u2500\u2500 poetry.lock\n\u2514\u2500\u2500 pyproject.toml\n")),(0,i.kt)("h3",{id:"writing-the-extension"},"Writing the extension"),(0,i.kt)("p",null,"In this example the extension code all lives inside ",(0,i.kt)("inlineCode",{parentName:"p"},"__init__.py"),"."),(0,i.kt)("p",null,"First we create an ",(0,i.kt)("inlineCode",{parentName:"p"},"Extension")," class instance to tell ",(0,i.kt)("inlineCode",{parentName:"p"},"openbb-core")," our extension name and any required credentials to be available at ",(0,i.kt)("inlineCode",{parentName:"p"},"obb.user.credentials"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_core.app.model.extension import Extension\n\next = Extension(name="example", credentials=["some_api_key"])\n')),(0,i.kt)("p",null,"The credentials are required if the extension uses a key for data or a service, or it can alternatively be connection information for a database, or any other information that needs to be passed to the extension."),(0,i.kt)("p",null,"Now we define the extension functionality. The decorator ",(0,i.kt)("inlineCode",{parentName:"p"},"@ext.obbject_accessor")," registers an accessor in each ",(0,i.kt)("inlineCode",{parentName:"p"},"OBBject")," that is returned when a command is executed. This accessor is just a namespace that will contain the methods defined in the decorated class."),(0,i.kt)("p",null,"Here, we just add a method to say hi:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@ext.obbject_accessor\nclass Example:\n    def __init__(self, obbject):\n        self._obbject = obbject\n\n    def hello(self):\n        api_key = self._obbject._credentials.some_api_key.get_secret_value()\n        print(f"Hello, this is my credential: {api_key}!")\n')),(0,i.kt)("h3",{id:"entry-point"},"Entry Point"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," file will specify the usual setup and dependency information. Additionally, we need to include the following block:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[tool.poetry.plugins."openbb_obbject_extension"]\nexample = "openbb_example:ext"\n')),(0,i.kt)("p",null,"With this in the file, we can install the extension by running ",(0,i.kt)("inlineCode",{parentName:"p"},"poetry install")," from the extension folder."),(0,i.kt)("h3",{id:"using-the-extension"},"Using the extension"),(0,i.kt)("p",null,"Now that the extension is installed and built, we can use it!  Because we are extending the ",(0,i.kt)("inlineCode",{parentName:"p"},"OBBject"),", this will be available on any function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'>>> from openbb import obb\n>>> obb.user.credentials.some_api_key = "test"\n>>> obbject = obb.equity.price.historical("AAPL")\n>>> obbject.example.hello()\nHello, this is my credential: test!\n')),(0,i.kt)("p",null,"In this example, we have added obbject.example as the extension and can use the .hello() functionality right from our OBBject."))}m.isMDXComponent=!0}}]);