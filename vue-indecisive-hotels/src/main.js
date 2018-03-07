// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import sidebar from './components/core/sidebar'
import searchHotels from './components/core/search_hotels'
import alertMsg from './components/core/alert'
import { store } from './store'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'
import * as firebase from 'firebase'
import * as googleplaces from 'googleplaces'

fontawesome.library.add(brands, faSpinner)

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('sidebar', sidebar)
Vue.component('searchHotels', searchHotels)
Vue.component('app-alert', alertMsg)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  googleplaces,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyD7W1ZM-VH_sBjVTfA8wqpcePX-6NzkO1E',
      authDomain: 'hotelproject-c7a4c.firebaseapp.com',
      databaseURL: 'https://hotelproject-c7a4c.firebaseio.com',
      projectId: 'hotelproject-c7a4c',
      storageBucket: 'hotelproject-c7a4c.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLogin', user)
      }
    })
  }
})
