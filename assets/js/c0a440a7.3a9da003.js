"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[7046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9225:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Important concepts",slug:"/important-concepts"},i=void 0,s={unversionedId:"important-concepts",id:"important-concepts",title:"Important concepts",description:"An initial mental model of Pioreactor software",source:"@site/developer-guide/02-important-concepts.md",sourceDirName:".",slug:"/important-concepts",permalink:"/developer-guide/important-concepts",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Important concepts",slug:"/important-concepts"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/developer-guide/introduction"},next:{title:"Introduction to background jobs",permalink:"/developer-guide/intro-background-jobs"}},l={},c=[{value:"An initial mental model of Pioreactor software",id:"an-initial-mental-model-of-pioreactor-software",level:3},{value:"Cluster topology",id:"cluster-topology",level:3},{value:"Networking",id:"networking",level:3},{value:"MQTT",id:"mqtt",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"an-initial-mental-model-of-pioreactor-software"},"An initial mental model of Pioreactor software"),(0,n.kt)("p",null,"The Pioreactor software works as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Different jobs, like stirring, OD reading, dosing, etc. are controlled by separate Python objects. Some jobs will passively listen for events from other jobs, and change their behavior in response, for example, dosing automations listen to OD readings, and may respond by dosing (or not dosing).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"New Python classes can be created by developers to control the bioreactor behaviour. This includes custom dosing, temperature or LED programs. Furthermore, users can write new classes that integrate with external hardware (pumps, circuit boards, etc.), or external software (cloud APIs, etc.)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The main "control plane" for the Pioreactor software is the command line. The ',(0,n.kt)("inlineCode",{parentName:"p"},"pio")," command will list all the commands available. When the user starts a job from the UI, the UI backend will run ",(0,n.kt)("inlineCode",{parentName:"p"},"pio run <some activity> --arguments"),", which launches a Python snippet that will instantiate the object the controls the activity."))),(0,n.kt)("h3",{id:"cluster-topology"},"Cluster topology"),(0,n.kt)("p",null,'One of the Raspberry Pi\'s is assigned as the "leader", and this hosts most of the services: web server, MQTT broker, database, etc. It also sends commands to any "workers". Together, the leader and all the workers are called a "cluster". See more information about clusters ',(0,n.kt)("a",{parentName:"p",href:"/user-guide/create-cluster"},"here"),"."),(0,n.kt)("h3",{id:"networking"},"Networking"),(0,n.kt)("p",null,"The Raspberry Pis communicate through the local network (in more advanced cases, this network is hosted on the leader)."),(0,n.kt)("h3",{id:"mqtt"},"MQTT"),(0,n.kt)("p",null,"MQTT is message-broker system that the Pioreactor uses to communicate between Pioreactors and between processes. Think of it as an in-memory event log, and any software in the cluster can interact with it. The leader Pioreactor hosts the message-broker (using the software ",(0,n.kt)("a",{parentName:"p",href:"https://mosquitto.org/"},"Mosquitto"),"), and worker Pioreactors (which are called MQTT ",(0,n.kt)("em",{parentName:"p"},"clients"),") will read and write to it. On the leader's command line, you can view the event log with ",(0,n.kt)("inlineCode",{parentName:"p"},"pio mqtt"),"."),(0,n.kt)("p",null,"The Pioreactor UI also connects to MQTT, and uses it to push and pull live data from the activities in each Pioreactor (states of activities, settings, graphs, etc)."))}m.isMDXComponent=!0}}]);