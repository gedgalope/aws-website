<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="3" lg="3" xl="3">
        <v-container fluid>
          <v-row>
            <v-container fluid class="title pl-4 ml-4">
              AWS <span class="hidden-xs-only"> Location</span>:
            </v-container>
          </v-row>
          <v-row>
            <v-select
              solo
              :items="getData"
              item-text="location"
              item-value="location"
              v-model="selectedAddress"
              label="default: AWS Roxas"
              prepend-inner-icon="mdi-map-marker"
            ></v-select>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="6" sm="6" md="2" lg="2" xl="2">
        <v-container fluid>
          <v-row>
            <v-container fluid class="title pl-0 ml-0">
              From <span class="hidden-xs-only"> Date</span>:
            </v-container>
          </v-row>
          <v-row>
            <v-menu offset-y>
              <template v-slot:activator="{on}">
                <v-text-field
                  prepend-inner-icon="mdi-calendar"
                  name="date-from"
                  label="From"
                  placeholder="mm/dd/yyyy"
                  solo
                  v-on="on"
                  :readonly="true"
                  v-model="dateFrom"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="from"
                :landscape="false"
                :reactive="true"
                :show-current="currentDate"
                :min="minDateFrom"
                :max="maxDate"
                color="primary"
              ></v-date-picker>
            </v-menu>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="6" sm="6" md="2" lg="2" xl="2">
        <v-container fluid>
          <v-row>
            <v-container fluid class="title pl-0 ml-0">
              To <span class="hidden-xs-only"> Date</span>:
            </v-container>
          </v-row>
          <v-row>
            <v-menu>
              <template v-slot:activator="{on}">
                <v-text-field
                  prepend-inner-icon="mdi-calendar"
                  name="date-to"
                  label="to"
                  placeholder="mm/dd/yyyy"
                  solo
                  :disabled="toDisabled"
                  v-on="on"
                  :readonly="true"
                  v-model="dateTo"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="to"
                :landscape="false"
                :reactive="true"
                :show-current="currentDate"
                :min="minDateTo"
                :max="maxDate"
                color="primary"
              ></v-date-picker>
            </v-menu>
          </v-row>
        </v-container>
      </v-col>

      <v-col align-self="center" cols="12" sm="12" md="3" lg="3" xl="3">
          <v-btn block x-large rounded outlined color="primary" :disabled="getClickable">Get AWS Data</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <weather-table :dateFrom="from" :dateTo="to" :selected="selectedAddress"></weather-table>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="5" xl="5" align-self="center">
        <v-dialog v-model="dialog" scrollable :overlay="true" transition="dialog-transition">
          <template v-slot:activator="{on}">
            <v-btn
              v-on="on"
              block
              x-large
              rounded
              outlined
              color="primary"
              :disabled="generateClickable"
            >Generate Graph</v-btn>
          </template>
          <weather-graph></weather-graph>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/*eslint-disable*/
import { mapGetters } from "vuex";
import WeatherTableVue from "../components/WeatherPage/WeatherTable.vue";
import WeatherGraphVue from "../components/WeatherPage/WeatherGraph.vue";
export default {
  name: "weather",
  data() {
    return {
      selectedAddress: "AWS Roxas",
      currentDate: new Date().toISOString().substr(0, 10),
      from: null,
      to: null,
      buffer: null,
      data: null,
      dialog: false
    };
  },
  components: {
    "weather-table": WeatherTableVue,
    "weather-graph": WeatherGraphVue
  },
  methods: {
    fromReset() {
      this.from = null;
      this.to = null;
    }
  },
  watch: {
    selectedAddress: function() {
      this.fromReset();
    }
  },
  computed: {
    ...mapGetters({
      getData: "data/getData",
      awsInfo: "maps/getAWSDesc"
    }),
    generateClickable: function() {
      if (this.data == null) {
        // return true;
        return false;
      } else {
        return false;
      }
    },
    getClickable: function() {
      if (this.to == null) {
        return true;
      } else {
        return false;
      }
    },
    toDisabled: function() {
      if (this.from == null) {
        return true;
      } else {
        return false;
      }
    },
    dateFrom: function() {
      var dateBuffer = this.from;
      if (dateBuffer == null) {
        return null;
      } else {
        var dateSelected = new Date(dateBuffer);
        var monthBuffer = dateSelected.getUTCMonth() + 1;
        var dayBuffer = dateSelected.getUTCDate();
        var yearBuffer = dateSelected.getUTCFullYear();
        return `${monthBuffer}/${dayBuffer}/${yearBuffer}`;
      }
    },
    dateTo: function() {
      var dateBuffer = this.to;
      if (dateBuffer == null) {
        return null;
      } else {
        var dateSelected = new Date(dateBuffer);
        var monthBuffer = dateSelected.getUTCMonth() + 1;
        var dayBuffer = dateSelected.getUTCDate();
        var yearBuffer = dateSelected.getUTCFullYear();
        return `${monthBuffer}/${dayBuffer}/${yearBuffer}`;
      }
    },
    minDateFrom: function() {
      var AWS = this.selectedAddress;
      var buffer = this.awsInfo.find(function(element) {
        //returns object of selected value
        return element.name === AWS;
      });
      var dateBuffer = new Date(buffer.installed);
      // console.log(dateBuffer.toISOString().substr(0,10));
      return dateBuffer.toISOString().substr(0, 10);
    },
    maxDate: function() {
      var dateBuffer = new Date(this.currentDate);
      return dateBuffer.toISOString().substr(0, 10);
    },
    minDateTo: function() {
      var fromDate = this.from;
      if (fromDate == null) {
        return null;
      } else {
        var dateBuffer = new Date(fromDate);
        return dateBuffer.toISOString().substr(0, 10);
      }
    }
  }
};
</script>

<style scoped>
</style>