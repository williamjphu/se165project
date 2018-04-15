<template>
  <v-container fluid py-0 px-1>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-card flat>
          <v-container fluid grid-list-xl>
            <v-layout row wrap>
              <v-flex xs12 v-if="status === 'loaded'">
                <p class="headline" style="font-weight: 500;"><v-btn icon outline color="grey darken-1" @click="onBackClicked"><v-icon>keyboard_arrow_left</v-icon></v-btn>{{ data.name }}
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
                      <span class="title">
                        Amenities
                      </span>
                    </v-flex>
                    <v-flex xs12>
                      <p class="title">
                        Reviews
                      </p>
                      <p class="subheading">Average user rating: <vue-star-rating :star-size=10 read-only inline v-model="hotelDetails.rating" :increment=0.1></vue-star-rating></p>
                      <v-container fluid grid-list-lg v-for="(review, i) in hotelDetails.reviews" :key="i">
                        <v-layout row wrap>
                          <v-flex sm2 lg1 v-if="!$vuetify.breakpoint.xsOnly" pt-4 pl-0>
                            <v-avatar size="50" tile>
                              <img :src="review.profile_photo_url">
                            </v-avatar>
                          </v-flex>
                          <v-flex xs12 sm10 lg11 d-flex>
                            <v-card>
                              <v-card-title><p><i><a :href="review.author_url" target="_blank">{{ review.author_name }}</a></i></p>
                                <p class="body-1">&nbsp;&nbsp;said {{ review.relative_time_description }}: <vue-star-rating inline :star-size=10 :show-rating=false read-only v-model="hotelDetails.rating" :increment=0.5></vue-star-rating></p><p>{{ review.text }}</p>
                              </v-card-title>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      <p class="body-1">
                        <a :href="hotelDetails.url" target="_blank"><b>Read more reviews on Google Places</b></a>
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
                        <v-container fluid px-0 py-0 grid-list-xs>
                          <v-layout row wrap>
                            <v-flex xs9 class="text-xs-left" pb-0>
                              Price for 1 night per room:
                            </v-flex>
                            <v-flex xs3 class="text-xs-right" pb-0>
                              $ {{ data.rounded_price }}
                            </v-flex>
                            <v-flex xs9 class="text-xs-left" py-0>
                              Price for {{ query.nights }} nights per room:
                            </v-flex>
                            <v-flex xs3 class="text-xs-right" py-0>
                              $ {{ query.nights * data.rounded_price }}
                            </v-flex>
                            <v-flex xs9 class="text-xs-left" pt-0>
                              Price for {{ query.nights }} nights for {{ query.rooms }} rooms:
                            </v-flex>
                            <v-flex xs3 class="text-xs-right green--text" pt-0>
                              $ {{ total }}
                            </v-flex>
                          </v-layout>
                        </v-container>
                        <v-btn block dark color="success" @click="onBookClicked">BOOK NOW</v-btn>
                      </v-flex>
                      <v-flex xs12>
                        <p class="title">
                          Hotel Information
                        </p>
                        <p class="body-1">
                          <b>Address:</b> {{ hotelDetails.formatted_address }}
                        </p>
                        <p class="body-1">
                          <b>Phone number:</b> {{ hotelDetails.international_phone_number }}
                        </p>
                        <p class="body-1">
                          <b>Website:</b> {{ hotelDetails.website }}
                        </p>
                        <p class="body-1" v-if="hotelDetails.openingHours !== null && hotelDetails.openingHours !== undefined">
                          <b>Opening Hours:</b><br>
                          <span v-for="(day, i) in hotelDetails.opening_hours.weekday_text" :key="i"> {{ day }}<br></span>
                        </p>
                        <p class="body-1">
                          <a :href="hotelDetails.url" target="_blank"><b>Click to see more on Google Places</b></a>
                        </p>
                      </v-flex>
                      <v-flex xs12 class="body-1 text-xs-center">
                        Want to explore other hotels?
                        <v-btn block dark color="grey darken-1" @click="onBackClicked">SEARCH AGAIN</v-btn>
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
      }
    },
    methods: {
      onBookClicked () {
        var hotel = {
          id: this.hotelDetails.place_id,
          name: this.hotelDetails.name,
          address: this.hotelDetails.formatted_address,
          phone: this.hotelDetails.international_phone_number,
          photo: typeof this.hotelDetails.photos !== 'undefined'
            ? this.hotelDetails.photos[0].getUrl({'maxWidth': 960, 'maxHeight': 960}) : 'http://experienceidyllwild.com/images/no-image-available2.jpg',
          price: this.data.rounded_price,
          rating: Math.round(this.data.rating || 3),
          rooms: this.$store.getters.getQuery.rooms,
          nights: this.$store.getters.getQuery.nights,
          dateIn: this.$store.getters.getQuery.dateIn,
          dateOut: this.$store.getters.getQuery.dateOut
        }
        console.log(hotel)
        this.$emit('bookClicked', hotel)
      },
      onBackClicked () {
        this.$emit('backClicked')
      }
    },
    /* eslint-disable */
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
          console.log(result)
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