// import ColumnChart from '@toast-ui/chart/dist/esm/charts/ColumnChart.js';
// import {ColumnChart} from '@toast-ui/chart'; // 압축 파일 292KB
import Chart from '@toast-ui/chart'; // 395KB
import {
  temperatureData
} from '../data.js';

export default Chart.columnChart({
  el: document.getElementById('chart'),
  data: temperatureData,
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
