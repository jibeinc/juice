var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: ['mocha'], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
    },
    reporters: ['dots'], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [{
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
              }],
            ]
          }
        }]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
