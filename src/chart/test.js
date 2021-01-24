class Bar {}
class Line {}

const test = {
  BarChart: Bar,
  LineChart: Line,
  barChart() {
    return new Bar();
  },
  lineChart() {
    return new Line();
  }
};
module.exports = test;
