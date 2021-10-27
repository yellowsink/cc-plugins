(function(E,te,g,Te,ne,Be,De,Fe,se){"use strict";function je(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var $=je(Te),Ue=()=>cumcord.patcher.injectCSS(".ysink_palette_modal{position:absolute;top:5rem;left:0;width:100vw;display:flex;align-items:center;background:none!important;box-shadow:none!important}.ysink_palette_modal.ysink_palette_textentrymodal{min-height:0}.ysink_palette_palette{width:50rem;background-color:var(--background-secondary);color:#fff;padding:.75rem 0 0;border-radius:0;overflow:unset!important}.ysink_palette_item{padding:.3rem 1rem .3rem .5rem;transition:background-color .15s}.ysink_palette_icon{width:1.5rem;display:inline-block;text-align:center}.ysink_palette_iconseparator{border:solid 1px #ffffff55;margin:0 .5rem;border-radius:1px}.ysink_palette_item.ysink_palette_selected{background-color:#0005}.ysink_palette_input_wrapper{margin:0 .5rem 1rem;border:#ffffff33 solid 1px;display:flex;align-items:center;padding-left:.5rem}.ysink_palette_input{flex:1;margin-left:.5rem}.ysink_palette_input input{border:none!important;background:none!important;padding:0!important}.ysink_palette_source{text-transform:uppercase;font-style:italic;color:#aaa;float:right}.ysink_palette_scrollcontainer{overflow:hidden scroll;max-height:30rem;padding-bottom:.75rem}.ysink_palette_scrollcontainer::-webkit-scrollbar{width:1rem;background-color:#0003}.ysink_palette_scrollcontainer::-webkit-scrollbar-thumb{background-color:#fff3;min-height:40px}.ysink_palette_md{margin:0 .5rem 1rem;padding:.5rem;background-color:#fff1;border:1px solid #ffffff33}.ysink_palette_md>*>:last-child{margin-bottom:0}"),Ke=({entry:t,selected:e,id:n,icon:s,finish:r,hover:i})=>g.React.createElement("div",{className:e?"ysink_palette_item ysink_palette_selected":"ysink_palette_item",id:n,onClick:r,onMouseOver:i},g.React.createElement("span",{className:"ysink_palette_icon"},s??""),g.React.createElement("span",{className:"ysink_palette_iconseparator"}),t.label,g.React.createElement("span",{className:"ysink_palette_source"},t.source));const ze=E.findByProps("rules");var re=({children:t})=>g.React.createElement("div",{class:"ysink_palette_md"},g.React.createElement(ze,null,t));function w(t){return Array.isArray?Array.isArray(t):ce(t)==="[object Array]"}const We=1/0;function Ge(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-We?"-0":e}function He(t){return t==null?"":Ge(t)}function b(t){return typeof t=="string"}function ie(t){return typeof t=="number"}function Ve(t){return t===!0||t===!1||Ye(t)&&ce(t)=="[object Boolean]"}function oe(t){return typeof t=="object"}function Ye(t){return oe(t)&&t!==null}function M(t){return t!=null}function W(t){return!t.trim().length}function ce(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const sn="Extended search is not available",Je="Incorrect 'index' type",Qe=t=>`Invalid value for key ${t}`,Xe=t=>`Pattern length exceeds max of ${t}.`,Ze=t=>`Missing ${t} property in key`,qe=t=>`Property 'weight' in key '${t}' must be a positive integer`,ae=Object.prototype.hasOwnProperty;class et{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(s=>{let r=le(s);n+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(s=>{s.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function le(t){let e=null,n=null,s=null,r=1;if(b(t)||w(t))s=t,e=ue(t),n=G(t);else{if(!ae.call(t,"name"))throw new Error(Ze("name"));const i=t.name;if(s=i,ae.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(qe(i));e=ue(i),n=G(i)}return{path:e,id:n,weight:r,src:s}}function ue(t){return w(t)?t:t.split(".")}function G(t){return w(t)?t.join("."):t}function tt(t,e){let n=[],s=!1;const r=(i,o,c)=>{if(!!M(i))if(!o[c])n.push(i);else{let a=o[c];const u=i[a];if(!M(u))return;if(c===o.length-1&&(b(u)||ie(u)||Ve(u)))n.push(He(u));else if(w(u)){s=!0;for(let l=0,h=u.length;l<h;l+=1)r(u[l],o,c+1)}else o.length&&r(u,o,c+1)}};return r(t,b(e)?e.split("."):e,0),s?n:n[0]}var d={...{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},...{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},...{location:0,threshold:.6,distance:100},...{useExtendedSearch:!1,getFn:tt,ignoreLocation:!1,ignoreFieldNorm:!1}};const nt=/[^ ]+/g;function st(t=3){const e=new Map,n=Math.pow(10,t);return{get(s){const r=s.match(nt).length;if(e.has(r))return e.get(r);const i=1/Math.sqrt(r),o=parseFloat(Math.round(i*n)/n);return e.set(r,o),o},clear(){e.clear()}}}class H{constructor({getFn:e=d.getFn}={}){this.norm=st(3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,s)=>{this._keysMap[n.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,b(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();b(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,s=this.size();n<s;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!M(e)||W(e))return;let s={v:e,i:n,n:this.norm.get(e)};this.records.push(s)}_addObject(e,n){let s={i:n,$:{}};this.keys.forEach((r,i)=>{let o=this.getFn(e,r.path);if(!!M(o)){if(w(o)){let c=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:u,value:l}=a.pop();if(!!M(l))if(b(l)&&!W(l)){let h={v:l,i:u,n:this.norm.get(l)};c.push(h)}else w(l)&&l.forEach((h,f)=>{a.push({nestedArrIndex:f,value:h})})}s.$[i]=c}else if(!W(o)){let c={v:o,n:this.norm.get(o)};s.$[i]=c}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function he(t,e,{getFn:n=d.getFn}={}){const s=new H({getFn:n});return s.setKeys(t.map(le)),s.setSources(e),s.create(),s}function rt(t,{getFn:e=d.getFn}={}){const{keys:n,records:s}=t,r=new H({getFn:e});return r.setKeys(n),r.setIndexRecords(s),r}function U(t,{errors:e=0,currentLocation:n=0,expectedLocation:s=0,distance:r=d.distance,ignoreLocation:i=d.ignoreLocation}={}){const o=e/t.length;if(i)return o;const c=Math.abs(s-n);return r?o+c/r:c?1:o}function it(t=[],e=d.minMatchCharLength){let n=[],s=-1,r=-1,i=0;for(let o=t.length;i<o;i+=1){let c=t[i];c&&s===-1?s=i:!c&&s!==-1&&(r=i-1,r-s+1>=e&&n.push([s,r]),s=-1)}return t[i-1]&&i-s>=e&&n.push([s,i-1]),n}const C=32;function ot(t,e,n,{location:s=d.location,distance:r=d.distance,threshold:i=d.threshold,findAllMatches:o=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,includeMatches:a=d.includeMatches,ignoreLocation:u=d.ignoreLocation}={}){if(e.length>C)throw new Error(Xe(C));const l=e.length,h=t.length,f=Math.max(0,Math.min(s,h));let m=i,y=f;const p=c>1||a,_=p?Array(h):[];let x;for(;(x=t.indexOf(e,y))>-1;){let I=U(e,{currentLocation:x,expectedLocation:f,distance:r,ignoreLocation:u});if(m=Math.min(I,m),y=x+l,p){let P=0;for(;P<l;)_[x+P]=1,P+=1}}y=-1;let O=[],L=1,K=l+h;const nn=1<<l-1;for(let I=0;I<l;I+=1){let P=0,A=K;for(;P<A;)U(e,{errors:I,currentLocation:f+A,expectedLocation:f,distance:r,ignoreLocation:u})<=m?P=A:K=A,A=Math.floor((K-P)/2+P);K=A;let Ne=Math.max(1,f-A+1),ee=o?h:Math.min(f+A,h)+l,T=Array(ee+2);T[ee+1]=(1<<I)-1;for(let k=ee;k>=Ne;k-=1){let z=k-1,Oe=n[t.charAt(z)];if(p&&(_[z]=+!!Oe),T[k]=(T[k+1]<<1|1)&Oe,I&&(T[k]|=(O[k+1]|O[k])<<1|1|O[k+1]),T[k]&nn&&(L=U(e,{errors:I,currentLocation:z,expectedLocation:f,distance:r,ignoreLocation:u}),L<=m)){if(m=L,y=z,y<=f)break;Ne=Math.max(1,2*f-y)}}if(U(e,{errors:I+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:u})>m)break;O=T}const q={isMatch:y>=0,score:Math.max(.001,L)};if(p){const I=it(_,c);I.length?a&&(q.indices=I):q.isMatch=!1}return q}function ct(t){let e={};for(let n=0,s=t.length;n<s;n+=1){const r=t.charAt(n);e[r]=(e[r]||0)|1<<s-n-1}return e}class de{constructor(e,{location:n=d.location,threshold:s=d.threshold,distance:r=d.distance,includeMatches:i=d.includeMatches,findAllMatches:o=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,isCaseSensitive:a=d.isCaseSensitive,ignoreLocation:u=d.ignoreLocation}={}){if(this.options={location:n,threshold:s,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:u},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(f,m)=>{this.chunks.push({pattern:f,alphabet:ct(f),startIndex:m})},h=this.pattern.length;if(h>C){let f=0;const m=h%C,y=h-m;for(;f<y;)l(this.pattern.substr(f,C),f),f+=C;if(m){const p=h-C;l(this.pattern.substr(p),p)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:s}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let y={isMatch:!0,score:0};return s&&(y.indices=[[0,e.length-1]]),y}const{location:r,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,ignoreLocation:u}=this.options;let l=[],h=0,f=!1;this.chunks.forEach(({pattern:y,alphabet:p,startIndex:_})=>{const{isMatch:x,score:O,indices:L}=ot(e,y,p,{location:r+_,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,includeMatches:s,ignoreLocation:u});x&&(f=!0),h+=O,x&&L&&(l=[...l,...L])});let m={isMatch:f,score:f?h/this.chunks.length:1};return f&&s&&(m.indices=l),m}}class S{constructor(e){this.pattern=e}static isMultiMatch(e){return fe(e,this.multiRegex)}static isSingleMatch(e){return fe(e,this.singleRegex)}search(){}}function fe(t,e){const n=t.match(e);return n?n[1]:null}class at extends S{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class lt extends S{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const s=e.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ut extends S{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ht extends S{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class dt extends S{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ft extends S{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class pe extends S{constructor(e,{location:n=d.location,threshold:s=d.threshold,distance:r=d.distance,includeMatches:i=d.includeMatches,findAllMatches:o=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,isCaseSensitive:a=d.isCaseSensitive,ignoreLocation:u=d.ignoreLocation}={}){super(e);this._bitapSearch=new de(e,{location:n,threshold:s,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class ge extends S{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,s;const r=[],i=this.pattern.length;for(;(s=e.indexOf(this.pattern,n))>-1;)n=s+i,r.push([s,n-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const V=[at,ge,ut,ht,ft,dt,lt,pe],me=V.length,pt=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,gt="|";function mt(t,e={}){return t.split(gt).map(n=>{let s=n.trim().split(pt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=s.length;i<o;i+=1){const c=s[i];let a=!1,u=-1;for(;!a&&++u<me;){const l=V[u];let h=l.isMultiMatch(c);h&&(r.push(new l(h,e)),a=!0)}if(!a)for(u=-1;++u<me;){const l=V[u];let h=l.isSingleMatch(c);if(h){r.push(new l(h,e));break}}}return r})}const yt=new Set([pe.type,ge.type]);class _t{constructor(e,{isCaseSensitive:n=d.isCaseSensitive,includeMatches:s=d.includeMatches,minMatchCharLength:r=d.minMatchCharLength,ignoreLocation:i=d.ignoreLocation,findAllMatches:o=d.findAllMatches,location:c=d.location,threshold:a=d.threshold,distance:u=d.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:s,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:c,threshold:a,distance:u},this.pattern=n?e:e.toLowerCase(),this.query=mt(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],c=0;for(let a=0,u=n.length;a<u;a+=1){const l=n[a];o.length=0,i=0;for(let h=0,f=l.length;h<f;h+=1){const m=l[h],{isMatch:y,indices:p,score:_}=m.search(e);if(y){if(i+=1,c+=_,s){const x=m.constructor.type;yt.has(x)?o=[...o,...p]:o.push(p)}}else{c=0,i=0,o.length=0;break}}if(i){let h={isMatch:!0,score:c/i};return s&&(h.indices=o),h}}return{isMatch:!1,score:1}}}const Y=[];function Et(...t){Y.push(...t)}function J(t,e){for(let n=0,s=Y.length;n<s;n+=1){let r=Y[n];if(r.condition(t,e))return new r(t,e)}return new de(t,e)}const B={AND:"$and",OR:"$or"},Q={PATH:"$path",PATTERN:"$val"},X=t=>!!(t[B.AND]||t[B.OR]),Mt=t=>!!t[Q.PATH],It=t=>!w(t)&&oe(t)&&!X(t),ye=t=>({[B.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function _e(t,e,{auto:n=!0}={}){const s=r=>{let i=Object.keys(r);const o=Mt(r);if(!o&&i.length>1&&!X(r))return s(ye(r));if(It(r)){const a=o?r[Q.PATH]:i[0],u=o?r[Q.PATTERN]:r[a];if(!b(u))throw new Error(Qe(a));const l={keyId:G(a),pattern:u};return n&&(l.searcher=J(u,e)),l}let c={children:[],operator:i[0]};return i.forEach(a=>{const u=r[a];w(u)&&u.forEach(l=>{c.children.push(s(l))})}),c};return X(t)||(t=ye(t)),s(t)}function xt(t,{ignoreFieldNorm:e=d.ignoreFieldNorm}){t.forEach(n=>{let s=1;n.matches.forEach(({key:r,norm:i,score:o})=>{const c=r?r.weight:null;s*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(e?1:i))}),n.score=s})}function kt(t,e){const n=t.matches;e.matches=[],!!M(n)&&n.forEach(s=>{if(!M(s.indices)||!s.indices.length)return;const{indices:r,value:i}=s;let o={indices:r,value:i};s.key&&(o.key=s.key.src),s.idx>-1&&(o.refIndex=s.idx),e.matches.push(o)})}function wt(t,e){e.score=t.score}function bt(t,e,{includeMatches:n=d.includeMatches,includeScore:s=d.includeScore}={}){const r=[];return n&&r.push(kt),s&&r.push(wt),t.map(i=>{const{idx:o}=i,c={item:e[o],refIndex:o};return r.length&&r.forEach(a=>{a(i,c)}),c})}class N{constructor(e,n={},s){this.options={...d,...n},this.options.useExtendedSearch,this._keyStore=new et(this.options.keys),this.setCollection(e,s)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof H))throw new Error(Je);this._myIndex=n||he(this.options.keys,this._docs,{getFn:this.options.getFn})}add(e){!M(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let s=0,r=this._docs.length;s<r;s+=1){const i=this._docs[s];e(i,s)&&(this.removeAt(s),s-=1,r-=1,n.push(i))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:s,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let a=b(e)?b(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return xt(a,{ignoreFieldNorm:c}),i&&a.sort(o),ie(n)&&n>-1&&(a=a.slice(0,n)),bt(a,this._docs,{includeMatches:s,includeScore:r})}_searchStringList(e){const n=J(e,this.options),{records:s}=this._myIndex,r=[];return s.forEach(({v:i,i:o,n:c})=>{if(!M(i))return;const{isMatch:a,score:u,indices:l}=n.searchIn(i);a&&r.push({item:i,idx:o,matches:[{score:u,value:i,norm:c,indices:l}]})}),r}_searchLogical(e){const n=_e(e,this.options),s=(c,a,u)=>{if(!c.children){const{keyId:l,searcher:h}=c,f=this._findMatches({key:this._keyStore.get(l),value:this._myIndex.getValueForItemAtKeyId(a,l),searcher:h});return f&&f.length?[{idx:u,item:a,matches:f}]:[]}switch(c.operator){case B.AND:{const l=[];for(let h=0,f=c.children.length;h<f;h+=1){const m=c.children[h],y=s(m,a,u);if(y.length)l.push(...y);else return[]}return l}case B.OR:{const l=[];for(let h=0,f=c.children.length;h<f;h+=1){const m=c.children[h],y=s(m,a,u);if(y.length){l.push(...y);break}}return l}}},r=this._myIndex.records,i={},o=[];return r.forEach(({$:c,i:a})=>{if(M(c)){let u=s(n,c,a);u.length&&(i[a]||(i[a]={idx:a,item:c,matches:[]},o.push(i[a])),u.forEach(({matches:l})=>{i[a].matches.push(...l)}))}}),o}_searchObjectList(e){const n=J(e,this.options),{keys:s,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:c})=>{if(!M(o))return;let a=[];s.forEach((u,l)=>{a.push(...this._findMatches({key:u,value:o[l],searcher:n}))}),a.length&&i.push({idx:c,item:o,matches:a})}),i}_findMatches({key:e,value:n,searcher:s}){if(!M(n))return[];let r=[];if(w(n))n.forEach(({v:i,i:o,n:c})=>{if(!M(i))return;const{isMatch:a,score:u,indices:l}=s.searchIn(i);a&&r.push({score:u,key:e,value:i,idx:o,norm:c,indices:l})});else{const{v:i,n:o}=n,{isMatch:c,score:a,indices:u}=s.searchIn(i);c&&r.push({score:a,key:e,value:i,norm:o,indices:u})}return r}}N.version="6.4.6",N.createIndex=he,N.parseIndex=rt,N.config=d,N.parseQuery=_e,Et(_t);const vt={threshold:.7,useExtendedSearch:!0,keys:["label","id"],ignoreLocation:!0};var St=(t,e)=>!e||e==""?t:new N(t,vt).search(e).map(n=>n.item);const Ee=(t,e)=>{let n=[];return e.forEach((s,r)=>{let i=t.findIndex(o=>o.id==r);r!=-1&&(n.push([t[i],s]),t.splice(i,1))}),n=n.sort((s,r)=>r[1]-s[1]).map(s=>s[0]),n.concat(t)};var Rt=(t,e,n)=>{if(!n||n=="")return Ee(t,e);let s=St(t,n);return Ee(s,e)};const Pt=g.React.useState,{openModal:At}=E.findByProps("openModalLazy"),Me=E.findByProps("ModalCloseButton"),$t=E.findByDisplayName("TextInput"),Ct=({e:t,prompt:e,nest:n,defaultEntries:s,closeAction:r,markdown:i})=>{let[o,c]=Pt({selected:0,search:""}),a=n?s.concat(n.ghost.customEntries):s,u=n?n.ghost.usageCounts:new Map;const l=Rt(a,u,o.search),h=p=>{let _=o.selected;c({selected:_,search:p})},f=p=>{let _=o.search;c({selected:p,search:_})},m=()=>{t.onClose();let p=l[o.selected];if(n){let _=n.ghost.usageCounts,x=_.get(p.id)??0;_.set(p.id,x+1),n.store.usageCounts=_}p.action()},y=p=>{switch(p.which){case 38:o.selected>0?f(o.selected-1):f(l.length-1);break;case 40:o.selected<l.length-1?f(o.selected+1):f(0);break;case 13:m();break;default:document.getElementsByClassName("ysink_palette_input")[0].children[0].focus();break}document.getElementById(`palette_item_${o.selected}`)?.scrollIntoView(!1)};return t.transitionState==3&&r&&r(),g.React.createElement(te.ErrorBoundary,null,g.React.createElement(Me.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal",onKeyDown:y},g.React.createElement(Me.ModalContent,{className:"ysink_palette_palette"},i?g.React.createElement(re,null,i):[],g.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",g.React.createElement($t,{className:"ysink_palette_input",placeholder:e??"Search Actions",type:"text",value:o.search,onChange:p=>h(p)})),g.React.createElement("div",{className:"ysink_palette_scrollcontainer"},l.filter(p=>p&&(p.condition?.()??!0)).map((p,_)=>g.React.createElement(Ke,{entry:p,id:`palette_item_${_}`,selected:_==o.selected,icon:p.icon,hover:()=>f(_),finish:m}))))))};let R=(t,e,n,s,r)=>At(i=>g.React.createElement(Ct,{e:i,prompt:t,nest:e,defaultEntries:n,closeAction:r,markdown:s})),Lt=(t,e,n)=>new Promise((s,r)=>{R(t,null,e.map(i=>({label:i,action:()=>s(i)})),n,()=>r("user closed palette"))});var Nt=(t,e)=>{let n=s=>{if((s.ctrlKey||s.metaKey)&&s.shiftKey&&s.which==80){let r=t.ghost.doNotShowWelcome?null:"\u{1F389} Welcome to **Command Palette**! \u{1F389} Start typing to pick an item from the list,or visit the API Docs to start building custom actions at https://yellowsink.github.io/cc-plugins/palette-docs";R(null,t,e,r),t.store.doNotShowWelcome=!0}};return document.addEventListener("keyup",n),()=>{document.removeEventListener("keyup",n)}};const{getGuildPermissions:Ot}=E.findByProps("getGuildPermissions"),{getLastSelectedGuildId:v}=E.findByProps("getLastSelectedGuildId"),Ie=(t,e)=>{let n=Ot({id:t});return!!(n&&(n&e)!=0)},Tt=()=>Ie(v(),BigInt(4)),Bt=()=>Ie(v(),BigInt(2)),Dt=g.React.useState,{openModal:Ft}=E.findByProps("openModalLazy"),xe=E.findByProps("ModalCloseButton"),jt=E.findByDisplayName("TextInput"),Ut=({e:t,prompt:e,finishAction:n,closeAction:s,markdown:r})=>{let[i,o]=Dt("");return g.React.createElement(te.ErrorBoundary,null,g.React.createElement(xe.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal ysink_palette_textentrymodal",onKeyDown:c=>{c.which==13&&(t.onClose(),n(i))}},g.React.createElement(xe.ModalContent,{className:"ysink_palette_palette"},r?g.React.createElement(re,null,r):[],g.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",g.React.createElement(jt,{className:"ysink_palette_input",placeholder:e,type:"text",value:i,onChange:c=>o(c),onBlur:()=>s()})))))},D=(t,e,n,s)=>Ft(r=>g.React.createElement(Ut,{e:r,prompt:t,finishAction:e,markdown:n,closeAction:s})),ke=(t,e)=>new Promise((n,s)=>{D(t,n,e,()=>s("user closed textentry"))}),{getMembers:we}=E.findByProps("getMembers"),{getUser:be}=E.findByProps("getUser"),{banUser:Kt,kickUser:zt}=E.findByProps("banUser"),ve="Built In",Se="\u{1F6E0}";var Wt=[{source:ve,icon:Se,id:"moderation_banuser",label:"Ban user from current guild",condition:Tt,action:()=>{R("Which user to ban?",null,we(v()).map(t=>{let e=be(t.userId),n=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${n} (${t.userId})`,action:()=>D("Enter ban reason",s=>{Kt(v(),t.userId,null,s)})}}))}},{source:ve,icon:Se,id:"moderation_kickuser",label:"Kick user from current guild",condition:Bt,action:()=>{R("Which user to kick?",null,we(v()).map(t=>{let e=be(t.userId),n=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${n} (${t.userId})`,action:()=>D("Enter kick reason",s=>{zt(v(),t.userId,s)})}}))}}];const F="Built In",j="\u{1F4A7}";var Gt=[{source:F,icon:j,id:"cumcord_installplug",label:"Install plugin from URL",action:async()=>{try{let t=await ke("Enter URL");await $.default.importPlugin(t),ne.showToast({title:"Installed plugin",duration:3e3})}catch{}}},{source:F,icon:j,id:"cumcord_removeplug",label:"Remove plugin",action:()=>{let t=Object.keys($.default.installed.ghost).map(e=>[e,$.default.installed.ghost[e]]);R("Choose plugin to remove",null,t.map(e=>({id:e[0],label:e[1].manifest.name,action:()=>$.default.removePlugin(e[0])})))}},{source:F,icon:j,id:"cumcord_toggleplug",label:"Toggle plugin",action:()=>{let t=Object.keys($.default.installed.ghost).map(e=>[e,$.default.installed.ghost[e]]);R("Choose plugin to toggle",null,t.map(e=>({id:e[0],label:(e[1].enabled?"\u{1F7E2} ":"\u{1F534} ")+e[1].manifest.name,action:()=>$.default.togglePlugin(e[0])})))}},{source:F,icon:j,id:"cumcord_uninject",label:"Uninject Cumcord",action:()=>setTimeout(async()=>{await Be.showConfirmationModal({header:"Really uninject Cumcord?",content:"This will disable all of your plugins, and Cumcord will be completely removed",type:"danger",confirmText:"Uninject",cancelText:"Actually, never mind"})&&De.uninject()},500)},{source:F,icon:j,id:"cumcord_toggle_dev",label:"Toggle DevMode",action:Fe.toggleDevMode}];const Re="Built In",Pe="\u267B";var Ht=[{source:Re,icon:Pe,id:"reboot_reload",label:"Reload Discord",action:()=>window.location.reload()},{source:Re,icon:Pe,id:"reboot_relaunch",label:"Relaunch Discord to updater",condition:()=>window.DiscordNative,action:()=>window.DiscordNative.app.relaunch()}];const{getMembers:Vt}=E.findByProps("getMembers"),{getUser:Yt}=E.findByProps("getUser"),{openUserProfileModal:Ae}=E.findByProps("openUserProfileModal"),$e="Built In",Ce="\u{1F680}";var Jt=[{source:$e,icon:Ce,id:"navigate_user_profile_id",label:"Open user profile by ID",action:()=>{D("Enter user ID",t=>{setTimeout(()=>{try{Ae({userId:t})}catch{ne.showToast({title:"Failed! - Is the user ID correct?",duration:3e3})}},200)})}},{source:$e,icon:Ce,id:"navigate_user_profile_server",label:"Open user profile from current server",action:()=>{R("Which profile to open?",null,Vt(v()).map(t=>{let e=Yt(t.userId),n=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${n} (${t.userId})`,action:()=>setTimeout(()=>Ae({userId:t.userId}),200)}}))}}];const{updateChannelOverrideSettings:Qt}=E.findByProps("updateChannelOverrideSettings"),{getCurrentChannelSettings:Xt}=E.findByProps("getCurrentChannelSettings"),{getChannelId:Le}=E.findByProps("getChannelId","getVoiceChannelId");var Zt=[{source:"Built In",icon:"\u{1F507}",label:"Toggle current channel mute",action:()=>{let t=Xt(v(),Le()).channel_is_muted;Qt(v(),Le(),{muted:!t,suppress_everyone:!t,suppress_roles:!t})}}];const qt="Built In",Z=Wt.concat(Gt).concat(Ht).concat(Jt).concat(Zt);var en=t=>(window.commandPalette={openPalette:(e,n,s)=>{R(e,null,n,s)},openPaletteAsync:Lt,openTextEntry:(e,n,s)=>D(e,n),openTextEntryAsync:ke,registerEntry(e,n,s,r,i,o){if(!n||n=="")throw"Register failed: Please supply an ID (string) for your entry";if(!e||e=="")throw"Register failed: Please identify a source (string) for your entry";if(!s||s=="")throw"Register failed: Please supply a label (string) for your entry";if(!i)throw"Register failed: Please supply an action (JS function) for your entry";if(e==qt)throw"Register failed: That source is reserved for built in entries";if(Z.find(a=>a.id==n)!=null)throw"Register failed: Entry ID taken by a built in entry";let c=t.ghost.customEntries.findIndex(a=>a.id==n);if(c!=-1)throw`Register failed: Entry ID taken by entry from source ${t.ghost.customEntries[c].source}`;t.ghost.customEntries.push({id:n,source:e,label:s,action:i,icon:r,console})},unregisterEntry(e,n){if(!n||n=="")throw"Unregister failed: Please supply an ID (string) to deregister";if(!e||e=="")throw"Unregister failed: Please identify your source (string)";let s=t.ghost.customEntries,r=s.findIndex(o=>o.id==n);if(r==-1)throw"Unregister failed: No entry with that ID could be found";if(s[r].source!=e)throw"Unregister failed: An entry with that ID was found, but was not from your source";let i=s[r];return s.splice(r,1),t.store.customEntries=s,i},unregisterSource(e){let n=t.ghost.customEntries,s=n.filter(r=>r.source!=e);if(s.length!=n.length)return t.store.customEntries=s,n.filter(r=>r.source==e)},getEntries:()=>Z.concat(t.ghost.customEntries)},se.log("|| COMMAND PALETTE || Initialised window.commandPalette API"),()=>{window.commandPalette=void 0,delete window.commandPalette,se.log("|| COMMAND PALETTE || Disposed window.commandPalette API")}),tn=({persist:t,id:e})=>{t.store.customEntries=[],t.ghost.usageCounts||(t.store.usageCounts=new Map);let n=[Ue(),Nt(t,Z),en(t)];return{onUnload:()=>{t.store.customEntries=[],delete t.store.customEntries,n.forEach(s=>s())}}};return tn})(cumcord.modules.webpack,cumcord.ui.components,cumcord.modules.common,cumcord.plugins,cumcord.ui.toasts,cumcord.ui.modals,cumcord,cumcord.dev,cumcord.utils.logger);
