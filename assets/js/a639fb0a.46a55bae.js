"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5905],{3014:function(e,t,a){a.r(t);var r=a(7294),n=a(9960),l=a(4996),i=a(475),o=a(6269),c=o.zo.ul((function(e){var t,a,r,n;return(n={})[o.BC.down.md]={marginBottom:"1rem !important"},n["& > li"]=((r={display:"flex",flexDirection:"column",padding:e.spacing(4,3,2),"&:nth-child(1)":(t={},t[o.BC.down.sm]={display:"none"},t),"&:nth-child(3)":(a={},a[o.BC.up.md]={border:"solid 1px rgba(255,255,255, .1)",borderBottom:0,borderRadius:"10px 10px 0 0",backgroundColor:"rgba(255,255,255, .05)"},a)})[o.BC.down.sm]={border:"solid 1px rgba(255,255,255, .1)",borderRadius:10,backgroundColor:"rgba(255,255,255, .05)"},r['& > [data-el="reccomend"]']={position:"absolute",margin:e.spacing(-5.5,0,0,-2),borderRadius:100,color:e.palette.primary.main,border:"solid 1px",borderColor:e.palette.primary.main,backgroundColor:e.palette.background.paper,padding:e.spacing(.3,1.5),fontSize:12,fontWeight:e.typography.fontWeightBold},r['& > [data-el="price"]']={padding:e.spacing(1,0,2),display:"flex",alignItems:"center",flexWrap:"wrap","& > span":Object.assign({},e.typography.h3,{color:e.palette.primary.main,'&[data-free="true"]':{color:e.palette.success.main}}),"& > small":{marginLeft:10,opacity:.6}},r["& > ul"]={flex:1,'& > [data-li="description"]':{opacity:.7,marginTop:e.spacing(2)}},r),n["& label"]=Object.assign({},e.typography.h5),n}));t.default=function(e){var t=e.menuIndex,a=d();return r.createElement(c,{"data-row":!0},r.createElement("li",null,r.createElement("label",null,"Plans")),a.map((function(e,a){return r.createElement("li",{key:a,"data-mobile-hidden":a!==t},"business"===e.slug&&r.createElement("div",{"data-el":"reccomend"},"Reccomended"),r.createElement("ul",null,r.createElement("li",null,r.createElement("label",null,e.name)),r.createElement("li",{"data-li":"description"},e.description)),r.createElement("div",{"data-el":"price"},r.createElement("span",{"data-free":0===e.price.value},"$",e.price.value),r.createElement("small",null,e.price.text)),e.button)})))};var d=function(){var e=(0,l.Z)("docs/reactjs/installation"),t=(0,l.Z)("community/");return[{slug:"community",name:"Community",description:"Get started with the industry-standard UI library for building React user interfaces (open-source, MIT licensed).",price:{value:0,text:"\u2013 free forever."},button:r.createElement(n.Z,{fullWidth:!0,size:"large",variant:"outlined",color:"inherit",component:i.Z,to:e},"Get Started")},{slug:"business",name:"Business",description:"Suitable for professional developers building enterprise solutions for a large audience.",price:{value:186,text:"/ developer."},button:r.createElement(n.Z,{fullWidth:!0,size:"large",variant:"contained",color:"primary",component:i.Z,to:t},"Buy Now")},{slug:"enterprise",name:"Enterprise",description:"Unlock all the most advanced features and professional support.",price:{value:599,text:"/ developer."},button:r.createElement(n.Z,{size:"large",variant:"outlined",color:"inherit",component:i.Z,to:t},"Request")}]}}}]);