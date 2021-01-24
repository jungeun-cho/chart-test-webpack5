import PieChart from '@toast-ui/chart/dist/esm/charts/pieChart.js';

import {
  browserUsageData
} from '../data.js';

export default new PieChart({
  el: document.getElementById('chart'),
  data: browserUsageData,
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
