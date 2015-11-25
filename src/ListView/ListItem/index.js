'use strict';

// scripts
const $ = require('jquery');
const BaseComponent = require('../../BaseComponent');
const ExpandCollapseContainer = require('../../ExpandCollapse/ExpandCollapseContainer');

class ListItem extends BaseComponent {
  constructor(el, value, index, opts = {}) {
    super(el);

    Object.assign(this, {
      attrs: opts.attrs,
      expandCollapse: opts.expandCollapse || {},
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

    this.setupExpandCollapse(this.expandCollapse);

    return this.$el[0].outerHTML;
  }

  setupExpandCollapse(expandCollapse) {
    //Setup expand/collapse
    if (expandCollapse.toggleSelector && expandCollapse.containerSelector) {
      const container = new ExpandCollapseContainer(expandCollapse.containerSelector, {
        parentElement: this.$el,
        toggledClass: expandCollapse.toggledClass,
        toggleSelector: expandCollapse.toggleSelector,
        untoggledClass: expandCollapse.untoggledClass
      });
      return container.render();
    }
    return null;
  }
};

module.exports = ListItem;
