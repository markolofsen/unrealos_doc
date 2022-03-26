(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4842],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7539:function(e,t,n){"use strict";var r=n(7294),o=(n(7748),function(e){var t=e.children;return r.createElement("div",{style:{backgroundColor:"rgba(255,255,255, .1)",borderRadius:4,color:"#fff",padding:"1.2rem",marginTop:50,display:"flex",alignItems:"center",fontSize:"1.2rem"}},t)});t.Z=function(){return r.createElement(o,null,r.createElement("img",{src:"/img/icon_heart.svg",style:{width:30,height:30,marginRight:20}}),r.createElement("span",null,"Tell us \xa0",r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"/feature-requests/"},"how to improve"),"\xa0 MetaEditor"))}},7748:function(e){var t="metaeditor";e.exports={namespace:t,homepage:"https://metaeditor.io",repo:{url:"https://github.com/markolofsen/metaeditor",git:"https://github.com/markolofsen/metaeditor.git",issues:"https://github.com/markolofsen/metaeditor/issues"},company:{name:"UnrealOS",url:"https://unrealos.com",email:"team@unrealos.com"},seo:{ogImage:"/img/og_default.jpg",title:"MetaEditor \u2014 Pixel Streaming for Unreal Engine (ReactJS)",description:"MetaEditor streamlines PixelStreaming development to allow businesses to easily deploy and customize their ReactJS application for Unreal Engine."},contacts:{url:"https://unrealos.com/contacts/",discordUrl:"https://discordapp.com/invite/eGHKuQ3BHM",stackoverflowUrl:"https://stackoverflow.com/questions/tagged/metaeditor",twitterUrl:"https://twitter.com/metaeditor"},config:{googleTag:"G-MCJPYV0KFS"},presets:{editUrl:"https://github.com/markolofsen/unrealos_doc/edit/main/"},npmItems:["pixel-streaming","metaeditor"].map((function(e){return{label:e,href:"https://www.npmjs.com/package/"+e}}))}},9399:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=n(7539),c=["components"],s={title:"Commands",sidebar_label:"Commands"},m=void 0,l={unversionedId:"methods/commands",id:"methods/commands",title:"Commands",description:"How to send command",source:"@site/docs/methods/commands.md",sourceDirName:"methods",slug:"/methods/commands",permalink:"/docs/methods/commands",editUrl:"https://github.com/markolofsen/unrealos_doc/edit/main/docs/methods/commands.md",tags:[],version:"current",frontMatter:{title:"Commands",sidebar_label:"Commands"},sidebar:"someSidebar",previous:{title:"Customization",permalink:"/docs/reactjs/ui/customization"},next:{title:"Settings",permalink:"/docs/nodejs/settings"}},u={},d=[{value:"How to send command",id:"how-to-send-command",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-send-command"},"How to send command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Note that the Demo() function must be a child of the MetaEditor component.\n * <MetaEditor {{...}}>\n *    <Demo />\n * </MetaEditor>\n */\n\nimport Button from '@mui/material/Button';\nimport { usePlayer } from 'components/MetaEditor/context/'\n\nfunction Demo() {\n  const player = usePlayer()\n\n  const handleCommand = (type, value, verification_id = null) => event => {\n    player.cmd._emit(type, value, verification_id)\n  }\n\n  return (\n    <Button onClick={handleCommand('demo_command', { anyObject: [.1, 3.14] })}>\n      Send command to Unreal Engine\n    </Button>\n  )\n}\n")),(0,a.kt)(i.Z,{mdxType:"DocsMessage"}))}f.isMDXComponent=!0}}]);