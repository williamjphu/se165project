<template>
  <v-container style="max-width: 1200px" class="py-0 px-0">
    <section>
      <v-container d-flex class="text-xs-center" style="text-shadow: 1px 1px #111111;">
        <v-layout column align-center>
          <v-flex xs12>
            <h3 class="display-2">Cameron :)</h3>
          
            <v-flex
              pa-3
              v-for="n in 9"
              :key="n"
            >
            <v-card>
        <v-card-media src="https://imageserver-bisnow1.netdna-ssl.com/r6Lny5c7mIylpgQRrk1c5_xsk5Q=/0x0/publisher/59050a4778517_Screen_Shot_2017_04_29_at_5_48_14_PM.png" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{booking.hotel}}</h3>
            <div>{{booking.location}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="brown darken-2">View Details</v-btn>
          <v-btn flat color="brown darken-2">Modify</v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
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
        booking:{
          hotel: "Cameron's Hotel", 
          location: "Noord, Aruba",
          startDate: "Mar 21",
          endDate: "Mar 24",
          picture: "https://imageserver-bisnow1.netdna-ssl.com/r6Lny5c7mIylpgQRrk1c5_xsk5Q=/0x0/publisher/59050a4778517_Screen_Shot_2017_04_29_at_5_48_14_PM.png"
        }

      }
    },
    computed: {
      // Any variables that need to be dynamically recomputed go in here
    }
  }
</script>