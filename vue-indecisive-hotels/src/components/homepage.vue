<template>
  <v-container fluid py-0 px-0>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="flx-embed"><div style="position:relative; height:0; padding-bottom:56.26%; width:100%"><iframe style="position:absolute; top:0; left:0; width:100%; height:100%;" src="https://media.flixel.com/cinemagraph/6vvfcjlluysi2d71rnk8?hd=true" frameborder="0" allowfullscreen allow='autoplay'></iframe>
        <search-hotels v-if="$vuetify.breakpoint.mdAndUp"></search-hotels></div></div>
      </v-flex>
      <v-flex xs12 sm8 offset-sm2>
        <search-hotels v-if="$vuetify.breakpoint.smAndDown"></search-hotels>
      </v-flex>
    </v-layout>
    <section>
      <v-container grid-list-xl>
        <v-layout row justify-space-between>
          <v-flex d-flex xs12>
            <span class="display-1 text-xs-center blue-grey--text text--darken-2">{{ text['Popular destinations'] }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-layout row wrap>
              <v-flex d-flex xs12 md6 lg4 v-for="i in 6" :key="i">
                <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="200px" dark>
                  <v-card-title class="subheading">Karlovy Vary</v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-container>
</template>

<script>
  export default {
    computed: {
      text () {
        return this.$store.getters.text
      }
    },
    methods: {
      frameClicked () {
        return false
      }
    }
  }
</script>