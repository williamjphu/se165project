<template>
  <v-container fluid py-0 px-1>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 d-flex v-if="!authenticated">
              <v-btn icon outline color="grey darken-1" @click="onBackClicked"><v-icon>keyboard_arrow_left</v-icon></v-btn>
              <v-container style="max-width: 350px">
                <login-dialog></login-dialog>
              </v-container>
            </v-flex>
            <v-flex xs12 v-if="authenticated && booking !== null && booking !== undefined">
              <v-card flat>
                <v-container grid-list-lg>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-btn icon outline color="grey darken-1" @click="onBackClicked"><v-icon>keyboard_arrow_left</v-icon></v-btn>
                      <h3 class="title text-xs-center" style="margin-bottom: 0.3em">Your Booking Summary</h3>
                    </v-flex>
                    <v-flex xs5 lg4 offset-lg2>
                      <v-card-media :src="booking.photo" height="200"></v-card-media>
                    </v-flex>
                    <v-flex xs7 lg4>
                      <p class="body-2">{{ booking.name }}
                        <vue-star-rating :star-size=14 read-only v-model="booking.rating" :max-rating="booking.rating" :show-rating=false></vue-star-rating>
                      </p>
                      <p style="margin-top: 0.3em">{{ booking.address }}</p>
                      <p>{{ booking.phone }}</p>
                      <p style="margin-top: 1em">{{ booking.dateIn}} - {{ booking.dateOut }} ({{ booking.nights}} night{{ booking.nights === 1 ? '' : 's' }})</p>
                      <p>{{ booking.rooms }} room{{ booking.rooms === 1 ? '' : 's' }}</p>
                    </v-flex>
                    <v-flex xs12 lg8 offset-lg2>
                      <v-divider></v-divider>
                    </v-flex>
                    <v-flex xs12 lg8 offset-lg2>
                      <h3 class="title text-xs-center">Reward Points</h3>
                      <v-btn @click="redeemPoints" color="primary" :disabled="discount || !rewardEligible" block>{{ redeemBtnText }}</v-btn> 
                    </v-flex>
                    <v-flex xs12 lg8 offset-lg2>
                      <v-divider></v-divider>
                    </v-flex>
                    <v-flex xs12>
                      <h3 class="title text-xs-center">Checkout</h3>
                    </v-flex>
                    <v-flex xs8 sm5 lg3 offset-sm2 offset-lg4>
                      <p>Price per night:</p>
                      <p>Number of rooms:</p>
                      <p>Number of nights:</p>
                      <p>Subtotal:</p>
                      <p>Discount:</p>
                      <p class="title" style="margin-top: 0.5em">Total:</p>
                    </v-flex>
                    <v-flex xs4 sm3 lg1 class="text-xs-right">
                      <p>$ {{ booking.price }}</p>
                      <p>{{ booking.rooms }}</p>
                      <p>{{ booking.nights }}</p>
                      <p>$ {{ booking.price * booking.rooms * booking.nights }}</p>
                      <p v-if="discount" class="green--blue">- $ {{booking.price}}</p>
                      <p v-else>--</p>
                      <p class="title green--text" style="margin-top: 0.5em">$ {{ total }}</p>
                    </v-flex>
                    <v-flex xs12 lg8 offset-lg2>
                      <v-btn @click="onCheckout" color="success" block>Continue to Checkout</v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
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
        // Set discount to true IF user chooses to apply the discount - it will automatically take off one night from the total price.
        discount: false
      }
    },
    props: ['booking'],
    computed: {
      rewardEligible () {
        return this.$store.getters.redeemPointsElibile
      },
      redeemBtnText () {
        return this.discount ? 'Discount Applied' : (this.rewardEligible ? 'Redeem Free Night' : 'Cannot Redeem Now')
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
          panelLabel: 'Pay {{amount}}',
          token: (token) => {
            this.token = token
            console.log(token)
            this.$emit('checkout', {discount: this.discount, total: this.total})
          }
        })
      },
      onBackClicked () {
        this.$emit('backClicked')
      },
      redeemPoints () {
        this.discount = true
        this.$store.dispatch('redeemPoints')
      }
    }
  }
</script>

<style scoped>
  p {
    margin-bottom: 0em;
  }
</style>