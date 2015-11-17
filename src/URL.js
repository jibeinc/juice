'use strict';

var history = require('html5-history-api');
var url     = require('url');
var $       = require('jquery');

class URL {
  constructor(locationAPI) {
    this.location = locationAPI;
  }

  updateQueryParams(queryObj) {
    history.pushState(null, null, '?' + $.param(queryObj));
  }

  getQueryParams() {
    return url.parse(this.location.search, true).query;
  }
}

module.exports = URL;
