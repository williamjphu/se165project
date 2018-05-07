import * as firebase from 'firebase'
/* eslint-disable */
const state = {
  bookings: [],
  bookingLoading: false,
  bookingError: null,
  redeemPointsEligible: false,
  rewardPoints: 0,
  REDEEM_AMOUNT: 10
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
  },
  rewardPoints (state) {
    return state.rewardPoints
  },
  redeemAmount (state) {
    return state.REDEEM_AMOUNT
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
  },
  setRewardPoints (state, payload) {
    state.rewardPoints = payload
  }
}

const actions = {
  checkDoubleBooking ({ commit, state }, payload) {
    var dateIn = new Date(payload.dateIn)
    var dateOut = new Date(payload.dateOut)
    for (var i = 0; i < state.bookings.length; i++) {
      var b = state.bookings[i]
      var dateIn2 = new Date(b.bookingDetails.dateIn)
      var dateOut2 = new Date(b.bookingDetails.dateOut)
      if ((dateIn >= dateIn2 && dateIn < dateOut2) || (dateOut >= dateIn2 && dateOut < dateOut2)) {
        commit('setBookingLoading', false)
        commit('setBookingError', { message: 'Double bookings are not allowed! Please select different dates!' })
        return true
      }
    }
    return false
  },
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
              if (user.rewardPoints >= state.REDEEM_AMOUNT) {
                commit('setRedeemPointsEligible', true)
              }
              console.log('rewards', user.rewardPoints)
              commit('setRewardPoints', user.rewardPoints)
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
        var b = child.val()
        b.id = child.key
        commit('addBooking', b)
      })
    })
    console.log(this.getters.bookings)
  },
  editBooking ({ commit }, payload) {
    var bookingId = payload.id
    var bookingRef = firebase.database().ref('bookings').child(this.getters.user.id).child(bookingId).child('bookingDetails')
    bookingRef.set(payload.bookingDetails)
      .then(booking => {
        this.dispatch('retrieveBookings')
      })
  },
  deleteBooking ({ commit }, payload) {
    // change to take payload
    var bookingId = payload
    var bookingRef = firebase.database().ref('bookings').child(this.getters.user.id).child(bookingId)
    var bookingDetailsRef = firebase.database().ref('bookings/' + this.getters.user.id + '/' + bookingId + '/bookingDetails')
    .once('value').then(function (snapshot) {
      var paymentID = snapshot.val().paymentChargeID
      console.log(paymentID)
      var qs = require('querystring')
      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer sk_test_KpgWOHEURMabGzFuRHdnJK5M'
        }
      }
      axios.post('https://api.stripe.com/v1/refunds', qs.stringify({
        charge: paymentID
      }), config)
    }).then(response => {
      console.log('Refund was successfully issued')
      alert('Your refund is being processed, Please allow 5-10 business days to reflect changes on your credit card')
      // Remove booking from Firebase 
      bookingRef.remove()
    }).catch(err => {
      console.log('ERROR: Refund was NOT successfully issued')
      commit('setBookingError', err)
      console.log(err)
    })
  },
  redeemPoints ({ commit }) {
    var rewardsRef = firebase.database().ref('users').child(this.getters.user.id)
    rewardsRef.transaction(function (user) {
      if (user) {
        if (user) {
          if (user.rewardPoints >= state.REDEEM_AMOUNT) {
            user.rewardPoints = user.rewardPoints - state.REDEEM_AMOUNT
            console.log('rewards', user.rewardPoints)
            if (user.rewardPoints < state.REDEEM_AMOUNT) {
              commit('setRedeemPointsEligible', false)
            }
            commit('setRewardPoints', user.rewardPoints)
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

  checkPointsEligible ({ commit }) {
    var ref = firebase.database().ref('users/' + this.getters.user.id)

    ref.on('value', function (snapshot) {
      if (snapshot.val().rewardPoints >= state.REDEEM_AMOUNT) {
        commit('setRedeemPointsEligible', true)
      } else {
        commit('setRedeemPointsEligible', false)
      }
      commit('setRewardPoints', snapshot.val().rewardPoints)
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
