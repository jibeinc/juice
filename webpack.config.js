const config = require('./common.config');
const RewirePlugin = require("rewire-webpack");

module.exports = {
  entry: './src/juice.js',
  eslint: {
    failOnWarning: true,
    failOnError: true
  },
  externals: {
    'jquery': 'jQuery'
  },
  output: {
    library: 'UI',
    path: __dirname + '/dist',
    filename: 'ui.js',
    publicPath: '/dist/'
  },
  plugins: [
    new RewirePlugin()
    ],
  postcss: config.postcss,
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },
  module: config.webpackModule
};
