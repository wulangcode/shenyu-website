"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[25329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65349:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Custom Match Mode",keywords:["MatchStrategy"],description:"custom match mode"},i=void 0,c={unversionedId:"developer/spi/custom-match-mode",id:"version-2.4.3/developer/spi/custom-match-mode",isDocsHomePage:!1,title:"Custom Match Mode",description:"custom match mode",source:"@site/versioned_docs/version-2.4.3/developer/spi/custom-match-mode.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-match-mode",permalink:"/docs/developer/spi/custom-match-mode",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/developer/spi/custom-match-mode.md",version:"2.4.3",frontMatter:{title:"Custom Match Mode",keywords:["MatchStrategy"],description:"custom match mode"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Custom Load Balancer",permalink:"/docs/developer/spi/custom-load-balance"},next:{title:"Custom Metrics Monitor",permalink:"/docs/developer/spi/custom-metrics-monitor"}},s=[],p={toc:s};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This paper describes how to customize the extension of  ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a new project and introduce the following dependencies:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new class ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomMatchStrategy"),", extends ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.AbstractMatchStrategy"),", implements ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy"),", add annotation ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.spi.Join"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * This is custom match strategy.\n */\n@Join\npublic class CustomMatchStrategy extends AbstractMatchStrategy implements MatchStrategy {\n\n    @Override\n    public Boolean match(final List<ConditionData> conditionDataList, final ServerWebExchange exchange) {\n        // custom match strategy\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the project's META-INF/services directory, create ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"${spi name} = ${custom class path}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}")," represents the name of ",(0,r.kt)("inlineCode",{parentName:"p"},"spi")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"${custom class path}")," represents the fully qualified name of the class. Such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"custom = xxx.xxx.xxx.CustomMatchStrategy\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Package the project and copy it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ext-lib")," directory of the gateway (bootstrap-bin).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway management system --\x3e BasicConfig --\x3e Dictionary,  find the dictionary code as ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH_MODE"),", add a new piece of data, pay attention to the dictionary name: ",(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}"),"."))),(0,r.kt)("img",{src:"/img/shenyu/custom/custom_match_strategy_en.png",width:"70%",height:"60%"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"DictionaryType: ",(0,r.kt)("inlineCode",{parentName:"p"},"matchMode"),";"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryCode: ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH_MODE"),";"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryName: ",(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}"),", input your custom spi name;"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryValue: When used, the value of the drop-down box, do not repeat with the existing;"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryDescribe: desc your custom match strategy;"),(0,r.kt)("p",{parentName:"blockquote"},"Sort: to sort;"),(0,r.kt)("p",{parentName:"blockquote"},"Status: open or close.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When adding selectors or rules, you can use custom MatchType:")),(0,r.kt)("img",{src:"/img/shenyu/custom/use_custom_match_strategy_en.png",width:"80%",height:"70%"}))}l.isMDXComponent=!0}}]);