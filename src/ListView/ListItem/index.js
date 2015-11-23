'use strict';

// scripts
const $ = require('jquery');
const BaseComponent = require('../../BaseComponent');

class ListItem extends BaseComponent {
  constructor(el, opts = {}) {
    super(el);

    Object.assign(this, opts);
  }

  render(content) {
    for (let key of Object.keys(this.listItemProps)) {
      this.$el.attr(key, this.listItemProps[key]);
    }

    this.$el.html(content);

    return this.$el[0].outerHTML;
  }
};

module.exports = ListItem;
