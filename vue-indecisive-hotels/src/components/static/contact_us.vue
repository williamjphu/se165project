<template>
  <v-container style="max-width: 1200px" py-0 px-0>
    <section>
      <v-container d-flex class="text-xs-center">
        <v-layout column align-center>
          <v-flex xs12 >
          <v-card-title primary-title>
          <v-container d-flex class="text-xs-center">
          <div>
            <h3 class="headline mb-0"> ABOUT US </h3>
            <div> We are a team of San Jose University students all major in Software Engineering.<br>
            We foucsed exclusively on the hotel sector.
            We have called the brightest, most <br>commerically focused experienced and passionate team of online marketers<br>
            account managers,designers and developers in industry. </div>
            </div>
            </v-container>
            </v-card-title>

            <h3 class="headline mb-0"> Meet the Team INDECISIVE </h3>

            <v-container fluid grid-list-sm>
             <v-layout row wrap>
      <v-flex xs12 sm6 md3 order-md4 md1 order-md2 order-sm2>
           <v-card img="https://www.flaticon.com/premium-icon/icons/svg/145/145861.svg" height="250px">
        </v-card>
        <v-card-text>
            <h4> Matt Morin/Software Developer</h4>
            </v-card-text>
      </v-flex>
        <v-flex xs12 sm6 md3 order-md3 order-sm1>
           <v-card img="https://www.flaticon.com/premium-icon/icons/svg/145/145857.svg" height="250px">
        </v-card>
        <v-card-text>
            <h4> David Luong/Technical Lead</h4>
            </v-card-text>
        </v-flex>

        <v-flex xs12 sm6 md3 order-md2 order-sm4>
          <v-card img="https://image.flaticon.com/icons/svg/701/701989.svg" height="250px">
        </v-card>
        <v-card-text>
            <h4> Rana Shamoun/Software Developer</h4>
            </v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md1 order-sm3>
           <v-card img="https://www.flaticon.com/premium-icon/icons/svg/145/145857.svg" height="250px">
        </v-card>
        <v-card-text>
            <h4> William Hu/Project Manager</h4>
            </v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md1 order-sm3>
          <v-card img="https://image.flaticon.com/icons/svg/701/701989.svg" height="250px">
        </v-card>
        <v-card-text>
            <h4> Gwyneth Mina/Product Owner</h4>
            </v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md1 order-sm3>
          <v-card img="https://image.flaticon.com/icons/svg/265/265674.svg" height="250px">
        </v-card>
        <v-card-text>
            <h4> Michael Li/Software Tester</h4>
            </v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md1 order-sm3>
           <v-card img="https://image.flaticon.com/icons/svg/265/265674.svg" height="250px">
        </v-card>
        <v-card-text>
            <h4> Marcus Norona/Software Developer</h4>
            </v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md1 order-sm3>
           <v-card img="https://www.flaticon.com/premium-icon/icons/svg/145/145861.svg" height="250px">
        </v-card>
        <v-card-text>
            <h4> Cameron Chien/Software Developer</h4>
            </v-card-text>
        </v-flex>
    </v-layout>
    </v-container>
    <v-container fluid grid-list-sm>
    <v-layout wrap>
      <v-flex xs3 align-center>
         <v-card img="https://image.flaticon.com/icons/svg/265/265674.svg" height="250px">
        </v-card>
        <v-card-text>
            <h4> Payam Khosravi/Product Owner</h4>
            </v-card-text>
      </v-flex>
      <v-flex xs3 align-center>
        <v-card img="https://image.flaticon.com/icons/svg/701/701989.svg" height="250px">
        </v-card>
        <v-card-text>
            <h4> Yen Nguyen/Software Tester</h4>
            </v-card-text>
      </v-flex>
    </v-layout>
    </v-container>
    <v-container d-flex class="text-xs-center">
    <v-card class="primary--text" color="light-blue lighten-4" >
          <div>
            <h3 class="headline mb-0"> Customer Service </h3>
            <div> We are here to help you. Please do not hesitate to contact us 
            <br> if you have any question or concern. </br>
            Our business phone number is  (408) 924-1000
            <br> You can also use our live chat to chat with us</br> or to leave us a message and we will try to get</br> back to you as soon as possible</br> </div>
            </div>
            </v-card>
            </v-container>
            
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
// No need for this method
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
