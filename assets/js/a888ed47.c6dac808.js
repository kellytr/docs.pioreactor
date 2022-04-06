"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[842],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||r;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4085:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={slug:"/cli"},p="Command line interface",c={unversionedId:"Advanced/cli",id:"Advanced/cli",title:"Command line interface",description:"For those interested, you can use the command line to interact with the Pioreactors. This is called the command line interface (CLI). Log onto either the leader or worker and you can execute the following commands. Full options and up-to-date documentation are available with pio  --help.",source:"@site/user-guide/30-Advanced/01-cli.md",sourceDirName:"30-Advanced",slug:"/cli",permalink:"/user-guide/cli",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/cli"},sidebar:"tutorialSidebar",previous:{title:"LED automations",permalink:"/user-guide/led-automations"},next:{title:"Setting up remote access to the web interface",permalink:"/user-guide/remote-access"}},d=[{value:"Worker commands",id:"worker-commands",children:[],level:3},{value:"Leader-only commands",id:"leader-only-commands",children:[],level:3},{value:"Leader-only commands to control workers",id:"leader-only-commands-to-control-workers",children:[],level:3}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-line-interface"},"Command line interface"),(0,r.kt)("p",null,"For those interested, you can use the command line to interact with the Pioreactors. This is called the command line interface (CLI). Log onto either the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/user-guide/Creating%20a%20Pioreactor%20cluster"},"leader or worker")," and you can execute the following commands. Full options and up-to-date documentation are available with ",(0,r.kt)("inlineCode",{parentName:"p"},"pio <command> --help"),"."),(0,r.kt)("h3",{id:"worker-commands"},"Worker commands"),(0,r.kt)("p",null,"Interacting with the Pioreactor on the command line are through the ",(0,r.kt)("inlineCode",{parentName:"p"},"pio")," tool. Available arguments are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio logs")," will produce a stream of recent logs events. Logs are stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/log/pioreactor.log"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio kill <job> [<job>...]")," will safely terminate a ",(0,r.kt)("inlineCode",{parentName:"li"},"<job>"),". Can kill multiple jobs, ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"pio kill stirring dosing_control")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio run <job> <options>")," will run the ",(0,r.kt)("inlineCode",{parentName:"li"},"<job>"),". Each job has specific command line arguments. Note that some jobs (like ",(0,r.kt)("inlineCode",{parentName:"li"},"monitor"),") are started with ",(0,r.kt)("inlineCode",{parentName:"li"},"run-always"),", see below."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio run-always <job>"),": run a leader-specific job (ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"monitor"),"). These jobs are independent of any running experiment, and are not killed by ",(0,r.kt)("inlineCode",{parentName:"li"},"pio kill"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio version")," print the version of the PioreactorApp software."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio update")," will update the software to the latest version: adding ",(0,r.kt)("inlineCode",{parentName:"li"},"--app")," will upgrade the Pioreactor Python app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio install-plugin <plugin name>")," will install a plugin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio uninstall-plugin <plugin name>")," will uninstall a plugin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio list-plugins")," will list the currently installed plugins"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio blink")," will blink the Pioreactor's onboard LED.")),(0,r.kt)("h3",{id:"leader-only-commands"},"Leader-only commands"),(0,r.kt)("p",null,"The leader also has their own unique set of ",(0,r.kt)("inlineCode",{parentName:"p"},"pio")," commands (these commands do not interact with the workers):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio db"),": open the sqlite3 CLI of the Pioreactor database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio mqtt"),": tail the MQTT broker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio run-always <job>"),": run a leader-specific job (ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"mqtt_to_db_streaming")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"watchdog"),"). These jobs are independent of any running experiment, and are not killed by ",(0,r.kt)("inlineCode",{parentName:"li"},"pio kill"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio add-pioreactor <new name>"),": add a Pioreactor to your cluster, with given (unique) name. Need a blank RPi on the network first. See instructions ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Pioreactor/pioreactor/wiki/Installation"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio update")," will update the software to the latest version: adding ",(0,r.kt)("inlineCode",{parentName:"li"},"--ui")," will update the web interface (repo: pioreactor/pioreactorui) and adding ",(0,r.kt)("inlineCode",{parentName:"li"},"--app")," will upgrade the Pioreactor Python app (repo: pioreactor/pioreactor)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pio cluster-status")," will report to the user each Pioreactor in the cluster, and metadata like status, IP, and state.")),(0,r.kt)("h3",{id:"leader-only-commands-to-control-workers"},"Leader-only commands to control workers"),(0,r.kt)("p",null,"The leader computer interacts with the worker computers using the ",(0,r.kt)("inlineCode",{parentName:"p"},"pios")," command. Unless otherwise noted, the ",(0,r.kt)("inlineCode",{parentName:"p"},"pios")," will target all worker computers (see ",(0,r.kt)("inlineCode",{parentName:"p"},"--units")," to change this). Available ",(0,r.kt)("inlineCode",{parentName:"p"},"pios")," commands on the leader computer are the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pios kill <job> [<job>...]")," terminate the job ",(0,r.kt)("inlineCode",{parentName:"li"},"<job>")," on the workers. Ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"pios kill dosing_control"),". Multiple jobs can be killed, ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"pios kill stirring dosing_control")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pios run <job>")," on each worker, run the job ",(0,r.kt)("inlineCode",{parentName:"li"},"<job>")," in the background. Job specific arguments can be specified after. Ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"pios run add_media --ml 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pios update")," install the latest PioreactorApp code on each worker."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pios sync-configs")," deploy the config.ini files to workers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pios install-plugin <plugin name>")," will install the plugin on each worker ",(0,r.kt)("em",{parentName:"li"},"and")," the leader.")),(0,r.kt)("p",null,"In each of the above commands, the specific workers can be invoked with ",(0,r.kt)("inlineCode",{parentName:"p"},"--units")," (which can be used multiple times. Ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"pios run stirring --units 1 --units 2"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-y")," will skip user confirmation of the command to run."))}m.isMDXComponent=!0}}]);