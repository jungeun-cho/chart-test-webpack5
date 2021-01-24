/* eslint-disable no-unused-vars */

// const {ColumnChart} = require('@toast-ui/chart'); // 번들잡힘! 1.4MB
// const Chart = require('@toast-ui/chart'); // Chart['default'].columnChart 번들잡힘!
// console.log(Chart);
// import * as All from '@toast-ui/chart';
// import Chart from '@toast-ui/chart';
// import areaChart from '@toast-ui/chart/dist/esm/charts/areaChart';
// console.log(Chart);
// import '@toast-ui/chart/dist/toastui-chart.min.css';

import ColumnChart from '@toast-ui/chart/column';
// import BarChart from '@toast-ui/chart/bar';
/*
import LineChart from '@toast-ui/chart/line';
import AreaChart from '@toast-ui/chart/area';
import LineAreaChart from '@toast-ui/chart/lineArea';
import ColumnLineChart from '@toast-ui/chart/columnLine';
import BulletChart from '@toast-ui/chart/bullet';
import BoxPlotChart from '@toast-ui/chart/boxPlot';
import TreemapChart from '@toast-ui/chart/treemap';
import HeatmapChart from '@toast-ui/chart/heatmap';
import ScatterChart from '@toast-ui/chart/scatter';
import LineScatterChart from '@toast-ui/chart/lineScatter';
import BubbleChart from '@toast-ui/chart/bubble';
import PieChart from '@toast-ui/chart/pie';
import NestedPieChart from '@toast-ui/chart/nestedPie';
import RadarChart from '@toast-ui/chart/radar';
*/

// const Chart = require('@toast-ui/chart/dist/toastui-chart.js');
/*
console.log(BarChart, ColumnChart, LineChart, AreaChart, LineAreaChart, ColumnLineChart, BulletChart, BoxPlotChart,
  TreemapChart, HeatmapChart, ScatterChart, LineScatterChart, BubbleChart, PieChart, NestedPieChart, RadarChart);
*/
// console.log(Chart);

// import {LineChart} from '@toast-ui/chart';
// console.log(LineChart);
// import Chart from '@toast-ui/chart';

// import Chart from '@toast-ui/chart';
// import {AreaChart} from '@toast-ui/chart';
// console.log(Chart, Chart.areaChart, Chart['default']);

// import ColumnChart from './chart/columnChart.js';
// import BarChart from './chart/barChart.js';
// import LineChart from './chart/lineChart.js';
// import AreaChart from './chart/areaChart.js';
// import BulletChart from './chart/bulletChart.js';
// import BoxplotChart from './chart/boxplotChart.js';
// import TreemapChart from './chart/treemapChart.js';
// import HeatmapChart from './chart/heatmapChart.js';
// import ScatterChart from './chart/scatterChart.js';
// import BubbleChart from './chart/bubbleChart.js';
// import PieChart from './chart/pieChart.js';
// import RadarChart from './chart/radarChart.js';
// import NestedPieChart from './chart/nestedPieChart.js';
// import ColumnLineChart from './chart/columnLineChart.js';
// import LineAreaChart from './chart/lineAreaChart.js';
// import lineScatterChart from './chart/lineScatterChart.js';

/*
const {barChart} = require('./chart/test.js');
console.log(Chart);
*/
/*
const chart = Chart.lineChart({
  el: document.getElementById('chart'),
  data: temperatureData,
  options: {
    chart: {
      width: 'auto',
      height: 500,
      animation: false
    },
    legend: {
      visible: true,
      align: 'bottom'
    },
    responsive: {
      animation: {duration: 0}
    }
  }
});
*/
/*
const barChart = new BarChart({
  el: document.getElementById('bar'),
  data: temperatureData,
  options: {
    chart: {
      width: 'auto',
      height: 500
    },
    legend: {
      visible: true,
      align: 'bottom'
    },
    responsive: {
      animation: {duration: 0}
    }
  }
});

const heatmap = new HeatmapChart({
  el: document.getElementById('heatmap'),
  data: temperatureAverageDataForHeatmap,
  options: {
    chart: {
      width: 'auto',
      height: 500
    },
    legend: {
      visible: true,
      align: 'bottom'
    },
    responsive: {
      animation: {duration: 500}
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
  categories,
  series: [
    {
      name: 'Jodeng',
      data: seriesData
    }
  ]
};

const columnChart = new ColumnChart({
  el: document.getElementById('column'),
  data,
  options: {
    useStatistics: false,
    chart: {
      width: 10000,
      height: 500,
      animation: false
    },
    xAxis: {
      label: {interval: 100},
      tick: {interval: 1000}
    },
    legend: {
      visible: true,
      align: 'bottom'
    },
    responsive: {
      animation: {duration: 0}
    },
    theme: {
      // chart: {backgroundColor: 'rgba(255, 0, 0, 0.1)'},
      /*
      series: {
        barWidth: 2
      }
      */
    }
  }
});
/*
const barChart = new BarChart({
  el: document.getElementById('bar'),
  data,
  options: {
    useStatistics: false,
    chart: {
      width: 800,
      height: 10000,
      animation: false
    },
    xAxis: {
      label: {interval: 100},
      tick: {interval: 1000}
    },
    legend: {
      visible: true,
      align: 'top'
    },
    responsive: {
      animation: {duration: 0}
    },
    theme: {
      // chart: {backgroundColor: 'rgba(255, 0, 0, 0.1)'},
      series: {
        barWidth: 1
      }
    }
  }
});
*/
