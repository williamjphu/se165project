<template>
  <v-container style="max-width: 1200px" class="py-0 px-0">
    <section>
      <video v-bind:style="cinemagraphStyle" muted="muted" loop="loop" autoplay="autoplay" src="https://videos.pond5.com/cinemagraph-nordic-kitchen-3d-rendering-footage-067982190_main_xl.mp4"></video>
      <search-hotels/>
    </section>
    <section>
      <v-toolbar dense flat color="grey lighten-5"></v-toolbar>
    </section>
    <section>
      <v-parallax src="http://www.elitetraveler.com/wp-content/uploads/2013/06/Chicago-Trump.jpg">
        <v-container d-flex class="text-xs-center" style="text-shadow: 1px 1px #111111;">
          <v-layout column align-center>
            <v-flex xs12>
              <h3 class="display-3">{{ locale.companyName }}</h3>
            </v-flex>
            <v-flex xs12>
              <h3 class="display-1">{{ locale.homepageHook }}</h3>
              <p class="subheading">{{ locale.homepageDescText }}</p>
              <v-btn large color="white" light round class="mx-0">{{ locale.homepageLearnMoreBtn }}</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>
    <section>
      <v-container grid-list-xl>
        <v-layout row justify-space-between>
          <v-flex d-flex xs12>
            <span class="display-1 text-xs-center text-md-right brown--text text--darken-2">{{ locale.homepageDestinationHeader }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex d-flex xs12 md7 order-md2>
            <v-layout row wrap>
              <v-flex d-flex xs12 md6 v-for="i in 4" :key="i">
                <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="120px" dark>
                  <v-card-title class="subheading">Karlovy Vary</v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 md5>
            <v-card img="http://www.ronghuhotel.info/wp-content/uploads/2017/12/discounts-for-motels-motel-6-coupons-20-off-coupon-promo-code-december-2017-download.jpg" dark style="min-height: 160px">
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        locale: {
          companyName: 'Indecisive',
          homepageHook: 'Committed to Excellence',
          homepageDescText: 'Indecisive has been proudly providing a wide range of hotels and services to the State of California area since 2018. What differentiates us from other businesses is our ability to truly connect with our customers and provide the exceptional, compassionate service they deserve. To learn more, simply browse through our site.',
          homepageLearnMoreBtn: 'Learn More',
          homepageDestinationHeader: 'POPULAR HOTEL DESTINATIONS'
        }
      }
    },
    computed: {
      cinemagraphStyle () {
        return {
          position: (this.$vuetify.breakpoint.smAndDown ? 'relative' : 'absolute'),
          maxWidth: '1200px',
          width: '100%'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
