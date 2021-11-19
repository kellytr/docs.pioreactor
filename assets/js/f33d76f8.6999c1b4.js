"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[283],{8192:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var l=t(7462),n=t(3366),r=(t(7294),t(3905)),i=["components"],a={},p="Local development of Pioreactor",c={unversionedId:"Development locally/Develop on Pioreactor locally",id:"Development locally/Develop on Pioreactor locally",isDocsHomePage:!1,title:"Local development of Pioreactor",description:"Local development",source:"@site/developer_guide/02-Development locally/01-Develop on Pioreactor locally.md",sourceDirName:"02-Development locally",slug:"/Development locally/Develop on Pioreactor locally",permalink:"/developer_guide/Development locally/Develop on Pioreactor locally",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Developer Guide",permalink:"/developer_guide/developer_guide_intro"},next:{title:"Writing new automations",permalink:"/developer_guide/Automations/Writing new automations"}},s=[{value:"Local development",id:"local-development",children:[],level:4},{value:"MQTT",id:"mqtt",children:[],level:4},{value:"Testing",id:"testing",children:[],level:4},{value:"Running jobs locally",id:"running-jobs-locally",children:[],level:4},{value:"Raspberry Pi Images",id:"raspberry-pi-images",children:[],level:4}],u={toc:s};function d(e){var o=e.components,t=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-development-of-pioreactor"},"Local development of Pioreactor"),(0,r.kt)("h4",{id:"local-development"},"Local development"),(0,r.kt)("p",null,"To install the Pioreactor codebase locally, it should be enough to clone the repo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pioreactor/pioreactor"},"pioreactor/pioreactor")," and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip3 install -e .\npip3 install -r requirements/requirements_dev.txt\n")),(0,r.kt)("h4",{id:"mqtt"},"MQTT"),(0,r.kt)("p",null,"You will need to set up MQTT locally. On OSX, homebrew can be used to install the MQTT broker ",(0,r.kt)("inlineCode",{parentName:"p"},"mosquitto"),". Also enable logging in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/etc/mosquitto/mosquitto.conf"),", ex:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"log_dest file path/to/somewhere/.mosquitto/log")),(0,r.kt)("p",null,"The CLI tools ",(0,r.kt)("inlineCode",{parentName:"p"},"mosquitto_pub")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mosquitto_sub")," should work as well."),(0,r.kt)("h4",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Paho MQTT uses lots of sockets, and running all tests at once can overload the max allowed open files. Try something like ",(0,r.kt)("inlineCode",{parentName:"p"},"ulimit -Sn 10000")," if you receive ",(0,r.kt)("inlineCode",{parentName:"p"},"OSError: [Errno 24] Too many open files")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"py.test pioreactor/tests\n")),(0,r.kt)("h4",{id:"running-jobs-locally"},"Running jobs locally"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TESTING=1 pio run <job name>\n")),(0,r.kt)("p",null,"You can also modify to hostname and experiment with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TESTING=1 \\\nHOSTNAME=<whatever> \\\nEXPERIMENT=<up to you> \\\npio run <job name>\n")),(0,r.kt)("h4",{id:"raspberry-pi-images"},"Raspberry Pi Images"),(0,r.kt)("p",null,"Raspberry Pi images are built in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/CustoPiZer/tree/pioreactor"},"Pioreactor/CustoPizer")," repo, though these aren't needed for development."))}d.isMDXComponent=!0}}]);