"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[1896],{3905:(e,i,n)=>{n.d(i,{Zo:()=>s,kt:()=>u});var t=n(67294);function o(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function r(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){o(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function c(e,i){if(null==e)return{};var n,t,o=function(e,i){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var i=t.useContext(l),n=i;return e&&(n="function"==typeof e?e(i):a(a({},i),e)),n},s=function(e){var i=p(e.components);return t.createElement(l.Provider,{value:i},e.children)},f={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},d=t.forwardRef((function(e,i){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,g=d["".concat(l,".").concat(u)]||d[u]||f[u]||r;return n?t.createElement(g,a(a({ref:i},s),{},{components:n})):t.createElement(g,a({ref:i},s))}));function u(e,i){var n=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var c={};for(var l in i)hasOwnProperty.call(i,l)&&(c[l]=i[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<r;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15606:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var t=n(87462),o=(n(67294),n(3905));const r={title:"Configuration via config.ini",slug:"/configuration"},a=void 0,c={unversionedId:"Advanced/configuration",id:"Advanced/configuration",title:"Configuration via config.ini",description:"How configuration works across Pioreactors",source:"@site/user-guide/30-Advanced/05-configuration.md",sourceDirName:"30-Advanced",slug:"/configuration",permalink:"/user-guide/configuration",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Configuration via config.ini",slug:"/configuration"},sidebar:"tutorialSidebar",previous:{title:"Blue LED flashing & error codes",permalink:"/user-guide/error-codes"},next:{title:"Local access points",permalink:"/user-guide/local-access-point"}},l={},p=[{value:"How configuration works across Pioreactors",id:"how-configuration-works-across-pioreactors",level:3},{value:"Editing the configuration files from the web interface",id:"editing-the-configuration-files-from-the-web-interface",level:3},{value:"Editing the configuration files from the command line",id:"editing-the-configuration-files-from-the-command-line",level:3},{value:"Editing the <code>config.ini</code> before booting",id:"editing-the-configini-before-booting",level:3},{value:"Example <code>config.ini</code>",id:"example-configini",level:3}],s={toc:p};function f(e){let{components:i,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,n,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-configuration-works-across-pioreactors"},"How configuration works across Pioreactors"),(0,o.kt)("p",null,"Configuration of the Pioreactors is through configuration files, prefixed by ",(0,o.kt)("inlineCode",{parentName:"p"},".ini"),". There are two types of ",(0,o.kt)("inlineCode",{parentName:"p"},".ini")," files: a shared ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini"),", which is the same across all units, and a worker-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"unit_config.ini")," file, which can have settings that overwrite those found in the shared ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini"),". See image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/g8dDdhZ.png",alt:null})),(0,o.kt)("p",null,"This overriding lets you customize specific behavior ",(0,o.kt)("em",{parentName:"p"},"per")," Pioreactor, without having to duplicate lots of configuration over and over again."),(0,o.kt)("h3",{id:"editing-the-configuration-files-from-the-web-interface"},"Editing the configuration files from the web interface"),(0,o.kt)("p",null,"In the web interface, pioreactor.local, the sidebar contains a link to ",(0,o.kt)("em",{parentName:"p"},"Configuration"),". From there, any ",(0,o.kt)("inlineCode",{parentName:"p"},".ini")," file can be edited. Clicking ","[","Save","]"," will save the new configuration and will deploy the new configuration to the proper Pioreactor unit(s)."),(0,o.kt)("h3",{id:"editing-the-configuration-files-from-the-command-line"},"Editing the configuration files from the command line"),(0,o.kt)("p",null,"All the ",(0,o.kt)("inlineCode",{parentName:"p"},".ini")," files come from the leader unit. They are stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/pioreactor/.pioreactor")," - one ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"config_<unitName>.ini")," for each Pioreactor unit. The command ",(0,o.kt)("inlineCode",{parentName:"p"},"pios sync-configs")," will deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},".ini")," files to their correct unit. Editing the ",(0,o.kt)("inlineCode",{parentName:"p"},".ini")," files on the leader is correct workflow, as any edits on the worker units will be overwritten on the next ",(0,o.kt)("inlineCode",{parentName:"p"},"pios sync-configs"),"."),(0,o.kt)("p",null,"One can programmatically, or by hand, edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"config_<unitName>.ini")," files to create varying parameters in an experiment. Running ",(0,o.kt)("inlineCode",{parentName:"p"},"pios sync-configs")," will deploy the config files."),(0,o.kt)("h3",{id:"editing-the-configini-before-booting"},"Editing the ",(0,o.kt)("inlineCode",{parentName:"h3"},"config.ini")," before booting"),(0,o.kt)("p",null,"Sometimes it's desirable to make changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini")," without having to boot the Pioreactor first. You can do this by plugging the micro SD card into your computer, and adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"boot/")," folder on it. This ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini")," doesn't need to have all the fields, only the fields you wish to change. At start up, the Pioreactor will merge ",(0,o.kt)("inlineCode",{parentName:"p"},"/boot/config.ini")," into the Pioreactor's ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini"),", and delete then delete ",(0,o.kt)("inlineCode",{parentName:"p"},"/boot/config.ini"),"."),(0,o.kt)("h3",{id:"example-configini"},"Example ",(0,o.kt)("inlineCode",{parentName:"h3"},"config.ini")),(0,o.kt)("p",null,"If you need a reference config.ini, or to replace parts of yours, here's our ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Pioreactor/CustoPiZer/pioreactor/workspace/scripts/files/config.example.ini"},"default one")," ships with the Raspberry Pi image. To use it, you'll need to make some changes, specifically to ","`","cluster.leader","`"," and ","`","inventory","`","."))}f.isMDXComponent=!0}}]);