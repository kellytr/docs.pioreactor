"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[7431],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,g=m["".concat(u,".").concat(c)]||m[c]||p[c]||a;return n?o.createElement(g,r(r({ref:t},d),{},{components:n})):o.createElement(g,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3853:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={slug:"/intro-plugins"},u="Introduction to plugins",s={unversionedId:"Plugins/Introduction to plugins",id:"Plugins/Introduction to plugins",title:"Introduction to plugins",description:"Pioreactor plugins are a way to distribute code to others (or yourself), and avoid having to use the command line each time you invoke your custom code - you should be able to just use the web interface.",source:"@site/developer-guide/04-Plugins/01-Introduction to plugins.md",sourceDirName:"04-Plugins",slug:"/intro-plugins",permalink:"/developer-guide/intro-plugins",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/intro-plugins"},sidebar:"tutorialSidebar",previous:{title:"Adding custom pumps to dosing automations",permalink:"/developer-guide/writing-pump-software"},next:{title:"Adding your custom automation to the web interface",permalink:"/developer-guide/adding-plugins-to-ui"}},d=[{value:"Adding Python files to <code>plugins</code> folder",id:"adding-python-files-to-plugins-folder",children:[{value:"Custom background jobs",id:"custom-background-jobs",children:[],level:4},{value:"Custom automations",id:"custom-automations",children:[],level:4}],level:3},{value:"Distributing the code as a Python package",id:"distributing-the-code-as-a-python-package",children:[],level:3}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-plugins"},"Introduction to plugins"),(0,a.kt)("p",null,"Pioreactor plugins are a way to distribute code to others (or yourself), and avoid having to use the command line each time you invoke your custom code - you should be able to just use the web interface."),(0,a.kt)("p",null,"There are two ways to distribute a plugin:"),(0,a.kt)("h3",{id:"adding-python-files-to-plugins-folder"},"Adding Python files to ",(0,a.kt)("inlineCode",{parentName:"h3"},"plugins")," folder"),(0,a.kt)("p",null,"On each Pioreactor's Raspberry Pi is a folder at ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor/plugins"),". When the Pioreactor software starts, any Python files in this folder are read and loaded into memory. If you were to include an automation in here, or a background job (with the ",(0,a.kt)("inlineCode",{parentName:"p"},"click")," CLI component), they would be available globally."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Why would you want to distribute code this way? It's a great way to test or develop your code instead of committing to other distribution methods: short iterations times, tight feedback loop, and code runs in the production environment. Two downsides are that it's harder to distribute your code to the rest of the community, and that it doesn't have the same deployment pipeline (adding configs, etc.)"))),(0,a.kt)("h4",{id:"custom-background-jobs"},"Custom background jobs"),(0,a.kt)("p",null,"Here's an example: place the following code into the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor/plugins/demo_job.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\nimport click\nfrom pioreactor.whoami import get_unit_name, get_latest_experiment_name\nfrom pioreactor.background_jobs.base import BackgroundJob\n\n__plugin_summary__ = "Just a demo job"\n__plugin_version__ = "0.0.1"\n__plugin_name__ = "Demo job"\n__plugin_author__ = "Cam Davidson-Pilon"\n__plugin_homepage__ = "https://docs.pioreactor.com"\n\n\nclass DemoJob(BackgroundJob):\n\n    def __init__(self, unit, experiment, **kwargs):\n        super().__init__(job_name="demo_job", unit=unit, experiment=experiment)\n\n    def on_ready(self):\n        self.logger.debug("Hello, world!")\n\n    def on_disconnect(self):\n        self.logger.debug("Goodbye, world!")\n\n\n@click.command(name="demo_job")\ndef click_demo_job():\n    job = DemoJob(\n        unit=get_unit_name(),\n        experiment=get_latest_experiment_name(),\n    )\n    job.block_until_disconnected()\n')),(0,a.kt)("p",null,"You should be able to execute the following from the command line now: ",(0,a.kt)("inlineCode",{parentName:"p"},"pio run demo_job"),"."),(0,a.kt)("p",null,"Further more, in your ",(0,a.kt)("a",{parentName:"p",href:"http://pioreactor.local/plugins"},"web interface under plugins"),', you should see "Demo Job" installed.'),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"/developer-guide/writing-background-jobs"},"A full introduction to writing jobs")," is available."))),(0,a.kt)("h4",{id:"custom-automations"},"Custom automations"),(0,a.kt)("p",null,"Here's an example of adding a custom automation: place the following code into the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor/plugins/demo_automation.py")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\nfrom pioreactor.automations.dosing.base import DosingAutomationContrib\n\n__plugin_summary__ = "A demo dosing automation"\n__plugin_version__ = "0.0.1"\n__plugin_name__ = "Demo Dosing Automation"\n__plugin_author__ = "Cam Davidson-Pilon"\n__plugin_homepage__ = "https://docs.pioreactor.com"\n\nclass DemoAutomation(DosingAutomationContrib):\n\n    automation_name = "demo"\n\n    def __init__(self, volume, **kwargs):\n        super().__init__(**kwargs)\n        self.volume = volume\n\n    def execute(self):\n        self.logger("Here I would execute...")\n\n')),(0,a.kt)("p",null,"You should be able to execute the following from the command line now: ",(0,a.kt)("inlineCode",{parentName:"p"},"pio run dosing_control --automation-name demo --volume 10"),"."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"/developer-guide/writing-automations-1"},"A full introduction to writing automations")," is available."))),(0,a.kt)("h3",{id:"distributing-the-code-as-a-python-package"},"Distributing the code as a Python package"),(0,a.kt)("p",null,"Coming soon!"))}m.isMDXComponent=!0}}]);