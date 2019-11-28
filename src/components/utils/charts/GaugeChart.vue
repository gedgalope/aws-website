<script>
import { Doughnut, mixins } from "vue-chartjs";
// import textchart from "../../../plugins/chartjs";
const { reactiveProp } = mixins;

export default {
  name: "guage-chart",
  data() {
    return {
      options: {
        tooltips:{
          enabled:false,
        },
        rotation: -Math.PI,
        circumference: Math.PI,
        cutoutPercentage: 60,
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio:1,
        layout: {
          padding: {
            left: 5,
            right: 5,
            bottom: 0,
            top: 0
          }
        }
      }
    };
  },
  extends: Doughnut,
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
    /*eslint-disable*/
    this.renderChart(this.chartData, this.options);
    // this.textCenter()
  },
  watch: {
    chartData() {
      this.$data._chart.update();
    }
  },
};
</script>
