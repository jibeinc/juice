'use strict';

// # Render a list of results
//
//   - publishes an event when a list item is clicked 'selected'
//
//
// Object expects 4 things in the options:
//  @param {Function} fetch - a function to pull new data
//  @param {Object} listItemOpts - an object containing options specifically for each item in listView
//  @param {Function} renderItem - determines how each listElement will be displayed in DOM
//  @param {Array} results - prefill the component with data

// listItemOpts has the following properties:
//  @param {Boolean} stopPropagation - prevents the click handler from bubbling the event upwards
//  @param {Object} attrs - a list of CSS attributes to put on each ListItem


// css
require('./styles.css');

// html
const listViewTmpl = require('./listView.dot');

// scripts
const $ = require('jquery');
const BaseComponent = require('../BaseComponent');

class ListView extends BaseComponent {
  constructor(el, opts = {}) {
    super(el, opts);

    Object.assign(this, {
      fetch: opts.fetch || $.noop,
      listItemOpts: opts.listItemOpts || {},
      renderItem: opts.renderItem || this.renderItem,
      results: opts.results || []
    });
  }

  render() {
    this.$el.html(listViewTmpl(this));

    this.$el.find('ul.ui-list').attr(this.attrs);
    this.$el.find('li.ui-list-item').attr(this.listItemOpts.attrs || {})
    this.$el.find('li.ui-list-item').click((evt) => {
      this.set(this.results[$(evt.currentTarget).attr('data-index')]);

      if (this.listItemOpts.stopPropagation) {
        evt.stopPropagation();
      }
    });
    return this.$el.html();
  }

  // expected to be overriden
  renderItem(item) {
    return item.toString();
  }

  refresh() {
    this.publish('refresh');
    return this.fetch((results) => {
      this.results = results;
      this.render();
    });
  }
};

module.exports = ListView;
