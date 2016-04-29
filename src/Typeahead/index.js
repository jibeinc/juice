'use strict';

require('./styles.scss');

const $ = require('jquery');
const BaseTypeahead = require('./BaseTypeahead');
const HIGHLIGHT_CLASS = 'ui-typeahead-highlight';

/**
 * Extends BaseTypeahead by adding:
 * - the concept of "active"
 * - the use of arrow keys/enter to pick from the results list
 * - blur/focus events to close/open the results list
 * - add highlights for partial matches
 * - ESC key forces blur
 * - point to click from results list and hover highlight
 * - hover highlight renders list view results on top of page instead of pushing elements down
 */
class Typeahead extends BaseTypeahead {
  /**
   * Creates a new Typeahead component
   * @param {string} el - The selector for the element to put the Typeahead in
   * @param {function} fetch - The function to call to fetch/refresh results
   * @param {object} opts - The options for the component
   * @param {boolean} [opts.allowFreeForm] - A boolean indicating if free form input will be accepted
   * @param {string} [opts.displayProperty] - A string indicating the property name of the property to display
   * @param {*[]} [opts.fixedResults] - An array of results to always display
   */
  constructor(el, fetch, opts = {}) {
    opts.renderItem = (item) => {
      return this.renderItem(item);
    };

    super(el, fetch, opts);

    Object.assign(this, {
      allowFreeForm: opts.allowFreeForm || false,
      displayProperty: opts.displayProperty || 'displayName',
      fixedResults: opts.fixedResults || [],
      isActive: false
    });
  }

  /**
   * Show or hide the listView depending on if active is true or false, set isActive
   * @param {boolean} v - Active or not
   * @returns {boolean|*} if active is true or false
   */
  active(v) {
    if (typeof v === 'boolean') {
      this.isActive = v;

      if (this.isActive) {
        this.resultsListView.$el.show();
      } else {
        this.resultsListView.$el.hide();
        delete this.highlightIndex;
      }
    }

    return this.isActive;
  }

  /**
   * Setup focus events to set active to true when focused, and false when blurred
   */
  attachFocusEvents() {
    this.textInput.$el.find('input')
      .on('focus', () => {
        this.active(true);
      })
      .on('blur', () => {
        this.active(false);
      });

    this.resultsListView.$el.mousedown((evt) => {
      evt.preventDefault();
    });
  }

  /**
   * Set up events for pressing up, down, enter and escape
   */
  attachKeyEvents() {
    $(document).on('keydown', (evt) => {
      if (!this.active()) {
        return;
      }

      switch (evt.which) {
        case this.keyEvents.UP:
          this.decrementHighlight();
          evt.preventDefault();
          break;

        case this.keyEvents.DOWN:
          this.incrementHighlight();
          evt.preventDefault();
          break;

        case this.keyEvents.ENTER:
          this.selectByIndex();
          evt.preventDefault();
          break;

        case this.keyEvents.ESC:
          this.textInput.$el.find('input').blur();
          break;

        default:
          break;
      }
    });
  }

  /**
   * Called when navigating with the arrow keys to decrease the index of which list item is highlighted
   */
  decrementHighlight() {
    const highlightIndex = !Number.isFinite(this.highlightIndex) ? this.resultsListView.$el.find('li').length - 1 : this.highlightIndex - 1;
    this.normalizeHighlightIndex(highlightIndex);
    this.renderHighlight();
  }

  /**
   * Handle selection and call preSelectHook if it is defined
   * @param {*} selection - The selected item
   */
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

  /**
   * When text input gets a new value, update typeahead
   */
  handleTextInputUpdates() {
    this.textInput.subscribe((v) => {
      this.highlightIndex = null;
      if (v === '') {
        this.setInternal({});
      }
    });

    super.handleTextInputUpdates();
  }

  /**
   * Called when navigating with the arrow keys to increase the index of which list item is highlighted
   */
  incrementHighlight() {
    const highlightIndex = !Number.isFinite(this.highlightIndex) ? 0 : this.highlightIndex + 1;
    this.normalizeHighlightIndex(highlightIndex);
    this.renderHighlight();
  }

  /**
   * Ensure that highlight index is reset back to beginning if you exceed the number in the list
   * @param {number} highlightIndex - The index of the current highlighted item
   */
  normalizeHighlightIndex(highlightIndex) {
    const length = this.resultsListView.$el.find('li').length;
    this.highlightIndex = (highlightIndex + length) % length;
  }

  /**
   * Grabs new results from the data source
   * @param {function} cb - the callback to pass the results to
   * @returns {Promise} Return the promise
   */
  refreshResults(cb) {
    return super.refreshResults((results) => {
      return cb(results.concat(this.fixedResults));
    });
  }

  /**
   * Apply event listeners and render html for the component
   * @returns {string} The html for the component
   */
  render() {
    super.render();

    // layer on our new behavior - hiding/showing results when user blurs/focuses
    this.resultsListView.$el.hide();
    this.attachFocusEvents();

    // we also want to let you pick results from just the keyboard
    this.attachKeyEvents();

    return this.$el.html();
  }

  /**
   * Apply highlight to correct element in the list based on the current highlightIndex
   */
  renderHighlight() {
    // remove the highlight
    this.resultsListView.$el.find('.' + HIGHLIGHT_CLASS).removeClass(HIGHLIGHT_CLASS);

    // add it to the right index
    this.resultsListView.$el.find('li').eq(this.highlightIndex).addClass(HIGHLIGHT_CLASS);
  }

  /**
   * Handles the rendering of a single item
   * @param {string|object} item - The item to render
   * @returns {string} The display value of the item
   */
  renderItem(item) {
    // bold the matching part
    const originalText = String(this.getDisplayValue(item));
    const searchTerm = this.textInput.get() || '';
    let matchIndex = -1;

    if (searchTerm.length !== 0) {
      matchIndex = originalText.indexOf(searchTerm);
    }

    if (matchIndex >= 0) {
      const start = matchIndex;
      const end = start + searchTerm.length;

      item = originalText.substring(0, start);
      item += '<b>';
      item += originalText.substring(start, end);
      item += '</b>';

      if (end < originalText.length) {
        item += originalText.substring(end);
      }
    }

    return this.getDisplayValue(item);
  }

  /**
   * Make a selection based on the index that is highlighted
   */
  selectByIndex() {
    if (!this.active()) {
      return;
    }

    if (this.active()) {
      const highlighted = this.resultsListView.$el.find('.' + HIGHLIGHT_CLASS);
      if (highlighted.length) {
        highlighted.click();
      }
      else {
        const valueToSet = this.textInput.get();
        if (valueToSet)
          this.set(valueToSet);
      }
    }

    if (this.allowFreeForm && this.resultsListView.results.length === 0) {
      this.handleSelection(this.textInput.get());
    }
  }
}

module.exports = Typeahead;
