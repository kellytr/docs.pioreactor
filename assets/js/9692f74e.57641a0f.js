"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[3270],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},36778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Hardware connection assembly",slug:"/hardware-connection-assembly"},i=void 0,c={unversionedId:"Advanced/additional-hardware/hardware-connection-assembly",id:"Advanced/additional-hardware/hardware-connection-assembly",title:"Hardware connection assembly",description:'Normally, the external hardware will have two wires, corresponding to positive and ground. The positive wire may be marked by a dot, or "+" symbol, or be colored red. Make note of this wire.',source:"@site/user-guide/30-Advanced/07-additional-hardware/99-hardware-connection-assembly.md",sourceDirName:"30-Advanced/07-additional-hardware",slug:"/hardware-connection-assembly",permalink:"/user-guide/hardware-connection-assembly",draft:!1,tags:[],version:"current",sidebarPosition:99,frontMatter:{title:"Hardware connection assembly",slug:"/hardware-connection-assembly"},sidebar:"tutorialSidebar",previous:{title:"Pinch valves",permalink:"/user-guide/pinch-valves"},next:{title:"Writing Pioreactor scripts with Python",permalink:"/user-guide/intro-python-scripting"}},s={},l=[],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Normally, the external hardware will have two wires, corresponding to positive and ground. The positive wire may be marked by a dot, or "+" symbol, or be colored red. Make note of this wire.'),(0,o.kt)("p",null,'The PWM outputs on the Pioreactor are 0.100" (2.54mm) pitch connectors, with the positive pin closer to the onboard button (also marked on the edge on the underneath of the HAT circuit board). Simple Dupont female square head fit just fine in them (',(0,o.kt)("a",{parentName:"p",href:"https://www.pcboard.ca/2-pin-dupont-female"},"example"),"). The only problem with using these connectors is that they are not locked in-place, and can slip out of the connection."),(0,o.kt)("p",null,"The nice connectors we use for LEDs, the stirring motor and our pumps are ",(0,o.kt)("a",{parentName:"p",href:"https://www.digikey.ca/en/products/detail/te-connectivity-amp-connectors/487526-1/469847"},"TE Connectivity AMP connectors 487526-1"),". These also require a specific ",(0,o.kt)("a",{parentName:"p",href:"https://www.digikey.ca/en/products/detail/te-connectivity-amp-connectors/1-104479-0/1125892"},"socket connector"),"."))}d.isMDXComponent=!0}}]);