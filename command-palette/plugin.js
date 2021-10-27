(function(s,v,r,H,P,V,J,Y,R){"use strict";function Z(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var g=Z(H),q=()=>cumcord.patcher.injectCSS(".ysink_palette_modal{position:absolute;top:5rem;left:0;width:100vw;display:flex;align-items:center;background:none!important;box-shadow:none!important}.ysink_palette_modal.ysink_palette_textentrymodal{min-height:0}.ysink_palette_palette{width:50rem;background-color:var(--background-secondary);color:#fff;padding:.75rem 0 0;border-radius:0;overflow:unset!important}.ysink_palette_item{padding:.3rem 1rem .3rem .5rem;transition:background-color .15s;display:flex}.ysink_palette_icon{width:1.5rem;display:inline-block;text-align:center}.ysink_palette_icon_container{width:1.5rem;display:inline-flex;justify-content:center}.ysink_palette_icon_container>img{height:1rem}.ysink_palette_iconseparator{border:solid 1px #ffffff55;margin:-.3rem .5rem}.ysink_palette_item.ysink_palette_selected{background-color:#0005}.ysink_palette_input_wrapper{margin:0 .5rem 1rem;border:#ffffff33 solid 1px;display:flex;align-items:center;padding-left:.5rem}.ysink_palette_input{flex:1;margin-left:.5rem}.ysink_palette_input input{border:none!important;background:none!important;padding:0!important}.ysink_palette_source{text-transform:uppercase;font-style:italic;color:#aaa}.ysink_palette_scrollcontainer{overflow:hidden scroll;max-height:30rem;padding-bottom:.75rem}.ysink_palette_scrollcontainer::-webkit-scrollbar{width:1rem;background-color:#0003}.ysink_palette_scrollcontainer::-webkit-scrollbar-thumb{background-color:#fff3;min-height:40px}.ysink_palette_md{margin:0 .5rem 1rem;padding:.5rem;background-color:#fff1;border:1px solid #ffffff33}.ysink_palette_md>*>:last-child{margin-bottom:0}"),Q=({entry:e,selected:t,id:n,icon:a,finish:o,hover:i})=>{a||(a="");let l=!1;try{new URL(a),l=!0}catch{}return r.React.createElement("div",{className:t?"ysink_palette_item ysink_palette_selected":"ysink_palette_item",id:n,onClick:o,onMouseOver:i},l?r.React.createElement("div",{className:"ysink_palette_icon_container"},r.React.createElement("img",{src:a})):r.React.createElement("span",{className:"ysink_palette_icon"},a),r.React.createElement("span",{className:"ysink_palette_iconseparator"}),e.label,r.React.createElement("div",{style:{flex:1}}),r.React.createElement("span",{className:"ysink_palette_source"},e.source))};const X=s.findByProps("rules");var C=({children:e})=>r.React.createElement("div",{class:"ysink_palette_md"},r.React.createElement(X,null,e));const B=(e,t)=>{let n=[];return t.forEach((a,o)=>{let i=e.findIndex(l=>l.id==o);i!=-1&&(n.push([e[i],a]),e.splice(i,1))}),n=n.sort((a,o)=>o[1]-a[1]).map(a=>a[0]),n.concat(e)},ee=(e,t)=>{let n=e.filter(a=>!a.id);if(n.length!=0)throw`One or more entry had no ID. If you have custom entries, disable the plugins providing them.
If you do not, please ping Yellowsink constantly with this:

\`\`\`
${n.map(a=>a.label).join(`
`)}
\`\`\``;return e.filter(a=>a.id.toLowerCase().includes(t.toLowerCase())||a.label.toLowerCase().includes(t.toLowerCase()))};var te=(e,t,n)=>{if(!n||n=="")return B(e,t);let a=ee(e,n);return B(a,t)};const k=s.findByProps("ModalCloseButton"),M=s.findByProps("Sizes","Tags"),b=s.findByDisplayName("Flex"),{openModal:ne}=s.findByProps("openModalLazy"),ae=s.findByDisplayName("FormSection");s.findByProps("Sizes","Colors","Looks","DropdownSizes");const re=s.findByProps("rules"),oe=({err:e,e:t})=>r.React.createElement(v.ErrorBoundary,null,r.React.createElement(k.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_errormodal"},r.React.createElement(k.ModalHeader,{separator:!1},r.React.createElement(b.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},r.React.createElement(M,{tag:"h2",size:M.Sizes.SIZE_20},"We screwed up!!!")),r.React.createElement(b.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},r.React.createElement(k.ModalCloseButton,{onClick:t.onClose}))),r.React.createElement(k.ModalContent,null,r.React.createElement(ae,null,r.React.createElement(re,null,e)))));var se=e=>ne(t=>r.React.createElement(oe,{e:t,err:e}));const ie=r.React.useState,{openModal:le}=s.findByProps("openModalLazy"),$=s.findByProps("ModalCloseButton"),ce=s.findByDisplayName("TextInput"),de=({e,prompt:t,nest:n,defaultEntries:a,closeAction:o,markdown:i})=>{let[l,p]=ie({selected:0,search:""}),_=n?a.concat(n.ghost.customEntries):a,Ne=n?n.ghost.usageCounts:new Map;const W=c=>{let d=l.selected;p({selected:d,search:c})},E=c=>{let d=l.search;p({selected:c,search:d})};let w=[];try{w=te(_,Ne,l.search)}catch(c){W(""),se(c)}const G=()=>{e.onClose();let c=w[l.selected];if(n){let d=n.ghost.usageCounts,Ue=d.get(c.id)??0;d.set(c.id,Ue+1),n.store.usageCounts=d}c.action()},Te=c=>{switch(c.which){case 38:l.selected>0?E(l.selected-1):E(w.length-1);break;case 40:l.selected<w.length-1?E(l.selected+1):E(0);break;case 13:G();break;default:document.getElementsByClassName("ysink_palette_input")[0].children[0].focus();break}document.getElementById(`palette_item_${l.selected}`)?.scrollIntoView(!1)};return e.transitionState==3&&o&&o(),r.React.createElement(v.ErrorBoundary,null,r.React.createElement($.ModalRoot,{transitionState:e.transitionState,size:"small",className:"ysink_palette_modal",onKeyDown:Te},r.React.createElement($.ModalContent,{className:"ysink_palette_palette"},i?r.React.createElement(C,null,i):[],r.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",r.React.createElement(ce,{className:"ysink_palette_input",placeholder:t??"Search Actions",type:"text",value:l.search,onChange:c=>W(c)})),r.React.createElement("div",{className:"ysink_palette_scrollcontainer"},w.filter(c=>c&&(c.condition?.()??!0)).map((c,d)=>r.React.createElement(Q,{entry:c,id:`palette_item_${d}`,selected:d==l.selected,icon:c.icon,hover:()=>E(d),finish:G}))))))};let f=(e,t,n,a,o)=>le(i=>r.React.createElement(de,{e:i,prompt:e,nest:t,defaultEntries:n,closeAction:o,markdown:a})),ue=(e,t,n)=>new Promise((a,o)=>{f(e,null,t.map(i=>({label:i,action:()=>a(i)})),n,()=>o("user closed palette"))});var pe=(e,t)=>{let n=a=>{if((a.ctrlKey||a.metaKey)&&a.shiftKey&&a.which==80){let o=e.ghost.doNotShowWelcome?null:"\u{1F389} Welcome to **Command Palette**! \u{1F389} Start typing to pick an item from the list,or visit the API Docs to start building custom actions at https://yellowsink.github.io/cc-plugins/palette-docs";f(null,e,t,o),e.store.doNotShowWelcome=!0}};return document.addEventListener("keyup",n),()=>{document.removeEventListener("keyup",n)}};const{getGuildPermissions:fe}=s.findByProps("getGuildPermissions"),{getLastSelectedGuildId:u}=s.findByProps("getLastSelectedGuildId"),x=(e,t)=>{let n=fe({id:e});return!!(n&&(n&t)!=0)},ge=()=>x(u(),BigInt(4)),ye=()=>x(u(),BigInt(2)),me=r.React.useState,{openModal:he}=s.findByProps("openModalLazy"),S=s.findByProps("ModalCloseButton"),_e=s.findByDisplayName("TextInput"),Ee=({e,prompt:t,finishAction:n,closeAction:a,markdown:o})=>{let[i,l]=me("");return r.React.createElement(v.ErrorBoundary,null,r.React.createElement(S.ModalRoot,{transitionState:e.transitionState,size:"small",className:"ysink_palette_modal ysink_palette_textentrymodal",onKeyDown:p=>{p.which==13&&(e.onClose(),n(i))}},r.React.createElement(S.ModalContent,{className:"ysink_palette_palette"},o?r.React.createElement(C,null,o):[],r.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",r.React.createElement(_e,{className:"ysink_palette_input",placeholder:t,type:"text",value:i,onChange:p=>l(p),onBlur:()=>a()})))))},y=(e,t,n,a)=>he(o=>r.React.createElement(Ee,{e:o,prompt:e,finishAction:t,markdown:n,closeAction:a})),D=(e,t)=>new Promise((n,a)=>{y(e,n,t,()=>a("user closed textentry"))}),{getMembers:N}=s.findByProps("getMembers"),{getUser:T}=s.findByProps("getUser"),{banUser:we,kickUser:ke}=s.findByProps("banUser"),U="Built In",L="\u{1F6E0}";var ve=[{source:U,icon:L,id:"moderation_banuser",label:"Ban user from current guild",condition:ge,action:async()=>{f("Which user to ban?",null,await Promise.all(N(u()).map(async e=>{let t=await T(e.userId),n=e.nick?`[${e.nick}]`:"";return{id:e.userId,label:`${t.username}#${t.discriminator} ${n} (${e.userId})`,icon:`https://cdn.discordapp.com/avatars/${e.userId}/${t.avatar}.webp`,action:()=>y("Enter ban reason",a=>{we(u(),e.userId,null,a)})}})))}},{source:U,icon:L,id:"moderation_kickuser",label:"Kick user from current guild",condition:ye,action:async()=>{f("Which user to kick?",null,await Promise.all(N(u()).map(async e=>{let t=await T(e.userId),n=e.nick?`[${e.nick}]`:"";return{id:e.userId,label:`${t.username}#${t.discriminator} ${n} (${e.userId})`,icon:`https://cdn.discordapp.com/avatars/${e.userId}/${t.avatar}.webp`,action:()=>y("Enter kick reason",a=>{ke(u(),e.userId,a)})}})))}}];const m="Built In",h="\u{1F4A7}";var Ie=[{source:m,icon:h,id:"cumcord_installplug",label:"Install plugin from URL",action:async()=>{try{let e=await D("Enter URL");await g.default.importPlugin(e),P.showToast({title:"Installed plugin",duration:3e3})}catch{}}},{source:m,icon:h,id:"cumcord_removeplug",label:"Remove plugin",action:()=>{let e=Object.keys(g.default.installed.ghost).map(t=>[t,g.default.installed.ghost[t]]);f("Choose plugin to remove",null,e.map(t=>({id:t[0],label:t[1].manifest.name,action:()=>g.default.removePlugin(t[0])})))}},{source:m,icon:h,id:"cumcord_toggleplug",label:"Toggle plugin",action:()=>{let e=Object.keys(g.default.installed.ghost).map(t=>[t,g.default.installed.ghost[t]]);f("Choose plugin to toggle",null,e.map(t=>({id:t[0],label:(t[1].enabled?"\u{1F7E2} ":"\u{1F534} ")+t[1].manifest.name,action:()=>g.default.togglePlugin(t[0])})))}},{source:m,icon:h,id:"cumcord_uninject",label:"Uninject Cumcord",action:()=>setTimeout(async()=>{await V.showConfirmationModal({header:"Really uninject Cumcord?",content:"This will disable all of your plugins, and Cumcord will be completely removed",type:"danger",confirmText:"Uninject",cancelText:"Actually, never mind"})&&J.uninject()},500)},{source:m,icon:h,id:"cumcord_toggle_dev",label:"Toggle DevMode",action:Y.toggleDevMode}];const A="Built In",F="\u267B";var Pe=[{source:A,icon:F,id:"reboot_reload",label:"Reload Discord",action:()=>window.location.reload()},{source:A,icon:F,id:"reboot_relaunch",label:"Relaunch Discord to updater",condition:()=>window.DiscordNative,action:()=>window.DiscordNative.app.relaunch()}];const{getMembers:Re}=s.findByProps("getMembers"),{getUser:Ce}=s.findByProps("getUser"),{openUserProfileModal:j}=s.findByProps("openUserProfileModal"),z="Built In",O="\u{1F680}";var Be=[{source:z,icon:O,id:"navigate_user_profile_id",label:"Open user profile by ID",action:()=>{y("Enter user ID",e=>{setTimeout(()=>{try{j({userId:e})}catch{P.showToast({title:"Failed! - Is the user ID correct?",duration:3e3})}},200)})}},{source:z,icon:O,id:"navigate_user_profile_server",label:"Open user profile from current server",action:async()=>{f("Which profile to open?",null,await Promise.all(Re(u()).map(async e=>{let t=await Ce(e.userId),n=e.nick?`[${e.nick}]`:"";return{id:e.userId,label:`${t.username}#${t.discriminator} ${n} (${e.userId})`,icon:`https://cdn.discordapp.com/avatars/${e.userId}/${t.avatar}.webp`,action:()=>setTimeout(()=>j({userId:e.userId}),200)}})))}}];const{updateChannelOverrideSettings:Me}=s.findByProps("updateChannelOverrideSettings"),{getCurrentChannelSettings:be}=s.findByProps("getCurrentChannelSettings"),{getChannelId:K}=s.findByProps("getChannelId","getVoiceChannelId");var $e=[{source:"Built In",icon:"\u{1F507}",id:"misc_toggle_channel_mute",label:"Toggle current channel mute",action:()=>{let e=be(u(),K()).channel_is_muted;Me(u(),K(),{muted:!e,suppress_everyone:!e,suppress_roles:!e})}}];const xe="Built In",I=ve.concat(Ie).concat(Pe).concat(Be).concat($e);var Se=e=>(window.commandPalette={openPalette:(t,n,a)=>{f(t,null,n,a)},openPaletteAsync:ue,openTextEntry:(t,n,a)=>y(t,n),openTextEntryAsync:D,registerEntry(t,n,a,o,i,l){if(!n||n=="")throw"Register failed: Please supply an ID (string) for your entry";if(!t||t=="")throw"Register failed: Please identify a source (string) for your entry";if(!a||a=="")throw"Register failed: Please supply a label (string) for your entry";if(!i)throw"Register failed: Please supply an action (JS function) for your entry";if(t==xe)throw"Register failed: That source is reserved for built in entries";if(I.find(_=>_.id==n)!=null)throw"Register failed: Entry ID taken by a built in entry";let p=e.ghost.customEntries.findIndex(_=>_.id==n);if(p!=-1)throw`Register failed: Entry ID taken by entry from source ${e.ghost.customEntries[p].source}`;e.ghost.customEntries.push({id:n,source:t,label:a,action:i,icon:o,console})},unregisterEntry(t,n){if(!n||n=="")throw"Unregister failed: Please supply an ID (string) to deregister";if(!t||t=="")throw"Unregister failed: Please identify your source (string)";let a=e.ghost.customEntries,o=a.findIndex(l=>l.id==n);if(o==-1)throw"Unregister failed: No entry with that ID could be found";if(a[o].source!=t)throw"Unregister failed: An entry with that ID was found, but was not from your source";let i=a[o];return a.splice(o,1),e.store.customEntries=a,i},unregisterSource(t){let n=e.ghost.customEntries,a=n.filter(o=>o.source!=t);if(a.length!=n.length)return e.store.customEntries=a,n.filter(o=>o.source==t)},getEntries:()=>I.concat(e.ghost.customEntries)},R.log("|| COMMAND PALETTE || Initialised window.commandPalette API"),()=>{window.commandPalette=void 0,delete window.commandPalette,R.log("|| COMMAND PALETTE || Disposed window.commandPalette API")}),De=({persist:e,id:t})=>{e.store.customEntries=[],e.ghost.usageCounts||(e.store.usageCounts=new Map);let n=[q(),pe(e,I),Se(e)];return{onUnload:()=>{e.store.customEntries=[],delete e.store.customEntries,n.forEach(a=>a())}}};return De})(cumcord.modules.webpack,cumcord.ui.components,cumcord.modules.common,cumcord.plugins,cumcord.ui.toasts,cumcord.ui.modals,cumcord,cumcord.dev,cumcord.utils.logger);
