'use strict';

// # Render a list of results
//
//   - publishes an event when a list item is clicked 'selected'
//

// css
require('./styles.css');

// html
const listViewTmpl = require('./listView.dot');

// scripts
const $             = require('jquery');
const BaseComponent = require('../BaseComponent');

class ListView extends BaseComponent {
  constructor(el, opts = {}) {
    super(el);

    Object.assign(this, {
      fetch: opts.fetch,
      listItemOpts: opts.listItemOpts || {},
      renderItem: opts.renderItem || this.renderItem,
      results: opts.results || []
    });
  }

  render() {
    this.$el.html(listViewTmpl(this));
    this.$el.find('li').attr(this.listItemOpts.attrs)
    this.$el.find('li').click((evt) => {
      this.set(this.results[$(evt.target).attr('data-index')]);
    });
    return this;
  }

  // expected to be overriden
  renderItem(item) {
    return item.toString();
  }

  refresh() {
    this.publish('refresh');
    this.fetch((results) => {
      this.results = results;
      this.render();
    });
  }
};

module.exports = ListView;
