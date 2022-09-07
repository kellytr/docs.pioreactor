"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={title:"Command line interface",slug:"/cli"},o=void 0,l={unversionedId:"Advanced/cli",id:"Advanced/cli",title:"Command line interface",description:"For those interested, you can use the command line to interact with the Pioreactors. This is called the command line interface (CLI). Log onto either the leader or worker and you can execute the following commands. Full options and up-to-date documentation are available with pio  --help.",source:"@site/user-guide/30-Advanced/01-cli.md",sourceDirName:"30-Advanced",slug:"/cli",permalink:"/user-guide/cli",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Command line interface",slug:"/cli"},sidebar:"tutorialSidebar",previous:{title:"Accessing the Raspberry Pi",permalink:"/user-guide/accessing-raspberry-pi"},next:{title:"Setting up remote access to the web interface",permalink:"/user-guide/remote-access"}},p={},s=[{value:"Worker commands",id:"worker-commands",level:3},{value:"Leader-only commands",id:"leader-only-commands",level:3},{value:"Leader-only commands to control workers",id:"leader-only-commands-to-control-workers",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For those interested, you can use the command line to interact with the Pioreactors. This is called the command line interface (CLI). Log onto either the ",(0,a.kt)("a",{parentName:"p",href:"/user-guide/create-cluster"},"leader or worker")," and you can execute the following commands. Full options and up-to-date documentation are available with ",(0,a.kt)("inlineCode",{parentName:"p"},"pio <command> --help"),"."),(0,a.kt)("h3",{id:"worker-commands"},"Worker commands"),(0,a.kt)("p",null,"Interacting with the Pioreactor on the command line are through the ",(0,a.kt)("inlineCode",{parentName:"p"},"pio")," tool. Available arguments are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio logs")," will produce a stream of recent logs events. Logs are stored in ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/pioreactor.log"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio kill <job> [<job>...]")," will safely terminate a ",(0,a.kt)("inlineCode",{parentName:"li"},"<job>"),". Can kill multiple jobs, ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"pio kill stirring dosing_control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio run <job> <options>")," will run the ",(0,a.kt)("inlineCode",{parentName:"li"},"<job>"),". Each job has specific command line arguments. Note that some jobs (like ",(0,a.kt)("inlineCode",{parentName:"li"},"monitor"),") are started with ",(0,a.kt)("inlineCode",{parentName:"li"},"run-always"),", see below."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio run-always <job>"),": run a leader-specific job (ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"monitor"),"). These jobs are independent of any running experiment, and are not killed by ",(0,a.kt)("inlineCode",{parentName:"li"},"pio kill"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio version")," print the version of the PioreactorApp software."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio update")," will update the software to the latest version: adding ",(0,a.kt)("inlineCode",{parentName:"li"},"--app")," will upgrade the Pioreactor Python app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio install-plugin <plugin name>")," will install a plugin"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio uninstall-plugin <plugin name>")," will uninstall a plugin"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio list-plugins")," will list the currently installed plugins"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio blink")," will blink the Pioreactor's onboard LED."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio log -m <message>")," will log a message")),(0,a.kt)("h3",{id:"leader-only-commands"},"Leader-only commands"),(0,a.kt)("p",null,"The leader also has their own unique set of ",(0,a.kt)("inlineCode",{parentName:"p"},"pio")," commands (these commands do not interact with the workers):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio db"),": open the sqlite3 CLI of the Pioreactor database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio mqtt"),": tail the MQTT broker."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio run-always <job>"),": run a leader-specific job (ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"mqtt_to_db_streaming")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"watchdog"),"). These jobs are independent of any running experiment, and are not killed by ",(0,a.kt)("inlineCode",{parentName:"li"},"pio kill"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio add-pioreactor <hostname>"),": add a Pioreactor to your cluster, with given (unique) name. Need a worker Pioreactor on the network first. See instructions ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Pioreactor/pioreactor/wiki/Installation"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio update")," will update the software to the latest version: adding ",(0,a.kt)("inlineCode",{parentName:"li"},"--ui")," will update the web interface (repo: pioreactor/pioreactorui) and adding ",(0,a.kt)("inlineCode",{parentName:"li"},"--app")," will upgrade the Pioreactor Python app (repo: pioreactor/pioreactor)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio cluster-status")," will report to the user each Pioreactor in the cluster, and metadata like status, IP, and state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio discover-workers")," will return a list of workers on the network (may be a superset of the current cluster.)")),(0,a.kt)("h3",{id:"leader-only-commands-to-control-workers"},"Leader-only commands to control workers"),(0,a.kt)("p",null,"The leader computer interacts with the worker computers using the ",(0,a.kt)("inlineCode",{parentName:"p"},"pios")," command. Unless otherwise noted, the ",(0,a.kt)("inlineCode",{parentName:"p"},"pios")," will target all worker computers (see ",(0,a.kt)("inlineCode",{parentName:"p"},"--units")," to change this). Available ",(0,a.kt)("inlineCode",{parentName:"p"},"pios")," commands on the leader computer are the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pios kill <job> [<job>...]")," terminate the job ",(0,a.kt)("inlineCode",{parentName:"li"},"<job>")," on the workers. Ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"pios kill dosing_control"),". Multiple jobs can be killed, ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"pios kill stirring dosing_control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pios run <job>")," on each worker, run the job ",(0,a.kt)("inlineCode",{parentName:"li"},"<job>")," in the background. Job specific arguments can be specified after. Ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"pios run add_media --ml 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pios update")," install the latest PioreactorApp code on each worker."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pios sync-configs")," deploy the config.ini files to workers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pios install-plugin <plugin name>")," will install the plugin on each worker ",(0,a.kt)("em",{parentName:"li"},"and")," the leader."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pios reboot")," will reboot all workers in the cluster")),(0,a.kt)("p",null,"In each of the above commands, the specific workers can be invoked with ",(0,a.kt)("inlineCode",{parentName:"p"},"--units")," (which can be used multiple times. Ex: ",(0,a.kt)("inlineCode",{parentName:"p"},"pios run stirring --units 1 --units 2"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-y")," will skip user confirmation of the command to run."))}c.isMDXComponent=!0}}]);