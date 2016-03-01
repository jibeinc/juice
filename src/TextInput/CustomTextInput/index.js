'use strict';

require('../styles.css');
const inputTmpl = require('./input.tmpl');
const iconTmpl = require('./icon.tmpl');
const iconWrapper = require('./iconWrapper.html');
const BaseComponent = require('../../BaseComponent');
const debounce = require('debounce');
const Utils = require('../../Utils');

/**
 * @deprecated
 *
 * publishes a nicely throttled text input event
 * adds a clearing x icon
 *
 * Please do not use this class anymore. It has been kept around for legacy reasons, but will
 * be deleted soon
 */
class TextInput extends BaseComponent {
  /**
   * Creates a new TextInput
   * @param {string} el - The selector for the element to put the TextInput in
   * @param {object} opts - The options for the component
   */
  constructor(el, opts = {}) {
    super(el);
    Object.assign(this, {
      $input: null,
      icon: opts.icon || 'x',
      onEnterPressed: opts.onEnterPressed || null,
      onIconClick: opts.onIconClick || null,
      iconClearsValue: typeof opts.iconClearsValue === 'undefined' ? true : opts.iconClearsValue,
      placeholder: opts.placeholder || '',
      showIconOnNotEmpty: opts.showIconOnNotEmpty || false,
      value: opts.value || '',
      wait: opts.wait || 300
    });
  }

  /**
   * Renders the html for the component and sets up event listeners
   * @returns {string} The html for the component
   */
  render() {
    // the base input
    this.$el.addClass('ui-text-input');
    this.$el.html(inputTmpl(this));
    this.$input = this.$el.find('input');

    const onKeyup = debounce((e) => {
      this.get() !== this.$input.val() ? this.set(this.$input.val()) : '';
      if (e.keyCode == 13) {
        this.$input.blur();
        if (this.onEnterPressed) {
          this.onEnterPressed(this.get());
        }
      }
    }, this.wait);

    this.$input.keyup(onKeyup); // debounced slightly for ux

    if (this.icon) {
      // the wrapper to place a clearing icon (X)
      this.$input.wrap(iconWrapper);
      this.$wrapper = this.$el.find('.ui-text-input-icon-wrapper');

      // the clearing icon itself (absolute positioned within wrapper to be on the right)
      this.$wrapper.append(iconTmpl(this));
      this.$icon = this.$el.find('.ui-text-input-icon');

      this.showHideIcon();

      if (this.iconClearsValue || this.onIconClick) {
        Utils.bindClick(this.$icon, () => {
          if (this.iconClearsValue) {
            this.set('');
          }
          if (this.onIconClick) {
            this.onIconClick();
          }
        });
      }
    }

    return this.$el.html();
  }

  /**
   * Shows/hides the icon
   */
  showHideIcon() {
    if (this.showIconOnNotEmpty) {
      if (this.get()) {
        this.$icon.show();
      }
      else {
        this.$icon.hide();
      }
    }
  }

  /**
   * Gets the current value
   * @returns {string} The current value
   */
  get() {
    return (typeof this.value === 'undefined') ? '' : this.value;
  }

  /**
   * Sets the current value
   * @param {string} v - the new value
   * @returns {TextInput} the instance of TextInput
   */
  set(v) {
    this.value = v;
    if (this.$input) {
      this.$input.val(this.value); // user will lose focus if we do a full render
    } else {
      this.render(); // first time
    }

    this.showHideIcon();
    this.publish(this.get());
    return this;
  }
}

module.exports = TextInput;
