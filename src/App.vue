<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <v-toolbar-title>Today Lotto</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Draw/>
      <ThisWeek/>
      <Best6/>
    </v-main>
  </v-app>
</template>

<script>
import Draw from './components/Draw.vue'
import ThisWeek from './components/ThisWeek.vue'
import Best6 from './components/Best6.vue'

export default {
  name: 'App',
  components: {
    Draw,
    ThisWeek,
    Best6
  }
}
</script>