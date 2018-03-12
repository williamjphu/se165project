<template>
  <v-container style="max-width: 1200px" py-0 px-0>
    <search-hotels bar="true" />
    <section>
      <v-container class="text-xs-center" py-0 px-0>
        <v-layout row wrap>
          <v-flex xs12 md3 :pr-4="!$vuetify.breakpoint.smAndDown">
            <v-card flat>
              <search-filter></search-filter>
            </v-card>
          </v-flex>
          <v-flex xs12 md9>
            <v-card flat>
              <search-card v-for="(hotel, i) in hotels" :key="i" :hotel="hotel"></search-card>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-container>
</template>

<script>
  import searchCard from './search_card'
  import searchFilter from './search_filter'
  export default {
    data () {
      return {
        // Any variable data should go in here
        sort: 1,
        hotels2: [
          {
            name: 'Independent Hotel',
            address: '1 Washington Square',
            city: 'San Jose',
            state: 'CA',
            country: 'United States',
            stars: 4,
            reviewsCount: 71,
            reviewsAverage: 7.9,
            originalRate: 519,
            lowestRate: 129,
            offers: ['Breakfast', 'Stuff', 'More stuff'],
            options: ['Something', 'Something else', 'More options'],
            images: ['https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg', 'https://az760333.vo.msecnd.net/-/media/property/jdv/vitale/vitale-guestroom-king-03-pd0912-crpd1600x760.jpg?ts=93e9e6c4-b97c-4307-93c4-443dda035aa5', 'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027', 'https://phgcdn.com/images/uploads/PARBH/corporatemasthead/hotel-balzac.jpg', 'https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg']
          },
          {
            name: 'Hotel Indecisive 2',
            address: '188 Moore Drive',
            city: 'Santa Clara',
            state: 'CA',
            country: 'United States',
            stars: 5,
            reviewsCount: 1990,
            reviewsAverage: 8.9,
            originalRate: 989,
            lowestRate: 449,
            offers: ['Breakfast', 'More stuff'],
            options: ['Something', 'More options'],
            images: ['https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg', 'https://az760333.vo.msecnd.net/-/media/property/jdv/vitale/vitale-guestroom-king-03-pd0912-crpd1600x760.jpg?ts=93e9e6c4-b97c-4307-93c4-443dda035aa5', 'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027', 'https://phgcdn.com/images/uploads/PARBH/corporatemasthead/hotel-balzac.jpg', 'https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg']
          },
          {
            name: 'Some other hotel',
            address: '1729 Sycamore Lake Rd',
            city: 'Houston',
            state: 'TX',
            country: 'United States',
            stars: 3,
            reviewsCount: 171,
            reviewsAverage: 6.3,
            originalRate: 299,
            lowestRate: 89,
            offers: [],
            options: ['Something', 'Something else', 'More options'],
            images: ['https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg', 'https://az760333.vo.msecnd.net/-/media/property/jdv/vitale/vitale-guestroom-king-03-pd0912-crpd1600x760.jpg?ts=93e9e6c4-b97c-4307-93c4-443dda035aa5', 'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027', 'https://phgcdn.com/images/uploads/PARBH/corporatemasthead/hotel-balzac.jpg', 'https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg']
          },
          {
            name: 'Hotel Imperial',
            address: '1223 Imperial St',
            city: 'Riverdale',
            state: 'NY',
            country: 'United States',
            stars: 4,
            reviewsCount: 271,
            reviewsAverage: 7.3,
            originalRate: 489,
            lowestRate: 229,
            offers: ['Breakfast', 'Stuff', 'More stuff'],
            options: ['Something', 'Something else', 'More options'],
            images: ['https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg', 'https://az760333.vo.msecnd.net/-/media/property/jdv/vitale/vitale-guestroom-king-03-pd0912-crpd1600x760.jpg?ts=93e9e6c4-b97c-4307-93c4-443dda035aa5', 'https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg?mh=666&la=en&h=666&w=1366&mw=1366&hash=7890A13D2C4FE83769F4A571B997007215155027', 'https://phgcdn.com/images/uploads/PARBH/corporatemasthead/hotel-balzac.jpg', 'https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg']
          }
        ]
      }
    },
    computed: {
      // Any variables that need to be dynamically recomputed go in here
      hotels () {
        const sort = this.sort
        var hotels = this.hotels2
        if (sort === 0) {
          return hotels.sort((a, b) => a.lowestRate - b.lowestRate)
        } else if (sort === 1) {
          return hotels.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sort === 2) {
          return hotels.sort((a, b) => a.stars - b.stars)
        } else {
          return hotels
        }
      }
    },
    components: {
      'search-filter': searchFilter,
      'search-card': searchCard
    }
  }
</script>