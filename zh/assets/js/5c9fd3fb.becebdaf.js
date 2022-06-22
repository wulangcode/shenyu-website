"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[54822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),i=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return o.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(n),u=r,y=m["".concat(a,".").concat(u)]||m[u]||d[u]||c;return n?o.createElement(y,l(l({ref:t},s),{},{components:n})):o.createElement(y,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<c;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7196:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>c,metadata:()=>p,toc:()=>a});var o=n(87462),r=(n(67294),n(3905));const c={sidebar_position:3,title:"Docker-compose \u90e8\u7f72",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},l=void 0,p={unversionedId:"deployment/deployment-docker-compose",id:"version-2.4.3/deployment/deployment-docker-compose",isDocsHomePage:!1,title:"Docker-compose \u90e8\u7f72",description:"Docker-compose Deployment",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/deployment/deployment-docker-compose.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker-compose",permalink:"/zh/docs/deployment/deployment-docker-compose",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/deployment/deployment-docker-compose.md",version:"2.4.3",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker-compose \u90e8\u7f72",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",permalink:"/zh/docs/deployment/deployment-package"},next:{title:"Docker\u90e8\u7f72",permalink:"/zh/docs/deployment/deployment-docker"}},a=[{value:"\u4e0b\u8f7d shell \u811a\u672c",id:"\u4e0b\u8f7d-shell-\u811a\u672c",children:[]},{value:"\u6267\u884c\u811a\u672c",id:"\u6267\u884c\u811a\u672c",children:[]},{value:"\u521d\u59cb\u5316<code>shenyu-admin</code>\u5b58\u50a8\u6570\u636e\u6e90",id:"\u521d\u59cb\u5316shenyu-admin\u5b58\u50a8\u6570\u636e\u6e90",children:[]},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u6267\u884c docker-compose",id:"\u6267\u884c-docker-compose",children:[]}],i={toc:a};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u6765\u90e8\u7f72 ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u6587\u6863\u524d\uff0c\u4f60\u9700\u8981\u5148\u9605\u8bfb",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/deployment/deployment-before"},"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6"),"\u6587\u6863\u6765\u5b8c\u6210\u90e8\u7f72",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu"),"\u524d\u7684\u73af\u5883\u51c6\u5907\u5de5\u4f5c.")),(0,r.kt)("h3",{id:"\u4e0b\u8f7d-shell-\u811a\u672c"},"\u4e0b\u8f7d shell \u811a\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -O https://raw.githubusercontent.com/apache/incubator-shenyu/master/shenyu-dist/shenyu-docker-compose-dist/src/main/resources/install.sh\n")),(0,r.kt)("h3",{id:"\u6267\u884c\u811a\u672c"},"\u6267\u884c\u811a\u672c"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u811a\u672c\u4f1a\u4e0b\u8f7d\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3001mysql-connector\uff0c\u5982\u679c\u53d1\u73b0\u4e0b\u8f7d\u5931\u8d25\u53ef\u4ee5\u91cd\u590d\u6267\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./install.sh #\u9ed8\u8ba4\u62c9\u53d6\u6700\u65b0\u914d\u7f6e\uff0c\u5982\u679c\u9700\u8981\u90e8\u7f72\u5df2\u53d1\u5e03\u7248\u672c\uff0c\u53ef\u589e\u52a0\u4e00\u4e2a\u53c2\u6570\u8868\u793a\u7248\u672c\u53f7\uff0c\u6bd4\u5982\uff1av2.4.2 \u6216 latest\n")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316shenyu-admin\u5b58\u50a8\u6570\u636e\u6e90"},"\u521d\u59cb\u5316",(0,r.kt)("inlineCode",{parentName:"h3"},"shenyu-admin"),"\u5b58\u50a8\u6570\u636e\u6e90"),(0,r.kt)("p",null,"\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/deployment/deployment-before#%E6%95%B0%E6%8D%AE%E5%BA%93%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87"},"\u6570\u636e\u5e93\u521d\u59cb\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\u73af\u5883 \u3002"),(0,r.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u4fee\u6539\u811a\u672c\u4e0b\u8f7d\u7684\u914d\u7f6e\u6587\u4ef6\u6765\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"JDBC"),"\u7b49\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"\u6267\u884c-docker-compose"},"\u6267\u884c docker-compose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -f ./shenyu-${VERSION}/docker-compose.yaml up -d\n")))}s.isMDXComponent=!0}}]);