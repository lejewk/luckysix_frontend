import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    draws: []
  },
  mutations: {
    setDraws: function(state, draws) {
      console.log("set Draws param", draws);
      state.draws = draws;
    }
  },
  actions: {
    setDraws: function(context, draws) {
      context.commit('setDraws', draws);
    }
  }
})