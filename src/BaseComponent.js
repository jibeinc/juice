'use strict'

const $      = require('jquery');
const uuid   = require('uuid');
const PSHub  = require('./PubSubHub');
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

class BaseComponent {
  constructor(el) {
    assert(el);
    this.$el = $(el);
    if (this.$el.size() === 0) {
      this.$el = $('<div></div>'); // to support server-side rendering, when DOM aint there
    }
    this.value = null;
    this.id = uuid.v4();
    this.keyEvents = keyEvents;
    return this;
  }

  render() {
    throw new Error('BaseComponent::render must be defined by child');
  }

  get() {
    return this.value;
  }

  set(v) {
    this.value = v;
    this.publish(this.get());
    return this.render();
  }

  subscribe(listener) {
    PSHub.subscribe(this.id, listener);
    return this;
  }

  publish(msg) {
    PSHub.publish(this.id, msg);
  }
};

module.exports = BaseComponent;
