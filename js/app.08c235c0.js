(function(e){function t(t){for(var r,o,s=t[0],u=t[1],i=t[2],d=0,l=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function s(e){return u.p+"js/"+({about:"about",agents:"agents",edit:"edit",groups:"groups",nodes:"nodes",notes:"notes",persons:"persons",projects:"projects",schemas:"schemas",spaces:"spaces",synchro:"synchro"}[e]||e)+"."+{about:"1f06c864",agents:"eb7e0abc","chunk-20b5feb7":"0322b447","chunk-2d0d3857":"a0979382","chunk-e592f350":"e85aa044",edit:"f7ff639b",groups:"2b7ba0c7",nodes:"389db9ef",notes:"ec7c6c2b",persons:"7c17373a",projects:"c66a7a1e",schemas:"e46b1d9d",spaces:"4a3b5e15",synchro:"fa82212d","chunk-2d0ac06c":"06b970a1","chunk-2d0ce7e2":"3e73cbe5","chunk-2d0e9945":"5cf5667e","chunk-905ecfc0":"bdd264c5","chunk-2d229262":"a94d4a51","chunk-2d21b4bd":"171f889c","chunk-2a3f98ca":"7d88062e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-20b5feb7":1,nodes:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",agents:"agents",edit:"edit",groups:"groups",nodes:"nodes",notes:"notes",persons:"persons",projects:"projects",schemas:"schemas",spaces:"spaces",synchro:"synchro"}[e]||e)+"."+{about:"31d6cfe0",agents:"31d6cfe0","chunk-20b5feb7":"05d97788","chunk-2d0d3857":"31d6cfe0","chunk-e592f350":"31d6cfe0",edit:"31d6cfe0",groups:"31d6cfe0",nodes:"5dc319d7",notes:"31d6cfe0",persons:"31d6cfe0",projects:"31d6cfe0",schemas:"31d6cfe0",spaces:"31d6cfe0",synchro:"31d6cfe0","chunk-2d0ac06c":"31d6cfe0","chunk-2d0ce7e2":"31d6cfe0","chunk-2d0e9945":"31d6cfe0","chunk-905ecfc0":"31d6cfe0","chunk-2d229262":"31d6cfe0","chunk-2d21b4bd":"31d6cfe0","chunk-2a3f98ca":"31d6cfe0"}[e]+".css",c=u.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var i=a[s],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===c))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],d=i.getAttribute("data-href");if(d===r||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(e);var l=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/verse/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:"",id:"app"}},[n("Source"),n("b-row",[e.isOnline?n("span",[n("Login")],1):e._e(),e.isOffline?n("span",{attrs:{variant:"danger"}},[e._v("offline")]):e._e()]),n("router-view"),n("br"),n("br"),n("hr"),e._v(" "+e._s(e.session)+" "),n("br"),n("hr"),n("br"),n("small",[n("i",[e._v("0.0.7 - source & share")])]),e._v(" | "),n("small",[n("a",{attrs:{href:"https://github.com/scenaristeur/verse",target:"_blank"}},[e._v("source")])])],1)},c=[],a=(n("d3b7"),n("3ca3"),n("ddb0"),{name:"Notes",components:{Login:function(){return n.e("chunk-20b5feb7").then(n.bind(null,"578a"))},Source:function(){return n.e("chunk-2d0d3857").then(n.bind(null,"5cb5"))}},created:function(){},mounted:function(){},watch:{$route:function(e,t){console.log(this.$route,e,t),void 0!=this.$route.query.source&&this.$route.query.source.length>0?this.$processSource(this.$route.query):(this.$store.commit("nodes/setSource",null),this.$checkSession())}},computed:{session:{get:function(){return this.$store.state.solid.session},set:function(){}}}}),s=a,u=(n("034f"),n("2877")),i=Object(u["a"])(s,o,c,!1,null,null,null),d=i.exports,l=n("9483");Object(l["a"])("".concat("/verse/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("Verse has been updated, please close the app & re-open")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=n("8c4f");r["default"].use(f["a"]);var p,h,m=[{path:"/",name:"Nodes",component:function(){return n.e("nodes").then(n.bind(null,"4c0f"))}},{path:"/sync",name:"Synchro",component:function(){return n.e("synchro").then(n.bind(null,"a407"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/edit",name:"edit",component:function(){return n.e("edit").then(n.bind(null,"1071"))}},{path:"/notes",name:"Notes",component:function(){return n.e("notes").then(n.bind(null,"0841"))}},{path:"/persons",name:"Persons",component:function(){return n.e("persons").then(n.bind(null,"3e10"))}},{path:"/projects",name:"Projects",component:function(){return n.e("projects").then(n.bind(null,"acca"))}},{path:"/groups",name:"Groups",component:function(){return n.e("groups").then(n.bind(null,"696f"))}},{path:"/agents",name:"Agents",component:function(){return n.e("agents").then(n.bind(null,"9392"))}},{path:"/spaces",name:"Spaces",component:function(){return n.e("spaces").then(n.bind(null,"1250"))}},{path:"/schemas",name:"Schemas",component:function(){return n.e("schemas").then(n.bind(null,"fa48"))}}],g=new f["a"]({mode:"history",base:"/verse/",routes:m}),b=g,v=n("2f62"),w=n("1da1"),x=(n("159b"),n("96cf"),"catdb"),k=1,j={getDb:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){if(p)return e(p);console.log("OPENING DB",p);var n=window.indexedDB.open(x,k);n.onerror=function(e){console.log("Error opening db",e),t("Error")},n.onsuccess=function(t){p=t.target.result,e(p)},n.onupgradeneeded=function(e){console.log("onupgradeneeded");var t=e.target.result;t.createObjectStore("cats",{keyPath:"url"})}})));case 1:case"end":return e.stop()}}),e)})))()},deleteCat:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDb();case 2:return r=n.sent,n.abrupt("return",new Promise((function(t){var n=r.transaction(["cats"],"readwrite");n.oncomplete=function(){t()};var o=n.objectStore("cats");o.delete(e.url)})));case 4:case"end":return n.stop()}}),n)})))()},deleteDb:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{window.indexedDB.deleteDatabase(x)}catch(t){alert(t)}case 1:case"end":return e.stop()}}),e)})))()},getCats:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return n=t.sent,t.abrupt("return",new Promise((function(e){var t=n.transaction(["cats"],"readonly");t.oncomplete=function(){e(o)};var r=t.objectStore("cats"),o=[];r.openCursor().onsuccess=function(e){var t=e.target.result;t&&(o.push(t.value),t.continue())}})));case 4:case"end":return t.stop()}}),t)})))()},saveCat:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDb();case 2:return r=n.sent,n.abrupt("return",new Promise((function(t){var n=r.transaction(["cats"],"readwrite");n.oncomplete=function(){t()};var o=n.objectStore("cats");o.put(e)})));case 4:case"end":return n.stop()}}),n)})))()}},y=function(){return{cats:[],verses:[]}},O={deleteCat:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("store is being asked to delete "+t.url),e.next=3,j.deleteCat(t);case 3:return e.prev=3,e.next=6,r["default"].prototype.$deleteRemote(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](3),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})))()},getCats:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.state.cats=[],t.next=3,j.getCats();case 3:n=t.sent,n.forEach((function(t){e.state.cats.push(t)}));case 5:case"end":return t.stop()}}),t)})))()},saveCat:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("store is being asked to save "+t.url),e.next=3,j.saveCat(t);case 3:return e.prev=3,e.next=6,r["default"].prototype.$createRemote(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](3),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})))()},rmlocalDB:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.deleteDb();case 2:case"end":return e.stop()}}),e)})))()}},R={setVerses:function(e,t){console.log("verses",t),e.verses=t}},S={namespaced:!0,state:y,actions:O,mutations:R},N=function(){return{session:null,pod:null}},P={},$={setPod:function(e,t){console.log("pod",t),e.pod=t},setSession:function(e,t){e.session=t}},D={namespaced:!0,state:N,actions:P,mutations:$},C=(n("e9c4"),n("c740"),n("d81d"),n("a434"),"nodedb"),E=1,I={getDb:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){if(h)return e(h);console.log("OPENING DB",h);var n=window.indexedDB.open(C,E);n.onerror=function(e){console.log("Error opening db",e),t("Error")},n.onsuccess=function(t){h=t.target.result,e(h)},n.onupgradeneeded=function(e){console.log("onupgradeneeded");var t=e.target.result;t.createObjectStore("nodes",{keyPath:"id"})}})));case 1:case"end":return e.stop()}}),e)})))()},deleteNode:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDb();case 2:return r=n.sent,n.abrupt("return",new Promise((function(t){var n=r.transaction(["nodes"],"readwrite");n.oncomplete=function(){t()};var o=n.objectStore("nodes");o.delete(e.id)})));case 4:case"end":return n.stop()}}),n)})))()},clearStore:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("clear store"),t.prev=1,t.next=4,e.getDb();case 4:n=t.sent,r=n.transaction(["nodes"],"readwrite"),o=r.objectStore("nodes"),c=o.clear(),c.onsuccess=function(e){console.log(e)},t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),alert(t.t0);case 14:return t.next=16,e.getNodes();case 16:case"end":return t.stop()}}),t,null,[[1,11]])})))()},getNodes:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return n=t.sent,t.abrupt("return",new Promise((function(e){var t=n.transaction(["nodes"],"readonly");t.oncomplete=function(){e(o)};var r=t.objectStore("nodes"),o=[];r.openCursor().onsuccess=function(e){var t=e.target.result;t&&(o.push(t.value),t.continue())}})));case 4:case"end":return t.stop()}}),t)})))()},saveNode:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDb();case 2:return r=n.sent,n.abrupt("return",new Promise((function(t){var n=r.transaction(["nodes"],"readwrite");n.oncomplete=function(){t()};var o=n.objectStore("nodes");o.put(e)})));case 4:case"end":return n.stop()}}),n)})))()}},B=n("ec26"),_=function(){return{nodes:[],remoteNodes:[],currentNode:null,notBoth:[],mustUpdate:[],source:null}},A={deleteNode:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=t.exclude,delete t.exclude,console.log(o),c=confirm("Are you sur you want to delete "+t["ve:name"]),1!=c){n.next=22;break}if("remote"==o){n.next=18;break}if(null==e.rootState.solid.pod){n.next=17;break}return n.prev=7,n.next=10,r["default"].prototype.$deleteRemote(t);case 10:n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](7),console.log(n.t0);case 15:n.next=18;break;case 17:console.log("is not connected");case 18:if("local"==o){n.next=22;break}return console.log("store is being asked to delete "+t.id,t["ve:name"]),n.next=22,I.deleteNode(t);case 22:case"end":return n.stop()}}),n,null,[[7,12]])})))()},getNodes:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.state.nodes=[],t.next=3,I.getNodes();case 3:n=t.sent,n.forEach((function(t){e.state.nodes.push(t)}));case 5:case"end":return t.stop()}}),t)})))()},saveNode:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=t.exclude,delete t.exclude,console.log(o),void 0==t.id&&(t.id=Object(B["a"])()),void 0==t["ve:created"]&&(t["ve:created"]=Date.now()),t["ve:updated"]=Date.now(),"remote"==o){n.next=20;break}if(null==e.rootState.solid.pod){n.next=19;break}return n.prev=8,n.next=11,r["default"].prototype.$createRemote(t);case 11:t=n.sent,n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](8),console.log(n.t0);case 17:n.next=20;break;case 19:console.log("is not connected");case 20:if("local"==o){n.next=24;break}return console.log("store is being asked to save "+JSON.stringify(t)),n.next=24,I.saveNode(t);case 24:case"end":return n.stop()}}),n,null,[[8,14]])})))()},clearStore:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=confirm("Do you want to KEEP all nodes stored on this device ?"),0!=t){e.next=4;break}return e.next=4,I.clearStore();case 4:case"end":return e.stop()}}),e)})))()}},T={setRemotes:function(e,t){console.log("remotes",t),e.remoteNodes=t},setCurrentNode:function(e,t){e.currentNode=t},addNotBoth:function(e,t){var n=e.notBoth.findIndex((function(e){return e.id==t.id}));-1===n&&e.notBoth.push(t)},removeNotBoth:function(e,t){var n=e.notBoth.map((function(e){return e.id})).indexOf(t.id);e.notBoth.splice(n,1)},addMustUpdate:function(e,t){var n=e.mustUpdate.findIndex((function(e){return e.id==t.id}));-1===n&&e.mustUpdate.push(t)},removeMustUpdate:function(e,t){var n=e.mustUpdate.map((function(e){return e.id})).indexOf(t.id);e.mustUpdate.splice(n,1)},setSource:function(e,t){console.log("source",t),e.source=t}},L={namespaced:!0,state:_,actions:A,mutations:T};r["default"].use(v["a"]);var U=new v["a"].Store({state:{},mutations:{},actions:{},modules:{cats:S,solid:D,nodes:L}}),F=(n("b0c0"),n("93ef")),J=n("d11f"),M=n("dbc7"),V=n("8522"),q={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;e.prototype.$checkSession=Object(w["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V["handleIncomingRedirect"]({restorePreviousSession:!0}).then((function(e){if(1==e.isLoggedIn){console.log("Logged in with WebID [".concat(e.webId,"]")),n.commit("solid/setSession",e);var r=V["getDefaultSession"]();t.$getPodInfosFromSession(r)}}));case 2:case"end":return e.stop()}}),e)}))),e.prototype.$login=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("login",t),V["getDefaultSession"]().info.isLoggedIn){e.next=4;break}return e.next=4,V["login"]({oidcIssuer:t,redirectUrl:window.location.href,clientName:"Verse"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$logout=Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=V["getDefaultSession"](),e.next=3,t.logout();case 3:n.commit("solid/setSession",null),n.commit("solid/setPod",null),n.dispatch("nodes/clearStore");case 6:case"end":return e.stop()}}),e)}))),e.prototype.$getPodInfosFromSession=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r={},r.logged=t.info.isLoggedIn,!r.logged){e.next=13;break}return r.webId=t.info.webId,e.next=6,this.$getPodInfos(r);case 6:r=e.sent,void 0==r.neuroneStore&&(r.neuroneStore=r.storage+"public/neurones/"),n.commit("solid/setPod",r),this.$checkChanges(),r.storage,e.next=14;break;case 13:n.commit("solid/setPod",null);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$getPodInfos=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(F["e"])(t.webId,{fetch:V["fetch"]});case 3:return n=e.sent,e.next=6,Object(F["h"])(n,t.webId);case 6:return r=e.sent,e.next=9,Object(F["g"])(r,J["a"].name);case 9:return t.name=e.sent,e.next=12,Object(F["j"])(r,J["a"].knows).map((function(e){return{webId:e}}));case 12:return t.friends=e.sent,e.next=15,Object(F["i"])(r,M["a"].storage);case 15:return t.storage=e.sent,e.next=18,Object(F["i"])(r,J["b"].hasPhoto);case 18:t.photo=e.sent,e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](0),console.log("erreur",e.t0,t);case 24:return e.next=26,t;case 26:return e.abrupt("return",e.sent);case 27:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}}()}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(q);var G=q,z=n("b85c"),K=(n("7db0"),n("4fad"),n("caad"),n("2532"),n("e15c")),H={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.store;console.log(n),e.prototype.$createRemote=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(n.state.solid.pod),console.log(n.state.solid.pod.neuroneStore,t),t["ve:url"]=n.state.solid.pod.neuroneStore+t.id,t["ve:synchronized"]=Date.now(),e.prev=4,e.next=7,Object(F["k"])(t["ve:url"],new Blob([JSON.stringify(t,void 0,2)],{type:"application/ld+json"}),{contentType:"application/ld+json",fetch:V["fetch"]});case 7:return r=e.sent,console.log("File saved at ".concat(Object(F["f"])(r))),e.abrupt("return",t);case 12:e.prev=12,e.t0=e["catch"](4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$deleteRemote=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t,n.state.solid.pod.neuroneStore),e.next=3,Object(F["b"])(t["ve:url"],{fetch:V["fetch"]});case 3:console.log("deleted",t["ve:url"]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$compare=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.state.nodes.nodes.find((function(e){return e.id==t.id})),void 0==r?n.commit("nodes/addNotBoth",{id:t.id,local:null,remote:t}):(o=K(r,t),delete o["ve:updated"],delete o["ve:synchronized"],Object.entries(o).length>0&&n.commit("nodes/addMustUpdate",{id:t.id,local:r,remote:t,difference:o}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$checkChanges=Object(w["a"])(regeneratorRuntime.mark((function e(){var t,r,o,c,a,s,u,i,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("$checkChanges",n.state.solid.pod.neuroneStore),t=this,r=[],e.prev=3,e.next=6,Object(F["e"])(n.state.solid.pod.neuroneStore,{fetch:V["fetch"]});case 6:return o=e.sent,e.next=9,Object(F["c"])(o,{fetch:V["fetch"]});case 9:r=e.sent,c=Object(z["a"])(n.state.nodes.nodes);try{for(c.s();!(a=c.n()).done;)s=a.value,r.includes(s["ve:url"])||n.commit("nodes/addNotBoth",{id:s.id,local:s,remote:null})}catch(l){c.e(l)}finally{c.f()}u=Object(z["a"])(r),e.prev=13,d=regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=i.value,e.next=3,Object(F["d"])(n,{fetch:V["fetch"]});case 3:r=e.sent,o=new FileReader,o.onload=Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$compare(JSON.parse(o.result));case 1:case"end":return e.stop()}}),e)}))),o.onerror=function(e){console.log(e)},o.readAsText(r);case 8:case"end":return e.stop()}}),e)})),u.s();case 16:if((i=u.n()).done){e.next=20;break}return e.delegateYield(d(),"t0",18);case 18:e.next=16;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e["catch"](13),u.e(e.t1);case 25:return e.prev=25,u.f(),e.finish(25);case 28:e.next=33;break;case 30:e.prev=30,e.t2=e["catch"](3),console.log(e.t2);case 33:case"end":return e.stop()}}),e,this,[[3,30],[13,22,25,28]])}))),e.prototype.$processSource=function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Source",t.source),e.next=3,Object(F["d"])(t.source,{fetch:V["fetch"]});case 3:r=e.sent,o=new FileReader,o.onload=Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=JSON.parse(o.result),n.commit("nodes/setSource",t);case 2:case"end":return e.stop()}}),e)}))),o.onerror=function(e){console.log(e)},o.readAsText(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.prototype.$checkChanges1=Object(w["a"])(regeneratorRuntime.mark((function e(){var t,r,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("$checkChanges",n.state.solid.pod.neuroneStore),e.prev=1,e.next=4,Object(F["e"])(n.state.solid.pod.neuroneStore,{fetch:V["fetch"]});case 4:return t=e.sent,e.next=7,Object(F["c"])(t,{fetch:V["fetch"]});case 7:return r=e.sent,o=r.map(function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(F["d"])(t,{fetch:V["fetch"]});case 2:return n=e.sent,e.abrupt("return",new Promise((function(e,t){var r=new FileReader;r.onload=Object(w["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:try{e(JSON.parse(r.result))}catch(o){t(o)}case 1:case"end":return n.stop()}}),n)}))),r.onerror=function(e){t(e)},r.readAsText(n)})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=11,Promise.all(o);case 11:c=e.sent,console.log(c),e.next=20;break;case 15:return e.prev=15,e.t0=e["catch"](1),console.log(e.t0.message),e.next=20,Object(F["a"])(n.state.solid.pod.neuroneStore,{fetch:V["fetch"]});case 20:case"end":return e.stop()}}),e,null,[[1,15]])})))}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(H);var W=H,Y=n("bf4e"),Q=n.n(Y),X=n("5f5b"),Z=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(G,{store:U}),r["default"].use(W,{store:U}),r["default"].use(Q.a),r["default"].use(X["a"]),r["default"].use(Z["a"]),r["default"].config.productionTip=!1,new r["default"]({router:b,store:U,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.08c235c0.js.map