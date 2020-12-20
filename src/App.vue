<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <v-toolbar-title><v-icon>mdi-chart-bar</v-icon> Lotto Rank</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Rank/>
    </v-main>
  </v-app>
</template>

<script>
import Rank from './components/Rank.vue'

export default {
  name: 'App',
  components: {
    Rank
  }
}
</script>