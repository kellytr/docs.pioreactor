"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[429],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=o,h=d["".concat(l,".").concat(c)]||d[c]||p[c]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6816:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={},l="Writing new automations",u={unversionedId:"Automations/Writing new automations",id:"Automations/Writing new automations",isDocsHomePage:!1,title:"Writing new automations",description:"An automation is a hands-off way to adjust the environment for the microbes. We currently support three types of automations a turbidostat). A LED automation uses the additional LED pockets, and user-supplied LEDs, to modify light into the vial (ex: a photobioreactor or optogenetics experiments). A temperature automation is how users can preprogram the temperature of the vial.",source:"@site/developer_guide/03-Automations/02-Writing new automations.md",sourceDirName:"03-Automations",slug:"/Automations/Writing new automations",permalink:"/developer_guide/Automations/Writing new automations",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Automations architecture",permalink:"/developer_guide/Automations/Introduction to Automations"},next:{title:"Another example of automation design",permalink:"/developer_guide/Automations/Another example of automation design"}},m=[{value:"Creating our first custom automation",id:"creating-our-first-custom-automation",children:[],level:3},{value:"Running the script",id:"running-the-script",children:[{value:"Editing attributes over MQTT (optional)",id:"editing-attributes-over-mqtt-optional",children:[],level:4}],level:3},{value:"Extensions of our custom automation",id:"extensions-of-our-custom-automation",children:[{value:"Dynamic volume exchanged",id:"dynamic-volume-exchanged",children:[],level:4},{value:"Using <code>latest_growth_rate</code>",id:"using-latest_growth_rate",children:[],level:4}],level:3}],p={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-new-automations"},"Writing new automations"),(0,i.kt)("p",null,"An automation is a hands-off way to adjust the environment for the microbes. We currently support three types of automations: dosing, LED, and temperature. A dosing automation involves when to add media (ex: a turbidostat). A LED automation uses the additional LED pockets, and user-supplied LEDs, to modify light into the vial (ex: a photobioreactor or optogenetics experiments). A temperature automation is how users can preprogram the temperature of the vial."),(0,i.kt)("h3",{id:"creating-our-first-custom-automation"},"Creating our first custom automation"),(0,i.kt)("p",null,"Writing an automation involves creating a Python class with specific methods and parent classes. It would be helpful to be familiar with ",(0,i.kt)("a",{parentName:"p",href:"https://realpython.com/python3-object-oriented-programming/"},"Python classes")," before beginning. Here's an example of a (naive) turbidostat automation, i.e. it will add fresh media and remove old media when an optical density threshold is exceeded. We'll go through each line of code after:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pioreactor.automations import DosingAutomationContrib\n\nclass NaiveTurbidostat(DosingAutomationContrib):\n\n    automation_name = "naive_turbidostat"\n    published_settings = {\n        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},\n    }\n    def __init__(self, target_od, **kwargs):\n        super().__init__(**kwargs)\n        self.target_od = target_od\n\n    def execute(self):\n        if self.latest_od > self.target_od:\n            self.execute_io_action(media_ml=1.0, waste_ml=1.0)\n')),(0,i.kt)("p",null,"First important thing is to subclass from ",(0,i.kt)("inlineCode",{parentName:"p"},"DosingAutomationContrib"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from pioreactor.automations import DosingAutomationContrib\n\nclass NaiveTurbidostat(DosingAutomationContrib):\n   ...\n")),(0,i.kt)("p",null,'We need a "key" to i) distinguish this from other automations, and ii) be able to be communicated between systems (think: the web UI to Python, and back). The ',(0,i.kt)("inlineCode",{parentName:"p"},"automation_name")," attribute does this for us. Normally, it's the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Snake_case"},"snakecase")," of the class name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'    ...\n    automation_name = "naive_turbidostat"\n    ...\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"published_settings")," tells the Pioreactor software what class attributes are published to MQTT, and if they are editable via MQTT (we will try editing over MQTT later). This is important if you wish to dynamically change attributes during an experiment, say from the web interface. Our class has the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'...\n    published_settings = {\n        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},\n    }\n...\n')),(0,i.kt)("p",null,"This says that the class attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"target_od"),' is a float, is editable via MQTT (so it can be changed using the web interface), and it has units AU ("arbitrary units").'),(0,i.kt)("p",null,"Next, we define how to initialize our class. Here we can add settings we want to accept from the user: what is our target optical density. Note the boilerplate ",(0,i.kt)("inlineCode",{parentName:"p"},"**kwargs"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"super()")," are important."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"    def __init__(self, target_od, **kwargs):\n        super().__init__(**kwargs)\n        self.target_od = target_od\n")),(0,i.kt)("p",null,"Finally, every ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," (specified in the controller later) minutes, the function ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," will run. The ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," contains the core logic of the automation. In our (simple) case, we want to dilute the vial if we have exceed the ",(0,i.kt)("inlineCode",{parentName:"p"},"latest_od"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"    def execute(self):\n        if self.latest_od > self.target_od:\n            self.execute_io_action(media_ml=1.0, waste_ml=1.0)\n")),(0,i.kt)("p",null,"Since we are working with a fixed volume, ",(0,i.kt)("inlineCode",{parentName:"p"},"media_ml")," must equal ",(0,i.kt)("inlineCode",{parentName:"p"},"waste_ml"),", else an error will be thrown. What is ",(0,i.kt)("inlineCode",{parentName:"p"},"latest_od"),"? Our class, when active, is listening to growth-rate-calculating job's output of normalized optical density. Hence when ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," runs, we'll have access to the most up-to-date value of normalized optical density. Likewise, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"latest_growth_rate")," that updates when a new growth-rate value is produced. Both are defined and maintained in the parent class."),(0,i.kt)("h3",{id:"running-the-script"},"Running the script"),(0,i.kt)("p",null,"How do we run this automation now? Let's put the following code in to a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"naive_turbidostat.py")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n"""\nrun on the command line with\n$ python3 naive_turbidostat.py\n\nExit with ctrl-c\n"""\nfrom pioreactor.automations import DosingAutomationContrib\n\nclass NaiveTurbidostat(DosingAutomationContrib):\n\n    automation_name = "naive_turbidostat"\n    published_settings = {\n        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},\n    }\n    def __init__(self, target_od, **kwargs):\n        super().__init__(**kwargs)\n        self.target_od = target_od\n\n    def execute(self):\n        if self.latest_od > self.target_od:\n            self.execute_io_action(media_ml=1.0, waste_ml=1.0)\n\nif __name__=="__main__":\n    from pioreactor.background_jobs.dosing_control import DosingController\n\n    dc = DosingController(\n        "naive_turbidostat",\n        target_od=2.0,\n        duration=1, # check every 1 minute\n        unit="test_unit",\n        experiment="test_experiment"\n    )\n    dc.block_until_disconnected()\n\n')),(0,i.kt)("p",null,"This uses the dosing controller class, ",(0,i.kt)("inlineCode",{parentName:"p"},"DosingController"),", which controls which dosing automation is running. By using ",(0,i.kt)("inlineCode",{parentName:"p"},"DosingAutomationContrib"),", our new ",(0,i.kt)("inlineCode",{parentName:"p"},"NaiveTurbidostat")," class is automatically discovered by ",(0,i.kt)("inlineCode",{parentName:"p"},"DosingController")," and referenced by the ",(0,i.kt)("inlineCode",{parentName:"p"},"automation_name")," we chose, ",(0,i.kt)("inlineCode",{parentName:"p"},"naive_turbidostat"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have Pioreactor installed locally, you can save this file on your system. Otherwise, you can create this file on your Pioreactor's Raspberry Pi: after accessing the Raspberry Pi's command line, typing ",(0,i.kt)("inlineCode",{parentName:"p"},"nano naive_turbidostat.py"),", and pasting in the code above."))),(0,i.kt)("p",null,"Run the script with ",(0,i.kt)("inlineCode",{parentName:"p"},"python3 naive_turbidostat.py"),". This will start the job. After a minute, you may notice that errors are thrown - that's because there's no optical density measurements being sent!"),(0,i.kt)("h4",{id:"editing-attributes-over-mqtt-optional"},"Editing attributes over MQTT (optional)"),(0,i.kt)("p",null,"We'll demonstrate the ability to dynamically change the ",(0,i.kt)("inlineCode",{parentName:"p"},"target_od")," attribute using MQTT. For each member of ",(0,i.kt)("inlineCode",{parentName:"p"},"published_settings"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"DosingAutomationContrib")," class listens to the MQTT topic:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pioreactor/<unit name>/<experiment>/dosing_automation/<attribute>/set\n")),(0,i.kt)("p",null,"We'll use ",(0,i.kt)("inlineCode",{parentName:"p"},"mosquitto_pub")," to publish a message to this topic. So, with the python script running, open a new command line, and enter the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mosquitto_pub -t "pioreactor/test_unit/test_experiment/dosing_automation/target_od/set" -m 5.0\n')),(0,i.kt)("p",null,"You should see some logs in the Python console report that the ",(0,i.kt)("inlineCode",{parentName:"p"},"target_od")," was changed."),(0,i.kt)("p",null,"Why is this useful?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"This is how the web interface updates settings in running activities."),(0,i.kt)("li",{parentName:"ol"},"Other Pioreactor activities can update each other's settings."),(0,i.kt)("li",{parentName:"ol"},"External programs or apps can update settings this way, too.")),(0,i.kt)("h3",{id:"extensions-of-our-custom-automation"},"Extensions of our custom automation"),(0,i.kt)("p",null,"Below are some extensions, with additions highlighted"),(0,i.kt)("h4",{id:"dynamic-volume-exchanged"},"Dynamic volume exchanged"),(0,i.kt)("p",null,"Exchanging 1ml each time may not be enough"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"{8,10,13,17}","{8,10,13,17}":!0},'from pioreactor.automations import DosingAutomationContrib\n\nclass NaiveTurbidostat(DosingAutomationContrib):\n\n    automation_name = "naive_turbidostat"\n    published_settings = {\n        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},\n        "volume": {"datatype": "float", "settable": True, "unit": "mL"},\n    }\n    def __init__(self, target_od, volume, **kwargs):\n        super().__init__(**kwargs)\n        self.target_od = target_od\n        self.volume = volume\n\n    def execute(self):\n        if self.latest_od > self.target_od:\n            self.execute_io_action(media_ml=self.volume, waste_ml=self.volume)\n')),(0,i.kt)("h4",{id:"using-latest_growth_rate"},"Using ",(0,i.kt)("inlineCode",{parentName:"h4"},"latest_growth_rate")),(0,i.kt)("p",null,"If our growth rate is high, we may want to modify the volume exchanged to keep up. A naive solution: we can bump up the exchanged volume if the growth rate is high. Much better would be a dynamic solution, or a feedback loop (like a PID controller, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/pioreactor/blob/master/pioreactor/automations/dosing/pid_turbidostat.py"},(0,i.kt)("inlineCode",{parentName:"a"},"pid_turbidostat")),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"{8,10,13,17}","{8,10,13,17}":!0},'from pioreactor.automations import DosingAutomationContrib\n\nclass NaiveTurbidostat(DosingAutomationContrib):\n\n    automation_name = "naive_turbidostat"\n    published_settings = {\n        "target_od": {"datatype": "float", "settable": True, "unit": "AU"},\n        "volume": {"datatype": "float", "settable": True, "unit": "mL"},\n    }\n    def __init__(self, target_od, volume, **kwargs):\n        super().__init__(**kwargs)\n        self.target_od = target_od\n        self.volume = volume\n\n    def execute(self):\n        if self.latest_od > self.target_od:\n            if self.latest_growth_rate > 0.2:\n                self.execute_io_action(media_ml=2 * self.volume, waste_ml=2 * self.volume)\n            else:\n                self.execute_io_action(media_ml=self.volume, waste_ml=self.volume)\n\n')))}d.isMDXComponent=!0}}]);