<template>
  <v-container style="max-width: 1200px" py-0 px-0>
    <section>
      <v-container d-flex class="text-xs-center">
        <v-layout column align-center>
          <v-flex xs12 >
          <v-card-title primary-title>
          <v-container d-flex class="text-xs-center">
          <div>
            <h1 class="headline mb-3" style="font-size:100px; font-weight:bold"> ABOUT US </h1>
            <div style="font-family:; font-size:20px; background-color:light-grey;"> We are a team of San Jose University students all major in Software Engineering.<br>
            We foucsed exclusively on the hotel sector.
            We have called the brightest, most <br>commerically focused experienced and passionate team of online marketers<br>
            account managers, designers and developers in industry. </div>
            </div>
            </v-container>
            </v-card-title>
            <div>
            <h3 class="headline mb-0" style="font-size:100px; font-weight:bold; color:white; background-color:#0E76BC"> Meet the Team INDECISIVE </h3>
          </div><br/>
            <v-container fluid grid-list-sm>
             <v-layout row wrap>

      <v-flex md4 xs6 sm4 align-center v-for="i in 12" :key="i">
          <div class="teamcard-container" >

            <div class="TeamCard"  v-if="i==1" >
            </div>


            <div class="TeamCard"  v-if="i==2" >
                <div class="front">
                        <img class="img-circle" src="https://www.flaticon.com/premium-icon/icons/svg/145/145861.svg" />
                    <div class="backpanel">
                        <div class="content">
                            <div class="main" >
                                <h3 class="name" >William Hu</h3>
                                <p class="profession">Project Manager</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="back">
                    <div class="header">
                      <h3 class="name" >William Hu</h3>
                      <p class="profession">Project Manager</p>
                    </div>
                    <div class="Backcontent" justify-end="true">
                      -	Brief introduction -	Brief introduction -	Brief introduction-	Brief introduction
                    </div>
                    <div class="footer">
                        <div class="social-links text-center">
                            <a href="http://facebook.com/" class="facebook" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'facebook']" /></a>
                            <a href="http://twitter.com" class="twitter" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'twitter']" /></a>
                            <a href="http://instagram.com" class="instagram" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'instagram']" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="TeamCard"  v-if="i==3" >
            </div>


            <div class="TeamCard" v-if="i==4" >
                <div class="front">
                        <img class="img-circle" src="https://www.flaticon.com/premium-icon/icons/svg/145/145857.svg" />
                    <div class="backpanel">
                        <div class="content">
                            <div class="main" >
                                <h3 class="name" >David Luong</h3>
                                <p class="profession">Technical Lead</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="back">
                    <div class="header">
                      <h3 class="name" >David Luong</h3>
                      <p class="profession">Technical Lead</p>
                    </div>
                    <div class="Backcontent" justify-end="true">
                      -	Brief introduction -	Brief introduction -	Brief introduction-	Brief introduction
                    </div>
                    <div class="footer">
                        <div class="social-links text-center">
                            <a href="http://facebook.com/" class="facebook" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'facebook']" /></a>
                            <a href="http://twitter.com" class="twitter" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'twitter']" /></a>
                            <a href="http://instagram.com" class="instagram" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'instagram']" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="TeamCard" v-if="i==5">
                <div class="front">
                        <img class="img-circle" src="https://image.flaticon.com/icons/svg/701/701989.svg" />
                    <div class="backpanel">
                        <div class="content">
                            <div class="main" >
                                <h3 class="name" >Rana Shamoun</h3>
                                <p class="profession">Software Developer</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="back">
                    <div class="header">
                      <h3 class="name" >Rana Shamoun</h3>
                      <p class="profession">Software Developer</p>
                    </div>
                    <div class="Backcontent" justify-end="true">
                      -	Brief introduction -	Brief introduction -	Brief introduction-	Brief introduction
                    </div>
                    <div class="footer">
                        <div class="social-links text-center">
                            <a href="http://facebook.com/" class="facebook" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'facebook']" /></a>
                            <a href="http://twitter.com" class="twitter" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'twitter']" /></a>
                            <a href="http://instagram.com" class="instagram" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'instagram']" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="TeamCard" v-if="i==6">
                <div class="front">
                        <img class="img-circle" src="https://www.flaticon.com/premium-icon/icons/svg/145/145861.svg" />
                    <div class="backpanel">
                        <div class="content">
                            <div class="main" >
                                <h3 class="name" >Matt Morin</h3>
                                <p class="profession">Software Developer</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="back">
                    <div class="header">
                      <h3 class="name" >Matt Morin</h3>
                      <p class="profession">Software Developer</p>
                    </div>
                    <div class="Backcontent" justify-end="true">
                      -	Brief introduction -	Brief introduction -	Brief introduction-	Brief introduction
                    </div>
                    <div class="footer">
                        <div class="social-links text-center">
                            <a href="http://facebook.com/" class="facebook" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'facebook']" /></a>
                            <a href="http://twitter.com" class="twitter" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'twitter']" /></a>
                            <a href="http://instagram.com" class="instagram" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'instagram']" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="TeamCard" v-if="i==7">
                <div class="front">
                        <img class="img-circle" src="https://image.flaticon.com/icons/svg/701/701989.svg" />
                    <div class="backpanel">
                        <div class="content">
                            <div class="main" >
                                <h3 class="name" >Gwyneth Mina</h3>
                                <p class="profession">Product Owner</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="back">
                    <div class="header">
                      <h3 class="name" >Gwyneth Mina</h3>
                      <p class="profession">Product Owner</p>
                    </div>
                    <div class="Backcontent" justify-end="true">
                      -	Brief introduction -	Brief introduction -	Brief introduction-	Brief introduction
                    </div>
                    <div class="footer">
                        <div class="social-links text-center">
                            <a href="http://facebook.com/" class="facebook" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'facebook']" /></a>
                            <a href="http://twitter.com" class="twitter" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'twitter']" /></a>
                            <a href="http://instagram.com" class="instagram" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'instagram']" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="TeamCard" v-if="i==8">
                <div class="front">
                        <img class="img-circle" src="https://image.flaticon.com/icons/svg/265/265674.svg" />
                    <div class="backpanel">
                        <div class="content">
                            <div class="main" >
                                <h3 class="name" >Michael Li</h3>
                                <p class="profession">Software Tester</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="back">
                    <div class="header">
                        <h3 class="name">Michael Li</h3>
                        <p class="profession">Software Tester</p>
                    </div>
                    <div class="Backcontent" justify-end="true">
                      -	Brief introduction -	Brief introduction -	Brief introduction-	Brief introduction
                    </div>
                    <div class="footer">
                        <div class="social-links text-center">
                            <a href="http://facebook.com/" class="facebook" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'facebook']" /></a>
                            <a href="http://twitter.com" class="twitter" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'twitter']" /></a>
                            <a href="http://instagram.com" class="instagram" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'instagram']" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="TeamCard" v-if="i==9">
                <div class="front">
                        <img class="img-circle" src="https://www.flaticon.com/premium-icon/icons/svg/145/145861.svg" />
                    <div class="backpanel">
                        <div class="content">
                            <div class="main" >
                                <h3 class="name" >Marcus Norona</h3>
                                <p class="profession">Software Developer</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="back">
                    <div class="header">
                        <h3 class="name">Marcus Norona</h3>
                        <p class="profession">Software Developer</p>
                    </div>
                    <div class="Backcontent" justify-end="true">
                      -	Brief introduction -	Brief introduction -	Brief introduction-	Brief introduction
                    </div>
                    <div class="footer">
                        <div class="social-links text-center">
                            <a href="http://facebook.com/" class="facebook" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'facebook']" /></a>
                            <a href="http://twitter.com" class="twitter" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'twitter']" /></a>
                            <a href="http://instagram.com" class="instagram" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'instagram']" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="TeamCard" v-if="i==10">
                <div class="front">
                        <img class="img-circle" src="https://www.flaticon.com/premium-icon/icons/svg/145/145861.svg" />
                    <div class="backpanel">
                        <div class="content">
                            <div class="main" >
                                <h3 class="name" >Cameron Chien</h3>
                                <p class="profession">Software Developer</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="back">
                    <div class="header">
                      <h3 class="name" >Cameron Chien</h3>
                      <p class="profession">Software Developer</p>
                    </div>
                    <div class="Backcontent" justify-end="true">
                      -	Brief introduction -	Brief introduction -	Brief introduction-	Brief introduction
                    </div>
                    <div class="footer">
                        <div class="social-links text-center">
                            <a href="http://facebook.com/" class="facebook" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'facebook']" /></a>
                            <a href="http://twitter.com" class="twitter" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'twitter']" /></a>
                            <a href="http://instagram.com" class="instagram" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'instagram']" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="TeamCard" v-if="i==11">
                <div class="front">
                        <img class="img-circle" src="https://image.flaticon.com/icons/svg/701/701989.svg" />
                    <div class="backpanel">
                        <div class="content">
                            <div class="main" >
                              <h3 class="name" >Yen Nguyen</h3>
                              <p class="profession">Software Tester</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="back">
                    <div class="header">
                      <h3 class="name" >Yen Nguyen</h3>
                      <p class="profession">Software Tester</p>
                    </div>
                    <div class="Backcontent" justify-end="true">
                      -	Brief introduction -	Brief introduction -	Brief introduction-	Brief introduction
                    </div>
                    <div class="footer">
                        <div class="social-links text-center">
                            <a href="http://facebook.com/" class="facebook" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'facebook']" /></a>
                            <a href="http://twitter.com" class="twitter" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'twitter']" /></a>
                            <a href="http://instagram.com" class="instagram" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'instagram']" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="TeamCard" v-if="i==12">
                <div class="front">
                        <img class="img-circle" src="~@/assets/0.jpeg" >
                    <div class="backpanel">
                        <div class="content">
                            <div class="main" >
                                <h3 class="name" >Payam Khosravi</h3>
                                <p class="profession">Product Owner</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="back">
                    <div class="header">
                        <h3 class="name">Payam Khosravi</h3>
                        <p class="profession">Product Owner</p>
                    </div>
                    <div class="Backcontent" justify-end="true" >
                      <p>
                      My name is Payam,
                      Born and raised in Iran.
                      Education and/or work.
                      Most important to me is and I try to achieve/protect that the best I can.
                      So far I have achieved .</p>
                    </div>
                    <div class="footer">
                        <div class="social-links text-center">
                            <a href="http://facebook.com/" class="facebook" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'facebook']" /></a>
                            <a href="http://twitter.com" class="twitter" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'twitter']" /></a>
                            <a href="https://www.instagram.com/payam_9/" class="instagram" target="_blank"><font-awesome-icon  size="2x" :icon="['fab', 'instagram']" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </v-flex>
    </v-layout>
    </v-container>
