(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[59727],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=i(n),d=o,h=y["".concat(c,".").concat(d)]||y[d]||u[d]||l;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},28408:(e,t,n)=>{"use strict";n.d(t,{N:()=>p,Z:()=>u});var r=n(87462),o=n(67294),l=n(86010),a=n(24973),s=n(13018);const c="enhancedAnchor_WiXH",i="h1Heading_dC7a",p=function(e){let{...t}=e;return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},t,{id:void 0,className:i}),t.children))},u=e=>{return"h1"===e?p:(t=e,function(e){let{id:n,...r}=e;const{navbar:{hideOnScroll:i}}=(0,s.LU)();return n?o.createElement(t,r,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",{[c]:!i}),id:n}),r.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,r)});var t}},96845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>A});var r=n(87462),o=n(67294),l=n(36742),a=n(86010);const s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var c={Prism:n(87410).Z,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var u=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const g=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,l=p({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==o&&(l.style=void 0!==l.style?p({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return l[n[0]];var a=r?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,l=e.token,a=p({},m(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,l=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],l=0,a=0,s=[],c=[s];a>-1;){for(;(l=r[a]++)<o[a];){var i=void 0,p=t[a],h=n[a][l];if("string"==typeof h?(p=a>0?p:["plain"],i=h):(p=d(p,h.type),h.alias&&(p=d(p,h.alias)),i=h.content),"string"==typeof i){var m=i.split(u),g=m.length;s.push({types:p,content:m[0]});for(var f=1;f<g;f++)y(s),c.push(s=[]),s.push({types:p,content:m[f]})}else a++,t.push(p),n.push(i),r.push(0),o.push(i.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return y(s),c}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var f=n(87594),b=n.n(f);const v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var k=n(85350),j=n(13018);const E=()=>{const{prism:e}=(0,j.LU)(),{isDarkTheme:t}=(0,k.Z)(),n=e.theme||v,r=e.darkTheme||n;return t?r:n};var O=n(24973);const x="codeBlockContainer_J+bg",T="codeBlockContent_csEI",N="codeBlockTitle_oQzk",P="codeBlock_rtdJ",Z="copyButton_M3SB",w="codeBlockLines_1zSZ",C=/{([\d,-]+)}/,S=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((e=>"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")")).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function B(e){let{children:t,className:n,metastring:l,title:s}=e;const{prism:i}=(0,j.LU)(),[p,u]=(0,o.useState)(!1),[y,d]=(0,o.useState)(!1);(0,o.useEffect)((()=>{d(!0)}),[]);const h=(0,j.bc)(l)||s,m=(0,o.useRef)(null);let f=[];const v=E(),k=Array.isArray(t)?t.join(""):t;if(l&&C.test(l)){const e=l.match(C)[1];f=b()(e).filter((e=>e>0))}let B=n&&n.replace(/language-/,"");!B&&i.defaultLanguage&&(B=i.defaultLanguage);let D=k.replace(/\n$/,"");if(0===f.length&&void 0!==B){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}})(B),n=k.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const l=o+1,a=n[o].match(t);if(null!==a){switch(a.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=l+",";break;case"highlight-start":r=l;break;case"highlight-end":e+=r+"-"+(l-1)+","}n.splice(o,1)}else o+=1}f=b()(e),D=n.join("\n")}const L=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const l=document.getSelection();let a=!1;l.rangeCount>0&&(a=l.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}r.remove(),a&&(l.removeAllRanges(),l.addRange(a)),o&&o.focus()}(D),u(!0),setTimeout((()=>u(!1)),2e3)};return o.createElement(g,(0,r.Z)({},c,{key:String(y),theme:v,code:D,language:B}),(e=>{let{className:t,style:n,tokens:l,getLineProps:s,getTokenProps:c}=e;return o.createElement("div",{className:x},h&&o.createElement("div",{style:n,className:N},h),o.createElement("div",{className:(0,a.Z)(T,B)},o.createElement("pre",{tabIndex:0,className:(0,a.Z)(t,P,"thin-scrollbar"),style:n},o.createElement("code",{className:w},l.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=s({line:e,key:t});return f.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.Z)({key:t},n),e.map(((e,t)=>o.createElement("span",(0,r.Z)({key:t},c({token:e,key:t}))))))})))),o.createElement("button",{ref:m,type:"button","aria-label":(0,O.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,a.Z)(Z,"clean-btn"),onClick:L},p?o.createElement(O.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(O.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var D=n(28408);const L="details_h+cY";function _(e){let{...t}=e;return o.createElement(j.PO,(0,r.Z)({},t,{className:(0,a.Z)("alert alert--info",L,t.className)}))}const A={code:e=>{const{children:t}=e;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement(B,e):o.createElement("code",e)},a:e=>o.createElement(l.Z,e),pre:e=>{var t;const{children:n}=e;return(0,o.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:o.createElement(B,(0,o.isValidElement)(n)?null==n?void 0:n.props:{...e})},details:e=>{const t=o.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),l=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(_,(0,r.Z)({},e,{summary:n}),l)},h1:(0,D.Z)("h1"),h2:(0,D.Z)("h2"),h3:(0,D.Z)("h3"),h4:(0,D.Z)("h4"),h5:(0,D.Z)("h5"),h6:(0,D.Z)("h6")}},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);