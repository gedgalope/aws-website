<template>
  <v-container fluid class="home-chart pa-0 ma-0">
    <v-row class="pa-0 ma-0">
      <v-col xs="12" sm="12" md="6" lg="7" xl="7">
        <v-card style="height:100% !important;" ref="tempCard">
          <v-card-title primary-title class="text-center">
            <v-container class="display-1">Temperature</v-container>
          </v-card-title>

          <line-chart-handler :awsData="awsData.data.temperature" data-symbol="°C"></line-chart-handler>
        </v-card>
      </v-col>
      <v-col class="hidden-sm-and-down pa-0 ma-0" xs="12" sm="6" md="6" lg="5" xl="5">
        <v-container class="pa-0 ma-0">
          <v-row>
            <v-col xs="12" sm="9" md="6" lg="6" xl="6">
              <v-card>
                <gauge-chart-handler
                  :awsData="awsData.data.humidity"
                  data-symbol="%"
                  data-label="Humidity"
                ></gauge-chart-handler>
              </v-card>
            </v-col>
            <v-col class="hidden-sm-and-down" md="6" lg="6" xl="6">
              <v-card>
                <gauge-chart-handler
                  :awsData="awsData.data.windSpeed"
                  data-symbol="kph"
                  data-label="Wind Speed"
                ></gauge-chart-handler>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs="12" sm="9" md="6" lg="6" xl="6">
              <v-card style="height:100% !important;">
                <v-container>
                  <v-col cols="12">
                    <v-row>
                      <v-container class="text-center headline">Barometric Pressure</v-container>
                    </v-row>
                  </v-col>
                  <v-divider></v-divider>
                  <v-row>
                    <v-container class="text-center">
                      <span
                        class="display-4 font-weight-bold hidden-lg-and-down"
                      >{{awsData.data.pressure}}</span>
                      <span
                        class="display-3 font-weight-bold hidden-xl-only"
                      >{{awsData.data.pressure}}</span>
                      <br />
                      <span class="display-1">Pa</span>
                    </v-container>
                  </v-row>
                  <v-divider></v-divider>
                </v-container>
              </v-card>
            </v-col>
            <v-col class="hidden-sm-and-down" md="6" lg="6" xl="6">
              <v-card style="height:100% !important;">
                <v-container class="text-center">
                  <v-row>
                    <v-col class="py-3 my-3">
                      <icon-box
                        iconName="wind-direction-logo"
                        height="150"
                        width="150"
                        viewBox="0 0 329.198 329.198"
                        iconColor="#1E88E5"
                        :rotation="(awsData.data.windDirection*-1)-90"
                      >
                        <arrow-head></arrow-head>
                      </icon-box>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-1 pb-0 my-0 title">Wind</v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      class="headline py-0 my-0"
                    >from {{ordinalDirection(awsData.data.windDirection)}}</v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row class="hidden-md-and-up">
      <v-col sm="6" xs="6">
        <v-card>
          <gauge-chart-handler
            :awsData="awsData.data.humidity"
            data-symbol="%"
            data-label="Humidity"
          ></gauge-chart-handler>
        </v-card>
      </v-col>
      <v-col sm="6" xs="6">
        <v-card style="height:100% !important;">
          <v-container>
            <v-col cols="12">
              <v-row>
                <v-container class="text-center headline">Barometric Pressure</v-container>
              </v-row>
            </v-col>
            <v-divider></v-divider>
            <v-row>
              <v-container class="text-center">
                <span
                  class="display-4 font-weight-bold hidden-lg-and-down"
                >{{awsData.data.pressure}}</span>
                <span
                  class="display-3 font-weight-bold hidden-xl-only hidden-xs-only"
                >{{awsData.data.pressure}}</span>
                <span class="display-4 font-weight-bold hidden-sm-and-up">{{awsData.data.pressure}}</span>
                <br />
                <span class="display-1">Pa</span>
              </v-container>
            </v-row>
            <v-divider></v-divider>
            <br />
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="hidden-md-and-up">
      <v-col sm="6" xs="6">
        <v-card>
          <gauge-chart-handler
            :awsData="awsData.data.windSpeed"
            data-symbol="kph"
            data-label="Wind Speed"
          ></gauge-chart-handler>
        </v-card>
      </v-col>
      <v-col sm="6" xs="6">
        <v-card style="height:100% !important;">
          <v-container class="text-center">
            <v-row>
              <v-col class="py-3 my-3">
                <icon-box
                  iconName="wind-direction-logo"
                  height="150"
                  width="150"
                  viewBox="0 0 329.198 329.198"
                  iconColor="#1E88E5"
                  :rotation="(awsData.data.windDirection*-1)-90"
                >
                  <arrow-head></arrow-head>
                </icon-box>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pt-1 pb-0 my-0 title">Wind</v-col>
            </v-row>
            <v-row>
              <v-col
                class="headline py-0 my-0"
              >from {{ordinalDirection(awsData.data.windDirection)}}</v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row align-content="space-between">
      <v-col xs="12" sm="6" md="6" lg="6" xl="6">
        <v-card style="height:100% !important;">
          <v-card-text>
            <v-container class="text-center display-1">Rain Fall</v-container>
          </v-card-text>
          <bar-chart-handler
            :awsData="[awsData.data.rain15,awsData.data.rain24]"
            :dataLabel="rainLabel"
            data-symbol="mm"
          ></bar-chart-handler>
        </v-card>
      </v-col>
      <v-col xs="12" sm="6" md="6" lg="6" xl="6">
        <v-card style="height:100% !important;">
          <v-card-text>
            <v-container class="text-center display-1">Solar Irradiance</v-container>
          </v-card-text>
          <bar-chart-handler
            :awsData="[awsData.data.irradiance10,awsData.data.irradiance24]"
            :dataLabel="irradianceLabel"
            data-symbol="W/m2"
          ></bar-chart-handler>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LineChartHandlerVue from "./LineChartHandler.vue";
import GaugeChartHandlerVue from "./GaugeChartHandler.vue";
import IconBox from "../utils/Icon";
import ArrowHead from "../Icons/ArrowHead";
import BarChartHandlerVue from "./BarChartHandler.vue";
export default {
  name: "home-chart",
  data() {
    return {
      rainLabel: ["Rain 15min", "Rain 24hr"],
      irradianceLabel: ["Irradiance min", "Irradiance hr"]
    };
  },
  components: {
    "line-chart-handler": LineChartHandlerVue,
    "gauge-chart-handler": GaugeChartHandlerVue,
    "bar-chart-handler": BarChartHandlerVue,
    "icon-box": IconBox,
    "arrow-head": ArrowHead
  },
  props: {
    awsData: {
      type: Object || Array
    }
  },
  methods: {
    ordinalDirection(payload) {
      if (payload > 0 && payload < 85) {
        return "Southeast";
      } else if (payload >= 85 && payload <= 95) {
        return "East";
      } else if (payload > 100 && payload < 175) {
        return "Northeast";
      } else if (payload >= 175 && payload <= 185) {
        return "South ";
      } else if (payload > 190 && payload < 260) {
        return "Northwest";
      } else if (payload >= 260 && payload <= 280) {
        return "West";
      } else if (payload > 280 && payload <= 350) {
        return "Southwest";
      } else if (payload > 355 || payload <= 5) {
        return "North";
      } else {
        return "null";
      }
    }
  },
  computed: {
    dataArray: function() {
      return this.awsData;
    },
    irrUnit: function() {
      var sup = "2";
      return `W/m ${sup.sup()}`;
    }
  }
};
</script>

<style scoped>
</style>