(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac06c"],{"187f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.thing))]),n("b-button",{attrs:{variant:"outline-primary"},on:{click:t.addThing}},[t._v("Add "+t._s(t.thing))]),n("b-row",t._l(t.cats,(function(e,i){return n("b-col",{key:i},[n("Thing",{attrs:{cat:e},on:{delete:t.deleteCat,edit:t.editCat}})],1)})),1)],1)},a=[],r=n("1da1"),s=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),{name:"Things",props:["thing"],components:{Thing:function(){return n.e("chunk-2d21b4bd").then(n.bind(null,"bebf"))}},created:function(){this.$store.dispatch("getCats")},methods:{addThing:function(){this.$router.push({name:"edit",thing:this.thing})},deleteCat:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("delete",t.id),n.next=3,e.$store.dispatch("deleteCat",t);case 3:e.$store.dispatch("getCats");case 4:case"end":return n.stop()}}),n)})))()},editCat:function(t){console.log("edit",t.id),this.$router.push({name:"edit",params:{cat:t}})}},computed:{cats:function(){return this.$store.state.cats}}}),c=s,o=n("2877"),d=Object(o["a"])(c,i,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0ac06c.b7fd16ca.js.map