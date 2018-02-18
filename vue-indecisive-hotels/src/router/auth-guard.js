import { store } from '../store'

export default (to, from, next) => {
  if (store.getters.user) {
    next()
  } else {
    store.dispatch('setError', {message: 'Please sign in first'})
    next('/signin')
  }
}
