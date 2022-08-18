"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[23461],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,y=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return t?i.createElement(y,l(l({ref:n},d),{},{components:t})):i.createElement(y,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},53771:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const a={title:"ModifyResponse Plugin",keywords:["modifyResponse"],description:"modifyResponse Plugin"},l=void 0,o={unversionedId:"plugin-center/http-handle/modify-response-plugin",id:"version-2.4.1/plugin-center/http-handle/modify-response-plugin",isDocsHomePage:!1,title:"ModifyResponse Plugin",description:"modifyResponse Plugin",source:"@site/versioned_docs/version-2.4.1/plugin-center/http-handle/modify-response-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/modify-response-plugin",permalink:"/docs/2.4.1/plugin-center/http-handle/modify-response-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.1/plugin-center/http-handle/modify-response-plugin.md",version:"2.4.1",frontMatter:{title:"ModifyResponse Plugin",keywords:["modifyResponse"],description:"modifyResponse Plugin"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"ContextPath Plugin",permalink:"/docs/2.4.1/plugin-center/http-handle/context-path-plugin"},next:{title:"Param-mapping Plugin",permalink:"/docs/2.4.1/plugin-center/http-handle/param-mapping-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Use",id:"plugin-use",children:[]},{value:"ModifyResponsePlugin Guide",id:"modifyresponseplugin-guide",children:[]}],s={toc:p};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"modifyResponse")," is a native plugin of ",(0,r.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway and is used to edit response header and body and statusCode.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"modifyResponse")," , set to enable.")),(0,r.kt)("h2",{id:"plugin-use"},"Plugin Use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introduce ",(0,r.kt)("inlineCode",{parentName:"li"},"modifyResponse")," dependency in the pom.xml file of the gateway.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu modify response plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-modify-response</artifactId>\n  <version>${project.version}</version>\n</dependency>\n        \x3c!-- apache shenyu modify response plugin end--\x3e\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to:",(0,r.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"only those matched requests can be modified response.")))),(0,r.kt)("h2",{id:"modifyresponseplugin-guide"},"ModifyResponsePlugin Guide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1.Configuration selector"),(0,r.kt)("li",{parentName:"ul"},"2.Configuration rule"),(0,r.kt)("li",{parentName:"ul"},"3.modify response statusCode\n",(0,r.kt)("img",{src:t(28281).Z})),(0,r.kt)("li",{parentName:"ul"},"4.modify response header\n",(0,r.kt)("img",{src:t(15710).Z})),(0,r.kt)("li",{parentName:"ul"},"5.modify response body\n",(0,r.kt)("img",{src:t(28681).Z})),(0,r.kt)("li",{parentName:"ul"},"param details:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addHeaders"),": add response header\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"key-value"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setHeaders"),": set response header\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"key-value"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replaceHeaderKeys"),": replace response header name\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"key")," is the value to be replaced\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"value")," is the value after replacement"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"removeHeaderKeys"),": remove response header ",(0,r.kt)("inlineCode",{parentName:"li"},"key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"statusCode"),": response status code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addBodyKeys"),": add response body"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replaceBodyKeys"),": replace response body \uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"key")," is the value to be replaced\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"value")," is the value after replacement"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"removeBodyKeys"),": remove response body ",(0,r.kt)("inlineCode",{parentName:"li"},"key"))))),(0,r.kt)("p",null,"modify response body is achieved through ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONPath")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"$.")," represents the root directory."),(0,r.kt)("p",null,"use the configuration\uff0cunopened the plugin\uff0cresponse body is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id":3,"name":"hello world findById"}\n')),(0,r.kt)("p",null,"open the plugin\uff0cresponse body is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id2":3,"add":"4"}\n')))}d.isMDXComponent=!0},28681:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/modifyBody-en-fa57f66c274d0ab89fce27bd95317b6e.png"},15710:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/modifyHeader-en-930b4badfebbee15d2d9d5b384669404.png"},28281:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/modifyStatus-en-fa50ac082c8151bfe64ce6cc331520d7.png"}}]);