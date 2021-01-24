import NestedPieChart from '@toast-ui/chart/dist/esm/charts/nestedPieChart.js';

import {
  browserUsageData2
} from '../data.js';

export default new NestedPieChart({
  el: document.getElementById('chart'),
  data: browserUsageData2,
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
    },
    series: {
      browsers: {
        radiusRange: {
          inner: '20%',
          outer: '50%'
        }
      },
      versions: {
        radiusRange: {
          inner: '55%',
          outer: '85%'
        }
      }
    }
  }
});
