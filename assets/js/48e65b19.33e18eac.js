"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[5529],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(a),g=i,d=m["".concat(p,".").concat(g)]||m[g]||c[g]||n;return a?r.createElement(d,o(o({ref:t},l),{},{components:a})):r.createElement(d,o({ref:t},l))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<n;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60935:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={title:"Activities",slug:"/activities"},o=void 0,s={unversionedId:"Experiment basics/Activities",id:"Experiment basics/Activities",title:"Activities",description:"Below is a list of activities that come available with the Pioreactor. Activities can be added with plugins, as well. Read more about using plugins.",source:"@site/user-guide/02-Experiment basics/07-Activities.md",sourceDirName:"02-Experiment basics",slug:"/activities",permalink:"/user-guide/activities",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Activities",slug:"/activities"},sidebar:"tutorialSidebar",previous:{title:"Monitoring your experiment",permalink:"/user-guide/monitor-experiment"},next:{title:"Exporting data",permalink:"/user-guide/export-data"}},p={},u=[],l={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Below is a list of activities that come available with the Pioreactor. Activities can be added with plugins, as well. ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/using-community-plugins"},"Read more about using plugins"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Stirring"),": this starts the stirring in the Pioreactor. After starting stirring, you can change the stirring speed in the Settings tab. The default stirring speed can be changed in the configuration. We recommend keeping the stirring range of 150 RPM to 600 RPM. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optical density"),": this turns on the system that measures culture density. Readings will start to populate the ",(0,i.kt)("em",{parentName:"p"},"Experiment Overview")," page. It's useful to inspect the first few minutes of readings to ensure things look okay (ex: nothing appears too wild, stirring is not too fast or slow, etc.).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Growth Rate"),": this activity requires that stirring and optical density be running as well. This starts the calculation of a normalized optical density, and the implied growth rate. Both calculations will populate the ",(0,i.kt)("em",{parentName:"p"},"Experiment Overview")," page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Temperature automation"),": turning on a temperature automation will start collecting temperature readings. For example, the ",(0,i.kt)("strong",{parentName:"p"},"Stable")," automation will use a feedback loop to stabilize the Pioreactor to a set temperature. Pausing an automation will stop any active heating ",(0,i.kt)("em",{parentName:"p"},"and"),' stop temperature data collection. Stopping an automation will stop the heating and temperature collection. To change a running temperature automation, use the "Change Temperature Automation" button. Read more about specific ',(0,i.kt)("a",{parentName:"p",href:"/user-guide/temperature-automations"},"temperature automations"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dosing automation"),": turning on a dosing automation to start listening periodically for dosing triggers. A dosing automation requires at least 1 pump to be available and calibrated. ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/using-pumps"},"More about using pumps"),". Pausing a dosing automation will stop any currently, and future, dosing occurring until the automation is unpaused. Read more about the different types of ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/dosing-automations"},"dosing automations"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"LED automation"),": turning on a LED automation to start listening periodically for LED change triggers. Read more about ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/led-automations"},"LED automations"),"."))))}c.isMDXComponent=!0}}]);