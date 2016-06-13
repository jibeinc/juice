const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');
const postcssCssNext = require('postcss-cssnext');

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
          presets: ['es2015-loose']
        }
      }]
  },
  postcss(webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      postcssUrl(),
      postcssCssNext({
        browsers: ['last 2 versions', 'ie >= 9'],
        compress: true
      }),
      cssnano({zindex: false})
    ];
  }
};
