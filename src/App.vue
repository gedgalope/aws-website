<template>
  <v-app>
    <page-toolbar v-if="!checkRoute()"></page-toolbar>
    <v-content>
      <v-container class="pa-0" fluid>
      <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer  height="auto" dark>
      <footer-content v-if="!showFooter()"></footer-content>
      <v-row class="font-weight-light caption" justify="center" v-else> AdDU AWS <v-icon class="px-1" small>mdi-copyright</v-icon> 2019 </v-row>
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
    },
    showFooter(){
      var currentViewPath = this.$router.currentRoute.path;
      var currentViewName = this.$router.currentRoute.name;
      if(currentViewPath == "/bulletin" || currentViewName == "PageNotFound"){
        return true;
      }else{
        return false;
      }
    }
  }
};
</script>
