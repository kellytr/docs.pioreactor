"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[1699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=o,f=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const i={title:"Custom & additional pumps for dosing automations",slug:"/writing-pump-software"},r=void 0,l={unversionedId:"Custom pumps/writing-pump-software",id:"Custom pumps/writing-pump-software",title:"Custom & additional pumps for dosing automations",description:"The following provides solutions to:",source:"@site/developer-guide/08-Custom pumps/20-writing-pump-software.md",sourceDirName:"08-Custom pumps",slug:"/writing-pump-software",permalink:"/developer-guide/writing-pump-software",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Custom & additional pumps for dosing automations",slug:"/writing-pump-software"},sidebar:"tutorialSidebar",previous:{title:"Turning your plugins into a Python package to share",permalink:"/developer-guide/plugin-as-python-package"},next:{title:"Data stores in the Pioreactor",permalink:"/developer-guide/data-stores"}},s={},m=[{value:"Using external pumps with a custom automation",id:"using-external-pumps-with-a-custom-automation",level:3},{value:"Adding additional pumps beyond media and alt-media",id:"adding-additional-pumps-beyond-media-and-alt-media",level:3}],p={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following provides solutions to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"using a different pumping system for the Pioreactor instead of our peristaltic pumps"),(0,o.kt)("li",{parentName:"ul"},"adding additional pumps to the Pioreactor (i.e., more than media and alt-media). These additional pumps\nmay be provided via another system, for example an Arduino.")),(0,o.kt)("h3",{id:"using-external-pumps-with-a-custom-automation"},"Using external pumps with a custom automation"),(0,o.kt)("p",null,"The first thing to do is to add a hook to your custom pump into Pioreactor's software. To do this, we attach new functions to a dosing automation that are invoked when ",(0,o.kt)("inlineCode",{parentName:"p"},"execute_io_action")," is called. These functions will call your logic that runs the external pump. Specifically, if we wish to overwrite the ",(0,o.kt)("inlineCode",{parentName:"p"},"media")," pump, we create a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"add_media_to_bioreactor"),", with signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float)\n")),(0,o.kt)("p",null,"To see this in an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{10-16}","{10-16}":!0},'from pioreactor.automations import DosingAutomationJob\n\nclass CustomPumper(DosingAutomationJob):\n\n    automation_name = "custom_pumper"\n\n    def __init__(self, **kwargs):\n        super().__init__(**kwargs)\n\n    def add_media_to_bioreactor(self, ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n        # overrides the built in add_media_to_bioreactor\n        # add your custom logic here. Example could be interfacing with i2c, serial, PWM, etc.\n        ...\n        pwm = PWM(...)\n        self.logger.info(f"pumping {ml}")\n        return ml\n\n    def execute(self):\n        self.execute_io_action(media_ml=1.0, waste_ml=1.0)\n')),(0,o.kt)("p",null,"Whenever ",(0,o.kt)("inlineCode",{parentName:"p"},"execute_io_action")," is called upon to add media, the custom function ",(0,o.kt)("inlineCode",{parentName:"p"},"add_media_to_bioreactor")," is invoked. Similar logic applies to ",(0,o.kt)("inlineCode",{parentName:"p"},"alt_media"),". Overriding ",(0,o.kt)("inlineCode",{parentName:"p"},"waste")," uses a different name, as the next example shows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{15-18}","{15-18}":!0},'class CustomPumper(DosingAutomationJob):\n\n    automation_name = "custom_pumper"\n\n    def add_media_to_bioreactor(self, ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n        # overrides the built in add_media_to_bioreactor\n        ...\n        return ml\n\n    def add_alt_media_to_bioreactor(self, ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n        # overrides the built in remove_waste_from_bioreactor\n        ...\n        return ml\n\n    def remove_waste_from_bioreactor(self, ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n        # overrides the built in remove_waste_from_bioreactor\n        ...\n        return ml\n\n    def __init__(self, **kwargs):\n        super().__init__(**kwargs)\n\n    def execute(self):\n        self.execute_io_action(media_ml=1.0, alt_media_ml=1.0, waste_ml=2.0)\n\n')),(0,o.kt)("h3",{id:"adding-additional-pumps-beyond-media-and-alt-media"},"Adding additional pumps beyond media and alt-media"),(0,o.kt)("p",null,"In general, we can use this same pattern to add even more pumps to the Pioreactor software, beyond media and alt-media. Let's say we have a third pump, salty-media, that we wish to also use along with media and alt-media. We define the function ",(0,o.kt)("inlineCode",{parentName:"p"},"add_salty_media_to_bioreactor")," with the same signature above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{5-8}","{5-8}":!0},'class ThreePumps(DosingAutomationJob):\n\n    automation_name = "three_pumps"\n\n    def add_salty_media_to_bioreactor(self, ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n        # call an external pump, via i2c, serial, GPIO, etc.,\n        # or pumping_functions.add_salt_media\n        ...\n        return ml\n\n    def __init__(self, **kwargs):\n        super().__init__(**kwargs)\n')),(0,o.kt)("p",null,"With this function defined, we can invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"execute_io_action")," with an additional kwarg, ",(0,o.kt)("inlineCode",{parentName:"p"},"salty_media_ml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    def execute(self):\n        results = self.execute_io_action(waste_ml=3.0, media_ml=1.0, alt_media_ml=1.0, salty_media_ml=1.0)\n")),(0,o.kt)("p",null,"Notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"salty_media_ml=1.0"),' kwarg: this represents how much salty-media volume to add (your pump is responsible to dosing the correct volume). (Note in the above example, media and alt-media are not overwritten, so would use the "traditional" peristaltic pump system provided.)'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In general, ",(0,o.kt)("inlineCode",{parentName:"p"},"execute_io_action")," will try to call a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"add_<name>_to_bioreactor")," if provided with a kwarg ",(0,o.kt)("inlineCode",{parentName:"p"},"<name>_ml"),".")))}d.isMDXComponent=!0}}]);