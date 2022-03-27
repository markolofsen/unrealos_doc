"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7582],{4137:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,f=d["".concat(i,".").concat(p)]||d[p]||l[p]||a;return t?o.createElement(f,s(s({ref:n},m),{},{components:t})):o.createElement(f,s({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,s[1]=u;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3370:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var o=t(7462),r=t(3366),a=(t(7294),t(4137)),s=["components"],u={title:"Hooks",sidebar_label:"Hooks"},i=void 0,c={unversionedId:"metaeditor/common/hooks",id:"metaeditor/common/hooks",title:"Hooks",description:"useContainerDimensions",source:"@site/docs/metaeditor/common/hooks.md",sourceDirName:"metaeditor/common",slug:"/metaeditor/common/hooks",permalink:"/docs/metaeditor/common/hooks",editUrl:"https://github.com/markolofsen/unrealos_doc/edit/main/docs/metaeditor/common/hooks.md",tags:[],version:"current",frontMatter:{title:"Hooks",sidebar_label:"Hooks"},sidebar:"someSidebar",previous:{title:"Commands",permalink:"/docs/metaeditor/methods/commands"},next:{title:"Styles",permalink:"/docs/metaeditor/common/styles"}},m={},l=[{value:"useContainerDimensions",id:"usecontainerdimensions",level:3},{value:"useCountdown",id:"usecountdown",level:3},{value:"useStateEvents &amp; useReducerEvents",id:"usestateevents--usereducerevents",level:3},{value:"useHotkeys",id:"usehotkeys",level:3},{value:"useSound",id:"usesound",level:3},{value:"useStorage",id:"usestorage",level:3},{value:"useUnload",id:"useunload",level:3},{value:"useWindowSize",id:"usewindowsize",level:3},{value:"ADD MORE!!!",id:"add-more",level:3}],d={toc:l};function p(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"usecontainerdimensions"},"useContainerDimensions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport {useContainerDimensions} from 'metaeditor/common/hooks/'\n\nfunction MyComponent() {\n  const componentRef = React.useRef(null);\n  const { width, height, scrollTop, scrollLeft } = useContainerDimensions(componentRef);\n\n  return (\n    <div ref={componentRef}>\n      <p>width: {width}px</p>\n      <p>height: {height}px</p>\n      <p>scrollTop: {scrollTop}px</p>\n      <p>scrollLeft: {scrollLeft}px</p>\n    <div/>\n  )\n}\n")),(0,a.kt)("h3",{id:"usecountdown"},"useCountdown"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {useCountdown} from 'metaeditor/common/hooks/'\n\nfunction MyComponent() {\n  const countdown = useCountdown({seconds: 60});\n\n  // countdown.start()\n  // countdown.stop()\n  // countdown.value\n}\n")),(0,a.kt)("h3",{id:"usestateevents--usereducerevents"},"useStateEvents & useReducerEvents"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport {useStateEvents, useReducerEvents} from 'metaeditor/common/hooks/'\n\nfunction MyComponent() {\n  const [state, dispatch] = useReducerEvents(reducer, initialState)\n  const [test, setTest] = useStateEvents(false)\n\n  React.useEffect(() => {\n\n    document.addEventListener('demo_key', (e) => {\n      console.log(e.detail)\n      dispatch({...})\n      // or setTest(true)\n    })\n\n  }, [])\n\n  return (<div />)\n}\n")),(0,a.kt)("h3",{id:"usehotkeys"},"useHotkeys"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {useHotkeys} from 'metaeditor/common/hooks/'\n\nfunction MyComponent() {\n  const [amount, setAmount] = useState(0)\n  useHotkeys('ctrl+a', () => setAmount(prevAmount => prevAmount + 100))\n  useHotkeys('ctrl+d', () => setAmount(prevAmount => prevAmount - 100))\n\n  useHotkeys('ctrl+t', (e, ke) => {\n     if(!e.repeat) {\n       console.log(e.repeat);\n       return ;\n     }\n     setAmount(prevAmount => prevAmount - 100)\n   }, [c])\n\n  return (\n    <div>\n      {amount >= 0 ? 'Add' : 'Remove'} {Math.abs(amount)} dollars{' '}\n      {amount >= 0 ? 'from' : 'to'} my bank account.\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"usesound"},"useSound"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {useSound} from 'metaeditor/common/hooks/'\n\nfunction MyComponent() {\n  const sound = useSound('http://.../sound.mp3');\n\n  // sound.play()\n  // sound.stop()\n\n  return (\n    <div>\n      <button onClick={() => sound.play()}>\n        Play sound\n      </button>\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"usestorage"},"useStorage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {useStorage} from 'metaeditor/common/hooks/'\n\nconst STORAGE_KEY = 'DEMO_KEY'\n\nfunction MyComponent() {\n  const storage = useStorage()\n  const [data, setData] = React.useState({name: ''})\n\n  React.useEffect(() => {\n\n    const stored_data = storage.getItem(STORAGE_KEY, 'local')\n    if(typeof stored_data === 'object') {\n      setData(stored_data)\n    }\n\n  }, [])\n\n  const handleChange = (key) => (event) => {\n    const value = event.target.value\n\n    setData(c => {\n      const newData = {...c, [key]: value}\n      storage.setItem(STORAGE_KEY, newData, 'local')\n      return newData;\n    })\n  }\n\n  return (\n    <input\n      type=\"text\"\n      value={data.name}\n      onChange={handleChange('name')}\n      type=\"text\"\n    />\n  );\n}\n")),(0,a.kt)("h3",{id:"useunload"},"useUnload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {useUnload} from 'metaeditor/common/hooks/'\n\nfunction MyComponent() {\n\n  useUnload(e => {\n    e.preventDefault();\n    e.returnValue = '';\n  });\n\n  return (\n    <div>\n      Some content\n    </div>\n  );\n}\n")),(0,a.kt)("h3",{id:"usewindowsize"},"useWindowSize"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {useWindowSize} from 'metaeditor/common/hooks/'\n\nfunction MyComponent() {\n    const windowSize = useWindowSize();\n\n    return (\n        <div>\n            {windowSize.width}px / {windowSize.height}px\n        </div>\n    );\n}\n")),(0,a.kt)("h3",{id:"add-more"},"ADD MORE!!!"))}p.isMDXComponent=!0}}]);