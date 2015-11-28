'use strict';

// # List View Item Factory
//
// - Generate a list view item DOM and associated scripts, support attaching
//   components to consumers generated html
//
// - Instantiated once per list, ::make() is called once per item

// TODO: consider making a BaseFactory class to house most of this

// scripts
const $      = require('jquery');
const assert = require('../../assert');

class ListViewItemFactory {
  constructor(opts={}) {
    assert(typeof opts.render === 'function');
    this.render = opts.render;
    this.controller = opts.controller || $.noop;
    this.components = [];
  }

  make(item, index) {
    // 1. get the generated html (consumer defines this)
    var itemHTML = this.render({
      item: item,
      index: index
    });

    var $context = $('<div></div>').html(itemHTML);

    // 2. now run the controller against that context
    // we delay here, in order to give the DOM time to actually render (happens on return)
    setTimeout(() => {
      this.controller(item, index);
    });

    // 3. return the final html
    return $context.html();
  }
};

module.exports = ListViewItemFactory;
