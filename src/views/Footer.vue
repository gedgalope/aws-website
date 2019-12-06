<template>
  <v-container fluid class="footer-content pa-0 ma-0">
    <v-row  justify="space-around">
      <v-col xl="8" lg="8" md="8" sm="12" cols="12">
        <v-row>
          <v-col cols="12" align="center" class="title pb-0 mb-0">In partnership with:</v-col>
        </v-row>
        <v-row>
          <partner-inst partnerStyle="150"></partner-inst>
        </v-row>
      </v-col>
      <v-col xl="4" lg="4" md="4" sm="12" cols="12">
        <v-container class="hidden-sm-and-down">
          <v-row>
            <map-view mapStyle="width:100%; height:150px;"></map-view>
          </v-row>
          <v-row>Roxas Ave, Poblacion District, Davao City, 8000 Davao del Sur</v-row>
          <v-row>+639236916790 / (082)431 4495</v-row>
          <v-row>aws-addu@gmail.com</v-row>
        </v-container>
        <v-container class="hidden-md-and-up pa-0 ma-0">
          <v-row justify="center">aws-addu@gmail.com</v-row>
          <v-row justify="center">+639236916790 / (082)431 4495</v-row>
          <v-row justify="center">Roxas Ave, Poblacion District, Davao City, 8000 Davao del Sur</v-row>
        </v-container>
      </v-col>
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