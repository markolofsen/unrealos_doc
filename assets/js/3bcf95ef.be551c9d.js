"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[418],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1521:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),l=["components"],i={title:"Technical Specs",sidebar_label:"Technical Specs"},u=void 0,c={unversionedId:"streaming/spec",id:"version-1.1.0/streaming/spec",title:"Technical Specs",description:"Supported Game Engines",source:"@site/versioned_docs/version-1.1.0/streaming/spec.md",sourceDirName:"streaming",slug:"/streaming/spec",permalink:"/docs/1.1.0/streaming/spec",tags:[],version:"1.1.0",frontMatter:{title:"Technical Specs",sidebar_label:"Technical Specs"},sidebar:"someSidebar",previous:{title:"Description",permalink:"/docs/1.1.0/streaming/desc"},next:{title:"FAQ",permalink:"/docs/1.1.0/streaming/faq"}},p={},s=[{value:"Supported Game Engines",id:"supported-game-engines",level:3},{value:"Supported Browsers",id:"supported-browsers",level:3},{value:"Supported Resolutions",id:"supported-resolutions",level:3},{value:"Bandwidth Requirements",id:"bandwidth-requirements",level:3},{value:"Performance",id:"performance",level:3},{value:"Cloud Service",id:"cloud-service",level:3},{value:"Scaling",id:"scaling",level:3},{value:"Supported GPUs",id:"supported-gpus",level:3},{value:"Supported Regions",id:"supported-regions",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"supported-game-engines"},"Supported Game Engines"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unreal Engine 4.27, 5.0;")),(0,a.kt)("h3",{id:"supported-browsers"},"Supported Browsers"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Desktop. Chrome, Firefox, Safari and Edge.\n(Chrome performs best)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Mobile. Mobile Chrome (Android 7+) and Mobile Safari (iOS 12+).")),(0,a.kt)("h3",{id:"supported-resolutions"},"Supported Resolutions"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Up to 1080p (720p recommended for better performance).")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By default resolution dynamically changed to be that of browser window size.")),(0,a.kt)("h3",{id:"bandwidth-requirements"},"Bandwidth Requirements"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Minimum of 5 Mbps bandwidth recommended per user / stream")),(0,a.kt)("h3",{id:"performance"},"Performance"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Streaming framerate (fps) is dependent on game complexity (polygon count, lighting, particle effects, etc.), as well as the client\u2019s browser resolution, network latency, bandwidth, and hardware specification.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"On intracontinental network links, average frame rates between 30 and 60 fps are typical when streaming multi-million polygon models at 720p to commodity grade end user devices (between 20 and 40 fps for 1080p).")),(0,a.kt)("h3",{id:"cloud-service"},"Cloud Service"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reality runs on Amazon Web Services")),(0,a.kt)("h3",{id:"scaling"},"Scaling"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Capacity is dynamically scaled based on usage within a specifiable minimum and maximum range.")),(0,a.kt)("h3",{id:"supported-gpus"},"Supported GPUs"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NVIDIA Tesla M60 GPU\n8GB GPU memory")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NVIDIA TESLA T4 GPU\n16GB GPU memory and RT cores supporting real-time ray tracing")),(0,a.kt)("h3",{id:"supported-regions"},"Supported Regions"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Oregon")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Virginia")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ireland")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Frankfurt")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tokyo")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Singapore")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Sydney (AWS regions)")))}m.isMDXComponent=!0}}]);