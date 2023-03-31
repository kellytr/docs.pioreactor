"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"User interface",slug:"/troubleshooting-ui"},a=void 0,l={unversionedId:"Troubleshooting/UI troubleshooting",id:"Troubleshooting/UI troubleshooting",title:"User interface",description:"I'm not able to access http://pioreactor.local",source:"@site/user-guide/50-Troubleshooting/UI troubleshooting.md",sourceDirName:"50-Troubleshooting",slug:"/troubleshooting-ui",permalink:"/user-guide/troubleshooting-ui",draft:!1,tags:[],version:"current",frontMatter:{title:"User interface",slug:"/troubleshooting-ui"},sidebar:"tutorialSidebar",previous:{title:"Stirring",permalink:"/user-guide/troubleshooting-stirring"},next:{title:"Common questions",permalink:"/user-guide/common-questions"}},s={},c=[{value:"I&#39;m not able to access <code>http://pioreactor.local</code>",id:"im-not-able-to-access-httppioreactorlocal",level:4},{value:"When I click an action in the UI, I don&#39;t see any response. Or it just spins and does nothing.",id:"when-i-click-an-action-in-the-ui-i-dont-see-any-response-or-it-just-spins-and-does-nothing",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"im-not-able-to-access-httppioreactorlocal"},"I'm not able to access ",(0,o.kt)("inlineCode",{parentName:"h4"},"http://pioreactor.local")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In your browser's address bar, add the ",(0,o.kt)("inlineCode",{parentName:"li"},"http://")," infront of the url, like so: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://pioreactor.local"),"."),(0,o.kt)("li",{parentName:"ul"},"The UI is hosted on ",(0,o.kt)("strong",{parentName:"li"},"http"),", not ",(0,o.kt)("strong",{parentName:"li"},"http",(0,o.kt)("em",{parentName:"strong"},"s")),". Check if you are accessing ",(0,o.kt)("inlineCode",{parentName:"li"},"http")," ",(0,o.kt)("inlineCode",{parentName:"li"},"://pioreactor.local"),", and ",(0,o.kt)("em",{parentName:"li"},"not")," ",(0,o.kt)("inlineCode",{parentName:"li"},"https")," ",(0,o.kt)("inlineCode",{parentName:"li"},"://pioreactor.local"),"."),(0,o.kt)("li",{parentName:"ul"},"Try accessing using the url ",(0,o.kt)("inlineCode",{parentName:"li"},"http://<the permanent name of your Pioreactor aka hostname>.local")),(0,o.kt)("li",{parentName:"ul"},"If you know your Raspberry Pi's IP, try ",(0,o.kt)("inlineCode",{parentName:"li"},"http://<IP address of your Raspberry Pi>")),(0,o.kt)("li",{parentName:"ul"},"When pressing the button on the HAT, does the blue LED show up? If not, installation may have failed. Try installing the image again, and double check the settings."),(0,o.kt)("li",{parentName:"ul"},'In your Raspberry Pi Imager settings, confirm that you clicked "Set username and password", and used the username ',(0,o.kt)("inlineCode",{parentName:"li"},"pioreactor"),". If not, try ",(0,o.kt)("a",{parentName:"li",href:"/user-guide/software-set-up#setting-up-your-raspberry-pi"},"reinstalling the image"),"."),(0,o.kt)("li",{parentName:"ul"},"Are you on an older Windows machine? You may need to install a DNS ",(0,o.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/bonjour-zeroconf-networking-for-windows-and-linux/overview#microsoft-windows-914263-8"},"service"),", but also see workarounds ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OutsourcedGuru/octoprint-name-resolution-hacks"},"here"),".")),(0,o.kt)("p",null,"Also, see question below."),(0,o.kt)("h4",{id:"when-i-click-an-action-in-the-ui-i-dont-see-any-response-or-it-just-spins-and-does-nothing"},"When I click an action in the UI, I don't see any response. Or it just spins and does nothing."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Is there a green icon in the top-left of the Pioreactor card? If not, or it's grey, either the Pioreactor is powered off, or the ",(0,o.kt)("inlineCode",{parentName:"li"},"monitor")," job is not running. Try power-cycling the Pioreactor."),(0,o.kt)("li",{parentName:"ul"},"It's possible that the current experiment has changed - try refreshing the page."),(0,o.kt)("li",{parentName:"ul"},"If you had trouble accessing the UI (see question above), in your config.ini, change the ",(0,o.kt)("inlineCode",{parentName:"li"},"leader_address")," field to whatever worked above, an IP for example."),(0,o.kt)("li",{parentName:"ul"},"Possibly the web server is off. Try logging into your leader and typing ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo systemctl status lighttpd.service"))))}p.isMDXComponent=!0}}]);