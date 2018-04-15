<template>
  <v-container fluid py-0 px-1>
    <search-hotels bar="true" />
    <section>
      <v-container class="text-xs-center" py-0 px-0>
        <v-layout row wrap>
          <v-flex xs12 md3 :pr-4="!$vuetify.breakpoint.smAndDown">
            <v-card flat>
              <search-filter></search-filter>
            </v-card>
          </v-flex>
          <v-flex xs12 md9 v-if="!loading">
            <v-card flat>
              <search-card @hotelSelected="onHotelSelected" v-for="(hotel, i) in hotels" :key="i" :hotel="hotel"></search-card>
            </v-card>
          </v-flex>
          <v-flex xs12 md9 v-if="loading">
            <v-progress-linear indeterminate color="brown darken-2"></v-progress-linear>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-container>
</template>

<script>
  import searchCard from './search_card'
  import searchFilter from './search_filter'
  export default {
    data () {
      return {
        // Any variable data should go in here
      }
    },
    computed: {
      // Any variables that need to be dynamically recomputed go in here
      hotels () {
        var hotels = this.$store.getters.getHotels.concat()
        const sort = this.$store.getters.getSort
        if (sort === 'Z to A') {
          return hotels.sort((a, b) => b.name.localeCompare(a.name))
        } else if (sort === 'A to Z') {
          return hotels.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sort === 'Most expensive') {
          return hotels.sort((a, b) => b.rounded_price - a.rounded_price)
        } else if (sort === 'Cheapest') {
          return hotels.sort((a, b) => a.rounded_price - b.rounded_price)
        } else if (sort === 'Most stars') {
          return hotels.sort((a, b) => (b.rating || 3) - (a.rating || 3))
        } else {
          return hotels
        }
      },
      loading () {
        return this.$store.getters.locationLoading
      }
    },
    components: {
      'search-filter': searchFilter,
      'search-card': searchCard
    },
    methods: {
      onHotelSelected (value) {
        this.$emit('hotelSelected', value)
      }
    }
  }
</script>