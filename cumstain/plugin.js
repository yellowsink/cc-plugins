(function(k,te,ve,y,B,u,D,se){"use strict";function ne(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var _=ne(k),Ie=ne(ve);function U(t){if(!t?.id||!t.CSS)throw new Error("theme was missing either id or css.");const e=te.injectCSS(t.CSS);_.default.state.ghost.unpatchCache.set(t.id,e),_.default.persist.store.themes=_.default.persist.ghost.themes.filter(s=>s.id!==t.id),_.default.persist.store.themes.push({...t,enabled:!0})}function re(t){if(!t?.id)throw new Error("theme was missing id.");const e=_.default.state.ghost.unpatchCache.get(t.id);if(!e)throw new Error("theme was not loaded.");e(),_.default.state.ghost.unpatchCache.delete(t.id),_.default.persist.store.themes=_.default.persist.ghost.themes.filter(s=>s.id!==t.id),_.default.persist.store.themes.push({...t,enabled:!1})}function Ne(t){try{re(t)}catch(e){if(e.message!=="theme was not loaded.")throw e}_.default.persist.store.themes=_.default.persist.ghost.themes.filter(e=>e.id!==t.id)}function Ae(){_.default.state.ghost.unpatchCache.forEach(t=>t?.()),_.default.state.ghost.unpatchCache.clear()}var Le=()=>(k.persist.ghost.themes&&k.persist.ghost.themes.filter(t=>t.enabled).forEach(U),Ae),Te=()=>(_.default.persist.ghost.repos||(_.default.persist.store.repos=[]),_.default.persist.ghost.themes||(_.default.persist.store.themes=[]),_.default.state=Ie.default.make({unpatchCache:new Map}),()=>{_.default.state=void 0,delete _.default.state});const Ce=u.React.useState,Oe=u.React.createElement,$e=y.findByDisplayName("FormText"),Fe=y.findByDisplayName("FormDivider");var Be=({items:t})=>{let[e,s]=Ce(0);return u.React.createElement("div",{className:"ysink_stain_tabbar_root"},u.React.createElement("div",{className:"ysink_stain_tabbar"},t.map((n,r)=>u.React.createElement("button",{className:"ysink_stain_button"+(r===e?" ysink_stain_selected":""),onClick:()=>s(r)},u.React.createElement($e,null,n.text)))),u.React.createElement(Fe,{className:"ysink_stain_divide"}),u.React.createElement("div",{className:"ysink_stain_tabbar_content"},Oe(t[e].component)))},De=({theme:t,onClick:e})=>u.React.createElement("svg",{onClick:e,className:"ysink_stain_delete",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},u.React.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),u.React.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),u.React.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}));const je=y.findByDisplayName("FormTitle"),H=y.findByDisplayName("FormText"),ze=y.findByDisplayName("FormSection"),Pe=y.findByDisplayName("FormDivider"),Ue=y.findByDisplayName("Switch"),ie=t=>{for(const e of k.persist.ghost.themes)if(e.id===t&&e.enabled)return!0;return!1},He=t=>k.persist.ghost.themes.some(e=>e.id===t);var ae=({theme:t,deleteHook:e})=>(D.useNest(k.persist),u.React.createElement("div",{className:"ysink_stain_card"},u.React.createElement(ze,null,u.React.createElement("div",{className:"ysink_stain_img",style:{backgroundImage:`url(${t.media})`}},t.media?[]:u.React.createElement(H,null,"No Image")),u.React.createElement("div",{className:"ysink_stain_row"},u.React.createElement(je,{tag:"p",className:"ysink_stain_title"},t.name),He(t.id)?u.React.createElement(De,{theme:t,onClick:()=>{Ne(t),e?.()}}):[],u.React.createElement(Ue,{checked:ie(t.id),onChange:()=>ie(t.id)?re(t):U(t)})),u.React.createElement(H,{className:"ysink_stain_desc"},t.description),u.React.createElement(Pe,{className:"ysink_stain_divide"}),u.React.createElement(H,{className:"ysink_stain_author_licence"},t.author?`by ${t.author} `:"",t.license?`under ${t.license}`:""))));const Ke=/[^\S\r\n]*?\r?\n[^\S\r\n]*?\*[^\S\r\n]?/,Ve=/^\\@/;function Ge(t){try{return JSON.parse(t)}catch{}}function Ye(t){const e=t.split(`
`)[0];if(e.includes("//META"))return We(t);if(e.includes("/**"))return Je(t);throw new Error("META was not found.")}function We(t){const e=t.split(`
`)[0],s=e.substring(e.lastIndexOf("//META")+6,e.lastIndexOf("*//")),n=Ge(s);if(!n)throw new Error("META could not be parsed.");if(!n.name)throw new Error("META missing name data.");return n}function Je(t){const e=t.split("/**",2)[1].split("*/",1)[0],s={};let n="",r="";for(const i of e.split(Ke))if(i.length!==0)if(i.charAt(0)==="@"&&i.charAt(1)!==" "){s[n]=r;const a=i.indexOf(" ");n=i.substr(1,a-1),r=i.substr(a+1)}else r+=" "+i.replace("\\n",`
`).replace(Ve,"@");return s[n]=r.trim(),delete s[""],s}var ce=async(t,e)=>{const s=await(await fetch(new URL(t,e).href)).text();return{id:t,CSS:s,...Ye(s)}};const{useState:Qe}=u.React,Xe=y.findByProps("Sizes","Colors","Looks","DropdownSizes"),Ze=y.findByDisplayName("TextInput");var qe=()=>{D.useNest(k.persist);let[t,e]=Qe("");return u.React.createElement(B.ErrorBoundary,null,u.React.createElement("div",{className:"ysink_stain_installbar"},u.React.createElement(Ze,{className:"ysink_stain_input",placeholder:"Theme import URL",type:"text",value:t,onChange:s=>e(s)}),u.React.createElement(Xe,{className:"ysink_stain_button",onClick:()=>{ce(t).then(s=>{U(s),se.showToast({title:`Loaded theme ${s.name}`,duration:5e3})},()=>se.showToast({title:"Failed to fetch theme - check URL",duration:5e3})),e("")}},"Install")))};function R(t){return Array.isArray?Array.isArray(t):he(t)==="[object Array]"}const et=1/0;function tt(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-et?"-0":e}function st(t){return t==null?"":tt(t)}function b(t){return typeof t=="string"}function oe(t){return typeof t=="number"}function nt(t){return t===!0||t===!1||rt(t)&&he(t)=="[object Boolean]"}function le(t){return typeof t=="object"}function rt(t){return le(t)&&t!==null}function E(t){return t!=null}function K(t){return!t.trim().length}function he(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ts="Extended search is not available",it="Incorrect 'index' type",at=t=>`Invalid value for key ${t}`,ct=t=>`Pattern length exceeds max of ${t}.`,ot=t=>`Missing ${t} property in key`,lt=t=>`Property 'weight' in key '${t}' must be a positive integer`,ue=Object.prototype.hasOwnProperty;class ht{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let r=de(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function de(t){let e=null,s=null,n=null,r=1;if(b(t)||R(t))n=t,e=fe(t),s=V(t);else{if(!ue.call(t,"name"))throw new Error(ot("name"));const i=t.name;if(n=i,ue.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(lt(i));e=fe(i),s=V(i)}return{path:e,id:s,weight:r,src:n}}function fe(t){return R(t)?t:t.split(".")}function V(t){return R(t)?t.join("."):t}function ut(t,e){let s=[],n=!1;const r=(i,a,c)=>{if(!!E(i))if(!a[c])s.push(i);else{let o=a[c];const h=i[o];if(!E(h))return;if(c===a.length-1&&(b(h)||oe(h)||nt(h)))s.push(st(h));else if(R(h)){n=!0;for(let l=0,f=h.length;l<f;l+=1)r(h[l],a,c+1)}else a.length&&r(h,a,c+1)}};return r(t,b(e)?e.split("."):e,0),n?s:s[0]}var d={...{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},...{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},...{location:0,threshold:.6,distance:100},...{useExtendedSearch:!1,getFn:ut,ignoreLocation:!1,ignoreFieldNorm:!1}};const dt=/[^ ]+/g;function ft(t=3){const e=new Map,s=Math.pow(10,t);return{get(n){const r=n.match(dt).length;if(e.has(r))return e.get(r);const i=1/Math.sqrt(r),a=parseFloat(Math.round(i*s)/s);return e.set(r,a),a},clear(){e.clear()}}}class G{constructor({getFn:e=d.getFn}={}){this.norm=ft(3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,b(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();b(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!E(e)||K(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let a=this.getFn(e,r.path);if(!!E(a)){if(R(a)){let c=[];const o=[{nestedArrIndex:-1,value:a}];for(;o.length;){const{nestedArrIndex:h,value:l}=o.pop();if(!!E(l))if(b(l)&&!K(l)){let f={v:l,i:h,n:this.norm.get(l)};c.push(f)}else R(l)&&l.forEach((f,p)=>{o.push({nestedArrIndex:p,value:f})})}n.$[i]=c}else if(!K(a)){let c={v:a,n:this.norm.get(a)};n.$[i]=c}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function pe(t,e,{getFn:s=d.getFn}={}){const n=new G({getFn:s});return n.setKeys(t.map(de)),n.setSources(e),n.create(),n}function pt(t,{getFn:e=d.getFn}={}){const{keys:s,records:n}=t,r=new G({getFn:e});return r.setKeys(s),r.setIndexRecords(n),r}function j(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:r=d.distance,ignoreLocation:i=d.ignoreLocation}={}){const a=e/t.length;if(i)return a;const c=Math.abs(n-s);return r?a+c/r:c?1:a}function gt(t=[],e=d.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let a=t.length;i<a;i+=1){let c=t[i];c&&n===-1?n=i:!c&&n!==-1&&(r=i-1,r-n+1>=e&&s.push([n,r]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const A=32;function mt(t,e,s,{location:n=d.location,distance:r=d.distance,threshold:i=d.threshold,findAllMatches:a=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,includeMatches:o=d.includeMatches,ignoreLocation:h=d.ignoreLocation}={}){if(e.length>A)throw new Error(ct(A));const l=e.length,f=t.length,p=Math.max(0,Math.min(n,f));let m=i,g=p;const M=c>1||o,L=M?Array(f):[];let w;for(;(w=t.indexOf(e,g))>-1;){let x=j(e,{currentLocation:w,expectedLocation:p,distance:r,ignoreLocation:h});if(m=Math.min(x,m),g=w+l,M){let I=0;for(;I<l;)L[w+I]=1,I+=1}}g=-1;let O=[],T=1,z=l+f;const es=1<<l-1;for(let x=0;x<l;x+=1){let I=0,N=z;for(;I<N;)j(e,{errors:x,currentLocation:p+N,expectedLocation:p,distance:r,ignoreLocation:h})<=m?I=N:z=N,N=Math.floor((z-I)/2+I);z=N;let be=Math.max(1,p-N+1),ee=a?f:Math.min(p+N,f)+l,$=Array(ee+2);$[ee+1]=(1<<x)-1;for(let S=ee;S>=be;S-=1){let P=S-1,we=s[t.charAt(P)];if(M&&(L[P]=+!!we),$[S]=($[S+1]<<1|1)&we,x&&($[S]|=(O[S+1]|O[S])<<1|1|O[S+1]),$[S]&es&&(T=j(e,{errors:x,currentLocation:P,expectedLocation:p,distance:r,ignoreLocation:h}),T<=m)){if(m=T,g=P,g<=p)break;be=Math.max(1,2*p-g)}}if(j(e,{errors:x+1,currentLocation:p,expectedLocation:p,distance:r,ignoreLocation:h})>m)break;O=$}const q={isMatch:g>=0,score:Math.max(.001,T)};if(M){const x=gt(L,c);x.length?o&&(q.indices=x):q.isMatch=!1}return q}function _t(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<n-s-1}return e}class ge{constructor(e,{location:s=d.location,threshold:n=d.threshold,distance:r=d.distance,includeMatches:i=d.includeMatches,findAllMatches:a=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,isCaseSensitive:o=d.isCaseSensitive,ignoreLocation:h=d.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(p,m)=>{this.chunks.push({pattern:p,alphabet:_t(p),startIndex:m})},f=this.pattern.length;if(f>A){let p=0;const m=f%A,g=f-m;for(;p<g;)l(this.pattern.substr(p,A),p),p+=A;if(m){const M=f-A;l(this.pattern.substr(M),M)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let g={isMatch:!0,score:0};return n&&(g.indices=[[0,e.length-1]]),g}const{location:r,distance:i,threshold:a,findAllMatches:c,minMatchCharLength:o,ignoreLocation:h}=this.options;let l=[],f=0,p=!1;this.chunks.forEach(({pattern:g,alphabet:M,startIndex:L})=>{const{isMatch:w,score:O,indices:T}=mt(e,g,M,{location:r+L,distance:i,threshold:a,findAllMatches:c,minMatchCharLength:o,includeMatches:n,ignoreLocation:h});w&&(p=!0),f+=O,w&&T&&(l=[...l,...T])});let m={isMatch:p,score:p?f/this.chunks.length:1};return p&&n&&(m.indices=l),m}}class v{constructor(e){this.pattern=e}static isMultiMatch(e){return me(e,this.multiRegex)}static isSingleMatch(e){return me(e,this.singleRegex)}search(){}}function me(t,e){const s=t.match(e);return s?s[1]:null}class yt extends v{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Et extends v{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Mt extends v{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class xt extends v{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class kt extends v{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class St extends v{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class _e extends v{constructor(e,{location:s=d.location,threshold:n=d.threshold,distance:r=d.distance,includeMatches:i=d.includeMatches,findAllMatches:a=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,isCaseSensitive:o=d.isCaseSensitive,ignoreLocation:h=d.ignoreLocation}={}){super(e);this._bitapSearch=new ge(e,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:a,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class ye extends v{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const a=!!r.length;return{isMatch:a,score:a?0:1,indices:r}}}const Y=[yt,ye,Mt,xt,St,kt,Et,_e],Ee=Y.length,Rt=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,bt="|";function wt(t,e={}){return t.split(bt).map(s=>{let n=s.trim().split(Rt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,a=n.length;i<a;i+=1){const c=n[i];let o=!1,h=-1;for(;!o&&++h<Ee;){const l=Y[h];let f=l.isMultiMatch(c);f&&(r.push(new l(f,e)),o=!0)}if(!o)for(h=-1;++h<Ee;){const l=Y[h];let f=l.isSingleMatch(c);if(f){r.push(new l(f,e));break}}}return r})}const vt=new Set([_e.type,ye.type]);class It{constructor(e,{isCaseSensitive:s=d.isCaseSensitive,includeMatches:n=d.includeMatches,minMatchCharLength:r=d.minMatchCharLength,ignoreLocation:i=d.ignoreLocation,findAllMatches:a=d.findAllMatches,location:c=d.location,threshold:o=d.threshold,distance:h=d.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:a,ignoreLocation:i,location:c,threshold:o,distance:h},this.pattern=s?e:e.toLowerCase(),this.query=wt(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,a=[],c=0;for(let o=0,h=s.length;o<h;o+=1){const l=s[o];a.length=0,i=0;for(let f=0,p=l.length;f<p;f+=1){const m=l[f],{isMatch:g,indices:M,score:L}=m.search(e);if(g){if(i+=1,c+=L,n){const w=m.constructor.type;vt.has(w)?a=[...a,...M]:a.push(M)}}else{c=0,i=0,a.length=0;break}}if(i){let f={isMatch:!0,score:c/i};return n&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const W=[];function Nt(...t){W.push(...t)}function J(t,e){for(let s=0,n=W.length;s<n;s+=1){let r=W[s];if(r.condition(t,e))return new r(t,e)}return new ge(t,e)}const F={AND:"$and",OR:"$or"},Q={PATH:"$path",PATTERN:"$val"},X=t=>!!(t[F.AND]||t[F.OR]),At=t=>!!t[Q.PATH],Lt=t=>!R(t)&&le(t)&&!X(t),Me=t=>({[F.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function xe(t,e,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const a=At(r);if(!a&&i.length>1&&!X(r))return n(Me(r));if(Lt(r)){const o=a?r[Q.PATH]:i[0],h=a?r[Q.PATTERN]:r[o];if(!b(h))throw new Error(at(o));const l={keyId:V(o),pattern:h};return s&&(l.searcher=J(h,e)),l}let c={children:[],operator:i[0]};return i.forEach(o=>{const h=r[o];R(h)&&h.forEach(l=>{c.children.push(n(l))})}),c};return X(t)||(t=Me(t)),n(t)}function Tt(t,{ignoreFieldNorm:e=d.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:a})=>{const c=r?r.weight:null;n*=Math.pow(a===0&&c?Number.EPSILON:a,(c||1)*(e?1:i))}),s.score=n})}function Ct(t,e){const s=t.matches;e.matches=[],!!E(s)&&s.forEach(n=>{if(!E(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let a={indices:r,value:i};n.key&&(a.key=n.key.src),n.idx>-1&&(a.refIndex=n.idx),e.matches.push(a)})}function Ot(t,e){e.score=t.score}function $t(t,e,{includeMatches:s=d.includeMatches,includeScore:n=d.includeScore}={}){const r=[];return s&&r.push(Ct),n&&r.push(Ot),t.map(i=>{const{idx:a}=i,c={item:e[a],refIndex:a};return r.length&&r.forEach(o=>{o(i,c)}),c})}class C{constructor(e,s={},n){this.options={...d,...s},this.options.useExtendedSearch,this._keyStore=new ht(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof G))throw new Error(it);this._myIndex=s||pe(this.options.keys,this._docs,{getFn:this.options.getFn})}add(e){!E(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:a,ignoreFieldNorm:c}=this.options;let o=b(e)?b(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Tt(o,{ignoreFieldNorm:c}),i&&o.sort(a),oe(s)&&s>-1&&(o=o.slice(0,s)),$t(o,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const s=J(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:a,n:c})=>{if(!E(i))return;const{isMatch:o,score:h,indices:l}=s.searchIn(i);o&&r.push({item:i,idx:a,matches:[{score:h,value:i,norm:c,indices:l}]})}),r}_searchLogical(e){const s=xe(e,this.options),n=(c,o,h)=>{if(!c.children){const{keyId:l,searcher:f}=c,p=this._findMatches({key:this._keyStore.get(l),value:this._myIndex.getValueForItemAtKeyId(o,l),searcher:f});return p&&p.length?[{idx:h,item:o,matches:p}]:[]}switch(c.operator){case F.AND:{const l=[];for(let f=0,p=c.children.length;f<p;f+=1){const m=c.children[f],g=n(m,o,h);if(g.length)l.push(...g);else return[]}return l}case F.OR:{const l=[];for(let f=0,p=c.children.length;f<p;f+=1){const m=c.children[f],g=n(m,o,h);if(g.length){l.push(...g);break}}return l}}},r=this._myIndex.records,i={},a=[];return r.forEach(({$:c,i:o})=>{if(E(c)){let h=n(s,c,o);h.length&&(i[o]||(i[o]={idx:o,item:c,matches:[]},a.push(i[o])),h.forEach(({matches:l})=>{i[o].matches.push(...l)}))}}),a}_searchObjectList(e){const s=J(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:a,i:c})=>{if(!E(a))return;let o=[];n.forEach((h,l)=>{o.push(...this._findMatches({key:h,value:a[l],searcher:s}))}),o.length&&i.push({idx:c,item:a,matches:o})}),i}_findMatches({key:e,value:s,searcher:n}){if(!E(s))return[];let r=[];if(R(s))s.forEach(({v:i,i:a,n:c})=>{if(!E(i))return;const{isMatch:o,score:h,indices:l}=n.searchIn(i);o&&r.push({score:h,key:e,value:i,idx:a,norm:c,indices:l})});else{const{v:i,n:a}=s,{isMatch:c,score:o,indices:h}=n.searchIn(i);c&&r.push({score:o,key:e,value:i,norm:a,indices:h})}return r}}C.version="6.4.6",C.createIndex=pe,C.parseIndex=pt,C.config=d,C.parseQuery=xe,Nt(It);const Ft={threshold:.5,useExtendedSearch:!0,keys:["name","author","description"]};var ke=(t,e)=>!e||e==""?t:new C(t,Ft).search(e).map(s=>s.item);const Se=y.findByDisplayName("SearchBar");var Re=({query:t,onChange:e})=>u.React.createElement(Se,{className:"ysink_stain_searchbar",query:t,onQueryChange:e,placeholder:"Search themes...",size:Se.Sizes.MEDIUM});const{useState:Bt,useReducer:Dt}=u.React;var jt=()=>{D.useNest(k.persist);const[t,e]=Bt(""),[,s]=Dt(n=>~n,0);return u.React.createElement(B.ErrorBoundary,null,u.React.createElement(qe,null),u.React.createElement(Re,{query:t,onChange:e}),u.React.createElement("div",{className:"ysink_stain_cardcontainer"},ke(k.persist.ghost.themes,t).map(n=>u.React.createElement(ae,{theme:n,deleteHook:s}))))};async function zt(t){const e=new URL("repo.json",t).href,s=await(await fetch(e)).json();if(!s.themes||s.themes?.length===0)throw new Error("No themes found in repo");if(!s.meta)throw new Error("No repo metadata");if(!s?.meta.name)throw new Error("Repo did not have a name");return s}var Pt=async t=>{const e=await zt(t),s=await Promise.all(e.themes.map(n=>ce(n,t)));return{manifest:e,themes:s}};const{useState:Z,useEffect:Ut,useReducer:Ht}=u.React,Kt=()=>Promise.all(k.persist.ghost.repos.map(Pt)),Vt=t=>t.flatMap(e=>e.themes);async function Gt(){let t=await Kt();return{repos:t,themes:Vt(t)}}var Yt=()=>{D.useNest(k.persist,!1,(c,o)=>o?.[0]==="repos");const[t,e]=Z("");let[s,n]=Z(void 0),[r,i]=Z(void 0);Ut(()=>{(!s||!r)&&Gt().then(({repos:c,themes:o})=>{n(c),i(o)})});const[,a]=Ht(c=>~c,0);return u.React.createElement(B.ErrorBoundary,null,u.React.createElement(Re,{query:t,onChange:e}),u.React.createElement("div",{className:"ysink_stain_cardcontainer"},ke(r??[],t).map(c=>u.React.createElement(ae,{theme:c,deleteHook:a}))))};const Wt=y.findByDisplayName("FormTitle"),Jt=y.findByDisplayName("FormSection");var Qt=()=>u.React.createElement(B.ErrorBoundary,null,u.React.createElement(Jt,null,u.React.createElement(Wt,{tag:"h1"},"Cumstain"),u.React.createElement(Be,{items:[{text:"Installed",component:jt},{text:"Store",component:Yt}]}))),Xt=()=>te.after("getPredicateSections",y.findByDisplayName("SettingsView").prototype,(t,e)=>{if(e[1]?.section!="My Account")return;let s=e.findIndex(n=>n.section=="CUMCORD_PLUGINS")+1;return e.splice(s,0,{section:"ysink_stain_CUMSTAIN",label:"Themes",element:Qt}),e}),Zt=()=>cumcord.patcher.injectCSS(".ysink_stain_tabbar{padding:.5rem 1rem;display:grid;grid-auto-flow:column;grid-auto-columns:7rem}.ysink_stain_tabbar .ysink_stain_button *{cursor:pointer}.ysink_stain_tabbar>*{margin-right:1rem;padding:.2rem;border-radius:.3rem;min-width:5rem;text-align:center;background:none}.theme-dark .ysink_stain_tabbar>*.ysink_stain_selected{background:#fff4}.theme-light .ysink_stain_tabbar>*.ysink_stain_selected{background:#0003}.ysink_stain_tabbar>*:last-child{margin-right:0}.ysink_stain_cardcontainer{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.ysink_stain_card{padding:1rem;border:1px solid var(--background-modifier-accent);border-radius:.5rem;display:flex;flex-direction:column;z-index:1;background-color:var(--deprecated-card-bg)}.ysink_stain_card .ysink_stain_title{font-size:1rem;padding-bottom:.25rem;display:inline;flex:1;margin:0}.ysink_stain_card .ysink_stain_button{display:inline;padding:0}.ysink_stain_card .ysink_stain_button>div{padding:2px 16px}.ysink_stain_card .ysink_stain_row{display:flex}.ysink_stain_card .ysink_stain_row>:first-child{flex:1}.ysink_stain_card .ysink_stain_row>*{flex:unset}.ysink_stain_card .ysink_stain_author_licence{font-style:italic}.ysink_stain_card .ysink_stain_desc{flex:1}.ysink_stain_card .ysink_stain_img{height:13rem;background-repeat:no-repeat;background-size:cover;background-position:center;margin:-1rem -1rem 1rem;border-radius:.5rem .5rem 0 0}.ysink_stain_card .ysink_stain_img div{font-size:1.5rem;text-align:center;padding-top:calc(6.5rem - .5em);text-transform:uppercase;opacity:.8}.ysink_stain_divide{margin:0 0 1rem}.ysink_stain_card .ysink_stain_divide{margin:.2rem 0}.ysink_stain_delete{margin-left:.5rem;fill:var(--interactive-normal)}.ysink_stain_installbar{display:flex}.ysink_stain_installbar>*{flex:1}.ysink_stain_installbar>:last-child{flex:unset;margin-left:1rem}.ysink_stain_searchbar{margin:.75rem 0}"),qt=({persist:t})=>{let e=[];return{onLoad:async()=>{t.store.repos=["http://127.0.0.1:8080/"],e.push(Zt(),Te(),Le(),Xt())},onUnload:()=>e.reduceRight((s,n)=>n?.(),null)}};return qt})(cumcord.pluginData,cumcord.patcher,cumcord.modules.internal.nests,cumcord.modules.webpack,cumcord.ui.components,cumcord.modules.common,cumcord.utils,cumcord.ui.toasts);
