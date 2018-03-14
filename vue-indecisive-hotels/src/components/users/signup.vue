<template>
  <v-container fluid fill-height style="background-image: url(https://www.sanssouci-wien.com/wp-content/uploads/2017/02/sans-souci-wien-lobby_c_gregor-titze-1920x1080.jpg?x57857)">
  <v-container fluid class="text-xs-center" px-0 style="max-width: 1200px">
    <v-layout>
      <v-flex d-flex xs12 sm6 offset-sm3>
        <v-card style="opacity: 0.95;" color="brown lighten-1">
          <v-card-text>
            <v-container>
              <v-layout row wrap>
                <v-flex d-flex xs12 v-if="error">
                  <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                </v-flex>
                <v-flex d-flex xs12 pb-4>
                  <span class="headline" style="color: #FFE082; font-weight: 500">Comfort Awaits.</span>
                </v-flex>
                <v-flex d-flex xs12 pb-4>
                  <span class="subheading" style="color: #FFD54F; font-weight: 400">Register and discover the best of the web.</span>
                </v-flex>
                <v-flex xs12 align-center>
                  <span class="subheading" style="color: #FFD54F; font-weight: 400">And it's absolutely</span>
                  <span class="title" style="color: #FFECB3;"> free</span>
                </v-flex>
                <v-flex xs12 pt-4 pb-2>
                  <div class="strike">
                    <span style="color: #FFE082">Sign up with</span>
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
                    <span style="color: #FFE082">or with email</span>
                  </div>
                </v-flex>
              </v-layout>
              <v-form v-model="valid" ref="form">
                <v-container class="px-0">
                  <v-layout row wrap>
                    <v-flex xs12 pb-2>
                      <v-text-field
                        prepend-icon="person"
                        label="Full name"
                        v-model="name"
                        :rules="nameRules"
                        required
                        solo
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 pb-2>
                      <v-text-field
                        prepend-icon="email"
                        label="E-mail"
                        v-model="email"
                        :rules="emailRules"
                        required
                        solo
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 pb-2>
                      <v-text-field
                        prepend-icon="lock"
                        label="Password"
                        v-model="password"
                        :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (passwordVisible = !passwordVisible)"
                        :type="passwordVisible ? 'password' : 'text'"
                        :rules="passwordRules"
                        required
                        solo
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 pb-2>
                      <v-text-field
                        prepend-icon="lock"
                        label="Confirm Password"
                        v-model="password2"
                        :append-icon="password2Visible ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (password2Visible = !password2Visible)"
                        :type="password2Visible ? 'password' : 'text'"
                        :rules="passwordRules.concat([comparePasswords])"
                        required
                        solo
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 pb-4>
                      <v-btn @click="submit" :disabled="loading" :loading="loading" block color="amber">
                        Sign up
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
      name: '',
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
          console.log({ email: this.email })
          this.$store.dispatch('registerUser', { email: this.email, password: this.password })
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
    background: #FFE082;
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