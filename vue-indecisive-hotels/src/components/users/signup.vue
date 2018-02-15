<template>
  <v-content>
    <v-layout column justify-center align-center>
        <v-card>
          <v-form v-model="valid" ref="form">
            <v-container grid-list-xl fluid>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="Password"
                    v-model="password"
                    :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (passwordVisible = !passwordVisible)"
                    :type="passwordVisible ? 'password' : 'text'"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    label="First Name"
                    v-model="firstName"
                    :rules="nameRules"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    label="Last Name"
                    v-model="lastName"
                    :rules="nameRules"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-checkbox
                    label="Do you agree?"
                    v-model="checkbox"
                    :rules="[v => !!v || '']"
                    required
                  ></v-checkbox>
                </v-flex>
                <v-flex xs12>
                  <v-btn
                    @click="submit"
                    :disabled="!valid"
                  >
                    submit
                  </v-btn>
                  <v-btn @click="clear">clear</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
    </v-layout>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      firstName: '',
      lastName: '',
      password: '',
      passwordVisible: true,
      nameRules: [
        (v) => !!v || '',
        (v) => (v && v.length <= 30) || ''
      ],
      email: '',
      emailRules: [
        (v) => !!v || '',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || ''
      ],
      passwordRules: [
        (v) => !!v || '',
        (v) => (v && v.length >= 8) || ''
      ],
      checkbox: false
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          console.log('success')
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>