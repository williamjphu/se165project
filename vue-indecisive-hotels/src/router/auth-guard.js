import { store } from '../store'

export default (to, from, next) => {
  store.dispatch('clearError')
  if (store.getters.user) {
    next()
  } else {
    next('/signup')
    store.dispatch('setError', {message: 'Please register or login first'})
  }
}
