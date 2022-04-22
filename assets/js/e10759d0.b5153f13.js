"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4254],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},725:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],l={title:"Callbacks",sidebar_label:"Callbacks"},c=void 0,s={unversionedId:"metaeditor/methods/callbacks",id:"metaeditor/methods/callbacks",title:"Callbacks",description:"This page shows how to get a callback from Unreal Engine in MetaEditor.",source:"@site/docs/metaeditor/methods/callbacks.md",sourceDirName:"metaeditor/methods",slug:"/metaeditor/methods/callbacks",permalink:"/docs/metaeditor/methods/callbacks",tags:[],version:"current",frontMatter:{title:"Callbacks",sidebar_label:"Callbacks"},sidebar:"someSidebar",previous:{title:"Commands",permalink:"/docs/metaeditor/methods/commands"},next:{title:"Demo",permalink:"/docs/pixel-streaming/demo"}},m={},d=[{value:"Example",id:"example",level:2}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page shows how to get a callback from Unreal Engine in MetaEditor."))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as React from 'react';\n\n// context\nimport { usePlayer } from 'metaeditor/context/';\n\n// material\nimport Box from '@mui/material/Box';\nimport Button from '@mui/material/Button';\n\n\nexport default function Demo() {\n  const player = usePlayer()\n  const [disabled, setDisabled] = React.useState(false)\n  const callbackUserSound = player.cls.callbacks.getLast('click_on_door')\n\n  React.useEffect(() => {\n    if (callbackUserSound) {\n      alert('Independent callback')\n    }\n  }, [callbackUserSound])\n\n  const testCommand = async () => {\n    setDisabled(true)\n    await player.cmd.emit({\n      command: 'change_color',\n      request: {\n        // The request body should only contain a json object.\n        body: { volume: 1 },\n      },\n\n      // If the callback emulation option is enabled, then the contents of fakeResponse will be returned as response.body\n      fakeResponse: undefined,\n    }).then(res => {\n      if (res) {\n        alert('Callback received!')\n        console.log(res)\n      }\n    })\n    setDisabled(false)\n  }\n\n  if (!player.cls.streamIsActive) {\n    return (<div />)\n  }\n\n  return (\n    <Box sx={{ textAlign: 'center' }}>\n      <Button variant=\"outlined\" color=\"inherit\" disabled={disabled} onClick={testCommand}>\n        Test command\n      </Button>\n    </Box>\n  )\n}\n")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Demo function must be a child of the MetaEditor component."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export default function App(props) {\n    return (\n      <MetaEditor {...props}>\n        <Demo />\n      </MetaEditor>\n    )\n}\n")))))}u.isMDXComponent=!0}}]);