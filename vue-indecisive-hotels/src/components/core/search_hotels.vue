<template>
  <v-container class="px-0">
    <!-- CARD layout for search-bar on homepage -->
    <v-layout row align-center wrap v-if="!bar">
      <v-flex d-flex xs12 sm10 md6 lg4 offset-sm1 offset-md3 offset-lg4>
        <v-card style="opacity: 0.85;" color="blue-grey darken-1" dark class="text-xs-center">
          <v-container grid-list-xl>
            <v-form>
              <v-layout wrap>
                <v-flex xs12>
                  <span class="title">{{ text['Book now'] }}</span>
                </v-flex>
                <v-flex xs12 py-1>
                  <vuetify-google-autocomplete
                    id="placeCard"
                    :label="text['Location']"
                    placeholder=""
                    prepend-icon="room"
                    types=""
                    required
                    v-on:placechanged="getDestLocationData"
                    v-on:no-results-found="destLocation = null"
                  ></vuetify-google-autocomplete>
                </v-flex>
                <v-flex xs12 py-1>
                  <v-dialog
                    v-model="menu"
                    lazy
                    full-width
                    width="290px"
                  >
                    <v-text-field
                      prepend-icon="date_range"
                      required
                      slot="activator"
                      :label="text['Check In']"
                      v-model="dateFormatted"
                      @blur="date = parseDate(dateFormatted)"
                    ></v-text-field>
                    <v-date-picker v-model="date" @input="dateFormatted = formatDate($event)" 
                      :min="allowedIn.min" :max="allowedIn.max" @change="menu = !menu" color="blue-grey darken-2" :locale="locale">
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 py-1>
                  <v-dialog
                    v-model="menu2"
                    lazy
                    full-width
                    width="290px"
                  >
                    <v-text-field
                      prepend-icon="date_range"
                      required
                      slot="activator"
                      :label="text['Check Out']"
                      v-model="dateFormatted2"
                      @blur="date = parseDate(dateFormatted2)"
                    ></v-text-field>
                    <v-date-picker v-model="date2" @input="dateFormatted2 = formatDate($event)"
                      :min="allowedOut.min" :max="allowedOut.max" @change="menu2 = !menu2" color="blue-grey darken-2" :locale="locale">
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 py-1>
                  <v-select
                    prepend-icon="vpn_key"
                    :label="text['Rooms']"
                    v-model="rooms"
                    :items="[1, 2, 3, 4, 5]"
                    required
                  ></v-select>
                </v-flex>
              </v-layout>
              <v-card-actions>
                <v-btn
                  light
                  :disabled="destLocation === null"
                  block
                  color="white"
                  @click="searchPage"
                >{{ text['Search']}}</v-btn>
              </v-card-actions>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- BAR layout for search-bar in results -->
    <v-layout row align-center wrap v-if="bar">
      <v-flex d-flex xs12>
        <v-card class="text-xs-center">
          <v-container grid-list-xl>
            <v-form>
              <v-layout wrap>
                <v-flex xs12 lg4>
                  <vuetify-google-autocomplete
                    id="placeBar"
                    :label="text['Location']"
                    placeholder=""
                    prepend-icon="room"
                    types=""
                    required
                    solo
                    v-on:placechanged="getDestLocationData"
                    v-on:no-results-found="destLocation = null"
                ></vuetify-google-autocomplete>
                </v-flex>
                <v-flex xs12 sm4 md3 lg2>
                  <v-dialog
                    v-model="menu"
                    lazy
                    full-width
                    width="290px"
                  >
                    <v-text-field
                      prepend-icon="date_range"
                      required
                      slot="activator"
                      :label="text['Check In']"
                      v-model="dateFormatted"
                      solo
                      @blur="date = parseDate(dateFormatted)"
                    ></v-text-field>
                    <v-date-picker v-model="date" @input="dateFormatted = formatDate($event)" 
                      :min="allowedIn.min" :max="allowedIn.max" @change="menu = !menu" color="blue-grey darken-2" :locale="locale">
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 sm4 md3 lg2>
                  <v-dialog
                    v-model="menu2"
                    lazy
                    full-width
                    width="290px"
                  >
                    <v-text-field
                      prepend-icon="date_range"
                      required
                      slot="activator"
                      :label="text['Check Out']"
                      v-model="dateFormatted2"
                      solo
                      @blur="date = parseDate(dateFormatted2)"
                    ></v-text-field>
                    <v-date-picker v-model="date2" @input="dateFormatted2 = formatDate($event)"
                      :min="allowedOut.min" :max="allowedOut.max" @change="menu2 = !menu2" color="blue-grey darken-2" :locale="locale">
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 sm4 md3 lg2>
                  <v-select
                    prepend-icon="vpn_key"
                    :label="text['Rooms']"
                    v-model="rooms"
                    :items="[1, 2, 3, 4, 5]"
                    required
                    solo
                  ></v-select>
                </v-flex>
                <v-flex xs12 md3 lg2>
                  <v-btn
                    :dark="destLocation !== null"
                    block
                    :disabled="destLocation === null"
                    color="blue-grey darken-2"
                    @click="searchPage"
                  >{{ text['Search'] }}</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['bar'],
    data () {
      return {
        date: null,   // check-in date picker storage
        date2: null,  // check-out date picker storage
        dateFormatted: null,  // check-in date for textfield
        dateFormatted2: null, // check-out date for textfield
        menu: false,  // controls if check-in date picker should be displayed
        menu2: false, // controls if check-out date picker should be displayed
        rooms: 1, // room #
        destLocation: null,  // trip destLocation
        radius: null,  // search radius
        allowedIn: {min: null, max: null} // range for check-in days (1 year from day after current date)
      }
    },
    computed: {
      // range for check-out days (1 day more than check-in day, for up to a year)
      allowedOut () {
        if (this.dateFormatted !== null) {
          var temp1 = this.retrieveDate(this.dateFormatted)
          var temp2 = this.retrieveDate(this.dateFormatted)
          temp1.setDate(temp1.getDate() + 1)
          temp2.setDate(temp2.getDate() + 365)
          return {
            min: temp1.toISOString().substr(0, 10),
            max: temp2.toISOString().substr(0, 10)
          }
        }
        return this.allowedIn
      },
      text () {
        return this.$store.getters.text
      },
      locale () {
        var language = this.$store.getters.selectedLanguage
        if (language === 'Español') {
          return 'es-419'
        } else if (language === '國語') {
          return 'zh-tw'
        } else if (language === 'عربي') {
          return 'ar-sa'
        } else if (language === 'Tiếng Việt') {
          return 'vi-vn'
        } else if (language === 'Czech') {
          return 'cs-cz'
        } else {
          return 'en-us'
        }
      }
    },
    watch: {
      // when check-in date is changed, make sure check-out date is not less than new check-in date
      dateFormatted: function (val) {
        if (this.retrieveDate(val) >= this.retrieveDate(this.dateFormatted2)) {
          const temp = this.retrieveDate(this.dateFormatted)
          temp.setDate(temp.getDate() + 1)
          this.dateFormatted2 = this.formatDate(temp.toISOString().substr(0, 10))
          this.date2 = this.parseDate(this.dateFormatted2)
        }
      }
    },
    methods: {
      // converts YYYY-MM-DD string to MM/DD/YY
      formatDate (date) {
        if (!date) {
          return null
        }

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      // converts MM/DD/YY string to YYYY-MM-DD
      parseDate (date) {
        if (!date) {
          return null
        }
        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      // retrieves a Date object from MM/DD/YY format string
      retrieveDate (date) {
        if (!date) {
          return null
        }
        return new Date(date)
      },
      searchPage () {
        const searchQuery = {
          location: this.destLocation,
          dateIn: this.dateFormatted,
          dateOut: this.dateFormatted2,
          nights: Math.ceil((new Date(this.dateFormatted2) - new Date(this.dateFormatted)) / (1000 * 3600 * 24)),
          rooms: this.rooms
        }
        this.$router.replace('/search')
        this.$store.dispatch('findPlaces', searchQuery)
      },
      // get destLocation from autocomplete result
      getDestLocationData (addressData, placeResultData, containerId) {
        this.destLocation = new window.google.maps.LatLng(
            {lat: addressData.latitude, lng: addressData.longitude})
      }
    },
    mounted () {
      // serves to initialize the check-in and check-out dates
      const minDate = new Date()
      const maxDate = new Date()
      maxDate.setDate(minDate.getDate() + 364)
      const min = minDate.toISOString().substr(0, 10)
      const max = maxDate.toISOString().substr(0, 10)
      this.allowedIn = {min, max}
      if (this.$store.getters.getQuery === null || this.$store.getters.getQuery === undefined) {
        this.dateFormatted = this.formatDate(this.allowedIn.min)
        this.dateFormatted2 = this.formatDate(this.allowedOut.min)
      } else {
        this.dateFormatted = this.$store.getters.getQuery.dateIn
        this.dateFormatted2 = this.$store.getters.getQuery.dateOut
        this.rooms = this.$store.getters.getQuery.rooms
      }
      this.date = this.parseDate(this.dateFormatted)
      this.date2 = this.parseDate(this.dateFormatted2)
      // calculate the day difference between two Date objects:
      // Math.ceil((maxDate - minDate) / (1000 * 3600 * 24))
    }
  }
</script>