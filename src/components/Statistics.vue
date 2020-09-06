<template>
  <div>
    <div>번호별 당첨 통계</div>
    <div v-for="article in top6" :key="article.no">
      {{printDraws(article.no)}} {{printRateBar(article.rate)}} {{printRate(article.rate)}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  data() {
    return {
      top6: [
        {no: 44, rate: 45},
        {no: 11, rate: 40},
        {no: 32, rate: 37},
        {no: 5, rate: 34},
        {no: 42, rate: 32},
        {no: 21, rate: 21}
      ]
    }
  },
  methods: {
    printDraws: function(no) {
      return no.toString().padStart(2, '0');
    },
    printRate: function(rate) {
      return rate.toString() + '%';
    },
    printRateBar: function(rate) {
      var topRate = this.top6[0].rate;
      var maxBarSize = 10;

      var barCount = maxBarSize * rate / topRate;
      var rateBar = "";
      for(var i=0; i<barCount; i++) {
        rateBar += "■";
      }

      return rateBar;
    }
  }
}
</script>