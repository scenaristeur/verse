"use strict";(self["webpackChunkverse"]=self["webpackChunkverse"]||[]).push([[774],{1774:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v(e._s(e.modele))]),s("b-button",{attrs:{variant:"outline-primary"},on:{click:e.addThing}},[e._v("Add "+e._s(e.modele))]),s("b-row",e._l(e.cats,(function(t,a){return s("div",{key:a},[t.modele==e.modele?s("b-col",[s("ThingComponent",{attrs:{cat:t},on:{delete:e.deleteCat,edit:e.editCat}})],1):e._e()],1)})),0)],1)},n=[],o={name:"ThingsView",props:["modele"],components:{ThingComponent:()=>s.e(3).then(s.bind(s,3))},created(){this.$store.dispatch("cats/getCats")},methods:{addThing(){this.$router.push({name:"edit",params:{modele:this.modele}})},async deleteCat(e){console.log("delete",e.url),await this.$store.dispatch("cats/deleteCat",e),this.$store.dispatch("cats/getCats")},editCat(e){console.log("edit",e.url),this.$router.push({name:"edit",params:{cat:e}})}},computed:{cats(){return this.$store.state.cats.cats}}},i=o,r=s(1001),d=(0,r.Z)(i,a,n,!1,null,null,null),l=d.exports}}]);
//# sourceMappingURL=774.522dcbeb.js.map