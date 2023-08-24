"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[4583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?i.createElement(f,a(a({ref:t},h),{},{components:n})):i.createElement(f,a({ref:t},h))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={title:"Running a self-test",slug:"/running-self-test"},a=void 0,s={unversionedId:"Experiment basics/running-self-test",id:"Experiment basics/running-self-test",title:"Running a self-test",description:"To get the best results and confirm your Pioreactor is working as expected, it's advisable to run a self-test on your Pioreactor after setting it up initially. The self-test routine can catch common errors that may compromise your data collection.",source:"@site/user-guide/02-Experiment basics/11-running-self-test.md",sourceDirName:"02-Experiment basics",slug:"/running-self-test",permalink:"/user-guide/running-self-test",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Running a self-test",slug:"/running-self-test"},sidebar:"tutorialSidebar",previous:{title:"Dosing and LED updates",permalink:"/user-guide/manual-dosing-leds"},next:{title:"Creating a Pioreactor cluster",permalink:"/user-guide/create-cluster"}},l={},c=[{value:"How to run the self-test routine",id:"how-to-run-the-self-test-routine",level:3},{value:"Explanation of each test",id:"explanation-of-each-test",level:3}],h={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To get the best results and confirm your Pioreactor is working as expected, it's advisable to run a self-test on your Pioreactor after setting it up initially. The self-test routine can catch common errors that may compromise your data collection."),(0,o.kt)("h3",{id:"how-to-run-the-self-test-routine"},"How to run the self-test routine"),(0,o.kt)("p",null,"Start on the ",(0,o.kt)("em",{parentName:"p"},"Pioreactors")," page: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(29569).Z,width:"2966",height:"1530"}),"\n",(0,o.kt)("img",{src:n(80492).Z,width:"2966",height:"1530"})),(0,o.kt)("p",null,'Insert a closed vial with water and stir bar into the Pioreactor, and click "Start". The Pioreactor will start running tests against expected output and report back to you success and failures of those tests.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(18170).Z,width:"2966",height:"1530"})),(0,o.kt)("p",null,"Depending on the results of each test, you'll see success and failures:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(17004).Z,width:"2656",height:"1362"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The self-test routine is optional. Even with test failures, the Pioreactor is still operational (perhaps not where the test failed though!). We highly recommend a self-test at least after your initial setup. ")),(0,o.kt)("h3",{id:"explanation-of-each-test"},"Explanation of each test"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pioreactor HAT is detected")," checks if the Pioreactor HAT is correctly placed on top of the Raspberry Pi. A non-trivial failure here suggests a problem connection between the HAT and the RPi, a failure with the i2c channel, or a failure with the RP2040 chip on the HAT."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Photodiodes are responsive to IR LED")," checks to ensure that the IR photodiode(s) have a linear relationship with the IR LED's output. The linear relationship is important. Common reasons why this test fails include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The IR LED connected to the the wrong LED output. Make sure that the IR LED is identified correctly in the config.ini"),(0,o.kt)("li",{parentName:"ul"},"A loose (or absent) connection to the Pioreactor HAT, either in the photodiode(s) or the IR LED.")),(0,o.kt)("p",null,"The test will also report any valid IR LED & photodiode relationships in the dialog box. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"IR \u21dd REF")," means that the REF photodiode has a linear relationship with the IR LED. Similarly, ",(0,o.kt)("inlineCode",{parentName:"p"},"IR \u21dd 45")," means the the photodiode in the 45\xb0 pocket has a linear relationship with the IR LED. The absent of a relationship here can tell you about what might be wrong."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"No ambient IR light detected")," checks that the photodiodes are detecting a near-0 signal when the IR LED is completely off. This test may fail if a powerful IR signal is shining into or onto the Pioreactor's body (aka the Sun - don't put the Pioreactor in direct sunlight and avoid windows). Also make sure that the caps are on all the Pioreactor's LED pockets."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference photodiode is the correct magnitude")," checks, if using the reference photodiode (REF), that the REF signal is less than 0.256 volts when the IR LED is at the level specified in the config.ini's ",(0,o.kt)("inlineCode",{parentName:"p"},"[od_config].[ir_led_intensity]")," section. If this test fails,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"confirm that in your config.ini that ",(0,o.kt)("inlineCode",{parentName:"li"},"REF")," is present for one of the channels under ",(0,o.kt)("inlineCode",{parentName:"li"},"[od_config.photodiode_channel]")),(0,o.kt)("li",{parentName:"ul"},"check the positioning of the REF photodiode (should be adjacent the the IR LED, snugly inserted, and with a cap)."),(0,o.kt)("li",{parentName:"ul"},"If still failing, try reducing the value in ",(0,o.kt)("inlineCode",{parentName:"li"},"[od_config].[ir_led_intensity]"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference photodiode is in the correct position")," checks, if using the reference photodiode (REF), that the REF cable is inserted into the correct photodiode position (channel 1 or 2). The correct position is provided in the config.ini's ",(0,o.kt)("inlineCode",{parentName:"p"},"[od_config.photodiode_channel]")," section. ",(0,o.kt)("strong",{parentName:"p"},"Note: this is a flakey test, and can fail even when position correctly"),". The test compares the variances of the two signals (from photodiode channels 1 and 2), and the lower variance one is usually the REF.  If this test fails,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Is your vial in the Pioreactor? Does your vial have water and a stirbar in it?"),(0,o.kt)("li",{parentName:"ul"},"Confirm that in your config.ini that ",(0,o.kt)("inlineCode",{parentName:"li"},"REF")," is present for one of the channels under ",(0,o.kt)("inlineCode",{parentName:"li"},"[od_config.photodiode_channel]"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Photodiode measures near nil signal for aturbid water")," checks that a non turbid liquid, like water, doesn't produce a signal (since there is no scatter). If this fails, confirm that your vial contains water (or any very clear liquid) and that your signal photodiode is positioned in 45\xb0, 90\xb0, or 135\xb0."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Heating PCB is detected")," checks that the heating PCB is correctly attached to the Pioreactor HAT. A non-trivial failure here suggests a problem when the i2c channel, a loose connection, or damage to the heating PCB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Heating is responsive")," checks for a linear relationship between the temperature sensor and the PWM heating system."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Stirring RPM is responsive")," checks for a linear relationship between PWM stirring system and the Hall sensor that measure's RPM. If this fails, check that the stirring power is connected correctly (and in the location specified in config.ini's ",(0,o.kt)("inlineCode",{parentName:"p"},"[PWM]")," section). Another reason for failure is that the magnets are too far away from the base of the vial. See ",(0,o.kt)("a",{parentName:"p",href:"/user-guide/troubleshooting-stirring"},"stirring troubleshooting"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"AUX power supply is appropriate value")," checks that the AUX power voltage is between 0V and 18V. If no AUX power is connected to the Pioreactor, the default voltage is 5V."))}u.isMDXComponent=!0},29569:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pioreactors_page_self_test-4e30b063187118d7aeba696ee2573de0.png"},80492:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/self_test_pre-deb40b86a47cef652bf26681acaad41f.png"},17004:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/self_test_results-1d0b585ef408fdb300664775b14c34b7.png"},18170:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/self_test_running-23c15b459ae252d1731eb66ad06b33d4.png"}}]);