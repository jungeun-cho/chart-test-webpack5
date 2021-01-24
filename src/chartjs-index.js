/* eslint-disable */
import Chart from 'chart.js';
import {
  temperatureData,
  browserUsageData,
  browserUsageData2
} from './data.js';

const colors = [
  '#00a9ff',
  '#ffb840',
  '#ff5a46',
  '#00bd9f',
  '#785fff',
  '#f28b8c',
  '#989486',
  '#516f7d',
  '#29dbe3',
  '#dddddd',
  '#64e38b',
  '#e3b664',
  '#fB826e',
  '#64e3C2',
  '#f66efb',
  '#e3cd64',
  '#82e364',
  '#8570ff',
  '#e39e64',
  '#fa5643',
  '#7a4b46',
  '#81b1c7',
  '#257a6c',
  '#58527a',
  '#fbb0b0',
  '#c7c7c7',
];
/*
const barCtx = document.getElementById('bar-canvas');
const barData = {
  labels: temperatureData.categories,
  datasets: temperatureData.series.map(({name, data}, index) => ({
    label: name,
    backgroundColor: colors[index],
    data
  }))
};

const myBarChart = new Chart(barCtx.getContext('2d'), {
  type: 'horizontalBar',
  data: barData,
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        gridLines: {
          display: true,
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      position: 'right'
    }
  }
});

*/

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

const data = {
  labels: categories,
  datasets: [
    {
      name: 'Jodeng',
      data: seriesData,
      backgroundColor: colors[0]
    }
  ]
};

const columnCtx = document.getElementById('column-canvas');
const myColumnChart = new Chart(columnCtx.getContext('2d'), {
  type: 'bar',
  data,
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        gridLines: {
          display: true,
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      position: 'bottom'
    }
  }
});
/*
const pieData = {
  labels: browserUsageData.series.map(({name}) => name),
  datasets: [{
    backgroundColor:  browserUsageData.series.map((_, index) => colors[index]),
    data: browserUsageData.series.map(({data}) => data)
  }]
};

const pieCtx = document.getElementById('pie-canvas');
const myPieChart = new Chart(pieCtx.getContext('2d'), {
  type: 'pie',
  data: pieData,
  options: {
    maintainAspectRatio: false,
    legend: {
      position: 'right'
    }
  }
});

let nestedSeriesIndex = 0;
const nestedData = {
  labels: browserUsageData2.series.flatMap(({data}) => data.map(({name}) => name)),
  datasets: browserUsageData2.series.map(({data}) => {

    backgroundColor: data.backgroundColor
    return {
      backgroundColor: data.map(() => {
        const color = colors[nestedSeriesIndex];
        nestedSeriesIndex += 1;

        return color;
      }),
      data: data.map(({data}) => data)
    };
  })
};

const nestedCtx = document.getElementById('nested-pie-canvas');
const myNestedChart = new Chart(nestedCtx.getContext('2d'), {
  type: 'pie',
  data: nestedData,
  options: {
    maintainAspectRatio: false,
    legend: {
      position: 'right'
    }
  }
});

*/
