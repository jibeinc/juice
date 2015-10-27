let $ = require('jQuery');

class BaseComponent {
  constructor(el) {
    this.$el = $(el);
    return this;
  }

  render() {
    throw new Error('BaseComponent::render must be defined by child');
  }

  get() {
    throw new Error('BaseComponent::get must be defined by child');
  }

  set() {
    throw new Error('BaseComponent::set must be defined by child');
  }
};

module.exports = BaseComponent;
