'use strict';

const BaseComponent = require('../../BaseComponent');

class ExpandCollapseToggle extends BaseComponent {
  constructor(el) {
    super(el, {
      preserveChildElements: true
    });
    Object.assign(this, {
      value: null
    });
    this.$el.click(() => {
      this.set(!this.value);
    });
    return this;
  }

  render() {
    return this.$el.html();
  }
}

module.exports = ExpandCollapseToggle;