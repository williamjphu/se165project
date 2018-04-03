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
              <p>HELLO WORLD</p>
              <v-btn @click="usePoints">Use points</v-btn>  <!-- testing out the redeem points -->
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
    computed: {
      // should return total number of reward points accumulated
      rewardPoints () {
        return 0
      },
      authenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onCheckout () {
        // add Stripe code here - the line below should ONLY be emitted if payment is successful, if not, emit 'error' instead
        this.$emit('checkout', {discount: this.discount})
      },

      // testing out the reemPoints function
      usePoints () {
        this.$store.dispatch('redeemPoints')
      }
    }
  }
</script>