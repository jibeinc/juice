'use strict';

const $ = require('jquery');
const _ = require('lodash');
const BaseComponent = require('../BaseComponent');
const debounce = require('debounce');

/**
 * Class for implementing infinite scroll triggers and logic
 * @author Robbie Wagner
 */
class InfiniteScroll extends BaseComponent {
  /**
   * Creates a new InfiniteScroll component
   * @param {string} el - The selector for the element to apply InfiniteScroll to
   * @param {function} onScrollToBottom - The function to call when you have scrolled to the bottom of the container
   * @param {object} opts - The options for the component
   */
  constructor(el, onScrollToBottom, opts = {}) {
    super(el, {
      preserveChildElements: true
    });

    if (_.isFunction(onScrollToBottom)) {
      this.onScrollToBottom = onScrollToBottom;
    } else {
      throw new Error('You must provide an onScrollToBottom function');
    }

    const debounceWait = opts.debounceWait || 500;
    const $scrollTarget = opts.windowScroll ? $(window) : this.$el;

    $(window).scroll(debounce(() => {
      const scrollTop = $(window).scrollTop();
      const elementScrollHeight = $scrollTarget[0].scrollHeight || $(document).height();
      const scrollTrigger = opts.scrollTrigger || 0.95;

      if (scrollTop / elementScrollHeight > scrollTrigger) {
        this.onScrollToBottom();
      }
    }, debounceWait, false));
  }

  /**
   * Renders the html for infinite scroll
   * @returns {string} The html for the component
   */
  render() {
    return this.$el.html();
  }
}

module.exports = InfiniteScroll;
