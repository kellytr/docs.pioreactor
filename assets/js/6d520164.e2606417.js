"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2166],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=p(n),f=o,d=g["".concat(c,".").concat(f)]||g[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3297:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return g}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={slug:"/plugin-as-python-package"},c="Turning your automation in a Python package to share",p={unversionedId:"Plugins/plugin-as-python-package",id:"Plugins/plugin-as-python-package",title:"Turning your automation in a Python package to share",description:"Following the template here//github.com/Pioreactor/pioreactor\\custom\\dosing\\automation, you can package and deploy your automation to your Pioreactor cluster, or for others to use.",source:"@site/developer-guide/04-Plugins/03-plugin-as-python-package.md",sourceDirName:"04-Plugins",slug:"/plugin-as-python-package",permalink:"/developer-guide/plugin-as-python-package",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/plugin-as-python-package"},sidebar:"tutorialSidebar",previous:{title:"Adding your custom automation to the web interface",permalink:"/developer-guide/adding-plugins-to-ui"},next:{title:"Data stores in the Pioreactor",permalink:"/developer-guide/data-stores"}},l=[],s={toc:l};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"turning-your-automation-in-a-python-package-to-share"},"Turning your automation in a Python package to share"),(0,a.kt)("p",null,"Following the template here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/pioreactor_custom_dosing_automation"},"https://github.com/Pioreactor/pioreactor","_","custom","_","dosing","_","automation"),", you can package and deploy your automation to your Pioreactor cluster, or for others to use."),(0,a.kt)("p",null,"Note that in that template package, there are ways to add fields to the configuration (see ",(0,a.kt)("inlineCode",{parentName:"p"},"additional_config.ini"),", which gets merged with ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ini")," on installation), and adding your automation to the web UI (see the specific folder structure in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui")," folder)."))}g.isMDXComponent=!0}}]);