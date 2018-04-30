<template>
  <v-container :style="heightBinder" fluid grid-list-xs py-0 px-0>
    <v-dialog v-model="showLogin" max-width="350px">
      <login-dialog></login-dialog>
    </v-dialog>
    <v-container px-0 py-0 fluid style="max-height: 70px;" v-if="$vuetify.breakpoint.lgAndUp">
      <v-layout row justify-space-between wrap>
        <v-flex lg1>
          <v-avatar tile align-start size="70">
            <img src="@/assets/logo.png">
          </v-avatar>
        </v-flex>
        <v-flex d-flex lg3 offset-lg3 class="text-xs-center">
          <h3 style="font-family: 'PT Serif'; line-height: 70px; color: #757575">{{ quote }}</h3>
        </v-flex>
        <v-flex d-flex lg3 offset-lg1>
          <v-layout row wrap class="text-xs-center">
            <v-flex d-flex lg4 :offset-lg4="authenticated">
              <v-select :items="languages" v-model="language"></v-select>
            </v-flex>
            <v-flex d-flex lg4 v-if="!authenticated">
              <v-btn flat round outline color="red darken-1" to="signup">
                {{ text['Sign up'] }}
              </v-btn>
            </v-flex>
            <v-flex d-flex lg4 v-if="!authenticated">
              <v-btn flat round outline color="red darken-1" @click="toggleLogin">
                {{ text['Sign in'] }}
              </v-btn>
            </v-flex>
            <v-flex d-flex lg4 v-if="authenticated">
              <v-btn flat round outline color="red darken-1" @click="onLogout">
                {{ text['Logout'] }}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <div>
      <v-toolbar :app="$vuetify.breakpoint.mdAndDown" dense dark color="blue-grey darken-2">
        <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="toggleSidebar"></v-toolbar-side-icon>
        <v-toolbar-title class="hidden-lg-and-up">{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-md-and-down">
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
        title: 'Indecisive Hotels'
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
        this.$router.push('/')
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
      text () {
        return this.$store.getters.text
      },
      quote () {
        return '“' + this.text['The easiest decision you will ever make'] + '.”'
      },
      languages () {
        return this.$store.getters.languages
      },
      menuItems () {
        return [
          {title: this.text['Home'], link: '/'},
          {title: this.text['My Bookings'], link: '/mybookings'},
          {title: this.text['myAccount'], link: '/profile'},
          {title: this.text['FAQs'], link: '/faqs'},
          {title: this.text['About Us'], link: '/contact'}
        ]
      },
      language: {
        get () {
          return this.$store.getters.selectedLanguage
        },
        set (value) {
          this.$store.commit('setSelectedLanguage', value)
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