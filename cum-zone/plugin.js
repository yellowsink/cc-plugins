(function(s,b,h,u,t,z,o,w){"use strict";function _(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var M=_(b),m=_(z);const L=e=>new URL("plugins-large.json",e),P=(e,a)=>new URL(a,e);function g(e){let a=new XMLHttpRequest;a.open("GET",L(e),!1),a.send(null);let i=[];try{i=JSON.parse(a.responseText)}catch{return[]}return Object.keys(i).map(l=>{let n=i[l];return n.url=l,n})}const R=s.findByDisplayName("FormText"),E="Welcome to the cum zone - Only cum inside anime girls - Quivering clit, double jointed pussy - Fresh balls, elegant ejaculation - First the kiss, then the cum - My dick is in love with pain - Co-op cock torture - Stuff my dick into a furnace - Stitch my cock shut - Pressure cook my greasy balls - Cumblast me and make it snappy - Cum, cum, cum, cum, cum, cum, cum, cum - Cum, cum, cum, cum, cum, cum, cum, cum - Cum, cum, cum, cum, cum, cum, cum, cum - Cum, cum, cum, cum, cum, cum, cum, cum - What's all the cummotion? - My dad fell into a cum shaft - My dad glazed my face with cum - Fertilize a baby with hunk spunk - Cum spunk in my trunk - Cum craving toddler - Cum drippin' cunt - Cummy Rae Jepsen - Cum me maybe - Cummy bottom boy - Night of the living cum - Nefarious cum mastermind - Cum makes me fearless - Cum crammer, cock slammer - Cum slammed ya mum - Mail your mums pieces of my dick - Bazinga! - Chug the cum, fug ya mum - Fuck my asshole full of cum - Three little words - Get fucked, nerd - Cum stuffer, jenkem huffer - Fuck my cum puddle - Bottom stuffer, semen huffer - Would love a gator to fuck me - Undercooked baby pig penises - Help my dogs get a huge boner - Water bong full of cat cum - Accidentally fucked my own ass - I barely had any dicks inside me - Who ate all my cum? A mystery - Cum detective hot on the trail - Bees make honey, I make cummy";let N=[];for(let e=0;e<40;e++)N.push(0);var I=({fillscreen:e})=>e?t.React.createElement(R,{className:"ysink_ticker_fillscreen"},N.map(a=>t.React.createElement("marquee",{className:"ysink_cuminside",scrolldelay:"65"},E))):t.React.createElement(R,{className:"ysink_ticker"},t.React.createElement("marquee",{className:"ysink_cuminside",scrolldelay:"65"},E));const $=s.findByDisplayName("FormTitle"),C=s.findByDisplayName("FormText"),U=s.findByDisplayName("FormDivider"),r=s.findByProps("Sizes","Colors","Looks","DropdownSizes");var j=({plugin:e})=>{let a=m.default.installed.ghost,i=Object.keys(a).map(n=>[n,a[n].enabled]).filter(n=>typeof n[1]=="boolean");function l(n,k){const d=(T,S)=>T.find(F=>F[0]==S||F[0]==S+"/");return d(i,n)==null?t.React.createElement(r,{className:"ysink_button",color:r.Colors.BRAND,size:r.Sizes.TINY,look:r.Looks.OUTLINED,onClick:()=>{m.default.importPlugin(n).then(()=>o.showToast({title:"Installed plugin "+k,duration:5e3}))}},"Install"):d(i,n)[1]?t.React.createElement(r,{className:"ysink_button",color:r.Colors.GREEN,size:r.Sizes.TINY,look:r.Looks.OUTLINED},"Running"):t.React.createElement(r,{className:"ysink_button",color:r.Colors.GREY,size:r.Sizes.TINY,look:r.Looks.OUTLINED},"Installed")}return u.useNest(m.default.installed),t.React.createElement("div",{className:"ysink_card"},t.React.createElement("div",{className:"ysink_row"},t.React.createElement($,{tag:"p",className:"ysink_title"},e.name),l(P(e.repo.url,e.url).href,e.name)),t.React.createElement(C,{className:"ysink_desc"},e.description),t.React.createElement(U,{className:"ysink_divide"}),t.React.createElement(C,{className:"ysink_author_licence"},"by ",e.author," under ",e.license))};const A=s.findByDisplayName("FormTitle"),O=s.findByDisplayName("FormText");s.findByDisplayName("FormDivider");const v=s.findByProps("Sizes","Colors","Looks","DropdownSizes"),Y=cumcord.modules.webpack.findByProps("BadgeShapes");var G=({repo:e,nest:a})=>t.React.createElement("div",{className:"ysink_card"},t.React.createElement("div",{className:"ysink_row"},t.React.createElement("div",null,t.React.createElement(A,{tag:"p",className:"ysink_title"},e.name,e.official?t.React.createElement(Y.TextBadge,{className:"ysink_badge",text:"official repo",color:"var(--info-positive-foreground)"}):[]),t.React.createElement(O,null,e.url.href)),t.React.createElement(v,{color:v.Colors.RED,className:"ysink_button",onClick:()=>a.store.repos=a.ghost.repos.filter(i=>i.url!=e.url)},"Remove Repo")));const W=s.findByDisplayName("FormTitle"),H=s.findByDisplayName("FormText"),Z=s.findByDisplayName("FormSection"),y=s.findByProps("Sizes","Colors","Looks","DropdownSizes"),q=[{url:new URL("https://cumcordplugins.github.io/Condom/"),name:"Condom",enabled:!0,official:!0}];function B(e){e.repos=q}const x=({store:e})=>t.React.createElement(Z,{className:"ysink_splash"},t.React.createElement(W,{tag:"h2"},"No Repos!"),t.React.createElement(H,null,"You do not have any repos added!"),t.React.createElement(y,{className:"ysink_button",color:y.Colors.GREEN,sizes:y.Sizes.LARGE,onClick:()=>B(e)},"Reset repo list to default")),J=t.React.useState,c=s.findByProps("ModalCloseButton"),D=s.findByDisplayName("Header"),f=s.findByDisplayName("Flex"),{openModal:K}=s.findByProps("openModal"),Q=s.findByDisplayName("FormSection"),X=s.findByDisplayName("FormDivider"),V=s.findByDisplayName("TextInput"),ee=s.findByProps("Sizes","Colors","Looks","DropdownSizes");function te(e){try{return g(e),!0}catch{return!1}}function ae(e,a){if(a.endsWith("/")||(a+="/"),e.ghost.repos.find(i=>i.url==a)!==void 0)o.showToast({title:"You already have this repo!",duration:5e3});else if(te(a)){let i=e.ghost.repos;i.push({url:a,name:"new repo",enabled:!0}),e.store.repos=i,o.showToast({title:"Added repo",duration:5e3})}else o.showToast({title:"Repo was invalid",duration:5e3})}const se=({nest:e,e:a})=>{const[i,l]=J("");return u.useNest(e),t.React.createElement(h.ErrorBoundary,null,t.React.createElement(c.ModalRoot,{transitionState:a.transitionState,size:"large",className:"ysink_modal"},t.React.createElement(c.ModalHeader,{separator:!1},t.React.createElement(f.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},t.React.createElement(D,{tag:"h2",size:D.Sizes.SIZE_20},"Manage Repos")),t.React.createElement(f.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},t.React.createElement(c.ModalCloseButton,{onClick:a.onClose}))),t.React.createElement(c.ModalContent,null,t.React.createElement(Q,null,t.React.createElement(f,{basis:"auto",grow:1,shrink:1,className:"ysink_row"},t.React.createElement(V,{className:"ysink_input",placeholder:"https://example.com/repo",type:"text",value:i,onChange:n=>l(n)}),t.React.createElement(ee,{className:"ysink_button",onClick:()=>{l(""),ae(e,i)}},"Add")),t.React.createElement(X,{className:"ysink_divide"}),e.ghost.repos.length==0?t.React.createElement(x,{store:e.store}):e.ghost.repos.map(n=>t.React.createElement(G,{repo:n,nest:e}))))))};var ie=e=>K(a=>t.React.createElement(se,{nest:e,e:a}));const ne=s.findByDisplayName("FormTitle");s.findByDisplayName("FormText");const re=s.findByDisplayName("FormSection"),le=s.findByDisplayName("FormDivider"),oe=s.findByProps("Sizes","Colors","Looks","DropdownSizes"),ce=e=>e.map(a=>g(a.url).map(i=>(i.repo=a,i))).reduce((a,i)=>a.concat(i));var de=({nest:e})=>(u.useNest(e),t.React.createElement(h.ErrorBoundary,null,t.React.createElement(re,null,t.React.createElement("div",{className:"ysink_header"},t.React.createElement(ne,{tag:"h1"},"Welcome to the Cum Zone"),t.React.createElement(oe,{className:"ysink_button",onClick:()=>ie(e)},"Manage Repos")),t.React.createElement(I,null),t.React.createElement(le,{className:"ysink_divide"}),e.ghost.repos.length==0?t.React.createElement(x,{store:e.store}):t.React.createElement("div",{className:"ysink_card_container"},ce(e.ghost.repos).map(a=>t.React.createElement(j,{plugin:a})))))),ue=()=>cumcord.patcher.injectCSS(".ysink_cuminside{font-size:1.2rem;padding-bottom:1rem;font-style:italic}.ysink_ticker{margin-top:.2rem}.ysink_ticker_fillscreen{position:fixed;left:0;top:1rem;width:100vw;height:100vh;opacity:.1;pointer-events:none}.ysink_card{padding:1rem;border:1px solid var(--background-modifier-accent);border-radius:.25rem;display:flex;flex-direction:column;z-index:1;background-color:var(--deprecated-card-bg)}.ysink_card .ysink_title{font-size:1rem;padding-bottom:.25rem;display:inline;flex:1;margin:0}.ysink_card .ysink_button{display:inline;padding:0}.ysink_card .ysink_button>div{padding:2px 16px}.ysink_card .ysink_row{display:flex}.ysink_card .ysink_row>*{flex:1}.ysink_card .ysink_row>:last-child{flex:unset}.ysink_card .ysink_author_licence{font-style:italic}.ysink_card .ysink_desc{flex:1}.ysink_modal .ysink_row{display:flex}.ysink_modal .ysink_row>*{flex:1}.ysink_modal .ysink_row>:last-child{flex:unset;margin-left:1rem}.ysink_divide{margin:0 0 1rem}.ysink_modal .ysink_divide{margin:.5rem 0}.ysink_card .ysink_divide{margin:.2rem 0}.ysink_header{display:flex}.ysink_header>*{flex:1}.ysink_header>:last-child{flex:unset}.ysink_splash{display:flex;justify-content:center;align-items:center;margin-top:10rem;flex-flow:column nowrap}.ysink_splash .ysink_button{margin-top:1rem}.ysink_modal .ysink_splash{margin-top:6rem}.ysink_badge{display:inline;margin-left:.5rem}.ysink_card_container{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.ysink_card_container .ysink_card button{margin-bottom:.2rem;width:6rem}");let p=[];var me=e=>({async onLoad(){const a=e.persist;Array.isArray(a.ghost.repos)||B(a.store),p.push(ue());let i=cumcord.modules.webpack.findByDisplayName("SettingsView").prototype;p.push(M.default.after("getPredicateSections",i,(l,n)=>{if(n[1].label!=w.USER_SETTINGS_MY_ACCOUNT)return;let k=n.findIndex(d=>d.label=="Cumcord")+2;return n.splice(k,0,{section:"YSINK_CUMZONE",label:"The Cum Zone",element:()=>t.React.createElement(de,{nest:a})}),n}))},onUnload:()=>p.forEach(a=>a())});return me})(cumcord.modules.webpack,cumcord.patcher,cumcord.ui.components,cumcord.utils,cumcord.modules.common,cumcord.plugins,cumcord.ui.toasts,cumcord.modules.common.i18n.Messages);
