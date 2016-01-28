'use strict';

/*
**  @class: BaseTextInput
**  @description:
**    This class provides a template for JUICE textInput Implementations. It is 
**    designed to function as an Abstract class. Do not instantiate Objects of 
**    this type -- instantiate a child component instead
**
**  @param {String} el - the DOM element to attach to
**  @param {Object} opts - the options to configure this element
**  @param {String} opts.placeholder - the html placeholder attribute for the component
**  @param {String} opts.value - preset the value for the component to this string
**
**  @author: Robbie Wagner
*/

// html
const inputTmpl = require('./input.tmpl');

// scripts
const BaseComponent = require('../../BaseComponent');

class BaseTextInput extends BaseComponent {

  constructor(el, opts = {}) {
    super(el, opts);

    Object.assign(this, {
      $input: null,
      placeholder: opts.placeholder || '',
      value: opts.value || ''
    });

    return this;
  }

  get() {
    return this.value || '';
  }

  set(v) {
    this.value = v;

    if (this.$input) {
      this.$input.val(v);
    }

    this.publish(this.get());
  }

  render() {
    // the base input
    this.$el.html(inputTmpl(this));
    this.$input = this.$el.find('input');

    return this.$el.html();
  }
}

module.exports = BaseTextInput;
