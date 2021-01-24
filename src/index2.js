/*
import TuiLineChart from 'tui-chart/dist/esm/charts/lineChart';
import TuiBarChart from 'tui-chart/dist/esm/charts/barChart';
import TuiColumnChart from 'tui-chart/dist/esm/charts/columnChart';
import TuiBubbleChart from 'tui-chart/dist/esm/charts/bubbleChart';

import TuiTreemapChart from 'tui-chart/dist/esm/charts/treemapChart';
import TuiHeatmapChart from 'tui-chart/dist/esm/charts/heatmapChart';
*/
/* eslint-disable */
import Chart from '@toast-ui/chart/dist/@toast-ui/chart.js';
import '@toast-ui/chart/dist/@toast-ui/chart.css';
import {
  browserUsageData,
  browserUsageData2,
  temperatureData,
  lifeExpectancyPerGDPData,
  usedDiskSpaceData,
  temperatureAverageDataForHeatmap
} from './data.js';
/*
const columnChart = Chart.columnChart({
  el: document.getElementById('column'),
  data: temperatureData,
  options: {
   chart: {
      // width: 1000,
      // height: 500,
      resizable: true
    },
    legend: {
      visible: false
    },
    responsive: {
      animation: {duration: 0}
    }
  }
});
*/
// const heatmaapChart = Chart.heatmapChart({
//   el: document.getElementById('heatmap'),
//   data: temperatureAverageDataForHeatmap,
//   options: {
//     /*
//     chart: {
//       width: 1000,
//       height: 500
//     }
//     */
//    chart: {
//       resizable: true
//     },
//     responsive: {
//       animation: {duration: 0}
//     }
//   },
// });

const barChart = Chart.barChart({
  el: document.getElementById('bar'),
  data: temperatureData,
  options: {
    chart: {
      resizable: true
    },
    legend: {
      visible: false
    },
    responsive: {
      animation: {duration: 0},
      rules: [
        {
          condition: function ({ width: w }) {
            return w <= 600;
          },
          options: {
            legend: {
              align: 'bottom',
            },
          },
        },
        {
          condition: function ({ width: w }) {
            return w <= 400;
          },
          options: {
            legend: {
              visible: false,
            },
            exportMenu: {
              visible: false,
            },
          },
        },
      ],
    }
  }
});

/*
const pieChart = Chart.pieChart({
  el: document.getElementById('pie'),
  data: browserUsageData,
  options: {
   chart: {
    resizable: true
    },
    legend: {
      visible: false
    },
    responsive: {
      animation: {duration: 0}
    }
  }
});

const nestedPieChart = Chart.nestedPieChart({
  el: document.getElementById('nested'),
  data: browserUsageData2,
  options: {
    chart: {
      resizable: true
    },
    legend: {
      visible: false
    },
    responsive: {
      animation: {duration: 0}
    }
  }
});
*/
setTimeout(() => {
  /*
  columnChart.addSeries({
    name: 'lalalalalal',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  });
  */

  // heatmaapChart.addSeries([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], {category: 'Test'});
  /*
  barChart.addSeries({
    name: 'bbababa',
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  });
  */
  /*
  barChart.setOptions({
    series: {
      stack: true
    }
  });
  */
  // pieChart.addSeries({name: 'LaLa', data: 10});
  /*
  nestedPieChart.addSeries(
    {
      name: 'wow',
      data: [
        {
          name: 'Chrome3',
          data: 5,
        },
        {
          name: 'Safari3',
          data: 2,
        },
        {
          name: 'IE3',
          data: 1,
        },
        {
          name: 'Firefox3',
          data: 1,
        },
        {
          name: 'Opera3',
          data: 0.3,
        },
        {
          name: 'Etc3',
          data: 0.7,
        },
      ],
    },
  )
  */
}, 3000);



/*
const lineChart = Chart.lineChart({
  el: document.getElementById('line'),
  data: temperatureData,
  options: {
    chart: {
      width: 500,
      height: 300
    },
    responsive: true
  }
});

const barChart = Chart.barChart({
  el: document.getElementById('bar'),
  data: temperatureData,
  options: {
    chart: {
      width: 500,
      height: 300
    },
    responsive: true
  }
});

const columnChart = Chart.columnChart({
  el: document.getElementById('column'),
  data: temperatureData,
  options: {
    chart: {
      width: 500,
      height: 300
    },
    responsive: true
  }
});

const bubbleChart = Chart.bubbleChart({
  el: document.getElementById('bubble'),
  data: lifeExpectancyPerGDPData,
  options: {
    chart: {
      width: 500,
      height: 300
    },
    responsive: true
  }
});

const treeChart = Chart.treemapChart({
  el: document.getElementById('tree'),
  data: usedDiskSpaceData,
  options: {
    chart: {
      width: 500,
      height: 300
    },
    responsive: true
  }
});

const heatmaapChart = Chart.heatmapChart({
  el: document.getElementById('heatmap'),
  data: temperatureAverageDataForHeatmap,
  options: {
    chart: {
      width: 500,
      height: 300
    },
    responsive: true
  }
});
*/
/*
const lineChart = new TuiLineChart({
  el: document.getElementById('line'),
  data: temperatureData,
  options: {
    chart: {
      width: 500,
      height: 300
    }
  }
});

const barChart = new TuiBarChart({
  el: document.getElementById('bar'),
  data: temperatureData,
  options: {
    chart: {
      width: 500,
      height: 300
    }
  }
});

const columnChart = new TuiColumnChart({
  el: document.getElementById('column'),
  data: temperatureData,
  options: {
    chart: {
      width: 500,
      height: 300
    }
  }
});

const bubbleChart = new TuiBubbleChart({
  el: document.getElementById('bubble'),
  data: lifeExpectancyPerGDPData,
  options: {
    chart: {
      width: 500,
      height: 300
    }
  }
});

const treeChart = new TuiTreemapChart({
  el: document.getElementById('tree'),
  data: usedDiskSpaceData,
  options: {
    chart: {
      width: 500,
      height: 300
    }
  }
});

const heatmaapChart = new TuiHeatmapChart({
  el: document.getElementById('heatmap'),
  data: temperatureAverageDataForHeatmap,
  options: {
    chart: {
      width: 500,
      height: 300
    }
  }
});
*/
