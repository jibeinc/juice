'use strict';

const BaseComponent = require('../../BaseComponent');

class ExpandCollapseToggle extends BaseComponent {
  constructor(el) {
    super(el);
    Object.assign(this, {
      value: null
    });
    this.$el.click(() => {
      this.set(!this.value);
    });
    return this;
  }

  render() {
    return this;
  }
}

module.exports = ExpandCollapseToggle;