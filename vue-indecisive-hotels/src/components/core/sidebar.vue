<template>
  <v-navigation-drawer
    clipped
    disable-route-watcher
    disable-resize-watcher
    v-model="visible"
    fixed
    app
  >
    <v-list>
      <v-list-tile
        value="true"
        v-for="(item, i) in items"
        :key="i"
        :to="item.link"
        @click="visible = !visible"
      >
        <v-list-tile-action>
          <font-awesome-icon size="lg" color="black" :icon="item.icon"/>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="black--text">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        value="true"
        to="signin"
        v-if="!authenticated"
        @click="visible = !visible"
      >
        <v-list-tile-action>
          <font-awesome-icon size="lg" color="black" icon="sign-in-alt"/>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="black--text">{{ text['Sign in'] }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        value="true"
        to="signup"
        v-if="!authenticated"
        @click="visible = !visible"
      >
        <v-list-tile-action>
          <font-awesome-icon size="lg" color="black" icon="user-plus"/>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="black--text">{{ text['Sign up'] }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        value="true"
        @click="onLogout"
        v-if="authenticated"
      >
        <v-list-tile-action>
          <font-awesome-icon size="lg" color="black" icon="sign-out-alt"/>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="black--text">{{ text['Logout'] }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-group
        no-action
        value="false"
      >
        <v-list-tile slot="activator">
          <v-list-tile-action>
            <font-awesome-icon size="lg" color="black" icon="globe"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="black--text">{{ $store.getters.selectedLanguage }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          v-for="(language, i) in $store.getters.languages"
          :key="i"
          @click="selectLanguage(language)"
        >
          <v-list-tile-title v-text="language"></v-list-tile-title>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    computed: {
      visible: {
        get () {
          return this.$store.getters.getShowSidebar
        },
        set (val) {
          this.$store.commit('setShowSidebar', val)
        }
      },
      authenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      text () {
        return this.$store.getters.text
      },
      items () {
        return [
          {title: this.text['Home'], link: '/', icon: 'home'},
          {title: this.text['My Bookings'], link: '/mybookings', icon: 'calendar-check'},
          {title: this.text['myAccount'], link: '/profile', icon: 'user-circle'},
          {title: this.text['FAQs'], link: '/faqs', icon: 'question-circle'},
          {title: this.text['About Us'], link: '/contact', icon: 'phone'}
        ]
      }
    },
    methods: {
      onLogout () {
        this.$router.push('/')
        this.$store.dispatch('logout')
        this.$store.commit('setShowSidebar', false)
      },
      selectLanguage (value) {
        this.$store.commit('setSelectedLanguage', value)
        this.$store.commit('setShowSidebar', false)
      }
    }
  }
</script>