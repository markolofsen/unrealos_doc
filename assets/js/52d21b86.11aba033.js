(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[738],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8191:function(e,t,r){"use strict";var n=r(7294),o=(r(6871),function(e){var t=e.children;return n.createElement("div",{style:{backgroundColor:"rgba(255,255,255, .1)",borderRadius:4,color:"#fff",padding:"1.2rem",marginTop:50,display:"flex",alignItems:"center",fontSize:"1.2rem"}},t)});t.Z=function(){return n.createElement(o,null,n.createElement("img",{src:"/img/icon_heart.svg",style:{width:30,height:30,marginRight:20}}),n.createElement("span",null,"Tell us \xa0",n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"/feature-requests/"},"how to improve"),"\xa0 MetaEditor"))}},6871:function(e){var t="metaeditor";e.exports={namespace:t,homepage:"https://metaeditor.io",repo:{url:"https://github.com/markolofsen/metaeditor",git:"https://github.com/markolofsen/metaeditor.git",issues:"https://github.com/markolofsen/metaeditor/issues"},company:{name:"UnrealOS",url:"https://unrealos.com",email:"info@unrealos.com"},seo:{ogImage:"/img/og_default.jpg",title:"MetaEditor \u2014 Pixel Streaming for Unreal Engine (ReactJS)",description:"MetaEditor streamlines PixelStreaming development to allow businesses to easily deploy and customize their ReactJS application for Unreal Engine."},contacts:{url:"https://unrealos.com/contacts/",discordUrl:"https://discordapp.com/invite/eGHKuQ3BHM",stackoverflowUrl:"https://stackoverflow.com/questions/tagged/metaeditor",twitterUrl:"https://twitter.com/metaeditor"},config:{googleTag:"G-MCJPYV0KFS"},presets:{editUrl:"https://github.com/markolofsen/unrealos_doc/edit/main/"},npmItems:["pixel-streaming","metaeditor"].map((function(e){return{label:e,href:"https://www.npmjs.com/package/"+e}}))}},5039:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),l=r(8191),i=["components"],c={title:"Technical Specs",sidebar_label:"Technical Specs"},u=void 0,s={unversionedId:"streaming/spec",id:"streaming/spec",title:"Technical Specs",description:"Supported Game Engines",source:"@site/docs/streaming/spec.md",sourceDirName:"streaming",slug:"/streaming/spec",permalink:"/docs/streaming/spec",editUrl:"https://github.com/markolofsen/unrealos_doc/edit/main/docs/streaming/spec.md",tags:[],version:"current",frontMatter:{title:"Technical Specs",sidebar_label:"Technical Specs"}},p=[{value:"Supported Game Engines",id:"supported-game-engines",children:[],level:3},{value:"Supported Browsers",id:"supported-browsers",children:[],level:3},{value:"Supported Resolutions",id:"supported-resolutions",children:[],level:3},{value:"Bandwidth Requirements",id:"bandwidth-requirements",children:[],level:3},{value:"Performance",id:"performance",children:[],level:3},{value:"Cloud Service",id:"cloud-service",children:[],level:3},{value:"Scaling",id:"scaling",children:[],level:3},{value:"Supported GPUs",id:"supported-gpus",children:[],level:3},{value:"Supported Regions",id:"supported-regions",children:[],level:3}],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"supported-game-engines"},"Supported Game Engines"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unreal Engine 4.23, 4.24, 4.26;\nUnity 2018.4, 2019.1 or 2019.2, 2020.2")),(0,a.kt)("h3",{id:"supported-browsers"},"Supported Browsers"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Desktop. Chrome, Firefox, Safari and Edge.\n(Chrome performs best)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Mobile. Mobile Chrome (Android 7+) and Mobile Safari (iOS 12+).")),(0,a.kt)("h3",{id:"supported-resolutions"},"Supported Resolutions"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Up to 1080p (720p recommended for better performance).")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By default resolution dynamically changed to be that of browser window size.")),(0,a.kt)("h3",{id:"bandwidth-requirements"},"Bandwidth Requirements"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Minimum of 5 Mbps bandwidth recommended per user / stream")),(0,a.kt)("h3",{id:"performance"},"Performance"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Streaming framerate (fps) is dependent on game complexity (polygon count, lighting, particle effects, etc.), as well as the client\u2019s browser resolution, network latency, bandwidth, and hardware specification.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"On intracontinental network links, average frame rates between 30 and 60 fps are typical when streaming multi-million polygon models at 720p to commodity grade end user devices (between 20 and 40 fps for 1080p).")),(0,a.kt)("h3",{id:"cloud-service"},"Cloud Service"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reality runs on Amazon Web Services")),(0,a.kt)("h3",{id:"scaling"},"Scaling"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Capacity is dynamically scaled based on usage within a specifiable minimum and maximum range.")),(0,a.kt)("h3",{id:"supported-gpus"},"Supported GPUs"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NVIDIA Tesla M60 GPU\n8GB GPU memory")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NVIDIA TESLA T4 GPU\n16GB GPU memory and RT cores supporting real-time ray tracing")),(0,a.kt)("h3",{id:"supported-regions"},"Supported Regions"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Oregon")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Virginia")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ireland")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Frankfurt")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tokyo")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Singapore")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Sydney (AWS regions)")),(0,a.kt)(l.Z,{mdxType:"DocsMessage"}))}d.isMDXComponent=!0}}]);