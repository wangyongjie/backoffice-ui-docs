(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{413:function(t,a,n){"use strict";n.d(a,"a",(function(){return r}));n(129),n(43),n(36),n(7),n(415),n(128),n(218);var s=n(414);function e(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,s)}return n}function r(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?e(Object(n),!0).forEach((function(a){Object(s.a)(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}},414:function(t,a,n){"use strict";function s(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}n.d(a,"a",(function(){return s}))},415:function(t,a,n){var s=n(4),e=n(3),r=n(18),p=n(37).f,o=n(14),v=e((function(){p(1)}));s({target:"Object",stat:!0,forced:!o||v,sham:!o},{getOwnPropertyDescriptor:function(t,a){return p(r(t),a)}})},519:function(t,a,n){"use strict";var s=n(11),e=n(143),r=n(10),p=n(31),o=n(520),v=n(22),_=n(48),c=n(144);e("search",(function(t,a,n){return[function(a){var n=p(this),e=null==a?void 0:_(a,t);return e?s(e,a,n):new RegExp(a)[t](v(n))},function(t){var s=r(this),e=v(t),p=n(a,s,e);if(p.done)return p.value;var _=s.lastIndex;o(_,0)||(s.lastIndex=0);var u=c(s,e);return o(s.lastIndex,_)||(s.lastIndex=_),null===u?-1:u.index}]}))},520:function(t,a){t.exports=Object.is||function(t,a){return t===a?0!==t||1/t==1/a:t!=t&&a!=a}},617:function(t,a,n){"use strict";n.r(a);var s,e=n(413),r=(n(29),n(519),{name:"component-doc",components:{"render-demo-0":(s={data:function(){return{total:0,page:1,limit:20}},methods:{search:function(){console.log("update table data")}}},Object(e.a)({render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[[n("bo-pagination",{attrs:{total:t.total,page:t.page,limit:t.limit},on:{"update:page":function(a){t.page=a},"update:limit":function(a){t.limit=a},pagination:t.search}})]],2)},staticRenderFns:[]},s))}}),p=n(35),o=Object(p.a)(r,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"pagination-分页"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pagination-分页"}},[t._v("#")]),t._v(" Pagination 分页")]),t._v(" "),n("h3",{attrs:{id:"基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),n("p",[t._v("可配合Table组件使用，操作换页和选择笔数及更新Table资料")]),t._v(" "),n("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[n("template",{slot:"demo"},[[n("render-demo-0")]],2),t._v(" "),n("template",{slot:"source"},[n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bo-pagination")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":total")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("total"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":page.sync")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":limit.sync")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("limit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@pagination")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("search"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                total"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                page"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                limit"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        methods"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update table data'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])])],2),n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("可选值")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("total")]),t._v(" "),n("td",[t._v("总条目数")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("page")]),t._v(" "),n("td",[t._v("当前页数，支持 .sync 修饰符")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("1")])]),t._v(" "),n("tr",[n("td",[t._v("limit")]),t._v(" "),n("td",[t._v("每页显示个数选择器的选项设置")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("25")])]),t._v(" "),n("tr",[n("td",[t._v("pageSizes")]),t._v(" "),n("td",[t._v("每页显示个数选择器的选项设置")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("[20, 25, 50, 100]")])]),t._v(" "),n("tr",[n("td",[t._v("layout")]),t._v(" "),n("td",[t._v("组件布局，子组件名用逗号分隔")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v('"total, sizes, prev, pager, next, jumper"')])]),t._v(" "),n("tr",[n("td",[t._v("background")]),t._v(" "),n("td",[t._v("是否为分页按钮添加背景色")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("autoScroll")]),t._v(" "),n("td",[t._v("切换分页后，是否scroll to top")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("hidden")]),t._v(" "),n("td",[t._v("(尚未实作)")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("—")]),t._v(" "),n("td",[t._v("false")])])])]),t._v(" "),n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("方法名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("pagination")]),t._v(" "),n("td",[t._v("切换分页及更换每页笔数时会回调的callback")]),t._v(" "),n("td",[t._v("无")])])])]),t._v(" "),n("h3",{attrs:{id:"methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),n("p",[t._v("无")])],1)}),[],!1,null,null,null);a.default=o.exports}}]);