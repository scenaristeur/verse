(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit"],{1071:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-container",[t("b-row",[t("b-col",{attrs:{sm:"3"}},[t("label",{attrs:{for:"name"}},[e._v("Name:")])]),t("b-col",{attrs:{sm:"9"}},[t("b-form-input",{attrs:{id:"name",required:""},model:{value:e.node.name,callback:function(n){e.$set(e.node,"name",n)},expression:"node.name"}})],1),t("b-col",{attrs:{sm:"3"}},[t("label",{attrs:{for:"age"}},[t("code",[e._v("Age")]),e._v(":")])]),t("b-col",[t("b-form-input",{attrs:{id:"age",required:"",type:"number"},model:{value:e.node.age,callback:function(n){e.$set(e.node,"age",n)},expression:"node.age"}})],1)],1),t("b-row",[t("b-col",[t("b-btn",{attrs:{variant:"success"},on:{click:e.save}},[e._v("Save Node")])],1)],1)],1)},o=[],r=t("1da1"),s=(t("96cf"),{name:"Edit",data:function(){return{node:null}},created:function(){this.$route.params.node?this.node=this.$route.params.node:this.node={name:"",age:0}},methods:{save:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e.node),n.next=3,e.$store.dispatch("nodes/saveNode",e.node);case 3:console.log("back"),e.$router.push("/");case 5:case"end":return n.stop()}}),n)})))()}}}),c=s,i=t("2877"),u=Object(i["a"])(c,a,o,!1,null,null,null);n["default"]=u.exports}}]);
//# sourceMappingURL=edit.c67de89d.js.map