import * as firebase from 'firebase'

const state = {
  booking: null,
  bookingLoading: false,
  bookingError: null
}

const getters = {
  booking (state) {
    return state.booking
  },
  bookingLoading (state) {
    return state.bookingLoading
  },
  bookingError (state) {
    return state.bookingError
  }
}

const mutations = {
  setBooking (state, payload) {
    state.booking = payload
  },
  setBookingLoading (state, payload) {
    state.bookingLoading = payload
  },
  setBookingError (state, payload) {
    state.bookingError = payload
  },
  clearBookingError (state, payload) {
    state.bookingError = null
  }
}

const actions = {
  createBooking ({commit}, payload) {
    commit('setBookingLoading', true)
    commit('clearBookingError')
    var database = firebase.database()
    var hotel = {
      id: payload.selectedHotel.id,
      name: payload.selectedHotel.name,
      rating: payload.selectedHotel.rating,
      icon: payload.selectedHotel.icon,
      price: payload.selectedHotel.price
    }
    console.log('hotel data:', hotel)
    var bookingsRef = database.ref('bookings/' + this.getters.user.id)
    bookingsRef.push().set({
      hotel: hotel,
      payment: 'testpayment',
      startDate: 'testStartDate',
      endDate: 'testEndDate',
      rooms: 2,
      discountModifier: 'testDiscount',
      status: 'testStatus',
      createdAt: 'blah',
      updatedAt: 'blah'
    })
    .then(
      booking => {
        // commit('setBooking', )
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

  retrieveBookings ({ commit }, payload) {
    commit('setBookingLoading', true)
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
