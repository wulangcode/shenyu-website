"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[61320],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(y,o(o({ref:n},s),{},{components:t})):a.createElement(y,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84635:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_position:1,title:"Dict Management",keywords:["dict"],description:"dict management explanation"},o=void 0,c={unversionedId:"admin/dictionary-management",id:"version-2.3.0-Legacy/admin/dictionary-management",isDocsHomePage:!1,title:"Dict Management",description:"dict management explanation",source:"@site/versioned_docs/version-2.3.0-Legacy/admin/dictionary-management.md",sourceDirName:"admin",slug:"/admin/dictionary-management",permalink:"/docs/2.3.0-Legacy/admin/dictionary-management",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/admin/dictionary-management.md",version:"2.3.0-Legacy",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Dict Management",keywords:["dict"],description:"dict management explanation"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"MetaData Concept Design",permalink:"/docs/2.3.0-Legacy/design/meta-data"},next:{title:"Plugin Handle Explanation",permalink:"/docs/2.3.0-Legacy/admin/plugin-handle-explanation"}},l=[{value:"Explanation",id:"explanation",children:[{value:"Table design",id:"table-design",children:[]}]}],d={toc:l};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dictionary management is primarily used to maintain and manage common data dictionaries.")),(0,i.kt)("h3",{id:"table-design"},"Table design"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sql")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `soul_dict` (\n   `id` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'primary key id',\n   `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'type',\n   `dict_code` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'dictionary encoding',\n   `dict_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'dictionary name',\n   `dict_value` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'dictionary value',\n   `desc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'dictionary description or remarks',\n   `sort` int(4) NOT NULL COMMENT 'sort',\n   `enabled` tinyint(4) DEFAULT NULL COMMENT 'whether it is enabled',\n   `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',\n   `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'update time',\n   PRIMARY KEY (`id`)\n ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The current usage scenario is when the plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"handle")," configuring the ",(0,i.kt)("inlineCode",{parentName:"li"},"data_type=3")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(select box)"))),(0,i.kt)("p",null,"eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"degradeRuleGrade")," is one of fields of sentinel's ",(0,i.kt)("inlineCode",{parentName:"p"},"handle")," json"),(0,i.kt)("p",null,"When it adds rules, it automatically looks up all the general dictionaries of ",(0,i.kt)("inlineCode",{parentName:"p"},"type='degradeRuleGrade'")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"soul_dict")," table as a select-box when you edit the General rules field"))}s.isMDXComponent=!0}}]);