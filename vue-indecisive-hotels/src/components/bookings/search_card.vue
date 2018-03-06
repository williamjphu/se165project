<template>
  <v-container fluid py-0 px-0>
    <v-card>
      <v-container d-flex fluid py-0 px-0 grid-list-xs class="text-xs-left">
        <v-layout row wrap>
          <v-flex xs3>
            <v-card-media :src="hotel.images[0]" height="150"></v-card-media>
          </v-flex>
          <v-flex xs5>
            YOLO22222222222222222222222222222222222222222222222222222222222222222222222222222
          </v-flex>
          <v-flex xs4>
            YOLO3333333333333333333333333333333333333333333333333333333333333333333333333333333
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        // Any variable data should go in here
        hotel: {
          name: 'Hotel Indecisive',
          address: '1 Washington Square',
          city: 'San Jose',
          state: 'CA',
          country: 'United States',
          stars: 4,
          lowestRate: 126,
          images: ['https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg', 'https://az760333.vo.msecnd.net/-/media/property/jdv/vitale/vitale-guestroom-king-03-pd0912-crpd1600x760.jpg?ts=93e9e6c4-b97c-4307-93c4-443dda035aa5', 'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027', 'https://phgcdn.com/images/uploads/PARBH/corporatemasthead/hotel-balzac.jpg']
        }
      }
    },
    computed: {
      // Any variables that need to be dynamically recomputed go in here
    }
  }
</script>