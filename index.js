// # FOR NPM USAGE
'use strict';

module.exports = function (done) {
  var env = require('jsdom').env;
  var html = '<html><body><h1>Hello World!</h1><p class="hello">Heya Big World!</body></html>';
  env(html, ['https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.3.14/polyfill.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/dot/1.0.3/doT.min.js', __dirname + '/dist/ui.js'],
    function (errors, window) {
      if (errors) {
        console.error('failed to compile jibe-ui-components for node', errors);
      }

      global.window = window;
      global.document = window.document;
      done(window.UI);
    });
};

// module.exports = require('./src/index');

