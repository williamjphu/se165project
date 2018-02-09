const state = {
  menuItems: [
    {
      icon: 'fa-user-plus',
      title: 'Sign Up',
      path: 'signup'
    },
    {
      icon: 'fa-sign-in-alt',
      title: 'Sign In',
      path: 'signin'
    },
    {
      icon: 'fa-sign-out-alt',
      title: 'Sign Out'
    },
    {
      icon: 'fa-user',
      title: 'Profile',
      path: 'profile'
    }
  ],
  showSidebar: false
}

const getters = {
  getShowSidebar (state) {
    return state.showSidebar
  },
  getMenuItems (state) {
    return state.menuItems
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
