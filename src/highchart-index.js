import Highcharts from 'highcharts';

const dataLength = 10000;
const categories = [];

const seriesData = [];

function getRandomArbitrary(min, max) {
  return Math.ceil((Math.random() * (max - min)) + min);
}

for (let i = 0; i < dataLength; i += 1) {
  categories.push(i);
  seriesData.push(getRandomArbitrary(0, 1000));
}

Highcharts.chart(document.getElementById('column'), {
  chart: {
    type: 'column'
  },
  xAxis: {
    categories
  },
  series: [{
    name: 'Jodeng',
    data: seriesData
  }]
});
