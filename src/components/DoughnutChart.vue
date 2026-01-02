<template>
  <div class="fit">
    <Doughnut :chart-options="chartOptions" :chart-data="chartData" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Title, Tooltip } from "chart.js"
import { Doughnut } from "vue-chartjs/legacy"
import { colors } from 'quasar'
import ChartDataLabels from "chartjs-plugin-datalabels"

ChartJS.register(ArcElement, Title, Tooltip, ChartDataLabels)

export default {
  name: "DoughnutChart",
  components: { Doughnut },
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
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          datalabels: {
            backgroundColor: function (context) {
              var result = []
              context.dataset.backgroundColor.forEach(c => result.push( colors.lighten(c, -25) ))
              return result
            },
            padding: {
              bottom: 1
            },
            borderColor: "#f7f7ff",
            borderRadius: 6,
            color: "white",
          },
        },
      },
    }
  },
}
</script>

<style>
</style>