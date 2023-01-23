"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[5542],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return t?i.createElement(g,l(l({ref:n},s),{},{components:t})):i.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var u=2;u<o;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},97950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));const o={title:"Turning your plugins into a Python package to share",slug:"/plugin-as-python-package"},l=void 0,r={unversionedId:"Plugins/plugin-as-python-package",id:"Plugins/plugin-as-python-package",title:"Turning your plugins into a Python package to share",description:"If you'd like to contribute your plugin to the community, this is done easily by creating a Python package and uploading to PyPi. Let's walk through this!",source:"@site/developer-guide/07-Plugins/03-plugin-as-python-package.md",sourceDirName:"07-Plugins",slug:"/plugin-as-python-package",permalink:"/developer-guide/plugin-as-python-package",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Turning your plugins into a Python package to share",slug:"/plugin-as-python-package"},sidebar:"tutorialSidebar",previous:{title:"Adding your plugins to the web interface",permalink:"/developer-guide/adding-plugins-to-ui"},next:{title:"Data stores in the Pioreactor",permalink:"/developer-guide/data-stores"}},p={},u=[{value:"Organizing your files",id:"organizing-your-files",level:2},{value:"1. A license text file, named <code>LICENSE.txt</code>",id:"1-a-license-text-file-named-licensetxt",level:4},{value:"2. A MANIFEST file, named <code>MANIFEST.in</code>",id:"2-a-manifest-file-named-manifestin",level:4},{value:"3. A <code>README.md</code>",id:"3-a-readmemd",level:4},{value:"4. A Python <code>setup.py</code> file",id:"4-a-python-setuppy-file",level:4},{value:"5. A subfolder containing your plugin&#39;s code",id:"5-a-subfolder-containing-your-plugins-code",level:4},{value:"Contents of the subfolder",id:"contents-of-the-subfolder",level:3},{value:"1. Your plugins Python files",id:"1-your-plugins-python-files",level:4},{value:"2. A Python <code>__init__.py</code> file",id:"2-a-python-__init__py-file",level:4},{value:"If implementing an automation:",id:"if-implementing-an-automation",level:5},{value:"If implementing a job:",id:"if-implementing-a-job",level:5},{value:"3. A configuration file, named <code>additional_config.ini</code>",id:"3-a-configuration-file-named-additional_configini",level:4},{value:"4. Adding details for the UI",id:"4-adding-details-for-the-ui",level:4},{value:"If implementing a job:",id:"if-implementing-a-job-1",level:5},{value:"If implementing an automation:",id:"if-implementing-an-automation-1",level:5},{value:"5. Optional: adding tables to the SQL store",id:"5-optional-adding-tables-to-the-sql-store",level:4},{value:"Create a Python package on PyPi",id:"create-a-python-package-on-pypi",level:2},{value:"Installing your Python package on your cluster",id:"installing-your-python-package-on-your-cluster",level:2},{value:"Sharing your plugin with the community",id:"sharing-your-plugin-with-the-community",level:2}],s={toc:u};function d(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you'd like to contribute your plugin to the community, this is done easily by creating a Python package and uploading to PyPi. Let's walk through this!"),(0,a.kt)("h2",{id:"organizing-your-files"},"Organizing your files"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Note that the way files are organized may depend on if your plugin is an ",(0,a.kt)("strong",{parentName:"p"},"automation")," or a ",(0,a.kt)("strong",{parentName:"p"},"job"),". Plugins can install both automations and jobs.")),(0,a.kt)("p",null,"Consider an example plugin: a ",(0,a.kt)("strong",{parentName:"p"},"job")," called ",(0,a.kt)("em",{parentName:"p"},"Relay"),", which just turns on or off anything that is plugged into a channel of your choosing. Follow the file organization here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kellytr/pioreactor-relay-plugin"},"kellytr/pioreactor-relay-plugin"),"."),(0,a.kt)("p",null,"Here's a general schematic of how your files should be organized for a job:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\ud83d\udcc1 my-plugin-name\n\u251c\u2500 \ud83d\udcc1 my_plugin_name\n\u2502  \u251c\u2500 \ud83d\udcc1 ui\n\u2502  \u2502  \u251c\u2500 \ud83d\udcc1 contrib\n\u2502  \u2502  \u2502  \u251c\u2500 \ud83d\udcc1 jobs\n\u2502  \u2502  \u2502  \u2502  \u251c\u2500 \ud83d\udcdd my_plugin.yaml\n\u2502  \u251c\u2500 \ud83d\udcdd __init__.py\n\u2502  \u251c\u2500 \ud83d\udcdd additional_config.ini\n\u2502  \u251c\u2500 \ud83d\udcdd my_plugin.py\n\u251c\u2500 \ud83d\udcdd LICENSE.txt\n\u251c\u2500 \ud83d\udcdd MANIFEST.in\n\u251c\u2500 \ud83d\udcdd README.md\n\u251c\u2500 \ud83d\udcdd setup.py\n")),(0,a.kt)("p",null,"The schematic is very similar for an ",(0,a.kt)("strong",{parentName:"p"},"automation plugin")," ","\u2014"," the only difference is the location of the ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\ud83d\udcc1 my-plugin-name\n\u251c\u2500 \ud83d\udcc1 my_plugin_name\n\u2502  \u251c\u2500 \ud83d\udcc1 ui\n\u2502  \u2502  \u251c\u2500 \ud83d\udcc1 contrib\n\u2502  \u2502  \u2502  \u251c\u2500 \ud83d\udcc1 automations\n\u2502  \u2502  \u2502  \u2502  \u251c\u2500 \ud83d\udcc1 <SPECIFIC AUTOMATION (one of {dosing, led, temperature})>\n\u2502  \u2502  \u2502  \u2502  \u2502  \u251c\u2500 \ud83d\udcdd my_plugin.yaml\n\u2502  \u251c\u2500 \ud83d\udcdd __init__.py\n\u2502  \u251c\u2500 \ud83d\udcdd additional_config.ini\n\u2502  \u251c\u2500 \ud83d\udcdd my_plugin.py\n\u251c\u2500 \ud83d\udcdd LICENSE.txt\n\u251c\u2500 \ud83d\udcdd README.md\n\u251c\u2500 \ud83d\udcdd MANIFEST.in\n\u251c\u2500 \ud83d\udcdd setup.py\n")),(0,a.kt)("p",null,"Start by creating a new folder for your plugin. In our case, we named it ",(0,a.kt)("inlineCode",{parentName:"p"},"pioreactor-relay-plugin"),". This ",(0,a.kt)("strong",{parentName:"p"},"main folder")," will contain 4 important parts:"),(0,a.kt)("h4",{id:"1-a-license-text-file-named-licensetxt"},"1. A license text file, named ",(0,a.kt)("inlineCode",{parentName:"h4"},"LICENSE.txt")),(0,a.kt)("p",null,"A common license for software is the ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},"MIT license"),"."),(0,a.kt)("h4",{id:"2-a-manifest-file-named-manifestin"},"2. A MANIFEST file, named ",(0,a.kt)("inlineCode",{parentName:"h4"},"MANIFEST.in")),(0,a.kt)("p",null,"When creating a Python package, there's a default set of files that are included. To assure that our additional configuration and yaml files are included, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"MANIFEST.in")," file and paste the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"include <MAIN FOLDER>/additional_config.ini\nrecursive-include <MAIN FOLDER>/ui/ *.yaml\n")),(0,a.kt)("h4",{id:"3-a-readmemd"},"3. A ",(0,a.kt)("inlineCode",{parentName:"h4"},"README.md")),(0,a.kt)("p",null,"Write a few notes with general information on your plugin to guide users. "),(0,a.kt)("h4",{id:"4-a-python-setuppy-file"},"4. A Python ",(0,a.kt)("inlineCode",{parentName:"h4"},"setup.py")," file"),(0,a.kt)("p",null,"Create a Python file and paste the following. Make changes based on your own plugin information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\nfrom setuptools import setup, find_packages\n\nsetup(\n    name="pioreactor_relay_plugin",\n    version="<VERSION>",\n    license_files = (\'LICENSE.txt\',),\n    description="<DESCRIPTION OF PLUGIN>",\n    long_description=open("README.md").read(),\n    long_description_content_type="text/markdown",\n    author_email="<EMAIL>",\n    author="<NAME>",\n    url="<YOUR HOMEPAGE>",\n    packages=find_packages(),\n    include_package_data=True,\n    entry_points={\n        "pioreactor.plugins": "<SUBFOLDER CONTAINING PLUGIN> = <SUBFOLDER CONTAINING PLUGIN>"\n    },\n)\n')),(0,a.kt)("h4",{id:"5-a-subfolder-containing-your-plugins-code"},"5. A subfolder containing your plugin's code"),(0,a.kt)("p",null,"Within the main file ",(0,a.kt)("inlineCode",{parentName:"p"},"pioreactor-relay-plugin"),", we created a subfile ",(0,a.kt)("inlineCode",{parentName:"p"},"pioreactor_relay_plugin"),". "),(0,a.kt)("h3",{id:"contents-of-the-subfolder"},"Contents of the subfolder"),(0,a.kt)("h4",{id:"1-your-plugins-python-files"},"1. Your plugins Python files"),(0,a.kt)("p",null,"This Python file contains the core code for your plugin. If your plugin is implementing a background job, then there should be a\nfunction decorated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@click.command")," at the bottom of the file. See example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kellytr/pioreactor-relay-plugin/blob/d3fd10dab2bd3b460e2b00223d7d9dd9ae3165d8/pioreactor_relay_plugin/relay.py#L60-L83"},"here"),". For discovery reasons, this function's name ",(0,a.kt)("strong",{parentName:"p"},"should start with ",(0,a.kt)("inlineCode",{parentName:"strong"},"click_")),"."),(0,a.kt)("h4",{id:"2-a-python-__init__py-file"},"2. A Python ",(0,a.kt)("inlineCode",{parentName:"h4"},"__init__.py")," file"),(0,a.kt)("h5",{id:"if-implementing-an-automation"},"If implementing an automation:"),(0,a.kt)("p",null,"Import the Class of your automation file:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from <SUBFOLDER CONTAINING PLUGIN>.<PYTHON FILE NAME> import <CLASS NAME>\n")),(0,a.kt)("h5",{id:"if-implementing-a-job"},"If implementing a job:"),(0,a.kt)("p",null,"This will contain an ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statement such as the following: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from <SUBFOLDER CONTAINING PLUGIN>.<PYTHON FILE NAME> import <PLUGIN CLICK FUNCTION>\n")),(0,a.kt)("p",null,"This imports the function within our plugin file that executes our plugin action. "),(0,a.kt)("p",null,"Example for the relay plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from pioreactor_relay_plugin.relay import click_relay\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"click_relay")," is the function decorated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@click.command"),"."),(0,a.kt)("h4",{id:"3-a-configuration-file-named-additional_configini"},"3. A configuration file, named ",(0,a.kt)("inlineCode",{parentName:"h4"},"additional_config.ini")),(0,a.kt)("p",null,"This configuration file will contain additional configs that we want to add to our list of existing Configurations on the Pioreactor web interface. This file will be merged with the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ini")," when the plugin is installed. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(44636).Z,width:"951",height:"557"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A convention we've tried to follow is to use the section name ",(0,a.kt)("inlineCode",{parentName:"p"},"[<job_name>.config]")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"[<automation_name>.config]")," in the configuration files. For example, our relay job has ",(0,a.kt)("inlineCode",{parentName:"p"},"[relay.config]")," in its ",(0,a.kt)("inlineCode",{parentName:"p"},"additional_config.ini")," and settings under it.")),(0,a.kt)("h4",{id:"4-adding-details-for-the-ui"},"4. Adding details for the UI"),(0,a.kt)("h5",{id:"if-implementing-a-job-1"},"If implementing a job:"),(0,a.kt)("p",null,"Within our main subfolder, create subfolders named ",(0,a.kt)("inlineCode",{parentName:"p"},"ui/contrib/jobs"),". Move your ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," file to this folder."),(0,a.kt)("p",null,"For a job, the ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," file should follow this format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"---\ndisplay_name:  # human readable name\njob_name: # job name\ndisplay: # bool; true to display on the /Pioreactors card\nsource: # name of your plugin\ndescription: # description of what your plugin does\npublished_settings:\n  - key:  # as defined in Python\n    unit: # unit (ml, lux, AU, etc.)\n    label: # human readable name\n    description: # description of your setting\n    type:  # one of numeric, boolean, text\n    default: # provide a default value\n    display: # bool; true to display on the /Pioreactors card\n  ...\n")),(0,a.kt)("h5",{id:"if-implementing-an-automation-1"},"If implementing an automation:"),(0,a.kt)("p",null,"In the case of creating an ",(0,a.kt)("strong",{parentName:"p"},"automation plugin")," instead of a ",(0,a.kt)("strong",{parentName:"p"},"job"),", the subfolders are ",(0,a.kt)("inlineCode",{parentName:"p"},"ui/contrib/automations/<SPECIFIC AUTOMATION>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"SPECIFIC_AUTOMATION")," is one of ",(0,a.kt)("inlineCode",{parentName:"p"},"dosing"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"led"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"temperature"),". Move your ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," file to the final subfolder."),(0,a.kt)("p",null,"The",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," file of an automation should appear as the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"---\ndisplay_name:  # human readable name\nautomation_name: # automation name\nsource: # folder that contains your plugin\ndescription: # description of your plugin\nfields:\n  - key:  # as defined in Python\n    unit: # unit of your key\n    label: # human readable name\n    description: # description of your key\n")),(0,a.kt)("h4",{id:"5-optional-adding-tables-to-the-sql-store"},"5. Optional: adding tables to the SQL store"),(0,a.kt)("p",null,"You can also add a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"additional_sql.sql")," that will run against the SQLite database. For example, a CO\u2082 sensor may want to create a new table in the database to store its sensor data. It's ",(0,a.kt)("inlineCode",{parentName:"p"},"additional_sql.sql")," may look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS co2_readings (\n    experiment               TEXT NOT NULL,\n    pioreactor_unit          TEXT NOT NULL,\n    timestamp                TEXT NOT NULL,\n    co2_reading_ppm          REAL\n);\n")),(0,a.kt)("p",null,"You also need to tell Pioreactor software how to populate this table from your sensor readings. Include the following in your code such that is runs when the plugin is loaded:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"a parser function that accepts a MQTT topic and payload, and returns a dictionary that maps to the new tables schema.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"a ",(0,a.kt)("inlineCode",{parentName:"p"},"TopicToParserToTable")," object is created with the MQTT topics to listen to, the parser, and the table name to load to. This ",(0,a.kt)("inlineCode",{parentName:"p"},"TopicToParserToTable")," is provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"register_source_to_sink"),"."),(0,a.kt)("p",{parentName:"li"},"Example below for a CO2 sensor:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pioreactor.background_jobs.leader.mqtt_to_db_streaming import produce_metadata\nfrom pioreactor.background_jobs.leader.mqtt_to_db_streaming import register_source_to_sink\nfrom pioreactor.background_jobs.leader.mqtt_to_db_streaming import TopicToParserToTable\n\n...\n\ndef parser(topic, payload) -> dict:\n    metadata = produce_metadata(topic)\n    return {\n        "experiment": metadata.experiment,\n        "pioreactor_unit": metadata.pioreactor_unit,\n        "timestamp": timing.current_utc_timestamp(),\n        "co2_reading_ppm": float(payload),\n    }\n\n\nregister_source_to_sink(\n    TopicToParserToTable(\n        ["pioreactor/+/+/scd_reading/co2", "pioreactor/+/+/co2_reading/co2"],\n        parser,\n        "co2_readings",\n    )\n)\n')),(0,a.kt)("p",null,"See an example plugin that uses this idea ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/co2-reading-plugin"},"here"),"."),(0,a.kt)("h2",{id:"create-a-python-package-on-pypi"},"Create a Python package on PyPi"),(0,a.kt)("p",null,"Create an account on ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/"},"https://pypi.org/"),". Make sure to verify your email."),(0,a.kt)("p",null,"On your command line, type the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install twine\npip install --upgrade build\npython -m build --wheel     \ntwine upload dist/<.WHL FILE>\n")),(0,a.kt)("p",null,"You will then be prompted for a username and password. Use the credentials for your PyPi account. Then, your package is uploaded and viewable at the link provided! "),(0,a.kt)("admonition",{title:"Note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Before you build a new wheel, it's good practice to clean up your previous build.",(0,a.kt)("br",{parentName:"p"}),"\n","This can be done using ",(0,a.kt)("inlineCode",{parentName:"p"},"python setup.py clean --all")," on the command line. ")),(0,a.kt)("h2",{id:"installing-your-python-package-on-your-cluster"},"Installing your Python package on your cluster"),(0,a.kt)("p",null,"A plugin can be installed individually through the command line on a leader using ",(0,a.kt)("inlineCode",{parentName:"p"},"pio"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pios install-plugin <PACKAGE NAME>\n")),(0,a.kt)("p",null,"To install a given plugin on the leader and all workers connected to the leader in a cluster, ",(0,a.kt)("inlineCode",{parentName:"p"},"pios install-plugin")," can be used. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pios install-plugin <PACKAGE NAME>\n")),(0,a.kt)("h2",{id:"sharing-your-plugin-with-the-community"},"Sharing your plugin with the community"),(0,a.kt)("p",null,"To give your plugin futher reach, we've provided an option to add it to the web interface. You will need to edit the ",(0,a.kt)("strong",{parentName:"p"},"plugins.json")," file within our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Pioreactor/list-of-plugins"},"Pioreactor repository, list-of-plugins"),". "),(0,a.kt)("p",null,"There are two ways to do this: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an issue to have us edit the plugins.json file for you. "),(0,a.kt)("li",{parentName:"ol"},"Fork from our repository to edit the plugins.json file, then create a pull request. ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(25178).Z,width:"1896",height:"798"})),(0,a.kt)("p",null,"In both cases, we will evaluate your plugin to ensure code quality and all requirements are met (tests are included). "),(0,a.kt)("p",null,"Once your plugin is accepted, it will appear on the Plugins tab on the Pioreactor web interface. Users in the community can now easily click ",(0,a.kt)("em",{parentName:"p"},"Install")," to download your plugin onto their Pioreactors!"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(77503).Z,width:"1893",height:"925"})))}d.isMDXComponent=!0},44636:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/python-package-new-config-fc1c3fe6948cde33a3e00db59cf98588.png"},77503:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/python-package-plugins-b119d590d45ad781923cd0f333bdfc96.png"},25178:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/python-package-pull-or-issue-050b26469751ff2da3986a6c75cbfb58.png"}}]);