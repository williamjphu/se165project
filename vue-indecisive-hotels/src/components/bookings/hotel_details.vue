<template>
  <v-container fluid py-0 px-1>
    <v-card color="blue">
      {{ hotel.name }}
    </v-card>
  </v-container>
</template>

<script>
  export default {
    props: ['data'],
    computed: {
      hotel () {
        if (this.data === null || this.data === undefined) {
          return {
            name: 'Default'
          }
        }
        return this.data
      }
    }
  }
</script>