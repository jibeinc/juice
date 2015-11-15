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
  }

  render() {
    this.$el.html(buttonTmpl(this));
    this.$el.find('button').click(() => {
      this.publish('click', this.id);
    });
    return this;
  }
};

module.exports = Button;
