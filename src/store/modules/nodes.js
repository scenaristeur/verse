import Vue from 'vue'
import idb from '@/api/idb-nodes';
import { v4 as uuidv4 } from 'uuid';


const state = () => ({
  nodes:[],
  remoteNodes : [],
  currentNode: null,
  notBoth : [],
  mustUpdate : [],

})

const actions = {
  async deleteNode(context, node) {
    let del =  confirm("Are you sur you want to delete "+node.name);
    if (del == true){
      if(context.rootState.solid.pod != null){
        try{
          await Vue.prototype.$deleteRemote(node)
        }
        catch(e){
          console.log(e)
        }
      }
      else{
        console.log("is not connected")
      }
      console.log('store is being asked to delete '+node);
      await idb.deleteNode(node);
    }
  },
  async getNodes(context) {
    context.state.nodes = [];
    let nodes = await idb.getNodes();
    nodes.forEach(n => {
      context.state.nodes.push(n);
    });
  },
  async saveNode(context, node) {
    node.id == undefined ? node.id = uuidv4() : ""
    node['ve:created'] == undefined ? node['ve:created'] = Date.now() : ""
    node['ve:updated'] = Date.now()
    if(context.rootState.solid.pod != null){
      try{
        node = await Vue.prototype.$createRemote(node)
      }
      catch(e){
        console.log(e)
      }
    }
    else{
      console.log("is not connected")
    }
    console.log('store is being asked to save '+JSON.stringify(node));
    await idb.saveNode(node);
  },
  // async sync(context, pod){
  // //  console.log('sync',context, pod.neuroneStore)
  //  Vue.prototype.$synchronise()
  //   // await context.commit("setRemotes", remotes)
  //   // console.log("remote",context.state.remoteNodes)
  //   // for await (const r of await context.state.remoteNodes){
  //   //   console.log("r",r.id, r.updated, r)
  //   // }
  //   //
  //   // for(const n of context.state.nodes){
  //   //   console.log("n",n.id,n.updated, n)
  //   //   var index = context.state.remoteNodes.findIndex(x => x.id==n.id);
  //   //   if(index === -1){
  //   //     console.log("n'existe pas en remote",n.id)
  //   //     Vue.prototype.$create(n)
  //   //
  //   //   }else{
  //   //     console.log("existe en remote",n.id)
  //   //   }
  //   // }
  //
  //
  // }
  // async rmlocalDB() {
  //   await idb.deleteDb();
  // }
}

const mutations = {
  setRemotes (state, r){
    console.log("remotes", r)
    state.remoteNodes = r
  },
  setCurrentNode (state, n){
    state.currentNode = n
  },
  addNotBoth(state, n){
    var index = state.notBoth.findIndex(x => x.id==n.id);
    if(index === -1){
      state.notBoth.push(n)
    }
  },
  removeNotBoth(state,n){
    var index = state.notBoth.map(x => {
      return x.id;
    }).indexOf(n.id);
    state.notBoth.splice(index, 1);
  },
  addMustUpdate(state, n){
    var index = state.mustUpdate.findIndex(x => x.id==n.id);
    if(index === -1){
      state.mustUpdate.push(n)
    }
  },
  removeMustUpdate(state,n){
    var index = state.mustUpdate.map(x => {
      return x.id;
    }).indexOf(n.id);
    state.mustUpdate.splice(index, 1);
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
