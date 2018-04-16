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

             <v-layout v-if="booking.status == 'pending' "> 
              <v-card >
                <v-card-media :src="booking.bookingDetails.photo" height="250px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{booking.bookingDetails.name}}</h3>
                    <div>{{booking.bookingDetails.address}} </div>
                    <br>
                    <div> Check In: {{booking.bookingDetails.dateIn}} </div>
                    <div> Check Out: {{booking.bookingDetails.dateOut}} </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="brown darken-2" @click = "bookingInformation" >Hotel Details</v-btn>
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
            <v-card  v-if="booking.status != 'pending' ">
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
                <v-btn @click = 'bookingInformation' flat color="brown darken-2">Hotel Details</v-btn>
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
      var time = new Date()
      return time
    },
    props: ['hotel'],
    computed: {
      bookings () {
        return this.$store.getters.bookings
      }
    },
    methods: {
      bookingInformation () {
        this.$router.replace('/bookinginformation')
        // need to pass booking object
    },
    onDetailsClicked (event) {
      this.$emit('hotelSelected', this.hotel)
    }
  }
}

</script>