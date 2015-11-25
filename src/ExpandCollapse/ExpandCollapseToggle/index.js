'use strict';

const BaseComponent = require('../../BaseComponent');

class ExpandCollapseToggle extends BaseComponent {
  constructor(el, opts = {}) {
    super(el, {
      parentElement: opts.parentElement,
      preserveChildElements: true
    });
    Object.assign(this, {
      value: null
    });
    if (opts.untoggledClass) {
      this.$el.addClass(opts.untoggledClass);
    }
    this.$el.addClass(opts.untoggledClass);

    this.$el.click(() => {
      //If it is already toggled, we need to apply untoggled classes
      if (opts.untoggledClass && this.value) {
        if (opts.toggledClass) {
          this.$el.removeClass(opts.toggledClass);
        }
        this.$el.addClass(opts.untoggledClass);
      } else if (opts.toggledClass && !this.value) {
        if (opts.untoggledClass) {
          this.$el.removeClass(opts.untoggledClass);
        }
        this.$el.addClass(opts.toggledClass);
      }
      this.set(!this.value);
    });

    return this;
  }

  render() {
    return this.$el.html();
  }
}

module.exports = ExpandCollapseToggle;
