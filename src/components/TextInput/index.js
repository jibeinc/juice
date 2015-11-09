'use strict';

// # TextInput
// publishes a nicely throttled text input event
// adds a clearing x icon

// CSS
require('./styles.css');

// JS
let _             = require('lodash');
let BaseComponent = require('../BaseComponent');

class TextInput extends BaseComponent {
  constructor(el, opts) {
    super(el);
    opts = opts || {};
    this.wait = opts.wait || 300;
    this.clearingIcon = opts.clearingIcon || 'x';
    this.$input = null ;
  }

  render() {
    // the base input
    this.$el.addClass('ui-text-input');
    this.$el.html(`<input type='text' class='${ this.id }' value='${ this.get() }'/>`);
    this.$input = this.$el.find('input');

    let onKeyup = _.debounce(() => { this.set(this.$input.val()); }, this.wait);
    this.$input.keyup(onKeyup); // debounced slightly for ux

    if (this.clearingIcon) {
      // the wrapper to place a clearing icon (X)
      this.$input.wrap('<div class="ui-text-input-clear-wrapper"></div>');
      this.$wrapper = this.$el.find('.ui-text-input-clear-wrapper');

      // the clearing icon itself (absolute positioned within wrapper to be on the right)
      this.$wrapper.append(`<span class='ui-text-input-clear' }'>${ this.clearingIcon }</span>`);
      this.$clear = this.$el.find('.ui-text-input-clear');
      this.$clear.click(() => { this.set(''); });
    }

    return this;
  }

  set(v) {
    this.value = v;
    if (this.$input) {
      this.$input.val(this.value); // user will lose focus if we do a full render
    } else {
      this.render(); // first time
    }
    this.publish(this.get());
    return this;
  }
};

module.exports = TextInput;
