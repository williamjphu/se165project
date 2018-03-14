<template>
  <v-alert type="error" dismissible :value="true">
    {{ text }}
  </v-alert>
</template>

<script>
  export default {
    data () {
      return {
        text: 'Hello world'
      }
    }
  }
</script>