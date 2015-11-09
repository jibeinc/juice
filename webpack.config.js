var PolyfillServicePlugin = require('polyfill-service-webpack');

module.exports = {
  entry: './src/components/index.js',
  output: {
    library: 'UI',
    path: __dirname + '/dist',
    filename: 'ui.components.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.png$/,
        loader: 'file'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ],
    postLoaders: [ {
        test: __dirname + '/dist/ui.components.js',
        exclude: /\/(node_modules|bower_components)\//,
        loader: 'autopolyfiller',
        query: {
          browsers: [ 'last 2 versions', 'ie >= 9' ]
        }
    } ]
  }
};
