const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/*
module.exports = {
  mode: 'development',
  entry: './src/chartjs-index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'eslint-loader',
          options: {
            emitWarning: true
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/chartjs-test.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin()
  ],
  devtool: 'source-map'
};
*/

const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

module.exports = {
  mode: 'production',
  entry: './src/chartjs-index.js',
  devServer: {
    host: '0.0.0.0',
    contentBase: './dist2',
    port: '8081'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'eslint-loader',
          options: {
            emitWarning: true
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle2.[hash].js',
    path: path.resolve(__dirname, 'dist2')
  },
  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].[hash].css'
    }),

    new HtmlWebpackPlugin({
      template: './src/chartjs-test.html',
      hash: true
    }),

    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: ['default', {discardComments: {removeAll: true}}]
      },
      canPrint: true
    })

  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            // eslint-disable-next-line camelcase
            // drop_console: true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {discardComments: {removeAll: true}},
        canPrint: true
      })
    ]
  }
};
