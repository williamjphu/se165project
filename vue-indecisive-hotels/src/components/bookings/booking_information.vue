<template>
  <v-container fluid py-0 px-1>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-card flat>
          <v-container fluid grid-list-xl>
            <v-layout row wrap>
              <v-flex xs12 v-if="status === 'loaded'">
                <p class="headline" style="font-weight: 500;">{{ data.name }}
                  <vue-star-rating
                    :star-size=18
                    :show-rating=false
                    read-only
                    :max-rating="rating"
                    inline
                    active-color="#FFB300"
                    v-model="rating">
                  </vue-star-rating>
                </p>
              </v-flex>
              <v-flex xs12 md8 v-if="status === 'loaded'">
                <v-carousel v-if="images" interval="3000" style="height: 50vh">
                  <v-carousel-item v-for="(item, i) in images" :key="i" :src="item.getUrl({'maxWidth': 1920})"></v-carousel-item>
                </v-carousel>
              </v-flex>
              <v-flex d-flex xs12 md4>
                <div class="google-map" id="detail-map"></div>
              </v-flex>
              <v-flex xs12 md8 order-xs2 order-md1>
                <v-container fluid px-0 py-0 grid-list-xl v-if="status === 'loaded'">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <p class="title">
                        Distance and Weather
                      </p>
                      <p class="body-1">Distance from location: {{ data.distance.text }}</p>
                      <p class="body-1">Estimated Driving Duration: {{ data.duration.text }}</p>
                      <!-- TODO fix weather function before un-commenting <p class="body-1">Current Weather: {{ weather }}</p> -->
                    </v-flex><v-flex xs12>
                      <p class="title">
                        Amenities
                      </p>
                    </v-flex>
                    
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex xs12 md4 order-xs1 order-md2>
                <v-card color="grey lighten-2" v-if="status === 'loaded'">
                  <v-container fluid grid-list-lg>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <p class="title">
                          Booking Information
                        </p>
                        <v-container fluid px-0 py-0 grid-list-xs>
                          <v-layout row wrap>
                            <v-flex xs9 class="text-xs-left" pb-0>
                              Check In: 
                            </v-flex>
                            <v-flex xs3 class="text-xs-right" pb-0>
                              DATE IN
                            </v-flex>
                            <v-flex xs9 class="text-xs-left" py-0>
                              Check Out:
                            </v-flex>
                            <v-flex xs3 class="text-xs-right" py-0>
                              DATEOUT
                            </v-flex>
                            <v-flex xs9 class="text-xs-left" pt-0>
                              Total Cost:
                            </v-flex>
                            <v-flex xs3 class="text-xs-right green--text" pt-0>
                              $ TOTAL 
                            </v-flex>
                          </v-layout>
                        </v-container>
                       
                      </v-flex>
                      <v-flex xs12>
                        <p class="title">
                          Hotel Information
                        </p>
                        <p class="body-1">
                          <b>Address</b><br>{{ hotelDetails.formatted_address }}
                        </p>
                        <p class="body-1">
                          <b>Phone number</b><br>{{ hotelDetails.international_phone_number }}
                        </p>
                        <p class="body-1">
                          <a :href="hotelDetails.website" target="_blank"><b>Hotel Website</b></a>
                        </p>
                        <p class="body-1" v-if="hotelDetails.openingHours !== null && hotelDetails.openingHours !== undefined">
                          <b>Opening Hours:</b><br>
                          <span v-for="(day, i) in hotelDetails.opening_hours.weekday_text" :key="i"> {{ day }}<br></span>
                        </p>
                        <p class="body-1">
                          <a :href="hotelDetails.url" target="_blank"><b>Google Maps Details</b></a>
                        </p>
                      </v-flex>
                      
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        hotelDetails: null,
        status: 'loading'
      }
    },
    props: ['data'],
    /* eslint-disable */
    computed: {
      images () {
        if (this.hotelDetails === null || this.hotelDetails === undefined) {
          return null
        }
        return this.hotelDetails.photos
      },
      rating () {
        return Math.round(this.data.rating || 3)
      },
      query () {
        return this.$store.getters.getQuery
      },
      total () {
        return this.$store.getters.getQuery.nights * this.data.rounded_price * this.$store.getters.getQuery.rooms
      },
      weather () {
        // Weather at hotel
        var latlng = this.data.geometry.location.lat() + ',' + this.data.geometry.location.lng()

        // NOTE: Only 10 calls per minute allowed.
        // TODO weatherResponse is undefined when returning since callback is not complete
        var weatherResponse = axios.get('http://api.wunderground.com/api/b350991e46f0de04/geolookup/conditions/q/' + latlng + '.json').then(response => {
          return response.data
        })
        // With response data, this line will give the current temperature (read from json response; verified works)
        return weatherResponse['current_observation']['temperature_string']
      }
    },
    methods: {
      
    },
    watch: {
      data () {
        this.status = 'loading'
        if (this.data === null || this.data === undefined) {
          this.status = 'error'
          return
        }
        const element = document.getElementById('detail-map')
        const options = {
          zoom: 16,
          center: this.data.geometry.location
        }
        const map = new google.maps.Map(element, options)

        var marker = new google.maps.Marker({
          map: map,
          position: this.data.geometry.location
        })

        var service = new google.maps.places.PlacesService(map)
        service.getDetails({placeId: this.data.place_id}, (result, status) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK) {
            console.error(status)
            this.status = 'error'
            return
          }
          console.log('details result ', result)
          this.hotelDetails = result
          this.status = 'loaded'
        })

      
      }
    }
    /* eslint-enable */
  }
</script>

<style scoped>
  .google-map {
    min-height: 150px;
    min-width: 150px;
  }
</style>