'use strict'

/**
 * Implements a simple 2 way stream of events
 *
 * Namespacing allows you to use this Hub for multiple components,
 * each component getting a single unique 2-way stream
 */
class PubSubHub {
  
  /**
   * Creates a new PubSubHub
   */
  constructor() {
    this.listeners = {
      // namespace => [listener1, listener2, ... , listenN]
    };
  }

  /**
   * Get the listener for a namespace
   * @param {string} namespace - The namespace at which to lookup the listener
   * @returns {function} The listener for the namespace
   */
  get(namespace) {
    if (!this.listeners[namespace]) {
      this.listeners[namespace] = [];
    }
    return this.listeners[namespace];
  }

  /**
   * Publish is called when a value is updated, and it will call all listeners listening to that value
   * @param {string} namespace - The namespace at which to lookup the listener
   * @param {*} payload - The new value
   */
  publish(namespace, payload) {
    this.get(namespace).forEach((listener) => {
      listener(payload);
    });
  }

  /**
   * Add a listener to the given namespace
   * @param {string} namespace - The namespace at which to store the listener
   * @param {function} payload - The new listener to store
   */
  push(namespace, payload) {
    if (!this.listeners[namespace]) {
      this.listeners[namespace] = [];
    }
    this.listeners[namespace].push(payload);
  }

  /**
   * Add a listener to the given namespace
   * @param {string} namespace - The namespace at which to lookup the listener
   * @param {function} listener - The new listener to store
   */
  subscribe(namespace, listener) {
    this.push(namespace, listener);
  }
}

module.exports = new PubSubHub();
