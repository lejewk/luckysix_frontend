<template>
  <div id="statistics">
    <div># 번호별 당첨 통계</div>
    <div>-----------------</div>
    <div v-for="noDrawRate in noDrawRates" :key="noDrawRate.no">
      {{printDraws(noDrawRate.no)}} {{printRateBar(noDrawRate.rate)}} {{printRate(noDrawRate.rate)}}
    </div>
    <div>-----------------</div>
    <div><button>전체 통계 보기</button></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Statistics',
  data() {
    return {
      noDrawRates: [
        {no: 1, count: 0, rate: 0},
        {no: 2, count: 0, rate: 0},
        {no: 3, count: 0, rate: 0},
        {no: 4, count: 0, rate: 0},
        {no: 5, count: 0, rate: 0},
        {no: 6, count: 0, rate: 0}
      ]
    }
  },
  created() {
    this.getTop6NoDrawRate();
  },
  methods: {
    printDraws: function(no) {
      return no.toString().padStart(2, '0');
    },
    printRate: function(rate) {
      return (rate*100).toString().substr(0, 5) + '%';
    },
    printRateBar: function(rate) {
      var topRate = this.noDrawRates[0].rate;
      var maxBarSize = 10;

      var barCount = maxBarSize * rate / topRate;

      var rateBar = "";
      for(var i=0; i<Math.trunc(barCount); i++) {
        rateBar += "■";
      }

      console.log(rateBar);

      return rateBar;
    },
    getTop6NoDrawRate: function() {
      axios
        .get('/api/getTop6NoDrawRate')
        .then(response => {
          this.noDrawRates = response.data.noDrawRates;
        })
    }
  }
}
</script>

<style scoped>
#statistics {
  margin: 10px;
}
</style>