"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[2642],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1339:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"Creating a Pioreactor cluster",slug:"/create-cluster"},l=void 0,c={unversionedId:"Extending your Pioreactor/create-cluster",id:"Extending your Pioreactor/create-cluster",title:"Creating a Pioreactor cluster",description:"Pioreactors are able to be used as individual units, or in concert with other Pioreactors. In either case, a Pioreactor needs to be assigned as a leader. The leader unit controls other Pioreactors (and that may include itself), stores the database, hosts the web interface, and is the interface between users and the hardware.",source:"@site/user-guide/03-Extending your Pioreactor/01-create-cluster.md",sourceDirName:"03-Extending your Pioreactor",slug:"/create-cluster",permalink:"/user-guide/create-cluster",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Creating a Pioreactor cluster",slug:"/create-cluster"},sidebar:"tutorialSidebar",previous:{title:"Activities",permalink:"/user-guide/activities"},next:{title:"Using community plugins",permalink:"/user-guide/using-community-plugins"}},u={},d=[{value:"Possible cluster topologies",id:"possible-cluster-topologies",level:3},{value:"How to edit roles",id:"how-to-edit-roles",level:3},{value:"Adding new workers",id:"adding-new-workers",level:3}],p={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pioreactors are able to be used as individual units, or in concert with other Pioreactors. In either case, a Pioreactor needs to be assigned as a ",(0,i.kt)("em",{parentName:"p"},"leader"),". The leader unit controls other Pioreactors (and that may include itself), stores the database, hosts the web interface, and is the interface between users and the hardware."),(0,i.kt)("p",null,"A leader will communicate and control the all ",(0,i.kt)("em",{parentName:"p"},"workers")," (non-leader Pioreactors) in the ",(0,i.kt)("em",{parentName:"p"},"inventory"),". The inventory is a list, defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.ini"),", of available workers."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/884032/103158311-5316e380-478a-11eb-9425-6bb0df079d58.png",alt:null})),(0,i.kt)("p",null,"When you want to remove a Pioreactor from your cluster temporarily, you can disable it as part of your available inventory in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.ini"),"."),(0,i.kt)("p",null,"For solo Pioreactors, the leader is also the (only) worker. When used in concert with others, a leader can be assigned (and need not be a worker)."),(0,i.kt)("h3",{id:"possible-cluster-topologies"},"Possible cluster topologies"),(0,i.kt)("p",null,"This gives us a few different possible topologies of what your cluster of Pioreactor(s) might look like."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The simplest topology is when you have a single Pioreactor, and so the leader is the only worker.")),(0,i.kt)("img",{src:"/img/user-guide/single_pioreactor_cluster.png",width:"335",style:{margin:"auto",display:"block"}}),(0,i.kt)("p",null,"2",".","  When you have multiple Pioreactors, you can nominate one to be the leader node, and retain it as a worker, too:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"leader is also a worker in the cluster",src:r(8018).Z,width:"987",height:"363"})),(0,i.kt)("p",null,"3",".","  You can also choose not to have the leader be a worker. This is useful if you have a spare Raspberry Pi without the Pioreactor hardware, or the number of Pioreactors grows large and you wish to keep one out of the inventory to focus on being a leader only."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"leader not worker",src:r(9788).Z,width:"987",height:"351"})),(0,i.kt)("h3",{id:"how-to-edit-roles"},"How to edit roles"),(0,i.kt)("p",null,"To tell the cluster which computer is the leader, you edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.ini"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"leader_hostname")," section (under ",(0,i.kt)("inlineCode",{parentName:"p"},"network.topology"),"):"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/884032/103158348-b43eb700-478a-11eb-80d9-883458107f31.png",alt:"where to edit the leader"})),(0,i.kt)("p",null,"Inventory is assigned in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.ini")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"network.inventory"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/884032/103158311-5316e380-478a-11eb-9425-6bb0df079d58.png",alt:null})),(0,i.kt)("h3",{id:"adding-new-workers"},"Adding new workers"),(0,i.kt)("p",null,"See the instructions ",(0,i.kt)("a",{parentName:"p",href:"/user-guide/software-set-up#adding-workers-to-your-cluster"},"here")," to add new workers to your cluster."))}h.isMDXComponent=!0},8018:function(e,t,r){t.Z=r.p+"assets/images/leader_as_worker_cluster-0545170277e1f3b1377ad5e0408c417d.png"},9788:function(e,t,r){t.Z=r.p+"assets/images/leader_cluster-f913ccaa86e3a4394ddcb87a5f17b18c.png"}}]);