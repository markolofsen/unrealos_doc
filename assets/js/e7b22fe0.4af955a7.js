(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6996],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8529:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=n(7748),c=n.n(a),l=["components"],u={title:"Community"},s="We are actively developing MetaEditor, any feedback is welcome!",p={type:"mdx",permalink:"/community",source:"@site/src/pages/community.md",title:"Community",description:"Community",frontMatter:{title:"Community"}},m=[{value:"Community",id:"community",level:2},{value:"Cooperation",id:"cooperation",level:2}],f={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"we-are-actively-developing-metaeditor-any-feedback-is-welcome"},"We are actively developing MetaEditor, any feedback is welcome!"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("a",{href:"/feature-requests/"},"Feature Requests")),(0,i.kt)("li",null,"Ask your question on ",(0,i.kt)("a",{href:c().contacts.stackoverflowUrl},"StackOverflow")),(0,i.kt)("li",null,"Github ",(0,i.kt)("a",{href:c().repo.issues},"Issues")),(0,i.kt)("li",null,"Ask your question in ",(0,i.kt)("a",{href:c().contacts.discordUrl},"Discord App"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"cooperation"},"Cooperation"),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("a",{href:"mailto:"+c().company.email},c().company.email))))}d.isMDXComponent=!0},7748:function(e){var t="metaeditor";e.exports={namespace:t,homepage:"https://metaeditor.io",repo:{url:"https://github.com/markolofsen/metaeditor",git:"https://github.com/markolofsen/metaeditor.git",issues:"https://github.com/markolofsen/metaeditor/issues"},company:{name:"UnrealOS",url:"https://unrealos.com",email:"team@unrealos.com"},seo:{ogImage:"/img/og_default.jpg",title:"React.js Pixel Streaming for Unreal Engine",description:"MetaEditor offers a complete set of tools for professionally developing and running Unreal Engine Applications in browsers."},contacts:{url:"https://unrealos.com/contacts/",discordUrl:"https://discordapp.com/invite/eGHKuQ3BHM",stackoverflowUrl:"https://stackoverflow.com/questions/tagged/metaeditor",twitterUrl:"https://twitter.com/metaunreal",linkedIn:"https://www.linkedin.com/company/unrealos/"},config:{googleTag:"G-MCJPYV0KFS"},presets:{},npmItems:["pixel-streaming","metaeditor"].map((function(e){return{label:e,href:"https://www.npmjs.com/package/"+e}}))}}}]);