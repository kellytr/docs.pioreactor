"use strict";(self.webpackChunkpioreactor=self.webpackChunkpioreactor||[]).push([[7920],{88824:(e,t,n)=>{n.d(t,{c:()=>u});var a=n(67294),r=n(52263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),c}}),[e])}function u(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);const r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}},51473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var a=n(67294),r=n(52263),l=n(26357),s=n(35742),c=n(39960),o=n(95999),u=n(60373),m=n(902),i=n(88824),h=n(80143),p=n(76775),d=n(10412);const g=function(){const e=(0,p.k6)(),t=(0,p.TH)(),{siteConfig:{baseUrl:n}}=(0,r.Z)();return{searchValue:d.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>n+"search?q="+encodeURIComponent(e)}};var f=n(90022),E=n(98202),y=n(82539),S=n(10726),w=n(91073),I=n(80311),b=n(73926),v=n(61029);const F="searchQueryInput_CFBF",P="searchResultItem_U687",R="searchResultItemPath_uIbk",k="searchResultItemSummary_oZHr";function C(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),t=(0,h.gA)();let n=e;try{var l;const{preferredVersion:e}=(0,u.J)(null!=(l=null==t?void 0:t.pluginId)?l:v.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(q){if(v.l9&&!(q instanceof m.i6))throw q}const{selectMessage:c}=(0,i.c)(),{searchValue:p,updateSearchPath:d}=g(),[y,S]=(0,a.useState)(p),[w,b]=(0,a.useState)(),[P,R]=(0,a.useState)(),k=(0,a.useMemo)((()=>y?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[y]);(0,a.useEffect)((()=>{d(y),w&&(y?w(y,(e=>{R(e)})):R(void 0))}),[y,w]);const C=(0,a.useCallback)((e=>{S(e.target.value)}),[]);return(0,a.useEffect)((()=>{p&&p!==y&&S(p)}),[p]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,f.w)(n);b((()=>(0,E.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,k)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,k),a.createElement("input",{type:"search",name:"q",className:F,"aria-label":"Search",onChange:C,value:y,autoComplete:"off",autoFocus:!0}),!w&&y&&a.createElement("div",null,a.createElement(I.Z,null)),P&&(P.length>0?a.createElement("p",null,c(P.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:P.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,P&&P.map((e=>a.createElement(_,{key:e.document.i,searchResult:e}))))))}function _(e){let{searchResult:{document:t,type:n,page:r,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:r.b).slice(),i=u?t.s:t.t;return o||m.push(r.t),a.createElement("article",{className:P},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,y.C)(i,l):(0,S.o)(i,(0,w.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:R},(0,b.e)(m)),u&&a.createElement("p",{className:k,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,w.m)(s,"t"),l,100)}}))}const q=function(){return a.createElement(l.Z,null,a.createElement(C,null))}}}]);