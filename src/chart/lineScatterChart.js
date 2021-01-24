import LineScatterChart from '@toast-ui/chart/dist/esm/charts/lineScatterChart.js';

import {
  efficiencyAndExpensesData
} from '../data.js';

export default new LineScatterChart({
  el: document.getElementById('chart'),
  data: efficiencyAndExpensesData,
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