<!--
    <v-flex xs12>
    <br>
      <v-flex xs12>
        <v-card>
        <v-card-text class="px-0 display-1 headline primary--text" align-center>Contact Us</v-card-text>
        </v-card>
    </v-flex>

   <v-flex xs12>
      <v-card dark style="background-color:#0E76BC">
        <v-card-text class="px-0" align-center>Do you have a question or have any concerns?</v-card-text>
      </v-card>
    </v-flex>
<template>
  <v-card>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      v-model="message"
      label="Message"
      :counter="500"
        v-validate="'required|max:500'"
      data-vv-name="message"
      multi-line = "true"
      required
      xs12
    ></v-text-field>
 </v-form>
  </v-card>
</template>

    <v-btn @click="sendmail" xs12 align-center color="info" outline large >Send  <v-icon dark right>send</v-icon></v-btn>

  </v-flex>

    </v-container>-->
    <v-container d-flex class="text-xs-center" >
    <v-card class="primary--text" text-center column align-center >
          <div style="color:white; background-color:grey;" >
            <h3 class="headline mb-0" > Customer Service </h3>
            <div> We are here to help you. Please do not hesitate to contact us
            <br> if you have any question or concern. </br>
            phone number: (408) 924-1000<br/>
            <a @click="sendmail" style="align-center; color:#0000b3"><u> Email us </u> </v-icon></a>
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

        }
  },

  methods: {
        sendmail: function (event) {
          document.location.href = 'mailto:info@indecisive.com'
        }
  },

  computed: {
            // Any variables that need to be dynamically recomputed go in here
  }
    }
