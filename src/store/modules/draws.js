// initial state
const state = () => ({
  draws: []
})

// getters
const getters = {
  getDraws: state => state.draws
}

// actions
const actions = {}

// mutations
const mutations = {
  setDraws (state, draws) {
    state.draws = draws
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}