'use strict';

// handle just the absolute core behavior of a typeahead
//
//   1. a text input
//   2. a list view of results based on current text

// ============================================================== //
// its recommended using the child class `Typeahead` in your UI's //
// ============================================================== //

// html
const containerHTML = require('./baseTypeahead.html');

// scripts
const BaseComponent = require('../../../BaseComponent');
const TextInput     = require('../../../TextInput');
const ListView      = require('../../../ListView');
const assert        = require('../../../assert.js');

class BaseTypeahead extends BaseComponent {
  constructor(el, opts) {
    super(el);
    this.results = [];
    this.fetch = opts.fetch;
    assert(typeof this.fetch === 'function');

    this.$el.append(containerHTML);
    this.textInput       = new TextInput(this.$el.find('.input-container'));
    this.resultsListView = new ListView(this.$el.find('.results-list-container'), {
      fetch: (cb) => {
        this.refreshResults(cb);
      },
      renderItem: opts.renderItem || null
    });

    // when an item is picked from the list view:
    this.resultsListView.subscribe((selection) => {
      console.log(selection);
      // update text input with this value, set typeahead internal value
      this.handleSelection(selection);
      this.textInput.$el.find('input').focus();
    });

    // when text input gets a new value:
    this.textInput.subscribe((term) => {
      // re render results list
      this.resultsListView.refresh();
    });
  }

  handleSelection(selection) {
    this.textInput.set(selection);
    this.set(selection);
  }

  set(v) {
    this.value = v;
    this.publish(this.get());
    return this;
  }

  render() {
    this.textInput.render();
    this.resultsListView.refresh();
    return this;
  }

  refreshResults(cb) {
    this.fetch(this.textInput.get(), (results) => {
      this.results = results;
      cb(results);
    });
  }
}

module.exports = BaseTypeahead;
