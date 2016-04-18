'use strict';

const Baobab = require('baobab');

/**
 * Class representing centralized baobab state
 */
class State {
  /**
   * Creates a new State instance
   * @param {object} initialState - The initial state
   * @param {object} opts - The opts for the state
   */
  constructor(initialState = {}, opts = {}) {
    Object.assign(this, {
      cursors: {},
      modifiers: {},
      state: new Baobab(initialState, opts)
    });
  }

  /**
   * Commit the changes to the state synchronously
   * @returns {*} The commit
   */
  commit() {
    return this.state.commit();
  }

  /**
   * Create a new cursor
   * @param {string} selector - The key to store a cursor at
   * @returns {*} The new cursor
   */
  curse(selector) {
    this.cursors[selector] = this.state.select(selector);
    return this.cursors[selector];
  }

  /**
   * Define a modifier for the given name
   * @param {string} name - the name of the modifier
   * @param {function} customFn - The function to store in modifiers
   */
  define(name, customFn) {
    this.modifiers[name] = customFn.bind(this);
  }
}

module.exports = State;
