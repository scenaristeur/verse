(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a6c7ed8"],{"039a":function(t,e,n){"use strict";n("7174")},"2ca0":function(t,e,n){"use strict";var o=n("23e7"),s=n("e330"),r=n("06cf").f,i=n("50c4"),u=n("577e"),a=n("5a34"),l=n("1d80"),c=n("ab13"),h=n("c430"),d=s("".startsWith),p=s("".slice),f=Math.min,g=c("startsWith"),v=!h&&!g&&!!function(){var t=r(String.prototype,"startsWith");return t&&!t.writable}();o({target:"String",proto:!0,forced:!v&&!g},{startsWith:function(t){var e=u(l(this));a(t);var n=i(f(arguments.length>1?arguments[1]:void 0,e.length)),o=u(t);return d?d(e,o,n):p(e,n,n+o.length)===o}})},"44e7":function(t,e,n){var o=n("861d"),s=n("c6b6"),r=n("b622"),i=r("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==s(t))}},"578a":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"login"},[t.isLoggedIn?n("div",{staticClass:"d-flex align-items-center"},[n("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:t.logout}},[t._v("Logout")])],1):n("div",{staticClass:"d-flex align-items-center"},[n("b-form-group",[n("b-form-select",{attrs:{autofocus:"",size:"sm",options:t.issuers},on:{change:t.login},scopedSlots:t._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:""}},[t._v("-- Login / Connexion --")])]},proxy:!0}],null,!1,3168236525),model:{value:t.issuer,callback:function(e){t.issuer=e},expression:"issuer"}}),"other"==t.issuer?n("div",[n("b-form-group",{attrs:{id:"fieldset-1",description:"ex: `https://solidcommunity.net`",label:"Entrez l'url de votre fournissuer de POD","label-for":"input-1","valid-feedback":"Merci!","invalid-feedback":t.invalidFeedback,state:t.state}},[n("b-form-input",{attrs:{id:"input-1",state:t.state,trim:""},on:{change:t.onChange},model:{value:t.other,callback:function(e){t.other=e},expression:"other"}})],1),n("b-button",{attrs:{size:"sm",variant:"info"}},[t._v("Login / connexion")])],1):t._e()],1)],1)])},s=[],r=(n("2ca0"),{name:"Login",data:function(){return{issuers:[{value:"https://broker.pod.inrupt.com",text:"Broker Pod Inrupt (Entreprise Solid Server)"},{value:"https://inrupt.net",text:"Inrupt.net"},{value:"https://dev.inrupt.net",text:"dev.inrupt.net"},{value:"https://solidcommunity.net",text:"SolidCommunity.net"},{value:"https://solidweb.org",text:"Solidweb.org"},{value:"https://trinpod.us/",text:"Trinpod.us"},{value:"other",text:"Autre / Other"}],issuer:null,restore:!0,other:""}},methods:{onInput:function(){console.log("input",this.other)},onChange:function(){console.log("change",this.other),void 0!=this.other&&void 0!=this.other.length&&(this.issuer=this.other,this.login())},login:function(t){console.log(t),this.issuer=t,null!=this.issuer&&"other"!=this.issuer&&(console.log(this.issuer),this.$login(this.issuer))},logout:function(){this.$logout({restore:this.restore})}},computed:{isLoggedIn:{get:function(){return null!=this.$store.state.solid.session&&this.$store.state.solid.session.info.isLoggedIn},set:function(){}},state:function(){return this.other.startsWith("http")},invalidFeedback:function(){return this.other.length>0&&!this.other.startsWith("http")?"L'url de ton fournisseur devrait commencer par `http`":"l'url de ton fournisseur/provider, pas celle de ton webId"}}}),i=r,u=(n("039a"),n("2877")),a=Object(u["a"])(i,o,s,!1,null,null,null);e["default"]=a.exports},"5a34":function(t,e,n){var o=n("da84"),s=n("44e7"),r=o.TypeError;t.exports=function(t){if(s(t))throw r("The method doesn't accept regular expressions");return t}},7174:function(t,e,n){},ab13:function(t,e,n){var o=n("b622"),s=o("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[s]=!1,"/./"[t](e)}catch(o){}}return!1}}}]);
//# sourceMappingURL=chunk-6a6c7ed8.31a1b0d8.js.map