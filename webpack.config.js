const config = require('./common.config');
const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

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
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'ADVANCED'
      },
      concurrency: 3,
    }),
    new webpack.ProvidePlugin({
      $: 'cash-dom'
    })
  ],
  postcss: config.postcss,
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },
  module: config.webpackModule
};
