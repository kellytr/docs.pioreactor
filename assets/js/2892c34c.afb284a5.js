"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[1275],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,_=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(_,r(r({ref:t},d),{},{components:n})):o.createElement(_,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1665:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={},s="Writing a custom background job",c={unversionedId:"Background Jobs/Writing a custom background job",id:"Background Jobs/Writing a custom background job",title:"Writing a custom background job",description:"We'll explain how a background job is written using the example application of a job that control an external motor (the load). This motor may control a larger stirrer, or shaker, or air-pump, but is regulated by the amount of voltage applied - that is, the more voltage applied, the more output from the motor.",source:"@site/developer_guide/02-Background Jobs/02-Writing a custom background job.md",sourceDirName:"02-Background Jobs",slug:"/Background Jobs/Writing a custom background job",permalink:"/developer_guide/Background Jobs/Writing a custom background job",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to background jobs",permalink:"/developer_guide/Background Jobs/How background jobs work"},next:{title:"Automations architecture",permalink:"/developer_guide/Automations/Introduction to Automations"}},d=[{value:"Adding <code>published_settings</code>",id:"adding-published_settings",children:[],level:4}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-a-custom-background-job"},"Writing a custom background job"),(0,i.kt)("p",null,"We'll explain how a background job is written using the example application of a job that control an external motor (the load). This motor may control a larger stirrer, or shaker, or air-pump, but is regulated by the amount of voltage applied - that is, the more voltage applied, the more output from the motor. "),(0,i.kt)("p",null,"The Pioreactor HAT has four available pulse-width modulation (PWM) outputs, with programmable frequency and duty cycle (DC). We'll set a frequency that works for the motor, but also increase the DC in proportion to the normalized optical density (this may represent needing to add more air, or shaking, as the culture's oxygen requirements increase). Let's start with the some imports and the class' ",(0,i.kt)("inlineCode",{parentName:"p"},"__init__"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom pioreactor.config import config\nfrom pioreactor.background_jobs.base import BackgroundJob\n\n\nclass MotorDriver(BackgroundJob):\n\n    def __init__(self, hz, initial_duty_cycle, unit, experiment, **kwargs):\n        super().__init__(job_name="motor_driver", unit=unit, experiment=experiment)\n        self.hz = hz\n        self._initial_duty_cycle = initial_duty_cycle\n        self.duty_cycle = initial_duty_cycle\n        ...\n\n')),(0,i.kt)("p",null,"We see that the ",(0,i.kt)("inlineCode",{parentName:"p"},"__init__")," requires the two parameters for PWM: ",(0,i.kt)("inlineCode",{parentName:"p"},"hz")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"inital_duty_cycle"),". One rarely changes the hertz of PWM, so its fixed - but we do often change the duty cycle, so we create a variable ",(0,i.kt)("inlineCode",{parentName:"p"},"self.duty_cycle")," and assign it the ",(0,i.kt)("inlineCode",{parentName:"p"},"initial_duty_cycle"),". We also need to supply the unit name (the hostname), and the experiment name. We'll populate these at run time later. Finally, we need a ",(0,i.kt)("inlineCode",{parentName:"p"},"job_name")," to pass to the super class, ",(0,i.kt)("inlineCode",{parentName:"p"},"BackgroundJob"),'. This should be unique from other jobs that may run. Often we use the "snake_case" of the class name as the job name. We give it the jon name ',(0,i.kt)("inlineCode",{parentName:"p"},"motor_driver"),"."),(0,i.kt)("p",null,"We next initialize the PWM code (this is still in the ",(0,i.kt)("inlineCode",{parentName:"p"},"__init__"),") that controls the PWM outputs on the HAT, and add more imports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pioreactor.hardware_mappings import PWM_TO_PIN\nfrom pioreactor.utils.pwm import PWM\n...\n\n\n    def __init__(...)\n        ...\n\n        pwm_pin = PWM_TO_PIN[config.getint("PWM_reverse", "motor_driver")]\n        self.pwm = PWM(pwm_pin, self.hz)\n        self.pwm.lock()\n        self.pwm.start(self.duty_cycle)\n\n        ...\n\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PWM_TO_PIN")," is lookup that maps settings in your config.ini to the Raspberry Pi's GPIO pins (which we use for the output PWM). Which means we also need update the ",(0,i.kt)("inlineCode",{parentName:"p"},"[PWM]")," section in your config.ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[PWM]\n1=motor_driver\n2=media\n3=alt_media\n4=waste\n5=heater\n")),(0,i.kt)("p",null,"In the above code, we next initialize the ",(0,i.kt)("inlineCode",{parentName:"p"},"PWM")," class. This is an abstraction to make working with the PWM hardware easier. For example, the next line, ",(0,i.kt)("inlineCode",{parentName:"p"},"self.pwm.lock()"),", will put a lock on that Raspberry Pi GPIO pin, making it difficult for other processes to use it inadvertently. The final line above starts the PWM output, and hence starts the motor, at ",(0,i.kt)("inlineCode",{parentName:"p"},"duty_cycle")," level."),(0,i.kt)("p",null,"Next, we want to include the behavior to update the duty cycle when we get new normalized OD readings. This is typically done with a callback when a new MQTT message is received. See code below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'    def __init__(...)\n        ...\n        ...\n\n        self.start_passive_listeners()\n\n    ...\n\n    def start_passive_listeners(self):\n        self.logger.debug("Listening for od_filtered topics")\n        self.subscribe_and_callback(\n            self.update_duty_cycle_by_normalized_od,\n            f"pioreactor/{self.unit}/{self.experiment}/growth_rate_calculating/od_filtered",\n        )\n')),(0,i.kt)("p",null,"Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"self.logger.debug(...)")," line. Each background job has a Python logger that will log to four places: MQTT, the SQLite3 database, the terminal, and the log file on disk. See Python's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/logging.html"},"logging module")," for more."),(0,i.kt)("p",null,"The callback, ",(0,i.kt)("inlineCode",{parentName:"p"},"update_duty_cycle_by_normalized_od"),", needs to be written:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import json\n\n...\n\n    def update_duty_cycle_by_normalized_od(self, message):\n        payload = json.loads(message.payload)\n\n        if self.state == self.READY:\n            self.set_duty_cycle(payload["od_filtered"] * self._initial_duty_cycle)\n\n    def set_duty_cycle(self, new_duty_cycle):\n        self.duty_cycle = clamp(0, float(new_duty_cycle), 100)\n        self.pwm.change_duty_cycle(self.duty_cycle)\n        self.logger.debug(f"new dc: {self.duty_cycle}")\n\n')),(0,i.kt)("p",null,"In the callback, ",(0,i.kt)("inlineCode",{parentName:"p"},"update_duty_cycle_by_normalized_od"),", we accept the message object. The message has two important properties: ",(0,i.kt)("inlineCode",{parentName:"p"},"topic")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),". We only care about the payload, which is a string of json. We de-serialize the json to a dict."),(0,i.kt)("p",null,"We only want to update the duty cycle if the job is in state ",(0,i.kt)("inlineCode",{parentName:"p"},"READY")," (read about states ",(0,i.kt)("a",{parentName:"p",href:"/developer_guide/Background%20Jobs/How%20background%20jobs%20work#state-of-a-job"},"here"),"). If this is true, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"set_duty_cycle")," to update our duty cycle. This method handles the logic of clamping the value to be between 0 and 100, and we've stuck a ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," in there so we can watch it change."),(0,i.kt)("p",null,"What is the relationship between normalized OD and duty cycle. We do something naive, and just multiple the initial duty cycle by the normalized OD. So if the ",(0,i.kt)("inlineCode",{parentName:"p"},"initial_duty_cycle")," is 10%, and the culture has 3.5x, then our new duty cycle is 35%. It ",(0,i.kt)("em",{parentName:"p"},"is")," very naive."),(0,i.kt)("p",null,"Finally, we need to think about changing states. What should our job do when the user pauses the job? How do we safely disconnect from the PWM? We use the state callback methods to handle these changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    def on_ready_to_sleeping(self):\n        self._previous_duty_cycle = self.duty_cycle\n        self.set_duty_cycle(0)\n\n    def on_sleeping_to_ready(self):\n        self.set_duty_cycle(self._previous_duty_cycle)\n\n    def on_disconnect(self):\n        self.pwm.cleanup()\n")),(0,i.kt)("p",null,"When we sleep (pause), we record the last ",(0,i.kt)("inlineCode",{parentName:"p"},"duty_cycle")," value, and use that to populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"duty_cycle")," when we re-start the job."),(0,i.kt)("p",null,"Let's recap what we have so far, and save this to a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"motor_driver.py")," (ideally we save it in ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor/plugins/"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\nimport json\n\nfrom pioreactor.config import config\nfrom pioreactor.background_jobs.base import BackgroundJob\nfrom pioreactor.hardware_mappings import PWM_TO_PIN\nfrom pioreactor.utils.pwm import PWM\nfrom pioreactor.utils import clamp\n\n\nclass MotorDriver(BackgroundJob):\n\n    published_settings = {\n        "duty_cycle": {"datatype": "float", "settable": False, "unit": "%"},\n    }\n    _previous_duty_cycle: None\n\n    def __init__(self, hz, initial_duty_cycle, unit, experiment, **kwargs):\n        super().__init__(job_name="motor_driver", unit=unit, experiment=experiment)\n        self.hz = hz\n        self._initial_duty_cycle = initial_duty_cycle\n        self.duty_cycle = initial_duty_cycle\n\n        self.pwm_pin = PWM_TO_PIN[config.getint("PWM_reverse", "motor_driver")]\n\n        self.pwm = PWM(self.pwm_pin, self.hz)\n        self.pwm.lock()\n        self.pwm.start(self.duty_cycle)\n\n        self.start_passive_listeners()\n\n    def update_duty_cycle_by_normalized_od(self, message):\n        payload = json.loads(message.payload)\n\n        if self.state == self.READY:\n            self.set_duty_cycle(payload["od_filtered"] * self._initial_duty_cycle)\n\n    def set_duty_cycle(self, new_duty_cycle):\n        self.duty_cycle = clamp(0, float(new_duty_cycle), 100)\n        self.pwm.change_duty_cycle(self.duty_cycle)\n        self.logger.debug(f"new dc: {self.duty_cycle}")\n\n    def start_passive_listeners(self):\n        self.logger.debug("Listening for od_filtered topics")\n        self.subscribe_and_callback(\n            self.update_duty_cycle_by_normalized_od,\n            f"pioreactor/{self.unit}/{self.experiment}/growth_rate_calculating/od_filtered",\n        )\n\n    def on_ready_to_sleeping(self):\n        self._previous_duty_cycle = self.duty_cycle\n        self.set_duty_cycle(0)\n\n    def on_sleeping_to_ready(self):\n        self.set_duty_cycle(self._previous_duty_cycle)\n\n    def on_disconnect(self):\n        self.logger.debug("disconnecting... will clean up PWM")\n        self.pwm.cleanup()\n')),(0,i.kt)("p",null,"This class works as is, but we also want to develop a command line interface for it so we can run it like ",(0,i.kt)("inlineCode",{parentName:"p"},"pio run motor_driver")," (this command line interface is needed even if we don't want to use the command line directly)."),(0,i.kt)("p",null,"At the bottom of the file, we add:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import click\n\n@click.command(name="motor_driver")\n@click.option(\n    "--initial-dc",\n    default=config.getfloat("motor_driver", "initial_duty_cycle"),\n    show_default=True,\n    type=click.FloatRange(0, 100, clamp=True),\n)\n@click.option(\n    "--hz",\n    default=config.getfloat("motor_driver", "hz"),\n    show_default=True,\n    type=click.FloatRange(1, 10_000, clamp=True),\n)\ndef click_motor_driver(initial_dc, hz):\n    """\n    Start the external motor\n    """\n    from pioreactor.whoami import get_unit_name, get_latest_experiment_name\n\n    job = MotorDriver(\n        hz=hz,\n        initial_duty_cycle=initial_dc,\n        unit=get_unit_name(),\n        experiment=get_latest_experiment_name(),\n    )\n    job.block_until_disconnected()\n')),(0,i.kt)("p",null,"Note the helper functions ",(0,i.kt)("inlineCode",{parentName:"p"},"get_unit_name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"get_latest_experiment_name")," to get the metadata for the class. The method ",(0,i.kt)("inlineCode",{parentName:"p"},"block_until_disconnected")," will halt the program at that line (and only continue when a keyboard interrupt is detected)."),(0,i.kt)("p",null,"If you save it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," folder, you can now execute: ",(0,i.kt)("inlineCode",{parentName:"p"},"pio run motor_driver --initial-dc 10")," and it should just work! You can exit with ctrl-c, and note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_disconnect")," is called when you do this."),(0,i.kt)("h4",{id:"adding-published_settings"},"Adding ",(0,i.kt)("inlineCode",{parentName:"h4"},"published_settings")),(0,i.kt)("p",null,"Suppose we wish to monitor, or log, or just otherwise publish the ",(0,i.kt)("inlineCode",{parentName:"p"},"duty_cycle")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"MotorDriver"),' class. We can "register" the attribute ',(0,i.kt)("inlineCode",{parentName:"p"},"duty_cycle")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"published_settings"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"{4,5,6}","{4,5,6}":!0},'class MotorDriver(BackgroundJob):\n    ...\n\n    published_settings = {\n        "duty_cycle": {"datatype": "float", "settable": False, "unit": "%"},\n    }\n\n    def __init__(...)\n\n')),(0,i.kt)("p",null,"If you open up the MQTT stream using ",(0,i.kt)("inlineCode",{parentName:"p"},"pio mqtt"),", you should see ",(0,i.kt)("inlineCode",{parentName:"p"},"duty_cycle")," appear under the topic ",(0,i.kt)("inlineCode",{parentName:"p"},"pioreactor/<unit>/<experiment>/motor_driver/duty_cycle"),"."))}u.isMDXComponent=!0}}]);