(function(b,n,d,s,g,l,c){"use strict";function p(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var r=p(l);const{useState:k,useEffect:f}=s.React,y=e=>new DOMParser().parseFromString(e,"text/html").children[0].textContent;var w=({codeHtml:e,code:a,lang:t})=>{let[i,o]=k(0);return f(()=>{i>0&&(o(-1),setTimeout(()=>o(0),i))}),s.React.createElement("div",{className:"ysink_code_wrapper hljs"},s.React.createElement("div",{className:"ysink_code_row"},s.React.createElement("div",{className:"ysink_code_lang"},t),s.React.createElement("button",{className:"dark",disabled:i,onClick:()=>{i||(d.copyText(a||y(e)),o(2e3))}},i?"Copied!":"Copy")),s.React.createElement("pre",null,e?s.React.createElement("code",{className:`hljs ${t}`,dangerouslySetInnerHTML:{__html:e}}):s.React.createElement("code",{className:`hljs ${t}`},a)))};const v=b.findByPropsAll("LazyLibrary")[1];var x=()=>n.after("LazyLibrary",v,(e,a)=>{if(!a?.props?.children?.props)return;const t=a.props.children.props.dangerouslySetInnerHTML?.__html,i=a.props.children.props.children,o=_.last(a.props.children.props.className.split(" "));return s.React.createElement(w,{codeHtml:t,code:i,lang:o})}),E=()=>cumcord.patcher.injectCSS(".ysink_code_wrapper{font-family:var(--font-code);border:1px solid var(--background-tertiary);padding:.5rem 1rem;margin-right:6rem}.ysink_code_wrapper .ysink_code_lang{text-transform:uppercase;display:inline}.ysink_code_wrapper code{background:none;border:none;font-family:var(--font-code);padding:0!important;border-radius:0!important}.ysink_code_wrapper button{float:right;margin-right:-1rem;margin-top:-.5rem;color:var(--text-normal);background:var(--background-primary);font-size:.9rem;padding:.1rem .5rem;border-bottom-left-radius:.3rem}.ysink_code_wrapper .ysink_code_row{border-bottom:1px solid var(--text-muted);margin:0 -.5rem;padding:0 .5rem}.hljs{background:var(--background-secondary);border-radius:.3rem}.ysink_code_head{margin-top:.5rem;margin-bottom:.25rem}"),R=["a11y-dark","a11y-light","agate","an-old-hope","androidstudio","arduino-light","arta","ascetic","atom-one-dark","atom-one-dark-reasonable","atom-one-light","brown-paper","codepen-embed","color-brewer","dark","default","devibeans","docco","far","foundation","github","github-dark","github-dark-dimmed","gml","googlecode","gradient-dark","gradient-light","grayscale","hybrid","idea","ir-black","isbl-editor-dark","isbl-editor-light","kimbie-dark","kimbie-light","lightfair","lioshi","magula","mono-blue","monokai","monokai-sublime","night-owl","nnfx-dark","nnfx-light","nord","obsidian","paraiso-dark","paraiso-light","pojoaque","pojoaque","purebasic","qtcreator-dark","qtcreator-light","rainbow","routeros","school-book","shades-of-purple","srcery","stackoverflow-dark","stackoverflow-light","sunburst","tomorrow-night-blue","tomorrow-night-bright","vs","vs2015","xcode","xt256","base16/3024","base16/apathy","base16/apprentice","base16/ashes","base16/atelier-cave","base16/atelier-cave-light","base16/atelier-dune","base16/atelier-dune-light","base16/atelier-estuary","base16/atelier-estuary-light","base16/atelier-forest","base16/atelier-forest-light","base16/atelier-heath","base16/atelier-heath-light","base16/atelier-lakeside","base16/atelier-lakeside-light","base16/atelier-plateau","base16/atelier-plateau-light","base16/atelier-savanna","base16/atelier-savanna-light","base16/atelier-seaside","base16/atelier-seaside-light","base16/atelier-sulphurpool","base16/atelier-sulphurpool-light","base16/atlas","base16/bespin","base16/black-metal","base16/black-metal-bathory","base16/black-metal-burzum","base16/black-metal-dark-funeral","base16/black-metal-gorgoroth","base16/black-metal-immortal","base16/black-metal-khold","base16/black-metal-marduk","base16/black-metal-mayhem","base16/black-metal-nile","base16/black-metal-venom","base16/brewer","base16/bright","base16/brogrammer","base16/brush-trees","base16/brush-trees-dark","base16/chalk","base16/circus","base16/classic-dark","base16/classic-light","base16/codeschool","base16/colors","base16/cupcake","base16/cupertino","base16/danqing","base16/darcula","base16/dark-violet","base16/darkmoss","base16/darktooth","base16/decaf","base16/default-dark","base16/default-light","base16/dirtysea","base16/dracula","base16/edge-dark","base16/edge-light","base16/eighties","base16/embers","base16/equilibrium-dark","base16/equilibrium-gray-dark","base16/equilibrium-gray-light","base16/equilibrium-light","base16/espresso","base16/eva","base16/eva-dim","base16/flat","base16/framer","base16/fruit-soda","base16/gigavolt","base16/github","base16/google-dark","base16/google-light","base16/grayscale-dark","base16/grayscale-light","base16/green-screen","base16/gruvbox-dark-hard","base16/gruvbox-dark-medium","base16/gruvbox-dark-pale","base16/gruvbox-dark-soft","base16/gruvbox-light-hard","base16/gruvbox-light-medium","base16/gruvbox-light-soft","base16/hardcore","base16/harmonic16-dark","base16/harmonic16-light","base16/heetch-dark","base16/heetch-light","base16/helios","base16/hopscotch","base16/horizon-dark","base16/horizon-light","base16/humanoid-dark","base16/humanoid-light","base16/ia-dark","base16/ia-light","base16/icy-dark","base16/ir-black","base16/isotope","base16/kimber","base16/london-tube","base16/macintosh","base16/marrakesh","base16/materia","base16/material","base16/material-darker","base16/material-lighter","base16/material-palenight","base16/material-vivid","base16/mellow-purple","base16/mexico-light","base16/mocha","base16/monokai","base16/nebula","base16/nord","base16/nova","base16/ocean","base16/oceanicnext","base16/one-light","base16/onedark","base16/outrun-dark","base16/papercolor-dark","base16/papercolor-light","base16/paraiso","base16/pasque","base16/phd","base16/pico","base16/pop","base16/porple","base16/qualia","base16/railscasts","base16/rebecca","base16/ros-pine","base16/ros-pine-dawn","base16/ros-pine-moon","base16/sagelight","base16/sandcastle","base16/seti-ui","base16/shapeshifter","base16/silk-dark","base16/silk-light","base16/snazzy","base16/solar-flare","base16/solar-flare-light","base16/solarized-dark","base16/solarized-light","base16/spacemacs","base16/summercamp","base16/summerfruit-dark","base16/summerfruit-light","base16/synth-midnight-terminal-dark","base16/synth-midnight-terminal-light","base16/tango","base16/tender","base16/tomorrow","base16/tomorrow-night","base16/twilight","base16/unikitty-dark","base16/unikitty-light","base16/vulcan","base16/windows-10","base16/windows-10-light","base16/windows-95","base16/windows-95-light","base16/windows-high-contrast","base16/windows-high-contrast-light","base16/windows-nt","base16/windows-nt-light","base16/woodland","base16/xcode-dusk","base16/zenburn"];const h="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/",T=e=>({url:new URL(e+".min.css",h).href,name:e.split("/").map((a,t,i)=>t!==i.length-1?`[${a.toUpperCase()}]`:a).join(" ").split(/[ -]/).map(a=>a[0].toUpperCase()+a.slice(1)).join(" ")}),S=R.map(T),{SingleSelect:C}=b.findByDisplayName("Select",!1),u=b.findByProps("Sizes","Tags"),j=b.findByDisplayName("TextInput");var L=()=>{d.useNest(l.persist);const[e,a]=s.React.useState(l.persist.ghost.custom),t=S.map(({name:o,url:U})=>({value:U,label:o})),i=[{label:"Discord default"}].concat(t);return s.React.createElement(s.React.Fragment,null,s.React.createElement(u,{className:"ysink_code_head"},"Select theme"),s.React.createElement(C,{options:i,value:l.persist.ghost.theme||void 0,onChange:o=>l.persist.store.theme=o,isDisabled:e}),s.React.createElement(u,{className:"ysink_code_head"},"Custom theme url"),s.React.createElement(j,{placeholder:"Custom theme URL",onChange:o=>a(l.persist.store.theme=l.persist.store.custom=o),value:e}))};b.findByProps("markup").markup;const N=()=>{let e=n.injectCSS(`.hljs {
            background: url(${new URL("brown-papersq.png",h).href});
        }`),a=r.default.unloadTheme;r.default.unloadTheme=()=>{e(),a?.()}},q=async e=>{const a=await(await fetch(e)).text();r.default.unloadTheme?.(),r.default.unloadTheme=n.injectCSS(a),e.includes("brown-paper")&&N(),c.log("|| codeblocks plus || Loaded hljs theme successfully ")},m=async()=>{r.default.persist.ghost.theme?await q(r.default.persist.ghost.theme):(r.default.unloadTheme?.(),c.warn("|| codeblocks plus || No theme set in nest"))};var z=()=>{m();const e=(a,{path:t,__:i})=>{t[0]==="theme"&&m()};return r.default.persist.on("SET",e),r.default.persist.on("DELETE",e),()=>{r.default.persist.off("SET",e),r.default.persist.off("DELETE",e),r.default.unloadTheme?.()}},D=()=>{let e=[E(),z(),x()];return{onUnload:()=>e.reduceRight((a,t)=>t?.(),null),settings:g.createElement(L)}};return D})(cumcord.modules.webpack,cumcord.patcher,cumcord.utils,cumcord.modules.common,cumcord.modules.common.React,cumcord.pluginData,cumcord.utils.logger);
