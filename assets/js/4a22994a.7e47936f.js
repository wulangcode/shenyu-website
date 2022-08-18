"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[56587],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=p(t),f=i,m=s["".concat(d,".").concat(f)]||s[f]||u[f]||o;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=s;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},37938:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const o={title:"File Upload And Download",keywords:["File"],description:"file upload and download"},l=void 0,a={unversionedId:"developer/file-and-image",id:"version-2.4.3/developer/file-and-image",isDocsHomePage:!1,title:"File Upload And Download",description:"file upload and download",source:"@site/versioned_docs/version-2.4.3/developer/file-and-image.md",sourceDirName:"developer",slug:"/developer/file-and-image",permalink:"/docs/developer/file-and-image",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/developer/file-and-image.md",version:"2.4.3",frontMatter:{title:"File Upload And Download",keywords:["File"],description:"file upload and download"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"A multilingual HTTP client",permalink:"/docs/developer/developer-shenyu-client"},next:{title:"Run Integration Test Locally",permalink:"/docs/developer/integration-test"}},d=[{value:"description",id:"description",children:[]},{value:"File Upload",id:"file-upload",children:[]},{value:"File Download",id:"file-download",children:[]}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This doc gives a brief description for upload and download files using ",(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu"),".")),(0,i.kt)("h2",{id:"file-upload"},"File Upload"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The default file size limit is ",(0,i.kt)("inlineCode",{parentName:"li"},"10M"),"."),(0,i.kt)("li",{parentName:"ul"},"For custom limitation, use",(0,i.kt)("inlineCode",{parentName:"li"},"--file.size")," with an integer variable. e.g.",(0,i.kt)("inlineCode",{parentName:"li"},"--file.size = 30")),(0,i.kt)("li",{parentName:"ul"},"Upload your files just as way you did before")),(0,i.kt)("h2",{id:"file-download"},"File Download"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," supports download files in stream. There is no need to change anything.")))}c.isMDXComponent=!0}}]);