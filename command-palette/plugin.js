(function(m,G,h,He,ce,We,Ge,Ve,ae,le,Ye,Je){"use strict";function ue(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var P=ue(He),Qe=ue(Ye),Xe=()=>cumcord.patcher.injectCSS(".ysink_palette_modal{position:absolute;top:5rem;left:0;width:100vw;display:flex;align-items:center;background:none!important;box-shadow:none!important}.ysink_palette_modal.ysink_palette_textentrymodal{min-height:0}.ysink_palette_palette{width:50rem;background-color:var(--background-secondary);color:#fff;padding:.75rem 0 0;border-radius:0;overflow:unset!important}.ysink_palette_item{padding:.3rem 1rem .3rem .5rem;transition:background-color .15s;display:flex}.ysink_palette_icon{width:1.5rem;display:inline-block;text-align:center}.ysink_palette_icon_container{width:1.5rem;display:inline-flex;justify-content:center}.ysink_palette_icon_container>img{height:1rem}.ysink_palette_iconseparator{border:solid 1px #ffffff55;margin:-.3rem .5rem}.ysink_palette_item.ysink_palette_selected{background-color:#0005}.ysink_palette_input_wrapper{margin:0 .5rem 1rem;border:#ffffff33 solid 1px;display:flex;align-items:center;padding-left:.5rem}.ysink_palette_input{flex:1;margin-left:.5rem}.ysink_palette_input input{border:none!important;background:none!important;padding:0!important}.ysink_palette_source{text-transform:uppercase;font-style:italic;color:#aaa}.ysink_palette_scrollcontainer{overflow:hidden scroll;max-height:30rem;padding-bottom:.75rem}.ysink_palette_scrollcontainer::-webkit-scrollbar{width:1rem;background-color:#0003}.ysink_palette_scrollcontainer::-webkit-scrollbar-thumb{background-color:#fff3;min-height:40px}.ysink_palette_md{margin:0 .5rem 1rem;padding:.5rem;background-color:#fff1;border:1px solid #ffffff33}.ysink_palette_md>*>:last-child{margin-bottom:0}.ysink_palette_settings{font-size:2rem;display:grid;grid-template-columns:auto 1fr;gap:.75em 2em;align-items:center}.ysink_palette_settings .ysink_palette_slabel{grid-column:1;display:inline;font-size:.6em!important;text-align:right}.ysink_palette_settings .ysink_palette_sinput{grid-column:2;width:1.3em;height:1.3em}.ysink_palette_settings .ysink_palette_sbutton{width:6em}.ysink_palette_settings_container{display:flex;justify-content:center;margin-top:5em}"),Ze=({entry:t,selected:e,id:n,icon:s,finish:r,hover:i})=>{s||(s="");let o=!1;try{new URL(s),o=!0}catch{}return h.React.createElement("div",{className:e?"ysink_palette_item ysink_palette_selected":"ysink_palette_item",id:n,onClick:r,onMouseOver:i},o?h.React.createElement("div",{className:"ysink_palette_icon_container"},h.React.createElement("img",{src:s})):h.React.createElement("span",{className:"ysink_palette_icon"},s),h.React.createElement("span",{className:"ysink_palette_iconseparator"}),t.label,h.React.createElement("div",{style:{flex:1}}),h.React.createElement("span",{className:"ysink_palette_source"},t.source))};const qe=m.findByProps("rules");var de=({children:t})=>h.React.createElement("div",{class:"ysink_palette_md"},h.React.createElement(qe,null,t));function R(t){return Array.isArray?Array.isArray(t):pe(t)==="[object Array]"}const et=1/0;function tt(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-et?"-0":e}function nt(t){return t==null?"":tt(t)}function S(t){return typeof t=="string"}function he(t){return typeof t=="number"}function st(t){return t===!0||t===!1||rt(t)&&pe(t)=="[object Boolean]"}function fe(t){return typeof t=="object"}function rt(t){return fe(t)&&t!==null}function k(t){return t!=null}function V(t){return!t.trim().length}function pe(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Rn="Extended search is not available",it="Incorrect 'index' type",ot=t=>`Invalid value for key ${t}`,ct=t=>`Pattern length exceeds max of ${t}.`,at=t=>`Missing ${t} property in key`,lt=t=>`Property 'weight' in key '${t}' must be a positive integer`,ge=Object.prototype.hasOwnProperty;class ut{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(s=>{let r=me(s);n+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(s=>{s.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function me(t){let e=null,n=null,s=null,r=1;if(S(t)||R(t))s=t,e=ye(t),n=Y(t);else{if(!ge.call(t,"name"))throw new Error(at("name"));const i=t.name;if(s=i,ge.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(lt(i));e=ye(i),n=Y(i)}return{path:e,id:n,weight:r,src:s}}function ye(t){return R(t)?t:t.split(".")}function Y(t){return R(t)?t.join("."):t}function dt(t,e){let n=[],s=!1;const r=(i,o,c)=>{if(!!k(i))if(!o[c])n.push(i);else{let a=o[c];const u=i[a];if(!k(u))return;if(c===o.length-1&&(S(u)||he(u)||st(u)))n.push(nt(u));else if(R(u)){s=!0;for(let l=0,d=u.length;l<d;l+=1)r(u[l],o,c+1)}else o.length&&r(u,o,c+1)}};return r(t,S(e)?e.split("."):e,0),s?n:n[0]}var f={...{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},...{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},...{location:0,threshold:.6,distance:100},...{useExtendedSearch:!1,getFn:dt,ignoreLocation:!1,ignoreFieldNorm:!1}};const ht=/[^ ]+/g;function ft(t=3){const e=new Map,n=Math.pow(10,t);return{get(s){const r=s.match(ht).length;if(e.has(r))return e.get(r);const i=1/Math.sqrt(r),o=parseFloat(Math.round(i*n)/n);return e.set(r,o),o},clear(){e.clear()}}}class J{constructor({getFn:e=f.getFn}={}){this.norm=ft(3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,s)=>{this._keysMap[n.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,S(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();S(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,s=this.size();n<s;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!k(e)||V(e))return;let s={v:e,i:n,n:this.norm.get(e)};this.records.push(s)}_addObject(e,n){let s={i:n,$:{}};this.keys.forEach((r,i)=>{let o=this.getFn(e,r.path);if(!!k(o)){if(R(o)){let c=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:u,value:l}=a.pop();if(!!k(l))if(S(l)&&!V(l)){let d={v:l,i:u,n:this.norm.get(l)};c.push(d)}else R(l)&&l.forEach((d,p)=>{a.push({nestedArrIndex:p,value:d})})}s.$[i]=c}else if(!V(o)){let c={v:o,n:this.norm.get(o)};s.$[i]=c}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function _e(t,e,{getFn:n=f.getFn}={}){const s=new J({getFn:n});return s.setKeys(t.map(me)),s.setSources(e),s.create(),s}function pt(t,{getFn:e=f.getFn}={}){const{keys:n,records:s}=t,r=new J({getFn:e});return r.setKeys(n),r.setIndexRecords(s),r}function z(t,{errors:e=0,currentLocation:n=0,expectedLocation:s=0,distance:r=f.distance,ignoreLocation:i=f.ignoreLocation}={}){const o=e/t.length;if(i)return o;const c=Math.abs(s-n);return r?o+c/r:c?1:o}function gt(t=[],e=f.minMatchCharLength){let n=[],s=-1,r=-1,i=0;for(let o=t.length;i<o;i+=1){let c=t[i];c&&s===-1?s=i:!c&&s!==-1&&(r=i-1,r-s+1>=e&&n.push([s,r]),s=-1)}return t[i-1]&&i-s>=e&&n.push([s,i-1]),n}const $=32;function mt(t,e,n,{location:s=f.location,distance:r=f.distance,threshold:i=f.threshold,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,includeMatches:a=f.includeMatches,ignoreLocation:u=f.ignoreLocation}={}){if(e.length>$)throw new Error(ct($));const l=e.length,d=t.length,p=Math.max(0,Math.min(s,d));let y=i,_=p;const g=c>1||a,E=g?Array(d):[];let w;for(;(w=t.indexOf(e,_))>-1;){let M=z(e,{currentLocation:w,expectedLocation:p,distance:r,ignoreLocation:u});if(y=Math.min(M,y),_=w+l,g){let C=0;for(;C<l;)E[w+C]=1,C+=1}}_=-1;let N=[],A=1,H=l+d;const xn=1<<l-1;for(let M=0;M<l;M+=1){let C=0,B=H;for(;C<B;)z(e,{errors:M,currentLocation:p+B,expectedLocation:p,distance:r,ignoreLocation:u})<=y?C=B:H=B,B=Math.floor((H-C)/2+C);H=B;let ze=Math.max(1,p-B+1),oe=o?d:Math.min(p+B,d)+l,T=Array(oe+2);T[oe+1]=(1<<M)-1;for(let x=oe;x>=ze;x-=1){let W=x-1,Ke=n[t.charAt(W)];if(g&&(E[W]=+!!Ke),T[x]=(T[x+1]<<1|1)&Ke,M&&(T[x]|=(N[x+1]|N[x])<<1|1|N[x+1]),T[x]&xn&&(A=z(e,{errors:M,currentLocation:W,expectedLocation:p,distance:r,ignoreLocation:u}),A<=y)){if(y=A,_=W,_<=p)break;ze=Math.max(1,2*p-_)}}if(z(e,{errors:M+1,currentLocation:p,expectedLocation:p,distance:r,ignoreLocation:u})>y)break;N=T}const ie={isMatch:_>=0,score:Math.max(.001,A)};if(g){const M=gt(E,c);M.length?a&&(ie.indices=M):ie.isMatch=!1}return ie}function yt(t){let e={};for(let n=0,s=t.length;n<s;n+=1){const r=t.charAt(n);e[r]=(e[r]||0)|1<<s-n-1}return e}class Ee{constructor(e,{location:n=f.location,threshold:s=f.threshold,distance:r=f.distance,includeMatches:i=f.includeMatches,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,isCaseSensitive:a=f.isCaseSensitive,ignoreLocation:u=f.ignoreLocation}={}){if(this.options={location:n,threshold:s,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:u},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(p,y)=>{this.chunks.push({pattern:p,alphabet:yt(p),startIndex:y})},d=this.pattern.length;if(d>$){let p=0;const y=d%$,_=d-y;for(;p<_;)l(this.pattern.substr(p,$),p),p+=$;if(y){const g=d-$;l(this.pattern.substr(g),g)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:s}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let _={isMatch:!0,score:0};return s&&(_.indices=[[0,e.length-1]]),_}const{location:r,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,ignoreLocation:u}=this.options;let l=[],d=0,p=!1;this.chunks.forEach(({pattern:_,alphabet:g,startIndex:E})=>{const{isMatch:w,score:N,indices:A}=mt(e,_,g,{location:r+E,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,includeMatches:s,ignoreLocation:u});w&&(p=!0),d+=N,w&&A&&(l=[...l,...A])});let y={isMatch:p,score:p?d/this.chunks.length:1};return p&&s&&(y.indices=l),y}}class b{constructor(e){this.pattern=e}static isMultiMatch(e){return ke(e,this.multiRegex)}static isSingleMatch(e){return ke(e,this.singleRegex)}search(){}}function ke(t,e){const n=t.match(e);return n?n[1]:null}class _t extends b{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Et extends b{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const s=e.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class kt extends b{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Mt extends b{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class It extends b{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class wt extends b{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Me extends b{constructor(e,{location:n=f.location,threshold:s=f.threshold,distance:r=f.distance,includeMatches:i=f.includeMatches,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,isCaseSensitive:a=f.isCaseSensitive,ignoreLocation:u=f.ignoreLocation}={}){super(e);this._bitapSearch=new Ee(e,{location:n,threshold:s,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Ie extends b{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,s;const r=[],i=this.pattern.length;for(;(s=e.indexOf(this.pattern,n))>-1;)n=s+i,r.push([s,n-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const Q=[_t,Ie,kt,Mt,wt,It,Et,Me],we=Q.length,xt=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,Rt="|";function St(t,e={}){return t.split(Rt).map(n=>{let s=n.trim().split(xt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=s.length;i<o;i+=1){const c=s[i];let a=!1,u=-1;for(;!a&&++u<we;){const l=Q[u];let d=l.isMultiMatch(c);d&&(r.push(new l(d,e)),a=!0)}if(!a)for(u=-1;++u<we;){const l=Q[u];let d=l.isSingleMatch(c);if(d){r.push(new l(d,e));break}}}return r})}const vt=new Set([Me.type,Ie.type]);class bt{constructor(e,{isCaseSensitive:n=f.isCaseSensitive,includeMatches:s=f.includeMatches,minMatchCharLength:r=f.minMatchCharLength,ignoreLocation:i=f.ignoreLocation,findAllMatches:o=f.findAllMatches,location:c=f.location,threshold:a=f.threshold,distance:u=f.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:s,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:c,threshold:a,distance:u},this.pattern=n?e:e.toLowerCase(),this.query=St(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],c=0;for(let a=0,u=n.length;a<u;a+=1){const l=n[a];o.length=0,i=0;for(let d=0,p=l.length;d<p;d+=1){const y=l[d],{isMatch:_,indices:g,score:E}=y.search(e);if(_){if(i+=1,c+=E,s){const w=y.constructor.type;vt.has(w)?o=[...o,...g]:o.push(g)}}else{c=0,i=0,o.length=0;break}}if(i){let d={isMatch:!0,score:c/i};return s&&(d.indices=o),d}}return{isMatch:!1,score:1}}}const X=[];function Ct(...t){X.push(...t)}function Z(t,e){for(let n=0,s=X.length;n<s;n+=1){let r=X[n];if(r.condition(t,e))return new r(t,e)}return new Ee(t,e)}const O={AND:"$and",OR:"$or"},q={PATH:"$path",PATTERN:"$val"},ee=t=>!!(t[O.AND]||t[O.OR]),Bt=t=>!!t[q.PATH],Pt=t=>!R(t)&&fe(t)&&!ee(t),xe=t=>({[O.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Re(t,e,{auto:n=!0}={}){const s=r=>{let i=Object.keys(r);const o=Bt(r);if(!o&&i.length>1&&!ee(r))return s(xe(r));if(Pt(r)){const a=o?r[q.PATH]:i[0],u=o?r[q.PATTERN]:r[a];if(!S(u))throw new Error(ot(a));const l={keyId:Y(a),pattern:u};return n&&(l.searcher=Z(u,e)),l}let c={children:[],operator:i[0]};return i.forEach(a=>{const u=r[a];R(u)&&u.forEach(l=>{c.children.push(s(l))})}),c};return ee(t)||(t=xe(t)),s(t)}function $t(t,{ignoreFieldNorm:e=f.ignoreFieldNorm}){t.forEach(n=>{let s=1;n.matches.forEach(({key:r,norm:i,score:o})=>{const c=r?r.weight:null;s*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(e?1:i))}),n.score=s})}function At(t,e){const n=t.matches;e.matches=[],!!k(n)&&n.forEach(s=>{if(!k(s.indices)||!s.indices.length)return;const{indices:r,value:i}=s;let o={indices:r,value:i};s.key&&(o.key=s.key.src),s.idx>-1&&(o.refIndex=s.idx),e.matches.push(o)})}function Lt(t,e){e.score=t.score}function Nt(t,e,{includeMatches:n=f.includeMatches,includeScore:s=f.includeScore}={}){const r=[];return n&&r.push(At),s&&r.push(Lt),t.map(i=>{const{idx:o}=i,c={item:e[o],refIndex:o};return r.length&&r.forEach(a=>{a(i,c)}),c})}class L{constructor(e,n={},s){this.options={...f,...n},this.options.useExtendedSearch,this._keyStore=new ut(this.options.keys),this.setCollection(e,s)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof J))throw new Error(it);this._myIndex=n||_e(this.options.keys,this._docs,{getFn:this.options.getFn})}add(e){!k(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let s=0,r=this._docs.length;s<r;s+=1){const i=this._docs[s];e(i,s)&&(this.removeAt(s),s-=1,r-=1,n.push(i))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:s,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let a=S(e)?S(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return $t(a,{ignoreFieldNorm:c}),i&&a.sort(o),he(n)&&n>-1&&(a=a.slice(0,n)),Nt(a,this._docs,{includeMatches:s,includeScore:r})}_searchStringList(e){const n=Z(e,this.options),{records:s}=this._myIndex,r=[];return s.forEach(({v:i,i:o,n:c})=>{if(!k(i))return;const{isMatch:a,score:u,indices:l}=n.searchIn(i);a&&r.push({item:i,idx:o,matches:[{score:u,value:i,norm:c,indices:l}]})}),r}_searchLogical(e){const n=Re(e,this.options),s=(c,a,u)=>{if(!c.children){const{keyId:l,searcher:d}=c,p=this._findMatches({key:this._keyStore.get(l),value:this._myIndex.getValueForItemAtKeyId(a,l),searcher:d});return p&&p.length?[{idx:u,item:a,matches:p}]:[]}switch(c.operator){case O.AND:{const l=[];for(let d=0,p=c.children.length;d<p;d+=1){const y=c.children[d],_=s(y,a,u);if(_.length)l.push(..._);else return[]}return l}case O.OR:{const l=[];for(let d=0,p=c.children.length;d<p;d+=1){const y=c.children[d],_=s(y,a,u);if(_.length){l.push(..._);break}}return l}}},r=this._myIndex.records,i={},o=[];return r.forEach(({$:c,i:a})=>{if(k(c)){let u=s(n,c,a);u.length&&(i[a]||(i[a]={idx:a,item:c,matches:[]},o.push(i[a])),u.forEach(({matches:l})=>{i[a].matches.push(...l)}))}}),o}_searchObjectList(e){const n=Z(e,this.options),{keys:s,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:c})=>{if(!k(o))return;let a=[];s.forEach((u,l)=>{a.push(...this._findMatches({key:u,value:o[l],searcher:n}))}),a.length&&i.push({idx:c,item:o,matches:a})}),i}_findMatches({key:e,value:n,searcher:s}){if(!k(n))return[];let r=[];if(R(n))n.forEach(({v:i,i:o,n:c})=>{if(!k(i))return;const{isMatch:a,score:u,indices:l}=s.searchIn(i);a&&r.push({score:u,key:e,value:i,idx:o,norm:c,indices:l})});else{const{v:i,n:o}=n,{isMatch:c,score:a,indices:u}=s.searchIn(i);c&&r.push({score:a,key:e,value:i,norm:o,indices:u})}return r}}L.version="6.4.6",L.createIndex=_e,L.parseIndex=pt,L.config=f,L.parseQuery=Re,Ct(bt);const Tt=t=>{let e=t.filter(r=>!r.id),[n,s]=e.reduce((r,i)=>(i.source!="Built In"?r[0].push(i):r[1].push(i),r),[[],[]]);if(s.length!=0)throw`One or more built-in entries had no ID. Please ping Yellowsink constantly with this:

\`\`\`
${s.map(r=>r.label).join(`
`)}
\`\`\``;if(n.length!=0)throw`One or more custom entries had no ID. Please disable the following entry sources:

\`\`\`
${n.map(r=>r.source).join(`
`)}
\`\`\`

The devs of those sources would likely appreciate this info too:

\`\`\`
${n.map(r=>r.label).join(`
`)}
\`\`\``},Se=(t,e)=>{let n=[];return e.forEach((s,r)=>{let i=t.findIndex(o=>o.id==r);i!=-1&&(n.push([t[i],s]),t.splice(i,1))}),n=n.sort((s,r)=>r[1]-s[1]).map(s=>s[0]),n.concat(t)},Ot=(t,e)=>{Tt(t);const n={threshold:.5,useExtendedSearch:!0,keys:["label","id"]};return new L(t,n).search(e).map(s=>s.item)};var Dt=(t,e,n)=>{if(!n||n=="")return Se(t,e);let s=Ot(t,n);return Se(s,e)};const K=m.findByProps("ModalCloseButton"),ve=m.findByProps("Sizes","Tags"),be=m.findByDisplayName("Flex"),{openModal:Ft}=m.findByProps("openModalLazy"),jt=m.findByDisplayName("FormSection");m.findByProps("Sizes","Colors","Looks","DropdownSizes");const Ut=m.findByProps("rules"),zt=({err:t,e})=>h.React.createElement(G.ErrorBoundary,null,h.React.createElement(K.ModalRoot,{transitionState:e.transitionState,size:"small",className:"ysink_palette_errormodal"},h.React.createElement(K.ModalHeader,{separator:!1},h.React.createElement(be.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},h.React.createElement(ve,{tag:"h2",size:ve.Sizes.SIZE_20},"We screwed up!!!")),h.React.createElement(be.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},h.React.createElement(K.ModalCloseButton,{onClick:e.onClose}))),h.React.createElement(K.ModalContent,null,h.React.createElement(jt,null,h.React.createElement(Ut,null,t)))));var Kt=t=>Ft(e=>h.React.createElement(zt,{e,err:t}));const Ht=h.React.useState,{openModal:Wt}=m.findByProps("openModalLazy"),Ce=m.findByProps("ModalCloseButton"),Gt=m.findByDisplayName("TextInput"),Vt=({e:t,prompt:e,nest:n,defaultEntries:s,closeAction:r,markdown:i})=>{let[o,c]=Ht({selected:0,search:""}),a=n?s.concat(n.ghost.customEntries):s,u=n?n.ghost.usageCounts:new Map;const l=g=>{let E=o.selected;c({selected:E,search:g})},d=g=>{let E=o.search;c({selected:g,search:E})};let p=[];try{p=Dt(a,u,o.search)}catch(g){l(""),Kt(g)}const y=()=>{t.onClose();let g=p[o.selected];if(n){let E=n.ghost.usageCounts,w=E.get(g.id)??0;E.set(g.id,w+1),n.store.usageCounts=E}g.action()},_=g=>{switch(g.which){case 38:o.selected>0?d(o.selected-1):d(p.length-1);break;case 40:o.selected<p.length-1?d(o.selected+1):d(0);break;case 13:y();break;default:document.getElementsByClassName("ysink_palette_input")[0].children[0].focus();break}document.getElementById(`palette_item_${o.selected}`)?.scrollIntoView(!1)};return t.transitionState==3&&r&&r(),h.React.createElement(G.ErrorBoundary,null,h.React.createElement(Ce.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal",onKeyDown:_},h.React.createElement(Ce.ModalContent,{className:"ysink_palette_palette"},i?h.React.createElement(de,null,i):[],h.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",h.React.createElement(Gt,{className:"ysink_palette_input",placeholder:e??"Search Actions",type:"text",value:o.search,onChange:g=>l(g)})),h.React.createElement("div",{className:"ysink_palette_scrollcontainer"},p.filter(g=>g&&(g.condition?.()??!0)).map((g,E)=>h.React.createElement(Ze,{entry:g,id:`palette_item_${E}`,selected:E==o.selected,icon:g.icon,hover:()=>d(E),finish:y}))))))};let v=(t,e,n,s,r)=>Wt(i=>h.React.createElement(Vt,{e:i,prompt:t,nest:e,defaultEntries:n,closeAction:r,markdown:s})),Yt=(t,e,n)=>new Promise((s,r)=>{v(t,null,e.map(i=>({label:i,action:()=>s(i)})),n,()=>r("user closed palette"))});const Jt="\u{1F389} Welcome to **Command Palette**! \u{1F389} Start typing to pick an item from the list, or visit the API Docs to start building custom actions at https://yellowsink.github.io/cc-plugins/palette-docs";var Qt=(t,e,n)=>{let s=r=>{if(e.ghost.pickingBind)return;let i=t.ghost.keyBind;if((r.ctrlKey||r.metaKey)==i.ctrlMeta&&r.shiftKey==i.shift&&r.which==i.code){let c=t.ghost.doNotShowWelcome?null:Jt;v(null,t,n,c),t.store.doNotShowWelcome=!0}};return document.addEventListener("keyup",s),()=>{document.removeEventListener("keyup",s)}};const{getGuildPermissions:Xt}=m.findByProps("getGuildPermissions"),{getLastSelectedGuildId:I}=m.findByProps("getLastSelectedGuildId"),Be=(t,e)=>{let n=Xt({id:t});return!!(n&&(n&e)!=0)},Zt=()=>Be(I(),BigInt(4)),qt=()=>Be(I(),BigInt(2)),en=h.React.useState,{openModal:tn}=m.findByProps("openModalLazy"),Pe=m.findByProps("ModalCloseButton"),nn=m.findByDisplayName("TextInput"),sn=({e:t,prompt:e,finishAction:n,closeAction:s,markdown:r})=>{let[i,o]=en("");return h.React.createElement(G.ErrorBoundary,null,h.React.createElement(Pe.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal ysink_palette_textentrymodal",onKeyDown:c=>{c.which==13&&(t.onClose(),n(i))}},h.React.createElement(Pe.ModalContent,{className:"ysink_palette_palette"},r?h.React.createElement(de,null,r):[],h.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",h.React.createElement(nn,{className:"ysink_palette_input",placeholder:e,type:"text",value:i,onChange:c=>o(c),onBlur:()=>s()})))))},D=(t,e,n,s)=>tn(r=>h.React.createElement(sn,{e:r,prompt:t,finishAction:e,markdown:n,closeAction:s})),$e=(t,e)=>new Promise((n,s)=>{D(t,n,e,()=>s("user closed textentry"))}),{getMembers:Ae}=m.findByProps("getMembers"),{getUser:Le}=m.findByProps("getUser"),{banUser:rn,kickUser:on}=m.findByProps("banUser"),Ne="Built In",Te="\u{1F6E0}";var cn=[{source:Ne,icon:Te,id:"moderation_banuser",label:"Ban user from current guild",condition:Zt,action:async()=>{v("Which user to ban?",null,await Promise.all(Ae(I()).map(async t=>{let e=await Le(t.userId),n=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${n} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>D("Enter ban reason",s=>{rn(I(),t.userId,null,s)})}})))}},{source:Ne,icon:Te,id:"moderation_kickuser",label:"Kick user from current guild",condition:qt,action:async()=>{v("Which user to kick?",null,await Promise.all(Ae(I()).map(async t=>{let e=await Le(t.userId),n=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${n} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>D("Enter kick reason",s=>{on(I(),t.userId,s)})}})))}}];const F="Built In",j="\u{1F4A7}";var an=[{source:F,icon:j,id:"cumcord_installplug",label:"Install plugin from URL",action:async()=>{try{let t=await $e("Enter URL");await P.default.importPlugin(t),ce.showToast({title:"Installed plugin",duration:3e3})}catch{}}},{source:F,icon:j,id:"cumcord_removeplug",label:"Remove plugin",action:()=>{let t=Object.keys(P.default.installed.ghost).map(e=>[e,P.default.installed.ghost[e]]);v("Choose plugin to remove",null,t.map(e=>({id:e[0],label:e[1].manifest.name,action:()=>P.default.removePlugin(e[0])})))}},{source:F,icon:j,id:"cumcord_toggleplug",label:"Toggle plugin",action:()=>{let t=Object.keys(P.default.installed.ghost).map(e=>[e,P.default.installed.ghost[e]]);v("Choose plugin to toggle",null,t.map(e=>({id:e[0],label:(e[1].enabled?"\u{1F7E2} ":"\u{1F534} ")+e[1].manifest.name,action:()=>P.default.togglePlugin(e[0])})))}},{source:F,icon:j,id:"cumcord_uninject",label:"Uninject Cumcord",action:()=>setTimeout(async()=>{await We.showConfirmationModal({header:"Really uninject Cumcord?",content:"This will disable all of your plugins, and Cumcord will be completely removed",type:"danger",confirmText:"Uninject",cancelText:"Actually, never mind"})&&Ge.uninject()},500)},{source:F,icon:j,id:"cumcord_toggle_dev",label:"Toggle DevMode",action:Ve.toggleDevMode}];const Oe="Built In",De="\u267B";var ln=[{source:Oe,icon:De,id:"reboot_reload",label:"Reload Discord",action:()=>window.location.reload()},{source:Oe,icon:De,id:"reboot_relaunch",label:"Relaunch Discord to updater",condition:()=>window.DiscordNative,action:()=>window.DiscordNative.app.relaunch()}];const{getMembers:un}=m.findByProps("getMembers"),{getUser:dn}=m.findByProps("getUser"),{openUserProfileModal:Fe}=m.findByProps("openUserProfileModal"),hn=m.find(t=>t?.default?.open).default.open,{UserSettingsSections:fn}=m.findByProps("UserSettingsSections"),te="Built In",ne="\u{1F680}";var pn=[{source:te,icon:ne,id:"navigate_user_profile_id",label:"Open user profile by ID",action:()=>{D("Enter user ID",t=>{setTimeout(()=>{try{Fe({userId:t})}catch{ce.showToast({title:"Failed! - Is the user ID correct?",duration:3e3})}},200)})}},{source:te,icon:ne,id:"navigate_user_profile_server",label:"Open user profile from current server",action:async()=>{v("Which profile to open?",null,await Promise.all(un(I()).map(async t=>{let e=await dn(t.userId),n=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${n} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>setTimeout(()=>Fe({userId:t.userId}),200)}})))}},{source:te,icon:ne,id:"navigate_user_settings",label:"Open user settings",action:()=>{v("Which section to open?",null,Object.values(fn).map(t=>({id:t,label:t,action:()=>hn(t)})))}}];const{updateChannelOverrideSettings:gn}=m.findByProps("updateChannelOverrideSettings"),{getCurrentChannelSettings:mn}=m.findByProps("getCurrentChannelSettings"),{getChannelId:je}=m.findByProps("getChannelId","getVoiceChannelId"),{updateGuildNotificationSettings:yn}=m.findByProps("updateGuildNotificationSettings"),{isMuted:_n}=m.findByProps("getMuteConfig"),Ue="Built In";var En=[{source:Ue,icon:"\u{1F507}",id:"misc_toggle_channel_mute",label:"Toggle current channel mute",action:()=>{let t=mn(I(),je()).channel_is_muted;gn(I(),je(),{muted:!t,suppress_everyone:!t,suppress_roles:!t})}},{source:Ue,icon:"\u{1F507}",id:"misc_toggle_guild_mute",label:"Toggle current guild mute",action:()=>{let t=_n(I());yn(I(),{muted:!t,suppress_everyone:!t,suppress_roles:!t})}}];const kn="Built In",se=cn.concat(an).concat(ln).concat(pn).concat(En);var Mn=t=>(window.commandPalette={openPalette:(e,n,s)=>{v(e,null,n,s)},openPaletteAsync:Yt,openTextEntry:(e,n,s)=>D(e,n),openTextEntryAsync:$e,registerEntry(e,n,s,r,i,o){if(!n||n=="")throw"Register failed: Please supply an ID (string) for your entry";if(!e||e=="")throw"Register failed: Please identify a source (string) for your entry";if(!s||s=="")throw"Register failed: Please supply a label (string) for your entry";if(!i)throw"Register failed: Please supply an action (JS function) for your entry";if(e==kn)throw"Register failed: That source is reserved for built in entries";if(se.find(a=>a.id==n)!=null)throw"Register failed: Entry ID taken by a built in entry";let c=t.ghost.customEntries.findIndex(a=>a.id==n);if(c!=-1)throw`Register failed: Entry ID taken by entry from source ${t.ghost.customEntries[c].source}`;t.ghost.customEntries.push({id:n,source:e,label:s,action:i,icon:r,console})},unregisterEntry(e,n){if(!n||n=="")throw"Unregister failed: Please supply an ID (string) to deregister";if(!e||e=="")throw"Unregister failed: Please identify your source (string)";let s=t.ghost.customEntries,r=s.findIndex(o=>o.id==n);if(r==-1)throw"Unregister failed: No entry with that ID could be found";if(s[r].source!=e)throw"Unregister failed: An entry with that ID was found, but was not from your source";let i=s[r];return s.splice(r,1),t.store.customEntries=s,i},unregisterSource(e){let n=t.ghost.customEntries,s=n.filter(r=>r.source!=e);if(s.length!=n.length)return t.store.customEntries=s,n.filter(r=>r.source==e)},getEntries:()=>se.concat(t.ghost.customEntries)},ae.log("|| COMMAND PALETTE || Initialised window.commandPalette API"),()=>{window.commandPalette=void 0,delete window.commandPalette,ae.log("|| COMMAND PALETTE || Disposed window.commandPalette API")});const re=m.findByDisplayName("FormText"),U=m.findByProps("Sizes","Colors","Looks","DropdownSizes");var In=({persist:t,stateNest:e})=>{if(le.useNest(e),le.useNest(t),e.ghost.pickingBind){const n=s=>{t.store.keyBind.code=s.which,e.store.pickingBind=!1};document.addEventListener("keyup",n,{once:!0})}return e.ghost.pickingBind&&setTimeout(()=>{e.ghost.pickingBind&&(e.store.pickingBind=!1)},1e4),h.React.createElement("div",{className:"ysink_palette_settings_container"},h.React.createElement("div",{className:"ysink_palette_settings"},h.React.createElement(re,{className:"ysink_palette_slabel"},"Keycode: ",String.fromCharCode(t.ghost.keyBind.code)),h.React.createElement(U,{className:"ysink_palette_sbutton",size:U.Sizes.TINY,color:e.ghost.pickingBind?U.Colors.RED:U.Colors.GREEN,look:U.Looks.OUTLINED,onClick:()=>e.store.pickingBind=!e.ghost.pickingBind},e.ghost.pickingBind?"Cancel":"Change"),h.React.createElement(re,{className:"ysink_palette_slabel"},"Shift"),h.React.createElement("input",{className:"ysink_palette_sinput",type:"checkbox",onChange:n=>t.store.keyBind.shift=n.target.checked,checked:t.ghost.keyBind.shift,disabled:e.ghost.pickingBind}),h.React.createElement(re,{className:"ysink_palette_slabel"},"Ctrl / Meta / Cmd \u2318"),h.React.createElement("input",{className:"ysink_palette_sinput",type:"checkbox",onChange:n=>t.store.keyBind.ctrlMeta=n.target.checked,checked:t.ghost.keyBind.ctrlMeta,disabled:e.ghost.pickingBind})))},wn=({persist:t,id:e})=>{t.store.customEntries=[],t.ghost.usageCounts||(t.store.usageCounts=new Map),t.ghost.keyBind||(t.store.keyBind={ctrlMeta:!0,shift:!0,code:80});let n=Je.nests.make({pickingBind:!1}),s=[Xe(),Qt(t,n,se),Mn(t)];return{onLoad(){},onUnload(){t.store.customEntries=[],delete t.store.customEntries,s.forEach(r=>r())},settings:Qe.default.createElement(In,{persist:t,stateNest:n})}};return wn})(cumcord.modules.webpack,cumcord.ui.components,cumcord.modules.common,cumcord.plugins,cumcord.ui.toasts,cumcord.ui.modals,cumcord,cumcord.dev,cumcord.utils.logger,cumcord.utils,cumcord.modules.common.React,cumcord.modules.internal);
