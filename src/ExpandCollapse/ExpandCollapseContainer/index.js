'use strict';

require('./styles.css');

const BaseComponent = require('../../BaseComponent');
const ExpandCollapseToggle = require('../ExpandCollapseToggle');
const collapseTmpl = require('./expandCollapseContent.tmpl');

class ExpandCollapseContainer extends BaseComponent {
  constructor(el, opts) {
    super(el, {
      preserveChildElements: true
    });
    const toggle = new ExpandCollapseToggle(opts.toggleSelector);
    toggle.render();
    toggle.subscribe((isToggled) => {
      this.expandCollapse(isToggled);
    });
    return this;
  }

  expandCollapse(isToggled) {
    if (isToggled) {
      const wrapperHeight = this.$el.find('.measuringWrapper')[0].clientHeight;
      this.$el.find('.grow').css('height', wrapperHeight + 'px');
    }
    else {
      this.$el.find('.grow').css('height', '0');
    }
  }

  render() {
    this.$el.html(collapseTmpl(this));
    return this.$el.html();
  }
}

module.exports = ExpandCollapseContainer;