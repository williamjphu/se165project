<template>
  <v-container style="max-width: 1200px" py-0 px-0>
    <section>
      <v-container d-flex class="text-xs-center" style="text-shadow: 1px 1px #111111;">
        <v-layout column align-center>
          <v-flex xs12 >
          <v-card-title primary-title>
          <v-container d-flex class="text-xs-center">
          <div>
            <h3 class="headline mb-3"> ABOUT US </h3>
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
          <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="160px" dark>
          </v-card>
          <v-card-text>
            <h4> Matt Morin/Developer</h4>
            </v-card-text>
      </v-flex>
        <v-flex xs12 sm6 md3 order-md3 order-sm1>
          <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="160px" dark>
          </v-card>
          <v-card-text>
            <h4> David Luong/Technical Lead</h4>
            </v-card-text>
        </v-flex>

        <v-flex xs12 sm6 md3 order-md2 order-sm4>
          <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="160px" dark>
          </v-card>
          <v-card-text>
            <h4> Rana Shamoun/Developer</h4>
            </v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md1 order-sm3>
           <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="160px" dark>
        </v-card>
        <v-card-text>
            <h4> William Hu/Project Manager</h4>
            </v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md1 order-sm3>
           <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="160px" dark>
        </v-card>
        <v-card-text>
            <h4> Gwyneth Mina/Product Owner</h4>
            </v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md1 order-sm3>
           <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="160px" dark>
        </v-card>
           <v-card-text>
            <h4> Michael Li/Tester</h4>
            </v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md1 order-sm3>
          <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="160px" dark>
          </v-card>
        <v-card-text>
            <h4> Marcus Norona/Developer</h4>
            </v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 order-md1 order-sm3>
          <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="160px" dark>
          </v-card>
        <v-card-text>
            <h4> Cameron Chien/Developer</h4>
            </v-card-text>
        </v-flex>
    </v-layout>
    </v-container>
    <v-container fluid grid-list-sm>
    <v-layout wrap>
      <v-flex xs3 align-center>
        <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="160px" dark>
        </v-card>
        <v-card-text>
            <h4> Payam Khosravi/Product Owner</h4>
            </v-card-text>
      </v-flex>
      <v-flex xs3 align-center>
        <v-card img="http://freetourpraga.com/wp-content/uploads/2017/04/Karlovy-Vary.jpg" height="160px" dark>
         </v-card>
         <v-card-text>
            <h4> Yen Nguyen/Tester</h4>
            </v-card-text>
      </v-flex>
    </v-layout>
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
