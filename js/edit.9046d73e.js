(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit"],{1071:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"name"}},[e._v("Name:")])]),n("b-col",{attrs:{sm:"9"}},[n("b-form-input",{attrs:{id:"name",required:""},model:{value:e.node.name,callback:function(t){e.$set(e.node,"name",t)},expression:"node.name"}})],1),n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"age"}},[n("code",[e._v("Age")]),e._v(":")])]),n("b-col",[n("b-form-input",{attrs:{id:"age",required:"",type:"number"},model:{value:e.node.age,callback:function(t){e.$set(e.node,"age",t)},expression:"node.age"}})],1)],1),e._l(e.node.properties,(function(t){return n("b-row",{key:t.name},[n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"name"}},[n("code",[e._v(e._s(t.name))]),e._v(":")])]),n("b-col",{attrs:{sm:"9"}},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return e.showFieldModal(t)}}},[e._v("+")]),n("b-list-group",e._l(t.values,(function(t,a){return n("b-list-group-item",{key:a},["text"==t.type?n("span",[e._v(e._s(t.value))]):"textarea"==t.type?n("div",[n("pre",[e._v(e._s(t.value))])]):"node"==t.type?n("NodeLite",{attrs:{node:t}}):n("div",[e._v(e._s(t))])],1)})),1)],1)],1)})),null!=e.field?n("b-row",{staticClass:"mt-3"},[n("b-col",{attrs:{sm:"3"}},[n("b-form-input",{attrs:{required:"",placeholder:"property name"},on:{change:e.fieldNameChanged},model:{value:e.field.name,callback:function(t){e.$set(e.field,"name",t)},expression:"field.name"}})],1),n("b-col",{attrs:{sm:"9"}},[n("b-button",{attrs:{variant:"outline-secondary",size:"sm"},on:{click:e.clear_field}},[e._v("X")])],1)],1):e._e(),n("b-row",[n("b-col"),n("b-col",[n("b-btn",{attrs:{variant:"outline-primary",size:"sm"},on:{click:e.add}},[e._v("+ add property or link")])],1)],1),n("b-row",[n("b-col",[n("b-btn",{attrs:{variant:"success"},on:{click:e.save}},[e._v("Save Node")])],1)],1),n("b-modal",{attrs:{id:"fieldModal",size:"xl",title:e.node.name+" -> "+e.currentProp.name}},[n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"text",active:""},on:{click:function(t){e.fieldType="text"}}},[n("b-form-input",{attrs:{placeholder:"new value"},on:{change:e.addNewValue},model:{value:e.newvalue,callback:function(t){e.newvalue=t},expression:"newvalue"}})],1),n("b-tab",{attrs:{title:"textarea"},on:{click:function(t){e.fieldType="textarea"}}},[n("b-form-textarea",{attrs:{placeholder:"Enter something...",rows:"3","max-rows":"6"},on:{change:e.addNewValue},model:{value:e.newvalue,callback:function(t){e.newvalue=t},expression:"newvalue"}})],1),n("b-tab",{attrs:{title:"node"},on:{click:function(t){e.fieldType="node"}}},[n("NodeSelector",{attrs:{currentProp:e.currentProp},on:{"update:currentProp":function(t){e.currentProp=t},"update:current-prop":function(t){e.currentProp=t}}})],1),n("b-tab",{attrs:{title:"link"},on:{click:function(t){e.fieldType="link"}}},[n("b-form-input",{attrs:{placeholder:"new link todo"},on:{change:e.addNewValue},model:{value:e.newvalue,callback:function(t){e.newvalue=t},expression:"newvalue"}})],1),n("b-tab",{attrs:{title:"markdown",disabled:""},on:{click:function(t){e.fieldType="markdown"}}},[n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},on:{change:e.addNewValue},model:{value:e.newvalue,callback:function(t){e.newvalue=t},expression:"newvalue"}})],1)],1)],1)],2)},r=[],o=n("1da1"),l=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("c740"),n("b0c0"),{name:"Edit",components:{NodeSelector:function(){return n.e("chunk-016e84f8").then(n.bind(null,"be9b"))},NodeLite:function(){return n.e("chunk-2a3f98ca").then(n.bind(null,"227d"))}},data:function(){return{node:null,field:null,clearing:!1,fieldType:"text",show:!1,currentProp:{},newvalue:null}},created:function(){this.$route.params.node?this.node=this.$route.params.node:this.node={name:"",age:0,properties:[]}},methods:{save:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("nodes/saveNode",e.node);case 2:e.$router.push("/");case 3:case"end":return t.stop()}}),t)})))()},add:function(){this.field={name:""}},fieldNameChanged:function(e){if(console.log(e),0==this.clearing){var t={name:e,values:[]};void 0==this.node.properties&&(this.node.properties=[]);var n=this.node.properties.findIndex((function(e){return e.name==t.name}));-1===n?this.node.properties.push(t):alert(t.name+" already exist")}},clear_field:function(){this.clearing=!0,this.field=null,this.clearing=!1},showFieldModal:function(e){console.log(e),this.currentProp=e,this.$bvModal.show("fieldModal")},addNewValue:function(){var e={value:this.newvalue,type:this.fieldType};this.currentProp.values.push(e),this.newvalue=""}}}),i=l,s=n("2877"),c=Object(s["a"])(i,a,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=edit.9046d73e.js.map