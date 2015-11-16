'use strict';

const BaseComponent = require('../../BaseComponent');
const ExpandCollapseToggle = require('../ExpandCollapseToggle');

class ExpandCollapseContainer extends BaseComponent {
  constructor(el, opts) {
    super(el);
    const toggle = new ExpandCollapseToggle(opts.toggleSelector);
    toggle.subscribe((isToggled) => {
      this.expandCollapse(isToggled);
    });
    return this;
  }

  expandCollapse(isToggled) {
    console.log(isToggled);
    debugger;
  }

  render() {
    return this;
  }
}

module.exports = ExpandCollapseContainer;