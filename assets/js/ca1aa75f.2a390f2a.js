"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[3774],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9356:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={slug:"/events"},l="Automation events",u={unversionedId:"Automations/events",id:"Automations/events",title:"Automation events",description:"The execute method attached to any automation can return either None, or a AutomationEvent. If the latter, the event will be published to MQTT as a published setting, i.e under the topic pioreactor///dosingautomation/latestevent. This can be used to downstream events that want to know about what events are occurring.",source:"@site/developer-guide/03-Automations/05-events.md",sourceDirName:"03-Automations",slug:"/events",permalink:"/developer-guide/events",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/events"},sidebar:"tutorialSidebar",previous:{title:"Adding custom pumps to dosing automations",permalink:"/developer-guide/writing-pump-software"},next:{title:"Introduction to plugins",permalink:"/developer-guide/intro-plugins"}},p=[{value:"Using events, and creating your own",id:"using-events-and-creating-your-own",children:[],level:3}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"automation-events"},"Automation events"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," method attached to any automation can return either ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),", or a ",(0,r.kt)("inlineCode",{parentName:"p"},"AutomationEvent"),". If the latter, the event will be published to MQTT as a published setting, i.e under the topic ",(0,r.kt)("inlineCode",{parentName:"p"},"pioreactor/<unit>/<experiment>/dosing_automation/latest_event"),". This can be used to downstream events that want to know about what events are occurring."),(0,r.kt)("p",null,"It may make more sense to look at a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"execute"),". This is from the builtin ",(0,r.kt)("inlineCode",{parentName:"p"},"Turbidostat")," automation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Turbidostat(DosingAutomationJob):\n    ...\n\n    def execute(self) -> events.DilutionEvent | events.NoEvent:\n        if self.latest_od >= self.target_od:\n            self.execute_io_action(media_ml=self.volume, waste_ml=self.volume)\n            return events.DilutionEvent(\n                f\"latest OD={self.latest_od:.2f} >= target OD={self.target_od:.2f}\",\n                {'latest_od': self.latest_od, 'target_od': self.target_od}\n            )\n        else:\n            return events.NoEvent(\n                f\"latest OD={self.latest_od:.2f} < target OD={self.target_od:.2f}\",\n                {'latest_od': self.latest_od, 'target_od': self.target_od}\n            )\n")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," runs, either a ",(0,r.kt)("inlineCode",{parentName:"p"},"DilutionEvent")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"NoEvent")," is returned, and this is test to MQTT. All events take up two (optional) arguments: a message, and a dictionary of arbitrary data. In this case, we've included a small message of ",(0,r.kt)("em",{parentName:"p"},"why")," the dosing did or did not occur, and included some metadata about the optical densities."),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," returns an event, it will be published to MQTT. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'pioreactor/unit/demo_exp/dosing_automation/latest_event   {"event_name":"NoEvent","message":"latest OD=0.98 < target OD=1.00","data":{"latest_od":0.98,"target_od":1.0}}\n')),(0,r.kt)("p",null,"This can be listed in other jobs, and acted on, if needed."),(0,r.kt)("h3",{id:"using-events-and-creating-your-own"},"Using events, and creating your own"),(0,r.kt)("p",null,"Pioreactor ships with some default events. They are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"pioreactor.automation.events"),". Events are simple subclass of ",(0,r.kt)("inlineCode",{parentName:"p"},"events.AutomationEvent"),", so events behave and look the same, except for their name."),(0,r.kt)("p",null,"You can create custom automations, too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"From pioreactor.automations.events import AutomationEvent\n\nclass ExampleEvent(AutomationEvent):\n    pass\n\n\nevent = ExampleEvent(\"my message\", {'some_data': 1.0})\n")))}d.isMDXComponent=!0}}]);