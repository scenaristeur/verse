(function(){"use strict";var e={9300:function(e,t,o){var n=o(144),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("NavBar"),o("SourceView"),o("router-view"),o("br"),o("br"),o("hr"),e._v(" "+e._s(e.session)+" "),o("br"),o("hr"),o("br"),e._m(0),e._v(" | "),e._m(1)],1)},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("small",[o("i",[e._v("0.0.10 - permissions et html ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("small",[o("a",{attrs:{href:"https://github.com/scenaristeur/verse",target:"_blank"}},[e._v("source")])])}],a={name:"App",components:{SourceView:()=>o.e(595).then(o.bind(o,2595)),NavBar:()=>o.e(644).then(o.bind(o,6644))},created(){},mounted(){},watch:{$route(){void 0!=this.$route.query.source&&this.$route.query.source.length>0?this.$processSource(this.$route.query):(this.$store.commit("nodes/setSource",null),this.$checkSession())}},computed:{session:{get(){return this.$store.state.solid.session},set(){}}}},c=a,i=o(1001),l=(0,i.Z)(c,r,s,!1,null,null,null),d=l.exports,u=o(5205);(0,u.z)("/verse/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Verse has been updated, please close the app & re-open")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=o(8345);n["default"].use(f.Z);const p=[{path:"/",name:"Nodes",component:()=>o.e(509).then(o.bind(o,9969))},{path:"/remote",name:"Remote",component:()=>o.e(797).then(o.bind(o,6960))},{path:"/sync",name:"Synchro",component:()=>o.e(107).then(o.bind(o,2082))},{path:"/about",name:"About",component:()=>o.e(443).then(o.bind(o,5830))},{path:"/edit",name:"edit",component:()=>o.e(922).then(o.bind(o,9021))},{path:"/notes",name:"Notes",component:()=>o.e(497).then(o.bind(o,4350))},{path:"/persons",name:"Persons",component:()=>o.e(371).then(o.bind(o,1346))},{path:"/projects",name:"Projects",component:()=>o.e(176).then(o.bind(o,5674))},{path:"/groups",name:"Groups",component:()=>o.e(291).then(o.bind(o,2001))},{path:"/agents",name:"Agents",component:()=>o.e(353).then(o.bind(o,5155))},{path:"/spaces",name:"Spaces",component:()=>o.e(749).then(o.bind(o,7962))},{path:"/schemas",name:"Schemas",component:()=>o.e(104).then(o.bind(o,5933))}],h=new f.Z({mode:"history",base:"/verse/",routes:p});var g=h,m=o(629);const w="catdb",y=1;let v;var b={async getDb(){return new Promise(((e,t)=>{if(v)return e(v);console.log("OPENING DB",v);let o=window.indexedDB.open(w,y);o.onerror=e=>{console.log("Error opening db",e),t("Error")},o.onsuccess=t=>{v=t.target.result,e(v)},o.onupgradeneeded=e=>{console.log("onupgradeneeded");let t=e.target.result;t.createObjectStore("cats",{keyPath:"url"})}}))},async deleteCat(e){let t=await this.getDb();return new Promise((o=>{let n=t.transaction(["cats"],"readwrite");n.oncomplete=()=>{o()};let r=n.objectStore("cats");r.delete(e.url)}))},async deleteDb(){try{window.indexedDB.deleteDatabase(w)}catch(e){alert(e)}},async getCats(){let e=await this.getDb();return new Promise((t=>{let o=e.transaction(["cats"],"readonly");o.oncomplete=()=>{t(r)};let n=o.objectStore("cats"),r=[];n.openCursor().onsuccess=e=>{let t=e.target.result;t&&(r.push(t.value),t.continue())}}))},async saveCat(e){let t=await this.getDb();return new Promise((o=>{let n=t.transaction(["cats"],"readwrite");n.oncomplete=()=>{o()};let r=n.objectStore("cats");r.put(e)}))}};const S=()=>({cats:[],verses:[]}),k={async deleteCat(e,t){console.log("store is being asked to delete "+t.url),await b.deleteCat(t);try{await n["default"].prototype.$deleteRemote(t)}catch(o){console.log(o)}},async getCats(e){e.state.cats=[];let t=await b.getCats();t.forEach((t=>{e.state.cats.push(t)}))},async saveCat(e,t){console.log("store is being asked to save "+t.url),await b.saveCat(t);try{await n["default"].prototype.$createRemote(t)}catch(o){console.log(o)}},async rmlocalDB(){await b.deleteDb()}},N={setVerses(e,t){console.log("verses",t),e.verses=t}};var $={namespaced:!0,state:S,actions:k,mutations:N};const O=()=>({session:null,pod:null}),P={async addWorkspace(e,t){e.state.pod.workspaces.push(t),n["default"].prototype.$addWorkspaceToPod(t)}},C={setPod(e,t){console.log("pod",t),e.pod=t},setSession(e,t){e.session=t}};var j={namespaced:!0,state:O,actions:P,mutations:C};const x="nodedb",E=1;let _;var D={async getDb(){return new Promise(((e,t)=>{if(_)return e(_);console.log("OPENING DB",_);let o=window.indexedDB.open(x,E);o.onerror=e=>{console.log("Error opening db",e),t("Error")},o.onsuccess=t=>{_=t.target.result,e(_)},o.onupgradeneeded=e=>{console.log("onupgradeneeded");let t=e.target.result;t.createObjectStore("nodes",{keyPath:"id"})}}))},async deleteNode(e){let t=await this.getDb();return new Promise((o=>{let n=t.transaction(["nodes"],"readwrite");n.oncomplete=()=>{o()};let r=n.objectStore("nodes");r.delete(e.id)}))},async clearStore(){console.log("clear store");try{let n=await this.getDb();var e=n.transaction(["nodes"],"readwrite"),t=e.objectStore("nodes"),o=t.clear();o.onsuccess=function(e){console.log(e)}}catch(n){alert(n)}await this.getNodes()},async getNodes(){let e=await this.getDb();return new Promise((t=>{let o=e.transaction(["nodes"],"readonly");o.oncomplete=()=>{t(r)};let n=o.objectStore("nodes"),r=[];n.openCursor().onsuccess=e=>{let t=e.target.result;t&&(r.push(t.value),t.continue())}}))},async saveNode(e){let t=await this.getDb();return new Promise((o=>{let n=t.transaction(["nodes"],"readwrite");n.oncomplete=()=>{o()};let r=n.objectStore("nodes");r.put(e)}))}},I=o(7632);const A=()=>({nodes:[],remoteNodes:[],currentNode:null,notBoth:[],mustUpdate:[],source:null,currentWorkspace:null,editorContent:""}),B={async deleteNode(e,t){let o=t.exclude;delete t.exclude,console.log(o);let r=confirm("Are you sur you want to delete "+t["ve:name"]);if(1==r){if("remote"!=o)if(null!=e.rootState.solid.pod)try{await n["default"].prototype.$deleteRemote(t)}catch(s){console.log(s)}else console.log("is not connected");"local"!=o&&(console.log("store is being asked to delete "+t.id,t["ve:name"]),await D.deleteNode(t))}},async getNodes(e){e.state.nodes=[];let t=await D.getNodes();t.forEach((t=>{e.state.nodes.push(t)}))},async saveNode(e,t){let o=t.exclude;if(delete t.exclude,console.log(o),void 0==t.id&&(t.id=(0,I.Z)()),void 0==t["ve:created"]&&(t["ve:created"]=Date.now()),t["ve:updated"]=Date.now(),"remote"!=o)if(null!=e.rootState.solid.pod)try{t=await n["default"].prototype.$createRemote(t)}catch(r){console.log(r)}else console.log("is not connected");"local"!=o&&(console.log("store is being asked to save "+JSON.stringify(t)),await D.saveNode(t))},async clearStore(){let e=confirm("Do you want to KEEP all nodes stored on this device ?");0==e&&await D.clearStore()}},T={setRemotes(e,t){console.log("remotes",t),e.remoteNodes=t},setCurrentNode(e,t){e.currentNode=t},addNotBoth(e,t){var o=e.notBoth.findIndex((e=>e.id==t.id));-1===o&&e.notBoth.push(t)},removeNotBoth(e,t){var o=e.notBoth.map((e=>e.id)).indexOf(t.id);e.notBoth.splice(o,1)},addMustUpdate(e,t){var o=e.mustUpdate.findIndex((e=>e.id==t.id));-1===o&&e.mustUpdate.push(t)},removeMustUpdate(e,t){var o=e.mustUpdate.map((e=>e.id)).indexOf(t.id);e.mustUpdate.splice(o,1)},setSource(e,t){console.log("source",t),e.source=t},setCurrentWorkspace(e,t){e.currentWorkspace=t},setEditorContent(e,t){e.editorContent=t}};var F={namespaced:!0,state:A,actions:B,mutations:T};n["default"].use(m.ZP);var R=new m.ZP.Store({state:{},mutations:{},actions:{},modules:{cats:$,solid:j,nodes:F}}),U=o(8975),L=o(5287),W=o(5863),M=o(8992),G=o(3372),V=o(4305);const J={install(e,t={}){let o=t.store;e.prototype.$checkSession=async function(){await V.handleIncomingRedirect({restorePreviousSession:!0}).then((e=>{if(1==e.isLoggedIn){console.log(`Logged in with WebID [${e.webId}]`),o.commit("solid/setSession",e);let t=V.getDefaultSession();this.$getPodInfosFromSession(t)}}))},e.prototype.$login=async function(e){console.log("login",e),V.getDefaultSession().info.isLoggedIn||await V.login({oidcIssuer:e,redirectUrl:window.location.href,clientName:"Verse"})},e.prototype.$logout=async function(){let e=V.getDefaultSession();await e.logout(),o.commit("solid/setSession",null),o.commit("solid/setPod",null),o.dispatch("nodes/clearStore")},e.prototype.$getPodInfosFromSession=async function(e){let t={};t.logged=e.info.isLoggedIn,t.logged?(t.webId=e.info.webId,t=await this.$getPodInfos(t),void 0==t.neuroneStore&&(t.neuroneStore=t.storage+"public/neurones/"),void 0==t.workspaces&&(t.workspaces=[]),o.commit("solid/setPod",t),this.$checkChanges(),t.storage):o.commit("solid/setPod",null)},e.prototype.$getPodInfos=async function(e){try{const t=await(0,U.OE)(e.webId,{fetch:V.fetch});let o=await(0,L.YY)(t,e.webId);e.name=await(0,W.oX)(o,M.xY.name),e.friends=await(0,W.MQ)(o,M.xY.knows).map((e=>({webId:e}))),e.storage=await(0,W.Gr)(o,G.WS.storage),e.photo=await(0,W.Gr)(o,M.Fv.hasPhoto),void 0==e.neuroneStore&&(e.neuroneStore=e.storage+"public/neurones/"),e.workspaces=[];let n=e.storage+"settings/publicTypeIndex.ttl";const r=await(0,U.OE)(n,{fetch:V.fetch});let s=await(0,L.oY)(r);for await(const a of s){let t=await(0,W.MQ)(a,"http://www.w3.org/ns/solid/terms#forClass");if(t.includes("https://scenaristeur.github.io/verse#Workspace")){console.log(a);let t={};t.name=await(0,W.oX)(a,M.AS.name),t.url=await(0,W.Gr)(a,G.UG.instance),e.workspaces.push(t)}}}catch(t){console.log("erreur",t,e)}return await e}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(J);var Q=J,q=o(6403),Y=o(8504),Z=o(7623),H=o(5545);const z={install(e,t={}){let o=t.store;e.prototype.$createRemote=async function(e){console.log(o.state.solid.pod),console.log(o.state.solid.pod.neuroneStore,e),e["ve:url"]=o.state.solid.pod.neuroneStore+e.id,e["ve:synchronized"]=Date.now();try{const t=await(0,q._u)(e["ve:url"],new Blob([JSON.stringify(e,void 0,2)],{type:"application/json"}),{contentType:"application/json",fetch:V.fetch});return console.log(`File saved at ${(0,Y.LH)(t)}`),e}catch(t){console.log(t)}},e.prototype.$deleteRemote=async function(e){console.log(e,o.state.solid.pod.neuroneStore),await(0,q._I)(e["ve:url"],{fetch:V.fetch}),console.log("deleted",e["ve:url"])},e.prototype.$compare=async function(e){let t=o.state.nodes.nodes.find((t=>t.id==e.id));if(void 0==t)o.commit("nodes/addNotBoth",{id:e.id,local:null,remote:e});else try{const n=H(t,e);delete n["ve:updated"],delete n["ve:synchronized"],Object.entries(n).length>0&&o.commit("nodes/addMustUpdate",{id:e.id,local:t,remote:e,difference:n})}catch(n){o.commit("nodes/addMustUpdate",{id:e.id,local:t,remote:e})}},e.prototype.$getChildren=async function(e){const t=await(0,U.OE)(e,{fetch:V.fetch});let o=await(0,U.kQ)(t,{fetch:V.fetch});return o},e.prototype.$getNeurones=async function(e){console.log(e);let t=null;try{t=await(0,U.OE)(e,{fetch:V.fetch});let o=await(0,U.kQ)(t,{fetch:V.fetch});return console.log(o),o}catch(o){return[]}},e.prototype.$getNeurone=async function(e){const t=await(0,q.hn)(e,{fetch:V.fetch});return new Promise((function(e,o){const n=new FileReader;n.onload=async()=>{try{e(JSON.parse(n.result))}catch(t){o(t)}},n.onerror=e=>{o(e)},n.readAsText(t)}))},e.prototype.$getPermissions=async function(e){let t=e["ve:url"];const o=await(0,q.hn)(t,{fetch:V.fetch});return o.internal_resourceInfo.permissions},e.prototype.$changeWorkspace=async function(e){if(console.log(e),void 0==e)o.commit("nodes/setCurrentWorkspace",null),this.$checkChanges();else{let n=[];e.nodes=[];try{const t=await(0,U.OE)(e.url,{fetch:V.fetch});n=await(0,U.kQ)(t,{fetch:V.fetch});const r=n.map((async function(e){const t=await(0,q.hn)(e,{fetch:V.fetch});return new Promise((function(e,o){const n=new FileReader;n.onload=async()=>{try{e(JSON.parse(n.result))}catch(t){o(t)}},n.onerror=e=>{o(e)},n.readAsText(t)}))}));e.nodes=await Promise.all(r),console.log("space",e);let s=o.state.solid.pod.workspaces.findIndex((t=>t.url==e.url));console.log(s),-1===s?o.state.solid.pod.workspaces.push(e):Object.assign(o.state.solid.pod.workspaces[s],e),o.commit("nodes/setCurrentWorkspace",e)}catch(t){console.log(t)}}},e.prototype.$updateFile=async function(e){console.log(e),void 0==e.url&&(e.url=e.path+e.name);let t=e.name.split(".")[1],o="text/html; charset=utf-8";switch(t){case"jsonld":o="application/ld+json";break;case"json":o="application/json";break}try{const t=await(0,q._u)(e.url,new Blob([e.content],{type:o}),{contentType:o,fetch:V.fetch});return console.log(`File saved at ${(0,Y.LH)(t)}`),t}catch(n){console.log(n)}},e.prototype.$getContent=async function(e){console.log(e);try{const t=await(0,q.hn)(e,{fetch:V.fetch});if(console.log(`Fetched a ${(0,Y.wg)(t)} file from ${(0,Y.LH)(t)}.`),console.log(`The file is rawdata ${(0,Y.xr)(t)}`),"text/html"==`${(0,Y.wg)(t)}`){const e=new FileReader;e.onload=async()=>{let t=e.result;o.commit("nodes/setEditorContent",t)},e.onerror=e=>{console.log(e)},e.readAsText(t)}else console.log("is a dataset"),alert("i can't read '"+t.url+"' as text or html, use another editor");return t}catch(t){console.log(t)}},e.prototype.$addWorkspaceToPod=async function(e){console.log(e);let t=o.state.solid.pod,n=t.storage+"settings/publicTypeIndex.ttl";const r=await(0,U.OE)(n,{fetch:V.fetch});let s=await(0,Z.i)((0,L.Lx)({name:e.name})).addUrl("http://www.w3.org/ns/solid/terms#forClass","https://scenaristeur.github.io/verse#Workspace").addStringNoLocale(M.AS.name,e.name).addUrl(G.UG.instance,e.url).build(),a=(0,L.lY)(r,s),c=await(0,U.ek)(n,a,{fetch:V.fetch});console.log("savedThing",c)},e.prototype.$checkChanges=async function(){console.log("$checkChanges",o.state.solid.pod.neuroneStore);let e=this,t=[];try{const n=await(0,U.OE)(o.state.solid.pod.neuroneStore,{fetch:V.fetch});t=await(0,U.kQ)(n,{fetch:V.fetch});for(const e of o.state.nodes.nodes)t.includes(e["ve:url"])||o.commit("nodes/addNotBoth",{id:e.id,local:e,remote:null});for(const o of t){const t=await(0,q.hn)(o,{fetch:V.fetch}),n=new FileReader;n.onload=async()=>{e.$compare(JSON.parse(n.result))},n.onerror=e=>{console.log(e)},n.readAsText(t)}}catch(n){console.log(n.message),await(0,U.Mf)(o.state.solid.pod.neuroneStore,{fetch:V.fetch}),alert(o.state.solid.pod.neuroneStore+" has been created, please refresh the page")}},e.prototype.$processSource=async function(e){console.log("Source",e.source);const t=await(0,q.hn)(e.source,{fetch:V.fetch}),n=new FileReader;n.onload=async()=>{let e=JSON.parse(n.result);o.commit("nodes/setSource",e)},n.onerror=e=>{console.log(e)},n.readAsText(t)},e.prototype.$checkChanges1=async function(){console.log("$checkChanges",o.state.solid.pod.neuroneStore);try{const e=await(0,U.OE)(o.state.solid.pod.neuroneStore,{fetch:V.fetch});let t=await(0,U.kQ)(e,{fetch:V.fetch});const n=t.map((async function(e){const t=await(0,q.hn)(e,{fetch:V.fetch});return new Promise((function(e,o){const n=new FileReader;n.onload=async()=>{try{e(JSON.parse(n.result))}catch(t){o(t)}},n.onerror=e=>{o(e)},n.readAsText(t)}))})),r=await Promise.all(n);console.log(r)}catch(e){console.log(e.message),await(0,U.Mf)(o.state.solid.pod.neuroneStore,{fetch:V.fetch})}}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(z);var X=z,K=o(9444),ee=o.n(K),te=o(5069),oe=o(3017),ne=o(1101),re=o.n(ne);o(7024);n["default"].use(Q,{store:R}),n["default"].use(X,{store:R}),n["default"].use(re()),n["default"].use(ee()),n["default"].use(te.XG7),n["default"].use(oe.A7),n["default"].config.productionTip=!1,new n["default"]({router:g,store:R,render:e=>e(d)}).$mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,s){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],s=e[d][2];for(var c=!0,i=0;i<n.length;i++)(!1&s||a>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(c=!1,s<a&&(a=s));if(c){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var s=Object.create(null);o.r(s);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&r&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return n[e]}}));return a["default"]=function(){return n},o.d(s,a),s}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+({104:"schemas",107:"synchro",176:"projects",291:"groups",353:"agents",371:"persons",443:"about",497:"notes",509:"nodes",749:"spaces",797:"remote",922:"edit"}[e]||e)+"."+{0:"add4efe1",3:"b873e9e5",15:"78f62268",39:"3da65ba9",98:"180bd2da",104:"ef263226",107:"acdbeb24",123:"05b33db7",176:"5dd8c8e2",191:"08e045ce",291:"74f0ab4d",315:"61cc52e2",353:"5678ce15",371:"2bdeb4b7",417:"669dca09",443:"3d16311e",497:"58b6e230",509:"fcb1dd73",553:"9ac8624e",595:"8ec2e4b5",619:"fa045708",644:"70067607",686:"9a7b70f7",749:"71f4cea9",774:"522dcbeb",797:"7598a767",851:"7255a7f5",922:"8d747e5d"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+(509===e?"nodes":e)+"."+{509:"a8632499",851:"cad115e7"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="verse:";o.l=function(n,r,s,a){if(e[n])e[n].push(r);else{var c,i;if(void 0!==s)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+s){c=u;break}}c||(i=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+s),c.src=n),e[n]=[r];var f=function(t,o){c.onerror=c.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),i&&document.head.appendChild(c)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/verse/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,n,r){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var a=function(o){if(s.onerror=s.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=a,i.request=c,s.parentNode&&s.parentNode.removeChild(s),r(i)}};return s.onerror=s.onload=a,s.href=t,o?o.parentNode.insertBefore(s,o.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){r=a[n],s=r.getAttribute("data-href");if(s===e||s===t)return r}},n=function(n){return new Promise((function(r,s){var a=o.miniCssF(n),c=o.p+a;if(t(a,c))return r();e(n,c,null,r,s)}))},r={143:0};o.f.miniCss=function(e,t){var o={509:1,851:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=s);var a=o.p+o.u(t),c=new Error,i=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",c.name="ChunkLoadError",c.type=s,c.request=a,r[1](c)}};o.l(a,i,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,a=n[0],c=n[1],i=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(i)var d=i(o)}for(t&&t(n);l<a.length;l++)s=a[l],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=self["webpackChunkverse"]=self["webpackChunkverse"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9300)}));n=o.O(n)})();
//# sourceMappingURL=app.c7181f76.js.map