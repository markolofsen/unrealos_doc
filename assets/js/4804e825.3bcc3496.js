(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8605],{4137:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7539:function(t,e,n){"use strict";var a=n(7294),r=(n(7748),function(t){var e=t.children;return a.createElement("div",{style:{backgroundColor:"rgba(255,255,255, .1)",borderRadius:4,color:"#fff",padding:"1.2rem",marginTop:50,display:"flex",alignItems:"center",fontSize:"1.2rem"}},e)});e.Z=function(){return a.createElement(r,null,a.createElement("img",{src:"/img/icon_heart.svg",style:{width:30,height:30,marginRight:20}}),a.createElement("span",null,"Tell us \xa0",a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"/feature-requests/"},"how to improve"),"\xa0 MetaEditor"))}},7748:function(t){var e="metaeditor";t.exports={namespace:e,homepage:"https://metaeditor.io",repo:{url:"https://github.com/markolofsen/metaeditor",git:"https://github.com/markolofsen/metaeditor.git",issues:"https://github.com/markolofsen/metaeditor/issues"},company:{name:"UnrealOS",url:"https://unrealos.com",email:"info@unrealos.com"},seo:{ogImage:"/img/og_default.jpg",title:"MetaEditor \u2014 Pixel Streaming for Unreal Engine (ReactJS)",description:"MetaEditor streamlines PixelStreaming development to allow businesses to easily deploy and customize their ReactJS application for Unreal Engine."},contacts:{url:"https://unrealos.com/contacts/",discordUrl:"https://discordapp.com/invite/eGHKuQ3BHM",stackoverflowUrl:"https://stackoverflow.com/questions/tagged/metaeditor",twitterUrl:"https://twitter.com/metaeditor"},config:{googleTag:"G-MCJPYV0KFS"},presets:{editUrl:"https://github.com/markolofsen/unrealos_doc/edit/main/"},npmItems:["pixel-streaming","metaeditor"].map((function(t){return{label:t,href:"https://www.npmjs.com/package/"+t}}))}},9786:function(t,e,n){"use strict";n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),i=n(7539),o=["components"],d={title:"Node module settings",sidebar_label:"Settings"},p="Module for node.js",s={unversionedId:"nodejs/settings",id:"nodejs/settings",title:"Node module settings",description:"Connects to running STUN and TURN Servers.",source:"@site/docs/nodejs/settings.md",sourceDirName:"nodejs",slug:"/nodejs/settings",permalink:"/docs/nodejs/settings",editUrl:"https://github.com/markolofsen/unrealos_doc/edit/main/docs/nodejs/settings.md",tags:[],version:"current",frontMatter:{title:"Node module settings",sidebar_label:"Settings"},sidebar:"someSidebar",previous:{title:"Theme",permalink:"/docs/reactjs/ui/material/theme"},next:{title:"Hot keys",permalink:"/docs/dev/hotkeys"}},m={},u=[{value:"Module installation",id:"module-installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Send command to stream server",id:"send-command-to-stream-server",level:2},{value:"Attention!",id:"attention",level:2},{value:"Built With",id:"built-with",level:2}],c={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"module-for-nodejs"},"Module for node.js"),(0,l.kt)("p",null,"Connects to running ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/PixelStreaming/Hosting/"},"STUN and TURN Servers"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"module-installation"},"Module installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install pixel-streaming\n# or yarn add pixel-streaming\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\n\n// libs\nimport PixelStreaming, {DebugData} from 'pixel-streaming';\n\nfunction App() {\n  const refPixelStreaming = React.useRef(null)\n  const [serverData, setServerData] = React.useState({host: 'http://127.0.0.1', port: 80})\n\n  const actionClass = new class {\n    constructor() {\n      this.ref = refPixelStreaming.current\n    }\n\n    _emit(type, value, verification_id=undefined) {\n      this.ref.emit({type, value, verification_id})\n    }\n\n    emitTestCommand(value) {\n      this._emit('test_command_type', value)\n    }\n  }\n\n  const renderForm = ({state, initConnection}) => {\n    if(state.loaded) {\n      return (\n        <button onClick={() => actionClass.emitTestCommand(11)}>\n          Test command\n        </button>\n      )\n    }\n\n    return (\n      <form onSubmit={(event) => {\n        event.preventDefault()\n        event.stopPropagation()\n\n        initConnection()\n      }}>\n        <input type=\"text\" placeholder=\"http://127.0.0.1\" value={serverData.host} onChange={(event) => setServerData(c => ({\n          ...c, host: event.target.value\n        }))} />\n        <input style={{width: 50}} type=\"number\" placeholder=\"80\" value={serverData.port} onChange={(event) => setServerData(c => ({\n          ...c, port: event.target.value\n        }))} />\n        <button type=\"submit\">Connect</button>\n      </form>\n    )\n  }\n\n  return (\n    <div>\n\n      <PixelStreaming\n        ref={refPixelStreaming}\n        onLoad={(payload) => {\n          console.warn('loaded', payload);\n        }}\n        onConnect={() => {\n          console.warn('connected');\n        }}\n        onRestart={() => {\n          // ...\n        }}\n        onError={(payload) => {\n          console.error('error', payload);\n        }}\n        onClose={(payload) => {\n          console.error('closed', payload);\n        }}\n        onCallback={(payload => {\n          console.warn('callback', payload);\n        })}\n        onProgress={(payload) => {\n          console.warn('progress', payload);\n        }}\n        onDebug={(payload) => {\n          console.warn('debug', payload);\n        }}\n        secondsToStart={300}\n        autoConnect={false}\n        host={serverData.host}\n        port={serverData.port} >\n        {({state, initConnection}) => (\n          <div style={{padding: 30}}>\n\n            {renderForm({state, initConnection})}\n\n            {<pre>{JSON.stringify(state, null, 4)}</pre>}\n\n            <DebugData\n              show\n              style={{width: 300, backgroundColor: 'rgba(0,0,0,.2)'}}\n            />\n\n          </div>\n        )}\n      </PixelStreaming>\n\n    </div>\n  )\n}\n\nexport default App\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secondsToStart"),(0,l.kt)("td",{parentName:"tr",align:null},"Approximate stream start time in seconds.",(0,l.kt)("br",null),"Default:\xa0",(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoConnect"),(0,l.kt)("td",{parentName:"tr",align:null},"Connect to stream automatically.\xa0",(0,l.kt)("br",null),"Default:\xa0",(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bool"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"String host to url with signal server.",(0,l.kt)("br",null),"If host starts wih\xa0",(0,l.kt)("inlineCode",{parentName:"td"},"https"),"\xa0then it will be used ",(0,l.kt)("inlineCode",{parentName:"td"},"wss"),"\xa0",(0,l.kt)("br",null),"If starts with ",(0,l.kt)("inlineCode",{parentName:"td"},"http"),"\xa0then will be used ",(0,l.kt)("inlineCode",{parentName:"td"},"ws"),(0,l.kt)("br",null),"Example: ",(0,l.kt)("inlineCode",{parentName:"td"},"https://uuid1234567890.streamdomain.com")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port of signal server.",(0,l.kt)("br",null),"Default:\xa0",(0,l.kt)("inlineCode",{parentName:"td"},"80")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"children"),(0,l.kt)("td",{parentName:"tr",align:null},"The function receives parameters and renders the nested component ",(0,l.kt)("br",null),"Example: ",(0,l.kt)("inlineCode",{parentName:"td"},"{(payload) => (...)}")," ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Incoming parameters:"),"\xa0",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"state")," \u2014 ",(0,l.kt)("a",{parentName:"td",href:"#ps-state"},"Object with state data"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"initConnection()")," \u2014\xa0If ",(0,l.kt)("inlineCode",{parentName:"td"},"autoConnect={false}"),", then use the ",(0,l.kt)("inlineCode",{parentName:"td"},"initConnection()")," function to manually connect to the stream."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onLoad"),(0,l.kt)("td",{parentName:"tr",align:null},"When the stream started"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onConnect"),(0,l.kt)("td",{parentName:"tr",align:null},"Called when the stream is running"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onRestart"),(0,l.kt)("td",{parentName:"tr",align:null},"Called when the stream is restarted"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onError"),(0,l.kt)("td",{parentName:"tr",align:null},"Called on errors in the webrtc connection"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onClose"),(0,l.kt)("td",{parentName:"tr",align:null},"Called if the webrtc connection is closed"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onCallback"),(0,l.kt)("td",{parentName:"tr",align:null},"Called when the stream server sends callbacks"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onProgress"),(0,l.kt)("td",{parentName:"tr",align:null},"Return progress in percentage based on ",(0,l.kt)("inlineCode",{parentName:"td"},"secondsToStart")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDebug"),(0,l.kt)("td",{parentName:"tr",align:null},"Incoming parameters:",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"onDebug={({type, payload}) => {...}}"),(0,l.kt)("br",null),(0,l.kt)("br",null),"Types: ",(0,l.kt)("inlineCode",{parentName:"td"},"func, log, warn, info, error")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function"))))),(0,l.kt)("h2",{id:"ps-state"},"Reference object data"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"refPixelStreaming.current.state")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aggregated_stats"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback_caller"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback_loading"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"closed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"last_interaction"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loaded"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mouse_moving"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quality_speed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resolution_multiplier"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1.5")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream_config"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"users_count"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"window_size"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{width:\xa00,\xa0height:\xa00}")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"send-command-to-stream-server"},"Send command to stream server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"refPixelStreaming.current.emit({\n type: 'string', //key of command\n value: 0, //string, bool, number\n verification_id: undefined, //server response with execute command by verification id\n})\n")),(0,l.kt)("h2",{id:"attention"},"Attention!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"React v.",(0,l.kt)("inlineCode",{parentName:"p"},"17.0.2"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Apply style ",(0,l.kt)("inlineCode",{parentName:"p"},"pointerEvents: 'none'")," to all JSX elements that overlap the stream."))),(0,l.kt)("h2",{id:"built-with"},"Built With"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React"),"\xa0- A JavaScript library for building user interfaces"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.unrealengine.com/5.0/en-US"},"Unreal Engine Pixel Streaming"),"\xa0- Library for Unreal Engine."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/styled-jss"},"Styled Jss")," - Styled Components on top of JSS")),(0,l.kt)(i.Z,{mdxType:"DocsMessage"}))}k.isMDXComponent=!0}}]);