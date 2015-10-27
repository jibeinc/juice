// # TextInput

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
    // the base input
    this.$el.html(`<input type='text' class='${ this.id }'' value='${ this.get() }'/>`);
    this.$input = this.$el.find('input');

    // the wrapper to place a clearing icon (X)
    this.$input.wrap(`<div class='${ this.id + '_wrapper' }'></div>`)
    this.$wrapper = this.$el.find('.' + this.id + '_wrapper');

    // the clearing icon itself
    this.$wrapper.append(`<span class='${ this.id + '_clear' }'>X</span>`);
    this.$clear = this.$el.find('.' + this.id + '_clear');

    // very basic layout styles
    this.$el.prepend(`<style> .${ this.id } { width: 100% } </style>`);
    this.$el.prepend(`<style> .${ this.id + '_wrapper' } { position: relative;} </style>`);
    this.$el.prepend(`<style> .${ this.id + '_clear' } { position: absolute;  top: 0; right: 0; cursor: pointer;} </style>`);

    // finally bind all event handlers and return
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
    PSHub.publish(this.id, this.get());
    return this;
  }

  bind() {
    // debounce slightly for ux
    let onKeyup = _.debounce(() => { this.set(this.$input.val()); }, this.wait);
    this.$input.keyup(onKeyup);
    this.$clear.click(() => { this.set(''); });
  }
};

module.exports = TextInput;
