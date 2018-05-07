<template>
  <v-container style="max-width: 1200px" px-0 class="text-xs-center">
    <v-layout row wrap align-center>
      <br><br><br>
      <v-flex xs12 py-0>
        <v-dialog v-model="confirmDialog" max-width="500">
          <v-card>
             <v-toolbar color="blue-grey darken-2" dense dark flat>
              <v-toolbar-title>{{ text['Cancel booking'] }}</v-toolbar-title>
            </v-toolbar>
            <v-card-title class="headline">Do you really want to cancel your booking?</v-card-title>
            <v-card-text>Note: You cannot undo this action.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="secondary" @click.native="confirmDialog = false">No</v-btn>
              <v-btn color="primary" @click.native="onDeleteConfirm">Yes</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
      <v-flex xs12 py-0 v-if="editDialog">
        <v-dialog v-model="editDialog" max-width="500">
          <v-card>
            <v-toolbar color="blue-grey darken-2" dense dark flat>
              <v-toolbar-title>{{ text['Modify booking'] }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-container fluid py-0>
                <v-layout row wrap>
                  <v-flex xs12 pb-4 class="caption">
                    Note: If you would like to change the dates on your reservation, please cancel this booking and make a new one. Thank you for your understanding.
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field disabled :label="text['Name']" v-model="modifiedBooking.bookingDetails.name"></v-text-field>
                    <v-text-field disabled :label="text['Check In']" v-model="modifiedBooking.bookingDetails.dateIn"></v-text-field>
                    <v-text-field disabled :label="text['Check Out']" v-model="modifiedBooking.bookingDetails.dateOut"></v-text-field>
                    <v-select :label="text['Rooms']" :items="[1, 2, 3, 4, 5]" v-model="modifiedBooking.bookingDetails.rooms"></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="secondary" @click.native="editDialog = false">Cancel</v-btn>
              <v-btn color="primary" @click.native="onModifyConfirm">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
      <v-flex xs12>
        <h3 class="display-2">Upcoming Bookings</h3>
        <v-container fluid px-0 grid-list-lg align-center>
          <v-layout row wrap>
             <v-flex align-center v-if = "bookings.length == 0">
                <v-card>
                <img  height = "250px" src = "@/assets/logo.png">


                <v-flex align-center>
                
                  <v-btn  flat color="blue-grey darken-2" @click = "home" >Book Now</v-btn>
                </v-flex>
              </v-card>
             </v-flex>

            <v-flex d-flex xs12 md4 v-for="(booking, i) in bookings" :key="i" :offset-md1="bookings.length == 2" :offset-md4="bookings.length == 1">
              
               
              <v-card >
                <v-card-media :src="booking.bookingDetails.photo" height="250px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{booking.bookingDetails.name}}</h3>
                    <div>{{booking.bookingDetails.address}} </div>
                    <br>
                    <div> {{ text['Check In'] }}: {{booking.bookingDetails.dateIn}} </div>
                    <div> {{ text['Check Out'] }}: {{booking.bookingDetails.dateOut}} </div>
                    <div> {{ text['Rooms'] }}: {{booking.bookingDetails.rooms}} </div>
                    <br>
                    <div> Payment ID: {{booking.bookingDetails.paymentChargeID}} </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="blue-grey darken-2" @click="onModify(booking.id)">Modify</v-btn>
                  <v-btn flat color="blue-grey darken-2" @click="onDelete(booking.id)">Cancel</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <br><br><br>
      <v-flex xs12>
        <h3 class="display-2">Past Bookings</h3>
        <v-container fluid px-0 grid-list-lg align-center>
          <v-layout row wrap>
            <v-flex d-flex xs12 md4 v-for="(booking, i) in pastBookings" :key="i" :offset-md1="pastBookings.length == 2" :offset-md4="pastBookings.length == 1">
              <v-card>
                <v-card-media :src="booking.bookingDetails.photo" height="250px">
                </v-card-media>
                <v-card-title primary-title>
                  <v-flex>
                    <h3 class="title mb-3">{{booking.bookingDetails.name}}</h3>
                    <div>{{booking.bookingDetails.address}} </div>
                    <br>
                    <div> Trip Dates: {{booking.bookingDetails.dateIn}} to {{booking.bookingDetails.dateOut}} </div>
                  </v-flex>
                </v-card-title>
                <!-- <v-card-actions>
                  <v-btn @click = 'bookingInformation' flat color="blue-grey darken-2">Hotel Details</v-btn>
                </v-card-actions> -->
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
    data () {
      return {
        deleteID: null,
        confirmDialog: false,
        editDialog: false,
        modifiedBooking: null
      }
    },
    props: ['hotel'],
    computed: {
      bookings () {
        const bookings = this.$store.getters.bookings.filter(booking => new Date() <= new Date(booking.bookingDetails.dateOut))
        return bookings
      },
      pastBookings () {
        const bookings = this.$store.getters.bookings.filter(booking => new Date() > new Date(booking.bookingDetails.dateOut))
        return bookings
      },
      text () {
        return this.$store.getters.text
      }
    },
    methods: {
      bookingInformation () {
        this.$router.replace('/bookinginformation')
        // need to pass booking object
      },
      onDetailsClicked () {
        this.$emit('hotelSelected', this.hotel)
      },
      onDelete (payload) {
        this.deleteID = payload
        this.confirmDialog = true
      },
      onDeleteConfirm () {
        this.confirmDialog = false
        this.$store.dispatch('deleteBooking', this.deleteID)
        this.$store.dispatch('retrieveBookings')
      },
      onModify (payload) {
        this.modifiedBooking = JSON.parse(JSON.stringify(this.$store.getters.bookings)).filter(booking => booking.id === payload)[0]
        this.editDialog = true
      },
      onModifyConfirm () {
        if (this.modifiedBooking.bookingDetails.rooms <= this.$store.getters.bookings.filter(booking => booking.id === this.modifiedBooking.id)[0].bookingDetails.rooms) {
          console.log(this.modifiedBooking.bookingDetails.rooms)
          console.log(this.$store.getters.bookings)
          console.log(this.$store.getters.bookings.filter(booking => booking.id === this.modifiedBooking.id)[0].bookingDetails.rooms)
          alert('Your refund will be processed within the next 10 business days.')
          return
        }
        this.$checkout.open({
          name: this.modifiedBooking.bookingDetails.name,
          currency: 'USD',
          billingAddress: false,
          amount: this.modifiedBooking.bookingDetails.price * (this.modifiedBooking.bookingDetails.rooms * this.modifiedBooking.bookingDetails.nights - (this.modifiedBooking.bookingDetails.discount ? 1 : 0)) * 100,
          locale: 'auto',
          panelLabel: 'Pay {{amount}}',
          token: (token) => {
            this.token = token
            this.modifiedBooking.bookingDetails.totalCharge = this.modifiedBooking.bookingDetails.price * (this.modifiedBooking.bookingDetails.rooms * this.modifiedBooking.bookingDetails.nights - (this.modifiedBooking.bookingDetails.discount ? 1 : 0))
            console.log(this.modifiedBooking)
            this.$store.dispatch('editBooking', this.modifiedBooking)
            this.editDialog = false
          }
        })
      },
      home () {
        this.$router.replace('/')
      }
    }
  }
</script>