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
              <span class="display-3" v-if="hotels.length < 1">No results match your search criteria!</span>
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
        var filters = this.$store.getters.getFilters
        if (sort === 'Z to A') {
          hotels = hotels.sort((a, b) => b.name.localeCompare(a.name))
        } else if (sort === 'A to Z') {
          hotels = hotels.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sort === 'Most expensive') {
          hotels = hotels.sort((a, b) => b.rounded_price - a.rounded_price)
        } else if (sort === 'Cheapest') {
          hotels = hotels.sort((a, b) => a.rounded_price - b.rounded_price)
        } else if (sort === 'Closest') {
          hotels = hotels.sort((a, b) => a.distance.value - b.distance.value)
        } else if (sort === 'Farthest') {
          hotels = hotels.sort((a, b) => b.distance.value - a.distance.value)
        } else if (sort === 'Most stars') {
          hotels = hotels.sort((a, b) => (b.rating || 3) - (a.rating || 3))
        }
        hotels = hotels.filter(hotel => hotel.rounded_price >= filters.price.value[0])
        hotels = hotels.filter(hotel => hotel.rounded_price <= filters.price.value[1])
        hotels = hotels.filter(hotel => (hotel.distance === undefined ? 0 : hotel.distance.value) >= filters.distance.value[0])
        hotels = hotels.filter(hotel => (hotel.distance === undefined ? 50 : hotel.distance.value) <= filters.distance.value[1])
        hotels = hotels.filter(hotel => (hotel.rating || 3) >= filters.rating.value[0])
        hotels = hotels.filter(hotel => (hotel.rating || 3) <= filters.rating.value[1])
        return hotels
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