'use strict'

const $      = require('jquery');
const uuid   = require('uuid');
const PSHub  = require('./PubSubHub');
const assert = require('./assert');

// for covenience
const keyEvents = {
  ENTER: 13,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

class BaseComponent {
  constructor(el) {
    assert(el);
    this.value = null;
    this.$el = $(el);
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
    this.render();
    this.publish(this.get());
    return this;
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
