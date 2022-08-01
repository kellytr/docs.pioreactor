"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={title:"Automations architecture",slug:"/intro-automations"},i=void 0,l={unversionedId:"Automations/intro-automations",id:"Automations/intro-automations",title:"Automations architecture",description:"Automations",source:"@site/developer-guide/04-Automations/01-intro-automations.md",sourceDirName:"04-Automations",slug:"/intro-automations",permalink:"/developer-guide/intro-automations",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Automations architecture",slug:"/intro-automations"},sidebar:"tutorialSidebar",previous:{title:"Writing a custom background job",permalink:"/developer-guide/writing-background-jobs"},next:{title:"Writing new automations",permalink:"/developer-guide/writing-automations-1"}},s={},u=[{value:"Automations",id:"automations",level:3},{value:"Controllers",id:"controllers",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"automations"},"Automations"),(0,r.kt)("p",null,"Automations are specialized ",(0,r.kt)("a",{parentName:"p",href:"/developer-guide/intro-background-jobs"},"background jobs")," with a simplified interface for controlling some part of the Pioreactor. Whereas there is really only one way to control stirring in the Pioreactor (on, off, and constant), there are many ways to modify dosing to get different microbiological outcomes. Similarly with LEDs: there are many ways researchers want to control LEDs to change microorganisms. Same with temperature. For that reason, we've built an automation interface to make developing automations easier. You'll see an example of this simplified design when we build one in the next page."),(0,r.kt)("h3",{id:"controllers"},"Controllers"),(0,r.kt)("p",null,"Because we often want to change automations during an experiment, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Controller")," object (a background job) that initializes and tears-down automations during an experiment. For each automation type, dosing, temperature, and LED, there is a corresponding controller: ",(0,r.kt)("inlineCode",{parentName:"p"},"DosingController"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TemperatureController"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"LEDController"),". Running these looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pioreactor.background_jobs.dosing_control import DosingController\n\ndc = DosingController(\n    dosing_automation="turbidostat", # name of the automation, see next section\n    duration=30,                     # how often `execute` runs, in minutes\n    target_od=2.0,                   # kwarg that the turbidostat automation needs\n    volume=0.5,                      # kwarg that the turbidostat automation needs\n    )\n')),(0,r.kt)("p",null,"The controller will start the automation (and publish information about to MQTT via ",(0,r.kt)("inlineCode",{parentName:"p"},"published_settings"),"), and if requested, will stop the automation and start a new one. Using the controllers is the preferred way to start and stop automations, rather than invoking the automations directly."),(0,r.kt)("p",null,"Since the automation in the controller is part of ",(0,r.kt)("inlineCode",{parentName:"p"},"published_settings"),", you can change the automation over MQTT by publishing to a MQTT topic. For example, if you wish to change the dosing automation from ",(0,r.kt)("inlineCode",{parentName:"p"},"turbidostat")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"chemostat"),", publish the following JSON payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"pioreactor/<unit>/<experiment>/dosing_control/automation/set")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n   "automation_name":"chemostat",\n   "args": {\n      "volume: 1,\n      "duration": 20\n   }\n}\n')))}p.isMDXComponent=!0}}]);