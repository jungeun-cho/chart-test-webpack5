import HeatmapChart from '@toast-ui/chart/dist/esm/charts/heatmapChart.js';

import {
  temperatureAverageDataForHeatmap
} from '../data.js';

export default new HeatmapChart({
  el: document.getElementById('chart'),
  data: temperatureAverageDataForHeatmap,
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
