"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(35742);function r(e){let{title:t}=e;return a.createElement(o.Z,null,a.createElement("title",null,t))}},95263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(88828);const l={title:"OpenBB OBBject",sidebar_position:7,description:"This page provides information about the OBBject class in the OpenBB Platform.  This class provides the interface to interact with commands",keywords:["OBBject","Python","Development","OpenBB Platform","Results","Commands","Pandas","DataFrame","Polars","Numpy"]},i=void 0,s={unversionedId:"platform/development/developer-guidelines/obbject",id:"platform/development/developer-guidelines/obbject",title:"OpenBB OBBject",description:"This page provides information about the OBBject class in the OpenBB Platform.  This class provides the interface to interact with commands",source:"@site/content/platform/development/developer-guidelines/obbject.md",sourceDirName:"platform/development/developer-guidelines",slug:"/platform/development/developer-guidelines/obbject",permalink:"/platform/development/developer-guidelines/obbject",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/developer-guidelines/obbject.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1705424975,formattedLastUpdatedAt:"Jan 16, 2024",sidebarPosition:7,frontMatter:{title:"OpenBB OBBject",sidebar_position:7,description:"This page provides information about the OBBject class in the OpenBB Platform.  This class provides the interface to interact with commands",keywords:["OBBject","Python","Development","OpenBB Platform","Results","Commands","Pandas","DataFrame","Polars","Numpy"]},sidebar:"tutorialSidebar",previous:{title:"Architectural Considerations",permalink:"/platform/development/developer-guidelines/architectural_considerations"},next:{title:"OBBject Extensions",permalink:"/platform/development/developer-guidelines/obbject_extensions"}},p={},d=[{value:"Example",id:"example",level:2},{value:"OBBject Methods",id:"obbject-methods",level:2},{value:"to_dataframe()",id:"to_dataframe",level:3},{value:"to_dict(orient)",id:"to_dictorient",level:3},{value:"Others",id:"others",level:3},{value:"to_numpy()",id:"to_numpy",level:4},{value:"to_polars()",id:"to_polars",level:4}],c={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{title:"OBBject - Developer Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"The OBBject (OpenBB Object) is at the heart of developing around the OpenBB Platform. Every command will return this class as the command output. This class contains the following attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"results",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This contains serializable data that was obtained by running the command."))),(0,o.kt)("li",{parentName:"ul"},"provider",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The name of the provider that was used to obtain the data."))),(0,o.kt)("li",{parentName:"ul"},"Warnings",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Any warnings that were generated by the command."))),(0,o.kt)("li",{parentName:"ul"},"Extra",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Additional metadata about the command run, including any arguments, the route, the timestamp, etc.")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In the python interface, the OBBject class is returned by every command. The following example shows how to access the results of a command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from openbb import obb\n\nobbject = obb.equity.price.historical("AAPL", provider="fmp")\n\ndisplay(obbject)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"OBBject\n\nid: 0655d06a-8797-7310-8000-4daaa1d47936\nresults: [{'date': datetime.datetime(2023, 11, 21, 0, 0), 'open': 191.41, 'high': 1...\nprovider: fmp\nwarnings: None\nchart: None\nextra: {'metadata': {'arguments': {'provider_choices': {'provider': 'fmp'}, 'standa...\n")),(0,o.kt)("p",null,"The output type is ",(0,o.kt)("inlineCode",{parentName:"p"},"<class 'openbb_core.app.model.obbject.OBBject'>"),"."),(0,o.kt)("p",null,"If we look at the results attribute, we see that we are returned a list of the Data models used, i.e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"obbject.results[0]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"FMPEquityHistoricalData(date=2023-11-21 00:00:00, open=191.41, high=191.5, low=189.74, close=190.375, volume=24029603, vwap=190.54, label=November 21, 23, adj_close=190.375, unadjusted_volume=24029603.0, change=-1.03, change_percent=-0.5407241, change_over_time=-0.005407241)\n")),(0,o.kt)("p",null,"In general, this will not be how you want to ingest or modify your data, so to help with this we have provided some methods."),(0,o.kt)("h2",{id:"obbject-methods"},"OBBject Methods"),(0,o.kt)("p",null,"We understand that there is no one size fits all solution for data ingestion and manipulation, so we have provided a few methods to help with this and handle the conversion from Obbject to your preferred data type. These methods are accessed by running ",(0,o.kt)("inlineCode",{parentName:"p"},"obbject.<method>"),"."),(0,o.kt)("h3",{id:"to_dataframe"},"to_dataframe()"),(0,o.kt)("p",null,"One of the most popular libraries for python data manipulation, this method will return a pandas dataframe with the results. We have designed this function to work with various data structures we have encountered. Given the time series nature of the data, we set the index to be ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," if that column appears in the models."),(0,o.kt)("p",null,"This also has the shorter alias ",(0,o.kt)("inlineCode",{parentName:"p"},"to_df()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'type(obb.equity.price.historical("AAPL", provider="fmp").to_dataframe())\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"<class 'pandas.core.frame.DataFrame'>\n")),(0,o.kt)("h3",{id:"to_dictorient"},"to_dict(orient)"),(0,o.kt)("p",null,"A very common data structure is to return the data in a dictionary. This model provides an interface to do so, with options to return the dictionary in different orientations, just as in the pandas ",(0,o.kt)("inlineCode",{parentName:"p"},"to_dict()")," method. The default method will return a dictionary that allows you to index to obtain data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'to_dict = obb.equity.price.historical("AAPL", provider="fmp").to_dict()["open"][:10]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"[150.16, 148.13, 149.45, 148.31, 145.14, 144.29, 141.4, 148.21, 145.96, 147.77]\n")),(0,o.kt)("p",null,"Orienting as records will give you a list of dictionaries, commonly used in JSON data structures:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'obb.equity.price.historical("AAPL", provider="fmp").to_dict("records")[0]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"{'open': 144.29,\n'high': 144.81,\n'low': 140.35,\n'close': 141.17,\n'volume': 83763800,\n'vwap': 142.11,\n'label': 'November 29, 22',\n'adj_close': 140.39,\n'unadjusted_volume': 83763800.0,\n'change': -3.12,\n'change_percent': -2.16,\n'change_over_time': -0.0216}\n")),(0,o.kt)("h3",{id:"others"},"Others"),(0,o.kt)("p",null,"In addition to these two highly used methods, we have also provided the following methods:"),(0,o.kt)("h4",{id:"to_numpy"},"to_numpy()"),(0,o.kt)("p",null,"Returns numpy arrays of the results. Note that this loses the column names, so you will need to index the array to obtain the data."),(0,o.kt)("h4",{id:"to_polars"},"to_polars()"),(0,o.kt)("p",null,"Growing in popularity, polars is a blazingly fast dataframe library. This method will return a polars dataframe. Note that we do not include polars in the core dependency tree, so it needs to be installed separately."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"More information can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/core/README.md"},"OpenBB Core Readme")))}u.isMDXComponent=!0}}]);