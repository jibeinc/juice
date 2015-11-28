// # FOR NPM USAGE
'use strict';

require('babel-polyfill');

module.exports = function (done) {
  var env = require('jsdom').env;
  var html = '<html><body><h1>Hello World!</h1><p class="hello">Heya Big World!</body></html>';
  env(html, ['https://cdnjs.cloudflare.com/ajax/libs/dot/1.0.3/doT.min.js'], function (errors, window) {
    console.error(errors);
    global.window = window;
    global.document = window.document;
    done(require('./dist/ui.js').UI);
  });
};
