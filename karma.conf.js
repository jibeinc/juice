const config = require('./common.config');
const path = require('path');

const webpackModule = config.webpackModule;

// transpile and instrument only testing sources with babel-istanbul
webpackModule.preLoaders.unshift(
  {
    test: /(\.js)$/,
    // only include src directory
    include: [path.resolve(__dirname, "src")],
    loader: 'isparta-instrumenter-loader'
  });

// Only add rewire when testing
webpackModule.loaders[webpackModule.loaders.length - 1].query.plugins.push('babel-plugin-rewire')

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
    frameworks: ['jasmine-jquery', 'jasmine'],
    files: [
      'https://cdn.jsdelivr.net/cash/1.2.0/cash.min.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
      'tests.webpack.js'
    ],
    postcss: config.postcss,
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
    },
    reporters: ['spec', 'coverage'], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: webpackModule
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
