(function(m,l,i,v,w,c){"use strict";function y(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var s=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var r=y(m),f=()=>l.injectCSS(".ysink_hypesquad_container{display:flex;justify-content:space-around;margin-top:1rem}.ysink_hypesquad_container.ysink_new>button{margin-right:1rem}.ysink_hypesquad_container.ysink_new>button:last-child{margin-right:unset}.ysink_hypesquad_text{margin-top:.5rem;font-style:italic;font-size:1rem;text-align:center;color:#fff}");const u=i.findByProps("Sizes","Colors","Looks","DropdownSizes"),_=i.findByDisplayName("Text");function E(e){i.findByProps("joinHypeSquadOnline").joinHypeSquadOnline({houseID:"HOUSE_"+e})}const p=({houseNum:e})=>r.createElement(u,{color:u.Colors.GREY,onClick:()=>E(e)},i.findByProps("getQuestions").getHouseNameFromHouseID("HOUSE_"+e)),S=()=>r.createElement("div",null,r.createElement(_,{className:"ysink_hypesquad_text"},"Or, choose from below:"),r.createElement("div",{className:"ysink_hypesquad_container"},[1,2,3].map(e=>r.createElement(p,{houseNum:e}))));var g=(e,t)=>{let n=e.some(a=>c.loaded.ghost.hasOwnProperty(a))?t():null;const s=(a,{path:d})=>{e.includes(d[0])&&(n?.(),n=t())},o=(a,{path:d})=>{e.includes(d[0])&&(n?.(),n=null)};return c.loaded.on("SET",s),c.loaded.on("DELETE",o),()=>{n?.(),c.loaded.off("SET",s),c.loaded.off("DELETE",o)}};const q=["https://yellowsink.github.io/discord-command-palette/","https://cumcordplugins.github.io/Condom/yellowsink.github.io/discord-command-palette/"],h="HypeSquad Switcher",B=()=>{function e(t){i.findByProps("joinHypeSquadOnline").joinHypeSquadOnline({houseID:"HOUSE_"+t})}return commandPalette.registerEntry({source:h,id:"ysink_hypesquad_switch",label:"Switch HypeSquad house",icon:"\u{1F3E0}",action:async()=>{try{switch(await commandPalette.openPaletteAsync("Choose a house",["Bravery","Brilliance","Balance"])){case"Bravery":e(1);break;case"Brilliance":e(2);break;case"Balance":e(3);break;default:break}}catch{}}}),()=>window.commandPalette?.unregisterSource(h)};var H=()=>g(q,B),O=e=>{let t=[];return{onLoad(){t.push(f(),H());let n=i.findByDisplayName("JoinHypeSquadCTA").prototype;t.push(l.after("render",n,(s,o)=>{let a=o?.props?.children?.props?.children,d=o?.props?.children?.[0]?.props?.children?.[1]?.props?.children?.props?.children;if(a)return o.props.children.props.children.push(r.createElement(S,null)),o;if(d)return o.props.children[0].props.children[1].props.children=[o.props.children[0].props.children[1].props.children],o.props.children[0].props.children[1].props.children[0].props.children="Take HypeSquad test",o.props.children[0].props.children[1].props.children.push(r.createElement("div",{className:"ysink_hypesquad_container ysink_new"},[1,2,3].map(k=>r.createElement(p,{houseNum:k})))),o}))},onUnload:()=>t.forEach(n=>n())}};return O})(cumcord.modules.common.React,cumcord.patcher,cumcord.modules.webpack,cumcord.pluginData,cumcord.utils,cumcord.plugins);
