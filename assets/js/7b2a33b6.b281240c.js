"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),g=i,d=m["".concat(u,".").concat(g)]||m[g]||c[g]||n;return r?a.createElement(d,o(o({ref:t},l),{},{components:r})):a.createElement(d,o({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(87462),i=(r(67294),r(3905));const n={title:"Activities",slug:"/activities"},o=void 0,s={unversionedId:"Experiment basics/Activities",id:"Experiment basics/Activities",title:"Activities",description:"Below is a list of activities that come available with the Pioreactor. Additionally, you can add activities using plugins. Read more about using plugins.",source:"@site/user-guide/02-Experiment basics/05-Activities.md",sourceDirName:"02-Experiment basics",slug:"/activities",permalink:"/user-guide/activities",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Activities",slug:"/activities"},sidebar:"tutorialSidebar",previous:{title:"Setting up an experiment",permalink:"/user-guide/set-up-an-experiment"},next:{title:"Monitoring your experiment",permalink:"/user-guide/monitor-experiment"}},u={},p=[],l={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Below is a list of activities that come available with the Pioreactor. Additionally, you can add activities using plugins. ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/using-community-plugins"},"Read more about using plugins"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Stirring"),": this starts the stirring in the Pioreactor. After starting stirring, you can change the stirring speed in the Settings tab. You can modify the default stirring speed in the configuration settings. We recommend keeping the stirring range of 150 RPM to 600 RPM.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optical density"),": this turns on the system that measures culture density. Readings will start to populate the ",(0,i.kt)("em",{parentName:"p"},"Experiment Overview")," page. It's useful to inspect the first few minutes of readings to ensure the readings are as expected (e.g., the readings aren't erratic, and the stirring speed is appropriate, etc.).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Growth Rate"),": this activity requires that stirring and optical density be running as well. This starts the calculation of a normalized optical density, and the implied growth rate. Both calculations will populate the ",(0,i.kt)("em",{parentName:"p"},"Experiment Overview")," page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Temperature automation"),": turning on a temperature automation will start collecting temperature readings. For example, the ",(0,i.kt)("strong",{parentName:"p"},"Thermostat"),' automation will use a feedback loop to stabilize the Pioreactor to a set temperature. Pausing an automation will cease both any active heating and temperature data collection. Stopping an automation will stop the heating and temperature collection. To change a running temperature automation, use the "Change Temperature Automation" button. Read more about specific ',(0,i.kt)("a",{parentName:"p",href:"/user-guide/temperature-automations"},"temperature automations"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dosing automation"),": turning on a dosing automation to start listening periodically for dosing triggers. A dosing automation requires at least 1 pump to be available and calibrated. ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/using-pumps"},"More about using pumps"),". Pausing a dosing automation will stop any currently, and future, dosing occurring until the automation is unpaused. Read more about the different types of ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/dosing-automations"},"dosing automations"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"LED automation"),": turning on a LED automation to start listening periodically for LED change triggers. Read more about ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/led-automations"},"LED automations"),"."))))}c.isMDXComponent=!0}}]);