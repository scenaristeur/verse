import Vue from 'vue'
import Vuex from 'vuex'
import cats from './modules/cats'
import solid from './modules/solid'
import nodes from './modules/nodes'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cats, solid, nodes
  }
})
