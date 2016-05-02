const uuid = require('uuid');
const PSHub = require('./PubSubHub');
const assert = require('./assert');

// for covenience
const keyEvents = {
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

/**
 * The root class of all UI components. This component is meant to function as an
 * abstract class. DO NOT try and instantiate this, only one of its child components.
 * The purpose of this class is to:
 *   - to handle the publish() and subscribe() methods (for communication with pubSub)
 *   - to create the DOM element for the UI component
 *   - default implementations of get() and set()
 * @author: John Hatcher
 */
class BaseComponent {

  /**
   * Creates a new BaseComponent
   * @param {string} el - The selector for the element to put the component in
   * @param {object} opts - The options for the component
   * @param {jQuery} opts.parentElement - A jQuery wrapped parent element, to find this child in
   * @param {boolean} opts.preserveChildElements - A boolean for whether or not to clear out the innerHTML
   * of the element when the component is created
   */
  constructor(el, opts = {}) {
    assert(el);

    // find element in the client DOM, or...
    if (!opts.parentElement) {
      this.$el = $(el);
    } else {
      this.$el = opts.parentElement.find(el);
    }

    // ...when DOM aint there,
    // just do it in memory, to support server-side rendering
    if (this.$el.length === 0) {
      this.$el = $('<div></div>');
    }

    if (!opts.preserveChildElements) {
      this.$el.html('');
    }

    Object.assign(this, {
      keyEvents,
      attrs: opts.attrs || {},
      id: uuid.v4(),
      value: null
    });
  }

  /**
   * Gets the component's current value
   * @returns {*} The currently set value of the component
   */
  get() {
    return this.value;
  }

  /**
   * Call the PSHub publish
   * @param {*} msg - The message to publish
   */
  publish(msg) {
    PSHub.publish(this.id, msg);
  }

  /**
   * Render must be overridden by the child component
   */
  render() {
    throw new Error('BaseComponent::render must be defined by child');
  }

  /**
   * Sets the component's value
   * @param {*} v - The new value for the component
   * @returns {string} The newly updated html
   */
  set(v) {
    this.value = v;
    this.publish(this.get());
    return this.render();
  }

  /**
   * Subscribes the PSHub to the supplied listener
   * @param {function} listener - The listener to call when the component's value changes
   * @returns {BaseComponent} The component instance
   */
  subscribe(listener) {
    PSHub.subscribe(this.id, listener);
    return this;
  }
}

module.exports = BaseComponent;
