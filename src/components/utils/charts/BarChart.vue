<script>
import { HorizontalBar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  name: "line-chart",
  data() {
    return {
      options: {
        legend:{
          display:false,
        },
        layout: {
          padding: {
            left: 20,
            right: 20,
            bottom: 0,
            top: 0
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1.5,
        scales: {
          xAxes: [
            {
              display: true,
              ticks:{
                beginAtZero:true,
                suggestedMax:this.maxValue
              }
            }
          ]
        },
        tooltips: {
          /*eslint-disable*/
          callbacks: {
            label: function(tooltipItem, data) {
              // console.log(tooltipItem);
              const label = tooltipItem.yLabel;
              const value = tooltipItem.xLabel;

              const sym = data.symbol;

              return `${label}: ${value} ${sym}`;
            },
            title: function(tooltipItem) {
              const time = tooltipItem[0].label;
              return null;
            }
          }
        }
      }
    };
  },
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: {
    symbol: {
      type: String,
      default: () => {
        return "";
      }
    },
    maxValue:{
      type:String,
      default:()=>{
        return null;
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
