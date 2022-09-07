"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=o,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={title:"Writing new automations",slug:"/writing-automations-1"},r=void 0,s={unversionedId:"Automations/writing-automations-1",id:"Automations/writing-automations-1",title:"Writing new automations",description:"An automation is a hands-off way to adjust the environment for the microbes. We currently support three types of automations a turbidostat). A LED automation uses the additional LED pockets, and user-supplied LEDs, to modify light into the vial (ex: a photobioreactor or optogenetics experiments). A temperature automation is how users can preprogram the temperature of the vial.",source:"@site/developer-guide/04-Automations/02-writing-automations-1.md",sourceDirName:"04-Automations",slug:"/writing-automations-1",permalink:"/developer-guide/writing-automations-1",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Writing new automations",slug:"/writing-automations-1"},sidebar:"tutorialSidebar",previous:{title:"Automations architecture",permalink:"/developer-guide/intro-automations"},next:{title:"Another example of automation design",permalink:"/developer-guide/writing-automations-2"}},l={},u=[{value:"Creating our first custom automation",id:"creating-our-first-custom-automation",level:3},{value:"Running the script",id:"running-the-script",level:3},{value:"Editing attributes over MQTT (optional)",id:"editing-attributes-over-mqtt-optional",level:4},{value:"Extensions of our custom automation",id:"extensions-of-our-custom-automation",level:3},{value:"Dynamic volume exchanged",id:"dynamic-volume-exchanged",level:4},{value:"Using <code>latest_growth_rate</code>",id:"using-latest_growth_rate",level:4}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An automation is a hands-off way to adjust the environment for the microbes. We currently support three types of automations: dosing, LED, and temperature. A dosing automation involves when to add media (ex: a turbidostat). A LED automation uses the additional LED pockets, and user-supplied LEDs, to modify light into the vial (ex: a photobioreactor or optogenetics experiments). A temperature automation is how users can preprogram the temperature of the vial."),(0,o.kt)("p",null,"In this section, we'll develop a simple dosing automation."),(0,o.kt)("h3",{id:"creating-our-first-custom-automation"},"Creating our first custom automation"),(0,o.kt)("p",null,"Writing an automation involves creating a Python class and overriding specific methods. It would be helpful to be familiar with ",(0,o.kt)("a",{parentName:"p",href:"https://realpython.com/python3-object-oriented-programming/"},"Python classes")," before beginning. Here's an example of a (naive) turbidostat automation, i.e. it will add fresh media and remove old media when an optical density threshold is exceeded. The full code is below, and we'll go through each line of code after:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pioreactor.automations import DosingAutomationJobContrib\n\nclass NaiveTurbidostat(DosingAutomationJobContrib):\n\n    automation_name = "naive_turbidostat"\n    published_settings = {\n        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},\n    }\n    def __init__(self, target_od, **kwargs):\n        super().__init__(**kwargs)\n        self.target_od = target_od\n\n    def execute(self):\n        if self.latest_normalized_od > self.target_od:\n            self.execute_io_action(media_ml=1.0, waste_ml=1.0)\n')),(0,o.kt)("p",null,"First important thing is to subclass from ",(0,o.kt)("inlineCode",{parentName:"p"},"DosingAutomationJobContrib"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pioreactor.automations import DosingAutomationJobContrib\n\nclass NaiveTurbidostat(DosingAutomationJobContrib):\n   ...\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DosingAutomationJobContrib")," is a subclass of a ",(0,o.kt)("inlineCode",{parentName:"p"},"BackgroundJob"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"-Contrib")," part is a small detail to specify that it's a third-party automation (i.e. ",(0,o.kt)("em",{parentName:"p"},"you")," are developing it, not us.)"),(0,o.kt)("p",null,'We need a "key" to i) distinguish this from other automations, and ii) be able to be communicate between systems (think: the web UI in JavaScript to Python, and back). The ',(0,o.kt)("inlineCode",{parentName:"p"},"automation_name")," attribute does this for us. Normally, it's the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Snake_case"},"snakecase")," of the class name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    ...\n    automation_name = "naive_turbidostat"\n    ...\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"published_settings")," tells the Pioreactor software what class attributes are published to MQTT, and if they are editable via MQTT (we will try editing over MQTT later). This is important if you wish to dynamically change attributes of an automation during an experiment, for example: from the web interface. Our class has the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'...\n    published_settings = {\n        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},\n    }\n...\n')),(0,o.kt)("p",null,"The associated metadata says that the class attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"target_od"),' is a float, is editable via MQTT (so it can be changed using the web interface), and it has units AU ("arbitrary units").'),(0,o.kt)("p",null,"Next, we define how to initialize our class. Here we can add settings we want to accept from the user: what is our initial target optical density. Note the boilerplate ",(0,o.kt)("inlineCode",{parentName:"p"},"**kwargs"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"super()")," are important."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    def __init__(self, target_od, **kwargs):\n        super().__init__(**kwargs)\n        self.target_od = target_od\n")),(0,o.kt)("p",null,"Finally, every ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," (specified in the controller, later in this section) minutes, the function ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," will run. The ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," contains the core logic of the automation. In our simple case, we want to dilute the vial if we have exceed the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest_normalized_od"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    def execute(self):\n        if self.latest_normalized_od > self.target_od:\n            self.execute_io_action(media_ml=1.0, waste_ml=1.0)\n")),(0,o.kt)("p",null,"Since we are working with a fixed volume, ",(0,o.kt)("inlineCode",{parentName:"p"},"media_ml")," must equal ",(0,o.kt)("inlineCode",{parentName:"p"},"waste_ml"),", else an error will be thrown. What is ",(0,o.kt)("inlineCode",{parentName:"p"},"latest_normalized_od"),"? Our class, when active, is listening to the growth-rate-calculating job's output of normalized optical density. Hence when ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," runs, we'll have access to the most up-to-date value of normalized optical density. Likewise, there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"latest_growth_rate")," that updates when a new growth-rate value is produced. Both are defined and maintained in the parent class."),(0,o.kt)("h3",{id:"running-the-script"},"Running the script"),(0,o.kt)("p",null,"How do we run this automation now? Let's put the following code in to a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"naive_turbidostat.py")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n"""\nrun on the command line with\n$ python3 naive_turbidostat.py\n\nExit with ctrl-c\n"""\nfrom pioreactor.automations import DosingAutomationJobContrib\n\nclass NaiveTurbidostat(DosingAutomationJobContrib):\n\n    automation_name = "naive_turbidostat"\n    published_settings = {\n        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},\n    }\n    def __init__(self, target_od, **kwargs):\n        super().__init__(**kwargs)\n        self.target_od = target_od\n\n    def execute(self):\n        if self.latest_normalized_od > self.target_od:\n            self.execute_io_action(media_ml=1.0, waste_ml=1.0)\n\nif __name__=="__main__":\n    from pioreactor.background_jobs.dosing_control import DosingController\n\n    dc = DosingController(\n        "naive_turbidostat",\n        target_od=2.0,\n        duration=1, # check every 1 minute\n        unit="test_unit",\n        experiment="test_experiment"\n    )\n    dc.block_until_disconnected()\n\n')),(0,o.kt)("p",null,"This uses the dosing controller class, ",(0,o.kt)("inlineCode",{parentName:"p"},"DosingController"),", which controls which dosing automation is running. By using ",(0,o.kt)("inlineCode",{parentName:"p"},"DosingAutomationJobContrib"),", our new ",(0,o.kt)("inlineCode",{parentName:"p"},"NaiveTurbidostat")," class is automatically discovered by ",(0,o.kt)("inlineCode",{parentName:"p"},"DosingController")," and referenced by the ",(0,o.kt)("inlineCode",{parentName:"p"},"automation_name")," we chose, ",(0,o.kt)("inlineCode",{parentName:"p"},"naive_turbidostat"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you have Pioreactor installed locally, you can save this file on your system. Otherwise, you can create this file on your Pioreactor's Raspberry Pi: after accessing the Raspberry Pi's command line, typing ",(0,o.kt)("inlineCode",{parentName:"p"},"nano naive_turbidostat.py"),", and pasting in the code above.")),(0,o.kt)("p",null,"Run the script with ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 naive_turbidostat.py"),". This will start the job. After a minute, you may notice that errors are thrown - that's because there's no optical density measurements being sent!"),(0,o.kt)("h4",{id:"editing-attributes-over-mqtt-optional"},"Editing attributes over MQTT (optional)"),(0,o.kt)("p",null,"We'll demonstrate the ability to dynamically change the ",(0,o.kt)("inlineCode",{parentName:"p"},"target_od")," attribute using MQTT. For each member of ",(0,o.kt)("inlineCode",{parentName:"p"},"published_settings"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"DosingAutomationJobContrib")," class listens to the MQTT topic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pioreactor/<unit name>/<experiment>/dosing_automation/<attribute>/set\n")),(0,o.kt)("p",null,"We'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"mosquitto_pub")," to publish a message to this topic. So, with the python script running, open a new command line, and enter the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mosquitto_pub -t "pioreactor/test_unit/test_experiment/dosing_automation/target_od/set" -m 5.0\n')),(0,o.kt)("p",null,"You should see some logs in the Python console report that the ",(0,o.kt)("inlineCode",{parentName:"p"},"target_od")," was changed. Also, a the value of 5.0 is published and retained to the topic ",(0,o.kt)("inlineCode",{parentName:"p"},"pioreactor/test_unit/test_experiment/dosing_automation/target_od")),(0,o.kt)("p",null,"Why is this useful?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"This is how the web interface updates settings in running activities."),(0,o.kt)("li",{parentName:"ol"},"Other Pioreactor activities can update each other's settings."),(0,o.kt)("li",{parentName:"ol"},"External programs or apps can monitor and update settings this way, too.")),(0,o.kt)("h3",{id:"extensions-of-our-custom-automation"},"Extensions of our custom automation"),(0,o.kt)("p",null,"Below are some extensions, with additions highlighted"),(0,o.kt)("h4",{id:"dynamic-volume-exchanged"},"Dynamic volume exchanged"),(0,o.kt)("p",null,"Exchanging 1ml each time may not be enough, so we add ",(0,o.kt)("inlineCode",{parentName:"p"},"volume")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"published_settings"),". Now, from the UI, we can dynamically adjust the volume."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{8,10,13,17}","{8,10,13,17}":!0},'from pioreactor.automations import DosingAutomationJobContrib\n\nclass NaiveTurbidostat(DosingAutomationJobContrib):\n\n    automation_name = "naive_turbidostat"\n    published_settings = {\n        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},\n        "volume": {"datatype": "float", "settable": True, "unit": "mL"},\n    }\n    def __init__(self, target_od, volume, **kwargs):\n        super().__init__(**kwargs)\n        self.target_od = target_od\n        self.volume = volume\n\n    def execute(self):\n        if self.latest_normalized_od > self.target_od:\n            self.execute_io_action(media_ml=self.volume, waste_ml=self.volume)\n')),(0,o.kt)("h4",{id:"using-latest_growth_rate"},"Using ",(0,o.kt)("inlineCode",{parentName:"h4"},"latest_growth_rate")),(0,o.kt)("p",null,"If our growth rate is high, we may want to modify the volume exchanged to keep up. A naive solution: we can bump up the exchanged volume if the growth rate is high. Much better would be a dynamic solution, or a feedback loop (like a PID controller, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/pioreactor/blob/master/pioreactor/automations/dosing/pid_turbidostat.py"},(0,o.kt)("inlineCode",{parentName:"a"},"pid_turbidostat")),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{8,10,13,17}","{8,10,13,17}":!0},'from pioreactor.automations import DosingAutomationJobContrib\n\nclass NaiveTurbidostat(DosingAutomationJobContrib):\n\n    automation_name = "naive_turbidostat"\n    published_settings = {\n        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},\n        "volume": {"datatype": "float", "settable": True, "unit": "mL"},\n    }\n    def __init__(self, target_od, volume, **kwargs):\n        super().__init__(**kwargs)\n        self.target_od = target_od\n        self.volume = volume\n\n    def execute(self):\n        if self.latest_od > self.target_od:\n            if self.latest_growth_rate > 0.2:\n                self.execute_io_action(media_ml=2 * self.volume, waste_ml=2 * self.volume)\n            else:\n                self.execute_io_action(media_ml=self.volume, waste_ml=self.volume)\n\n')))}m.isMDXComponent=!0}}]);