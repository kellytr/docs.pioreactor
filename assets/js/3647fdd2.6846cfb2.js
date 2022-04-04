"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[9742],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},l),{},{components:n})):a.createElement(g,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8297:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},p="Setting up an Experiment",c={unversionedId:"Setting up an experiment",id:"Setting up an experiment",title:"Setting up an Experiment",description:"Creating an experiment",source:"@site/user_guide/04-Setting up an experiment.md",sourceDirName:".",slug:"/Setting up an experiment",permalink:"/user_guide/Setting up an experiment",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pioreactor hardware set up",permalink:"/user_guide/Pioreactor hardware set up"},next:{title:"Configuration via config.ini",permalink:"/user_guide/Configuration via config"}},l=[{value:"Creating an experiment",id:"creating-an-experiment",children:[],level:3},{value:"Alternative: Start activities from the Pioreactors page.",id:"alternative-start-activities-from-the-pioreactors-page",children:[],level:3}],u={toc:l};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-an-experiment"},"Setting up an Experiment"),(0,i.kt)("h3",{id:"creating-an-experiment"},"Creating an experiment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'To create a new experiment, use the "New experiment" button at the top of the ',(0,i.kt)("em",{parentName:"li"},"Experiment Overview")," page.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9222).Z})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'On the next screen, enter your new experiment name (must be unique from prior experiments), and enter an optional metadata about your experiment. The description can be changed later (the experiment name cannot be changed later, however). Click "Create" when done.')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7766).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},'(Optional) If working with more than one Pioreactor in your cluster, it\'s useful to assign experiment-specific labels to them. These labels show up in the user interface, and make progress checking and updating easier. The labels can be changed later. Click "Assign" when done.')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6412).Z})),(0,i.kt)("p",null,"The next pages will guide you through setting up heating, stirring and optical density reading for your Pioreactor."),(0,i.kt)("h3",{id:"alternative-start-activities-from-the-pioreactors-page"},"Alternative: Start activities from the Pioreactors page."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before starting any activities, it's useful to run a ",(0,i.kt)("em",{parentName:"p"},"self test")," to confirm that your Pioreactors are all working as expected. ",(0,i.kt)("a",{parentName:"p",href:"http://docs.pioreactor.com"},"How to run a self-test.")))),(0,i.kt)("p",null,"On the ",(0,i.kt)("em",{parentName:"p"},"Pioreactors")," page, you should see at least one Pioreactor under ",(0,i.kt)("em",{parentName:"p"},"Active Pioreactors"),'. Using the "Manage" button, you can start an activity. Once started, jobs can also be ',(0,i.kt)("em",{parentName:"p"},"paused")," (and then ",(0,i.kt)("em",{parentName:"p"},"resumed"),") and ",(0,i.kt)("em",{parentName:"p"},"stopped"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8809).Z}),"\n",(0,i.kt)("img",{src:n(7886).Z})),(0,i.kt)("p",null,"The typical sequence of activities to start is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Stirring"),": this starts the stirring in the Pioreactor. After starting stirring, you can change the stirring speed in the Settings tab. (And default stirring speed can be changed in the configuration).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Temperature automation"),": turning on a temperature automation will start collecting temperature readings, and, if enabled, start heating the culture."))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Optical density"),": this activity turns on the system that measures culture density. Readings will start to populate the ",(0,i.kt)("em",{parentName:"li"},"Experiment Overview")," page. It's useful to inspect the first few minutes to readings to ensure things look okay (ex: nothing appears too wild, stirring is not too fast or slow, etc.)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also perform a blank optical density reading first, which is especially useful if your media is already turbid."))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Growth Rate"),": this activity requires that stirring and optical density be running as well. This starts the calculation of a normalized optical density, and the implied growth rate.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Any other activities. Any of the automations can be started, or custom jobs you've added to your Pioreactor."))))}m.isMDXComponent=!0},6412:function(e,t,n){t.Z=n.p+"assets/images/assign_labels_bulk-3106b3e13f5623d1cc22cda21b70cc9c.png"},7766:function(e,t,n){t.Z=n.p+"assets/images/create_new_experiment_page-ef0b6ba1141f0900c9900cce1c68bc14.png"},7886:function(e,t,n){t.Z=n.p+"assets/images/pioreactor_page_activities-8e25cd000ba481f80acfdcb5a3530be4.png"},8809:function(e,t,n){t.Z=n.p+"assets/images/pioreactor_page_manage-45d4297c86f8afb6fed9c6d7389ff72c.png"},9222:function(e,t,n){t.Z=n.p+"assets/images/start_new_experiment-7e7c0c58b7e737e19fc2e5fbf4d55fb1.png"}}]);