</script>
<style>
    .Backcontent {
        padding-top: 3%;
        margin-top: 1%;
        height: 50%;
        border-top: thin solid #795548;
    }

    .teamcard-container {
        font-family: "Helvetica Nueue",Arial,Verdana,sans-serif;
        -webkit-perspective: 1000px;
        -moz-perspective: 1000px;
        -o-perspective: 1000px;
        perspective: 1000px;
        margin-left: 2%;
        margin-bottom: 2%;
        /* border: thin solid #795548;    */

    }

        .teamcard-container:not(.manual-flip):hover .TeamCard,
        .teamcard-container.hover.manual-flip .TeamCard {
            -webkit-transform: rotateY( 180deg );
            -moz-transform: rotateY( 180deg );
            -o-transform: rotateY( 180deg );
            transform: rotateY( 180deg );
        }

        .teamcard-container.static:hover .TeamCard,
        .teamcard-container.static.hover .TeamCard {
            -webkit-transform: none;
            -moz-transform: none;
            -o-transform: none;
            transform: none;
        }

    .TeamCard {
        -webkit-transition: -webkit-transform .5s;
        -moz-transition: -moz-transform .5s;
        -o-transition: -o-transform .5s;
        transition: transform .5s;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
        transform-style: preserve-3d;
        position: relative;
        padding-left: 10px;
        padding-right: 20px;
        margin-left:40px;
    }

    .front, .back {
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -o-backface-visibility: hidden;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #FFF;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);
    }

    /* front pane, placed above back */
    .front {
        z-index: 2;
    }

    /* back, initially hidden pane */
    .back {
        -webkit-transform: rotateY( 180deg );
        -moz-transform: rotateY( 180deg );
        -o-transform: rotateY( 180deg );
        transform: rotateY( 180deg );
        z-index: 3;
        align:center;
    }

    .TeamCard {
        background: none repeat scroll 0 0 #FFFFFF;
        border-radius: 4px;
        color: #444444;

    }

    .teamcard-container, .front, .back {
        width: 100%;
        height: 260px;
        border-radius: 8px;

    }

    .TeamCard .front img {
        margin: 2%;
        background: none repeat scroll 0 0 #FFFFFF;
        height: 96%;
        border-radius: 4px;
        width: 96%;
    }

    .TeamCard .content {
        box-shadow: none;
        position: absolute;
        top: 86%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        background-color: white;
        padding: 2%;
        opacity: 0.7;
        filter: alpha(opacity=70);
        text-align: center !important;
    }

    .TeamCard .back .content .main {
        height: auto;
    }

    .TeamCard .name {
        font-size: 18px;
        line-height: 15px;
        margin: 5px 0 0;
        text-align: left;
        text-transform: capitalize;
    }

    .TeamCard h5 {
        margin: 5px 0;
        font-weight: 900;
        line-height: 15px;
    }

    .TeamCard .profession {
        color: saddlebrown;
        text-align: center;
        font-weight: bold;
        margin-bottom: 5px;
        text-align: left;
    }


    .TeamCard .footer {
        border-top: 1px solid #EEEEEE;
        color: #999999;
        margin: 30px 0 0;
        text-align: center;
    }

        .TeamCard .footer .social-links {
            font-size: 15px;
            text-align: center;
            width: 100%;
            padding: 3%;
            vertical-align: middle;
            background-color: white;
        }

            .TeamCard .footer .social-links a {
                margin: 0 5px;
            }

    .TeamCard .header {
        margin-top: 10%;
    }

    /*       Fix bug for IE      */

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .front, .back {
            -ms-backface-visibility: visible;
            backface-visibility: visible;
        }

        .back {
            visibility: hidden;
            -ms-transition: all 0.2s cubic-bezier(.92,.01,.83,.67);
        }

        .front {
            z-index: 4;
        }

        .teamcard-container:not(.manual-flip):hover .back,
        .teamcard-container.manual-flip.hover .back {
            z-index: 5;
            visibility: visible;
        }
    }
    .instagram{

    }

</style>
