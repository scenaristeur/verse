(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a3f98ca"],{"227d":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-button",{attrs:{size:"sm",variant:"info"},on:{click:e.editNode}},[e._v(e._s(e.liteNode.name))])],1)},o=[],r=(n("4de4"),n("d3b7"),{name:"NodeLite",props:["node"],methods:{editNode:function(){this.$router.push({name:"edit",params:{node:this.liteNode}})}},computed:{liteNode:function(){var e=this;return this.$store.state.nodes.nodes.filter((function(t){return t.id==e.node.id}))[0]}}}),d=r,s=n("2877"),u=Object(s["a"])(d,i,o,!1,null,null,null);t["default"]=u.exports},"4de4":function(e,t,n){"use strict";var i=n("23e7"),o=n("b727").filter,r=n("1dde"),d=r("filter");i({target:"Array",proto:!0,forced:!d},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-2a3f98ca.8b2fbca3.js.map