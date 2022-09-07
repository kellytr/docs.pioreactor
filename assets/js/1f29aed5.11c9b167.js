"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[8289],{43177:e=>{e.exports=JSON.parse('{"pluginId":"developer-guide","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/developer-guide/introduction","docId":"introduction"},{"type":"link","label":"Important concepts","href":"/developer-guide/important-concepts","docId":"important-concepts"},{"type":"category","label":"Background jobs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction to background jobs","href":"/developer-guide/intro-background-jobs","docId":"Background jobs/intro-background-jobs"},{"type":"link","label":"Writing a custom background job","href":"/developer-guide/writing-background-jobs","docId":"Background jobs/writing-background-jobs"},{"type":"link","label":"Avoiding when optical density is run","href":"/developer-guide/avoiding-od","docId":"Background jobs/avoiding-od"}]},{"type":"category","label":"Automations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Automations architecture","href":"/developer-guide/intro-automations","docId":"Automations/intro-automations"},{"type":"link","label":"Writing new automations","href":"/developer-guide/writing-automations-1","docId":"Automations/writing-automations-1"},{"type":"link","label":"Another example of automation design","href":"/developer-guide/writing-automations-2","docId":"Automations/writing-automations-2"},{"type":"link","label":"Adding custom pumps to dosing automations","href":"/developer-guide/writing-pump-software","docId":"Automations/writing-pump-software"},{"type":"link","label":"Automation events","href":"/developer-guide/events","docId":"Automations/events"}]},{"type":"category","label":"Plugins","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction to plugins","href":"/developer-guide/intro-plugins","docId":"Plugins/intro-plugins"},{"type":"link","label":"Adding your plugins to the web interface","href":"/developer-guide/adding-plugins-to-ui","docId":"Plugins/adding-plugins-to-ui"},{"type":"link","label":"Turning your plugins into a Python package to share","href":"/developer-guide/plugin-as-python-package","docId":"Plugins/plugin-as-python-package"}]},{"type":"category","label":"Storage","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Data stores in the Pioreactor","href":"/developer-guide/data-stores","docId":"Storage/data-stores"}]},{"type":"category","label":"Local development","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Local development of Pioreactor","href":"/developer-guide/local-development","docId":"Local development/local-development"}]},{"type":"category","label":"Hardware","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"I\xb2C addresses","href":"/developer-guide/i2c-addresses","docId":"Hardware/i2c-addresses"},{"type":"link","label":"Pinout diagram","href":"/developer-guide/pinout","docId":"Hardware/pinout"}]},{"type":"link","label":"The Big Architecture Picture","href":"/developer-guide/architecture","docId":"architecture"}]},"docs":{"architecture":{"id":"architecture","title":"The Big Architecture Picture","description":"","sidebar":"tutorialSidebar"},"Automations/events":{"id":"Automations/events","title":"Automation events","description":"The execute method attached to any automation can return either None, or a AutomationEvent. If the latter, the event will be published to MQTT as a published setting, i.e under the topic pioreactor///dosingautomation/latestevent. This can be used to downstream events that want to know about what events are occurring.","sidebar":"tutorialSidebar"},"Automations/intro-automations":{"id":"Automations/intro-automations","title":"Automations architecture","description":"Automations","sidebar":"tutorialSidebar"},"Automations/writing-automations-1":{"id":"Automations/writing-automations-1","title":"Writing new automations","description":"An automation is a hands-off way to adjust the environment for the microbes. We currently support three types of automations a turbidostat). A LED automation uses the additional LED pockets, and user-supplied LEDs, to modify light into the vial (ex: a photobioreactor or optogenetics experiments). A temperature automation is how users can preprogram the temperature of the vial.","sidebar":"tutorialSidebar"},"Automations/writing-automations-2":{"id":"Automations/writing-automations-2","title":"Another example of automation design","description":"Let\'s design a simple LED automation for Light/Dark cycles. The basic idea is that the LED automation \\"wakes up\\" (specifically: it runs its execute method) every hour, and on specific hours, turns on or turns off the white light LEDs.","sidebar":"tutorialSidebar"},"Automations/writing-pump-software":{"id":"Automations/writing-pump-software","title":"Adding custom pumps to dosing automations","description":"You may want to use a different pumping system for the Pioreactor (or, if you are using the Pioreactor software with a different vessel, you may require different pumps). You can add code for different pumps like so:","sidebar":"tutorialSidebar"},"Background jobs/avoiding-od":{"id":"Background jobs/avoiding-od","title":"Avoiding when optical density is run","description":"It\'s common to want a feature to turn off, or more generally change behaviour, when a sensitive optical density reading is taken. For example, if running a air bubbler, you may want to turn if off before an OD reading is taken, and then turn if back on after.","sidebar":"tutorialSidebar"},"Background jobs/intro-background-jobs":{"id":"Background jobs/intro-background-jobs","title":"Introduction to background jobs","description":"The core unit of \\"work\\" in the Pioreactor software is a background job (called activities in the web interface). Background jobs include odreading, monitor, automation controllers, all the automations_ themselves, etc. Often, a community plugin is a background job (or multiple jobs) that gives your bioreactor new abilities. There are a few core feature of a background job to be highlighted if you intend on working with them.","sidebar":"tutorialSidebar"},"Background jobs/writing-background-jobs":{"id":"Background jobs/writing-background-jobs","title":"Writing a custom background job","description":"Introductory example","sidebar":"tutorialSidebar"},"Hardware/i2c-addresses":{"id":"Hardware/i2c-addresses","title":"I\xb2C addresses","description":"| Name | Chip     | Address |","sidebar":"tutorialSidebar"},"Hardware/pinout":{"id":"Hardware/pinout","title":"Pinout diagram","description":"","sidebar":"tutorialSidebar"},"important-concepts":{"id":"important-concepts","title":"Important concepts","description":"Cluster topology","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"This documentation is for those who want to","sidebar":"tutorialSidebar"},"Local development/local-development":{"id":"Local development/local-development","title":"Local development of Pioreactor","description":"Local development","sidebar":"tutorialSidebar"},"Plugins/adding-plugins-to-ui":{"id":"Plugins/adding-plugins-to-ui","title":"Adding your plugins to the web interface","description":"With custom background jobs or automations, the end-game is really to have it available in the web interface, so you and your users don\'t need to use the command line at all. We\'ve built support for easily adding to the web interface.","sidebar":"tutorialSidebar"},"Plugins/intro-plugins":{"id":"Plugins/intro-plugins","title":"Introduction to plugins","description":"Pioreactor plugins are a way to distribute code to others (or yourself), and avoid having to use the command line each time you invoke your custom code - you should be able to just use the web interface.","sidebar":"tutorialSidebar"},"Plugins/plugin-as-python-package":{"id":"Plugins/plugin-as-python-package","title":"Turning your plugins into a Python package to share","description":"If you\'d like to contribute your plugin to the community, this is done easily by creating a Python package and uploading to PyPi. Let\'s walk through this!","sidebar":"tutorialSidebar"},"Storage/data-stores":{"id":"Storage/data-stores","title":"Data stores in the Pioreactor","description":"The Pioreactor has a few different ways to store data (depending on the requirements). They are:","sidebar":"tutorialSidebar"}}}')}}]);