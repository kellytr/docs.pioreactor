"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[1065],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],u={},c="Attaching a peristaltic pump to your Pioreactor",l={unversionedId:"Peristaltic pumps",id:"Peristaltic pumps",title:"Attaching a peristaltic pump to your Pioreactor",description:"You can attach up to three peristaltic pumps to your Pioreactor, typically used for: adding fresh media to the vial, removing effluent from the vial, and adding an alternative media to the vial.",source:"@site/user_guide/08-Peristaltic pumps.md",sourceDirName:".",slug:"/Peristaltic pumps",permalink:"/user_guide/Peristaltic pumps",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using community-built plugins",permalink:"/user_guide/Using community-built plugins"},next:{title:"Hardware calibrations",permalink:"/user_guide/Hardware calibrations"}},p=[{value:"Running the pump",id:"running-the-pump",children:[{value:"Manually from the web interface",id:"manually-from-the-web-interface",children:[],level:3},{value:"Manually from the command line",id:"manually-from-the-command-line",children:[],level:3}],level:2}],s={toc:p};function m(e){var t=e.components,u=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"attaching-a-peristaltic-pump-to-your-pioreactor"},"Attaching a peristaltic pump to your Pioreactor"),(0,i.kt)("p",null,"You can attach up to three peristaltic pumps to your Pioreactor, typically used for: adding fresh media to the vial, removing effluent from the vial, and adding an alternative media to the vial."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Pump calibrations must be run first, see ",(0,i.kt)("a",{parentName:"p",href:"/user_guide/Hardware%20calibrations#pump-calibration"},"section on calibrating a pump")))),(0,i.kt)("p",null,"First decided what you want this pump to do: add media, remove waste, or add alternative media. Pumps that are supplied by us will have a polarized connector that connects to the PWM outputs on the Pioreactor hat. Which PWM you use is determined by your ",(0,i.kt)("inlineCode",{parentName:"p"},"PWM")," settings in config.ini."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7625).Z})),(0,i.kt)("p",null,"In our case, if we were to use the pump as a media pump, we would connect the pump to PWM channel 2."),(0,i.kt)("h2",{id:"running-the-pump"},"Running the pump"),(0,i.kt)("p",null,"Once finished calibrating, you can run your pump manually and programmatically."),(0,i.kt)("h3",{id:"manually-from-the-web-interface"},"Manually from the web interface"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1268).Z}),"\n",(0,i.kt)("img",{src:n(2604).Z}),"\n",(0,i.kt)("img",{src:n(5854).Z})),(0,i.kt)("h3",{id:"manually-from-the-command-line"},"Manually from the command line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pio run add_media --ml 3\n")),(0,i.kt)("p",null,"or, if you wish to run continuously until interrupted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pio run add_media --continuously\n")))}m.isMDXComponent=!0},5854:function(e,t,n){t.Z=n.p+"assets/images/add_media_ui-b6f794f53ea78d05c499306f53c29dc3.png"},2604:function(e,t,n){t.Z=n.p+"assets/images/dosing_ui-0b97aaa62d9b2a8bd977f18e2470eff9.png"},1268:function(e,t,n){t.Z=n.p+"assets/images/manage_ui-7d96f0a854ab6ca4cc52a4c5bf68b51c.png"},7625:function(e,t,n){t.Z=n.p+"assets/images/pwm_config-ac34a1a7ecfe2f7f1d3dec272b6d0295.png"}}]);