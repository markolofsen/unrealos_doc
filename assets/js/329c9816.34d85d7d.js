"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9111],{4137:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1231:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(4137)),a=["components"],l={title:"Version upgrade",sidebar_label:"Upgrade"},u=void 0,c={unversionedId:"metaeditor/settings/upgrade",id:"version-1.1.0/metaeditor/settings/upgrade",title:"Version upgrade",description:"To upgrade MetaEditor to a newer version, do the following:",source:"@site/versioned_docs/version-1.1.0/metaeditor/settings/upgrade.md",sourceDirName:"metaeditor/settings",slug:"/metaeditor/settings/upgrade",permalink:"/docs/1.1.0/metaeditor/settings/upgrade",tags:[],version:"1.1.0",frontMatter:{title:"Version upgrade",sidebar_label:"Upgrade"},sidebar:"someSidebar",previous:{title:"Deployment",permalink:"/docs/1.1.0/metaeditor/settings/deployment"},next:{title:"Theme",permalink:"/docs/1.1.0/metaeditor/customization/mui/theme"}},s={},d=[{value:"To upgrade MetaEditor to a newer version, do the following:",id:"to-upgrade-metaeditor-to-a-newer-version-do-the-following",level:4},{value:"Thanks!",id:"thanks",level:5}],p={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:""}),(0,i.kt)("h4",{id:"to-upgrade-metaeditor-to-a-newer-version-do-the-following"},"To upgrade MetaEditor to a newer version, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the directory with the current version of MetaEditor"),(0,i.kt)("li",{parentName:"ol"},"Enter command: ",(0,i.kt)("inlineCode",{parentName:"li"},"rm -rf node_modules && yarn")),(0,i.kt)("li",{parentName:"ol"},"Ready! Your version of MetaEditor has been updated!")),(0,i.kt)("h5",{id:"thanks"},"Thanks!"))}f.isMDXComponent=!0}}]);