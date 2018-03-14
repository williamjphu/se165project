/* eslint-disable */
const state = {
  location: {
    lat: null,
    lng: null
  },
  showMap: false,
  radius: 1000,
  locationLoading: false,
  locationError: null,
  sort: '',
  hotels: []
}

const getters = {
  longitude (state) {
    return state.location.lng
  },
  latitude (state) {
    return state.location.lat
  },
  locationLoading (state) {
    return state.locationLoading
  },
  locationError (state) {
    return state.locationError
  },
  getHotels (state) {
    return state.hotels
  },
  getSort (state) {
    return state.sort
  },
  getShowMap (state) {
    return state.showMap
  }
}

const mutations = {
  setLongitude (state, payload) {
    state.location.lng = payload
  },
  setLatitude (state, payload) {
    state.location.lat = payload
  },
  setLocationLoading (state, payload) {
    state.locationLoading = payload
  },
  setLocationError (state, payload) {
    state.error = payload
  },
  clearLocationError (state, payload) {
    state.error = null
  },
  setSort (state, payload) {
    state.sort = payload
  },
  clearHotels (state) {
    state.hotels = []
  },
  addHotel (state, payload) {
    state.hotels.push(payload)
  },
  setShowMap (state, payload) {
    state.showMap = payload
  }
}

const actions = {
  findPlaces ({ commit, state }, payload) {
    console.log(payload)
    commit('setLocationLoading', true)
    commit('clearHotels')
    commit('setLatitude', payload.lat)
    commit('setLongitude', payload.lng)
    console.log(state.location)
    var map = new google.maps.Map(document.getElementById('searchMap'), {
      center: state.location,
      zoom: 15
    })
    var request = {
      location: state.location,
      radius: state.radius,
      keyword: 'hotel',
      type: ['lodging']
    }
    var infoWindow = new google.maps.InfoWindow()
    var service = new google.maps.places.PlacesService(map)
    service.nearbySearch(request, function(results, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.error(status)
        return
      }
      for (var i = 0, place; place = results[i]; i++) {
        (function(arg) {
          arg = place
          commit('addHotel', place)
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          })
          google.maps.event.addListener(marker, 'click', function() {
            var request = {placeId: arg.place_id}

            service.getDetails(request, function(result, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                console.error(status)
                return
              }
              console.log(result)
              infoWindow.setContent(result.name)
              infoWindow.open(map, marker)
            })
          })
        })()
      }
      console.log(state.hotels)
      commit('setLocationLoading', false)
    })
    // console.log('finding places...')
    // var assert = require('assert')
    // var googlePlacesReq = require('googleplaces')
    // console.log('required')
    // console.log(cors())
    // var googlePlacesInstance = new googleplaces('AIzaSyB_QVILHYo25sC2lWgN2RWXswo8LTFu-ME','json')
    // console.log(googlePlacesInstance)
    // var parameters = {
    //   location: [40.7127, -74.0059],
    //   keyword: "doctor"
    // };
    // console.log(googlePlacesInstance.nearBySearch(parameters, function(err, res){
    //   if (err){
    //     console.log("there's an error");
    //   }
    // }))
    // UNFINISHED
    // var nearBySearch = googlePlacesInstance.nearBySearch('AIzaSyB_QVILHYo25sC2lWgN2RWXswo8LTFu-ME','json')
    // console.log(googlePlacesInstance().nearBySearch())
   
    // var nearBySearch = googlePlacesInstance.nearBySearch(parameters, function (error, response) {
    //   if (error) throw error;
    //   assert.notEqual(response.results.length, 0, 'Place search must not return 0 results');
    // });
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
