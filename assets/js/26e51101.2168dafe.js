"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[44723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64941:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:6,title:"Use Different Data-Sync Strategy",keywords:["soul"],description:"use different data-sync strategy"},i=void 0,o={unversionedId:"users-guide/use-data-sync",id:"version-2.3.0-Legacy/users-guide/use-data-sync",isDocsHomePage:!1,title:"Use Different Data-Sync Strategy",description:"use different data-sync strategy",source:"@site/versioned_docs/version-2.3.0-Legacy/users-guide/use-data-sync.md",sourceDirName:"users-guide",slug:"/users-guide/use-data-sync",permalink:"/docs/2.3.0-Legacy/users-guide/use-data-sync",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/users-guide/use-data-sync.md",version:"2.3.0-Legacy",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Use Different Data-Sync Strategy",keywords:["soul"],description:"use different data-sync strategy"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Sofa RPC Proxy",permalink:"/docs/2.3.0-Legacy/users-guide/sofa-rpc-proxy"},next:{title:"Register Center Access",permalink:"/docs/2.3.0-Legacy/register-center/register-center-access"}},l=[{value:"Features",id:"features",children:[]},{value:"Websocket sync\uff08default method\uff0crecommend\uff09",id:"websocket-syncdefault-methodrecommend",children:[]},{value:"Zookeeper Sync",id:"zookeeper-sync",children:[]},{value:"Http long-polling sync",id:"http-long-polling-sync",children:[]},{value:"Nacos sync",id:"nacos-sync",children:[]}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data synchronization is the key of gateway high performance, which is to sync 'soul-admin' config data into the JVM memory of soul cluster."),(0,r.kt)("li",{parentName:"ul"},"Implementation principles, pls refer to\uff1a",(0,r.kt)("a",{parentName:"li",href:"../design/data-sync"},"dataSync"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"In the article, the gateway is the environment you setup. please refer to\uff1a",(0,r.kt)("a",{parentName:"li",href:"../users-guide/soul-set-up"},"Environment Setup"),".")),(0,r.kt)("h2",{id:"websocket-syncdefault-methodrecommend"},"Websocket sync\uff08default method\uff0crecommend\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gateway setting\uff08note:restart\uff09"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add these dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul data sync start use websocket--\x3e\n<dependency>\n  <groupId>org.dromara</groupId>\n  <artifactId>soul-spring-boot-starter-sync-data-websocket</artifactId>\n  <version>${last.version}</version>\n</dependency>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add these config values in springboot yaml file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"soul :\n  sync:\n      websocket :\n           urls: ws://localhost:9095/websocket\n#urls: address of soul-admin\uff0cmulti-address will be splitted with (,).\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"soul-admin config, enable this parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--soul.sync.websocket=''")," in soul admin, then restart service."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"soul:\n  sync:\n     websocket:\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the connection is established, getting the full data once,then adding and upating data subsequently, which is a good performance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support disconnection and reconnection (default 30 sec)."))),(0,r.kt)("h2",{id:"zookeeper-sync"},"Zookeeper Sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gateway setting\uff08note: restart\uff09"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add these dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul data sync start use zookeeper--\x3e\n  <dependency>\n       <groupId>org.dromara</groupId>\n        <artifactId>soul-spring-boot-starter-sync-data-zookeeper</artifactId>\n        <version>${last.version}</version>\n  </dependency>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add these dependencies in  springboot yaml file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"soul :\n  sync:\n      zookeeper:\n           url: localhost:2181\n           sessionTimeout: 5000\n           connectionTimeout: 2000\n#url: config with your zk address, used by the cluster environment, splitted with (,).\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"soul-admin config: configure the soul-admin's starting parameter with ",(0,r.kt)("inlineCode",{parentName:"p"},"--soul.sync.zookeeper.url='your address'"),",then restart the service."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"soul:\n  sync:\n    zookeeper:\n        url: localhost:2181\n        sessionTimeout: 5000\n        connectionTimeout: 2000\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is  good to use ZooKeeper synchronization mechanism with high timeliness, but we also have to deal with the unstable environment of ZK, cluster brain splitting and other\nproblems."))))),(0,r.kt)("h2",{id:"http-long-polling-sync"},"Http long-polling sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gateway setting\uff08note:restart\uff09"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add these dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul data sync start use http--\x3e\n  <dependency>\n       <groupId>org.dromara</groupId>\n        <artifactId>soul-spring-boot-starter-sync-data-http</artifactId>\n        <version>${last.version}</version>\n  </dependency>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add these config values in your springboot yaml file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"soul :\n    sync:\n        http:\n             url: http://localhost:9095\n#url: config with your soul-admin's ip and port url, pls use (,) to split multi-admin cluster environment.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"soul-admin config, configure the soul-admin's starting parameter with ",(0,r.kt)("inlineCode",{parentName:"p"},"--soul.sync.http=''"),", then restart service."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"soul:\n  sync:\n     http:\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"HTTP long-polling makes the gateway lightweight, but less time-sensitive.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It pulls according to the group key, if the data is too large, it will have some influences, a small change under a group will pull the entire group.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"it may hit bug in soul-admin cluster."))),(0,r.kt)("h2",{id:"nacos-sync"},"Nacos sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gateway setting\uff08note:restart\uff09"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add these dependencies in your ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--soul data sync start use nacos--\x3e\n  <dependency>\n       <groupId>org.dromara</groupId>\n        <artifactId>soul-spring-boot-starter-sync-data-nacos</artifactId>\n        <version>${last.version}</version>\n  </dependency>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add these config values in the springboot yaml file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"}," soul :\n     sync:\n        nacos:\n             url: localhost:8848\n             namespace: 1c10d748-af86-43b9-8265-75f487d20c6c\n             acm:\n               enabled: false\n               endpoint: acm.aliyun.com\n               namespace:\n               accessKey:\n               secretKey:\n # url: config with your nacos address, pls use (,) to split your cluster environment.\n # other configure\uff0cpls refer to the naocs website.\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"soul-admin config: passing values one by one with '--' operator in the soul-Admin startup parameter.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"soul :\n      sync:\n         nacos:\n              url: localhost:8848\n              namespace: 1c10d748-af86-43b9-8265-75f487d20c6c\n              acm:\n                enabled: false\n                endpoint: acm.aliyun.com\n                namespace:\n                accessKey:\n                secretKey:\n")))))))}c.isMDXComponent=!0}}]);