<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" :overlay="false">
      <v-card>
        <v-toolbar dark color="brown darken-2">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Show on map</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div class="google-map" :id="name"></div>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'google-map',
    props: ['name'],
    computed: {
      dialog: {
        set (payload) {
          this.$store.commit('setShowMap', payload)
        },
        get () {
          return this.$store.getters.getShowMap
        }
      }
    },
    /* eslint-disable */
    mounted () {
      const element = document.getElementById(this.name)
      const options = {
        zoom: 13,
        center: new google.maps.LatLng(51.501527,-0.1921837)
      }
      const map = new google.maps.Map(element, options)
    }
    /* eslint-enable */
  }
</script>

<style scoped>
  .google-map {
    min-height: 600px;
    min-width: 360px;
  }
</style>