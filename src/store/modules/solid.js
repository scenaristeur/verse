
const state = () => ({
  session: null,
  pod: null,
})

const actions = {

}

const mutations = {
  setPod(state,p){
    console.log("pod",p)
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
