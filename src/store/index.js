import Vue from 'vue'
import Vuex from 'vuex'
import draws from './modules/draws'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    draws
  }
})
export default store;