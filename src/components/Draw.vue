<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
        <v-card-title>
          <h2>
            제 {{ round }} 회
          </h2>
        </v-card-title>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
          <v-chip-group>
            <v-chip
              v-for="draw in draws"
              :key="draw"
              v-bind:color="getColorNameByNumber(draw)"
            >
              {{ draw }}
            </v-chip>

            <v-icon color="green" small>mdi-plus</v-icon>
            
            <v-chip v-bind:color="getColorNameByNumber(bonus)">{{ bonus }}</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import NumberColor from './mixins/NumberColor';

export default {
  mixins: [NumberColor],
  name: "Draw",
  data() {
    return {
      round: 0, 
      bonus: 0
    }
  },
  created () {
    this.getLatestDraw();
  },
  computed: {
    draws() {
      return this.$store.state.draws;
    }
  },
  methods: {
    getLatestDraw: function() {
      axios
        .get('/api/latestDraw')
        .then(response => {
          // console.log(response.data);
          this.round = response.data.round;
          this.bonus = response.data.bonus;

          var draws = [];

          for (var i=1; i<=6; i++) {
            draws.push(response.data['no' + i]);
          }

          this.$store.commit('setDraws', draws);
        });
    }
  }
}
</script>