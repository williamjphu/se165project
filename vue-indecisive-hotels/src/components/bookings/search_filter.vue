<template>
  <v-container fluid py-2 px-2>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-expansion-panel expand>
          <v-expansion-panel-content>
            <div slot="header">{{ sortMethod }}</div>
            <v-btn color="grey lighten-4" block @click="setSort('A to Z')">
              A to Z
            </v-btn>
            <v-btn color="grey lighten-4" block @click="setSort('Z to A')">
              Z to A
            </v-btn>
            <v-btn color="grey lighten-4" block @click="setSort('Cheapest')">
              Cheapest
            </v-btn>
            <v-btn color="grey lighten-4" block @click="setSort('Most Expensive')">
              Most Expensive
            </v-btn>
            <v-btn color="grey lighten-4" block @click="setSort('Closest')">
              Closest
            </v-btn>
            <v-btn color="grey lighten-4" block @click="setSort('Farthest')">
              Farthest
            </v-btn>
            <v-btn color="grey lighten-4" block @click="setSort('Most Stars')">
              Most Stars
            </v-btn>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <div slot="header">Filter By</div>
            <v-card>
              <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
      <v-flex d-flex xs12>
        <v-btn @click.stop="showMap" block color="brown darken-2" dark>Show Map</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        sortMethod: 'Sort by',
        filters: {
          price: {
            min: 0,
            max: 0
          },
          distance: {
            min: 0,
            max: 0
          },
          rating: {
            min: 0,
            max: 0
          }
        }
      }
    },
    computed: {
      storeFilters () {
        return this.$store.getters.filters
      }
    },
    methods: {
      setSort (payload) {
        this.sortMethod = 'Sort by ' + payload
        this.$store.commit('setSort', payload)
      },
      showMap () {
        this.$store.commit('setShowMap', true)
      },
      setFilters () {
        this.$store.commit('setFilters', this.filters)
      }
    },
    watch: {
      filters () {
        this.setFilters()
      },
      storeFilters () {
        this.filters = this.$store.getters.filters
      }
    }
  }
</script>