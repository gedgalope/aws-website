<template>
  <!-- <v-container> -->
  <!-- <div class="canvass"> -->
    <line-chart :chart-data="datacollection" :symbol="dataSymbol" ></line-chart>
  <!-- </div> -->
  <!-- </v-container> -->
</template>

<script>
import LineChart from "../utils/charts/LineChart";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: {}
    };
  },
  props: {
    awsData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // timeData: {
    //   type: Array,
    //   default: () => {
    //     return [];
    //   }
    // },
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
      // console.log(this.awsData);
      this.datacollection = {
        symbol: this.dataSymbol,
        labels: this.awsData,
        datasets: [
          {
            borderColor: "#1E88E5",
            backgroundColor: "rgb(187,222,251,0.3)",
            // fill: false,
            label: this.dataLabel,
            data: this.awsData
          }
        ]
      };
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

</style>