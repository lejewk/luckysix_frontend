<template>
  <div id="draws">
    <div>제 {{round}} 회 당첨번호</div>
    <div>-----------------</div>
    <div>{{printDraws}}</div>
    <div>-----------------</div>
  </div>
</template>

<script>
export default {
  name: "Lottery",
  data() {
    return {
      round: 927,
      draws: [3,7,11,37,41,44]
    }
  },
  computed: {
    printDraws: function() {
      return this.draws.map(function(it) {
        return it.toString().padStart(2, '0');
      }).join(" ");
    }
  }
}
</script>

<style scoped>
#draws {
  margin:10px;
}
</style>