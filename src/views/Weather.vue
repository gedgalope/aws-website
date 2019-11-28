<template>
  <v-container fluid>
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col xs="12" sm="12" md="3" lg="3" xl="3">
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
        <v-col xs="12" sm="12" md="2" lg="2" xl="2">
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
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col xs="12" sm="12" md="2" lg="2" xl="2">
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
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col xs="12" sm="12" md="3" lg="3" xl="3">
          <v-btn x-large>Generate</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-row>
      <weather-table :dateFrom="from" :dateTo="to" :selected="selectedAddress"></weather-table>
    </v-row>
  </v-container>
</template>

<script>
/*eslint-disable*/
import { mapGetters } from "vuex";
import WeatherTableVue from "../components/WeatherPage/WeatherTable.vue";
export default {
  name: "weather",
  data() {
    return {
      selectedAddress: "AWS Roxas",
      currentDate: new Date().toISOString().substr(0, 10),
      from: null,
      to: null,
      buffer: null,
      valid: false
    };
  },
  components: {
    "weather-table": WeatherTableVue
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    }
  },
  computed: {
    ...mapGetters({
      getData: "data/getData",
      awsInfo: "maps/getAWSDesc"
    }),
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
        var monthBuffer = dateSelected.getUTCMonth();
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
        var monthBuffer = dateSelected.getUTCMonth();
        var dayBuffer = dateSelected.getUTCDate();
        var yearBuffer = dateSelected.getUTCFullYear();
        return `${monthBuffer}/${dayBuffer}/${yearBuffer}`;
      }
    },
    minDateFrom: function() {
      var AWS = this.selectedAddress;
      this.reset();
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