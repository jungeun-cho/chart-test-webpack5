const path = require('path');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'src/index.js')
      // path.resolve(__dirname, 'src/css/style.css')
    ]
  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  } /*
  resolve: {
    mainFields: ['module', 'main']
  }*/
};
