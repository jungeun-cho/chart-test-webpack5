import RadarChart from '@toast-ui/chart/dist/esm/charts/radarChart.js';

import {
  budgetData2
} from '../data.js';

export default new RadarChart({
  el: document.getElementById('chart'),
  data: budgetData2,
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
