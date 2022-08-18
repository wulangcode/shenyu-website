"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[37777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27174:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u672c\u5730\u8fd0\u884c\u96c6\u6210\u6d4b\u8bd5",description:"Run Integration Test Locally",tags:["integration test"]},l=void 0,i={unversionedId:"developer/integration-test",id:"version-2.4.3/developer/integration-test",isDocsHomePage:!1,title:"\u672c\u5730\u8fd0\u884c\u96c6\u6210\u6d4b\u8bd5",description:"Run Integration Test Locally",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/developer/integration-test.md",sourceDirName:"developer",slug:"/developer/integration-test",permalink:"/zh/docs/developer/integration-test",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/developer/integration-test.md",version:"2.4.3",frontMatter:{title:"\u672c\u5730\u8fd0\u884c\u96c6\u6210\u6d4b\u8bd5",description:"Run Integration Test Locally",tags:["integration test"]},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"\u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",permalink:"/zh/docs/developer/file-and-image"},next:{title:"\u672c\u5730\u6a21\u5f0f",permalink:"/zh/docs/developer/local-model"}},s=[{value:"\u51c6\u5907",id:"\u51c6\u5907",children:[]},{value:"\u5728\u672c\u5730\u5f00\u542f\u96c6\u6210\u6d4b\u8bd5",id:"\u5728\u672c\u5730\u5f00\u542f\u96c6\u6210\u6d4b\u8bd5",children:[]}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u514b\u9686 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu"},"Apache ShenYu")," \u7684\u4ee3\u7801."),(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5e76\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"li"},"docker")," .")),(0,a.kt)("h3",{id:"\u5728\u672c\u5730\u5f00\u542f\u96c6\u6210\u6d4b\u8bd5"},"\u5728\u672c\u5730\u5f00\u542f\u96c6\u6210\u6d4b\u8bd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7528 Maven \u6784\u5efa")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -Prelease,docker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6784\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-integrated-test"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -Pit -DskipTests -f ./shenyu-integrated-test/pom.xml\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"docker-compose \u8fd0\u884c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -f ./shenyu-integrated-test/${{ matrix.case }}/docker-compose.yml up -d\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f60\u9700\u8981\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"${{ matrix.case }}")," \u66ff\u6362\u6210\u5177\u4f53\u7684\u76ee\u5f55, \u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-integrated-test-http"),".")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u6d4b\u8bd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw test -Pit -f ./shenyu-integrated-test/${{ matrix.case }}/pom.xml\n")))}p.isMDXComponent=!0}}]);