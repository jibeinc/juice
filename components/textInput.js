let BaseComponent = require('./BaseComponent');

class TextInput extends BaseComponent {
  constructor(el) {
    super(el);
  }

  render() {
    this.$el.html('<input type="text" value="' + this.get() + '"/>');
    return this;
  }
};

module.exports = TextInput;
