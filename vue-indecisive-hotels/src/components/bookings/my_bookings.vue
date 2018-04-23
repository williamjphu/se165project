<template>
  <v-container style="max-width: 1200px" px-0 class="text-xs-center">
    <v-layout row wrap align-center>
      <h3 class="display-2">Cameron :)</h3>
      <br><br><br>
      <v-flex xs12>
        <h3 class="display-2">Upcoming Bookings</h3>
        <v-container fluid px-0 grid-list-lg align-center>
          <v-layout row wrap>
            <v-flex d-flex xs12 md4 v-for="(booking, i) in bookings" :key="i" :offset-md1="bookings.length == 2" :offset-md4="bookings.length == 1">
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
                  <v-btn flat color="brown darken-2" @click="onDelete(booking.id)">Delete</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <br><br>
      <v-flex xs12>
        <h3 class="display-2">Past Bookings</h3>
        <v-container fluid px-0 grid-list-lg align-center>
          <v-layout row wrap>
            <v-flex xs12 md4 v-for="(booking, i) in pastBookings" :key="i" :offset-md1="pastBookings.length == 2" :offset-md4="pastBookings.length == 1">
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
                  <v-btn @click = 'bookingInformation' flat color="brown darken-2">Hotel Details</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['hotel'],
    computed: {
      bookings () {
        const bookings = this.$store.getters.bookings.filter(booking => new Date() <= new Date(booking.bookingDetails.dateOut))
        return bookings
      },
      pastBookings () {
        const bookings = this.$store.getters.bookings.filter(booking => new Date() > new Date(booking.bookingDetails.dateOut))
        return bookings
      }
    },
    methods: {
      bookingInformation () {
        this.$router.replace('/bookinginformation')
        // need to pass booking object
      },
      onDetailsClicked (event) {
        this.$emit('hotelSelected', this.hotel)
      },
      onDelete (payload) {
        this.$store.dispatch('deleteBooking', payload)
        this.$store.dispatch('retrieveBookings')
      }
    }
  }
</script>