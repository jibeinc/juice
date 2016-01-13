const Baobab = require('baobab');

// centralized state
class State {
  constructor(initialState={}, opts={}) {
    this.state = new Baobab(initialState, opts);

    this.cursors = {};
    this.modifiers = {};
  }

  commit () {
    return this.state.commit();
  }

  curse (selector) {
    this.cursors[selector] = this.state.select(selector);
    return this.cursors[selector];
  }

  define (name, customFn) {
    this.modifiers[name] = customFn.bind(this);
  }
}

module.exports = State;
