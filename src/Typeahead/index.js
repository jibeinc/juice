'use strict';

// Extends BaseTypeahead by adding:
//
// - the concept of "active"
// - the use of arrow keys/enter to pick from the results list
// - blur/focus events to close/open the results list
// - add highlights for partial matches
// - ESC key forces blur
// - point to click from results list and hover highlight
// - hover highlight renders list view results on top of page instead of pushing elements down

// less
require('./styles.less');

// scripts
const _ = require('lodash');
const $ = require('jquery');
const BaseTypeahead = require('./BaseTypeahead');

const HIGHLIGHT_CLASS = 'ui-typeahead-highlight';

class Typeahead extends BaseTypeahead {
  constructor(el, opts = {}) {
    opts.renderItem = (item) => {
      return this.renderItem(item);
    };
    super(el, opts);
    this.fixedResults = opts.fixedResults || [];
    this.allowFreeForm = opts.allowFreeForm || false;
    this.displayProperty = opts.displayProperty || 'displayName';
    return this;
  }

  /**
   * Show of hide the listView depending on if active is true or false, set isActive
   * @param v The boolean for whether active or not
   * @returns {boolean|*}
   */
  active(v) {
    if (_.isBoolean(v)) {
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
    this.textInput.$el.find('input').on('focus', () => {
      this.active(true);
    });
    this.textInput.$el.find('input').on('blur', () => {
      this.active(false);
    });

    $(document).click((evt) => {
      if (this.$el.find($(evt.target)).length === 0 && $(evt.target)[0].tagName !== 'input') {
        this.textInput.$el.find('input').blur();
      }
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
          this.active(false);
          break;

        default:
          break;
      }
    });
  }

  decrementHighlight() {
    this.highlightIndex = !_.isFinite(this.highlightIndex) ? this.resultsListView.$el.find('li').length - 1 : this.highlightIndex - 1;
    this.normalizeHighlightIndex();
    this.renderHighlight();
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

  handleTextInputUpdates() {
    // when text input gets a new value, update typeahead:
    this.textInput.subscribe((v) => {
      this.highlightIndex = null;
      if (v === '') {
        this.setInternal({});
      }
    });

    super.handleTextInputUpdates();
  }

  incrementHighlight() {
    this.highlightIndex = !_.isFinite(this.highlightIndex) ? 0 : this.highlightIndex + 1;
    this.normalizeHighlightIndex();
    this.renderHighlight();
  }

  normalizeHighlightIndex() {
    const length = this.resultsListView.$el.find('li').length;
    this.highlightIndex = (this.highlightIndex + length) % length;
  }

  refreshResults(cb) {
    return super.refreshResults((results) => {
      return cb(results.concat(this.fixedResults));
    });
  }

  render() {
    super.render();

    // layer on our new behavior - hiding/showing results when user blurs/focuses
    this.resultsListView.$el.hide();
    this.attachFocusEvents();

    // we also want to let you pick results from just the keyboard
    this.attachKeyEvents();

    return this.$el.html();
  }

  renderHighlight() {
    // remove the highlight
    this.resultsListView.$el.find('.' + HIGHLIGHT_CLASS).removeClass(HIGHLIGHT_CLASS);

    // add it to the right index
    this.resultsListView.$el.find('li').eq(this.highlightIndex).addClass(HIGHLIGHT_CLASS);
  }

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
