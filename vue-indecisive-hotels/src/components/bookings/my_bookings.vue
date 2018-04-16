<template>
  <v-container style="max-width: 1200px" py-0 px-0>
    <section>
      <v-container d-flex class="text-xs-center" style="text-shadow: 1px 1px #111111;">
        <v-layout column align-center>
          <h3 class="display-2">Cameron :)</h3>
          <br><br><br>

          <v-flex xs12> 
            <h3 class="display-2">Upcoming Bookings</h3>
            <v-layout row wrap>
             <v-flex pa-4

          v-for="n in 3"
          :key="n"
        >
            <v-layout>
            <v-card >
        <v-card-media src="https://imageserver-bisnow1.netdna-ssl.com/r6Lny5c7mIylpgQRrk1c5_xsk5Q=/0x0/publisher/59050a4778517_Screen_Shot_2017_04_29_at_5_48_14_PM.png" height="250px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{booking.hotel}}</h3>
            <div>{{booking.location}} </div>
            <br>
            <div> Check In: {{booking.startDate}} </div>
            <div> Check Out: {{booking.endDate}} </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="brown darken-2">View Details</v-btn>
          <v-btn flat color="brown darken-2">Modify</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
    </v-flex>
    </v-layout>
          </v-flex>


          <br><br>
          <v-flex xs12>
            <h3 class="display-2">Past Bookings</h3>
            <v-layout row wrap>
             <v-flex pa-4

          v-for="n in 6"
          :key="n"
        >
            
            <v-card>
        <v-card-media src="https://www.islands.com/sites/islands.com/files/styles/1000_1x_/public/images/2016/11/atlantis-bahamas-greek-10.jpg?itok=qlOLtdq9" height="250px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{booking.hotel}}</h3>
            <div>{{booking.location}} </div>
            <br>
            <div> Trip Dates: {{booking.startDate}} to {{booking.endDate}} </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="brown darken-2">View Details</v-btn>
        </v-card-actions>
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
    data () {
      return {
        booking: {
          hotel: 'Cameron\'s Hotel',
          location: 'Noord, Aruba',
          startDate: 'Mar 21',
          endDate: 'Mar 24',
          picture: 'https://imageserver-bisnow1.netdna-ssl.com/r6Lny5c7mIylpgQRrk1c5_xsk5Q=/0x0/publisher/59050a4778517_Screen_Shot_2017_04_29_at_5_48_14_PM.png',
          picture2: 'https://res.cloudinary.com/lastminute/image/upload/c_scale,w_630/v1430409557/SWIMMING_POOL_SP_NH_nice_019_hutqjx.jpg'
        }

      }
    },
    computed: {
      // Any variables that need to be dynamically recomputed go in here
    }
  }
</script>