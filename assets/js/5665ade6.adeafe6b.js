"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[6294],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5434:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],u={title:"Using a peristaltic pump with your Pioreactor",slug:"/using-pumps"},l=void 0,p={unversionedId:"Extending your Pioreactor/using-pumps",id:"Extending your Pioreactor/using-pumps",title:"Using a peristaltic pump with your Pioreactor",description:"Attaching the pump",source:"@site/user-guide/03-Extending your Pioreactor/08-using-pumps.md",sourceDirName:"03-Extending your Pioreactor",slug:"/using-pumps",permalink:"/user-guide/using-pumps",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Using a peristaltic pump with your Pioreactor",slug:"/using-pumps"},sidebar:"tutorialSidebar",previous:{title:"Hardware calibrations",permalink:"/user-guide/hardware-calibrations"},next:{title:"Supplying external power to the Pioreactor's PWM channels",permalink:"/user-guide/external-power"}},c={},s=[{value:"Attaching the pump",id:"attaching-the-pump",level:2},{value:"Running the pump",id:"running-the-pump",level:2},{value:"Manually from the web interface",id:"manually-from-the-web-interface",level:3},{value:"Manually from the command line",id:"manually-from-the-command-line",level:3},{value:"Programmatically in automations",id:"programmatically-in-automations",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],m={toc:s};function d(e){var t=e.components,u=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"attaching-the-pump"},"Attaching the pump"),(0,i.kt)("p",null,"You can attach up to three peristaltic pumps to your Pioreactor, typically used for: adding fresh media to the vial, removing effluent from the vial, and adding an alternative media to the vial."),(0,i.kt)("p",null,"First decided what you want this pump to do: add media, remove waste, or add alternative media. Pumps that are supplied by us will have a polarized connector that connects to the PWM outputs on the Pioreactor hat. Which PWM you use is determined by your ",(0,i.kt)("inlineCode",{parentName:"p"},"PWM")," settings in config.ini."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3653).Z,width:"2646",height:"1340"})),(0,i.kt)("p",null,"In our case, if we were to use the pump as a media pump, we would connect the pump to PWM channel 2."),(0,i.kt)("h2",{id:"running-the-pump"},"Running the pump"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Pump calibrations must be run first, see ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/hardware-calibrations#pump-calibration"},"section on calibrating a pump")))),(0,i.kt)("p",null,"Once finished calibrating, you can run your pump manually and programmatically."),(0,i.kt)("h3",{id:"manually-from-the-web-interface"},"Manually from the web interface"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(446).Z,width:"2646",height:"1340"}),"\n",(0,i.kt)("img",{src:n(7581).Z,width:"2646",height:"1340"}),"\n",(0,i.kt)("img",{src:n(6194).Z,width:"2646",height:"1340"})),(0,i.kt)("h3",{id:"manually-from-the-command-line"},"Manually from the command line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pio run add_media --ml 3\n")),(0,i.kt)("p",null,"or, if you wish to run continuously until interrupted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pio run add_media --continuously\n")),(0,i.kt)("h3",{id:"programmatically-in-automations"},"Programmatically in automations"),(0,i.kt)("p",null,"Dosing automations are available to run once your pumps are attached and calibrated. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pioreactor.com/user-guide/Automations/Dosing%20Automations"},"Read more about automations"),"."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"})))}d.isMDXComponent=!0},6194:function(e,t,n){t.Z=n.p+"assets/images/add_media_ui-b6f794f53ea78d05c499306f53c29dc3.png"},7581:function(e,t,n){t.Z=n.p+"assets/images/dosing_ui-0b97aaa62d9b2a8bd977f18e2470eff9.png"},446:function(e,t,n){t.Z=n.p+"assets/images/manage_ui-7d96f0a854ab6ca4cc52a4c5bf68b51c.png"},3653:function(e,t,n){t.Z=n.p+"assets/images/pwm_config-ac34a1a7ecfe2f7f1d3dec272b6d0295.png"}}]);