(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d0c6"],{d048:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[null!=e.loading?t("div",[e._v(e._s(e.Loading))]):e._e(),null!=e.neurone?t("div",[t("b-button",{staticClass:"my-2 mr-2",attrs:{variant:"info",size:"sm"},on:{click:e.editNode}},[e._v(e._s(e.neurone["ve:name"]))]),t("small",[e._v("age: "+e._s(e.neurone["ve:age"]))]),t("br"),e.neurone["ve:properties"].length>0?t("ul",e._l(e.neurone["ve:properties"],(function(n){return t("li",{key:n.name},[e._v(" "+e._s(n.name)+" ("+e._s(n.values.length)+") ")])})),0):e._e()],1):e._e()])},o=[],u=t("1da1"),i=(t("96cf"),{name:"NodeR",props:["url"],data:function(){return{neurone:null,loading:null}},created:function(){this.init()},methods:{init:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("NODER",e.url),e.loding="loading",n.next=4,e.$getNeurone(e.url);case 4:e.neurone=n.sent,console.log("neurone",e.neurone),e.loading=null;case 7:case"end":return n.stop()}}),n)})))()},editNode:function(){this.$store.commit("nodes/setCurrentNode",this.neurone),this.$router.push({name:"edit"})}},watch:{url:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.init();case 2:case"end":return n.stop()}}),n)})))()}},computed:{}}),a=i,s=t("2877"),l=Object(s["a"])(a,r,o,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21d0c6.54c067cc.js.map