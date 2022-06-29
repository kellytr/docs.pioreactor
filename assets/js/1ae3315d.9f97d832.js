(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[6598],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(a),g=s,d=f["".concat(o,".").concat(g)]||f[g]||u[g]||r;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:s,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},9702:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),s=a(6010),r="highlightThumbnail_SKrZ",i="thumbnail_dvij";a(5979);function c(e){var t=e.children,c=e.title,o=e.images,l=n.useState(o[0]),p=l[0],u=l[1],f=function(e){return function(t){u(o[e])}};return n.createElement("div",{style:{padding:"10px",margin:"20px 0px 60px 0px",display:"flex",flexWrap:"nowrap"}},n.createElement("div",{id:"mainImage",style:{width:"55%",float:"left",marginRight:"10px"}},n.createElement("h2",null," ",c," "),n.createElement("img",{maxHeight:240,src:a(7331)("./"+p).default}),n.createElement("div",{id:"thumbnails",style:{width:"100%"}},o.map((function(e,t){var c;return n.createElement("button",{onClick:f(t),key:t,className:(0,s.Z)((c={},c[i]=e!==p,c[r]=e===p,c))},n.createElement("img",{width:"100px",src:a(7331)("./"+e).default,key:e}))})))),n.createElement("section",{style:{width:"44%",float:"left",marginTop:"40px"}},t))}},2969:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(7294);function s(e){var t=e.children,a=e.color;return n.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},7214:function(e,t,a){"use strict";a.d(t,{$C:function(){return o},$y:function(){return c},Ce:function(){return r},Q6:function(){return s},ek:function(){return i},iN:function(){return n}});var n="rgb(35, 67, 232)",s="rgb(170, 10, 60)",r="rgb(220, 84, 183)",i="rgb(19, 173, 102)",c="rgb(255, 144, 36)",o="rgb(0,139,139)"},6582:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return d}});var n=a(7462),s=a(3366),r=(a(7294),a(3905)),i=a(9702),c=a(2969),o=a(7214),l=["components"],p={title:"Wetware assembly",slug:"/wetware-assembly",hide_table_of_contents:!0},u=void 0,f={unversionedId:"getting-started/hardware-set-up/wetware-assembly",id:"getting-started/hardware-set-up/wetware-assembly",title:"Wetware assembly",description:"You will need:",source:"@site/user-guide/01-getting-started/01-hardware-set-up/03-wetware-assembly.md",sourceDirName:"01-getting-started/01-hardware-set-up",slug:"/wetware-assembly",permalink:"/user-guide/wetware-assembly",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Wetware assembly",slug:"/wetware-assembly",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Assembling the Raspberry Pi and the HAT",permalink:"/user-guide/rpi-hat-assembly"},next:{title:"Putting it all together",permalink:"/user-guide/putting-it-together"}},g={},d=[],b={toc:d};function m(e){var t=e.components,a=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Step 1: Necessary parts",images:["square_nuts.jpg","heating_parts.jpg"],mdxType:"AssemblyInstructionBlock"},(0,r.kt)("p",null,"You will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(c.Z,{color:o.iN,mdxType:"Highlight"},"Vial holder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(c.Z,{color:o.Q6,mdxType:"Highlight"},"M3 square nuts ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(c.Z,{color:o.$y,mdxType:"Highlight"},"Heating PCB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(c.Z,{color:o.Ce,mdxType:"Highlight"},"Heating thermal pad"),"(contains blue cover on one side and clear plastic on the other)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(c.Z,{color:o.ek,mdxType:"Highlight"},"Flat flex cable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(c.Z,{color:o.$C,mdxType:"Highlight"},"3mm M2.5 nylon screws (2x)")))),(0,r.kt)("hr",null),(0,r.kt)(i.Z,{title:"Step 2: Assembling the vial holder",images:["insert_square_nuts.jpg","check_square_nuts.jpg"],mdxType:"AssemblyInstructionBlock"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Insert ",(0,r.kt)(c.Z,{color:o.iN,mdxType:"Highlight"},"M3 square nuts")," into the 4 holes at the bottom of the vial holder.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can check the alignment of the square nuts by looking through the screwhole from the bottom of the vial holder. ")))),(0,r.kt)("hr",null),(0,r.kt)(i.Z,{title:"Step 3: Placing the heating pad",images:["sticky_side.jpg","remove_blue.jpg","remove_blue_2.jpg","cable_connector_open.jpg","cable_connector_closed.jpg"],mdxType:"AssemblyInstructionBlock"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Remove the clear plastic from the bottom of the heating pad, revealing the sticky side. "),(0,r.kt)("li",{parentName:"ol"},"Place the sticky side on the flat part of the heating PCB."),(0,r.kt)("li",{parentName:"ol"},"Remove the blue protective plastic on top of the heating pad. "),(0,r.kt)("li",{parentName:"ol"},"Flip the PCB over. On the cable connector, ",(0,r.kt)(c.Z,{color:o.Q6,mdxType:"Highlight"},"pull the tabs outward")," to open it."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)(c.Z,{color:o.ek,mdxType:"Highlight"},"Insert the cable")," (blue side down, copper side up) into the cable connector, then ",(0,r.kt)(c.Z,{color:o.$y,mdxType:"Highlight"},"push the tabs inward")," to secure the cable."))),(0,r.kt)("hr",null),(0,r.kt)(i.Z,{title:"Step 4: Securing the heating PCB into the vial holder",images:["insert_heating_cable.jpg","inserted_heating_cable.jpg","heating_bottom_screws.jpg"],mdxType:"AssemblyInstructionBlock"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Identify the ",(0,r.kt)(c.Z,{color:o.Ce,mdxType:"Highlight"},"slot")," on the vial holder where the flat flex cable will go through."),(0,r.kt)("li",{parentName:"ol"},"Insert the cable in the vial holder, and through the slot, with the blue side of the cable facing upwards."),(0,r.kt)("li",{parentName:"ol"},"Pull the cable through until the heating PCB is flat with the bottom of the vial holder."),(0,r.kt)("li",{parentName:"ol"},"Secure the PCB from the bottom using the ",(0,r.kt)(c.Z,{color:o.$C,mdxType:"Highlight"},"two 3 mm M2.5 screws"),"."),(0,r.kt)("li",{parentName:"ol"},"Continue to the ",(0,r.kt)("a",{parentName:"li",href:"/user-guide/putting-it-together"},"next page"),"."))))}m.isMDXComponent=!0},7346:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/bot_faceplate_screwed-1ae238379c07249577b43c6ac7c44b4c.jpg"},8682:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/bottom_faceplate-8f481e08fbcf1fb370e3508d3a816023.jpg"},2744:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/bulb_in_pocket-c801205641f0a5b623646f87feba50a5.jpg"},1663:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cable_channels-95e5eed62ecafec7a87a454a94f32994.jpg"},6674:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cable_connector_closed-d996cbebbbcedceabce806e470d2ac13.jpg"},2401:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cable_connector_open-9d69db318c0ac7b1fc7d76377683d7bb.jpg"},8849:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cable_orientation-588da015fd91aa62385dcbef783e39a2.jpg"},4715:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/check_square_nuts-8599337077d03015e3db1fc4d8355278.jpg"},1088:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/fan_on_faceplate-6e7fbe32631ff62c774cee7e683b567b.jpg"},8973:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/finished_pio-0332f8ff5afb9a9e813b51a91bd9e0dc.jpg"},4083:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/gpio_pushed-7cc8606a65f3a6ec4eae12a18e5e6f76.jpg"},63:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/gpio_unpushed-a8ba1e096611eba805663628082a03f5.jpg"},9066:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/hat_pieces-7840c2e8ec6c36add1752340e5506aca.jpg"},3813:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heating_bottom_screws-357d00cd27aa546036c0442502e6e5c9.jpg"},9487:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heating_connection-f39571d0c75bf67baf1f643b6b00c7e3.jpg"},1913:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heating_parts-be49d494c3fcac33dc929a28fc2596f5.jpg"},1007:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heating_topview-bff2e988a806bee2722bb106657645b8.jpg"},1249:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/insert_heating_cable-dbacfb299ec50edc4dfc496dfeca9811.jpg"},7076:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/insert_square_nuts-2485930303bf11b466b19e40ebf01bb9.jpg"},5915:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/inserted_heating_cable-004599086c6e416ce0a6b9878b9795d7.jpg"},104:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pliers-18890a706b2d95f327a17f0df9c7ee86.jpg"},7275:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pocket_caps-0b0cb0b64b18992572e09a1f02f1fdd6.jpg"},6957:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pockets_with_caps-e2aa18d97e352da1f612c841681dd222.jpg"},9532:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/remove_blue-6dcbe14e9d9d23d5015f2276c7f958ea.jpg"},6738:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/remove_blue_2-6f3bc1c7f8daa91161254c7cc55db7f0.jpg"},6180:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rpi_hat_parts-1d81713893614c34584ce007986c5639.jpg"},3855:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rpi_no_standoffs-17ca3c2d4885302777118e3643f6fcbf.jpg"},4933:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rpi_types-6a9652e22cb17f49de1d86e532fa05b3.jpg"},2300:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rpi_with_standoffs-dff03a148cf83acf2c479864323cf945.jpg"},5986:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screw_top_bottom-84cbf5d0417ae1cb243daee34b71a7c7.jpg"},61:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screw_top_bottom_gpio-4e714daeb650a475c7582f42a1aef69d.jpg"},2939:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screw_vial_holder_faceplate-fceeba6475841a3befed0cb3c7169199.jpg"},8471:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/screwdriver-09c58f2fab8b1b27e21c77d29314a3d7.jpg"},8762:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/square_nuts-e1db0b6164188c99bf62f4fa182c3ec5.jpg"},9845:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/standoff_on_hat-c19fb900cc092a953914debf87287082.jpg"},9488:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/sticky_side-782ca6f4ae73180c6b742484f1e1cb08.jpg"},7752:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/stirring_connection-f99273c905b2769ef79fed190c321769.jpg"},5775:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/stirring_parts-c91ccc5e989073bab16e89b1aafcbdf0.jpg"},8371:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/three_bulbs-706d6299dc47770176081db933965623.jpg"},383:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/top_faceplate_screws-eaf93355868c5657306396c75223b5bb.jpg"},8126:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/top_faceplate_screws_2-d806e5573e06c4f83ef8960a8f2a63be.jpg"},6067:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/vial_holder_alignment-87413136dae3f77a14d0fe4190ecaec1.jpg"},2781:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/vial_holder_on_fan-9b295b848d30fb1c535806348cc9e388.jpg"},7331:function(e,t,a){var n={"./bot_faceplate_screwed.jpg":7346,"./bottom_faceplate.jpg":8682,"./bulb_in_pocket.jpg":2744,"./cable_channels.jpg":1663,"./cable_connector_closed.jpg":6674,"./cable_connector_open.jpg":2401,"./cable_orientation.jpg":8849,"./check_square_nuts.jpg":4715,"./fan_on_faceplate.jpg":1088,"./finished_pio.jpg":8973,"./gpio_pushed.jpg":4083,"./gpio_unpushed.jpg":63,"./hat_pieces.jpg":9066,"./heating_bottom_screws.jpg":3813,"./heating_connection.jpg":9487,"./heating_parts.jpg":1913,"./heating_topview.jpg":1007,"./insert_heating_cable.jpg":1249,"./insert_square_nuts.jpg":7076,"./inserted_heating_cable.jpg":5915,"./pliers.jpg":104,"./pocket_caps.jpg":7275,"./pockets_with_caps.jpg":6957,"./remove_blue.jpg":9532,"./remove_blue_2.jpg":6738,"./rpi_hat_parts.jpg":6180,"./rpi_no_standoffs.jpg":3855,"./rpi_types.jpg":4933,"./rpi_with_standoffs.jpg":2300,"./screw_top_bottom.jpg":5986,"./screw_top_bottom_gpio.jpg":61,"./screw_vial_holder_faceplate.jpg":2939,"./screwdriver.jpg":8471,"./square_nuts.jpg":8762,"./standoff_on_hat.jpg":9845,"./sticky_side.jpg":9488,"./stirring_connection.jpg":7752,"./stirring_parts.jpg":5775,"./three_bulbs.jpg":8371,"./top_faceplate_screws.jpg":383,"./top_faceplate_screws_2.jpg":8126,"./vial_holder_alignment.jpg":6067,"./vial_holder_on_fan.jpg":2781};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=7331}}]);