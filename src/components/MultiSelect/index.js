'use strict';

// # TODO
//    - support separation of value from displayValue
//    - styles

// css
require('./styles.css');

// html
let multiSelectTmpl = require('./multiSelect.dot');

// scripts
let $             = require('jquery');
let BaseComponent = require('../BaseComponent');

class MultiSelect extends BaseComponent {
  constructor(el, opts) {
    super(el);
    opts = opts || {};
    this.options = (opts.options || []).map((opt) => {
      return {
        value: opt
      };
    });
  }

  get() {
    return this.options.filter((opt) => {
      return opt.checked
    });
  }

  set(v) {
    this.options = this.options.map((opt) => {
      opt.checked = opt.value === v? !opt.checked : opt.checked;
      return opt;
    });
    this.render();
    this.publish(this.get());
    return this;
  }

  render() {
    this.$el.html(multiSelectTmpl(this));
    this.$el.find('input').click((evt) => {
      this.set($(evt.target).val());
    });
    return this;
  }
};

module.exports = MultiSelect;
