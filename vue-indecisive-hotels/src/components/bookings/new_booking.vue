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
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
          <v-btn color="brown darken-2" dark @click.stop="currentStep = 1" @click = "bookingCreate">Finish</v-btn>
          <v-btn flat @click.stop="currentStep = 3">Back</v-btn>
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
      },
      bookingCreate () {
        this.$store.dispatch('createBooking', this.bookedHotel)
      }
    }
  }
</script>