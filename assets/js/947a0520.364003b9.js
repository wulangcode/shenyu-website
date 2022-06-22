"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[43139],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8571:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Apache ShenYu Start Demo",author:"Kunshuai Zhu",author_title:"Apache ShenYu Contributor",author_url:"https://github.com/JooKS-me",author_image_url:"https://avatars1.githubusercontent.com/u/62384022?v=4",tags:["Apache ShenYu"]},l=void 0,i={permalink:"/blog/Start-SourceCode-Analysis-Start-Demo",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/blog/Start-SourceCode-Analysis-Start-Demo.md",source:"@site/blog/Start-SourceCode-Analysis-Start-Demo.md",title:"Apache ShenYu Start Demo",description:"Environmental preparation",date:"2022-06-22T07:07:01.739Z",formattedDate:"June 22, 2022",tags:[{label:"Apache ShenYu",permalink:"/blog/tags/apache-shen-yu"}],readingTime:1.41,truncated:!1,prevItem:{title:"RateLimiter SPI code analysis",permalink:"/blog/SPI-SourceCode-Analysis-RateLimiter-SPI"}},p=[{value:"Environmental preparation",id:"environmental-preparation",children:[]},{value:"Pull ShenYu code",id:"pull-shenyu-code",children:[]},{value:"Compile code",id:"compile-code",children:[]},{value:"Start the gateway service",id:"start-the-gateway-service",children:[]},{value:"Start application service",id:"start-application-service",children:[]},{value:"Test Http request",id:"test-http-request",children:[]},{value:"Use more plugins",id:"use-more-plugins",children:[]}],s={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"environmental-preparation"},"Environmental preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install JDK1.8+ locally"),(0,r.kt)("li",{parentName:"ul"},"Install Git locally"),(0,r.kt)("li",{parentName:"ul"},"Install Maven locally"),(0,r.kt)("li",{parentName:"ul"},"Choose a development tool, such as IDEA")),(0,r.kt)("h3",{id:"pull-shenyu-code"},"Pull ShenYu code"),(0,r.kt)("p",null,"Use Git to clone code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> git clone https://github.com/apache/incubator-shenyu.git\n")),(0,r.kt)("h3",{id:"compile-code"},"Compile code"),(0,r.kt)("p",null,"Compile with Maven"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> cd incubator-shenyu\n> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,r.kt)("h3",{id:"start-the-gateway-service"},"Start the gateway service"),(0,r.kt)("p",null,"Use development tools, take IDEA as an example."),(0,r.kt)("p",null,"Start ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," (use H2 database by default)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"start-demo-admin",src:a(57150).Z})),(0,r.kt)("p",null,"Start ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-bootstrap")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"start-demo-bootstrap",src:a(77274).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"At this point, shenyu gateway has been activated."),(0,r.kt)("p",{parentName:"blockquote"},"We can open the browser and access the admin console: ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9095/"},"http://localhost:9095/"))),(0,r.kt)("h3",{id:"start-application-service"},"Start application service"),(0,r.kt)("p",null,"Apache ShenYu provides examples for Http, Dubbo, SpringCloud and other applications to access the shenyu gateway, located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-example")," module. Here we take the Http service as an example."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-example")," is not marked as a Maven project by IDEA, you can right-click the ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-example")," directory to add it as a Maven project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"start-demo-maven",src:a(75382).Z})),(0,r.kt)("p",null,"Start ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"start-demo-examples-http",src:a(37509).Z})),(0,r.kt)("p",null,"At this time, ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-examples-http")," will automatically register the interface method annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@ShenyuSpringMvcClient")," and the related configuration in application.yml to the gateway. When we open the admin console, you can see the relevant configuration in divide and context-path."),(0,r.kt)("h3",{id:"test-http-request"},"Test Http request"),(0,r.kt)("p",null,"Now use ",(0,r.kt)("inlineCode",{parentName:"p"},"postman")," to simulate ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," to request your ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," service:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"start-demo-post-http",src:a(19680).Z})),(0,r.kt)("h3",{id:"use-more-plugins"},"Use more plugins"),(0,r.kt)("p",null,"We can refer to ",(0,r.kt)("a",{parentName:"p",href:"../docs/index"},"Official Document")," to use other plugins."),(0,r.kt)("p",null,"Here is an example of using the param-mapping plugin."),(0,r.kt)("p",null,"Edit the param-mapping plugin in ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicConfig -> Plugin")," and set ",(0,r.kt)("inlineCode",{parentName:"p"},"status"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"start-demo-plugin",src:a(36475).Z})),(0,r.kt)("p",null,"Configure selectors and rules in ",(0,r.kt)("inlineCode",{parentName:"p"},"PluginList -> http process"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"start-demo-selector",src:a(51608).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"start-demo-rules",src:a(35896).Z})),(0,r.kt)("p",null,"Then use ",(0,r.kt)("inlineCode",{parentName:"p"},"postman")," to make an http request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/http/test/payment"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"start-demo-post-param-mapping",src:a(20693).Z})))}c.isMDXComponent=!0},57150:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start-demo-admin-debdd1ee5e979a4892f26e4d54572ead.png"},77274:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start-demo-bootstrap-cafa4d22b0d69bb6ee82c01e7b45d239.png"},37509:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start-demo-examples-http-a42235638d82a4be8aeefbb819d419be.png"},75382:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start-demo-maven-a52eeb99414c79d32a127312a5d22d6f.png"},36475:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start-demo-plugin-8525f3812e42bed70e28ce23540069b7.png"},19680:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start-demo-post-http-a7e95883d3147d67e6080236d980d72b.png"},20693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start-demo-post-param-mapping-d5d632dc96eb1f0080c451820e8f7df4.png"},35896:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start-demo-rules-581013f9d7f0f9996b01aab85efcc8e7.png"},51608:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/start-demo-selector-98b0b1ae460bdbed17edc40ab730a182.png"}}]);