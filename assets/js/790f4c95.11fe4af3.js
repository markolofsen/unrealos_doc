"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4978],{4137:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4213:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),i=["components"],o={title:"PixelStreaming settings",sidebar_label:"Settings"},d="PixelStreaming settings",p={unversionedId:"pixel-streaming/settings",id:"pixel-streaming/settings",title:"PixelStreaming settings",description:"Hosting and Networking Guide for Pixel Streaming in Unreal Engine",source:"@site/docs/pixel-streaming/settings.md",sourceDirName:"pixel-streaming",slug:"/pixel-streaming/settings",permalink:"/docs/pixel-streaming/settings",tags:[],version:"current",frontMatter:{title:"PixelStreaming settings",sidebar_label:"Settings"},sidebar:"someSidebar",previous:{title:"Demo",permalink:"/docs/pixel-streaming/demo"},next:{title:"Methods",permalink:"/docs/pixel-streaming/samples"}},m={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Context",id:"context",level:2},{value:"Send command to stream server",id:"send-command-to-stream-server",level:2},{value:"Event for handling callbacks from Unreal Engine",id:"event-for-handling-callbacks-from-unreal-engine",level:2},{value:"Attention!",id:"attention",level:2},{value:"Built With",id:"built-with",level:2}],u={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pixelstreaming-settings"},"PixelStreaming settings"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US/hosting-and-networking-guide-for-pixel-streaming-in-unreal-engine/"},"Hosting and Networking Guide for Pixel Streaming in Unreal Engine"))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add pixel-streaming\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from \"react\";\n\n// libs\nimport PixelStreaming, { usePS, DebugData } from 'pixel-streaming'\n\nexport default function Player(props) {\n    const refPixelStreaming = React.useRef(null);\n\n    const handleConnection = () => {\n        refPixelStreaming.current.connector.initConnection()\n    }\n\n    return (\n        <div>\n            <button onClick={handleConnection}>Connect</button>\n            <PixelStreaming\n                ref={refPixelStreaming}\n                onLoad={(payload) => {\n                    // console.warn('loaded', payload);\n                }}\n                onConnect={() => {\n                    // console.warn('connected');\n                }}\n                onRestart={() => {\n                    // console.warn('onRestart');\n                }}\n                onError={(payload) => {\n                    // console.error('error', payload);\n                }}\n                onClose={(payload) => {\n                    // console.error('closed', payload);\n                }}\n                onProgress={(payload) => {\n                    // console.warn('progress', payload);\n                }}\n                settings={{\n                    volume: 1,\n                    quality: 1,\n                    connectOnStart: false,\n\n                    host: 'http://127.0.0.1',\n                    port: 80,\n\n                    pixelStreaming: {\n                        warnTimeout: 120,\n                        closeTimeout: 10,\n                        lockMouse: false,\n                        fakeMouseWithTouches: false,\n                    }\n                }}\n                metaSettings={{\n                    isDev: true,\n                    showDevTools: true,\n                    notifyCommands: true,\n                    notifyCallbacks: true,\n                }}\n            >\n                {(payload) => <div style={{ padding: 30 }}>{props.children}</div>}\n            </PixelStreaming>\n        </div>\n    );\n}\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metaSettings"),(0,l.kt)("td",{parentName:"tr",align:null},"Settings for MetaEditor"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings.pixelStreaming"),(0,l.kt)("td",{parentName:"tr",align:null},"Pixel Streaming Configuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings.connectOnStart"),(0,l.kt)("td",{parentName:"tr",align:null},"Connect to stream automatically.\xa0",(0,l.kt)("br",null),"Default:\xa0",(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bool"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings.host"),(0,l.kt)("td",{parentName:"tr",align:null},"String host to url with signal server.",(0,l.kt)("br",null),"If host starts wih\xa0",(0,l.kt)("inlineCode",{parentName:"td"},"https"),"\xa0then it will be used ",(0,l.kt)("inlineCode",{parentName:"td"},"wss"),"\xa0",(0,l.kt)("br",null),"If starts with ",(0,l.kt)("inlineCode",{parentName:"td"},"http"),"\xa0then will be used ",(0,l.kt)("inlineCode",{parentName:"td"},"ws"),(0,l.kt)("br",null),"Example: ",(0,l.kt)("inlineCode",{parentName:"td"},"https://uuid1234567890.streamdomain.com")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings.port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port of signal server.",(0,l.kt)("br",null),"Default:\xa0",(0,l.kt)("inlineCode",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"children"),(0,l.kt)("td",{parentName:"tr",align:null},"The function receives parameters and renders the nested component ",(0,l.kt)("br",null),"Example: ",(0,l.kt)("inlineCode",{parentName:"td"},"{(payload) => (...)}")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Incoming parameters:"),"\xa0",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"state")," \u2014 ",(0,l.kt)("a",{parentName:"td",href:"#ps-state"},"Object with state data"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"initConnection()")," \u2014\xa0If ",(0,l.kt)("inlineCode",{parentName:"td"},"autoConnect={false}"),", then use the ",(0,l.kt)("inlineCode",{parentName:"td"},"initConnection()")," function to manually connect to the stream."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onLoad"),(0,l.kt)("td",{parentName:"tr",align:null},"When the stream started"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onConnect"),(0,l.kt)("td",{parentName:"tr",align:null},"Called when the stream is running"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRestart"),(0,l.kt)("td",{parentName:"tr",align:null},"Called when the stream is restarted"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onError"),(0,l.kt)("td",{parentName:"tr",align:null},"Called on errors in the webrtc connection"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClose"),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the webrtc connection is closed"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onProgress"),(0,l.kt)("td",{parentName:"tr",align:null},"Return progress in percentage based on ",(0,l.kt)("inlineCode",{parentName:"td"},"secondsToStart")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function"))))),(0,l.kt)("h2",{id:"ps-state"},"Reference object data"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"refPixelStreaming.current.state")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aggregated_stats"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback_caller"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback_loading"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"last_interaction"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loaded"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mouse_moving"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quality_speed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resolution_multiplier"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1.5")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream_config"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"users_count"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"window_size"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{width:\xa00,\xa0height:\xa00}")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"context"},"Context"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import PixelStreaming, { usePS, DebugData } from 'pixel-streaming'\n\nfunction App() {\n\n    // Do not initialize this hook more than once!\n    const PS = usePS()\n\n    const handleConnection = () => {\n        PS.connector.initConnection()\n    }\n    \n    return (...)\n}\n")),(0,l.kt)("h2",{id:"send-command-to-stream-server"},"Send command to stream server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"refPixelStreaming.current.emitAsync({\n verification_id: undefined, //server response with execute command by verification id\n command: 'user_sound', //key of command\n request: {\n   body: {\n     volume: 1,\n   }   \n },\n})\n")),(0,l.kt)("h2",{id:"event-for-handling-callbacks-from-unreal-engine"},"Event for handling callbacks from Unreal Engine"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'refPixelStreaming.current.useTrigger({\n  onCommand: (payload) => {\n    alert(JSON.stringify(payload))\n  },\n  onCallback: (payload) => {\n    alert(JSON.stringify(payload))\n  },\n})\n\n/*\n// Response Example:\n\n{\n    "verification_id": "autogenerated__1",\n    "initiator": "browser",\n    "command": "user_sound",\n    "request": {\n        "body": {\n            "volume": 1\n        }\n    },\n    "response": {\n        "time": "Apr 20, 2022, 6:20:15 AM",\n        "body": {\n            "volume": 1\n        }\n    }\n}\n*/\n')),(0,l.kt)("h2",{id:"attention"},"Attention!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"React v.",(0,l.kt)("inlineCode",{parentName:"p"},"17.0.2"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Apply style ",(0,l.kt)("inlineCode",{parentName:"p"},"pointerEvents: 'none'")," to all JSX elements that overlap the stream."))),(0,l.kt)("h2",{id:"built-with"},"Built With"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React"),"\xa0- A JavaScript library for building user interfaces"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.unrealengine.com/5.0/en-US"},"Unreal Engine Pixel Streaming"),"\xa0- Library for Unreal Engine."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/styled-jss"},"Styled Jss")," - Styled Components on top of JSS")))}k.isMDXComponent=!0}}]);