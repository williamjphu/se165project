
<template>
<v-container fluid class="py-0 px-0">
    <section>
      <v-parallax src="http://4d929081ba88c9ed3ddf-c79bd9a987c770ca05f310489412f8c1.r41.cf1.rackcdn.com/lps/assets/u/who3462po.126147_tb-2.jpg"> 
 <v-container>
  <v-layout>
   <v-flex xs12 sm6 offset-sm3>
    <v-card>
     <v-card-text>
      <v-container>
      <form @submit.prevent="onSignup">
        <v-text-field
            name="email"
            label="E-Mail"
            v-model="email"
           :error-messages="emailErrors"
           @input="$v.email.$touch()"
           @blur="$v.email.$touch()"
            required>
        </v-text-field>
        <v-text-field
            name="password"
            label="Password"
            id="password"
            v-model="password"
            :append-icon="passwordVisible ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (passwordVisible = !passwordVisible)"
            :type="passwordVisible ? 'password' : 'text'"
            :rules="passwordRules"
            required>
        </v-text-field>
        <v-text-field
              name="confirmPassword"
              label="Confirm Password"
              id="confirmPassword"
              v-model="password"
              type="password"
             :rule="[comparePasswords]">
        </v-text-field>
       <v-text-field
              label="First Name"
               v-model="firstName"
               :rules="nameRules"
               required
       ></v-text-field>
       <v-text-field
                label="Last Name"
                v-model="lastName"
                :rules="nameRules"
                required
        ></v-text-field>
                <v-card-actions>
               <v-btn @click="submit">Sign up</v-btn>
                </v-card-actions>
          </form>
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
     password: '',
     confirmPassword: ''
    
    }
  },
   computed: {
    comparePasswords () {
     return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
  
    user () {
    return this.$store.getters.user
    }
   },
   watch: {
    user (value) {
     if (value !== null && value !== undefined) {
      this.$router.push('/')
     }
    }
   },
   methods: {
    onSignup () {
     this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
   }
 } 
</script>




