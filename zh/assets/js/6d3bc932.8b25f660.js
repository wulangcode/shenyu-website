"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[24156],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(g,i(i({ref:n},s),{},{components:t})):a.createElement(g,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65528:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const l={title:"\u63d2\u4ef6\u6269\u5c55",keywords:["soul"],description:"\u63d2\u4ef6\u6269\u5c55"},i=void 0,u={unversionedId:"developer-guide/custom-plugin",id:"version-2.3.0-Legacy/developer-guide/custom-plugin",isDocsHomePage:!1,title:"\u63d2\u4ef6\u6269\u5c55",description:"\u63d2\u4ef6\u6269\u5c55",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/developer-guide/custom-plugin.md",sourceDirName:"developer-guide",slug:"/developer-guide/custom-plugin",permalink:"/zh/docs/2.3.0-Legacy/developer-guide/custom-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/developer-guide/custom-plugin.md",version:"2.3.0-Legacy",frontMatter:{title:"\u63d2\u4ef6\u6269\u5c55",keywords:["soul"],description:"\u63d2\u4ef6\u6269\u5c55"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"\u6b63\u786e\u83b7\u53d6Ip\u4e0ehost",permalink:"/zh/docs/2.3.0-Legacy/developer-guide/custom-parsing-ip-and-host"},next:{title:"\u81ea\u5b9a\u4e49\u7f51\u5173\u8fd4\u56de\u6570\u636e\u683c\u5f0f",permalink:"/zh/docs/2.3.0-Legacy/developer-guide/custom-result"}},o=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u5355\u4e00\u804c\u8d23\u63d2\u4ef6",id:"\u5355\u4e00\u804c\u8d23\u63d2\u4ef6",children:[]},{value:"\u5339\u914d\u6d41\u91cf\u5904\u7406\u63d2\u4ef6",id:"\u5339\u914d\u6d41\u91cf\u5904\u7406\u63d2\u4ef6",children:[]},{value:"\u8ba2\u9605\u4f60\u7684\u63d2\u4ef6\u6570\u636e\uff0c\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u5904\u7406",id:"\u8ba2\u9605\u4f60\u7684\u63d2\u4ef6\u6570\u636e\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u5904\u7406",children:[]},{value:"\u4e0d\u4f7f\u7528 SelectorList \u4ee5\u53ca RulesList",id:"\u4e0d\u4f7f\u7528-selectorlist-\u4ee5\u53ca-ruleslist",children:[]}],p={toc:o};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u662f soul \u7f51\u5173\u7684\u6838\u5fc3\u6267\u884c\u8005\uff0c\u6bcf\u4e2a\u63d2\u4ef6\u5728\u5f00\u542f\u7684\u60c5\u51b5\u4e0b\uff0c\u90fd\u4f1a\u5bf9\u5339\u914d\u7684\u6d41\u91cf\uff0c\u8fdb\u884c\u81ea\u5df1\u7684\u5904\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728soul \u7f51\u5173\u91cc\u9762\uff0c\u63d2\u4ef6\u5176\u5b9e\u5206\u4e3a2 \u7c7b\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u7c7b\u662f\u5355\u4e00\u804c\u8d23\u7684\u8c03\u7528\u94fe\uff0c\u4e0d\u80fd\u5bf9\u6d41\u91cf\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u7b5b\u9009\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53e6\u4e00\u7c7b\uff0c\u80fd\u5bf9\u5339\u914d\u7684\u6d41\u91cf\uff0c\u6267\u884c\u81ea\u5df1\u7684\u804c\u8d23\u8c03\u7528\u94fe\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u53c2\u8003 soul-plugin \u6a21\u5757\uff0c\u65b0\u589e\u81ea\u5df1\u7684\u63d2\u4ef6\u5904\u7406\uff0c\u5982\u679c\u6709\u597d\u7684\u516c\u7528\u63d2\u4ef6\uff0c\u8bf7\u628a\u4ee3\u7801\u63d0\u4ea4\u4e0a\u6765\u3002")),(0,r.kt)("h2",{id:"\u5355\u4e00\u804c\u8d23\u63d2\u4ef6"},"\u5355\u4e00\u804c\u8d23\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," <dependency>\n        <groupId>org.dromara</groupId>\n        <artifactId>soul-plugin-api</artifactId>\n        <version>${last.version}</version>\n  </dependency>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u65b0\u589e\u4e00\u4e2a\u7c7b A\uff0c\u76f4\u63a5\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"org.dromara.soul.plugin.api.SoulPlugin"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public interface SoulPlugin {\n\n    /**\n     * Process the Web request and (optionally) delegate to the next\n     * {@code WebFilter} through the given {@link SoulPluginChain}.\n     *\n     * @param exchange the current server exchange\n     * @param chain    provides a way to delegate to the next filter\n     * @return {@code Mono<Void>} to indicate when request processing is complete\n     */\n    Mono<Void> execute(ServerWebExchange exchange, SoulPluginChain chain);\n\n    /**\n     * return plugin order .\n     * This attribute To determine the plugin execution order in the same type plugin.\n     *\n     * @return int order\n     */\n    int getOrder();\n\n    /**\n     * acquire plugin name.\n     * this is plugin name define you must Provide the right name.\n     * if you impl AbstractSoulPlugin this attribute not use.\n     *\n     * @return plugin name.\n     */\n    default String named() {\n        return "";\n    }\n\n    /**\n     * plugin is execute.\n     * if return true this plugin can not execute.\n     *\n     * @param exchange the current server exchange\n     * @return default false.\n     */\n    default Boolean skip(ServerWebExchange exchange) {\n        return false;\n    }\n}\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3\u65b9\u6cd5\u8be6\u7ec6\u8bf4\u660e"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," \u65b9\u6cd5\u4e3a\u6838\u5fc3\u7684\u6267\u884c\u65b9\u6cd5\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u91cc\u9762\u81ea\u7531\u7684\u5b9e\u73b0\u81ea\u5df1\u60f3\u8981\u7684\u529f\u80fd\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getOrder()")," \u6307\u5b9a\u63d2\u4ef6\u7684\u6392\u5e8f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"named()")," \u6307\u5b9a\u63d2\u4ef6\u7684\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"skip()")," \u5728\u7279\u5b9a\u7684\u6761\u4ef6\u4e0b\uff0c\u8be5\u63d2\u4ef6\u662f\u5426\u88ab\u8df3\u8fc7\u3002"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u6210Spring\u7684bean\uff0c\u53c2\u8003\u5982\u4e0b\uff0c\u6216\u8005\u76f4\u63a5\u5728\u5b9e\u73b0\u7c7b\u4e0a\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"@Component")," \u6ce8\u89e3\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public SoulPlugin a() {\n        return new A();\n    }\n")),(0,r.kt)("h2",{id:"\u5339\u914d\u6d41\u91cf\u5904\u7406\u63d2\u4ef6"},"\u5339\u914d\u6d41\u91cf\u5904\u7406\u63d2\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f15\u5165\u5982\u4e0b\u4f9d\u8d56\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n        <groupId>org.dromara</groupId>\n        <artifactId>soul-plugin-base</artifactId>\n        <version>${last.version}</version>\n  </dependency>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65b0\u589e\u4e00\u4e2a\u7c7bA\uff0c\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.plugin.base.AbstractSoulPlugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u662f\u53c2\u8003\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * This is your custom plugin.\n * He is running in after before plugin, implement your own functionality.\n * extends AbstractSoulPlugin so you must user soul-admin And add related plug-in development.\n *\n * @author xiaoyu(Myth)\n */\npublic class CustomPlugin extends AbstractSoulPlugin {\n\n    /**\n     * return plugin order .\n     * The same plugin he executes in the same order.\n     *\n     * @return int\n     */\n    @Override\n    public int getOrder() {\n        return 0;\n    }\n\n    /**\n     * acquire plugin name.\n     * return you custom plugin name.\n     * It must be the same name as the plug-in you added in the admin background.\n     *\n     * @return plugin name.\n     */\n    @Override\n    public String named() {\n        return "soul";\n    }\n\n    /**\n     * plugin is execute.\n     * Do I need to skip.\n     * if you need skip return true.\n     *\n     * @param exchange the current server exchange\n     * @return default false.\n     */\n    @Override\n    public Boolean skip(final ServerWebExchange exchange) {\n        return false;\n    }\n\n    @Override\n    protected Mono<Void> doExecute(ServerWebExchange exchange, SoulPluginChain chain, SelectorZkDTO selector, RuleZkDTO rule) {\n        LOGGER.debug(".......... function plugin start..............");\n        /*\n         * Processing after your selector matches the rule.\n         * rule.getHandle() is you Customize the json string to be processed.\n         * for this example.\n         * Convert your custom json string pass to an entity class.\n         */\n        final String ruleHandle = rule.getHandle();\n\n        final Test test = GsonUtils.getInstance().fromJson(ruleHandle, Test.class);\n\n        /*\n         * Then do your own business processing.\n         * The last execution  chain.execute(exchange).\n         * Let it continue on the chain until the end.\n         */\n        System.out.println(test.toString());\n        return chain.execute(exchange);\n    }\n}\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8be6\u7ec6\u8bb2\u89e3\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ee7\u627f\u8be5\u7c7b\u7684\u63d2\u4ef6\uff0c\u63d2\u4ef6\u4f1a\u8fdb\u884c\u9009\u62e9\u5668\u89c4\u5219\u5339\u914d\uff0c\u90a3\u5982\u4f55\u6765\u8bbe\u7f6e\u5462\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"soul-admin")," \u540e\u53f0 --\x3e\u63d2\u4ef6\u7ba1\u7406\u4e2d\uff0c\u65b0\u589e\u4e00\u4e2a\u63d2\u4ef6\uff0c\u6ce8\u610f \u540d\u79f0\u4e0e \u4f60\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"named()")," \u65b9\u6cd5\u8981\u4e00\u81f4\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u91cd\u65b0\u767b\u9646  ",(0,r.kt)("inlineCode",{parentName:"p"},"soul-admin")," \u540e\u53f0 \uff0c\u4f60\u4f1a\u53d1\u73b0\u5728\u63d2\u4ef6\u5217\u8868\u5c31\u591a\u4e86\u4e00\u4e2a\u4f60\u521a\u65b0\u589e\u7684\u63d2\u4ef6\uff0c\u4f60\u5c31\u53ef\u4ee5\u8fdb\u884c\u9009\u62e9\u5668\u89c4\u5219\u5339\u914d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u89c4\u5219\u4e2d\uff0c\u6709\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," \u5b57\u6bb5\uff0c\u662f\u4f60\u81ea\u5b9a\u4e49\u5904\u7406\u6570\u636e\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"doExecute()")," \u65b9\u6cd5\u4e2d\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"final String ruleHandle = rule.getHandle();")," \u83b7\u53d6\uff0c\u7136\u540e\u8fdb\u884c\u4f60\u7684\u64cd\u4f5c\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u518c\u6210Spring\u7684bean\uff0c\u53c2\u8003\u5982\u4e0b\u6216\u8005\u76f4\u63a5\u5728\u5b9e\u73b0\u7c7b\u4e0a\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component")," \u6ce8\u89e3\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public SoulPlugin a() {\n        return new A();\n    }\n")),(0,r.kt)("h2",{id:"\u8ba2\u9605\u4f60\u7684\u63d2\u4ef6\u6570\u636e\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u5904\u7406"},"\u8ba2\u9605\u4f60\u7684\u63d2\u4ef6\u6570\u636e\uff0c\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u5904\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7bA\uff0c\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"org.dromara.soul.plugin.base.handler.PluginDataHandler"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface PluginDataHandler {\n\n    /**\n     * Handler plugin.\n     *\n     * @param pluginData the plugin data\n     */\n    default void handlerPlugin(PluginData pluginData) {\n    }\n\n    /**\n     * Remove plugin.\n     *\n     * @param pluginData the plugin data\n     */\n    default void removePlugin(PluginData pluginData) {\n    }\n\n    /**\n     * Handler selector.\n     *\n     * @param selectorData the selector data\n     */\n    default void handlerSelector(SelectorData selectorData) {\n    }\n\n    /**\n     * Remove selector.\n     *\n     * @param selectorData the selector data\n     */\n    default void removeSelector(SelectorData selectorData) {\n    }\n\n    /**\n     * Handler rule.\n     *\n     * @param ruleData the rule data\n     */\n    default void handlerRule(RuleData ruleData) {\n    }\n\n    /**\n     * Remove rule.\n     *\n     * @param ruleData the rule data\n     */\n    default void removeRule(RuleData ruleData) {\n    }\n\n    /**\n     * Plugin named string.\n     *\n     * @return the string\n     */\n    String pluginNamed();\n\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},"pluginNamed()")," \u8981\u548c\u4f60\u81ea\u5b9a\u4e49\u7684\u63d2\u4ef6\u540d\u79f0\u76f8\u540c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u518c\u6210Spring\u7684bean\uff0c\u53c2\u8003\u5982\u4e0b\u6216\u8005\u76f4\u63a5\u5728\u5b9e\u73b0\u7c7b\u4e0a\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component")," \u6ce8\u89e3\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public PluginDataHandler a() {\n        return new A();\n    }\n")),(0,r.kt)("h2",{id:"\u4e0d\u4f7f\u7528-selectorlist-\u4ee5\u53ca-ruleslist"},"\u4e0d\u4f7f\u7528 SelectorList \u4ee5\u53ca RulesList"),(0,r.kt)("p",null,"\u4e0d\u662f\u6240\u6709\u7684\u63d2\u4ef6\u90fd\u9700\u8981\u8fd9\u4e24\u8005\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u63d0\u4f9b\u4ee5\u4e0b\u4e24\u4e2a\u65b9\u6cd5\uff0c\u5199\u5728 ",(0,r.kt)("strong",{parentName:"p"},"CustomPlugin")," \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @Override\n    protected Mono<Void> handleSelectorIsNull(final String pluginName, \n                                              final ServerWebExchange exchange, \n                                              final SoulPluginChain chain) {\n        return doExecute(exchange, chain, null, null);\n    }\n\n    @Override\n    protected Mono<Void> handleRuleIsNull(final String pluginName, \n                                          final ServerWebExchange exchange, \n                                          final SoulPluginChain chain) {\n        return doExecute(exchange, chain, null, null);\n    }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff0c\u5f53\u5982\u679c\u6ca1\u6709\u91cd\u5199\u7684\u65f6\u5019\uff0c\u7531\u4e8e\u6ca1\u6709 ",(0,r.kt)("strong",{parentName:"li"},"SelectorList")," \u4ee5\u53ca ",(0,r.kt)("strong",{parentName:"li"},"RulesList")," \u4f1a\u5bfc\u81f4\u4f60\u7684\u63d2\u4ef6\u65e0\u6548\u3002")))}s.isMDXComponent=!0}}]);