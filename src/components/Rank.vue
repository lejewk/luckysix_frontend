<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <v-simple-table
            fixed-header
            height="100%"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    번호
                  </th>
                  <th class="text-left">
                    횟수
                  </th>
                  <th class="text-left">
                    비율
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in drawRates"
                  :key="item.no"
                >
                  <td><v-chip :color="getColor(item.no)">{{ item.no }}</v-chip></td>
                  <td>{{ item.count }}</td>
                  <td>{{ item.rate }}%</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
      drawRates: []
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