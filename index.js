// # FOR NPM USAGE
'use strict';

var env = require('jsdom').env;
var html = '<html><body><h1>Hello World!</h1><p class="hello">Heya Big World!</body></html>';
env(html, function (errors, window) {
  console.error(errors);
  var $ = require('jquery')(window);
  module.exports = require('./src/index.js');
});
