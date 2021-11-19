"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[401],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8738:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="Setting up remote access to the web interface",p={unversionedId:"Advanced/Setting up remote access to the web interface",id:"Advanced/Setting up remote access to the web interface",isDocsHomePage:!1,title:"Setting up remote access to the web interface",description:"If you would like to expose the web interface to view over the internet (no authentication is provided however), you can use a service like Ngrok to do so.",source:"@site/user_guide/30-Advanced/02-Setting up remote access to the web interface.md",sourceDirName:"30-Advanced",slug:"/Advanced/Setting up remote access to the web interface",permalink:"/user_guide/Advanced/Setting up remote access to the web interface",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command line interface",permalink:"/user_guide/Advanced/Command line interface"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-remote-access-to-the-web-interface"},"Setting up remote access to the web interface"),(0,a.kt)("p",null,"If you would like to expose the web interface to view over the internet (no authentication is provided however), you can use a service like ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"Ngrok")," to do so."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This exposes your web interface and RaspberryPi over the internet. You should at the very least have a strong password on your RaspberryPi, and also install a software like ",(0,a.kt)("a",{parentName:"p",href:"https://pimylifeup.com/raspberry-pi-fail2ban/"},"fail2ban")," to restrict malicious SSH attempts. "))),(0,a.kt)("p",null,"The following are the steps to take:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sign up for ",(0,a.kt)("a",{parentName:"li",href:"https://ngrok.com/"},"Ngrok")," - the free plan is all we need."),(0,a.kt)("li",{parentName:"ol"},"Download app onto the RaspberryPi: ",(0,a.kt)("inlineCode",{parentName:"li"},"wget -o ngrok.zip https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip")),(0,a.kt)("li",{parentName:"ol"},"Unzip ",(0,a.kt)("inlineCode",{parentName:"li"},"unzip ngrok-stable-linux-arm.zip")),(0,a.kt)("li",{parentName:"ol"},"Make a new folder for the program: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo mkdir /opt/ngrok")),(0,a.kt)("li",{parentName:"ol"},"Move ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok")," file there: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo mv ngrok /opt/ngrok")),(0,a.kt)("li",{parentName:"ol"},"Make a config folder: ",(0,a.kt)("inlineCode",{parentName:"li"},"mkdir ~/.ngrok2")),(0,a.kt)("li",{parentName:"ol"},"Fill in the following: ",(0,a.kt)("inlineCode",{parentName:"li"},"nano ~/.ngrok2/ngrok.yml"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"authtoken: <add your ngrok auth token here>\ntunnels:\n  ui:\n    proto: http\n    addr: 9000\n    subdomain: <some_name>\n    inspect: false\n    bind_tls: false\n  ws:\n    proto: http\n    addr: 9001\n    subdomain: <some_name>ws\n    inspect: false\n    bind_tls: false\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"(Optional) Along with ",(0,a.kt)("inlineCode",{parentName:"li"},"ui")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ws"),", you can also add SSH access. It's important to have a strong password on the Rpi if doing this.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"ssh:\n  proto: tcp\n  addr: 22\n  inspect: false\n")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Run in background ",(0,a.kt)("inlineCode",{parentName:"li"},"nohup /opt/ngrok/ngrok start ui ws --config ~/.ngrok2/ngrok.yml &"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Alternatively, if you wish to set this up as a service that will launch on start up, the following ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo cp /home/pi/pioreactor/system/systemd/ngrok.service /lib/systemd/system/ && sudo systemctl enable ngrok"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On your ngrok dashboard, under Endpoints -> Status, you'll see two urls. One of the unique urls should link to your Pioreactor dashboard."),(0,a.kt)("li",{parentName:"ol"},"The other url is added to your config.ini (under Configuration in the Pioreactor UI):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[remote]\nws_url=<something>.ngrok.io\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Hit ","[","Save","]","."),(0,a.kt)("li",{parentName:"ol"},"You're all done! You can now access the Pioreactor UI anywhere at ",(0,a.kt)("inlineCode",{parentName:"li"},"http://some_name.ngrok.io"))))}m.isMDXComponent=!0}}]);