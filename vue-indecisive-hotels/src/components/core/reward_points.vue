<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md4>
        Collect 1 point per night! For every 10 points, get 1 night free!
      </v-flex>
      <v-flex xs12 md4 d-flex>
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
      <v-flex xs12 md4>
        You currently have {{ ~~(points/10) }} free night{{ ~~(points/10) == 1 ? '' : 's'}}. Collect {{ 10 - (points % 10) }} more point{{ points % 10 == 9 ? '' : 's' }} to earn another free night!
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
          this.value = (this.points % 10) * 10
        }
      }, 200)
    }
  }
</script>