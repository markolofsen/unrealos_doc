"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4705],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1432:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],p={title:"Deployment to GitHub pages",sidebar_label:"Deployment"},l=void 0,s={unversionedId:"metaeditor/settings/deployment",id:"metaeditor/settings/deployment",title:"Deployment to GitHub pages",description:"Complete the steps one by one",source:"@site/docs/metaeditor/settings/deployment.md",sourceDirName:"metaeditor/settings",slug:"/metaeditor/settings/deployment",permalink:"/docs/metaeditor/settings/deployment",editUrl:"https://github.com/markolofsen/unrealos_doc/edit/main/docs/metaeditor/settings/deployment.md",tags:[],version:"current",frontMatter:{title:"Deployment to GitHub pages",sidebar_label:"Deployment"},sidebar:"someSidebar",previous:{title:"Streaming",permalink:"/docs/metaeditor/settings/streaming"},next:{title:"Upgrade",permalink:"/docs/metaeditor/settings/upgrade"}},m={},c=[{value:"Complete the steps one by one",id:"complete-the-steps-one-by-one",level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"complete-the-steps-one-by-one"},"Complete the steps one by one"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First, create a repository on GitHub with a copy of MetaEditor")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the ",(0,a.kt)("a",{parentName:"p",href:"#configuration"},"configuration"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn deploy")," from the root directory")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"hg-pages")," branch of your project in GitHub and create an empty file ",(0,a.kt)("inlineCode",{parentName:"p"},".nojekyll")," in the folders below:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/.../tree/gh-pages/"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/.../tree/gh-pages/_next/"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can set your custom domain at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/.../settings/pages"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Done!"))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Open ",(0,a.kt)("inlineCode",{parentName:"strong"},"/.deploy/index.js")," and set:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"username")," \u2014\xa0Your github account")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"reponame")," \u2014 Repository name"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Deploy {\n  constructor() {\n    //...\n    this.repo_url = 'https://github.com/{username}/{reponame}'\n  }\n  //...\n}\n")))}d.isMDXComponent=!0}}]);