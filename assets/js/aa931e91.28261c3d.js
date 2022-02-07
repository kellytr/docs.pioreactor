"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[695],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),s=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(f,i(i({ref:e},c),{},{components:n})):o.createElement(f,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4151:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],u={},l="Automations architecture",s={unversionedId:"Automations/Introduction to Automations",id:"Automations/Introduction to Automations",title:"Automations architecture",description:"Automations",source:"@site/developer_guide/03-Automations/01-Introduction to Automations.md",sourceDirName:"03-Automations",slug:"/Automations/Introduction to Automations",permalink:"/developer_guide/Automations/Introduction to Automations",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing a custom background job",permalink:"/developer_guide/Background Jobs/Writing a custom background job"},next:{title:"Writing new automations",permalink:"/developer_guide/Automations/Writing new automations"}},c=[{value:"Automations",id:"automations",children:[],level:3},{value:"Controllers",id:"controllers",children:[],level:3}],p={toc:c};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"automations-architecture"},"Automations architecture"),(0,a.kt)("h3",{id:"automations"},"Automations"),(0,a.kt)("p",null,"Automations are specialized ",(0,a.kt)("a",{parentName:"p",href:"/developer_guide/Background%20Jobs/How%20background%20jobs%20work"},"background jobs")," with a simplified interface for controlling some part of the Pioreactor. Whereas there is really only one way to control stirring in the Pioreactor (on, off, and constant), there are many ways to modify dosing to get different microbiological outcomes. Similarly with LEDs: there are many ways researchers want to control LEDs to change microorganisms. Same with temperature. For that reason, we've built an automation interface to make developing automations easier. You'll see an example of this simplified design when we build one in the next page."),(0,a.kt)("h3",{id:"controllers"},"Controllers"),(0,a.kt)("p",null,"Because we often want to change automations during an experiment, there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Controller")," object (a background job) that initializes and tears-down automations during an experiment. For each automation type, dosing, temperature, and LED, there is a corresponding controller: ",(0,a.kt)("inlineCode",{parentName:"p"},"DosingController"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TemperatureController"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"LEDController"),". Running these looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pioreactor.background_jobs.dosing_control import DosingController\n\ndc = DosingController(\n    dosing_automation="turbidostat", # name of the automation, see next section\n    duration=30,                     # how often `execute` runs, in minutes\n    target_od=2.0,                   # kwarg that the turbidostat automation needs\n    volume=0.5,                      # kwarg that the turbidostat automation needs\n    )\n')),(0,a.kt)("p",null,"The controller will start the automation (and publish information about to MQTT via ",(0,a.kt)("inlineCode",{parentName:"p"},"published_settings"),"), and if requested, will stop the automation and start a new one. Using the controllers is the preferred way to start and stop automations, rather than invoking the automations directly."),(0,a.kt)("p",null,"Since the automation in the controller is part of ",(0,a.kt)("inlineCode",{parentName:"p"},"published_settings"),", you can change the automation over MQTT by publishing to a MQTT topic. For example, if you wish to change the dosing automation from ",(0,a.kt)("inlineCode",{parentName:"p"},"turbidostat")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"chemostat"),", publish the following JSON payload to ",(0,a.kt)("inlineCode",{parentName:"p"},"pioreactor/<unit>/<experiment>/dosing_control/automation/set")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "automation_name":"chemostat",\n   "volume: 1,\n   "duration": 20\n}\n')),(0,a.kt)("p",null,"The payload is a JSON of the parameters needed for the automation, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"automation_name")," field population with the name of the automation."))}m.isMDXComponent=!0}}]);