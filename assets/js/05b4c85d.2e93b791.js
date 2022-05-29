"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2484],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61850:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"MUI helper",sidebar_label:"Helper"},l=void 0,c={unversionedId:"metaeditor/customization/mui/helper",id:"version-1.1.0/metaeditor/customization/mui/helper",title:"MUI helper",description:"Material Icons finder",source:"@site/versioned_docs/version-1.1.0/metaeditor/customization/mui/helper.md",sourceDirName:"metaeditor/customization/mui",slug:"/metaeditor/customization/mui/helper",permalink:"/docs/1.1.0/metaeditor/customization/mui/helper",tags:[],version:"1.1.0",frontMatter:{title:"MUI helper",sidebar_label:"Helper"},sidebar:"someSidebar",previous:{title:"Theme",permalink:"/docs/1.1.0/metaeditor/customization/mui/theme"},next:{title:"Commands",permalink:"/docs/1.1.0/metaeditor/methods/commands"}},m={},p=[{value:"Material Icons finder",id:"material-icons-finder",level:3},{value:"Samples",id:"samples",level:3},{value:"Styles props",id:"styles-props",level:3},{value:"Transition",id:"transition",level:3},{value:"Breakpoints",id:"breakpoints",level:3},{value:"Font weight",id:"font-weight",level:3}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"material-icons-finder"},"Material Icons finder"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mui.com/components/icons/"},"MUI Icon Component")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fonts.google.com/icons"},"Icons Finder"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Icon from '@mui/material/Icon';\n\n\nreturn (\n    <Icon>document</Icon>\n)\n")),(0,a.kt)("h3",{id:"samples"},"Samples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as React from 'react';\n\n// styles\nimport { styled, css, darken, lighten, alpha, withStyles } from 'metaeditor/common/styles/'\n\nconst RootDiv = styled.div(theme => ({\n}))\n\nconst RootList = styled.ul(theme => ({\n}))\n\nconst Custom = styled.custom(Element, theme => ({\n\n}))\n\n")),(0,a.kt)("h3",{id:"styles-props"},"Styles props"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\n// styles\n\nimport { styled } from 'metaeditor/common/styles/'\n\nconst RootDiv = styled.div(theme => ({\n  borderRadius: css.makeRadius(0, 0, 'auto', 'auto'),\n  borderRadius: css.makeRadius(),\n}))\n\n")),(0,a.kt)("h3",{id:"transition"},"Transition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const useStyles = makeStyles(theme => ({\n    root: {\n        transition: theme.transitions.create(['all', 'width'], {\n            easing: theme.transitions.easing.sharp,\n            duration: theme.transitions.duration.leavingScreen,\n        }),\n    },\n    root: {\n        transition: theme.transitions.create(['all', 'width']),\n    }\n}))\n")),(0,a.kt)("h3",{id:"breakpoints"},"Breakpoints"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const useStyles = makeStyles(theme => ({\n    root: {\n        [theme.breakpoints.down('xs')]: {\n            width: 'auto',\n        },\n        [theme.breakpoints.up('sm')]: {\n            width: 'auto',\n        },\n    },\n}))\n")),(0,a.kt)("h3",{id:"font-weight"},"Font weight"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const useStyles = makeStyles(theme => ({\n    root: {\n\xa0\xa0\xa0\xa0    fontWeight: theme.typography.fontWeightLight,\n    \xa0\xa0\xa0\xa0fontWeight: theme.typography.fontWeightRegular,\n\xa0\xa0\xa0\xa0    fontWeight: theme.typography.fontWeightMedium,\n    \xa0\xa0\xa0\xa0fontWeight: theme.typography.fontWeightBold,\n    },\n}))\n")))}d.isMDXComponent=!0}}]);