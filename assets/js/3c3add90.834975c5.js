"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2084],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?i.createElement(m,o(o({ref:n},c),{},{components:t})):i.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44645:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=t(87462),r=(t(67294),t(3905));const a={title:"API",slug:"/web-ui-api"},o=void 0,p={unversionedId:"User interface/api",id:"User interface/api",title:"API",description:"All endpoints",source:"@site/developer-guide/20-User interface/02-api.md",sourceDirName:"20-User interface",slug:"/web-ui-api",permalink:"/developer-guide/web-ui-api",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"API",slug:"/web-ui-api"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/developer-guide/web-ui-introduction"},next:{title:"Adding basic time series charts",permalink:"/developer-guide/chart-to-ui"}},l={},s=[{value:"All endpoints",id:"all-endpoints",level:3},{value:"Useful endpoints for building app on top of",id:"useful-endpoints-for-building-app-on-top-of",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"all-endpoints"},"All endpoints"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Methods  Rule\n-------  ------------------------------------------------------\nDELETE   /api/configs/<filename>\nGET      /static/<path:filename>\nGET      /api/recent_logs\nGET      /api/time_series/growth_rates/<experiment>\nGET      /api/time_series/temperature_readings/<experiment>\nGET      /api/time_series/od_readings_filtered/<experiment>\nGET      /api/time_series/od_readings/<experiment>\nGET      /api/time_series/alt_media_fractions/<experiment>\nGET      /api/recent_media_rates\nGET      /api/calibration_types\nGET      /api/calibrations/<pioreactor_unit>/<calibration_type>\nGET      /api/installed_plugins\nGET      /api/contrib/automations/<automation_type>\nGET      /api/contrib/jobs\nGET      /api/contrib/charts\nGET      /api/app_version\nGET      /api/ui_version\nGET      /api/experiments\nGET      /api/experiments/latest\nGET      /api/current_unit_labels\nGET      /api/historical_organisms\nGET      /api/historical_media\nGET      /api/configs/<filename>\nGET      /api/configs\nGET      /api/historical_configs/<filename>\nGET      /api/is_local_access_point_active\nPOST     /api/stop_all\nPOST     /api/stop/<job>/<unit>\nPOST     /api/run/<job>/<unit>\nPOST     /api/reboot/<unit>\nPOST     /api/install_plugin\nPOST     /api/uninstall_plugin\nPOST     /api/update_app\nPOST     /api/export_datasets\nPOST     /api/experiments\nPOST     /api/add_new_pioreactor\nPUT      /api/current_unit_labels\nPUT      /api/experiment_desc\nPUT      /api/configs/<filename>\n")),(0,r.kt)("p",null,"From ",(0,r.kt)("inlineCode",{parentName:"p"},"python3 -m flask --debug --app main routes -s methods")),(0,r.kt)("h3",{id:"useful-endpoints-for-building-app-on-top-of"},"Useful endpoints for building app on top of"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST     /api/run/<job>/<unit>\nPOST     /api/stop/<job>/<unit>\nPOST     /api/stop_all\n")))}u.isMDXComponent=!0}}]);