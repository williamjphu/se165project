import Vue from 'vue'
import Vuex from 'vuex'
// Store Modules
import popups from './modules/popups'
import users from './modules/users'
import hotels from './modules/hotels'
import bookings from './modules/bookings'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    users: users,
    hotels: hotels,
    popups: popups,
    bookings: bookings
  }
})
