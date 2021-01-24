import ScatterChart from '@toast-ui/chart/dist/esm/charts/scatterChart.js';

import {
  genderHeightWeightData
} from '../data.js';

export default new ScatterChart({
  el: document.getElementById('chart'),
  data: genderHeightWeightData,
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
