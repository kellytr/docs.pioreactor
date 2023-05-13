"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[7059],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3901:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(93743);const o="tableOfContentsInline_prmo";function i(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:i}=e;return r.createElement("div",{className:o},r.createElement(n.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},93743:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(87462),n=a(67294),o=a(86668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const r=a.slice(2,e.level);e.parentIndex=Math.max(...r),a[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:a,...n}=e;a>=0?t[a].children.push(n):r.push(n)})),r}function l(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:a,maxHeadingLevel:r});return function(e){return e.level>=a&&e.level<=r}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:a}=t;const r=e.find((e=>s(e).top>=a));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function p(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,n.useRef)(void 0),a=p();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:n,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const r=[];for(let n=t;n<=a;n+=1)r.push(`h${n}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),s=c(l,{anchorTopOffset:a.current}),p=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(n),e.classList.add(n),t.current=e):e.classList.remove(n)}(e,e===p)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])}function m(e){let{toc:t,className:a,linkClassName:r,isChild:o}=e;return t.length?n.createElement("ul",{className:o?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(m,{isChild:!0,toc:e.children,className:a,linkClassName:r}))))):null}const d=n.memo(m);function h(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:p,maxHeadingLevel:m,...h}=e;const g=(0,o.L)(),k=p??g.tableOfContents.minHeadingLevel,f=m??g.tableOfContents.maxHeadingLevel,y=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:r}=e;return(0,n.useMemo)((()=>l({toc:i(t),minHeadingLevel:a,maxHeadingLevel:r})),[t,a,r])}({toc:t,minHeadingLevel:k,maxHeadingLevel:f});return u((0,n.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:k,maxHeadingLevel:f}}),[s,c,k,f])),n.createElement(d,(0,r.Z)({toc:y,className:a,linkClassName:s},h))}},97634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));a(3901);const o={description:"Install the Pioreactor software onto the Raspberry Pi",title:"Software installation",slug:"/software-set-up"},i=void 0,l={unversionedId:"getting-started/01c-software-set-up",id:"getting-started/01c-software-set-up",title:"Software installation",description:"Install the Pioreactor software onto the Raspberry Pi",source:"@site/user-guide/01-getting-started/01c-software-set-up.mdx",sourceDirName:"01-getting-started",slug:"/software-set-up",permalink:"/user-guide/software-set-up",draft:!1,tags:[],version:"current",frontMatter:{description:"Install the Pioreactor software onto the Raspberry Pi",title:"Software installation",slug:"/software-set-up"},sidebar:"tutorialSidebar",previous:{title:"Connect the optics system",permalink:"/user-guide/optics-assembly"},next:{title:"Preparing your vial for cultures",permalink:"/user-guide/prepare-vial-for-cultures"}},s={},c=[{value:"Before you begin",id:"before-you-begin",level:3},{value:"Setting up your Raspberry Pi",id:"setting-up-your-raspberry-pi",level:3},{value:"Adding additional workers to your cluster",id:"adding-additional-workers-to-your-cluster",level:2},{value:"Step 1. Install the worker software",id:"step-1-install-the-worker-software",level:4},{value:"Step 2. Add worker to cluster using the UI",id:"step-2-add-worker-to-cluster-using-the-ui",level:4},{value:"From the command line <em>(Alternative)</em>",id:"from-the-command-line-alternative",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"My Pioreactor keeps flashing the blue LED",id:"my-pioreactor-keeps-flashing-the-blue-led",level:4},{value:"My RPi won&#39;t connect to my WiFi.",id:"my-rpi-wont-connect-to-my-wifi",level:4},{value:"I want to change the Pioreactor name on installation of leader",id:"i-want-to-change-the-pioreactor-name-on-installation-of-leader",level:4},{value:"pioreactor.local in a web browser is not showing up",id:"pioreactorlocal-in-a-web-browser-is-not-showing-up",level:4}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"before-you-begin"},"Before you begin"),(0,n.kt)("p",null,"You can expect the setup process to take 10-15 minutes."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Before you get started, you'll need to have the following:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"A Raspberry Pi (our list of preferred Raspberry Pis is ",(0,n.kt)("a",{parentName:"li",href:"/user-guide/common-questions#what-raspberry-pi-hardware-can-i-use-i-see-raspberry-pi-1-2-3-4-a-b--zero---its-confusing"},"here"),")"),(0,n.kt)("li",{parentName:"ol"},"A blank microSD card, at least 16GB. We like SanDisk and Samsung SD cards for their longevity, but any SD card will do, too."),(0,n.kt)("li",{parentName:"ol"},"A suitable power cord for the Raspberry Pi. (If you look at the power rating, it should be about 5 V and at least 2.25 A, or above 12 W)."),(0,n.kt)("li",{parentName:"ol"},"A computer with internet access and ability to read & write to a microSD card."))),(0,n.kt)("h3",{id:"setting-up-your-raspberry-pi"},"Setting up your Raspberry Pi"),(0,n.kt)("p",null,"We'll start your blank microSD card."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pioreactor/custopizer/releases/latest/download/pioreactor_leader_worker.zip"},"Pioreactor leader & worker image file"),".")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"What is an image file? It's a file that contains all the required software preinstalled on it, including an operating system and our custom Pioreactor software. The image will be installed on the microSD card.")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/"},"Raspberry Pi Imager")," for your operating system and install it.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the newly-installed Raspberry Pi Imager.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Choose OS"),". Click on ",(0,n.kt)("strong",{parentName:"p"},"Use custom")," towards the bottom:\n",(0,n.kt)("img",{alt:"Click &quot;Choose OS&quot;",src:a(50318).Z,width:"1584",height:"1120"}),"\n",(0,n.kt)("img",{alt:"Select the &quot;Use custom&quot; option",src:a(18808).Z,width:"1584",height:"1120"}),"\nSelect the downloaded Pioreactor image from step 1."),(0,n.kt)("img",{src:"/img/user-guide/select_new_image.png",alt:"Screenshot of the local computer's directory, selecting the downloaded image",width:"555",style:{margin:"auto",display:"block"}}))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Insert your microSD card to your computer. After your microSD card is recognized by your computer, click ",(0,n.kt)("strong",{parentName:"p"},"Choose Storage")," and select it.\n",(0,n.kt)("img",{alt:"Click &quot;Choose storage&quot;",src:a(54142).Z,width:"1584",height:"1120"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the settings menu (Gear button in the bottom right).\n",(0,n.kt)("img",{alt:"Settings menu",src:a(20702).Z,width:"1584",height:"1120"})),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check ",(0,n.kt)("strong",{parentName:"p"},"Set hostname"),". Input a unique name for this Pioreactor. Some names that we use for our first Pioreactor: ",(0,n.kt)("inlineCode",{parentName:"p"},"pioreactor1"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"leader"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"pr1"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check ",(0,n.kt)("strong",{parentName:"p"},"Enable SSH"),", and select ",(0,n.kt)("strong",{parentName:"p"},"Use password authentication"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check ",(0,n.kt)("strong",{parentName:"p"},"Set username and password"),". Enter the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"username"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"pioreactor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"password"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"raspberry")," (you can change the password later)."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check ",(0,n.kt)("strong",{parentName:"p"},"Configure wireless LAN")," and enter your network name into SSID network name, WiFi password, and country. Or leave blank if using ethernet."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Alternative: instead of trying to connect to a difficult-to-access network, like at a university that may not easily allow Raspberry Pi's, ",(0,n.kt)("a",{parentName:"p",href:"/user-guide/local-access-point"},"there's a built-in solution for creating a local access point"),")."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change timezone to your local timezone."))),(0,n.kt)("p",{parentName:"li"},"Your settings should look something like this:"),(0,n.kt)("img",{src:"/img/user-guide/rpi-imager-settings.png",width:"625",alt:"Screenshot of what your settings should look like",style:{margin:"auto",display:"block"}})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save")," to save and exit the dialog box.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Write"),". Writing will take up to 5 minutes. Perfect time for a tea break.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once writing is complete, remove the microSD card, and place it (exposed copper side up) into the Raspberry Pi. ",(0,n.kt)("strong",{parentName:"p"},"Your Raspberry Pi's power should be unplugged before inserting the microSD card"),". The microSD slot is located on the PWM side of the Pioreactor, in the gap between the Raspberry Pi and the bottom faceplate. Reference the picture for the orientation."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Insert the microSD card",src:a(89935).Z,width:"1000",height:"375"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Plug power into your Raspberry Pi. LEDs onboard the Raspberry Pi may start to light up. After about ",(0,n.kt)("strong",{parentName:"p"},"three minutes"),", your Pioreactor HAT will briefly blink a blue LED for 2 seconds, telling us it is ready."))),(0,n.kt)("p",{align:"center"},(0,n.kt)("video",{width:"520",muted:!0,loop:"true",autoplay:"autoplay"},(0,n.kt)("source",{src:"/vid/flashing.mp4",type:"video/mp4"}))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Waited, but didn't see a blue LED blink, or maybe you missed it? Try pressing on the onboard button, near the side labelled \"PWM\", and pictured above. If this lights up the blue LED, you're good to move on. Still not working? Try power-cycling the Raspberry Pi, or email us at ",(0,n.kt)("a",{parentName:"p",href:"mailto:hello@pioreactor.com"},"hello@pioreactor.com"),".")),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"After observing the blue LED flashing, navigate to ",(0,n.kt)("a",{parentName:"li",href:"http://pioreactor.local"},"http://pioreactor.local")," in a web browser to visit the web interface. (Not working? Read ",(0,n.kt)("a",{parentName:"li",href:"#pioreactorlocal-in-a-web-browser-is-not-showing-up"},"Troubleshooting")," below)."),(0,n.kt)("li",{parentName:"ol"},"The Pioreactor is now ready for use! Follow ",(0,n.kt)("a",{parentName:"li",href:"/user-guide/prepare-vial-for-cultures"},"this guide")," to set up your first experiment.")),(0,n.kt)("h2",{id:"adding-additional-workers-to-your-cluster"},"Adding additional workers to your cluster"),(0,n.kt)("p",null,"Workers are additional Pioreactors that you can control from a single UI. Together, a leader and workers form a Pioreactor cluster."),(0,n.kt)("h4",{id:"step-1-install-the-worker-software"},"Step 1. Install the worker software"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the same instructions above, but use a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pioreactor/custopizer/releases/latest/download/pioreactor_worker.zip"},"Pioreactor Worker image")," instead.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Choose a hostname that isn't currently being used in your cluster, ex: ",(0,n.kt)("inlineCode",{parentName:"p"},"worker1"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"worker2"),", etc.")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After the image is written to the microSD card, place the microSD card into the Raspberry Pi and power it on. The Pioreactor's blue LED won't blink, as it's not 100% ready yet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After a few minutes, connect the new Pioreactor worker to your cluster using the UI. See next steps."))),(0,n.kt)("h4",{id:"step-2-add-worker-to-cluster-using-the-ui"},"Step 2. Add worker to cluster using the UI"),(0,n.kt)("p",null,"On the ",(0,n.kt)("em",{parentName:"p"},"Pioreactors"),' page in the web interface, click the "Add new Pioreactor" button in the top right:'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add new pioreactor",src:a(95266).Z,width:"2624",height:"1330"})),(0,n.kt)("p",null,"Provide the chosen hostname of the new worker Pioreactor:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add new pioreactor modal",src:a(67818).Z,width:"2628",height:"1324"})),(0,n.kt)("p",null,"After a minute, the new Pioreactor should appear on the ",(0,n.kt)("em",{parentName:"p"},"Pioreactors")," and ",(0,n.kt)("em",{parentName:"p"},"Experiment Overview")," page. Refresh the page if it does not show up. Your new Pioreactor will also blink its blue LED."),(0,n.kt)("h4",{id:"from-the-command-line-alternative"},"From the command line ",(0,n.kt)("em",{parentName:"h4"},"(Alternative)")),(0,n.kt)("p",null,"On the leader's command line, the command ",(0,n.kt)("inlineCode",{parentName:"p"},"pio add-pioreactor <new name>")," will connect the new Pioreactor to the cluster."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We recommend running a ",(0,n.kt)("a",{parentName:"p",href:"/user-guide/running-self-test"},"self-test")," on all Pioreactors after your initial setup to detect any hardware bugs at this point.")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h4",{id:"my-pioreactor-keeps-flashing-the-blue-led"},"My Pioreactor keeps flashing the blue LED"),(0,n.kt)("p",null,"On a successful start, the Pioreactor will flash its blue LED for about 4 seconds. If you observe the blue LED flashing for longer, something may be wrong. You can diagnose the problem by ",(0,n.kt)("a",{parentName:"p",href:"/user-guide/error-codes"},"counting the number of flashes observed"),"."),(0,n.kt)("h4",{id:"my-rpi-wont-connect-to-my-wifi"},"My RPi won't connect to my WiFi."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Some Raspberry Pis can't connect to Wifi natively, and some Raspberry Pis can only connect to 2.4GHz connections. See table below: ",(0,n.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/884032/105118696-e945dd00-5a9c-11eb-91f5-0cc77cdc1422.png"},(0,n.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/884032/105118696-e945dd00-5a9c-11eb-91f5-0cc77cdc1422.png",alt:"Rpi and wifi"})),(0,n.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/884032/105118696-e945dd00-5a9c-11eb-91f5-0cc77cdc1422.png"})),(0,n.kt)("li",{parentName:"ul"},"If your network hidden? You will need to check ",(0,n.kt)("inlineCode",{parentName:"li"},"hidden SSID")," in the configuration in the Raspberry Pi imager. To fix this, you'll need to restart the image installation from the Raspberry Pi Imager."),(0,n.kt)("li",{parentName:"ul"},"Try power-cycling the Raspberry Pi (unplug and plug back in)."),(0,n.kt)("li",{parentName:"ul"},"If you are on a restrictive WiFi network (like at a university), and wish to avoid the network, ",(0,n.kt)("a",{parentName:"li",href:"/user-guide/local-access-point"},"creating a local access point")," may be a better option."),(0,n.kt)("li",{parentName:"ul"},"You may have mis-typed your WiFi credentials. To fix this, you'll need to restart the image installation from the Raspberry Pi Imager."),(0,n.kt)("li",{parentName:"ul"},"If connecting to a 5GHz WiFi connection, you ",(0,n.kt)("em",{parentName:"li"},"need")," to supply a valid country code. See the list here: ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",title:"Link to country codes on wikipedia"},"https://en.wikipedia.org/wiki/ISO","_","3166-1","_","alpha-2/")),(0,n.kt)("li",{parentName:"ul"},"Check out some other possibilities ",(0,n.kt)("a",{parentName:"li",href:"https://community.octoprint.org/t/wifi-setup-and-troubleshooting/184#heading--troubleshooting"},"here"),".")),(0,n.kt)("h4",{id:"i-want-to-change-the-pioreactor-name-on-installation-of-leader"},"I want to change the Pioreactor name on installation of leader"),(0,n.kt)("p",null,"Easiest solution is to start over: reflashing the OS onto the microSD card will remove all previous data, and you can try again."),(0,n.kt)("h4",{id:"pioreactorlocal-in-a-web-browser-is-not-showing-up"},"pioreactor.local in a web browser is not showing up"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In your browser's address bar, add the ",(0,n.kt)("inlineCode",{parentName:"li"},"http://")," in front of the url, like so: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://pioreactor.local"),"."),(0,n.kt)("li",{parentName:"ul"},"Try appending a backslash as well: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://pioreactor.local/")),(0,n.kt)("li",{parentName:"ul"},"The UI is hosted on ",(0,n.kt)("strong",{parentName:"li"},"http"),", not ",(0,n.kt)("strong",{parentName:"li"},"http",(0,n.kt)("em",{parentName:"strong"},"s")),". Check if you are accessing ",(0,n.kt)("inlineCode",{parentName:"li"},"http")," ",(0,n.kt)("inlineCode",{parentName:"li"},"://pioreactor.local"),", and ",(0,n.kt)("em",{parentName:"li"},"not")," ",(0,n.kt)("inlineCode",{parentName:"li"},"https")," ",(0,n.kt)("inlineCode",{parentName:"li"},"://pioreactor.local"),"."),(0,n.kt)("li",{parentName:"ul"},"Try accessing using the url ",(0,n.kt)("inlineCode",{parentName:"li"},"http://<the permanent name of your Pioreactor aka hostname>.local")),(0,n.kt)("li",{parentName:"ul"},"If you know your Raspberry Pi's IP, try ",(0,n.kt)("inlineCode",{parentName:"li"},"http://<IP address of your Raspberry Pi>")),(0,n.kt)("li",{parentName:"ul"},"When pressing the button on the HAT, does the blue LED show up? If not, installation may have failed. Try installing the image again, and double check the settings."),(0,n.kt)("li",{parentName:"ul"},"Try power-cycling the Raspberry Pi (unplug and plug back in)."),(0,n.kt)("li",{parentName:"ul"},'In your Raspberry Pi Imager settings, confirm that you clicked "Set username and password", and used the username ',(0,n.kt)("inlineCode",{parentName:"li"},"pioreactor"),". If not, try ",(0,n.kt)("a",{parentName:"li",href:"/user-guide/software-set-up#setting-up-your-raspberry-pi"},"reinstalling the image"),"."),(0,n.kt)("li",{parentName:"ul"},"Are you on an older Windows machine? You may need to install a DNS ",(0,n.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/bonjour-zeroconf-networking-for-windows-and-linux/overview#microsoft-windows-914263-8"},"service"),", but also see workarounds ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OutsourcedGuru/octoprint-name-resolution-hacks"},"here"),".")))}u.isMDXComponent=!0},95266:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add_new_pioreactor-38709bbd1bb23002d92e8c4dd50515ed.png"},67818:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add_new_pioreactor_modal-d341626eb43818acfcaa7acba85427c0.png"},50318:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/choose-os-abf2668d559dcc309544c4d86ad7a35a.png"},54142:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/choose-storage-f861f9f329493b78b6bfa221f4990f48.png"},89935:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/place-micro-sd-card-77d8eb409d37006ac7742f9ec021307a.JPG"},20702:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rpi-click-settings-3d855eff8d3fa206b5dd7f5a271a898e.png"},18808:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/use_custom_image-33932c04d19243c39bb50742de143726.png"}}]);