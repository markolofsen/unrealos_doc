"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5213],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(n),s=o,f=u["".concat(l,".").concat(s)]||u[s]||d[s]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8321:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],c={title:"Commands",sidebar_label:"Commands"},l=void 0,p={unversionedId:"metaportal/commands",id:"metaportal/commands",title:"Commands",description:"How to add a command",source:"@site/docs/metaportal/commands.md",sourceDirName:"metaportal",slug:"/metaportal/commands",permalink:"/docs/metaportal/commands",tags:[],version:"current",frontMatter:{title:"Commands",sidebar_label:"Commands"},sidebar:"someSidebar",previous:{title:"Description",permalink:"/docs/metaportal/description"},next:{title:"Description",permalink:"/docs/metaplugin/description"}},m={},d=[{value:"How to add a command",id:"how-to-add-a-command",level:2},{value:"How to find the uuid shortcut",id:"how-to-find-the-uuid-shortcut",level:2}],u={toc:d};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-add-a-command"},"How to add a command"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://portal.metaeditor.io/user/projects/"},"Choose a project on MertaPortal")," and add a new command.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect the ",(0,a.kt)("a",{parentName:"p",href:"/docs/pixel-streaming/settings/api"},"API key")," of the project")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Each added command receives a uuid tag, which serves as a shortcut to invoke the command from MetaEditor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"All added commands are displayed in the developer panel."))),(0,a.kt)("h2",{id:"how-to-find-the-uuid-shortcut"},"How to find the uuid shortcut"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the list of commands in the developer panel and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},'"Copy"')," icon next to the command.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The copied ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," can be invoked via ",(0,a.kt)("a",{parentName:"p",href:"/docs/pixel-streaming/methods/commands_portal"},"emitUuidAsync")))))}s.isMDXComponent=!0}}]);