'use strict';

// # Fragment Factory
//
// - Generate a DOM fragment in memory, run a component controller
//   against this DOM context and return the final HTML
//
// - Consumer must define `::render` recieving data and returning HTML
//
// - Consumer can define a controller function, which recieves the same data as render
//   and will be run with the guarentee that the HTML returned from `::render` is available
//   to the controller in the DOM

// scripts
const $      = require('jquery');
const assert = require('./assert');

class BaseFragmentFactory {
  constructor(opts={}) {
    assert(typeof opts.render === 'function');
    this.render = opts.render;
    this.controller = opts.controller || $.noop;
  }

  make(data) {
    // 1. get the generated html (consumer defines this)
    var itemHTML = this.render({
      item: data.item,
      index: data.index
    });

    var $context = $('<div></div>').html(itemHTML);

    // 2. now run the controller against that context
    // we delay here, in order to give the DOM time to actually render (happens on return)
    setTimeout(() => {
      this.controller(data);
    });

    // 3. return the final html
    return $context.html();
  }
};

module.exports = BaseFragmentFactory;
