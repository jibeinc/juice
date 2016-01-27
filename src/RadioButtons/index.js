'use strict';

// html
const radioButtonsTmpl = require('./radioButtons.dot');

// scripts
const $ = require('jquery');
const BaseComponent = require('../BaseComponent');
const Utils = require('../Utils');

class RadioButtons extends BaseComponent {
  constructor(el, opts = {}) {
    super(el);
    Object.assign(this, {
      displayNameKey: opts.displayNameKey || 'displayName',
      radioBoxes: opts.radioBoxes || false,
      renderItem: opts.renderItem || this.renderItem
    });

    this.setOptions(opts.options || []);
  }

  renderItem(item) {
    return JSON.stringify(item[this.displayNameKey]);
  }

  setOptions(options) {
    const selection = this.get();
    this.options = options.map((opt) => {
      if (typeof opt !== 'object') {
        opt = {
          value: opt
        };
      }
      if (selection && selection.value) {
        opt.checked = selection.value === opt.value;
      }
      else {
        opt.checked = false;
      }
      return opt;
    });
  }

  get() {
    this.options = this.options || [];
    const selected = this.options.filter((opt) => {
      return opt.checked
    });
    return selected[0] || null;
  }

  render() {
    this.$el.html(radioButtonsTmpl(this));
    Utils.bindClick(this.$el.find('label'), (evt) => {
      this.set($(evt.target.parentElement).find('input').val());
    });
    Utils.bindClick(this.$el.find('input'), (evt) => {
      this.set($(evt.target).val());
    });
    return this.$el.html();
  }

  /**
   * Check the options against the value passed
   * @param selected a value to select
   */
  set(selected) {
    this.options.forEach((option) => {
      if (option.value === selected) {
        option.checked = this.radioBoxes ? !option.checked : true;
      }
      else {
        option.checked = false;
      }
    });

    this.render();
    this.publish(this.get());
    return this;
  }
}

module.exports = RadioButtons;
