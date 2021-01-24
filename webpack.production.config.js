const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.common');
module.exports = merge(commonConfig, {
  mode: 'production',
  // devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@t': path.resolve(__dirname, 'types/')
    }
  },
  module: {rules: [
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    },
    {
      test: /\.s[ac]ss$/i,
      use: [MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader']
    },
    {
      test: /\.(ts|tsx|js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  optimization: {
    minimizer: [
      /*
         new OptimizeCssAssetsPlugin({
             cssProcessorOptions: {
                map: {
                   inline: false,
                   annotation: true,
                },
             },
         }),
         */
      new TerserPlugin({
        /*
           parallel: true,
            cache: true,
           sourceMap: true,
           */
        terserOptions: {
          compress: {
            drop_console: true, // eslint-disable-line camelcase
            warnings: true
          },
          output: {
            comments: /TOAST UI Chart/i
          }
        }
      })
    ]
  }
});
