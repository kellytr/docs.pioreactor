"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2703],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7783:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n="tableOfContentsInline_0DDH",o=a(5002);var i=function(e){var t=e.toc,a=e.minHeadingLevel,i=e.maxHeadingLevel;return r.createElement("div",{className:n},r.createElement(o.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7462),n=a(3366),o=a(7294),i=a(3616),l=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,r=e.linkClassName,n=e.isChild;return t.length?o.createElement("ul",{className:n?void 0:a},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:r}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,p=e.linkClassName,u=void 0===p?"table-of-contents__link":p,m=e.linkActiveClassName,d=void 0===m?void 0:m,h=e.minHeadingLevel,f=e.maxHeadingLevel,k=(0,n.Z)(e,l),g=(0,i.LU)(),b=null!=h?h:g.tableOfContents.minHeadingLevel,y=null!=f?f:g.tableOfContents.maxHeadingLevel,w=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:y}),v=(0,o.useMemo)((function(){if(u&&d)return{linkClassName:u,linkActiveClassName:d,minHeadingLevel:b,maxHeadingLevel:y}}),[u,d,b,y]);return(0,i.Si)(v),o.createElement(s,(0,r.Z)({toc:w,className:c,linkClassName:u},k))}},8609:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=(a(7783),["components"]),l={},s=void 0,c={unversionedId:"Raspberry Pi set up and software installation",id:"Raspberry Pi set up and software installation",title:"Raspberry Pi set up and software installation",description:"Let's install your new Pioreactor",source:"@site/user_guide/02-Raspberry Pi set up and software installation.mdx",sourceDirName:".",slug:"/Raspberry Pi set up and software installation",permalink:"/user_guide/Raspberry Pi set up and software installation",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is the Pioreactor?",permalink:"/user_guide/user_guide_intro"},next:{title:"Pioreactor hardware set up",permalink:"/user_guide/Pioreactor hardware set up"}},p=[{value:"Let&#39;s install your new Pioreactor",id:"lets-install-your-new-pioreactor",children:[{value:"Setting up your Raspberry Pi",id:"setting-up-your-raspberry-pi",children:[],level:3}],level:2},{value:"Adding workers to your cluster",id:"adding-workers-to-your-cluster",children:[{value:"From the web UI",id:"from-the-web-ui",children:[],level:4},{value:"From the command line",id:"from-the-command-line",children:[],level:4}],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"My Pioreactor keeps flashing the blue LED",id:"my-pioreactor-keeps-flashing-the-blue-led",children:[],level:4},{value:"My Rpi won&#39;t connect to my Wifi.",id:"my-rpi-wont-connect-to-my-wifi",children:[],level:4},{value:"I want to change the Pioreactor name on installation of leader",id:"i-want-to-change-the-pioreactor-name-on-installation-of-leader",children:[],level:4},{value:"pioreactor.local in a web browser is not showing up",id:"pioreactorlocal-in-a-web-browser-is-not-showing-up",children:[],level:4}],level:2}],u={toc:p};function m(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"lets-install-your-new-pioreactor"},"Let's install your new Pioreactor"),(0,o.kt)("p",null,"You can expect the setup process to take 10-15 minutes."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before you get started, you'll need to have the following:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"A Raspberry Pi (our list of preferred Raspberry Pis is ",(0,o.kt)("a",{parentName:"li",href:"/user_guide/Common%20questions#what-raspberry-pi-hardware-can-i-use-i-see-raspberry-pi-1-2-3-4-a-b--zero---its-confusing"},"here"),")"),(0,o.kt)("li",{parentName:"ol"},"A blank microSD card, ideally 16GB size or larger."),(0,o.kt)("li",{parentName:"ol"},"A suitable power cord for the Raspberry Pi. (If you look at the power rating, it should be about 5V and at least 2A)."),(0,o.kt)("li",{parentName:"ol"},"A computer with internet access and ability to read & write to a microSD card.")))),(0,o.kt)("h3",{id:"setting-up-your-raspberry-pi"},"Setting up your Raspberry Pi"),(0,o.kt)("p",null,"We'll start with an unused Raspberry Pi and empty microSD card (or we'll reformat the card later if not empty)."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pioreactor/pioreactor/releases/latest/download/pioreactor_leader_worker.img.zip"},"Pioreactor Leader image"),": this has all the required software preinstalled on it, including the latest version of Raspberry Pi OS and Pioreactor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the ",(0,o.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/"},"Raspberry Pi Imager")," for your operating system, install it and open the Raspberry Pi Imager.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "Choose OS". Click on "Use custom" towards the bottom:\n',(0,o.kt)("img",{alt:"Select the &quot;Use custom&quot; option",src:a(9742).Z}),"\nSelect the downloaded Pioreactor image from step 1.\n",(0,o.kt)("img",{alt:"In the local computers direction, select the downloaded image",src:a(7212).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Connect your microSD card to your computer. Once your microSD card connected to your computer, select it under "Choose Storage".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the settings menu (Gear button in the bottom left).\n",(0,o.kt)("img",{alt:"Settings menu",src:a(6194).Z})),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Set hostname as the desired name of this Pioreactor. Some names that we use for our first Pioreactor: ",(0,o.kt)("inlineCode",{parentName:"li"}," pioreactor1"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"leader"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"p1"),"."),(0,o.kt)("li",{parentName:"ol"},'Check "Enable SSH".'),(0,o.kt)("li",{parentName:"ol"},"(Optional) Add a password, default is ",(0,o.kt)("inlineCode",{parentName:"li"},"raspberry")," if not provided."),(0,o.kt)("li",{parentName:"ol"},'Check "Configure wifi" and enter your network name into SSID, wifi password, and country.'),(0,o.kt)("li",{parentName:"ol"},"(Optional) Change timezone to your local timezone."),(0,o.kt)("li",{parentName:"ol"},'Click "Save"'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "Write".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once writing is complete complete, remove the microSD card, and place it into the Raspberry Pi.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) If not already done so, attach your Pioreactor HAT to your Raspberry Pi. Ensure the two pieces fit snugly together.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Plug the power cord into your Raspberry Pi in. LEDs onboard the Raspberry Pi should start to light up.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After a few moments, your Pioreactor will flash a blue LED and now is ready to go. Navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://pioreactor.local"},"http://pioreactor.local")," in a web browser to visit the web interface. (Not working? See ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/Raspberry%20Pi%20set%20up%20and%20software%20installation#troubleshooting"},"Troubleshooting")," below)."))),(0,o.kt)("h2",{id:"adding-workers-to-your-cluster"},"Adding workers to your cluster"),(0,o.kt)("h4",{id:"from-the-web-ui"},"From the web UI"),(0,o.kt)("p",null,"Follow the same instructions above, but use a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pioreactor/pioreactor/releases/latest/download/leader_worker.img.zip"},"Pioreactor Worker image")," instead. ",(0,o.kt)("strong",{parentName:"p"},"Choose a hostname that isn't currently being used"),"."),(0,o.kt)("p",null,"After you have an installed the image, connected the new Pioreactor to your cluster is simple. On the ",(0,o.kt)("em",{parentName:"p"},"Pioreactors"),' page in the web interface, click the "Add new Pioreactor" button in the top right:'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/884032/104632720-201a8e00-566c-11eb-9e80-6fb2346411c9.png",alt:null})),(0,o.kt)("p",null,"Provide the name of the new worker Pioreactor:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/884032/104633581-586e9c00-566d-11eb-9ea9-cffbf55d7303.png",alt:null})),(0,o.kt)("p",null,"After a few minutes, the new Pioreactor should appear on the ",(0,o.kt)("em",{parentName:"p"},"Pioreactors")," and ",(0,o.kt)("em",{parentName:"p"},"Experiment Overview")," page."),(0,o.kt)("h4",{id:"from-the-command-line"},"From the command line"),(0,o.kt)("p",null,"On the leader's command line, the command ",(0,o.kt)("inlineCode",{parentName:"p"},"pio add-pioreactor <new name>")," will connect the new Pioreactor to the cluster."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h4",{id:"my-pioreactor-keeps-flashing-the-blue-led"},"My Pioreactor keeps flashing the blue LED"),(0,o.kt)("p",null,"On a successful start, the Pioreactor will flash its blue LED for about 4 seconds. If you observe the blue LED flashing for longer, something may be wrong. You can diagnose the problem by ",(0,o.kt)("a",{parentName:"p",href:"/user_guide/Advanced/Flashing%20blue%20led"},"counting the number of flashes observed")),(0,o.kt)("h4",{id:"my-rpi-wont-connect-to-my-wifi"},"My Rpi won't connect to my Wifi."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some Raspberry Pis can't connect to Wifi natively, and some Raspberry Pis can only connect to 2.4GHz connections. See table below: ",(0,o.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/884032/105118696-e945dd00-5a9c-11eb-91f5-0cc77cdc1422.png"},(0,o.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/884032/105118696-e945dd00-5a9c-11eb-91f5-0cc77cdc1422.png",alt:"Rpi and wifi"})),(0,o.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/884032/105118696-e945dd00-5a9c-11eb-91f5-0cc77cdc1422.png"})),(0,o.kt)("li",{parentName:"ul"},"You may have mis-typed your Wifi credentials. To fix this, you'll need to restart the image installation from the Raspberry Pi Imager."),(0,o.kt)("li",{parentName:"ul"},"If connecting to a 5GHz wifi connection, you ",(0,o.kt)("em",{parentName:"li"},"need")," to supply a valid country code. See the list here: ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",title:"Link to country codes on wikipedia"},"https://en.wikipedia.org/wiki/ISO","_","3166-1","_","alpha-2/")),(0,o.kt)("li",{parentName:"ul"},"Check out some other possibilities ",(0,o.kt)("a",{parentName:"li",href:"https://community.octoprint.org/t/wifi-setup-and-troubleshooting/184#heading--troubleshooting"},"here"),".")),(0,o.kt)("h4",{id:"i-want-to-change-the-pioreactor-name-on-installation-of-leader"},"I want to change the Pioreactor name on installation of leader"),(0,o.kt)("p",null,"Easiest solution is to start over: reflashing the OS onto the microSD card will remove all previous data, and you can try again."),(0,o.kt)("h4",{id:"pioreactorlocal-in-a-web-browser-is-not-showing-up"},"pioreactor.local in a web browser is not showing up"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The UI is hosted on ",(0,o.kt)("strong",{parentName:"li"},"http"),", not ",(0,o.kt)("strong",{parentName:"li"},"http",(0,o.kt)("em",{parentName:"strong"},"s")),". Check if you are accessing ",(0,o.kt)("inlineCode",{parentName:"li"},"http")," ",(0,o.kt)("inlineCode",{parentName:"li"},"://pioreactor.local"),", and ",(0,o.kt)("em",{parentName:"li"},"not")," ",(0,o.kt)("inlineCode",{parentName:"li"},"https")," ",(0,o.kt)("inlineCode",{parentName:"li"},"://pioreactor.local"),"."),(0,o.kt)("li",{parentName:"ul"},"Are you on an older Windows machine? You may need to install a DNS ",(0,o.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/bonjour-zeroconf-networking-for-windows-and-linux/overview#microsoft-windows-914263-8"},"service"),", but also see workarounds ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OutsourcedGuru/octoprint-name-resolution-hacks"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"Try instead ",(0,o.kt)("inlineCode",{parentName:"li"},"http://<the permanent name of your Pioreactor aka hostname>.local")),(0,o.kt)("li",{parentName:"ul"},"Still not working? Try instead ",(0,o.kt)("inlineCode",{parentName:"li"},"http://<IP address of your Raspberry Pi>"))))}m.isMDXComponent=!0},6194:function(e,t,a){t.Z=a.p+"assets/images/ctrlshiftx-c0ed9905ed2bfa69eaf056f28b939ac3.png"},7212:function(e,t,a){t.Z=a.p+"assets/images/select_new_image-f07e020c7a9d1b3b2bb53d152a198599.png"},9742:function(e,t,a){t.Z=a.p+"assets/images/use_custom_image-33932c04d19243c39bb50742de143726.png"}}]);