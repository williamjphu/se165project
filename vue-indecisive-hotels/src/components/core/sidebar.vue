<template>
  <v-navigation-drawer
    clipped
    disable-route-watcher
    disable-resize-watcher
    v-model="visible"
    fixed
    app
    color="deep orange darken-1"
  >
    <v-list>
      <v-list-tile
        value="true"
        v-for="(item, i) in items"
        :key="i"
        :to="item.path"
        @click="visible = !visible"
      >
        <v-list-tile-action>
          <v-icon color="black">{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="black--text">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        value="true"
        @click="onLogout"
        v-if="authenticated"
      >
        <v-list-tile-action>
          <v-icon color="black">fa-sign-out-alt</v-icon>
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
    computed: {
      visible: {
        get () {
          return this.$store.getters.getShowSidebar
        },
        set (val) {
          this.$store.commit('setShowSidebar', val)
        }
      },
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
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
        this.$store.commit('setShowSidebar', false)
      }
    }
  }
</script>