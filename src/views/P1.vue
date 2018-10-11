<template lang="pug">
  div.slides
    section(
      data-markdown="md/p1.md"
      data-separator="\n---$"
      data-separator-vertical="\n>>>$"
      data-separator-notes="^Note:"
    )
    section
      h1 aaa
    section
      doughnut-chart(:chart-data="chartData" :options="chartOptions" :width="400"
  :height="200")
      button(@click="push") push
</template>

<script lang="coffee">
import Reveal from 'reveal.js/js/reveal'
import DoughnutChart from '@/components/DoughnutChart.js'

export default
  components:
    DoughnutChart: DoughnutChart
  data: () ->
    count: 1
    chartData: null
    chartOptions: {}
  methods:
    push: () ->
      this.chartData = {
        labels: ['Yes', 'No']
        datasets: [
          {
            backgroundColor: ['#00b', '#b00']
            borderColor: ['#00b', '#b00']
            data: [this.count, 2]
          }
        ]
      }
      this.count++
    slide5: () ->
    slidechanged: (e) ->
      if e.indexh == 5
        this.slide5()
  mounted: () ->
    Reveal.addEventListener('slidechanged', this.slidechanged)
</script>
