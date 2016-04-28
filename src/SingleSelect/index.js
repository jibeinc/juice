'use strict';

const selectTmpl = require('./select.tmpl');
const $ = require('jquery');
const BaseComponent = require('../BaseComponent');

/**
 * Simple dropdown list with the ability to choose one option
 * @todo
 * - styles
 * @author John Hatcher
 */
class SingleSelect extends BaseComponent {
  /**
   * Create a new SingleSelect
   * @param {string} el - The dom element to attach to
   * @param {object} opts - The options passed in to configure this component
   * @param {*[]} opts.options - each option to be rendered, containing 3 attributes (2 are passed in):
   *        {string} [display] - the display to render for the option
   *        {string} value - the data value to send to the server
   */
  constructor(el, opts = {}) {
    super(el);
    this.options = (opts.options || []).map((opt) => {
      if ($.isPlainObject(opt)) {
        return {
          display: opt.display,
          value: opt.value,
          selected: opt.value === this.get()
        };
      }
      return {
        value: opt,
        selected: opt === this.get()
      };
    });
  }

  /**
   * Get the display value
   * @returns {*} the display attribute of the option if it exists, fallback to the value
   */
  getDisplayValue() {
    let display;

    for (const opt of this.options) {
      if (opt.selected) {
        display = (opt.display) ? opt.display : opt.value;
      }
    }
    return display;
  }

  /**
   * Renders the html for the component and applies event listeners
   * @returns {string} The html for the component
   */
  render() {
    this.$el.html(selectTmpl(this));
    this.$el.find('select').change(this.changeEventHandler.bind(this));
    return this.$el.html();
  }

  /**
   * Set the selected value
   * @param {object} v - the Option Object (display,value,selected) to set
   * @returns {string} The html for the component
   */
  set(v) {
    this.options = this.options.map((opt) => {
      opt.selected = opt.value === v;
      return opt;
    });

    return super.set(v);
  }

  /**
   * Handler for the event listener 'change'
   */
  changeEventHandler (evt) {
    this.set($(evt.target).val());
  }
}

module.exports = SingleSelect;
