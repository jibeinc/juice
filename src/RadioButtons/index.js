'use strict';

const $ = require('jquery');
const BaseComponent = require('../BaseComponent');
const radioButtonsTmpl = require('./radioButtons.dot');
const Utils = require('../Utils');

/**
 * Class for creating a RadioButtons component
 */
class RadioButtons extends BaseComponent {
  /**
   * Create a new RadioButtons component
   * @param {string} el - The selector for the element to put the radio buttons in
   * @param {object} opts - The options for the component
   * @returns {RadioButtons} The new instance of RadioButtons
   */
  constructor(el, opts = {}) {
    super(el);
    Object.assign(this, {
      displayNameKey: opts.displayNameKey || 'displayName',
      radioBoxes: opts.radioBoxes || false,
      renderItem: opts.renderItem || this.renderItem
    });

    this.setOptions(opts.options || []);
    return this;
  }

  /**
   * The render function for each individual radio button
   * @param {object} item The item to display
   * @returns {void}
   */
  renderItem(item) {
    return JSON.stringify(item[this.displayNameKey]);
  }

  /**
   * Set the possible radio button options for the component
   * @param {string[]|object[]} options - An array of options representing each radio button
   * @returns {void}
   */
  setOptions(options) {
    const selection = this.get();
    this.options = options.map((opt) => {
      if (typeof opt !== 'object') {
        opt = {
          value: opt
        };
      }
      if (selection && selection.value) {
        opt.checked = selection.value === opt.value;
      }
      else {
        opt.checked = false;
      }
      return opt;
    });
  }

  /**
   * Get the selected option
   * @returns {object|null} The selected option
   */
  get() {
    this.options = this.options || [];
    const selected = this.options.filter((opt) => {
      return opt.checked
    });
    return selected[0] || null;
  }

  /**
   * Render the html for the RadioButtons component and apply event listeners
   * @returns {string} The html for the RadioButtons component
   */
  render() {
    this.$el.html(radioButtonsTmpl(this));
    Utils.bindClick(this.$el.find('label'), (evt) => {
      this.set($(evt.target.parentElement).find('input').val());
    });
    Utils.bindClick(this.$el.find('input'), (evt) => {
      this.set($(evt.target).val());
    });
    return this.$el.html();
  }

  /**
   * Check the options against the value passed
   * @param {*} selected a value to select
   * @returns {RadioButtons} The RadioButtons instance
   */
  set(selected) {
    this.options.forEach((option) => {
      if (option.value === selected) {
        option.checked = this.radioBoxes ? !option.checked : true;
      }
      else {
        option.checked = false;
      }
    });

    this.render();
    this.publish(this.get());
    return this;
  }
}

module.exports = RadioButtons;
