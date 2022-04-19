"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[9684],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,_=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(_,r(r({ref:t},d),{},{components:n})):i.createElement(_,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1857:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={slug:"/writing-background-jobs"},s="Writing a custom background job",p={unversionedId:"Background jobs/writing-background-jobs",id:"Background jobs/writing-background-jobs",title:"Writing a custom background job",description:"Introductory example",source:"@site/developer-guide/02-Background jobs/02-writing-background-jobs.md",sourceDirName:"02-Background jobs",slug:"/writing-background-jobs",permalink:"/developer-guide/writing-background-jobs",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/writing-background-jobs"},sidebar:"tutorialSidebar",previous:{title:"Introduction to background jobs",permalink:"/developer-guide/intro-background-jobs"},next:{title:"Automations architecture",permalink:"/developer-guide/intro-automations"}},d=[{value:"Introductory example",id:"introductory-example",children:[],level:2},{value:"More advanced example",id:"more-advanced-example",children:[{value:"Adding <code>published_settings</code>",id:"adding-published_settings",children:[],level:4}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"writing-a-custom-background-job"},"Writing a custom background job"),(0,o.kt)("h2",{id:"introductory-example"},"Introductory example"),(0,o.kt)("p",null,"For this introductory example, we'll create a background job that controls an LED in channel ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," on the Pioreactor HAT. When the job ends (either by us exiting, or via a MQTT signal), the LED will turn off."),(0,o.kt)("p",null,"We start with some imports, and a class definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pioreactor.background_jobs.base import BackgroundJob\nfrom pioreactor.actions.led_intensity import led_intensity\n\nclass IntroJob(BackgroundJob):\n\n")),(0,o.kt)("p",null,"We've given the class the simple name of ",(0,o.kt)("inlineCode",{parentName:"p"},"IntroJob"),". Our background job must inherit from ",(0,o.kt)("inlineCode",{parentName:"p"},"BackgroundJob"),". Next we'll define some initial attributes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{6-10}","{6-10}":!0},'from pioreactor.background_jobs.base import BackgroundJob\nfrom pioreactor.actions.led_intensity import led_intensity\n\nclass IntroJob(BackgroundJob):\n\n    published_settings = {\n        \'intensity\': {\'datatype\': float, "unit": "%", "settable": True}\n    }\n    intensity = 0\n    LED_channel = "A"\n')),(0,o.kt)("p",null,"We declare that the ",(0,o.kt)("inlineCode",{parentName:"p"},"intensity")," attribute is to be published and controllable over MQTT. We'll see this in action later. We also set ",(0,o.kt)("inlineCode",{parentName:"p"},"intensity")," to be 0 initially, and use channel ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," to control."),(0,o.kt)("p",null,"Next we add the ",(0,o.kt)("inlineCode",{parentName:"p"},"__init__"),", which should always accept at least ",(0,o.kt)("inlineCode",{parentName:"p"},"unit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"experiment")," (as strings). ",(0,o.kt)("inlineCode",{parentName:"p"},"unit")," refers to the name of the Pioreactor (the hostname), and ",(0,o.kt)("inlineCode",{parentName:"p"},"experiment")," is the experiment the job is associated to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{12,13}","{12,13}":!0},'from pioreactor.background_jobs.base import BackgroundJob\nfrom pioreactor.actions.led_intensity import led_intensity\n\nclass IntroJob(BackgroundJob):\n\n    published_settings = {\n        \'intensity\': {\'datatype\': float, "unit": "%", "settable": True}\n    }\n    intensity = 0\n    LED_channel = "A"\n\n    def __init__(self, unit, experiment):\n        super().__init__(job_name="intro_job", unit=unit, experiment=experiment)\n\n')),(0,o.kt)("p",null,"We call ",(0,o.kt)("inlineCode",{parentName:"p"},"super")," to initialize the super class, ",(0,o.kt)("inlineCode",{parentName:"p"},"BackgroundJob"),", with the unit, experiment, and ",(0,o.kt)("inlineCode",{parentName:"p"},"job_name"),": the ",(0,o.kt)("inlineCode",{parentName:"p"},"job_name")," is usually the snake-case of the class name."),(0,o.kt)("p",null,"Next, we define a function, ",(0,o.kt)("inlineCode",{parentName:"p"},"set_intensity"),"m that will be called whenever ",(0,o.kt)("inlineCode",{parentName:"p"},"intensity")," is changed remotely (we'll do this later). The ",(0,o.kt)("inlineCode",{parentName:"p"},"set_intensity")," function updates ",(0,o.kt)("inlineCode",{parentName:"p"},"intensity")," ",(0,o.kt)("em",{parentName:"p"},"and")," will change the onboard LED power for channel ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),". Remember, whenever the attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"intensity")," changes, it's published to MQTT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{15,16,17}","{15,16,17}":!0},'from pioreactor.background_jobs.base import BackgroundJob\nfrom pioreactor.actions.led_intensity import led_intensity\n\nclass IntroJob(BackgroundJob):\n\n    published_settings = {\n        \'intensity\': {\'datatype\': float, "unit": "%", "settable": True}\n    }\n    intensity = 0\n    LED_channel = "A"\n\n    def __init__(self, unit, experiment):\n        super().__init__(job_name="intro_job", unit=unit, experiment=experiment)\n\n    def set_intensity(self, intensity):\n        self.intensity = intensity\n        led_intensity(channels=self.LED_channel, intensities=self.intensity)\n')),(0,o.kt)("p",null,'Next, we create the "on exit" behaviour (turn off LED) by overwriting the ',(0,o.kt)("inlineCode",{parentName:"p"},"on_disconnected")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{19-20}","{19-20}":!0},'from pioreactor.background_jobs.base import BackgroundJob\nfrom pioreactor.actions.led_intensity import led_intensity\n\nclass IntroJob(BackgroundJob):\n\n    published_settings = {\n        \'intensity\': {\'datatype\': float, "unit": "%", "settable": True}\n    }\n    intensity = 0\n    LED_channel = "A"\n\n    def __init__(self, unit, experiment):\n        super().__init__(job_name="intro_job", unit=unit, experiment=experiment)\n\n    def set_intensity(self, intensity):\n        self.intensity = intensity\n        led_intensity(channels=self.LED_channel, intensities=self.intensity)\n\n    def on_disconnected(self):\n        self.set_intensity(0)\n')),(0,o.kt)("p",null,"Finally, we add a small script at the bottom to run our new job when the Python file is invoked:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{22-30}","{22-30}":!0},'from pioreactor.background_jobs.base import BackgroundJob\nfrom pioreactor.actions.led_intensity import led_intensity\n\nclass IntroJob(BackgroundJob):\n\n    published_settings = {\n        \'intensity\': {\'datatype\': float, "unit": "%", "settable": True}\n    }\n    intensity = 0\n    LED_channel = "A"\n\n    def __init__(self, unit, experiment):\n        super().__init__(job_name="intro_job", unit=unit, experiment=experiment)\n\n    def set_intensity(self, intensity):\n        self.intensity = intensity\n        led_intensity(channels=self.LED_channel, intensities=self.intensity)\n\n    def on_disconnected(self):\n        self.set_intensity(0)\n\nif __name__ == "__main__":\n    from pioreactor.whoami import get_unit_name\n    from pioreactor.whoami import get_latest_experiment_name\n\n    job = IntroJob(unit=get_unit_name(), experiment=get_latest_experiment_name())\n\n\n    job.block_until_disconnected()\n')),(0,o.kt)("p",null,"If you save this code in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"intro_job.py"),", we can run it from the command line: ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 intro_job.py"),". In another terminal window, try the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pio mqtt -t "pioreactor/+/+/intro_job/#"\n')),(0,o.kt)("p",null,"You should see some metadata about this job (",(0,o.kt)("inlineCode",{parentName:"p"},"$state")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"ready"),", some info about ",(0,o.kt)("inlineCode",{parentName:"p"},"intensity"),"), but also you should see the current value of ",(0,o.kt)("inlineCode",{parentName:"p"},"intensity"),", namely 0. You can cancel the job with ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl-c")," in the original terminal window."),(0,o.kt)("p",null,"Adding an additional line in ",(0,o.kt)("inlineCode",{parentName:"p"},"intro_job.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{6}","{6}":!0},'if __name__ == "__main__":\n    from pioreactor.whoami import get_unit_name\n    from pioreactor.whoami import get_latest_experiment_name\n\n    job = IntroJob(unit=get_unit_name(), experiment=get_latest_experiment_name())\n    job.set_intensity(10)\n\n    job.block_until_disconnected()\n')),(0,o.kt)("p",null,"And rerunning the job, you should see MQTT have updated ",(0,o.kt)("inlineCode",{parentName:"p"},"intensity")," data."),(0,o.kt)("h2",{id:"more-advanced-example"},"More advanced example"),(0,o.kt)("p",null,"We'll explain how a more advanced background job is written using the example application of a job that controls an external motor (the load). This motor may control a larger stirrer, or shaker, or air-pump, but is regulated by the amount of voltage applied - that is, the more voltage applied, the more output from the motor."),(0,o.kt)("p",null,"The Pioreactor HAT has four available pulse-width modulation (PWM) outputs, with programmable frequency and duty cycle (DC). For this example, we'll set a frequency that works for the motor. We also wish to increase the DC in proportion to the normalized optical density (this may represent needing to add more air, or shaking, as the culture's oxygen requirements increase). Let's start with the some imports and the class' ",(0,o.kt)("inlineCode",{parentName:"p"},"__init__"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom pioreactor.background_jobs.base import BackgroundJob\n\n\nclass MotorDriver(BackgroundJob):\n\n    def __init__(self, hz, initial_duty_cycle, unit, experiment, **kwargs):\n        super().__init__(job_name="motor_driver", unit=unit, experiment=experiment)\n        self.hz = hz\n        self._initial_duty_cycle = initial_duty_cycle\n        self.duty_cycle = initial_duty_cycle\n        ...\n\n')),(0,o.kt)("p",null,"We see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"__init__")," requires the two parameters for PWM: ",(0,o.kt)("inlineCode",{parentName:"p"},"hz")," and an ",(0,o.kt)("inlineCode",{parentName:"p"},"inital_duty_cycle"),". One rarely changes the hertz of PWM, so its fixed - but we do often change the duty cycle, so we create a variable ",(0,o.kt)("inlineCode",{parentName:"p"},"self.duty_cycle")," and assign it the ",(0,o.kt)("inlineCode",{parentName:"p"},"initial_duty_cycle"),". We also need to supply the unit name (the hostname), and the experiment name. We'll populate these at run time later. Finally, we need a ",(0,o.kt)("inlineCode",{parentName:"p"},"job_name")," to pass to the super class, ",(0,o.kt)("inlineCode",{parentName:"p"},"BackgroundJob"),'. This should be unique from other jobs that may run. Often we use the "snake_case" of the class name as the job name. We give it the job name ',(0,o.kt)("inlineCode",{parentName:"p"},"motor_driver"),"."),(0,o.kt)("p",null,"We next initialize the PWM code (this is still in the ",(0,o.kt)("inlineCode",{parentName:"p"},"__init__"),") that controls the PWM outputs on the HAT, and add more imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pioreactor.hardware_mappings import PWM_TO_PIN\nfrom pioreactor.utils.pwm import PWM\nfrom pioreactor.config import config\n\n...\n\n\n    def __init__(...)\n        ...\n\n        pwm_pin = PWM_TO_PIN[config.getint("PWM_reverse", "motor_driver")]\n        self.pwm = PWM(pwm_pin, self.hz)\n        self.pwm.lock()\n\n        ...\n\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"PWM_TO_PIN")," is lookup that maps settings in your config.ini to the Raspberry Pi's GPIO pins (which we use for the output PWM). Which means we also need update the ",(0,o.kt)("inlineCode",{parentName:"p"},"[PWM]")," section in your config.ini:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[PWM]\n1=motor_driver\n2=media\n3=alt_media\n4=waste\n5=heater\n")),(0,o.kt)("p",null,"In the above code, we next initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"PWM")," class. This is an abstraction to make working with the PWM hardware easier. For example, the next line, ",(0,o.kt)("inlineCode",{parentName:"p"},"self.pwm.lock()"),", will put a lock on that Raspberry Pi GPIO pin, making it difficult for other processes to use it by mistake. We haven't started the PWM yet, we'll do that later."),(0,o.kt)("p",null,"Next, we want to include the behavior to update the duty cycle when we get new normalized OD readings. This is typically done with a callback when a new MQTT message is received. See code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def __init__(...)\n        ...\n        ...\n\n        self.start_passive_listeners()\n\n    ...\n\n    def start_passive_listeners(self):\n        self.logger.debug("Listening for od_filtered topics")\n        self.subscribe_and_callback(\n            self.update_duty_cycle_by_normalized_od,\n            f"pioreactor/{self.unit}/{self.experiment}/growth_rate_calculating/od_filtered",\n        )\n')),(0,o.kt)("p",null,"Note the ",(0,o.kt)("inlineCode",{parentName:"p"},"self.logger.debug(...)")," line. Each background job has a Python logger that will log to four places: MQTT, the SQLite3 database, the terminal, and the log file on disk. See Python's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/logging.html"},"logging module")," for more."),(0,o.kt)("p",null,"The callback, ",(0,o.kt)("inlineCode",{parentName:"p"},"update_duty_cycle_by_normalized_od"),", needs to be written:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import json\n\n...\n\n    def update_duty_cycle_by_normalized_od(self, message):\n        payload = json.loads(message.payload)\n\n        if self.state == self.READY:\n            self.set_duty_cycle(payload["od_filtered"] * self._initial_duty_cycle)\n\n    def set_duty_cycle(self, new_duty_cycle):\n        self.duty_cycle = clamp(0, float(new_duty_cycle), 100)\n        self.pwm.change_duty_cycle(self.duty_cycle)\n        self.logger.debug(f"new dc: {self.duty_cycle}")\n\n')),(0,o.kt)("p",null,"In the callback, ",(0,o.kt)("inlineCode",{parentName:"p"},"update_duty_cycle_by_normalized_od"),", we accept the message object. The message has two important properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"topic")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"payload"),". We only care about the payload, which is a string of json. We de-serialize the json to a dict."),(0,o.kt)("p",null,"We only want to update the duty cycle if the job is in state ",(0,o.kt)("inlineCode",{parentName:"p"},"READY")," (read about states ",(0,o.kt)("a",{parentName:"p",href:"/developer-guide/intro-background-jobs#state-of-a-job"},"here"),"). If this is true, we call ",(0,o.kt)("inlineCode",{parentName:"p"},"set_duty_cycle")," to update our duty cycle. This method handles the logic of clamping the value to be between 0 and 100, and we've stuck a ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," in there so we can watch it change."),(0,o.kt)("p",null,"What is the relationship between normalized OD and duty cycle. We do something naive, and just multiple the initial duty cycle by the normalized OD. So if the ",(0,o.kt)("inlineCode",{parentName:"p"},"initial_duty_cycle")," is 10%, and the culture has 3.5x, then our new duty cycle is 35%. It ",(0,o.kt)("em",{parentName:"p"},"is")," very naive."),(0,o.kt)("p",null,"Finally, we need to think about changing states. What should our job do when the user pauses the job? How do we safely disconnect from the PWM? We use the state callback methods to handle these changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    def on_init_to_ready(self):\n        self.pwm.start(self.duty_cycle)\n\n    def on_ready_to_sleeping(self):\n        self._previous_duty_cycle = self.duty_cycle\n        self.set_duty_cycle(0)\n\n    def on_sleeping_to_ready(self):\n        self.set_duty_cycle(self._previous_duty_cycle)\n\n    def on_disconnected(self):\n        self.pwm.cleanup()\n")),(0,o.kt)("p",null,"After the job moves from ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ready")," (implicitly done after the ",(0,o.kt)("inlineCode",{parentName:"p"},"__init__")," finishes), the function ",(0,o.kt)("inlineCode",{parentName:"p"},"on_init_to_ready")," is called. This starts the PWM, which starts the motor."),(0,o.kt)("p",null,"When we sleep (pause), we record the last ",(0,o.kt)("inlineCode",{parentName:"p"},"duty_cycle")," value, and use that to populate the ",(0,o.kt)("inlineCode",{parentName:"p"},"duty_cycle")," when we re-start the job."),(0,o.kt)("p",null,"Let's recap what we have so far, and save this to a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"motor_driver.py")," (ideally we save it in ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor/plugins/"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\nimport json\n\nfrom pioreactor.config import config\nfrom pioreactor.background_jobs.base import BackgroundJob\nfrom pioreactor.hardware_mappings import PWM_TO_PIN\nfrom pioreactor.utils.pwm import PWM\nfrom pioreactor.utils import clamp\n\n\nclass MotorDriver(BackgroundJob):\n\n    published_settings = {\n        "duty_cycle": {"datatype": "float", "settable": False, "unit": "%"},\n    }\n    _previous_duty_cycle: None\n\n    def __init__(self, hz, initial_duty_cycle, unit, experiment, **kwargs):\n        super().__init__(job_name="motor_driver", unit=unit, experiment=experiment)\n        self.hz = hz\n        self._initial_duty_cycle = initial_duty_cycle\n        self.duty_cycle = initial_duty_cycle\n\n        self.pwm_pin = PWM_TO_PIN[config.getint("PWM_reverse", "motor_driver")]\n\n        self.pwm = PWM(self.pwm_pin, self.hz)\n        self.pwm.lock()\n\n        self.start_passive_listeners()\n\n    def update_duty_cycle_by_normalized_od(self, message):\n        payload = json.loads(message.payload)\n\n        if self.state == self.READY:\n            self.set_duty_cycle(payload["od_filtered"] * self._initial_duty_cycle)\n\n    def set_duty_cycle(self, new_duty_cycle):\n        self.duty_cycle = clamp(0, float(new_duty_cycle), 100)\n        self.pwm.change_duty_cycle(self.duty_cycle)\n        self.logger.debug(f"new dc: {self.duty_cycle}")\n\n    def start_passive_listeners(self):\n        self.logger.debug("Listening for od_filtered topics")\n        self.subscribe_and_callback(\n            self.update_duty_cycle_by_normalized_od,\n            f"pioreactor/{self.unit}/{self.experiment}/growth_rate_calculating/od_filtered",\n        )\n\n    def on_init_to_ready(self):\n        self.pwm.start(self.duty_cycle)\n\n    def on_ready_to_sleeping(self):\n        self._previous_duty_cycle = self.duty_cycle\n        self.set_duty_cycle(0)\n\n    def on_sleeping_to_ready(self):\n        self.set_duty_cycle(self._previous_duty_cycle)\n\n    def on_disconnected(self):\n        self.logger.debug("disconnecting... will clean up PWM")\n        self.pwm.cleanup()\n')),(0,o.kt)("p",null,"This class works as is, but we also want to develop a command line interface for it so we can run it like ",(0,o.kt)("inlineCode",{parentName:"p"},"pio run motor_driver"),"."),(0,o.kt)("p",null,"At the bottom of the file, we add:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import click\n\n@click.command(name="motor_driver")\n@click.option(\n    "--initial-dc",\n    default=config.getfloat("motor_driver", "initial_duty_cycle"),\n    show_default=True,\n    type=click.FloatRange(0, 100, clamp=True),\n)\n@click.option(\n    "--hz",\n    default=config.getfloat("motor_driver", "hz"),\n    show_default=True,\n    type=click.FloatRange(1, 10_000, clamp=True),\n)\ndef click_motor_driver(initial_dc, hz):\n    """\n    Start the external motor\n    """\n    from pioreactor.whoami import get_unit_name, get_latest_experiment_name\n\n    job = MotorDriver(\n        hz=hz,\n        initial_duty_cycle=initial_dc,\n        unit=get_unit_name(),\n        experiment=get_latest_experiment_name(),\n    )\n    job.block_until_disconnected()\n')),(0,o.kt)("p",null,"Note the helper functions ",(0,o.kt)("inlineCode",{parentName:"p"},"get_unit_name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get_latest_experiment_name")," to get the metadata for the class. The method ",(0,o.kt)("inlineCode",{parentName:"p"},"block_until_disconnected")," will halt the program at that line (and only continue when a keyboard interrupt is detected)."),(0,o.kt)("p",null,"If you save it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," folder, you can now execute: ",(0,o.kt)("inlineCode",{parentName:"p"},"pio run motor_driver --initial-dc 10")," and it should just work! You can exit with ctrl-c, and note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"on_disconnect")," is called when you do this."),(0,o.kt)("h4",{id:"adding-published_settings"},"Adding ",(0,o.kt)("inlineCode",{parentName:"h4"},"published_settings")),(0,o.kt)("p",null,"Suppose we wish to monitor, or log, or just otherwise publish the ",(0,o.kt)("inlineCode",{parentName:"p"},"duty_cycle")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"MotorDriver"),' class. We can "register" the attribute ',(0,o.kt)("inlineCode",{parentName:"p"},"duty_cycle")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"published_settings"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{4,5,6}","{4,5,6}":!0},'class MotorDriver(BackgroundJob):\n    ...\n\n    published_settings = {\n        "duty_cycle": {"datatype": "float", "settable": False, "unit": "%"},\n    }\n\n    def __init__(...)\n\n')),(0,o.kt)("p",null,"If you open up the MQTT stream using ",(0,o.kt)("inlineCode",{parentName:"p"},"pio mqtt"),", you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"duty_cycle")," appear under the topic ",(0,o.kt)("inlineCode",{parentName:"p"},"pioreactor/<unit>/<experiment>/motor_driver/duty_cycle"),"."))}u.isMDXComponent=!0}}]);