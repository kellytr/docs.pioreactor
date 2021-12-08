"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[9293],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1445:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={},l="Data stores in the Pioreactor",c={unversionedId:"Storage/Data stores in the Pioreactor",id:"Storage/Data stores in the Pioreactor",isDocsHomePage:!1,title:"Data stores in the Pioreactor",description:"The Pioreactor has a few different ways to store data (depending on the requirements). They are:",source:"@site/developer_guide/05-Storage/01-Data stores in the Pioreactor.md",sourceDirName:"05-Storage",slug:"/Storage/Data stores in the Pioreactor",permalink:"/developer_guide/Storage/Data stores in the Pioreactor",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Turning your automation in a Python package to share",permalink:"/developer_guide/Plugins/Turning your automation into a plugin"},next:{title:"Local development of Pioreactor",permalink:"/developer_guide/Local development/Develop on Pioreactor locally"}},p=[{value:"SQLite3",id:"sqlite3",children:[{value:"Backups of the database",id:"backups-of-the-database",children:[],level:4}],level:2},{value:"MQTT",id:"mqtt",children:[{value:"Serialization of MQTT messages",id:"serialization-of-mqtt-messages",children:[],level:4}],level:2},{value:"DBM",id:"dbm",children:[],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-stores-in-the-pioreactor"},"Data stores in the Pioreactor"),(0,o.kt)("p",null,"The Pioreactor has a few different ways to store data (depending on the requirements). They are:"),(0,o.kt)("h2",{id:"sqlite3"},"SQLite3"),(0,o.kt)("p",null,"The most important datastore is the SQLite3 database on the ",(0,o.kt)("em",{parentName:"p"},"leader"),", located at ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor/storage/"),". This database stores historical data, jobs changes, logs, experiments, etc. The background job ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt_to_database_streaming")," picks up data from MQTT (like OD readings), and puts them into the database."),(0,o.kt)("p",null,"The CLI command ",(0,o.kt)("inlineCode",{parentName:"p"},"pio db")," will open up the SQLite terminal to query the database directly."),(0,o.kt)("h4",{id:"backups-of-the-database"},"Backups of the database"),(0,o.kt)("p",null,"The Pioreactor software will automatically backup the SQLite database via a scheduale ",(0,o.kt)("inlineCode",{parentName:"p"},"cron")," job. The backup is hosted locally on the Raspberry Pi, however if there if the cluster has active worker Pioreactors, the database backup is duplicated to (at most) two workers as well. This level of redundancy means that if the leader's microSD card fails, the database can be recovered from backups stored off the card."),(0,o.kt)("h2",{id:"mqtt"},"MQTT"),(0,o.kt)("p",null,"The inter- and intra-Pioreactor communications are handled by MQTT, a pub/sub service. The MQTT broker is on the leader Pioreactor (",(0,o.kt)("inlineCode",{parentName:"p"},"pio mqtt")," will stream the latest messages to your terminal). MQTT is used to transfer data between workers and leader, and even between process on the workers (ex: OD readings are created on worker, send to leader, and then sent back to worker's growth_rate_calculating job. This does create minor latency, and certainly more risk of data loss, but simplifies the design of the system overall)."),(0,o.kt)("p",null,"A principle we have stood by is to not let MQTT turn into our database. That is,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"we shouldn't store important information in MQTT,"),(0,o.kt)("li",{parentName:"ol"},'we shouldn\'t store information in MQTT that is "machine-specific" (see DBM section below),'),(0,o.kt)("li",{parentName:"ol"},"we shouldn't use MQTT as a source of truth.")),(0,o.kt)("p",null,"We sometimes fail at the above, but these are seen as tech-debt pieces and may be addressed in future versions."),(0,o.kt)("h4",{id:"serialization-of-mqtt-messages"},"Serialization of MQTT messages"),(0,o.kt)("p",null,"Every 5 minutes (set by the MQTT configuration file), MQTT will serialize its ",(0,o.kt)("em",{parentName:"p"},"retained")," messages to disk."),(0,o.kt)("h2",{id:"dbm"},"DBM"),(0,o.kt)("p",null,'The last storage option is DBM, a built-in Unix "database". This is essentially a fast key-value store on the Raspberry Pi. For Pioreactor, we use it to store "machine-specific" data, like calibration curves, locks on GPIOs, state of LEDs, jobs running, etc. Instead of one large file containing all these keys, we have split them into multiple files based on category and level of persistence. The persistent databases are stored in ',(0,o.kt)("inlineCode",{parentName:"p"},"/home/pi/.pioreactor/storage")," and the temporary databases are in ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp"),". You can access them from Python using ",(0,o.kt)("inlineCode",{parentName:"p"},"pioreactor.utils.local_persistant_storage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pioreactor.utils.local_intermittent_storage"),", respectively."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"What are temporary and persistent? Something like GPIO locks or LED state are physically reset between cycles of the Raspberry Pi. So when the Pi power-cycles, the state is wiped, and by have the database in ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp"),", the databases are wiped as well."))),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"pio view-cache <name>")," to view the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"<name>"),"."))}u.isMDXComponent=!0}}]);