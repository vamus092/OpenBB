"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(35742);function r(e){let{title:t}=e;return a.createElement(i.Z,null,a.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(15569);function r(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[r,o]=(0,a.useState)(!0);return a.createElement("div",{style:{textAlign:"center"}},a.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},a.createElement("p",null,n),a.createElement("div",{style:{transform:"scale(0.7)"}},a.createElement(i.Toggle,{isOn:r,handleChange:()=>o(!r)}))),r&&a.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},a.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},64109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(88828),o=n(20630);const l={title:"Routines for Power Users",sidebar_position:5,description:"This documentation guides on running automated workflows in OpenBB by introducing variables and arguments for routines. Explains about input variables, relative time keyword variables, internal script variables and creating loops for batch execution.",keywords:["automated workflows","routines","arguments","variables","relative time keywords","internal script variables","loops","batch execution","OpenBBTutorial","Technical Analysis","Stock Tickers","Running Scripts","Executing Commands"]},s=void 0,p={unversionedId:"terminal/usage/routines/routines-for-power-users",id:"terminal/usage/routines/routines-for-power-users",title:"Routines for Power Users",description:"This documentation guides on running automated workflows in OpenBB by introducing variables and arguments for routines. Explains about input variables, relative time keyword variables, internal script variables and creating loops for batch execution.",source:"@site/content/terminal/usage/routines/routines-for-power-users.md",sourceDirName:"terminal/usage/routines",slug:"/terminal/usage/routines/routines-for-power-users",permalink:"/terminal/usage/routines/routines-for-power-users",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/routines/routines-for-power-users.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705579840,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:5,frontMatter:{title:"Routines for Power Users",sidebar_position:5,description:"This documentation guides on running automated workflows in OpenBB by introducing variables and arguments for routines. Explains about input variables, relative time keyword variables, internal script variables and creating loops for batch execution.",keywords:["automated workflows","routines","arguments","variables","relative time keywords","internal script variables","loops","batch execution","OpenBBTutorial","Technical Analysis","Stock Tickers","Running Scripts","Executing Commands"]},sidebar:"tutorialSidebar",previous:{title:"Routine Macro Recorder",permalink:"/terminal/usage/routines/routine-macro-recorder"},next:{title:"Community Routines",permalink:"/terminal/usage/routines/community-routines"}},u={},d=[{value:"Input Variables",id:"input-variables",level:2},{value:"Example",id:"example",level:3},{value:"Set Variables",id:"set-variables",level:2},{value:"Variables Example",id:"variables-example",level:3},{value:"Relative Time Keyword Variables",id:"relative-time-keyword-variables",level:2},{value:"Relative Time Example",id:"relative-time-example",level:3},{value:"Foreach Loop",id:"foreach-loop",level:2},{value:"Loop Examples",id:"loop-examples",level:3}],c={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{title:"Routines for Power Users - Routines - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,i.kt)(o.Z,{youtubeLink:"https://www.youtube.com/embed/zhbX5tTmyPw?si=5XzbbhgiCFsTmbDo",videoLegend:"Short video on what power users can do with routines",mdxType:"TutorialVideo"}),(0,i.kt)("h2",{id:"input-variables"},"Input Variables"),(0,i.kt)("p",null,"When utilizing basic routines capabilities, users had to create separate routines for each specific ticker, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"my_due_diligence_AAPL.openbb")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"my_due_diligence_TSLA.openbb"),". This approach was suboptimal, considering that we had control over reading these scripts and they were meant to be used within our ecosystem."),(0,i.kt)("p",null,"To address this limitation, we introduced the concept of arguments, inspired by the Perl language. These arguments are variables referenced within the ",(0,i.kt)("inlineCode",{parentName:"p"},".openbb")," script as ",(0,i.kt)("inlineCode",{parentName:"p"},"$ARGV")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"$ARGV[0]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$ARGV[1]"),", and so on. They are provided in the terminal when running ",(0,i.kt)("inlineCode",{parentName:"p"},"exe")," by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"--input")," flag, followed by the variables separated by commas."),(0,i.kt)("p",null,"For instance, if a routine file called ",(0,i.kt)("inlineCode",{parentName:"p"},"script_with_input.openbb")," had the following format:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/5b0f558e-ace0-423d-a3db-b6369755cffb",alt:"image"})),(0,i.kt)("p",null,"And we run it in the terminal with ",(0,i.kt)("inlineCode",{parentName:"p"},"exe \u2014file script_with_input.openbb \u2014input MSFT"),", what would be run would be ",(0,i.kt)("inlineCode",{parentName:"p"},"stocks/load MSFT --start 2015-01-01/ta/ema -l 20,50,100,200")," and so you could use the same routine for multiple tickers - ",(0,i.kt)("strong",{parentName:"p"},"making it a more powerful automated workflow"),"."),(0,i.kt)("p",null,"For instance, the example below shows how you can run the same script for MSFT but also TSLA ticker."),(0,i.kt)("p",null,"And we run it in the terminal with exe \u2014file script_with_input.openbb \u2014input MSFT, what would be run would be stocks/load MSFT --start 2015-01-01/ta/ema -l 20,50,100,200 and so you could use the same routine for multiple tickers - making it a more powerful automated workflow."),(0,i.kt)("p",null,"For instance, the example below shows how you can run the same script for ",(0,i.kt)("inlineCode",{parentName:"p"},"MSFT")," but also ",(0,i.kt)("inlineCode",{parentName:"p"},"TSLA")," ticker."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/8a744571-59b9-4293-bdd7-5dd6e2c8eef3",alt:"image"})),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Let's look into the following routine (the file can be downloaded ",(0,i.kt)("a",{parentName:"p",href:"https://www.dropbox.com/s/usooz6y29r1xldb/routines_template_with_inputs.openbb?dl=1"},"here"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# This script requires you to use arguments. This can be done with the following:\n# exe --file routines_template_with_inputs.openbb -i TSLA,AAPL,MSFT\n\n# Go to the stocks menu\nstocks\n\n# Load a ticker, given the argument used. E.g. -i TSLA\nload $ARGV[0]\n\n# Enter the Technical Analysis (ta) menu\nta\n\n# Show the fibonacci retracement levels\nfib\n\n# Enter the comparison analysis (ca) menu\n../ca\n\n# Set two extra tickers based on the arguments used. E.g. -i TSLA,AAPL,MSFT\nadd $ARGV[1],$ARGV[2]\n\n# Plot the historical prices\nhistorical\n\n# Return to home\nhome\n")),(0,i.kt)("p",null,"This script includes ",(0,i.kt)("inlineCode",{parentName:"p"},"$ARGV[0]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$ARGV[1]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"$ARGV[2]"),". This means that the script requires you to submit three arguments. In this case, they refer to ",(0,i.kt)("a",{href:"https://www.investopedia.com/ask/answers/12/what-is-a-stock-ticker.asp",target:"_blank",rel:"noreferrer noopener"},"stock tickers"),". Therefore, like the script also says, you can include these arguments with ",(0,i.kt)("inlineCode",{parentName:"p"},"-i")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--input")," followed by three tickers (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"/exe routines_template_with_inputs.openbb -i TSLA,AAPL,MSFT"),"). Resulting in the following,"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/223207706-42995834-577f-4747-8185-42a016f441d9.png",alt:"OpenBB Script with Input"})),(0,i.kt)("p",null,"Note: Make sure you saved this script in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/OpenBBUserData/routines/")," folder else you are not able to execute it."),(0,i.kt)("h2",{id:"set-variables"},"Set Variables"),(0,i.kt)("p",null,"In addition to enabling users to run scripts with external variables using the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"ARGV"),", we also support the use of internal variables within the script. These variables are defined by starting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," character."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/c0cc6e1e-b87c-46f4-8c94-539408745433",alt:"image"})),(0,i.kt)("p",null,"Which has the following output:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/77060dfc-216e-490f-af72-3d4af5642e0f",alt:"image"})),(0,i.kt)("p",null,"Note that the variable can have a single element or can be constituted by an array where elements are separated using a comma \u201c,\u201d."),(0,i.kt)("h3",{id:"variables-example"},"Variables Example"),(0,i.kt)("p",null,"Example of the script below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Set date variable\n$DATE = 2022-01-01\n\n# Set list of tickers to iterate\n$TICKERS = AAPL,MSFT\n\n# dive into stocks\nstocks\n\n# candle chart for first ticker\nload $TICKERS[0] --start $DATE/candle\n\n# candle chart for second ticker\nload $TICKERS[1] --start $DATE[0]/candle\n")),(0,i.kt)("p",null,"Note that a variable can be declared as a single argument ",(0,i.kt)("inlineCode",{parentName:"p"},"$DATE = 2022-01-01")," but it can also be declared as a list ",(0,i.kt)("inlineCode",{parentName:"p"},"$TICKERS = AAPL,MSFT"),"."),(0,i.kt)("p",null,"When declared as a list, the user needs to use the indexing to access the element of interest, i.e. if interested in ",(0,i.kt)("inlineCode",{parentName:"p"},"MSFT")," then ",(0,i.kt)("inlineCode",{parentName:"p"},"$TICKERS[1]")," should be used."),(0,i.kt)("p",null,"When a single element is defined, then the user can access it through the variable name or indexing the first position equally, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"$DATE")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"$DATE[0]"),"."),(0,i.kt)("p",null,"Note that slicing is also possible, and the same convention as python is utilized. If the user has defined inputs ",(0,i.kt)("inlineCode",{parentName:"p"},"AAPL,MSFT,TSLA,NVDA,GOOG")," then by selecting ",(0,i.kt)("inlineCode",{parentName:"p"},"$ARGV[1:3]")," the tickers ",(0,i.kt)("inlineCode",{parentName:"p"},"MSFT,TSLA")," are selected."),(0,i.kt)("h2",{id:"relative-time-keyword-variables"},"Relative Time Keyword Variables"),(0,i.kt)("p",null,"In addition to the powerful variables discussed earlier, OpenBB also supports the usage of relative keywords, particularly for working with dates. These relative keywords provide flexibility when specifying dates about the current day. There are four types of relative keywords:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"AGO"),": Denotes a time in the past relative to the present day. Valid examples include ",(0,i.kt)("inlineCode",{parentName:"p"},"$365DAYSAGO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$12MONTHSAGO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$1YEARSAGO"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"FROMNOW"),": Denotes a time in the future relative to the present day. Valid examples include ",(0,i.kt)("inlineCode",{parentName:"p"},"$365DAYSFROMNOW"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$12MONTHSFROMNOW"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$1YEARSFROMNOW"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"LAST"),": Refers to the last specific day of the week or month that has occurred. Valid examples include ",(0,i.kt)("inlineCode",{parentName:"p"},"$LASTMONDAY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$LASTJUNE"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"NEXT"),": Refers to the next specific day of the week or month that will occur. Valid examples include ",(0,i.kt)("inlineCode",{parentName:"p"},"$NEXTFRIDAY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$NEXTNOVEMBER"),"."))),(0,i.kt)("p",null,"The result will be a date with the conventional date associated with OpenBB, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),"."),(0,i.kt)("h3",{id:"relative-time-example"},"Relative Time Example"),(0,i.kt)("p",null,"By picking on the previous example, we can add to the load ",(0,i.kt)("inlineCode",{parentName:"p"},"--start")," argument the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"$18MONTHSAGO"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/e0e9b4a2-3d8d-4f72-8029-55f009dc15ee",alt:"image"})),(0,i.kt)("p",null,"This will result in the following output:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/78d6235e-15a1-47cb-a99c-19694b6af0d9",alt:"image"})),(0,i.kt)("h2",{id:"foreach-loop"},"Foreach Loop"),(0,i.kt)("p",null,"Finally, what scripting language would this be if there were no loops? For this, we were inspired by MatLab. The loops in OpenBB utilize the foreach and end convention, allowing for iteration through a list of variables or arguments to execute a sequence of commands."),(0,i.kt)("p",null,"To create a foreach loop, you need to follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the loop header using the syntax: ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach $$VAR in X")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," represents either an argument or a list of variables. It's worth noting that you can choose alternative names for the ",(0,i.kt)("inlineCode",{parentName:"p"},"$$VAR")," variable, as long as the ",(0,i.kt)("inlineCode",{parentName:"p"},"$$")," convention is maintained.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Insert the commands you wish to repeat on the subsequent lines.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Conclude the loop with the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"end"),"."))),(0,i.kt)("h3",{id:"loop-examples"},"Loop Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Iterates through ARGV elements from position 1 onwards\nforeach $$VAR in $ARGV[1:]\n    load $$VAR --start $DATES[0] --end $DATES[1]/dps/psi/..\nend\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Loops through all $ARGV variables\nFOREACH $$SOMETHING in $ARGV\n    load $$SOMETHING --start $DATE[0]/ins/stats/..\n end\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Iterates through ARGV elements in position 1,2\nforeach $$VAR in $ARGV[1:3]\n    load $$VAR --start 2022-01-01\n    ba\n    regions\n    ..\nEND\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Loops through PLTR and BB\nforeach $$X in PLTR,BB\n    load $$X --start $LASTJANUARY\n    candle\nEND\n")))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var a,i=(a=n(67294))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return i.createElement("label",{"data-testid":"Toggle-label",className:"switch"},i.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),i.createElement("span",{className:"slider round"}))}}}]);