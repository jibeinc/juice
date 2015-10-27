let $ = require('jQuery');

class BaseComponent {
  constructor(el) {
    this.value = null;
    this.$el = $(el);
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
};

module.exports = BaseComponent;
