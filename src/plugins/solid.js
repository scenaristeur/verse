import {
  getSolidDataset,
  //getThingAll,
  //getPublicAccess,
  //  getAgentAccess,
  //getSolidDatasetWithAcl,
  //getPublicAccess,
  //getAgentAccess,
  getFile,
  // isRawData,
  // getContentType,
  //saveFileInContainer,
  getContainedResourceUrlAll,
  //getStringNoLocaleAll,
  createContainerAt,
  getSourceUrl,
  deleteFile,
  //removeThing,
  // removeAll,
  //removeStringNoLocale,
  //deleteContainer,
  //addStringNoLocale,
  //setThing,
  //saveSolidDatasetAt,
  //createSolidDataset,
  //createThing,
  //addUrl,
  //buildThing,

  overwriteFile,
  getStringNoLocale,
  getThing,
  getUrlAll,
  getUrl,
  //addDatetime,
  //  getDatetime,
  //setUrl,
  //setStringNoLocale,
  //setDecimal,
  //setInteger,
  //  getDecimal,
  //getInteger,
  // setDatetime
} from "@inrupt/solid-client";
import { FOAF, /*LDP,*/ VCARD, /*RDF, AS, RDFS, OWL*/  } from "@inrupt/vocab-common-rdf";
import { WS } from "@inrupt/vocab-solid-common";
import * as sc from '@inrupt/solid-client-authn-browser'
// import { v4 as uuidv4 } from 'uuid';

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    let sockets = []
    let subscriptions = []

    Vue.prototype.$synchronize = async function(){
      console.log("||| synch start")
      store.dispatch('nodes/getNodes')
      // verification par url
      // OK n'existe pas en local -> creation local
      // existe en local mais pas en distant
      // existe en local -> comparaison updated et maj

      await this.$getNodes()
      let remoteNodes = store.state.nodes.remoteNodes
      let nodes = store.state.nodes.nodes
      console.log(remoteNodes, nodes)

      for await  (const r of remoteNodes){

        await this.$remoteToLocal(r)
      }
      store.dispatch('nodes/getNodes')

      for await (const n of nodes){
        await this.$localToRemote(n)

      }
      store.dispatch('nodes/getNodes')
      console.log("||| synch end")
    },
    Vue.prototype.$create = async function(n){
      console.log(store.state.solid.pod.neuroneStore, n)
      n.url = store.state.solid.pod.neuroneStore+n.id+'.json'
      console.log(n.url)
      n.synchronized = Date.now()
      try{
        const savedFile = await overwriteFile(
          n.url,
          new Blob([JSON.stringify(n, undefined, 2)], { type: "application/json" }),
          { contentType: "application/json", fetch: sc.fetch }
        );
        console.log(`File saved at ${getSourceUrl(savedFile)}`);
        n.url = await getSourceUrl(savedFile)
        store.dispatch('nodes/saveNode', n)
      }catch(e){
        console.log(e)
      }
    }


    Vue.prototype.$localToRemote = async function(c){

      var index = store.state.nodes.remoteNodes.findIndex(x => x.id==c.id);
            c.url = store.state.solid.pod.neuroneStore+c.id+'.json'
      if(index === -1){
         console.log("-- n'existe pas en distant", c)
        //  console.log(typeof c.url)
        // let oldObject = null
        // if (!c.url.startsWith(store.state.solid.pod.storage) ){
        //   let path = store.state.solid.pod.neuroneStore
        //   oldObject = Object.assign({}, {url: c.url});
        //   //  console.log("oldObject",oldObject)
        //   c.url = path+uuidv4()+'.json'
        // }


        try{
          c.updated = Date.now()
          const savedFile = await overwriteFile(
            c.url,

            new Blob([JSON.stringify(c)], { type: "application/json" }),
            { contentType: "application/json", fetch: sc.fetch }
          );
          //  console.log(savedFile)
          console.log(`File saved at ${getSourceUrl(savedFile)}`);


          c.url = await getSourceUrl(savedFile)
          //  console.log(c)
          store.dispatch('nodes/saveNode', c)
        //  oldObject != null ? store.dispatch('nodes/deleteNode', oldObject) :  ""
        }catch(e){
          console.log(e)
        }


      }else{
          console.log("## existe en distant", c.url)
        let v = store.state.nodes.remoteNodes[index]
        await this.$checkUpdated(v, c)
      }
    },

    Vue.prototype.$checkUpdated = async function(v, c){
      let fr = new FileReader();
      try {
        const file = await getFile(v.url, { fetch: sc.fetch });
        fr.onload = async function() {
          let remote = JSON.parse(this.result)
          if(c.updated > remote.updated){
            console.log("must update remote", c.updated, remote.updated)
            try{
              const savedFile = await overwriteFile(
                c.url,
                new Blob([JSON.stringify(c)], { type: "application/json" }),
                { contentType: "application/json", fetch: sc.fetch }
              );
              //  console.log(savedFile)
              console.log(`File saved at ${getSourceUrl(savedFile)}`);
            }catch(e){
              console.log(e)
            }

          }else if (remote.updated > c.updated){
            console.log("updating local")
            store.dispatch('cats/saveCat', remote)
          }
          // else{
          //   console.log(remote.updated, c.updated)
          // }

        };
        await fr.readAsText(file);

      } catch (err) {
        console.log(err, v);
      }
    },

    Vue.prototype.$remoteToLocal = async function(v){
      let fr = new FileReader();
      var index = store.state.nodes.nodes.findIndex(x => x.url==v.url);
      if(index === -1){
         console.log("?? n'existe pas en local", v)
        try {
          const file = await getFile(v.url, { fetch: sc.fetch });
          fr.onload = async function() {
            let remote = JSON.parse(this.result)
          //  remote.url == undefined ? remote.url = v.url : ""
            store.dispatch('nodes/saveNode', remote)
          };
          await fr.readAsText(file);

        } catch (err) {
          console.log(err, v);
        }
        //store.dispatch('cats/saveCat', v)
        // this.n.nodes.push(n)
        // let action = {action: "addNode", node: n}
        // this.$changeGame(this.game, action)
      }else{
        let c= store.state.nodes.nodes[index]
         console.log("!! existe en local", c.url)

        await this.$checkUpdated(v, c)
        // Object.assign(this.network.nodes[index], n)
        // let action = {action: "updateNode", node: n}
        // this.$changeGame(this.game, action)
      }


    }

    Vue.prototype.$deleteRemote = async function(c){
      console.log(c)
      let del =  confirm("Are you sur you want to delete "+c.name);
      if (del == true){

        await deleteFile(
          c.url,
          {fetch: sc.fetch }
        )
        console.log("deleted",c.url)
        const index = subscriptions.indexOf(c.url);

        if (index > -1) {
          subscriptions.splice(index, 1);
        }
        this.$getNodes()
      }
    },

    Vue.prototype.$createRemote = async function(c){
      // let oldObject = null
      c.url = store.state.solid.pod.neuroneStore+c.id+'.json'

      // if (!c.url.startsWith(store.state.solid.pod.storage)){
      //   oldObject = Object.assign({}, {url: c.url});
      // }
      //
      // if (!c.url.startsWith(store.state.solid.pod.storage) || c.url == undefined ){
      //   let path = store.state.solid.pod.storage+'verses/'
      //   c.url = path+uuidv4()+'.json'
      // }
      let exist = null
      try{
        exist = await getFile(c.url,{fetch: sc.fetch})
      } catch(e){
        console.log("creation")
      }
      if (exist == null || c.updated > exist.updated){
        try{
          //c.updated = Date.now()
          const savedFile = await overwriteFile(
            c.url,
            new Blob([JSON.stringify(c)], { type: "application/json" }),
            { contentType: "application/json", fetch: sc.fetch }
          );
          //  console.log(savedFile)

          console.log(`File saved at ${getSourceUrl(savedFile)}`);
          console.log("exist", exist)
          this.$subscribe(c.url)

          //c.url = await getSourceUrl(savedFile)
          //  console.log(c)
          store.dispatch('nodes/saveNode', c)
          // oldObject != null ? store.dispatch('cats/deleteCat', oldObject) :  ""
        }catch(e){
          console.log(e)
        }
      }
    },
    Vue.prototype.$getPodInfosFromSession = async function(session){
      // try{
      let pod = {}
      pod.logged = session.info.isLoggedIn
      if (pod.logged) {
        pod.webId = session.info.webId
        pod = await this.$getPodInfos(pod)
        pod.neuroneStore == undefined ? pod.neuroneStore = pod.storage+'public/neurones/' : ""
        store.commit('solid/setPod', pod)
        this.$synchronize()
        //  await this.$getVerses(pod)

        if (pod.storage != null){
          //  this.$setCurrentThingUrl(pod.storage)
          //  store.commit('booklice/setPath', pod.storage+'public/bookmarks/')
          //let publicTagFile = pod.storage+'public/tags.ttl'
          //let privateTagFile = podStorage+'private/tags.ttl'
          // let tags = await this.$getTags(publicTagFile)
          // console.log("############################tags",tags)
        }
      }else{
        store.commit('solid/setPod', null)
        //  store.commit('solid/setThings', [])
      }
      // } catch(e){
      //   alert("$getPodInfosFromSession "+e)
      // }
    },

    Vue.prototype.$getRemote = async function(folderUrl){
      let resources = []

      try{
        const dataset = await getSolidDataset( folderUrl, { fetch: sc.fetch });
        let resUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
        resources = await resUrl.map(vu => {return {url: vu}})
        let fr = new FileReader();
        for await (let r of resources) {
          try {
            const file = await getFile(r.url, { fetch: sc.fetch });
            fr.onload = async function() {
              let remote = JSON.parse(this.result)
              console.log("remotejson", remote);
              r = await Object.assign(r, remote);
              console.log(r.id)
            };
            await fr.readAsText(file);

          } catch (err) {
            console.log(err, r);
          }
        }
      }catch(e){
        console.log(e.message)
        await createContainerAt( folderUrl, { fetch: sc.fetch });
      }
      console.log(resources)

      return resources
    },

    Vue.prototype.$getNodes = async function(){

      let remotes = []
      try{
        const dataset = await getSolidDataset( store.state.solid.pod.neuroneStore, { fetch: sc.fetch });
        let remotesUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
        remotes = remotesUrl.map(ru => {return {url: ru}})
        // for await (const u of versesUrl){
        //   verses.push (await this.$readVerse(u))
        // }
        console.log("remotes",remotes)
        store.commit('nodes/setRemotes',remotes)
        for( const v of remotes){
          this.$subscribe(v.url)
        }
      }catch(e){
        console.log(e.message)
        await createContainerAt( store.state.solid.pod.neuroneStore, { fetch: sc.fetch });
      }
    },

    Vue.prototype.$getPodInfos = async function(pod){
      try{
        const dataset = await getSolidDataset( pod.webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, pod.webId );
        pod.name = await getStringNoLocale(profile, FOAF.name);
        pod.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
        pod.storage = await getUrl(profile, WS.storage);
        pod.photo = await getUrl(profile, VCARD.hasPhoto);
        // pod.publicTags = await this.$getTags(pod.storage+'public/tags.ttl')
        // store.commit("vatch/addToNetwork", pod.publicTags)
        //this.$subscribe(pod.storage)
        //  console.log("getpodinfos",pod)
      }catch(e)
      {
        console.log("erreur",e, pod)
      }
      return await pod
    },

    Vue.prototype.$checkSession = async function(){
      await sc.handleIncomingRedirect({
        restorePreviousSession: true
      }).then((info) => {
        if(info.isLoggedIn ==  true){
          console.log(`Logged in with WebID [${info.webId}]`)
          //  console.log(info)
          store.commit('solid/setSession',info)
          let session = sc.getDefaultSession()
          this.$getPodInfosFromSession(session)
        }
      })

    },

    Vue.prototype.$login = async function(issuer){
      console.log("login", issuer)

      // 2. Start the Login Process if not already logged in.
      if (!sc.getDefaultSession().info.isLoggedIn) {
        // The `login()` redirects the user to their identity provider;
        // i.e., moves the user away from the current page.
        await sc.login({
          // Specify the URL of the user's Solid Identity Provider; e.g., "https://broker.pod.inrupt.com" or "https://inrupt.net"
          oidcIssuer: issuer,
          // Specify the URL the Solid Identity Provider should redirect to after the user logs in,
          // e.g., the current page for a single-page app.
          redirectUrl: window.location.href,
          // Pick an application name that will be shown when asked
          // to approve the application's access to the requested data.
          clientName: "Verse"
        });
      }
    },

    Vue.prototype.$logout = async function(){
      let session = sc.getDefaultSession()
      await session.logout()
      store.commit('solid/setSession',null)
      store.commit('solid/setPod', null)
    },
    Vue.prototype.$subscribe = async function(url){
      console.log("$subscribe", url)
      if(!subscriptions.includes(url)){

        // let url = path.url
        let app = this

        var wss = "wss://"+url.split('/')[2];
        //console.log("wss",wss, sockets[wss])
        let socket = sockets[wss]
        if (socket == null){
          //let socket = new WebSocket(websocket, ['solid.0.1.0']);
          socket = new WebSocket(wss, ['solid-0.1']);
          console.log("new socket",socket)
          sockets[wss] = socket
          console.log("sockets", sockets)
        }else{
          if (socket.readyState == 1){
            socket.send('sub '+url);
            subscriptions.push(url)
            console.log("0 socket sub to ",url)
          }
        }


        socket.onopen = function() {
          //console.log("socket open")
          this.send('sub '+url);
          console.log("socket sub to ",url)
          subscriptions.push(url)
        };
        socket.onmessage = async function(msg) {
          //  console.log("message",msg)
          if (msg.data && msg.data.slice(0, 3) === 'pub') {
            //  console.log(msg)
            console.log(msg.data)
            let res = msg.data.slice(4);
            console.log(res)
            if(res.endsWith('/')){
              console.log("[socket]readcont",res)
              const dataset = await getSolidDataset( res, { fetch: sc.fetch });
              let versesUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
              //let container =  await app.$readContainer({url: res, subscribe: true})
              //console.log(sockets)
              for(const v of versesUrl) {
                console.log(v, subscriptions.includes(v))
                console.log(subscriptions)
                if(!subscriptions.includes(v)){
                  app.$subscribe(v);
                  let fr = new FileReader();
                  try {
                    const file = await getFile(v, { fetch: sc.fetch });
                    fr.onload = async function() {
                      let remote = JSON.parse(this.result)
                      console.log(remote)
                      // remote.url == undefined ? remote.url = res : ""
                      store.dispatch('nodes/saveNode', remote)
                      store.dispatch('nodes/getNodes')
                    };
                    await fr.readAsText(file);

                  } catch (err) {
                    console.log(err, res);
                  }
                }

              }
            }else{
              console.log("[socket]must $readResource", res)
              let fr = new FileReader();
              try {
                const file = await getFile(res, { fetch: sc.fetch });
                fr.onload = async function() {
                  let remote = JSON.parse(this.result)
                  console.log(remote)
                  // remote.url == undefined ? remote.url = res : ""
                  store.dispatch('nodes/saveNode', remote)
                  store.dispatch('nodes/getNodes')
                };
                await fr.readAsText(file);

              } catch (err) {
                console.log(err, res);
              }
              //  await app.$readResource({url: res, subscribe: true})
            }
          }
        }
      }else{
        console.log('deja', subscriptions.length)
      }

    }
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
