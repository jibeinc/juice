'use strict';

var history = require('html5-history-api');
var url     = require('url');

class URL {
  constructor(locationAPI) {
    this.location = locationAPI;
  }

  updateQueryParams(queryObj) {
    var currentURL = url.parse(window.location.href);
    currentURL.query = queryObj;
    currentURL.search = null;
    history.pushState(null, null, url.format(currentURL));
  }

  getQueryParams() {
    return url.parse(this.location.search, true).query;
  }
}

module.exports = URL;
