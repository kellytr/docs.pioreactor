"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[3018],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,h=c["".concat(u,".").concat(d)]||c[d]||p[d]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(3743);const r="tableOfContentsInline_prmo";function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return a.createElement("div",{className:r},a.createElement(i.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),i=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function u(e){const t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function s(e,t){var n;let{anchorTopOffset:a}=t;const i=e.find((e=>u(e).top>=a));if(i){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(i))?i:null!=(r=e[e.indexOf(i)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){const t=(0,i.useRef)(void 0),n=m();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),u=s(l,{anchorTopOffset:n.current}),m=e.find((e=>u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===m)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function c(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?i.createElement("ul",{className:r?void 0:n},t.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(c,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const d=i.memo(c);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:u="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:c,...h}=e;const g=(0,r.L)(),f=null!=m?m:g.tableOfContents.minHeadingLevel,k=null!=c?c:g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>l({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:k});return p((0,i.useMemo)((()=>{if(u&&s)return{linkClassName:u,linkActiveClassName:s,minHeadingLevel:f,maxHeadingLevel:k}}),[u,s,f,k])),i.createElement(d,(0,a.Z)({toc:v,className:n,linkClassName:u},h))}},6821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=n(7462),i=(n(7294),n(3905)),r=n(3901);const o={title:"Dosing automations",slug:"/dosing-automations"},l=void 0,u={unversionedId:"Automations/dosing-automations",id:"Automations/dosing-automations",title:"Dosing automations",description:"When pairing the Pioreactor with dosing pumps, there are new capabilities and experiments you can run. The Pioreactor is pre-programmed with the following dosing automations. In the below automations, values highlighted like so are configurable.",source:"@site/user-guide/29-Automations/02-dosing-automations.md",sourceDirName:"29-Automations",slug:"/dosing-automations",permalink:"/user-guide/dosing-automations",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Dosing automations",slug:"/dosing-automations"},sidebar:"tutorialSidebar",previous:{title:"Temperature automations",permalink:"/user-guide/temperature-automations"},next:{title:"LED automations",permalink:"/user-guide/led-automations"}},s={},m=[{value:"Silent",id:"silent",level:3},{value:"Chemostat",id:"chemostat",level:3},{value:"Turbidostat",id:"turbidostat",level:3},{value:"PID Morbidostat",id:"pid-morbidostat",level:3},{value:"Continuous Cycle",id:"continuous-cycle",level:3},{value:"Fed batch",id:"fed-batch",level:3}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When pairing the Pioreactor with dosing pumps, there are new capabilities and experiments you can run. The Pioreactor is pre-programmed with the following dosing automations. In the below automations, values highlighted ",(0,i.kt)("inlineCode",{parentName:"p"},"like so")," are configurable."),(0,i.kt)(r.Z,{toc:m,mdxType:"TOCInline"}),(0,i.kt)("h3",{id:"silent"},"Silent"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires:")," None"),(0,i.kt)("p",null,'The silent automation is the simplest automation: doing nothing. The automation will still "wake up" every ',(0,i.kt)("inlineCode",{parentName:"p"},"duration")," minutes, but does nothing."),(0,i.kt)("h3",{id:"chemostat"},"Chemostat"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2 peristaltic pumps:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"one media pump"),(0,i.kt)("li",{parentName:"ul"},"one waste pump"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2 liquid containers with luer attachments"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'one labelled "waste"'),(0,i.kt)("li",{parentName:"ul"},'one labelled "media"')))),(0,i.kt)("p",null,"The chemostat automation is the second simplest dosing automation. Every ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," minutes, the media and waste pumps run and exchange ",(0,i.kt)("inlineCode",{parentName:"p"},"volume")," (mL) of liquid inside the Pioreactor. Initially, the culture is growing and consuming nutrients and energy. Eventually, a nutrient will become scarce and will stall growing. Upon a pump refresh, this ",(0,i.kt)("em",{parentName:"p"},"growth-limiting")," nutrient becomes abundant once again, and the culture can grow, up until consuming all of it again and stalling growth. Thus, the bioreactor enters into a nutrient ",(0,i.kt)("em",{parentName:"p"},"near"),"-",'equilibrium (hence the term "chemostat", for "chemical-static"). However, more long-term, because the culture is under an evolutionary pressure to grow, adaptions will occur that will improve the acquisition or utilization of the growth-limiting nutrient.'),(0,i.kt)("h3",{id:"turbidostat"},"Turbidostat"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2 peristaltic pumps:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"one media pump"),(0,i.kt)("li",{parentName:"ul"},"one waste pump"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2 liquid containers with luer attachments"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'one labelled "waste"'),(0,i.kt)("li",{parentName:"ul"},'one labelled "media"')))),(0,i.kt)("p",null,'A turbidostat ("turbidity-static") tries to keep the turbidity (also called optical density, or OD), constant over time. This is usually accomplished by taking frequent measurements of the turbidity (every 1 minute), and performing a set media/waste pump cycle when the ',(0,i.kt)("em",{parentName:"p"},"normalized")," optical density exceeds some ",(0,i.kt)("inlineCode",{parentName:"p"},"target OD"),". The amount exchanged is the ",(0,i.kt)("inlineCode",{parentName:"p"},"volume")," parameter. For very fast growing cultures, we recommend a ",(0,i.kt)("inlineCode",{parentName:"p"},"volume")," around 2.0 ml."),(0,i.kt)("h3",{id:"pid-morbidostat"},"PID Morbidostat"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"3 peristaltic pumps:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"one media pump"),(0,i.kt)("li",{parentName:"ul"},"one waste pump"),(0,i.kt)("li",{parentName:"ul"},"one alt media pump"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"3 liquid containers with luer attachments"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'one labelled "waste"'),(0,i.kt)("li",{parentName:"ul"},'one labelled "media"'),(0,i.kt)("li",{parentName:"ul"},'one labelled "alt media"')))),(0,i.kt)("p",null,'By introducing another pump (labelled "alt media"), another dimension of experiments opens up. We can exploit the short-time scale of adaption in microbes to evolve the culture from thriving in the original media to thriving in the alternative media, or some point in between the two. Think of it as slowly shifting the environment between the two media stocks so that the microbes are under constant evolutionary pressure. This is where the name morbidostat is from: "morbid-static".'),(0,i.kt)("p",null,"In the Pioreactor software, the transition between environments is controlled by observing the growth rate, and artificially keeping it suppressed (set to be ",(0,i.kt)("inlineCode",{parentName:"p"},"target growth rate"),") by dynamically adjusting the ratio between the original media and the alternative media when a pump cycle is run. A pump cycle is run every ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," minutes. Another parameter is the ",(0,i.kt)("inlineCode",{parentName:"p"},"target OD"),", which should be low to keep the culture in a state of nutrient abundance (so that the ",(0,i.kt)("em",{parentName:"p"},"primary")," evolutionary pressure is the alternative media adaptation)."),(0,i.kt)("h3",{id:"continuous-cycle"},"Continuous Cycle"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 pump (not peristaltic: it will break, something like centrifugal pump is preferred)"),(0,i.kt)("li",{parentName:"ul"},"Another vessel, like a bioreactor or fermenter")),(0,i.kt)("p",null,"This keeps the pump on until stopped. You decide on the source and sink."),(0,i.kt)("h3",{id:"fed-batch"},"Fed batch"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 peristaltic pump"),(0,i.kt)("li",{parentName:"ul"},"A source and sink, with the pump in-between.")),(0,i.kt)("p",null,"This automation moves a preset amount of ",(0,i.kt)("inlineCode",{parentName:"p"},"volume")," every ",(0,i.kt)("inlineCode",{parentName:"p"},"duration")," minutes using a pump. You choose the start and end points of the tube!"))}c.isMDXComponent=!0}}]);