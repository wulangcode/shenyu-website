"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[97187],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),h=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=h(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),s=h(a),m=r,d=s["".concat(i,".").concat(m)]||s[m]||c[m]||l;return a?n.createElement(d,p(p({ref:t},o),{},{components:a})):n.createElement(d,p({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,p[1]=u;for(var h=2;h<l;h++)p[h]=a[h];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},55021:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>p,default:()=>o,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={id:"contributor-guide",title:"\u8d21\u732e\u8005\u6307\u5357",sidebar_position:3,description:"Apache ShenYu \u8d21\u732e\u8005\u6307\u5357",categories:"Apache ShenYu",tags:["Contributor"]},p=void 0,u={unversionedId:"contributor-guide",id:"contributor-guide",isDocsHomePage:!1,title:"\u8d21\u732e\u8005\u6307\u5357",description:"Apache ShenYu \u8d21\u732e\u8005\u6307\u5357",source:"@site/i18n/zh/docusaurus-plugin-content-docs-community/current/3-contributor.md",sourceDirName:".",slug:"/contributor-guide",permalink:"/zh/community/contributor-guide",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-community/current/3-contributor.md",version:"current",lastUpdatedBy:"moremind",lastUpdatedAt:1663734299,formattedLastUpdatedAt:"2022/9/21",sidebarPosition:3,frontMatter:{id:"contributor-guide",title:"\u8d21\u732e\u8005\u6307\u5357",sidebar_position:3,description:"Apache ShenYu \u8d21\u732e\u8005\u6307\u5357",categories:"Apache ShenYu",tags:["Contributor"]},sidebar:"community",previous:{title:"\u95ee\u9898\u53ca\u63d0\u4ea4\u8bf7\u6c42",permalink:"/zh/community/issue-pr"},next:{title:"\u7b7e\u7f72ICLA\u6307\u5357",permalink:"/zh/community/icla"}},i=[{value:"\u8d21\u732e\u65b9\u5f0f",id:"\u8d21\u732e\u65b9\u5f0f",children:[]},{value:"\u53c2\u4e0e\u8ba8\u8bba",id:"\u53c2\u4e0e\u8ba8\u8bba",children:[]},{value:"\u76ee\u6807\u4ed3\u5e93",id:"\u76ee\u6807\u4ed3\u5e93",children:[]},{value:"\u8ba9 Apache ShenYu \u8fd0\u884c\u8d77\u6765",id:"\u8ba9-apache-shenyu-\u8fd0\u884c\u8d77\u6765",children:[]},{value:"\u5bfb\u627e\u4efb\u52a1",id:"\u5bfb\u627e\u4efb\u52a1",children:[]},{value:"\u7b2c\u4e00\u6b21\u63d0\u4ea4 Pull Request",id:"\u7b2c\u4e00\u6b21\u63d0\u4ea4-pull-request",children:[]},{value:"\u540e\u7eed\u63d0\u4ea4 Pull Request",id:"\u540e\u7eed\u63d0\u4ea4-pull-request",children:[]},{value:"\u7b49\u5f85\u4ee3\u7801\u88ab\u5408\u5e76",id:"\u7b49\u5f85\u4ee3\u7801\u88ab\u5408\u5e76",children:[]},{value:"\u4ee3\u7801\u88ab\u5408\u5e76\u540e",id:"\u4ee3\u7801\u88ab\u5408\u5e76\u540e",children:[]},{value:"\u5982\u4f55\u6210\u4e3aCommitter\uff1f",id:"\u5982\u4f55\u6210\u4e3acommitter",children:[]}],h={toc:i};function o(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6211\u4eec\u6b22\u8fce\u6bcf\u4e00\u4f4d\u8d21\u732e\u8005\u7684\u52a0\u5165\uff01"),(0,r.kt)("h3",{id:"\u8d21\u732e\u65b9\u5f0f"},"\u8d21\u732e\u65b9\u5f0f"),(0,r.kt)("p",null,"\u5728 Apache ShenYu \u793e\u533a\uff0c\u8d21\u732e\u65b9\u5f0f\u6709\u5f88\u591a\uff1a"),(0,r.kt)("p",null,"\u4ee3\u7801\uff1a\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5b8c\u6210\u4e00\u4e9b\u4efb\u52a1\u3001\u7f16\u5199\u65b0\u7684feature\u6216\u8005\u662f\u4fee\u590d\u4e00\u4e9bbug\uff1b"),(0,r.kt)("p",null,"\u6d4b\u8bd5\uff1a\u53ef\u4ee5\u6765\u53c2\u4e0e\u6d4b\u8bd5\u4ee3\u7801\u7684\u7f16\u5199\uff0c\u5305\u62ec\u4e86\u5355\u5143\u6d4b\u8bd5\u3001\u96c6\u6210\u6d4b\u8bd5\u3001e2e\u6d4b\u8bd5\uff1b"),(0,r.kt)("p",null,"\u6587\u6863\uff1a\u53ef\u4ee5\u7f16\u5199\u6216\u5b8c\u5584\u6587\u6863\uff0c\u6765\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u4e86\u89e3\u548c\u4f7f\u7528 Apache ShenYu\uff1b"),(0,r.kt)("p",null,"\u535a\u5ba2\uff1a\u53ef\u4ee5\u64b0\u5199 Apache ShenYu \u7684\u76f8\u5173\u6587\u7ae0\uff0c\u6765\u5e2e\u52a9\u793e\u533a\u66f4\u597d\u5730\u63a8\u5e7f\uff1b"),(0,r.kt)("p",null,"\u8ba8\u8bba\uff1a\u53ef\u4ee5\u53c2\u4e0e Apache ShenYu \u65b0\u7684feature\u7684\u8ba8\u8bba\uff0c\u5c06\u60a8\u7684\u60f3\u6cd5\u8ddf Apache ShenYu \u878d\u5408\uff1b"),(0,r.kt)("p",null,"\u5e03\u9053\uff1a\u53ef\u4ee5\u5e2e\u52a9\u5ba3\u4f20\u6216\u63a8\u5e7f Apache ShenYu \u793e\u533a\uff0c\u5728 meetup \u6216 summit \u4e2d\u6f14\u8bb2\uff1b"),(0,r.kt)("p",null,"\u5efa\u8bae\uff1a\u4e5f\u53ef\u4ee5\u5bf9\u9879\u76ee\u6216\u8005\u793e\u533a\u63d0\u51fa\u4e00\u4e9b\u5efa\u8bae\uff0c\u4fc3\u8fdb\u793e\u533a\u7684\u826f\u6027\u53d1\u5c55\uff1b"),(0,r.kt)("p",null,"\u3002\u3002\u3002"),(0,r.kt)("p",null,"\u5373\u4fbf\u662f\u5c0f\u5230\u9519\u522b\u5b57\u7684\u4fee\u6b63\uff0c\u6216\u8005\u662f\u5bf9404\u94fe\u63a5\u7684\u4fee\u6b63\uff0c\u6211\u4eec\u4e5f\u90fd\u975e\u5e38\u6b22\u8fce :)"),(0,r.kt)("h3",{id:"\u53c2\u4e0e\u8ba8\u8bba"},"\u53c2\u4e0e\u8ba8\u8bba"),(0,r.kt)("p",null,"\u6211\u4eec\u8ba4\u4e3a\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/theapacheway/index.html"},"\u793e\u533a\u80dc\u4e8e\u4ee3\u7801"),"\u3002"),(0,r.kt)("p",null,"\u53c2\u4e0e\u8ba8\u8bba\u662f\u8d21\u732e\u7684\u7b2c\u4e00\u6b65\uff0c\u8bf7\u5148\u8ba2\u9605\u6211\u4eec\u7684\u90ae\u4ef6\u5217\u8868\uff0c\u5e76\u53c2\u4e0e\u90ae\u4ef6\u5217\u8868\u4e0a\u6b63\u5728\u8fdb\u884c\u7684\u8ba8\u8bba\uff01"),(0,r.kt)("p",null,"\u8ba2\u9605\u90ae\u4ef6\u7684\u6b65\u9aa4\u5f88\u7b80\u5355\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5411 ",(0,r.kt)("a",{parentName:"li",href:"mailto:dev-subscribe@shenyu.apache.org"},"dev-subscribe@shenyu.apache.org")," \u53d1\u9001\u4e00\u5c01\u90ae\u4ef6\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u53d1\u9001\u6210\u529f\u540e\uff0c\u60a8\u4f1a\u6536\u5230\u6765\u81ea ",(0,r.kt)("a",{parentName:"li",href:"mailto:dev-help@shenyu.apache.org"},"dev-help@shenyu.apache.org")," \u7684\u56de\u4fe1\uff0c\u8bf7\u6309\u7167\u90ae\u4ef6\u7684\u63d0\u793a\u56de\u590d\u8fd9\u5c01\u90ae\u4ef6\uff0c\u786e\u8ba4\u8ba2\u9605\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u56de\u590d\u786e\u8ba4\u540e\uff0c\u60a8\u4f1a\u6536\u5230\u4e00\u5c01\u6b22\u8fce\u90ae\u4ef6\uff0c\u8868\u793a\u60a8\u5df2\u7ecf\u6210\u529f\u8ba2\u9605\u4e86\u90ae\u4ef6\u3002")),(0,r.kt)("p",null,"\u5728\u8ba2\u9605\u6210\u529f\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@shenyu.apache.org"},"dev@shenyu.apache.org")," \u53c2\u4e0e\u8ba8\u8bba\u4e86\u3002\u60a8\u4e5f\u53ef\u4ee5\u70b9\u51fb ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@shenyu.apache.org"},"\u516c\u5171\u5f52\u6863")," \u6765\u770b\u5230\u5386\u53f2\u90ae\u4ef6\u3002"),(0,r.kt)("p",null,"\u5728\u8ba8\u8bba\u8fc7\u7a0b\u4e2d\uff0c\u8bf7\u4fdd\u6301\u793c\u8c8c\uff0c\u5efa\u8bae\u9605\u8bfb ASF \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct.html"},"\u884c\u4e3a\u51c6\u5219"),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u89c9\u5f97\u90ae\u4ef6\u592a\u591a\uff0c\u6253\u6270\u5230\u4f60\uff0c\u6216\u8005\u4f60\u4e0d\u518d\u611f\u5174\u8da3\u3002\u8bf7\u53d1\u9001\u90ae\u4ef6\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"dev-unsubscribe@shenyu.apache.org"),"\u3002\u9000\u8ba2\u90ae\u4ef6\u5217\u8868\u3002\uff08\u9898\u76ee\u548c\u5185\u5bb9\u4efb\u610f\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5904\u7406\uff09"),(0,r.kt)("h3",{id:"\u76ee\u6807\u4ed3\u5e93"},"\u76ee\u6807\u4ed3\u5e93"),(0,r.kt)("p",null,"Apache ShenYu \u4e00\u822c\u662f\u5728 GitHub \u4e0a\u8fdb\u884c\u534f\u4f5c\u5f00\u53d1\u3002\u76ee\u524d\u6709\u4ee5\u4e0b\u51e0\u4e2a\u4ed3\u5e93\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u4ed3\u5e93"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu"},"apache/shenyu")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3b\u4ed3\u5e93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-dashboard"},"apache/shenyu-dashboard")),(0,r.kt)("td",{parentName:"tr",align:null},"shenyu-admin\u524d\u7aef\u4ed3\u5e93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-website"},"apache/shenyu-website")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b98\u7f51\u53ca\u6587\u6863")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-helm-chart"},"apache/shenyu-helm-chart")),(0,r.kt)("td",{parentName:"tr",align:null},"Helm Chart for Apache ShenYu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-nginx"},"apache/shenyu-nginx")),(0,r.kt)("td",{parentName:"tr",align:null},"Nginx\u96c6\u6210\u4ed3\u5e93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-client-python"},"apache/shenyu-client-python")),(0,r.kt)("td",{parentName:"tr",align:null},"Python SDK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-client-dotnet"},"apache/shenyu-client-dotnet")),(0,r.kt)("td",{parentName:"tr",align:null},".Net SDK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/shenyu-client-golang"},"apache/shenyu-client-golang")),(0,r.kt)("td",{parentName:"tr",align:null},"Golang SDK")))),(0,r.kt)("h3",{id:"\u8ba9-apache-shenyu-\u8fd0\u884c\u8d77\u6765"},"\u8ba9 Apache ShenYu \u8fd0\u884c\u8d77\u6765"),(0,r.kt)("p",null,"\u8ba9 Apache ShenYu \u7684\u4ee3\u7801\u5728\u60a8\u7684\u5f00\u53d1\u5de5\u5177\u4e0a\u8fd0\u884c\u8d77\u6765\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u6216\u8005 ",(0,r.kt)("a",{parentName:"p",href:"/zh/blog/Start-SourceCode-Analysis-Start-Demo"},"Apache ShenYu \u542f\u52a8\u793a\u4f8b"),"\uff0c\u5e76\u4e14\u80fd\u591f\u65ad\u70b9\u8c03\u8bd5\u3002"),(0,r.kt)("p",null,"\u5728\u8fd0\u884c\u8d77\u6765\u4e4b\u540e\uff0c\u53ef\u4ee5\u9605\u8bfb\u6211\u4eec\u5b98\u7f51\u6536\u5f55\u7684",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/blog"},"\u6e90\u7801\u5206\u6790\u6587\u7ae0"),"\uff0c\u6765\u5bf9 Apache ShenYu \u6709\u66f4\u6df1\u5165\u7684\u7406\u89e3\u3002"),(0,r.kt)("h3",{id:"\u5bfb\u627e\u4efb\u52a1"},"\u5bfb\u627e\u4efb\u52a1"),(0,r.kt)("p",null,"\u5bfb\u627e\u60a8\u611f\u5174\u8da3\u7684Issue\uff01\u5728\u6211\u4eec\u7684GitHub\u4ed3\u5e93\u548c\u90ae\u4ef6\u5217\u8868\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u53d1\u5e03\u4e00\u4e9b\u5e26\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"good first issue")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"status: volunteer wanted")," \u6807\u7b7e\u7684issue\uff0c\u8fd9\u4e9bissue\u90fd\u6b22\u8fce\u8d21\u732e\u8005\u7684\u5e2e\u52a9\u3002\u5176\u4e2dgood first issue\u5f80\u5f80\u95e8\u69db\u8f83\u4f4e\u3001\u9002\u5408\u65b0\u624b\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22%2C%22status%3A+volunteer+wanted%22"},"\u94fe\u63a5")," \u67e5\u770b\u8fd9\u4e9bissue\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u60a8\u6709\u597d\u7684\u60f3\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728 \u90ae\u4ef6\u5217\u8868(",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@shenyu.apache.org"},"dev@shenyu.apache.org"),") \u4e2d\u63d0\u51fa\uff0c\u7ecf\u8fc7\u5145\u5206\u8ba8\u8bba\u540e\u5c31\u53ef\u4ee5\u5f00\u59cb\u884c\u52a8\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u60a8\u4e5f\u53ef\u4ee5\u53c2\u4e0e\u7f16\u5199\u6211\u4eec\u7684",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/blog"},"\u535a\u5ba2"),"\uff0c\u5e76\u901a\u8fc7 Pull Request \u7684\u65b9\u5f0f\u63d0\u4ea4\u5230 Apache ShenYu \u5b98\u7f51\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu-website/tree/main/blog"},"\u535a\u5ba2\u6a21\u5757")," \u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u662f\u5b66\u751f\uff0c\u90a3\u4e48\u4e5f\u975e\u5e38\u6b22\u8fce\u5728 GSoC \u7b49\u5f00\u6e90\u5b9e\u4e60\u6d3b\u52a8\u4e2d\u7533\u8bf7 Apache ShenYu \u7684\u8bae\u9898\uff0c\u60a8\u53ef\u4ee5\u70b9\u51fb ",(0,r.kt)("a",{parentName:"p",href:"https://community.apache.org/gsoc.html"},"\u94fe\u63a5")," \u6765\u67e5\u770b Apache \u8f6f\u4ef6\u57fa\u91d1\u4f1a\u5bf9 GSoC \u7684\u4ecb\u7ecd\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/issues?q=is%3Aopen+is%3Aissue+label%3Agsoc"},"\u94fe\u63a5")," \u6765\u67e5\u770b Apache ShenYu \u5f80\u5e74\u6216\u8005\u6b63\u5728\u8fdb\u884c\u4e2d\u7684 GSoC \u8bae\u9898\uff01"),(0,r.kt)("h3",{id:"\u7b2c\u4e00\u6b21\u63d0\u4ea4-pull-request"},"\u7b2c\u4e00\u6b21\u63d0\u4ea4 Pull Request"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u63d0\u4ea4 Pr\uff0c\u9996\u5148\u60a8\u9700\u8981 Fork \u76ee\u6807\u4ed3\u5e93\u3002\uff08\u5982\u679c\u5df2\u7ecf Fork \u5219\u4e0d\u9700\u8981\u518d Fork\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fork",src:a(90129).Z})),(0,r.kt)("p",null,"\u7136\u540e ",(0,r.kt)("strong",{parentName:"p"},"\u7528git\u547d\u4ee4")," \u5c06\u4ee3\u7801\u4e0b\u8f7d\u5230\u672c\u5730\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:${YOUR_USERNAME}/${TARGET_REPO}.git #\u63a8\u8350\u4f7f\u7528\n# \u4e5f\u53ef\u4ee5 git clone https://github.com/${YOUR_USERNAME}/${TARGET_REPO}.git\n")),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u8bf7\u53c2\u8003\u76ee\u6807\u4ed3\u5e93\u7684\u5165\u95e8\u6307\u5357\u6216\u8005 README \u6587\u4ef6\u5bf9\u9879\u76ee\u8fdb\u884c\u521d\u59cb\u5316\u3002Windows \u73af\u5883\u4e0b\uff0c\u5982\u679c\u514b\u9686\u6e90\u7801\u65f6\uff0c\u63d0\u793a\u6587\u4ef6\u540d\u8fc7\u957f\uff0c\u8bf7\u53c2\u770b",(0,r.kt)("a",{parentName:"p",href:"./faq"},"FAQ"),"\u3002"),(0,r.kt)("p",null,"\u63a5\u7740\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u4ee3\u7801\u7684\u63d0\u4ea4\uff1a"),(0,r.kt)("p",null,"\u5207\u6362\u65b0\u7684\u5206\u652f\uff0c\u8fdb\u884c\u5f00\u53d1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b a-dev-branch\n")),(0,r.kt)("p",null,"\u63d0\u4ea4 commit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git add <modified file/path> #add\u540e\u8ddf\u7740\u6539\u52a8\u7684\u6587\u4ef6\u6216\u76ee\u5f55\ngit commit -m 'necessary instructions'\n")),(0,r.kt)("p",null,"\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin a-dev-branch\n")),(0,r.kt)("p",null,"\u7136\u540e\u60a8\u5c31\u53ef\u4ee5\u5728 GitHub \u4e0a\u53d1\u8d77\u65b0\u7684 PR (Pull Request)\u3002"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f PR \u7684\u6807\u9898\u9700\u8981\u7b26\u5408\u6211\u4eec\u7684",(0,r.kt)("a",{parentName:"p",href:"/zh/community/issue-pr"},"\u89c4\u8303"),"\uff0c\u5e76\u4e14\u5728 PR \u4e2d\u5199\u4e0a\u5fc5\u8981\u7684\u8bf4\u660e\uff0c\u6765\u65b9\u4fbf Committer \u548c\u5176\u4ed6\u8d21\u732e\u8005\u8fdb\u884c\u4ee3\u7801\u5ba1\u67e5\u3002"),(0,r.kt)("h3",{id:"\u540e\u7eed\u63d0\u4ea4-pull-request"},"\u540e\u7eed\u63d0\u4ea4 Pull Request"),(0,r.kt)("h4",{id:"\u66f4\u65b0\u4e3b\u5206\u652f\u4ee3\u7801"},"\u66f4\u65b0\u4e3b\u5206\u652f\u4ee3\u7801"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5207\u6362\u5230\u4e3b\u5206\u652f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master #\u4e5f\u53ef\u80fd\u662fmain\u5206\u652f\n")),(0,r.kt)("p",null,"\u7ed1\u5b9a\u4e0a\u6e38\u4ed3\u5e93\uff08\u53ea\u9700\u8981\u7ed1\u5b9a\u4e00\u6b21\uff09\uff0c\u8fd9\u91cc\u4ee5 shenyu \u7684\u4e3b\u4ed3\u5e93\u4e3a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/apache/shenyu.git\n")),(0,r.kt)("p",null,"\u62c9\u53d6\u8fdc\u7a0b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git pull upstream master\n")),(0,r.kt)("h4",{id:"\u65b0\u5efa\u5f00\u53d1\u5206\u652f\u8fdb\u884c\u5f00\u53d1"},"\u65b0\u5efa\u5f00\u53d1\u5206\u652f\uff0c\u8fdb\u884c\u5f00\u53d1"),(0,r.kt)("p",null,"\u63a5\u7740\u65b0\u5efa\u5f00\u53d1\u5206\u652f\u8fdb\u884c\u5f00\u53d1\u3001\u63d0\u4ea4\u548c\u63a8\u9001\uff0c\u6d41\u7a0b\u4e0e\u7b2c\u4e00\u6b21\u63d0\u4ea4 Pull Request \u4e00\u6837\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62 master \u5206\u652f\u6df7\u4e71\uff0c\u5efa\u8bae master \u5206\u652f\u7528\u4e8e\u4fdd\u6301\u8ddf\u4e0a\u6e38\u7684\u540c\u6b65\uff0c\u4e0d\u5728 master \u5206\u652f\u8fdb\u884c\u5f00\u53d1\u3001\u63d0\u4ea4\u4ee3\u7801\u3002"),(0,r.kt)("h3",{id:"\u7b49\u5f85\u4ee3\u7801\u88ab\u5408\u5e76"},"\u7b49\u5f85\u4ee3\u7801\u88ab\u5408\u5e76"),(0,r.kt)("p",null,"\u5728\u63d0\u4ea4\u4e86 PR \u540e\uff0cCommitter \u6216\u8005\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u4f1a\u5bf9\u60a8\u63d0\u4ea4\u7684\u4ee3\u7801\u8fdb\u884c\u5ba1\u67e5\uff08Code Review\uff09\uff0c\u4f1a\u63d0\u51fa\u4e00\u4e9b\u4fee\u6539\u5efa\u8bae\uff0c\u6216\u8005\u662f\u8fdb\u884c\u4e00\u4e9b\u8ba8\u8bba\uff0c\u8bf7\u53ca\u65f6\u5173\u6ce8\u60a8\u7684PR\u3002"),(0,r.kt)("p",null,"\u82e5\u540e\u7eed\u9700\u8981\u6539\u52a8\uff0c\u4e0d\u9700\u8981\u53d1\u8d77\u4e00\u4e2a\u65b0\u7684 PR\uff0c\u5728\u539f\u6709\u7684\u5206\u652f\u4e0a\u63d0\u4ea4 commit \u5e76\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93\u540e\uff0cPR\u4f1a\u81ea\u52a8\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u6211\u4eec\u7684\u9879\u76ee\u6709\u6bd4\u8f83\u89c4\u8303\u548c\u4e25\u683c\u7684 CI \u68c0\u67e5\u6d41\u7a0b\uff0c\u5728\u63d0\u4ea4 PR \u4e4b\u540e\u4f1a\u89e6\u53d1 CI\uff0c\u8bf7\u6ce8\u610f\u662f\u5426\u901a\u8fc7 CI \u68c0\u67e5\u3002"),(0,r.kt)("p",null,"\u6700\u540e\uff0cCommitter \u53ef\u4ee5\u5c06 PR \u5408\u5e76\u5165\u4e3b\u5206\u652f\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801\u88ab\u5408\u5e76\u540e"},"\u4ee3\u7801\u88ab\u5408\u5e76\u540e"),(0,r.kt)("p",null,"\u5728\u4ee3\u7801\u88ab\u5408\u5e76\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u5728\u672c\u5730\u548c\u8fdc\u7a0b\u4ed3\u5e93\u5220\u9664\u8fd9\u4e2a\u5f00\u53d1\u5206\u652f\u4e86\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -d a-dev-branch\ngit push origin --delete a-dev-branch\n")),(0,r.kt)("p",null,"\u5728\u4e3b\u5206\u652f\u4e0a\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u6765\u540c\u6b65\u4e0a\u6e38\u4ed3\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/apache/shenyu.git #\u7ed1\u5b9a\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5982\u679c\u6267\u884c\u8fc7\u5c31\u4e0d\u9700\u8981\u518d\u6267\u884c\ngit checkout master #\u6216main\ngit pull upstream master\n")),(0,r.kt)("h3",{id:"\u5982\u4f55\u6210\u4e3acommitter"},"\u5982\u4f55\u6210\u4e3aCommitter\uff1f"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u6b65\u9aa4\uff0c\u60a8\u5c31\u662f Apache ShenYu \u7684\u8d21\u732e\u8005\u4e86\u3002\u91cd\u590d\u524d\u9762\u7684\u6b65\u9aa4\uff0c\u5728\u793e\u533a\u4e2d\u4fdd\u6301\u6d3b\u8dc3\uff0c\u575a\u6301\u4e0b\u53bb\uff0c\u60a8\u5c31\u80fd\u6210\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"./committer"},"Committer"),"\uff01"),(0,r.kt)("p",null,"\u4e3a\u4e86\u53ca\u65f6\u4e86\u89e3 Apache ShenYu \u7684\u53d1\u5c55\u52a8\u6001\uff0c\u60a8\u53ef\u4ee5\u5173\u6ce8\u90ae\u4ef6\u5217\u8868\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e\u793e\u533a\u7684\u53cc\u5468\u4f1a\uff08\u4f1a\u8bae\u9080\u8bf7\u94fe\u63a5\u5c06\u4f1a\u5728\u90ae\u4ef6\u5217\u8868\u4e2d\u53d1\u51fa\uff09\u3002"))}o.isMDXComponent=!0},90129:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fork-d5bea44a59363214f1d720eb04e13512.png"}}]);