<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <v-data-table
            dense
            :headers="headers"
            :header-props="headerProps"
            :items="drawRates"
            disable-pagination
            hide-default-footer
          >
            <template v-slot:[`item.no`]="{ item }">
              <v-chip
                :color="getColor(item.no)"
                dark
              >
                {{ item.no }}
              </v-chip>
            </template>
            <template v-slot:[`item.rate`]="{ item }">
                {{ item.rate }}%
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Rank',
  data() {
    return {
      headerProps: {
        sortByText: "정렬 기준"
      },
      headers: [
        { text: '번호', value: 'no' },
        { text: '횟수', value: 'count' },
        { text: '비율', value: 'rate' }
      ],
      drawRates: [
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
    this.getRank();
  },
  methods: {
    getColor: function(number) {
      if (number < 11) {
        return 'yellow';
      } else if (number < 21) {
        return 'orange';
      } else if (number < 31) {
        return 'green';
      } else if (number < 41) {
        return 'primary'
      } else {
        return 'secondary';
      }
    },
    getRank: function() {
      axios
        .get('/api/rank')
        .then(response => {
          this.drawRates = response.data.drawRates;
        })
    }
  }
}
</script>