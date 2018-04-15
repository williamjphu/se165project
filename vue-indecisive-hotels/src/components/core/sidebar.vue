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
          <v-list-tile-title class="black--text">Login</v-list-tile-title>
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
          <v-list-tile-title class="black--text">Sign up</v-list-tile-title>
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
          <v-list-tile-title class="black--text">Sign out</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {title: 'Home', link: '/', icon: 'home'},
          {title: 'myBookings', link: '/mybookings', icon: 'calendar-check'},
          {title: 'myAccount', link: '/profile', icon: 'user-circle'},
          {title: 'FAQs', link: '/faqs', icon: 'question-circle'},
          {title: 'Contact Us', link: '/contact', icon: 'phone'}
        ]
      }
    },
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
      }
    },
    methods: {
      onLogout () {
        this.$router.push('/')
        this.$store.dispatch('logout')
        this.$store.commit('setShowSidebar', false)
      }
    }
  }
</script>