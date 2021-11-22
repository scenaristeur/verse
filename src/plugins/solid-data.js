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
  // getStringNoLocaleAll,
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
      n['ve:url'] = store.state.solid.pod.neuroneStore+n.id
      n['ve:synchronized'] = Date.now()
      try{
        const savedFile = await overwriteFile(
          n['ve:url'],
          new Blob([JSON.stringify(n, undefined, 2)], { type: "application/ld+json" }),
          { contentType: "application/ld+json", fetch: sc.fetch }
        );
        console.log(`File saved at ${getSourceUrl(savedFile)}`);
        //n.url = await getSourceUrl(savedFile)
        //  store.dispatch('nodes/saveNode', n)
        return n
      }catch(e){
        console.log(e)
      }
    }

    Vue.prototype.$deleteRemote = async function(n){
      console.log(n, store.state.solid.pod.neuroneStore)

      await deleteFile(
        n['ve:url'],
        {fetch: sc.fetch }
      )
      console.log("deleted",n['ve:url'])
      // const index = subscriptions.indexOf(c.url);
      // if (index > -1) {
      //   subscriptions.splice(index, 1);
      // }
      //this.$getNodes()
    }

    // Vue.prototype.$onLoad = async function( remotes){
    //   console.log(remotes, this)
    //   let remote = JSON.parse(this.result)
    //   console.log(remote)
    //   remotes.push(remote)
    // }

    Vue.prototype.$compare = async function(remote){
      //console.log(remote)
      //  console.log(remote.id)
      let local = store.state.nodes.nodes.find(n => n.id == remote.id)
      console.log(local)
      if (local == undefined){
        store.commit('nodes/addNotBoth',{id: remote.id, local: null, remote: remote})
      }else if(local['ve:updated'] != remote['ve:updated']){
        store.commit('nodes/addMustUpdate', {id: remote.id, local: local, remote: remote})
      }
    }

    Vue.prototype.$checkChanges = async function(){
      console.log("$checkChanges",store.state.solid.pod.neuroneStore)
      let plugin = this
      let remotesUrl = []
      try{
        const dataset = await getSolidDataset( store.state.solid.pod.neuroneStore, { fetch: sc.fetch });
        remotesUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
        for (const u of remotesUrl){
          const file = await getFile(u, { fetch: sc.fetch });
          const reader = new FileReader();
          reader.onload = async () => {
            plugin.$compare(JSON.parse(reader.result));

          };
          reader.onerror = (error) => {
            console.log(error);
          };
          reader.readAsText(file);
        }

      }catch(e){
        console.log(e)
      }


      console.log("Phase 2",remotesUrl)
      for (const local of store.state.nodes.nodes){
        console.log(local.id, remotesUrl.includes(local['ve:url']))
        if (!remotesUrl.includes(local['ve:url'])){
          store.commit('nodes/addNotBoth',{id: local.id, local: local, remote: null})
        }

      }

    }

    Vue.prototype.$checkChanges1 = async function(){
      console.log("$checkChanges",store.state.solid.pod.neuroneStore)
      //let remotes = []
      try{
        const dataset = await getSolidDataset( store.state.solid.pod.neuroneStore, { fetch: sc.fetch });
        let remotesUrl  = await getContainedResourceUrlAll(dataset,{fetch: sc.fetch} )
        // let files = await remotesUrl.map(async function(ru) {return `${await getFile(ru, { fetch: sc.fetch })}`})

        // console.log(`${JSON.parse(files)}`)
        const filePromises = remotesUrl.map(async function(url) {
          // Return a promise per file
          const file = await getFile(url, { fetch: sc.fetch });
          return new Promise( function(resolve, reject) {

            const reader = new FileReader();
            reader.onload = async () => {
              try {
                //response =
                // Resolve the promise with the response value
                resolve(JSON.parse(reader.result));
              } catch (err) {
                reject(err);
              }
            };
            reader.onerror = (error) => {
              reject(error);
            };
            reader.readAsText(file);
          });
        });

        // Wait for all promises to be resolved
        const fileInfos = await Promise.all(filePromises);
        console.log(fileInfos)
        // var reader = new FileReader();
        //
        // for await  (const r of remotes_urls){
        //   const file = await getFile(r.url, { fetch: sc.fetch });
        //
        //   reader.onload = this.$onLoad(remotes);
        //   reader.readAsText(file);
        // }
        // console.log(remotes)
        // for await (const u of versesUrl){
        //   verses.push (await this.$readVerse(u))
        // }
        // console.log("remotes",remotes)
        // store.commit('nodes/setRemotes',remotes)
        // for( const v of urls){
        //   this.$subscribe(v.url)
        // }
      }catch(e){
        console.log(e.message)
        await createContainerAt( store.state.solid.pod.neuroneStore, { fetch: sc.fetch });
      }

    }


  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
