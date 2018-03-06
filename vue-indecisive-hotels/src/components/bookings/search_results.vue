<template>
  <v-container style="max-width: 1200px" py-0 px-0>
    <search-hotels bar="true" />
    <section>
      <v-container d-flex class="text-xs-center">
        <v-layout column align-center>
          <v-flex xs12>
            <search-card></search-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-container>
</template>

<script>
  import searchCard from './search_card'
  export default {
    data () {
      return {
        // Any variable data should go in here
      }
    },
    computed: {
      // Any variables that need to be dynamically recomputed go in here
    },
    components: {
      'search-card': searchCard
    }
  }
</script>