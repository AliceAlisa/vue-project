<template>
  <v-container>
    <div class="text-h5 text-sm-h3 pb-2">My Chart</div>
    <canvas id="myChart"> </canvas>
  </v-container>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "ChartDoughnut",
  props: {
    fullPaymentValue: {
      type: Number,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newChart: Object,
      data: {
        labels: [],
        datasets: [
          {
            label: "Dataset 1",
            data: [],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "My Payments Chart",
          },
        },
      },
    };
  },
  methods: {
    makeChart() {
      const ctx = document.getElementById("myChart");
      this.newChart = new Chart(ctx, {
        type: "doughnut",
        data: this.data,
        options: this.options,
      });
    },
    makeData() {
      let dataLablesArr = this.items.map((item) => item.category);
      let dataLables = [...new Set(dataLablesArr)];

      let myMass = {};

      dataLables.forEach((element) => {
        let value = 0;
        for (let i = 0; i < this.items.length; i++) {
          if (element == this.items[i].category) {
            value += this.items[i].value;
          }
        }
        myMass[element] = value;
      });

      this.data.labels = Object.keys(myMass);
      this.data.datasets[0].data = Object.values(myMass);
    },
  },

  mounted() {
    this.makeData();
    this.makeChart();
  },
  watch: {
    fullPaymentValue() {
      this.newChart.destroy();
      this.makeData();
      this.makeChart();
      console.log(this.fullPaymentValue);
    },
  },
};
</script>

<style>
</style>