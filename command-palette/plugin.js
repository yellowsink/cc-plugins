(function(M,te,m,Pe,Ce,$e,Le,se){"use strict";function Ne(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var A=Ne(Pe),Oe=()=>cumcord.patcher.injectCSS(".ysink_palette_modal{position:absolute;top:5rem;left:0;width:100vw;display:flex;align-items:center;background:none!important;box-shadow:none!important}.ysink_palette_modal.ysink_palette_textentrymodal{min-height:0;height:4rem}.ysink_palette_palette{width:50rem;background-color:var(--background-secondary);color:#fff;padding:.75rem 0 0;border-radius:0;overflow:unset!important}.ysink_palette_item{padding:.3rem 1rem .3rem .5rem}.ysink_palette_icon{width:1.5rem;display:inline-block;text-align:center}.ysink_palette_iconseparator{border:solid 1px #ffffff55;margin:0 .5rem;border-radius:1px}.ysink_palette_item.ysink_palette_selected{background-color:#0005}.ysink_palette_input_wrapper{margin:0 .5rem 1rem;border:#ffffff33 solid 1px;display:flex;align-items:center;padding-left:.5rem}.ysink_palette_input{flex:1;margin-left:.5rem}.ysink_palette_input input{border:none!important;background:none!important;padding:0!important}.ysink_palette_source{text-transform:uppercase;font-style:italic;color:#aaa;float:right}.ysink_palette_scrollcontainer{overflow:hidden scroll;max-height:30rem;padding-bottom:.75rem}.ysink_palette_scrollcontainer::-webkit-scrollbar{width:1rem;background-color:#0003}.ysink_palette_scrollcontainer::-webkit-scrollbar-thumb{background-color:#fff3;min-height:40px}"),Te=({entry:t,selected:e,id:s,icon:n})=>m.React.createElement("div",{className:e?"ysink_palette_item ysink_palette_selected":"ysink_palette_item",id:s},m.React.createElement("span",{className:"ysink_palette_icon"},n??""),m.React.createElement("span",{className:"ysink_palette_iconseparator"}),t.label,m.React.createElement("span",{className:"ysink_palette_source"},t.source));function w(t){return Array.isArray?Array.isArray(t):ie(t)==="[object Array]"}const Be=1/0;function je(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Be?"-0":e}function De(t){return t==null?"":je(t)}function I(t){return typeof t=="string"}function ne(t){return typeof t=="number"}function Fe(t){return t===!0||t===!1||Ke(t)&&ie(t)=="[object Boolean]"}function re(t){return typeof t=="object"}function Ke(t){return re(t)&&t!==null}function y(t){return t!=null}function G(t){return!t.trim().length}function ie(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Gt="Extended search is not available",Ue="Incorrect 'index' type",ze=t=>`Invalid value for key ${t}`,Ge=t=>`Pattern length exceeds max of ${t}.`,He=t=>`Missing ${t} property in key`,Ve=t=>`Property 'weight' in key '${t}' must be a positive integer`,oe=Object.prototype.hasOwnProperty;class We{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let r=ce(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ce(t){let e=null,s=null,n=null,r=1;if(I(t)||w(t))n=t,e=ae(t),s=H(t);else{if(!oe.call(t,"name"))throw new Error(He("name"));const i=t.name;if(n=i,oe.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(Ve(i));e=ae(i),s=H(i)}return{path:e,id:s,weight:r,src:n}}function ae(t){return w(t)?t:t.split(".")}function H(t){return w(t)?t.join("."):t}function Ye(t,e){let s=[],n=!1;const r=(i,o,c)=>{if(!!y(i))if(!o[c])s.push(i);else{let a=o[c];const l=i[a];if(!y(l))return;if(c===o.length-1&&(I(l)||ne(l)||Fe(l)))s.push(De(l));else if(w(l)){n=!0;for(let u=0,h=l.length;u<h;u+=1)r(l[u],o,c+1)}else o.length&&r(l,o,c+1)}};return r(t,I(e)?e.split("."):e,0),n?s:s[0]}var f={...{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},...{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},...{location:0,threshold:.6,distance:100},...{useExtendedSearch:!1,getFn:Ye,ignoreLocation:!1,ignoreFieldNorm:!1}};const Je=/[^ ]+/g;function Qe(t=3){const e=new Map,s=Math.pow(10,t);return{get(n){const r=n.match(Je).length;if(e.has(r))return e.get(r);const i=1/Math.sqrt(r),o=parseFloat(Math.round(i*s)/s);return e.set(r,o),o},clear(){e.clear()}}}class V{constructor({getFn:e=f.getFn}={}){this.norm=Qe(3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,I(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();I(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!y(e)||G(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let o=this.getFn(e,r.path);if(!!y(o)){if(w(o)){let c=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:l,value:u}=a.pop();if(!!y(u))if(I(u)&&!G(u)){let h={v:u,i:l,n:this.norm.get(u)};c.push(h)}else w(u)&&u.forEach((h,d)=>{a.push({nestedArrIndex:d,value:h})})}n.$[i]=c}else if(!G(o)){let c={v:o,n:this.norm.get(o)};n.$[i]=c}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function le(t,e,{getFn:s=f.getFn}={}){const n=new V({getFn:s});return n.setKeys(t.map(ce)),n.setSources(e),n.create(),n}function Xe(t,{getFn:e=f.getFn}={}){const{keys:s,records:n}=t,r=new V({getFn:e});return r.setKeys(s),r.setIndexRecords(n),r}function j(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:r=f.distance,ignoreLocation:i=f.ignoreLocation}={}){const o=e/t.length;if(i)return o;const c=Math.abs(n-s);return r?o+c/r:c?1:o}function Ze(t=[],e=f.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let o=t.length;i<o;i+=1){let c=t[i];c&&n===-1?n=i:!c&&n!==-1&&(r=i-1,r-n+1>=e&&s.push([n,r]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const v=32;function qe(t,e,s,{location:n=f.location,distance:r=f.distance,threshold:i=f.threshold,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,includeMatches:a=f.includeMatches,ignoreLocation:l=f.ignoreLocation}={}){if(e.length>v)throw new Error(Ge(v));const u=e.length,h=t.length,d=Math.max(0,Math.min(n,h));let p=i,g=d;const _=c>1||a,C=_?Array(h):[];let k;for(;(k=t.indexOf(e,g))>-1;){let E=j(e,{currentLocation:k,expectedLocation:d,distance:r,ignoreLocation:l});if(p=Math.min(E,p),g=k+u,_){let R=0;for(;R<u;)C[k+R]=1,R+=1}}g=-1;let O=[],$=1,U=u+h;const zt=1<<u-1;for(let E=0;E<u;E+=1){let R=0,S=U;for(;R<S;)j(e,{errors:E,currentLocation:d+S,expectedLocation:d,distance:r,ignoreLocation:l})<=p?R=S:U=S,S=Math.floor((U-R)/2+R);U=S;let Ae=Math.max(1,d-S+1),ee=o?h:Math.min(d+S,h)+u,T=Array(ee+2);T[ee+1]=(1<<E)-1;for(let x=ee;x>=Ae;x-=1){let z=x-1,ve=s[t.charAt(z)];if(_&&(C[z]=+!!ve),T[x]=(T[x+1]<<1|1)&ve,E&&(T[x]|=(O[x+1]|O[x])<<1|1|O[x+1]),T[x]&zt&&($=j(e,{errors:E,currentLocation:z,expectedLocation:d,distance:r,ignoreLocation:l}),$<=p)){if(p=$,g=z,g<=d)break;Ae=Math.max(1,2*d-g)}}if(j(e,{errors:E+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:l})>p)break;O=T}const q={isMatch:g>=0,score:Math.max(.001,$)};if(_){const E=Ze(C,c);E.length?a&&(q.indices=E):q.isMatch=!1}return q}function et(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<n-s-1}return e}class ue{constructor(e,{location:s=f.location,threshold:n=f.threshold,distance:r=f.distance,includeMatches:i=f.includeMatches,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,isCaseSensitive:a=f.isCaseSensitive,ignoreLocation:l=f.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(d,p)=>{this.chunks.push({pattern:d,alphabet:et(d),startIndex:p})},h=this.pattern.length;if(h>v){let d=0;const p=h%v,g=h-p;for(;d<g;)u(this.pattern.substr(d,v),d),d+=v;if(p){const _=h-v;u(this.pattern.substr(_),_)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let g={isMatch:!0,score:0};return n&&(g.indices=[[0,e.length-1]]),g}const{location:r,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,ignoreLocation:l}=this.options;let u=[],h=0,d=!1;this.chunks.forEach(({pattern:g,alphabet:_,startIndex:C})=>{const{isMatch:k,score:O,indices:$}=qe(e,g,_,{location:r+C,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,includeMatches:n,ignoreLocation:l});k&&(d=!0),h+=O,k&&$&&(u=[...u,...$])});let p={isMatch:d,score:d?h/this.chunks.length:1};return d&&n&&(p.indices=u),p}}class b{constructor(e){this.pattern=e}static isMultiMatch(e){return he(e,this.multiRegex)}static isSingleMatch(e){return he(e,this.singleRegex)}search(){}}function he(t,e){const s=t.match(e);return s?s[1]:null}class tt extends b{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class st extends b{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class nt extends b{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class rt extends b{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class it extends b{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ot extends b{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class de extends b{constructor(e,{location:s=f.location,threshold:n=f.threshold,distance:r=f.distance,includeMatches:i=f.includeMatches,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,isCaseSensitive:a=f.isCaseSensitive,ignoreLocation:l=f.ignoreLocation}={}){super(e);this._bitapSearch=new ue(e,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class fe extends b{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const W=[tt,fe,nt,rt,ot,it,st,de],pe=W.length,ct=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,at="|";function lt(t,e={}){return t.split(at).map(s=>{let n=s.trim().split(ct).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=n.length;i<o;i+=1){const c=n[i];let a=!1,l=-1;for(;!a&&++l<pe;){const u=W[l];let h=u.isMultiMatch(c);h&&(r.push(new u(h,e)),a=!0)}if(!a)for(l=-1;++l<pe;){const u=W[l];let h=u.isSingleMatch(c);if(h){r.push(new u(h,e));break}}}return r})}const ut=new Set([de.type,fe.type]);class ht{constructor(e,{isCaseSensitive:s=f.isCaseSensitive,includeMatches:n=f.includeMatches,minMatchCharLength:r=f.minMatchCharLength,ignoreLocation:i=f.ignoreLocation,findAllMatches:o=f.findAllMatches,location:c=f.location,threshold:a=f.threshold,distance:l=f.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:c,threshold:a,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=lt(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],c=0;for(let a=0,l=s.length;a<l;a+=1){const u=s[a];o.length=0,i=0;for(let h=0,d=u.length;h<d;h+=1){const p=u[h],{isMatch:g,indices:_,score:C}=p.search(e);if(g){if(i+=1,c+=C,n){const k=p.constructor.type;ut.has(k)?o=[...o,..._]:o.push(_)}}else{c=0,i=0,o.length=0;break}}if(i){let h={isMatch:!0,score:c/i};return n&&(h.indices=o),h}}return{isMatch:!1,score:1}}}const Y=[];function dt(...t){Y.push(...t)}function J(t,e){for(let s=0,n=Y.length;s<n;s+=1){let r=Y[s];if(r.condition(t,e))return new r(t,e)}return new ue(t,e)}const B={AND:"$and",OR:"$or"},Q={PATH:"$path",PATTERN:"$val"},X=t=>!!(t[B.AND]||t[B.OR]),ft=t=>!!t[Q.PATH],pt=t=>!w(t)&&re(t)&&!X(t),ge=t=>({[B.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function me(t,e,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const o=ft(r);if(!o&&i.length>1&&!X(r))return n(ge(r));if(pt(r)){const a=o?r[Q.PATH]:i[0],l=o?r[Q.PATTERN]:r[a];if(!I(l))throw new Error(ze(a));const u={keyId:H(a),pattern:l};return s&&(u.searcher=J(l,e)),u}let c={children:[],operator:i[0]};return i.forEach(a=>{const l=r[a];w(l)&&l.forEach(u=>{c.children.push(n(u))})}),c};return X(t)||(t=ge(t)),n(t)}function gt(t,{ignoreFieldNorm:e=f.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:o})=>{const c=r?r.weight:null;n*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(e?1:i))}),s.score=n})}function mt(t,e){const s=t.matches;e.matches=[],!!y(s)&&s.forEach(n=>{if(!y(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let o={indices:r,value:i};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),e.matches.push(o)})}function yt(t,e){e.score=t.score}function _t(t,e,{includeMatches:s=f.includeMatches,includeScore:n=f.includeScore}={}){const r=[];return s&&r.push(mt),n&&r.push(yt),t.map(i=>{const{idx:o}=i,c={item:e[o],refIndex:o};return r.length&&r.forEach(a=>{a(i,c)}),c})}class L{constructor(e,s={},n){this.options={...f,...s},this.options.useExtendedSearch,this._keyStore=new We(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof V))throw new Error(Ue);this._myIndex=s||le(this.options.keys,this._docs,{getFn:this.options.getFn})}add(e){!y(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let a=I(e)?I(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return gt(a,{ignoreFieldNorm:c}),i&&a.sort(o),ne(s)&&s>-1&&(a=a.slice(0,s)),_t(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const s=J(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:o,n:c})=>{if(!y(i))return;const{isMatch:a,score:l,indices:u}=s.searchIn(i);a&&r.push({item:i,idx:o,matches:[{score:l,value:i,norm:c,indices:u}]})}),r}_searchLogical(e){const s=me(e,this.options),n=(c,a,l)=>{if(!c.children){const{keyId:u,searcher:h}=c,d=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(a,u),searcher:h});return d&&d.length?[{idx:l,item:a,matches:d}]:[]}switch(c.operator){case B.AND:{const u=[];for(let h=0,d=c.children.length;h<d;h+=1){const p=c.children[h],g=n(p,a,l);if(g.length)u.push(...g);else return[]}return u}case B.OR:{const u=[];for(let h=0,d=c.children.length;h<d;h+=1){const p=c.children[h],g=n(p,a,l);if(g.length){u.push(...g);break}}return u}}},r=this._myIndex.records,i={},o=[];return r.forEach(({$:c,i:a})=>{if(y(c)){let l=n(s,c,a);l.length&&(i[a]||(i[a]={idx:a,item:c,matches:[]},o.push(i[a])),l.forEach(({matches:u})=>{i[a].matches.push(...u)}))}}),o}_searchObjectList(e){const s=J(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:c})=>{if(!y(o))return;let a=[];n.forEach((l,u)=>{a.push(...this._findMatches({key:l,value:o[u],searcher:s}))}),a.length&&i.push({idx:c,item:o,matches:a})}),i}_findMatches({key:e,value:s,searcher:n}){if(!y(s))return[];let r=[];if(w(s))s.forEach(({v:i,i:o,n:c})=>{if(!y(i))return;const{isMatch:a,score:l,indices:u}=n.searchIn(i);a&&r.push({score:l,key:e,value:i,idx:o,norm:c,indices:u})});else{const{v:i,n:o}=s,{isMatch:c,score:a,indices:l}=n.searchIn(i);c&&r.push({score:a,key:e,value:i,norm:o,indices:l})}return r}}L.version="6.4.6",L.createIndex=le,L.parseIndex=Xe,L.config=f,L.parseQuery=me,dt(ht);const Et={threshold:.5,useExtendedSearch:!0,keys:["label","id"]};var Mt=(t,e)=>!e||e==""?t:new L(t,Et).search(e).map(s=>s.item);const ye=(t,e)=>{let s=[];return e.forEach((n,r)=>{let i=t.findIndex(o=>o.id==r);r!=-1&&(s.push([t[i],n]),t.splice(i,1))}),s=s.sort((n,r)=>r[1]-n[1]).map(n=>n[0]),s.concat(t)};var xt=(t,e,s)=>{if(!s||s=="")return ye(t,e);let n=Mt(t,s);return ye(n,e)};const wt=m.React.useState,{openModal:It}=M.findByProps("openModal"),_e=M.findByProps("ModalCloseButton"),kt=M.findByDisplayName("TextInput"),bt=({e:t,prompt:e,nest:s,defaultEntries:n,closeAction:r})=>{let[i,o]=wt({selected:0,search:""});const c=xt(s?n.concat(s.ghost.customEntries):n,s?s.ghost.usageCounts:new Map,i.search),a=h=>{let d=i.selected;o({selected:d,search:h})},l=h=>{let d=i.search;o({selected:h,search:d})},u=h=>{switch(h.which){case 38:i.selected>0?l(i.selected-1):l(c.length-1);break;case 40:i.selected<c.length-1?l(i.selected+1):l(0);break;case 13:t.onClose();let d=c[i.selected];if(s){let p=s.ghost.usageCounts,g=p.get(d.id)??0;p.set(d.id,g+1),s.store.usageCounts=p}d.action();break;default:document.getElementsByClassName("ysink_palette_input")[0].children[0].focus();break}document.getElementById(`palette_item_${i.selected}`)?.scrollIntoView(!1)};return m.React.createElement(te.ErrorBoundary,null,m.React.createElement(_e.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal",onKeyDown:u,onBlur:()=>{r&&r()}},m.React.createElement(_e.ModalContent,{className:"ysink_palette_palette"},m.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",m.React.createElement(kt,{className:"ysink_palette_input",placeholder:e??"Search Actions",type:"text",value:i.search,onChange:h=>a(h)})),m.React.createElement("div",{className:"ysink_palette_scrollcontainer"},c.filter(h=>h&&(h.condition?.()??!0)).map((h,d)=>m.React.createElement(Te,{entry:h,id:`palette_item_${d}`,selected:d==i.selected,icon:h.icon}))))))};let P=(t,e,s,n)=>It(r=>m.React.createElement(bt,{e:r,prompt:t,nest:e,defaultEntries:s,closeAction:n})),Rt=(t,e)=>new Promise((s,n)=>{P(t,null,e.map(r=>({label:r,action:()=>s(r)})),()=>n("user closed palette"))});var St=(t,e)=>{let s=n=>{(n.ctrlKey||n.metaKey)&&n.shiftKey&&n.which==80&&P(null,t,e)};return document.addEventListener("keyup",s),()=>{document.removeEventListener("keyup",s)}};const{getGuildPermissions:At}=M.findByProps("getGuildPermissions"),{getLastSelectedGuildId:N}=M.findByProps("getLastSelectedGuildId"),Ee=(t,e)=>{let s=At({id:t});return!!(s&&(s&e)!=0)},vt=()=>Ee(N(),BigInt(4)),Pt=()=>Ee(N(),BigInt(2)),Ct=m.React.useState,{openModal:$t}=M.findByProps("openModal"),Me=M.findByProps("ModalCloseButton"),Lt=M.findByDisplayName("TextInput"),Nt=({e:t,prompt:e,finishAction:s,closeAction:n})=>{let[r,i]=Ct("");return m.React.createElement(te.ErrorBoundary,null,m.React.createElement(Me.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal ysink_palette_textentrymodal",onKeyDown:o=>{o.which==13&&(t.onClose(),s(r))}},m.React.createElement(Me.ModalContent,{className:"ysink_palette_palette"},m.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",m.React.createElement(Lt,{className:"ysink_palette_input",placeholder:e,type:"text",value:r,onChange:o=>i(o),onBlur:()=>n()})))))},D=(t,e,s)=>$t(n=>m.React.createElement(Nt,{e:n,prompt:t,finishAction:e,closeAction:s})),xe=t=>new Promise((e,s)=>{D(t,e,()=>s("user closed textentry"))}),{getMembers:we}=M.findByProps("getMembers"),{getUser:Ie}=M.findByProps("getUser"),{banUser:Ot,kickUser:Tt}=M.findByProps("banUser"),ke="Built In",be="\u{1F6E0}";var Bt=[{source:ke,icon:be,id:"moderation_banuser",label:"Ban user from current guild",condition:vt,action:()=>{P("Which user to ban?",null,we(N()).map(t=>{let e=Ie(t.userId),s=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${s} (${t.userId})`,action:()=>D("Enter ban reason",n=>{Ot(N(),t.userId,null,n)})}}))}},{source:ke,icon:be,id:"moderation_kickuser",label:"Kick user from current guild",condition:Pt,action:()=>{P("Which user to kick?",null,we(N()).map(t=>{let e=Ie(t.userId),s=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${s} (${t.userId})`,action:()=>D("Enter kick reason",n=>{Tt(N(),t.userId,n)})}}))}}];const F="Built In",K="\u{1F4A7}";var jt=[{source:F,icon:K,id:"cumcord_installplug",label:"Install plugin from URL",action:async()=>{try{let t=await xe("Enter URL");await A.default.importPlugin(t),Ce.showToast({title:"Installed plugin",duration:3e3})}catch{}}},{source:F,icon:K,id:"cumcord_removeplug",label:"Remove plugin",action:()=>{let t=Object.keys(A.default.installed.ghost).map(e=>[e,A.default.installed.ghost[e]]);P("Choose plugin to remove",null,t.map(e=>({id:e[0],label:e[1].manifest.name,action:()=>A.default.removePlugin(e[0])})))}},{source:F,icon:K,id:"cumcord_toggleplug",label:"Toggle plugin",action:()=>{let t=Object.keys(A.default.installed.ghost).map(e=>[e,A.default.installed.ghost[e]]);P("Choose plugin to toggle",null,t.map(e=>({id:e[0],label:(e[1].enabled?"\u{1F7E2} ":"\u{1F534} ")+e[1].manifest.name,action:()=>A.default.togglePlugin(e[0])})))}},{source:F,icon:K,id:"cumcord_uninject",label:"Uninject Cumcord",action:()=>setTimeout(async()=>{await $e.showConfirmationModal({header:"Really uninject Cumcord?",content:"This will disable all of your plugins, and Cumcord will be completely removed",type:"danger",confirmText:"Uninject",cancelText:"Actually, never mind"})&&Le.uninject()},500)}];const Re="Built In",Se="\u267B";var Dt=[{source:Re,icon:Se,id:"reboot_reload",label:"Reload Discord",action:()=>window.location.reload()},{source:Re,icon:Se,id:"reboot_relaunch",label:"Relaunch Discord to updater",condition:()=>window.DiscordNative,action:()=>window.DiscordNative.app.relaunch()}];const Ft="Built In",Z=Bt.concat(jt).concat(Dt);var Kt=t=>(window.commandPalette={openPalette:(e,s)=>{P(e,null,s)},openPaletteAsync:Rt,openTextEntry:(e,s)=>D(e,s),openTextEntryAsync:e=>xe(e),registerEntry(e,s,n,r,i,o){if(!e||e=="")throw"Register failed: Please supply an ID (string) for your entry";if(!s||s=="")throw"Register failed: Please identify a source (string) for your entry";if(!n||n=="")throw"Register failed: Please supply a label (string) for your entry";if(!r)throw"Register failed: Please supply an action (JS function) for your entry";if(s==Ft)throw"Register failed: That source is reserved for built in entries";if(Z.find(a=>a.id==e)!=null)throw"Register failed: Entry ID taken by a built in entry";let c=t.ghost.customEntries.findIndex(a=>a.id==e);if(c!=-1)throw`Register failed: Entry ID taken by entry from source ${t.ghost.customEntries[c].source}`;t.ghost.customEntries.push({id:e,source:s,label:n,action:r,icon:i,console})},unregisterEntry(e,s){if(!e||e=="")throw"Unregister failed: Please supply an ID (string) to deregister";if(!s||s=="")throw"Unregister failed: Please identify your source (string)";let n=t.ghost.customEntries,r=n.findIndex(o=>o.id==e);if(r==-1)throw"Unregister failed: No entry with that ID could be found";if(n[r].source!=s)throw"Unregister failed: An entry with that ID was found, but was not from your source";let i=n[r];return n.splice(r,1),t.store.customEntries=n,i},unregisterSource(e){let s=t.ghost.customEntries,n=s.filter(r=>r.source!=e);if(n.length==s.length)throw"Bulk unregister failed: No entries with that source were found";t.store.customEntries=n},getBuiltInEntries:()=>Z,getAllCustomEntries:()=>t.ghost.customEntries,getCustomEntriesBySouce:e=>t.ghost.customEntries.filter(s=>s.source==e),getCustomEntryById:e=>t.ghost.customEntries.find(s=>s.id==e)},se.log("|| COMMAND PALETTE || Initialised window.commandPalette API"),()=>{window.commandPalette=void 0,delete window.commandPalette,se.log("|| COMMAND PALETTE || Disposed window.commandPalette API")}),Ut=({persist:t,id:e})=>{t.store.customEntries=[],t.ghost.usageCounts||(t.store.usageCounts=new Map);let s=[Oe(),St(t,Z),Kt(t)];return{onUnload:()=>{t.store.customEntries=[],delete t.store.customEntries,s.forEach(n=>n())}}};return Ut})(cumcord.modules.webpack,cumcord.ui.components,cumcord.modules.common,cumcord.plugins,cumcord.ui.toasts,cumcord.ui.modals,cumcord,cumcord.utils.logger);
