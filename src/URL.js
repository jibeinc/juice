'use strict';

const $ = require('jquery');
const history = require('html5-history'); // requires us to `npm i console`
const url = require('url');
const uuid = require('uuid');

class URL {
  constructor(window) {
    this.window = window;
    this.id = uuid.v4();
    this.pushing = false;
  }

  updateQueryParams(queryObj) {
    const currentURL = url.parse(this.window.location.href);
    currentURL.query = queryObj;
    currentURL.search = null;

    this.pushing = true;
    history.pushState(uuid.v4(), null, url.format(currentURL));
  }

  onHistoryChange(cb) {
    // hacky unbind
    var uid = history.Adapter.uid(this.window);
    history.Adapter.handlers[uid]['statechange'] = [];

    // bind
    history.Adapter.bind(this.window,'statechange', () => { // Note: We are using statechange instead of popstate
      if (this.pushing) {
        this.pushing = false;
      } else {
        cb();
      }
    });
  }

  redirect(href) {
    this.window.location.href = href;
  }

  getQueryParams() {
    return url.parse(this.window.location.search, true).query;
  }
}

module.exports = URL;
