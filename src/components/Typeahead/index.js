'use strict';

// Extends PrettyTypeahead by adding:
//
// - support for results as objects instead of just simple values (selection value isn't just display string)
// - TODO: option to force user to pick from dropdown or to let them type in freely also
// - TODO: support for fixed result items

// scripts
const $               = require('jquery');
const PrettyTypeahead = require('../PrettyTypeahead');

class Typeahead extends PrettyTypeahead {
  constructor(el, opts) {
    super(el, opts);
    this.allowFreeForm = opts.allowFreeForm || false;
    this.displayProperty = opts.displayProperty || 'displayName';
  }

  getDisplayValue(item) {
    if (typeof item === 'object') {
      item = item[this.displayProperty];
    }
    return item;
  }

  renderItem(item) {
    return super.renderItem(this.getDisplayValue(item));
  }

  handleSelection(selection) {
    this.textInput.set(this.getDisplayValue(selection));
    this.set(selection);
  }

  selectByIndex() {
    if (!this.active()) {
      return;
    }

    super.selectByIndex();

    if (this.allowFreeForm && this.resultsListView.results.length === 0) {
      this.handleSelection(this.textInput.get());
    }
  }
}

module.exports = Typeahead;
