import Vue from 'vue'
import Vuex from 'vuex'
// Store Modules
import sidebar from './modules/sidebar'
import users from './modules/users'
import hotels from './modules/hotels'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    sidebar: sidebar,
    users: users,
    hotels: hotels
  }
})
