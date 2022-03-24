(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3112],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8191:function(e,t,n){"use strict";var r=n(7294),o=n(6871),a=n.n(o),i=function(e){var t=e.children;return r.createElement("div",{style:{backgroundColor:"rgba(255,255,255, .1)",borderRadius:4,color:"#fff",padding:"1.2rem",marginTop:50,display:"flex",alignItems:"center",fontSize:"1.2rem"}},t)};t.Z=function(){return r.createElement(i,null,r.createElement("img",{src:"/img/icon_heart.svg",style:{width:30,height:30,marginRight:20}}),"Tell us \xa0",r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a().repo.issues+"/new"},"how to improve"),"\xa0 MetaEditor")}},6871:function(e){var t="metaeditor";e.exports={namespace:t,homepage:"https://metaeditor.io",repo:{url:"https://github.com/markolofsen/metaeditor",git:"https://github.com/markolofsen/metaeditor.git",issues:"https://github.com/markolofsen/metaeditor/issues"},company:{name:"UnrealOS",url:"https://unrealos.com",email:"info@unrealos.com"},seo:{ogImage:"/img/og_default.jpg",title:"MetaEditor \u2014 Pixel Streaming for Unreal Engine (ReactJS)",description:"MetaEditor streamlines PixelStreaming development to allow businesses to easily deploy and customize their ReactJS application for Unreal Engine."},contacts:{url:"https://unrealos.com/contacts/",discordUrl:"https://discordapp.com/invite/eGHKuQ3BHM",stackoverflowUrl:"https://stackoverflow.com/questions/tagged/metaeditor",twitterUrl:"https://twitter.com/metaeditor"},config:{googleTag:"G-MCJPYV0KFS"},presets:{editUrl:"https://github.com/markolofsen/unrealos_doc/edit/main/"},npmItems:["pixel-streaming","metaeditor"].map((function(e){return{label:e,href:"https://www.npmjs.com/package/"+e}}))}},1239:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=n(8191),l=["components"],p={title:"Deployment to GitHub pages",sidebar_label:"Deployment"},s=void 0,c={unversionedId:"reactjs/deployment",id:"reactjs/deployment",title:"Deployment to GitHub pages",description:"Complete the steps one by one",source:"@site/docs/reactjs/deployment.md",sourceDirName:"reactjs",slug:"/reactjs/deployment",permalink:"/docs/reactjs/deployment",editUrl:"https://github.com/markolofsen/unrealos_doc/edit/main/docs/reactjs/deployment.md",tags:[],version:"current",frontMatter:{title:"Deployment to GitHub pages",sidebar_label:"Deployment"},sidebar:"someSidebar",previous:{title:"Streaming",permalink:"/docs/reactjs/streaming"},next:{title:"Icons",permalink:"/docs/reactjs/ui/material/icons"}},m=[{value:"Complete the steps one by one",id:"complete-the-steps-one-by-one",children:[],level:2}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"complete-the-steps-one-by-one"},"Complete the steps one by one"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First, create a repository on GitHub with a copy of MetaEditor")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the ",(0,a.kt)("a",{parentName:"p",href:"#configuration"},"configuration"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn deploy")," from the root directory")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"hg-pages")," branch of your project in GitHub and create an empty file ",(0,a.kt)("inlineCode",{parentName:"p"},".nojekyll")," in the folders below:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/.../tree/gh-pages/"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/.../tree/gh-pages/_next/"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can set your custom domain at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/.../settings/pages"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Done!"))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Open ",(0,a.kt)("inlineCode",{parentName:"strong"},"/.deploy/index.js")," and set:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"username")," \u2014\xa0Your github account")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"reponame")," \u2014 Repository name"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Deploy {\n  constructor() {\n    //...\n    this.repo_url = 'https://github.com/{username}/{reponame}'\n  }\n  //...\n}\n")),(0,a.kt)(i.Z,{mdxType:"DocsMessage"}))}d.isMDXComponent=!0}}]);