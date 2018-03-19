<template>
  <v-container fluid py-2 px-2>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-card color="grey lighten-4">
          <v-container fluid py-0 px-0 grid-list-xs class="text-xs-left">
            <v-layout row wrap>
              <v-flex d-flex xs12 sm5 md3>
                <v-container fluid px-0 py-0>
                  <v-layout row wrap>
                    <v-flex d-flex xs12>
                      <v-card-media :src="image" height="192"></v-card-media>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex d-flex xs12 sm7 md9>
                <v-container py-0 px-0 fluid>
                  <v-layout row wrap>
                    <v-flex d-flex xs12 md8>
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
                                :max-rating="rating"
                                inline
                                active-color="#FFB300"
                                v-model="rating">
                              </vue-star-rating><br>
                              {{ hotel.vicinity }}
                            </span>
                          </v-flex>
                          <v-flex xs12 class="text-xs-right">
                            <v-btn @click.stop="onDetailsClicked" color="brown" dark>More details</v-btn>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-flex>
                    <v-flex d-flex xs12 md4>
                      <v-container fill-height fluid px-2 class="text-xs-center text-md-right" style="background-color: #FFFFFF;">
                        <v-layout row wrap>
                          <v-flex d-flex xs5 md12>
                            <v-container fluid py-0 px-0>
                              <v-layout row wrap>
                                <v-flex xs12 md6 lg8>
                                  <span class="caption">Others say<br></span>
                                  <span class="body-1">{{ customerRating }}</span>
                                </v-flex>
                                <v-flex xs12 md6 lg4>
                                  <v-chip label color="primary" text-color="white">
                                    <span class="headline">{{ hotel.rating || '-' }}</span>
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
                                      <v-icon left>label</v-icon><span class="subheading">{{ discount }}% OFF</span>
                                    </v-chip>
                                  </span>
                                </v-flex>
                                <v-flex xs12>
                                  <span class="caption grey--text text--lighten-1">Nightly rates as low as <br/></span>
                                  <span class="subheading grey--text text--lighten-1"><s>${{ originalRate }}</s>
                                  </span>
                                  <span class="display-1 red--text text--lighten-1">${{ lowestRate }}</span>
                                </v-flex>
                              </v-layout>
                            </v-container>
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
    props: ['hotel'],
    computed: {
      discount () {
        // Determines the low rate
        return this.hotel.discount
      },
      originalRate () {
        return this.hotel.rounded_price
      },
      lowestRate () {
        return (this.originalRate - this.discount / 100 * this.originalRate).toFixed()
      },
      rating () {
        return Math.round(this.hotel.rating || 3)
      },
      image () {
        return typeof this.hotel.photos !== 'undefined'
          ? this.hotel.photos[0].getUrl({'maxWidth': 960, 'maxHeight': 960}) : 'http://experienceidyllwild.com/images/no-image-available2.jpg'
      },
      customerRating () {
        const rating = this.hotel.rating || 0
        if (rating >= 4.5) {
          return 'Excellent!'
        } else if (rating >= 4.0) {
          return 'Great!'
        } else if (rating >= 3.5) {
          return 'Good'
        } else if (rating >= 3.0) {
          return 'Average'
        } else if (rating >= 2.0) {
          return 'Poor'
        } else if (rating === 0) {
          return 'Not rated'
        } else {
          return 'Terrible'
        }
      }
    },
    methods: {
      onDetailsClicked (event) {
        this.$emit('hotelSelected', this.hotel)
      }
    }
  }
</script>