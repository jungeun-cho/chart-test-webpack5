import BulletChart from '@toast-ui/chart/dist/esm/charts/BulletChart.js';

import {
  budgetDataForBullet
} from '../data.js';

export default new BulletChart({
  el: document.getElementById('chart'),
  data: budgetDataForBullet,
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
