(function(t,e,o){"use strict";const i="https://raw.githubusercontent.com/Discord-Custom-Covers/usrbg/master/dist/usrbg.json",c=async()=>await(await fetch(i)).json(),u=n=>{let r=new Map;for(const a of n)r.set(a.uid,a);return r};var p=async()=>u(await c());const l=t.findByDisplayName("UserBanner",!1),{popoutBannerPremium:d}=t.findByProps("popoutBannerPremium");var m=n=>e.after("default",l,([{user:r}],a)=>{const s=n.get(r?.id)?.img;if(!(!a||r?.banner||!s))return a.props.style={"background-image":`url("${s}")`},a.props.className+=` ${d}`,a});const{avatarPositionPremium:f,avatarWrapperNormal:g}=t.findByProps("avatarPositionPremium"),y=t.findByDisplayName("Clickable").prototype;var b=n=>e.after("render",y,(r,a)=>{const s=a?.props?.children;if(!s?.props?.className?.includes?.(g))return;const v=o.findInReactTree(s,"src")?.split("/"),B=_.nth(v,-2);if(!!n.has(B))return a.props.children.props.className+=` ${f}`,a}),h=()=>{let n;return{onLoad:async()=>{const r=await p();n=[m(r),b(r)]},onUnload:()=>_.forEachRight(n,r=>r())}};return h})(cumcord.modules.webpack,cumcord.patcher,cumcord.utils);
