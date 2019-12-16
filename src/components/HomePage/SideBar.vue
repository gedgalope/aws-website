<template>
  <v-container fluid class="side-bar pa-0 ma-0 title">
    <v-row>
      <map-container :zoom="zoom" :location="AWSDesc.coordinates" mapStyle="height:300px;"></map-container>
    </v-row>
    <v-row>
      <v-container class="px-0">
        <v-card>
          <v-container>
            <v-row>
              <v-container>Location: {{AWSDesc.name}}</v-container>
            </v-row>
            <v-row>
              <v-tooltip right offset-overflow color="#212121">
                <template v-slot:activator="{on}">
                  <v-container v-on="on">Station: {{AWSDesc.address}}</v-container>
                </template>
                <v-container class="pa-0 ma-0">
                  <v-row>Longitude:{{AWSDesc.coordinates[0]}}</v-row>
                  <v-row>Latitude:{{AWSDesc.coordinates[1]}}</v-row>
                </v-container>
              </v-tooltip>
            </v-row>
            <v-row>
              <v-container>
                Status:
                <span :class="descColor">{{AWSDesc.status}}</span>
              </v-container>
            </v-row>
            <v-row>
              <v-container class="pb-0">Sensors:</v-container>
            </v-row>
            <v-row v-for="(sensor, index) in AWSDesc.sensors" :key="index">
              <v-tooltip bottom offset-overflow color="#212121">
                <template v-slot:activator="{ on }">
                  <v-container v-on="on" class="pl-3 ml-4 my-0 py-0">
                    <v-row>
                      <v-col cols="2" class="py-0 pr-0 text-center">
                        <v-icon small color="success" v-if="sensor.installed">mdi-check-bold</v-icon>
                        <v-icon small color="error" v-else>mdi-close</v-icon>
                      </v-col>
                      <v-col cols="10" class="pl-0 py-0 subtitle-1 font-weight-bold">{{sensor.name}}</v-col>
                    </v-row>
                  </v-container>
                </template>
                <span>{{sensor.purpose}}</span>
              </v-tooltip>
              <!-- <v-container class="pl-3 ml-4 my-0 py-0">
                <v-row>
                  <v-col cols="2" class="py-0 pr-0 text-center">
                    <v-icon x-small>mdi-power-off</v-icon>
                  </v-col>
                  <v-col cols="10" class="pl-0 py-0">{{sensor}}</v-col>
                </v-row>
              </v-container>-->
            </v-row>
            <v-row>
              <v-container>Installed: {{AWSDesc.installed}}</v-container>
            </v-row>
            <v-row>
              <v-container>Maintenance: {{AWSDesc.maintenance}}</v-container>
            </v-row>
            <v-row>
              <v-container
                class="text-right see-more blue--text text--darken-4"
                @click="pushRoute()"
              >
                <v-icon color="#0D47A1">mdi-chevron-double-right</v-icon>
                <span class="see-more-text">See More</span>
              </v-container>
            </v-row>
          </v-container>
        </v-card>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import MapViewVue from "../utils/MapView.vue";
import { mapGetters} from "vuex";
export default {
  name: "side-bar",
  data() {
    return {
      zoom: 16,
      sensorSelection: [
        "BMP 1500",
        "SHT 15",
        "Davis Tipping Bucket",
        "Davis Anemometer",
        "Davis Solar Irradiance",
        "Apogee Pyranometer"
      ]
    };
  },
  computed: {
    ...mapGetters({
      getLocation: "maps/getAWSDesc"
    }),
    AWSDesc: function() {
      /*eslint-disable*/
      var AWS = this.selectedAWS;
      var buffer = this.getLocation.find(function(element) {
        return element.name === AWS;
      });
      return buffer;
    },
    descColor: function() {
      var stat = this.AWSDesc.status;
      if (stat == "Active") {
        return "green--text text--accent-4";
      } else if (stat == "Inactive") {
        return "red--text text--accent-4";
      } else {
        return "grey--text text--darken-2";
      }
    }
  },
  methods: {
    pushRoute() {
      this.$router.push("weather");
    },
  },
  props: {
    selectedAWS: {
      type: String,
      default: () => {
        return "AWS Roxas";
      }
    }
  },
  components: {
    "map-container": MapViewVue
  }
};
</script>

<style scoped>
.see-more {
  cursor: pointer;
}
.see-more-text {
  text-decoration: underline;
}
</style>