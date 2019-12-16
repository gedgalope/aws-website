<template>
  <v-container fluid class="weather-graph pa-0">
    <v-card style="width:100% !important;">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <v-container fluid class="headline">
              <v-row>
                <p>Parameter 1:</p>
              </v-row>
              <v-row>
                <v-select
                  solo
                  :items="selectParams"
                  v-model="parameter1"
                  label="-- Select Parameter --"
                ></v-select>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <v-container fluid class="headline">
              <v-row>
                <p>Parameter 2:</p>
              </v-row>
              <v-row>
                <v-select
                  solo
                  :items="selectParams"
                  v-model="parameter2"
                  label="-- Select Parameter --"
                ></v-select>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
        <v-row>
          lacks data fill
          <v-container>
            <line-chart-handler></line-chart-handler>
          </v-container>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import LineChartHandlerVue from "../HomePage/LineChartHandler.vue";
export default {
  name: "weather-graph",
  data() {
    return {
      selectParams: [
        "temperature",
        "humidity",
        "pressure",
        "rainfall",
        "irradiance",
        "windspeed"
      ],
      parameter1: null,
      parameter2: null
    };
  },
  components: {
    "line-chart-handler": LineChartHandlerVue
  }
};
</script>

<style scoped>
</style>