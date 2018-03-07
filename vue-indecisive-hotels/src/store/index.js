import Vue from 'vue'
import Vuex from 'vuex'
// Store Modules
import popups from './modules/popups'
import users from './modules/users'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    popups: popups,
    users: users
  }
})
