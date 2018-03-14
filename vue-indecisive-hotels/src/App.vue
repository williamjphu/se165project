<template>
  <v-app>
    <sidebar></sidebar>
    <navigationbar></navigationbar>
    <v-content>
      <router-view/>
      <google-map name="searchMap"></google-map>
    </v-content>
    <v-footer fixed app>
      <v-spacer></v-spacer>
      <span>&copy; Team Indecisive, 2018</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Indecisive Hotels',
      quote: '"The easiest you will ever make."'
    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  name: 'App'
}
</script>
