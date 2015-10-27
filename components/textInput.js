let BaseComponent = require('./BaseComponent');

class TextInput extends BaseComponent {
  constructor(el) {
    super(el);
    this.value = null;
  }

  render() {
    this.$el.html('<input type="text" value="' + this.get() + '"/>');
    return this;
  }

  set(v) {
    this.value = v;
    this.render();
    return this;
  }

  get() {
    return this.value;
    return this;
  }
};

module.exports = TextInput;
