
const state = () => ({
  session: null,
  pod: {},
})

const actions = {

}

const mutations = {
  setPod(state,p){
    state.pod = p
  },
  setSession(state, s){
    state.session = s
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
