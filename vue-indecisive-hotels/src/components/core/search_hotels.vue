<template>
  <v-container px-0>
    <!-- CARD layout for search-bar on homepage -->
    <v-layout row align-center wrap v-if="!bar">
      <v-flex d-flex xs12 sm10 md6 lg4 offset-sm1 offset-md3 offset-lg4>
        <v-card style="opacity: 0.7;" color="brown darken-1" dark class="text-xs-center">
          <v-container grid-list-xl>
            <v-form>
              <v-layout wrap>
                <v-flex xs12>
                  <span class="title">BOOK NOW</span>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    prepend-icon="room"
                    label="Place"
                    v-model="location"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
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
                      label="Check In"
                      v-model="dateFormatted"
                      @blur="date = parseDate(dateFormatted)"
                    ></v-text-field>
                    <v-date-picker v-model="date" @input="dateFormatted = formatDate($event)" 
                      :min="allowedIn.min" :max="allowedIn.max" @change="menu = !menu">
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
                <v-flex xs12>
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
                      label="Check Out"
                      v-model="dateFormatted2"
                      @blur="date = parseDate(dateFormatted2)"
                    ></v-text-field>
                    <v-date-picker v-model="date2" @input="dateFormatted2 = formatDate($event)"
                      :min="allowedOut.min" :max="allowedOut.max" @change="menu2 = !menu2">
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
                <v-flex xs12>
                  <v-select
                    prepend-icon="vpn_key"
                    label="Rooms"
                    v-model="rooms"
                    :items="[1, 2, 3, 4, 5]"
                    required
                  ></v-select>
                </v-flex>
              </v-layout>
              <v-card-actions>
                <v-btn
                  light
                  block
                  color="white"
                  to="search"
                >Search</v-btn>
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
                  <v-text-field
                    prepend-icon="room"
                    label="Place"
                    v-model="location"
                    required
                    solo
                  ></v-text-field>
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
                      label="Check In"
                      v-model="dateFormatted"
                      solo
                      @blur="date = parseDate(dateFormatted)"
                    ></v-text-field>
                    <v-date-picker v-model="date" @input="dateFormatted = formatDate($event)" 
                      :min="allowedIn.min" :max="allowedIn.max" @change="menu = !menu">
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
                      label="Check Out"
                      v-model="dateFormatted2"
                      solo
                      @blur="date = parseDate(dateFormatted2)"
                    ></v-text-field>
                    <v-date-picker v-model="date2" @input="dateFormatted2 = formatDate($event)"
                      :min="allowedOut.min" :max="allowedOut.max" @change="menu2 = !menu2">
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 sm4 md3 lg2>
                  <v-select
                    prepend-icon="vpn_key"
                    label="Rooms"
                    v-model="rooms"
                    :items="[1, 2, 3, 4, 5]"
                    required
                    solo
                  ></v-select>
                </v-flex>
                <v-flex xs12 md3 lg2>
                  <v-btn
                    dark
                    block
                    color="brown darken-2"
                    to="search"
                  >Search</v-btn>
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
    data: () => ({
      date: null,   // check-in date picker storage
      date2: null,  // check-out date picker storage
      dateFormatted: null,  // check-in date for textfield
      dateFormatted2: null, // check-out date for textfield
      menu: false,  // controls if check-in date picker should be displayed
      menu2: false, // controls if check-out date picker should be displayed
      rooms: 1, // room #
      location: null,  // search location
      allowedIn: {min: null, max: null} // range for check-in days (1 year from day after current date)
    }),
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
      this.dateFormatted = this.formatDate(this.allowedIn.min)
      this.dateFormatted2 = this.formatDate(this.allowedOut.min)
      this.date = this.parseDate(this.dateFormatted)
      this.date2 = this.parseDate(this.dateFormatted2)
      // calculate the day difference between two Date objects:
      // Math.ceil((maxDate - minDate) / (1000 * 3600 * 24))
    }
  }
</script>