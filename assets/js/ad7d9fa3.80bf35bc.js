"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17781],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(35742);function o(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},58072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(88828);const i={title:"Architectural Considerations",sidebar_position:6,description:"This guide provides insights into the architectural considerations of the OpenBB Platform. It covers the key classes, import statements, and the TET pattern used in building the Fetcher classes.",keywords:["OpenBB Platform Architecture","Key Classes","Import Statements","TET Pattern","Fetcher Classes"]},s=void 0,l={unversionedId:"platform/development/developer-guidelines/architectural_considerations",id:"platform/development/developer-guidelines/architectural_considerations",title:"Architectural Considerations",description:"This guide provides insights into the architectural considerations of the OpenBB Platform. It covers the key classes, import statements, and the TET pattern used in building the Fetcher classes.",source:"@site/content/platform/development/developer-guidelines/architectural_considerations.md",sourceDirName:"platform/development/developer-guidelines",slug:"/platform/development/developer-guidelines/architectural_considerations",permalink:"/platform/development/developer-guidelines/architectural_considerations",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/developer-guidelines/architectural_considerations.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1700864596,formattedLastUpdatedAt:"Nov 24, 2023",sidebarPosition:6,frontMatter:{title:"Architectural Considerations",sidebar_position:6,description:"This guide provides insights into the architectural considerations of the OpenBB Platform. It covers the key classes, import statements, and the TET pattern used in building the Fetcher classes.",keywords:["OpenBB Platform Architecture","Key Classes","Import Statements","TET Pattern","Fetcher Classes"]},sidebar:"tutorialSidebar",previous:{title:"Add Custom Data Sources",permalink:"/platform/development/developer-guidelines/add_custom_data_sources"},next:{title:"Introduction",permalink:"/platform/development/contributor-guidelines/"}},p={},c=[{value:"Important classes",id:"important-classes",level:2},{value:"Import statements",id:"import-statements",level:2},{value:"The TET pattern",id:"the-tet-pattern",level:2},{value:"Data processing commands",id:"data-processing-commands",level:2},{value:"Python Interface",id:"python-interface",level:2},{value:"API Interface",id:"api-interface",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Architectural Considerations - Developer Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("h2",{id:"important-classes"},"Important classes"),(0,r.kt)("h2",{id:"import-statements"},"Import statements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n# The `Data` class\nfrom openbb_core.provider.abstract.data import Data\n\n# The `QueryParams` class\nfrom openbb_core.provider.abstract.query_params import QueryParams\n\n# The `Fetcher` class\nfrom openbb_core.provider.abstract.fetcher import Fetcher\n\n# The `OBBject` class\nfrom openbb_core.app.model.obbject import OBBject\n\n# The `Router` class\nfrom openbb_core.app.router import Router\n\n")),(0,r.kt)("h2",{id:"the-tet-pattern"},"The TET pattern"),(0,r.kt)("p",null,"The TET pattern is a pattern that we use to build the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," classes. It stands for ",(0,r.kt)("strong",{parentName:"p"},"Transform, Extract, Transform"),".\nAs the OpenBB Platform has its own standardization framework and the data fetcher are a very important part of it, we need to ensure that the data is transformed and extracted in a consistent way, to help us do that, we came up with the ",(0,r.kt)("strong",{parentName:"p"},"TET")," pattern, which helps us build and ship faster as we have a clear structure on how to build the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetcher")," classes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Transform")," query"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"transform_query(params: Dict[str, Any])\n")),(0,r.kt)("p",{parentName:"li"},"Transforms the query parameters. Given a ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," dictionary this method should return the transformed query parameters as a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/core/provider/abstract/query_params.py"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryParams"))," child so that we can leverage the pydantic model schemas and validation into the next step. This might also be the place do perform some transformations on any given parameter, i.e., if you want to transform an empty date into a ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime.now().date()"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Extract")," data"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"extract_data(query: ExampleQueryParams,credentials: Optional[Dict[str, str]],**kwargs: Any,) -> Dict\n")),(0,r.kt)("p",{parentName:"li"},"Makes the request to the API endpoint and returns the raw data. Given the transformed query parameters, the credentials and any other extra arguments, this method should return the raw data as a dictionary.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Transform")," data"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"transform_data(query: ExampleQueryParams, data: Dict, **kwargs: Any) -> List[ExampleHistoricalData]\n")),(0,r.kt)("p",{parentName:"li"},"Transforms the raw data into the defined data model. Given the transformed query parameters (might be useful for some filtering), the raw data and any other extra arguments, this method should return the transformed data as a list of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/core/provider/abstract/data.py"},(0,r.kt)("inlineCode",{parentName:"a"},"Data"))," children."))),(0,r.kt)("h2",{id:"data-processing-commands"},"Data processing commands"),(0,r.kt)("p",null,"The data processing commands are commands that are used to process the data that may or may not come from the OpenBB Platform.\nIn order to create a data processing framework general enough to be used by any extension, we've created a special abstract class called ",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),"](",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/core/provider/abstract/data.py"},"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/core/provider/abstract/data.py"),") which ",(0,r.kt)("strong",{parentName:"p"},"all")," standardized (and consequently its child classes) will inherit from."),(0,r.kt)("p",null,"Why is this important?\nSo that we can ensure that all ",(0,r.kt)("inlineCode",{parentName:"p"},"OBBject.results")," will share a common ground on which we can apply out-of-the-box data processing commands, such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"ta"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"qa")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"econometrics")," menus."),(0,r.kt)("p",null,"But what's really the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," class?\nIt's a pydantic model that inherits from the ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseModel")," and can contain any given number of extra fields. In practice, it looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n>>> res = obb.equity.price.historical("AAPL")\n>>> res.results[0]\n\nAVEquityHistoricalData(date=2023-11-03 00:00:00, open=174.24, high=176.82, low=173.35, close=176.65, volume=79829246.0, vwap=None, adj_close=None, dividend_amount=None, split_coefficient=None)\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AVEquityHistoricalData")," class, is a child class of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," class.")),(0,r.kt)("p",null,"Note how we've indexed to get only the first element of the ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," list (which represents a single row, if we want to think about it as a tabular output). This simply means that we are getting a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"AVEquityHistoricalData")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"obb.equity.price.historical")," command. Or, we can also say that that's equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"List[Data]"),"!"),(0,r.kt)("p",null,"This is very powerful, as we can now apply any data processing command to the ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," list, without worrying about the underlying data structure.\nThat's why, on data processing commands (such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"ta")," menu) we will find on its function signature the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\ndef ema(\n        self,\n        data: Union[List[Data], pandas.DataFrame],\n        target: str = "close",\n        index: str = "date",\n        length: int = 50,\n        offset: int = 0,\n        chart: bool = False,\n    ) -> OBBject[List[Data]]:\n\n    ...\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," can actually be a different type, but we'll focus on the ",(0,r.kt)("inlineCode",{parentName:"p"},"List[Data]")," case for now.")),(0,r.kt)("p",null,"Does that mean that I can only use the data processing commands if I instantiate a class that inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),"?\nNot at all! Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n>>> from openbb_core.provider.abstract.data import Data\n>>> my_data_item_1 = {"open": 1, "high": 2, "low": 3, "close": 4, "volume": 5, "date": "2020-01-01"}\n>>> my_data_item_1_as_data = Data.model_validate(my_data_item_1)\n>>> my_data_item_1_as_data\n\nData(open=1, high=2, low=3, close=4, volume=5, date=2020-01-01)\n\n')),(0,r.kt)("p",null,"This means that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," class is cleaver enough to understand that you are passing a dictionary and it will try to validate it for you.\nIn other words, if you're using data that doesn't come from the OpenBBPlatform, you only need to ensure it's parsable by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," class and you'll be able to use the data processing commands.\nIn other words, imagine you have a dataframe that you want to use with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ta")," menu. You can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n>>> res = obb.equity.price.historical(\"AAPL\")\n>>> my_df = res.to_dataframe() # yes, you can convert your OBBject.results into a dataframe out-of-the-box!\n>>> my_records = df.to_dict(orient=\"records\")\n\n>>> obb.ta.ema(data=my_record)\n\nOBBject\n\nresults: [{'close': 77.62, 'close_EMA_50': None}, {'close': 80.25, 'close_EMA_50': ... # this is a `List[Data]` yet again\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that that for this example we've used the ",(0,r.kt)("inlineCode",{parentName:"p"},"OBBject.to_dataframe()")," method to have an example dataframe, but it could be any other dataframe that you have.")),(0,r.kt)("h2",{id:"python-interface"},"Python Interface"),(0,r.kt)("p",null,"When using the OpenBB Platform on a Python Interface, docstrings and type hints are your best friends as it provides plenty of context on how to use the commands.\nLooking at an example on the ",(0,r.kt)("inlineCode",{parentName:"p"},"ta")," menu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\ndef ema(\n        self,\n        data: Union[List[Data], pandas.DataFrame],\n        target: str = "close",\n        index: str = "date",\n        length: int = 50,\n        offset: int = 0,\n        chart: bool = False,\n    ) -> OBBject[List[Data]]:\n\n    ...\n\n')),(0,r.kt)("p",null,"We can easily deduct that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ema")," command accept data in the formats of ",(0,r.kt)("inlineCode",{parentName:"p"},"List[Data]")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas.DataFrame"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that other types might be added in the future.")),(0,r.kt)("h2",{id:"api-interface"},"API Interface"),(0,r.kt)("p",null,"When using the OpenBB Platform on a API Interface, the types are a bit more limited than on the Python one, as, for example, we can't use ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas.DataFrame")," as a type. However the same principles apply for what ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," means, i.e., any given data processing command, which are characterized as POST endpoints on the API, will accept data as a list of records on the ",(0,r.kt)("strong",{parentName:"p"},"request body"),", i.e.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n[\n    {\n        "open": 80,\n        "high": 80.69,\n        "low": 77.37,\n        "close": 77.62,\n        "volume": 2487300\n    }\n    ...\n]\n\n')))}h.isMDXComponent=!0}}]);