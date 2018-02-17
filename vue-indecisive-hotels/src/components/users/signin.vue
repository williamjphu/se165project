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
          <form>
    <v-text-field
      label="User Name"
      v-model="name"
      :error-messages="nameErrors"
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
      required
    ></v-text-field>
   <v-text-field
      label="E-mail"
      v-model="email"
      :error-messages="emailErrors"
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
      required
    ></v-text-field>
    <v-text-field
     name="password"
      label="Password"
      v-model="password"
      :error-messages="passwordErrors"
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
      required
    ></v-text-field>
    <v-card-actions>
      <v-btn @click="submit">Sign in</v-btn>
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
  data() {
   return {
   email: '',
   password: '',
   
  }
 },
 computed: {
  comparePasswords() {
   return this.password !== this.confirmPassword ? 'Passwords do not match ': ''
  }
 },
 methods: {
  onSignin () {
   //Vuex
    console.log({email:this.email, password:this.password})
  }
 }
}
</script>