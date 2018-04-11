<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-progress-circular
          :size="150"
          :width="17"
          :rotate="-90"
          :value="value"
          color="primary"
        >
          <span class="display-1">{{ value/10 }}</span>
        </v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        interval: {},
        points: 19,
        value: 0
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value < (this.points % 10) * 10) {
          this.value += 10
        }
      }, 500)
    }
  }
</script>