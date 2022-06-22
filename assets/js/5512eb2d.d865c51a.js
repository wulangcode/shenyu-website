"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[59010],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(y,o(o({ref:n},d),{},{components:t})):r.createElement(y,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3360:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={title:"ModifyResponse Plugin",keywords:["modifyResponse"],description:"modifyResponse Plugin"},o=void 0,l={unversionedId:"plugin-center/http-process/modifyresponse-plugin",id:"version-2.4.3/plugin-center/http-process/modifyresponse-plugin",isDocsHomePage:!1,title:"ModifyResponse Plugin",description:"modifyResponse Plugin",source:"@site/versioned_docs/version-2.4.3/plugin-center/http-process/modifyresponse-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/modifyresponse-plugin",permalink:"/docs/plugin-center/http-process/modifyresponse-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/http-process/modifyresponse-plugin.md",version:"2.4.3",frontMatter:{title:"ModifyResponse Plugin",keywords:["modifyResponse"],description:"modifyResponse Plugin"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"ContextPath Plugin",permalink:"/docs/plugin-center/http-process/contextpath-plugin"},next:{title:"ParamMapping Plugin",permalink:"/docs/plugin-center/http-process/parammapping-plugin"}},s=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Use",id:"plugin-use",children:[]},{value:"ModifyResponsePlugin Guide",id:"modifyresponseplugin-guide",children:[]}],p={toc:s};function d(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modifyResponse")," is a native plugin of ",(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway and is used to edit response header and body and statusCode.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"li"},"modifyResponse")," , set to enable.")),(0,i.kt)("h2",{id:"plugin-use"},"Plugin Use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Introduce ",(0,i.kt)("inlineCode",{parentName:"li"},"modifyResponse")," dependency in the pom.xml file of the gateway.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu modify response plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-modify-response</artifactId>\n  <version>${project.version}</version>\n</dependency>\n        \x3c!-- apache shenyu modify response plugin end--\x3e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to:",(0,i.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"only those matched requests can be modified response.")))),(0,i.kt)("h2",{id:"modifyresponseplugin-guide"},"ModifyResponsePlugin Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1.Configuration selector"),(0,i.kt)("li",{parentName:"ul"},"2.Configuration rule"),(0,i.kt)("li",{parentName:"ul"},"3.modify response statusCode\n",(0,i.kt)("img",{src:t(73645).Z})),(0,i.kt)("li",{parentName:"ul"},"4.modify response header\n",(0,i.kt)("img",{src:t(15710).Z})),(0,i.kt)("li",{parentName:"ul"},"5.modify response body\n",(0,i.kt)("img",{src:t(28681).Z})),(0,i.kt)("li",{parentName:"ul"},"param details:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addHeaders"),": add response header\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"key-value"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setHeaders"),": set response header\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"key-value"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replaceHeaderKeys"),": replace response header name\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"key")," is the value to be replaced\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"value")," is the value after replacement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"removeHeaderKeys"),": remove response header ",(0,i.kt)("inlineCode",{parentName:"li"},"key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"statusCode"),": response status code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addBodyKeys"),": add response body"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replaceBodyKeys"),": replace response body \uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"key")," is the value to be replaced\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"value")," is the value after replacement"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"removeBodyKeys"),": remove response body ",(0,i.kt)("inlineCode",{parentName:"li"},"key"))))),(0,i.kt)("p",null,"modify response body is achieved through ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONPath")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"$.")," represents the root directory."),(0,i.kt)("p",null,"use the configuration\uff0cunopened the plugin\uff0cresponse body is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"id":3,"name":"hello world findById"}\n')),(0,i.kt)("p",null,"open the plugin\uff0cresponse body is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"id2":3,"add":"4"}\n')))}d.isMDXComponent=!0},28681:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/modifyBody-en-fa57f66c274d0ab89fce27bd95317b6e.png"},15710:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/modifyHeader-en-930b4badfebbee15d2d9d5b384669404.png"},73645:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/modifyStatus-en-fa50ac082c8151bfe64ce6cc331520d7.png"}}]);