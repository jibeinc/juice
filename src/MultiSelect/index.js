'use strict';

// css
require('./styles.css');

// html
const multiSelectTmpl = require('./multiSelect.dot');

// scripts
const $ = require('jquery');
const BaseComponent = require('../BaseComponent');

class MultiSelect extends BaseComponent {
  constructor(el, opts = {}) {
    super(el);
    this.displayNameKey = opts.displayNameKey || 'displayName';
    this.renderItem = opts.renderItem || this.renderItem;
    this.setOptions(opts.options || []);
  }

  renderItem(item) {
    return JSON.stringify(item[this.displayNameKey]);
  }

  setOptions(options) {
    const selections = this.get().map((s) => s.value);

    this.options = options.map((opt) => {
      if (typeof opt !== 'object') {
        opt = {
          value: opt
        };
      }
      opt.checked = selections.indexOf(opt.value) !== -1;
      return opt;
    });
  }

  get() {
    this.options = this.options || [];
    return this.options.filter((opt) => {
      return opt.checked
    });
  }

  render() {
    this.$el.html(multiSelectTmpl(this));
    this.$el.find('input').click((evt) => {
      this.set($(evt.target).val());
    });
    return this.$el.html();
  }

  set(v) {
    this.options = this.options.map((opt) => {
      opt.checked = opt.value === v ? !opt.checked : opt.checked;
      return opt;
    });
    this.render();
    this.publish(this.get());
    return this;
  }
};

module.exports = MultiSelect;
