"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[49265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,N=s["".concat(o,".").concat(u)]||s[u]||k[u]||i;return n?a.createElement(N,p(p({ref:t},m),{},{components:n})):a.createElement(N,p({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var d=2;d<i;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89131:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u5ba2\u6237\u7aef\u6ce8\u518c\u8bbe\u8ba1",keywords:["\u5ba2\u6237\u7aef\u63a5\u5165"],description:"\u5ba2\u6237\u7aef\u63a5\u5165\u539f\u7406"},p=void 0,l={unversionedId:"design/register-center-design",id:"design/register-center-design",isDocsHomePage:!1,title:"\u5ba2\u6237\u7aef\u6ce8\u518c\u8bbe\u8ba1",description:"\u5ba2\u6237\u7aef\u63a5\u5165\u539f\u7406",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design/register-center-design.md",sourceDirName:"design",slug:"/design/register-center-design",permalink:"/zh/docs/next/design/register-center-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/design/register-center-design.md",version:"current",frontMatter:{title:"\u5ba2\u6237\u7aef\u6ce8\u518c\u8bbe\u8ba1",keywords:["\u5ba2\u6237\u7aef\u63a5\u5165"],description:"\u5ba2\u6237\u7aef\u63a5\u5165\u539f\u7406"},sidebar:"tutorialSidebar",previous:{title:"\u6d41\u91cf\u63a7\u5236\u8bbe\u8ba1",permalink:"/zh/docs/next/design/flow-control"},next:{title:"SPI\u6269\u5c55\u8bbe\u8ba1",permalink:"/zh/docs/next/design/spi-design"}},o=[{value:"\u8bbe\u8ba1\u539f\u7406",id:"\u8bbe\u8ba1\u539f\u7406",children:[{value:"\u6ce8\u518c\u4e2d\u5fc3\u5ba2\u6237\u7aef",id:"\u6ce8\u518c\u4e2d\u5fc3\u5ba2\u6237\u7aef",children:[]},{value:"\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u7aef",id:"\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u7aef",children:[]},{value:"Http\u6ce8\u518c\u539f\u7406",id:"http\u6ce8\u518c\u539f\u7406",children:[]},{value:"Zookeeper\u6ce8\u518c\u539f\u7406",id:"zookeeper\u6ce8\u518c\u539f\u7406",children:[]}]},{value:"Etcd\u6ce8\u518c\u539f\u7406",id:"etcd\u6ce8\u518c\u539f\u7406",children:[]},{value:"Consul\u6ce8\u518c\u539f\u7406",id:"consul\u6ce8\u518c\u539f\u7406",children:[]},{value:"Nacos\u6ce8\u518c\u539f\u7406",id:"nacos\u6ce8\u518c\u539f\u7406",children:[{value:"SPI\u6269\u5c55",id:"spi\u6269\u5c55",children:[]}]}],d={toc:o};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u662f\u6307\u5c06\u4f60\u7684\u5fae\u670d\u52a1\u63a5\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\uff0c\u5f53\u524d\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"Http"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Dubbo"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"gRPC"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Motan"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Sofa"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Tars"),"\u7b49\u534f\u8bae\u7684\u63a5\u5165\u3002"),(0,r.kt)("p",null,"\u5c06\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u662f\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3\u6765\u5b9e\u73b0\u7684\uff0c\u6d89\u53ca\u5230\u5ba2\u6237\u7aef\u6ce8\u518c\u548c\u670d\u52a1\u7aef\u540c\u6b65\u6570\u636e\u3002\u6ce8\u518c\u4e2d\u5fc3\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"Http"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Zookeeper"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Etcd"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Consul"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos"),"\u3002"),(0,r.kt)("img",{src:"/img/shenyu/register/register-center-dir-zh.png",width:"70%",height:"60%"}),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\u7528\u6237\u6587\u6863\u4e2d\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/user-guide/property-config/register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e")," \u3002"),(0,r.kt)("h2",{id:"\u8bbe\u8ba1\u539f\u7406"},"\u8bbe\u8ba1\u539f\u7406"),(0,r.kt)("h3",{id:"\u6ce8\u518c\u4e2d\u5fc3\u5ba2\u6237\u7aef"},"\u6ce8\u518c\u4e2d\u5fc3\u5ba2\u6237\u7aef"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(93081).Z})),(0,r.kt)("p",null,"\u5728\u4f60\u7684\u5fae\u670d\u52a1\u914d\u7f6e\u4e2d\u58f0\u660e\u6ce8\u518c\u4e2d\u5fc3\u5ba2\u6237\u7aef\u7c7b\u578b\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"Http"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"Zookeeper"),"\u3002\n\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u65b9\u5f0f\u52a0\u8f7d\u5e76\u521d\u59cb\u5316\u5bf9\u5e94\u6ce8\u518c\u4e2d\u5fc3\u5ba2\u6237\u7aef\uff0c\u901a\u8fc7\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Bean"),"\u76f8\u5173\u7684\u540e\u7f6e\u5904\u7406\u5668\u63a5\u53e3\uff0c\u5728\u5176\u4e2d\u83b7\u53d6\u9700\u8981\u8fdb\u884c\u6ce8\u518c\u7684\u670d\u52a1\u63a5\u53e3\u4fe1\u606f\uff0c\u5c06\u83b7\u53d6\u7684\u4fe1\u606f\u653e\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"Disruptor"),"\u4e2d\u3002"),(0,r.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3\u5ba2\u6237\u7aef\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"Disruptor"),"\u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u5c06\u63a5\u53e3\u4fe1\u606f\u6ce8\u518c\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Disruptor"),"\u5728\u5176\u4e2d\u8d77\u6570\u636e\u4e0e\u64cd\u4f5c\u89e3\u8026\u7684\u4f5c\u7528\uff0c\u5229\u4e8e\u6269\u5c55\u3002"),(0,r.kt)("h3",{id:"\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u7aef"},"\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u7aef"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(74185).Z})),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u914d\u7f6e\u4e2d\u58f0\u660e\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u7aef\u7c7b\u578b\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"Http"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"Zookeeper"),"\u3002\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u542f\u52a8\u65f6\uff0c\u8bfb\u53d6\u914d\u7f6e\u7c7b\u578b\uff0c\u52a0\u8f7d\u5e76\u521d\u59cb\u5316\u5bf9\u5e94\u7684\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u7aef\uff0c\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u7aef\u6536\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-client"),"\u6ce8\u518c\u7684\u63a5\u53e3\u4fe1\u606f\u540e\uff0c\u5c06\u5176\u653e\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"Disruptor"),"\u4e2d\uff0c\u7136\u540e\u4f1a\u89e6\u53d1\u6ce8\u518c\u5904\u7406\u903b\u8f91\uff0c\u5c06\u670d\u52a1\u63a5\u53e3\u4fe1\u606f\u66f4\u65b0\u5e76\u53d1\u5e03\u540c\u6b65\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Disruptor"),"\u5728\u5176\u4e2d\u8d77\u5230\u6570\u636e\u4e0e\u64cd\u4f5c\u89e3\u8026\uff0c\u5229\u4e8e\u6269\u5c55\u3002\u5982\u679c\u6ce8\u518c\u8bf7\u6c42\u8fc7\u591a\uff0c\u5bfc\u81f4\u6ce8\u518c\u5f02\u5e38\uff0c\u4e5f\u6709\u6570\u636e\u7f13\u51b2\u4f5c\u7528\u3002"),(0,r.kt)("h3",{id:"http\u6ce8\u518c\u539f\u7406"},"Http\u6ce8\u518c\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Http"),"\u670d\u52a1\u6ce8\u518c\u539f\u7406\u8f83\u4e3a\u7b80\u5355\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-client"),"\u542f\u52a8\u540e\uff0c\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u7684\u76f8\u5173\u670d\u52a1\u6ce8\u518c\u63a5\u53e3\uff0c\u4e0a\u4f20\u6570\u636e\u8fdb\u884c\u6ce8\u518c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u6536\u5230\u8bf7\u6c42\u540e\u8fdb\u884c\u6570\u636e\u66f4\u65b0\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\uff0c\u5c06\u63a5\u53e3\u4fe1\u606f\u540c\u6b65\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u3002"),(0,r.kt)("h3",{id:"zookeeper\u6ce8\u518c\u539f\u7406"},"Zookeeper\u6ce8\u518c\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Zookeeper"),"\u5b58\u50a8\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shenyu\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n   \u251c    \u251c\u2500\u2500uri\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot} : save uri data of URIRegisterDTO\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-client"),"\u542f\u52a8\u65f6\uff0c\u5c06\u670d\u52a1\u63a5\u53e3\u4fe1\u606f\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"MetaDataRegisterDTO/URIRegisterDTO"),"\uff09\u5199\u5230\u5982\u4e0a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper"),"\u8282\u70b9\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Zookeeper"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Watch"),"\u673a\u5236\uff0c\u5bf9\u6570\u636e\u7684\u66f4\u65b0\u548c\u5220\u9664\u7b49\u4e8b\u4ef6\u8fdb\u884c\u76d1\u542c\uff0c\u6570\u636e\u53d8\u66f4\u540e\u89e6\u53d1\u5bf9\u5e94\u7684\u6ce8\u518c\u5904\u7406\u903b\u8f91\u3002\u5728\u6536\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"MetaDataRegisterDTO"),"\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"rule"),"\u7684\u6570\u636e\u53d8\u66f4\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002\u6536\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"URIRegisterDTO"),"\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"upstream"),"\u7684\u66f4\u65b0\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,r.kt)("h2",{id:"etcd\u6ce8\u518c\u539f\u7406"},"Etcd\u6ce8\u518c\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Etcd"),"\u7684\u952e\u503c\u5b58\u50a8\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shenyu\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n   \u251c    \u251c\u2500\u2500uri\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot} : save uri data of URIRegisterDTO\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ip:prot}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-client"),"\u542f\u52a8\u65f6\uff0c\u5c06\u670d\u52a1\u63a5\u53e3\u4fe1\u606f\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"MetaDataRegisterDTO/URIRegisterDTO"),"\uff09\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"Ephemeral"),"\u65b9\u5f0f\u5199\u5230\u5982\u4e0a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Etcd"),"\u8282\u70b9\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Etcd"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Watch"),"\u673a\u5236\uff0c\u5bf9\u6570\u636e\u7684\u66f4\u65b0\u548c\u5220\u9664\u7b49\u4e8b\u4ef6\u8fdb\u884c\u76d1\u542c\uff0c\u6570\u636e\u53d8\u66f4\u540e\u89e6\u53d1\u5bf9\u5e94\u7684\u6ce8\u518c\u5904\u7406\u903b\u8f91\u3002\u5728\u6536\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"MetaDataRegisterDTO"),"\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"rule"),"\u7684\u6570\u636e\u53d8\u66f4\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002\u6536\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"URIRegisterDTO"),"\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"upstream"),"\u7684\u66f4\u65b0\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,r.kt)("h2",{id:"consul\u6ce8\u518c\u539f\u7406"},"Consul\u6ce8\u518c\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Consul"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"URI"),"\u5206\u4e24\u90e8\u5206\u5b58\u50a8\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"URIRegisterDTO"),"\u968f\u7740\u670d\u52a1\u6ce8\u518c\u8bb0\u5f55\u5728\u670d\u52a1\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),"\u91cc\uff0c\u670d\u52a1\u4e0b\u7ebf\u65f6\u968f\u7740\u670d\u52a1\u8282\u70b9\u4e00\u8d77\u6d88\u5931\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Consul"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"MetaDataRegisterDTO"),"\u5b58\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Key/Value"),"\u91cc\uff0c\u952e\u503c\u5b58\u50a8\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shenyu\n   \u251c\u2500\u2500regsiter\n   \u251c    \u251c\u2500\u2500metadata\n   \u251c    \u251c     \u251c\u2500\u2500${rpcType}\n   \u251c    \u251c     \u251c      \u251c\u2500\u2500\u2500\u2500${contextPath}\n   \u251c    \u251c     \u251c               \u251c\u2500\u2500${ruleName} : save metadata data of MetaDataRegisterDTO\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-client"),"\u542f\u52a8\u65f6\uff0c\u5c06\u670d\u52a1\u63a5\u53e3\u4fe1\u606f\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"MetaDataRegisterDTO/URIRegisterDTO"),"\uff09\u5206\u522b\u653e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceInstance"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata"),"\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"URIRegisterDTO"),"\uff09\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"KeyValue"),"\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"MetaDataRegisterDTO"),"\uff09\uff0c\u6309\u7167\u4e0a\u8ff0\u65b9\u5f0f\u8fdb\u884c\u5b58\u50a8\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u901a\u8fc7\u76d1\u542c",(0,r.kt)("inlineCode",{parentName:"p"},"Catalog"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"KeyValue"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"index"),"\u7684\u53d8\u5316\uff0c\u6765\u611f\u77e5\u6570\u636e\u7684\u66f4\u65b0\u548c\u5220\u9664\uff0c\u6570\u636e\u53d8\u66f4\u540e\u89e6\u53d1\u5bf9\u5e94\u7684\u6ce8\u518c\u5904\u7406\u903b\u8f91\u3002\u5728\u6536\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"MetaDataRegisterDTO"),"\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"rule"),"\u7684\u6570\u636e\u53d8\u66f4\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002\u6536\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"URIRegisterDTO"),"\u8282\u70b9\u53d8\u66f4\u540e\uff0c\u89e6\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"upstream"),"\u7684\u66f4\u65b0\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,r.kt)("h2",{id:"nacos\u6ce8\u518c\u539f\u7406"},"Nacos\u6ce8\u518c\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Nacos"),"\u6ce8\u518c\u5206\u4e3a\u4e24\u90e8\u5206\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"URI")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"URI")," \u4f7f\u7528\u5b9e\u4f8b\u6ce8\u518c\u65b9\u5f0f\uff0c\u5728\u670d\u52a1\u5f02\u5e38\u7684\u60c5\u51b5\u4e0b\uff0c\u76f8\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"URI"),"\u6570\u636e\u8282\u70b9\u4f1a\u81ea\u52a8\u8fdb\u884c\u5220\u9664\uff0c\u5e76\u53d1\u9001\u4e8b\u4ef6\u5230\u8ba2\u9605\u7aef\uff0c\u8ba2\u9605\u7aef\u8fdb\u884c\u76f8\u5173\u7684\u4e0b\u7ebf\u5904\u7406\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata")," \u4f7f\u7528\u914d\u7f6e\u6ce8\u518c\u65b9\u5f0f\uff0c\u6ca1\u6709\u76f8\u5173\u4e0a\u4e0b\u7ebf\u64cd\u4f5c\uff0c\u5f53\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"URI"),"\u5b9e\u4f8b\u6ce8\u518c\u65f6\uff0c\u4f1a\u76f8\u5e94\u7684\u53d1\u5e03",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata"),"\u914d\u7f6e\uff0c\u8ba2\u9605\u7aef\u76d1\u542c\u6570\u636e\u53d8\u5316\uff0c\u8fdb\u884c\u66f4\u65b0\u5904\u7406\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"URI"),"\u5b9e\u4f8b\u6ce8\u518c\u547d\u4ee4\u89c4\u5219\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shenyu.register.service.${rpcType}\n")),(0,r.kt)("p",null,"\u521d\u59cb\u76d1\u542c\u6240\u6709\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"RpcType"),"\u8282\u70b9\uff0c\u5176\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"${contextPath}"),"\u5b9e\u4f8b\u4f1a\u5bf9\u5e94\u6ce8\u518c\u5230\u5176\u4e0b\uff0c\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"IP"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Port"),"\u8fdb\u884c\u533a\u5206\uff0c\u5e76\u643a\u5e26\u5176\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath"),"\u4fe1\u606f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"URI")," \u5b9e\u4f8b\u4e0a\u4e0b\u7ebf\u4e4b\u540e\uff0c\u89e6\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"upstream"),"\u7684\u66f4\u65b0\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"URI")," \u5b9e\u4f8b\u4e0a\u7ebf\u65f6\uff0c\u4f1a\u53d1\u5e03\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata")," \u6570\u636e\uff0c\u5176\u8282\u70b9\u540d\u79f0\u547d\u4ee4\u89c4\u5219\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shenyu.register.service.${rpcType}.${contextPath}\n")),(0,r.kt)("p",null,"\u8ba2\u9605\u7aef\u4f1a\u5bf9\u6240\u6709\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata"),"\u914d\u7f6e\u7ee7\u7eed\u76d1\u542c\uff0c\u5f53\u521d\u6b21\u8ba2\u9605\u548c\u914d\u7f6e\u66f4\u65b0\u540e\uff0c\u89e6\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},"selector"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"rule"),"\u7684\u6570\u636e\u53d8\u66f4\u548c\u6570\u636e\u540c\u6b65\u4e8b\u4ef6\u53d1\u5e03\u3002"),(0,r.kt)("h3",{id:"spi\u6269\u5c55"},"SPI\u6269\u5c55"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"SPI \u540d\u79f0")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"\u8be6\u7ec6\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ShenyuClientRegisterRepository"),(0,r.kt)("td",{parentName:"tr",align:null},"ShenYu\u7f51\u5173\u5ba2\u6237\u7aef\u63a5\u5165\u6ce8\u518c\u670d\u52a1\u8d44\u6e90")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"\u5df2\u77e5\u5b9e\u73b0\u7c7b")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"\u8be6\u7ec6\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HttpClientRegisterRepository"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eHttp\u8bf7\u6c42\u7684\u5b9e\u73b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ZookeeperClientRegisterRepository"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eZookeeper\u6ce8\u518c\u7684\u5b9e\u73b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EtcdClientRegisterRepository"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eEtcd\u6ce8\u518c\u7684\u5b9e\u73b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConsulClientRegisterRepository"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eConsul\u6ce8\u518c\u7684\u5b9e\u73b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NacosClientRegisterRepository"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eNacos\u6ce8\u518c\u7684\u5b9e\u73b0")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"SPI \u540d\u79f0")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"\u8be6\u7ec6\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ShenyuServerRegisterRepository"),(0,r.kt)("td",{parentName:"tr",align:null},"ShenYu\u7f51\u5173\u5ba2\u6237\u7aef\u6ce8\u518c\u7684\u540e\u53f0\u670d\u52a1\u8d44\u6e90")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"\u5df2\u77e5\u5b9e\u73b0\u7c7b")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"\u8be6\u7ec6\u8bf4\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ShenyuHttpRegistryController"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Http\u670d\u52a1\u63a5\u53e3\u6765\u5904\u7406\u5ba2\u6237\u7aef\u6ce8\u518c\u8bf7\u6c42")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ZookeeperServerRegisterRepository"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Zookeeper\u6765\u5904\u7406\u5ba2\u6237\u7aef\u6ce8\u518c\u8282\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EtcdServerRegisterRepository"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Etcd\u6765\u5904\u7406\u5ba2\u6237\u7aef\u6ce8\u518c\u8282\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConsulServerRegisterRepository"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Consul\u6765\u5904\u7406\u5ba2\u6237\u7aef\u6ce8\u518c\u8282\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NacosServerRegisterRepository"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Nacos\u6765\u5904\u7406\u5ba2\u6237\u7aef\u6ce8\u518c\u8282\u70b9")))))}m.isMDXComponent=!0},93081:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/client-8ca2283dbd01d24dfceb32bd0057c8dd.png"},74185:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/server-11fb112ea24bec622c29ca1224dfee31.png"}}]);