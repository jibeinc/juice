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
      wait: opts.wait || 600
    });
  }

  /**
   * Set the value to empty string when you click the clear icon
   */
  iconClickHandler() {
    this.$icon.on('click', () => {
      this.set('');
    });
  }

  /**
   * Listen to keyup and set the value
   */
  keyUpHandler() {
    const onKeyup = debounce((e) => {
      let diffLocation = this.getCaretPosition();

      this.get() !== this.$input.val() ? this.set(this.$input.val()) : '';
      
      this.setCaretPosition(diffLocation);

      if (e.keyCode == this.keyEvents.ENTER) {
        this.$input.trigger('blur');
        this.submitHandler(this.get());
      }
    }, this.wait);

    this.$input.on('keyup', onKeyup);
  }

  /**
  * Gets the position the user left off on
  */

  getCaretPosition() {

      let oldValue = this.get().split('');
      let newValue = this.$input.val().split('');
      let i = 0;
      if (oldValue.length > newValue.length) {
        return oldValue.length;
      }

      while(oldValue[i] === newValue[i] && i <= newValue.length) {
        i++;
      }
      return i + newValue.length - oldValue.length; 
  }

  /**
  * Sets the caret position to where the user left off
  */

  setCaretPosition(caretPos) {
    if (this !== null) {
      if (this.$input.createTextRange) {
        var range = this.$input.createTextRange();
        range.move('character', caretPos);
        range.select();
        return true;
      } else {
        this.$input.focus();
        this.$input[0].setSelectionRange(caretPos, caretPos);
        return true;
      }
    }
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
      this.get() ? this.$icon.css('display', 'block') : this.$icon.css('display', 'none');
    }
  }
}

module.exports = TextInput;
