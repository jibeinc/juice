'use strict';

const BaseComponent = require('../BaseComponent');
const Utils = require('../Utils');

class Toggle extends BaseComponent {
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

    Utils.bindClick(this.$el, (evt) => {
      evt.stopPropagation();
      evt.preventDefault();

      // Execute untoggle
      if (this.value) {
        if (opts.toggledClass) {
          this.$el.removeClass(opts.toggledClass);
        }
        if (opts.untoggledClass) {
          this.$el.addClass(opts.untoggledClass);
        }
      }
      //Execute toggle
      else if (!this.value) {
        if (opts.untoggledClass) {
          this.$el.removeClass(opts.untoggledClass);
        }
        if (opts.toggledClass) {
          this.$el.addClass(opts.toggledClass);
        }
      }
      this.set(!this.value);
    });

    return this;
  }

  render() {
    return this.$el.html();
  }
}

module.exports = Toggle;
