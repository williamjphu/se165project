<template>
  <v-card>
  <v-container fluid py-2 px-2>
    <v-layout row wrap>
      <v-flex xs12>
        <v-btn @click.stop="showMap" block color="blue-grey darken-2" dark>{{ text['Show map'] }}</v-btn>
      </v-flex>
      <v-flex xs12>
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="title">{{ text['Sort from'] }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </v-list>
        <v-list dense>
          <v-list-tile v-for="item in sorts" :key="item.title" @click="setSort(item.title)" :class="item.active ? 'primary--text' : 'black--text'">
            <v-list-tile-content>
              <v-list-tile-title>{{ text[item.title] }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12 class="text-xs-left">
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title class="title">{{ text['Filters'] }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </v-list>
        <span>{{ text['Max price']}}</span>
        <vue-slider
          ref="slider"
          v-model="filters.price.value"
          tooltip="hover"
          tooltip-dir="bottom"
          :min="filters.price.range[0]"
          :max="filters.price.range[1]"
          :formatter="(v) => '$' + v"
          use-keyboard
        ></vue-slider>
        <span>{{ text['Max distance']}}</span>
        <vue-slider
          ref="slider2"
          v-model="filters.distance.value"
          tooltip="hover"
          tooltip-dir="bottom"
          :min="filters.distance.range[0]"
          :max="filters.distance.range[1]"
          :formatter="(v) => Math.round(v * 0.00621371)/10 + ' miles'"
          :interval="160"
          use-keyboard
        ></vue-slider>
        <span>{{ text['Most stars']}}</span>
        <vue-slider
          ref="slider3"
          v-model="filters.rating.value"
          tooltip="hover"
          tooltip-dir="bottom"
          :min="filters.rating.range[0]"
          :max="filters.rating.range[1]"
          :formatter="(v) => v + ' stars'"
          use-keyboard
        ></vue-slider>
      </v-flex>
    </v-layout>
  </v-container>
</v-card>
</template>

<script>
  import VueSlider from 'vue-slider-component'
  export default {
    components: {
      VueSlider
    },
    data () {
      return {
        sorts: [
          {
            title: 'A to Z',
            active: false
          },
          {
            title: 'Z to A',
            active: false
          },
          {
            title: 'Closest',
            active: false
          },
          {
            title: 'Farthest',
            active: false
          },
          {
            title: 'Most expensive',
            active: false
          },
          {
            title: 'Cheapest',
            active: false
          },
          {
            title: 'Most stars',
            active: false
          }
        ]
      }
    },
    computed: {
      text () {
        return this.$store.getters.text
      },
      filters: {
        set (value) {
          this.$store.commit('setFilters', value)
        },
        get () {
          return this.$store.getters.getFilters
        }
      }
    },
    methods: {
      setSort (payload) {
        for (var i in this.sorts) {
          var item = this.sorts[i]
          if (item.title === payload) {
            item.active = true
          } else {
            item.active = false
          }
        }
        this.$store.commit('setSort', payload)
      },
      showMap () {
        this.$store.commit('setShowMap', true)
      }
    }
  }
</script>