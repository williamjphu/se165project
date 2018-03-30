/* eslint-disable */
const state = {
  location: null,
  showMap: false,
  searchRadius: 1000,
  locationLoading: false,
  locationError: null,
  sort: '',
  hotels: []
}

const getters = {
  location (state) {
    return state.location
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
  setLocation (state, payload) {
    state.location = payload
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
    // borrowed code
    // from https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
    String.prototype.hashCode = function() {      
      var hash = 0, i, char
      for (i = 0; i < this.length; i++) {
          char = this.charCodeAt(i);
          hash = char + (hash << 6) + (hash << 16) - hash;
          hash |= 0 // Convert to 32bit integer
      }
      return hash;
    }
    
    // from https://stackoverflow.com/questions/36575743/how-do-i-convert-probability-into-z-score/36903699#36903699
    var Z_MAX = 6;
    function poz(z) {
      var y, x, w;
      
      if (z == 0.0) {
        x = 0.0;
      } else {
        y = 0.5 * Math.abs(z);
        if (y > (Z_MAX * 0.5)) {
          x = 1.0;
        } else if (y < 1.0) {
          w = y * y;
          x = ((((((((0.000124818987 * w
              - 0.001075204047) * w + 0.005198775019) * w
              - 0.019198292004) * w + 0.059054035642) * w
              - 0.151968751364) * w + 0.319152932694) * w
              - 0.531923007300) * w + 0.797884560593) * y * 2.0;
        } else {
          y -= 2.0;
          x = (((((((((((((-0.000045255659 * y
              + 0.000152529290) * y - 0.000019538132) * y
              - 0.000676904986) * y + 0.001390604284) * y
              - 0.000794620820) * y - 0.002034254874) * y
              + 0.006549791214) * y - 0.010557625006) * y
              + 0.011630447319) * y - 0.009279453341) * y
              + 0.005353579108) * y - 0.002141268741) * y
              + 0.000535310849) * y + 0.999936657524;
        }
      }
      return z > 0.0 ? ((x + 1.0) * 0.5) : ((1.0 - x) * 0.5);
    }
    
    
    /*  CRITZ  --  Compute critical normal z value to
                   produce given p.  We just do a bisection
                   search for a value within CHI_EPSILON,
                   relying on the monotonicity of pochisq().  */
    
    function critz(p) {
      var Z_EPSILON = 0.000001;     /* Accuracy of z approximation */
      var minz = -Z_MAX;
      var maxz = Z_MAX;
      var zval = 0.0;
      var pval;
      if( p < 0.0 ) p = 0.0;
      if( p > 1.0 ) p = 1.0;
      
      while ((maxz - minz) > Z_EPSILON) {
        pval = poz(zval);
        if (pval > p) {
          maxz = zval;
        } else {
          minz = zval;
        }
        zval = (maxz + minz) * 0.5;
      }
      return(zval);
    }
    // end borrowed code
    
    // Calculate price for hotel by hashing the name
    const MIN_PRICE = 60
    const MAX_PRICE = 300
    const TARGET_AVERAGE = 140
    const AVERAGE_PRICE = (MAX_PRICE + MIN_PRICE) / 2
    const DEV_COUNT = 2.5 // inversely proportional to variance
    const DEVIATION = Math.sqrt(Math.pow(MAX_PRICE - AVERAGE_PRICE, 2) * 2) / DEV_COUNT
    
    let hash = Math.abs(payload.name.hashCode())
    
    let sum = 0, temp = hash + 0
    while (temp > 0) {
      sum += temp % 10
      temp = Math.floor(temp / 10)
    }

    let percentile = (sum % 82) / 100 // 82 is sum of digits of 1,999,999,999: max sum for abs(32-bit int)
    
    let z = critz(percentile)
    
    let price = z * DEVIATION + TARGET_AVERAGE
    let discount = (hash % 10) + 10
    
    payload.price = price.toFixed(2)
    payload.rounded_price = (price).toFixed()
    payload.discount = discount
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
    commit('setLocation', payload.location)
    console.log(state.location)
    var map = new google.maps.Map(document.getElementById('searchMap'), {
      center: state.location,
      zoom: 12 // TODO Would like to calculate off of searchRadius at some point
    })
    var request = {
      location: state.location,
      radius: state.searchRadius,
      keyword: 'hotel',
      type: ['lodging']
    }
    var infoWindow = new google.maps.InfoWindow()
    var service = new google.maps.places.PlacesService(map)
    service.nearbySearch(request, function(results, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.error(status)
      } else {
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
