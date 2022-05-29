"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6269],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6203:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=["components"],l={title:"Pixel Streaming Installation",sidebar_label:"Installation"},s="PixelStreaming settings",u={unversionedId:"metaeditor/installation",id:"metaeditor/installation",title:"Pixel Streaming Installation",description:"Official Guide for Pixel Streaming",source:"@site/docs/metaeditor/installation.md",sourceDirName:"metaeditor",slug:"/metaeditor/installation",permalink:"/docs/metaeditor/installation",tags:[],version:"current",frontMatter:{title:"Pixel Streaming Installation",sidebar_label:"Installation"},sidebar:"someSidebar",previous:{title:"Demo",permalink:"/docs/guide/demo"},next:{title:"Context Provider",permalink:"/docs/metaeditor/settings/context_provider"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Settings",id:"settings",level:2},{value:"Attention!",id:"attention",level:2},{value:"Built With",id:"built-with",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pixelstreaming-settings"},"PixelStreaming settings"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US/hosting-and-networking-guide-for-pixel-streaming-in-unreal-engine/"},"Official Guide for Pixel Streaming")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install rsuite pixel-streaming\n# or\nyarn add rsuite pixel-streaming\n")),(0,i.kt)("h2",{id:"settings"},"Settings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Player.tsx"',title:'"src/Player.tsx"'},"import React from 'react'\n\n// libs\nimport { Player, ContextProvider, usePlayer, useSystem, PlayerPropsSchema } from 'pixel-streaming'\n\n\nconst PlayerContext: React.FC<any> = ({ build }: any) => {\n  const player = usePlayer()\n  const system = useSystem()\n\n  React.useEffect(() => {\n\n    if (player.cls.initReady) {\n      // player.cls.initPlayer('https://i-00c56684d4fff23e4.cloudvec.com')\n      system.cls.connectBuild(build)\n    }\n\n  }, [player.cls.initReady])\n\n  return (\n    <Player {...playerConfig} />\n  )\n\n}\n\nconst playerConfig: PlayerPropsSchema = {\n  // apiKey: '3e9e49c6-60eb-469b-80b6-9a9b53fa7f73',\n  metaConfig: {\n    showToolbar: true,\n    showQuickMenu: true,\n    showDevBar: true,\n    showOverlay: true,\n    notifications: {\n      showCommands: false,\n      showCallbacks: false,\n      placement: 'topStart',\n    },\n    videoUrl: null,\n    issuesUrl: 'https://metaeditor.io/feature-requests/',\n  },\n  config: {\n    secondsToKill: 60 * 5,\n    secondsToStart: 0,\n    autoRestart: true,\n  },\n  psConfig: {\n    enableVerboseLogging: false,\n    enableSpsAutoplay: true,\n    startVideoMuted: false,\n    autoPlayAudio: false,\n    controlScheme: 1,\n    suppressBrowserKeys: true,\n    fakeMouseWithTouches: true,\n  },\n  ueSettings: {\n    Encoder: {\n      TargetBitrate: -1,\n      MaxBitrate: 20000000,\n      MinQP: 0, //-1\n      MaxQP: 51, //-1\n      RateControl: 'CBR', //\"CBR\" | \"VBR\" | \"ConstQP\"\n      FillerData: true,\n      MultiPass: 'FULL', //\"DISABLED\" | \"QUARTER\" | \"FULL\";\n    },\n    WebRTC: {\n      DegradationPref: 'MAINTAIN_FRAMERATE', //\"BALANCED\" | \"MAINTAIN_FRAMERATE\" | \"MAINTAIN_RESOLUTION\";\n      MinBitrate: 100000,\n      MaxBitrate: 20000000,\n      LowQP: 25,\n      HighQP: 37,\n      MaxFPS: 60,\n      FPS: 60,\n    },\n    Console: {\n      cursor: false,\n      hudSats: true,\n    }\n  }\n}\n\nconst CustomPlayer: React.FC<any> = ({ build }) => (\n  <ContextProvider>\n    <PlayerContext build={build} />\n  </ContextProvider>\n)\n\nexport default CustomPlayer\n")),(0,i.kt)("h2",{id:"attention"},"Attention!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React ",(0,i.kt)("inlineCode",{parentName:"p"},"18.1.0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Node ",(0,i.kt)("inlineCode",{parentName:"p"},"16.*")))),(0,i.kt)("h2",{id:"built-with"},"Built With"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"\xa0\u2014 A JavaScript library for building user interfaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://metaeditor.io/"},"MetaEditor")," \u2014 Complete set of tools for professional developing and running the Unreal Engine\u2019s Applications in browsers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US"},"Unreal Engine Pixel Streaming"),"\xa0\u2014 Library for Unreal Engine.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/rsuite"},"React Suite")," \u2014\xa0Set of react component libraries for enterprise system products."))))}f.isMDXComponent=!0}}]);