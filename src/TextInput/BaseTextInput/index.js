'use strict';

/*
**  @class: BaseTextInput
**  @description:
**    This class provides a template for JUICE textInput Implementations. It is 
**    designed to function as an Abstract class. Do not instantiate Objects of 
**    this type -- instantiate a child component instead
**  @author: Robbie Wagner
*/

// css
require('../styles.css');

// html
const inputTmpl = require('./input.tmpl');

// scripts
const BaseComponent = require('../../BaseComponent');

class BaseTextInput extends BaseComponent {

  constructor(el, opts = {}) {
    super(el);

    Object.assign(this, {
      $input: null,
      placeholder: opts.placeholder || '',
      value: opts.value || '',
    });

    return this;
  }

  get() {
    return (typeof this.value === 'undefined') ? '' : this.value;
  }

  render() {
    // the base input
    this.$el.html(inputTmpl(this));
    this.$input = this.$el.find('input');

    // set up basic input event handler
    this.$input.on('input', (e) =>{
      this.set(this.$input.val());
    });

    return this.$el.html();
  }
}

module.exports = BaseTextInput;
