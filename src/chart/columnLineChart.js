import ColumnLineChart from '@toast-ui/chart/dist/esm/charts/columnLineChart.js';

import {
  temperatureAverageData
} from '../data.js';

export default new ColumnLineChart({
  el: document.getElementById('chart'),
  data: temperatureAverageData,
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
