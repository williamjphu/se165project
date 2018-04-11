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

          v-for="(booking, i) in bookings"
          :key="i"
        >
            <v-layout>
            <v-card >
        <v-card-media :src="booking.bookingDetails.photo" height="250px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{booking.bookingDetails.name}}</h3>
            <div>{{booking.address}} </div>
            <br>
            <div> Check In: {{booking.bookingDetails.dateIn}} </div>
            <div> Check Out: {{booking.bookingDetails.dateOut}} </div>
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

          v-for="(booking, i) in bookings"
          :key="i"
        >
            
            <v-card>
        <v-card-media :src="booking.bookingDetails.photo" height="250px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{booking.bookingDetails.name}}</h3>
            <div>{{booking.bookingDetails.address}} </div>
            <br>
            <div> Trip Dates: {{booking.bookingDetails.dateIn}} to {{booking.bookingDetails.dateOut}} </div>
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

    // data () {
    //   booking:
    //   return {
    //     booking: {
    //       hotel: 'Cameron\'s Hotel',
    //       location: 'Noord, Aruba',
    //       startDate: 'Mar 21',
    //       endDate: 'Mar 24',
    //       picture: 'https://imageserver-bisnow1.netdna-ssl.com/r6Lny5c7mIylpgQRrk1c5_xsk5Q=/0x0/publisher/59050a4778517_Screen_Shot_2017_04_29_at_5_48_14_PM.png',
    //       picture2: 'https://res.cloudinary.com/lastminute/image/upload/c_scale,w_630/v1430409557/SWIMMING_POOL_SP_NH_nice_019_hutqjx.jpg'
    //     }

      // }
    // },
    computed: {
      bookings () {
        return this.$store.getters.bookings
      }
    },
  methods: {

  }
}
  
</script>