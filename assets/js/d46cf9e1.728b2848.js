"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[7849],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1019:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={slug:"/intro-python-scripting"},l="Writing Pioreactor scripts with Python",p={unversionedId:"Advanced/intro-python-scripting",id:"Advanced/intro-python-scripting",title:"Writing Pioreactor scripts with Python",description:"This article isn't intended as a crash course in Python, or Pioreactor software, but some helpful ways to write small scripts for your Pioreactor. If interested in learning more, check out the developer docs for detailed information.",source:"@site/user-guide/30-Advanced/15-intro-python-scripting.md",sourceDirName:"30-Advanced",slug:"/intro-python-scripting",permalink:"/user-guide/intro-python-scripting",tags:[],version:"current",sidebarPosition:15,frontMatter:{slug:"/intro-python-scripting"},sidebar:"tutorialSidebar",previous:{title:"Local access points",permalink:"/user-guide/local-access-point"},next:{title:"Common questions",permalink:"/user-guide/common-questions"}},c=[{value:"1. SSHing into your Raspberry Pi",id:"1-sshing-into-your-raspberry-pi",children:[],level:3},{value:"2. Writing our first script.",id:"2-writing-our-first-script",children:[],level:3},{value:"3. Running our Python script",id:"3-running-our-python-script",children:[],level:3},{value:"4. Extending our script: more jobs, changing RPM, and adding lights.",id:"4-extending-our-script-more-jobs-changing-rpm-and-adding-lights",children:[],level:3},{value:"5. Adding an automation",id:"5-adding-an-automation",children:[],level:3},{value:"Conclusion",id:"conclusion",children:[],level:3}],u={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"writing-pioreactor-scripts-with-python"},"Writing Pioreactor scripts with Python"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This article isn't intended as a crash course in Python, or Pioreactor software, but some helpful ways to write small scripts for your Pioreactor. If interested in learning more, check out the ",(0,o.kt)("a",{parentName:"p",href:"/developer-guide/introduction"},"developer docs")," for detailed information."))),(0,o.kt)("p",null,"For some testing and playing purposes, it's really easy to get started writing scripts to automate parts of your Pioreactor. For this tutorial, you'll need to be able to SSH into your Raspberry Pi."),(0,o.kt)("h3",{id:"1-sshing-into-your-raspberry-pi"},"1. SSHing into your Raspberry Pi"),(0,o.kt)("p",null,"SSHing means to connect to a computer remotely, and interact with its command line. In our case, we wish to interact with the Raspberry Pi remotely. SSH software depends on your operating system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows users"),": install ",(0,o.kt)("a",{parentName:"li",href:"https://www.putty.org/"},"PuTTY"),", or install the ",(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/secure-shell-app/pnhechapfaindjhompbnflcldabbghjo?hl=en"},"Secure Shell App")," for Google Chrome."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"macOS users"),": open up the terminal app: ",(0,o.kt)("inlineCode",{parentName:"li"},"command"),"+",(0,o.kt)("inlineCode",{parentName:"li"},"space"),', search for "terminal".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"linux users"),": y'all don't need my help :)")),(0,o.kt)("p",null,"We need to connect to the Raspberry Pi:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"hostname: your Pioreactor's name (see web interface) also-known-as your Raspberry Pi's ",(0,o.kt)("em",{parentName:"li"},"hostname"),"."),(0,o.kt)("li",{parentName:"ol"},"user: ",(0,o.kt)("inlineCode",{parentName:"li"},"pi")),(0,o.kt)("li",{parentName:"ol"},"password: the one you used when you installed the Pioreactor, by default it's ",(0,o.kt)("inlineCode",{parentName:"li"},"raspberry"),".")),(0,o.kt)("p",null,"One your online, you can have some fun and type ",(0,o.kt)("inlineCode",{parentName:"p"},"pio blink")," to have your Pioreactor blink!"),(0,o.kt)("h3",{id:"2-writing-our-first-script"},"2. Writing our first script."),(0,o.kt)("p",null,"We'll start with something simple: writing a script to turn on the Pioreactor's stirring. To create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"script_test.py")," and edit it on the Raspberry Pi command line, type ",(0,o.kt)("inlineCode",{parentName:"p"},"nano script_test.py"),". You'll be shown an editor. Let's enter the following Python code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import time\nfrom pioreactor.background_jobs.stirring import start_stirring\n\nstirrer = start_stirring(target_rpm=400)\ntime.sleep(10)\n\n")),(0,o.kt)("p",null,"Hit ",(0,o.kt)("inlineCode",{parentName:"p"},"crtl-x"),", and then ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," to save our file."),(0,o.kt)("h3",{id:"3-running-our-python-script"},"3. Running our Python script"),(0,o.kt)("p",null,"To run our script, type ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 script_test.py")," in the command line. If everything works correctly, your Pioreactor's stirring will start, and then finish after 10 seconds. You're a hacker now :)"),(0,o.kt)("p",null,"To make stirring run ",(0,o.kt)("em",{parentName:"p"},"forever"),", let's edit the file again: ",(0,o.kt)("inlineCode",{parentName:"p"},"nano script_test.py"),", and replace ",(0,o.kt)("inlineCode",{parentName:"p"},"time.sleep(10)")," with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{5}","{5}":!0},"import time\nfrom pioreactor.background_jobs.stirring import start_stirring\n\nstirrer = start_stirring(target_rpm=400)\nstirrer.block_until_disconnected()\n")),(0,o.kt)("p",null,"Save the file with ",(0,o.kt)("inlineCode",{parentName:"p"},"crtl-x"),", and then ",(0,o.kt)("inlineCode",{parentName:"p"},"Y"),", and run the script again. Now, the job will run until you log off, or exit the program with ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl-c"),". This is because ",(0,o.kt)("inlineCode",{parentName:"p"},"block_until_disconnected")," will block to program at that line (so keep this at the end of scripts!)"),(0,o.kt)("h3",{id:"4-extending-our-script-more-jobs-changing-rpm-and-adding-lights"},"4. Extending our script: more jobs, changing RPM, and adding lights."),(0,o.kt)("p",null,"Let's add some more to our script. Let's say we also want to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"turn on an LED in channel B,"),(0,o.kt)("li",{parentName:"ol"},"turn on optical density reading (with 45\xb0 photodiode in channel 1 and reference in channel 2)."),(0,o.kt)("li",{parentName:"ol"},"After 10 seconds, slow down the stirring RPM")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{3,4,6,9,11,12}","{3,4,6,9,11,12}":!0},'import time\nfrom pioreactor.background_jobs.stirring import start_stirring\nfrom pioreactor.background_jobs.od_reading import start_od_reading\nfrom pioreactor.actions.led_intensity import led_intensity\n\nled_intensity("B", 50)\n\nstirrer = start_stirring(target_rpm=400)\nod_reader = start_od_reading("45", "REF")\n\ntime.sleep(10)\nstirrer.set_target_rpm(300)\n\nstirrer.block_until_disconnected()\n')),(0,o.kt)("p",null,"You should see data coming into to your experiment overview in the web interface!"),(0,o.kt)("h3",{id:"5-adding-an-automation"},"5. Adding an automation"),(0,o.kt)("p",null,"Next, we'd like to start heating and keep our vial at a constant temperature. Recall that all temperature tasks are actually temperature automations. In this case, we require the ",(0,o.kt)("inlineCode",{parentName:"p"},"pid_stable")," temperature automation, invoked from a temperature controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{5,11}","{5,11}":!0},'import time\nfrom pioreactor.background_jobs.stirring import start_stirring\nfrom pioreactor.background_jobs.od_reading import start_od_reading\nfrom pioreactor.actions.led_intensity import led_intensity\nfrom pioreactor.background_jobs.temperature_control import start_temperature_control\n\nled_intensity("B", 50)\n\nstirrer = start_stirring(target_rpm=400)\nod_reader = start_od_reading("45", "REF")\ntemp_controller = start_temperature_control("pid_stable", target_temperature=32)\n\ntime.sleep(10)\nstirrer.set_target_rpm(300)\n\nstirrer.block_until_disconnected()\n')),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This is just a small example of scripts you can make. If you need to learn more, we suggest checking out the ",(0,o.kt)("a",{parentName:"p",href:"/developer-guide/introduction"},"developer guide"),"."))}d.isMDXComponent=!0}}]);