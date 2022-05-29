"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[123],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,h=p["".concat(d,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25593:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Portal Commands",sidebar_label:"Portal Commands"},d=void 0,m={unversionedId:"pixel-streaming/methods/commands_portal",id:"version-3.0.0/pixel-streaming/methods/commands_portal",title:"Portal Commands",description:"With MetaPortal you can add new commands and test them through the Developer Panel.",source:"@site/versioned_docs/version-3.0.0/pixel-streaming/methods/commands_portal.md",sourceDirName:"pixel-streaming/methods",slug:"/pixel-streaming/methods/commands_portal",permalink:"/docs/3.0.0/pixel-streaming/methods/commands_portal",tags:[],version:"3.0.0",frontMatter:{title:"Portal Commands",sidebar_label:"Portal Commands"},sidebar:"someSidebar",previous:{title:"Commands",permalink:"/docs/3.0.0/pixel-streaming/methods/commands"},next:{title:"Callbacks",permalink:"/docs/3.0.0/pixel-streaming/methods/callbacks"}},s={},c=[{value:"emitUuidAsync()",id:"emituuidasync",level:2},{value:"Commands Body",id:"commands-body",level:2}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With MetaPortal you can ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.0.0/metaportal/commands"},"add new commands")," and test them through the Developer Panel."),(0,i.kt)("p",null,"Added commands in MetaPortal can be called through special uuid-shortcuts. This greatly simplifies the development and updating of commands."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"How to find the uuid shortcut?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the list of commands in the developer panel, click on the subtitle\n(example ",(0,i.kt)("inlineCode",{parentName:"p"},"camera_zoom #2c2453"),")")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The copied label can be invoked via ",(0,i.kt)("inlineCode",{parentName:"p"},"emitUuidAsync()")))))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This method works if you have specified an ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.0.0/pixel-streaming/settings/api"},"API key")))),(0,i.kt)("h2",{id:"emituuidasync"},"emitUuidAsync()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/PortalCommands.tsx"',title:'"src/PortalCommands.tsx"'},"import React from 'react'\n\n// ui\nimport Button from 'rsuite/Button'\n\n// libs\nimport { usePlayer } from 'pixel-streaming'\n\n\nexport const CommandsUuid: React.FC<any> = () => {\n  const player = usePlayer()\n\n  const [disabled, setDisabled] = React.useState<boolean>(false)\n\n  const emitUuidAsync = (commandUuid: string) => async () => {\n    setDisabled(true)\n    await player.cls.emitUuidAsync(commandUuid).then((res: any) => {\n      if (res) {\n        console.log('@@@callback', JSON.stringify(res, null, 4))\n      }\n    })\n    setDisabled(false)\n  }\n\n  return (\n    <div>\n\n      <h5>\n        Portal Commands\n      </h5>\n\n      <div data-actions>\n        <Button appearance='primary' disabled={disabled} onClick={emitUuidAsync('b355d3')}>\n          Color: white\n        </Button>\n        <Button appearance='primary' disabled={disabled} onClick={emitUuidAsync('7224e7')}>\n          Color: black\n        </Button>\n      </div>\n\n    </div>\n  )\n}\n")),(0,i.kt)("h2",{id:"commands-body"},"Commands Body"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Keys"),(0,i.kt)("th",{parentName:"tr",align:null},"Format"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"command")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The unique command name that Unreal Engine will receive.",(0,i.kt)("br",null),"Type: ",(0,i.kt)("inlineCode",{parentName:"td"},"slug")," (lowercase, no spaces)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"request.body")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"json")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:null},"An object with the data that Unreal Engine will receive as the contents of the command.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"verification_id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"This is the unique identifier for the command. With it, you can distinguish between two identical commands sent to the Unreal Engine.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you specify ",(0,i.kt)("inlineCode",{parentName:"td"},'undefined"'),", then MetaEditor will automatically assign a sequence number.")))))}u.isMDXComponent=!0}}]);