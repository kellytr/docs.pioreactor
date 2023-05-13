"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[4522],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:e},l),{},{components:n})):r.createElement(f,i({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u[m]="string"==typeof t?t:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45792:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Introduction to automations",slug:"/intro-to-automations"},i=void 0,u={unversionedId:"Automations/intro-to-automations",id:"Automations/intro-to-automations",title:"Introduction to automations",description:"So far, we have worked with basic activities that you can directly set as a one time thing, typically at the beginning of your experiment (starting stirring, OD readings, etc.). For more advanced experiments, we introduce automations.",source:"@site/user-guide/29-Automations/00-intro-to-automations.md",sourceDirName:"29-Automations",slug:"/intro-to-automations",permalink:"/user-guide/intro-to-automations",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction to automations",slug:"/intro-to-automations"},sidebar:"tutorialSidebar",previous:{title:"List of available plugins",permalink:"/user-guide/available-plugins"},next:{title:"Temperature automations",permalink:"/user-guide/temperature-automations"}},s={},c=[{value:"<code>Skip first run</code>?",id:"skip-first-run",level:3}],l={toc:c},m="wrapper";function p(t){let{components:e,...a}=t;return(0,o.kt)(m,(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So far, we have worked with basic activities that you can directly set as a one time thing, typically at the beginning of your experiment (starting stirring, OD readings, etc.). For more advanced experiments, we introduce automations."),(0,o.kt)("p",null,"Automations are preset functions that are ",(0,o.kt)("em",{parentName:"p"},"automated"),", or performed by the Pioreactor without the need of your intervention. This is great for when you want to change the environment of your experiment in some way, whether periodically or at a given time  \u2014 and you don't want to change your settings each time!"),(0,o.kt)("p",null,"Some examples:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every 15 minutes, you want to introduce new media and remove old media using ",(0,o.kt)("a",{parentName:"li",href:"/user-guide/dosing-automations#chemostat"},"pumps"),"."),(0,o.kt)("li",{parentName:"ul"},"When working with phototrophs (such as algae), you want to create \u201cday/night\u201d cycles by ",(0,o.kt)("a",{parentName:"li",href:"/user-guide/led-automations"},"turning on/off your LEDs"),". ")),(0,o.kt)("p",null,"Setting automations can be done so that the Pioreactor performs these tasks automatically. These automations can be found under ",(0,o.kt)("em",{parentName:"p"},"Activities"),", when you ",(0,o.kt)("em",{parentName:"p"},"Manage")," your Pioreactor. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(75295).Z,width:"2022",height:"1104"})),(0,o.kt)("h3",{id:"skip-first-run"},(0,o.kt)("inlineCode",{parentName:"h3"},"Skip first run"),"?"),(0,o.kt)("p",null,"When starting an automation, like a chemostat, it is ambiguous whether to start dosing (or checking whether to dose) ",(0,o.kt)("em",{parentName:"p"},"immediately"),", or wait ",(0,o.kt)("em",{parentName:"p"},"N")," minutes to start. Checking ",(0,o.kt)("inlineCode",{parentName:"p"},"Skip first run")," will choose the latter: wait ",(0,o.kt)("em",{parentName:"p"},"N")," minutes, and then begin."))}p.isMDXComponent=!0},75295:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/automations-3c9d54aa78ca77051fb732bca71ac645.png"}}]);