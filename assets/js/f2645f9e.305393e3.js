"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2287],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),h=p(n),f=o,m=h["".concat(c,".").concat(f)]||h[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5500:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return h}});var r=n(7462),o=n(3366),i=n(7294),a=n(3905),u=function(){var e=(0,i.useState)([]),t=e[0],n=e[1];(0,i.useEffect)((function(){t&&0!==t.length||fetch("https://api.github.com/repos/apache/incubator-shenyu/contributors?page=1&per_page=10000").then((function(e){return e.json()})).then((function(e){n(e)}))}));var r="<table>";return t&&Array.isArray(t)&&t.forEach((function(e,n){n%5==0&&(n>0&&(r+="</tr>"),r+="<tr>"),r+='<td><a href="'+e.html_url+'" target="_blank"><img src="'+e.avatar_url+'" height="20" /> @'+e.login+"</a></td>",n===t.length-1&&(r+="</tr>")})),r+="</table>",i.createElement("div",{dangerouslySetInnerHTML:{__html:r}})},c=["components"],p={title:"Apache ShenYu Contributors",description:"Apache ShenYu Contributors",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},s=void 0,l={unversionedId:"Apache-ShenYu-Contributors",id:"Apache-ShenYu-Contributors",isDocsHomePage:!1,title:"Apache ShenYu Contributors",description:"Apache ShenYu Contributors",source:"@site/community/9-Apache-ShenYu-Contributors.mdx",sourceDirName:".",slug:"/Apache-ShenYu-Contributors",permalink:"/community/Apache-ShenYu-Contributors",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/9-Apache-ShenYu-Contributors.mdx",version:"current",lastUpdatedBy:"fengzhenbing",lastUpdatedAt:1630487439,formattedLastUpdatedAt:"9/1/2021",sidebarPosition:9,frontMatter:{title:"Apache ShenYu Contributors",description:"Apache ShenYu Contributors",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},sidebar:"community",previous:{title:"Sign ICLA Guide",permalink:"/community/Sign-ICLA-Guide"},next:{title:"User Registration",permalink:"/community/User-Registration"}},h=[],f={toc:h};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hundreds of people have contributed articles and code to Apache ShenYu so far, thank you very much!"),(0,a.kt)("p",null,"If you want to contribute, you can go to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/"},"Apache ShenYu")," and fork it."),(0,a.kt)(u,{mdxType:"Contributors"}))}m.isMDXComponent=!0}}]);