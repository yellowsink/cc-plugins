(function(a,S,k,u,t,b,l,w){"use strict";function z(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var M=z(S),m=z(b);const L=e=>new URL("plugins-large.json",e),P=(e,n)=>new URL(n,e);function h(e){let n=new XMLHttpRequest;n.open("GET",L(e),!1),n.send(null);let s=[];try{s=JSON.parse(n.responseText)}catch{return[]}return Object.keys(s).map(r=>{let i=s[r];return i.url=r,i})}const g=a.findByDisplayName("FormText"),R="Welcome to the cum zone - Only cum inside anime girls - Quivering clit, double jointed pussy - Fresh balls, elegant ejaculation - First the kiss, then the cum - My dick is in love with pain - Co-op cock torture - Stuff my dick into a furnace - Stitch my cock shut - Pressure cook my greasy balls - Cumblast me and make it snappy - Cum, cum, cum, cum, cum, cum, cum, cum - Cum, cum, cum, cum, cum, cum, cum, cum - Cum, cum, cum, cum, cum, cum, cum, cum - Cum, cum, cum, cum, cum, cum, cum, cum - What's all the cummotion? - My dad fell into a cum shaft - My dad glazed my face with cum - Fertilize a baby with hunk spunk - Cum spunk in my trunk - Cum craving toddler - Cum drippin' cunt - Cummy Rae Jepsen - Cum me maybe - Cummy bottom boy - Night of the living cum - Nefarious cum mastermind - Cum makes me fearless - Cum crammer, cock slammer - Cum slammed ya mum - Mail your mums pieces of my dick - Bazinga! - Chug the cum, fug ya mum - Fuck my asshole full of cum - Three little words - Get fucked, nerd - Cum stuffer, jenkem huffer - Fuck my cum puddle - Bottom stuffer, semen huffer - Would love a gator to fuck me - Undercooked baby pig penises - Help my dogs get a huge boner - Water bong full of cat cum - Accidentally fucked my own ass - I barely had any dicks inside me - Who ate all my cum? A mystery - Cum detective hot on the trail - Bees make honey, I make cummy";let E=[];for(let e=0;e<40;e++)E.push(0);var I=({fillscreen:e})=>e?t.React.createElement(g,{className:"ysink_zone_ticker_fillscreen"},E.map(n=>t.React.createElement("marquee",{className:"ysink_zone_cuminside",scrolldelay:"65"},R))):t.React.createElement(g,{className:"ysink_zone_ticker"},t.React.createElement("marquee",{className:"ysink_zone_cuminside",scrolldelay:"65"},R));const $=a.findByDisplayName("FormTitle"),N=a.findByDisplayName("FormText"),U=a.findByDisplayName("FormDivider"),o=a.findByProps("Sizes","Colors","Looks","DropdownSizes");var j=({plugin:e})=>{let n=m.default.installed.ghost,s=Object.keys(n).map(i=>[i,n[i].enabled]).filter(i=>typeof i[1]=="boolean");function r(i,p){const d=(D,T)=>D.find(F=>F[0]==T||F[0]==T+"/");return d(s,i)==null?t.React.createElement(o,{className:"ysink_zone_button",color:o.Colors.BRAND,size:o.Sizes.TINY,look:o.Looks.OUTLINED,onClick:()=>{m.default.importPlugin(i).then(()=>l.showToast({title:"Installed plugin "+p,duration:5e3}))}},"Install"):d(s,i)[1]?t.React.createElement(o,{className:"ysink_zone_button",color:o.Colors.GREEN,size:o.Sizes.TINY,look:o.Looks.OUTLINED},"Running"):t.React.createElement(o,{className:"ysink_zone_button",color:o.Colors.GREY,size:o.Sizes.TINY,look:o.Looks.OUTLINED},"Installed")}return u.useNest(m.default.installed),t.React.createElement("div",{className:"ysink_zone_card"},t.React.createElement("div",{className:"ysink_zone_row"},t.React.createElement($,{tag:"p",className:"ysink_zone_title"},e.name),r(P(e.repo.url,e.url).href,e.name)),t.React.createElement(N,{className:"ysink_zone_desc"},e.description),t.React.createElement(U,{className:"ysink_zone_divide"}),t.React.createElement(N,{className:"ysink_zone_author_licence"},"by ",e.author," under ",e.license))};const A=a.findByDisplayName("FormTitle"),O=a.findByDisplayName("FormText");a.findByDisplayName("FormDivider");const C=a.findByProps("Sizes","Colors","Looks","DropdownSizes"),G=cumcord.modules.webpack.findByProps("BadgeShapes");var W=({repo:e,nest:n})=>t.React.createElement("div",{className:"ysink_zone_card"},t.React.createElement("div",{className:"ysink_zone_row"},t.React.createElement("div",null,t.React.createElement(A,{tag:"p",className:"ysink_zone_title"},e.name,e.official?t.React.createElement(G.TextBadge,{className:"ysink_zone_badge",text:"official repo",color:"var(--info-positive-foreground)"}):[]),t.React.createElement(O,null,e.url.href)),t.React.createElement(C,{color:C.Colors.RED,className:"ysink_zone_button",onClick:()=>n.store.repos=n.ghost.repos.filter(s=>s.url!=e.url)},"Remove Repo")));const Y=a.findByDisplayName("FormTitle"),H=a.findByDisplayName("FormText"),Z=a.findByDisplayName("FormSection"),y=a.findByProps("Sizes","Colors","Looks","DropdownSizes"),q=[{url:new URL("https://cumcordplugins.github.io/Condom/"),name:"Condom",enabled:!0,official:!0}];function v(e){e.repos=q}const B=({store:e})=>t.React.createElement(Z,{className:"ysink_zone_splash"},t.React.createElement(Y,{tag:"h2"},"No Repos!"),t.React.createElement(H,null,"You do not have any repos added!"),t.React.createElement(y,{className:"ysink_zone_button",color:y.Colors.GREEN,sizes:y.Sizes.LARGE,onClick:()=>v(e)},"Reset repo list to default")),J=t.React.useState,c=a.findByProps("ModalCloseButton"),x=a.findByDisplayName("Header"),_=a.findByDisplayName("Flex"),{openModal:Q}=a.findByProps("openModal"),X=a.findByDisplayName("FormSection"),K=a.findByDisplayName("FormDivider"),V=a.findByDisplayName("TextInput"),ee=a.findByProps("Sizes","Colors","Looks","DropdownSizes");function te(e){try{return h(e),!0}catch{return!1}}function ne(e,n){if(n.endsWith("/")||(n+="/"),e.ghost.repos.find(s=>s.url==n)!==void 0)l.showToast({title:"You already have this repo!",duration:5e3});else if(te(n)){let s=e.ghost.repos;s.push({url:n,name:"new repo",enabled:!0}),e.store.repos=s,l.showToast({title:"Added repo",duration:5e3})}else l.showToast({title:"Repo was invalid",duration:5e3})}const ae=({nest:e,e:n})=>{const[s,r]=J("");return u.useNest(e),t.React.createElement(k.ErrorBoundary,null,t.React.createElement(c.ModalRoot,{transitionState:n.transitionState,size:"large",className:"ysink_zone_modal"},t.React.createElement(c.ModalHeader,{separator:!1},t.React.createElement(_.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},t.React.createElement(x,{tag:"h2",size:x.Sizes.SIZE_20},"Manage Repos")),t.React.createElement(_.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},t.React.createElement(c.ModalCloseButton,{onClick:n.onClose}))),t.React.createElement(c.ModalContent,null,t.React.createElement(X,null,t.React.createElement(_,{basis:"auto",grow:1,shrink:1,className:"ysink_zone_row"},t.React.createElement(V,{className:"ysink_zone_input",placeholder:"https://example.com/repo",type:"text",value:s,onChange:i=>r(i)}),t.React.createElement(ee,{className:"ysink_zone_button",onClick:()=>{r(""),ne(e,s)}},"Add")),t.React.createElement(K,{className:"ysink_zone_divide"}),e.ghost.repos.length==0?t.React.createElement(B,{store:e.store}):e.ghost.repos.map(i=>t.React.createElement(W,{repo:i,nest:e}))))))};var se=e=>Q(n=>t.React.createElement(ae,{nest:e,e:n}));const ie=a.findByDisplayName("FormTitle");a.findByDisplayName("FormText");const oe=a.findByDisplayName("FormSection"),re=a.findByDisplayName("FormDivider"),le=a.findByProps("Sizes","Colors","Looks","DropdownSizes"),ce=e=>e.map(n=>h(n.url).map(s=>(s.repo=n,s))).reduce((n,s)=>n.concat(s));var de=({nest:e})=>(u.useNest(e),t.React.createElement(k.ErrorBoundary,null,t.React.createElement(oe,null,t.React.createElement("div",{className:"ysink_zone_header"},t.React.createElement(ie,{tag:"h1"},"Welcome to the Cum Zone"),t.React.createElement(le,{className:"ysink_zone_button",onClick:()=>se(e)},"Manage Repos")),t.React.createElement(I,null),t.React.createElement(re,{className:"ysink_zone_divide"}),e.ghost.repos.length==0?t.React.createElement(B,{store:e.store}):t.React.createElement("div",{className:"ysink_zone_card_container"},ce(e.ghost.repos).map(n=>t.React.createElement(j,{plugin:n})))))),ue=()=>cumcord.patcher.injectCSS(".ysink_zone_cuminside{font-size:1.2rem;padding-bottom:1rem;font-style:italic}.ysink_zone_ticker{margin-top:.2rem}.ysink_zone_ticker_fillscreen{position:fixed;left:0;top:1rem;width:100vw;height:100vh;opacity:.1;pointer-events:none}.ysink_zone_card{padding:1rem;border:1px solid var(--background-modifier-accent);border-radius:.25rem;display:flex;flex-direction:column;z-index:1;background-color:var(--deprecated-card-bg)}.ysink_zone_card .ysink_zone_title{font-size:1rem;padding-bottom:.25rem;display:inline;flex:1;margin:0}.ysink_zone_card .ysink_zone_button{display:inline;padding:0}.ysink_zone_card .ysink_zone_button>div{padding:2px 16px}.ysink_zone_card .ysink_zone_row{display:flex}.ysink_zone_card .ysink_zone_row>*{flex:1}.ysink_zone_card .ysink_zone_row>:last-child{flex:unset}.ysink_zone_card .ysink_zone_author_licence{font-style:italic}.ysink_zone_card .ysink_zone_desc{flex:1}.ysink_zone_modal .ysink_zone_row{display:flex}.ysink_zone_modal .ysink_zone_row>*{flex:1}.ysink_zone_modal .ysink_zone_row>:last-child{flex:unset;margin-left:1rem}.ysink_zone_divide{margin:0 0 1rem}.ysink_zone_modal .ysink_zone_divide{margin:.5rem 0}.ysink_zone_card .ysink_zone_divide{margin:.2rem 0}.ysink_zone_header{display:flex}.ysink_zone_header>*{flex:1}.ysink_zone_header>:last-child{flex:unset}.ysink_zone_splash{display:flex;justify-content:center;align-items:center;margin-top:10rem;flex-flow:column nowrap}.ysink_zone_splash .ysink_zone_button{margin-top:1rem}.ysink_zone_modal .ysink_zone_splash{margin-top:6rem}.ysink_zone_badge{display:inline;margin-left:.5rem}.ysink_zone_card_container{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.ysink_zone_card_container .ysink_zone_card button{margin-bottom:.2rem;width:6rem}");let f=[];var me=e=>({async onLoad(){const n=e.persist;Array.isArray(n.ghost.repos)||v(n.store),f.push(ue());let s=cumcord.modules.webpack.findByDisplayName("SettingsView").prototype;f.push(M.default.after("getPredicateSections",s,(r,i)=>{if(i[1].label!=w.USER_SETTINGS_MY_ACCOUNT)return;let p=i.findIndex(d=>d.label=="Cumcord")+2;return i.splice(p,0,{section:"ysink_zone_CUMZONE",label:"The Cum Zone",element:()=>t.React.createElement(de,{nest:n})}),i}))},onUnload:()=>f.forEach(n=>n())});return me})(cumcord.modules.webpack,cumcord.patcher,cumcord.ui.components,cumcord.utils,cumcord.modules.common,cumcord.plugins,cumcord.ui.toasts,cumcord.modules.common.i18n.Messages);
