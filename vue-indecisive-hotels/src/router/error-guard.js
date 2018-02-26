import { store } from '../store'

export default (to, from, next) => {
  store.dispatch('clearError')
  next()
}
