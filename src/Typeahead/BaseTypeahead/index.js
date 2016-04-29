'use strict';

const containerHTML = require('./baseTypeahead.html');
const BaseComponent = require('../../BaseComponent');
const TextInput = require('../../TextInput');
const ListView = require('../../ListView');
const assert = require('../../assert.js');
const Utils = require('../../Utils.js');

/**
 * Handles just the absolute core behavior of a typeahead
 *
 * 1. a text input
 * 2. a list view of results based on current text
 *
 * ==============================================================
 * its recommended using the child class `Typeahead` in your UI's
 * ==============================================================
 */
class BaseTypeahead extends BaseComponent {
  /**
   * Creates a new BaseTypeahead component
   * @param {string} el - The selector for the element to put the BaseTypeahead in
   * @param {function} fetch - The function to call to fetch/refresh results
   * @param {object} opts - The options for the component
   * @param {object} opts.textInputOpts - The options to pass to the TextInput
   */
  constructor(el, fetch, opts = {}) {
    super(el, opts);

    Object.assign(this, {
      fetch,
      textInputOpts: opts.textInputOpts || {}
    });

    assert($.isFunction(this.fetch), 'typeahead requires a fetch method');

    this.$el.append(containerHTML);

    // create sub-components
    this.textInput = this.setupTextInput(this.textInputOpts);
    this.resultsListView = this.setupListView(opts);

    // handle their subscribe methods
    this.handleListViewUpdates();
    this.handleTextInputUpdates();
  }

  /**
   * Watch the list view, and set the textInput and Typeahead when a selection is made in the list
   */
  handleListViewUpdates() {
    // when an item is picked from the list view:
    this.resultsListView.subscribe((evt) => {
      if (evt === 'refresh') {
        return;
      }

      // update text input with this value, set typeahead internal value
      this.handleSelection(evt);
    });
  }

  /**
   * Subscribe to the textInput, and when the value changes, refresh the resultsListView
   */
  handleTextInputUpdates() {
    this.textInput.subscribe(() => {
      this.resultsListView.refresh();
    });
  }

  /**
   * Set the value to the selection
   * @param {*} selection - The value selected
   */
  handleSelection(selection) {
    this.set(selection);
  }

  /**
   * Gets the current value
   * @returns {string} The current value of the BaseTypeahead or empty string
   */
  get() {
    return this.value || '';
  }

  /**
   * Checks if item is an object and, if it is, grabs the display value
   * @param {string|object} item The item to check the display value of
   * @returns {string} The display value
   */
  getDisplayValue(item) {
    if (Utils.isPlainObject(item)) {
      item = item[this.displayProperty];
    }
    return item;
  }

  /**
   * Gets the value of the TextInput that is inside the BaseTypeahead
   * @returns {string} The current text value in the TextInput
   */
  getTextInput() {
    return this.textInput.get();
  }

  /**
   * Fetches new results based on the current value of the TextInput
   * @param {function} cb - The callback to pass the results to
   */
  refreshResults(cb) {
    const textInputVal = this.textInput.get();
    if (textInputVal) {
      this.fetch(textInputVal, (results) => {
        cb(results);
      });
    }
    else {
      cb([]);
    }
  }

  /**
   * Renders the TextInput and refreshes the ListView
   * @returns {string} The html for the BaseTypeahead
   */
  render() {
    this.textInput.render();
    this.resultsListView.refresh();
    return this.$el.html();
  }

  /**
   * Small aux function that should be used instead of set when textInput does not
   * need to be updated
   * @param {string} v - The value to set
   */
  setInternal(v) {
    this.value = v;
    this.publish(this.get());
  }

  /**
   * Creates a new ListView to populate with suggestions
   * @param {object} opts - The options for the ListView
   * @returns {ListView} A new instance of ListView
   */
  setupListView(opts) {
    return new ListView(this.$el.find('.results-list-container'), {
      fetch: (cb) => {
        this.refreshResults(cb);
      },
      renderItem: opts.renderItem || null
    });
  }

  /**
   * Creates a new TextInput for use with the BaseTypeahead
   * @param {object} textInputOpts - The options to pass to the TextInput
   * @returns {TextInput} A new TextInput component
   */
  setupTextInput(textInputOpts) {
    return new TextInput(this.$el.find('.input-container'), textInputOpts);
  }

  /**
   * Sets the value of the BaseTypeahead
   * @param {*} v - The value to set BaseTypeahead to
   * @returns {BaseTypeahead} The instance of BaseTypeahead
   */
  set(v) {
    this.textInput.set(this.getDisplayValue(v));
    this.value = v;
    this.textInput.$el.find('input').trigger('blur');
    this.publish(this.get());
    return this;
  }
}

module.exports = BaseTypeahead;
