<template>
  <v-container style="max-width: 1200px" py-0 px-0>
    <section>
      <v-container d-flex class="text-xs-center" style="text-shadow: 1px 1px #111111;">
        <v-layout column align-center>
          <v-flex xs12>
            <h3 class="display-3">This is a stub. Please insert your code in here.</h3>
            <v-btn color="info" @click="checkout">Checkout</v-btn>
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
        // Any variable data should go in here
      }
    },

    methods: {
      checkout () {
        this.$checkout.open({
          name: 'IDCV hotel',
          currency: 'USD',
          billingAddress: true,
          amount: 999,
          locale: 'auto',
          panelLabel: 'Subscribe {{amount}}',
          token: (token) => {
            console.log(token)
            this.token = token
          }
        })
      }
    },

    computed: {
      // Any variables that need to be dynamically recomputed go in here
    }
  }
</script>