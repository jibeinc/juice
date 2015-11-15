// # FOR NPM USAGE
'use strict';

var env = require('jsdom').env;
var html = '<html><body><h1>Hello World!</h1><p class="hello">Heya Big World!</body></html>';
env(html, function (errors, window) {
  console.error(errors);
  global.window = window;
  global.window.document = window.document;
  require('./dist/ui.js');
  module.exports = global.UI;
});
