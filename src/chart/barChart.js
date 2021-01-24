import BarChart from '@toast-ui/chart/dist/esm/charts/BarChart.js';

import {
  temperatureData
} from '../data.js';

export default new BarChart({
  el: document.getElementById('chart'),
  data: temperatureData,
  options: {
    chart: {
      width: 1000,
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
