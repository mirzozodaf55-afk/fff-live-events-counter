<template>
  <div class="fit">
    <LineChartGenerator :chart-options="chartOptions" :chart-data="chartData" />
  </div>
</template>

<script>
import { Chart as ChartJS, Tooltip, LineElement, LinearScale, PointElement, CategoryScale } from "chart.js"
import { Line as LineChartGenerator } from "vue-chartjs/legacy"
// import ChartCrossHair from 'chartjs-plugin-crosshair'


ChartJS.register(Tooltip, LineElement, LinearScale, PointElement, CategoryScale)

export default {
  name: "LineChart",
  components: { LineChartGenerator },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartDataExample: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10],
          },
        ],
      },
      chartOptions: {
        label: '',
        responsive: true,
        maintainAspectRatio: true,
        animation: false,
        borderWidth: 1,
        pointRadius: 1,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          datalabels: {
            display: false
          }
        },
      },
    }
  },
}
</script>

<style>
</style>