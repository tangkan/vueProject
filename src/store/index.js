import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    activetabbar: 'home'
  },
  mutations: {
    changeTabbar(state,name) {
      state.activetabbar = name
    }
  },
});