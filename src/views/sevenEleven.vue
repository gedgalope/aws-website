<template>
<!-- different view and different store for data -->
  <v-container fluid class="seveneleven-home">
        <v-row class="pa-0 ma-0">
          <v-col xs="12" sm="12" md="10" lg="10" xl="10">
            <v-container fluid>
              <v-row >
                <v-spacer></v-spacer>
                <v-col xs="12" sm="12" md="8" lg="4" xl="4">
                  <v-select
                    solo
                    :items="getData"
                    item-text="location"
                    item-value="location"
                    v-model="selectedAddress"
                    label="default: AWS Roxas"
                    prepend-icon="mdi-map-marker"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row class="pa-0 ma-0">
                <home-chart :awsData="dataset"></home-chart>
              </v-row>
            </v-container>
          </v-col>
          <v-col md="2" lg="2" xl="2" class="hidden-sm-and-down">
            <side-bar :selectedAWS="selectedAddress"></side-bar>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import HomeChartVue from "../components/HomePage/HomeChart.vue";
import { mapGetters } from "vuex";
import SideBarVue from "../components/HomePage/SideBar.vue";

export default {
  name:"seveneleven-home",
  data() {
    return {
      selectedAddress: "AWS Roxas"
    };
  },
  components: {
    "home-chart": HomeChartVue,
    "side-bar": SideBarVue
  },
  computed: {
    ...mapGetters({
      getLocation: "data/getAddress",
      getData: "data/getData"
    }),
    dataset: function() {
      /*eslint-disable*/
      var test = this.selectedAddress;
      var buffer = this.getData.find(function(element) {
        return element.location === test;
      });
      return buffer;
    }
  }
};
</script>

<style scoped>
.home-container {
  height: 100% !important;
}
</style>
