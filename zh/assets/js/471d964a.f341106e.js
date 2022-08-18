"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[31992],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(g,p(p({ref:n},c),{},{components:t})):r.createElement(g,p({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72401:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={title:"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e",description:"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"},p=void 0,l={unversionedId:"user-guide/property-config/register-center-access",id:"user-guide/property-config/register-center-access",isDocsHomePage:!1,title:"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e",description:"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/property-config/register-center-access.md",sourceDirName:"user-guide/property-config",slug:"/user-guide/property-config/register-center-access",permalink:"/zh/docs/next/user-guide/property-config/register-center-access",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/property-config/register-center-access.md",version:"current",frontMatter:{title:"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e",description:"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u5173\u5c5e\u6027\u914d\u7f6e",permalink:"/zh/docs/next/user-guide/property-config/gateway-property-config"},next:{title:"\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e",permalink:"/zh/docs/next/user-guide/property-config/register-center-instance"}},s=[{value:"Http\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e",id:"http\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e",children:[]},{value:"Zookeeper\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e",id:"zookeeper\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e",children:[]},{value:"Etcd\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e",id:"etcd\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e",children:[]},{value:"Consul\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e",id:"consul\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e",children:[]},{value:"Nacos\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e",id:"nacos\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e",children:[]},{value:"\u540c\u65f6\u6ce8\u518c\u591a\u79cd\u670d\u52a1\u7c7b\u578b",id:"\u540c\u65f6\u6ce8\u518c\u591a\u79cd\u670d\u52a1\u7c7b\u578b",children:[]}],o={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u662f\u6307\u5c06\u4f60\u7684\u5fae\u670d\u52a1\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\uff0c\u5f53\u524d\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"Http"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Motan"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Sofa"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Tars"),"\u7b49\u534f\u8bae\u7684\u63a5\u5165\u3002"),(0,a.kt)("p",null,"\u5c06\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u662f\u901a\u8fc7\u6ce8\u518c\u4e2d\u5fc3\u6765\u5b9e\u73b0\u7684\uff0c\u6d89\u53ca\u5230\u5ba2\u6237\u7aef\u6ce8\u518c\u548c\u670d\u52a1\u7aef\u540c\u6b65\u6570\u636e\u3002\u6ce8\u518c\u4e2d\u5fc3\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"Http"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Zookeeper"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Etcd"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Consul"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"Nacos"),"\u3002"),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u5c06\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\uff0c\u5e94\u8be5\u5982\u4f55\u914d\u7f6e\u3002\u76f8\u5173\u539f\u7406\u8bf7\u53c2\u8003\u8bbe\u8ba1\u6587\u6863\u4e2d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"../design/register-center-design"},"\u5ba2\u6237\u7aef\u63a5\u5165\u539f\u7406")," \u3002"),(0,a.kt)("img",{src:"/img/shenyu/register/register-center-config-dir-zh.png",width:"70%",height:"60%"}),(0,a.kt)("h3",{id:"http\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e"},"Http\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e"),(0,a.kt)("h4",{id:"shenyu-admin\u914d\u7f6e"},"shenyu-admin\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"yml"),"\u6587\u4ef6\u4e2d\u914d\u7f6e\u6ce8\u518c\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\uff0c\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    enabled: true\n    registerType: http\n    props:\n      checked: true  #\u662f\u5426\u5f00\u542f\u68c0\u6d4b\n      zombieCheckTimes: 5 #\u5931\u8d25\u51e0\u6b21\u540e\u5254\u9664\u670d\u52a1\n      scheduledTime: 10 #\u5b9a\u65f6\u68c0\u6d4b\u95f4\u9694\u65f6\u95f4 \uff08\u79d2\uff09\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-http-admin-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h4",{id:"shenyu-client\u914d\u7f6e"},"shenyu-client\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\u670d\u52a1\u4f5c\u4e3a\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u65f6\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Http"),"\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4ed6\u5ba2\u6237\u7aef\u63a5\u5165\u65f6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u7b49\uff09\uff0c\u914d\u7f6e\u65b9\u5f0f\u540c\u7406\u3002"),(0,a.kt)("p",null,"\u5728\u5fae\u670d\u52a1\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"yml"),"\u6587\u4ef6\u914d\u7f6e\u6ce8\u518c\u65b9\u5f0f\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\uff0c\u5e76\u586b\u5199",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u670d\u52a1\u5730\u5740\u5217\u8868\uff0c\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    enabled: true\n    registerType: http\n    serverLists: http://localhost:9095\n    props:\n      contextPath: /http\n      appName: http\n      port: 8188  \n      isFull: false\n# registerType : \u670d\u52a1\u6ce8\u518c\u7c7b\u578b\uff0c\u586b\u5199 http\n# serverList: \u4e3ahttp\u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199Shenyu-Admin\u9879\u76ee\u7684\u5730\u5740\uff0c\u6ce8\u610f\u52a0\u4e0ahttp://\uff0c\u591a\u4e2a\u5730\u5740\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\n# port: \u4f60\u672c\u9879\u76ee\u7684\u542f\u52a8\u7aef\u53e3\uff0c\u76ee\u524dspringmvc/tars/grpc\u9700\u8981\u8fdb\u884c\u586b\u5199\n# contextPath: \u4e3a\u4f60\u7684\u8fd9\u4e2amvc\u9879\u76ee\u5728shenyu\u7f51\u5173\u7684\u8def\u7531\u524d\u7f00\uff0c \u6bd4\u5982/order \uff0c/product \u7b49\u7b49\uff0c\u7f51\u5173\u4f1a\u6839\u636e\u4f60\u7684\u8fd9\u4e2a\u524d\u7f00\u6765\u8fdb\u884c\u8def\u7531.\n# appName\uff1a\u4f60\u7684\u5e94\u7528\u540d\u79f0\uff0c\u4e0d\u914d\u7f6e\u7684\u8bdd\uff0c\u4f1a\u9ed8\u8ba4\u53d6 `spring.application.name` \u7684\u503c\n# isFull: \u8bbe\u7f6etrue \u4ee3\u8868\u4ee3\u7406\u4f60\u7684\u6574\u4e2a\u670d\u52a1\uff0cfalse\u8868\u793a\u4ee3\u7406\u4f60\u5176\u4e2d\u67d0\u51e0\u4e2acontroller\uff1b\u76ee\u524d\u9002\u7528\u4e8espringmvc/springcloud\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-http-client-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h3",{id:"zookeeper\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e"},"Zookeeper\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u4ece ShenYu 2.5.0 \u8d77\u5c06\u4e0d\u518d\u652f\u6301 Zookeeper 3.4.x \u6216\u66f4\u4f4e\u7248\u672c\u3002\u5982\u679c\u60a8\u5df2\u7ecf\u4f7f\u7528\u4e86 Zookeeper 3.4.x \u6216\u66f4\u4f4e\u7684\u7248\u672c\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u66f4\u9ad8\u7684 Zookeeper \u7248\u672c\u5e76\u91cd\u65b0\u521d\u59cb\u5316\u6570\u636e\u3002")),(0,a.kt)("h4",{id:"shenyu-admin\u914d\u7f6e-1"},"shenyu-admin\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom")," \u6587\u4ef6\u4e2d\u52a0\u5165\u76f8\u5173\u7684\u4f9d\u8d56\uff08\u9ed8\u8ba4\u5df2\u7ecf\u5f15\u5165\uff09\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-zookeeper</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-zk-admin-pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"yml"),"\u6587\u4ef6\u4e2d\u914d\u7f6e\u6ce8\u518c\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper"),"\uff0c\u586b\u5199",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper"),"\u670d\u52a1\u5730\u5740\u548c\u53c2\u6570\uff0c\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    enabled: true\n    registerType: zookeeper\n    serverLists: localhost:2181\n    props:\n      sessionTimeout: 5000\n      connectionTimeout: 2000\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-zk-admin-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h4",{id:"shenyu-client\u914d\u7f6e-1"},"shenyu-client\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\u670d\u52a1\u4f5c\u4e3a\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u65f6\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Zookeeper"),"\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4ed6\u5ba2\u6237\u7aef\u63a5\u5165\u65f6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u7b49\uff09\uff0c\u914d\u7f6e\u65b9\u5f0f\u540c\u7406\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom"),"\u6587\u4ef6\u4e2d\u52a0\u5165\u76f8\u5173\u7684\u4f9d\u8d56\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu zookeeper register center --\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-client-zookeeper</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/client_register_zk_pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," \u4e2d\u914d\u7f6e\u6ce8\u518c\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper"),"\uff0c\u5e76\u586b\u5199",(0,a.kt)("inlineCode",{parentName:"li"},"Zookeeper"),"\u670d\u52a1\u5730\u5740\u548c\u76f8\u5173\u53c2\u6570\uff0c\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    enabled: true\n    registerType: zookeeper\n    serverLists: localhost:2181\n    props:\n      contextPath: /http\n      appName: http\n      port: 8189  \n      isFull: false\n# registerType : \u670d\u52a1\u6ce8\u518c\u7c7b\u578b\uff0c\u586b\u5199 zookeeper\n# serverList: \u4e3azookeeper\u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199zookeeper\u5730\u5740\uff0c\u591a\u4e2a\u5730\u5740\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\n# port: \u4f60\u672c\u9879\u76ee\u7684\u542f\u52a8\u7aef\u53e3,\u76ee\u524dspringmvc/tars/grpc\u9700\u8981\u8fdb\u884c\u586b\u5199\n# contextPath: \u4e3a\u4f60\u7684\u8fd9\u4e2amvc\u9879\u76ee\u5728shenyu\u7f51\u5173\u7684\u8def\u7531\u524d\u7f00\uff0c \u6bd4\u5982/order \uff0c/product \u7b49\u7b49\uff0c\u7f51\u5173\u4f1a\u6839\u636e\u4f60\u7684\u8fd9\u4e2a\u524d\u7f00\u6765\u8fdb\u884c\u8def\u7531.\n# appName\uff1a\u4f60\u7684\u5e94\u7528\u540d\u79f0\uff0c\u4e0d\u914d\u7f6e\u7684\u8bdd\uff0c\u4f1a\u9ed8\u8ba4\u53d6 `spring.application.name` \u7684\u503c\n# isFull: \u8bbe\u7f6etrue \u4ee3\u8868\u4ee3\u7406\u4f60\u7684\u6574\u4e2a\u670d\u52a1\uff0cfalse\u8868\u793a\u4ee3\u7406\u4f60\u5176\u4e2d\u67d0\u51e0\u4e2acontroller\uff1b\u76ee\u524d\u9002\u7528\u4e8espringmvc/springcloud\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-zk-client-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h3",{id:"etcd\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e"},"Etcd\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e"),(0,a.kt)("h4",{id:"shenyu-admin\u914d\u7f6e-2"},"shenyu-admin\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom")," \u6587\u4ef6\u4e2d\u52a0\u5165\u76f8\u5173\u7684\u4f9d\u8d56\uff08\u9ed8\u8ba4\u5df2\u7ecf\u5f15\u5165\uff09\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-etcd</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-etcd-admin-pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," \u914d\u7f6e\u6ce8\u518c\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"etcd"),", \u586b\u5199",(0,a.kt)("inlineCode",{parentName:"li"},"etcd"),"\u670d\u52a1\u5730\u5740\u548c\u53c2\u6570\uff0c\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    enabled: true\n    registerType: etcd\n    serverLists : http://localhost:2379\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-etcd-admin-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h4",{id:"shenyu-client\u914d\u7f6e-2"},"shenyu-client\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\u670d\u52a1\u4f5c\u4e3a\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u65f6\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Etcd"),"\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4ed6\u5ba2\u6237\u7aef\u63a5\u5165\u65f6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u7b49\uff09\uff0c\u914d\u7f6e\u65b9\u5f0f\u540c\u7406\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom")," \u6587\u4ef6\u4e2d\u52a0\u5165\u76f8\u5173\u7684\u4f9d\u8d56\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu etcd register center --\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-client-etcd</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/client_register_etcd_pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," \u4e2d\u914d\u7f6e\u6ce8\u518c\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"etcd"),", \u5e76\u586b\u5199",(0,a.kt)("inlineCode",{parentName:"li"},"etcd"),"\u670d\u52a1\u5730\u5740\u548c\u76f8\u5173\u53c2\u6570\uff0c\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    enabled: true\n    registerType: etcd \n    serverLists: http://localhost:2379\n    props:\n      contextPath: /http\n      appName: http\n      port: 8189  \n      isFull: false\n# registerType : \u670d\u52a1\u6ce8\u518c\u7c7b\u578b\uff0c\u586b\u5199 etcd\n# serverList: \u4e3aetcd\u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199etcd\u5730\u5740\uff0c\u591a\u4e2a\u5730\u5740\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\n# port: \u4f60\u672c\u9879\u76ee\u7684\u542f\u52a8\u7aef\u53e3,\u76ee\u524dspringmvc/tars/grpc\u9700\u8981\u8fdb\u884c\u586b\u5199\n# contextPath: \u4e3a\u4f60\u7684\u8fd9\u4e2amvc\u9879\u76ee\u5728shenyu\u7f51\u5173\u7684\u8def\u7531\u524d\u7f00\uff0c \u6bd4\u5982/order \uff0c/product \u7b49\u7b49\uff0c\u7f51\u5173\u4f1a\u6839\u636e\u4f60\u7684\u8fd9\u4e2a\u524d\u7f00\u6765\u8fdb\u884c\u8def\u7531.\n# appName\uff1a\u4f60\u7684\u5e94\u7528\u540d\u79f0\uff0c\u4e0d\u914d\u7f6e\u7684\u8bdd\uff0c\u4f1a\u9ed8\u8ba4\u53d6 `spring.application.name` \u7684\u503c\n# isFull: \u8bbe\u7f6etrue \u4ee3\u8868\u4ee3\u7406\u4f60\u7684\u6574\u4e2a\u670d\u52a1\uff0cfalse\u8868\u793a\u4ee3\u7406\u4f60\u5176\u4e2d\u67d0\u51e0\u4e2acontroller\uff1b\u76ee\u524d\u9002\u7528\u4e8espringmvc/springcloud\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-etcd-client-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h3",{id:"consul\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e"},"Consul\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e"),(0,a.kt)("h4",{id:"shenyu-admin\u914d\u7f6e-3"},"shenyu-admin\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5728 pom.xml \u6587\u4ef6\u4e2d\u52a0\u5165\u76f8\u5173\u7684\u4f9d\u8d56\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu consul register start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-consul</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n\n        \x3c!-- apache shenyu consul register start --\x3e\n        <dependency>\n            <groupId>com.ecwid.consul</groupId>\n            <artifactId>consul-api</artifactId>\n            <version>${consul.api.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu consul register end--\x3e\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"yml"),"\u6587\u4ef6\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"consul"),", consul\u7684\u7279\u6709\u914d\u7f6e\u5728props\u8282\u70b9\u4e0b\u8fdb\u884c\u914d\u7f6e, \u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    enabled: true\n    registerType: consul\n    serverLists: localhost:8500\n    props:\n      delay: 1\n      wait-time: 55\n      name: shenyuAdmin\n      instanceId: shenyuAdmin\n      hostName: localhost\n      port: 8500\n      tags: test1,test2\n      preferAgentAddress: false\n      enableTagOverride: false\n\n# registerType : \u670d\u52a1\u6ce8\u518c\u7c7b\u578b\uff0c\u586b\u5199 consul\n# serverLists: consul client agent\u5730\u5740(sidecar\u6a21\u5f0f\u90e8\u7f72(\u5355\u673a\u6216\u8005\u96c6\u7fa4)\uff0c\u4e5f\u53ef\u4ee5\u662fconsul server agent\u7684\u5730\u5740(\u53ea\u80fd\u8fde\u63a5\u4e00\u4e2aconsul server agent\u8282\u70b9\uff0c\u5982\u679c\u662f\u96c6\u7fa4\uff0c\u90a3\u4e48\u4f1a\u5b58\u5728\u5355\u70b9\u6545\u969c\u95ee\u9898))\n# delay: \u5bf9Metadata\u7684\u76d1\u63a7\u6bcf\u6b21\u8f6e\u8be2\u7684\u95f4\u9694\u65f6\u957f\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u9ed8\u8ba41\u79d2\n# wait-time: \u5bf9Metadata\u7684\u76d1\u63a7\u5355\u6b21\u8bf7\u6c42\u7684\u7b49\u5f85\u65f6\u95f4\uff08\u957f\u8f6e\u8be2\u673a\u5236\uff09\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u9ed8\u8ba455\u79d2\n# instanceId: consul\u670d\u52a1\u5fc5\u586b\uff0cconsul\u9700\u8981\u901a\u8fc7instance-id\u627e\u5230\u5177\u4f53\u670d\u52a1\n# name \u670d\u52a1\u6ce8\u518c\u5230consul\u65f6\u6240\u5728\u7684\u7ec4\u540d\n# hostName: \u4e3a consul \u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199 \u6ce8\u518c\u670d\u52a1\u5b9e\u4f8b\u7684 \u5730\u5740\uff0c \u8be5\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u7684\u670d\u52a1\u5b9e\u4f8b\u5730\u5740\uff0c\u5e76\u4e0d\u4f1a\u7528\u4e8e\u5ba2\u6237\u7aef\u7684\u8c03\u7528\uff0c\u6240\u4ee5\u8be5\u914d\u7f6e\u53ef\u4ee5\u4e0d\u586b\uff0cport\uff0cpreferAgentAddress\u540c\u7406\n# port: \u4e3a consul \u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199 \u6ce8\u518c\u670d\u52a1\u5b9e\u4f8b\u7684 \u7aef\u53e3\n# tags: \u5bf9\u5e94consul\u914d\u7f6e\u4e2d\u7684tags\u914d\u7f6e\n# preferAgentAddress\uff1a\u4f7f\u7528consul\u5ba2\u6237\u7aef\u4fa7\u7684agent\u5bf9\u5e94\u7684address\u4f5c\u4e3a\u6ce8\u518c\u670d\u52a1\u5b9e\u4f8b\u7684address\uff0c\u4f1a\u8986\u76d6hostName\u7684\u624b\u52a8\u914d\u7f6e\n# enableTagOverride\uff1a\u5bf9\u5e94consul\u914d\u7f6e\u4e2d\u7684enableTagOverride\u914d\u7f6e\n\n")),(0,a.kt)("h4",{id:"shenyu-client\u914d\u7f6e-3"},"shenyu-client\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"springCloud"),"\u670d\u52a1\u4f5c\u4e3a\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u65f6\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Consul"),"\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e\u4fe1\u606f\uff08springCloud\u670d\u52a1\u672c\u8eab\u7684\u6ce8\u518c\u4e2d\u5fc3\u53ef\u4ee5\u968f\u610f\u9009\u62e9\uff0c\u4e0eshenyu\u6240\u9009\u62e9\u7684\u6ce8\u518c\u4e2d\u5fc3\u5e76\u4e0d\u4f1a\u5b58\u5728\u51b2\u7a81\uff0cexample\u4e2d\u4f7f\u7528\u7684\u662feureka\uff09\u3002\u5176\u4ed6\u5ba2\u6237\u7aef\u63a5\u5165\u65f6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u7b49\uff09\uff0c\u914d\u7f6e\u65b9\u5f0f\u540c\u7406\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom")," \u6587\u4ef6\u4e2d\u52a0\u5165\u76f8\u5173\u7684\u4f9d\u8d56\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu consul register center --\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-register-client-consul</artifactId>\n    <version>${shenyu.version}</version>\n</dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"yml"),"\u6587\u4ef6\u4e2d\u914d\u7f6e\u6ce8\u518c\u65b9\u5f0f\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"consul"),", \u989d\u5916\u8fd8\u9700\u8981\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu.register.props"),", \u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    enabled: true\n    registerType: consul\n    serverLists: localhost:8500\n    props:\n      name: shenyuSpringCloudExample\n      instanceId: shenyuSpringCloudExample\n      hostName: localhost\n      port: 8500\n      tags: test1,test2\n      preferAgentAddress: false\n      enableTagOverride: false\n  client:\n    springCloud:\n      props:\n        contextPath: /springcloud\n        port: 8884\n\n# registerType : \u670d\u52a1\u6ce8\u518c\u7c7b\u578b\uff0c\u586b\u5199 consul\n# serverLists: consul client agent\u5730\u5740(sidecar\u6a21\u5f0f\u90e8\u7f72(\u5355\u673a\u6216\u8005\u96c6\u7fa4)\uff0c\u4e5f\u53ef\u4ee5\u662fconsul server agent\u7684\u5730\u5740(\u53ea\u80fd\u8fde\u63a5\u4e00\u4e2aconsul server agent\u8282\u70b9\uff0c\u5982\u679c\u662f\u96c6\u7fa4\uff0c\u90a3\u4e48\u4f1a\u5b58\u5728\u5355\u70b9\u6545\u969c\u95ee\u9898))\n# shenyu.client.props.port: \u4f60\u672c\u9879\u76ee\u7684\u542f\u52a8\u7aef\u53e3,\u76ee\u524dspringmvc/tars/grpc\u9700\u8981\u8fdb\u884c\u586b\u5199\n# contextPath: \u4e3a\u4f60\u7684\u8fd9\u4e2amvc\u9879\u76ee\u5728shenyu\u7f51\u5173\u7684\u8def\u7531\u524d\u7f00\uff0c \u6bd4\u5982/order \uff0c/product \u7b49\u7b49\uff0c\u7f51\u5173\u4f1a\u6839\u636e\u4f60\u7684\u8fd9\u4e2a\u524d\u7f00\u6765\u8fdb\u884c\u8def\u7531.\n# appName\uff1a\u4f60\u7684\u5e94\u7528\u540d\u79f0\uff0c\u4e0d\u914d\u7f6e\u7684\u8bdd\uff0c\u4f1a\u9ed8\u8ba4\u53d6 `spring.application.name` \u7684\u503c\n# isFull: \u8bbe\u7f6etrue \u4ee3\u8868\u4ee3\u7406\u4f60\u7684\u6574\u4e2a\u670d\u52a1\uff0cfalse\u8868\u793a\u4ee3\u7406\u4f60\u5176\u4e2d\u67d0\u51e0\u4e2acontroller\uff1b\u76ee\u524d\u9002\u7528\u4e8espringmvc\n# instanceId: consul\u670d\u52a1\u5fc5\u586b\uff0cconsul\u9700\u8981\u901a\u8fc7instance-id\u627e\u5230\u5177\u4f53\u670d\u52a1\n# name \u670d\u52a1\u6ce8\u518c\u5230consul\u65f6\u6240\u5728\u7684\u7ec4\u540d\n# hostName: \u4e3a consul \u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199 \u6ce8\u518c\u670d\u52a1\u5b9e\u4f8b\u7684 \u5730\u5740\uff0c \u8be5\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u7684\u670d\u52a1\u5b9e\u4f8b\u5730\u5740\uff0c\u5e76\u4e0d\u4f1a\u7528\u4e8e\u5ba2\u6237\u7aef\u7684\u8c03\u7528\uff0c\u6240\u4ee5\u8be5\u914d\u7f6e\u53ef\u4ee5\u4e0d\u586b\uff0cport\uff0cpreferAgentAddress\u540c\u7406\n# port: \u4e3a consul \u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199 \u6ce8\u518c\u670d\u52a1\u5b9e\u4f8b\u7684 \u7aef\u53e3\n# tags: \u5bf9\u5e94consul\u914d\u7f6e\u4e2d\u7684tags\u914d\u7f6e\n# preferAgentAddress\uff1a\u4f7f\u7528consul\u5ba2\u6237\u7aef\u4fa7\u7684agent\u5bf9\u5e94\u7684address\u4f5c\u4e3a\u6ce8\u518c\u670d\u52a1\u5b9e\u4f8b\u7684address\uff0c\u4f1a\u8986\u76d6hostName\u7684\u624b\u52a8\u914d\u7f6e\n# enableTagOverride\uff1a\u5bf9\u5e94consul\u914d\u7f6e\u4e2d\u7684enableTagOverride\u914d\u7f6e\n")),(0,a.kt)("h3",{id:"nacos\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e"},"Nacos\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e"),(0,a.kt)("h4",{id:"shenyu-admin\u914d\u7f6e-4"},"shenyu-admin\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom")," \u6587\u4ef6\u4e2d\u52a0\u5165\u76f8\u5173\u7684\u4f9d\u8d56\uff08\u9ed8\u8ba4\u5df2\u7ecf\u5f15\u5165\uff09\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-server-nacos</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-nacos-admin-pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"yml"),"\u6587\u4ef6\u4e2d\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"nacos"),", \u586b\u5199\u76f8\u5173",(0,a.kt)("inlineCode",{parentName:"li"},"nacos"),"\u670d\u52a1\u5730\u5740\u548c\u53c2\u6570\uff0c\u8fd8\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"nacos"),"\u7684\u547d\u540d\u7a7a\u95f4\uff08\u9700\u8981\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-client"),"\u4fdd\u6301\u4e00\u81f4\uff09\uff0c\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: nacos\n    serverLists : localhost:8848\n    props:\n      nacosNameSpace: ShenyuRegisterCenter\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-nacos-admin-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h4",{id:"shenyu-client\u914d\u7f6e-4"},"shenyu-client\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\u670d\u52a1\u4f5c\u4e3a\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u65f6\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Nacos"),"\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4ed6\u5ba2\u6237\u7aef\u63a5\u5165\u65f6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u7b49\uff09\uff0c\u914d\u7f6e\u65b9\u5f0f\u540c\u7406\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom"),"\u6587\u4ef6\u4e2d\u52a0\u5165\u76f8\u5173\u7684\u4f9d\u8d56\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-register-client-nacos</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,a.kt)("img",{src:"/img/shenyu/register/client_register_nacos_pom.png",width:"70%",height:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"yml")," \u4e2d\u914d\u7f6e\u6ce8\u518c\u65b9\u5f0f\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"nacos"),", \u5e76\u586b\u5199",(0,a.kt)("inlineCode",{parentName:"li"},"nacos"),"\u670d\u52a1\u5730\u5740\u548c\u76f8\u5173\u53c2\u6570\uff0c\u8fd8\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"li"},"Nacos"),"\u547d\u540d\u7a7a\u95f4\uff08\u9700\u8981\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"\u7aef\u4fdd\u6301\u4e00\u81f4\uff09\uff0cIP\uff08\u53ef\u4e0d\u586b\uff0c\u5219\u81ea\u52a8\u83b7\u53d6\u672c\u673aip\uff09\u548c\u7aef\u53e3\uff0c\u914d\u7f6e\u4fe1\u606f\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: nacos\n    serverLists: localhost:8848\n    props:\n      contextPath: /http\n      appName: http\n      port: 8188  \n      isFull: false\n      nacosNameSpace: ShenyuRegisterCenter\n# registerType : \u670d\u52a1\u6ce8\u518c\u7c7b\u578b\uff0c\u586b\u5199 nacos\n# serverList: \u4e3anacos\u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199nacos\u5730\u5740\uff0c\u591a\u4e2a\u5730\u5740\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\n# port: \u4f60\u672c\u9879\u76ee\u7684\u542f\u52a8\u7aef\u53e3,\u76ee\u524dspringmvc/tars/grpc\u9700\u8981\u8fdb\u884c\u586b\u5199\n# contextPath: \u4e3a\u4f60\u7684\u8fd9\u4e2amvc\u9879\u76ee\u5728shenyu\u7f51\u5173\u7684\u8def\u7531\u524d\u7f00\uff0c\u6bd4\u5982/order \uff0c/product \u7b49\u7b49\uff0c\u7f51\u5173\u4f1a\u6839\u636e\u4f60\u7684\u8fd9\u4e2a\u524d\u7f00\u6765\u8fdb\u884c\u8def\u7531.\n# appName\uff1a\u4f60\u7684\u5e94\u7528\u540d\u79f0\uff0c\u4e0d\u914d\u7f6e\u7684\u8bdd\uff0c\u4f1a\u9ed8\u8ba4\u53d6 `spring.application.name` \u7684\u503c\n# isFull: \u8bbe\u7f6etrue \u4ee3\u8868\u4ee3\u7406\u4f60\u7684\u6574\u4e2a\u670d\u52a1\uff0cfalse\u8868\u793a\u4ee3\u7406\u4f60\u5176\u4e2d\u67d0\u51e0\u4e2acontroller\uff1b\u76ee\u524d\u9002\u7528\u4e8espringmvc/springcloud\n# nacosNameSpace: nacos\u7684\u547d\u540d\u7a7a\u95f4\n")),(0,a.kt)("img",{src:"/img/shenyu/register/register-nacos-client-yml.png",width:"70%",height:"60%"}),(0,a.kt)("h3",{id:"\u540c\u65f6\u6ce8\u518c\u591a\u79cd\u670d\u52a1\u7c7b\u578b"},"\u540c\u65f6\u6ce8\u518c\u591a\u79cd\u670d\u52a1\u7c7b\u578b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee5\u540c\u65f6\u6ce8\u518chttp\u548cdubbo\u670d\u52a1\u4e3e\u4f8b\u3002\n\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"yml"),"\u53c2\u8003\u5982\u4e0b\u914d\u7f6e\u5373\u53ef\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  register:\n    registerType: nacos\n    serverLists: localhost:8848\n  client:\n    http:\n        props:\n            contextPath: /http\n            appName: http\n            port: 8188  \n            isFull: false\n    dubbo:\n        props:\n            contextPath: /dubbo\n            appName: dubbo\n            port: 28080\n    props:\n      nacosNameSpace: ShenyuRegisterCenter\n# registerType : \u670d\u52a1\u6ce8\u518c\u7c7b\u578b\uff0c\u586b\u5199 nacos\n# serverList: \u4e3anacos\u6ce8\u518c\u7c7b\u578b\u65f6\uff0c\u586b\u5199nacos\u5730\u5740\uff0c\u591a\u4e2a\u5730\u5740\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\n# http.port: \u4f60\u672c\u9879\u76ee\u7684\u542f\u52a8Http\u7aef\u53e3,\u76ee\u524dspringmvc/SpringCloud\u9700\u8981\u8fdb\u884c\u586b\u5199\n# http.contextPath: \u4e3a\u4f60\u7684\u8fd9\u4e2amvc\u9879\u76ee\u5728shenyu\u7f51\u5173\u7684\u8def\u7531\u524d\u7f00\uff0c\u6bd4\u5982/order \uff0c/product \u7b49\u7b49\uff0c\u7f51\u5173\u4f1a\u6839\u636e\u4f60\u7684\u8fd9\u4e2a\u524d\u7f00\u6765\u8fdb\u884c\u8def\u7531.\n# http.appName\uff1a\u4f60\u7684\u5e94\u7528\u540d\u79f0\uff0c\u4e0d\u914d\u7f6e\u7684\u8bdd\uff0c\u4f1a\u9ed8\u8ba4\u53d6 `spring.application.name` \u7684\u503c\n# http.isFull: \u8bbe\u7f6etrue \u4ee3\u8868\u4ee3\u7406\u4f60\u7684\u6574\u4e2a\u670d\u52a1\uff0cfalse\u8868\u793a\u4ee3\u7406\u4f60\u5176\u4e2d\u67d0\u51e0\u4e2acontroller\uff1b\u76ee\u524d\u9002\u7528\u4e8espringmvc/springcloud\n# dubbo.contextPath: \u4e3a\u4f60\u7684\u9879\u76ee\u4e2d\u5bf9\u5e94dubbo\u63a5\u53e3\u7684contextPath\n# dubbo.port: dubbo\u670d\u52a1\u7aef\u53e3\n# dubbo.appName: dubbo\u5e94\u7528\u540d\u79f0\n# nacosNameSpace: nacos\u7684\u547d\u540d\u7a7a\u95f4\n")),(0,a.kt)("p",null,"\u603b\u7ed3\uff0c\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u5c06\u4f60\u7684\u5fae\u670d\u52a1\uff08\u5f53\u524d\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"Http"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dubbo"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Spring Cloud"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"gRPC"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Motan"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Sofa"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Tars"),"\u7b49\u534f\u8bae\uff09\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u3002\u4ecb\u7ecd\u4e86\u6ce8\u518c\u4e2d\u5fc3\u7684\u539f\u7406\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u652f\u6301\u7684\u6ce8\u518c\u4e2d\u5fc3\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"Http"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Zookeeper"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Etcd"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Consul"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Nacos"),"\u7b49\u65b9\u5f0f\u3002\u4ecb\u7ecd\u4e86\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\u670d\u52a1\u4f5c\u4e3a\u5ba2\u6237\u7aef\u63a5\u5165\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u65f6\uff0c\u4f7f\u7528\u4e0d\u540c\u65b9\u5f0f\u6ce8\u518c\u914d\u7f6e\u4fe1\u606f\u3002"))}c.isMDXComponent=!0}}]);