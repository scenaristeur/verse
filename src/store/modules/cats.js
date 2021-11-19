import Vue from 'vue'
import idb from '@/api/idb';

const state = () => ({
  cats:[],
  verses : []
})

const actions = {
  async deleteCat(context, cat) {
    console.log('store is being asked to delete '+cat.url);
    await idb.deleteCat(cat);
    try{
      await Vue.prototype.$deleteRemote(cat)
    }
    catch(e){
      console.log(e)
    }
  },
  async getCats(context) {
    context.state.cats = [];
    let cats = await idb.getCats();
    cats.forEach(c => {
      context.state.cats.push(c);
    });
  },
  async saveCat(context, cat) {
    console.log('store is being asked to save '+cat.url);
    await idb.saveCat(cat);
    try{
      await Vue.prototype.$createRemote(cat)
    }
    catch(e){
      console.log(e)
    }
  },
  async rmlocalDB() {
    await idb.deleteDb();
  }
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
