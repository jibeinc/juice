'use strict';

// css
require('./styles.css');

// html
const buttonTmpl = require('./button.tmpl');

// scripts
const BaseComponent = require('../BaseComponent');

class Button extends BaseComponent {
  constructor(el, opts={}) {
    super(el);
    this.label = opts.label || 'ClickMe!';
    this.submit = opts.submit || false;
    this.preventPropagation = opts.preventPropagation || false;
  }

  render() {
    this.$el.html(buttonTmpl(this));
    this.$el.find('button').click((evt) => {
      evt.preventDefault();
      this.preventPropagation? evt.stopPropagation() : $.noop;
      this.publish('click', this.id);
    });
    return this.$el.html();
  }
};

module.exports = Button;
