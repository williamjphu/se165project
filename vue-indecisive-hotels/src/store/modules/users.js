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

    var database = firebase.database()
    
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
          var usersRef = database.ref('users/' + user.uid)
          console.log('first: ' + payload.first)
          console.log('last: ' + payload.last)

          usersRef.set({
            first: "TestFirst",
            last: "TestLast",
            paymentInfo: null,
            bookings: []
          })
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
  loginWithGoogle ({commit}) {
    commit('setLoading', true)
    commit('clearError')
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(
        result => {
          console.log(result)
          const newUser = {
            id: result.user.uid,
            first: result.additionalUserInfo.profile.given_name,
            last: result.additionalUserInfo.profile.family_name,
            paymentInfo: null,
            bookings: []
          }
          commit('setUser', newUser)
          commit('setLoading', false)
          console.log(newUser)
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
  loginWithFacebook ({commit}) {
    commit('setLoading', true)
    commit('clearError')
    var provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(
        result => {
          console.log(result)
          const newUser = {
            id: result.user.uid,
            first: result.additionalUserInfo.profile.first_name,
            last: result.additionalUserInfo.profile.last_name,
            paymentInfo: null,
            bookings: []
          }
          commit('setUser', newUser)
          commit('setLoading', false)
          console.log(newUser)
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
  loginWithTwitter ({commit}) {
    commit('setLoading', true)
    commit('clearError')
    var provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(
        result => {
          console.log(result)
          const newUser = {
            id: result.user.uid,
            first: result.additionalUserInfo.profile.name,
            last: result.additionalUserInfo.profile.name,
            paymentInfo: null,
            bookings: []
          }
          commit('setUser', newUser)
          commit('setLoading', false)
          console.log(newUser)
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
          console.log(user)
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
