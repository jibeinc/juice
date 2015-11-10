'use strict';

// html
let typeaheadTmpl = require('./typeahead.dot');

// scripts
let BaseComponent = require('../BaseComponent');
let TextInput     = require('../TextInput');
let ListView      = require('../ListView');
let assert        = require('../assert.js');

class TypeaheadComponent extends BaseComponent {
  constructor(el, opts) {
    super(el, opts); // sets up the input
    this.results = opts.results || [];
    this.fetch = opts.fetch;
    assert(typeof this.fetch === 'function');
  }

  render() {
    this.textInput = new TextInput(this.$el, )

    this.resultsListView = new ListView(this.$el, {
      fetch: this.refreshResults
    });

    this.subscribe(() => {
      this.refreshResults();
    });

    return this;
  }

  refreshResults() {
    this.fetch(this.get(), (results) => {
      this.resultsListView.set(results);
    });
  }
}

module.exports = TypeaheadComponent;
