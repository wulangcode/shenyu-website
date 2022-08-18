"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[87546],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>m});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return a?t.createElement(k,o(o({ref:n},c),{},{components:a})):t.createElement(k,o({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<p;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59151:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var t=a(87462),r=(a(67294),a(3905));const p={title:"Sofa\u670d\u52a1\u63a5\u5165",keywords:["Sofa"],description:"sofa \u63a5\u5165 Apache ShenYu \u7f51\u5173"},o=void 0,i={unversionedId:"user-guide/sofa-rpc-proxy",id:"version-2.4.1/user-guide/sofa-rpc-proxy",isDocsHomePage:!1,title:"Sofa\u670d\u52a1\u63a5\u5165",description:"sofa \u63a5\u5165 Apache ShenYu \u7f51\u5173",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/user-guide/sofa-rpc-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/sofa-rpc-proxy",permalink:"/zh/docs/2.4.1/user-guide/sofa-rpc-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/user-guide/sofa-rpc-proxy.md",version:"2.4.1",frontMatter:{title:"Sofa\u670d\u52a1\u63a5\u5165",keywords:["Sofa"],description:"sofa \u63a5\u5165 Apache ShenYu \u7f51\u5173"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e",permalink:"/zh/docs/2.4.1/user-guide/register-center-access"},next:{title:"Spring Cloud\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/2.4.1/user-guide/spring-cloud-proxy"}},l=[{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 sofa \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-sofa-\u63d2\u4ef6",children:[]},{value:"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173",id:"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173",children:[]},{value:"sofa \u63d2\u4ef6\u8bbe\u7f6e",id:"sofa-\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173",id:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173",children:[]},{value:"sofa\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e",id:"sofa\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e",children:[]}],s={toc:l};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6b64\u7bc7\u6587\u7ae0\u662f\u4ecb\u7ecd ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," \u670d\u52a1\u63a5\u5165\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," \u63d2\u4ef6\u6765\u63a5\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"sofa"),"\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u63a5\u5165\u524d\uff0c\u8bf7\u6b63\u786e\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff0c\u5e76\u5f00\u542f",(0,r.kt)("inlineCode",{parentName:"p"},"sofa"),"\u63d2\u4ef6\uff0c\u5728\u7f51\u5173\u7aef\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"sofa"),"\u670d\u52a1\u7aef\u5f15\u5165\u76f8\u5173\u4f9d\u8d56\u3002\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u7684 ",(0,r.kt)("a",{parentName:"p",href:"../quick-start/quick-start-sofa"},"Sofa\u5feb\u901f\u5f00\u59cb"),"\u3002"),(0,r.kt)("p",null,"\u5e94\u7528\u5ba2\u6237\u7aef\u63a5\u5165\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"./register-center-access"},"\u5ba2\u6237\u7aef\u63a5\u5165\u914d\u7f6e"),"\u3002"),(0,r.kt)("p",null,"\u6570\u636e\u540c\u6b65\u7684\u76f8\u5173\u914d\u7f6e\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"./use-data-sync"},"\u6570\u636e\u540c\u6b65\u914d\u7f6e"),"\u3002"),(0,r.kt)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-sofa-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 sofa \u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u7f51\u5173\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sofa"),"\u7248\u672c\u6362\u6210\u4f60\u7684\uff0c\u5f15\u5165\u4f60\u9700\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u4f9d\u8d56\uff0c\u4ee5\u4e0b\u662f\u53c2\u8003\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\n       <dependency>\n           <groupId>com.alipay.sofa</groupId>\n           <artifactId>sofa-rpc-all</artifactId>\n           <version>5.7.6</version>\n           <exclusions>\n               <exclusion>\n                   <groupId>net.jcip</groupId>\n                   <artifactId>jcip-annotations</artifactId>\n               </exclusion>\n           </exclusions>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-client</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-framework</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.curator</groupId>\n           <artifactId>curator-recipes</artifactId>\n           <version>4.0.1</version>\n       </dependency>\n       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-spring-boot-starter-plugin-sofa</artifactId>\n           <version>${project.version}</version>\n       </dependency>\n\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u91cd\u542f\u7f51\u5173\u670d\u52a1\u3002"))),(0,r.kt)("h2",{id:"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173"},"sofa\u670d\u52a1\u63a5\u5165\u7f51\u5173"),(0,r.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-sofa"},"shenyu-examples-sofa")),(0,r.kt)("p",null,"\u5982\u679c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"springboot"),"\u6784\u5efa\uff0c\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-spring-boot-starter-client-sofa</artifactId>\n           <version>${shenyu.version}</version>\n       </dependency>\n")),(0,r.kt)("p",null,"\u5982\u679c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"spring"),"\u6784\u5efa\uff0c\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-client-sofa</artifactId>\n           <version>${shenyu.version}</version>\n       </dependency>\n")),(0,r.kt)("p",null,"\u5e76\u5728\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bean"),"\u5b9a\u4e49\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"xml"),"\u6587\u4ef6\u4e2d\u65b0\u589e\u5982\u4e0b \uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'      <bean id ="sofaServiceBeanPostProcessor" class ="org.apache.shenyu.client.sofa.SofaServiceBeanPostProcessor">\n           <constructor-arg  ref="shenyuRegisterCenterConfig"/>\n      </bean>\n      <bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n             <property name="registerType" value="http"/>\n             <property name="serverList" value="http://localhost:9095"/>\n             <property name="props">\n                <map>\n                  <entry key="contextPath" value="/\u4f60\u7684contextPath"/>\n                  <entry key="appName" value="\u4f60\u7684\u540d\u5b57"/>\n                  <entry key="ifFull" value="false"/>\n                </map>\n              </property>\n      </bean>\n')),(0,r.kt)("h2",{id:"sofa-\u63d2\u4ef6\u8bbe\u7f6e"},"sofa \u63d2\u4ef6\u8bbe\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," \u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5176\u6b21\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," \u63d2\u4ef6\u4e2d\u914d\u7f6e\u4f60\u7684\u6ce8\u518c\u5730\u5740\u6216\u8005\u5176\u4ed6\u6ce8\u518c\u4e2d\u5fc3\u7684\u5730\u5740."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{"protocol":"zookeeper","register":"127.0.0.1:2181"}\n')),(0,r.kt)("h2",{id:"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173"},"\u63a5\u53e3\u6ce8\u518c\u5230\u7f51\u5173"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"sofa"),"\u670d\u52a1\u7684\u7c7b\u6216\u8005\u65b9\u6cd5\u4e0a\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"@ShenyuSofaClient")," \u6ce8\u89e3\uff0c\u8868\u793a\u8be5\u7c7b\u6216\u63a5\u53e3\u65b9\u6cd5\u6ce8\u518c\u5230\u7f51\u5173\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u542f\u52a8",(0,r.kt)("inlineCode",{parentName:"p"},"sofa"),"\u670d\u52a1\u63d0\u4f9b\u8005\uff0c\u6210\u529f\u6ce8\u518c\u540e\uff0c\u8fdb\u5165\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u5217\u8868 -> rpc proxy -> sofa"),"\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u6ce8\u518c\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\u3002"))),(0,r.kt)("h2",{id:"sofa\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e"},"sofa\u7528\u6237\u8bf7\u6c42\u53ca\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," \u7684\u65b9\u5f0f\u6765\u8bf7\u6c42\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"sofa")," \u670d\u52a1\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u9700\u8981\u6709\u4e00\u4e2a\u8def\u7531\u524d\u7f00\uff0c\u8fd9\u4e2a\u8def\u7531\u524d\u7f00\u5c31\u662f\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6bd4\u5982\u4f60\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"order")," \u670d\u52a1 \u5b83\u6709\u4e00\u4e2a\u63a5\u53e3\uff0c\u5b83\u7684\u6ce8\u518c\u8def\u5f84 ",(0,r.kt)("inlineCode",{parentName:"p"},"/order/test/save")),(0,r.kt)("p",{parentName:"blockquote"},"\u73b0\u5728\u5c31\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"post")," \u65b9\u5f0f\u8bf7\u6c42\u7f51\u5173\uff1ahttp://localhost:9195/order/test/save"),(0,r.kt)("p",{parentName:"blockquote"},"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:9195")," \u4e3a\u7f51\u5173\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," \u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"9195")," \uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"/order")," \u662f\u4f60",(0,r.kt)("inlineCode",{parentName:"p"},"sofa"),"\u63a5\u5165\u7f51\u5173\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u6570\u4f20\u9012\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"http"),"\u534f\u8bae\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},"post")," \u65b9\u5f0f\u8bbf\u95ee\u7f51\u5173\uff0c\u901a\u8fc7\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"http body"),"\u4e2d\u4f20\u5165",(0,r.kt)("inlineCode",{parentName:"li"},"json"),"\u7c7b\u578b\u53c2\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u591a\u53c2\u6570\u7c7b\u578b\u4f20\u9012\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-sofa"},"shenyu-examples-sofa")," \u4e2d\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c\u4ee5\u53ca\u53c2\u6570\u4f20\u9012\u65b9\u5f0f\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5355\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"java bean"),"\u53c2\u6570\u7c7b\u578b \uff08\u9ed8\u8ba4\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u81ea\u5b9a\u4e49\u5b9e\u73b0\u591a\u53c2\u6570\u652f\u6301\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u4f60\u642d\u5efa\u7684\u7f51\u5173\u9879\u76ee\u4e2d\uff0c\u65b0\u589e\u4e00\u4e2a\u7c7b ",(0,r.kt)("inlineCode",{parentName:"li"},"MySofaParamResolveService"),"\uff0c\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.sofa.SofaParamResolveService"),"\u63a5\u53e3\u3002")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"   public interface SofaParamResolveService {\n   \n       /**\n        * Build parameter pair.\n        * this is Resolve http body to get sofa param.\n        *\n        * @param body           the body\n        * @param parameterTypes the parameter types\n        * @return the pair\n        */\n       Pair<String[], Object[]> buildParameter(String body, String parameterTypes);\n   }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"body"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"http"),"\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"body"),"\u4f20\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"parameterTypes"),": \u5339\u914d\u5230\u7684\u65b9\u6cd5\u53c2\u6570\u7c7b\u578b\u5217\u8868\uff0c\u5982\u679c\u6709\u591a\u4e2a\uff0c\u5219\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},","),"\u5206\u5272\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Pair"),"\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"left"),"\u4e3a\u53c2\u6570\u7c7b\u578b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"right"),"\u4e3a\u53c2\u6570\u503c\uff0c\u8fd9\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"sofa"),"\u6cdb\u5316\u8c03\u7528\u7684\u6807\u51c6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u628a\u4f60\u7684\u7c7b\u6ce8\u518c\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"Spring"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"bean"),"\uff0c\u8986\u76d6\u9ed8\u8ba4\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"   @Bean\n    public SofaParamResolveService mySofaParamResolveService() {\n            return new MySofaParamResolveService();\n    }\n")))))}c.isMDXComponent=!0}}]);