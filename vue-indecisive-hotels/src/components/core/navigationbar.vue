<template>
  <v-container v-bind:style="heightBinder" fluid grid-list-xs class="py-0 px-0">
    <v-dialog v-model="showLogin" max-width="350px">
      <login-dialog></login-dialog>
    </v-dialog>
    <div style="max-width: 1200px; max-height: 70px; margin: auto" v-if="!$vuetify.breakpoint.xsOnly">
      <v-layout row justify-space-between>
        <v-flex d-flex sm1 v-if="!$vuetify.breakpoint.xsOnly">
          <v-avatar tile align-start size="70">
            <img src="@/assets/logo.png" class="hidden-xs-only">
          </v-avatar>
        </v-flex>
        <v-flex d-flex sm4 md6 lg8 offset-sm3 offset-md2 offset-lg1 v-if="!$vuetify.breakpoint.smAndDown" class="text-xs-center">
          <h3 style="font-family: 'PT Serif'; line-height: 70px; color: #757575">{{ quote }}</h3>
        </v-flex>
        <v-flex d-flex xs6 sm4 md3 lg2>
          <v-layout row wrap class="text-xs-center">
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex d-flex xs12 style="line-height: 100%">
                  <span class="caption">English | Spanish | Chinese</span>  
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex d-flex justify-center>
              <v-layout row wrap>
                <v-flex d-flex xs6 v-if="!authenticated">
                  <v-btn flat round block outline color="red darken-1" to="signup">
                    Sign Up
                  </v-btn>
                </v-flex>
                <v-flex d-flex xs6 v-if="!authenticated">
                  <v-btn flat round block outline color="red darken-1" @click="toggleLogin">
                    Sign In
                  </v-btn>
                </v-flex>
                <v-flex d-flex xs12 v-if="authenticated">
                  <v-btn flat round block outline color="red darken-1" @click="onLogout">
                    Logout
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 class="hidden-xs-only">
        </v-flex>
      </v-layout>
    </div>
    <div>
      <v-toolbar flat :app="$vuetify.breakpoint.xsOnly" dense dark color="brown darken-2">
        <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="toggleSidebar"></v-toolbar-side-icon>
        <v-toolbar-title class="hidden-sm-and-up">Indecisive Hotels</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat v-for="(item, i) in menuItems" :key="i" :to="item.link" class="no-transform">
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
      </v-toolbar>
    </div>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Indecisive Hotels',
        quote: '“The easiest decision you will ever make.”',
        menuItems: [
          {title: 'Home', link: '/'},
          {title: 'myBookings', link: '/mybookings'},
          {title: 'myAccount', link: '/profile'},
          {title: 'FAQs', link: '/faqs'},
          {title: 'Contact Us', link: '/contact'}
        ]
      }
    },
    methods: {
      toggleSidebar: function (context) {
        this.$store.commit('toggleSidebar')
      },
      toggleLogin: function (context) {
        this.$store.commit('toggleLogin')
      },
      onResize () {
        if (window.innerWidth > 600) {
          this.$store.commit('setShowSidebar', false)
        }
      },
      onLogout () {
        this.$store.dispatch('logout')
      }
    },
    computed: {
      authenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      heightBinder () {
        return {
          maxHeight: (this.$vuetify.breakpoint.xsOnly ? '48px' : '116px')
        }
      },
      showLogin: {
        get () {
          return this.$store.getters.getShowLogin
        },
        set (value) {
          this.$store.commit('setShowLogin', value)
        }
      }
    }
  }
</script>

<style scoped>
.no-transform {
  text-transform: none !important;
}
</style>