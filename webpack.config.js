module.exports = {
  entry: './src/components/index.js',
  output: {
    library: 'UI',
    path: __dirname + '/dist',
    filename: 'ui.components.js',
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer?{browsers: ["last 2 versions", "ie >= 9"]}'
      },
      {
        test: /\.png$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.tmpl$/,
        loader: 'template-string'
      },
      {
        test: /\.dot$/,
        loader: 'dot'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};
