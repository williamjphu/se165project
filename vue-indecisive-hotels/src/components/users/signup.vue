<template>
  <v-container fluid class="py-0 px-0">
    
      <v-flex xs12 v-if="error">
        <v-layout row>
          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </v-layout>
      </v-flex>
      <v-container >
        <v-layout >
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-card-text>
                <v-container>

                  <v-form v-model="valid" ref="form">
                    <v-text-field
                    label="First Name, Last Name"
                    v-model="firstName, lastName"
                    :rules="nameRules"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="Password"
                    v-model="password"
                    :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (passwordVisible = !passwordVisible)"
                    :type="passwordVisible ? 'password' : 'text'"
                    :rules="passwordRules"
                    required
                    ></v-text-field>
                    <v-text-field
                    label="Confirm Password"
                    v-model="password2"
                    :append-icon="password2Visible ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (password2Visible = !password2Visible)"
                    :type="password2Visible ? 'password' : 'text'"
                    :rules="passwordRules.concat([comparePasswords])"
                    required
                    ></v-text-field>

                    <v-layout column align-center justify-center>
                    <h4 class="grey-lighten--text">OR</h4>
                    <h4 class="subheading">sign up with</h4>
                    </v-layout>

                    <v-container fluid grid-list-md>
                    <v-layout row wrap>
                    <v-flex xs4>
                    <v-btn
                  @click="googleSignup"
                  :disabled="loading"
                   :loading="loading" 
                   block color="secondary"
                  >
                   Google
                  </v-btn>
                  </v-flex>
                  <v-flex xs4>
                  <v-btn
                  @click="facebookSignup"
                  :disabled="loading" :loading="loading" block color="primary"
                  >
                   Facebook
                  </v-btn>
                  </v-flex>
                  <v-flex xs4>
                  <v-btn
                  @click="twitterSignup"
                  :disabled="loading" 
                  :loading="loading"
                   block color="primary"
                  >
                   Twitter
                  </v-btn>
                  </v-flex>
                  </v-layout>
                  </v-container>

                  <v-container fluid class="pa-0">
                  <v-layout>
                  <v-flex xs12 sm6 offset-sm3>
                  <div class="text-xs-center">
                  <v-card flat>
                  <v-card-text>
                  <v-btn 
                    @click="submit"
                    :disabled="!valid || loading" :loading="loading" 
                    <v-btn color="yellow darken-2" large>Submit</v-btn>
                    </v-btn>
                    </v-card-text>
                    </v-card>
                    </div>
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
        (v) => (v && v.length <= 30) || 'Cannot be over 30 characters long!'
      ],
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