"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/user-guide/introduction","docId":"introduction"},{"type":"category","label":"Getting started","collapsible":true,"collapsed":false,"items":[{"type":"category","label":"Hardware setup","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Before you begin","href":"/user-guide/hardware-setup-intro","docId":"getting-started/hardware-set-up/introduction"},{"type":"link","label":"Assembling the Raspberry Pi and the HAT","href":"/user-guide/rpi-hat-assembly","docId":"getting-started/hardware-set-up/rpi-hat-assembly"},{"type":"link","label":"Wetware assembly","href":"/user-guide/wetware-assembly","docId":"getting-started/hardware-set-up/wetware-assembly"},{"type":"link","label":"Putting it all together","href":"/user-guide/putting-it-together","docId":"getting-started/hardware-set-up/faceplate-all-together"},{"type":"link","label":"Connect the optics system","href":"/user-guide/optics-assembly","docId":"getting-started/hardware-set-up/optics-assembly"}]},{"type":"link","label":"Software installation","href":"/user-guide/software-set-up","docId":"getting-started/software-set-up"}]},{"type":"category","label":"Experiment basics","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Preparing your vial for cultures","href":"/user-guide/prepare-vial-for-cultures","docId":"Experiment basics/prepare-vial-for-cultures"},{"type":"link","label":"Setting up an experiment","href":"/user-guide/set-up-an-experiment","docId":"Experiment basics/set-up-an-experiment"},{"type":"link","label":"Running a self-test","href":"/user-guide/running-self-test","docId":"Experiment basics/running-self-test"},{"type":"link","label":"Activities","href":"/user-guide/activities","docId":"Experiment basics/Activities"},{"type":"link","label":"Exporting data","href":"/user-guide/export-data","docId":"Experiment basics/export-data"},{"type":"link","label":"Optical density, normalization, and growth rates","href":"/user-guide/od-normal-growth-rate","docId":"Experiment basics/od-normal-growth-rate"}]},{"type":"category","label":"Extending your Pioreactor","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Creating a Pioreactor cluster","href":"/user-guide/create-cluster","docId":"Extending your Pioreactor/create-cluster"},{"type":"link","label":"Using community plugins","href":"/user-guide/using-community-plugins","docId":"Extending your Pioreactor/using-community-plugins"},{"type":"link","label":"Hardware calibrations","href":"/user-guide/hardware-calibrations","docId":"Extending your Pioreactor/hardware-calibrations"},{"type":"link","label":"Using a peristaltic pump with your Pioreactor","href":"/user-guide/using-pumps","docId":"Extending your Pioreactor/using-pumps"},{"type":"link","label":"Supplying external power to the Pioreactor\'s PWM channels","href":"/user-guide/external-power","docId":"Extending your Pioreactor/external-power"},{"type":"link","label":"Using the StemmaQT/Qwicc connector","href":"/user-guide/using-stemma-qt","docId":"Extending your Pioreactor/using-stemma-qt"}]},{"type":"category","label":"Automations","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Introduction to Automations","href":"/user-guide/intro-to-automations","docId":"Automations/intro-to-automations"},{"type":"link","label":"Temperature automations","href":"/user-guide/temperature-automations","docId":"Automations/temperature-automations"},{"type":"link","label":"Dosing automations","href":"/user-guide/dosing-automations","docId":"Automations/dosing-automations"},{"type":"link","label":"LED automations","href":"/user-guide/led-automations","docId":"Automations/led-automations"}]},{"type":"category","label":"Advanced","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"Accessing the Raspberry Pi","href":"/user-guide/accessing-raspberry-pi","docId":"Advanced/accessing-raspberry-pi"},{"type":"link","label":"Command line interface","href":"/user-guide/cli","docId":"Advanced/cli"},{"type":"link","label":"Setting up remote access to the web interface","href":"/user-guide/remote-access","docId":"Advanced/remote-access"},{"type":"link","label":"Blue LED flashing & error codes","href":"/user-guide/error-codes","docId":"Advanced/error-codes"},{"type":"link","label":"Configuration via config.ini","href":"/user-guide/configuration","docId":"Advanced/configuration"},{"type":"link","label":"Local access points","href":"/user-guide/local-access-point","docId":"Advanced/local-access-point"},{"type":"link","label":"Writing Pioreactor scripts with Python","href":"/user-guide/intro-python-scripting","docId":"Advanced/intro-python-scripting"}]},{"type":"link","label":"Common questions","href":"/user-guide/common-questions","docId":"common-questions"}]},"docs":{"Advanced/accessing-raspberry-pi":{"id":"Advanced/accessing-raspberry-pi","title":"Accessing the Raspberry Pi","description":"For more customization and control of your Pioreactor, you can access the Raspberry Pi\'s command line. From the command line, you can view more logs, control individual Pioreactors, and more.","sidebar":"tutorialSidebar"},"Advanced/cli":{"id":"Advanced/cli","title":"Command line interface","description":"For those interested, you can use the command line to interact with the Pioreactors. This is called the command line interface (CLI). Log onto either the leader or worker and you can execute the following commands. Full options and up-to-date documentation are available with pio  --help.","sidebar":"tutorialSidebar"},"Advanced/configuration":{"id":"Advanced/configuration","title":"Configuration via config.ini","description":"How configuration works across Pioreactors","sidebar":"tutorialSidebar"},"Advanced/error-codes":{"id":"Advanced/error-codes","title":"Blue LED flashing & error codes","description":"When a Pioreactor successfully boots, the onboard blue LED will flash quickly for 2 seconds, and then stop. However, there are times when the Pioreactor encounters an error, and will use the LED to alert to you that something is wrong. By counting the number of short flashes (per cycle), you can diagnose what might be wrong.","sidebar":"tutorialSidebar"},"Advanced/intro-python-scripting":{"id":"Advanced/intro-python-scripting","title":"Writing Pioreactor scripts with Python","description":"This article isn\'t intended as a crash course in Python, or Pioreactor software, but some helpful ways to write small scripts for your Pioreactor. If interested in learning more, check out the developer docs for detailed information.","sidebar":"tutorialSidebar"},"Advanced/local-access-point":{"id":"Advanced/local-access-point","title":"Local access points","description":"This is a relatively new feature, and if you have problems with using it, or questions, please contact us at info@pioreactor.com \u2764\ufe0f","sidebar":"tutorialSidebar"},"Advanced/remote-access":{"id":"Advanced/remote-access","title":"Setting up remote access to the web interface","description":"If you would like to expose the web interface to view over the internet (no authentication is provided however), you can use a service like Ngrok to do so.","sidebar":"tutorialSidebar"},"Automations/dosing-automations":{"id":"Automations/dosing-automations","title":"Dosing automations","description":"When pairing the Pioreactor with dosing pumps, there are new capabilities and experiments you can run. The Pioreactor is pre-programmed with the following dosing automations. In the below automations, values highlighted like so are configurable.","sidebar":"tutorialSidebar"},"Automations/intro-to-automations":{"id":"Automations/intro-to-automations","title":"Introduction to Automations","description":"So far, we\u2019ve worked with basic activities that you can directly set as a one time thing, typically at the beginning of your experiment (turning stirring, OD, and growth rate readings on). For more complex experiments, we introduce automations.","sidebar":"tutorialSidebar"},"Automations/led-automations":{"id":"Automations/led-automations","title":"LED automations","description":"LED automations are ways to automatically control the 4 available LEDs in the Pioreactor. These LEDs can be used as a light source for photosynthetic microbes, influence the environment of the microbes, as additional sensors, or improve existing sensors.","sidebar":"tutorialSidebar"},"Automations/temperature-automations":{"id":"Automations/temperature-automations","title":"Temperature automations","description":"The heater in the Pioreactor wetware can be programmed to control the temperature of the vial in automated ways. Pioreactor is pre-programmed with the following temperature automations. In the below automations, values highlighted like so are configurable.","sidebar":"tutorialSidebar"},"common-questions":{"id":"common-questions","title":"Common questions","description":"Pioreactor operation","sidebar":"tutorialSidebar"},"Experiment basics/Activities":{"id":"Experiment basics/Activities","title":"Activities","description":"Below is a list of activities that come available with the Pioreactor. Activities can be added with plugins, as well. Read more about using plugins.","sidebar":"tutorialSidebar"},"Experiment basics/export-data":{"id":"Experiment basics/export-data","title":"Exporting data","description":"Experiment data can be exported using the Export data tab on the Pioreactor site.","sidebar":"tutorialSidebar"},"Experiment basics/od-normal-growth-rate":{"id":"Experiment basics/od-normal-growth-rate","title":"Optical density, normalization, and growth rates","description":"Background on optical density","sidebar":"tutorialSidebar"},"Experiment basics/prepare-vial-for-cultures":{"id":"Experiment basics/prepare-vial-for-cultures","title":"Preparing your vial for cultures","description":"1. Preparing the vial","sidebar":"tutorialSidebar"},"Experiment basics/running-self-test":{"id":"Experiment basics/running-self-test","title":"Running a self-test","description":"It\'s advisable to run a self-test on your Pioreactor before experiments. The self-test routine can catch common hardware errors that may compromise your data collection.","sidebar":"tutorialSidebar"},"Experiment basics/set-up-an-experiment":{"id":"Experiment basics/set-up-an-experiment","title":"Setting up an experiment","description":"Before starting an experiment, it\'s useful to run a self test to confirm that your Pioreactors are all working as expected. How to run a self-test.","sidebar":"tutorialSidebar"},"Extending your Pioreactor/create-cluster":{"id":"Extending your Pioreactor/create-cluster","title":"Creating a Pioreactor cluster","description":"Pioreactors are able to be used as individual units, or in concert with other Pioreactors. In either case, a Pioreactor needs to be assigned as a leader. The leader unit controls other Pioreactors (and that may include itself), stores the database, hosts the web interface, and is the interface between users and the hardware.","sidebar":"tutorialSidebar"},"Extending your Pioreactor/external-power":{"id":"Extending your Pioreactor/external-power","title":"Supplying external power to the Pioreactor\'s PWM channels","description":"Some applications require more power to your Pioreactor if it is heavily using lots of peripherals. This may include using a more powerful pumps, more powerful external LEDs, etc. Or, if you see warning messages that reference under voltage or throttling, you probably are asking the Pioreactor to do too much given its default power supply.","sidebar":"tutorialSidebar"},"Extending your Pioreactor/hardware-calibrations":{"id":"Extending your Pioreactor/hardware-calibrations","title":"Hardware calibrations","description":"Hardware calibrations serve as a method to get accurate performance from your Pioreactor.","sidebar":"tutorialSidebar"},"Extending your Pioreactor/using-community-plugins":{"id":"Extending your Pioreactor/using-community-plugins","title":"Using community plugins","description":"The Pioreactor comes with a large set of functionality and behaviour to accomplish most projects. For example, continuous culturing, optical density reading, and stable temperatures are available out-of-the-box. However, the specifics and range of how people use bioreactors goes far beyond what we could ever cover. That\'s why Pioreactor has added a platform so that community members can make their own extensions and share them with others. We call these plugins. (Below is how to install plugins - if you are looking to create your own plugins, see here.)","sidebar":"tutorialSidebar"},"Extending your Pioreactor/using-pumps":{"id":"Extending your Pioreactor/using-pumps","title":"Using a peristaltic pump with your Pioreactor","description":"Adding pumps in configuration","sidebar":"tutorialSidebar"},"Extending your Pioreactor/using-stemma-qt":{"id":"Extending your Pioreactor/using-stemma-qt","title":"Using the StemmaQT/Qwicc connector","description":"The Pioreactor HAT comes with a connector for the StemmaQT / Qwiic connector that can be used to attack additional hardware for your Pioreactor. See image below:","sidebar":"tutorialSidebar"},"getting-started/hardware-set-up/faceplate-all-together":{"id":"getting-started/hardware-set-up/faceplate-all-together","title":"Putting it all together","description":"*\\tFan","sidebar":"tutorialSidebar"},"getting-started/hardware-set-up/introduction":{"id":"getting-started/hardware-set-up/introduction","title":"Before you begin","description":"Below are the instructions for assembling up your Pioreactor. You can expect the assembly to take approximately 15 minutes.","sidebar":"tutorialSidebar"},"getting-started/hardware-set-up/optics-assembly":{"id":"getting-started/hardware-set-up/optics-assembly","title":"Connect the optics system","description":"1.\\tOpen the flat flex cable connector on the HAT by pulling the tabs outward, like previously.","sidebar":"tutorialSidebar"},"getting-started/hardware-set-up/rpi-hat-assembly":{"id":"getting-started/hardware-set-up/rpi-hat-assembly","title":"Assembling the Raspberry Pi and the HAT","description":"You will need:","sidebar":"tutorialSidebar"},"getting-started/hardware-set-up/wetware-assembly":{"id":"getting-started/hardware-set-up/wetware-assembly","title":"Wetware assembly","description":"You will need:","sidebar":"tutorialSidebar"},"getting-started/software-set-up":{"id":"getting-started/software-set-up","title":"Software installation","description":"Install the Pioreactor software onto the Raspberry Pi","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"The Pioreactor is an open-source, affordable, and extensible bioreactor platform. The goal is to enable biologists, educators, DIYers, biohackers, and enthusiasts to be able to reliably control and study the growth of microorganisms.","sidebar":"tutorialSidebar"}}}')}}]);