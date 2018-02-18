<template>
  <v-container fluid class="py-0 px-0">
    <section>
      <v-parallax src="http://4d929081ba88c9ed3ddf-c79bd9a987c770ca05f310489412f8c1.r41.cf1.rackcdn.com/lps/assets/u/who3462po.126147_tb-2.jpg"> 
        <v-flex xs12 v-if="error">
          <v-layout row>
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
          </v-layout>
        </v-flex>
        <v-container>
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-form>
                      <v-text-field
                      label="E-mail"
                      v-model="email"
                      required
                      ></v-text-field>
                      <v-text-field
                      label="Password"
                      v-model="password"
                      type="password"
                      required
                      ></v-text-field>
                      <v-card-actions>
                        <v-btn @click="submit" :disabled="loading" :loading="loading">Sign in</v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>
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
      }
    },
    methods: {
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
          this.$router.push('/')
        }
      }
    }
  }
</script>