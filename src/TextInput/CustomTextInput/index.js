'use strict';

// # TextInput
// publishes a nicely throttled text input event
// adds a clearing x icon

// css
require('../styles.css');

// html
const inputTmpl = require('./input.tmpl');
const iconTmpl = require('./icon.tmpl');
const iconWrapper = require('./iconWrapper.html');

// scripts
const BaseComponent = require('../../BaseComponent');
const debounce = require('debounce');

class TextInput extends BaseComponent {
  constructor(el, opts = {}) {
    super(el);
    Object.assign(this, {
      $input: null,
      icon: opts.icon || 'x',
      onEnterPressed: opts.onEnterPressed || null,
      onIconClick: opts.onIconClick || null,
      iconClearsValue: typeof opts.iconClearsValue === 'undefined' ? true : opts.iconClearsValue,
      placeholder: opts.placeholder || '',
      showIconOnNotEmpty: opts.showIconOnNotEmpty || false,
      value: opts.value || '',
      wait: opts.wait || 300
    });

    return this;
  }

  render() {
    // the base input
    this.$el.addClass('ui-text-input');
    this.$el.html(inputTmpl(this));
    this.$input = this.$el.find('input');

    const onKeyup = debounce((e) => {
      this.get() !== this.$input.val() ? this.set(this.$input.val()) : '';
      if (e.keyCode == 13) {
        this.$input.blur();
        if (this.onEnterPressed) {
          this.onEnterPressed(this.get());
        }
      }
    }, this.wait);

    this.$input.keyup(onKeyup); // debounced slightly for ux

    if (this.icon) {
      // the wrapper to place a clearing icon (X)
      this.$input.wrap(iconWrapper);
      this.$wrapper = this.$el.find('.ui-text-input-icon-wrapper');

      // the clearing icon itself (absolute positioned within wrapper to be on the right)
      this.$wrapper.append(iconTmpl(this));
      this.$icon = this.$el.find('.ui-text-input-icon');

      this.showHideIcon();

      if (this.iconClearsValue || this.onIconClick) {
        this.$icon.click(() => {
          if (this.iconClearsValue) {
            this.set('');
          }
          if (this.onIconClick) {
            this.onIconClick();
          }
        });
      }
    }

    return this.$el.html();
  }

  showHideIcon() {
    if (this.showIconOnNotEmpty) {
      if (this.get()) {
        this.$icon.show();
      }
      else {
        this.$icon.hide();
      }
    }
  }

  get() {
    return (typeof this.value === 'undefined') ? '' : this.value;
  };

  set(v) {
    this.value = v;
    if (this.$input) {
      this.$input.val(this.value); // user will lose focus if we do a full render
    } else {
      this.render(); // first time
    }

    this.showHideIcon();
    this.publish(this.get());
    return this;
  }
}

module.exports = TextInput;
