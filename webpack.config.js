module.exports = {
  entry: './index.js',
  output: {
    library: 'UI',
    path: __dirname + '/dist',
    filename: 'ui.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  devtool: 'source-map',
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
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.tmpl$/,
        loader: 'babel?plugins[]=transform-es2015-template-literals!template-string'
      },
      {
        test: /\.dot$/,
        loader: 'dot'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          // list each plugin instead of using preset=es2015 as we need
          // to enable loose mode for classes to support IE9
          // http://ricostacruz.com/til/babel-ie-class-inheritance.html
          plugins: [
            'transform-es2015-arrow-functions',
            'transform-es2015-block-scoped-functions',
            'transform-es2015-block-scoping',
            'transform-es2015-computed-properties',
            'transform-es2015-constants',
            'transform-es2015-destructuring',
            'transform-es2015-for-of',
            'transform-es2015-function-name',
            'transform-es2015-literals',
            'transform-es2015-object-super',
            'transform-es2015-parameters',
            'transform-es2015-shorthand-properties',
            'transform-es2015-spread',
            'transform-es2015-sticky-regex',
            'transform-es2015-template-literals',
            'transform-es2015-typeof-symbol',
            'transform-es2015-unicode-regex',
            'transform-es2015-modules-commonjs',
            ['transform-es2015-classes', {
              'loose':true
            }],
          ]
        }
      }
    ]
  }
};
