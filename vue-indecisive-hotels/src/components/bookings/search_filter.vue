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
            <v-btn color="grey lighten-4" block @click="setSort('Most expensive')">
              Most expensive
            </v-btn>
            <v-btn color="grey lighten-4" block @click="setSort('Most stars')">
              Most stars
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
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        sortMethod: 'Sort by'
      }
    },
    methods: {
      setSort (payload) {
        this.sortMethod = 'Sort from ' + payload
        this.$store.commit('setSort', payload)
      }
    }
  }
</script>