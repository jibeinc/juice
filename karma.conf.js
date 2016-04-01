const webpack = require('webpack');
const sassVars = './sassvars.json';
const path = require('path');

module.exports = function (config) {
  var configuration = {
    browsers: [
      'Chrome'
    ],
    coverageReporter: {
      reporters: [
        {type: 'lcov', subdir: 'report-lcov'}
      ]
    },
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true, //just run once by default
    frameworks: ['mocha'], //use the mocha test framework
    files: [
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.2.1/lodash.min.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
      'tests.webpack.js'
    ],
    postcss: function (webpack) {
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
    },
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
    },
    reporters: ['spec', 'coverage'], //report results in this format
    webpack: { //kind of a copy of your webpack config
      externals: {
        'jquery': 'jQuery',
        'lodash': '_'
      },
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        /*preLoaders: [
         // transpile and instrument only testing sources with babel-istanbul
         {
         test: /\.js$/,
         include: path.resolve('src'),
         loader: 'babel-istanbul',
         query: {
         cacheDirectory: true
         // see below for possible options
         }
         }
         ],*/
        loaders: [{
          // automatically load css into the DOM
          test: /\.css$/,
          loader: 'style!css!postcss'
        }, {
          // automatically load less into the DOM
          test: /\.less$/,
          loader: 'style!css!postcss!less'
        }, {
          test: /\.scss$/,
          loader: "style!css!postcss!sass!jsontosass?path=" + sassVars
        }, {
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
        }, {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            // list each plugin instead of using preset=es2015 as we need
            // to enable loose mode for classes to support IE9+
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

              // loose mode is required for IE9 and IE10!
              ['transform-es2015-classes', {
                'loose': true
              }]
            ]
          }
        }]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};
