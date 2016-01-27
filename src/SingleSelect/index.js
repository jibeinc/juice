'use strict';

//  @title: SingleSelect
//  @author: jhatcher
//  @description:
//    Simple dropdown list with the ability to choose one option
//  @todo:
//    - styles

// css
require('./styles.css');

// html
const selectTmpl = require('./select.tmpl');

// scripts
const $ = require('jquery');
const BaseComponent = require('../BaseComponent');

class SingleSelect extends BaseComponent {

// @constructor
// @param {String} el   - The dom element to attach to
// @param {Object} opts - The options passed in to configure this component
// @param {Array} opts.options - each option to be rendered, containing 3 attributes (2 are passed in):
//    @prop {String} [optional] display - the display to render for the option
//    @prop {String} value - the data value to send to the server

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

// @method
// @returns the display attribute of the option if it exists, fallback to the value
  getDisplayValue() {
    let display;

    for (const opt of this.options) {
      if (opt.selected) {
        display = (opt.display) ? opt.display : opt.value;
      }
    }
    return display;
  }

// @method
// @param {Object} v - the Option Object (display,value,selected) to set
  set(v) {
    this.options = this.options.map((opt) => {
      opt.selected = opt.value === v;
      return opt;
    });

    return super.set(v);
  }

// @method
// @returns the HTML of the element
  render() {
    this.$el.html(selectTmpl(this));
    this.$el.find('select').change((evt) => {
      this.set($(evt.target).val());
    });
    return this.$el.html();
  }
}

module.exports = SingleSelect;
