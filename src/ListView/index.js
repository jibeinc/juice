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
const $ = require('jquery');
const BaseComponent = require('../BaseComponent');
const assert = require('../assert');
const ListItem = require('./ListItem');

class ListView extends BaseComponent {
  constructor(el, opts = {}) {
    super(el);
    Object.assign(this, {
      fetch: opts.fetch,
      listItemProps: opts.listItemProps || {},
      renderItem: opts.renderItem || this.renderItem,
      results: opts.results || []
    });
    assert(typeof this.fetch === 'function');
  }

  render() {
    this.$el.html(listViewTmpl(this));
    this.$el.find('li').click((evt) => {
      this.set(this.results[$(evt.target).attr('data-index')]);
    });
    return this.$el.html();
  }

  renderItem(index, item) {
    const listItemEl = $('<li>');
    const listItem = new ListItem(listItemEl, {
      listItemContent: item,
      listItemProps: this.listItemProps
    });
    return listItem.render();
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
