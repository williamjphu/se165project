import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import ErrorGuard from './error-guard'
import homepage from '@/components/homepage'
import profile from '@/components/users/profile'
import signin from '@/components/users/signin'
import signup from '@/components/users/signup'
import contactUs from '@/components/static/contact_us'
import faqs from '@/components/static/faqs'
import mybookings from '@/components/bookings/my_bookings'
import book from '@/components/bookings/new_booking'

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
    },
    {
      path: '/contact',
      name: 'contact_us',
      component: contactUs,
      beforeEnter: ErrorGuard
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: faqs,
      beforeEnter: ErrorGuard
    },
    {
      path: '/search',
      name: 'book',
      component: book,
      beforeEnter: ErrorGuard
    },
    {
      path: '/mybookings',
      name: 'mybookings',
      component: mybookings,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
