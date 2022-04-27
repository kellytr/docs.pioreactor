"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[1896],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),f=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=f(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=f(t),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return t?i.createElement(m,a(a({ref:n},s),{},{components:t})):i.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var f=2;f<r;f++)a[f]=t[f];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5606:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return u}});var i=t(7462),o=t(3366),r=(t(7294),t(3905)),a=["components"],c={slug:"/configuration"},l="Configuration via config.ini",f={unversionedId:"Advanced/configuration",id:"Advanced/configuration",title:"Configuration via config.ini",description:"How configuration works across Pioreactors",source:"@site/user-guide/30-Advanced/05-configuration.md",sourceDirName:"30-Advanced",slug:"/configuration",permalink:"/user-guide/configuration",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/configuration"},sidebar:"tutorialSidebar",previous:{title:"Blue LED flashing & error codes",permalink:"/user-guide/error-codes"},next:{title:"Local access points",permalink:"/user-guide/local-access-point"}},s={},u=[{value:"How configuration works across Pioreactors",id:"how-configuration-works-across-pioreactors",level:3},{value:"How to edit the configuration files from the web interface",id:"how-to-edit-the-configuration-files-from-the-web-interface",level:3},{value:"How to edit the configuration files from the command line",id:"how-to-edit-the-configuration-files-from-the-command-line",level:3},{value:"Example config.ini",id:"example-configini",level:3}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-via-configini"},"Configuration via config.ini"),(0,r.kt)("h3",{id:"how-configuration-works-across-pioreactors"},"How configuration works across Pioreactors"),(0,r.kt)("p",null,"Configuration of the Pioreactors is through configuration files, prefixed by ",(0,r.kt)("inlineCode",{parentName:"p"},".ini"),". There are two types of ",(0,r.kt)("inlineCode",{parentName:"p"},".ini")," files: a shared ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini"),", which is the same across all units, and a worker-specific ",(0,r.kt)("inlineCode",{parentName:"p"},"unit_config.ini")," file, which can have settings that overwrite those found in the shared ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini"),". See image below:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/g8dDdhZ.png",alt:null})),(0,r.kt)("p",null,"This overriding lets you customize specific behavior ",(0,r.kt)("em",{parentName:"p"},"per")," Pioreactor, without having to duplicate lots of configuration over and over again."),(0,r.kt)("h3",{id:"how-to-edit-the-configuration-files-from-the-web-interface"},"How to edit the configuration files from the web interface"),(0,r.kt)("p",null,"In the web interface, pioreactor.local, the sidebar contains a link to ",(0,r.kt)("em",{parentName:"p"},"Configuration"),". From there, any ",(0,r.kt)("inlineCode",{parentName:"p"},".ini")," file can be edited. Clicking ","[","Save","]"," will save the new configuration and will deploy the new configuration to the proper Pioreactor unit(s)."),(0,r.kt)("h3",{id:"how-to-edit-the-configuration-files-from-the-command-line"},"How to edit the configuration files from the command line"),(0,r.kt)("p",null,"All the ",(0,r.kt)("inlineCode",{parentName:"p"},".ini")," files come from the leader unit. They are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor")," - one ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"config_<unitName>.ini")," for each Pioreactor unit. The command ",(0,r.kt)("inlineCode",{parentName:"p"},"pios sync-configs")," will deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},".ini")," files to their correct unit. Editing the ",(0,r.kt)("inlineCode",{parentName:"p"},".ini")," files on the leader is correct workflow, as any edits on the worker units will be overwritten on the next ",(0,r.kt)("inlineCode",{parentName:"p"},"pios sync-configs"),"."),(0,r.kt)("p",null,"One can programmatically, or by hand, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"config_<unitName>.ini")," files to create varying parameters in an experiment. Running ",(0,r.kt)("inlineCode",{parentName:"p"},"pios sync-configs")," will deploy the config files."),(0,r.kt)("h3",{id:"example-configini"},"Example config.ini"),(0,r.kt)("p",null,"If you need a reference config.ini, or to replace parts of yours, here's our ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Pioreactor/CustoPiZer/pioreactor/workspace/scripts/files/config.example.ini"},"default one")," ships with the Raspberry Pi image. To use it, you'll need to make some changes, specifically to ","`","network.leader","`"," and ","`","inventory","`","."))}d.isMDXComponent=!0}}]);