"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[475],{475:function(e,t,n){n.d(t,{Z:function(){return re}});var o=n(102),i=n(3117),r=n(7294),a=n.t(r,2),l=(n(5697),n(6010)),s=n(7925),c=n(7192),u=n(1796),d=n(9907),p=n(7623),h=n(1705);var f="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;var m=function(e){const t=r.useRef(e);return f((()=>{t.current=e})),r.useCallback(((...e)=>(0,t.current)(...e)),[])},b=n(9962).Z;var v=n(144),g=n(220);function x(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function y(e,t,n){return null!=n[t]?n[t]:e.props[t]}function S(e,t,n){var o=x(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o,i=Object.create(null),r=[];for(var a in e)a in t?r.length&&(i[a]=r,r=[]):r.push(a);var l={};for(var s in t){if(i[s])for(o=0;o<i[s].length;o++){var c=i[s][o];l[i[s][o]]=n(c)}l[s]=n(s)}for(o=0;o<r.length;o++)l[r[o]]=n(r[o]);return l}(t,o);return Object.keys(i).forEach((function(a){var l=i[a];if((0,r.isValidElement)(l)){var s=a in t,c=a in o,u=t[a],d=(0,r.isValidElement)(u)&&!u.props.in;!c||s&&!d?c||!s||d?c&&s&&(0,r.isValidElement)(u)&&(i[a]=(0,r.cloneElement)(l,{onExited:n.bind(null,l),in:u.props.in,exit:y(l,"exit",e),enter:y(l,"enter",e)})):i[a]=(0,r.cloneElement)(l,{in:!1}):i[a]=(0,r.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:y(l,"exit",e),enter:y(l,"enter",e)})}})),i}var Z=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},R=function(e){function t(t,n){var o,i=(o=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}(0,v.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,o,i=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,o=a,x(n.children,(function(e){return(0,r.cloneElement)(e,{onExited:o.bind(null,e),in:!0,appear:y(e,"appear",n),enter:y(e,"enter",n),exit:y(e,"exit",n)})}))):S(e,i,a),firstRender:!1}},n.handleExited=function(e,t){var n=x(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,i.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,o.Z)(e,["component","childFactory"]),a=this.state.contextValue,l=Z(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?r.createElement(g.Z.Provider,{value:a},l):r.createElement(g.Z.Provider,{value:a},r.createElement(t,i,l))},t}(r.Component);R.propTypes={},R.defaultProps={component:"div",childFactory:function(e){return e}};var w=R,E=(n(8357),n(8679),n(3772));a.useInsertionEffect?a.useInsertionEffect:r.useLayoutEffect;function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,E.O)(t)}var k=function(){var e=z.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};var M=n(5893);var C=function(e){const{className:t,classes:n,pulsate:o=!1,rippleX:i,rippleY:a,rippleSize:s,in:c,onExited:u,timeout:d}=e,[p,h]=r.useState(!1),f=(0,l.Z)(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),m={width:s,height:s,top:-s/2+a,left:-s/2+i},b=(0,l.Z)(n.child,p&&n.childLeaving,o&&n.childPulsate);return c||p||h(!0),r.useEffect((()=>{if(!c&&null!=u){const e=setTimeout(u,d);return()=>{clearTimeout(e)}}}),[u,c,d]),(0,M.jsx)("span",{className:f,style:m,children:(0,M.jsx)("span",{className:b})})},T=n(6087);var $=(0,T.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);const I=["center","classes","className"];let P,V,L,N,B=e=>e;const F=k(P||(P=B`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),j=k(V||(V=B`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),D=k(L||(L=B`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),O=(0,d.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),W=(0,d.ZP)(C,{name:"MuiTouchRipple",slot:"Ripple"})(N||(N=B`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),$.rippleVisible,F,550,(({theme:e})=>e.transitions.easing.easeInOut),$.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),$.child,$.childLeaving,j,550,(({theme:e})=>e.transitions.easing.easeInOut),$.childPulsate,D,(({theme:e})=>e.transitions.easing.easeInOut));var A=r.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiTouchRipple"}),{center:a=!1,classes:s={},className:c}=n,u=(0,o.Z)(n,I),[d,h]=r.useState([]),f=r.useRef(0),m=r.useRef(null);r.useEffect((()=>{m.current&&(m.current(),m.current=null)}),[d]);const b=r.useRef(!1),v=r.useRef(null),g=r.useRef(null),x=r.useRef(null);r.useEffect((()=>()=>{clearTimeout(v.current)}),[]);const y=r.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:o,rippleSize:i,cb:r}=e;h((e=>[...e,(0,M.jsx)(W,{classes:{ripple:(0,l.Z)(s.ripple,$.ripple),rippleVisible:(0,l.Z)(s.rippleVisible,$.rippleVisible),ripplePulsate:(0,l.Z)(s.ripplePulsate,$.ripplePulsate),child:(0,l.Z)(s.child,$.child),childLeaving:(0,l.Z)(s.childLeaving,$.childLeaving),childPulsate:(0,l.Z)(s.childPulsate,$.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:o,rippleSize:i},f.current)])),f.current+=1,m.current=r}),[s]),S=r.useCallback(((e={},t={},n)=>{const{pulsate:o=!1,center:i=a||t.pulsate,fakeElement:r=!1}=t;if("mousedown"===e.type&&b.current)return void(b.current=!1);"touchstart"===e.type&&(b.current=!0);const l=r?null:x.current,s=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let c,u,d;if(i||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)c=Math.round(s.width/2),u=Math.round(s.height/2);else{const{clientX:t,clientY:n}=e.touches?e.touches[0]:e;c=Math.round(t-s.left),u=Math.round(n-s.top)}if(i)d=Math.sqrt((2*s.width**2+s.height**2)/3),d%2==0&&(d+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-c),c)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-u),u)+2;d=Math.sqrt(e**2+t**2)}e.touches?null===g.current&&(g.current=()=>{y({pulsate:o,rippleX:c,rippleY:u,rippleSize:d,cb:n})},v.current=setTimeout((()=>{g.current&&(g.current(),g.current=null)}),80)):y({pulsate:o,rippleX:c,rippleY:u,rippleSize:d,cb:n})}),[a,y]),Z=r.useCallback((()=>{S({},{pulsate:!0})}),[S]),R=r.useCallback(((e,t)=>{if(clearTimeout(v.current),"touchend"===e.type&&g.current)return g.current(),g.current=null,void(v.current=setTimeout((()=>{R(e,t)})));g.current=null,h((e=>e.length>0?e.slice(1):e)),m.current=t}),[]);return r.useImperativeHandle(t,(()=>({pulsate:Z,start:S,stop:R})),[Z,S,R]),(0,M.jsx)(O,(0,i.Z)({className:(0,l.Z)(s.root,$.root,c),ref:x},u,{children:(0,M.jsx)(w,{component:null,exit:!0,children:d})}))})),K=n(2339);function X(e){return(0,K.Z)("MuiButtonBase",e)}var U=(0,T.Z)("MuiButtonBase",["root","disabled","focusVisible"]);const Y=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],q=(0,d.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${U.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});var _=r.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiButtonBase"}),{action:a,centerRipple:s=!1,children:u,className:d,component:f="button",disabled:v=!1,disableRipple:g=!1,disableTouchRipple:x=!1,focusRipple:y=!1,LinkComponent:S="a",onBlur:Z,onClick:R,onContextMenu:w,onDragLeave:E,onFocus:z,onFocusVisible:k,onKeyDown:C,onKeyUp:T,onMouseDown:$,onMouseLeave:I,onMouseUp:P,onTouchEnd:V,onTouchMove:L,onTouchStart:N,tabIndex:B=0,TouchRippleProps:F,touchRippleRef:j,type:D}=n,O=(0,o.Z)(n,Y),W=r.useRef(null),K=r.useRef(null),U=(0,h.Z)(K,j),{isFocusVisibleRef:_,onFocus:H,onBlur:G,ref:J}=b(),[Q,ee]=r.useState(!1);function te(e,t,n=x){return m((o=>{t&&t(o);return!n&&K.current&&K.current[e](o),!0}))}v&&Q&&ee(!1),r.useImperativeHandle(a,(()=>({focusVisible:()=>{ee(!0),W.current.focus()}})),[]),r.useEffect((()=>{Q&&y&&!g&&K.current.pulsate()}),[g,y,Q]);const ne=te("start",$),oe=te("stop",w),ie=te("stop",E),re=te("stop",P),ae=te("stop",(e=>{Q&&e.preventDefault(),I&&I(e)})),le=te("start",N),se=te("stop",V),ce=te("stop",L),ue=te("stop",(e=>{G(e),!1===_.current&&ee(!1),Z&&Z(e)}),!1),de=m((e=>{W.current||(W.current=e.currentTarget),H(e),!0===_.current&&(ee(!0),k&&k(e)),z&&z(e)})),pe=()=>{const e=W.current;return f&&"button"!==f&&!("A"===e.tagName&&e.href)},he=r.useRef(!1),fe=m((e=>{y&&!he.current&&Q&&K.current&&" "===e.key&&(he.current=!0,K.current.stop(e,(()=>{K.current.start(e)}))),e.target===e.currentTarget&&pe()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&pe()&&"Enter"===e.key&&!v&&(e.preventDefault(),R&&R(e))})),me=m((e=>{y&&" "===e.key&&K.current&&Q&&!e.defaultPrevented&&(he.current=!1,K.current.stop(e,(()=>{K.current.pulsate(e)}))),T&&T(e),R&&e.target===e.currentTarget&&pe()&&" "===e.key&&!e.defaultPrevented&&R(e)}));let be=f;"button"===be&&(O.href||O.to)&&(be=S);const ve={};"button"===be?(ve.type=void 0===D?"button":D,ve.disabled=v):(O.href||O.to||(ve.role="button"),v&&(ve["aria-disabled"]=v));const ge=(0,h.Z)(J,W),xe=(0,h.Z)(t,ge),[ye,Se]=r.useState(!1);r.useEffect((()=>{Se(!0)}),[]);const Ze=ye&&!g&&!v;const Re=(0,i.Z)({},n,{centerRipple:s,component:f,disabled:v,disableRipple:g,disableTouchRipple:x,focusRipple:y,tabIndex:B,focusVisible:Q}),we=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:i}=e,r={root:["root",t&&"disabled",n&&"focusVisible"]},a=(0,c.Z)(r,X,i);return n&&o&&(a.root+=` ${o}`),a})(Re);return(0,M.jsxs)(q,(0,i.Z)({as:be,className:(0,l.Z)(we.root,d),ownerState:Re,onBlur:ue,onClick:R,onContextMenu:oe,onFocus:de,onKeyDown:fe,onKeyUp:me,onMouseDown:ne,onMouseLeave:ae,onMouseUp:re,onDragLeave:ie,onTouchEnd:se,onTouchMove:ce,onTouchStart:le,ref:xe,tabIndex:v?-1:B,type:D},ve,O,{children:[u,Ze?(0,M.jsx)(A,(0,i.Z)({ref:U,center:s},F)):null]}))})),H=n(8216);function G(e){return(0,K.Z)("MuiButton",e)}var J=(0,T.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var Q=r.createContext({});const ee=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],te=e=>(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),ne=(0,d.ZP)(_,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,H.Z)(n.color)}`],t[`size${(0,H.Z)(n.size)}`],t[`${n.variant}Size${(0,H.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:(0,u.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,u.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,u.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,i.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${J.focusVisible}`]:(0,i.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${J.disabled}`]:(0,i.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,u.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${J.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${J.disabled}`]:{boxShadow:"none"}})),oe=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,H.Z)(n.size)}`]]}})((({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},te(e)))),ie=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,H.Z)(n.size)}`]]}})((({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},te(e))));var re=r.forwardRef((function(e,t){const n=r.useContext(Q),a=(0,s.Z)(n,e),u=(0,p.Z)({props:a,name:"MuiButton"}),{children:d,color:h="primary",component:f="button",className:m,disabled:b=!1,disableElevation:v=!1,disableFocusRipple:g=!1,endIcon:x,focusVisibleClassName:y,fullWidth:S=!1,size:Z="medium",startIcon:R,type:w,variant:E="text"}=u,z=(0,o.Z)(u,ee),k=(0,i.Z)({},u,{color:h,component:f,disabled:b,disableElevation:v,disableFocusRipple:g,fullWidth:S,size:Z,type:w,variant:E}),C=(e=>{const{color:t,disableElevation:n,fullWidth:o,size:r,variant:a,classes:l}=e,s={root:["root",a,`${a}${(0,H.Z)(t)}`,`size${(0,H.Z)(r)}`,`${a}Size${(0,H.Z)(r)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,H.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,H.Z)(r)}`]},u=(0,c.Z)(s,G,l);return(0,i.Z)({},l,u)})(k),T=R&&(0,M.jsx)(oe,{className:C.startIcon,ownerState:k,children:R}),$=x&&(0,M.jsx)(ie,{className:C.endIcon,ownerState:k,children:x});return(0,M.jsxs)(ne,(0,i.Z)({ownerState:k,className:(0,l.Z)(m,n.className),component:f,disabled:b,focusRipple:!g,focusVisibleClassName:(0,l.Z)(C.focusVisible,y),ref:t,type:w},z,{classes:C,children:[T,d,$]}))}))},1705:function(e,t,n){var o=n(67);t.Z=o.Z},7960:function(e,t,n){function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return o}})},67:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(7294),i=n(7960);function r(e,t){return o.useMemo((()=>null==e&&null==t?null:n=>{(0,i.Z)(e,n),(0,i.Z)(t,n)}),[e,t])}},9962:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(7294);let i,r=!0,a=!1;const l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){e.metaKey||e.altKey||e.ctrlKey||(r=!0)}function c(){r=!1}function u(){"hidden"===this.visibilityState&&a&&(r=!0)}function d(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return r||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!l[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function p(){const e=o.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",s,!0),t.addEventListener("mousedown",c,!0),t.addEventListener("pointerdown",c,!0),t.addEventListener("touchstart",c,!0),t.addEventListener("visibilitychange",u,!0))}),[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!d(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(a=!0,window.clearTimeout(i),i=window.setTimeout((()=>{a=!1}),100),t.current=!1,!0)},ref:e}}},220:function(e,t,n){var o=n(7294);t.Z=o.createContext(null)}}]);