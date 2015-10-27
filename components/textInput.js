let BaseComponent = require('./BaseComponent');
let PSHub         = require('./PubSubHub');
let _             = require('lodash');

class TextInput extends BaseComponent {
  constructor(el, opts) {
    super(el);
    this.opts = opts || {};
    this.id = 'TextInput_' + this.id;
    this.wait = this.opts.wait || 300;
    this.$input = null;
  }

  render() {
    this.$el.html('<input type="text" class="' + this.id + '" value="' + this.get() + '"/>');
    this.$input = this.$el.find('input');
    this.bind();
    return this;
  }

  set(v) {
    this.value = v;
    if (this.$input) {
      this.$input.val(this.value); // user will lose focus if we do a full render
    } else {
      this.render();
    }
    return this;
  }

  bind() {
    this.$input.keyup(_.debounce(() => {
      this.set(this.$input.val());
      PSHub.publish(this.id, this.get());
    }, this.wait));
  }
};

module.exports = TextInput;
