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
  //deleteFile,
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
import { v4 as uuidv4 } from 'uuid';

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    //let sockets = []

    Vue.prototype.$synchronise = async function(){
      await this.$getVerses(store.state.solid.pod)
      let verses = store.state.cats.verses
      let cats = store.state.cats.cats
      console.log(verses, cats)

      for await  (const v of verses){
        await this.$remoteToLocal(v)
      }
      store.dispatch('cats/getCats')

      for (const c of cats){
        console.log("local",c)
      }





    },

    Vue.prototype.$remoteToLocal = async function(v){
      let fr = new FileReader();
      try {
        const file = await getFile(v.url, { fetch: sc.fetch });
        fr.onload = async function() {
          let remote = JSON.parse(this.result)
          remote.url == undefined ? remote.url = v.url : ""
          //console.log(v)
          var index = store.state.cats.cats.findIndex(x => x.url==remote.url);
          if(index === -1){
            remote.updated = Date.now()
            console.log("?? n'existe pas en local", remote)
            store.dispatch('cats/saveCat', remote)
            // this.n.nodes.push(n)
            // let action = {action: "addNode", node: n}
            // this.$changeGame(this.game, action)
          }else{
            console.log("!! existe en local", v)

            // Object.assign(this.network.nodes[index], n)
            // let action = {action: "updateNode", node: n}
            // this.$changeGame(this.game, action)
          }
          //  return v

        };
        await fr.readAsText(file);

      } catch (err) {
        console.log(err, v);
      }

    }


    Vue.prototype.$synchronise1 = async function(cats){
      let path = store.state.solid.pod.storage+'verses/'
      let   fr = new FileReader();
      for (const c of cats){
        if (c.url != undefined){
          try {
            // file is a Blob (see https://developer.mozilla.org/docs/Web/API/Blob)
            const file = await getFile(
              c.url,               // File in Pod to Read
              { fetch: sc.fetch }       // fetch from authenticated session
            );

            // console.log( `Fetched a ${getContentType(file)} file from ${getSourceUrl(file)}.`);
            // console.log(`The file is ${isRawData(file) ? "not " : ""}a dataset.`);
            // console.log(file)


            fr.onload = async function() {
              let remote = JSON.parse(this.result)
              //console.log("remote, c",remote.updated, c.updated)
              if (remote.updated > c.updated){
                console.log("update c, remote > c",remote.updated, c.updated)

                store.dispatch('cats/saveCat', remote)
              }else if (c.updated > remote.updated)
              {
                console.log("update remote, remote < c",remote.updated, c.updated)
                const savedFile = await overwriteFile(
                  c.url,

                  new Blob([JSON.stringify(c)], { type: "application/json" }),
                  { contentType: "application/json", fetch: sc.fetch }
                );
                console.log(savedFile)
                console.log(`File saved at ${getSourceUrl(savedFile)}`);
                c.url = await getSourceUrl(savedFile)
                console.log(c)
                store.dispatch('cats/saveCat', c)
              }
              // else{
              //   console.log("egal")
              // }
            };
            fr.readAsText(file);
            // try {
            //   const savedFile = await overwriteFile(
            //     c.url,                              // URL for the file.
            //     c,                                       // File
            //     { contentType: 'application/json', fetch: sc.fetch }    // mimetype if known, fetch from the authenticated session
            //   );
            //   console.log(`File saved at ${getSourceUrl(savedFile)}`);
            //
            // } catch (error) {
            //   console.error(error);
            // }
          } catch (err) {
            console.log(err);
          }
        }else{
          //  c.url == undefined ? c.url = path+uuidv4()+'.json' : ""
          //  console.log(c.url)
          let fileUrl = path+uuidv4()+'.json'
          //  try {
          // const savedFile = await saveFileInContainer(
          //   path,           // Container URL
          //   JSON.stringify(c),                         // File
          //   { slug: filename, contentType: 'application/json', fetch: sc.fetch }
          // );
          c.updated = Date.now()
          const savedFile = await overwriteFile(
            fileUrl,

            new Blob([JSON.stringify(c)], { type: "application/json" }),
            { contentType: "application/json", fetch: sc.fetch }
          );
          console.log(savedFile)
          console.log(`File saved at ${getSourceUrl(savedFile)}`);
          c.url = await getSourceUrl(savedFile)
          console.log(c)
          store.dispatch('cats/saveCat', c)
          // } catch (error) {
          //   console.error(error);
          // }
        }

      }
      // if (c.url == undefined){
      //   c.url = path+uuidv4()+'.json'
      //   console.log(c.url)
      // }
    },

    Vue.prototype.$getPodInfosFromSession = async function(session){
      // try{
      let pod = {}
      pod.logged = session.info.isLoggedIn
      if (pod.logged) {
        pod.webId = session.info.webId
        pod = await this.$getPodInfos(pod)
        store.commit('solid/setPod', pod)
        await this.$getVerses(pod)

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

    Vue.prototype.$getVerses = async function(pod){
      let verses_folder = pod.storage+'verses/'
      let verses = []
      try{
        const dataset = await getSolidDataset( verses_folder, { fetch: sc.fetch });
        let versesUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
        verses = versesUrl.map(vu => {return {url: vu}})
        // for await (const u of versesUrl){
        //   verses.push (await this.$readVerse(u))
        // }
        console.log("verses",verses)
        store.commit('cats/setVerses',verses)
      }catch(e){
        console.log(e.message)
        await createContainerAt( verses_folder, { fetch: sc.fetch });

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
    }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
