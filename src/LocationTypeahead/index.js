// # Location Search Typeahead
//
//   Extends `Typeahead` class to:
//
//   - add a "use my current location" icon to text input
//   - add fixed result that triggers "use my current location" on click

// scripts
const Typeahead = require('../Typeahead');

class LocationTypeahead extends Typeahead {
  constructor(el, opts={}) {

    // setup our clearing icon to be
    opts.textInputOpts = {
      icon: 'L',
      iconClearsValue: false
    };

    super(el, opts);
  }
}

module.exports = LocationTypeahead;
