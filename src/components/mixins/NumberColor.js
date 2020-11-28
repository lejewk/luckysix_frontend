let NumberColor = {
  methods: {
    getColorNameByNumber: function(number) {
      if (number < 11) {
        return 'yellow';
      } else if (number < 21) {
        return 'orange';
      } else if (number < 31) {
        return 'green';
      } else {
        return 'primary';
      }
    }
  }
};

export default NumberColor;