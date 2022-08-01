"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2166],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=c(r),d=n,m=g["".concat(p,".").concat(d)]||g[d]||s[d]||a;return r?o.createElement(m,i(i({ref:t},l),{},{components:r})):o.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={title:"Turning your automation into a Python package to share",slug:"/plugin-as-python-package"},i=void 0,u={unversionedId:"Plugins/plugin-as-python-package",id:"Plugins/plugin-as-python-package",title:"Turning your automation into a Python package to share",description:"Following the template here//github.com/Pioreactor/pioreactor\\custom\\dosing\\automation, you can package and deploy your automation to your Pioreactor cluster, or for others to use.",source:"@site/developer-guide/04-Plugins/03-plugin-as-python-package.md",sourceDirName:"04-Plugins",slug:"/plugin-as-python-package",permalink:"/developer-guide/plugin-as-python-package",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Turning your automation into a Python package to share",slug:"/plugin-as-python-package"},sidebar:"tutorialSidebar",previous:{title:"Adding your custom automation to the web interface",permalink:"/developer-guide/adding-plugins-to-ui"},next:{title:"Data stores in the Pioreactor",permalink:"/developer-guide/data-stores"}},p={},c=[],l={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Following the template here: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/pioreactor_custom_dosing_automation"},"https://github.com/Pioreactor/pioreactor","_","custom","_","dosing","_","automation"),", you can package and deploy your automation to your Pioreactor cluster, or for others to use."),(0,n.kt)("p",null,"Note that in that template package, there are ways to add fields to the configuration (see ",(0,n.kt)("inlineCode",{parentName:"p"},"additional_config.ini"),", which gets merged with ",(0,n.kt)("inlineCode",{parentName:"p"},"config.ini")," on installation), and adding your automation to the web UI (see the specific folder structure in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ui")," folder)."))}s.isMDXComponent=!0}}]);