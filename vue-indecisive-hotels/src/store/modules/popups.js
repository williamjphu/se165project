const state = {
  showSidebar: false,
  showLogin: false
}

const getters = {
  getShowSidebar (state) {
    return state.showSidebar
  },
  getShowLogin (state) {
    return state.showLogin
  }
}

const actions = {
}

const mutations = {
  toggleSidebar (state) {
    state.showSidebar = !state.showSidebar
  },
  setShowSidebar (state, visible) {
    state.showSidebar = visible
  },
  toggleLogin (state) {
    state.showLogin = !state.showLogin
  },
  setShowLogin (state, visible) {
    state.showLogin = visible
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
