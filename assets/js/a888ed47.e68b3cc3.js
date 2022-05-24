"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[842],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(k,o(o({ref:t},s),{},{components:n})):i.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4085:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={slug:"/cli"},p=void 0,c={unversionedId:"Advanced/cli",id:"Advanced/cli",title:"cli",description:"For those interested, you can use the command line to interact with the Pioreactors. This is called the command line interface (CLI). Log onto either the leader or worker and you can execute the following commands. Full options and up-to-date documentation are available with pio  --help.",source:"@site/user-guide/30-Advanced/01-cli.md",sourceDirName:"30-Advanced",slug:"/cli",permalink:"/user-guide/cli",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/cli"},sidebar:"tutorialSidebar",previous:{title:"accessing-raspberry-pi",permalink:"/user-guide/accessing-raspberry-pi"},next:{title:"remote-access",permalink:"/user-guide/remote-access"}},s={},d=[{value:"Worker commands",id:"worker-commands",level:3},{value:"Leader-only commands",id:"leader-only-commands",level:3},{value:"Leader-only commands to control workers",id:"leader-only-commands-to-control-workers",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-line-interface"},"Command line interface"),(0,a.kt)("p",null,"For those interested, you can use the command line to interact with the Pioreactors. This is called the command line interface (CLI). Log onto either the ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/user-guide/Creating%20a%20Pioreactor%20cluster"},"leader or worker")," and you can execute the following commands. Full options and up-to-date documentation are available with ",(0,a.kt)("inlineCode",{parentName:"p"},"pio <command> --help"),"."),(0,a.kt)("h3",{id:"worker-commands"},"Worker commands"),(0,a.kt)("p",null,"Interacting with the Pioreactor on the command line are through the ",(0,a.kt)("inlineCode",{parentName:"p"},"pio")," tool. Available arguments are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio logs")," will produce a stream of recent logs events. Logs are stored in ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/pioreactor.log"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio kill <job> [<job>...]")," will safely terminate a ",(0,a.kt)("inlineCode",{parentName:"li"},"<job>"),". Can kill multiple jobs, ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"pio kill stirring dosing_control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio run <job> <options>")," will run the ",(0,a.kt)("inlineCode",{parentName:"li"},"<job>"),". Each job has specific command line arguments. Note that some jobs (like ",(0,a.kt)("inlineCode",{parentName:"li"},"monitor"),") are started with ",(0,a.kt)("inlineCode",{parentName:"li"},"run-always"),", see below."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio run-always <job>"),": run a leader-specific job (ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"monitor"),"). These jobs are independent of any running experiment, and are not killed by ",(0,a.kt)("inlineCode",{parentName:"li"},"pio kill"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio version")," print the version of the PioreactorApp software."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio update")," will update the software to the latest version: adding ",(0,a.kt)("inlineCode",{parentName:"li"},"--app")," will upgrade the Pioreactor Python app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio install-plugin <plugin name>")," will install a plugin"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio uninstall-plugin <plugin name>")," will uninstall a plugin"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio list-plugins")," will list the currently installed plugins"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio blink")," will blink the Pioreactor's onboard LED.")),(0,a.kt)("h3",{id:"leader-only-commands"},"Leader-only commands"),(0,a.kt)("p",null,"The leader also has their own unique set of ",(0,a.kt)("inlineCode",{parentName:"p"},"pio")," commands (these commands do not interact with the workers):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio db"),": open the sqlite3 CLI of the Pioreactor database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio mqtt"),": tail the MQTT broker."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio run-always <job>"),": run a leader-specific job (ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"mqtt_to_db_streaming")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"watchdog"),"). These jobs are independent of any running experiment, and are not killed by ",(0,a.kt)("inlineCode",{parentName:"li"},"pio kill"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio add-pioreactor <new name>"),": add a Pioreactor to your cluster, with given (unique) name. Need a blank RPi on the network first. See instructions ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Pioreactor/pioreactor/wiki/Installation"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio update")," will update the software to the latest version: adding ",(0,a.kt)("inlineCode",{parentName:"li"},"--ui")," will update the web interface (repo: pioreactor/pioreactorui) and adding ",(0,a.kt)("inlineCode",{parentName:"li"},"--app")," will upgrade the Pioreactor Python app (repo: pioreactor/pioreactor)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pio cluster-status")," will report to the user each Pioreactor in the cluster, and metadata like status, IP, and state.")),(0,a.kt)("h3",{id:"leader-only-commands-to-control-workers"},"Leader-only commands to control workers"),(0,a.kt)("p",null,"The leader computer interacts with the worker computers using the ",(0,a.kt)("inlineCode",{parentName:"p"},"pios")," command. Unless otherwise noted, the ",(0,a.kt)("inlineCode",{parentName:"p"},"pios")," will target all worker computers (see ",(0,a.kt)("inlineCode",{parentName:"p"},"--units")," to change this). Available ",(0,a.kt)("inlineCode",{parentName:"p"},"pios")," commands on the leader computer are the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pios kill <job> [<job>...]")," terminate the job ",(0,a.kt)("inlineCode",{parentName:"li"},"<job>")," on the workers. Ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"pios kill dosing_control"),". Multiple jobs can be killed, ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"pios kill stirring dosing_control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pios run <job>")," on each worker, run the job ",(0,a.kt)("inlineCode",{parentName:"li"},"<job>")," in the background. Job specific arguments can be specified after. Ex: ",(0,a.kt)("inlineCode",{parentName:"li"},"pios run add_media --ml 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pios update")," install the latest PioreactorApp code on each worker."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pios sync-configs")," deploy the config.ini files to workers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pios install-plugin <plugin name>")," will install the plugin on each worker ",(0,a.kt)("em",{parentName:"li"},"and")," the leader.")),(0,a.kt)("p",null,"In each of the above commands, the specific workers can be invoked with ",(0,a.kt)("inlineCode",{parentName:"p"},"--units")," (which can be used multiple times. Ex: ",(0,a.kt)("inlineCode",{parentName:"p"},"pios run stirring --units 1 --units 2"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-y")," will skip user confirmation of the command to run."))}m.isMDXComponent=!0}}]);