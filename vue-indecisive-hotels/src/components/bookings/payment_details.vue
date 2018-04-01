<template>
  <v-container fluid py-0 px-1>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 d-flex v-if="!authenticated">
              <v-container style="max-width: 350px">
                <login-dialog></login-dialog>
              </v-container>
            </v-flex>
            <v-flex xs v-if="authenticated">
              <p>HELLO WORLD</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      authenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>