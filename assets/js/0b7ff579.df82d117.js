"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[1280],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2359:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={},u="Blue LED flashing & error codes",c={unversionedId:"Advanced/Flashing blue led",id:"Advanced/Flashing blue led",title:"Blue LED flashing & error codes",description:"When a Pioreactor successfully boots, the onboard blue LED will flash for 2 seconds, and then stop. However, there are times when the Pioreactor encounters an error, and will use the LED to alert to you that something is wrong. By counting the number of flashes (per cycle), you can diagnose what might be wrong.",source:"@site/user_guide/30-Advanced/04-Flashing blue led.md",sourceDirName:"30-Advanced",slug:"/Advanced/Flashing blue led",permalink:"/user_guide/Advanced/Flashing blue led",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Supplying external power to the Pioreactor",permalink:"/user_guide/Advanced/Supplying external power"},next:{title:"Using the StemmaQT / Qwiic connector",permalink:"/user_guide/Advanced/Using the StemmaQT Qwiic connector"}},s=[],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blue-led-flashing--error-codes"},"Blue LED flashing & error codes"),(0,o.kt)("p",null,"When a Pioreactor successfully boots, the onboard blue LED will flash for 2 seconds, and then stop. However, there are times when the Pioreactor encounters an error, and will use the LED to alert to you that something is wrong. By counting the number of flashes (per cycle), you can diagnose what might be wrong."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Number of flashes"),(0,o.kt)("th",{parentName:"tr",align:null},"Error"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Can't connect to network (wifi)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"Can't connect to leader")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"SD card is almost full")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"Stirring RPM is 0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},"ADC input is very high")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null},"Heating PCB is above 60 \u2103")))))}d.isMDXComponent=!0}}]);