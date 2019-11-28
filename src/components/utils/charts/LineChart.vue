<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  name: "line-chart",
  data() {
    return {
      options: {
        legend:{
          display:false
        },
        responsive:true,
        maintainAspectRatio: false,
        layout:{
          padding:{
            left:20,
            right:20,
            bottom:20,
            top:0
          }
        },
        aspectRatio: 1.96,
        scales: {
          xAxes: [
            {
              display: false
            },
          ],
          yAxes:[{
            gridLines:{
              display:true
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              const label = data.datasets[tooltipItem.datasetIndex].label;

              const value = tooltipItem.yLabel;

              const sym = data.symbol;

              return `${label}: ${value} ${sym}`;
            },
            title: function(tooltipItem) {
              /*eslint-disable*/
              const time = tooltipItem[0].label;
              // console.log(tooltipItem[0].label)
              return `Time:  ${time}`;
            }
          }
        }
      }
    };
  },
  extends: Line,
  mixins: [reactiveProp],
  props: {
    symbol: {
      type: String,
      default: () => {
        return "";
      }
    }
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    chartData() {
      this.$data._chart.update();
    }
  }
};
</script>
