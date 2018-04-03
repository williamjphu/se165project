import * as firebase from 'firebase'

const state = {
  bookings: [],
  bookingLoading: false,
  bookingError: null,
  redeemPointsEligible: false
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
  },
  redeemPointsEligible (state) {
    return state.redeemPointsEligible
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
  },
  setRedeemPointsEligible (state, payload) {
    state.redeemPointsEligible = payload
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
        var rewardsRef = firebase.database().ref('users').child(this.getters.user.id)

        rewardsRef.transaction(function (user) {
          if (user) {
            if (user) {
              user.rewardPoints++
              if (user.rewardPoints >= 10) {
                commit('setRedeemPointsEligible', true)
              }
              console.log('rewards', user.rewardPoints)
            } else {
              console.log('Reward points not successfully incremented')
            }
          }
          return user
        })
        console.log('eligible: ' + this.getters.redeemPointsEligible)
        dispatch('retrieveBookings')

        commit('setBookingLoading', false)
      }
    )
    .catch(
      error => {
        commit('setBookingLoading', false)
        commit('setBookingError', error)
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
  },

  redeemPoints ({ commit }) {
    var rewardsRef = firebase.database().ref('users').child(this.getters.user.id)
    rewardsRef.transaction(function (user) {
      if (user) {
        if (user) {
          if (user.rewardPoints >= 10) {
            user.rewardPoints = user.rewardPoints - 10
            console.log('rewards', user.rewardPoints)
            if (user.rewardPoints < 10) {
              commit('setRedeemPointsEligible', false)
            }
          } else {
            // show error here for the user!!
            console.log('Not enough points')
          }
        } else {
          console.log('Rewards not successfully incremented')
        }
      }
      return user
    })
    console.log('eligible: ' + this.getters.redeemPointsEligible)
  },

  checkPointsElegible ({ commit }) {
    var ref = firebase.database().ref('users/' + this.getters.user.id)

    ref.on('value', function (snapshot) {
      console.log('reward points: ' + snapshot.val().rewardPoints)
    }, function (error) {
      console.log('Error: ' + error.code)
    })
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
