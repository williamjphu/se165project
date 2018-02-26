import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import ErrorGuard from './error-guard'
import homepage from '@/components/homepage'
import profile from '@/components/users/profile'
import signin from '@/components/users/signin'
import signup from '@/components/users/signup'

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
