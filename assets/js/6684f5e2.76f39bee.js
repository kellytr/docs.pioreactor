"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[9709],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),s=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(m,".").concat(d)]||p[d]||c[d]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7018:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],u={},m="Adding custom pumps to dosing automations",s={unversionedId:"Automations/Adding custom pumps to dosing automations",id:"Automations/Adding custom pumps to dosing automations",title:"Adding custom pumps to dosing automations",description:"You may want to use a different pumping system for the Pioreactor (or, if you are using the Pioreactor software with a different vessel, you may require different pumps). You can add code for different pumps like so:",source:"@site/developer_guide/03-Automations/04-Adding custom pumps to dosing automations.md",sourceDirName:"03-Automations",slug:"/Automations/Adding custom pumps to dosing automations",permalink:"/developer_guide/Automations/Adding custom pumps to dosing automations",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Another example of automation design",permalink:"/developer_guide/Automations/Another example of automation design"},next:{title:"Introduction to plugins",permalink:"/developer_guide/Plugins/Introduction to plugins"}},l=[],c={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"#Adding custom pumps to dosing automations"),(0,a.kt)("p",null,"You may want to use a different pumping system for the Pioreactor (or, if you are using the Pioreactor software with a different vessel, you may require different pumps). You can add code for different pumps like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\nimport signal\nimport time\nfrom pioreactor.logging import create_logger\nfrom pioreactor.automations import DosingAutomation\nfrom pioreactor.whoami import get_unit_name, get_latest_experiment_name\n\n\ndef custom_add_media_program(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n    # add your custom logic here: could be interfacing with i2c, etc.\n    # see later in docs for what the signature should look like:\n    ...\n    create_logger("custom_add_media_program").info(f"pumping {ml}")\n    time.sleep(ml * 2)\n    return ml\n\ndef custom_alt_add_media_program(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n    ...\n    return ml\n\ndef custom_remove_media_program(cls, ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n    ...\n    return ml\n\n\n\nclass CustomPump(DosingAutomation):\n\n    automation_name = "custom_pump"\n\n    published_settings = {\n        "duration": {"datatype": "float", "settable": True, "unit": "min"},\n    }\n\n    # overwrite the following variables (all optional) with custom pumping logic\n    add_media_to_bioreactor = custom_add_media_program\n    add_alt_media_to_bioreactor = custom_add_alt_media_program\n    remove_waste_from_bioreactor = custom_remove_media_program\n\n    def __init__(self, **kwargs):\n        super(CustomPump, self).__init__(**kwargs)\n\n    def execute(self):\n        self.execute_io_action(media_ml=1.0, alt_media_ml=1.0, waste_ml=2.0)\n\n\nif __name__ == "__main__":\n\n    from pioreactor.background_jobs.dosing_control import DosingController\n\n    dc = DosingController(\n        "custom_pump",\n        duration=1, # execute every 1 minute\n        unit="test_unit",\n        experiment="test_experiment"\n    )\n    dc.block_until_disconnected()\n')),(0,a.kt)("p",null,"You can also omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"cls")," argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def custom_add_media_program(ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n    # add your custom logic here: could be interfacing with i2c, etc.\n    ...\n    create_logger("custom_add_media_program").info(f"pumping {ml}")\n    time.sleep(ml * 2)\n    return ml\n')),(0,a.kt)("p",null,"but then you need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"staticmethod"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\nclass CustomPump(DosingAutomation):\n\n    automation_name = "custom_pump"\n\n    published_settings = {\n        "duration": {"datatype": "float", "settable": True, "unit": "min"},\n    }\n\n    add_media_to_bioreactor = staticmethod(custom_add_media_program)\n    ...\n')),(0,a.kt)("p",null,"The function signature should look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"function(ml: float, unit: str, experiment: str, source_of_event: str) -> float:\n")))}p.isMDXComponent=!0}}]);