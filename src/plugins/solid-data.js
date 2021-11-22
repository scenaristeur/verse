import {
  // getSolidDataset,
  //getThingAll,
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
  // getStringNoLocale,
  // getThing,
  // getUrlAll,
  // getUrl,
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
// import { FOAF, /*LDP,*/ VCARD, /*RDF, AS, RDFS, OWL*/  } from "@inrupt/vocab-common-rdf";
// import { WS } from "@inrupt/vocab-solid-common";
//
import * as sc from '@inrupt/solid-client-authn-browser'

const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    console.log(store)

    Vue.prototype.$createRemote = async function(n){
      console.log(store.state.solid.pod)

        console.log(store.state.solid.pod.neuroneStore, n)
        n.url = store.state.solid.pod.neuroneStore+n.id+'.json'
        n.synchronized = Date.now()
        try{
          const savedFile = await overwriteFile(
            n.url,
            new Blob([JSON.stringify(n, undefined, 2)], { type: "application/json" }),
            { contentType: "application/json", fetch: sc.fetch }
          );
          console.log(`File saved at ${getSourceUrl(savedFile)}`);
          n.url = await getSourceUrl(savedFile)
          //  store.dispatch('nodes/saveNode', n)
          return n
        }catch(e){
          console.log(e)
        }
      }

    Vue.prototype.$deleteRemote = async function(n){
        console.log(n, store.state.solid.pod.neuroneStore)

        await deleteFile(
          n.url,
          {fetch: sc.fetch }
        )
        console.log("deleted",n.url)
        // const index = subscriptions.indexOf(c.url);
        // if (index > -1) {
        //   subscriptions.splice(index, 1);
        // }
        //this.$getNodes()
      }


  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
