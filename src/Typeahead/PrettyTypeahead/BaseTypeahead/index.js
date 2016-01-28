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
const $ = require('jquery');
const TextInput = require('../../../TextInput');
const ListView = require('../../../ListView');
const assert = require('../../../assert.js');

class BaseTypeahead extends BaseComponent {
  constructor(el, opts = {}) {
    super(el, opts);

    Object.assign(this, {
      fetch: opts.fetch,
      textInputOpts: opts.textInputOpts || {}
    });

    assert(typeof this.fetch === 'function', 'typeahead requires a fetch method');

    this.$el.append(containerHTML);

    // create sub-components
    this.textInput = this.setupTextInput(this.textInputOpts);
    this.resultsListView = this.setupListView(opts);

    // handle their subscribe methods
    this.handleListViewUpdates();
    this.handleTextInputUpdates();
  }

  setupTextInput(textInputOpts) {
    return new TextInput(this.$el.find('.input-container'), textInputOpts);
  }

  setupListView(opts) {
    return new ListView(this.$el.find('.results-list-container'), {
      fetch: (cb) => {
        this.refreshResults(cb);
      },
      renderItem: opts.renderItem || null
    });
  }

  handleListViewUpdates() {
    // when an item is picked from the list view:
    this.resultsListView.subscribe((evt) => {
      if (evt === 'refresh') {
        return;
      }

      // update text input with this value, set typeahead internal value
      this.handleSelection(evt);
      this.textInput.$el.find('input').focus();
    });
  }

  handleTextInputUpdates() {
    // when text input gets a new value:
    this.textInput.subscribe(() => {
      // re render results list
      this.resultsListView.refresh();
    });
  }

  handleSelection(selection) {
    this.set(selection);
  }

  getDisplayValue(item) {
    if ($.isPlainObject(item)) {
      item = item[this.displayProperty];
    }
    return item;
  }

  // small aux function that should be used instead of set when textInput does not
  // need to be updated
  setInternal(v) {
    this.value = v;
    this.publish(this.get());
  }

  get() {
    return this.value || '';
  }

  getTextInput() {
    return this.textInput.get();
  }

  set(v) {
    this.textInput.set(this.getDisplayValue(v));
    this.value = v;
    this.publish(this.get());
    return this;
  }

  render() {
    this.textInput.render();
    this.resultsListView.refresh();
    return this.$el.html();
  }

  refreshResults(cb) {
    this.fetch(this.textInput.get(), (results) => {
      cb(results);
    });
  }
}

module.exports = BaseTypeahead;
