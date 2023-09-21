"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[3866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"Experiment profiles schema",slug:"/experiment-profiles-schema"},a=void 0,s={unversionedId:"Extending your Pioreactor/Experiment Profiles/experiment-profiles-schema",id:"Extending your Pioreactor/Experiment Profiles/experiment-profiles-schema",title:"Experiment profiles schema",description:"Max number of actions",source:"@site/user-guide/03-Extending your Pioreactor/04-Experiment Profiles/10-experiment-profiles-schema.md",sourceDirName:"03-Extending your Pioreactor/04-Experiment Profiles",slug:"/experiment-profiles-schema",permalink:"/user-guide/experiment-profiles-schema",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Experiment profiles schema",slug:"/experiment-profiles-schema"},sidebar:"tutorialSidebar",previous:{title:"Creating and editing experiment profiles",permalink:"/user-guide/create-edit-experiment-profiles"},next:{title:"Standard curves for OD600 readings",permalink:"/user-guide/calibrate-od600"}},p={},l=[{value:"Max number of actions",id:"max-number-of-actions",level:3},{value:"Examples",id:"examples",level:3}],c={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Main structure\nexperiment_profile_name: <string> # Name of the experiment profile\n\nmetadata: # Optional\n  author: <string> # Author of the experiment profile\n  description: <string> # Description of the experiment profile\n\nplugins: # Optional\n  - name: <string> # Name of the plugin\n    min_version: <string> # Minimum required version of the plugin\n\naliases: # Optional: provide aliases\n    <pioreactor_unit_name>: <alias_name> # Optional: aliases for Pioreactors\n\ncommon: # Optional: jobs that are common for all Pioreactors\n  <job_name>:\n    actions:\n      - type: <string> # Type of action: "start", "pause", "resume", "stop", or "update"\n        hours_elapsed: <float> # When the action is scheduled (in hours after experiment start)\n        options: # Optional: parameters for the action\n          <option_name>: <value>\n        arguments: <list> # Optional: arguments for the action\n\npioreactors: # Optional: jobs that are specific to some Pioreactors\n  <alias_name or pioreactor_unit_name>:\n    jobs:\n      <job_name>:\n        actions:\n          - type: <string> # Type of action: "start", "pause", "resume", "stop", or "update"\n            hours_elapsed: <float> # When the action is scheduled (in hours after experiment start)\n            options: # Optional: parameters for the action\n              <option_name>: <value>\n')),(0,o.kt)("h3",{id:"max-number-of-actions"},"Max number of actions"),(0,o.kt)("p",null,"Currently, the max number of total actions is ",(0,o.kt)("strong",{parentName:"p"},"248"),". This may be relaxed in a future software version. Contact us if you need this done."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"See examples of experiment profiles ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/experiment_profile_examples"},"here"),"."))}u.isMDXComponent=!0}}]);