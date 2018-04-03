import * as firebase from 'firebase'

const state = {
  bookings: [],
  bookingLoading: false,
  bookingError: null
}

const getters = {
  bookings (state) {
    return state.bookings
  },
  bookingLoading (state) {
    return state.bookingLoading
  },
  bookingError (state) {
    return state.bookingError
  }
}

const mutations = {
  clearBookings (state) {
    state.bookings = []
  },
  setBookingLoading (state, payload) {
    state.bookingLoading = payload
  },
  setBookingError (state, payload) {
    state.bookingError = payload
  },
  clearBookingError (state, payload) {
    state.bookingError = null
  },
  addBooking (state, payload) {
    state.bookings.push(payload)
  }
}

const actions = {
  createBooking ({ commit, dispatch }, payload) {
    commit('setBookingLoading', true)
    commit('clearBookingError')
    var database = firebase.database()
    var bookingDetails = payload
    var bookingsRef = database.ref('bookings/' + this.getters.user.id)
    bookingsRef.push().set({
      bookingDetails: bookingDetails,
      status: 'pending',
      createdAt: new Date().toISOString().substr(0, 10),
      updatedAt: new Date().toISOString().substr(0, 10)
    })
    .then(
      booking => {
        // commit('setBooking', )
        dispatch('retrieveBookings')
        commit('setBookingLoading', false)
      }
    )
    .catch(
      error => {
        commit('setBookingLoading', false)
        commit('setError', error)
        console.log(error)
      }
    )
  },
  retrieveBookings ({ commit }) {
    commit('setBookingLoading', true)
    commit('clearBookings')
    console.log('Retrieving bookings of current user:')
    firebase.database().ref('bookings/' + this.getters.user.id).once('value', function (snapshot) {
      snapshot.forEach(function (child) {
        commit('addBooking', child.val())
      })
    })
    console.log(this.getters.bookings)
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
