<template>
  <div id="draw">
    <div id="title"># 제 {{latestDraw.round}} 회</div>
    <div>-----------------</div>
    <div>{{printDrawNumbers}}</div>
    <div>-----------------</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Draw",
  data() {
    return {
      latestDraw: {
        round: 0,
        no1: 0,
        no2: 0,
        no3: 0,
        no4: 0,
        no5: 0,
        no6: 0
      }
    }
  },
  created () {
    this.getLatestDraw();
  },
  methods: {
    getLatestDraw: function() {
      axios
        .get('/api/getLatestDraw')
        .then(response => {
          this.latestDraw = response.data
        })
    }
  },
  computed: {
    printDrawNumbers: function() {
      var numbers = [
        this.latestDraw.no1,
        this.latestDraw.no2,
        this.latestDraw.no3,
        this.latestDraw.no4,
        this.latestDraw.no5,
        this.latestDraw.no6
      ];

      return numbers.map(function(it) {
        return it.toString().padStart(2, '0');
      }).join(" ");
    }
  }
}
</script>

<style scoped>
#draw {
  margin:10px;
}

#title {
  font-weight: bold;
}
</style>