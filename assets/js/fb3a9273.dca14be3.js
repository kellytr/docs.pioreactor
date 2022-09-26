"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[6845],{3905:(e,i,t)=>{t.d(i,{Zo:()=>p,kt:()=>u});var n=t(67294);function o(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){o(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function c(e,i){if(null==e)return{};var t,n,o=function(e,i){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(o[t]=e[t]);return o}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var i=n.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},p=function(e){var i=s(e.components);return n.createElement(l.Provider,{value:i},e.children)},f={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},d=n.forwardRef((function(e,i){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=o,g=d["".concat(l,".").concat(u)]||d[u]||f[u]||r;return t?n.createElement(g,a(a({ref:i},p),{},{components:t})):n.createElement(g,a({ref:i},p))}));function u(e,i){var t=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var c={};for(var l in i)hasOwnProperty.call(i,l)&&(c[l]=i[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51012:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const r={title:"Configuration via config.ini",slug:"/configuration"},a=void 0,c={unversionedId:"Extending your Pioreactor/configuration",id:"Extending your Pioreactor/configuration",title:"Configuration via config.ini",description:"How configuration works across Pioreactors",source:"@site/user-guide/03-Extending your Pioreactor/05-configuration.md",sourceDirName:"03-Extending your Pioreactor",slug:"/configuration",permalink:"/user-guide/configuration",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Configuration via config.ini",slug:"/configuration"},sidebar:"tutorialSidebar",previous:{title:"Standard curves for OD600 readings",permalink:"/user-guide/calibrate-od600"},next:{title:"Hardware calibrations",permalink:"/user-guide/hardware-calibrations"}},l={},s=[{value:"How configuration works across Pioreactors",id:"how-configuration-works-across-pioreactors",level:3},{value:"Editing the configuration files from the web interface",id:"editing-the-configuration-files-from-the-web-interface",level:3},{value:"Editing the configuration files from the command line",id:"editing-the-configuration-files-from-the-command-line",level:3},{value:"Editing the <code>config.ini</code> before booting",id:"editing-the-configini-before-booting",level:3},{value:"Example <code>config.ini</code>",id:"example-configini",level:3}],p={toc:s};function f(e){let{components:i,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-configuration-works-across-pioreactors"},"How configuration works across Pioreactors"),(0,o.kt)("p",null,"Configuration of the Pioreactors is through configuration files, prefixed by ",(0,o.kt)("inlineCode",{parentName:"p"},".ini"),". There are two types of ",(0,o.kt)("inlineCode",{parentName:"p"},".ini")," files: a shared ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini"),", which is the same across all units, and a worker-specific ",(0,o.kt)("inlineCode",{parentName:"p"},"unit_config.ini")," file, which can have settings that overwrite those found in the shared ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini"),". See image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/g8dDdhZ.png",alt:null})),(0,o.kt)("p",null,"This overriding lets you customize specific behavior ",(0,o.kt)("em",{parentName:"p"},"per")," Pioreactor, without having to duplicate lots of configuration over and over again."),(0,o.kt)("h3",{id:"editing-the-configuration-files-from-the-web-interface"},"Editing the configuration files from the web interface"),(0,o.kt)("p",null,"At ",(0,o.kt)("a",{parentName:"p",href:"http://pioreactor.local"},"pioreactor.local"),", navigate to the ",(0,o.kt)("em",{parentName:"p"},"Configuration")," page in the sidebar."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(77474).Z,width:"2652",height:"1408"})),(0,o.kt)("p",null,"Select the configuration file you wish to edit from the dropdown:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(78297).Z,width:"2652",height:"1408"})),(0,o.kt)("p",null,"Clicking ","[","Save","]"," will save the new configuration and will deploy the new configuration to the proper Pioreactor unit(s)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(67633).Z,width:"2652",height:"1408"})),(0,o.kt)("p",null,"Pioreactor also stores a history of changes to each configuration file. You can view previous versions of configuration files in the dropdown. Clicking ","[","Revert","]"," will save the displayed configuration file."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(77192).Z,width:"2652",height:"1408"})),(0,o.kt)("h3",{id:"editing-the-configuration-files-from-the-command-line"},"Editing the configuration files from the command line"),(0,o.kt)("p",null,"All the ",(0,o.kt)("inlineCode",{parentName:"p"},".ini")," files come from the leader unit. They are stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/pioreactor/.pioreactor")," - one ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"config_<unitName>.ini")," for each Pioreactor unit. The command ",(0,o.kt)("inlineCode",{parentName:"p"},"pios sync-configs")," will deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},".ini")," files to their correct unit. Editing the ",(0,o.kt)("inlineCode",{parentName:"p"},".ini")," files on the leader is correct workflow, as any edits on the worker units will be overwritten on the next ",(0,o.kt)("inlineCode",{parentName:"p"},"pios sync-configs"),"."),(0,o.kt)("p",null,"One can programmatically, or by hand, edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"config_<unitName>.ini")," files to create varying parameters in an experiment. Running ",(0,o.kt)("inlineCode",{parentName:"p"},"pios sync-configs")," will deploy the config files."),(0,o.kt)("h3",{id:"editing-the-configini-before-booting"},"Editing the ",(0,o.kt)("inlineCode",{parentName:"h3"},"config.ini")," before booting"),(0,o.kt)("p",null,"Sometimes it's desirable to make changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini")," without having to boot the Pioreactor first. You can do this by plugging the micro SD card into your computer, and adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"boot/")," folder on it. This ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini")," doesn't need to have all the fields, only the fields you wish to change. At start up, the Pioreactor will merge ",(0,o.kt)("inlineCode",{parentName:"p"},"/boot/config.ini")," into the Pioreactor's ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini"),", and delete then delete ",(0,o.kt)("inlineCode",{parentName:"p"},"/boot/config.ini"),"."),(0,o.kt)("h3",{id:"example-configini"},"Example ",(0,o.kt)("inlineCode",{parentName:"h3"},"config.ini")),(0,o.kt)("p",null,"If you need a reference config.ini, or to replace parts of yours, here's our ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Pioreactor/CustoPiZer/pioreactor/workspace/scripts/files/config.example.ini"},"default one")," ships with the Raspberry Pi image. To use it, you'll need to make some changes, specifically to ","`","cluster.leader","`"," and ","`","inventory","`","."))}f.isMDXComponent=!0},77192:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/choose_config_version2-4533d1e783827d808495b76a29082e51.png"},77474:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/edit_config_page-eab605765714cc6c72a981f3edf103c8.png"},78297:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/find_config_to_edit-8ebe7a3a7597211a558c99be5d86002d.png"},67633:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/save_config-bbc8686e8ba6559fd28c55579eb0e80c.png"}}]);