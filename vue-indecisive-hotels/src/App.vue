<template>
  <v-app>
    <sidebar>
    </sidebar>
    <v-toolbar
      app
      clipped-left
      fixed
      color="deep orange darken-1"
      dark
    >
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="toggleSidebar"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <router-link to="/" style="cursor: pointer" tag="span">
          Indecisive Hotels
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-xs-only"
      >
        <v-btn flat v-for="(item, i) in items" :key="i" :to="item.path">
          {{ item.title }}
        </v-btn>
        <v-btn flat v-if="authenticated" @click="onLogout">
          Logout
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer fixed app>
      <v-spacer></v-spacer>
      <span>&copy; Team Indecisive, 2018</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
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
    items () {
      if (this.authenticated) {
        return this.$store.getters.getMenuItemsUser
      } else {
        return this.$store.getters.getMenuItems
      }
    },
    authenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  name: 'App'
}
</script>
