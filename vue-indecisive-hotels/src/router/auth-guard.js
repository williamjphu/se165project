import { store } from '../store'

export default (to, from, next) => {
  store.dispatch('clearError')
  if (store.getters.user) {
    next()
  } else {
    next('/signin')
    store.dispatch('setError', {message: 'Please sign in first'})
  }
}
