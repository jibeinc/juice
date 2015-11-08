'use strict'

let $     = require('jQuery');
let uuid  = require('uuid');
let PSHub = require('./PubSubHub.js');

class BaseComponent {
  constructor(el) {
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
    return this;
  }

  set(v) {
    this.value = v;
    this.render();
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
