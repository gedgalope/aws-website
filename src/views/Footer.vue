<template>
  <v-container fluid class="footer-content pa-0 ma-0">
    <v-row justify="space-around">
      <v-col cols="4">
        <v-container>
          <v-row justify="center">About</v-row>
          <v-row
            class="text-justify"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-row>
        </v-container>
      </v-col>
      <v-col cols="4">
        <v-container>
          <v-row justify="center">VMG</v-row>
          <v-row
            class="text-justify"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-row>
        </v-container>
      </v-col>
      <v-col cols="4">
        <v-container>
          <v-row>
            <map-view mapStyle="width:100%; height:150px;"></map-view>
          </v-row>
          <v-row>Roxas Ave, Poblacion District, Davao City, 8000 Davao del Sur</v-row>
          <v-row>+639236916790 / (082)431 4495</v-row>
          <v-row>mrec-addu@gmail.com</v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <partner-inst partnerStyle="200"></partner-inst>
    </v-row>
    <v-row justify="center">
      <v-icon small>mdi-copyright</v-icon>AdDU AWS - 2019
    </v-row>
  </v-container>
</template>

<script>
import MapViewVue from "../components/utils/MapView.vue";
import PartnersVue from "../components/AboutPage/Partners.vue";
export default {
  name: "footer-content",
  components: {
    "map-view": MapViewVue,
    "partner-inst": PartnersVue
  }
};
</script>

<style scoped>
</style>