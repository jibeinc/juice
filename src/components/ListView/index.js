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

  renderItem(item) {
    return item.toString();
  }

  refresh() {
    this.fetch((results) => {
      this.results = results;
      this.render();
    });
  }
};

module.exports = ListView;
