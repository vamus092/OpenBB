"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(35742);function o(e){let{title:t}=e;return a.createElement(i.Z,null,a.createElement("title",null,t))}},88519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),o=n(88828);const l={title:"Source",sidebar_position:3,description:"Comprehensive guide to install the OpenBB Terminal and SDK from source. The guide covers the installation process for Windows, macOS, and Linux systems and covers various software installations including Miniconda, Git, Microsoft C++ Build Tools, Rosetta2, LibOMP, VcXsrv, and GTK toolchains. Instructions for environment setup and package management through Conda and Poetry are also included, along with troubleshooting tips and community support.",keywords:["Installation","Miniconda","Git","Microsoft C++ Build Tools","Rosetta2","LibOMP","VcXsrv","GTK toolchains","Conda","Poetry","Environment setup","Python package management","Troubleshooting","Community support","Linux","MacOS","Windows"]},r=void 0,s={unversionedId:"terminal/installation/source",id:"terminal/installation/source",title:"Source",description:"Comprehensive guide to install the OpenBB Terminal and SDK from source. The guide covers the installation process for Windows, macOS, and Linux systems and covers various software installations including Miniconda, Git, Microsoft C++ Build Tools, Rosetta2, LibOMP, VcXsrv, and GTK toolchains. Instructions for environment setup and package management through Conda and Poetry are also included, along with troubleshooting tips and community support.",source:"@site/content/terminal/installation/source.md",sourceDirName:"terminal/installation",slug:"/terminal/installation/source",permalink:"/terminal/installation/source",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/installation/source.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1703772858,formattedLastUpdatedAt:"Dec 28, 2023",sidebarPosition:3,frontMatter:{title:"Source",sidebar_position:3,description:"Comprehensive guide to install the OpenBB Terminal and SDK from source. The guide covers the installation process for Windows, macOS, and Linux systems and covers various software installations including Miniconda, Git, Microsoft C++ Build Tools, Rosetta2, LibOMP, VcXsrv, and GTK toolchains. Instructions for environment setup and package management through Conda and Poetry are also included, along with troubleshooting tips and community support.",keywords:["Installation","Miniconda","Git","Microsoft C++ Build Tools","Rosetta2","LibOMP","VcXsrv","GTK toolchains","Conda","Poetry","Environment setup","Python package management","Troubleshooting","Community support","Linux","MacOS","Windows"]},sidebar:"tutorialSidebar",previous:{title:"MacOS",permalink:"/terminal/installation/macos"},next:{title:"PyPI",permalink:"/terminal/installation/pypi"}},p={},c=[{value:"Clone the Source Code",id:"clone-the-source-code",level:2},{value:"Create and Activate the Virtual Environment",id:"create-and-activate-the-virtual-environment",level:2},{value:"Install the OpenBB Terminal",id:"install-the-openbb-terminal",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{title:"Source - Installation | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The instructons on this page are for installing the OpenBB Terminal from the source code, which uses a legacy version of the Python SDK.  If you do not wish to install the OpenBB Terminal application, please refer to the installation instructions ",(0,i.kt)("a",{parentName:"p",href:"/platform/installation"},"here"))),(0,i.kt)("p",null,"This section provides steps to install the OpenBB Terminal and SDK from source. This installation type supports Windows, macOS and Linux systems. ",(0,i.kt)("strong",{parentName:"p"},"Before starting the installation process, make sure the following pieces of software are installed.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Miniconda"),"Miniconda is a Python environment and package manager. It is required for installing certain dependencies.",(0,i.kt)("p",null,"Go ",(0,i.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links"},"here")," to find the download for your operating system or use the links below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apple-Silicon Systems: ",(0,i.kt)("a",{parentName:"li",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.pkg"},"Miniconda for MacOS")),(0,i.kt)("li",{parentName:"ul"},"Intel-based Mac Systems: ",(0,i.kt)("a",{parentName:"li",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh"},"Miniconda for MacOS")),(0,i.kt)("li",{parentName:"ul"},"Linux and WSL Systems: ",(0,i.kt)("a",{parentName:"li",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"},"Miniconda for Linux")),(0,i.kt)("li",{parentName:"ul"},"Raspberry PI Systems: ",(0,i.kt)("a",{parentName:"li",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh"},"Miniconda for Raspberry PI")),(0,i.kt)("li",{parentName:"ul"},"Windows Systems: ",(0,i.kt)("a",{parentName:"li",href:"https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe"},"Miniconda for Windows"))),(0,i.kt)("p",null,"To verify if Miniconda is installed on the system, open the command line and run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"conda --version\n")),(0,i.kt)("p",null,"If Miniconda is installed, a version number will be displayed, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"conda 23.1.0\n")),(0,i.kt)("p",null,"There is a good chance the version of Conda is not current. Update it with the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"conda update -n base -c conda-forge conda\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Git"),(0,i.kt)("p",null,"Check to verify if Git is installed by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git --version\n")),(0,i.kt)("p",null,"Which will print something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git version 2.31.1\n")),(0,i.kt)("p",null,"If Git is not installed, install it now from ",(0,i.kt)("inlineCode",{parentName:"p"},"conda")," by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"conda install git\n")),(0,i.kt)("p",null,"Or follow the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"here")," to install it.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Microsoft C++ Build Tools (Windows only)"),(0,i.kt)("p",null,"Use the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},"here")," to install or update Microsoft C++ Build Tools."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/ceb57be0-6dae-42f2-aca6-bf62ce7d6135",alt:"image"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f8aef8fc-a080-4164-bd36-460714ec44f3",alt:"image"}))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Rosetta2 (Apple Silicon only)"),(0,i.kt)("p",null,"Install Rosetta from the terminal with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"softwareupdate --install-rosetta\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"LibOMP (Apple Silicon only)"),(0,i.kt)("p",null,"Apple Silicon does not ship ",(0,i.kt)("inlineCode",{parentName:"p"},"libomp")," by default. It will need to be installed manually for some features of the ML toolkit to work. The ",(0,i.kt)("inlineCode",{parentName:"p"},"libomp")," library can be installed from ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew"),"."),(0,i.kt)("p",null,"Check if Homebrew is installed by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew --version\n")),(0,i.kt)("p",null,"If Homebrew is not installed, install it by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,i.kt)("p",null,"Or follow the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"here"),"."),(0,i.kt)("p",null,"To install LibOMP, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew install libomp\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"VcXsrv (Windows Subsystem for Linux only)"),(0,i.kt)("p",null,"Since a WSL installation is headless by default (i.e., there is only access to a terminal running a Linux distribution) there are additional steps required to display visualizations. A more detailed tutorial is found, ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@shaoyenyu/make-matplotlib-works-correctly-with-x-server-in-wsl2-9d9928b4e36a"},"here"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dynamically export the DISPLAY environment variable in WSL2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# add to the end of ~/.bashrc file\nexport DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0\n# source the file\nsource ~/.bashrc\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download and install ",(0,i.kt)("a",{parentName:"li",href:"https://sourceforge.net/projects/vcxsrv/"},"VcXsrv")),(0,i.kt)("li",{parentName:"ul"},'When running the program is important to check "Disable access control"')),(0,i.kt)("p",null,"After this, ",(0,i.kt)("inlineCode",{parentName:"p"},"VcXsrv")," should be running successfully, and the machine is ready to proceed with the terminal installation."),(0,i.kt)("p",null,"Alternatives to ",(0,i.kt)("inlineCode",{parentName:"p"},"VcXsrv")," include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opticos.github.io/gwsl/"},"GWSL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://xming.en.softonic.com/"},"Xming")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wayland.freedesktop.org/docs/html/"},"Wayland")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"GTK toolchains (Linux only)"),(0,i.kt)("p",null,"GTK is a window extension that is used to display interactive charts and tables. The library responsible for interactive charts and tables (",(0,i.kt)("inlineCode",{parentName:"p"},"pywry"),") requires certain dependencies, based on the Linux distribution, to be installed first."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Debian-based / Ubuntu / Mint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install libwebkit2gtk-4.0-dev\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Arch Linux / Manjaro"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo pacman -S webkit2gtk\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Fedora"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo dnf install gtk3-devel webkit2gtk3-devel\n")))),(0,i.kt)("p",null,"Proceed to next steps once the requirements above have been met."),(0,i.kt)("h2",{id:"clone-the-source-code"},"Clone the Source Code"),(0,i.kt)("p",null,"Clone the OpenBB Terminal source code from GitHub. This will download the source code to the current working directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"git clone https://github.com/OpenBB-finance/OpenBBTerminal.git\n")),(0,i.kt)("p",null,"Enter the directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"cd OpenBBTerminal\n")),(0,i.kt)("h2",{id:"create-and-activate-the-virtual-environment"},"Create and Activate the Virtual Environment"),(0,i.kt)("p",null,"Create the environment by copying the code below into the command line and agreeing to the prompts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"conda env create -n obb --file build/conda/conda-3-9-env.yaml\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Additional ",(0,i.kt)("inlineCode",{parentName:"p"},"YAML")," files provide support for Python versions 3.8 and 3.10.  Substitute the ",(0,i.kt)("inlineCode",{parentName:"p"},"9"),", in the command above, with the desired version.")),(0,i.kt)("p",null,"After the obb environment is created, activate it by entering:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"conda activate obb\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When the new environment is activated for the first time, it is required to clean up some artifacts in order for all dependencies to work nicely."),(0,i.kt)("p",{parentName:"admonition"},"On macOS and Linux do this by running this script (copy and paste the launch code):"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"build/conda/cleanup_artifacts.sh\n")),(0,i.kt)("p",{parentName:"admonition"},"On Windows do this by running this script (copy and paste the launch code):"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"build\\conda\\cleanup_artifacts.bat\n"))),(0,i.kt)("h2",{id:"install-the-openbb-terminal"},"Install the OpenBB Terminal"),(0,i.kt)("p",null,"Make sure to have completed all previous steps. If followed, the current working directory will be the location where the OpenBB Terminal source code lives."),(0,i.kt)("p",null,"Install the remaining dependencies and the terminal through Poetry, a package manager."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"poetry install -E all\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("details",null,(0,i.kt)("summary",null,"Read about Conda, Poetry and Python package management"),(0,i.kt)("p",{parentName:"admonition"},"For the best user experience we advise using ",(0,i.kt)("inlineCode",{parentName:"p"},"conda")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"poetry")," for environment setup and dependency management. Conda ships binaries for packages like ",(0,i.kt)("inlineCode",{parentName:"p"},"numpy")," so these dependencies are not built from source locally by ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),". Poetry solves the dependency tree in a way that the dependencies of dependencies of dependencies use versions that are compatible with each other."),(0,i.kt)("p",{parentName:"admonition"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"Conda")," environments, the ",(0,i.kt)("inlineCode",{parentName:"p"},"build/conda")," folder contains multiple ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml")," configuration files to choose from."),(0,i.kt)("p",{parentName:"admonition"},"When using other Python distributions we highly recommend a virtual environment like ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualenv")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pyenv")," for installing the terminal dependency libraries."),(0,i.kt)("p",{parentName:"admonition"},'For people who prefer using "vanilla" ',(0,i.kt)("inlineCode",{parentName:"p"},"pip")," the requirements files are found in the project root:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requirements.txt")," list main dependencies"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requirements-full.txt")," list all the dependencies including Machine Learning and Portfolio Optimization libraries and dependencies for developers")),(0,i.kt)("p",{parentName:"admonition"},"They can be installed with ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install -r requirements.txt\n")),(0,i.kt)("p",{parentName:"admonition"},"The dependency tree is solved by poetry."),(0,i.kt)("p",{parentName:"admonition"},"Note: The libraries specified in the requirements files have been tested and work for the purpose of this project, however, these may be older versions. Hence, it is recommended for the user to set up a Python virtual environment prior to installing them. This keeps dependencies required by different projects in separate places."),(0,i.kt)("p",{parentName:"admonition"},"After installing the requirements, install the terminal with:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install .\n")))),(0,i.kt)("p",null,"Once this installation process is completed, start the terminal by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"python terminal.py\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," When the OpenBB Terminal is opened next, the Python environment will need to be activated again. When using a code editor, make sure that the correct environment is selected. This should be easy to figure out if there is an error stating that there are missing packages. To launch the OpenBB Terminal application in a new terminal window, first navigate into the folder where the source code was cloned, and then use the following two commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"conda activate obb\npython terminal.py\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TROUBLESHOOTING:")," Having difficulty getting through the installation, or encountering errors? Reach out to our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/Up2QGbMKHY"},"Discord")," community for help."))}u.isMDXComponent=!0}}]);