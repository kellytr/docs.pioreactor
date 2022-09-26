"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[1179],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return a?o.createElement(m,i(i({ref:t},h),{},{components:a})):o.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3901:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(67294),n=a(93743);const r="tableOfContentsInline_prmo";function i(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:i}=e;return o.createElement("div",{className:r},o.createElement(n.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},93743:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(87462),n=a(67294),r=a(86668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const o=a.slice(2,e.level);e.parentIndex=Math.max(...o),a[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:a,...n}=e;a>=0?t[a].children.push(n):o.push(n)})),o}function s(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:o});return function(e){return e.level>=a&&e.level<=o}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function d(e,t){var a;let{anchorTopOffset:o}=t;const n=e.find((e=>l(e).top>=o));if(n){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(n))?n:null!=(r=e[e.indexOf(n)-1])?r:null}return null!=(a=e[e.length-1])?a:null}function h(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,n.useRef)(void 0),a=h();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:n,minHeadingLevel:r,maxHeadingLevel:i}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const o=[];for(let n=t;n<=a;n+=1)o.push("h"+n+".anchor");return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),l=d(s,{anchorTopOffset:a.current}),h=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(n),e.classList.add(n),t.current=e):e.classList.remove(n)}(e,e===h)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:o,isChild:r}=e;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=o?o:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:o}))))):null}const p=n.memo(u);function m(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:h,maxHeadingLevel:u,...m}=e;const g=(0,r.L)(),f=null!=h?h:g.tableOfContents.minHeadingLevel,y=null!=u?u:g.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:o}=e;return(0,n.useMemo)((()=>s({toc:i(t),minHeadingLevel:a,maxHeadingLevel:o})),[t,a,o])}({toc:t,minHeadingLevel:f,maxHeadingLevel:y});return c((0,n.useMemo)((()=>{if(l&&d)return{linkClassName:l,linkActiveClassName:d,minHeadingLevel:f,maxHeadingLevel:y}}),[l,d,f,y])),n.createElement(p,(0,o.Z)({toc:b,className:a,linkClassName:l},m))}},30544:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var o=a(87462),n=(a(67294),a(3905)),r=a(3901);const i={title:"Common questions",slug:"/common-questions"},s=void 0,l={unversionedId:"common-questions",id:"common-questions",title:"Common questions",description:"Pioreactor operation",source:"@site/user-guide/99-common-questions.mdx",sourceDirName:".",slug:"/common-questions",permalink:"/user-guide/common-questions",draft:!1,tags:[],version:"current",sidebarPosition:99,frontMatter:{title:"Common questions",slug:"/common-questions"},sidebar:"tutorialSidebar",previous:{title:"Writing Pioreactor scripts with Python",permalink:"/user-guide/intro-python-scripting"}},d={},h=[{value:"Pioreactor operation",id:"pioreactor-operation",level:2},{value:"Why does the onboard blue LED keep flashing?",id:"why-does-the-onboard-blue-led-keep-flashing",level:4},{value:"What does the onboard button do?",id:"what-does-the-onboard-button-do",level:4},{value:"Optical density and LEDs",id:"optical-density-and-leds",level:2},{value:"Why does the intensity for LED A turn on &amp; off during an experiment?",id:"why-does-the-intensity-for-led-a-turn-on--off-during-an-experiment",level:4},{value:"Why does my optical density flatten, or even decrease? What is a saturation point?",id:"why-does-my-optical-density-flatten-or-even-decrease-what-is-a-saturation-point",level:4},{value:"What does the effect of the scatter angle have on optical density?",id:"what-does-the-effect-of-the-scatter-angle-have-on-optical-density",level:4},{value:"Can I use my own 5mm LEDs and photodiodes for optical density?",id:"can-i-use-my-own-5mm-leds-and-photodiodes-for-optical-density",level:4},{value:"Heating and Temperature control",id:"heating-and-temperature-control",level:2},{value:"Why does the Pioreactor only provide a temperature reading every 4 minutes?",id:"why-does-the-pioreactor-only-provide-a-temperature-reading-every-4-minutes",level:4},{value:"Why does the Pioreactor&#39;s heating keep shutting off?",id:"why-does-the-pioreactors-heating-keep-shutting-off",level:4},{value:"How does heating work on the Pioreactor?",id:"how-does-heating-work-on-the-pioreactor",level:4},{value:"Mixing and stirring in the Pioreactor",id:"mixing-and-stirring-in-the-pioreactor",level:2},{value:"How is mixing / stirring performed in the Pioreactor?",id:"how-is-mixing--stirring-performed-in-the-pioreactor",level:4},{value:"How can I improve mixing and aeration?",id:"how-can-i-improve-mixing-and-aeration",level:4},{value:"Raspberry Pi Hardware",id:"raspberry-pi-hardware",level:2},{value:"What Raspberry Pi hardware can I use? I see Raspberry Pi 1, 2, 3, 4, A, B, +, Zero - it&#39;s confusing!",id:"what-raspberry-pi-hardware-can-i-use-i-see-raspberry-pi-1-2-3-4-a-b--zero---its-confusing",level:4},{value:"Do I need any cooling for the Raspberry Pi?",id:"do-i-need-any-cooling-for-the-raspberry-pi",level:4},{value:"Could a Raspberry Pi-compatible board work, like Rock Pi 4?",id:"could-a-raspberry-pi-compatible-board-work-like-rock-pi-4",level:4},{value:"Why are the Raspberry Pi LEDs/USB/Ethernet/etc. turned off?",id:"why-are-the-raspberry-pi-ledsusbethernetetc-turned-off",level:4},{value:"What is the username / password for the Raspberry Pi?",id:"what-is-the-username--password-for-the-raspberry-pi",level:4},{value:"Dosing",id:"dosing",level:2},{value:"Why does the Media card in the UI not update when I run a dosing command?",id:"why-does-the-media-card-in-the-ui-not-update-when-i-run-a-dosing-command",level:4},{value:"Data storage, access and recovery",id:"data-storage-access-and-recovery",level:2},{value:"Where are logs stored?",id:"where-are-logs-stored",level:4},{value:"How do I access raw experiment data?",id:"how-do-i-access-raw-experiment-data",level:4},{value:"My microSD card is corrupted - what can I do?",id:"my-microsd-card-is-corrupted---what-can-i-do",level:4},{value:"Networking",id:"networking",level:2},{value:"Can I use Ethernet cable connections instead of WIFI connections?",id:"can-i-use-ethernet-cable-connections-instead-of-wifi-connections",level:4},{value:"I&#39;m using a local access point, but I&#39;d like to install plugins, update software, etc.",id:"im-using-a-local-access-point-but-id-like-to-install-plugins-update-software-etc",level:4},{value:"To install a plugin",id:"to-install-a-plugin",level:5},{value:"To upgrade the core Pioreactor software",id:"to-upgrade-the-core-pioreactor-software",level:5}],c={toc:h};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(r.Z,{toc:h,mdxType:"TOCInline"}),(0,n.kt)("h2",{id:"pioreactor-operation"},"Pioreactor operation"),(0,n.kt)("h4",{id:"why-does-the-onboard-blue-led-keep-flashing"},"Why does the onboard blue LED keep flashing?"),(0,n.kt)("p",null,"There may be a problem. You can diagnose the problem by ",(0,n.kt)("a",{parentName:"p",href:"/user-guide/error-codes"},"counting the number of flashes observed")),(0,n.kt)("h4",{id:"what-does-the-onboard-button-do"},"What does the onboard button do?"),(0,n.kt)("p",null,'The button on the Pioreactor HAT sends a signal to the web UI to display a "hello" message. This is useful to know which Pioreactor in a cluster you are interacting with.'),(0,n.kt)("h2",{id:"optical-density-and-leds"},"Optical density and LEDs"),(0,n.kt)("h4",{id:"why-does-the-intensity-for-led-a-turn-on--off-during-an-experiment"},"Why does the intensity for LED A turn on & off during an experiment?"),(0,n.kt)("p",null,"You may have noticed that the LED labelled A turns on & off every 5 seconds or so. This is (normally) the channel for the infrared (IR) LED, which is used in the optical density measurements. Since we only take reading every 5 seconds (normally, this can be changed), we don't need the IR LED on all the time. The Pioreactor will only turn on LED when needed. This preserves the strength of the LED over longer periods of time. For more advanced use cases, it also allows other optical measurements to take place without the IR LED interfering with them."),(0,n.kt)("h4",{id:"why-does-my-optical-density-flatten-or-even-decrease-what-is-a-saturation-point"},"Why does my optical density flatten, or even decrease? What is a saturation point?"),(0,n.kt)("p",null,"For some experiments, especially when using a scatter angle of 135\xb0, you may notice that the optical density starts to flatten, and even decrease, ",(0,n.kt)("em",{parentName:"p"},"when you know the culture should still be growing"),". This is not a property of the culture, but occurs because the culture is getting too dense, and light is now being interrupted before it reaches the photodiodes. Prior to this point, called the saturation point, the relationship between culture density and optical density is nearly linear. But after this point, there is a flattening, even negative, relationship between culture density and optical density. For all analysis, we recommend only studying when the culture is in the linear regime. You can mitigate the problem by choosing a smaller scatter angle (like 90\xb0 or 45\xb0), diluting the culture using an automation like the turbidostat, or using a lower concentration of nutrient(s) in the media. Read more about Pioreactor's optical system ",(0,n.kt)("a",{parentName:"p",href:"https://pioreactor.com/blogs/pioreactor-blog/estimating-growth-rates-with-kalman-filters"},"here"),"."),(0,n.kt)("h4",{id:"what-does-the-effect-of-the-scatter-angle-have-on-optical-density"},"What does the effect of the scatter angle have on optical density?"),(0,n.kt)("p",null,"The scatter angle is the angle between the IR LED and a photodiode. This angle can be 45\xb0, 90\xb0, or 135\xb0  (although 180\xb0 is possible, we don't consider it here). What is there to consider when choosing an angle. In general, the trend is shorter angles => less sensitive at low densities, but higher saturation point. By default, we suggest 45\xb0 as a good trade off between sensitivity and saturation. You can mix angles, and the Pioreactor's internal algorithm will still combine them into a single growth rate. Read more about Pioreactor's optical system ",(0,n.kt)("a",{parentName:"p",href:"https://pioreactor.com/blogs/pioreactor-blog/estimating-growth-rates-with-kalman-filters"},"here"),"."),(0,n.kt)("h4",{id:"can-i-use-my-own-5mm-leds-and-photodiodes-for-optical-density"},"Can I use my own 5mm LEDs and photodiodes for optical density?"),(0,n.kt)("p",null,"Of course! The only two requirements are that the spectrum of the LED overlaps with the spectrum of the photodiode, and that the LED light won't be absorbed by media/culture, nor damage the media/culture. Thus, the often-used 600nm light source works in the Pioreactor. None of our internal algorithms or analytics are dependent on the wavelength of light chosen."),(0,n.kt)("p",null,"When you are using additional LEDs outside of the optical density LED & photodiode pair, you may worry that your additional LEDs will interfere with the optical density measurement. This won't happen, as we turn off all non-optical density LEDs before taking an optical density measurement."),(0,n.kt)("h2",{id:"heating-and-temperature-control"},"Heating and Temperature control"),(0,n.kt)("h4",{id:"why-does-the-pioreactor-only-provide-a-temperature-reading-every-4-minutes"},"Why does the Pioreactor only provide a temperature reading every 4 minutes?"),(0,n.kt)("p",null,"We made a design choice early on to make preparation as error-free as possible. This involved thinking about sensors being ",(0,n.kt)("em",{parentName:"p"},"in situ")," (in place), versus the sensors being on the outside of the vial. The temperature sensor in the Pioreactor is outside the vial, which means less chance of contamination, but there's a tradeoff (as you could guess): we have to rely on an estimation algorithm that requires 4 minutes to gather data on. We think this is a fair trade-off, as high frequency temperature readings are not that important in an experiment that lasts 12 hours or more."),(0,n.kt)("h4",{id:"why-does-the-pioreactors-heating-keep-shutting-off"},"Why does the Pioreactor's heating keep shutting off?"),(0,n.kt)("p",null,"If you find that the Pioreactor's heating is shutting off, typically with an accompanying error and flashing blue light, then likely the temperature is becoming too high for safe handling. We restrict the onboard PCB's temperature to be no higher than 63\u2103. Temperature's higher than this can deform the plastic, and possibly cause burns. If the Pioreactor detects a temperature near or above this value, the software will shut off the heating, and possible the entire Raspberry Pi in extreme cases."),(0,n.kt)("p",null,"To avoid this occurring, we suggest not setting the target temperature too high - not more than 20\u2103 above ambient temperature. Also, reducing the ",(0,n.kt)("inlineCode",{parentName:"p"},"Kd")," parameter in ",(0,n.kt)("inlineCode",{parentName:"p"},"[temperature_automation.stable]")," section in the config.ini would help."),(0,n.kt)("h4",{id:"how-does-heating-work-on-the-pioreactor"},"How does heating work on the Pioreactor?"),(0,n.kt)("p",null,"The Pioreactor has an onboard PCB, called the heating PCB, that sits below the glass vial. On the PCB are resistors that convert current from PWM outputs into heat. By varying the duty cycle of the PWM, we vary the amount of heat converted."),(0,n.kt)("h2",{id:"mixing-and-stirring-in-the-pioreactor"},"Mixing and stirring in the Pioreactor"),(0,n.kt)("h4",{id:"how-is-mixing--stirring-performed-in-the-pioreactor"},"How is mixing / stirring performed in the Pioreactor?"),(0,n.kt)("p",null,"Stirring is performed with a 15mm stir bar inside the vial, controlled by a pair of magnets spinning below the vial. The rotation speed, RPM, of the vial can be controlled using the Pioreactor software. This stirring is also how aeration is done."),(0,n.kt)("h4",{id:"how-can-i-improve-mixing-and-aeration"},"How can I improve mixing and aeration?"),(0,n.kt)("p",null,"If the standard mixing and aeration with the stir bar is not enough for your application, you can do a few things, (in increasing order of complication, not necessarily effectiveness):"),(0,n.kt)("ol",{start:0},(0,n.kt)("li",{parentName:"ol"},"If the tubes in the cap are submerged during operation, this is reduce the transfer of air. Pull them up from the top of the cap to keep them out of the liquid."),(0,n.kt)("li",{parentName:"ol"},"Leave the cap slightly ajar."),(0,n.kt)("li",{parentName:"ol"},"Increase the RPM of the stirring. This will increase the surface area exposed to the air. Be warned though: too high of an RPM will cause either a large enough vortex to interfere with the optical systems, or will causing the stir bar to fall out of sync."),(0,n.kt)("li",{parentName:"ol"},"Add a baffle to the vial cap. A simple cylinder that rests into the liquid causes disturbance in the rotating liquid that both mixing and aeration are significantly improved. A tube can be removed from the cap, and a autoclavable rod can be inserted such that it enters the media, but won't interfere with the optics."),(0,n.kt)("li",{parentName:"ol"},"Adding external aeration to your Pioreactor. In the simplest case, using an air pump.")),(0,n.kt)("h2",{id:"raspberry-pi-hardware"},"Raspberry Pi Hardware"),(0,n.kt)("h4",{id:"what-raspberry-pi-hardware-can-i-use-i-see-raspberry-pi-1-2-3-4-a-b--zero---its-confusing"},"What Raspberry Pi hardware can I use? I see Raspberry Pi 1, 2, 3, 4, A, B, +, Zero - it's confusing!"),(0,n.kt)("p",null,"We've designed the hardware and software to be compatible with any Raspberry Pi that has onboard Wifi and a 40 pin header. That includes (at the time of writing):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi 3"),(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi 3 B+"),(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi 3 Model A+"),(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi 4 B"),(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi Zero W (with header) \xb9"),(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi Zero 2 W"),(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi 400 \xb2")),(0,n.kt)("p",null,"Although you can use any above, we like the Raspberry Pi 3 Model A+ because of its low power consumption, slim build, and low price. It has the necessary CPU power and memory for the Pioreactor workload, and is generally the cheapest on the list above (see note on Zero W below)."),(0,n.kt)("p",null,"\xb9 ",(0,n.kt)("em",{parentName:"p"},"Raspberry Pi Zero W")," is on the list above, and is very low cost compared to the others. They can absolutely be used for Pioreactors ",(0,n.kt)("em",{parentName:"p"},"as workers")," - we don't recommend them to be your ",(0,n.kt)("em",{parentName:"p"},"leader")," (note sure what these terms mean? Here's an introduction to ",(0,n.kt)("a",{parentName:"p",href:"/user-guide/create-cluster"},"leader and workers"),"). As workers, Raspberry Pi Zero W perform just fine, but will respond slower to commands. Note that this does not include the Raspberry Pi Zero ",(0,n.kt)("em",{parentName:"p"},"2")," W model, which is fine for all jobs."),(0,n.kt)("p",null,"\xb2 The RPi 400 has its 40 pin header exposed in a different orientation, so your Pioreactor won't be able to sit on top like for other RPi versions."),(0,n.kt)("h4",{id:"do-i-need-any-cooling-for-the-raspberry-pi"},"Do I need any cooling for the Raspberry Pi?"),(0,n.kt)("p",null,"Nope, you shouldn't, unless you are connecting an external monitor."),(0,n.kt)("h4",{id:"could-a-raspberry-pi-compatible-board-work-like-rock-pi-4"},"Could a Raspberry Pi-compatible board work, like Rock Pi 4?"),(0,n.kt)("p",null,"Probably. We haven't tested them, but so long as i) the GPIO pins are identical, and ii) Raspberry Pi OS can be installed, it should work."),(0,n.kt)("h4",{id:"why-are-the-raspberry-pi-ledsusbethernetetc-turned-off"},"Why are the Raspberry Pi LEDs/USB/Ethernet/etc. turned off?"),(0,n.kt)("p",null,'We turn off the "activity" LED (usually the green one) to save some power for the Pioreactor\'s peripherals. We do the same for USB and Ethernet. You can turn these back on by editing the ',(0,n.kt)("inlineCode",{parentName:"p"},"/boot/config.txt")," file on the RPi."),(0,n.kt)("h4",{id:"what-is-the-username--password-for-the-raspberry-pi"},"What is the username / password for the Raspberry Pi?"),(0,n.kt)("p",null,"When setting up your Raspberry Pi with the Pioreactor software, you would have chosen a password. Try the recommended username: ",(0,n.kt)("inlineCode",{parentName:"p"},"pioreactor"),", and password: ",(0,n.kt)("inlineCode",{parentName:"p"},"raspberry"),"."),(0,n.kt)("h2",{id:"dosing"},"Dosing"),(0,n.kt)("h4",{id:"why-does-the-media-card-in-the-ui-not-update-when-i-run-a-dosing-command"},"Why does the Media card in the UI not update when I run a dosing command?"),(0,n.kt)("p",null,"The Media card will ",(0,n.kt)("em",{parentName:"p"},"only")," update when an ",(0,n.kt)("a",{parentName:"p",href:"/user-guide/dosing-automations"},"Dosing Automation")," is active (even the ",(0,n.kt)("inlineCode",{parentName:"p"},"Silent")," automation). Why is it done this way? Often, you don't want volumes to be recorded there: during cleaning, during testing, etc. Often you only want volumes associated with the experiment to be there."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},'All dosing events ares recorded to the database however, and with a record of when the event occurred, and source of action. This data is available in the "Export data" web page, under ',(0,n.kt)("inlineCode",{parentName:"p"},"Dosing event log"),".")),(0,n.kt)("h2",{id:"data-storage-access-and-recovery"},"Data storage, access and recovery"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 For any important project, we suggest manually exporting or backing up critical data multiple different places. This doesn't just apply to using the Pioreactor, but is good advice in general.")),(0,n.kt)("h4",{id:"where-are-logs-stored"},"Where are logs stored?"),(0,n.kt)("p",null,"For the logs that you see in the Log Table in the ",(0,n.kt)("em",{parentName:"p"},"Experiment Overview")," page, these can be download on the ",(0,n.kt)("em",{parentName:"p"},"Download experiment data")," page in the Pioreactor web interface. Other logs are also available, including dosing event and algorithm change-logs."),(0,n.kt)("p",null,"More granular logs per Pioreactor are available in ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/log/pioreactor.log")," on the Raspberry Pis."),(0,n.kt)("h4",{id:"how-do-i-access-raw-experiment-data"},"How do I access raw experiment data?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("em",{parentName:"li"},"Download experiment data")," page in the Pioreactor web interface provides CSV exports of common datasets from a pre-selected experiment."),(0,n.kt)("li",{parentName:"ol"},"All data eventually lands in a SQLite3 database on the leader Pioreactor, by default located in ",(0,n.kt)("inlineCode",{parentName:"li"},"/home/pioreactor/.pioreactor/storage/pioreactor.sqlite"),". This can be download using a tool like ",(0,n.kt)("inlineCode",{parentName:"li"},"scp"),"."),(0,n.kt)("li",{parentName:"ol"},"To access the SQLite3 database from the command line, try ",(0,n.kt)("inlineCode",{parentName:"li"},"pio db"),".")),(0,n.kt)("h4",{id:"my-microsd-card-is-corrupted---what-can-i-do"},"My microSD card is corrupted - what can I do?"),(0,n.kt)("p",null,"Unfortunately, the microSD card becoming corrupted or damaged is an infrequent but possible risk with using Raspberry Pis."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the microSD card was inside a non-leader Pioreactor, it's best to try to reformat the microSD card and start fresh (i.e. ",(0,n.kt)("a",{parentName:"p",href:"/user-guide/software-set-up#adding-workers-to-your-cluster"},"reinstall the Pioreactor software and reintroduce it to the cluster"),"). This is usually okay as no critical data is stored locally in workers, only log files and hardware calibrations will be lost.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the microSD was inside the leader Raspberry Pi, this is a bigger problem. Likely any running experiment will have to be restarted. Fortunately, if you have more than one Pioreactor in your cluster, then the leader's SQLite database has been periodically backing itself up to other Pioreactors in the cluster every few days. Using the command line, check other Pioreactors' ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/pioreactor/.pioreactor/storage")," directory for the ",(0,n.kt)("em",{parentName:"p"},"latest")," backup named ",(0,n.kt)("inlineCode",{parentName:"p"},"pioreactor.sqlite.backup")," (should be from within the past few days hours). You can use this database to restart a new leader."))),(0,n.kt)("h2",{id:"networking"},"Networking"),(0,n.kt)("h4",{id:"can-i-use-ethernet-cable-connections-instead-of-wifi-connections"},"Can I use Ethernet cable connections instead of WIFI connections?"),(0,n.kt)("p",null,"Yes, so long as the Raspberry Pi's are connected to the same network and discoverable, this should work. Even mixing Ethernet and WIFI is fine."),(0,n.kt)("h4",{id:"im-using-a-local-access-point-but-id-like-to-install-plugins-update-software-etc"},"I'm using a local access point, but I'd like to install plugins, update software, etc."),(0,n.kt)("h5",{id:"to-install-a-plugin"},"To install a plugin"),(0,n.kt)("p",null,"On a computer that is connected to the internet, download the ",(0,n.kt)("inlineCode",{parentName:"p"},".whl")," file from the plugins webpage on PyPI. Then, connect that computer to your Pioreactor's local access point's network. To each Pioreactor you wish to install the plugin on, transfer the ",(0,n.kt)("inlineCode",{parentName:"p"},".whl")," file to the Pioreactor (using SFTP or FTP). Then, run ",(0,n.kt)("inlineCode",{parentName:"p"},"pio install-plugin <plugin-name> <path/to/local/.whl>")),(0,n.kt)("h5",{id:"to-upgrade-the-core-pioreactor-software"},"To upgrade the core Pioreactor software"),(0,n.kt)("p",null,"On a computer that is connected to the internet, download the ",(0,n.kt)("inlineCode",{parentName:"p"},".whl"),' file from the under "Assets" from the ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/pioreactor/releases/latest"},"latest release on Github"),". Then, connect that computer to your Pioreactor's local access point's network. To each Pioreactor you wish to update software on, transfer the ",(0,n.kt)("inlineCode",{parentName:"p"},".whl")," file to the Pioreactor (using SFTP or FTP). Then, run ",(0,n.kt)("inlineCode",{parentName:"p"},"pio update --app --source <path/to/local/.whl>")))}u.isMDXComponent=!0}}]);