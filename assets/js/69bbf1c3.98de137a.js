"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[8655],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Monitoring your experiment",slug:"/monitor-experiment"},o=void 0,s={unversionedId:"Experiment basics/monitor-experiment",id:"Experiment basics/monitor-experiment",title:"Monitoring your experiment",description:"Navigate to the Overview page on the Pioreactor web interface. Here you can scroll for graphs for growth rate, OD, normalized OD, and temperature. These overview graphs are used to monitor collected data during the experiment runtime.",source:"@site/user-guide/02-Experiment basics/05-monitor-experiment.md",sourceDirName:"02-Experiment basics",slug:"/monitor-experiment",permalink:"/user-guide/monitor-experiment",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Monitoring your experiment",slug:"/monitor-experiment"},sidebar:"tutorialSidebar",previous:{title:"Setting up an experiment",permalink:"/user-guide/set-up-an-experiment"},next:{title:"Activities",permalink:"/user-guide/activities"}},l={},p=[{value:"Change settings",id:"change-settings",level:2},{value:"Event logs",id:"event-logs",level:2},{value:"Identifying your Pioreactors",id:"identifying-your-pioreactors",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Gradual increase in noise in OD",id:"gradual-increase-in-noise-in-od",level:3},{value:"Initial noise in OD",id:"initial-noise-in-od",level:3},{value:"Random spikes in OD",id:"random-spikes-in-od",level:3},{value:"Temperature fluctuations",id:"temperature-fluctuations",level:3},{value:"Looking for further help?",id:"looking-for-further-help",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Navigate to the ",(0,a.kt)("em",{parentName:"p"},"Overview")," page on the Pioreactor web interface. Here you can scroll for graphs for growth rate, OD, normalized OD, and temperature. These overview graphs are used to monitor collected data during the experiment runtime. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(21936).Z,width:"1897",height:"862"})),(0,a.kt)("p",null,"You would typically want the graphs to follow the examples below. While running your experiment, keep an eye out for any abnoralities. These can be indicative of hardware or software bugs undetected by the self-test. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(51565).Z,width:"1381",height:"762"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"GR can be negtive at first ","\u2014"," this is an artifact of turbidity measurements! ")),(0,a.kt)("h2",{id:"change-settings"},"Change settings"),(0,a.kt)("p",null,"If you'd like to ",(0,a.kt)("strong",{parentName:"p"},"change the settings")," of your activities after you start, navigate back to the ",(0,a.kt)("em",{parentName:"p"},"Pioreactors")," tab. Under ",(0,a.kt)("em",{parentName:"p"},"Manage")," for a single Pioreactor or ",(0,a.kt)("em",{parentName:"p"},"Manage all Pioreactors"),", click the ",(0,a.kt)("em",{parentName:"p"},"Settings")," tab. Here you can change the settings of your activities (such as labels and targets) without pausing or stopping. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(41163).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"Set specific functions for ",(0,a.kt)("strong",{parentName:"p"},"dosing and LEDs")," under the ",(0,a.kt)("em",{parentName:"p"},"Dosing")," and ",(0,a.kt)("em",{parentName:"p"},"LEDs")," tabs. These are NOT automations, but rather simple, manual commands for external pumps and LED cables.   "),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(17330).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(20109).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"event-logs"},"Event logs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Recent event logs")," are found along the right side of the main ",(0,a.kt)("em",{parentName:"p"},"Overview page"),". These logs document any errors, processes, or updates for each Pioreactor. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9424).Z,width:"1489",height:"991"})),(0,a.kt)("h2",{id:"identifying-your-pioreactors"},"Identifying your Pioreactors"),(0,a.kt)("p",null,"To locate your Pioreactor, click ",(0,a.kt)("em",{parentName:"p"},"Identify")," on the ",(0,a.kt)("em",{parentName:"p"},"Pioreactors")," tab. This will cause the Pioreactor to blink blue light. "),(0,a.kt)("p",null,"You can also find your Pioreactor name by pressing the small white button on the Pioreactor. This causes a blue tag to come up on the interface:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5237).Z,width:"1988",height:"1030"})),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Keep an eye on the optical density graph in the ",(0,a.kt)("em",{parentName:"p"},"Overview")," page. Initially, you can expect the the OD to be relatively stable. The following are some common issues: "),(0,a.kt)("h3",{id:"gradual-increase-in-noise-in-od"},"Gradual increase in noise in OD"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(27106).Z,width:"1508",height:"793"})),(0,a.kt)("p",null,"This type of noise is typically caused by bubbling in the media due to metabolism. Noise gradually gets worse as the culture grows, where more metabolism leads to more CO2 bubbles. Thus, you would notice noise build up gradually as the culture becomes larger. To reduce the noise made by bubbles, we recommend allowing more airflow by ",(0,a.kt)("strong",{parentName:"p"},"raising the tubing")," enough so they ",(0,a.kt)("strong",{parentName:"p"},"aren't submerged in your media"),"."),(0,a.kt)("h3",{id:"initial-noise-in-od"},"Initial noise in OD"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(77621).Z,width:"1202",height:"668"})),(0,a.kt)("p",null,"For variations in OD at the beginning, make sure that your ",(0,a.kt)("strong",{parentName:"p"},"stirbar is in the vial!")," This is a common mistake we experienced after several experiments. "),(0,a.kt)("h3",{id:"random-spikes-in-od"},"Random spikes in OD"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(47138).Z,width:"1920",height:"958"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Random, large spikes in OD readings")," are indicative of ",(0,a.kt)("strong",{parentName:"p"},"solid debris in your vial"),". Remove the vial and inspect the media for any debris. You may need to remake your vials and start over. Be sure to thoroughly wash and autoclave your vials and rinse any pumps (if being used). "),(0,a.kt)("p",null,"If clumps are to be expected (and unavoidable), you can ",(0,a.kt)("strong",{parentName:"p"},"increase your stirring RPM"),' if allowed in your experiment protocol. This will cause larger clumps to aggregate in the center of the vial, due to a mini "vortex" formed by stirring. '),(0,a.kt)("h3",{id:"temperature-fluctuations"},"Temperature fluctuations"),(0,a.kt)("p",null,"If your target temperature is ",(0,a.kt)("strong",{parentName:"p"},"close to room temperature"),", it can be subject to ",(0,a.kt)("strong",{parentName:"p"},"fluctuations based on changes in room temperature.")," For example, we set our target to 26 degrees C, and worked in a room with no AC: "),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(66680).Z,width:"1198",height:"614"})),(0,a.kt)("p",null,"Each Pioreactor had an increase in temperature since the target fell below ambient. Note that the leader unit Pioreactor in the cluster was more sensitive to increases in ambient temperature since it requires more processing power."),(0,a.kt)("h2",{id:"looking-for-further-help"},"Looking for further help?"),(0,a.kt)("p",null,"If none of these issues apply to your data, feel free to contact us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@pioreactor.com"},"support@pioreactor.com")," or post to our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.pioreactor.com/"},"forums")," for further assistance."))}c.isMDXComponent=!0},51565:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/all-four-graphs-1aa2025b6eac0bb8f16140448e84ba57.png"},5237:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/blue-tag-62c90041b3d68fe64eab220df552a854.png"},27106:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bubble-noise-24ab6a62a7fbb4d015381f3c8b13d8e8.png"},17330:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dosing-settings-b3a0b071763974a068c0be14b9fb9e64.png"},9424:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/example-event-logs-4ee98f7f0a4fb34a7f680421e26b28bf.png"},47138:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/floaty-in-vial-6b12caa15ff11ea8f80e82f0be7e5644.png"},77621:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/forgot-stirbar-03ee83750821a456753efa47678ff6e0.png"},20109:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/led-settings-9844accf7b23c5823c98c445ec605912.png"},21936:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/main-screenshot-0eb70a63ae1b1b037aaa726a944731b6.png"},41163:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/settings-964b0f61811377adac655d795e77d3f6.png"},66680:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/warming-room-2a055ab0234a4273bee3017b5b2d339a.png"}}]);