<template>
  <v-container>
    <!-- <div class="canvass"> -->
    <guage-chart :chart-data="datacollection" :symbol="dataSymbol"></guage-chart>
    <div style="position: relative">
      <!-- <div class="flex-row"> -->
      <v-container class="text-pos" v-if="dataLabel!=''">
        <v-row>
          <v-container class="text-center display-1 pb-0 mb-0 hidden-xs-only hidden-xl-only">
            {{awsData}}
            <span class="title px-0 mx-0">{{dataSymbol}}</span>
          </v-container>
          <v-container class="text-center display-3 pb-0 mb-0 hidden-sm-and-up">
            {{awsData}}
            <span class="title px-0 mx-0">{{dataSymbol}}</span>
          </v-container>
          <v-container :class="adjustClass">
            {{awsData}}
            <span class="title px-0 mx-0">{{dataSymbol}}</span>
          </v-container>
        </v-row>
        <v-row>
          <v-container class="text-center subtitle-1 pt-0 mt-0 hidden-xs-only">{{dataLabel}}</v-container>
          <v-container class="text-center display-1 pt-0 mt-0 hidden-sm-and-up">{{dataLabel}}</v-container>
        </v-row>
      </v-container>
    </div>

    <!-- </div> -->
  </v-container>
</template>

<script>
import GaugeChartVue from "../utils/charts/GaugeChart.vue";

export default {
  components: {
    "guage-chart": GaugeChartVue
  },
  data() {
    return {
      datacollection: {},
      textContainer: null,
      textLabel: null,
      textValue: null
    };
  },
  props: {
    awsData: {
      type: Number,
      default: () => {
        return 1;
      }
    },
    dataLabel: {
      type: String,
      default: () => {
        return "";
      }
    },
    dataSymbol: {
      type: String,
      default: () => {
        return "";
      }
    }
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      /*eslint-disable*/
      this.datacollection = {
        symbol: this.dataSymbol,
        labels: this.awsData,
        datasets: [
          {
            borderAllign: "inner",
            borderColor: "#01579B",
            backgroundColor: ["#1976D2", "#E3F2FD"],
            // fill: false,
            data: [this.awsData, this.ifWind() - this.awsData]
          }
        ]
      };
      // console.log(this.datacollection);
    },
    ifWind() {
      if (this.dataLabel == "Wind Speed") {
        return 10;
      } else {
        return 100;
      }
    }
  },
  computed: {
    adjustClass: function() {
      if (this.ifWind() == 10) {
        return "text-center display-1 pb-0 mb-0 hidden-lg-and-down";
      } else {
        return "text-center display-2 pb-0 mb-0 hidden-lg-and-down";
      }
    }
  },
  watch: {
    awsData: function(newData, oldData) {
      this.fillData();
    }
  }
};
</script>

<style>
.text-pos {
  position: absolute;
  margin-top: -50%;
  /* margin-bottom: 20%; */
  /* margin-left: 30%; */
}
</style>