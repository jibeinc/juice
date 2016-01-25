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
**    If you plan on extending the textInput class, you can override the
**    iconClickHandler(), keyUpHandler(), showHideIcon(), and renderDom()
**    methods to override the default behavior of the render method
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
const inputTmpl = require('./input.tmpl');

// scripts
const BaseTextInput = require('./BaseTextInput');
const debounce      = require('debounce');

class TextInput extends BaseTextInput {
  constructor(el, opts = {}) {
    super(el, opts);

    Object.assign(this, {
      $icon: null,
      icon: opts.icon || 'x',
      wait: opts.wait || 150,
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
    this.renderDom();
    this.showHideIcon();

    // set up various event handlers
    this.keyUpHandler();
    this.iconClickHandler();

    return this.$el.html();
  }

  renderDom() {
    // the base input
    this.$el.html(inputTmpl(this));
    this.$input = this.$el.find('input');

    this.$icon = this.$el.find('.ui-text-input-icon');
  }

  keyUpHandler() {
    const onKeyup = debounce((e) => {
      this.get() !== this.$input.val() ? this.set(this.$input.val()) : '';

      if (e.keyCode == this.keyEvents.ENTER) {
        this.$input.blur();
        this.submitHandler(this.get());
      }
    }, this.wait);

    this.$input.keyup(onKeyup);
  }

  iconClickHandler() {
    this.$icon.click(() => {
      this.set('');
    });
  }

  showHideIcon() {
    this.get() ? this.$icon.show() :  this.$icon.hide();
  }
}

module.exports = TextInput;
