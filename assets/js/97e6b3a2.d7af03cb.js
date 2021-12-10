"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[997],{3905:function(e,n,i){i.d(n,{Zo:function(){return p},kt:function(){return m}});var t=i(7294);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function c(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=t.createContext({}),f=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},p=function(e){var n=f(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=f(i),m=o,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return i?t.createElement(d,a(a({ref:n},p),{},{components:i})):t.createElement(d,a({ref:n},p))}));function m(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var f=2;f<r;f++)a[f]=i[f];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}s.displayName="MDXCreateElement"},8367:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return f},toc:function(){return p},default:function(){return s}});var t=i(7462),o=i(3366),r=(i(7294),i(3905)),a=["components"],c={},l="Configuration via config.ini",f={unversionedId:"Configuration via config",id:"Configuration via config",title:"Configuration via config.ini",description:"How configuration works across Pioreactors",source:"@site/user_guide/05-Configuration via config.md",sourceDirName:".",slug:"/Configuration via config",permalink:"/user_guide/Configuration via config",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Starting an experiment, activities, and collecting data",permalink:"/user_guide/Starting an experiment, activities, and collecti"},next:{title:"Using community-built plugins",permalink:"/user_guide/Using community-built plugins"}},p=[{value:"How configuration works across Pioreactors",id:"how-configuration-works-across-pioreactors",children:[],level:3},{value:"How to edit the configuration files from the web interface",id:"how-to-edit-the-configuration-files-from-the-web-interface",children:[],level:3},{value:"How to edit the configuration files from the command line",id:"how-to-edit-the-configuration-files-from-the-command-line",children:[],level:3},{value:"Example config.ini",id:"example-configini",children:[],level:3}],u={toc:p};function s(e){var n=e.components,i=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-via-configini"},"Configuration via config.ini"),(0,r.kt)("h3",{id:"how-configuration-works-across-pioreactors"},"How configuration works across Pioreactors"),(0,r.kt)("p",null,"Configuration of the Pioreactors is through ",(0,r.kt)("inlineCode",{parentName:"p"},".ini")," files. On the worker Pioreactors, these live in ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor"),". There are two ",(0,r.kt)("inlineCode",{parentName:"p"},".ini")," files: a shared ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini")," and a unit-specific ",(0,r.kt)("inlineCode",{parentName:"p"},"unit_config.ini")," file. The ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini")," file is the same across all units. The ",(0,r.kt)("inlineCode",{parentName:"p"},"unit_config.ini")," can be blank, or can have settings that overwrite those found in the shared ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini"),". See image below:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/g8dDdhZ.png",alt:null})),(0,r.kt)("h3",{id:"how-to-edit-the-configuration-files-from-the-web-interface"},"How to edit the configuration files from the web interface"),(0,r.kt)("p",null,"In the web interface, pioreactor.local, the sidebar contains a link to ",(0,r.kt)("em",{parentName:"p"},"Configuration"),". From there, any ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini")," file can be edited. Clicking ","[","Save","]"," will save the new configuration and will deploy the new configuration to the proper Pioreactor unit(s)."),(0,r.kt)("h3",{id:"how-to-edit-the-configuration-files-from-the-command-line"},"How to edit the configuration files from the command line"),(0,r.kt)("p",null,"All the ",(0,r.kt)("inlineCode",{parentName:"p"},".ini")," files come from the leader unit. They are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor")," - one ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"config_<unitName>.ini")," for each Pioreactor unit. The command ",(0,r.kt)("inlineCode",{parentName:"p"},"pios sync-configs")," will deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},".ini")," files to their correct unit. Editing the ",(0,r.kt)("inlineCode",{parentName:"p"},".ini")," files on the leader is correct workflow, as any edits on the worker units will be overwritten on the next ",(0,r.kt)("inlineCode",{parentName:"p"},"pios sync-configs"),"."),(0,r.kt)("p",null,"One can programmatically, or by hand, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"config_<unitName>.ini")," files to create varying parameters in an experiment. Running ",(0,r.kt)("inlineCode",{parentName:"p"},"pios sync-configs")," will deploy the config files."),(0,r.kt)("h3",{id:"example-configini"},"Example config.ini"),(0,r.kt)("p",null,"If you need a reference config.ini, or to replace parts of yours, here's our ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Pioreactor/CustoPiZer/pioreactor/workspace/scripts/files/config.example.ini"},"default one")," ships with the Raspberry Pi image. To use it, you'll need to make some changes, specifically to ","`","network.leader","`"," and ","`","inventory","`","."))}s.isMDXComponent=!0}}]);