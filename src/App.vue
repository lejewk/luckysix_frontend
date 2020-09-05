<template>
  <div id="app">
    <Lottery/>
    <Statistics/>
  </div>
</template>

<script>
import Lottery from './components/Lottery.vue'
import Statistics from './components/Statistics.vue'

export default {
  name: 'App',
  components: {
    Lottery,
    Statistics
  }
}
</script>

<style>
#app {
  font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, serif;
}
</style>
