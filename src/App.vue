<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <v-toolbar-title>로통</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Draw/>
      <Statistics/>
    </v-main>
  </v-app>
</template>

<script>
import Draw from './components/Draw.vue'
import Statistics from './components/Statistics.vue'

export default {
  name: 'App',
  components: {
    Draw,
    Statistics
  }
}
</script>