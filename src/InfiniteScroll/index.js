'use strict';

const $ = require('jquery');
const BaseComponent = require('../BaseComponent');

class InfiniteScroll extends BaseComponent {
  constructor(el, opts = {}) {
    super(el, {
      preserveChildElements: true
    });

    if (!opts.onScrollToBottom) {
      throw new Error('You must provide an onScrollToBottom function');
    }
    else {
      this.onScrollToBottom = opts.onScrollToBottom;
    }

    const $scrollTarget = opts.windowScroll ? $(window) : this.$el;

    $scrollTarget.scroll(() => {
      const scrollTop = $scrollTarget.scrollTop();
      const elementHeight = $scrollTarget.height();
      const elementScrollHeight = $scrollTarget[0].scrollHeight || $(document).height();
      const scrollTrigger = opts.scrollTrigger || 0.95;

      if (scrollTop / (elementScrollHeight - elementHeight) > scrollTrigger) {
        this.onScrollToBottom();
      }
    });

    return this;
  }


  render() {
    return this.$el.html();
  }
}

module.exports = InfiniteScroll;
