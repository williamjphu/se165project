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
        v-for="(item, i) in items"
        :key="i"
        class="hidden-xs-only"
      >
        <v-btn flat :to="item.path">
          {{ item.title }}
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
    }
  },
  computed: {
    items () {
      return this.$store.getters.getMenuItems
    }
  },
  name: 'App'
}
</script>
