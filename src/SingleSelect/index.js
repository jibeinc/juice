'use strict';

// # TODO
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
      if ($.isPlainObject(opt)) {
        return {
          display: opt.display,
          value: opt.value,
          selected: opt.value === this.get()
        };
      }
      return {
        value: opt,
        selected: opt === this.get()
      };
    });
  }

  set(v) {
    this.options = this.options.map((opt) => {
      if (opt.display) {
        opt.selected = opt.display === v;
        return opt;
      }
      else {
        opt.selected = opt.value === v;
        return opt;
      }
    });

    // get value from options w/ display property
    let val = this.options.filter((opt) => {
      if (opt.selected) {
        return opt.value;
      }
    })[0];

    return super.set(val);
  }

  render() {
    this.$el.html(selectTmpl(this));
    this.$el.find('select').change((evt) => {
      this.set($(evt.target).val());
    });
    return this.$el.html();
  }
};

module.exports = SingleSelect;
