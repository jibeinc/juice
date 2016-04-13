const config = require('./common.config');

module.exports = {
  entry: './src/juice.js',
  eslint: {
    failOnWarning: true,
    failOnError: true
  },
  externals: {
    'jquery': 'jQuery',
    'lodash': '_'
  },
  output: {
    library: 'UI',
    path: __dirname + '/dist',
    filename: 'ui.js',
    publicPath: '/dist/'
  },
  postcss: config.postcss,
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },
  module: config.webpackModule
};
