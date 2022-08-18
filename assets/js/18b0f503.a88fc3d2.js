"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[25676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?i.createElement(g,a(a({ref:t},s),{},{components:n})):i.createElement(g,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31664:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const l={title:"Hystrix Plugin",keywords:["Hystrix"],description:"hystrix plugin"},a="1. Overview",o={unversionedId:"plugin-center/fault-tolerance/hystrix-plugin",id:"version-2.4.2/plugin-center/fault-tolerance/hystrix-plugin",isDocsHomePage:!1,title:"Hystrix Plugin",description:"hystrix plugin",source:"@site/versioned_docs/version-2.4.2/plugin-center/fault-tolerance/hystrix-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/hystrix-plugin",permalink:"/docs/2.4.2/plugin-center/fault-tolerance/hystrix-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/plugin-center/fault-tolerance/hystrix-plugin.md",version:"2.4.2",frontMatter:{title:"Hystrix Plugin",keywords:["Hystrix"],description:"hystrix plugin"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Websocket Plugin",permalink:"/docs/2.4.2/plugin-center/proxy/websocket-plugin"},next:{title:"RateLimiter Plugin",permalink:"/docs/2.4.2/plugin-center/fault-tolerance/rate-limiter-plugin"}},u=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin Config",id:"241-plugin-config",children:[]},{value:"2.4.2 Selector Config",id:"242-selector-config",children:[]},{value:"2.4.3 Rule Config",id:"243-rule-config",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 use hystrix protect application",id:"251-use-hystrix-protect-application",children:[]}]}],p={toc:u};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-overview"},"1. Overview"),(0,r.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hystrix Plugin")),(0,r.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The backend service is unstable, use hystrix for protection")),(0,r.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fusing the flow"),(0,r.kt)("li",{parentName:"ul"},"Protect the application behind ShenYu Gateway"),(0,r.kt)("li",{parentName:"ul"},"Isolation mode supports ",(0,r.kt)("inlineCode",{parentName:"li"},"thread")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"semaphore"),".")),(0,r.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Core Module: ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-hystrix"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Core Class: ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.hystrix.HystrixPlugin")))),(0,r.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,r.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,r.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(74327).Z})),(0,r.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"hystrix")," dependency in the ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu hystrix plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-hystrix</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu hystrix plugin end--\x3e\n")),(0,r.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"hystrix")," set to enable.")),(0,r.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,r.kt)("h3",{id:"241-plugin-config"},"2.4.1 Plugin Config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No Config, but you should open hystrix plugin.")),(0,r.kt)("h3",{id:"242-selector-config"},"2.4.2 Selector Config"),(0,r.kt)("p",null,"It is used to filter traffic for the first time and does not require handle fields."),(0,r.kt)("p",null,"For more information on selectors and rules configuration, see ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," , only some of the fields are covered here."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(63797).Z})),(0,r.kt)("h3",{id:"243-rule-config"},"2.4.3 Rule Config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the final filtering of traffic, there is a rule handler logic, isolation mode supports ",(0,r.kt)("inlineCode",{parentName:"li"},"thread")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"semaphore"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(62009).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Hystrix handler details:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MinimumRequests"),": the minimum number of requests required to trigger a circuit breaker.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ErrorThresholdPercentage"),": percentage of exception occurring during that time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MaxConcurrentRequests"),": max concurrent requests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Sleep"),"(ms): The recovery time after the circuit breaker.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"GroupKey"),": It is generally set to: ",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CallBackUrl"),": default url ",(0,r.kt)("inlineCode",{parentName:"p"},"/fallback/hystrix"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CommandKey"),": generally, it is set to a specific path interface."))))),(0,r.kt)("h2",{id:"25-examples"},"2.5 Examples"),(0,r.kt)("h3",{id:"251-use-hystrix-protect-application"},"2.5.1 use hystrix protect application"),(0,r.kt)("h4",{id:"2511-preparation"},"2.5.1.1 Preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start ShenYu Admin"),(0,r.kt)("li",{parentName:"ul"},"Start ShenYu Bootstrap"),(0,r.kt)("li",{parentName:"ul"},"Start a backend service")),(0,r.kt)("h4",{id:"2512-selector-config"},"2.5.1.2 Selector Config"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(63797).Z})),(0,r.kt)("h4",{id:"2513-rule-config"},"2.5.1.3 Rule Config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The rules in the pictures below are test examples, actual environment depends on the specific situation.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(94146).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"test example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/test")\n@ShenyuSpringMvcClient("/test/**")\npublic class HttpTestController {\n    @PostMapping("/testHystrix")\n    public ResultBean ok() {\n        Random random = new Random();\n        int num = random.nextInt(100);\n        if (num > 20) {\n            throw new RuntimeException();\n        }\n        return new ResultBean(200, "ok", null);\n    }\n}\n')),(0,r.kt)("h4",{id:"2514-send-request-with-apache-jmeter"},"2.5.1.4 Send Request With ",(0,r.kt)("inlineCode",{parentName:"h4"},"Apache Jmeter")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(73645).Z})),(0,r.kt)("h4",{id:"2515-check-result"},"2.5.1.5 Check Result"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(64114).Z})),(0,r.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"hystrix")," set Status disable.")))}s.isMDXComponent=!0},94146:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/hystrix-example-rule-en-061686d393c8d34e9cc3f61973513eda.png"},64114:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/hystrix-result-008924e1e83b1489d3f0aaac4e4761df.png"},73645:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/hystrix-send-request-bdd87396a153240c2408c12f3e39d5f1.png"},62009:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/rule_en-d1d9c7bca7eed34e7a35382a8b24c5cd.png"},63797:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/selector_en-b44d5128003f1f2cc5f9cc6d0aee9a5f.png"},74327:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"}}]);