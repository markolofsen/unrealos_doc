"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4418],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4637:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],p={title:"Context Provider",sidebar_label:"Context Provider"},c="Context Provider",s={unversionedId:"pixel-streaming/settings/context_provider",id:"pixel-streaming/settings/context_provider",title:"Context Provider",description:"Wrap your application in ContextProvider.",source:"@site/docs/pixel-streaming/settings/context_provider.md",sourceDirName:"pixel-streaming/settings",slug:"/pixel-streaming/settings/context_provider",permalink:"/docs/pixel-streaming/settings/context_provider",tags:[],version:"current",frontMatter:{title:"Context Provider",sidebar_label:"Context Provider"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/pixel-streaming/settings/installation"},next:{title:"API",permalink:"/docs/pixel-streaming/settings/api"}},l={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"context-provider"},"Context Provider"),(0,i.kt)("p",null,"Wrap your application in ",(0,i.kt)("inlineCode",{parentName:"p"},"ContextProvider"),"."),(0,i.kt)("p",null,"Don't call ",(0,i.kt)("inlineCode",{parentName:"p"},"usePlayer()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useSystem()")," on the parent component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import React from 'react'\n\n// libs\nimport { ContextProvider } from 'pixel-streaming'\n\nimport CustomContainer from './CustomContainer'\n\nconst App = () => (\n  <ContextProvider>\n    <CustomContainer />\n  </ContextProvider>\n)\n\nexport default App\n")))}d.isMDXComponent=!0}}]);