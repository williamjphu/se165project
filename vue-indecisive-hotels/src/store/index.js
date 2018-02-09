import Vue from 'vue'
import Vuex from 'vuex'
// Store Modules
import sidebar from './modules/sidebar'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    sidebar: sidebar
  }
})
