<template>
  <v-app>
    <page-toolbar v-if="!checkRoute()"></page-toolbar>
    <v-content>
      <v-container fluid>
      <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer height="auto" dark>
      <footer-content v-if="!checkRoute()"></footer-content>
    </v-footer>
  </v-app>
</template>

<script>
import ToolbarVue from "./views/Toolbar";
import FooterVue from "./views/Footer.vue";

export default {
  name: "App",
  components: {
    "page-toolbar": ToolbarVue,
    "footer-content": FooterVue
  },
  methods: {
    checkRoute() {
      var currRoute = this.$router.currentRoute.path;
      if (currRoute == "/bulletin") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
