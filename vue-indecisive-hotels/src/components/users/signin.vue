<template>
  <v-container class="text-xs-center" py-0 px-0>
    <v-layout>
      <v-flex d-flex xs12>
        <v-card>
          <v-card-text>
            <v-container>
              <v-layout row wrap>
                <v-flex d-flex xs12 v-if="error">
                  <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                </v-flex>
                <v-flex d-flex xs12 pb-2>
                  <font-awesome-icon style="color: #0D47A1" size="3x" :icon="['fas', 'id-card']" />
                </v-flex>
                <v-flex xs12 align-center>
                  <span class="title" style="color: #0D47A1;">{{ loginBoldText }}</span>
                  <span class="title" style="font-weight: 300"> {{ loginNormalText }}</span>
                </v-flex>
                <v-flex xs12 pt-4 pb-2>
                  <div class="strike">
                    <span>Login with</span>
                  </div>
                </v-flex>
                <v-flex d-flex xs4>
                  <div>
                    <v-btn
                      @click="googleSignup"
                      :disabled="loading" :loading="loading" color="white" dark fab
                    >
                      <v-avatar><img src="@/assets/btn_google.png"></v-avatar>
                    </v-btn>
                </div>
                </v-flex>
                <v-flex d-flex xs4>
                  <div>
                    <v-btn
                      @click="facebookSignup"
                      :disabled="loading" :loading="loading" color="blue darken-3" dark fab
                    >
                      <font-awesome-icon size="2x" :icon="['fab', 'facebook-f']" />
                    </v-btn>
                  </div>
                </v-flex>
                <v-flex d-flex xs4>
                  <div>
                    <v-btn
                      @click="twitterSignup"
                      :disabled="loading" :loading="loading" color="light-blue" dark fab
                    >
                      <font-awesome-icon size="2x" :icon="['fab', 'twitter']" />
                    </v-btn>
                  </div>
                </v-flex>
                <v-flex xs12 pt-2 pb-2>
                  <div class="strike">
                    <span>or</span>
                  </div>
                </v-flex>
              </v-layout>
              <v-form>
                <v-container fluid class="px-0">
                  <v-layout row wrap>
                    <v-flex xs12 pb-1>
                      <v-text-field
                        prepend-icon="email"
                        label="E-mail"
                        v-model="email"
                        solo
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 pb-3>
                      <v-text-field
                        prepend-icon="lock"
                        label="Password"
                        v-model="password"
                        type="password"
                        solo
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-btn @click="submit" :disabled="loading" :loading="loading" block dark color="blue darken-4">
                        Login
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      },
      text () {
        return this.$store.getters.text
      },
      loginBoldText () {
        var loginText = this.$store.getters.text['Login to your account']
        var loginArr = loginText.split(' ')
        if (this.$store.getters.selectedLanguage === 'Vietnamese') {
          return loginArr[0] + ' ' + loginArr[1]
        }
        else {
          return loginArr[0]
        }
      },
      loginNormalText () {
        var loginText = this.$store.getters.text['Login to your account']
        var loginArr = loginText.split(' ')
        if (this.$store.getters.selectedLanguage === 'Vietnamese') {
          return loginText.replace(loginArr[0] + ' ' + loginArr[1], '')
        }
        else {
          return loginText.replace(loginArr[0], '')
        }
      }
    },
    methods: {
      googleSignup () {
        console.log('Google Sign up')
        this.$store.dispatch('loginWithGoogle')
      },
      facebookSignup () {
        console.log('Facebook Sign up')
        this.$store.dispatch('loginWithFacebook')
      },
      twitterSignup () {
        console.log('Twitter Sign up')
        this.$store.dispatch('loginWithTwitter')
      },
      submit () {
        this.$store.dispatch('loginUser', { email: this.email, password: this.password })
      },
      onDismissed () {
        console.log('Alert dismissed!')
        this.$store.dispatch('clearError')
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$store.commit('setShowLogin', false)
        }
      }
    }
  }
</script>

<style scoped>
.strike {
    display: block;
    text-align: center;
    overflow: hidden;
    white-space: nowrap; 
}

.strike > span {
    position: relative;
    display: inline-block;
}

.strike > span:before,
.strike > span:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 9999px;
    height: 1px;
    background: gray;
}

.strike > span:before {
    right: 100%;
    margin-right: 15px;
}

.strike > span:after {
    left: 100%;
    margin-left: 15px;
}
</style>