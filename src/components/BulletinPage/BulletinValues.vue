<template>
  <div class="bulletin-values">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <v-card color="#000000">
                <v-container>
                  <v-row>
                    <v-col cols="12" lg="12">
                      <span class="title" style="color:#FAFAFA">{{dateNow}}</span>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="text-center">
                      <span class="display-2" style="color:#FAFAFA;">{{timeNow}}</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row class="hello">
            <v-col cols="12">
              <v-carousel hide-delimiters :show-arrows="false" v-model="currentDataset" >
                <v-carousel-item v-for="(data, index) in awsData" :key="index" >
                  <v-container>
                    <v-row dense >
                      <v-col xl="12" cols="12">
                        <v-row>
                          <v-card class="card">
                            <v-row>
                              <v-col cols="4" class="ml-2">
                                <icon-box
                                  v-if="data.rain == 0"
                                  iconName="sun-logo"
                                  height="100"
                                  width="100"
                                  viewBox="0 0 481.882 481.88301"
                                >
                                  <sun-icon></sun-icon>
                                </icon-box>

                                <icon-box
                                  v-else
                                  iconName="rain-logo"
                                  height="100"
                                  width="100"
                                  viewBox="-2 0 512 512"
                                >
                                  <rain-icon></rain-icon>
                                </icon-box>
                              </v-col>
                              <v-col cols="6">
                                <v-row>
                                  <v-col cols="12" class="text-center">
                                    <span class="display-1">{{data.temp}}°C</span>
                                  </v-col>
                                  <v-col cols="12" class="text-center">
                                    <span class="title">{{data.rain}}mm</span>
                                  </v-col>
                                </v-row>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-row>
                      </v-col>
                      <v-col cols="12">
                        <v-row>
                          <v-card class="card">
                            <v-row>
                              <v-col cols="4">
                                <icon-box
                                  iconName="humidity-logo"
                                  height="100"
                                  width="100"
                                  viewBox="-38 0 420 420.192"
                                >
                                  <humidity-icon></humidity-icon>
                                </icon-box>
                              </v-col>
                              <v-col cols="6">
                                <v-row>
                                  <v-col cols="12" class="text-center">
                                    <span class="display-2">{{data.humidity}}%</span>
                                  </v-col>
                                </v-row>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-row>
                      </v-col>
                      <v-col cols="12">
                        <v-row>
                          <v-card class="card">
                            <v-row>
                              <v-col cols="3" class="ml-9">
                                <v-row>
                                  <icon-box
                                    iconName="windspeed-logo"
                                    height="50"
                                    width="50"
                                    viewBox="0 -53 512 512"
                                  >
                                    <windspeed-icon></windspeed-icon>
                                  </icon-box>
                                </v-row>
                                <v-row>
                                  <icon-box
                                    iconName="wind-direction-logo"
                                    height="50"
                                    width="50"
                                    viewBox="0 0 329.198 329.198"
                                    :rotation="(data.windDirection*1)+90"
                                  >
                                    <arrowhead-icon></arrowhead-icon>
                                  </icon-box>
                                </v-row>
                              </v-col>
                              <v-col cols="6">
                                <v-row>
                                  <v-col cols="12" class="text-center">
                                    <span class="display-1">{{data.windSpeed}}m/s</span>
                                  </v-col>
                                  <v-col cols="12" class="text-center">
                                    <span
                                      class="title"
                                    >from {{ordinalDirection(data.windDirection)}}</span>
                                  </v-col>
                                </v-row>
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import IconBox from "../utils/Icon";
import SunIcon from "../Icons/SunIcon";
import RainIcon from "../Icons/RainIcon";
import HumidityIcon from "../Icons/HumidityIcon";
import WindSpeedIcon from "../Icons/WindSpeed";
import ArrowHeadIcon from "../Icons/ArrowHead";
export default {
  name: "bulletin-values",
  data() {
    return {};
  },
  components: {
    "icon-box": IconBox,
    "sun-icon": SunIcon,
    "rain-icon": RainIcon,
    "humidity-icon": HumidityIcon,
    "windspeed-icon": WindSpeedIcon,
    "arrowhead-icon": ArrowHeadIcon
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
      }
    }
  },
  computed: {
    ...mapState({
      awsData: state => state.data.awsData,
      timeNow: state => state.utils.timeNow,
      dateNow: state => state.utils.dateNow,
      currentDataset: state => state.utils.currentDataset
    }),
    ...mapGetters({
      utNow: "utils/getNow"
    })
  },
  mounted: function() {
    // this.time();
    this.$store.dispatch("utils/init");
  },
  beforeDestroy() {
    // clearInterval();
  }
};
</script>

<style scoped>
.card {
  width: 100%;
}
</style>