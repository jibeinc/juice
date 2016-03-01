'use strict';

const BaseComponent = require('../BaseComponent');
const Utils = require('../Utils');

/**
 * Class for creating a Toggle component
 */
class Toggle extends BaseComponent {
  /**
   * Create a new Toggle component
   * @param {string} el - The selector for the element to make into a toggle
   * @param {object} opts - The options for the component
   * @param {string} [opts.toggledClass] - A class to apply when the toggle is true
   * @param {string} [opts.untoggledClass] - A class to apply when the toggle is false
   */
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
  }

  /**
   * Render the html for the Toggle component
   * @returns {string} The html for the Toggle component
   */
  render() {
    return this.$el.html();
  }
}

module.exports = Toggle;
