(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit"],{1071:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"name"}},[e._v("Name:")])]),n("b-col",{attrs:{sm:"9"}},[n("b-form-input",{attrs:{id:"name",required:""},model:{value:e.node.name,callback:function(t){e.$set(e.node,"name",t)},expression:"node.name"}})],1),n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"age"}},[n("code",[e._v("Age")]),e._v(":")])]),n("b-col",[n("b-form-input",{attrs:{id:"age",required:"",type:"number"},model:{value:e.node.age,callback:function(t){e.$set(e.node,"age",t)},expression:"node.age"}})],1)],1),e._l(e.node.properties,(function(t){return n("b-row",{key:t.name},[n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"name"}},[e._v(e._s(t.name))])]),n("b-col",{attrs:{sm:"9"}},[n("b-button-toolbar",{attrs:{"key-nav":"","aria-label":"Toolbar with button groups"}},[n("b-dropdown",{staticClass:"mx-1",attrs:{size:"sm",right:"",text:"+",variant:"outline-primary"}},[n("b-dropdown-item",{on:{click:function(t){e.fieldType="text"}}},[e._v("Text")]),n("b-dropdown-item",{on:{click:function(t){e.fieldType="textarea"}}},[e._v("Textarea")]),n("b-dropdown-item",{on:{click:function(t){e.fieldType="node"}}},[e._v("Node")]),n("b-dropdown-item",{on:{click:function(t){e.fieldType="link"}}},[e._v("Link")])],1)],1),e._v(" "+e._s(t.values)+" "+e._s(e.fieldType)+" ")],1)],1)})),null!=e.field?n("b-row",{staticClass:"mt-3"},[n("b-col",{attrs:{sm:"3"}},[n("b-form-input",{attrs:{required:"",placeholder:"property name"},on:{change:e.fieldNameChanged},model:{value:e.field.name,callback:function(t){e.$set(e.field,"name",t)},expression:"field.name"}})],1),n("b-col",{attrs:{sm:"9"}},[n("b-button",{attrs:{variant:"outline-secondary",size:"sm"},on:{click:e.clear_field}},[e._v("X")])],1)],1):e._e(),n("b-row",[n("b-col"),n("b-col",[n("b-btn",{attrs:{variant:"outline-primary",size:"sm"},on:{click:e.add}},[e._v("+ add property or link")])],1)],1),n("b-row",[n("b-col",[n("b-btn",{attrs:{variant:"success"},on:{click:e.save}},[e._v("Save Node")])],1)],1)],2)},r=[],o=n("1da1"),i=(n("c740"),n("b0c0"),n("96cf"),{name:"Edit",data:function(){return{node:null,field:null,clearing:!1,fieldType:null}},created:function(){this.$route.params.node?this.node=this.$route.params.node:this.node={name:"",age:0,properties:[]}},methods:{save:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("nodes/saveNode",e.node);case 2:e.$router.push("/");case 3:case"end":return t.stop()}}),t)})))()},add:function(){this.field={name:""}},fieldNameChanged:function(e){if(console.log(e),0==this.clearing){var t={name:e,values:[]};void 0==this.node.properties&&(this.node.properties=[]);var n=this.node.properties.findIndex((function(e){return e.name==t.name}));-1===n?this.node.properties.push(t):alert(t.name+" already exist")}},clear_field:function(){this.clearing=!0,this.field=null,this.clearing=!1}}}),s=i,l=n("2877"),c=Object(l["a"])(s,a,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=edit.41107b73.js.map