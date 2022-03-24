/*! For license information please see 9936a035.f976ec32.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5898],{7192:function(e,n,t){function r(e,n,t){const r={};return Object.keys(e).forEach((o=>{r[o]=e[o].reduce(((e,r)=>(r&&(t&&t[r]&&e.push(t[r]),e.push(n(r))),e)),[]).join(" ")})),r}t.d(n,{Z:function(){return r}})},2339:function(e,n,t){t.d(n,{Z:function(){return i}});const r=e=>e;var o=(()=>{let e=r;return{configure(n){e=n},generate:n=>e(n),reset(){e=r}}})();const u={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function i(e,n){return u[n]||`${o.generate(e)}-${n}`}},6087:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(2339);function o(e,n){const t={};return n.forEach((n=>{t[n]=(0,r.Z)(e,n)})),t}},7960:function(e,n,t){function r(e,n){"function"==typeof e?e(n):e&&(e.current=n)}t.d(n,{Z:function(){return r}})},67:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7294),o=t(7960);function u(e,n){return r.useMemo((()=>null==e&&null==n?null:t=>{(0,o.Z)(e,t),(0,o.Z)(n,t)}),[e,n])}},9962:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7294);let o,u=!0,i=!1;const c={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){e.metaKey||e.altKey||e.ctrlKey||(u=!0)}function s(){u=!1}function f(){"hidden"===this.visibilityState&&i&&(u=!0)}function d(e){const{target:n}=e;try{return n.matches(":focus-visible")}catch(t){}return u||function(e){const{type:n,tagName:t}=e;return!("INPUT"!==t||!c[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}function l(){const e=r.useCallback((e=>{var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",a,!0),n.addEventListener("mousedown",s,!0),n.addEventListener("pointerdown",s,!0),n.addEventListener("touchstart",s,!0),n.addEventListener("visibilitychange",f,!0))}),[]),n=r.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!d(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(i=!0,window.clearTimeout(o),o=window.setTimeout((()=>{i=!1}),100),n.current=!1,!0)},ref:e}}},5246:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(7294),o=t(6269),u=t(3823),i=t(4029),c=t(2830),a=t(80),s="#F0F7FF",f="#80BFFF",d="#3399FF",l="#007FFF",p="#0072E5",m=o.zo.custom(u.Z,(function(e){var n;return(n={marginBottom:e.spacing(5)})[o.BC.up.md]={display:"none"},n})),y=o.zo.custom(c.Z,(function(e){var n;return(n={color:"white",cursor:"pointer",fontSize:"0.875rem",fontWeight:"bold",backgroundColor:"transparent",width:"100%",padding:"12px 16px",margin:"6px 6px",border:"none",borderRadius:5,display:"flex",justifyContent:"center",textTransform:"capitalize","&:hover":{backgroundColor:d},"&:focus":{color:"#fff",borderRadius:3,outline:"2px solid "+f,outlineOffset:2}})["&."+a.Z.selected]={backgroundColor:s,color:p},n})),v=o.zo.custom(i.Z,(function(e){return{minWidth:100,backgroundColor:l,borderRadius:8,marginBottom:16,display:"flex",alignItems:"center",justifyContent:"center",alignContent:"space-between"}})),b=["community","business","enterprise"];function h(e){return r.createElement(m,{value:e.value,onChange:function(n,t){e.onChange(t)}},r.createElement(v,null,b.map((function(e,n){return r.createElement(y,{key:n,value:n},e)}))))}},5251:function(e,n,t){t(7418);var r=t(7294),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),u("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,u={},s=null,f=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(u[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===u[r]&&(u[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:f,props:u,_owner:i.current}}n.jsx=s,n.jsxs=s},5893:function(e,n,t){e.exports=t(5251)}}]);