"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[156],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,g=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7783:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(7294),a="tableOfContentsInline_0DDH",o=n(5002);var r=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return i.createElement("div",{className:a},i.createElement(o.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:r,className:"table-of-contents",linkClassName:null}))}},5002:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(7462),a=n(3366),o=n(7294),r=n(2822),l=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,n=e.className,i=e.linkClassName,a=e.isChild;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=i?i:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:i}))}))):null}function c(e){var t=e.toc,n=e.className,c=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,p=void 0===u?"table-of-contents__link":u,m=e.linkActiveClassName,f=void 0===m?void 0:m,g=e.minHeadingLevel,d=e.maxHeadingLevel,h=(0,a.Z)(e,l),v=(0,r.LU)(),y=null!=g?g:v.tableOfContents.minHeadingLevel,b=null!=d?d:v.tableOfContents.maxHeadingLevel,k=(0,r.DA)({toc:t,minHeadingLevel:y,maxHeadingLevel:b}),w=(0,o.useMemo)((function(){if(p&&f)return{linkClassName:p,linkActiveClassName:f,minHeadingLevel:y,maxHeadingLevel:b}}),[p,f,y,b]);return(0,r.Si)(w),o.createElement(s,(0,i.Z)({toc:k,className:c,linkClassName:p},h))}},7186:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=n(7783),l=["components"],s={},c=void 0,u={unversionedId:"Using community-built plugins",id:"Using community-built plugins",isDocsHomePage:!1,title:"Using community-built plugins",description:"The Pioreactor comes with a large set of functionality and behaviour to accomplish most projects. For example, continuous culturing, optical density reading, and stable temperatures are available out-of-the-box. However, the specifics and range of how people use bioreactors goes far beyond what we could ever cover. That's why Pioreactor has added a platform so that community members can make their own extensions and share them with others. We call these plugins. (Below is how to install plugins - if you are looking to create your own plugins, see here.)",source:"@site/user_guide/06-Using community-built plugins.mdx",sourceDirName:".",slug:"/Using community-built plugins",permalink:"/user_guide/Using community-built plugins",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration via config.ini",permalink:"/user_guide/Configuration via config"},next:{title:"Creating a Pioreactor cluster",permalink:"/user_guide/Creating a Pioreactor cluster"}},p=[{value:"Installing plugins",id:"installing-plugins",children:[{value:"Custom automations",id:"custom-automations",children:[],level:3},{value:"Custom activities",id:"custom-activities",children:[],level:3}],level:2},{value:"Alternative: putting Python files in the the <code>plugins</code> folder",id:"alternative-putting-python-files-in-the-the-plugins-folder",children:[],level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Pioreactor comes with a large set of functionality and behaviour to accomplish most projects. For example, continuous culturing, optical density reading, and stable temperatures are available out-of-the-box. However, the specifics and range of how people use bioreactors goes far beyond what we could ever cover. That's why Pioreactor has added a platform so that community members can make their own extensions and share them with others. We call these ",(0,o.kt)("em",{parentName:"p"},"plugins.")," (Below is how to install plugins - if you are looking to create your own plugins, see ",(0,o.kt)("a",{parentName:"p",href:"https://pioreactor.com/pages/developer_guide/Plugins/Turning%20your%20automation%20into%20a%20plugin"},"here"),".)"),(0,o.kt)(r.Z,{toc:p,mdxType:"TOCInline"}),(0,o.kt)("h2",{id:"installing-plugins"},"Installing plugins"),(0,o.kt)("p",null,'From your Pioreactor\'s interface, the "Plugins" button on the left navigation bar will display all your currently installed plugins, and available plugins from the community.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-06-14_at_1.40.20_PM.png?v=1623692457",alt:"plugin page"})),(0,o.kt)("h3",{id:"custom-automations"},"Custom automations"),(0,o.kt)("p",null,'After installation, custom dosing, LED, or temperature automations will be available in the automation modal under the "Settings" tab in each Pioreactor\'s Manage modal.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-05-31_at_3.20.08_PM.png?v=1622488873",alt:null}),(0,o.kt)("img",{parentName:"p",src:"https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-05-31_at_3.20.13_PM.png?v=1622488848",alt:null})),(0,o.kt)("h3",{id:"custom-activities"},"Custom activities"),(0,o.kt)("p",null,"After installation, a custom activity's state and settings will show up on each Pioreactor's card. Below, we've installed the pioreactor-air-bubbler plugin:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-05-31_at_3.25.22_PM.png?v=1622489169",alt:null})),(0,o.kt)("p",null,"Managing on/off and settings are done just like any other job, in the Manage modal:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-05-31_at_3.27.43_PM.png?v=1622489327",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.shopify.com/s/files/1/0515/1824/3002/files/Screen_Shot_2021-05-31_at_3.27.53_PM.png?v=1622489355",alt:null})),(0,o.kt)("h2",{id:"alternative-putting-python-files-in-the-the-plugins-folder"},"Alternative: putting Python files in the the ",(0,o.kt)("inlineCode",{parentName:"h2"},"plugins")," folder"),(0,o.kt)("p",null,"An alternative way to install a plugin is to place a Python file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor/plugins")," directory on the Raspberry Pi. This is good for one-off scripts or plugins you are demoing or testing."))}f.isMDXComponent=!0}}]);