(function(n,c){"use strict";const{getMember:o}=n.findByProps("getMember"),{getUser:i}=n.findByProps("getUser","getCurrentUser"),p=n.find(e=>e.type?.toString().indexOf("MESSAGE_A11Y_ROLE_DESCRIPTION")>-1);var d=()=>c.after("type",p,([{channel:{guild_id:e},message:{author:{id:s}}}],r)=>{const t=o(e,s),a=i(s);return t?.nick&&r?.props.children?.props.children?.props.childrenHeader?.props.author&&(r.props.children.props.children.props.childrenHeader.props.author.nick=`${t.nick} (${a.username})`),r}),u=()=>{let e=[d()];return{onUnload:()=>e.reduceRight((s,r)=>r?.(),null)}};return u})(cumcord.modules.webpack,cumcord.patcher);
