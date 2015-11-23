// # FOR NPM USAGE
'use strict';

module.exports = function (done) {
  var env = require('jsdom').env;
  var html = '<html><body><h1>Hello World!</h1><p class="hello">Heya Big World!</body></html>';
  env(html, function (errors, window) {
    console.error(errors);
    global.window = window;
    global.document = window.document;
    done(require('./dist/ui.js').UI);
  });
};
