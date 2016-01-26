'use strict';

// Extends PrettyTypeahead by adding:
//
// - support for results as objects instead of just simple values (selection value isn't just display string)
// - option to force user to pick from dropdown or to let them type in freely also
// - support for fixed result items

// scripts
const $               = require('jquery');
const PrettyTypeahead = require('./PrettyTypeahead');

class Typeahead extends PrettyTypeahead {
  constructor(el, opts={}) {
    super(el, opts);
    this.fixedResults    = opts.fixedResults    || [];
    this.allowFreeForm   = opts.allowFreeForm   || false;
    this.displayProperty = opts.displayProperty || 'displayName';
    return this;
  }

  refreshResults(cb) {
    return super.refreshResults((results) => {
      return cb(results.concat(this.fixedResults));
    });
  }

  handleSelection(selection) {
    let runSelection = true;
    if (selection && selection.preSelectHook) {
      runSelection = selection.preSelectHook.apply(this, [selection]);
    }

    if (runSelection) {
      console.log('proceed with selection', selection);
      this.set(selection);
    }
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

  handleTextInputUpdates() {
    // when text input gets a new value, update typeahead:
    this.textInput.subscribe((v) => {

      if (v === '') {
        this.setInternal({});
      }

      else {
        super.handleTextInputUpdates();
      }
    });
  }}

module.exports = Typeahead;
