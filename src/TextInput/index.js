'use strict';

/*
**  @class: TextInput
**  @description:
**    This class is the main JUICE textInput Implementation. This class
**    enhances the BaseTextInput class by providing nice UI interaction
**    behaviors, such as:
**      - publishes a nicely throttled text input event
**      - firing event listeners when the enter key is pressed
**      - adds a clearing x icon
**
**  @author: Robbie Wagner
*/

// css
require('./styles.css');

// html
const inputTmpl = require('./input.tmpl');
const iconTmpl = require('./icon.tmpl');
const iconWrapper = require('./iconWrapper.html');

// scripts
const BaseTextInput = require('./BaseTextInput');
const debounce = require('debounce');


class TextInput extends BaseTextInput {
  constructor(el, opts = {}) {
    super(el);

    Object.assign(this, {
      icon: opts.icon || 'x',
      wait: opts.wait || 300
    });

    return this;
  }

  set(v) {
    super.set(v);
    this.$input.val(this.value);
    this.showHideIcon();
    return this;
  }

  render() {
    debugger;
    super.render();

    this.$input.keyup(this.keyUpHandler); // debounced slightly for ux

    // Part 1: Dom Manipulation
    // the wrapper to place a clearing icon (X)
    this.$input.wrap(iconWrapper);
    this.$wrapper = this.$el.find('.ui-text-input-icon-wrapper');

    // the clearing icon itself (absolute positioned within wrapper to be on the right)
    this.$wrapper.append(iconTmpl(this));
    this.$icon = this.$el.find('.ui-text-input-icon');

    this.showHideIcon();

    // Part 2: set up various event handlers
    this.$icon.click(() => {
      this.set('');
    });

    return this.$el.html();
  }

  keyUpHandler() {
    debounce((e) => {
      this.get() !== this.$input.val() ? this.set(this.$input.val()) : '';

      if (e.keyCode == this.keyEvents.ENTER) {
        this.$input.blur();
      }
    }, this.wait);
  }

  showHideIcon() {
    this.get() ? this.$icon.show() :  this.$icon.hide();
  }
}

module.exports = TextInput;
