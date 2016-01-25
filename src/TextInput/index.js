'use strict';

/*
**  @class: TextInput
**  @description:
**    This class is the main JUICE textInput Implementation. This class
**    enhances the BaseTextInput class by providing nice UI interaction
**    behaviors, such as:
**      - publishes a nicely throttled text input event
**      - firing event listeners when the enter key is pressed
**      - adds a clearing x iconi
**
**  @param {String} el - the DOM element to attach to
**  @param {Object} opts - the options to configure this element
**  @param {String} opts.icon - the string for the icon to show up 
**  @param {Number} opts.wait - how long to debounce the input onKeyUp event
**  @param {Function} opts.submitHandler - if the enter key is pressed, run this function
**
**  @author: Robbie Wagner
*/

// css
require('./styles.css');

// html
const iconTmpl = require('./icon.tmpl');
const iconWrapper = require('./iconWrapper.html');

// scripts
const BaseTextInput = require('./BaseTextInput');
const debounce      = require('debounce');

class TextInput extends BaseTextInput {
  constructor(el, opts = {}) {
    super(el, opts);

    Object.assign(this, {
      icon: opts.icon || 'x',
      wait: opts.wait || 300,
      submitHandler: opts.submitHandler || ((v) => {})
    });

    return this;
  }

  set(v) {
    super.set(v);
    this.showHideIcon();
    return this;
  }

  render() {
    super.render();

    // Part 1: Dom Manipulation
    this.$input.wrap(iconWrapper); // set up the clearing icon (X) wrapper
    this.$wrapper = this.$el.find('.ui-text-input-icon-wrapper');

    this.$wrapper.append(iconTmpl(this)); // set up the clearing icon itself
    this.$icon = this.$el.find('.ui-text-input-icon');
    this.showHideIcon();

    // Part 2: set up various event handlers
    const onKeyup = debounce((e) => {
      this.get() !== this.$input.val() ? this.set(this.$input.val()) : '';

      if (e.keyCode == this.keyEvents.ENTER) {
        this.$input.blur();
        this.submitHandler(this.get());
      }
    }, this.wait);

    this.$input.keyup(onKeyup);

    this.$icon.click(() => {
      this.set('');
    });

    return this.$el.html();
  }

  showHideIcon() {
    this.get() ? this.$icon.show() :  this.$icon.hide();
  }
}

module.exports = TextInput;
