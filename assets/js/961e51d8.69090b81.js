"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[8618],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2852:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={},l="Introduction to background jobs",p={unversionedId:"Background Jobs/How background jobs work",id:"Background Jobs/How background jobs work",isDocsHomePage:!1,title:"Introduction to background jobs",description:'The core unit of "work" in the Pioreactor software is a background job (called activities in the web interface). Background jobs include odreading, monitor, automation controllers, all the automations_ themselves, etc. Often, a community plugin is a background job (or multiple jobs) that gives your bioreactor new abilities. There are a few core feature of a background job to be highlighted if you intend on working with them.',source:"@site/developer_guide/02-Background Jobs/01-How background jobs work.md",sourceDirName:"02-Background Jobs",slug:"/Background Jobs/How background jobs work",permalink:"/developer_guide/Background Jobs/How background jobs work",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Some important details first",permalink:"/developer_guide/important-concepts"},next:{title:"Writing a custom background job",permalink:"/developer_guide/Background Jobs/Writing a custom background job"}},d=[{value:"Inheritance",id:"inheritance",children:[],level:3},{value:"State of a job",id:"state-of-a-job",children:[],level:3},{value:"Publish &amp; subscribe, also known as pub/sub",id:"publish--subscribe-also-known-as-pubsub",children:[],level:3},{value:"Publishing attributes to MQTT",id:"publishing-attributes-to-mqtt",children:[],level:3},{value:"Uniqueness",id:"uniqueness",children:[],level:3},{value:"Entry and exit",id:"entry-and-exit",children:[],level:3}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-background-jobs"},"Introduction to background jobs"),(0,i.kt)("p",null,'The core unit of "work" in the Pioreactor software is a background job (called ',(0,i.kt)("em",{parentName:"p"},"activities")," in the web interface). Background jobs include ",(0,i.kt)("inlineCode",{parentName:"p"},"od_reading"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"monitor"),", automation controllers, all the ",(0,i.kt)("em",{parentName:"p"},"automations")," themselves, etc. Often, a community plugin is a background job (or multiple jobs) that gives your bioreactor new abilities. There are a few core feature of a background job to be highlighted if you intend on working with them."),(0,i.kt)("h3",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,"All background jobs inherit from the base class ",(0,i.kt)("inlineCode",{parentName:"p"},"pioreactor.background_jobs.base.BackgroundJob"),". This class controls most of the behind-the-scenes behaviour of the class, including the following features:"),(0,i.kt)("h3",{id:"state-of-a-job"},"State of a job"),(0,i.kt)("p",null,"A background job can be in one of five different states:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"init"),": the job is initializing. The job starts in this state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ready"),': the job is prepared to do "work", or currently doing "work"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sleeping"),": the job's work is paused (ex: when the stirring job is in state ",(0,i.kt)("inlineCode",{parentName:"li"},"sleeping"),', it turns off its PWM signal.) This state is called "paused" in the web interface.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disconnected"),": the job has disconnected from services (MQTT, databases, etc.) and cleaned itself up successfully."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lost"),": the job did not disconnect gracefully. Something may be wrong.")),(0,i.kt)("p",null,"Here's how the states can transition to each other:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"                                        \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                                        \u2502          \u2502\n         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba   lost   \u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n         \u2502                      \u2502       \u2502          \u2502        \u2502\n         \u2502                      \u2502       \u2514\u2500\u2500\u2500\u2500\u2500\u25b2\u2500\u2500\u2500\u2500\u2518        \u2502\n         \u2502                      \u2502             \u2502             \u2502\n    \u250c\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2510          \u250c\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u2502     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n    \u2502          \u2502          \u2502            \u2502      \u2502     \u2502              \u2502\n    \u2502   init   \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba    ready   \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u25ba disconnected \u2502\n    \u2502          \u2502          \u2502            \u2502      \u2502     \u2502              \u2502\n    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518          \u2514\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u25b2\u2500\u2500\u2500\u2500\u2518      \u2502     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u25b2\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                               \u2502  \u2502           \u2502            \u2502\n                               \u2502  \u2502           \u2502            \u2502\n                               \u2502  \u2502           \u2502            \u2502\n                          \u250c\u2500\u2500\u2500\u2500\u25bc\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2518            \u2502\n                          \u2502            \u2502                   \u2502\n                          \u2502  sleeping  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                          \u2502            \u2502\n                          \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"The author can optionally define hooks when a job moves between states, and when it enters a new state. For example, the method ",(0,i.kt)("inlineCode",{parentName:"p"},".on_ready_to_sleeping()")," is called when the job moves from ",(0,i.kt)("inlineCode",{parentName:"p"},"ready")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"sleeping"),". Similarly, the method ",(0,i.kt)("inlineCode",{parentName:"p"},".on_sleeping()")," is called when the jobs enters state ",(0,i.kt)("inlineCode",{parentName:"p"},"sleeping"),". By default, these methods are empty."),(0,i.kt)("p",null,"The recommended way to move a job between states is with ",(0,i.kt)("inlineCode",{parentName:"p"},"job.set_state(job.READY)"),". This will invoke any hooks that exist between the states. State can also be changed over MQTT - we'll get to that point later."),(0,i.kt)("h3",{id:"publish--subscribe-also-known-as-pubsub"},"Publish & subscribe, also known as pub/sub"),(0,i.kt)("p",null,"On job creation, the job will connect to MQTT to allow for publishing and subscribing. The attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"sub_client")," is for subscribing from MQTT, and ",(0,i.kt)("inlineCode",{parentName:"p"},"pub_client")," is for publishing to MQTT. Internally, ",(0,i.kt)("inlineCode",{parentName:"p"},"sub_client")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pub_client")," are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse/paho.mqtt.python/blob/master/src/paho/mqtt/client.py"},"Paho client objects"),"."),(0,i.kt)("p",null,"Since publishing is so common, we also expose a ",(0,i.kt)("inlineCode",{parentName:"p"},".publish")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'job = SomeBackgroundJob(unit, experiment)\njob.publish(f"pioreactor/{job.unit}/{job.experiment}/...", payload)\n')),(0,i.kt)("p",null,"Another common pattern is to subscribe to a MQTT topic, and execute a threaded callback whenever a message comes in. This is done with the ",(0,i.kt)("inlineCode",{parentName:"p"},".subscribe_and_callback")," method. By convention, this is most often used in a ",(0,i.kt)("inlineCode",{parentName:"p"},".start_passive_listeners")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pioreactor.background_jobs.base import BackgroundJob\n\nclass SomeBackgroundJob(BackgroundJob):\n\n    def __init__(self, ...):\n        ...\n\n        self.start_passive_listeners()\n\n\n    def response_to_dosing_event(self, msg):\n        # change self in response, etc.\n        ...\n\n    def start_passive_listeners(self):\n        self.subscribe_and_callback(\n            self.response_to_dosing_event,\n            f"pioreactor/{self.unit}/{self.experiment}/dosing_events",\n        )\n\n')),(0,i.kt)("h3",{id:"publishing-attributes-to-mqtt"},"Publishing attributes to MQTT"),(0,i.kt)("p",null,"A common task is when we have a job running, say stirring job, and we want to dynamically update an attribute, like the target RPM, without restarting the job."),(0,i.kt)("p",null,"We also want to know the value of a job's attribute when it changes. For example, in the stirring job, we'd like to know what the ",(0,i.kt)("em",{parentName:"p"},"actual")," RPM is. This can't be edited externally (it's a measured value...), but we want the value available for other jobs to use, for the web interface to display, or to sink it into a database."),(0,i.kt)("p",null,"These two tasks, updating attributes and reading attributes in real-time, are so common that we've wrapped the logic into the parent ",(0,i.kt)("inlineCode",{parentName:"p"},"BackgroundJob")," class, and allow job authors to tell us what they wish to update and/or read."),(0,i.kt)("p",null,"In the class definition, the attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"published_settings")," defines which class attributes they would like to track. For example, the job responsible for stirring looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Stirrer(BackgroundJob):\n\n    published_settings = {\n        "target_rpm":   {"datatype": "json",  "settable": True,  "unit": "RPM"},\n        "measured_rpm": {"datatype": "json",  "settable": False, "unit": "RPM"},\n        "duty_cycle":   {"datatype": "float", "settable": True,  "unit": "%"},\n    }\n\n    ...\n\n')),(0,i.kt)("p",null,"Thus the attributes ",(0,i.kt)("inlineCode",{parentName:"p"},"target_rpm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"measured_rpm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"duty_cycle")," are all published to MQTT when they change, but only ",(0,i.kt)("inlineCode",{parentName:"p"},"duty_cycle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"target_rpm")," are able to be updated over MQTT (as defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"settable"),"). The ",(0,i.kt)("inlineCode",{parentName:"p"},"datatype")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"unit")," are currently not used and are there for documentation, but this may change in a later version."),(0,i.kt)("p",null,"When a class attribute that's present in ",(0,i.kt)("inlineCode",{parentName:"p"},"published_settings")," changes, a MQTT message is published under the topic ",(0,i.kt)("inlineCode",{parentName:"p"},"pioreactor/{self.unit}/{self.experiment}/{self.job_name}/{attr}")," with payload equal to the new value of the attribute. This is how the web interface is provided real-time data."),(0,i.kt)("p",null,"For updating an attribute, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BackgroundJob")," parent class listens to the MQTT topic:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pioreactor/{self.unit}/{self.experiment}/{self.job_name}/+/set\n")),(0,i.kt)("p",null,"(the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," is a MQTT wildcard), and when a message comes in, the class will check if the attribute (defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),") is ",(0,i.kt)("inlineCode",{parentName:"p"},"settable"),". If so, a lookup is done to see if a class method called ",(0,i.kt)("inlineCode",{parentName:"p"},"set_<attr>")," is defined, and if present, calls that, with the only argument the message's payload. Otherwise, a simple assignment is done: ",(0,i.kt)("inlineCode",{parentName:"p"},"self.<attr> = payload"),". The utility of a ",(0,i.kt)("inlineCode",{parentName:"p"},"set_<attr>")," method is when changing the attribute requires more logic (ex: changing a PID controller's set point)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"state")," is automatically appended to ",(0,i.kt)("inlineCode",{parentName:"p"},"published_settings")," (with ",(0,i.kt)("inlineCode",{parentName:"p"},"settable: True"),") so the state of the job can always be updated and read from MQTT"))),(0,i.kt)("h3",{id:"uniqueness"},"Uniqueness"),(0,i.kt)("p",null,"Only a single instance of a background job, modulo the job's name, can be running on a Raspberry Pi. For example, only a single ",(0,i.kt)("inlineCode",{parentName:"p"},"Monitor")," background job can run, likewise only a single ",(0,i.kt)("inlineCode",{parentName:"p"},"ODReading")," can run. (It's not clear what running multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"ODReading"),"s means, or how it will interact with the hardware - poorly we expect)."),(0,i.kt)("p",null,"The uniqueness is across processes, too. So if a script is running ",(0,i.kt)("inlineCode",{parentName:"p"},"ODReading"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"pio run od_reading")," will fail."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This uniqueness assumption is true for the current application of background jobs. It's possible we will see a reason to remove the uniqueness constraint in a future version - let us know if you want to see this, too!"))),(0,i.kt)("h3",{id:"entry-and-exit"},"Entry and exit"),(0,i.kt)("p",null,"It's important to treat background jobs, with all their connections to networks and GPIO pins, as objects that need to be cleaned up properly. There are two traditional ways to use a background job:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"job = SomeBackgroundJob(unit, experiment)\n...\njob.set_state(job.DISCONNECTED)\n# all cleaned up - state is set to disconnected\n")),(0,i.kt)("p",null,"alternatively, with a context manager:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"with SomeBackgroundJob(unit, experiment) as job:\n  ...\n\n# all cleaned up - state is set to disconnected\n")),(0,i.kt)("p",null,"The job is also cleaned up when the Python process exits."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following will cause problems:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#\u274c don't do this\ndef function_that_doesnt_clean_up():\n    job = SomeBackgroundJob(unit, experiment)\n    # job not cleaned up\n    return True\n\nvalue = function_that_doesnt_clean_up()\n...\n")),(0,i.kt)("p",{parentName:"div"},"In the above, the job ",(0,i.kt)("inlineCode",{parentName:"p"},"SomeBackgroundJob")," isn't disconnected, and state hasn't changed - nor can you access the job anymore (no accessible references). Do this instead:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# \u2705 this is okay\ndef function_that_doesnt_clean_up():\n    with SomeBackgroundJob(unit, experiment) as job:\n        ...\n    return True\n\nvalue = function_that_doesnt_clean_up()\n")))))}u.isMDXComponent=!0}}]);