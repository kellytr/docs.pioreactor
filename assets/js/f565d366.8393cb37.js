"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"User interface",slug:"/troubleshooting-ui"},i=void 0,l={unversionedId:"Troubleshooting/UI troubleshooting",id:"Troubleshooting/UI troubleshooting",title:"User interface",description:"I'm not able to access http://pioreactor.local",source:"@site/user-guide/50-Troubleshooting/UI troubleshooting.md",sourceDirName:"50-Troubleshooting",slug:"/troubleshooting-ui",permalink:"/user-guide/troubleshooting-ui",draft:!1,tags:[],version:"current",frontMatter:{title:"User interface",slug:"/troubleshooting-ui"},sidebar:"tutorialSidebar",previous:{title:"Stirring",permalink:"/user-guide/troubleshooting-stirring"},next:{title:"Common questions",permalink:"/user-guide/common-questions"}},s={},c=[{value:"I&#39;m not able to access <code>http://pioreactor.local</code>",id:"im-not-able-to-access-httppioreactorlocal",level:3},{value:"I see &quot;Failed to connect to MQTT. Is configuration for leader_address correct? Currently set to ...&quot; in a pop-up - what can I do?",id:"i-see-failed-to-connect-to-mqtt-is-configuration-for-leader_address-correct-currently-set-to--in-a-pop-up---what-can-i-do",level:3},{value:"When I click an action in the UI, I don&#39;t see any response. Or the button just spins and does nothing.",id:"when-i-click-an-action-in-the-ui-i-dont-see-any-response-or-the-button-just-spins-and-does-nothing",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"im-not-able-to-access-httppioreactorlocal"},"I'm not able to access ",(0,r.kt)("inlineCode",{parentName:"h3"},"http://pioreactor.local")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In your browser's address bar, add the ",(0,r.kt)("inlineCode",{parentName:"li"},"http://")," infront of the url, like so: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://pioreactor.local"),"."),(0,r.kt)("li",{parentName:"ul"},"The UI is hosted on ",(0,r.kt)("strong",{parentName:"li"},"http"),", not ",(0,r.kt)("strong",{parentName:"li"},"http",(0,r.kt)("em",{parentName:"strong"},"s")),". Check if you are accessing ",(0,r.kt)("inlineCode",{parentName:"li"},"http")," ",(0,r.kt)("inlineCode",{parentName:"li"},"://pioreactor.local"),", and ",(0,r.kt)("em",{parentName:"li"},"not")," ",(0,r.kt)("inlineCode",{parentName:"li"},"https")," ",(0,r.kt)("inlineCode",{parentName:"li"},"://pioreactor.local"),"."),(0,r.kt)("li",{parentName:"ul"},"Try accessing using the url ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<the permanent name of your Pioreactor aka hostname>.local")),(0,r.kt)("li",{parentName:"ul"},"If you know your Raspberry Pi's IP, try ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<IP address of your Raspberry Pi>")),(0,r.kt)("li",{parentName:"ul"},"When pressing the button on the HAT, does the blue LED show up? If not, installation may have failed. Try installing the image again, and double check the settings."),(0,r.kt)("li",{parentName:"ul"},'In your Raspberry Pi Imager settings, confirm that you clicked "Set username and password", and used the username ',(0,r.kt)("inlineCode",{parentName:"li"},"pioreactor"),". If not, try ",(0,r.kt)("a",{parentName:"li",href:"/user-guide/software-set-up#setting-up-your-raspberry-pi"},"reinstalling the image"),"."),(0,r.kt)("li",{parentName:"ul"},"Are you on an older Windows machine? You may need to install a DNS ",(0,r.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/bonjour-zeroconf-networking-for-windows-and-linux/overview#microsoft-windows-914263-8"},"service"),", but also see workarounds ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OutsourcedGuru/octoprint-name-resolution-hacks"},"here"),".")),(0,r.kt)("h3",{id:"i-see-failed-to-connect-to-mqtt-is-configuration-for-leader_address-correct-currently-set-to--in-a-pop-up---what-can-i-do"},'I see "Failed to connect to MQTT. Is configuration for leader_address correct? Currently set to ..." in a pop-up - what can I do?'),(0,r.kt)("p",null,"This error occurs because your UI can't connect to an internal system, MQTT, that is used for displaying data and actions. Likely you also weren't able to access the UI with ",(0,r.kt)("inlineCode",{parentName:"p"},"http://pioreactor.local"),", but had to use an IP address as the url."),(0,r.kt)("p",null,"To fix this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Configuration")," page in the side bar."),(0,r.kt)("li",{parentName:"ol"},"Find the ",(0,r.kt)("inlineCode",{parentName:"li"},"[cluster.topology]")," section, and change the ",(0,r.kt)("inlineCode",{parentName:"li"},"leader_address")," configuration to your Pioreactor's IP. Ex:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[cluster.topology]\nleader_hostname=leader\nleader_address=192.168.0.10\n")),(0,r.kt)("p",null,"Your IP may be different than the one above."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Hit ",(0,r.kt)("inlineCode",{parentName:"li"},"Save"),". Wait a minute for the save to confirm."),(0,r.kt)("li",{parentName:"ol"},"Power-cycle the Pioreactor by unplugging the power and plugging back in.")),(0,r.kt)("h3",{id:"when-i-click-an-action-in-the-ui-i-dont-see-any-response-or-the-button-just-spins-and-does-nothing"},"When I click an action in the UI, I don't see any response. Or the button just spins and does nothing."),(0,r.kt)("p",null,"Any of the following could solve your problem:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is there a green icon in the top-left of the Pioreactor card? If not, or it's grey, either the Pioreactor is powered off, or the ",(0,r.kt)("inlineCode",{parentName:"li"},"monitor")," job is not running. If so, ",(0,r.kt)("a",{parentName:"li",href:"/user-guide/common-questions#how-can-i-restart-my-pioreactor-is-pulling-the-power-plug-out-safe"},"try power-cycling the Pioreactor"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Left image is green, right image is grey",src:n(1361).Z,width:"1149",height:"208"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It's possible that the experiment has changed while the page has been left open - try refreshing the page and try again."),(0,r.kt)("li",{parentName:"ul"},"If you had trouble accessing the UI (",(0,r.kt)("a",{parentName:"li",href:"/user-guide/troubleshooting-ui#i-see-failed-to-connect-to-mqtt-is-configuration-for-leader_address-correct-currently-set-to--in-a-pop-up---what-can-i-do"},"see question above"),"), in your config.ini, change the ",(0,r.kt)("inlineCode",{parentName:"li"},"leader_address")," field to whatever worked above, an IP for example."),(0,r.kt)("li",{parentName:"ul"},"Possibly the web server is off. Try logging into your leader and typing ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo systemctl status lighttpd.service")),(0,r.kt)("li",{parentName:"ul"},'Do you also see a "Failed to connect to MQTT. Is configuration for leader_address correct?" error pop-up? If so, ',(0,r.kt)("a",{parentName:"li",href:"/user-guide/troubleshooting-ui#i-see-failed-to-connect-to-mqtt-is-configuration-for-leader_address-correct-currently-set-to--in-a-pop-up---what-can-i-do0"},"see question above"),"."),(0,r.kt)("li",{parentName:"ul"},"Try power-cycling the Pioreactor.")))}d.isMDXComponent=!0},1361:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/monitor_on_off-d10c01bf53580928f4099a9aa383fa8d.png"}}]);