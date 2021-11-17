import Vue from 'vue'
import Vuex from 'vuex'
import cats from './modules/cats'
import solid from './modules/solid'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cats, solid
  }
})
