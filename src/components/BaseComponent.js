'use strict'

let $      = require('jquery');
let uuid   = require('uuid');
let PSHub  = require('./PubSubHub');
let assert = require('./assert');

class BaseComponent {
  constructor(el) {
    assert(el);
    this.value = null;
    this.$el = $(el);
    this.id = uuid.v4();
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
