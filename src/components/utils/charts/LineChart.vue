<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

var image = new Image();
image.src =
  "http://www.addu.edu.ph/wp-content/uploads/2015/05/00-OFFICIAL-AdDU-Seal-500px-300x300.jpg";

export default {
  name: "line-chart",
  data() {
    return {
      options: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 20,
            right: 20,
            bottom: 20,
            top: 0
          }
        },
        aspectRatio: 1.96,
        scales: {
          xAxes: [
            {
              display: false
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ]
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
        },
        watermark: {
          image: image,
          width: 300,
          height: 300,
          opacity: 0.2,
          alignX: "middle",
          alignY: "middle",
          alignToChartArea: false,
          position: "back"
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
