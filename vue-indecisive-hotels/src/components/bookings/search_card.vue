<template>
  <v-container fluid py-2 px-2>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-card color="grey lighten-4">
          <v-container fluid py-0 px-0 grid-list-xs class="text-xs-left">
            <v-layout row wrap>
              <v-flex d-flex xs12 md3>
                <v-container fluid px-0 py-0>
                  <v-layout row wrap>
                    <v-flex d-flex xs12 sm6 md12>
                      <v-card-media :src="hotel.images[0]" height="128"></v-card-media>
                    </v-flex>
                    <v-flex d-flex sm6 md12 v-if="!$vuetify.breakpoint.xsOnly">
                      <v-container fluid px-0 py-0>
                        <v-layout row wrap>
                          <v-flex d-flex sm6>
                            <v-card-media :src="hotel.images[1]" height="64"></v-card-media>
                          </v-flex>
                          <v-flex d-flex sm6>
                            <v-card-media :src="hotel.images[2]" height="64"></v-card-media>
                          </v-flex>
                          <v-flex d-flex sm6 v-if="$vuetify.breakpoint.smAndDown">
                            <v-card-media :src="hotel.images[3]" height="64"></v-card-media>
                          </v-flex>
                          <v-flex d-flex sm6 v-if="$vuetify.breakpoint.smAndDown">
                            <v-card-media :src="hotel.images[4]" height="64"></v-card-media>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex d-flex xs12 sm6 md6>
                <v-container fill-height fluid>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <span class="title">{{ hotel.name }}</span>
                    </v-flex>
                    <v-flex xs12>
                      <span class="subheading">
                        <vue-star-rating
                          :star-size=15
                          :show-rating=false
                          read-only
                          inline
                          v-model="hotel.stars">
                        </vue-star-rating>
                        {{ hotel.address }}
                      </span>
                    </v-flex>
                    <v-flex xs12 py-0 v-if="!$vuetify.breakpoint.xsOnly">
                      <v-chip label color="green" text-color="white">Offers</v-chip>
                      <v-chip label outline color="green" text-color="green" v-for="item in hotel.offers" :key="item">{{ item }}</v-chip>
                    </v-flex>
                    <v-flex xs12 py-0 v-if="!$vuetify.breakpoint.xsOnly">
                      <v-chip label color="orange" text-color="white">Options</v-chip>
                      <v-chip label outline color="orange" text-color="orange" v-for="item in hotel.options" :key="item">{{ item }}</v-chip>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex d-flex xs12 sm6 md3>
                <v-container fill-height fluid px-2 class="text-xs-center text-md-right" style="background-color: #FFFFFF;">
                  <v-layout row wrap>
                    <v-flex d-flex xs5 md12>
                      <v-container fluid py-0 px-0>
                        <v-layout row wrap>
                          <v-flex xs12 md6 lg8>
                            <span class="body-1">{{ customerRating }}<br></span>
                            <span class="caption">{{ hotel.reviewsCount }} reviews</span>
                          </v-flex>
                          <v-flex xs12 md6 lg4>
                            <v-chip label color="primary" text-color="white">
                              <span class="headline">{{ hotel.reviewsAverage }}</span>
                            </v-chip>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-flex>
                    <v-flex d-flex xs7 md12>
                      <v-container fluid py-0 px-0>
                        <v-layout row wrap>
                          <v-flex xs12>
                            <span class="subheading">
                              <v-chip label color="error" text-color="white">
                                <v-icon left>label</v-icon>{{ discount }}% OFF TODAY
                              </v-chip>
                            </span>
                          </v-flex>
                          <v-flex xs12>
                            <span class="caption grey--text text--lighten-1">Nightly rates as low as <br/></span>
                            <span class="subheading grey--text text--lighten-1"><s>${{ hotel.originalRate }}</s>
                            </span>
                            <span class="display-1 red--text text--lighten-1">${{ hotel.lowestRate }}</span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-flex>
                  </v-layout>
                </v-container>
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
        // Any variable data should go in here
        hotel: {
          name: 'Hotel Indecisive',
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
        }
      }
    },
    computed: {
      discount () {
        return Math.round((this.hotel.originalRate - this.hotel.lowestRate) / (this.hotel.originalRate) * 100)
      },
      customerRating () {
        const rating = this.hotel.reviewsAverage
        if (rating >= 9.0) {
          return 'Excellent!'
        } else if (rating >= 8.0) {
          return 'Great!'
        } else if (rating >= 7.0) {
          return 'Good'
        } else if (rating >= 6.0) {
          return 'Average'
        } else if (rating >= 5.0) {
          return 'Poor'
        } else {
          return 'Terrible'
        }
      }
    }
  }
</script>