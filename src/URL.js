'use strict';

const $ = require('jquery');
const history = require('html5-history-api');
const url = require('url');

class URL {
  constructor(window) {
    this.window = window;
  }

  updateQueryParams(queryObj) {
    const currentURL = url.parse(this.window.location.href);
    currentURL.query = queryObj;
    currentURL.search = null;
    history.pushState(null, null, url.format(currentURL));
  }

  onHistoryChange(cb) {
    $(this.window).on('popstate', cb);
  }

  redirect(href) {
    this.window.location.href = href;
  }

  getQueryParams() {
    return url.parse(this.window.location.search, true).query;
  }
}

module.exports = URL;
