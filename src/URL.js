'use strict';

const history = require('html5-history-api');
const url = require('url');

class URL {
  constructor(locationAPI) {
    this.location = locationAPI;
  }

  updateQueryParams(queryObj) {
    const currentURL = url.parse(window.location.href);
    currentURL.query = queryObj;
    currentURL.search = null;
    history.pushState(null, null, url.format(currentURL));
  }

  getQueryParams() {
    return url.parse(this.location.search, true).query;
  }
}

module.exports = URL;
