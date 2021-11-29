import Vue from 'vue'
const state = () => ({
  session: null,
  pod: null,
})

const actions = {
  async addWorkspace(context, w) {
    context.state.pod.workspaces.push(w)
    Vue.prototype.$addWorkspaceToPod(w)
  },
}

const mutations = {
  setPod(state,p){
    console.log("pod",p)
    state.pod = p
  },
  setSession(state, s){
    state.session = s
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
