'use strict';

// # TODO
//   - publish event when a list item is clicked 'selected'

// css
require('./styles.css');

// html
let listViewTmpl = require('./listView.dot');

// scripts
let $             = require('jquery');
let BaseComponent = require('../BaseComponent');
let assert        = require('../assert');

class ListView extends BaseComponent {
  constructor(el, opts) {
    super(el);
    opts = opts || {};
    this.fetch = opts.fetch;
    this.renderItem = opts.renderItem || this.renderItem;
    assert(typeof this.fetch === 'function');
  }

  render() {
    this.$el.html(listViewTmpl(this));
    this.$el.find('li').click((evt) => {
      this.set($(evt.target).attr('id').replace(this.id + '-', '')); // TODO this is shitty
    });
    return this;
  }

  // overridden by consumer
  renderItem(r) {
    return r.toString();
  }

  setResults(results) {
    if (!results) {
      this.fetch((results) => {
        this.setResults(results);
      });
    } else {
      this.results = results;
      this.render();
      this.publish(this.get());
    }
  }
};

module.exports = ListView;
