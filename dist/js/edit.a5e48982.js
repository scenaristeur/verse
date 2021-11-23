(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit"],{1071:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-row",[n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"name"}},[e._v("Name:")])]),n("b-col",{attrs:{sm:"9"}},[n("b-form-input",{attrs:{id:"name",autocomplete:"off"},model:{value:e.node["ve:name"],callback:function(t){e.$set(e.node,"ve:name",t)},expression:"node['ve:name']"}})],1),n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"age"}},[n("code",[e._v("Age")]),e._v(":")])]),n("b-col",[n("b-form-input",{attrs:{id:"age",required:"",type:"number"},model:{value:e.node["ve:age"],callback:function(t){e.$set(e.node,"ve:age",t)},expression:"node['ve:age']"}})],1)],1),e._l(e.node["ve:properties"],(function(t){return n("b-row",{key:t.name},[n("b-col",{attrs:{sm:"3"}},[n("label",{attrs:{for:"name"}},[n("code",[e._v(e._s(t.name))]),e._v(":")])]),n("b-col",{attrs:{sm:"9"}},[n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){return e.showFieldModal(t)}}},[e._v("+")]),n("Values",{attrs:{values:t.values}})],1)],1)})),null!=e.field?n("b-row",{staticClass:"mt-3"},[n("b-col",{attrs:{sm:"3"}},[n("b-form-input",{attrs:{required:"",placeholder:"property name"},on:{change:e.fieldNameChanged},model:{value:e.field.name,callback:function(t){e.$set(e.field,"name",t)},expression:"field.name"}})],1),n("b-col",{attrs:{sm:"9"}},[n("b-button",{attrs:{variant:"outline-secondary",size:"sm"},on:{click:e.clear_field}},[e._v("X")])],1)],1):e._e(),n("b-row",[n("b-col"),n("b-col",[n("b-btn",{attrs:{variant:"outline-primary",size:"sm"},on:{click:e.add}},[e._v("+ add property or link")])],1)],1),n("b-row",[n("b-col",[n("b-btn",{attrs:{variant:"success"},on:{click:e.save}},[e._v("Save Node")])],1)],1),n("b-modal",{attrs:{id:"fieldModal",size:"xl",title:e.node.name+" -> "+e.currentProp.name}},[n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"text",active:""},on:{click:function(t){e.fieldType="text"}}},[n("b-form-input",{attrs:{placeholder:"new value"},on:{change:e.addNewValue},model:{value:e.newvalue,callback:function(t){e.newvalue=t},expression:"newvalue"}})],1),n("b-tab",{attrs:{title:"textarea"},on:{click:function(t){e.fieldType="textarea"}}},[n("b-form-textarea",{attrs:{placeholder:"Enter something...",rows:"3","max-rows":"6"},on:{change:e.addNewValue},model:{value:e.newvalue,callback:function(t){e.newvalue=t},expression:"newvalue"}})],1),n("b-tab",{attrs:{title:"node"},on:{click:function(t){e.fieldType="node"}}},[n("NodeSelector",{attrs:{currentProp:e.currentProp},on:{"update:currentProp":function(t){e.currentProp=t},"update:current-prop":function(t){e.currentProp=t}}})],1),n("b-tab",{attrs:{title:"link"},on:{click:function(t){e.fieldType="link"}}},[n("b-form-input",{attrs:{placeholder:"name"},model:{value:e.link.name,callback:function(t){e.$set(e.link,"name",t)},expression:"link.name"}}),n("b-form-input",{attrs:{placeholder:"link"},on:{change:e.addNewLink},model:{value:e.link.href,callback:function(t){e.$set(e.link,"href",t)},expression:"link.href"}})],1),n("b-tab",{attrs:{title:"tiny"},on:{click:function(t){e.fieldType="tiny"}}},[n("editor",{attrs:{init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |         alignleft aligncenter alignright alignjustify |         bullist numlist outdent indent | removeformat | help"}},model:{value:e.tinycontent,callback:function(t){e.tinycontent=t},expression:"tinycontent"}})],1)],1)],1)],2)},i=[],r=n("1da1"),a=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("c740"),n("b0c0"),n("9911"),["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"]),s=function(e){return-1!==a.map((function(e){return e.toLowerCase()})).indexOf(e.toLowerCase())},l=function(e,t,n){Object.keys(t).filter(s).forEach((function(o){var i=t[o];"function"===typeof i&&("onInit"===o?i(e,n):n.on(o.substring(2),(function(e){return i(e,n)})))}))},c=function(e,t){var n=e.$props.modelEvents?e.$props.modelEvents:null,o=Array.isArray(n)?n.join(" "):n;t.on(o||"change input undo redo",(function(){e.$emit("input",t.getContent({format:e.$props.outputFormat}))}))},u=function(e,t,n){var o=t.$props.value?t.$props.value:"",i=t.$props.initialValue?t.$props.initialValue:"";n.setContent(o||(t.initialized?t.cache:i)),t.$watch("value",(function(e,o){n&&"string"===typeof e&&e!==o&&e!==n.getContent({format:t.$props.outputFormat})&&n.setContent(e)})),t.$listeners.input&&c(t,n),l(e,t.$listeners,n),t.initialized=!0},d=0,p=function(e){var t=Date.now(),n=Math.floor(1e9*Math.random());return d++,e+"_"+n+d+String(t)},f=function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()},h=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},m=function(e,t){return h(e).concat(h(t))},v=function(e){return null===e||void 0===e},b=function(){return{listeners:[],scriptId:p("tiny-script"),scriptLoaded:!1}},y=function(){var e=b(),t=function(e,t,n,o){var i=t.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=e,i.src=n;var r=function(){i.removeEventListener("load",r),o()};i.addEventListener("load",r),t.head&&t.head.appendChild(i)},n=function(n,o,i){e.scriptLoaded?i():(e.listeners.push(i),n.getElementById(e.scriptId)||t(e.scriptId,n,o,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0})))},o=function(){e=b()};return{load:n,reinitialize:o}},g=y(),w=n("c4a9"),k={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return"html"===e||"text"===e}}},$=function(){return $=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},$.apply(this,arguments)},C=function(e,t,n){return e(n||"div",{attrs:{id:t}})},S=function(e,t){return e("textarea",{attrs:{id:t},style:{visibility:"hidden"}})},x=function(e){return function(){var t=$($({},e.$props.init),{readonly:e.$props.disabled,selector:"#"+e.elementId,plugins:m(e.$props.init&&e.$props.init.plugins,e.$props.plugins),toolbar:e.$props.toolbar||e.$props.init&&e.$props.init.toolbar,inline:e.inlineEditor,setup:function(t){e.editor=t,t.on("init",(function(n){return u(n,e,t)})),e.$props.init&&"function"===typeof e.$props.init.setup&&e.$props.init.setup(t)}});f(e.element)&&(e.element.style.visibility="",e.element.style.display=""),Object(w["a"])().init(t)}},E={props:k,created:function(){this.elementId=this.$props.id||p("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(w["a"])())x(this)();else if(this.element&&this.element.ownerDocument){var e=this.$props.cloudChannel?this.$props.cloudChannel:"5",t=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=v(this.$props.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+t+"/tinymce/"+e+"/tinymce.min.js":this.$props.tinymceScriptSrc;g.load(this.element.ownerDocument,n,x(this))}},beforeDestroy:function(){null!==Object(w["a"])()&&Object(w["a"])().remove(this.editor)},deactivated:function(){var e;this.inlineEditor||(this.cache=this.editor.getContent(),null===(e=Object(w["a"])())||void 0===e||e.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&x(this)()},render:function(e){return this.inlineEditor?C(e,this.elementId,this.$props.tagName):S(e,this.elementId)}},P=E,N={name:"Edit",components:{NodeSelector:function(){return n.e("chunk-905ecfc0").then(n.bind(null,"be9b"))},Values:function(){return n.e("chunk-2d0e9945").then(n.bind(null,"8dad"))},editor:P},data:function(){return{node:null,field:null,clearing:!1,fieldType:"text",show:!1,currentProp:{},newvalue:null,link:{},tinycontent:""}},created:function(){this.node=this.$store.state.nodes.currentNode||{"@context":{"@vocab":"https://www.w3.org/ns/activitystreams",ve:"https://scenaristeur.github.io/verse/","@id":"id","@type":"type"},"ve:name":"","ve:age":0,"ve:properties":[],test:"test vocab"}},methods:{save:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("nodes/saveNode",e.node);case 2:e.$store.commit("nodes/setCurrentNode",null),e.$router.push("/");case 4:case"end":return t.stop()}}),t)})))()},add:function(){this.field={name:""}},fieldNameChanged:function(e){if(console.log(e),0==this.clearing){var t={name:e,values:[]};void 0==this.node["ve:properties"]&&(this.node["ve:properties"]=[]);var n=this.node["ve:properties"].findIndex((function(e){return e.name==t.name}));-1===n?this.node["ve:properties"].push(t):alert(t.name+" already exist")}},clear_field:function(){this.clearing=!0,this.field=null,this.clearing=!1},showFieldModal:function(e){console.log(e),this.currentProp=e,this.$bvModal.show("fieldModal")},addNewValue:function(){var e={value:this.newvalue,type:this.fieldType};this.currentProp.values.push(e),this.newvalue=null},addNewLink:function(){var e={value:this.link,type:this.fieldType};this.currentProp.values.push(e),this.link={}},tinyChanged:function(e,t){console.log(e,t)}},watch:{tinycontent:function(){console.log(this.tinycontent)}},computed:{currentNode:function(){return this.$store.state.nodes.currentNode}}},O=N,j=n("2877"),M=Object(j["a"])(O,o,i,!1,null,null,null);t["default"]=M.exports},"857a":function(e,t,n){var o=n("e330"),i=n("1d80"),r=n("577e"),a=/"/g,s=o("".replace);e.exports=function(e,t,n,o){var l=r(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+s(r(o),a,"&quot;")+'"'),c+">"+l+"</"+t+">"}},9911:function(e,t,n){"use strict";var o=n("23e7"),i=n("857a"),r=n("af03");o({target:"String",proto:!0,forced:r("link")},{link:function(e){return i(this,"a","href",e)}})},af03:function(e,t,n){var o=n("d039");e.exports=function(e){return o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},c4a9:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var o=function(){return"undefined"!==typeof window?window:e},i=function(){var e=o();return e&&e.tinymce?e.tinymce:null}}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=edit.a5e48982.js.map