"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[84045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,p(p({ref:t},u),{},{components:n})):r.createElement(g,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96658:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2,title:"Http\u7528\u6237",keywords:["soul"],description:"http\u7528\u6237"},p=void 0,l={unversionedId:"users-guide/http-proxy",id:"version-2.3.0-Legacy/users-guide/http-proxy",isDocsHomePage:!1,title:"Http\u7528\u6237",description:"http\u7528\u6237",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/users-guide/http-proxy.md",sourceDirName:"users-guide",slug:"/users-guide/http-proxy",permalink:"/zh/docs/2.3.0-Legacy/users-guide/http-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/users-guide/http-proxy.md",version:"2.3.0-Legacy",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Http\u7528\u6237",keywords:["soul"],description:"http\u7528\u6237"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"\u73af\u5883\u642d\u5efa",permalink:"/zh/docs/2.3.0-Legacy/users-guide/soul-set-up"},next:{title:"Dubbo\u63a5\u5165soul\u7f51\u5173",permalink:"/zh/docs/2.3.0-Legacy/users-guide/dubbo-proxy"}},o=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u5f15\u5165\u7f51\u5173\u5bf9http\u7684\u4ee3\u7406\u63d2\u4ef6",id:"\u5f15\u5165\u7f51\u5173\u5bf9http\u7684\u4ee3\u7406\u63d2\u4ef6",children:[]},{value:"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08springMvc\u4f53\u7cfb\u7528\u6237\uff09",id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173springmvc\u4f53\u7cfb\u7528\u6237",children:[]},{value:"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08\u5176\u4ed6\u8bed\u8a00\uff0c\u975espringMvc\u4f53\u7cfb\uff09",id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\u5176\u4ed6\u8bed\u8a00\u975espringmvc\u4f53\u7cfb",children:[]},{value:"\u7528\u6237\u8bf7\u6c42",id:"\u7528\u6237\u8bf7\u6c42",children:[]}],s={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u672c\u6587\u65e8\u5728\u5e2e\u52a9http\u7528\u6237\u3002"),(0,a.kt)("li",{parentName:"ul"},"soul\u7f51\u5173\u4f7f\u7528 divide \u63d2\u4ef6\u6765\u5904\u7406http\u8bf7\u6c42\u3002\u8bf7\u6c42\u5728soul-admin\u540e\u53f0\u5f00\u542f\u5b83\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u7684\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"li"},"soul-admin"),"\uff0c\u4ee5\u53ca ",(0,a.kt)("a",{parentName:"li",href:"./soul-set-up"},"\u642d\u5efa\u73af\u5883")," OK\u3002")),(0,a.kt)("h2",{id:"\u5f15\u5165\u7f51\u5173\u5bf9http\u7684\u4ee3\u7406\u63d2\u4ef6"},"\u5f15\u5165\u7f51\u5173\u5bf9http\u7684\u4ee3\u7406\u63d2\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!--if you use http proxy start this--\x3e\n   <dependency>\n       <groupId>org.dromara</groupId>\n       <artifactId>soul-spring-boot-starter-plugin-divide</artifactId>\n        <version>${last.version}</version>\n   </dependency>\n\n   <dependency>\n       <groupId>org.dromara</groupId>\n       <artifactId>soul-spring-boot-starter-plugin-httpclient</artifactId>\n        <version>${last.version}</version>\n   </dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u7136\u662f\u8981\u91cd\u65b0\u542f\u52a8\u7f51\u5173\u3002")),(0,a.kt)("h2",{id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173springmvc\u4f53\u7cfb\u7528\u6237"},"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08springMvc\u4f53\u7cfb\u7528\u6237\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u8981\u786e\u4fdd\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"soul-admin")," \u540e\u53f0 divide\u63d2\u4ef6\u662f\u5426\u5f00\u542f\u3002")),(0,a.kt)("h5",{id:"soul-client\u63a5\u5165\u65b9\u5f0f-\u6b64\u65b9\u5f0f\u9488\u5bf9springmvcspringboot\u7528\u6237"},"Soul-Client\u63a5\u5165\u65b9\u5f0f\u3002 \uff08\u6b64\u65b9\u5f0f\u9488\u5bf9SpringMvc,SpringBoot\u7528\u6237\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SpringBoot\u7528\u6237")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u4f60\u7684\u771f\u5b9e\u670d\u52a1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u65b0\u589e\u5982\u4e0b\u4f9d\u8d56: "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"     <dependency>\n         <groupId>org.dromara</groupId>\n         <artifactId>soul-spring-boot-starter-client-springmvc</artifactId>\n         <version>${last.version}</version>\n     </dependency>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6ce8\u518c\u4e2d\u5fc3\u8be6\u7ec6\u63a5\u5165\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"../register-center/register-center-access"},"\u6ce8\u518c\u4e2d\u5fc3\u63a5\u5165"),".")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SpringMvc\u7528\u6237")," "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u4f60\u7684\u771f\u5b9e\u670d\u52a1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u65b0\u589e\u5982\u4e0b\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"       <dependency>\n           <groupId>org.dromara</groupId>\n           <artifactId>soul-client-springmvc</artifactId>\n           <version>${last.version}</version>\n       </dependency>\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u4f60\u7684 bean\u5b9a\u4e49\u7684xml\u6587\u4ef6\u4e2d\u65b0\u589e\u5982\u4e0b\uff1a  "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'   <bean id ="springMvcClientBeanPostProcessor" class ="org.dromara.soul.client.springmvc.init.SpringMvcClientBeanPostProcessor">\n        <constructor-arg  ref="soulRegisterCenterConfig"/>\n   </bean>\n   \n   <bean id="soulRegisterCenterConfig" class="org.dromara.soul.register.common.config.SoulRegisterCenterConfig">\n        <property name="registerType" value="http"/>\n        <property name="serverList" value="http://localhost:9095"/>\n        <property name="props">\n             <map>\n               <entry key="contextPath" value="/\u4f60\u7684contextPath"/>\n               <entry key="appName" value="\u4f60\u7684\u540d\u5b57"/>\n               <entry key="port" value="\u4f60\u7684\u7aef\u53e3"/>\n               <entry key="isFull" value="false"/>\n             </map>\n        </property>\n   </bean>\n'))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," \u7684\u63a5\u53e3\u4e0a\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"@SoulSpringMvcClient")," \u6ce8\u89e3\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u628a\u6ce8\u89e3\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Controller")," \u7c7b\u4e0a\u9762\uff0c\u91cc\u9762\u7684path\u5c5e\u6027\u5219\u4e3a\u524d\u7f00\uff0c\u5982\u679c\u542b\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"/**")," \u4ee3\u8868\u4f60\u7684\u6574\u4e2a\u63a5\u53e3\u9700\u8981\u88ab\u7f51\u5173\u4ee3\u7406\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e3e\u4f8b\u5b50 \uff081\uff09\uff1a \u4ee3\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/payment"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"/test/findByUserId")," \u90fd\u4f1a\u88ab\u7f51\u5173\u4ee3\u7406\u3002"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    @RestController\n    @RequestMapping("/test")\n    @SoulSpringMvcClient(path = "/test/**")\n    public class HttpTestController {\n        \n        @PostMapping("/payment")\n        public UserDTO post(@RequestBody final UserDTO userDTO) {\n            return userDTO;\n        }\n     \n        @GetMapping("/findByUserId")\n        public UserDTO findByUserId(@RequestParam("userId") final String userId) {\n            UserDTO userDTO = new UserDTO();\n            userDTO.setUserId(userId);\n            userDTO.setUserName("hello world");\n            return userDTO;\n        }      \n     }\n')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e3e\u4f8b\u5b50 \uff082\uff09\uff1a\u4ee3\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"/order/save"),"\uff0c\u4f1a\u88ab\u7f51\u5173\u4ee3\u7406\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"/order/findById")," \u5219\u4e0d\u4f1a\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @RestController\n  @RequestMapping("/order")\n  @SoulSpringMvcClient(path = "/order")\n  public class OrderController {\n  \n      @PostMapping("/save")\n      @SoulSpringMvcClient(path = "/save")\n      public OrderDTO save(@RequestBody final OrderDTO orderDTO) {\n          orderDTO.setName("hello world save order");\n          return orderDTO;\n      }\n \n      @GetMapping("/findById")\n      public OrderDTO findById(@RequestParam("id") final String id) {\n          OrderDTO orderDTO = new OrderDTO();\n          orderDTO.setId(id);\n          orderDTO.setName("hello world findById");\n          return orderDTO;\n      }\n  }\n'))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u542f\u52a8\u4f60\u7684\u9879\u76ee\uff0c\u4f60\u7684\u63a5\u53e3\u63a5\u5165\u5230\u4e86\u7f51\u5173\u3002"))),(0,a.kt)("h2",{id:"http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\u5176\u4ed6\u8bed\u8a00\u975espringmvc\u4f53\u7cfb"},"Http\u8bf7\u6c42\u63a5\u5165\u7f51\u5173\uff08\u5176\u4ed6\u8bed\u8a00\uff0c\u975espringMvc\u4f53\u7cfb\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9996\u5148\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-admin")," \u627e\u5230 divide\u63d2\u4ef6\uff0c\u8fdb\u884c\u9009\u62e9\u5668\uff0c\u548c\u89c4\u5219\u7684\u6dfb\u52a0\uff0c\u8fdb\u884c\u6d41\u91cf\u7684\u5339\u914d\u7b5b\u9009\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u61c2\u600e\u4e48\u914d\u7f6e\uff0c\u8bf7\u770b\u9009\u62e9\uff0c\u89c4\u5219\u4ecb\u7ecd ",(0,a.kt)("a",{parentName:"p",href:"../admin/selector-and-rule"},"\u9009\u62e9\u5668\u89c4\u5219\u4ecb\u7ecd"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u60a8\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5f00\u53d1\u5c5e\u4e8e\u4f60\u7684 http-client\uff0c\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"../developer-guide/developer-soul-client"},"\u591a\u8bed\u8a00Http\u5ba2\u6237\u7aef\u5f00\u53d1"),"\u3002"))),(0,a.kt)("h2",{id:"\u7528\u6237\u8bf7\u6c42"},"\u7528\u6237\u8bf7\u6c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bf4\u767d\u4e86\uff0c\u4f60\u4e4b\u524d\u600e\u4e48\u8bf7\u6c42\u5c31\u600e\u4e48\u8bf7\u6c42\uff0c\u6ca1\u6709\u5f88\u5927\u7684\u53d8\u52a8\uff0c\u53d8\u52a8\u7684\u5730\u65b9\u67092\u70b9\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u70b9\uff0c\u4f60\u4e4b\u524d\u8bf7\u6c42\u7684\u57df\u540d\u662f\u4f60\u81ea\u5df1\u7684\u670d\u52a1\uff0c\u73b0\u5728\u8981\u6362\u6210\u7f51\u5173\u7684\u57df\u540d \uff08\u8fd9\u4e2a\u4f60\u542c\u7684\u61c2\uff1f\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u70b9\uff0csoul\u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u4f60\u63a5\u5165\u9879\u76ee\u8fdb\u884c\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath"),"\uff0c\u5982\u679c\u719f\u7684\u8bdd\uff0c\u53ef\u4ee5\u81ea\u7531\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-admin")," \u4e2d\u7684divide\u63d2\u4ef6\u8fdb\u884c\u81ea\u7531\u66f4\u6539\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u5982\u4f60\u6709\u4e00\u4e2a order\u670d\u52a1 \u5b83\u6709\u4e00\u4e2a\u63a5\u53e3\uff0c\u8bf7\u6c42\u8def\u5f84 http://localhost:8080/test/save"),(0,a.kt)("li",{parentName:"ul"},"\u73b0\u5728\u5c31\u9700\u8981\u6362\u6210\uff1ahttp://localhost:9195/order/test/save"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4e2d localhost:9195 \u4e3a\u7f51\u5173\u7684ip\u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f9195 \uff0c/order \u662f\u4f60\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 contextPath"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u53c2\u6570\uff0c\u8bf7\u6c42\u65b9\u5f0f\u4e0d\u53d8\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u8bb2\u5230\u8fd9\u91cc\u8fd8\u4e0d\u61c2\uff1f \u8bf7\u52a0\u7fa4\u95ee\u5427"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u8fdb\u884c\u8bbf\u95ee\u4e86\uff0c\u5982\u6b64\u7684\u65b9\u4fbf\u4e0e\u7b80\u5355\u3002"))))}u.isMDXComponent=!0}}]);