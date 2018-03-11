import * as googleplaces from 'googleplaces'
const state = {
  longitude: null,
  latitude: null,
  locationLoading: false,
  locationError: null
}

const getters = {
  longitude (state) {
    return state.longitude
  },
  latitude (state) {
    return state.latitude
  },
  locationLoading (state) {
    return state.locationLoading
  },
  locationError (state) {
    return state.locationError
  }
}

const mutations = {
  setLongitude (state, payload) {
    state.longitude = payload
  },
  setLatitude (state, payload) {
    state.longitude = payload
  },
  setLocationLoading (state, payload) {
    state.locationLoading = payload
  },
  setLocationError (state, payload) {
    state.error = payload
  },
  clearLocationError (state, payload) {
    state.error = null
  }
}

const actions = {
  findPlaces({commit}){

    console.log('finding places...')
    var assert = require('assert')
    var googlePlacesReq = require('googleplaces')
    console.log('required')
    var googlePlacesInstance = new googleplaces()
    console.log(googlePlacesInstance)
    // UNFINISHED
    var nearBySearch = googlePlacesInstance.nearBySearch({'AIzaSyB_QVILHYo25sC2lWgN2RWXswo8LTFu-ME', 'json'}, )
    console.log('called nearbysearch')
    var parameters = {
      location: [40.7127, -74.0059],
      keyword: "doctor"
    };
    nearBySearch(parameters, function (error, response) {
      if (error) throw error;
      assert.notEqual(response.results.length, 0, 'Place search must not return 0 results');
    });
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
