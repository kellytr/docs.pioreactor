"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[3543],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"Writing scripts",slug:"/writing-scripts"},a=void 0,p={unversionedId:"Scripts/writing-scripts",id:"Scripts/writing-scripts",title:"Writing scripts",description:"Since the behaviour of the Pioreactor is controlled by Python objects, you can write scripts that use those objects. Here's a simple example of starting the stirring in a script by creating the Stirrer object:",source:"@site/developer-guide/05-Scripts/01-writing-scripts.md",sourceDirName:"05-Scripts",slug:"/writing-scripts",permalink:"/developer-guide/writing-scripts",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Writing scripts",slug:"/writing-scripts"},sidebar:"tutorialSidebar",previous:{title:"Automation events",permalink:"/developer-guide/events"},next:{title:"Introduction to plugins",permalink:"/developer-guide/intro-plugins"}},s={},c=[{value:"Automations",id:"automations",level:4},{value:"Running your script",id:"running-your-script",level:3},{value:"Useful utility objects",id:"useful-utility-objects",level:3}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since the behaviour of the Pioreactor is controlled by Python objects, you can write scripts that use those objects. Here's a simple example of starting the stirring in a script by creating the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stirrer")," object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from pioreactor.background_jobs.stirring import Stirrer, RpmFromFrequency\nfrom pioreactor.whoami import get_unit_name\nfrom pioreactor.whoami import get_latest_experiment_name\n\nunit = get_unit_name()\nexperiment = get_latest_experiment_name()\n\nst = Stirrer(\n    target_rpm=300,\n    unit=unit,\n    experiment=experiment,\n    rpm_calculator=RpmFromFrequency()\n)\n\nst.block_until_disconnected() # pauses the execution\n\n")),(0,i.kt)("p",null,"Save this code to a local file on your Pioreactor's Raspberry Pi, called ",(0,i.kt)("inlineCode",{parentName:"p"},"stirring_script.py"),". Then, running ",(0,i.kt)("inlineCode",{parentName:"p"},"python stirring_scripy.py"),", you should see that stirring on the Pioreactor starts. With the script running, you should also updates on the Pioreactor UI (ex: see ",(0,i.kt)("a",{parentName:"p",href:"http://pioreactor.local/pioreactors"},"pioreactor.local/pioreactors")," page). Typing ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl-c")," will exit the script."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"What is ",(0,i.kt)("inlineCode",{parentName:"p"},"get_unit_name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get_latest_experiment_name"),"? These are helper functions that get the current hostname of the Pioreactor, and the current experiment name, respectively. Using the current experiment name will ensure that your data shows up in the UI, and is correctly stored in the database.")),(0,i.kt)("h4",{id:"automations"},"Automations"),(0,i.kt)("p",null,"Using automations requires you to invoke them with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Controller"),". For example, below we start a chemostat with some specific parameters, and set the target temperature to 30C."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pioreactor.background_jobs.dosing_control import DosingController\nfrom pioreactor.background_jobs.temperature_control import TemperatureController\nfrom pioreactor.whoami import get_latest_experiment_name\n\nunit = get_unit_name()\nexperiment = get_latest_experiment_name()\n\ndc = DosingController(\n    "chemostat", # automation name\n    duration=1, # every minute,\n    volume=1, # dose 1mL\n    unit=unit,\n    experiment=experiment,\n)\n\ntc = TemperatureController(\n    "thermostat",\n    target_temperature=30,\n    unit=unit, experiment=experiment\n)\n\ndc.block_until_disconnected()\n')),(0,i.kt)("h3",{id:"running-your-script"},"Running your script"),(0,i.kt)("p",null,"On the command line, you can run your script with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python your_script.py\n")),(0,i.kt)("p",null,"If you want to run the script in the background (so you can close terminal and the job continues in the background), use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\npython your_script.py >/dev/null 2>&1 & disown\n\n")),(0,i.kt)("h3",{id:"useful-utility-objects"},"Useful utility objects"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Pioreactor/pioreactor/blob/60875ebe5a35d7ed5c930d46ed7c755eadcb4b74/pioreactor/utils/timing.py#L40"},"RepeatedTimer"),": this class allows you to scheduale a function to run every N seconds in a non-blocking manner.")))}u.isMDXComponent=!0}}]);