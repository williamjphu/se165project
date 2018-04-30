<template>
  <v-container fluid fill-height style="background-image: url(https://www.sanssouci-wien.com/wp-content/uploads/2017/02/sans-souci-wien-lobby_c_gregor-titze-1920x1080.jpg?x57857)">
  <v-container fluid class="text-xs-center" px-0 style="max-width: 1200px">
    <v-layout>
      <v-flex d-flex xs12 sm6 offset-sm3>
        <v-card style="opacity: 0.95;" color="blue-grey darken-2">
          <v-card-text>
            <v-container>
              <v-layout row wrap>
                <v-flex d-flex xs12 v-if="error">
                  <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                </v-flex>
                <v-flex d-flex xs12 pb-3>
                  <span class="headline blue-grey--text text--lighten-4" style="font-weight: 500">Comfort Awaits.</span>
                </v-flex>
                <v-flex d-flex xs12 pb-3>
                  <span class="subheading blue-grey--text text--lighten-3" style="font-weight: 400">Register and discover the best of the web.</span>
                </v-flex>
                <v-flex xs12 align-center>
                  <span class="subheading blue-grey--text text--lighten-3" style="font-weight: 400">And it's absolutely</span>
                  <span class="title blue-grey--text text--lighten-4"> free</span>
                </v-flex>
                <v-flex xs12 pt-4 pb-2>
                  <div class="strike">
                    <span class="blue-grey--text text--lighten-4">Sign up with</span>
                  </div>
                </v-flex>
                <v-flex d-flex xs12>
                  <div>
                    <v-btn
                      @click="googleSignup"
                      :disabled="loading" :loading="loading" color="white" block
                    >
                      <v-avatar size="30"><img src="@/assets/btn_google.png" style="margin-right: 30px"></v-avatar>
                      Google
                    </v-btn>
                </div>
                </v-flex>
                <v-flex d-flex xs12>
                  <div>
                    <v-btn
                      @click="facebookSignup"
                      :disabled="loading" :loading="loading" color="blue darken-3" dark block
                    >
                      <font-awesome-icon style="margin-right: 30px" size="2x" :icon="['fab', 'facebook-f']" />
                      Facebook
                    </v-btn>
                  </div>
                </v-flex>
                <v-flex d-flex xs12>
                  <div>
                    <v-btn
                      @click="twitterSignup"
                      :disabled="loading" :loading="loading" color="light-blue" dark block
                    >
                      <font-awesome-icon style="margin-right: 30px" size="2x" :icon="['fab', 'twitter']" />
                      Twitter
                    </v-btn>
                  </div>
                </v-flex>
                <v-flex xs12 pt-2 pb-2>
                  <div class="strike">
                    <span class="blue-grey--text text--lighten-4">or with email</span>
                  </div>
                </v-flex>
              </v-layout>
              <v-form v-model="valid" ref="form">
                <v-container px-0 py-0>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field
                        prepend-icon="person"
                        :label="text['First name']"
                        v-model="firstName"
                        :rules="nameRules"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        prepend-icon="person"
                        :label="text['Last name']"
                        v-model="lastName"
                        :rules="nameRules"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        prepend-icon="email"
                        :label="text['Email']"
                        v-model="email"
                        :rules="emailRules"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        prepend-icon="lock"
                        :label="text['Password']"
                        v-model="password"
                        :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (passwordVisible = !passwordVisible)"
                        :type="passwordVisible ? 'password' : 'text'"
                        :rules="passwordRules"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        prepend-icon="lock"
                        :label="text['Confirm password']"
                        v-model="password2"
                        :append-icon="password2Visible ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (password2Visible = !password2Visible)"
                        :type="password2Visible ? 'password' : 'text'"
                        :rules="passwordRules.concat([comparePasswords])"
                        required
                        dark
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 pb-3>
                      <v-btn @click="submit" :disabled="loading" :loading="loading" block color="deep-purple lighten-2" dark>
                        {{ text['Sign up'] }}
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
</v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      firstName: '',
      lastName: '',
      password: '',
      password2: '',
      passwordVisible: true,
      password2Visible: true,
      nameRules: [
        (v) => !!v || 'Cannot be empty!',
        (v) => (v && v.length <= 30) || 'Cannot be over 30 characters long!'],
      email: '',
      emailRules: [
        (v) => !!v || 'Cannot be empty!',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Not a valid email address!'
      ],
      passwordRules: [
        (v) => !!v || 'Cannot be empty!',
        (v) => (v && v.length >= 8) || 'Must be at least 8 characters long!'
      ]
    }),
    computed: {
      comparePasswords () {
        return this.password !== this.password2 ? 'Passwords do not match!' : true
      },
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
        if (this.$refs.form.validate()) {
          this.$store.dispatch('registerUser', { email: this.email, password: this.password, first: this.firstName, last: this.lastName })
        }
      },
      clear () {
        this.$refs.form.reset()
      },
      onDismissed () {
        console.log('Alert dismissed!')
        this.$store.dispatch('clearError')
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
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
    background: #CFD8DC;
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