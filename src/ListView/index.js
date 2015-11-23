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
      listItemTmpl: opts.listItemTmpl,
      renderItem: opts.renderItem || this.renderItem,
      results: opts.results || []
    });
    assert(typeof this.fetch === 'function');
  }

  render() {
    this.$el.html(listViewTmpl(this));
    //TODO: Instead of hooking into the li directly, we should set up publish on ListItem
    this.$el.find('li').click((evt) => {
      this.set(this.results[$(evt.target).attr('data-index')]);
    });
    return this.$el.html();
  }

  renderItem(content, index) {
    const listItemEl = $('<li>');
    const listItem = new ListItem(listItemEl, {
      listItemProps: this.listItemProps
    });

    content.index = index;

    if (this.listItemTmpl) {
      content = this.listItemTmpl(content);
    }

    return listItem.render(content);
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
