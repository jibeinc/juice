const config = require('./common.config');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/juice.js'],
  eslint: {
    failOnWarning: true,
    failOnError: true
  },
  output: {
    library: 'UI',
    path: __dirname + '/dist',
    filename: 'ui.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  postcss: config.postcss,
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },
  module: config.webpackModule
};
