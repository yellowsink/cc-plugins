(function(i,f,l){"use strict";function u(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var o=u(i),h=u(l);const d=/[^\S\r\n]*?\r?\n[^\S\r\n]*?\*[^\S\r\n]?/,p=/^\\@/;function m(t){try{return JSON.parse(t)}catch{}}function w(t){const e=t.split(`
`)[0];if(e.includes("//META"))return g(t);if(e.includes("/**"))return E(t);throw new Error("META was not found.")}function g(t){const e=t.split(`
`)[0],a=e.substring(e.lastIndexOf("//META")+6,e.lastIndexOf("*//")),n=m(a);if(!n)throw new Error("META could not be parsed.");if(!n.name)throw new Error("META missing name data.");return n}function E(t){const e=t.split("/**",2)[1].split("*/",1)[0],a={};let n="",r="";for(const s of e.split(d))if(s.length!==0)if(s.charAt(0)==="@"&&s.charAt(1)!==" "){a[n]=r;const c=s.indexOf(" ");n=s.substr(1,c-1),r=s.substr(c+1)}else r+=" "+s.replace("\\n",`
`).replace(p,"@");return a[n]=r.trim(),delete a[""],a}var S=async(t,e)=>{const a=await(await fetch(new URL(t,e).href)).text();return{id:`${e}___${t}`,CSS:a,...w(a)}};async function M(t){const e=new URL("repo.json",t).href,a=await(await fetch(e)).json();if(!a.themes||a.themes?.length===0)throw new Error("No themes found in repo");if(!a.meta)throw new Error("No repo metadata");if(!a?.meta.name)throw new Error("Repo did not have a name");return a}var T=async t=>{const e=await M(t),a=await Promise.all(e.themes.map(n=>S(n,t)));return{manifest:e,themes:a}};function v(t){if(!t?.id||!t.CSS)throw new Error("theme was missing either id or css.");const e=f.injectCSS(t.CSS);o.default.state.ghost.unpatchCache.set(t.id,e)}function y(){o.default.state.ghost.unpatchCache.forEach(t=>t?.()),o.default.state.ghost.unpatchCache.clear()}var A=async()=>{const t=i.persist.ghost.repos,e=await Promise.all(t.map(async r=>[r,await T(r)])),a=[];e.forEach(([r,s])=>{a.push(...s.themes.map(c=>({...c,repoUrl:r})))});const n=i.persist.ghost.themes.filter(r=>r.enabled);return a.filter(r=>n.some(s=>r.id===s.id)).forEach(v),y},R=()=>(o.default.state=h.default.make({unpatchCache:new Map}),()=>{o.default.state=void 0,delete o.default.state}),_=({persist:t})=>{let e=[];return{onLoad:async()=>{e.push(R(),await A())},onUnload:()=>e.reduceRight((a,n)=>n?.(),null)}};return _})(cumcord.pluginData,cumcord.patcher,cumcord.modules.internal.nests);
