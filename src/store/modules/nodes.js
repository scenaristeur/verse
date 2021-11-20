//import Vue from 'vue'
import idb from '@/api/idb-nodes';
import { v4 as uuidv4 } from 'uuid';


const state = () => ({
  nodes:[]
})

const actions = {
  async deleteNode(context, node) {
    console.log('store is being asked to delete '+node.id);
    await idb.deleteNode(node);
    // try{
    //   await Vue.prototype.$deleteRemote(cat)
    // }
    // catch(e){
    //   console.log(e)
    // }
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
    node.created == undefined ? node.created = Date.now() : ""
    node.updated = Date.now()
    console.log('store is being asked to save '+node.id);
    await idb.saveNode(node);
    // try{
    //   await Vue.prototype.$createRemote(node)
    // }
    // catch(e){
    //   console.log(e)
    // }
  },
  // async rmlocalDB() {
  //   await idb.deleteDb();
  // }
}

const mutations = {
  setVerses (state, v){
    console.log("verses", v)
    state.verses = v
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
