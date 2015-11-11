'use strict';

// TODO:
// - add concept of "active"
// - handle typeahead options as object
// - use arrow keys to pick from list
// - right now listview shows always, add blur/focus events to close/open it

// css
require('./styles.css');

// scripts
const $             = require('jquery');
const BaseTypeahead = require('./BaseTypeahead');

class TypeaheadComponent extends BaseTypeahead {
  constructor(el, opts) {
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
  }

  attachFocusEvents() {
    this.textInput.$el.find('input').on('focus', () => {
      this.active(true);
    });

    this.textInput.$el.find('input').on('blur', () => {
      this.active(false);
    });
  }

  attachKeyEvents() {
    this.highlightIndex;

    $(document).on('keydown', (evt) => {
      switch (evt.which) {
        case this.keyEvents.UP:
          this.decrementHighlight();
          evt.preventDefault();
          break;
        case this.keyEvents.DOWN:
          this.incrementHighlight();
          evt.preventDefault();
        default:
          break;
      }
    });
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
    this.resultsListView.$el.find('.typeahead-highlight').removeClass('typeahead-highlight');

    // add it to the right index
    this.resultsListView.$el.find('li').eq(this.highlightIndex).addClass('typeahead-highlight');
  }
}

module.exports = TypeaheadComponent;
