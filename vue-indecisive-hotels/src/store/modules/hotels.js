import * as googleplaces from 'googleplaces'
import * as cors from 'cors'
/* eslint-disable */
const state = {
  longitude: null,
  latitude: null,
  locationLoading: false,
  locationError: null,
  sort: '',
  hotels: [
    {
      name: 'Independent Hotel',
      address: '1 Washington Square',
      city: 'San Jose',
      state: 'CA',
      country: 'United States',
      stars: 4,
      reviewsCount: 71,
      reviewsAverage: 7.9,
      originalRate: 519,
      lowestRate: 129,
      offers: ['Breakfast', 'Stuff', 'More stuff'],
      options: ['Something', 'Something else', 'More options'],
      images: ['https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg', 'https://az760333.vo.msecnd.net/-/media/property/jdv/vitale/vitale-guestroom-king-03-pd0912-crpd1600x760.jpg?ts=93e9e6c4-b97c-4307-93c4-443dda035aa5', 'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027', 'https://phgcdn.com/images/uploads/PARBH/corporatemasthead/hotel-balzac.jpg', 'https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg']
    },
    {
      name: 'Hotel Indecisive 2',
      address: '188 Moore Drive',
      city: 'Santa Clara',
      state: 'CA',
      country: 'United States',
      stars: 5,
      reviewsCount: 1990,
      reviewsAverage: 8.9,
      originalRate: 989,
      lowestRate: 449,
      offers: ['Breakfast', 'More stuff'],
      options: ['Something', 'More options'],
      images: ['https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg', 'https://az760333.vo.msecnd.net/-/media/property/jdv/vitale/vitale-guestroom-king-03-pd0912-crpd1600x760.jpg?ts=93e9e6c4-b97c-4307-93c4-443dda035aa5', 'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027', 'https://phgcdn.com/images/uploads/PARBH/corporatemasthead/hotel-balzac.jpg', 'https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg']
    },
    {
      name: 'Some other hotel',
      address: '1729 Sycamore Lake Rd',
      city: 'Houston',
      state: 'TX',
      country: 'United States',
      stars: 3,
      reviewsCount: 171,
      reviewsAverage: 6.3,
      originalRate: 299,
      lowestRate: 89,
      offers: [],
      options: ['Something', 'Something else', 'More options'],
      images: ['https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg', 'https://az760333.vo.msecnd.net/-/media/property/jdv/vitale/vitale-guestroom-king-03-pd0912-crpd1600x760.jpg?ts=93e9e6c4-b97c-4307-93c4-443dda035aa5', 'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027', 'https://phgcdn.com/images/uploads/PARBH/corporatemasthead/hotel-balzac.jpg', 'https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg']
    },
    {
      name: 'Hotel Imperial',
      address: '1223 Imperial St',
      city: 'Riverdale',
      state: 'NY',
      country: 'United States',
      stars: 4,
      reviewsCount: 271,
      reviewsAverage: 7.3,
      originalRate: 489,
      lowestRate: 229,
      offers: ['Breakfast', 'Stuff', 'More stuff'],
      options: ['Something', 'Something else', 'More options'],
      images: ['https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg', 'https://az760333.vo.msecnd.net/-/media/property/jdv/vitale/vitale-guestroom-king-03-pd0912-crpd1600x760.jpg?ts=93e9e6c4-b97c-4307-93c4-443dda035aa5', 'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027', 'https://phgcdn.com/images/uploads/PARBH/corporatemasthead/hotel-balzac.jpg', 'https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg']
    }
  ]
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
  },
  getHotels (state) {
    return state.hotels
  },
  getSort (state) {
    return state.sort
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
  },
  setSort (state, payload) {
    state.sort = payload
  }
}

const actions = {
  findPlaces({commit}){
    console.log('finding places...')
    var assert = require('assert')
    var googlePlacesReq = require('googleplaces')
    console.log('required')
    console.log(cors())
    var googlePlacesInstance = new googleplaces('AIzaSyB_QVILHYo25sC2lWgN2RWXswo8LTFu-ME','json')
    console.log(googlePlacesInstance)
    var parameters = {
      location: [40.7127, -74.0059],
      keyword: "doctor"
    };
    console.log(googlePlacesInstance.nearBySearch(parameters, function(err, res){
      if (err){
        console.log("there's an error");
      }
    }))
    // UNFINISHED
    //var nearBySearch = googlePlacesInstance.nearBySearch('AIzaSyB_QVILHYo25sC2lWgN2RWXswo8LTFu-ME','json')
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
