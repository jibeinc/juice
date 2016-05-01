module.exports = {
  webpackModule: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [
      {
        // automatically load css into the DOM
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      },
      {
        // compress and load images as embedded data-uri's
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url!img?minimize'
      }, {
        // load static html snippets as strings
        test: /\.html$/,
        loader: 'html'
      }, {
        // load dot template as compiler fn
        test: /\.dot$/,
        loader: 'dot'
      }, {
        // load ES6 template string as compiler fn
        test: /\.tmpl$/,
        loader: 'babel?plugins[]=transform-es2015-template-literals!template-string'
      },
      {
        // transpile all javascript from ES6 to ES5
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          // list each plugin instead of using preset=es2015 as we need
          // to enable loose mode for classes to support IE9+
          // http://ricostacruz.com/til/babel-ie-class-inheritance.html
          plugins: [
            'babel-plugin-rewire',
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

            // loose mode is required for IE9 and IE10!
            ['transform-es2015-classes', {
              'loose': true
            }]
          ]
        }
      }]
  },
  postcss(webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-url')(),
      require('postcss-cssnext')({
        browsers: ['last 2 versions', 'ie >= 9'],
        compress: true
      }),
      require('cssnano')({zindex: false})
    ];
  }
}