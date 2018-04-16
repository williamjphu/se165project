<template>
  <v-container style="max-width: 1200px" py-0 px-0>
    <v-stepper v-model="currentStep">
      <v-stepper-header>
        <v-stepper-step editable step="1" :complete="currentStep > 1">Find a hotel</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="currentStep > 2">View Hotel Details</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" :complete="currentStep > 3">Payment Details</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4">Booking Confirmation</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <search-page @hotelSelected="onHotelSelected"></search-page>
        </v-stepper-content>
        <v-stepper-content step="2">
          <hotel-details :data="selectedHotel" @bookClicked="onHotelBooked" @backClicked="currentStep = 1"></hotel-details>
        </v-stepper-content>
        <v-stepper-content step="3">
          <payment-details @checkout="onCheckout" @backClicked="currentStep = 2" :booking="bookedHotel"></payment-details>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card flat v-if="bookedHotel !== null && bookedHotel !== undefined">
            <v-container fluid grid-list-lg>
              <v-layout row wrap v-if="!error">
                <v-flex xs12 lg8 offset-lg2>
                  <v-alert type="success" :value="true">Your booking has been successfully processed!</v-alert>
                </v-flex>
                <v-flex xs5 lg4 offset-lg2>
                  <v-card-media :src="bookedHotel.photo" height="200"></v-card-media>
                </v-flex>
                <v-flex xs7 lg4>
                  <p class="body-2">{{ bookedHotel.name }}
                    <vue-star-rating :star-size=14 read-only v-model="bookedHotel.rating" :max-rating="bookedHotel.rating" :show-rating=false></vue-star-rating>
                  </p>
                  <p style="margin-bottom: 0em">{{ bookedHotel.address }}</p>
                  <p>{{ bookedHotel.phone }}</p>
                  <p style="margin-bottom: 0em">{{ bookedHotel.dateIn}} - {{ bookedHotel.dateOut }} ({{ bookedHotel.nights}} night{{ bookedHotel.nights === 1 ? '' : 's' }})</p>
                  <p>{{ bookedHotel.rooms }} room{{ bookedHotel.rooms === 1 ? '' : 's' }}</p>
                </v-flex>
                <v-flex xs12 lg8 offset-lg2>
                  <v-btn color="success" block @click="$router.push('/mybookings')">Finish</v-btn>
                </v-flex>
              </v-layout>
              <v-layout row wrap v-else>
                <v-flex xs12>
                  <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                </v-flex>
                <v-flex xs12>
                  <v-btn color="primary" block @click="currentStep = 1; $store.commit('clearBookingError')">Return to search</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
  import searchResults from './search_results'
  import hotelDetails from './hotel_details'
  import paymentDetails from './payment_details'
  export default {
    data () {
      return {
        currentStep: 0,
        selectedHotel: null,
        bookedHotel: null
      }
    },
    computed: {
      error () {
        return this.$store.getters.bookingError
      }
    },
    components: {
      'search-page': searchResults,
      'hotel-details': hotelDetails,
      'payment-details': paymentDetails
    },
    methods: {
      onHotelSelected (value) {
        this.selectedHotel = value
        this.currentStep = 2
      },
      onHotelBooked (value) {
        this.bookedHotel = value
        this.currentStep = 3
      },
      onCheckout (value) {
        this.bookedHotel.discount = value.discount
        this.bookedHotel.totalCharge = value.total
        this.currentStep = 4
        this.$store.dispatch('createBooking', this.bookedHotel)
      },
      onDismissed () {
        console.log('Alert dismissed!')
        this.$store.dispatch('clearBookingError')
      }
    }
  }
</script>