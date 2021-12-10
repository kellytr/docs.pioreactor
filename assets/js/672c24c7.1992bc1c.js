"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[153],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5199:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},s="Creating a Pioreactor cluster",c={unversionedId:"Creating a Pioreactor cluster",id:"Creating a Pioreactor cluster",title:"Creating a Pioreactor cluster",description:"Pioreactors are able to be used as individual units, or in concert with other Pioreactors. In either case, some Pioreactor needs to be assigned as a leader. The leader unit controls other Pioreactors (and that may include itself), stores the database, hosts the web interface, and is the interface between users and the hardware.",source:"@site/user_guide/10-Creating a Pioreactor cluster.md",sourceDirName:".",slug:"/Creating a Pioreactor cluster",permalink:"/user_guide/Creating a Pioreactor cluster",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hardware calibrations",permalink:"/user_guide/Hardware calibrations"},next:{title:"Writing Pioreactor scripts with Python",permalink:"/user_guide/Simple scripting with Python"}},u=[{value:"Possible cluster topologies",id:"possible-cluster-topologies",children:[],level:3},{value:"How to edit roles",id:"how-to-edit-roles",children:[],level:3},{value:"Adding new workers",id:"adding-new-workers",children:[],level:3}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-pioreactor-cluster"},"Creating a Pioreactor cluster"),(0,a.kt)("p",null,"Pioreactors are able to be used as individual units, or in concert with other Pioreactors. In either case, some Pioreactor needs to be assigned as a ",(0,a.kt)("em",{parentName:"p"},"leader"),". The leader unit controls other Pioreactors (and that may include itself), stores the database, hosts the web interface, and is the interface between users and the hardware."),(0,a.kt)("p",null,"A leader will communicate and control the all ",(0,a.kt)("em",{parentName:"p"},"workers")," (non-leader Pioreactors) in the ",(0,a.kt)("em",{parentName:"p"},"inventory"),". The inventory is a list, defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ini"),", of available workers. For example, when you want to remove a Pioreactor from your cluster temporarily, you can disable it as part of your available inventory in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ini"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/884032/103158311-5316e380-478a-11eb-9425-6bb0df079d58.png",alt:null})),(0,a.kt)("p",null,"For solo Pioreactors, the leader is also the (only) worker. When used in concert with others, a leader can be assigned (and need not be a worker)."),(0,a.kt)("h3",{id:"possible-cluster-topologies"},"Possible cluster topologies"),(0,a.kt)("p",null,"This gives us a few different possible topologies of what your cluster of Pioreactor(s) might look like."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The simplest topology is when you have a single Pioreactor, and so the leader is the only worker.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/884032/103158118-69bc3b00-4788-11eb-8a32-a5580896a3a9.png",alt:"single pioreactor"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When you have multiple Pioreactors, you can nominate one to be the leader node, and retain it as a worker, too:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/884032/103158257-c0764480-4789-11eb-8c83-6fb87f807a49.png",alt:"leader and worker"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You can also choose not to have the leader be a worker. This is useful if you have a spare Raspberry Pi without the Pioreactor hardware, or the number of Pioreactors grows large and you wish to keep one out of the worker inventory.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/884032/103158281-eac80200-4789-11eb-9acc-4fc680d180b9.png",alt:"leader not worker"})),(0,a.kt)("h3",{id:"how-to-edit-roles"},"How to edit roles"),(0,a.kt)("p",null,"To tell the cluster which computer is the leader, you edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ini"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"leader_hostname")," section (under ",(0,a.kt)("inlineCode",{parentName:"p"},"network.topology"),"):"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/884032/103158348-b43eb700-478a-11eb-80d9-883458107f31.png",alt:"where to edit the leader"})),(0,a.kt)("p",null,"Inventory is assigned in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ini")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"network.inventory"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/884032/103158311-5316e380-478a-11eb-9425-6bb0df079d58.png",alt:null})),(0,a.kt)("h3",{id:"adding-new-workers"},"Adding new workers"),(0,a.kt)("p",null,"See the instructions ",(0,a.kt)("a",{parentName:"p",href:"/user_guide/Raspberry%20Pi%20set%20up%20and%20software%20installation#adding-workers-to-your-cluster"},"here")," to add new workers to your cluster."))}d.isMDXComponent=!0}}]);