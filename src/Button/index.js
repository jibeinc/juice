'use strict';

require('./styles.css');
const $ = require('jquery');
const buttonTmpl = require('./button.tmpl');
const BaseComponent = require('../BaseComponent');
const Utils = require('../Utils');

/**
 * Class for creating an html button
 */
class Button extends BaseComponent {
  /**
   * Create a button
   * @param {string} el - The selector for the element to put the button in
   * @param {object} opts - The options for the component
   * @param {string} [opts.label] - The text to display in the button
   * @param {boolean} [opts.submit] - A boolean indicating if this is of type submit or not
   * @param {boolean} [opts.preventPropogation] - A boolean to enable preventPropogation
   */
  constructor(el, opts = {}) {
    super(el);
    this.label = opts.label || 'ClickMe!';
    this.submit = opts.submit || false;
    this.preventPropagation = opts.preventPropagation || false;
  }

  /**
   * Render the html for the button and apply event handlers
   * @returns {string} The html for the button
   */
  render() {
    this.$el.html(buttonTmpl(this));
    Utils.bindClick(this.$el.find('button'), (evt) => {
      evt.preventDefault();
      this.preventPropagation ? evt.stopPropagation() : $.noop;
      this.publish('click', this.id);
    });

    return this.$el.html();
  }
}

module.exports = Button;
