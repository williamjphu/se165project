import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import ErrorGuard from './error-guard'
import homepage from '@/components/homepage'
import profile from '@/components/users/profile'
import signin from '@/components/users/signin'
import signup from '@/components/users/signup'
import * as firebase from 'firebase' 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
      beforeEnter: ErrorGuard
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
      beforeEnter: ErrorGuard
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin,
      beforeEnter: ErrorGuard
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})

Vue.use(Vuex)
export const store = new Vuex.Store({
 state: {
  loadedUsers: [
    {

    }
  ],
  user: null 
 },
mutations: {
  setUser (state, payload) {
   state.user = payload 
  }
},
actions:{
  signUserUserUp ({commit}, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
    .then(
      user => {
        const newUser = {
          id: user.uid,
          registeredUsers: []
        }
        commit('setUser' , newUser)
      }
      )
    .catch(
      error => {
        console.log(error)
      }
      )
  }
},
getters: {
  user (state) {
    return state.user
  }
}
})