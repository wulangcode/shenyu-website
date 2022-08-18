"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[46171],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>d});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(i),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return i?n.createElement(k,l(l({ref:t},s),{},{components:i})):n.createElement(k,l({ref:t},s))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},8449:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));const r={title:"RateLimiter Plugin",keywords:["rateLimiter"],description:"rateLimiter plugin"},l="1. Overview",o={unversionedId:"plugin-center/fault-tolerance/rate-limiter-plugin",id:"version-2.4.0/plugin-center/fault-tolerance/rate-limiter-plugin",isDocsHomePage:!1,title:"RateLimiter Plugin",description:"rateLimiter plugin",source:"@site/versioned_docs/version-2.4.0/plugin-center/fault-tolerance/rate-limiter-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/rate-limiter-plugin",permalink:"/docs/2.4.0/plugin-center/fault-tolerance/rate-limiter-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/plugin-center/fault-tolerance/rate-limiter-plugin.md",version:"2.4.0",frontMatter:{title:"RateLimiter Plugin",keywords:["rateLimiter"],description:"rateLimiter plugin"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Hystrix Plugin",permalink:"/docs/2.4.0/plugin-center/fault-tolerance/hystrix-plugin"},next:{title:"Resilience4j Plugin",permalink:"/docs/2.4.0/plugin-center/fault-tolerance/resilience4j-plugin"}},u=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"1.6 Technical Solution",id:"16-technical-solution",children:[{value:"1.6.1 Using redis token bucket algorithm to limit traffic.",id:"161-using-redis-token-bucket-algorithm-to-limit-traffic",children:[]},{value:"1.6.2 Using redis leaky bucket algorithm to limit traffic.",id:"162-using-redis-leaky-bucket-algorithm-to-limit-traffic",children:[]},{value:"1.6.3 Using redis sliding time window algorithm to limit traffic.",id:"163-using-redis-sliding-time-window-algorithm-to-limit-traffic",children:[]}]},{value:"2.1 Plugin-use procedure",id:"21-plugin-use-procedure",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin Config",id:"241-plugin-config",children:[]},{value:"2.4.2 Selector Config",id:"242-selector-config",children:[]},{value:"2.4.3 Rule Config",id:"243-rule-config",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Limit traffic with <code>RateLimiter</code> plugin in gateway cluster environment",id:"251-limit-traffic-with-ratelimiter-plugin-in-gateway-cluster-environment",children:[]}]}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-overview"},"1. Overview"),(0,a.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RateLimiter Plugin")),(0,a.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"traffic control in gateway cluster environment"),(0,a.kt)("li",{parentName:"ul"},"rate limiting according to specific rules"),(0,a.kt)("li",{parentName:"ul"},"You can set to the interface level, or the parameter level. How to use it depends on your traffic configuration.")),(0,a.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use redis to control gateway traffic")),(0,a.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Module ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-ratelimiter"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Class ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.ratelimiter.RateLimiterPlugin"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Class ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.ratelimiter.executor.RedisRateLimiter")))),(0,a.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Since ShenYu 2.4.0")),(0,a.kt)("h2",{id:"16-technical-solution"},"1.6 Technical Solution"),(0,a.kt)("h3",{id:"161-using-redis-token-bucket-algorithm-to-limit-traffic"},"1.6.1 Using redis token bucket algorithm to limit traffic."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The system generates the token at a constant rate, and then puts the token into the token bucket."),(0,a.kt)("li",{parentName:"ul"},"The token bucket's capacity. When the bucket is full, the token put into it will be discarded."),(0,a.kt)("li",{parentName:"ul"},"Each time requests come, you need to obtain a token from the token bucket. If there are tokens, the service will be provided; if there are no tokens, the service will be rejected.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flow Diagram\uff1a\n",(0,a.kt)("img",{src:i(66861).Z}))),(0,a.kt)("h3",{id:"162-using-redis-leaky-bucket-algorithm-to-limit-traffic"},"1.6.2 Using redis leaky bucket algorithm to limit traffic."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"water (request) go to the leaky bucket first. The leaky bucket goes out at a fixed speed. When the flow speed is too fast, it will overflow directly (reject service)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flow Diagram\uff1a\n",(0,a.kt)("img",{src:i(4166).Z}))),(0,a.kt)("h3",{id:"163-using-redis-sliding-time-window-algorithm-to-limit-traffic"},"1.6.3 Using redis sliding time window algorithm to limit traffic."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The sliding time window maintains the count value of unit time. Whenever a requests pass, the count value will be increased by 1. When the count value exceeds the preset threshold, other requests in unit time will be rejected. If the unit time has ended, clear the counter to zero and start the next round counting.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flow Diagram\uff1a\n",(0,a.kt)("img",{src:i(98046).Z}))),(0,a.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,a.kt)("h2",{id:"21-plugin-use-procedure"},"2.1 Plugin-use procedure"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(74327).Z})),(0,a.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"rateLimiter")," dependency in ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu ratelimiter plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-ratelimiter</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu ratelimiter plugin end--\x3e\n")),(0,a.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"rateLimiter")," set to enable.")),(0,a.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,a.kt)("h3",{id:"241-plugin-config"},"2.4.1 Plugin Config"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(26558).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mode"),": the working mode of redis, the default is single-point mode: ",(0,a.kt)("inlineCode",{parentName:"p"},"standalone"),", in addition to cluster\nmode: ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster"),", sentinel mode: ",(0,a.kt)("inlineCode",{parentName:"p"},"sentinel"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"master"),": default is master.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"url"),": configure the IP and port of the redis database, configured by colon connection, example: ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.1.1:6379"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"password"),": the password of the redis database, if not, you can not configure."))),(0,a.kt)("h3",{id:"242-selector-config"},"2.4.2 Selector Config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,a.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"))),(0,a.kt)("h3",{id:"243-rule-config"},"2.4.3 Rule Config"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(55434).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TokenBucket/Concurrent"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"algorithmName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"tokenBucket"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"concurrent"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"replenishRate"),": It is how many requests you allow users to execute per second, while not discarding any requests. This is the filling rate of token bucket.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"burstCapacity"),": it is the maximum number of requests that users are allowed to execute in one second. This is token bucket can save the number of token.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"keyResolverName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"whole")," indicates that the traffic is limited by gateway per second, and ",(0,a.kt)("inlineCode",{parentName:"p"},"remoteAddress")," indicates that the traffic is limited by IP per second.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"LeakyBucket"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"algorithmName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"leakyBucket"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"replenishRate"),": The rate at which requests are executed per unit time, and the rate at which water droplets leak out of the leaky bucket.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"burstCapacity"),": The maximum number of requests that users are allowed to execute in one second. This is the amount of water in the bucket.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"keyResolverName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"whole")," indicates that the traffic is limited by gateway per second, and ",(0,a.kt)("inlineCode",{parentName:"p"},"remoteAddress")," indicates that the traffic is limited by IP per second.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SlidingWindow"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"algorithmName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"slidingWindow"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"replenishRate"),": The rate of requests per unit time, used to calculate the size of the time window.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"burstCapacity"),": The maximum number of requests in the time window (per unit time).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"keyResolverName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"whole")," indicates that the traffic is limited by gateway per second, and ",(0,a.kt)("inlineCode",{parentName:"p"},"remoteAddress")," indicates that the traffic is limited by IP per second."))))),(0,a.kt)("h2",{id:"25-examples"},"2.5 Examples"),(0,a.kt)("h3",{id:"251-limit-traffic-with-ratelimiter-plugin-in-gateway-cluster-environment"},"2.5.1 Limit traffic with ",(0,a.kt)("inlineCode",{parentName:"h3"},"RateLimiter")," plugin in gateway cluster environment"),(0,a.kt)("h4",{id:"2511-preparation"},"2.5.1.1 Preparation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start ShenYu Admin on ",(0,a.kt)("inlineCode",{parentName:"li"},"10.10.10.10:9095")),(0,a.kt)("li",{parentName:"ul"},"Start two ShenYu Bootstrap on ",(0,a.kt)("inlineCode",{parentName:"li"},"10.10.10.20:9195")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"10.10.10.30:9195"),", and config data sync center on ",(0,a.kt)("inlineCode",{parentName:"li"},"10.10.10.10:9095")),(0,a.kt)("li",{parentName:"ul"},"config nginx, for example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"upstream shenyu_gateway_cluster {\n  ip_hash;\n  server 10.1.1.1:9195 max_fails=3 fail_timeout=10s weight=50;\n  server 10.1.1.2:9195 max_fails=3 fail_timeout=10s weight=50;\n}\n\nserver {\n  location / {\n        proxy_pass http://shenyu_gateway_cluster;\n        proxy_set_header HOST $host;\n        proxy_read_timeout 10s;\n        proxy_connect_timeout 10s;\n  }\n}\n")),(0,a.kt)("h4",{id:"2512-pluginselectorrule-configuration"},"2.5.1.2 Plugin/Selector/Rule Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"config redis configuration with ratelimiter plugin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"config selector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"config rule"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(26556).Z})),(0,a.kt)("p",null,"replenishRate is 3, burstCapacity is 10"),(0,a.kt)("h4",{id:"2513-send-request-to-nginx-by-apache-jmeter"},"2.5.1.3 Send Request to ",(0,a.kt)("inlineCode",{parentName:"h4"},"Ngin"),"x by ",(0,a.kt)("inlineCode",{parentName:"h4"},"Apache Jmeter")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jmeter thread group configuration")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(83769).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jmeter http request configuration")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(78715).Z})),(0,a.kt)("h4",{id:"2514-check-result"},"2.5.1.4 Check Result"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(52042).Z})),(0,a.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"rateLimiter")," set Status disable.")))}s.isMDXComponent=!0},74327:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"},78715:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jmeter-http-request-0023ff8824d62685af80b3c2de6d40e4.png"},52042:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jmeter-result-cc7f6f7a1d678078ae3d3058b6d0afff.png"},83769:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/jmeter-thread-group-d9b10e917818cec79120a61e3c3451b6.png"},4166:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/leakybucket-cc829d5529e0847152a90793867e9f96.png"},26558:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/ratelimiter-plugin-en-db82d697a0e4dedda72274a7f72a80f3.png"},55434:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/ratelimiter-plugin-rule-en-c977fc7840a3952eb0da74183290dedd.png"},26556:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/rule-example-en-77a21daeb9fb7e26a8cf802f41b2587d.png"},98046:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/sldingwindow-c529b50727afb275845585edb72b0215.png"},66861:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tokenbucket-a11a51776844dc57cb9ba82904dc4ca6.png"}}]);