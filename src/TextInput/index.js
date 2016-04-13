'use strict';

require('./styles.css');
const inputTmpl = require('./input.tmpl');
const BaseTextInput = require('./BaseTextInput');
const debounce = require('debounce');

/**
 * This class is the main JUICE textInput Implementation. This class
 * enhances the BaseTextInput class by providing nice UI interaction
 * behaviors, such as:
 *   - publishes a nicely throttled text input event
 *   - firing event listeners when the enter key is pressed
 *   - adds a clearing x icon
 *
 * If you plan on extending the textInput class, you can override the
 * iconClickHandler(), keyUpHandler(), showHideIcon(), and renderDom()
 * methods to override the default behavior of the render method
 *
 * @author John Hatcher
 */
class TextInput extends BaseTextInput {
  /**
   * Creates a new TextInput component
   * @param {string} el - The selector for the element to put the TextInput in
   * @param {object} opts - The options for the component
   * @param {string} opts.icon - The markup for the icon to display
   * @param {number} opts.wait - how long to debounce the input onKeyUp event
   * @param {function} opts.submitHandler - if the enter key is pressed, run this function
   */
  constructor(el, opts = {}) {
    super(el, opts);

    Object.assign(this, {
      $icon: null,
      icon: opts.icon || 'x',
      submitHandler: opts.submitHandler || (() => {
      }),
      wait: opts.wait || 300
    });
  }

  /**
   * Set the value to empty string when you click the clear icon
   */
  iconClickHandler() {
    this.$icon.click(() => {
      this.set('');
    });
  }

  /**
   * Listen to keyup and set the value
   */
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

  /**
   * Render the DOM and apply event listeners
   * @returns {string} The html for the component
   */
  render() {
    this.renderDom();

    // set up various event handlers
    this.keyUpHandler();
    this.iconClickHandler();
    this.showHideIcon();

    return this.$el.html();
  }

  /**
   * Put DOM for input into $el and grab a reference to $input and $icon
   */
  renderDom() {
    // the base input
    this.$el.html(inputTmpl(this));
    this.$input = this.$el.find('input');

    this.$icon = this.$el.find('.ui-text-input-icon');
  }

  /**
   * Set the value of the TextInput
   * @param {string} v - The value to set the TextInput to
   * @returns {TextInput} The TextInput instance
   */
  set(v) {
    super.set(v);
    this.showHideIcon();
    return this;
  }

  /**
   * Show icon when there is text typed in, and hide when no text is typed
   */
  showHideIcon() {
    if (this.$icon) {
      this.get() ? this.$icon.show() : this.$icon.hide();
    }
  }
}

module.exports = TextInput;
