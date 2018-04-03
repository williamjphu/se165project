<template>
  <v-container fluid py-0 px-1>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 d-flex v-if="!authenticated">
              <v-container style="max-width: 350px">
                <login-dialog></login-dialog>
              </v-container>
            </v-flex>
            <v-flex xs v-if="authenticated">
<<<<<<< HEAD
=======
              <p>HELLO WORLD</p>
              <v-btn @click="usePoints">Use points</v-btn>  <!-- testing out the redeem points -->
>>>>>>> b0862c761e1c85e1835aa54751013ba4c09464f4
              <v-btn @click="onCheckout">checkout</v-btn>
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
        // Set discount to true IF user chooses to apply the discount - it will automatically take off one night from the total price.
        discount: false
      }
    },
    props: ['booking'],
    computed: {
      // should return total number of reward points accumulated
      rewardPoints () {
        return 0
      },
      authenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      total () {
        return this.booking.price * (this.booking.rooms * this.booking.nights - (this.discount ? 1 : 0))
      }
    },
    methods: {
      onCheckout () {
        // add Stripe code here - the line below should ONLY be emitted if payment is successful, if not, emit 'error' instead
        this.$checkout.open({
          name: this.booking.name,
          currency: 'USD',
          billingAddress: false,
          amount: this.total * 100,
          locale: 'auto',
          panelLabel: 'Subscribe {{amount}}',
          token: (token) => {
            this.token = token
            console.log(token)
            this.$emit('checkout', {discount: this.discount, total: this.total})
          }
        })
      },

      // testing out the reemPoints function
      usePoints () {
        this.$store.dispatch('redeemPoints')
      }
    }
  }
</script>