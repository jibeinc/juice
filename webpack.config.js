module.exports = {
  entry: './src/components/index.js',
  output: {
    library: 'UI',
    path: __dirname + '/dist',
    filename: 'jibe.ui.components.js',
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
      }
    ]
  }
};