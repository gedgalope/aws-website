<template>
  <v-container>
    <!-- <div class="canvass"> -->
    <bar-chart :chart-data="datacollection" :symbol="dataSymbol" :height="height" :maxValue="maxValue"></bar-chart>
    <!-- </div> -->
  </v-container>
</template>

<script>
import BarChartVue from "../utils/charts/BarChart.vue";

export default {
  components: {
    "bar-chart": BarChartVue
  },
  data() {
    return {
      height:180,
      datacollection: {},
      textContainer: null,
      textLabel: null,
      textValue: null
    };
  },
  props: {
    awsData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    dataLabel: {
      type: Array,
      default: () => {
        return [];
      }
    },
    dataSymbol: {
      type: String,
      default: () => {
        return "";
      }
    },
  },
  mounted() {
    this.fillData();
  },
  computed:{
    maxValue: function() {
      /*eslint-disable*/
      if(this.dataLabel[0].includes("Rain")){
        return "3.00"
      }else if(this.dataLabel[0].includes("Irradiance")){
        return "2000"
      }else{
        return null;
      }
    }
  },
  methods: {
    fillData() {
      /*eslint-disable*/
      this.datacollection = {
        symbol: this.dataSymbol,
        labels: this.dataLabel,
        datasets: [
          { 
            barThickness:"50",
            borderAlign: "outer",
            borderColor:["#E3F2FD", "#E3F2FD"],
            backgroundColor: ["#C5CAE9", "#BBDEFB"],
            // fill: false,
            data: this.awsData
          }
        ]
      };
      // console.log(this.datacollection);
    },
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