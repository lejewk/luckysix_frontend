<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h2>
              BEST 6 
            </h2>
          </v-card-title>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            <v-list dense>
              <v-list-item-group>
                <v-list-item v-for="noDrawRate in noDrawRates" :key="noDrawRate.no">
                  <v-list-item-icon>
                    <v-chip>{{ noDrawRate.no }}</v-chip>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-progress-linear v-bind:value="calcScoreByRate(noDrawRate.rate)"></v-progress-linear>
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>{{ rateToPercentFormat(noDrawRate.rate) }}%</v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
    rateToPercentFormat: function(rate) {
      return (rate*100).toString().substr(0, 5);
    },
    calcScoreByRate: function(rate) {
      var topRate = this.noDrawRates[0].rate;
      var maxBarSize = 100;

      var barCount = maxBarSize * rate / topRate;

      return barCount;
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