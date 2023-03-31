"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[4469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>g});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||a;return r?i.createElement(m,o(o({ref:t},h),{},{components:r})):i.createElement(m,o({ref:t},h))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32969:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(67294);function n(e){let{children:t,color:r}=e;return i.createElement("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},97214:(e,t,r)=>{r.d(t,{$C:()=>l,$y:()=>s,Ce:()=>a,Q6:()=>n,ek:()=>o,iN:()=>i});const i="rgb(35, 67, 232)",n="rgb(170, 10, 60)",a="rgb(220, 84, 183)",o="rgb(19, 173, 102)",s="rgb(255, 144, 36)",l="rgb(0,139,139)"},84300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var i=r(87462),n=(r(67294),r(3905)),a=r(32969),o=r(97214);const s={title:"Stirring",slug:"/troubleshooting-stirring"},l=void 0,p={unversionedId:"Troubleshooting/Stirring troubleshooting",id:"Troubleshooting/Stirring troubleshooting",title:"Stirring",description:'UI is reporting "Stirring RPM is 0"',source:"@site/user-guide/50-Troubleshooting/Stirring troubleshooting.md",sourceDirName:"50-Troubleshooting",slug:"/troubleshooting-stirring",permalink:"/user-guide/troubleshooting-stirring",draft:!1,tags:[],version:"current",frontMatter:{title:"Stirring",slug:"/troubleshooting-stirring"},sidebar:"tutorialSidebar",previous:{title:"Writing Pioreactor scripts with Python",permalink:"/user-guide/intro-python-scripting"},next:{title:"User interface",permalink:"/user-guide/troubleshooting-ui"}},h={},c=[{value:"UI is reporting &quot;Stirring RPM is 0&quot;",id:"ui-is-reporting-stirring-rpm-is-0",level:3},{value:"The magnets rub against the plastic screws above them, causing the stirring performance to be degraded / stop.",id:"the-magnets-rub-against-the-plastic-screws-above-them-causing-the-stirring-performance-to-be-degraded--stop",level:3},{value:"Stir bar is not spinning",id:"stir-bar-is-not-spinning",level:3},{value:"Stirring is not able to keep a steady RPM",id:"stirring-is-not-able-to-keep-a-steady-rpm",level:3},{value:"My stir bar keeps skipping. How can I reduce that?",id:"my-stir-bar-keeps-skipping-how-can-i-reduce-that",level:3},{value:"Raspberry Pi shuts off or restarts when stirring is turned on from the UI",id:"raspberry-pi-shuts-off-or-restarts-when-stirring-is-turned-on-from-the-ui",level:3}],u={toc:c};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"ui-is-reporting-stirring-rpm-is-0"},'UI is reporting "Stirring RPM is 0"'),(0,n.kt)("p",null,"First, with the stirring activity running, carefully examine if the fan below is spinning."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If it's not spinning,",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Check to confirm that the power cord is in the right PMW channel. You can find the right PWM channel to use in the config.ini, under ",(0,n.kt)("inlineCode",{parentName:"li"},"[PWM]")," (also check that it is not ",(0,n.kt)("a",{parentName:"li",href:"https://docs.pioreactor.com/user-guide/configuration#how-configuration-works-across-pioreactors"},"overwritten in the unit specific config.ini"),")"),(0,n.kt)("li",{parentName:"ul"},"Is the fan starting to spin momentarily, but then stopping? You may need to increase the target RPM in the UI. The lower limit of RPM is around 125. Target RPMs below 125 have a tendency to stall."),(0,n.kt)("li",{parentName:"ul"},"Visually inspect the fan. Is it touching the ",(0,n.kt)(a.Z,{color:o.Ce,mdxType:"Highlight"},"screws above it (see image below)"),"? Can you spin freely if you spin it with a pen or pencil?"),(0,n.kt)("li",{parentName:"ul"},"The fan may be damaged. Contact us at ",(0,n.kt)("a",{parentName:"li",href:"mailto:support@pioreactor.com"},"support@pioreactor.com")))),(0,n.kt)("li",{parentName:"ul"},"If it is spinning:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Most likely the fan is a bit too far away from the sensors on the PCB above it.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"There should be no visible metal from the screw at the ",(0,n.kt)(a.Z,{color:o.iN,mdxType:"Highlight"},"interface between the vial holder and the top faceplate's arms"),". See image below."),(0,n.kt)("li",{parentName:"ul"},"Try pushing the fan only slightly higher up using a pen, pencil or thin rod. Avoid moving the fan ",(0,n.kt)("em",{parentName:"li"},"too")," high up and hitting the ",(0,n.kt)(a.Z,{color:o.Ce,mdxType:"Highlight"},"vial holder's screws"),"."),(0,n.kt)("li",{parentName:"ul"},"Try ",(0,n.kt)("em",{parentName:"li"},"moderately")," tightening the screws on the bottom of the top faceplate."))),(0,n.kt)("li",{parentName:"ul"},"Unscrew the top faceplate from the vial holder. Are the two magnets still present on the fan?"),(0,n.kt)("li",{parentName:"ul"},"The heater PCB may be damaged. Contact us at ",(0,n.kt)("a",{parentName:"li",href:"mailto:support@pioreactor.com"},"support@pioreactor.com"))))),(0,n.kt)("img",{src:"/img/user-guide/hardware-assembly/vial_holder_alignment.jpg",width:"465",style:{margin:"auto",display:"block"}}),(0,n.kt)("h3",{id:"the-magnets-rub-against-the-plastic-screws-above-them-causing-the-stirring-performance-to-be-degraded--stop"},"The magnets rub against the plastic screws above them, causing the stirring performance to be degraded / stop."),(0,n.kt)("p",null,"Dis-attach the top faceplate. Under the faceplate, slightly unscrew each of the four metal screws. This will add more space between the magnets and the plastic screws."),(0,n.kt)("h3",{id:"stir-bar-is-not-spinning"},"Stir bar is not spinning"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check that the vial is pushed down all the way."),(0,n.kt)("li",{parentName:"ol"},"Try moving the fan closer to the vial holder by ",(0,n.kt)("em",{parentName:"li"},"moderately")," tightening the screws on the bottom of the top faceplate."),(0,n.kt)("li",{parentName:"ol"},"The liquid in the vial may be too viscous for the mixing to work.")),(0,n.kt)("h3",{id:"stirring-is-not-able-to-keep-a-steady-rpm"},"Stirring is not able to keep a steady RPM"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Try decreasing the value of ",(0,n.kt)("inlineCode",{parentName:"li"},"Kp")," in the section ",(0,n.kt)("inlineCode",{parentName:"li"},"stirring.pid")," in the config.ini by 50%."),(0,n.kt)("li",{parentName:"ol"},"Are you trying to target a very low RPM? The lower limit of RPM is around 125. Target RPMs below 125 have a tendency to stall."),(0,n.kt)("li",{parentName:"ol"},"Try performing a ",(0,n.kt)("a",{parentName:"li",href:"/user-guide/hardware-calibrations#stirring-calibration-optional"},"stirring calibration"),".")),(0,n.kt)("h3",{id:"my-stir-bar-keeps-skipping-how-can-i-reduce-that"},"My stir bar keeps skipping. How can I reduce that?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Try reducing your target RPM."),(0,n.kt)("li",{parentName:"ol"},"Check if the vial is pushed all the way down."),(0,n.kt)("li",{parentName:"ol"},"Check that no metal from the screws is showing => the vial is straight vertically.")),(0,n.kt)("h3",{id:"raspberry-pi-shuts-off-or-restarts-when-stirring-is-turned-on-from-the-ui"},"Raspberry Pi shuts off or restarts when stirring is turned on from the UI"),(0,n.kt)("p",null,"Likely this is caused by a short in the fan's cable assembly. Remove the fan's power cable, and remove the plastic housing by applying pressure on the exposed metal tabs and gently pulling the wires out. Examine for any stray wire strands."))}g.isMDXComponent=!0}}]);