(function(s,v,k,u,e,S,d,x){"use strict";function g(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var D=g(v),m=g(S);function _(t){let a=new XMLHttpRequest;a.open("GET",t,!1),a.send(null);let i=JSON.parse(a.responseText);return Object.keys(i).map(l=>{let n=i[l];return n.url=l,n})}const F=s.findByDisplayName("FormText"),T="Welcome to the cum zone - Only cum inside anime girls - Quivering clit, double jointed pussy - Fresh balls, elegant ejaculation - First the kiss, then the cum - My dick is in love with pain - Co-op cock torture - Stuff my dick into a furnace - Stitch my cock shut - Pressure cook my greasy balls - Cumblast me and make it snappy - Cum, cum, cum, cum, cum, cum, cum, cum - Cum, cum, cum, cum, cum, cum, cum, cum - Cum, cum, cum, cum, cum, cum, cum, cum - Cum, cum, cum, cum, cum, cum, cum, cum - What's all the cummotion? - My dad fell into a cum shaft - My dad glazed my face with cum - Fertilize a baby with hunk spunk - Cum spunk in my trunk - Cum craving toddler - Cum drippin' cunt - Cummy Rae Jepsen - Cum me maybe - Cummy bottom boy - Night of the living cum - Nefarious cum mastermind - Cum makes me fearless - Cum crammer, cock slammer - Cum slammed ya mum - Mail your mums pieces of my dick - Bazinga! - Chug the cum, fug ya mum - Fuck my asshole full of cum - Three little words - Get fucked, nerd - Cum stuffer, jenkem huffer - Fuck my cum puddle - Bottom stuffer, semen huffer - Would love a gator to fuck me - Undercooked baby pig penises - Help my dogs get a huge boner - Water bong full of cat cum - Accidentally fucked my own ass - I barely had any dicks inside me - Who ate all my cum? A mystery - Cum detective hot on the trail - Bees make honey, I make cummy";var z=()=>e.React.createElement(F,null,e.React.createElement("marquee",{className:"ysink_cuminside",scrolldelay:"65"},T));const b=s.findByDisplayName("FormTitle"),R=s.findByDisplayName("FormText"),M=s.findByDisplayName("FormDivider"),r=s.findByProps("Sizes","Colors","Looks","DropdownSizes");var L=({plugin:t})=>{let a=m.default.installed.ghost,i=Object.keys(a).map(n=>[n,a[n].enabled]).filter(n=>typeof n[1]=="boolean");function l(n,h){return i.find(o=>o[0]==n)==null?e.React.createElement(r,{className:"ysink_button",color:r.Colors.BRAND,size:r.Sizes.SMALL,look:r.Looks.OUTLINED,onClick:()=>{m.default.importPlugin(n).then(()=>d.showToast({title:"Installed plugin "+h,duration:5e3}))}},"Install"):i.find(o=>o[0]==n)[1]?e.React.createElement(r,{className:"ysink_button",color:r.Colors.GREEN,size:r.Sizes.SMALL,look:r.Looks.OUTLINED},"Running"):e.React.createElement(r,{className:"ysink_button",color:r.Colors.GREY,size:r.Sizes.SMALL,look:r.Looks.OUTLINED},"Installed")}return u.useNest(m.default.installed),e.React.createElement("div",{className:"ysink_card"},e.React.createElement("div",{className:"ysink_row"},e.React.createElement(b,{tag:"p",className:"ysink_title"},t.name),l("https://"+t.url+"/",t.name)),e.React.createElement(R,null,t.description),e.React.createElement(M,{className:"ysink_divide"}),e.React.createElement(R,{className:"ysink_author_licence"},"by ",t.author," under ",t.license))};const P=s.findByDisplayName("FormTitle"),w=s.findByDisplayName("FormText");s.findByDisplayName("FormDivider");const E=s.findByProps("Sizes","Colors","Looks","DropdownSizes"),I=cumcord.modules.webpack.findByProps("BadgeShapes");var $=({repo:t,nest:a})=>e.React.createElement("div",{className:"ysink_card"},e.React.createElement("div",{className:"ysink_row"},e.React.createElement("div",null,e.React.createElement(P,{tag:"p",className:"ysink_title"},t.name,t.official?e.React.createElement(I.TextBadge,{className:"ysink_badge",text:"official repo",color:"var(--info-positive-foreground)"}):[]),e.React.createElement(w,null,t.url)),e.React.createElement(E,{color:E.Colors.RED,className:"ysink_button",onClick:()=>a.store.repos=a.ghost.repos.filter(i=>i.url!=t.url)},"Remove Repo")));const A=s.findByDisplayName("FormTitle"),j=s.findByDisplayName("FormText"),O=s.findByDisplayName("FormSection"),y=s.findByProps("Sizes","Colors","Looks","DropdownSizes"),U=[{url:"https://cumcordplugins.github.io/Condom/plugins-large.json",name:"Condom",enabled:!0,official:!0}];function N(t){t.repos=U}const C=({store:t})=>e.React.createElement(O,{className:"ysink_splash"},e.React.createElement(A,{tag:"h2"},"No Repos!"),e.React.createElement(j,null,"You do not have any repos added!"),e.React.createElement(y,{className:"ysink_button",color:y.Colors.GREEN,sizes:y.Sizes.LARGE,onClick:()=>N(t)},"Reset repo list to default")),G=e.React.useState,c=s.findByProps("ModalCloseButton"),B=s.findByDisplayName("Header"),p=s.findByDisplayName("Flex"),{openModal:W}=s.findByProps("openModal"),H=s.findByDisplayName("FormSection"),Z=s.findByDisplayName("FormDivider"),Y=s.findByDisplayName("TextInput"),q=s.findByProps("Sizes","Colors","Looks","DropdownSizes");function J(t){try{return _(t),!0}catch{return!1}}const K=({nest:t,e:a})=>{const[i,l]=G("");return u.useNest(t),e.React.createElement(k.ErrorBoundary,null,e.React.createElement(c.ModalRoot,{transitionState:a.transitionState,size:"large",className:"ysink_modal"},e.React.createElement(c.ModalHeader,{separator:!1},e.React.createElement(p.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},e.React.createElement(B,{tag:"h2",size:B.Sizes.SIZE_20},"Manage Repos")),e.React.createElement(p.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},e.React.createElement(c.ModalCloseButton,{onClick:a.onClose}))),e.React.createElement(c.ModalContent,null,e.React.createElement(H,null,e.React.createElement(p,{basis:"auto",grow:1,shrink:1,className:"ysink_row"},e.React.createElement(Y,{className:"ysink_input",placeholder:"https://example.com/repo.json",type:"text",value:i,onChange:n=>l(n)}),e.React.createElement(q,{onClick:()=>{if(l(""),J(i)){let n=t.ghost.repos;n.push({url:i,name:"new repo",enabled:!0}),t.store.repos=n,d.showToast({title:"Added repo",duration:5e3})}else d.showToast({title:"Repo was invalid",duration:5e3})}},"Add")),e.React.createElement(Z,{className:"ysink_divide"}),t.ghost.repos.length==0?e.React.createElement(C,{store:t.store}):t.ghost.repos.map(n=>e.React.createElement($,{repo:n,nest:t}))))))};var Q=t=>W(a=>e.React.createElement(K,{nest:t,e:a}));const X=s.findByDisplayName("FormTitle");s.findByDisplayName("FormText");const V=s.findByDisplayName("FormSection"),ee=s.findByProps("Sizes","Colors","Looks","DropdownSizes"),te=t=>t.map(a=>_(a.url)).reduce((a,i)=>a.concat(i));var ae=({nest:t})=>(u.useNest(t),e.React.createElement(k.ErrorBoundary,null,e.React.createElement(V,null,e.React.createElement("div",{className:"ysink_header"},e.React.createElement(X,{tag:"h1"},"Welcome to the Cum Zone"),e.React.createElement(ee,{className:"ysink_button",onClick:()=>Q(t)},"Manage Repos")),e.React.createElement(z,null),t.ghost.repos.length==0?e.React.createElement(C,{store:t.store}):e.React.createElement("div",{className:"ysink_card_container"},te(t.ghost.repos).map(a=>e.React.createElement(L,{plugin:a})))))),se=()=>cumcord.patcher.injectCSS(".ysink_cuminside{font-size:1.2rem;padding-bottom:1rem;font-style:italic}.ysink_card_container{display:grid;grid-template-columns:1fr 1fr}.ysink_card{margin:.25rem;padding:1rem;border:1px solid var(--background-modifier-accent);border-radius:.25rem}.ysink_card .ysink_title{font-size:1rem;padding-bottom:.25rem;display:inline;flex:1;margin:0}.ysink_card .ysink_button{display:inline}.ysink_card .ysink_row{display:flex}.ysink_card .ysink_divide{margin:.2rem 0}.ysink_card .ysink_author_licence{font-style:italic}.ysink_card button{padding:0}.ysink_card button>div{padding:2px 16px}.ysink_header{display:flex}.ysink_header>*{flex:1}.ysink_header>:last-child{flex:unset}.ysink_card .ysink_row>*{flex:1}.ysink_card .ysink_row>:last-child{flex:unset}.ysink_modal .ysink_row{display:flex}.ysink_modal .ysink_row>*{flex:1}.ysink_modal .ysink_row>:last-child{flex:unset;margin-left:1rem}.ysink_modal .ysink_divide{margin:.5rem 0}.ysink_splash{display:flex;justify-content:center;align-items:center;margin-top:10rem;flex-flow:column nowrap}.ysink_modal .ysink_splash{margin-top:6rem}.ysink_splash .ysink_button{margin-top:1rem}.ysink_badge{display:inline;margin-left:.5rem}");let f=[];var ne=t=>({async onLoad(){const a=t.persist;Array.isArray(a.ghost.repos)||N(a.store),f.push(se());let i=cumcord.modules.webpack.findByDisplayName("SettingsView").prototype;f.push(D.default.after("getPredicateSections",i,(l,n)=>{if(n[1].label!=x.USER_SETTINGS_MY_ACCOUNT)return;let h=n.findIndex(o=>o.label=="Cumcord")+2;return n.splice(h,0,{section:"YSINK_CUMZONE",label:"The Cum Zone",element:()=>e.React.createElement(ae,{nest:a})}),n}))},onUnload:()=>f.forEach(a=>a())});return ne})(cumcord.modules.webpack,cumcord.patcher,cumcord.ui.components,cumcord.utils,cumcord.modules.common,cumcord.plugins,cumcord.ui.toasts,cumcord.modules.common.i18n.Messages);