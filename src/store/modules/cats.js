import idb from '@/api/idb';

const state = () => ({
  cats:[]
})

const actions = {
  async deleteCat(context, cat) {
    console.log('store is being asked to delete '+cat.id);
    await idb.deleteCat(cat);
  },
  async getCats(context) {
    context.state.cats = [];
    let cats = await idb.getCats();
    cats.forEach(c => {
      context.state.cats.push(c);
    });
  },
  async saveCat(context, cat) {
    await idb.saveCat(cat);
  }
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
