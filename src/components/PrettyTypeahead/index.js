'use strict';

// Extends BaseTypeahead by adding:
//
// - the concept of "active"
// - the use of arrow keys/enter to pick from the results list
// - blur/focus events to close/open the results list
// - add highlights for partial matches
// - TODO: configurable placeholder text (should prob go in `TextInput`)
// - TODO: i18n

// ==================================================== //
// use the child class `Typeahead` in your actual UI's! //
// ==================================================== //

// css
require('./styles.css');

// scripts
const $             = require('jquery');
const BaseTypeahead = require('../BaseTypeahead');

const HIGHLIGHT_CLASS = 'ui-typeahead-highlight';

class TypeaheadComponent extends BaseTypeahead {
  constructor(el, opts) {
    opts.renderItem = (item) => {
      return this.renderItem(item);
    };

    super(el, opts);
  }

  render() {
    super.render();

    // layer on our new behavior - hiding/showing results when user blurs/focuses
    this.resultsListView.$el.hide();
    this.attachFocusEvents();

    // we also want to let you pick results from just the keyboard
    this.attachKeyEvents();
  }

  active(v) {
    if (typeof v === 'boolean') {
      this.isActive = v;

      if (this.isActive) {
        this.onActive();
      } else {
        this.onInactive();
      }
    }

    return this.isActive;
  }

  onActive() {
    this.resultsListView.$el.show();
  }

  onInactive() {
    this.resultsListView.$el.hide();
    delete this.highlightIndex;
  }

  attachFocusEvents() {
    this.textInput.$el.find('input').on('focus', () => {
      this.active(true);
    });

    this.textInput.$el.find('input').on('blur', () => {
      this.active(false);
    });
  }

  renderItem(item) {
    // bold the matching part
    const originalText = String(item);
    const searchTerm   = this.textInput.get();
    let matchIndex   = -1;

    if (searchTerm.length !== 0) {
      matchIndex = originalText.indexOf(searchTerm);
    }

    if (matchIndex !== -1) {
      const start = matchIndex;
      const end   = matchIndex + this.textInput.get().length;

      item = originalText.substr(0, start);
      item += '<b>';
      item += originalText.substr(start, end);
      item += '</b>';
      item += originalText.substr(end);
    }

    return item;
  }

  attachKeyEvents() {
    this.highlightIndex;

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

        default:
          break;
      }
    });
  }

  selectByIndex() {
    if (this.active()) {
      this.resultsListView.$el.find('.' + HIGHLIGHT_CLASS).click();
      this.textInput.$el.find('input').blur();
    }
  }

  incrementHighlight() {
    this.highlightIndex = typeof this.highlightIndex === 'undefined'? 0 : this.highlightIndex + 1;
    this.normalizeHighlightIndex();
    this.renderHighlight();
  }

  decrementHighlight() {
    this.highlightIndex = typeof this.highlightIndex === 'undefined'? this.results.length - 1 : this.highlightIndex - 1;
    this.normalizeHighlightIndex();
    this.renderHighlight();
  }

  normalizeHighlightIndex() {
    this.highlightIndex = (this.highlightIndex + this.results.length) % this.results.length;
  }

  renderHighlight() {
    // remove the highlight
    this.resultsListView.$el.find('.' + HIGHLIGHT_CLASS).removeClass(HIGHLIGHT_CLASS);

    // add it to the right index
    this.resultsListView.$el.find('li').eq(this.highlightIndex).addClass(HIGHLIGHT_CLASS);
  }
}

module.exports = TypeaheadComponent;
