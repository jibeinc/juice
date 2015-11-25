'use strict';

// scripts
const $ = require('jquery');
const BaseComponent = require('../../BaseComponent');

class ListItem extends BaseComponent {
  constructor(el, value, index, opts = {}) {
    super(el);

    Object.assign(this, {
      attrs: opts.attrs,
      template: opts.template
    });

    this.set({
      index,
      value
    });
  }

  render() {
    for (let key of Object.keys(this.attrs)) {
      this.$el.attr(key, this.attrs[key]);
    }

    let content = this.get();

    //If we have a template, apply it now
    if (this.template) {
      content = this.template(content);
    }
    //Otherwise we only want the value, not the {index, value} object
    else {
      content = content.value;
    }

    this.$el.html(content);

    return this.$el[0].outerHTML;
  }
};

module.exports = ListItem;
