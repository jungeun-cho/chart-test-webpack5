import LineAreaChart from '@toast-ui/chart/dist/esm/charts/lineAreaChart.js';

import {
  energyUsageData
} from '../data.js';

export default new LineAreaChart({
  el: document.getElementById('chart'),
  data: energyUsageData,
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
