"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[6752],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,f=c["".concat(m,".").concat(d)]||c[d]||l[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1594:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={slug:"/writing-pump-software"},m="Adding custom pumps to dosing automations",s={unversionedId:"Automations/writing-pump-software",id:"Automations/writing-pump-software",title:"Adding custom pumps to dosing automations",description:"You may want to use a different pumping system for the Pioreactor (or, if you are using the Pioreactor software with a different vessel, you may require different pumps). You can add code for different pumps like so:",source:"@site/developer-guide/03-Automations/04-writing-pump-software.md",sourceDirName:"03-Automations",slug:"/writing-pump-software",permalink:"/developer-guide/writing-pump-software",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/writing-pump-software"},sidebar:"tutorialSidebar",previous:{title:"Another example of automation design",permalink:"/developer-guide/writing-automations-2"},next:{title:"Introduction to plugins",permalink:"/developer-guide/intro-plugins"}},p=[],l={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-custom-pumps-to-dosing-automations"},"Adding custom pumps to dosing automations"),(0,i.kt)("p",null,"You may want to use a different pumping system for the Pioreactor (or, if you are using the Pioreactor software with a different vessel, you may require different pumps). You can add code for different pumps like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\nimport signal\nimport time\nfrom pioreactor.logging import create_logger\nfrom pioreactor.automations import DosingAutomationJob\nfrom pioreactor.whoami import get_unit_name, get_latest_experiment_name\n\n\ndef custom_add_media_program(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n    # add your custom logic here: could be interfacing with i2c, etc.\n    # see later in docs for what the signature should look like:\n    ...\n    create_logger("custom_add_media_program").info(f"pumping {ml}")\n    time.sleep(ml * 2)\n    return ml\n\ndef custom_alt_add_media_program(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n    ...\n    return ml\n\ndef custom_remove_media_program(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n    ...\n    return ml\n\n\n\nclass CustomPumper(DosingAutomationJob):\n\n    automation_name = "custom_pumper"\n\n    published_settings = {\n        "duration": {"datatype": "float", "settable": True, "unit": "min"},\n    }\n\n    # overwrite the following variables (all optional) with custom pumping logic\n    add_media_to_bioreactor = custom_add_media_program\n    add_alt_media_to_bioreactor = custom_add_alt_media_program\n    remove_waste_from_bioreactor = custom_remove_media_program\n\n    def __init__(self, **kwargs):\n        super(CustomPump, self).__init__(**kwargs)\n\n    def execute(self):\n        self.execute_io_action(media_ml=1.0, alt_media_ml=1.0, waste_ml=2.0)\n\n\nif __name__ == "__main__":\n\n    from pioreactor.background_jobs.dosing_control import DosingController\n\n    dc = DosingController(\n        "custom_pumper",\n        duration=1, # execute every 1 minute\n        unit="test_unit",\n        experiment="test_experiment"\n    )\n    dc.block_until_disconnected()\n')),(0,i.kt)("p",null,"You can also omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"cls")," argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def custom_add_media_program(ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n    # add your custom logic here: could be interfacing with i2c, etc.\n    ...\n    create_logger("custom_add_media_program").info(f"pumping {ml}")\n    time.sleep(ml * 2)\n    return ml\n')),(0,i.kt)("p",null,"but then you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"staticmethod"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\nclass CustomPump(DosingAutomationJob):\n\n    automation_name = "custom_pump"\n\n    published_settings = {\n        "duration": {"datatype": "float", "settable": True, "unit": "min"},\n    }\n\n    add_media_to_bioreactor = staticmethod(custom_add_media_program)\n    ...\n')),(0,i.kt)("p",null,"The function signature should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"function(ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n")))}c.isMDXComponent=!0}}]);