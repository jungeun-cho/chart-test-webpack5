import BubbleChart from '@toast-ui/chart/dist/esm/charts/bubbleChart.js';

import {
  lifeExpectancyPerGDPData
} from '../data.js';

export default new BubbleChart({
  el: document.getElementById('chart'),
  data: lifeExpectancyPerGDPData,
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
