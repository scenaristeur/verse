(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["synchro"],{a407:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",[o("h3",[e._v("Synchro")]),e._v(" pod storage : "+e._s(e.pod.storage)),o("br"),o("b-row",[o("b-col",{attrs:{sm:"3"}},[o("label",{attrs:{for:"neuroneStore"}},[o("code",[e._v("Neurone storage")]),e._v(":")])]),o("b-col",{attrs:{sm:"9"}},[o("b-form-input",{attrs:{id:"neuroneStore",type:"text"},model:{value:e.pod.neuroneStore,callback:function(t){e.$set(e.pod,"neuroneStore",t)},expression:"pod.neuroneStore"}})],1)],1),o("b-button",{attrs:{size:"sm",variant:"success"},on:{click:e.synchronize}},[e._v("Get remote Neurones")]),e._v(" "+e._s(e.nodes)+" "),o("hr")],1)},r=[],s={name:"Synchro",methods:{synchronize:function(){this.$synchronize()}},computed:{pod:{get:function(){return this.$store.state.solid.pod},set:function(){}},nodes:{get:function(){return this.$store.state.nodes.nodes},set:function(){}}}},c=s,u=o("2877"),a=Object(u["a"])(c,n,r,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=synchro.a3e119ca.js.map