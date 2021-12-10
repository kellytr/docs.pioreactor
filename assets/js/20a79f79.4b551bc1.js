"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[786],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7402:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={},c="Hardware calibrations",s={unversionedId:"Hardware calibrations",id:"Hardware calibrations",title:"Hardware calibrations",description:"Hardware calibrations serve as a method to get accurate performance from your Pioreactor.",source:"@site/user_guide/08-Hardware calibrations.md",sourceDirName:".",slug:"/Hardware calibrations",permalink:"/user_guide/Hardware calibrations",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using community-built plugins",permalink:"/user_guide/Using community-built plugins"},next:{title:"Creating a Pioreactor cluster",permalink:"/user_guide/Creating a Pioreactor cluster"}},p=[{value:"Stirring calibration (optional)",id:"stirring-calibration-optional",children:[],level:3},{value:"Pump calibration",id:"pump-calibration",children:[],level:3}],m={toc:p};function d(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hardware-calibrations"},"Hardware calibrations"),(0,i.kt)("p",null,"Hardware calibrations serve as a method to get accurate performance from your Pioreactor."),(0,i.kt)("h3",{id:"stirring-calibration-optional"},"Stirring calibration (optional)"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You'll need the following:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Pioreactor HAT"),(0,i.kt)("li",{parentName:"ol"},"Pioreactor sleeve"),(0,i.kt)("li",{parentName:"ol"},"Vial and stirbar")))),(0,i.kt)("p",null,'Internally, the Pioreactor will vary the amount of voltage to apply to the stirring motor to reach the desired RPM, however, this can take a few minutes. We can significantly improve this by asking the Pioreactor to create a "map" between voltage and RPM beforehand. Then the Pioreactor only needs to perform a lookup in the map to hit the desired RPM.'),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is optional, but can really help stirring performance. Creating a stirring calibration is also very easy, so we recommend it."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start by filling a Pioreactor vial about 3/4th with water, and place the stirbar inside. Close with lid. Place into the Pioreactor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the web interface, in ",(0,i.kt)("em",{parentName:"p"},"Pioreactors"),", find the Pioreactor you wish to calibrate. Click ",(0,i.kt)("em",{parentName:"p"},"Calibrate"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"calibrate in interface",src:a(8229).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("em",{parentName:"li"},"stirring"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"calibrate in interface",src:a(5505).Z})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("em",{parentName:"li"},"Start"),". The Pioreactor will increment the voltage applied to the motor, and record the RPM. After it's done, it will collect this data into a calibration curve, and store it locally.")),(0,i.kt)("p",null,"You're done! Your stirring RPM should be much more responsive now!"),(0,i.kt)("h3",{id:"pump-calibration"},"Pump calibration"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You'll need the following:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Pioreactor HAT"),(0,i.kt)("li",{parentName:"ol"},"Pump, with power connection to Pioreactor's PWM outputs"),(0,i.kt)("li",{parentName:"ol"},"An accurate scale, or accurate graduated cylinder"),(0,i.kt)("li",{parentName:"ol"},"Container of water")))),(0,i.kt)("p",null,"Calibrating a pump, like a low-volume peristaltic pump, is very important to accurately dispense or remove a target volume. There is no liquid feedback loop in the Pioreactor (unlike in the stirring & RPM relationship), so this calibration curve is important."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There currently is no web interface for this calibration, and must be done on the command line. Maybe in a future release!"))),(0,i.kt)("p",null,"From the command line, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pio run pump_calibration"),". You'll be shown a command-line application that will guide your through the pump calibration."))}d.isMDXComponent=!0},8229:function(e,t,a){t.Z=a.p+"assets/images/calibrate-1f5b2368c227db631fea83273b1098b1.png"},5505:function(e,t,a){t.Z=a.p+"assets/images/calibrate_stirring-6109be316ccc19d7d0821f25e15ee76a.png"}}]);