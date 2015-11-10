'use strict';

// TODO:
// - handle typeahead options as object
// - make typeahead internal value be the users choice from dropdown (when required) - not current text input value

// html
let typeaheadTmpl = require('./typeahead.dot');
let containerHTML = require('./container.html');

// scripts
let BaseComponent = require('../BaseComponent');
let TextInput     = require('../TextInput');
let ListView      = require('../ListView');
let assert        = require('../assert.js');

class TypeaheadComponent extends BaseComponent {
  constructor(el, opts) {
    super(el);
    this.fetch = opts.fetch;
    assert(typeof this.fetch === 'function');

    this.$el.append(containerHTML);

    this.textInput = new TextInput(this.$el.find('.input-container'));

    this.resultsListView = new ListView(this.$el.find('.results-list-container'), {
      fetch: (cb) => {
        this.refreshResults(cb);
      }
    });

    // when an item is picked from the list view:
    this.resultsListView.subscribe((selection) => {
      // update text input with this value
      this.textInput.set(selection);
    });

    // when text input gets a new value:
    this.textInput.subscribe((term) => {
      // update the typeaheads value to match, re render results list
      this.set(term);
      this.resultsListView.refresh();
    });
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
    this.fetch(this.get(), (results) => {
      this.results = results;
      cb(results);
    });
  }
}

module.exports = TypeaheadComponent;
