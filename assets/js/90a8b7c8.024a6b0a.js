"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[968],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(o),m=i,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return o?n.createElement(g,a(a({ref:t},p),{},{components:o})):n.createElement(g,a({ref:t},p))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},6445:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(7462),i=(o(7294),o(3905));const r={title:"Introduction to plugins",slug:"/intro-plugins"},a=void 0,l={unversionedId:"Plugins/intro-plugins",id:"Plugins/intro-plugins",title:"Introduction to plugins",description:"Pioreactor plugins are a way to distribute code to others (or yourself), and avoid having to use the command line each time you invoke your custom code - you should be able to just use the web interface.",source:"@site/developer-guide/04-Plugins/01-intro-plugins.md",sourceDirName:"04-Plugins",slug:"/intro-plugins",permalink:"/developer-guide/intro-plugins",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction to plugins",slug:"/intro-plugins"},sidebar:"tutorialSidebar",previous:{title:"Automation events",permalink:"/developer-guide/events"},next:{title:"Adding your custom automation to the web interface",permalink:"/developer-guide/adding-plugins-to-ui"}},u={},s=[{value:"Adding Python files to <code>plugins</code> folder",id:"adding-python-files-to-plugins-folder",level:3},{value:"Custom background jobs",id:"custom-background-jobs",level:4},{value:"Custom automations",id:"custom-automations",level:4},{value:"Distributing the code as a Python package",id:"distributing-the-code-as-a-python-package",level:3}],p={toc:s};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pioreactor plugins are a way to distribute code to others (or yourself), and avoid having to use the command line each time you invoke your custom code - you should be able to just use the web interface."),(0,i.kt)("p",null,"There are two ways to distribute a plugin:"),(0,i.kt)("h3",{id:"adding-python-files-to-plugins-folder"},"Adding Python files to ",(0,i.kt)("inlineCode",{parentName:"h3"},"plugins")," folder"),(0,i.kt)("p",null,"On each Pioreactor's Raspberry Pi is a folder at ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/pioreactor/.pioreactor/plugins"),". When the Pioreactor software starts, any Python files in this folder are read and loaded into memory. If you were to include an automation in here, or a background job (with the ",(0,i.kt)("inlineCode",{parentName:"p"},"click")," CLI component), they would be available globally."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Why would you want to distribute code this way? It's a great way to test or develop your code instead of committing to other distribution methods: short iterations times, tight feedback loop, and code runs in the production environment. Two downsides are that it's harder to distribute your code to the rest of the community, and that it doesn't have the same deployment pipeline (adding configs, etc.)")),(0,i.kt)("h4",{id:"custom-background-jobs"},"Custom background jobs"),(0,i.kt)("p",null,"Here's an example: place the following code into the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/pioreactor/.pioreactor/plugins/demo_job.py")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\nimport click\nfrom pioreactor.whoami import get_unit_name, get_latest_experiment_name\nfrom pioreactor.background_jobs.base import BackgroundJob\n\n__plugin_summary__ = "Just a demo job"\n__plugin_version__ = "0.0.1"\n__plugin_name__ = "Demo job"\n__plugin_author__ = "Cam Davidson-Pilon"\n__plugin_homepage__ = "https://docs.pioreactor.com"\n\n\nclass DemoJob(BackgroundJob):\n\n    def __init__(self, unit, experiment, **kwargs):\n        super().__init__(job_name="demo_job", unit=unit, experiment=experiment)\n\n    def on_ready(self):\n        self.logger.debug("Hello, world!")\n\n    def on_disconnect(self):\n        self.logger.debug("Goodbye, world!")\n\n\n@click.command(name="demo_job")\ndef click_demo_job():\n    job = DemoJob(\n        unit=get_unit_name(),\n        experiment=get_latest_experiment_name(),\n    )\n    job.block_until_disconnected()\n')),(0,i.kt)("p",null,"You should be able to execute the following from the command line now: ",(0,i.kt)("inlineCode",{parentName:"p"},"pio run demo_job"),"."),(0,i.kt)("p",null,"Further more, in your ",(0,i.kt)("a",{parentName:"p",href:"http://pioreactor.local/plugins"},"web interface under plugins"),', you should see "Demo Job" installed.'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/developer-guide/writing-background-jobs"},"A full introduction to writing jobs")," is available.")),(0,i.kt)("h4",{id:"custom-automations"},"Custom automations"),(0,i.kt)("p",null,"Here's an example of adding a custom automation: place the following code into the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/pioreactor/.pioreactor/plugins/demo_automation.py")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\nfrom pioreactor.automations.dosing.base import DosingAutomationContrib\n\n__plugin_summary__ = "A demo dosing automation"\n__plugin_version__ = "0.0.1"\n__plugin_name__ = "Demo Dosing Automation"\n__plugin_author__ = "Cam Davidson-Pilon"\n__plugin_homepage__ = "https://docs.pioreactor.com"\n\nclass DemoAutomation(DosingAutomationContrib):\n\n    automation_name = "demo"\n\n    def __init__(self, volume, **kwargs):\n        super().__init__(**kwargs)\n        self.volume = volume\n\n    def execute(self):\n        self.logger("Here I would execute...")\n\n')),(0,i.kt)("p",null,"You should be able to execute the following from the command line now: ",(0,i.kt)("inlineCode",{parentName:"p"},"pio run dosing_control --automation-name demo --volume 10"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/developer-guide/writing-automations-1"},"A full introduction to writing automations")," is available.")),(0,i.kt)("h3",{id:"distributing-the-code-as-a-python-package"},"Distributing the code as a Python package"),(0,i.kt)("p",null,"Coming soon!"))}d.isMDXComponent=!0}}]);