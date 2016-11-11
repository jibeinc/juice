const inputTmpl = require('./input.tmpl');
const BaseComponent = require('../../BaseComponent');

/**
 * This class provides a template for JUICE textInput Implementations. It is
 * designed to function as an Abstract class. Do not instantiate Objects of
 * this type -- instantiate a child component instead
 *
 * @author John Hatcher
 */
class BaseTextInput extends BaseComponent {
  /**
   * Creates a BaseTextInput component
   * @param {String} el - the DOM element to attach to
   * @param {Object} opts - the options to configure this element
   * @param {String} opts.placeholder - the html placeholder attribute for the component
   * @param {String} opts.value - preset the value for the component to this string
   */
  constructor(el, opts = {}) {
    super(el, opts);

    Object.assign(this, {
      $input: null,
      placeholder: opts.placeholder || '',
      value: opts.value || ''
    });
  }

  /**
   * Gets the current value or returns empty string
   * @returns {*|string} The current value
   */
  get() {
    return this.value || '';
  }

  /**
   * Render the html and save a reference to $input
   * @returns {string} The html for the component
   */
  render() {
    // the base input
    this.$el.html(inputTmpl(this));
    this.$input = this.$el.find('input');

    return this.$el.html();
  }

  /**
   * Sets the current value on the component and the input, then publishes the new value
   * @param {string} v - The new value for the input
   */
  set(v) {
    this.value = v;

    if (this.$input && this.$input.val() !== v ) {
      this.$input.val(v);
    }

    this.publish(this.get());
  }
}

module.exports = BaseTextInput;
