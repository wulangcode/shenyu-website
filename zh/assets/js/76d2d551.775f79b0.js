"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[67895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89937:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",keywords:["\u4e8c\u8fdb\u5236","\u90e8\u7f72"],description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72"},o=void 0,p={unversionedId:"deployment/deployment-package",id:"version-2.4.3/deployment/deployment-package",isDocsHomePage:!1,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/deployment/deployment-package.md",sourceDirName:"deployment",slug:"/deployment/deployment-package",permalink:"/zh/docs/deployment/deployment-package",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/deployment/deployment-package.md",version:"2.4.3",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",keywords:["\u4e8c\u8fdb\u5236","\u90e8\u7f72"],description:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"\u5355\u673a\u5feb\u901f\u90e8\u7f72",permalink:"/zh/docs/deployment/deployment-quick"},next:{title:"Docker-compose \u90e8\u7f72",permalink:"/zh/docs/deployment/deployment-docker-compose"}},l=[{value:"\u542f\u52a8 Apache ShenYu Admin",id:"\u542f\u52a8-apache-shenyu-admin",children:[]},{value:"\u542f\u52a8 Apache ShenYu Bootstrap",id:"\u542f\u52a8-apache-shenyu-bootstrap",children:[]}],c={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72 ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u6587\u6863\u524d\uff0c\u4f60\u9700\u8981\u5148\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/deployment/deployment-before"},"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6"),"\u6587\u6863\u6765\u5b8c\u6210\u90e8\u7f72",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu"),"\u524d\u7684\u73af\u5883\u51c6\u5907\u5de5\u4f5c.")),(0,a.kt)("h3",{id:"\u542f\u52a8-apache-shenyu-admin"},"\u542f\u52a8 Apache ShenYu Admin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-admin-bin.tar.gz"},"apache-shenyu-incubating-${current.version}-admin-bin.tar.gz"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,a.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-${current.version}-admin-bin.tar.gz"),"\u3002 \u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windows: start.bat --spring.profiles.active = h2\n\n> linux: ./start.sh --spring.profiles.active = h2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff0c\u9700\u6309\u7167 ",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/deployment/deployment-before#mysql"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\uff0c\u5c06 ",(0,a.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar"},"mysql-connector.jar")," \u62f7\u8d1d\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"/${your_work_dir}/ext-lib"),"\uff0c \u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"/conf")," \u76ee\u5f55\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"application-mysql.yaml")," \u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"jdbc")," \u7684\u914d\u7f6e\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windows: start.bat --spring.profiles.active = mysql\n\n> linux: ./start.sh --spring.profiles.active = mysql\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"PostgreSql")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff0c\u9700\u6309\u7167 ",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/deployment/deployment-before#postgresql"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\uff0c \u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"/conf")," \u76ee\u5f55\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"application-pg.yaml")," \u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"jdbc")," \u7684\u914d\u7f6e\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windows: start.bat --spring.profiles.active = pg\n\n> linux: ./start.sh --spring.profiles.active = pg\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"Oracle")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\uff0c\u9700\u6309\u7167 ",(0,a.kt)("a",{parentName:"li",href:"/zh/docs/deployment/deployment-before#oracle"},"\u6307\u5f15\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\uff0c \u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"/conf")," \u76ee\u5f55\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"application-oracle.yaml")," \u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"jdbc")," \u7684\u914d\u7f6e\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windows: start.bat --spring.profiles.active = oracle\n\n> linux: ./start.sh --spring.profiles.active = oracle\n")),(0,a.kt)("h3",{id:"\u542f\u52a8-apache-shenyu-bootstrap"},"\u542f\u52a8 Apache ShenYu Bootstrap"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/shenyu/2.4.3/apache-shenyu-incubating-2.4.3-bootstrap-bin.tar.gz"},(0,a.kt)("inlineCode",{parentName:"a"},"apache-shenyu-incubating-${current.version}-bootstrap-bin.tar.gz")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,a.kt)("inlineCode",{parentName:"p"},"apache-shenyu-incubating-${current.version}-bootstrap-bin.tar.gz"),"\u3002 \u8fdb\u5165 bin \u76ee\u5f55\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")))}s.isMDXComponent=!0}}]);