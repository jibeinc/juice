'use strict';

// # TODO
//    - support separation of value from displayValue
//    - styles

// css
require('./styles.css');

// html
const selectTmpl = require('./select.tmpl');

// scripts
const $             = require('jquery');
const BaseComponent = require('../BaseComponent');

class SingleSelect extends BaseComponent {
  constructor(el, opts={}) {
    super(el);
    this.options = (opts.options || []).map((opt) => {
      return {
        value: opt,
        selected: opt === this.get()
      };
    });
  }

  set(v) {
    this.options = this.options.map((opt) => {
      opt.selected = opt.value === v;
      return opt;
    });
    return super.set(v);
  }

  render() {
    this.$el.html(selectTmpl(this));
    this.$el.find('select').change((evt) => {
      this.set($(evt.target).val());
    });
    return this;
  }
};

module.exports = SingleSelect;
