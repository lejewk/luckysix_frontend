import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    draws: []
  },
  mutations: {
    setDraws: function(state, draws) {
      state.draws = draws;
    }
  }
})