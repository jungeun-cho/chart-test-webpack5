import TreemapChart from '@toast-ui/chart/dist/esm/charts/treemapChart.js';

import {
  usedDiskSpaceData
} from '../data.js';

export default new TreemapChart({
  el: document.getElementById('chart'),
  data: usedDiskSpaceData,
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
