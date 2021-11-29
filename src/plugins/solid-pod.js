import {
  getSolidDataset,
  getThingAll,
  //getPublicAccess,
  //  getAgentAccess,
  //getSolidDatasetWithAcl,
  //getPublicAccess,
  //getAgentAccess,
  //getFile,
  // isRawData,
  // getContentType,
  //saveFileInContainer,
  // getContainedResourceUrlAll,
  // getStringNoLocaleAll,
  // createContainerAt,
  // getSourceUrl,
  // deleteFile,
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
  //overwriteFile,
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
import { FOAF, /*LDP,*/ VCARD, /*RDF,*/ AS, /*RDFS, OWL*/  } from "@inrupt/vocab-common-rdf";
import { WS } from "@inrupt/vocab-solid-common";

import * as sc from '@inrupt/solid-client-authn-browser'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store

    Vue.prototype.$checkSession = async function(){
      await sc.handleIncomingRedirect({
        restorePreviousSession: true
      }).then((info) => {
        if(info.isLoggedIn ==  true){
          console.log(`Logged in with WebID [${info.webId}]`)
          store.commit('solid/setSession',info)
          let session = sc.getDefaultSession()
          this.$getPodInfosFromSession(session)
        }
      })

    },

    Vue.prototype.$login = async function(issuer){
      console.log("login", issuer)
      if (!sc.getDefaultSession().info.isLoggedIn) {
        await sc.login({
          oidcIssuer: issuer,
          redirectUrl: window.location.href,
          clientName: "Verse"
        });
      }
    },

    Vue.prototype.$logout = async function(){
      let session = sc.getDefaultSession()
      await session.logout()
      store.commit('solid/setSession',null)
      store.commit('solid/setPod', null)
      store.dispatch('nodes/clearStore')
    },
    Vue.prototype.$getPodInfosFromSession = async function(session){
      // try{
      let pod = {}
      pod.logged = session.info.isLoggedIn
      if (pod.logged) {
        pod.webId = session.info.webId
        pod = await this.$getPodInfos(pod)
        pod.neuroneStore == undefined ? pod.neuroneStore = pod.storage+'public/neurones/' : ""
        pod.workspaces == undefined ? pod.workspaces = [] : ""
        store.commit('solid/setPod', pod)
        this.$checkChanges()
        //this.$synchronize()
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
    Vue.prototype.$getPodInfos = async function(pod){
      try{
        const dataset = await getSolidDataset( pod.webId, { fetch: sc.fetch });
        let profile = await getThing( dataset, pod.webId );
        pod.name = await getStringNoLocale(profile, FOAF.name);
        pod.friends = await getUrlAll(profile, FOAF.knows).map(webId => {return {webId: webId}})
        pod.storage = await getUrl(profile, WS.storage);
        pod.photo = await getUrl(profile, VCARD.hasPhoto);
        pod.workspaces = []

        let publicTypeIndexUtl = pod.storage+'settings/publicTypeIndex.ttl'
        const pti_ds = await getSolidDataset( publicTypeIndexUtl, { fetch: sc.fetch });
        let indexes = await getThingAll(pti_ds)
        for await (const i of indexes){
          let types = await getUrlAll(i, "http://www.w3.org/ns/solid/terms#forClass");
          console.log(types)
          if(types.includes("https://scenaristeur.github.io/verse#Workspace")){
            let ws = {}
            ws.name =  await getStringNoLocale(i, AS.name)
            ws.url = await getUrl("http://www.w3.org/ns/solid/terms#instance")


            pod.workspaces.push(ws)
          }
        }
        //console.log(ws)
        //  pod.workspaces = await getUrlAll(pti_ds, "http://www.w3.org/ns/solid/terms#forClass", "https://www.w3.org/ns/activitystreams#Collection");
        // pod.publicTags = await this.$getTags(pod.storage+'public/tags.ttl')
        // store.commit("vatch/addToNetwork", pod.publicTags)
        //this.$subscribe(pod.storage)
        //  console.log("getpodinfos",pod)
      }catch(e)
      {
        console.log("erreur",e, pod)
      }
      return await pod
    }

  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
