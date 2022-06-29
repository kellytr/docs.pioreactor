(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[9681],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return g}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),g=s,d=f["".concat(o,".").concat(g)]||f[g]||u[g]||r;return n?a.createElement(d,i(i({ref:t},l),{},{components:n})):a.createElement(d,i({ref:t},l))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:s,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9702:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),s=n(6010),r="highlightThumbnail_SKrZ",i="thumbnail_dvij";n(5979);function c(e){var t=e.children,c=e.title,o=e.images,p=a.useState(o[0]),l=p[0],u=p[1],f=function(e){return function(t){u(o[e])}};return a.createElement("div",{style:{padding:"10px",margin:"20px 0px 60px 0px",display:"flex",flexWrap:"nowrap"}},a.createElement("div",{id:"mainImage",style:{width:"55%",float:"left",marginRight:"10px"}},a.createElement("h2",null," ",c," "),a.createElement("img",{maxHeight:240,src:n(7331)("./"+l).default}),a.createElement("div",{id:"thumbnails",style:{width:"100%"}},o.map((function(e,t){var c;return a.createElement("button",{onClick:f(t),key:t,className:(0,s.Z)((c={},c[i]=e!==l,c[r]=e===l,c))},a.createElement("img",{width:"100px",src:n(7331)("./"+e).default,key:e}))})))),a.createElement("section",{style:{width:"44%",float:"left",marginTop:"40px"}},t))}},2969:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294);function s(e){var t=e.children,n=e.color;return a.createElement("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},7214:function(e,t,n){"use strict";n.d(t,{$C:function(){return o},$y:function(){return c},Ce:function(){return r},Q6:function(){return s},ek:function(){return i},iN:function(){return a}});var a="rgb(35, 67, 232)",s="rgb(170, 10, 60)",r="rgb(220, 84, 183)",i="rgb(19, 173, 102)",c="rgb(255, 144, 36)",o="rgb(0,139,139)"},6846:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return d}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),i=n(9702),c=n(2969),o=n(7214),p=["components"],l={title:"Connect the optics system",slug:"/optics-assembly",hide_table_of_contents:!0},u=void 0,f={unversionedId:"getting-started/hardware-set-up/optics-assembly",id:"getting-started/hardware-set-up/optics-assembly",title:"Connect the optics system",description:"1.\tOpen the flat flex cable connector on the HAT by pulling the tabs outward, like previously.",source:"@site/user-guide/01-getting-started/01-hardware-set-up/05-optics-assembly.md",sourceDirName:"01-getting-started/01-hardware-set-up",slug:"/optics-assembly",permalink:"/user-guide/optics-assembly",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Connect the optics system",slug:"/optics-assembly",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Putting it all together",permalink:"/user-guide/putting-it-together"},next:{title:"Software installation",permalink:"/user-guide/software-set-up"}},g={},d=[],b={toc:d};function m(e){var t=e.components,n=(0,s.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Step 1: Connecting heater and stirring to the HAT",images:["heating_connection.jpg","stirring_connection.jpg"],mdxType:"AssemblyInstructionBlock"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)(c.Z,{color:o.$y,mdxType:"Highlight"},"flat flex cable connector on the HAT")," by pulling the tabs outward, like previously."),(0,r.kt)("li",{parentName:"ol"},"Insert the flex cable copper-side up. "),(0,r.kt)("li",{parentName:"ol"},"Push the tabs inward to secure the flex cable."),(0,r.kt)("li",{parentName:"ol"},"Insert the ",(0,r.kt)(c.Z,{color:o.ek,mdxType:"Highlight"},"stirring power connector into PWM channel 1.")))),(0,r.kt)("hr",null),(0,r.kt)(i.Z,{title:"Step 2: Optic cables assembly",images:["three_bulbs.jpg","cable_channels.jpg"],mdxType:"AssemblyInstructionBlock"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You will need PD cables (2x; dark bulbs) and IR cable (1x; clear bulb). "),(0,r.kt)("li",{parentName:"ol"},"Insert the connector of either ",(0,r.kt)(c.Z,{color:o.iN,mdxType:"Highlight"},"PD cable into PD channel 1.")),(0,r.kt)("li",{parentName:"ol"},"Place the connector of the ",(0,r.kt)(c.Z,{color:o.iN,mdxType:"Highlight"},"other PD cable into PD channel 2.")),(0,r.kt)("li",{parentName:"ol"},"Insert the connector of the ",(0,r.kt)(c.Z,{color:o.Q6,mdxType:"Highlight"},"IR cable into channel A.")))),(0,r.kt)("hr",null),(0,r.kt)(i.Z,{title:"Step 3: Inserting the bulbs into the vial holder",images:["pocket_caps.jpg","bulb_in_pocket.jpg"],mdxType:"AssemblyInstructionBlock"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Insert the bulb of the PD cable in ",(0,r.kt)("strong",{parentName:"li"},"channel 1")," into the ",(0,r.kt)(c.Z,{color:o.Q6,mdxType:"Highlight"},"pocket labeled ",(0,r.kt)("strong",{parentName:"li"},"REF"),",")," as seen in the image. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bend the bulb's leads 90 degrees, as seen."),(0,r.kt)("li",{parentName:"ul"},"If needed, secure it in place with one of the ",(0,r.kt)(c.Z,{color:o.iN,mdxType:"Highlight"},"8 pocket caps.")," "))),(0,r.kt)("li",{parentName:"ol"},"Insert the bulb of the PD cable in ",(0,r.kt)("strong",{parentName:"li"},"channel 2")," into the ",(0,r.kt)(c.Z,{color:o.Ce,mdxType:"Highlight"},"pocket labeled ",(0,r.kt)("strong",{parentName:"li"},"90\xb0."))),(0,r.kt)("li",{parentName:"ol"},"Insert the bulb of the IR cable in ",(0,r.kt)("strong",{parentName:"li"},"channel A")," into the pocket labeled ",(0,r.kt)("strong",{parentName:"li"},"IR"),"."))),(0,r.kt)("hr",null),(0,r.kt)(i.Z,{title:"Step 4: Add the rest of the pocket caps",images:["pockets_with_caps.jpg","finished_pio.jpg"],mdxType:"AssemblyInstructionBlock"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Push all remaining LED pocket caps onto each pocket."),(0,r.kt)("li",{parentName:"ol"},"Your Pioreactor is complete! \ud83d\ude80 You can now insert your vial and begin installing the ",(0,r.kt)("a",{parentName:"li",href:"/user-guide/software-set-up"},"software"),"."))))}m.isMDXComponent=!0},7346:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/bot_faceplate_screwed-1ae238379c07249577b43c6ac7c44b4c.jpg"},8682:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/bottom_faceplate-8f481e08fbcf1fb370e3508d3a816023.jpg"},2744:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/bulb_in_pocket-c801205641f0a5b623646f87feba50a5.jpg"},1663:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cable_channels-95e5eed62ecafec7a87a454a94f32994.jpg"},6674:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cable_connector_closed-d996cbebbbcedceabce806e470d2ac13.jpg"},2401:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cable_connector_open-9d69db318c0ac7b1fc7d76377683d7bb.jpg"},8849:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cable_orientation-588da015fd91aa62385dcbef783e39a2.jpg"},4715:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/check_square_nuts-8599337077d03015e3db1fc4d8355278.jpg"},1088:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/fan_on_faceplate-6e7fbe32631ff62c774cee7e683b567b.jpg"},8973:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/finished_pio-0332f8ff5afb9a9e813b51a91bd9e0dc.jpg"},4083:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gpio_pushed-7cc8606a65f3a6ec4eae12a18e5e6f76.jpg"},63:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/gpio_unpushed-a8ba1e096611eba805663628082a03f5.jpg"},9066:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/hat_pieces-7840c2e8ec6c36add1752340e5506aca.jpg"},3813:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/heating_bottom_screws-357d00cd27aa546036c0442502e6e5c9.jpg"},9487:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/heating_connection-f39571d0c75bf67baf1f643b6b00c7e3.jpg"},1913:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/heating_parts-be49d494c3fcac33dc929a28fc2596f5.jpg"},1007:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/heating_topview-bff2e988a806bee2722bb106657645b8.jpg"},1249:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/insert_heating_cable-dbacfb299ec50edc4dfc496dfeca9811.jpg"},7076:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/insert_square_nuts-2485930303bf11b466b19e40ebf01bb9.jpg"},5915:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/inserted_heating_cable-004599086c6e416ce0a6b9878b9795d7.jpg"},104:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pliers-18890a706b2d95f327a17f0df9c7ee86.jpg"},7275:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pocket_caps-0b0cb0b64b18992572e09a1f02f1fdd6.jpg"},6957:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pockets_with_caps-e2aa18d97e352da1f612c841681dd222.jpg"},9532:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/remove_blue-6dcbe14e9d9d23d5015f2276c7f958ea.jpg"},6738:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/remove_blue_2-6f3bc1c7f8daa91161254c7cc55db7f0.jpg"},6180:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rpi_hat_parts-1d81713893614c34584ce007986c5639.jpg"},3855:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rpi_no_standoffs-17ca3c2d4885302777118e3643f6fcbf.jpg"},4933:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rpi_types-6a9652e22cb17f49de1d86e532fa05b3.jpg"},2300:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rpi_with_standoffs-dff03a148cf83acf2c479864323cf945.jpg"},5986:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/screw_top_bottom-84cbf5d0417ae1cb243daee34b71a7c7.jpg"},61:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/screw_top_bottom_gpio-4e714daeb650a475c7582f42a1aef69d.jpg"},2939:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/screw_vial_holder_faceplate-fceeba6475841a3befed0cb3c7169199.jpg"},8471:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/screwdriver-09c58f2fab8b1b27e21c77d29314a3d7.jpg"},8762:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/square_nuts-e1db0b6164188c99bf62f4fa182c3ec5.jpg"},9845:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/standoff_on_hat-c19fb900cc092a953914debf87287082.jpg"},9488:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sticky_side-782ca6f4ae73180c6b742484f1e1cb08.jpg"},7752:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/stirring_connection-f99273c905b2769ef79fed190c321769.jpg"},5775:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/stirring_parts-c91ccc5e989073bab16e89b1aafcbdf0.jpg"},8371:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/three_bulbs-706d6299dc47770176081db933965623.jpg"},383:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/top_faceplate_screws-eaf93355868c5657306396c75223b5bb.jpg"},8126:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/top_faceplate_screws_2-d806e5573e06c4f83ef8960a8f2a63be.jpg"},6067:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/vial_holder_alignment-87413136dae3f77a14d0fe4190ecaec1.jpg"},2781:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/vial_holder_on_fan-9b295b848d30fb1c535806348cc9e388.jpg"},7331:function(e,t,n){var a={"./bot_faceplate_screwed.jpg":7346,"./bottom_faceplate.jpg":8682,"./bulb_in_pocket.jpg":2744,"./cable_channels.jpg":1663,"./cable_connector_closed.jpg":6674,"./cable_connector_open.jpg":2401,"./cable_orientation.jpg":8849,"./check_square_nuts.jpg":4715,"./fan_on_faceplate.jpg":1088,"./finished_pio.jpg":8973,"./gpio_pushed.jpg":4083,"./gpio_unpushed.jpg":63,"./hat_pieces.jpg":9066,"./heating_bottom_screws.jpg":3813,"./heating_connection.jpg":9487,"./heating_parts.jpg":1913,"./heating_topview.jpg":1007,"./insert_heating_cable.jpg":1249,"./insert_square_nuts.jpg":7076,"./inserted_heating_cable.jpg":5915,"./pliers.jpg":104,"./pocket_caps.jpg":7275,"./pockets_with_caps.jpg":6957,"./remove_blue.jpg":9532,"./remove_blue_2.jpg":6738,"./rpi_hat_parts.jpg":6180,"./rpi_no_standoffs.jpg":3855,"./rpi_types.jpg":4933,"./rpi_with_standoffs.jpg":2300,"./screw_top_bottom.jpg":5986,"./screw_top_bottom_gpio.jpg":61,"./screw_vial_holder_faceplate.jpg":2939,"./screwdriver.jpg":8471,"./square_nuts.jpg":8762,"./standoff_on_hat.jpg":9845,"./sticky_side.jpg":9488,"./stirring_connection.jpg":7752,"./stirring_parts.jpg":5775,"./three_bulbs.jpg":8371,"./top_faceplate_screws.jpg":383,"./top_faceplate_screws_2.jpg":8126,"./vial_holder_alignment.jpg":6067,"./vial_holder_on_fan.jpg":2781};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id=7331}}]);