<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h2>
              이번주 통계
            </h2>
          </v-card-title>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            <v-list dense>
              <v-list-item-group>
                <v-list-item v-for="(noDrawRate, index) in noDrawRates" :key="noDrawRate.no">
                  <v-list-item-icon>
                    <v-chip v-bind:color="getColorNameByNumber(noDrawRate.no)">{{ noDrawRate.no }}</v-chip>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-progress-linear v-bind:value="calcScoreByRate(noDrawRate.rate, index)"></v-progress-linear>
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ noDrawRate.count }} 번 당첨되었습니다.</v-list-item-subtitle>
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
import NumberColor from './mixins/NumberColor';

export default {
  mixins: [NumberColor],
  name: 'ThisWeek',
  data() {
    return {
      noDrawRates: [
        {no: 1, count: 0, rate: 0},
        {no: 17, count: 0, rate: 0},
        {no: 26, count: 0, rate: 0},
        {no: 32, count: 0, rate: 0},
        {no: 40, count: 0, rate: 0},
        {no: 42, count: 0, rate: 0}
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
    calcScoreByRate: function(rate, index) {
      var topRate = this.noDrawRates[0].rate;
      var maxBarSize = 100;

      var barCount = maxBarSize * rate / topRate;

      // 차등 효과
      var diffEffectSzie = 0;
      if (index > 0) {
        barCount -= diffEffectSzie;
      }

      return barCount;
    },
    getNoDrawRate: function() {
      axios
        .get('/api/getNoDrawRate')
        .then(response => {
          this.noDrawRates = response.data.noDrawRates;
        })
    }
  }
}
</script>