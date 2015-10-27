// # TextInput
// publishes a nicely throttled text input event
// adds a clearing x icon

let BaseComponent = require('./BaseComponent');
let PSHub         = require('./PubSubHub');
let _             = require('lodash');

class TextInput extends BaseComponent {
  constructor(el, opts) {
    super(el);
    this.opts = opts || {};
    this.id = 'TextInput_' + this.id;
    this.wait = this.opts.wait || 300;
    this.clearingIcon = this.opts.clearingIcon || 'X';
    this.$input = null;
  }

  render() {
    // the base input
    this.$el.html(`<input type='text' class='${ this.id }'' value='${ this.get() }'/>`);
    this.$input = this.$el.find('input');
    this.$el.prepend(`<style> .${ this.id } { width: 100% } </style>`);

    let onKeyup = _.debounce(() => { this.set(this.$input.val()); }, this.wait);
    this.$input.keyup(onKeyup); // debounced slightly for ux

    if (this.clearingIcon) {
      // the wrapper to place a clearing icon (X)
      this.$input.wrap(`<div class='${ this.id + '_wrapper' }'></div>`)
      this.$wrapper = this.$el.find('.' + this.id + '_wrapper');
      this.$el.prepend(`<style> .${ this.id + '_wrapper' } { position: relative;} </style>`);

      // the clearing icon itself (absolute positioned within wrapper to be on the right)
      this.$wrapper.append(`<span class='${ this.id + '_clear' }'>${ this.clearingIcon }</span>`);
      this.$clear = this.$el.find('.' + this.id + '_clear');
      this.$el.prepend(`<style> .${ this.id + '_clear' } { position: absolute;  top: 0; right: 0; cursor: pointer;} </style>`);
      this.$clear.click(() => { this.set(''); });
    }

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
};

module.exports = TextInput;
