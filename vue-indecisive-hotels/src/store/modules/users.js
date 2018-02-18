import * as firebase from 'firebase'

const state = {
  user: null,
  loading: false,
  error: null
}

const getters = {
  user (state) {
    return state.user
  },
  loading (state) {
    return state.loading
  },
  error (state) {
    return state.error
  }
}

const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  clearError (state) {
    state.error = null
  }
}

const actions = {
  registerUser ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            first: payload.first,
            last: payload.last,
            paymentInfo: null,
            bookings: []
          }
          // const firebaseUser = {
          //   first: payload.first,
          //   last: payload.last,
          //   paymentInfo: null,
          //   bookings: []
          // }
          // firebase.database().ref('users/' + user.uid).set(firebaseUser)
          commit('setUser', newUser)
          commit('setLoading', false)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  loginUser ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            first: payload.first,
            last: payload.last,
            paymentInfo: null,
            bookings: []
          }
          // const firebaseUser = {
          //   first: payload.first,
          //   last: payload.last,
          //   paymentInfo: null,
          //   bookings: []
          // }
          // firebase.database().ref('users/' + user.uid).set(firebaseUser)
          commit('setUser', newUser)
          commit('setLoading', false)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
  },
  autoLogin ({commit}, payload) {
    commit('setUser', {id: payload.uid})
  },
  logout ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
  },
  setError ({commit}, error) {
    commit('setError', error)
  },
  clearError ({commit}) {
    commit('clearError')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
