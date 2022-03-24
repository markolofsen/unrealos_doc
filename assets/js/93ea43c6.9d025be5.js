"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2499,5436,5905],{9649:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3117),r=n(102),l=n(7294),i=n(6010),o=n(5999),s=n(4726),c="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",m=["as","id"],d=["as"];function p(e){var t,n=e.as,d=e.id,p=(0,r.Z)(e,m),f=(0,s.LU)().navbar.hideOnScroll;return d?l.createElement(n,(0,a.Z)({},p,{className:(0,i.Z)("anchor",(t={},t[u]=f,t[c]=!f,t)),id:d}),p.children,l.createElement("a",{className:"hash-link",href:"#"+d,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,p)}function f(e){var t=e.as,n=(0,r.Z)(e,d);return"h1"===t?l.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):l.createElement(p,(0,a.Z)({as:t},n))}},3014:function(e,t,n){n.r(t);var a=n(7294),r=n(9960),l=n(4996),i=n(475),o=n(6269),s=o.zo.ul((function(e){var t,n,a,r;return(r={})[o.BC.down.md]={marginBottom:"1rem !important"},r["& > li"]=((a={display:"flex",flexDirection:"column",padding:e.spacing(4,3,2),"&:nth-child(1)":(t={},t[o.BC.down.sm]={display:"none"},t),"&:nth-child(3)":(n={},n[o.BC.up.md]={border:"solid 1px rgba(255,255,255, .1)",borderBottom:0,borderRadius:"10px 10px 0 0",backgroundColor:"rgba(255,255,255, .05)"},n)})[o.BC.down.sm]={border:"solid 1px rgba(255,255,255, .1)",borderRadius:10,backgroundColor:"rgba(255,255,255, .05)"},a['& > [data-el="reccomend"]']={position:"absolute",margin:e.spacing(-5.5,0,0,-2),borderRadius:100,color:e.palette.primary.main,border:"solid 1px",borderColor:e.palette.primary.main,backgroundColor:e.palette.background.paper,padding:e.spacing(.3,1.5),fontSize:12,fontWeight:e.typography.fontWeightBold},a['& > [data-el="price"]']={padding:e.spacing(1,0,2),display:"flex",alignItems:"center",flexWrap:"wrap","& > span":Object.assign({},e.typography.h3,{color:e.palette.primary.main,'&[data-free="true"]':{color:e.palette.success.main}}),"& > small":{marginLeft:10,opacity:.6}},a["& > ul"]={flex:1,'& > [data-li="description"]':{opacity:.7,marginTop:e.spacing(2)}},a),r["& label"]=Object.assign({},e.typography.h5),r}));t.default=function(e){var t=e.menuIndex,n=c();return a.createElement(s,{"data-row":!0},a.createElement("li",null,a.createElement("label",null,"Plans")),n.map((function(e,n){return a.createElement("li",{key:n,"data-mobile-hidden":n!==t},"business"===e.slug&&a.createElement("div",{"data-el":"reccomend"},"Reccomended"),a.createElement("ul",null,a.createElement("li",null,a.createElement("label",null,e.name)),a.createElement("li",{"data-li":"description"},e.description)),a.createElement("div",{"data-el":"price"},a.createElement("span",{"data-free":0===e.price.value},"$",e.price.value),a.createElement("small",null,e.price.text)),e.button)})))};var c=function(){var e=(0,l.Z)("docs/reactjs/installation"),t=(0,l.Z)("community/");return[{slug:"community",name:"Community",description:"Get started with the industry-standard UI library for building React user interfaces (open-source, MIT licensed).",price:{value:0,text:"\u2013 free forever."},button:a.createElement(r.Z,{fullWidth:!0,size:"large",variant:"outlined",color:"inherit",component:i.Z,to:e},"Get Started")},{slug:"business",name:"Business",description:"Suitable for professional developers building enterprise solutions for a large audience.",price:{value:186,text:"/ developer."},button:a.createElement(r.Z,{fullWidth:!0,size:"large",variant:"contained",color:"primary",component:i.Z,to:t},"Buy Now")},{slug:"enterprise",name:"Enterprise",description:"Unlock all the most advanced features and professional support.",price:{value:599,text:"/ developer."},button:a.createElement(r.Z,{size:"large",variant:"outlined",color:"inherit",component:i.Z,to:t},"Request")}]}},7493:function(e,t,n){n.r(t);var a=n(7294),r=n(7564),l=n(9235),i=n(7041),o=n(1359),s=n(6269),c=s.zo.div((function(e){return{}})),u=s.zo.div((function(e){return{backgroundColor:"rgba(0,0,0, .5)",padding:"15px 20px",borderRadius:10,fontWeight:700}})),m=s.zo.div((function(e){return{'&[data-active="true"]':{"& > [data-row]":{backgroundColor:"rgba(0,0,0, .3)"},paddingBottom:30,borderBottom:"solid 1px rgba(255,255,255, .05)"},'& [data-row-group="items"]':{borderLeft:"solid 3px",borderColor:e.palette.primary.main},"& > [data-row]":{cursor:"pointer",userSelect:"none","&:hover":{backgroundColor:"rgba(0,0,0, .3)"}},'& [data-li="label"]':{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}})),d=["community","business","enterprise"];function p(e){var t=e.index,n=e.group,i=e.menuIndex,s=a.useState(!1),u=s[0],p=s[1];return a.createElement("div",{key:t},a.createElement(m,{"data-active":u},a.createElement(o.default,{"data-row":!0,onClick:function(){return p((function(e){return!e}))}},a.createElement("li",{"data-li":"label"},a.createElement(r.Z,{sx:{mr:1}},u?"expand_less":"expand_more")," ",n.label),d.map((function(e,n){return a.createElement("li",{key:t+"-"+n+"-title","data-mobile-hidden":t!==i},!u&&a.createElement(r.Z,null,"unfold_more"))}))),a.createElement(l.Z,{in:u,orientation:"vertical"},a.createElement(c,{"data-row-group":"items"},n.items.map((function(e,n){return a.createElement(o.default,{"data-row":!0,key:t+"-"+n+"-row"},a.createElement("li",null,e.label),d.map((function(n,r){var l=e[n];return a.createElement("li",{key:t+"-"+r+"-value","data-mobile-hidden":r!==i},l)})))}))))))}function f(e,t,n){return a.createElement(a.Fragment,null,a.createElement(u,null,e),t.map((function(e,t){return"row_group"===e.type?a.createElement(p,{index:t,group:e,menuIndex:n}):a.createElement(o.default,{"data-row":!0,key:t},a.createElement("li",null,e.label),d.map((function(r,l){return a.createElement("li",{key:t+"-"+l,"data-mobile-hidden":l!==n},e[r])})))})))}t.default=function(e){var t=e.menuIndex,n={client:[{label:"Webrtc connection duration per user session",community:"10 min.",business:"Unlimited",enterprise:"Unlimited"},{label:"Transferring MetaEditor source code for full-scale development.",community:a.createElement(i.default,{variant:"no"}),business:a.createElement(i.default,{variant:"no"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"Free updates for MetaEditor",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"White label for domain",community:a.createElement(i.default,{variant:"no"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"Theme configuration",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"Mobile version with video streaming optimizations",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"Automatic connection to any streaming services",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"Web Component Library",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes",priority:1}),enterprise:a.createElement(i.default,{variant:"yes",priority:2})},{label:"Local connection to Unreal Engine IDE",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{type:"row_group",label:"Developer tools",items:[{label:"Connection Status Inspector",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"Pixel Streaming configuration panel",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:a.createElement("div",null,"System command manager",a.createElement("small",null,"Tool to export/import commands"),a.createElement("small",null,"History of commands and callbacks")),community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"Collective development of commands",community:a.createElement(i.default,{variant:"no"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"Notification module for debugging commands and callbacks",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"Hotkeys for quick access to developer features",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"Option to reboot streaming server",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})}]},{label:a.createElement(a.Fragment,null,"SDK for application development",a.createElement("small",null,"iOS, Android, Windows, MacOS")),community:a.createElement(i.default,{variant:"no"}),business:a.createElement(i.default,{variant:"no"}),enterprise:a.createElement(i.default,{variant:"yes"})}],plugin:[{label:a.createElement(a.Fragment,null,a.createElement("div",null,"Mechanism for testing commands in Standalone mode."),a.createElement("small",null,"No need to rebuild the project.")),community:"50 commands",business:"Unlimited",enterprise:"Unlimited"},{label:"Support for standalone mode (debugging commands without the need to rebuild the project)",community:a.createElement(i.default,{variant:"no"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"The module for collecting statistics on interaction with the stream",community:a.createElement(i.default,{variant:"no"}),business:a.createElement(i.default,{variant:"no"}),enterprise:a.createElement(i.default,{variant:"yes"})}],support:[{label:"Community",community:a.createElement(i.default,{variant:"yes"}),business:a.createElement(i.default,{variant:"yes"}),enterprise:a.createElement(i.default,{variant:"yes"})},{label:"Bug reports & feature requests",community:a.createElement(i.default,{variant:"yes",priority:0}),business:a.createElement(i.default,{variant:"yes",priority:1}),enterprise:a.createElement(i.default,{variant:"yes",priority:2})},{label:a.createElement(a.Fragment,null,a.createElement("div",null,"Technical advisory."),a.createElement("small",null,"Subject to fair use policy")),community:a.createElement(i.default,{variant:"no"}),business:a.createElement(i.default,{variant:"no"}),enterprise:"?"},{label:"Support duration",community:a.createElement(i.default,{variant:"no"}),business:"1 year",enterprise:"1 year"},{label:"Guaranteed response time",community:a.createElement(i.default,{variant:"no"}),business:"1 year",enterprise:a.createElement(a.Fragment,null,a.createElement("div",null,"2 business days"),a.createElement("small",null,"1 business day (priority only)"))},{label:"Pre-screening",community:a.createElement(i.default,{variant:"no"}),business:a.createElement(i.default,{variant:"no"}),enterprise:a.createElement(a.Fragment,null,a.createElement("div",null,"4 hours"),a.createElement("small",null,"priority only"))},{label:"Issue escalation",community:a.createElement(i.default,{variant:"no"}),business:a.createElement(i.default,{variant:"no"}),enterprise:"Priority only"}]};return a.createElement(a.Fragment,null,f("MetaEditor SDK (open-source)",n.client,t),f("UE Plugin (open-source)",n.plugin,t),f("Support",n.support,t))}},5246:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(7294),r=n(6269),l=n(3823),i=n(4029),o=n(2830),s=n(80),c="#F0F7FF",u="#80BFFF",m="#3399FF",d="#007FFF",p="#0072E5",f=r.zo.custom(l.Z,(function(e){var t;return(t={marginBottom:e.spacing(5)})[r.BC.up.md]={display:"none"},t})),y=r.zo.custom(o.Z,(function(e){var t;return(t={color:"white",cursor:"pointer",fontSize:"0.875rem",fontWeight:"bold",backgroundColor:"transparent",width:"100%",padding:"12px 16px",margin:"6px 6px",border:"none",borderRadius:5,display:"flex",justifyContent:"center",textTransform:"capitalize","&:hover":{backgroundColor:m},"&:focus":{color:"#fff",borderRadius:3,outline:"2px solid "+u,outlineOffset:2}})["&."+s.Z.selected]={backgroundColor:c,color:p},t})),b=r.zo.custom(i.Z,(function(e){return{minWidth:100,backgroundColor:d,borderRadius:8,marginBottom:16,display:"flex",alignItems:"center",justifyContent:"center",alignContent:"space-between"}})),E=["community","business","enterprise"];function g(e){return a.createElement(f,{value:e.value,onChange:function(t,n){e.onChange(n)}},a.createElement(b,null,E.map((function(e,t){return a.createElement(y,{key:t,value:t},e)}))))}},7041:function(e,t,n){n.r(t);var a=n(7294),r=n(7564),l=n(6269),i=l.zo.custom(r.Z,(function(e){return{color:e.palette.success.main}})),o=l.zo.custom(r.Z,(function(e){return{opacity:.3}}));l.zo.ul((function(e){return{display:"flex",flexDirection:"column",alignItems:"center",'& > [data-li="text"]':{opacity:.5}}}));t.default=function(e){var t,n=e.variant,r=e.priority;return a.createElement(a.Fragment,null,"yes"===n?a.createElement(i,null,"check"):"no"===n?a.createElement(o,null,"remove"):void 0,(t="",1==r?t="Priority over Community":2==r&&(t="Priority over Business"),a.createElement("small",null,t)))}},8895:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=n(2263),l=n(2434),i=n(9649),o=n(6269),s=n(3014),c=n(7493),u=n(5246),m=o.zo.ul((function(e){var t,n;return(n={listStyle:"none none",maxWidth:700,margin:"0 auto"})[o.BC.down.sm]={padding:e.spacing(5,0,10)},n[o.BC.up.sm]={padding:e.spacing(10,0,15)},n["& > li"]={textAlign:"center"},n['& > [data-li="tilte"]']=Object.assign({},e.typography.h2,((t={"& > span":{color:e.palette.success.main}})[o.BC.down.sm]={paddingBottom:e.spacing(10),lineHeight:"3rem","& > span":{display:"block"}},t)),n['& > [data-li="subtilte"]']=Object.assign({},e.typography.h6),n['& > [data-li="subtilte"]']=Object.assign({},e.typography.body1),n})),d=o.zo.div((function(e){var t,n;return Object.assign({},e.typography.body1,((n={})[o.BC.up.sm]={padding:e.spacing(10,0,20),borderTop:"solid 1px rgba(255,255,255, .1)"},n["& ul"]={listStyle:"none none",margin:0,padding:0},n["& [data-row]"]={display:"flex","& > li":{"&:nth-child(1)":{flexGrow:1},"&:nth-child(n+2)":(t={width:"100%"},t[o.BC.up.md]={flex:"0 0 25%",maxWidth:"25%"},t)}},n[o.BC.down.sm]={'& [data-mobile-hidden="true"]':{display:"none"}},n))}));function p(){var e=(0,r.Z)().siteConfig,t=(e.organizationName,e.projectName,a.useState(0)),n=t[0],o=t[1];return a.createElement(l.Z,{title:"Pricing",description:""},a.createElement("main",{className:"container margin-vert--lg"},a.createElement(m,null,a.createElement("li",null,a.createElement(i.Z,{as:"h4"},"Pricing")),a.createElement("li",{"data-li":"tilte"},"Start using ",a.createElement("span",null,"MetaEditor")," for free!"),a.createElement("li",{"data-li":"subtilte"},"The community edition lets you get started right away. Buy MetaEditor Pro to get more features and professional support.")),a.createElement(u.default,{value:n,onChange:o}),a.createElement(d,null,a.createElement(s.default,{menuIndex:n}),a.createElement(c.default,{menuIndex:n}))))}},1359:function(e,t,n){n.r(t);var a=n(6269),r=a.zo.ul((function(e){var t,n;return{borderBottom:"solid 1px rgba(255,255,255, .1)","& > li":{padding:e.spacing(1.5,3),display:"flex",flexDirection:"column",justifyContent:"center","&:nth-child(1)":{fontWeight:400},"&:nth-child(n+2)":(t={alignItems:"center"},t[a.BC.down.md]={flex:"1 0 50%",maxWidth:"50%"},t),"&:nth-child(3)":(n={},n[a.BC.up.md]={border:"solid 1px rgba(255,255,255, .1)",borderTop:0,borderBottom:0,backgroundColor:"rgba(255,255,255, .05)"},n)},"& small":{display:"block",opacity:.7,fontSize:".8rem"}}}));t.default=r}}]);