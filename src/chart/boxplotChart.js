import BoxplotChart from '@toast-ui/chart/dist/esm/charts/boxPlotChart.js';

import {
  BudgetDataForBoxPlot
} from '../data.js';

export default new BoxplotChart({
  el: document.getElementById('chart'),
  data: BudgetDataForBoxPlot,
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
