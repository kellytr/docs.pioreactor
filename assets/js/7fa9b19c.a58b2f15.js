"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[924],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=a,m=c["".concat(s,".").concat(p)]||c[p]||d[p]||o;return n?i.createElement(m,r(r({ref:t},h),{},{components:n})):i.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9873:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return h},default:function(){return c}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="Another example of automation design",u={unversionedId:"Automations/Another example of automation design",id:"Automations/Another example of automation design",title:"Another example of automation design",description:'Let\'s design a simple LED automation for Light/Dark cycles. The basic idea is that the LED automation "wakes up" (specifically: it runs its execute method) every hour, and on specific hours, turns on or turns off the white light LEDs.',source:"@site/developer_guide/03-Automations/03-Another example of automation design.md",sourceDirName:"03-Automations",slug:"/Automations/Another example of automation design",permalink:"/developer_guide/Automations/Another example of automation design",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing new automations",permalink:"/developer_guide/Automations/Writing new automations"},next:{title:"Adding custom pumps to dosing automations",permalink:"/developer_guide/Automations/Adding custom pumps to dosing automations"}},h=[{value:"The Code",id:"the-code",children:[],level:3},{value:"Setting up the Pioreactor",id:"setting-up-the-pioreactor",children:[],level:3},{value:"Running the automation",id:"running-the-automation",children:[],level:3}],d={toc:h};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"another-example-of-automation-design"},"Another example of automation design"),(0,o.kt)("p",null,'Let\'s design a simple LED automation for Light/Dark cycles. The basic idea is that the LED automation "wakes up" (specifically: it runs its ',(0,o.kt)("inlineCode",{parentName:"p"},"execute")," method) every hour, and on specific hours, turns on or turns off the white light LEDs."),(0,o.kt)("h3",{id:"the-code"},"The Code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Imports at the top of the file!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# -*- coding: utf-8 -*-\nfrom __future__ import annotations\nfrom pioreactor.automations import LEDAutomationContrib\nfrom pioreactor.whoami import get_unit_name, get_latest_experiment_name\nfrom pioreactor.automations import events\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Define a new class as a subclass of ",(0,o.kt)("inlineCode",{parentName:"li"},"LEDAutomationContrib"),". We use ",(0,o.kt)("inlineCode",{parentName:"li"},"LEDAutomationContrib")," since this is a 3rd party automation. We give the new class a descriptive name. The ",(0,o.kt)("inlineCode",{parentName:"li"},"automation_name")," attribute is necessary - and is often just the camel case version of the class name.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class LightDarkCycle(LEDAutomationContrib):\n    automation_name = "light_dark_cycle"\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Define our ",(0,o.kt)("inlineCode",{parentName:"li"},"published_settings")," for this class. This is a dictionary of ",(0,o.kt)("inlineCode",{parentName:"li"},"LightDarkCycle")," attributes that we can modify/inspect from MQTT (and hence from the UI, or from the leader Pioreactor). Not all attributes need to go in here - only the ones that users may want to modify mid-experiment. ")),(0,o.kt)("p",null,"Later in this post, we'll see what each of these attributes does. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    published_settings = {\n        "duration": {"datatype": "float", "settable": False, "unit": "min"},\n        "light_intensity": {"datatype": "float", "settable": True, "unit": "%"},\n        "light_duration_hours": {"datatype": "float", "settable": True, "unit": "h"},\n        "dark_duration_hours": {"datatype": "float", "settable": True, "unit": "h"},\n    }\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create the ",(0,o.kt)("inlineCode",{parentName:"li"},"__init__"),", with the attributes we'll need. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def __init__(self, light_intensity: float, light_duration_hours: int, dark_duration_hours: int, **kwargs):\n        super().__init__(**kwargs)\n        self.hours_online = -1\n        self.light_active = False\n        self.channels = ["B", "C"]\n        self.set_light_intensity(light_intensity)\n        self.light_duration_hours = float(light_duration_hours)\n        self.dark_duration_hours = float(dark_duration_hours)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hours_online")," will keep track of how many elapsed hours have gone by. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"light_active")," keeps track of whether the LEDs are currently on or off"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"channels")," refers to which LED channels on the Pioreactor HAT we are using."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"light_duration_hours"),": the number of hours to keep the light on for, typically 16"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dark_duration_hours"),": the number of hours to keep the light off for, typically 8"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"light_intensity"),": the level of intensity, as a percent, of the LEDs when turned on.")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"We define the ",(0,o.kt)("inlineCode",{parentName:"li"},"execute")," function, which is what runs every ",(0,o.kt)("inlineCode",{parentName:"li"},"duration")," minutes. In the function, we increment ",(0,o.kt)("inlineCode",{parentName:"li"},"hours_online")," by 1 (since it runs every 60 minutes), and ask a separate function, ",(0,o.kt)("inlineCode",{parentName:"li"},"trigger_leds"),", to handle turning on and off LEDs. The ",(0,o.kt)("inlineCode",{parentName:"li"},"execute")," can return an ",(0,o.kt)("inlineCode",{parentName:"li"},"Event"),", which is useful for logging and testing purposes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    def execute(self):\n        self.hours_online += 1\n        event = self.trigger_leds(self.hours_online)\n        return event\n")),(0,o.kt)("p",null,"The other class function, ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger_leds"),", role is to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"determine if we should turn on LEDs, turn off LEDs, or do nothing."),(0,o.kt)("li",{parentName:"ol"},"If we are changing LEDs status (on to off, or off to on), perform that task."),(0,o.kt)("li",{parentName:"ol"},"return an ",(0,o.kt)("inlineCode",{parentName:"li"},"Event"),", with some description of what occurred (even if nothing changed).")),(0,o.kt)("p",null,"To do 1., we think about the total hours passed ",(0,o.kt)("em",{parentName:"p"},"modulo")," how long our cycle is. That is, if our cycle lasts 24 hours (which might be the result of choosing 16h light + 8h dark), then the hour 33 is really the same as hour 9, likewise the hour 123 is the same as hour 3: we take the hour modulo the duration. "),(0,o.kt)("p",null,"We then ask, is this hour in the dark period, or the light period, of the cycle? We also ask if the ",(0,o.kt)("inlineCode",{parentName:"p"},"lights_active")," is on, or off, respectively? If so, we change the status of the LEDs. For example, if we ",(0,o.kt)("em",{parentName:"p"},"should")," be in the dark period, but our LEDs are on, well, we turn them off, and return a ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeLEDIntensity")," event. The function ",(0,o.kt)("inlineCode",{parentName:"p"},"set_led_intensity")," is from the parent class, and is a helper function. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def trigger_leds(self, hours: int) -> events.Event:\n        cycle_duration: int = self.light_duration_hours + self.dark_duration_hours\n\n        if ((hours % cycle_duration) < self.light_duration_hours) and (not self.light_active):\n            self.light_active = True\n            for channel in self.channels:\n                self.set_led_intensity(channel, self.light_intensity)\n            return events.ChangedLedIntensity(f"{hours}h: turned on LEDs")\n        elif ((hours % cycle_duration) >= self.light_duration_hours) and (self.light_active):\n            self.light_active = False\n            for channel in self.channels:\n                self.set_led_intensity(channel, 0)\n            return events.ChangedLedIntensity(f"{hours}h: turned off LEDs")\n        else:\n            return events.NoEvent(f"{hours}h: no change")\n\n')),(0,o.kt)("p",null,"We also need to define that ",(0,o.kt)("inlineCode",{parentName:"p"},"set_light_intensity")," function above. This function is automatically called whenever we change ",(0,o.kt)("inlineCode",{parentName:"p"},"light_intensity")," (see note below). We need additional logic to immediately change the ",(0,o.kt)("inlineCode",{parentName:"p"},"light_intensity")," when asked, otherwise, the LEDs wouldn't actually update until the ",(0,o.kt)("em",{parentName:"p"},"next")," ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," is called, which could be an hour away."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    def set_light_intensity(self, intensity) -> None:\n        self.light_intensity = float(intensity)\n        if self.light_active:\n            # update now!\n            for channel in self.channels:\n                self.set_led_intensity(channel, self.light_intensity)\n        else:\n            pass\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Updates over MQTT either update the attribute directly, i.e. :",(0,o.kt)("inlineCode",{parentName:"p"},"self.<attr> = new_value"),", or, if defined, the method ",(0,o.kt)("inlineCode",{parentName:"p"},"set_<attr>(new_value)")," is called instead. This is what is happening with ",(0,o.kt)("inlineCode",{parentName:"p"},"set_light_intensity"),". Using ",(0,o.kt)("inlineCode",{parentName:"p"},"set_<attr>")," methods is useful when you have additional logic that needs to be accomplished when an attribute changes."))),(0,o.kt)("p",null,"That's the end of the class! We turn it into a runnable script with the following, at the end of the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'if __name__ == "__main__":\n    from pioreactor.background_jobs.led_control import LEDController\n    from pioreactor.whoami import get_unit_name, get_latest_experiment_name\n\n    lc = LEDController(\n        led_automation="light_dark_cycle",\n        light_intensity=45.0,\n        light_duration_hours=16,\n        dark_duration_hours=8,\n        duration=60, # every 60min we "wake up" and decide what to do.\n        skip_first_run=False,\n        unit=get_unit_name(),\n        experiment=get_latest_experiment_name()\n    )\n\n    lc.block_until_disconnected()\n')),(0,o.kt)("p",null,"In total, our file looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\nfrom __future__ import annotations\nfrom pioreactor.automations import LEDAutomationContrib\nfrom pioreactor.automations import events\n\nclass LightDarkCycle(LEDAutomationContrib):\n    """\n    Follows as h light / h dark cycle. Starts dark.\n    """\n\n    automation_name = "light_dark_cycle"\n    published_settings = {\n        "duration": {"datatype": "float", "settable": False, "unit": "min"}, # doesn\'t make sense to change duration.\n        "light_intensity": {"datatype": "float", "settable": True, "unit": "%"},\n        "light_duration_hours": {"datatype": "int", "settable": True, "unit": "h"},\n        "dark_duration_hours": {"datatype": "int", "settable": True, "unit": "h"},\n    }\n\n    def __init__(self, light_intensity: float, light_duration_hours: int, dark_duration_hours: int, **kwargs):\n        super().__init__(**kwargs)\n        self.hours_online: int = -1\n        self.light_active: bool = False\n        self.channels = ["B", "C"]\n        self.set_light_intensity(light_intensity)\n        self.light_duration_hours = float(light_duration_hours)\n        self.dark_duration_hours = float(dark_duration_hours)\n\n\n    def trigger_leds(self, hours: int) -> events.Event:\n        cycle_duration: int = self.light_duration_hours + self.dark_duration_hours\n\n        if ((hours % cycle_duration) < self.light_duration_hours) and (not self.light_active):\n            self.light_active = True\n            for channel in self.channels:\n                self.set_led_intensity(channel, self.light_intensity)\n            return events.ChangedLedIntensity(f"{hours}h: turned on LEDs")\n        elif ((hours % cycle_duration) >= self.light_duration_hours) and (self.light_active):\n            self.light_active = False\n            for channel in self.channels:\n                self.set_led_intensity(channel, 0)\n            return events.ChangedLedIntensity(f"{hours}h: turned off LEDs")\n        else:\n            return events.NoEvent(f"{hours}h: no change")\n\n\n    def set_light_intensity(self, intensity) -> None:\n        self.light_intensity = float(intensity)\n        if self.light_active:\n            # update now!\n            for channel in self.channels:\n                self.set_led_intensity(channel, self.light_intensity)\n        else:\n            pass\n\n\n    def execute(self) -> events.Event:\n        self.hours_online += 1\n        event = self.trigger_leds(self.hours_online)\n        return event\n\n\n\nif __name__ == "__main__":\n    from pioreactor.background_jobs.led_control import LEDController\n    from pioreactor.whoami import get_unit_name, get_latest_experiment_name\n\n    lc = LEDController(\n        led_automation="light_dark_cycle",\n        light_intensity=45.0,\n        light_duration_hours=16,\n        dark_duration_hours=8,\n        duration=60, # every 60min we "wake up" and decide what to do.\n        skip_first_run=False,\n        unit=get_unit_name(),\n        experiment=get_latest_experiment_name()\n    )\n\n    lc.block_until_disconnected()\n')),(0,o.kt)("h3",{id:"setting-up-the-pioreactor"},"Setting up the Pioreactor"),(0,o.kt)("p",null,"Setting up your Pioreactor is easy: attach LEDs to LED channels ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),", and stick them in pockets ",(0,o.kt)("inlineCode",{parentName:"p"},"X2")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"X3"),"."),(0,o.kt)("h3",{id:"running-the-automation"},"Running the automation"),(0,o.kt)("p",null,"Let's save this file to our Pioreactor, by accessing the Pioreactor's command line, typing ",(0,o.kt)("inlineCode",{parentName:"p"},"nano light_dark_cycle.py"),", and pasting in the code above. "),(0,o.kt)("p",null,"You can test the automation from the Pioreactor's command line by executing (you may want to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," to something like 0.5, so you're not waiting hours to see it change):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python3 light_dark_cycle.py\n")))}c.isMDXComponent=!0}}]);