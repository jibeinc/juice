'use strict';

// # TODO
//   -

// css
require('./styles.css');

// html
let listViewTmpl = require('./listView.dot');

// scripts
let $             = require('jquery');
let BaseComponent = require('../BaseComponent');

class ListView extends BaseComponent {
  constructor(el, opts) {
    super(el);
    opts = opts || {};
    this.fetch = opts.fetch || $.noop;
    this.set();
  }

  render() {
    this.$el.html(listViewTmpl(this));
    return this;
  }

  get() {
    return this.results;
  }

  subscribe(cb) {
    super.subscribe(cb);
    this.publish(this.get());
  }

  set(results) {
    if (!results) {
      this.fetch((results) => {
        this.set(results);
      });
    } else {
      this.results = results;
      this.render();
      this.publish(this.get());
    }
  }
};

module.exports = ListView;
